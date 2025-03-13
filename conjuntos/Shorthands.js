const texto = `1,2,3,4,5,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) // irá capturar todos os numeros/digitos
console.log(texto.match(/\D/g)) // irá capturar todos os não numeros

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // NAO caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaços [^ \t\n\r\f]