import { useRef } from "react"


export const useThrottle = (func, delay) => {
    let { current: wait } = useRef(false)

    return (movie) => {
        if (wait) { return }

        func(movie)
        wait = true

        setTimeout(() => {
            wait = false
        }, delay)
    }
}