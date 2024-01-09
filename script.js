function todoList(todos) {
  // Write your code here...
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);

let divEle = document.querySelector('#content')
let ulEle = document.createElement('ul')
divEle.appendChild(ulEle)



for(let i =0; i<todos.length ; i++){
 
  let liEle =document.createElement('li')
    ulEle.appendChild(liEle)
    liEle.appendChild(document.createTextNode(Object.values(todos[i])))
    liEle.className = 'style'

    liEle.addEventListener('click',()=>{
      // liEle.style.textDecoration = 'line-through'
      // liEle.addEventListener('click',deleteOneItem) ===== first way
      liEle.classList.toggle('style')
    })
  
}

// function deleteOneItem() {
// this.style.textDecoration = 'none'
// }


















let body = document.querySelector('body').innerHTML
console.log(body);