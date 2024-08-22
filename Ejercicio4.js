let total = prompt("Ingrese el total de su compra")

total = parseInt(total)

if(total > 100000){

    let descuento = total * 0.10

    let totalCompraConDescuento = total - descuento

    console.log("Se te aplico el 10% de descuento por superar los 100.000 pesos en compra su total es= "  +totalCompraConDescuento)
} else if(totalCompra <= 100000){
    console.log("Total" +total)
}
