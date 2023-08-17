import React, { useEffect, useState } from 'react'

const Data = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])


    return (
        <div>
            
            {
                data.map(el => {
                    return <div>
                        <img style={{ width: "200px", height: "200px" }} src={el.image} alt="" />
                        <h1>{el.title}</h1>
                        <h2>{el.category}</h2>
                        <h2>{el.price}</h2>
                    </div>
                })
            }
        </div>
    )
}

export default Data
