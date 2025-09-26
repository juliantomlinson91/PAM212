function verificarUsuario(usuario) {
return new Promise((resolve, reject) => {

    if (usuario === "Julián") {
        resolve("Acceso Concedido");
    } else {
        reject("Acceso Denegado");
    }

});
}
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("Julián")
    .then(res => console.log(res))
    .catch(err => console.error(err));

