var playlist = {artistnames: "songtitles"};

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign({}, playlist {[artistName]: songTitle})
};

function removeFromPlaylist (playlist, artistName){
  delete artistName.songTitle;
  playlist;
}
