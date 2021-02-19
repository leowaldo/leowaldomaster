console.log('Inicio de Script');//#1
setTimeout(() => {
  console.log('primer time');
}, 5000);
setTimeout(() => {
  console.log('segundo time');
}, 0);
setTimeout(() => {
  console.log('tercer time');
}, 0);
console.log('Fin de Script');//#2
