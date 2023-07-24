import React, { useState } from 'react'
import Todoinput from '../Components/Todoinput'




const Todo = () => {
    const [status, setStatus] = useState(false)
    let [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])


    // 

  

    return (
        <div>
            <h1>Todo List</h1>
            <Todoinput status={status} todos={todos} setTodos={setTodos} />
            <div>
                {todos.map(el => {
                    return <div key={Math.random() + Date.now()} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <h1>{el.task}</h1>
                        <h1>{el.status ? "Completed" : "Pending"}</h1>
                        
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todo
