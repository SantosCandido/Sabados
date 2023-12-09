let gostamosDeDragonBall = true;
let gostamosDeOnePiece = true;

let oMarcoTaUpComDB = false;
let oZeTaUpComDB = true;

let oMarcoImportaseComSpoilDeDB = false;
let oMarcoImportaseComSpoilDeOP = true;

let oMarcoTaUpComOP = false;
let oZeTaUpComOP = true;



// = -> assignacao
// == -> Comparacao de valores
/**
 * 2 == '2' -> true
 * 0 == 0 -> true
 * 'a' == 'a' -> true
*/

// === -> comparacao de valor e tipo
/**
 * 2 === '2' -> false
*/

const matematica = 2 + 2;

if (matematica === 5) {
    console.log('sou muita burro');
} else if(matematica === 4 ){
    console.log('2 + 2 = 4');
} else {
    console.log('sou ainda mais burro');
}

// && -> E - valida todos os parametros, se houver pelo menos 1 false, falha (todos tem de ser true para passar)
// || -> OU - valida ATE encontra um true, se houver pelo menos 1 true, pass (so falha se forem todos false)
// ! -> diferente
/**
 * !true === false -> true
 * true !== false -> true
 * 2 !== 3 -> true
 * */

if (gostamosDeDragonBall || gostamosDeOnePiece) {
    console.log('gostamos de anime');
}

if(gostamosDeOnePiece && oMarcoTaUpComOP && oZeTaUpComOP) {
    console.log('podemos falar dos ultimos eventos de op');
} else {
    console.log('nao podemos falar de op');
}

if(gostamosDeDragonBall && (oMarcoTaUpComDB || !oMarcoImportaseComSpoilDeDB) && oZeTaUpComDB) {
    console.log('podemos falar dos ultimos eventos de dragon ball');
} else {
    console.log('nao podemos falar de db');
}

/**
 * maiores e menores
 *  1 < 2
 *  2 > 1
 *  vareavel >= 2
 *  vareavel <= 2
 */

//loops
// i ++ -> e adicionado, depois do conteudo do loop
// ++ i -> e adicionado, antes do conteudo do loop
for(let i = 0; i < 10;  i += 1) {
    console.log('O i e: ', i+1);
}

let iterador = 1;
while (iterador <= 10 ) {
    console.log('iterador', iterador);
    iterador++;
} 

let clickPos = 0;

function remakeGrind() {
    let grid = '';
    for(let i = 0; i < 10;  i += 1) {
        let bracket = i + ' ';
        for(let j = 0; j < 10;  j += 1) {
            let drawDot = ' ';
            if ((i*10) + j === clickPos) {
                drawDot = '.';
            }
            bracket += '[' + drawDot + ']';
            if (j === 9 ) {
                bracket += '<br>';
            }
        }
        grid += bracket;
        
    }
    clickPos ++;
    console.log(clickPos);
    if(clickPos === 100) {
        clickPos = 0;
    }
    document.getElementById('grid-container').innerHTML = grid;
}

this.remakeGrind();