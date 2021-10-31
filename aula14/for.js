var country1 = 80000
var country2 = 200000
var percentage = 0

for(var cont=0; country1 < country2; cont++){
    percentage = country1 * 3 / 100
    country1 += percentage
    percentage = country2 * 1.5 / 100
    country2 += percentage
}

console.log(`Em ${cont} anos:\nPaís A tera um população de ${country1.toFixed(0)} habitantes\nPaís B tera um população de ${country2.toFixed(0)} habitantes`)