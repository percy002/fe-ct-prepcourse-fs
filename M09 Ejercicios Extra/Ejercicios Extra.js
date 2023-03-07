/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arr =[]
   for(const key in objeto) {
      arr.push([key,objeto[key]])
   }
   return arr
}

function numberOfCharacters(string="") {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const palabra = string.split('');
   const letras = []
   palabra.forEach(el =>{
      if (! letras.includes(el)) {
         letras.push(el)
      }
   })
   let res = {}
   letras.sort()
   letras.forEach(el =>{
      res[el] = 0
   })
   
   palabra.forEach(el => {      
         res[el]=res[el] + 1
   })
  
   return res
}
// console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'));
function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const arr = string.split('')
   const mayus=[]
   const minus=[]
   arr.forEach(el =>{
      if (el.toUpperCase() === el) {
         mayus.push(el);
      }else{
         minus.push(el)
      }
   })
   
   return [...mayus,...minus].join('')
}
// console.log(capToFront('HsoyHENRY'));
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const fraseArr = frase.split(' ');
   const fraseMirror=fraseArr.map(el =>{
      return el.split('').reverse().join('')
   })
   return fraseMirror.join(' ')
}
// console.log(asAmirror("The Henry Challenge is close!"));
function capicua(numero=0) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let capicua = numero.toString().split('');
   let res = "Es capicua"
   for (let i = 0; i < capicua.length/2; i++) {
      if (capicua[i] !== capicua[capicua.length-1-i]) {
         res = "No es capicua"
      }
   }
   return res
}
// console.log(capicua(12212));
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const frase=[] = string.split('');
   const res = frase.filter(el=>{
      return el != 'a' && el !='b' && el !='c'
   })
   return res.join('')
}
// console.log(deleteAbc('aabbcddd'));
function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b)=>{
      return a.length - b.length
   })
   return arrayOfStrings
}
// console.log(sortArray(["You", "are", "beautiful", "looking"]));
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const res=[] = array1.filter(el =>{
      return array2.includes(el)
   })
   return res
}
// console.log(buscoInterseccion([43,23,33],[1,3,4]));
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
