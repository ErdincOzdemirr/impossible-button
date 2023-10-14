const btn = document.querySelector('button');

btn.addEventListener('mouseover', function(){
	console.log('mouse over me');
	// To account for height/width of any viewport
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function(){
	btn.innerText = 'You Got Me!';
	document.body.style.backgroundColor = 'green';
});