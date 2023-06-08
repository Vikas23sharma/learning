import React, { useState } from 'react'
import { useThrottle } from '../Customhooks/useThrottle'

const Throttleinput = () => {
    const [movies, setMovies] = useState([])
    const handlesearch = (movie) => {
        fetch(`http://www.omdbapi.com/?apikey=51ecb9c8&s=${movie}`)
            .then((res) => res.json())
            .then((res) => {
                // setMovies(res.Search)
                console.log(res)
                if (res.Response === "True") { 
                    setMovies(res.Search)
                     }
            })
    }

    const throttle = useThrottle(handlesearch, 200)
    return (
        <div>
            <input placeholder='Throttle Search Movies Here' onChange={(e) => throttle(e.target.value)} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>{
                movies.map((el) => {
                    return <div key={el.imdbID}>
                        <img src={el.Poster} alt='1' />
                        <h1>{el.Title}</h1>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default Throttleinput
