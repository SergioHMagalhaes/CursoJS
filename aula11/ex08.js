var velocity = 70
var limit = 60

if (velocity > limit){
    console.log(`Você foi multado, pois passou a ${velocity}km/h em uma via de ${limit}km/h.`)
}
else {
    console.log(`Você não foi multado, pois passou a ${velocity}km/h em uma via de ${limit}km/h.`)
}