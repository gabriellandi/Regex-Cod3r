const texto = `
123456
cod3r
QUASE123!
#0Pa1
#essaSenhaEGrande1234

#0pA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{6,20}$/gm))