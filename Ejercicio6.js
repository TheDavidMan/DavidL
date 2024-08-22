let edad = prompt ("Ingresa un numero ")

edad = parseInt(edad)

if(edad <= 12){
    console.log("Eres un niño")
} else if(edad >= 12 && edad <= 17){
    console.log("Eres un adolescente")
} else if(edad >= 18 && edad <= 64){
    console.log("Eres un adulto")
} else if(edad >= 65){
    console.log("Eres un adulto mayor")
}
