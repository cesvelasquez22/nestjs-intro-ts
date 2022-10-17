// export const pokemonsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// export const pokemonsNames = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie'];

// pokemonsIds.push('Bulbasaur'); // Error: Argument of type '"Bulbasaur"' is not assignable to parameter of type 'number'.

interface Pokemon {
    id: number;
    name: string;
    hp?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
};

export const ivysaur: Pokemon = {
    id: 2,
    name: "Ivysaur",
}