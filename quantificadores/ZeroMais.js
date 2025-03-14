const texto1 = 'De longe eu avistei o fogo e a uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is big fog in NYC'

// * -> zero ou mais 
const regex = /fogo* /gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))