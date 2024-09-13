/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from "next";

import { verifyToken } from "@/middlewares";
import connectMongoDB from "@/lib/mongo/mongodb";
import News from "@/models/news";
import { message, status } from "@/constant";

const formatedNew = (NewContainer: {
  image: any;
  label: any; _id: any;
}) => {
  return {
    id: NewContainer._id,
    label: NewContainer.label,
    image: NewContainer.image
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    await connectMongoDB();

    if (req.method === 'POST') {
      try {
        const news = new News({
          label: req.body.label,
          image: req.body.image
        })

        await news.save()
        const getNews = formatedNew(news)

        return res.status(status.CREATED).json({ message: message.CREATED, new: getNews });
      } catch (err) {
        console.log(err)

        return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err })
      }
    } else if (req.method === 'GET') {
      try {
        const news = await News.aggregate([
          {
            $addFields: {
              id: '$_id'
            }
          },
          {
            $project: {
              _id: 0,
              id: 1,
              label: { $ifNull: ['$label', ''] },
              image: { $ifNull: ['$image', ''] }
            }
          }
        ]);

        return res.status(status.OK).json({ message: message.OK, news: news });
      } catch (err) {
        return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err })
      }
    } else if (req.method === 'PUT') {
      try {
        const news = await News.findById(req.body.topicId);

        if (!news) {
          return res.status(status.NOT_FOUND).json({ message: message.ERROR.NOT_FOUND })
        } else if (!req.body.label) {
          return res.status(status.BAD_REQUEST).json({ message: message.ERROR.MISS_FIELD })
        }
        news.label = req.body.label

        await news.save()
        const getNew = formatedNew(news)

        res.status(status.OK).json({ message: message.OK, new: getNew });
      } catch (err) {
        res.status(status.BAD_REQUEST).json({ message: message.ERROR.SERVER, err });
      }
    } else if (req.method === 'DELETE') {
      try {
        const news = await News.findById(req.body.newsId);

        if (!news) {
          return res.status(status.NOT_FOUND).json({ message: message.ERROR.NOT_FOUND })
        }
        await news.deleteOne()

        return res.status(status.NO_CONTENT).json({ message: '' })

      } catch (err) {
        res.status(status.BAD_REQUEST).json({ message: message.ERROR.SERVER, err });
      }
    } else {
      return res.status(status.NOT_ALLOW).json({ message: message.ERROR.NOT_ALLOWED });
    }
  } catch (err) {

    return res.status(status.ERROR).json({ message: message.ERROR.SERVER, err });
  }
}

export default handler
