const nota1 = 9;
const nota2 = 8.5;
const nota3 = 6;
const nota4 = 9.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(media);

const notas = [9, 8.5, 6, 9.5];
//             0   1   2   3
console.log(notas);
console.log(notas.length);

const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 
console.log(mediaArray);