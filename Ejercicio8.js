let Comidas = prompt("Selecciona una opcion 1. Pizza 2. Hamburguesa 3. Tacos ")

switch (Comidas) {

    case "1":
        console.log("Haz seleccionado Pizza")
        break;

    case "2":
        console.log("Has seleccionado Hamburguesa")
        break;

    case "3":
        console.log("Haz seleccionado Tacos")
        break;
        
    default:
        console.log("No haz seleccionado una respuesta valida");
        
}
