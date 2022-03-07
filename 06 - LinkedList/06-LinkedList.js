const { LinkedList, Node } = require("../estructuras")
//agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  /*var count=0
  if(this.head){
    var current = this.head;
    count++
    while (current.next !== null) {
      current = current.next;
      count++
    }
  }
  return count;*/
  return this.len
}


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
//                                                      
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.

LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let actual = this.head, siguiente=null, aux;
  while (actual != null) {
    siguiente = actual.next;
    while (siguiente != null) {
      if (actual.value < siguiente.value) {
        aux = actual.value;
        actual.value = siguiente.value;
        siguiente.value = aux;
      }else{      
      siguiente = siguiente.next;
      }
    }
    actual = actual.next;
  }
};

//agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
//tomar el head como posicion 0

// 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
LinkedList.prototype.insert = function (data, pos) {
  if (this.len < pos) return this.add(data);
  var newNode = new Node(data), current = this.head;
  if (pos === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    while (pos > 1) {
      pos--;
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  this.len++;
  return this.head;
}



module.exports = {
  LinkedList
}



