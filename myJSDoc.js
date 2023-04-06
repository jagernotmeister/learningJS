console.log es la funcion que me permite ver logear en la consola lo que necesito
console.error es para marcar un error dentro de la hoja de codigo
console.warn es para emitir un warning dentrop de la consola

console tambien tiene mas funciones, se pueden ver en mdn 

VARIABLES LET Y CONST

se usan las variables let y construction
con let se pueden reasuignar valores en cambion con const no se pueden 
const es por constante, no se puede cambiar

let score = 20
score = 10 
se puede reasignar una nuevo valores en cambion

DATA TYPES

strings: const name = "john"; sirve para asignar un texto con o sin numeros a una variable se seniala con comillas
numbers: const age = 23; sirve para asignar numeros a una variable, sin nada de por Medio, solo el numero
boolean const isCool = true sirve para asignar a la variable un valor verdadero o falso
null: const x = null sirve apra asignarla a la avariable un valor vacio
undefined: const y = undefined sirve para agregarle a la variable un valor indefinido
con...........st name = 'jared'
const age = 23 
    //STRINGS
CONCATENACION 
console.log('my name is ' + name + ' and my age is ' + age)
TEMPLATE STRING sirve para poder agregar las variables de una manera sencilla 
console.log(`my name is ${name} and my age is ${age}`)

// STRING PROPERTIES AND METHODS

//properties 

length property :: properties can be assigned to a variable or object calling them with . like
.length or .map or .filter

const s = "Hello World"
console.log(s.length) the property length gives me the value of how many characters has the string 


//methods

.split method split gives me the string in an array of strings separated by spaces
console.log(s.split())

toUpperCase() method :: method can be assigned to a variable or object callign the with camelCase and parenthesis at the end of the sentence

console.log(s.toLowerCase()) this method gives me the string in lower case 

//arrays are variables that hoplds multiple values

//tyhis is the way that nobody uses

const numbers = new array(1,2,3,4)

// this is the way that everybody uses them
const fruits = ["raspberries", "grapes", "tuvieja"]

console.log(fruits)
 
// when we want a single string from our aaray we call it with brackets and the number of the position of the string in the array that

// another method is push()

// we want to add one more string to the array fruits so we use push()

fruits.push('mangos') 
//and this is how we add an string at the end into an array using push method
// to add a string at the beginning of the array we use the method unshift
fruits.unshift('pears')
// and then the string pears will appear in the beginning of the array
// arrays are zero base that mmeans that index starts from 0 to infinite

// OBJECTS
 const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    hobbies: ['bikes','djing', 'animals']
    
 }
 
 console.log(`tu vieja es `)