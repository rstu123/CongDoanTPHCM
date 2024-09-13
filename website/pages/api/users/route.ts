/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'

import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/users";
import { message, status } from "@/constant";
import Token from "@/models/tokens";
import { generateToken } from "@/middlewares";
import Role from "@/models/roles";

const formateduser = (user: {
  password: any;
  email: any;
  phone: any;
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
  try {
    await connectMongoDB()

    if (req.method === 'POST') {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const role = await Role.findById(user.role)
        const roleName = role.roleName
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user) {
          return res.status(status.NOT_FOUND).json({ message: message.ERROR.NOT_FOUND })
        } else if (!password) {
          return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD })
        } else if (isMatch) {
          await Token.deleteOne({ user: user._id })
          const tokens = generateToken(user)
          const newToken = new Token({
            user: user._id,
            token: tokens.token,
            tokenExpiration: tokens.expiresAt
          })

          await newToken.save()
          const getUser = formateduser(user)

          return res.status(status.OK).json({ message: message.LOGIN, user: getUser, token: newToken.token });
        } else {
          return res.status(status.UNAUTHORIZED).json({ message: message.ERROR.INVALID })
        }


      } catch (err) {

        return res.status(500).json({ message: 'Error', err });
      }
    } else if (req.method === 'GET') {
      try {
        const users = await User.aggregate([
          {
            $lookup: {
              from: 'roles',
              localField: 'role',
              foreignField: '_id',
              as: 'roleDetails'
            }
          },
          {
            $addFields: {
              id: '$_id',
              role: { $arrayElemAt: ['$roleDetails.roleName', 0] }
            }
          },
          {
            $project: {
              _id: 0,
              id: 1,
              username: { $ifNull: ['$username', ''] },
              email: { $ifNull: ['$email', ''] },
              phone: { $ifNull: ['$phone', ''] },
              password: { $ifNull: ['$password', ''] },
              role: { $ifNull: ['$role', ''] },
            }
          }
        ])

        return res.status(status.OK).json({ message: message.OK, users: users })
      } catch (err) {
        return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err });
      }
    } else if (req.method === 'PUT') {
      try {
        const userId = req.body.id;
        const user = await User.findById(userId)

        if (!user) {
          return res.status(status.NOT_FOUND).json({ message: message.ERROR.NOT_FOUND })
        } else if (!req.body.username || !req.body.phone) {
          return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD })
        }
        user.username = req.body.username
        user.phone = req.body.phone

        await user.save()
        const getUser = formateduser(user)

        return res.status(status.OK).json({ message: message.OK, users: getUser })
      } catch (err) {
        return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err });
      }
    } else {
      // Handle other HTTP methods (e.g., GET, PUT, DELETE) if needed
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err })
  }
}


export default handler
