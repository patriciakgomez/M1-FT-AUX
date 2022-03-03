// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  //escribe aqui tu codigo
  /*array.forEach(element => {
    prod=prod*element;
  });
  return prod;*/
  if (array.length === 0) {
    return 1;
  } else {
    var primer = array.shift();
    return primer * producto(array);
  }
};


// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  var result = false;
  for (var prop in obj) {
    var valObj = obj[prop];
    if (typeof valObj === 'object') {
      result=isThere(obj[prop], value);
    } else {
      if(valObj===value){
        result= true;
      }
    }
  }
  return result;
}



  /*function toArray(obj) {
    var result = [];
    for (var prop in obj) {
      var value = obj[prop];
      if (typeof value === 'object') {
        result.push(toArray(value)); // <- recursive call 
      } else {
        result.push(value);
      }
    } return result;
  }*/
module.exports = { producto, isThere };
