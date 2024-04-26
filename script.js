//your JS code here. If required.
const btn = document.getElementById('btn');

btn.addEventListener('click', async ()=>{
const text = document.getElementById('text').value;
const delay = document.getElementById('delay').value;
const output = document.getElementById('output');

	const delayPromise = new Promise((res, rej)=>{
		 setTimeout(res , delay)
	})

	await delayPromise;
	output.textContent = text;
   
})