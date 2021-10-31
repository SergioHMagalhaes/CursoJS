function count(){
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var result = document.getElementById('result')



    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        result.innerHTML = 'Impossivel contar - Verifique o valores'
    }

    else{
        var i = Number(start.value)
        var f = Number(end.value)
        var p = Number(step.value)
        result.innerHTML = ''

        if(i < f){
            for(var cont = i; cont <= f; cont += p){
                result.innerHTML += `${cont} 👉`
            }
        }
        else{
            for(var cont = i; cont >= f; cont -= p){
                result.innerHTML += `${cont} 👉`
            }
        }
    }
        result.innerHTML += '🏁'
    }
