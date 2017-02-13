import {connect} from 'react-redux';
import Stations from '../components/Stations';

function songsToStations(songs){
  const stations = {};
    songs.forEach(function(song){
      if (!stations[song.genre]) {
        stations[song.genre] = [];
      }
      stations[song.genre].push(song)
    })
  return stations;
}

function mapStateToProps(state){
  return {
    stations: songsToStations(state.songs)
  }
}

function mapDispatchToProps(dispatch){}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
