/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map((el)=>{return el+1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums=[]) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let res=0;
   if (arrayOfNums.every((el)=>typeof el == 'number')) {
     for (let i = 0; i < arrayOfNums.length; i++) {
      res += arrayOfNums[i];
     }  
   }
   return res;
   // return typeof arrayOfNums[0]
}
// console.log(agregarNumeros([1,2]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let res=0;
   if (resultadosTest.every((el)=>typeof el == 'number')) {
     for (let i = 0; i < resultadosTest.length; i++) {
      res += resultadosTest[i];
     }  
   }
   return res/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let max=arrayOfNums[0];
   for (let i = 1; i < arrayOfNums.length; i++) {
      if (max<arrayOfNums[i]) {
         max=arrayOfNums[i];
      }
     }  
   return max
}
// console.log(numeroMasGrande([11,22,6,9]));
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length==0) return 0;
   if (arguments.length==1) return arguments[0];
   let res=1;
   for (let i = 0; i < arguments.length; i++) {
      res= res * arguments[i];
      
   }
   return res
   
}
// console.log(multiplicarArgumentos(1,2,3));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let res = 0;
   array.forEach(element => {
      if (element>18) {
         res ++;
      }
   });
   return res
}
// console.log(cuentoElementos([2,20,22,18]));
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   const array=['Es fin de semana','Es dia laboral','Es dia laboral','Es dia laboral','Es dia laboral','Es dia laboral','Es fin de semana']
   return array[numeroDeDia-1];
}
// console.log(diaDeLaSemana(7));
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let arr=num.toString();
   return arr[0]==9
   
}
// console.log(empiezaConNueve(950));
function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let igual=array[0];
   return array.every(el=>el == igual)
}
// console.log(todosIguales([2,2,2]));
function mesesDelAño(array=[]) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const res = [];
   array.forEach(el => {
      if(el=='Enero' || el == 'Marzo' || el == 'Noviembre') res.push(el);
   })
   if (res.includes('Enero') && res.includes('Marzo') && res.includes('Noviembre') ) {
      return res
      
   }
   return 'No se encontraron los meses pedidos';
}
// console.log(mesesDelAño(['Enero','Febrero','Abril','Marzo']));
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const res=[];
   for (let i = 0; i <= 10; i++) {
      res.push(6*i);      
   }
   return res
}
// console.log(tablaDelSeis());
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const res=[];
   array.forEach(element => {
      if (element > 100) {
         res.push(element);
      }
   });
   return res
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let numero = num
   const res=[];
   let error;
   for (let i = 0; i < 10; i++) {
      numero+=2 
      if (numero== i) {
         error = 'Se interrumpió la ejecución';
         break
      }
         
      res.push(numero);  
   }
   if (error) {
      return error
   }
   return res
}
// console.log(breakStatement(50));
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let numero =num
   const res=[];
   for (let i = 0; i < 10; i++) {
      if (i == 4) {
         continue;
      }   
      res.push(numero+=2);  
   }
   return res
}
console.log(continueStatement(2));
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
