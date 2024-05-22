// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará ?
//   a) Después del bucle.
//     b) Antes del bucle.
//       c) Al comienzo del bucle.
//  ¿Qué va a mostrar alert() ?

let i = 0;

setTimeout(() => alert(1), 100);

for (let j = 0; j < 1000000; j++){
  i++;
}

// La función programada programada se ejecutará después del bucle.El bucle for es una operación de cálculo pesada que tomará más de 100 ms en completarse, 
// por lo que la función programada en setTimeout se agregará a la cola de tareas y se ejecutará después de que el bucle haya terminado.
// a) La función programada se ejecutará después del bucle.
// La función alert(1) mostrará un mensaje de alerta con el número 1 después de que el bucle haya terminado.

