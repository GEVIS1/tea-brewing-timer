import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import brewData from './timer/TeaBrewdata.ts'
import Timer from './timer/Timer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="background">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div id="stats"></div>
    <div class="card">
      <input id="textbox" type="text"></input>
      <button id="start" type="button">Start</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const startButton = document.querySelector<HTMLButtonElement>("#start");
const textBox = document.querySelector<HTMLInputElement>("#textbox");
const background = document.querySelector<HTMLBodyElement>("body");
const stats = document.querySelector<HTMLDivElement>("#stats");
if (!startButton || !textBox || !background || !stats) {
  throw Error("Could not grab required elements.")
}
const timer = new Timer(brewData[0], "gongFu", startButton, textBox, background, stats);
