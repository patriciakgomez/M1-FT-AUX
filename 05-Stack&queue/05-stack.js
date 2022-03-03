const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str) {
    //tu codigo aqui
    const stack = new Stack;
    var current=0, strEsp='', strSep=str.split(' ');
    console.log(strSep)
    for(let i=strSep.length-1; i>=0; i--){
        for(let j=0; j<strSep[i].length;j++){
            stack.push(strSep[i].charAt(j));
        }    
        stack.push(' ');
        console.log(stack)
    }
    while (stack.size()>0) {
        strEsp=strEsp+stack.pop();
    }
    console.log(strEsp);
    return strEsp.slice(1);

};








module.exports = {
    efectoEspejo,

}