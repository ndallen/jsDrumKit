
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return ; // this will stop function from running
  audio.currentTime = 0;
  audio.play();
});