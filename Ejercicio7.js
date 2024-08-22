let nota = prompt("Ingresa una nota entre 1 y 100 ")

nota = parseInt(nota)

if(nota >= 90){
    console.log("Excelente ")
} else if(nota >= 70){
    console.log("Bueno ")
} else if(nota >= 50){
    console.log("Regular ")
} else if(nota <= 50){
    console.log("Insuficiente ")
}
