function mod(mod_x) {
    mod_x = parseFloat(mod_x);
    $('#save').text(add_comma((100 * mod_x).toFixed(5).replace(delzero, '')));
    $('#number').text('');
    $('#calc').text('');
    num = "";
};
function calc_core (x, y, operator) {
    x = parseFloat(x.replace(delcom, ''));
    y = parseFloat(y);
    switch (operator) {
        case '+' :
            $('#save').text(add_comma((x + y).toFixed(5).replace(delzero, '')));
            break;
        case '-' :
            $('#save').text(add_comma((x - y).toFixed(5).replace(delzero, '')));
            break;
        case '×' :
            $('#save').text(add_comma((x * y).toFixed(5).replace(delzero, '')));
            break;
        case '÷' :
            $('#save').text(add_comma((x / y).toFixed(5).replace(delzero, '')));
            break;
        default :
            $('#calc').text('');
            $('#save').text(add_comma(x.toFixed(5).replace(delzero, '')));
            break;
    }
    $('#number').text('');
    num = ""
};
function scientific_calc_core (num1, scientific_calc) {
    num1 = parseFloat(num1);
    switch (scientific_calc) {
        case 'cos' :
            $('#save').text(add_comma(Math.cos((num1 * 3.141592) / 180).toFixed(5).replace(delzero, '')));
            break;
        case 'sin' :
            $('#save').text(add_comma(Math.sin((num1 * 3.141592) / 180).toFixed(5).replace(delzero, '')));
            break;
        case 'tan' :
            $('#save').text(add_comma(Math.tan((num1 * 3.141592) / 180).toFixed(5).replace(delzero, '')));
            break;
        case 'fact' :
            $('#save').text(add_comma(factorial(num1).toFixed(5).replace(delzero, '')));
            break;
        case 'sqrt' :
            $('#save').text(add_comma(Math.pow(num1, 2).toFixed(5).replace(delzero, '')));
            break;
        case 'log' :
            $('#save').text(add_comma((Math.log(num1) / Math.log(10)).toFixed(5).replace(delzero, '')));
            break;
        default :
            $('#save').text('');
            break;
    }
    num = "";
    $('#number').text('');
    $('#calc').text('');
};
function factorial(fact_num) {
    if (fact_num < 0) {
        return -1;
    }
    else if (fact_num == 0) {
        return 1;
    }
    else {
        return (fact_num * factorial(fact_num - 1));
    }
};