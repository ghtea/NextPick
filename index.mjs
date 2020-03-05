/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/NextPick/common/standalone.module.js';


  const HeroName = ({ heroId }) => html`<h1>${"Abathur"}</h1>`;


const HeroImg = ({ heroId })=> html`  <img class="imgHero" src=${"heroImgs/" + heroId  + ".png"} />`;


const HeroChart = ({ heroId })=> html`
  <svg width="400" height="100">

    <g class="bar">
      <rect width="${44}" height="19"></rect>
      <text x="45" y="30" dy=".35em"> ${"great"}</text>
      
    </g>
  </svg>
`;

/* console.log(Math.round(objCountryPop['4']['2020']))
*/

const Hero = ({heroId}) => html`
  <${HeroName} heroId=${heroId}/> 
  <${HeroImg} heroId=${heroId}/>
  <${HeroChart} heroId=${heroId}/>
  `;

render(html`<${Hero}  heroId="Abathur" />`, document.body);
