const slides = document.querySelectorAll('.element');
const btnBack = document.querySelector('.button-back');
const btnNext = document.querySelector('.button-next');

let hiddens = [];
let actives = [];

const INITIAL = 0;
const LIMIT = 4;

export const mainInicio = () => {
  // Adding listener 'click'
  btnBack.addEventListener('click', () => {
    goBack();
  })
  btnNext.addEventListener('click', () => {
    goNext();
  })

  // Getting hidden, active, next and prev elements
  for(let i = 0; i < slides.length; i++){
    if (slides[i].classList.contains('hidden')){
      hiddens.push(i);
    }
    if(slides[i].classList.contains('active')){
      actives.push(i);
    }
  }
}

// Functions to change classes elements
const goBack = () => {
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.remove('hidden');
    slides[i].classList.remove('active')
  }

  for(let i = 0; i < hiddens.length; i++){
    hiddens[i]+= 1;
    if (hiddens[i] > LIMIT){
      hiddens[i] = 0;
    }
  }
  for(let i = 0; i < actives.length; i++){
    actives[i]+= 1;
    if (actives[i] > LIMIT){
      actives[i] = 0;
    }
  }
  
  for(let i = 0; i < slides.length; i++){
    if(hiddens.includes(i)){
      slides[i].classList.add('hidden')
    }
    if(actives.includes(i)){
      slides[i].classList.add('active')
    }
  }
}

const goNext = () => {
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.remove('hidden');
    slides[i].classList.remove('active')
  }

  for(let i = 0; i < hiddens.length; i++){
    hiddens[i]-= 1;
    if (hiddens[i] < INITIAL){
      hiddens[i] = 4;
    }
  }
  for(let i = 0; i < actives.length; i++){
    actives[i]-= 1;
    if (actives[i] < INITIAL){
      actives[i] = 4;
    }
  }
  
  for(let i = 0; i < slides.length; i++){
    if(hiddens.includes(i)){
      slides[i].classList.add('hidden')
    }
    if(actives.includes(i)){
      slides[i].classList.add('active')
    }
  }
}