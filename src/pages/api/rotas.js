import { PrismaClient } from '@prisma/client'

export default async (req, res) => {
  try {
    const data = req.body
    const data2 = req.body

    const prisma = new PrismaClient()

    const newTodo = await prisma.todo.create({
      data: { task: data.task, status: false },
    })

    res.status(200).json({ newTodo })
  } catch (err) {
    res.status(500).json(err)
  }
}
