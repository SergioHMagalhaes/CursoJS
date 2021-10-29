function verificar(){
    var date = new Date();
    var dateYear = date.getFullYear()
    var year = document.getElementById("year");

    if (year.value.length == 0 || Number(year.value) > dateYear){
        alert(`[ERRO] Verifique a data`)
    }
    else{
        var radio = document.getElementsByName('radsex')
        var sex = radio[0].checked? 'Homem' : 'Mulher'
        var result = document.getElementById('result')
        var age = dateYear - Number(year.value)
        var img = document.createElement('img')

        img.setAttribute('id', 'photo')

        if (sex === 'Homem'){
            if (age < 13){
                img.setAttribute('src', 'img/menino.png')
            }
            else if(age < 18){
                img.setAttribute('src', 'img/homemAdolescente.png')
            }
            else if(age < 30){
                img.setAttribute('src', 'img/jovemHomem.png')
            }
            else if(age < 60){
                img.setAttribute('src', 'img/homem.png')
            }
            else {
                img.setAttribute('src', 'img/homemVelho.png')
            }

            

        }

        if (sex === 'Mulher'){
            if (age < 13){
                img.setAttribute('src', 'img/menina.png')
            }
            else if(age < 18){
                img.setAttribute('src', 'img/mulherAdolescente.png')
            }
            else if(age < 30){
                img.setAttribute('src', 'img/jovemMulher.png')
            }
            else if(age < 60){
                img.setAttribute('src', 'img/mulher.png')
            }
            else {
                img.setAttribute('src', 'img/mulherVelha.png')
            }

            

        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos um ${sex} com ${age} anos.`
        result.appendChild(img)
    }
}