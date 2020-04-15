class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.previous = null
    }
}
class DLlist {
    constructor() {
        this.head = new Node('head')
    }
    find(data) {
        let current = this.head
        while (current.element != data) {
            current = current.next
        }
        return current
    }
    insert(data, position) {
        let newNode = new Node(data)
        let current = this.head
        while (current.element != position) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
        newNode.previous = current
    }
    remove(position) {
        let remNode = this.find(position)
        if (remNode.next != null) {
            remNode.previous.next = remNode.next
            remNode.next.previous = remNode.previous
            remNode.previous = null
            remNode.next = null

        }
    }
    back(n, data) {
        let nodeOne = this.find(data), current = nodeOne
        while (n >= 0 && current.previous != null) {
            current = current.previous
            n--
        }
        nodeOne.previous.next = nodeOne.next
        nodeOne.next.previous = nodeOne.previous
        nodeOne.previous = current.previous
        nodeOne.next = current
        current.previous.next = nodeOne
        current.next.previous = nodeOne

    }
    show(data) {
        let current = this.find(data)
        console.log(current.element, current.previous.element, current.next.element)
    }
    display() {
        let current = this.head
        while (current.next != null) {
            console.log(current.next.element)
            current = current.next
        }
    }
}

let list = new DLlist()
list.insert('neonato', 'head')
list.insert('bimbo', 'neonato')
list.insert('bambino', 'bimbo')
list.insert('ragazzino', 'bambino')
list.insert('ragazzetto', 'ragazzino')
list.insert('ragazzo', 'ragazzetto')
list.back(2, 'ragazzetto')
list.display()
list.show('ragazzetto')
