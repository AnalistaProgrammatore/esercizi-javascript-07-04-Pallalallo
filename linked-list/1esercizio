class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LList {
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
    findPrevious(data) {
        let current = this.head
        while (current.next.element != data) {
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
    }
    remove(position) {
        let prevNode = this.findPrevious(position)
        if (prevNode.next != null) prevNode.next = prevNode.next.next
    }
    display() {
        let current = this.head
        while (current.next != null) {
            console.log(current.next.element)
            current = current.next
        }
    }
    advance(n, data) {
        let nodeOne = this.findPrevious(data),
            nodeTwo = this.find(data),
            current = this.find(data)
        nodeOne.next = nodeOne.next.next
        while (current != null && n >= 0) {
            current = current.next
            n--
        }
        nodeTwo.next = current.next
        current.next = nodeTwo
    }
}

let list = new LList()
list.insert('neonato', 'head')
list.insert('bimbo', 'neonato')
list.insert('bambino', 'bimbo')
list.insert('ragazzino', 'bambino')
list.insert('ragazzetto', 'ragazzino')
list.insert('ragazzo', 'ragazzetto')
list.advance(2, 'bimbo')
list.display()

