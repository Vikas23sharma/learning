
let but=document.querySelector("#button")
let el=document.getElementById("numbertaker")

but.addEventListener("click",()=>{
    
    let val=el.value
    console.log(val)
    el.value=""

    const prom=new Promise((res,rej)=>{
        if(val%2==0){
            res("Number is Even Stevens")
        }
        else{
            let err=new Error("Number is Odd")
            rej(err)
        }
    })

   console.log(prom)
})

