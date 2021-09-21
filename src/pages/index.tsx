import { GetServerSideProps } from "next"
import { useState } from "react"
import api from "../../utils/api"

export const getServerSideProps: GetServerSideProps = async (context) => {

  // const todos = await api.get("/getTodos") fazer assim primeiro
  const {data: todos} = await api.get("/getTodos")
  // console.log(todos)
  return {
    props: {...todos}
  }     
}

interface Todo {
  id?: string;
  task: string;
  createdAt: Date;
  status: boolean;
}

interface PageProps {
  todos: Todo[];
} 
// export default function Home(props) {
export default function Home({todos: serverTodos}: PageProps) {  

  console.log(serverTodos)

  const [todos, setTodos] = useState<Todo[]>(serverTodos)
  const [inputTodo, setInputTodo] = useState("")


  const hanbleInputChange = (e) => {
    setInputTodo(e.target.value)
    // console.log(e.target.value)
  }

  const handleCreateTodo = async () => {
    const currentTodos = [...todos]
    // const newTodo = {
    //   task: inputTodo,
    //   createdAt: new Date(),
    //   status: false,
    // }
    const {data: newTodo } = await api.post("/createTodo", {task: inputTodo})
    currentTodos.push(newTodo)
    setInputTodo("")
    setTodos(currentTodos)

  }

  const handleUpdateTodo = async (id: string)=> {
    const updateTodos = todos.map(todo => todo.id === id ? {...todo, status: !todo.status} : todo)
    setTodos(updateTodos)
    const currentTodo = updateTodos.find((todo)=> todo.id === id);
    await api.post("/updateTodos", {id, status: currentTodo.status})
  }

  return (
    <div className="flex flex-col items-center h-screen bg-yellow-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-14">Projeto TODO</h1>
      <h2 className="mb-10 text-2xl font-medium text-gray-700">Criar to-do</h2>

      <div>
      <input type="text" onChange={hanbleInputChange} value={inputTodo} className="border-2 border-blue-400 rounded-md outline-none focus:border-green-500" />
      <button onClick={handleCreateTodo} className="px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800">Criar</button>


      </div>
     
      <ul className="mt-6">
       {todos.map((todo) => (
         <li onClick={()=> handleUpdateTodo(todo.id)} key={todo.id || todo.task} className="px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300">
           <p className={`${todo.status && "line-through"}`}>{todo.task}</p>
          </li>
       ))}
      </ul>
    </div>
  )
}
