function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc'); //1º capturar o botao
  buttonCalculateImc.addEventListener('click', handleButtonClick); //2º criar o evento para o botao quando for clicado e o que vai acontecer depois

  var inputWeight = document.querySelector('#input-weight'); //1ºcapturar o input do peso
  var inputHeight = document.querySelector('#input-height'); //1º captura o input da altura

  inputWeight.addEventListener('input', handleButtonClick); //2º criar um evento para o input do peso
  inputHeight.addEventListener('input', handleButtonClick); //2º criar um evento para o input da altura

  handleButtonClick(); //para ja começar calculando o imc
}

//função para calcular o IMC
function calculaImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight'); //1ºcapturar o input do peso
  var inputHeight = document.querySelector('#input-height'); //1º capturar o input da altura
  var imcResult = document.querySelector('#imc-result'); //1º capturar o local onde o imc será exibido

  var weight = Number(inputWeight.value); //2º capturar o valor do input do peso(input sempre devolve string, para converter para numero basta colocar o Number e o valor entre parentese)
  var height = Number(inputHeight.value); //2º capturar o valor do input da altura

  var imc = calculaImc(weight, height); //3º criar variavel para chamar a funçao de calcular imc
  var formattedImc = imc.toFixed(2).replace('.', ','); //formartar o imc para duas casas decimais e o replace troca o ponto por virgula

  imcResult.textContent = formattedImc; //Para o imcResult receber um conteúdo usa-se o textContent
}
start();
