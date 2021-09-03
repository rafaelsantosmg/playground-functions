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
function howManyRepeat(value, array) {
  let totRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (value === array[index]) {
      totRepeat += 1;
    }
    if (totRepeat >= 3) {
      return totRepeat;
    }
  }
  return totRepeat;
}

function checkNumberRepeat(array) {
  let totRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    totRepeat = howManyRepeat(array[index], array);
    if (totRepeat >= 3) {
      return 'true';
    }
  }
}

function checkNumberInvalid(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'true';
    }
  }
}

function arrayByString(array) {
  let string = '';
  for (let index = 0; index < 13; index += 1) {
    string += array[index];
  }
  return string;
}

function formatNumberPhone(array) {
  let string = arrayByString(array);
  let ddd = string.slice(0, 2);
  let firstNumber = string.slice(2, 7);
  let lastNumber = string.slice(7, 11);
  let phoneNumber = [ddd, firstNumber, lastNumber];
  return phoneNumber;
}

function displayNumberPhone(array) {
  let phoneNumber = formatNumberPhone(array);
  let phone = `(${phoneNumber[0]}) ${phoneNumber[1]}-${phoneNumber[2]}`;
  return phone;
}

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
function triangleCheck() {
  // seu código aqui
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
