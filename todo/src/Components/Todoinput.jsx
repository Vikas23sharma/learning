import React, { useState } from 'react'

const Todoinput = ({ status,todos,setTodos }) => {
    const [text, setText] = useState("")


    // 

    const handleAddTodo = () => {
        // console.log(status)
        const todo = {
            task: text,
            status: status
        }
        setText("")
        todos = [...todos, todo]
        localStorage.setItem("todos", JSON.stringify(todos))
        setTodos(todos)
    }
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Task' />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default Todoinput
