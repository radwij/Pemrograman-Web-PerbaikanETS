class WorldCurrency {
    constructor(apiURL) {
        // Initialize class properties with the provided parameters
        this.apiURL = apiURL;

        // Initialize an array to store Pokémon names
        this.pokemonNames = [
            'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
            'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
            'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill',
            'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate'
        ];

        // Initialize an object to store Pokémon data
        this.pokemonData = {};

        // Call the function to fetch Pokémon data
        this.getPokemonData();
    }

    // Asynchronous function to fetch Pokémon data
    async getPokemonData() {
        try {
            const response = await fetch(this.apiURL);
            const data = await response.json();

            // Store Pokémon data in the object
            for (let i = 0; i < this.pokemonNames.length; i++) {
                const pokemonName = this.pokemonNames[i];
                this.pokemonData[pokemonName] = data.results[i].url;
            }

            // Update the text content in the UI
            this.updateText();
        } catch (error) {
            console.error(error);
        }
    }

    // Update the text content in the UI based on stored Pokémon data
    updateText() {
        for (const pokemonName of this.pokemonNames) {
            const pokemonBtn = document.getElementById(`${pokemonName}-btn`);
            pokemonBtn.href = this.pokemonData[pokemonName];
        }
    }
}

// Constants for API URLs, etc
const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

// Create an instance of WorldCurrency with the provided parameters
const currency = new WorldCurrency(apiURL);
