function actualizarTotal() {
    let todos_precios = document.getElementsByClassName("precio");
    let todas_unidades = document.getElementsByClassName("unidades");
    let sumatorio = 0;

    for (let i = 0; i < todos_precios.length; i++) {
        sumatorio += parseFloat(todos_precios[i].textContent) * parseInt(todas_unidades[i].textContent);
    }

    let tr_subtotal = document.createElement("tr");
    let td_1 = document.createElement("td");
    let td_total_txt = document.createElement("td");
    let td_subtotal = document.createElement("td");

    td_total_txt.textContent = "Total:";
    td_subtotal.textContent = sumatorio.toFixed(2) + "€";

    tr_subtotal.appendChild(td_1);
    tr_subtotal.appendChild(td_1);
    tr_subtotal.appendChild(td_total_txt);
    tr_subtotal.appendChild(td_subtotal);

    let tabla_subtotal = document.getElementById("subtotal");
    tabla_subtotal.innerHTML = "";
    tabla_subtotal.appendChild(tr_subtotal);
}

function eliminarElemento() {
    let tabla_prod = document.getElementById("productos");

    tabla_prod.removeChild("tr");
}

function aniadirProducto() {
    let campo_nombre_prod = document.getElementById("nombre-prod");
    let campo_precio_unidad = document.getElementById("precio-unidad");
    let campo_cantidad_prod = document.getElementById("cantidad-prod");

    let producto = campo_nombre_prod.value.trim();
    let precio_ud = parseFloat(campo_precio_unidad.value);
    let cantidad_ud = parseInt(campo_cantidad_prod.value);

    let tr_producto = document.createElement("tr");
    let td_nombre = document.createElement("td");
    let td_precio_ud = document.createElement("td");
    let td_cantidad_ud = document.createElement("td");
    let td_borrar = document.createElement("td");
    let button_borrar = document.createElement("button");
    td_precio_ud.classList.add("precio");
    td_cantidad_ud.classList.add("unidades");
    button_borrar.textContent = "Eliminar";
    button_borrar.onclick = "eliminarElemento()";
    td_borrar.appendChild(button_borrar);

    td_nombre.textContent = producto;
    td_precio_ud.textContent = precio_ud.toFixed(2) + "€";
    td_cantidad_ud.textContent = cantidad_ud + " unidades";

    tr_producto.appendChild(td_nombre);
    tr_producto.appendChild(td_precio_ud);
    tr_producto.appendChild(td_cantidad_ud);
    tr_producto.appendChild(td_borrar);

    let tabla_prod = document.getElementById("productos");
    tabla_prod.appendChild(tr_producto);
    
    actualizarTotal();
}