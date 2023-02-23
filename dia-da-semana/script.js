function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var diaSemana = data.getDay()
    var diaMes = data.getDate()
    var mes = data.getMonth()
    var mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    switch(diaSemana){
        case 0:
            msg.innerHTML = `Hoje é domingo, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/domingo.jpg`
            document.body.style.background = '#8B827B'
            break;
        case 1:
            msg.innerHTML = `Hoje é segunda-feira, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/segunda-feira.jpg`
            document.body.style.background = '#C1C0C5'
            break;
        case 2:
            msg.innerHTML = `Hoje é terca-feira, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/terca-feira.jpg`
            document.body.style.background = '#4C9D97'
            break;
        case 3:
            msg.innerHTML = `Hoje é quarta-feira, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/quarta-feira.jpg`
            document.body.style.background = '#3F4A81'
            break;
        case 4:
            msg.innerHTML = `Hoje é quinta-feira, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/quinta-feira.jpg`
            document.body.style.background = '#CE8845'
            break;
        case 5:
            msg.innerHTML = `Hoje é sexta-feira, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/sexta-feira.jpg`
            document.body.style.background = '#C4C5A3'
            break;
        case 6:
            msg.innerHTML = `Hoje é sabado, ${diaMes} de ${mesAno[mes]}`
            img.src = `./img/sabado.jpg`
            document.body.style.background = '#FE6665'
            break;
        default:
            msg.innerHTML = `Que dia foi isso? Nunca nem vi`
            img.src = `./img/quedia.jpg`
            document.body.style.background = '#7C6F4C'
        break;


    }
}

