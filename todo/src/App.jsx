import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider, TodoContext } from './Context/TodoContext'
import { useTodo } from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import Todolist from './Components/Todolist'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => 
      [ {id: Date.now(), ...todo},...prev] 
  )

  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (prev.map((prevtodo) =>
    
      prevtodo.id  === id ? todo : prevtodo
    
    
  )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevs) => prevs.id !== id )) )
  }

  const toggleComplete = (id) => {
      setTodos((prevs) =>
         (prevs.map((prev) => 
          (prev.id === id ? {...prev, completed : !prev.completed } : prev
          )
        )
         )
      )
    }

    useEffect(() => {
   const  todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
    } , [])

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)) 
    }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div className='bg-[#172842] flex flex-col min-h-screen items-center py-8'>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
      <div className="mb-4"></div>
      <TodoForm/>
      </div>

      <div className="flex flex-wrap gap-y-3 w-full max-w-2xl  rounded-md shadow-slate-700 p-4 ">
      {
        todos.map((todo) => (
          <div key={todo.id}
          className='w-full max-w-2xl flex flex-col gap-4 '
          >
          <Todolist todo={todo}/>
          </div>
        )
        )
        
      }
        </div>
      
      </div >

    </TodoProvider>
  )
}

export default App
