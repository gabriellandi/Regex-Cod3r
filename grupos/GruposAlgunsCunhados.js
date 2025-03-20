const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC'

console.log(texto.match(/[(abc)]/gi)) // Dentro de um conjunto não existe grupo
console.log(texto.match(/([abc])/gi)) // Dentro de um grupo existe sim um conjunto
console.log(texto.match(/(abc)/gi))