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
  constructor(public id: number, public name: string, public hp?: number) {}

  attack() {
    console.log(`${this.name} attacked!`);
  }

  defend() {
    console.log(`${this.name} defended!`);
  }
}

export const bulbasaur = new Pokemon(1, "Bulbasaur");
export const ivysaur = new Pokemon(2, "Ivysaur", 60);

bulbasaur.attack();
ivysaur.defend();

console.log(bulbasaur, ivysaur);
