function generate(){
    var number = document.getElementById('number')
    var result = document.getElementById('result')
    result.innerHTML = ''

    if(number.value.length == 0){
        alert('Digite um número')
    }

    else{
        var n1 = Number(number.value)
        for(var cont=0; cont <=10; cont ++){
            result.innerHTML += `<option value="tab${cont}">${n1} * ${cont} = ${n1 * cont} `
        }
    }
}