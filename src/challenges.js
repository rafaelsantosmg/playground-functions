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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
