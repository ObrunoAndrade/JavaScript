function contar() {
    let NumI = document.getElementById('txti')
    let NumF = document.getElementById('txtf')
    let NumP = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (NumI.value.length == 0 || NumF.value.length == 0 || NumP.value.length == 0 ){
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    }else {
        res.innerHTML='Contando: '
        let i = Number(NumI.value)
        let f = Number(NumF.value)
        let p = Number(NumP.value)
        if (p <=0) {
            window.alert('Passo Invalido! considerando passo 1')
            p = 1
        }
        if ( i < f) {
            //contagem crescente
            for ( let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

    }

}