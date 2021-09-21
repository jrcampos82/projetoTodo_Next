import { PrismaClient } from '@prisma/client'
import type { NextApiResponse, NextApiRequest } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body

    const prisma = new PrismaClient()

    const newTodo = await prisma.todo.create({
      data: { task: data.task, status: false },
    })

    res.status(200).json({ ...newTodo })
  } catch (err) {
    res.status(500).json(err)
  }
}
