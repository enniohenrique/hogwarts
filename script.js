const casa1 = document.querySelector('#casa1');
const casa2 = document.querySelector('#casa2');
const casa3 = document.querySelector('#casa3');
const casa4 = document.querySelector('#casa4');
const btnStar1 = document.querySelector('#btnStar1');
const btnStar2 = document.querySelector('#btnStar2');
const btnStar3 = document.querySelector('#btnStar3');
const btnStar4 = document.querySelector('#btnStar4');

const active = () => casa1.classList.toggle('active')
const active2 = () => casa2.classList.toggle('active')
const active3 = () => casa3.classList.toggle('active')
const active4 = () => casa4.classList.toggle('active')


btnStar1.addEventListener('click',active)
btnStar2.addEventListener('click',active2)
btnStar3.addEventListener('click',active3)
btnStar4.addEventListener('click',active4)