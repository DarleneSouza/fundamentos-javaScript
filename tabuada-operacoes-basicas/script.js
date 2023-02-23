function gerarTabuada(){
    let numero = document.getElementById('numero')
    let multiplicacao = document.getElementById('multiplicacao')
    let divisao = document.getElementById('divisao')
    let subtracao = document.getElementById('subtracao')
    let adicao = document.getElementById('adicao')
    if(numero.value.length == 0){
        window.alert('Por favor Digite um numero!')
    }else{
        let n = Number(numero.value)
        multiplicacao.innerHTML = ''
        divisao.innerHTML = ''
        subtracao.innerHTML = ''
        adicao.innerHTML = ''
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            let resultado = n * i
            item.text = n + " x " + i  + " = " + resultado
            multiplicacao.appendChild(item)
        }
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            let resultado = n / i
            item.text = n + " / " + i + " = " + resultado.toFixed(2)
            divisao.appendChild(item)
        }
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            let resultado = n - i
            item.text = n + " - " + i + " = " + resultado
            subtracao.appendChild(item)
        }
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            let resultado = n + i
            item.text = n + " + " + i + " = " + resultado
            adicao.appendChild(item)

        }
    }
}