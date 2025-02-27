import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { jux } from '@strudel/core';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Cycler</h1>
    <div id="record">
    💿
    </div>
  </div>
`

let ticks = 0;
const timer = setInterval(function () {
  const deg = ticks % 360;
  const record = document.getElementById('record');
  record.style.webkitTransform = 'rotate(' + deg + 'deg)';
  record.style.mozTransform = 'rotate(' + deg + 'deg)';
  record.style.msTransform = 'rotate(' + deg + 'deg)';
  record.style.oTransform = 'rotate(' + deg + 'deg)';
  record.style.transform = 'rotate(' + deg + 'deg)';
  ticks++;
}, 50);
