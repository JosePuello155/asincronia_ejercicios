// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// // • Usando setTimeout anidado

// function imprimirNumeros(desde, hasta) {
//   console.log("Contador de un minuto")
//   let contador = desde;

//   const intervalo = setInterval(() => {
//     console.log(contador);
//     if (contador >= hasta) {
//       clearInterval(intervalo);
//       console.log("Fin del contador")
//     }
//     contador++;
//   }, 1000);
 
// }

// imprimirNumeros(0,10);

let desde = prompt("Ingrese el valor que desee que inicie")
let hasta = prompt("Ingrese el valor que desee que termine")

function numeros(desde, hasta) {
  let contador = desde;

  setTimeout(function numbers(){
    console.log(contador) 
    if (contador < hasta) {
      setTimeout (numbers, 1000)
    }
    contador++
  }, 100);
}

numeros(desde,hasta)