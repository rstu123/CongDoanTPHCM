'use server'

import User from '@/models/users'
import connectDB from '@/lib/mongo/mongodb'

export async function getPosts() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await User.find()));

    throw new Error('Error')

    return { data }
  } catch (err) {
    return { errMsg: err.message }
  }
}
