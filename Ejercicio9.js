function tipoDeTriangulo( ) {
    let lado1 = prompt("Ingrese el primer lado")
    let lado2 = prompt("Ingrese el primer lado")
    let lado3 = prompt("Ingrese el primer lado")

    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}


console.log(tipoDeTriangulo())
