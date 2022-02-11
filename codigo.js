
	let boton = document.getElementById('boton')
	let contenedor = document.querySelector('.contenedor')

	boton.addEventListener('click',()=>{
		alert('clickado');
		
	let h1 = document.createElement('h1')
		h1.innerHTML = `<h1>Nuevo titulo</h1>`;
		contenedor.append(h1);
	})
