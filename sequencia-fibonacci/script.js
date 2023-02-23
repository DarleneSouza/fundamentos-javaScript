function calcular(){
    let quantidade = document.getElementById('quantidade')
    const fibonacci = [0,1]
    let res = ""
    if(quantidade.value.length == 0 ){
        res = 'Impossivel contar! '
        window.alert('[ERRO] Faltam dados!')
    }else{
        res = 'Calculando: <br>'
        let n = Number(quantidade.value)
        for(let i = 2; i < n; i++){
            const nextNumber = fibonacci[i - 1] + fibonacci[i - 2]
            fibonacci.push(nextNumber)
        }
        for(const num of fibonacci ){
            res += `${num}, `
        }
    }
    window.document.getElementById("fibonacci").innerHTML = res;

}
