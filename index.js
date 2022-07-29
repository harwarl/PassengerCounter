// document.getElementById("count-el").innerText = 20;

// initialize count as 0
// increment the count variable when the button is clicked
// change count-el in the html
let count = 0;
countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");

function increment(){
    count += 1;
    countEl.textContent = count;
}

// Save values
function save(){
    let countstr = count + " - ";
    saveEl.textContent += countstr;
    count = 0;
    countEl.textContent = count;
}

// reset count
function reset(){
    count = 0;
    countEl.textContent=count;
    saveEl.textContent="Previous entries:"
}
