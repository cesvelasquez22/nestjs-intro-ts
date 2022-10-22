import { PokeAdapter } from "../api/poke.adapter";
import { PokeResponse } from "../types/poke.types";

export class Pokemon {
  get imgUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // TODO: do injection here
    private http: PokeAdapter
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
    const { data } = await this.http.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return data.moves;
  }
}

const pokeAdapter = new PokeAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeAdapter);

charmander.getMoves().then(console.log);