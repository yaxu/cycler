import './style.css'
import { NeoCyclist } from '@strudel/core/neocyclist.mjs';
import { saw } from '@strudel/core';
// import { getTrigger } from '@strudel/core/repl.mjs';
import { setInterval, clearInterval } from 'worker-timers';
import { getAudioContext } from '@strudel/webaudio';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Cycler</h1>
    <div id="record">
    💿
    </div>
  </div>
`

const record = document.getElementById('record');

const schedulerOptions = {
  onTrigger: x => console.log('bing'),
  getTime: () => getAudioContext().currentTime,

  // onToggle: (started) => {
  // updateState({ started });
  // onToggle?.(started);
  // },
  setInterval,
  clearInterval,
  // beforeStart,
};
window.cyclist = new NeoCyclist(schedulerOptions);
cyclist.setPattern(saw.segment(16), true);

record.onclick = () => {
  if (!cyclist.started) {
    cyclist.start();
  }
  console.log('aha', cyclist.getTime())
}

const timer = setInterval(function () {
  if (cyclist.started) {
    const deg = (cyclist.cycle % 1) % 360;
    record.style.webkitTransform = 'rotate(' + deg + 'deg)';
    record.style.mozTransform = 'rotate(' + deg + 'deg)';
    record.style.msTransform = 'rotate(' + deg + 'deg)';
    record.style.oTransform = 'rotate(' + deg + 'deg)';
    record.style.transform = 'rotate(' + deg + 'deg)';
  }
}, 50);
