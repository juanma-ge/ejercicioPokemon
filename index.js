// 1. Definimos el nombre del Pokémon que queremos consultar
const nombrePokemon = 'pikachu'; // Cambia este valor para probar otros Pokémon

// 2. Hacemos la solicitud usando Fetch API
fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
    })
    .then(data => {
// 3. Mostramos datos relevantes
        console.log('Nombre:', data.name);
        console.log('Altura:', data.height);
        console.log('Peso:', data.weight);

        // 4. Extraemos y mostramos los tipos
        const tipos = data.types.map(tipoInfo => tipoInfo.type.name);
        console.log('Tipos:', tipos.join(', '));
    })
    .catch(error => {
        console.error('Error al obtener el Pokémon:', error.message);
    });

