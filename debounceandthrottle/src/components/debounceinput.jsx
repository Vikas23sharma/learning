import React, { useState } from 'react'
import { useDebounce } from '../Customhooks/useDebounce'

const Debounceinput = () => {
    const [movies, setMovies] = useState([])
    const handlesearch = (movie) => {
        fetch(`http://www.omdbapi.com/?apikey=51ecb9c8&s=${movie}`)
            .then((res) => res.json())
            .then((res) => {
                setMovies(res.Search)
                console.log(res)
            })
    }
   
    // useDebounce returns a function which is stored in debounce variable

    const debounce = useDebounce(handlesearch, 10000)
    return (
        <div>
            <h1>Debounced Movies</h1>
            <input placeholder='Enter Movie Name' onChange={(e) => debounce(e.target.value)} />
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}}>{
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

export default Debounceinput
