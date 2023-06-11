//funcion que se encarga de guardar producto en tabla
function saveProduct(event){
    event.preventDefault();
    var resultado=getContent();
    addFila(resultado[0], resultado[1],resultado[2],resultado[3],resultado[4],resultado[5])
    cleanFrom();
}
//funcion encargadad de obtener los datos del formulario
function getContent(){
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("name").value;
    var cantidad = document.getElementById("cantidad").value;
    var costo = document.getElementById("costo").value;
    var precio = document.getElementById("precio").value;
    var vencimiento = document.getElementById("vence").value;
    return[codigo,nombre,cantidad,costo,precio,vencimiento];
}
//funcion encargada de agragar la fila y el producto a la tabla
function addFila(codigo,nombre,cantidad,costo,precio,vencimiento){
    
    var tabla= document.getElementById("tabla");
    var fila = tabla.insertRow();
    var celdaCodigo = fila.insertCell();
    celdaCodigo.textContent = codigo;
    var celdaNombre = fila.insertCell();
    celdaNombre.textContent = nombre;
    var celdaCantidad = fila.insertCell();
    celdaCantidad.textContent = cantidad;
    var celdaCosto = fila.insertCell();
    celdaCosto.textContent = costo;
    var celdaPrecio = fila.insertCell();
    celdaPrecio.textContent = precio;
    var celdaVencimiento = fila.insertCell();
    celdaVencimiento.textContent = vencimiento;
}
//funcion encargadad de limpiar el formulario
function cleanFrom(){
    document.getElementById("codigo").value ="";
    document.getElementById("name").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("costo").value="";
    document.getElementById("precio").value="";
    document.getElementById("vence").value="";
}
