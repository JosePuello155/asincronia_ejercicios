let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 'No existe la propiedad: ' + name;
  }
};

let persona = { nombre: 'jose', apellido: 'puello' };

let proxy = new Proxy(persona, handler);

console.log(proxy.nombre)
console.log(proxy.apellido)