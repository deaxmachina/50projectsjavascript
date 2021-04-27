const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  // programatically create buttons with each sound as their 
  // inner text and of class btn 
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  // add event listener which adds the play of the sound on click
  btn.addEventListener('click', () => {
    // we also want to prevent multiple sounds playing over each other 
    // which is the default behaviour 
    stopSongs();
    document.getElementById(sound).play() // this only works with audio elements
  })

  // insert them into document into the div container for the buttons 
  document.getElementById('buttons').appendChild(btn);

})

// pause all of the sounds by looping over them 
// and resent their time to start 
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause()
    song.currentTime = 0;
  })
}