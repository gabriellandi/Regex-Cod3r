const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const file = require('./file')
const texto = file.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i

let codigo = texto.match(codeRegex)[0]

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas 
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)/g, 'd857cf')

// tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1386e2')

// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
console.log(conteudoFinal)
file.write('codigoFonte.html', conteudoFinal)