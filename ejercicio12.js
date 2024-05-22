function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(5000).then(() => alert('Resultado despues de 5 segundos'));