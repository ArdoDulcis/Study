function main() {
    var lines = document.getElementById('test').value
    lines = lines.split('\n');
    lines.pop();
    lines.shift();
    var arr = [];
    var count = 0;
    arr = Repetitions(lines, 3);
    for (var i = 0; i < arr.length; i++) {
        if ((parseInt(arr[i][0]) + parseInt(arr[i][1]) + parseInt(arr[i][2])) % 7 == 0) {
            count += 1;
        }
    }
    alert(count);
}

function Repetitions(comboOptions, comboLength) {
    if (comboLength === 1) {
        return comboOptions.map(comboOption => [comboOption]);
    }

    const combos = [];

    comboOptions.forEach((currentOption, optionIndex) => {
        const smallerCombos = combineWithoutRepetitions(
            comboOptions.slice(optionIndex + 1),
            comboLength - 1,
        );

        smallerCombos.forEach((smallerCombo) => {
            combos.push([currentOption].concat(smallerCombo));
        });
    });
    return combos;
}