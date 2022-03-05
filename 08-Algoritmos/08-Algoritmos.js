'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while ((j > -1) && (current < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;

}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;
  //if ([0,1].includes(array.length))return array;
  var pivot = array.shift(), left = [], right = [];
  while (array.length) {
    let item = array.shift()
    if (pivot >= item) {
      left.push(item);
    } else {
      right.push(item)
    }
  }
  array = [...quickSort(left), pivot, ...quickSort(right)];
  return array;


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  var array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  array = array.concat(left, right)
  return array;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};