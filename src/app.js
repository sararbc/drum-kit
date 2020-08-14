function selectAudio(event) {
  let audioElement = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  let keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audioElement) {
    return; // stop the fuction from running
  } else {
    audioElement.currentTime = 0; //Rewind music to the start
    audioElement.play();
    console.log(keyElement);
  }
}

window.addEventListener("keydown", selectAudio);
