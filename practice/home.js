
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

// converting sync function into async function

function doSomeSynchronousOperation(){
    return 2
}

function synchronousFunction() {
    const result =doSomeSynchronousOperation();
    return result;
  }
  
  // Asynchronous function (after conversion)
  async function asynchronousFunction() {
    return new Promise((resolve, reject) => {
      try {
        const result = doSomeSynchronousOperation();
        resolve(result); // Resolve the Promise with the result
      } catch (error) {
        reject(error); // Reject the Promise if an error occurs
      }
    });
  }

  const ans=async ()=>{
    try {
        let x=await asynchronousFunction()
        console.log(x)
    } catch (error) {
        console.log(error)
    }
  } 
  
  ans()




