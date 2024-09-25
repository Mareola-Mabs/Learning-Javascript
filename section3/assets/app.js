// Objects,their Properties and Methods
const page = document.getElementsByTagName("p")
const btn = document.getElementById('btn')

btn.style.cssText="background:red; cursor:pointer; color:white; width:60px; border-radius:5px;"
btn.textContent="Enter"

var i = 0

const person={
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    nationality: "Nigerian",
    state: "Ondo"
}

hereMethod=()=>{
    i++
    console.log(page[0])
    if (i % 2 == 1){
        page[0].innerHTML +="<h2>You Clicked Me,</h2>"+"My Full Name is: "+person.firstName+" "+person.lastName+"<br><br>"+"My Nationality is: "+person.nationality
    }
    else{
        page[0].innerHTML =""
    }
}

btn.addEventListener("click", ()=>{
    return hereMethod()
})

const myInput = document.getElementById("myInput")

myInput.addEventListener("input",()=>{
    if (myInput.value !==""){
        document.getElementsByTagName("body")[0].style.backgroundColor="maroon"
    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundColor="white"
    }
})




