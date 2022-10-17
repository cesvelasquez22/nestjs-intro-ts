// export const pokemonsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
    hp: 60,
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, ivysaur);

console.log(pokemons);