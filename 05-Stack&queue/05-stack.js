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
    /*const pila = new Stack;
    var arr2=[], strEsp='', strSep=str.split(''); 
    for(i=0; i<str.length; i++){
        pila.push(str[i]); //[C,o,l,o,m,b,i,a, ,A,r,g,e,n,t,i,n,a]
    }
    while(pila.size()>0){
        strEsp=strEsp+pila.pop(); //'anitnegrA aibmoloC'
    }
    strSep=strEsp.split(" ")
    strSep.forEach(e => pila.push(e));//[anitnegrA,aibmoloC]
    while(pila.size()>0){
        arr2.push(pila.pop()); //'aibmoloC anitnegrA'
    }
    return arr2.join(' ');*/

    //   Colombia Argentina: aibmoloC anitnegrA
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