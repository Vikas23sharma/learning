/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const bike=document.getElementById("jawa")
const btn=document.getElementById("btn")
const cont=document.getElementById("cont")

btn.addEventListener("click",function(){
     cont.setAttribute("border","1px solid red")
     console.log(1)
})