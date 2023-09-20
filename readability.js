"use strict";
// OK primeiro passo pegar o texto 
// OK separar o texto com quantidade de letras, quantidade de palavras, e frases 
// OK ver o tamanho das palavras e o tamanho das frases
// a media de palavras em 100 letras e a media de frases a cada 100 palavras
let texto = 'adsin';
let quantLetras = 0;
let quantPalavras = 0;
let quantFrases = 0;
function separarLetras(texto) {
    quantLetras = texto.split(/[a-z]/i).length;
}
function separarPalavras(texto) {
    quantPalavras = texto.split(' ').length;
}
function separarFrases(texto) {
    quantFrases = texto.match(/!|\?|\./g)?.length;
}
function separarAll(texto) {
    separarPalavras(texto);
    separarLetras(texto);
    separarFrases(texto);
    console.log(`letras: ${quantLetras}`);
    console.log(`palavras: ${quantPalavras}`);
    console.log(`frases: ${quantFrases}`);
}
function MediaTamPalavras() {
    return (quantLetras / quantPalavras).toFixed(2);
}
function MediaTamFrase() {
    return ((quantPalavras / Number(quantFrases) * 100).toFixed(2));
}
separarAll(`Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.`);
console.log('media de palavra: ' + MediaTamPalavras());
console.log('media de frase: ' + MediaTamFrase());
console.log(`Congratulations! Today is your day. You're off to Great Places! You're off and away!`.split(/[a-z]/i));
