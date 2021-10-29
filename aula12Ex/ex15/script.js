function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var now = new Date()
    var hour = now.getHours()
    msg.innerHTML = `Agora são ${hour} horas`

    if (hour >= 6 && hour < 12){
        img.src ="img/manha.png"
        document.body.style.backgroundColor = '#DD959F'
    }
    else if (hour < 18 && hour >= 12){
        img.src ="img/tarde.png"
        document.body.style.backgroundColor = '#D18B57'
    }
    else{
        img.src ="img/noite.png"
        document.body.style.backgroundColor = '#122630'
        
    }
}