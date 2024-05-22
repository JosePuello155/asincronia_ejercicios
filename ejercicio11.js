let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++) {
  i++;
}

//el resultado que muestra eel codigo es 100000000 pero lo lanza como su fuera un alert sin aver colocado el alert
