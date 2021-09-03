// Desafio 10
/** Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado 'name' com um nome. */
function techList(array, names) {
  array = array.sort();
  let tecnologies = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let tecnologi = { tech: array[index], name: names };
    tecnologies.push(tecnologi);
  }
  return tecnologies;
}

// Desafio 11
/** Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901. */

// Função que faz a varredura do array e retornar a quantidade de vezez que mesmo aparece.
function howManyRepeat(value, array) {
  let totRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (value === array[index]) {
      totRepeat += 1;
    }
    // Caso o numero se repita 3 vezez ou mais ele para o loop ja retorna o valor da variavel.
    if (totRepeat >= 3) {
      return totRepeat;
    }
  }
  return totRepeat;
}
// Função que verifica se número aparece igual ou maior que 3 vezez.
function checkNumberRepeat(array) {
  let totRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    // Chama a função para verificar se valor passado repete 3x ou mais.
    totRepeat = howManyRepeat(array[index], array);
    if (totRepeat >= 3) {
      return 'true';
    }
  }
}

// Função que checa se número é maior que 9 ou menor que 0.
function checkNumberInvalid(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'true';
    }
  }
}

// Função que transforma o Array em uma unica String.
function arrayByString(array) {
  let string = '';
  for (let index = 0; index < 13; index += 1) {
    string += array[index];
  }
  return string;
}

// Essa função divide o Array em 3 bloclos e adciona numa nova array.
function formatNumberPhone(array) {
  let string = arrayByString(array);
  let ddd = string.slice(0, 2);
  let firstNumber = string.slice(2, 7);
  let lastNumber = string.slice(7, 11);
  let phoneNumber = [ddd, firstNumber, lastNumber];
  return phoneNumber;
}

// Função que concatena o array para a fomatação exata da saida para usuário.
function displayNumberPhone(array) {
  let phoneNumber = formatNumberPhone(array);
  let phone = `(${phoneNumber[0]}) ${phoneNumber[1]}-${phoneNumber[2]}`;
  return phone;
}

// Função Para geração de número telefônico de acordo com parâmetro passado!
function generatePhoneNumber(array) {
  let invalidNumber = checkNumberInvalid(array);
  let invalidRepeat = checkNumberRepeat(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumber === 'true' || invalidRepeat === 'true') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phoneNumber = displayNumberPhone(array);

  return phoneNumber;
}

// Desafio 12
/** Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha. */
function checkLineA(lineA, lineB, lineC) {
  if ((lineB - lineC) < lineA && lineA < (lineB + lineC)) {
    return 'true';
  }
}

function checkLineB(lineA, lineB, lineC) {
  if ((lineA - lineC) < lineB && lineB < (lineA + lineC)) {
    return true;
  }
}

function checkLineC(lineA, lineB, lineC) {
  if ((lineA - lineB) < lineC && lineC < (lineA + lineB)) {
    return false;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLineA(lineA, lineB, lineC) === 'true') {
    return true;
  }
  if (checkLineB(lineA, lineB, lineC) === 'true') {
    return true;
  }
  if (checkLineC(lineA, lineB, lineC) === 'false') {
    return false;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
