/*Ejercicio 01 Realizar una funcion que reciba un numero y escriba una 
piramide desde 1 hasta ese numero*/

const piramide = function (numero) {
    // Declaro variable
    let espacio = "";
    for (let i = 1; i <= numero; i++) {
        for (let x = 1; x <= i; x++) {
            espacio += x;
        }
        espacio += "\n";
        console.log(espacio);
    }
}
// Prueba funcion piramide
piramide(3);
piramide(6);

/*Ejercicio 02 Escribir una funcion que reciba 2 array y devuelva un array 
con todos los elementos que coinciden entre ellos*/


const datosIguales = function(Array1, Array2) {
    // Declaro variable
    const data = [];
    // Recorro ambos arrays
    for (let i = 0; i < Array1.length; i++) {
      for (let x = 0; x < Array2.length; x++) {
        // Si son exactamente iguales lo pongo en el nuevo array
        if (Array1[i] === Array2[x]) {
          data.push(Array1[i]);
          break;
        }
      }
    }
    return data;
  }

// Pruebas de la funcion datos iguales
const primerArray = ['rojo', 'azul', 'amarillo']
const segundoArray = ['blanco', 'negro', 'rojo']
console.log(datosIguales (primerArray,segundoArray));

const tercerArray = [4, 3, true, 'manzana']
const cuartoArray = ['pera', 3, false, true, 3, true]
console.log(datosIguales (tercerArray,cuartoArray));



// Ejercicio 03
/* Crear las clases necesarias para generar carritos respetando la estructura 
del objeto dado..*/
/* 3.2) Agregar un metodo a la clase que agregue un producto al carrito y 
actualice el montoTotal */


class Carrito {
    productos = [];
    montoTotal = 0;
    
    constructor (productos,montoTotal){
      this.montoTotal = montoTotal;
      this.productos.push(productos)
    }
  agregarProducto(nombre, precio, unidades) {
        if (nuevoCarrito1.productos.indexOf(nombre) >= 0){
            console.log("Ya existe el producto "+ nombre +"en el carrito");
   
       }else {
        montoAcumulado=montoAcumulado + (precio * unidades);
        console.log("Producto agregado al carrito: "+nombre+" - precio $ "+precio)
        this.montoTotal=montoAcumulado;
        this.productos.push(nombre)
       }
     }
    }

// Pruebas de funcion carrito
//Creamos el carrito
let nuevoCarrito1  = new Carrito("leche",100);
let montoAcumulado = nuevoCarrito1.montoTotal;
console.log(nuevoCarrito1)
console.log(montoAcumulado)
console.log("El monto al crear el carrito es igual a $ "+ montoAcumulado)
// Sumamos un producto
nuevoCarrito1.agregarProducto("azucar",100,2);
console.log("El monto al sumar un producto es igual a $ "+ montoAcumulado)

// Sumamos un producto igual para generar el error
nuevoCarrito1.agregarProducto("azucar",100,2);
console.log("Error");