let hora = prompt("Por favor, ingresa la hora (un número entre 0 y 23):");

hora = parseInt(hora)

if (hora >= 0 && hora <= 23) {
    if (hora >= 6 && hora < 12) {
        alert("Buenos días");
    } else if (hora >= 12 && hora < 18) {
        alert("Buenas tardes");
    } else (hora >= 18 && hora <= 24 || hora >= 6)
        alert("Buenas noches");
    
}