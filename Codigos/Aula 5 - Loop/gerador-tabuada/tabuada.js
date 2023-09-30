function tabuada(){
    var num = document.querySelector("#num")
    var tab = document.querySelector("#tab")
    var n = Number(num.value)
    var c = 1

    tab.innerHTML = ''

    while(c <= 10){
        var item = document.createElement('option')
        item.text = `${c} x ${n} = ${n*c}`
        tab.appendChild(item)
        c++ 
    }
}