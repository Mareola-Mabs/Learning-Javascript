// Functions25
// function repeat(){
//     var number = prompt("Enter Your Age")
//     if (number === null){

//     }
//     else{
//         if(number == ""){
//             alert("You Did not Select Your Age")
//             repeat()
//         }
//         else if(number < 18){
//             alert("Not Qualified")
//             repeat()
//         }
//         else{
//             alert("Congrats")
//         }
//     }
// }
// repeat()



// Functions and Selecting Html Objects, handling events, etc
const checkbox = document.querySelector(".checkbox")
const price = document.querySelector(".price")
const qty = document.querySelector(".qty")
const cost = document.querySelector(".cost")

const jj = document.querySelector(".jj")

checkbox.addEventListener("click",()=>{
    if (checkbox.checked){
        price.value=2500
        cost.value=(price.value*qty.value)
    }
    else{
        price.value=""
        cost.value=""
    }
})

qty.addEventListener("input",()=>{
    if (checkbox.checked == false){
        cost.value=""
    }
    else{
        cost.value=(price.value*qty.value)
    }
})


jj.innerHTML="<h1>This is a boy</h1>"

// Calculator App
const addition = document.getElementById("addition")
const multiply = document.getElementById("multiply")
const subtract = document.getElementById("subtract")
const divide = document.getElementById("divide")

const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

const rs = document.getElementById("rs")


addition.addEventListener("click",()=>{
    rs.innerText=parseFloat(n1.value)+parseFloat(n2.value)
})

multiply.addEventListener("click",()=>{
    rs.innerText=(n1.value)*(n2.value)
})

subtract.addEventListener("click",()=>{
    rs.innerText=(n1.value)-(n2.value)
})

divide.addEventListener("click",()=>{
    rs.innerText=(n1.value)/(n2.value)
})



