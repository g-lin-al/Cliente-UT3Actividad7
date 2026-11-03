function aniadirProducto() {
    let campo_nombre_prod = document.getElementById("nombre-prod");
    let campo_precio_unidad = document.getElementById("precio-unidad");
    let campo_cantidad_prod = document.getElementById("cantidad-prod");

    let producto = campo_nombre_prod.value.trim();
    let precio_ud = campo_precio_unidad.value;
    let cantidad_ud = campo_cantidad_prod.value;

    let div_producto = document.createElement("div");
}