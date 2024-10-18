// Getting the Buttons
const prev = document.querySelector('.cbt__prev')
const next = document.querySelector('.cbt__next')

// Getting the Questions
const cbt__question1 = document.querySelector('.cbt__question1')
const cbt__question2 = document.querySelector('.cbt__question2')
const cbt__question3 = document.querySelector('.cbt__question3')
const cbt__question4 = document.querySelector('.cbt__question4')

var i = 0


next.addEventListener('click', ()=>{
    i++

    switch(i){
        case 0:
            prev.style.cssText="display:none;"
            cbt__question1.style.display="block"
            cbt__question2.style.display="none"
            cbt__question3.style.display="none"
            cbt__question4.style.display="none"
            break;

        case 1:
            prev.style.cssText="display:block;"
            cbt__question1.style.display="none"
            cbt__question3.style.display="none"
            cbt__question4.style.display="none"
            cbt__question2.style.display="block"
            break;

        case 2:
            cbt__question2.style.display="none"
            cbt__question1.style.display="none"
            cbt__question4.style.display="none"
            cbt__question3.style.display="block"
            break;

        case 3:
            next.style.cssText="display:none;"
            cbt__question3.style.display="none"
            cbt__question1.style.display="none"
            cbt__question2.style.display="none"
            cbt__question4.style.display="block"
            break;
    }
    
})

prev.addEventListener('click', ()=>{
    i--

    switch(i){
        case 0:
            prev.style.cssText="display:none;"
            next.style.cssText="display:block;"
            cbt__question1.style.display="block"
            cbt__question2.style.display="none"
            cbt__question3.style.display="none"
            cbt__question4.style.display="none"
            break;

        case 1:
            prev.style.cssText="display:block;"
            next.style.cssText="display:block;"
            cbt__question1.style.display="none"
            cbt__question3.style.display="none"
            cbt__question4.style.display="none"
            cbt__question2.style.display="block"
            break;

        case 2:
            cbt__question2.style.display="none"
            next.style.cssText="display:block;"
            cbt__question1.style.display="none"
            cbt__question4.style.display="none"
            cbt__question3.style.display="block"
            break;

        case 3:
            next.style.cssText="display:none;"
            cbt__question3.style.display="none"
            cbt__question1.style.display="none"
            cbt__question2.style.display="none"
            cbt__question4.style.display="block"
            break;
    }
    
})

// Checking for Correctness
const q1option1 = document.getElementById('q1option1')
const q2option3 = document.getElementById('q2option3')
const q3option3 = document.getElementById('q3option3')
const q4option3 = document.getElementById('q4option3')

const submitted = document.querySelector('.submit')

const cbt__remark = document.querySelector('.cbt__remark')

var j = 0

var q1 = false
var q2 = false
var q3 = false
var q4 = false

submitted.addEventListener('click', ()=>{
    let confirmed = confirm("Are you sure you want to submit?")
    if (confirmed){
        document.getElementsByTagName('main')[0].style.display="none"
        submitted.style.display="none"
        if (q1option1.checked){
            j+=25
        }
        else{
            cbt__remark.innerHTML+="You failed Question 1<br>"
        }
    
        if (q2option3.checked){
            j+=25
        }
        else{
            cbt__remark.innerHTML+="You failed Question 2<br>"
        }
    
    
        if (q3option3.checked){
            j+=25
        }
        else{
            cbt__remark.innerHTML+="You failed Question 3<br>"
        }
    
    
        if (q4option3.checked){
            j+=25
        }
        else{
            cbt__remark.innerHTML+="You failed Question 4<br>"
        }
        cbt__remark.innerHTML+="<h2>You have finished the test. your score is;</h2>"+j+"%"
    
    }
})




