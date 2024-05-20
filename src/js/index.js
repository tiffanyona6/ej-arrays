// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

// Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumber = (numbers) => {
  const random = Math.floor(Math.random() * numbers.length);
  console.log(numbers[random]);
};

getRandomNumber([1, 2, 3, 4, 5]);
// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola. "La suma de todos los números es:[suma]" "La media de todos los números es:[media]" "El mayor es [mayor] y el menor es [menor]"

const functions = (numbers) => {
  const addition = numbers[0] + numbers[1] + numbers[2];
  console.log(`La suma de todos los números es:'${addition}`);

  const media = addition / numbers.length;
  console.log(`La media de todos los números es:'${media}`);

  const max = Math.max([numbers[0]], [numbers[1]], [numbers[2]]);
  console.log(`el mayor es ${max}`);

  const min = Math.min([numbers[0]], [numbers[1]], [numbers[2]]);
  console.log(`el mayor es ${min}`);
};
functions([3, 4, 5]);

//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const fiveNumbers = (numbers) => {
  const random = Math.floor(Math.random() * 10);
  if (numbers.includes(random)) {
    console.log(
      `el array contiene ${random} y su posición es ${numbers.indexOf(random)}`
    );
  } else {
    console.log(`El número ${random} no está`);
  }
};

fiveNumbers([5, 4, 8, 2, 1]);


//Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
const emptyNumber = (numbers) => {
  numbers.push(Math.floor(Math.random) * 101);
  numbers.push(Math.floor(Math.random) * 101);
  numbers.push(Math.floor(Math.random) * 101);
  console.log(numbers);
};
emptyNumber([]);

//Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

//Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

//Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']
