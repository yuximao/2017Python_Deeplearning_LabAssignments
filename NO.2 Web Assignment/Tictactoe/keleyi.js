
var canvas = document.getElementById('canvas');
var ctn = canvas.getContext('2d');

var isWhite = true;
var isWell = false;

var imgBlack = new Image();
imgBlack.src = 'o.png';
var imgWhite = new Image();
imgWhite.src = 'x.png';

var chessData = [];

init();


function init() {
    for (var i = 80; i <= 200; i += 40) {

        ctn.beginPath();
        ctn.moveTo(80, i);
        ctn.lineTo(200, i);
        ctn.closePath();
        ctn.stroke();

        ctn.beginPath();
        ctn.moveTo(i, 80);
        ctn.lineTo(i, 200);
        ctn.closePath();
        ctn.stroke();
    }

    for (var x = 0; x < 6; x++) {
        chessData[x] = [];
        for (var y = 0; y < 6; y++) {
            chessData[x][y] = 0;
        }
    }
}


function play(e) {
    var x = parseInt((e.clientX ) / 40);
    var y = parseInt((e.clientY ) / 40);
    if(x>4||y>4||x<2||y<2){
        x=-1;y=0;
    }
    if (chessData[x][y] != 0) {
        alert('You cant play chess in this position:(');
        return;
    }

    if (isWell) {
        alert('Game over! click F5 to star!');
        return;
    }

    if (isWhite) {
        drawChess(1, x, y);
        judge(1, x, y);
        isWhite = false;
    } else {
        drawChess(2, x, y);
        judge(2, x, y);
        isWhite = true;
    }

}
//绘制单个棋子

function drawChess(chess, x, y) {
    if(x>4||y>4||x<2||y<2){
        x=-1;y=0;
    }
    if (x >= 0 && x < 6 && y >= 0 && y < 6) {
        if (chess == 1) {
            ctn.drawImage(imgWhite, x * 40 , y * 40 );
            chessData[x][y] = 1;
        } else {
            ctn.drawImage(imgBlack, x * 40 , y * 40 );
            chessData[x][y] = 2;
        }
    }
}
//输的算法

function judge(chess, x, y) {
    if(x>4||y>4||x<2||y<2){
        x=-1;y=0;
    }
    var hz = 0;
    var ve = 0;
    var nw = 0;
    var ne = 0;
    //判断左右
    for (var i = x; i > 0; i--) {
        if (chessData[i][y] != chess) {
            break;
        }
        hz++;
    }
    for (var i = x + 1; i < 6; i++) {
        if (chessData[i][y] != chess) {
            break;
        }
        hz++;
    }
    //判断上下
    for (var i = y; i > 0; i--) {
        if (chessData[x][i] != chess) {
            break;
        }
        ve++;
    }
    for (var i = y + 1; i < 6; i++) {
        if (chessData[x][i] != chess) {
            break;
        }
        ve++
    }
    //判断左上右下
    for (var i = x, j = y; i > 0, j > 0; i--, j--) {
        if (chessData[i][j] != chess) {
            break;
        }
        nw++;
    }
    for (var i = x + 1, j = y + 1; i < 6, j < 6; i++, j++) {
        if (chessData[i][j] != chess) {
            break;
        }
        nw++;
    }
    //判断右上左下
    for (var i = x, j = y; i >= 0, j < 6; i--, j++) {
        if (chessData[i][j] != chess) {
            break;
        }
        ne++;
    }
    for (var i = x + 1, j = y - 1; i < 6, j >= 0; i++, j--) {
        if (chessData[i][j] != chess) {
            break;
        }
        ne++;
    }

    if (hz >= 3 || ve >= 3 || nw >= 3 || ne >= 3) {
        if (chess == 1) {
            isWell = true;
            alert('Mr X is winner!');
        } else {
            isWell = true;
            alert('Mr O is winner!');
        }
    }
}
