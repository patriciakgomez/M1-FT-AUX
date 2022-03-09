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
  let current = this.head, next=null, aux;
  while (current) {
    next = current.next;
    while (next) {
      if (current.value < next.value) {
        aux = current.value;
        current.value = next.value;
        next.value = aux;
      }else{      
        next = next.next;
      }
    }
    current = current.next;
  }

  /*let array=[]
  let current= this.head
  while(current){
    array.push(current.value);
    current= current.next
  }
    array=array.sort((a,b)=>b-a)
    this.head= null
    //array.forEach(num=> this.add(num))
    for(let num of array) this.add(num)*/
}

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
}




module.exports = {
  LinkedList
}



