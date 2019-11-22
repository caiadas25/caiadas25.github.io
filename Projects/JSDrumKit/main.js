function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) {
        return; //stops the function alltogether if there is no audio;
    };
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);
