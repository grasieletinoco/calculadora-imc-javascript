
const form = document.getElementById('form');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');
const resultado= document.getElementById('resultado');


altura.addEventListener("input", function() {
  let valor = altura.value;

  if (valor.length > 1 && !valor.includes('.')) {

    altura.value = valor.slice(0, 1) + '.' + valor.slice(1);
  }
  
});


btnCalcular.addEventListener("click", function(e) {

  let imc = peso.value / (altura.value * altura.value);

  e.preventDefault();

  if (imc < 18.5) {
    resultado.innerText = `${imc.toFixed(2)} - Magreza`;

  } else if (imc >=18.5 && imc <=24.9) {
    resultado.innerText = `${imc.toFixed(2)} - Normal `;

  } else if (imc >=25 && imc <=29.9) {
    resultado.innerText = `${imc.toFixed(2)} - Sobrepeso`;

  } else if (imc >=30 && imc <=39.9)  {
    resultado.innerText = `${imc.toFixed(2)} - Obesidade`;

  } else if (imc >= 40) {
    resultado.innerText = `${imc.toFixed(2)} - Obesidade Grave`;
  }

})


btnLimpar.addEventListener("click", function(e) {

  peso.value = '';
  altura.value = '';
  resultado.innerText = '';

})
