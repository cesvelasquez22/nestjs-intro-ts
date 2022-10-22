import axios from 'axios';
import { PokeResponse } from '../types/poke.types';

// export class Pokemon {
//     id: number;
//     name: string;
//     hp?: number;

//     constructor(id: number, name: string, hp?: number) {
//         this.id = id;
//         this.name = name;
//         this.hp = hp || 50;
//     }

//     attack() {
//         console.log(`${this.name} attacked!`);
//     }

//     defend() {
//         console.log(`${this.name} defended!`);
//     }
// }

export class Pokemon {
  get imgUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    public hp?: number
  ) {}

  attack() {
    console.log(`${this.name} attacked!`);
  }

  defend() {
    console.log(`${this.name} defended!`);
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  async getMoves() {
    const { data } = await axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return data.moves;
  }
}

export const bulbasaur = new Pokemon(1, "Bulbasaur");
export const ivysaur = new Pokemon(2, "Ivysaur", 60);

bulbasaur.attack();
ivysaur.defend();

console.log(bulbasaur);
bulbasaur.scream();
console.log(ivysaur);

ivysaur.getMoves().then((moves) => console.log(moves));
