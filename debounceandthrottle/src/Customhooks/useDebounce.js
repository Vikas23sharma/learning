import { useRef } from "react"

export const useDebounce = (func, delay) => {

    let { current: id } = useRef()

    //useDebounce returning a function
    return (movie) => {
        id && clearTimeout(id)

        id = setTimeout(() => {
            func(movie)
        }, delay)
    }
}