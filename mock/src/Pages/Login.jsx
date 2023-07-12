import React, { useContext, useEffect, useState } from 'react'

const Login = () => {

    const [data, setData] = useState([])
    const [sort, setSort] = useState("")
    const url = "https://fakestoreapi.com/products"

    const fetchData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)

            })
    }

    const handleSort = (value) => {
        if (value === "org") {
            fetchData()
        }
        if (value === "asc") {
            console.log(data)
            data.sort((a, b) => { return a.price - b.price })
            let sortdata = [...data]
            setData(sortdata)
        }
        else if (value === "desc") {
            data.sort((a, b) => { return b.price - a.price })
            let sortdata = [...data]
            setData(sortdata)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <select onChange={(e) => handleSort(e.target.value)}>
                <option value={"org"}>Sort BY</option>
                <option value={"asc"}>LTH</option>
                <option value={"desc"}>HTL</option>
            </select>
            {data.map((el) => {
                return <div key={el.id}>
                    <img src={el.image} height={"200px"} />
                    <h1>{el.title}</h1>
                    <h1>{el.price}</h1>
                </div>
            })}
        </div>
    )
}

export default Login
