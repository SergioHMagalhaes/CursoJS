var c = 0
const arrayn = []

function test(){
    if (number.value.length == 0 || Number(number.value) < 1 || Number(number.value) > 100 || arrayn.indexOf(Number(number.value)) > -1){
        return true
    }
}

function add(){
    let number = document.getElementById('number')
    let list = document.getElementById('list')
    let search = arrayn.indexOf(Number(number.value))
    let result = document.getElementById('result')
    result.innerHTML = ''


    if (test() == true){
        alert('Adicione valores antes de finalizar!')
    }
    else{
        list.innerHTML += `<option value="tab${c}">Valor ${number.value} adicionado</option>)`

        arrayn.push(Number(number.value))

        console.log(search)

        number.value = ''
        number.focus()

        return c++
    }

}

function end(){
    let result = document.getElementById('result')
    let bigger
    let smaller
    let sum = 0

    if (arrayn.length == 0){
        alert('Valor invalido ou já encontrado na lista')
    }

    else{
        //Descobrir o maior número
        for(let c = 0; c < arrayn.length; c++){
            if(c == 0){
                bigger = arrayn[0]
                smaller = arrayn[0]
            }
            else if(arrayn[c] > bigger){
                bigger = arrayn[c]
            }
            else if(arrayn[c] < smaller){
                smaller = arrayn[c]
            }
        }

        //Somando
        for(let c=0; c < arrayn.length; c++){
            sum +=  arrayn[c]
        }

        let mean = sum / arrayn.length

        result.innerHTML = `<p>Ao todo, temos ${arrayn.length} números cadastrados.</p> 
        <p>O maior valor informado foi ${bigger}.</p> 
        <p>O menor valor informado foi ${smaller}.</p>
        <p>Somando todos os valores, temos ${sum}.</p>
        <p>A media dos valores digitados é ${mean}.</p>`
    }


}
