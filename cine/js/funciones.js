function validarCaracteres() {
	var caracteresNombre=document.getElementById('titulo');
	if (caracteresNombre.value.length<4)
		{alert("El numero de caracteres es erroneo");
		caracteresNombre.style.backgroundColor="red";}
	else 
		{caracteresNombre.style.backgroundColor="green";}
	}


var listaGenero=["Fantastico", "Historico", "Documental"];


function cargarOpciones () 
{
	var objetoSelect=document.getElementById('genero');
	for (i=0; i<listaGenero.length; i++)
	{
		var objetoOption=document.createElement("option");
		objetoOption.value=listaGenero[i];
		objetoOption.innerHTML=listaGenero[i];
		objetoSelect.appendChild(objetoOption);
	}
}

function validarBoton ()
{

	var titulo=document.getElementById("titulo").value;
	var genero=document.getElementById("genero").value;
	alert("Se va a registrar la pelicula con titulo "+titulo+" y de genero "+genero);
}