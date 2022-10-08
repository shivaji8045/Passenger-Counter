// document.getElementById('count-el').innerText = 5

let countEl = document.getElementById('count-el')
let saveEl  = document.getElementById('save-el')
let resetEl = document.getElementById('reset_btn')

let count = 0



function increment(){
    count +=1
    console.log(count)
    countEl.textContent = count
}

function save(){

    let countStr = count + " - "
    saveEl.textContent += countStr
    // console.log(count)
    countEl.textContent = 0
    count = 0
}

function reset(){
    // let resetCount = 0
    // resetCount.textContent = count
    countEl.textContent = 0
    count = 0
    // console.log(resetCount)
}