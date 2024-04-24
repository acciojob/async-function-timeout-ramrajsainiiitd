//your JS code here. If required.
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
const text = document.getElementById('text').value;
const delay = document.getElementById('delay').value;
const output = document.getElementById('output');

console.log('ramraj', text, delay);
    setTimeout(()=>{
        output.textContent = text;
    }, delay)
})