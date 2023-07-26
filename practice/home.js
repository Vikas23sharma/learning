
let but = document.querySelector("#button")
let el = document.getElementById("numbertaker")

but.addEventListener("click", () => {

    let val = el.value
    console.log(val)
    el.value = ""

    const prom = new Promise((res, rej) => {
        if (val % 2 == 0) {
            res("Number is Even Stevens")
        }
        else {
            let err = new Error("Number is Odd")
            rej(err)
        }
    })

    console.log(prom)
})


let url = 'https://fakestoreapi.com/products'

function getData() {
    return fetch(url)
        .then(res => res.json())
        .catch((err) => console.log(err))
}

async function Data() {
    try {
        let data = await getData()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

Data()




