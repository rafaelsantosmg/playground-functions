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
/** Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato. */
function footballPoints(wins, ties) {
  let totwins = wins * 3;
  let totTies = ties * 1;
  return totwins + totTies;
}

// Desafio 6
/** Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete. */

// Função que faz a contagem de quantos elementos iguais aparece no "Array".
function howManyTimes(arrays, biggers) {
  let totBigger = 0;
  for (let index = 0; index < arrays.length; index += 1) {
    if (arrays[index] === biggers) {
      totBigger += 1;
    }
  }
  return totBigger;
}

function highestCount(array) {
  let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  let totBigger = howManyTimes(array, bigger);
  return totBigger;
}

// Desafio 7
/** Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número. */
function distanceAccount(position1, position2) {
  let count = 0;
  if (position1 > position2) {
    for (let index = position2; index <= position1; index += 1) {
      count += 1;
    }
    return count;
  }
  for (let index = position1; index <= position2; index += 1) {
    count += 1;
  }
  return count;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = distanceAccount(mouse, cat1);
  let distanceCat2 = distanceAccount(mouse, cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
/** Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!"; */
function divisibleBy(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug';
}

function switchFizzBuzz(number) {
  switch (divisibleBy(number)) {
  case 'fizz':
    return 'fizz';
  case 'buzz':
    return 'buzz';
  case 'fizzBuzz':
    return 'fizzBuzz';
  case 'bug':
    return 'bug!';
  default:
  }
}

function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    arrayFizzBuzz.push(switchFizzBuzz(array[index]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
/** Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5 */
function convertNumberString(number) {
  const NUMBER = ['1', '2', '3', '4', '5'];
  const WOWEL = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < NUMBER.length; index += 1) {
    if (number === NUMBER[number - 1]) {
      return WOWEL[number - 1];
    }
  }
  return number;
}

function convertStringNumber(string) {
  const WOWEL = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < WOWEL.length; index += 1) {
    if (string === WOWEL[index]) {
      return index + 1;
    }
  }
  return string;
}

function encode(string) {
  let encodeString = '';
  for (let index = 0; index < string.length; index += 1) {
    encodeString += convertStringNumber(string[index]);
  }
  return encodeString;
}

function decode(string) {
  let encodeString = '';
  for (let index = 0; index < string.length; index += 1) {
    encodeString += convertNumberString(string[index]);
  }
  return encodeString;
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
