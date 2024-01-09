// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================

//Event Bubbling is a default behavior for events. But in some cases, you might want to prevent this. 
 
// Let's say, for example, from our HTML code, that you want the div to open a modal when it is clicked. For the button, on the other hand, you want it to make an API request when it is clicked. 
 
// In this case, you may not want the modal to open when you click the button. You might want the modal to only open when you actually click it (and not when you click any of its children). This is where preventing event propagation comes in. 
 
// To prevent event bubbling, you use the stopPropagation method of the event object. 
 
// When handling events, an event object is passed to the handling function 
 
 
 
 
body.addEventListener('click', () => { 
    console.log("body was clicked") 
  }) 
   
  div.addEventListener('click', () => { 
    console.log("div was clicked") 
  }) 
   
  span.addEventListener('click', () => { 
    console.log("span was clicked") 
  }) 
   
  button.addEventListener('click', (event) => { 
    event.stopPropagation() 
    console.log("button was clicked") 
  })
