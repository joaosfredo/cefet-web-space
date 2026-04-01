// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui

let botao = document.getElementById("calcular");

botao.addEventListener("click", function () {

  let G = document.getElementById("constante").value;
  let M1 = document.getElementById("massa1").value;
  let M2 = document.getElementById("massa2").value;
  let d = document.getElementById("distancia").value;

  G = Number(G);
  M1 = Number(M1);
  M2 = Number(M2);
  d = Number(d);

  let F = (G * M1 * M2) / (d * d);

  document.getElementById("resultado").value = F;
});