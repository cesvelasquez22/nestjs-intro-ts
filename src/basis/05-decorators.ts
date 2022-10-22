export class MyPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NO QUIERO GRITAR!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR`);
  }
}

const MyDecorator = () => (target: Function) => {
  //   console.log("target", target);
  return MyPokemon;
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
