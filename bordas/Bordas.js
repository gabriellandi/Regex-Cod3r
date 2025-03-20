const texto = 'Romaário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/^r/gi)) // ^ Inicio da linha/string
console.log(texto.match(/r$/gi)) // ^ Fim da linha/string

console.log(texto.match(/^r.*r$/gi)) // problema do dotall