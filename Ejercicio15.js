let peso = prompt("Por favor, ingresa tu peso en kilogramos:");
peso = parseFloat(peso)
let altura = prompt("Por favor, ingresa tu altura en metros:");
altura = parseFloat(altura)
let imc = peso / (altura * altura);

console.log("Tu IMC es: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Clasificación: Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Clasificación: Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Clasificación: Sobrepeso");
} else {
    console.log("Clasificación: Obesidad");
}