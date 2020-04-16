class Node {
    constructor(position) {
        this.position = position
        this.next = this
    }
}
class LList {
    constructor() {
        this.head = new Node(0)
    }
    suicideSquad(m) {
        let last = this.findLast().position, current = this.head
        while (last >= m) {
            for (let i = 0; i < m - 1; i++) {
                current = current.next
            }
            if (current.next.position != 0) this.remove(current.next.position)
            else this.remove(current.next.next.position)
            last--
        }
        this.display()
    }
    add(n) {
        let current = this.findLast()
        for (let i = 0; i < n; i++) {
            let newNode = new Node(current.position + 1)
            newNode.next = this.head
            current.next = newNode
            current = newNode
        }
    }
    findLast() {
        let current = this.head
        while (current.next.position != 0) {
            current = current.next
        }
        return current
    }
    find(posizione) {
        let current = this.head
        while (current.position != posizione && current.next.position != 0) {
            current = current.next
        }
        return current
    }
    findPrevious(posizione) {
        let current = this.head
        while (current.next.position != posizione) {
            if (current.next.position === 0) return null
            current = current.next
        }
        return current
    }
    insert(data, posizione) {
        let newNode = new Node(data)
        let current = this.head
        while (current.position != posizione) {
            if (current.next.position === 0) return null
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
    remove(position) {
        let prevNode = this.findPrevious(position)
        prevNode.next = prevNode.next.next
    }
    display() {
        let current = this.head
        while (current.next.position != 0) {
            console.log(current.next.position)
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
list.add(40)
list.suicideSquad(3)
