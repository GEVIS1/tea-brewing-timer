import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import brewData, { TeaBrewData, TeaBrewMethodName } from './timer/TeaBrewdata.ts'
import Timer from './timer/Timer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="background">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Tea Brewing Timer</h1>
    
    <div>
      <label for="tea-type">Select Tea Type:</label>
      <select id="tea-type">
        ${brewData.map((tea, index) => `<option value="${index}">${tea.teaType}</option>`).join('')}
      </select>
    </div>
    
    <div>
      <label for="brew-method">Select Brewing Method:</label>
      <select id="brew-method">
        <option value="gongFu">Gong Fu</option>
        <option value="western">Western</option>
      </select>
    </div>
    
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
const teaTypeSelect = document.querySelector<HTMLSelectElement>("#tea-type");
const brewMethodSelect = document.querySelector<HTMLSelectElement>("#brew-method");

if (!startButton || !textBox || !background || !stats || !teaTypeSelect || !brewMethodSelect) {
  throw Error("Could not grab required elements.");
}
const timer = new Timer(brewData[0], "gongFu", startButton, textBox, background, stats);

function initializeTimer() {
  const selectedTeaIndex = parseInt(teaTypeSelect.value);
  const selectedTea: TeaBrewData = brewData[selectedTeaIndex];
  const selectedMethod: TeaBrewMethodName = brewMethodSelect.value as TeaBrewMethodName;

  timer.initializeTimer(selectedTea, selectedMethod);
}

teaTypeSelect.addEventListener('change', initializeTimer);
brewMethodSelect.addEventListener('change', initializeTimer);

initializeTimer();
