//Las variables son espacios de memoria donde guardamos datos, en JS se pueden crear de 3 maneras

// var (antiguo e inseguro porque crea una variable global que esta disponible en toooooodo el codigo)
var miVariableGlobal = true;

//let (mas comun) de esta manera la variable esta disponible en el scope actual
let mivariable = 'hola soy una varible'

//const es como let pero no se puede nunca reasignar el valor
const miNombre = 'David'

/* TIPOS DE DATOS */


//string -son cadenas de caracteres para hacer textos y cosas
let miPrimerString = 'Hola'

//Number// son numeros y puedes hacer con ellos operaciones matematicas como comparaciones 'sumas - restas'
let miPrimerNumero = 8

//float// es como number pero tiene una parte decimal esto significa que no tiene que ser 2 o 3 esto significa que 
// noTiene que ser 2 o 3 puede ser 2,1 2,8 o 2,9

let miPrimerFloat = 2.1

//boolean// los boleanos solo pueden tener 2 valores 1 o 0 que se representa como true o false
let miPrimerBoolean = false

//undefined// este tipo de dato se utiliza cuando el dato de una variable no existe o no esta definida
let _undefined = undefined


/* EJERCICIO */

console.log('----------------------------------------------------------------')

console.log('el valor de mi miPrimerString es --> ' + miPrimerString);
console.log('y su tipo de dato es --> ' + typeof miPrimerString)

console.log('----------------------------------------------------------------')

console.log('el valor de miPrimerNumero es --> ' + miPrimerNumero)
console.log('y su tipo de dato es --> '+ typeof miPrimerNumero)


console.log('----------------------------------------------------------------')

console.log('el valor de mi miPrimerFloat --> ' + miPrimerFloat)
console.log('y su tipo de dato es --> ' + typeof miPrimerFloat)

console.log('----------------------------------------------------------------')

console.log('el valor de mi miPrimerBoolean --> ' + miPrimerBoolean)
console.log('y su tipo de dato es --> ' + typeof miPrimerBoolean)

console.log('----------------------------------------------------------------')

console.log('y el valor de mi _undefined --> ' + _undefined)
console.log('y su tipo de dato es --> ' + typeof _undefined)

console.log('----------------------------------------------------------------')


