let numeroCorrecto = Math.floor(Math.random() * 10);

let adivinanza = parseInt(prompt("Adivina un número entre 1 y 10:"));


if (adivinanza === numeroCorrecto) {
    alert("¡Has acertado!");
} else {
    alert("Intenta de nuevo. El número correcto era: " + numeroCorrecto);
}

console.log(numeroCorrecto(2))
