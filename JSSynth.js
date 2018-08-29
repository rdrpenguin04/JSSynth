var JSSynthContext;
var JSSynthReady = false;
var JSSynthStreamFunction = function(size) {
  return new Array(size).fill(0); // No signal
};

var oscillators = [];

var music = [[110, 220, 440, 880]];

function initJSSynth() {
  console.log("Starting JSSynth version 1.0 by Ray Redondo...");
  async function __initJSSynthReal() {
    try {
      // Fix up for prefixing
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      context = new AudioContext();
    }
    catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
    oscillators[0] = context.createOscillator();
    oscillators[1] = context.createOscillator();
    oscillators[2] = context.createOscillator();
    oscillators[3] = context.createOscillator();
    for(var i = 0; i < 4; i++) {
      oscillators[i].connect(context.destination);
      oscillators[i].type = "square";
      oscillators[i].frequency.value = 0;
      oscillators[i].start();
    }
    JSSynthReady = true;
    for(var i = 0; i < music.length; i++) {
      for(var j = 0; j < 4; j++) {
        oscillators[j].frequency.value = music[i][j];
      }
      await sleep(100);
    }
  }
  window.addEventListener('load', __initJSSynthReal, false); // Starts async
}
