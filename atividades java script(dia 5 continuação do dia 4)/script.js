let numeroSecreto;
let contadorDeChances=1;
const MAX_CHANCES=10;

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar= document.querySelector('#botaoreiniciar');


const mensagemElement= document.querySelector('.mensagem');
const palpitesanterioresElement= document.querySelector('.palpites-anteriores');
const dicaElement= document.querySelector('.dica');
const chancesRestantesElement= document.querySelector('#chancesRestantes');

let listadePalpites = [];

function iniciarJogo() {

numeroSecreto = Math.floor(Math.random () * 100) + 1;
console.log('número secreto (apenas para teste):'), numeroSecreto;

}







