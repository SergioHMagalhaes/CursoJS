let number = [5,3,6,7,8]
number.push(1)
number.sort()

console.log(number)
console.log(`O array tem ${number.length} posições`)
console.log(`O primeiro valor do vetor é ${number[0]}`)
console.log(number.join('\n'))

let pos = number.indexOf(3)

if (pos == -1){
    console.log(`O valor não foi encontrado`)
}
else{
    console.log(`O valor 3 está na posição ${pos}`)
}
