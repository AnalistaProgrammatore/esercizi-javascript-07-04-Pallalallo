class Node {
    constructor({ grade = null, subject = null, exam = null, alunno = null }) {
        this.alunno = alunno
        this.grade = grade
        this.subject = subject
        this.exam = exam
        this.next = null
    }
}

class Grades {
    constructor(alumn) {
        this.head = new Node({ alunno: alumn })
    }
    find(esame) {
        let current = this.head
        while (current.exam != esame) {
            current = current.next
        }
        return current
    }
    findPrevious(esame) {
        let current = this.head
        while (current.next.exam != esame) {
            current = current.next
        }
        return current
    }
    insert(voto, materia, esame) {
        let newNode = new Node({ grade: voto, subject: materia, exam: esame })
        let current = this.head
        while (current.exam <= esame && current.next != null) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
    remove(esame) {
        let prevNode = this.findPrevious(esame)
        if (prevNode.next != null) prevNode.next = prevNode.next.next
    }
    display() {
        let current = this.head
        console.log('Matricola:', this.head.alunno)
        while (current.next != null) {
            console.log('Esame n.', current.next.exam,
                'Materia:', current.next.subject,
                'Voto:', current.next.grade)
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

let andrea = new Grades('Andrea')
andrea.insert(3, 'informatica', 1)
andrea.insert(1.5, 'sistemi', 2)
andrea.insert(0.5, 'programmazione', 3)
andrea.display()
