const varA = 2;
const varB = 3;

const soma =  varA + varB;
console.log('soma de varA mais varB: ', soma);

const subtracao = varB - varA;
console.log('subtracao de varA menos varB: ', subtracao);

const divicao = varB / varA;
console.log('divicao de varB por varA: ', divicao);

const multiplicacao = varA * varB;
console.log('multiplicacao de varA por varB: ', multiplicacao);

let somaComOProprioValor = soma;
somaComOProprioValor = somaComOProprioValor + multiplicacao;
console.log('somaComOProprioValor: ', somaComOProprioValor);

/**
* Este atalho funciona para qualquer tipo de calculo, seja + - / *
* lado esquerdo adiciona a vareavel do lado esquerdo, no lado direito adiciona no lado direito
* a = 2
* b = 3
* a -= b -> a e -1
* a =- b -> b e 1
*/

let somaAtalho = soma;
somaAtalho += multiplicacao;
console.log('somaAtalho: ', somaAtalho);

/**
 * Resto %
 * o caracter % representa o resto, ou seja e uma divisao, mas em vez de te dar o valor da divisao, da te o resto
 */
const resto = varB % varA;
console.log('resto: ', resto);

// parentisses funcionam como isoladores para o calculo 
const calculo = 3 * (10+5);
console.log(calculo);
