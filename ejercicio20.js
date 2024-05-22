const promisa1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const promisa2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
const promisa3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500))

Promise.all([promisa1, promisa2, promisa3]).then((resultados) => {
  console.log('Las promesas se cumplieron', resultados)
})