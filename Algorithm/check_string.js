function numPY(s){
    let count_p = 0;
    let count_y = 0;
    let result = "";
    count_p = s.match(/p/gi) === null ? 0 : s.match(/p/gi).length;
    count_y = s.match(/y/gi) === null ? 0 : s.match(/y/gi).length;
    result = count_p === count_y ? true : count_p !== count_y ? false : true
    console.log(result);
}

numPY("pPoooYy");
numPY("ooo");