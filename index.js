let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const incrementBtn = document.getElementById('increment-btn')
const decrementBtn = document.getElementById('decrement-btn')
const saveBtn = document.getElementById('save-btn')
const clearBtn = document.getElementById('clearAll-btn')


incrementBtn.addEventListener('click', function() {
    count++
    if (count >= 0) decrementBtn.disabled = false 
    countEl.innerText = count
})

decrementBtn.addEventListener('click', function() {
    count--
    if (count === 0) this.disabled = true
    countEl.innerText = count
})

saveBtn.addEventListener('click', function(){
    let countStr = count + " - ";
    saveEl.innerText += countStr
})

clearBtn.addEventListener('click', function(){
    count = 0
    countEl.innerText = 0
    saveEl.innerHTML = ""
})





