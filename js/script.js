const playAudio = (id) => {
    var audio_player = document.getElementById(id); 
    if (audio_player.paused)
      audio_player.play();
    else 
      audio_player.pause();
}
