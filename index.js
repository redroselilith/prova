document.getElementById('buttonDiv').style.visibility = "hidden";

var somaIMC = 0;
var quantUsuarios = 0;
var maiorIMC = 0;

function calcularIMC() {
    var nome = prompt('Qual é o nome do usuário?');
    var peso = parseFloat(prompt('Qual é o peso de ' + nome + '?'));
    var altura = parseFloat(prompt('Qual é a altura de ' + nome + '?'))
    var imc = (peso / (altura * altura))

    document.getElementById('resultado').innerHTML = 'Resultado';
    document.getElementById('h3').innerHTML = nome + ', o seu IMC é:';
    document.getElementById('imcResult').innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById('classMessage').innerHTML = 'Você está abaixo do peso normal.'
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('classMessage').innerHTML = 'Você está com peso normal.'
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById('classMessage').innerHTML = 'Você está com excesso de peso.'
    } else if (imc >= 30.0 && imc <= 34.9) {
        document.getElementById('classMessage').innerHTML = 'Você está com obesidade classe I.'
    } else if (imc >= 35.0 && imc <= 39.9) {
        document.getElementById('classMessage').innerHTML = 'Você está com obesidade classe II.'
    } else if (imc >= 40.0) {
        document.getElementById('classMessage').innerHTML = 'Você está com obesidade classe III.'
    } else {
        document.getElementById('classMessage').innerHTML = 'Inválido.'
    }

    document.getElementById('buttonDiv').style.visibility = "visible";

    document.getElementById('nome').innerHTML = 'Nome do Usuário';
    document.getElementById('imc').innerHTML = 'IMC do Usuário';

    var table = document.getElementById('tabela');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = imc.toFixed(2);

    somaIMC += imc;

    if (imc > maiorIMC) {
        maiorIMC = imc
    }

    quantUsuarios++

    document.getElementById('quantUsuarios').innerHTML = 'Quantidade de Usuários: ' + quantUsuarios;
    document.getElementById('mediaIMC').innerHTML = 'Média IMC: ' + (somaIMC / quantUsuarios).toFixed(2);
    document.getElementById('maiorIMC').innerHTML = 'Maior IMC: ' + maiorIMC.toFixed(2);
}

function reload() {
    window.location.reload();
}

function alerta() {
    alert('Muito obrigada pela segunda chance, professor. O senhor salvou não apenas a minha nota, como também o meu dia que estava sendo o pior dos últimos anos. Obrigada de coração. Prometo me tornar uma excelente Cientista da Computação que o senhor terá orgulho de dizer que fui sua aluna.')
}