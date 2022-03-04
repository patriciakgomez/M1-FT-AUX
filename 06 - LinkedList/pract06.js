
function LinkedList() {
    this.head = null;
    this.len = 0;
}



LinkedList.prototype.add = function (valor) {
    var nuevoNodo = new Node(valor);

    if (!this.head) {
        this.head = nuevoNodo;
    } else {
        var tailActual = this.head;
        while (tailActual.next !== null) {
            tailActual = tailActual.next;
        }
        tailActual.next = nuevoNodo;
    }
    this.len++;
}



LinkedList.prototype.remove = function () {
    if (!this.head) {
        return undefined;
    }

    if (this.head.next === null) {
        var unicoNodo = this.head;
        this.head = null;
        return unicoNodo.value;
    }

    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
        nodoPrevious = nodoActual;
        nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    this.len--;
    return nodoActual.value;
}

LinkedList.prototype.search = function (arg) {
    var nodoActual = this.head;

    if (nodoActual === null) {
        return null;
    }

    while (nodoActual !== null) {
        if (typeof arg === "function") {
            if (arg(nodoActual.value)) {
                return nodoActual.value;
            }
        } else if (nodoActual.value === arg) {
            return nodoActual.value;
        }
        nodoActual = nodoActual.next;
    }

    return null;
}

function Node(valor) {
    this.value = valor;
    this.next = null;
}

LinkedList.prototype.insert = function (data, pos) {
    if (this.len < pos) return this.add(data);
    var newNode=new Node(data), current = this.head;
    if (pos === 0) {
        newNode.next = this.head;
        this.head =newNode;
    } else {
        while (pos>1) {
            pos--;
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    this.len++;
    return this.head;
}
	
var linkedList = new LinkedList();
linkedList.add(6);
linkedList.add(4);
linkedList.add(2);
linkedList.add(7);
linkedList.add(8);
linkedList.add(1);
linkedList.insert(100, 4)