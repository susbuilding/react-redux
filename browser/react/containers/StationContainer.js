import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player'


function mapStateToProps(state, ownProps){
    const genre = ownProps.params.genreName
    return {
        genreName: genre,
        songs: state.songs
            .filter((song) => song.genre === genre )
            .map(convertSong),
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying
    }
}

function mapDispatchToProps(dispatch){
    return {
        toggleOne: (song, list) => {
            dispatch(toggleSong(song, list))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);

