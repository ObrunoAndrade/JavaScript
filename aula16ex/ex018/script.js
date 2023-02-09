let num = document.querySelector('imput#fnum')
let lista = ocument.querySelector('select#flista')
let res = document.querySelector('dic#res')
let valores = []

function isNumero(n) {
    if(Number(n)>= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.txt = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }else {
        window.alert('valor invalido ou ja existente.')
    }
}