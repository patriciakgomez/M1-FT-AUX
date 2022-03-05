const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
BinarySearchTree.prototype.search= function(value){
    if(this.value === value){
		return this.value;
	}
	if(value <= this.value && this.left !== null){
		return this.left.search(value);
	}else if(value > this.value && this.right !== null){
		return this.right.search(value)
	}else{
		return 'no se encontró el valor';
	} 
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)  (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height= function(count=0){
    if(!this.left && !this.right){
		return 0;
	}else{
		if(this.left && !this.right){
            return this.left.height()+1;
		}else if(!this.left && this.right){
            return this.right.height()+1;
		}else{
			return Math.max(this.left.height()+1, this.right.height()+1);
		}
	} 
	
}

module.exports={
    BinarySearchTree
}