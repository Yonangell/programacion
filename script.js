//alert("Soy un script");

function mostrar(nombre, edad) {
    alert("Nombre: " + nombre + "  Tengo " + edad + " años");
}
mostrar("Yonangell", 42)

var nombre = prompt("Ingrese su nombre: ");
var apellido = prompt("Ingrese su apellido: ");
var edad = prompt("Ingrese su edad: ");
var telefono = prompt("Ingrese su numero de telefono: ");

var mensajeFinal = "Nombre: " + nombre + ". Apellido: " +apellido+ ". Edad: " 
+edad+ ". Tel: " +telefono;

alert(mensajeFinal);