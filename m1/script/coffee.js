document.querySelector("form").addEventListener("submit",MyFun);




const myData = JSON.parse(localStorage.getItem("customer")) || [];

function MyFun(e) {
 e.preventDefault();
 const customer = document.getElementById("customerName").value;
 const coffee = document.getElementById("coffeeType").value;
 const size = document.getElementById("size").value;
 const quantity = document.getElementById("quantity").value;
//  const totalprice = document.getElementById("totalPrice").innerText;
var totalprice=10;

if(coffee == "Americano" && size== "Small"){
 var  totalprice = quantity*100
}
else if(coffee == "Americano" && size== "Medium"){
   var  totalprice = quantity*200
}
else if(coffee == "Americano" && size== "Large"){
   var  totalprice = quantity*300
}
else if(coffee == "Expresso" && size== "Small"){
   var  totalprice = +quantity*70
   console.log(totalprice)
}
else if(coffee == "Expresso" && size== "Medium"){
   var  totalprice = +quantity*140
}
else if(coffee == "Expresso" && size== "Large"){
   var   totalprice = quantity*210
}
else if(coffee == "Cappuccino" && size== "Small"){
   var   totalprice = quantity*50
}
else if(coffee == "Cappuccino" && size== "Medium"){
   var   totalprice = quantity*100
}
else if(coffee == "Cappuccino" && size== "Large"){
   var  totalprice = quantity*150
}

const obj = {
   customer,
   coffee,
   size,
   quantity,
   totalprice
}
console.log(obj)
myData.push(obj);


localStorage.setItem("customer",JSON.stringify(myData));
}