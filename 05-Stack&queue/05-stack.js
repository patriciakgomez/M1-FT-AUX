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
    var strEsp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            while (stack.size()) {
                strEsp += stack.pop();
            }
            strEsp += str[i];
        } else {
            stack.push(str[i]);
        }
    }
    while (stack.size()) {
        strEsp += stack.pop();
    }
    return strEsp;
};

module.exports = {
    efectoEspejo,

}