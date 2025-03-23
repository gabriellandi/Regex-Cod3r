const texto = '0 1 10 192 199 201 249 255 245 312 1010 1512'

console.log(texto.match(/\b(\d{1,2}|1\d{1,2}|2[0-4]\d{1}|25[0-5])\b/g))