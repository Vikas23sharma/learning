/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const bike = document.getElementById("jawa")
const btn = document.getElementById("btn")


btn.addEventListener("click", function () {
    const cont = document.getElementById("cont")
    const dialog=document.querySelector('dialog')
    dialog.showModal()
    const closebtn = document.getElementById("close")
    cont.setAttribute("style", "display:block")
    closebtn.addEventListener("click",function(){
        dialog.close()
        cont.setAttribute("style", "display:none")
    })
    console.log(1)
})