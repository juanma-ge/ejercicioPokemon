// Guardamos el pokemon en la variable
const nombrePokemon = prompt("Introduce el nombre de un Pokémon:").toLowerCase();

fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
    })
    .then(data => {
        const nombre = data.name;
        const altura = data.height; // Gran parte del código viene en los apuntes
        const peso = data.weight;
        const tipos = data.types.map(tipoInfo => tipoInfo.type.name).join(', ');
        const imagen = data.sprites.front_default;

        console.log('Nombre:', nombre);
        console.log('Altura:', altura);
        console.log('Peso:', peso);
        console.log('Tipos:', tipos); // He añadido los tipos e imágenes
        console.log('Imagen URL:', imagen);

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Altura:</strong> ${altura}</p>
            <p><strong>Peso:</strong> ${peso}</p>
            <p><strong>Tipos:</strong> ${tipos}</p>
            <img src="${imagen}" alt="Imagen de ${nombre}">
        `;
    })
    .catch(error => {
        console.error('Error al obtener el Pokémon:', error.message);
        document.getElementById('resultado').innerHTML = `<p>${error.message}</p>`;
    });
