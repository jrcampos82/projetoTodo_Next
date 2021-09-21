import { PrismaClient } from '@prisma/client'
import type { NextApiResponse, NextApiRequest } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const { id, status } = req.body

    const prisma = new PrismaClient();

    const todos = await prisma.todo.update({
        where: {id: id},
        data: {status: status}
    })

    res.status(200).json({ todos })
  } catch (err){
    res.status(500).json(err)
  }
}