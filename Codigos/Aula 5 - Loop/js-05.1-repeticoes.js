//while
console.log('Repetição com While')
var n1 = 4
var n2 = 12
var step = 4

while(n1 <= n2){
    console.log(`Contando: ${n1}`)
    n1 += step 
}

//Do while
console.log("Repetição com Do While")
var n1 = 10
var n2 = 20
var passo = 5

do{
    console.log(`Contando ${n1}`)
    n1 += step
}while(n1 <= n2)

//For
console.log("Repetiçã com For")
var n1 = 100
var n2 = 1000
var passo = 100
for (var cont = n1; cont <= n2; cont+=passo){
    console.log(`Contando: ${cont}`)
}