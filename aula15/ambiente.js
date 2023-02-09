let num = [5, 8, 9, 3, 2]
num.push(1)
num.sort()
console.log(num)
console.log(`Vetor tem ${num.length} posições`)
console.log(`Primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if ( pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
