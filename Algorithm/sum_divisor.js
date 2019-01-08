function sumDivisor(num) {

    var intPlus = 0;
    var answer = 0;

    for (var i = 1; i <= num; i++){
        if (num % i == 0)
            intPlus += i
    }

    answer += intPlus

    return answer;
}

// test code
console.log(sumDivisor(12));