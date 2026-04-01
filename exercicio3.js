// Faça o exercício dos PARÁGRAFOS aqui

let botoes = document.querySelectorAll('.botao-expandir-retrair');

for (let botao of botoes) {
  botao.addEventListener('click', function (e) {
    let botaoClicado = e.currentTarget;
    let paragrafo = botaoClicado.parentElement;

    paragrafo.classList.toggle('expandido');

    if (paragrafo.classList.contains('expandido')) {
      botaoClicado.innerHTML = '-';
    } else {
      botaoClicado.innerHTML = '+';
    }
  });
}
