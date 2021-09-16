import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState("")


  const hanbleInputChange = (e) => {
    setInputTodo(e.target.value)
    // console.log(e.target.value)
  }

  const handleCreateTodo = () => {
    const currentTodos = [...todos]
    currentTodos.push(inputTodo)
    setTodos(currentTodos)

  }

  return (
    <div className="flex flex-col items-center h-screen bg-yellow-50">
      <h1 className="text-4xl text-gray-800 font-bold mb-14">Projeto TODO</h1>
      <h2 className="text-2xl mb-10 font-medium text-gray-700">Criar to-do</h2>

      <div>
      <input type="text" onChange={hanbleInputChange} className="border-2 border-blue-400 rounded-md outline-none focus:border-green-500" />
      <button onClick={handleCreateTodo} className="bg-blue-500 rounded-md text-lg px-4 mx-2 text-white mt-3 hover:bg-blue-800">Criar</button>


      </div>
     
      <ul className="mt-6">
       {todos.map((todo) => (
         <li key={todo} className="bg-white border-2 border-blue-400 rounded-lg px-3 py-1 cursor-pointer hover:bg-blue-300">{todo}</li>
       ))}
      </ul>
    </div>
  )
}
