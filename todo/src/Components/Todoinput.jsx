import React, { useState } from 'react'

const Todoinput = ({status}) => {
    const [text, setText] = useState("")
   
    let todos = JSON.parse(localStorage.getItem("todos")) || []

    const handleAddTodo = () => {
        const todo = {
            task: text,
            status: status
        }
        setText("")
        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Task' />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default Todoinput
