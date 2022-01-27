document.addEventListener('DOMContentLoaded', (event)=> {

const counter = document.getElementById('counter');
const pauseBtn = document.getElementById('pause');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const buttons = document.querySelectorAll('button');
const heart = document.getElementById('heart');
const list = document.getElementById('list');
const likes = document.querySelector('.likes')


let intervalID;
let count = 0;
let pause = false;
let form = document.querySelector('form');

function startCount(){
  count += 1;
  counter.textContent = count; 
}
intervalID = setInterval(startCount, 1000);



let buttonsArray = [];

for(let i = 0; i < buttons.length; i++){
  if(buttons[i].id != "pause"){
    buttonsArray.push(buttons[i]);
  }
}

function disableButton(button){
  button.setAttribute("disabled",true) 
}

function enableButton(button){
  button.removeAttribute("disabled");
}

 
function incrementButton(){
count += 1; 
counter.innerHTML = count;
}


function decrementButton(){
  count --;
  counter.innerHTML = count;
}

function handleLikes(){
  likes.innerHTML += `<li> ${count} has been liked</li>`
}

function submitComment(comment){

  const newCom = document.createElement('p')
  newCom.innerText = comment;
  list.appendChild(newCom);
}


  pauseBtn.addEventListener('click', (e) => { 
    if(e.target.innerText === 'pause'){
    clearInterval(intervalID)
    e.target.innerText = 'resume'
    buttonsArray.forEach(button =>
      disableButton(button)
    )
  }

    else
  {
    intervalID = setInterval(startCount, 1000);
    e.target.innerText = 'pause'
    buttonsArray.forEach(button =>enableButton(button))
  }
});

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const comment = e.target.querySelector('#comment-input').value;
  submitComment(comment)
    form.reset()
  
})

plusBtn.addEventListener('click', incrementButton)
minusBtn.addEventListener('click', decrementButton)
heart.addEventListener('click', handleLikes);

})