function aniadirSesion() {
    let nombre_modulo = document.getElementById("nombre-mod").value;
    let hora_inicio = document.getElementById("hora-inicio").value;
    let duracion_sesion = document.getElementById("duracion").value;

    if ((nombre_modulo === "") || (hora_inicio === "") || (duracion_sesion === "") || (parseInt(duracion_sesion < 0))) {
        alert("Datos incorrectos.");
    } else {
        let horario = document.getElementById("horario");
        let tr_fila = document.createElement("tr");
        let td_nombre = document.createElement("td");
        let td_hora = document.createElement("td");
        let td_duracion = document.createElement("td");
        let td_check = document.createElement("td");
        let check_content = document.createElement("button");

        td_nombre.textContent = nombre_modulo;
        td_hora.textContent = hora_inicio;
        td_duracion.textContent = duracion_sesion;
        check_content.textContent = "Terminada";
        td_check.appendChild = check_content;

        tr_fila.appendChild(td_nombre);
        tr_fila.appendChild(td_hora);
        tr_fila.appendChild(td_duracion);
        tr_fila.appendChild(td_check);

        horario.appendChild(tr_fila);
    }
}