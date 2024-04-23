'use strict'
class usuario{
    constructor(user, pass){
    this.user = user;
    this.pass = pass;
    }
}

function paginicial(){
    let u1 = document.getElementById('login');
    let p1 = document.getElementById('senha');
    let user = String(u1.value);
    let pass = Number(p1.value);
    let pessoa = new usuario (user, pass);
    let usuarios = [];
    usuarios.push(pessoa);
    window.location.href = 'pag1.html';
}

function abrirpag(){
    window.location.href = "historia.html";
}
function abrirpag2(){
    window.location.href = "jogadores.html";
}
function voltar(){
    window.location.href = "pag1.html";
}
function voltarlogin(){
    window.location.href = "index.html";
}
function opiniao(){
    window.prompt('o que você está achando do site?');
}
function erro(){
    location.href=('404.html');
}

