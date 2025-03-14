const texto = `Lista telefonica:
    - (11) 98756-1212
    -98763-4321`

const regexDDD = /[(+\d+)]{4}/
console.log(texto.match(/(\(\d{2}\))?\s?\d{5}-\d{4}/g))