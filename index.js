let input = document.getElementById('input')
let ul = document.getElementById('myList')
let resetBtn = document.getElementById('resetBtn')
let submitBtn = document.getElementById('submitBtn')

const lastNameSaved = document.querySelector('label')
lastNameSaved.innerText = localStorage.getItem('inputValue')

/*document.getElementsByTagName('form')[0].addEventListener("submit", function(event){
    event.preventDefault();
})*/

/*const li = document.createElement('li')
li.style.listStyleType = 'none'
li.innerText = localStorage.getItem('inputValue')
ul.appendChild(li)*/

resetBtn.addEventListener('click',()=>{
   localStorage.removeItem('inputValue')
   lastNameSaved.innerText = ""
})
submitBtn.addEventListener('click',()=>{
    localStorage.setItem('inputValue',input.value) 
})

/*
document.getElementById('submitBtn').addEventListener('click',()=>{
    const node = document.createElement("li");
    const textnode = document.createTextNode(input.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
})

document.getElementById('resetBtn').addEventListener('click',()=>{})
*/


let counter = sessionStorage.getItem('counter') ? parseInt(sessionStorage.getItem('counter')) : 0;

function counterPlus(){
    counter++;
    document.getElementById('counter').textContent = counter
    sessionStorage.getItem('counterValue',counter);
}
setInterval(counterPlus,1000);
