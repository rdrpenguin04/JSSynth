var JSSynthContext;
var JSSynthReady = false;

function initJSSynth() {
  console.log("Starting JSSynth version 1.0 by Ray Redondo...");
  function __initJSSynthReal() {
    try {
      // Fix up for prefixing
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      context = new AudioContext();
    }
    catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
    JSSynthReady = true;
  }
  window.addEventListener('load', __initJSSynthReal, false); // Starts async
}
