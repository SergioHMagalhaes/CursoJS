var years = 18

if (years < 16){
    console.log(`Você não vota, pois possui apenas ${years} anos`)
}

else if (years < 18 || years > 65){
    console.log(`Seu voto é opcional, pois você possui ${years} anos`)
}

else{
    console.log(`Seu voto é obrigatório, pois você possui ${years} anos`)
}