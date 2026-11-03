function aniadirSesion() {
    let nombre_modulo = document.getElementById("nombre-mod");
    let hora_inicio = document.getElementById("hora-inicio");
    let duracion_sesion = document.getElementById("duracion");

    if ((nombre_modulo === "") || (hora_inicio === "") || (duracion_sesion === "") || (parseInt(duracion_sesion < 0))) {
        alert("Datos incorrectos.")
    } else {
        
    }
}