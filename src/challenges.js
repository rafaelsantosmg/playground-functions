// Desafio 1
/** Retornar true se ambos os valores forem verdadeiros;
 *  Retornar false se um ou ambos os parâmetros forem falsos.
 */
function compareTrue(param1, param2) {
  // Forma simplificada do "IF" quando temos somente uma linha dentro do escopo.
  if (param1 && param2 === true) {
    return true;
  }
  // Quando temos um "return" dentro da expressão "if" é desnecessário a utilização do "else"!
  return false;
}

// Desafio 2
/** Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área. */
function calcArea(base, height) {
  let area = (base * height) / 2;
  if (Number.isInteger(area)) {
    return area;
  }
  return parseFloat(area.toFixed(1));
}

// Desafio 3
/** Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original. */
function splitSentence(words) {
  let array = words.split(' ');
  return array;
}

// Desafio 4
/** Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array. */
function concatName(array) {
  let firstWord = array.shift();
  let lastWord = array.pop();
  let concatWords = `${lastWord}, ${firstWord}`;
  return concatWords;
}

// Desafio 5
/** Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

O que será verificado:

Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates

Retorne 5 pontos quando o time tenha 1 vitória e 2 empates

Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates

 */
function footballPoints(wins, ties) {
  let totwins = wins * 3;
  let totTies = ties * 1;
  return totwins + totTies;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
