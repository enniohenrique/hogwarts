const casaGrifinoria = document.querySelector('#casaGrifinoria');
const arrowBack_grifinoria = document.querySelector('#arrowBack_grifinoria')
const arrowBack_sonserina = document.querySelector('#arrowBack_sonserina')
const arrowBack_corvinal = document.querySelector('#arrowBack_corvinal')
const arrowBack_lufalufa = document.querySelector('#arrowBack_lufalufa')

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
arrowBack_grifinoria.addEventListener('click',active)
arrowBack_sonserina.addEventListener('click',active2)
arrowBack_corvinal.addEventListener('click',active3)
arrowBack_lufalufa.addEventListener('click',active4)