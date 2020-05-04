class ToPostfix {
    constructor(operandi, operatori) {
        this.dataStore = [];
        this.top = this.dataStore.length;
        this.operandi = operandi;
        this.operatori = operatori;
    }
    length() {
        return this.top;
    }
    push(...data) {
        for (let i = 0; i < data.length; i++) {
            this.dataStore[this.top++] = data[i];
        }

    }
    pop() {
        return this.dataStore[--this.top]

    }
    clear() {
        this.top = 0;
    }
    peek() {
        return dataStore[top];
    }
    //parte dalla fine per inserire prima gli operatori poi gli operandi, se l'operatore è * o /
    //inserisce due operandi
    toPostfix() {
        let j = this.operatori.length - 1, i = this.operandi.length - 1;
        while (j >= 0) {
            if (this.operatori[j] === '*' || this.operatori[j] === '/') {
                this.push(this.operatori[j - 1], this.operatori[j], this.operandi[i], this.operandi[i - 1])
                j -= 2
                i -= 2
            }
            else {
                this.push(this.operatori[j], this.operandi[i])
                i--
                j--
            }
        }
        this.push(this.operandi[0])
        return this
    }
    //nello stackAcc mette i risultati delle molt. e div. e poi le somma con acc che accumula
    //i valori delle sottrazioni e addizioni
    risultato() {
        let stackAcc = [], acc = 0, curr1 = 0, curr2 = 0, i = 0, j = this.length() - 1;
        while (j > 0) {
            while (this.operandi.includes(this.dataStore[j])) {
                curr1 = curr2
                curr2 = this.pop()
                j--
            }
            if (this.dataStore[j] === '*') {
                j--
                if (this.dataStore[j] === '-')
                    stackAcc.push((-1) * curr1 * curr2)
                else {
                    stackAcc.push(curr1 * curr2)
                }
                this.pop()
                this.pop()
                j--
            }
            if (this.dataStore[j] === '/') {
                j--
                if (this.dataStore[j] === '-')
                    stackAcc.push((-1) * curr2 / curr1)
                else {
                    stackAcc.push(curr2 / curr1)

                }
                this.pop()
                this.pop()
                j--
            }
            if (this.dataStore[j] === '-') {
                acc += parseInt(curr1, 10) - parseInt(curr2, 10)
                j--
                this.pop()
            }
            if (this.dataStore[j] === '+') {
                acc += parseInt(curr2, 10) + parseInt(curr1, 10)
                j--
                this.pop()
            }
            curr2 = 0
        }
        while (i < stackAcc.length) {
            acc += parseInt(stackAcc[i], 10)
            i++
        }
        return acc
    }
}
let toPostFix = new ToPostfix('345623', '+-*-+');
console.log(toPostFix.toPostfix().risultato());
