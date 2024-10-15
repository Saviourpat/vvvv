
// Get audio button
const playAudioButton = document.getElementById('play-audio');

// Add event listener to play audio
playAudioButton.addEventListener('click', () => {
  const audio = new Audio('happy-birthday.mp3');
  audio.play().catch(error => console.error('Error playing audio:', error));
});
