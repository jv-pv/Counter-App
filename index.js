let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count++ 
    countEl.textContent = count
}

function decrease() {
    count--
    countEl.textContent = count
}

function save() {
    saveEntry = count + " - "
    saveEl.textContent += saveEntry
    count = 0
    countEl.textContent = count
}



