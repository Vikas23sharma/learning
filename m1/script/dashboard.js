const Data = JSON.parse(localStorage.getItem("customer")) || [];
Dashboard(Data);


// sorting functionality here

document.querySelector("#sort").addEventListener("change",SortFun);


function SortFun(){
    if(document.querySelector("#sort").value==="asc"){
      const Asc =   Data.sort((a,b)=>{ 
      return  a.quantity-b.quantity
    });
      Dashboard(Asc);
    }else if(document.querySelector("#sort").value === "desc"){
        const Desc = Data.sort((a,b)=>{ 
            return  b.quantity-a.quantity
          });
        Dashboard(Desc);
    }
}

// filtering functionality by coffee type


document.querySelector("#filterCoffee").addEventListener("change",()=>{
   const FilterCoffee = Data.filter((ele)=>{
     return document.querySelector("#filterCoffee").value == ele.coffee;
   })
   Dashboard(FilterCoffee);
});



// filtering functionality by size


document.querySelector("#filterSize").addEventListener("change",()=>{
  const FilterSize = Data.filter((ele)=>{
    return document.querySelector("#filterSize").value == ele.size;
  })
  Dashboard(FilterSize);
});






function Dashboard(Data){
    document.querySelector("tbody").innerHTML="";
    Data.forEach((ele,index)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = ele.customer;
        const td2 = document.createElement("td");
        td2.innerText = ele.coffee;
        const td3 = document.createElement("td");
        td3.innerText = ele.size;
        const td4 = document.createElement("td");
        td4.innerText = ele.quantity;
        const td5 = document.createElement("td");
        td5.innerText = ele.totalprice;
        const edit = document.createElement("td");
        edit.innerText = "Edit"
        edit.addEventListener("click",()=>{
          console.log(ele)
        })
        const Delete = document.createElement("td");
        Delete.innerText = "Delete";
        Delete.addEventListener("click",() => {
            Data.splice(index,1);
            localStorage.setItem("customer",JSON.stringify(Data));
            Dashboard(Data);
        })
    
        tr.append(td1,td2,td3,td4,td5,edit,Delete);
    
        tbody.append(tr);
    
    })
}

