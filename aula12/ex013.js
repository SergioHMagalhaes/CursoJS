var now = new Date()
var hour = now.getHours()

if (hour < 12 && hour >= 6) {
    console.log(`Bom Dia. Agora são ${hour}h`)
}

else if (hour < 6) {
    console.log(`Boa Madrugada. Agora são ${hour}h`)
}

else if (hour < 18) {
    console.log(`Boa Tarde. Agora são ${hour}h`)
}

else{
    console.log(`Boa Noite. Agora são ${hour}h`)
}