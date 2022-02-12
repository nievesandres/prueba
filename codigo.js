
	let boton = document.getElementById('boton')
	let contenedor = document.querySelector('.contenedor')

	boton.addEventListener('click',()=>{
		contenedor.insertAdjacentHTML('beforeend',`
				<h1>Nuevo titulo con insertAdjacent</h1>
		`);
		let newContenedor = document.createElement('div');
		newContenedor.className = 'newContenedor';
		newContenedor.innerHTML = '<h1>RANCIO</h1>'
		contenedor.after(newContenedor);
		setTimeout(() =>{
			contenedor.nextSibling.className = 'amarillo';
				let interval = setTimeout(() =>{
					let hermano = contenedor.nextSibling;
					console.log(hermano);
					hermano.remove();
					clearTimeout(interval);
				}, 3000);
		}, 1000);
	})
 