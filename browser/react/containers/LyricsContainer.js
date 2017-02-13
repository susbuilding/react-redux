import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}


export default connect(mapStateToProps)(
    class extends Component {

    constructor() {

      super();

      this.state = {
        artistQuery: '',
        songQuery: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleArtistInput = this.handleArtistInput.bind(this);
      this.handleSongInput = this.handleSongInput.bind(this);

    }

    handleArtistInput(artist) {
      this.setState({ artistQuery: artist });
    }

    handleSongInput(song) {
      this.setState({ songQuery: song });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
      }
    }

    render() {
      return (
        <Lyrics
          {...this.props.state}
          handleChange={this.handleChange}
          setArtist={this.handleArtistInput}
          setSong={this.handleSongInput}
          handleSubmit={this.handleSubmit} />
      );
    }

  }
)

// export default class extends Component {

//   constructor() {

//     super();

//     this.state = Object.assign({
//       artistQuery: '',
//       songQuery: ''
//     }, store.getState());

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleArtistInput = this.handleArtistInput.bind(this);
//     this.handleSongInput = this.handleSongInput.bind(this);

//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   handleArtistInput(artist) {
//     this.setState({ artistQuery: artist });
//   }

//   handleSongInput(song) {
//     this.setState({ songQuery: song });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.artistQuery && this.state.songQuery) {
//       store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
//     }
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return (
//       <Lyrics
//         {...this.state}
//         handleChange={this.handleChange}
//         setArtist={this.handleArtistInput}
//         setSong={this.handleSongInput}
//         handleSubmit={this.handleSubmit} />
//     );
//   }

// }
