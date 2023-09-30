//Condições Simples
/* var vel = 50.5
var limite = 60
console.log(`A velocidade do seu carro é ${vel}Km/h`)

if(vel > limite){
    console.log(`Você ultrapassou a velocidade permitida. Você foi multado!`)
}
console.log(`Dirija com cuidado.`) */

//Condições Compostas
/* var país = 'EUA'
console.log(`País de origem de usuário: ${país}.`)
if(país != 'Brasil'){
    console.log(`O usuário é estrangeiro.`)
}else{
    console.log(`O usuário é brasileiro.`)
} */

//Condições alinhadas
var horaSistema = new Date()

var hora = horaSistema.getHours()
var minutos = horaSistema.getMinutes()

if(hora >= 0 && hora < 5){
    console.log("Boa Madrugada")
}else if(hora>=5 && hora<12){
    console.log("Bom dia")
}else if(hora>=12 && hora <19){
    console.log("Boa Tarde")
}else{
    console.log("Boa noite")
}
console.log(`Agora são exatamente ${hora} e ${minutos} minutos.`)