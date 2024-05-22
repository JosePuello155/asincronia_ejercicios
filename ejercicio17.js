fetch('datos.JSON')
  .then(respuesta => respuesta.json())
.then(datos => console.log(datos))