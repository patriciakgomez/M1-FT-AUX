
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    var newArray = [];
    for (let el of array) {
        if (el < 10) {
            newArray.unshift(el)
        }
    }
    /*array.forEach(elem=> {
        if(elem<10)
        newArray.unshift(elem)
    })*/
    return newArray;
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let men=array1[0]
    for (let el1 of array1) {
        if (el1<men){
            men=el1
        }
        for (let el2 of array2) {
            if (el2<men){
                men=el2
            }
            if (el1 === el2) {
                return el1;
            }
        }
    }
    return men
}



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    var newArray = [];
    for (let el of array) {
        if (Array.isArray(el)) {
            let suma = 0;
            for (let elArr of el) {
                suma += elArr;
            }
            newArray.push(suma);
        } else {
            newArray.push(el);
        }
    }
    return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    var newArray = [], res = numero / divisor;
    if (!Number.isInteger(res)) return false;
    for (i = 0; i < divisor; i++) {
        newArray.push(res);
    }
    return newArray;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    var menmay = [], men = array[0], may = array[0];
    for (let el of array) {
        if (el < men) men = el;
        if (el > may) may = el;
    }
    menmay=[men, may];
    return menmay;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};