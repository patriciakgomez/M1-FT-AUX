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
    const pila = new Stack;
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
    return arr2.join(' ');
}
    
    /*const pila = new Stack;
    var strEsp='', strSep=str.split(' '); 
    for(let i=strSep.length-1; i>=0; i--){
        for(let j=0; j<strSep[i].length;j++){
            stack.push(strSep[i].charAt(j));
        }    
        stack.push(' ');
    }
    while (stack.size()>0) {
        strEsp=strEsp+stack.pop();
    }
    return strEsp.slice(1);
};*/

module.exports = {
    efectoEspejo,

}