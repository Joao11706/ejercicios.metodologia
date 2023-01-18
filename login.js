let username = prompt("INGRESE SU USUARIO");
const USER_NAME = "admin";
let password = prompt("Ingrese su contraseña");
const PASSWORD_FINAL = "secret";

if (username == USER_NAME && password == PASSWORD_FINAL) {
    console.log("Bienvenido querido usuario");
}

else {
    console.log("Contraseña o usuario equivocado");
}