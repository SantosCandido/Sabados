/* isto e um comentario multi linha */
/*
    E e assim
    que ele
    funciona
*/

/** existem 3 tipos de declarar vars, em JS
 * se bem que nunca vais usar um deles (espero eu)
 * var -> const, let
 */

//a accessibilidade da var vem primeiro, depois o nome da var e depois o valor
var nome = "marco";

// para declarar nomes declara-se em camelCase, ou seja a primeira letra da primeira palavra em minusculo, e as restantes palavras comecam em maiusculo
// const tem de ser inicializado no momento de declaracao, e nao pode ter o seu valor alterado
const nomeDoMeuAmigo = "Jose";

// let pode so ser declarado, sem inicializacao, e o seu valor pode ser alterado, pior ainda, pode receber qualquer tipo de informacao, que ele nao se queixa
let nomeDaContaAtualDoAndre = "Shakira";
console.log(nomeDaContaAtualDoAndre);
nomeDaContaAtualDoAndre = true;

console.log("O nome do meu amigo e:", nomeDoMeuAmigo, "\nO nome da conta atual do andre e:", nomeDaContaAtualDoAndre);
nomeDaContaAtualDoAndre = 'Ze Da Bala';
console.log("O nome da conta atual do andre e:", nomeDaContaAtualDoAndre);

// isto e um number, pode ou nao ter casas decimais, fica ao teu criterio
const numero = 0.02;

// isto e string, pode ou nao ser vazio, e um conjunto de caracteres
const textoPreenchido = 'esta string tem valor'

// isto e uma string vazia
const texto = '';

//isto e uma variavel let que nao foi inicializada
let textExemplo;
console.log(textExemplo); //undefined
// Agora foi inicializada, porque lhe foi atribuido um valor
textExemplo = 'exemplo';
console.log(textExemplo.length); // 7

// isto e um boolean, pode ser true, or false, mas como qualquer outra variavel, pode nao ser inicializado
// 1 e 0 tambem e avaliado como boolean, 1 e true, 0 e false
let eInverno = true;

/**
 * A Principal diferenca do undefined vs o null e que,
 * undefined significa que a vareavel nao foi inicializada,
 * enquanto o null significa ausencia de valor mas foi inicializado
 */
let varSemValor = null;

// Assignacoes

let a = 3;
var b = 4;
var c = b;
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);
