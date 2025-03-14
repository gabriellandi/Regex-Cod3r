const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.245-23 ...`

console.log(texto.match(/[\d\.-]{14}/g))