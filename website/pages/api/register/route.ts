/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'

import { status, message } from "@/constant";
import connectMongoDB from "@/lib/mongo/mongodb";
import Token from "@/models/tokens"
import User from "@/models/users";
import { generateToken } from "@/middlewares";
import Role from "@/models/roles";

const formateduser = (user: {
  phone: any;
  password: any;
  email: any;
  username: any; _id: any;
}) => {
  return {
    id: user._id,
    username: user.username,
    email: user.email,
    password: user.password,
    phone: user.phone
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectMongoDB()
      const { username, email, password, phone } = req.body;
      const userRole = await Role.findOne({ name: 'User' }); // Replace 'User' with the appropriate role name.
         if (!userRole) {
            return res.status(status.BAD_REQUEST).json({ message: "Invalid role" });
          }


      if (!username) {
        return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD });
      } else if (!email) {
        return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD });
      } else if (!password) {
        return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD });
      } else if (!phone) {
        return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD });
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User({ username, email, password: hashedPassword, role: userRole })

      await user.save()
      const getUser = formateduser(user)
      //token
      const tokens = generateToken(user);
      const newToken = new Token({
        user: user._id,
        token: tokens.token,
        tokenExpiration: tokens.expiresAt
      });

      await newToken.save();

      return res.status(status.CREATED).json({ message: message.CREATED, user: getUser, token: newToken.token });
    } catch (err) {
      return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err });
    }
  } else {
    // Handle other HTTP methods (e.g., GET, PUT, DELETE) if needed
    return res.status(status.NOT_ALLOW).json({ message: message.ERROR.NOT_ALLOWED });
  }
}

export default handler
