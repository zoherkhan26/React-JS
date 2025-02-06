import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function Todolist({ todo }) {

    const [isEditable, setisEditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const edittodo = () => {
        if(todoMsg.trim().length === 0) {
            deleteTodo(todo.id);
            return
        }
        
    
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setisEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-white"}`}

        >
            <input type="checkbox"
                className='cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input type="text"
                className={`text-black border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"}`}
                readOnly={!isEditable}
                value={todoMsg}
                onChange={(e) => settodoMsg(e.target.value)}

            />

            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={(e) => {
                if(todo.completed) return;
                if(isEditable) {
                    edittodo()
                }
                else 
                setisEditable((prev) => !prev)
            }
            }
            disabled = {todo.completed}
            >{isEditable ? 'save' : 'edit'}</button>

            <button
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            onClick={() => (deleteTodo(todo.id))}
            >❌</button>

        </div>
    )
}

export default Todolist