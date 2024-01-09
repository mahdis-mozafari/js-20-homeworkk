function listOfColours(colours) {
  // Write your code here...
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
let divEle = document.querySelector('#content')
let selectEle = document.createElement('select')
let pEle = document.createElement('p') 
//!append childs
divEle.appendChild(pEle)
divEle.appendChild(selectEle)

for(let i = 0 ; i<colours.length;i++){
let optionEle =document.createElement('option')
selectEle.appendChild(optionEle)
optionEle.appendChild(document.createTextNode(colours[i]))

selectEle.addEventListener('change',()=>{
  pEle.textContent=`'your select color ${event.target.value}'`
   pEle.style.color = event.target.value
   optionEle.style.color =colours[i]
  })

}

pEle.appendChild(document.createTextNode(`' plese select color'`))
















let body = document.querySelector('body').innerHTML
console.log(body);