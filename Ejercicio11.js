let precioBase = prompt("Ingresa el percio base")

precioBase = parseInt(precioBase)

if(precioBase > 500){
    let Descuento1 = precioBase * 0.15
    let Total1 = precioBase - Descuento1
    console.log("Su total seria con el descuento del 15% " + Total1)

}else if(precioBase >= 300 && precioBase <= 500 ){
    let Descuento2 = precioBase * 0.10
    let Total2 = precioBase - Descuento2
    console.log("Su total seria con el descuento del 10% " + Total2)

}else if(precioBase > 500){
    let Descuento3 = precioBase * 0.5
    let Total3 = precioBase - Descuento3
    console.log("Su total seria con el descuento del 5% " + Total3)

}