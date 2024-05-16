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

const emptyNumber = (numbers) => {
  numbers.push(Math.floor(Math.random) * 101);
  numbers.push(Math.floor(Math.random) * 101);
  numbers.push(Math.floor(Math.random) * 101);
  console.log(numbers);
};
emptyNumber([]);
