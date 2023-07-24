import React, { useState } from 'react'
import Todoinput from '../Components/Todoinput'

const Todo = () => {
    const [status, setStatus] = useState(false)
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    const handleStatus = (el) => {
        setStatus(!el.status)
        // console.log("working")
        console.log(el)
        // console.log(todos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <Todoinput status={status} />
            <div>
                {todos.map(el => {
                    return <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <h1>{el.task}</h1>
                        <h1>{el.Status ? "Completed" : "Pending"}</h1>
                        <button onClick={() => { handleStatus(el) }} style={{ width: "10%", height: "15%" }}>{el.Status ? "Mark as Pending" : "Mark as Completed"}</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todo
