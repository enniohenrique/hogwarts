const casaGrifinoria = document.querySelector('#casaGrifinoria');
const casaSonserina = document.querySelector('#casaSonserina');
const casaCorvinal = document.querySelector('#casaCorvinal');
const casaLufaLufa = document.querySelector('#casaLufaLufa');
const btnGrifinoria = document.querySelector('#btnGrifinoria');
const btnSonserina = document.querySelector('#btnSonserina');
const btnCorvinal = document.querySelector('#btnCorvinal');
const btnLufaLufa = document.querySelector('#btnLufaLufa');

const active = () => casaGrifinoria.classList.toggle('active')
const active2 = () => casaSonserina.classList.toggle('active')
const active3 = () => casaCorvinal.classList.toggle('active')
const active4 = () => casaLufaLufa.classList.toggle('active')


btnGrifinoria.addEventListener('click',active)
btnSonserina.addEventListener('click',active2)
btnCorvinal.addEventListener('click',active3)
btnLufaLufa.addEventListener('click',active4)