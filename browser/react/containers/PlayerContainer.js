import React, {Component} from 'react';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    state: state.player
  }
}

function mapDispatchToProps(dispatch){
  return {
    next: function (){
      dispatch(next())
    },
    prev: function(){
      dispatch(previous())
    },
    toggle: function(){
      dispatch(toggleSong(state.currentSong, state.currentSongList))
    },
    ProgressSetter: function(audio){
      dispatch(setProgress(audio))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {

    componentDidMount() {

      AUDIO.addEventListener('ended', this.next);
      AUDIO.addEventListener('timeupdate', () => {
        this.props.ProgressSetter(AUDIO.currentTime / AUDIO.duration);
      });
    }

    render() {
      return <Player
        {...this.props.state}
        next={this.props.next}
        prev={this.props.prev}
        toggle={this.props.toggle}
      />;
    }

  }
)



// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().player;
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {

//     AUDIO.addEventListener('ended', this.next);
//     AUDIO.addEventListener('timeupdate', () => {
//       store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
//     });

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().player);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   next() {
//     store.dispatch(next());
//   }

//   prev() {
//     store.dispatch(previous());
//   }

//   toggle() {
//     store.dispatch(
//       toggleSong(this.state.currentSong, this.state.currentSongList)
//     );
//   }

//   render() {
//     return <Player
//       {...this.state}
//       next={this.next}
//       prev={this.prev}
//       toggle={this.toggle}
//     />;
//   }

// }
