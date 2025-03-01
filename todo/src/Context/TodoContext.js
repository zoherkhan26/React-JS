import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "First Todo",
            completed: false
        }
    ],

    addTodo : (todo) => {},
    updateTodo: (id, todo)  => {}, 
    deleteTodo: () => {}, 
    toggleComplete: () => {}

})


export const useTodo = () => {
         return   useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider