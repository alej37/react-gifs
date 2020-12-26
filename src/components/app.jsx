/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "cXblnKXr2BQOaYnTni"
    };
    this.search();
  }

  search = (query) => {
    giphy('UqDaRUFSlmC9FlnDR15XBooUd8t5Y30M').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
