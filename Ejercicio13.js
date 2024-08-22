let Usuario = prompt("Ingrese su usuario");

let Contraseña = prompt("Ingrese la contraseña");

if (Usuario === "admin" && Contraseña === "1234"){
    alert("Acceso concedido");
}else{
    alert("Acceso denegado");
}