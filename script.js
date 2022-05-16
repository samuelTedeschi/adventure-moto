const mes = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
];

const semana = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
];

const nomeProduto = document.querySelector('.nome-produto')
const tempo = document.querySelector('.tempo')
const itens = document.querySelectorAll('.tempo-formato h4')

let futuraDate= new Date(2022, 4, 16, 10, 30, 0);

const year = futuraDate.getFullYear();
const horas = futuraDate.getHours();
const minutos = futuraDate.getMinutes();
nomeProduto.textContent =`Esgotado a promoçao ${year} ${horas} ${minutos}`;
