import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
// import { name } from './basis/01-types';
// import { bulbasaur, ivysaur } from './basis/02-objects';
// import { bulbasaur, ivysaur } from './basis/03-classes';
// import { charmander } from './basis/04-injection';
// import { charmander } from './basis/05-decorators';
import { charmander } from './basis/06-deprecated';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello ${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
