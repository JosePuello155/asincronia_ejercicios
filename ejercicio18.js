const fs = require('fs');

fs.readFile('datos.JSON', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  const jsonDatos = JSON.parse(data);

  const nombresConA = jsonDatos.filter(item => item.nombre.startsWith('A'));

  console.log(nombresConA);
});
