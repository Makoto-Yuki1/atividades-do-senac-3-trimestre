contadorDeChances = 1;
chancesRestantesElement.textContent = MAX_CHANCES; 
mensagemElement.textContent = '';
palpitesAnterioresElement.textContent = '';
dica.textContent = '';
listaDePalpites = [];

mensagemElement.style.color = '#f0f0f0';
dicaElement.style.color = '#ffeb3b';

campoPalpite.disabled = false;
botaoEnviarPalpite.disabled = false;
campoPalpite.value = '';
campoPalpite.focus();

botaoReiniciar.classList.add('hidden');

function verificarPalpite () {

const palpiteDoUsuario = parseInt(campoPalpite.value);
if (isNaN (palpiteDoUsuario) || palpiteDoUsuario < 1 || palpiteDoUsuario > 100) 
    {Continua}

}