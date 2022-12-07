let seuVotoPara = document.querySelector('.d-1-1 soan');
let cargo = document.querySelector('.d-1-2 span');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    seuVotoPara.getElementsByClassName.display = 'nome';
    cargo.innerHTML = etapa.titulos;
    descricao.innerHTML = '';
    aviso.style.display = 'nome';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function cliclou(n){
    alert("cliclou em"+n);
}
function branco(){
    alert("Clicou em Branco!")
}
function corrige(){
    alert("Clicou em Corrige!")
}
function confirma(){
    alert("Clicou em Confirma!")
}

comecarEtapa();