
	let boton = document.getElementById('boton')
	let contenedor = document.querySelector('.contenedor')

	boton.addEventListener('click',()=>{
		alert('clickado');
		contenedor.insertAdjacentHTML('beforeend',`
				<h1>Nuevo titulo con insertAdjacent</h1>
		`);
	})
