let friends = {
    name:'John', 
    sex: 'M',
    weight: 60,
    fatten(p=0){
        console.log('Engordou')
        this.weight += p
    }
}

friends.fatten(5)
console.log(`${friends.name} pesa ${friends.weight}Kg`)