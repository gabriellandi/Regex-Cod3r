const texto = 'João é calmo, mas no transito fica nervoso.'


console.log(texto.match(/[\wÀ-ú]+/gi))

//Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

//Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
