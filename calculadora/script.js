let numeros = []
function adicionar(){
    let numero = document.getElementById('numero')
    let analisador = document.getElementById('analisador')
    if(numero.value.length == 0){
        window.alert(' Faltam dados!')
    }else{
        let n = Number(numero.value)
        let option = document.createElement('option')
        option.text = "Valor " + n + " adicionado."
        option.value = n
        analisador.appendChild(option)
        numeros.push(n)
    }
}
function ordenarNumeros(numeros){
    const numerosOrdenados = numeros.sort((a,b) => a - b)
    return numerosOrdenados
}
function calcularModa(numeros){
    const frequecy = {}
    let maxFreq = 0
    let moda = []
    numeros.forEach(element => {
        frequecy[element] = (frequecy[element] || 0) + 1
        if(frequecy[element]> maxFreq){
            maxFreq = frequecy[element]
            moda = [element]
        }else if(frequecy[element] === maxFreq){
            moda.push(element)
        }
    })
    return moda.length == Object.keys(frequecy).length ? "Nenhum numero se repete mais de uma vez" : moda
}
function calcularMedia(numeros){
    const sum = numeros.reduce((acc, value) => acc + value, 0)
    return  sum / numeros.length
}
function calcularMediana(numeros){
    const sorted = numeros.sort((a, b) => a - b)
        const middleIndex = Math.floor(sorted.length /2)
        if(sorted.length % 2 === 0){
            return  (sorted[middleIndex - 1] + sorted[middleIndex]) / 2
        }else{
            return sorted[middleIndex]
        }
}
function calcular(){
    let moda = 0
    let media = 0
    let mediana = 0
    if(numeros.length == 0){
        window.alert(' Adicionar valores antes de finalizar!')
    }else{
        media = calcularMedia(numeros)
        mediana = calcularMediana(numeros)
        moda = calcularModa(numeros)
        ordenado = ordenarNumeros(numeros)

    }
    console.log(media)
    console.log(mediana)
    console.log(moda)
    window.document.getElementById("ordenado").innerHTML = 'Ordenado os números = ' + '{' + ordenado + '}'
    window.document.getElementById("media").innerHTML = 'Media é = ' + media.toFixed(2)
    window.document.getElementById("mediana").innerHTML = 'Mediana é = ' + mediana
    window.document.getElementById("moda").innerHTML = 'Moda é = ' + moda
}