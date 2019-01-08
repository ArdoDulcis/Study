function main() {
    var lines = document.getElementById('test').value
    lines = lines.split('\n');
    lines.pop();
    var stone = [];
    var board = [
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'W', 'B', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'B', 'W', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
    ];
    for (var j = 1; j < parseInt(lines[0])+1; j++){
        stone[0] = lines[j].split(' ');
        var x = parseInt(stone[0][1])-1;
        var y = parseInt(stone[0][2])-1;
        var color = stone[0][0];
        board[y][x] = stone[0][0];
        board = checkup(board,y,x,color,-1,0); //top
        board = checkup(board,y,x,color,1,0); //bottom
        board = checkup(board,y,x,color,0,-1); //right
        board = checkup(board,y,x,color,0,1); //left
        board = checkup(board,y,x,color,-1,-1); //top left
        board = checkup(board,y,x,color,1,-1); //bottom left
        board = checkup(board,y,x,color,-1,1); //top right
        board = checkup(board,y,x,color,1,1); //bottom right
    }
    var countB = 0;
    var countW = 0;
    for (var k = 0; k < 8; k++){
        for (var l = 0; l < 8; l++){
            if (board[k][l] === 'B') {
                countB += 1;
            }
            else if (board[k][l] === 'W') {
                countW += 1;
            }
        }
    }
    if (countB > countW){
        console.log (pad(countB,2) + '-' + pad(countW,2) + ' ' + 'The black won!');
    }
    else if (countB < countW){
        console.log (pad(countB,2) + '-' + pad(countW,2) + ' ' + 'The white won!');
    }
    else {
        console.log (pad(countB,2) + '-' + pad(countW,2) + ' ' + 'Draw!');
    }
//check func
    function checkup(board,nowy,nowx,color,y,x) {
//setting
        var pointy = nowy + y;
        var pointx = nowx + x;
        var flag = false;
        for (var a = 0; a < 100; a++) {
            if (pointy < 8 && pointx < 8 && pointy >= 0 && pointx >= 0) {
                if (board[pointy][pointx] === 'E') {
                    break;
                } else if (board[pointy][pointx] === color) {
                    flag = true;
                    break;
                }
                pointy = pointy + y;
                pointx = pointx + x;
            }
            else {
                break;
            }
        }

        pointy = pointy - y;
        pointx = pointx - x;

        if (flag) {
            for (var b = 0; b < 100; b++) {
                if (pointy == nowy && pointx == nowx) {
                    break;
                } else {
                    board[pointy][pointx] = color;
                    pointy = pointy - y;
                    pointx = pointx - x;
                }
            }
        }
        return board;
    }
}