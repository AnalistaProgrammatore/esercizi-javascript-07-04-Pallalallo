class ParCheck {
    constructor(expr) {
        this.dataStore = [];
        this.top = this.dataStore.length;
        this.parPositions = [];
        this.expr = expr;
    }
    length() {
        return this.top;
    }
    push(data) {
        this.dataStore[this.top++] = data;
    }
    pop() {
        return this.dataStore[--this.top]
    }
    clear() {
        this.top = 0;
    }
    peek() {
        return this.dataStore[this.top]
    }
    checkPar() {

        for (let i = 0; i <= this.expr.length - 1; i++) {
            if (this.expr[i] === '(') { this.push(i + 1); }
            else if (this.expr[i] === ')') { this.pop(); }
        }

        if (this.length() === 0) console.log('L\'espressione è corretta')
        else {
            for (let i = 0; i <= this.dataStore.length - 1; i++) {
                this.parPositions.push(this.dataStore[i])

            }
            console.log('Le parentesi nelle posizioni', this.parPositions, 'rimangono aperte');
        }

    }
}

let parCheck = new ParCheck(`12+3*(42/(2-1)(()`);
parCheck.checkPar();
