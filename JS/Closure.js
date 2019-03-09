closure_counter = () => {
    var n = 0;
    return {
        count : () => {
            return n++;
        },
        reset : () => {
            n = 0;
        }
    }
};

encapsulation_counter = (n) => {
    if (n == undefined) {
        console.log("n is undefined");
    } else {
        this.n = n;
    }
    encapsulation_counter.prototype.count = () => {
        return this.n++;
    };
    encapsulation_counter.prototype.reset = () => {
        return this.n = 1;
    };
};