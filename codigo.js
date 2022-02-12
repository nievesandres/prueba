
	let boton = document.getElementById('boton')
	let contenedor = document.querySelector('.contenedor')

	boton.addEventListener('click',()=>{
		alert('clickado');
		contenedor.insertAdjacentHTML('beforeend',`
				<h1>Nuevo titulo con insertAdjacent</h1>
		`);
		let newContenedor = document.createElement('div');
		newContenedor.className = 'newContenedor';
		newContenedor.innerHTML = '<h1>RANCIO</h1>'
		contenedor.after(newContenedor);
	})
