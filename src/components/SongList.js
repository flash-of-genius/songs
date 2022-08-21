import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./../actions/index";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div
            className="right floated content"
            onClick={() => this.props.selectSong(song)}
          >
            <div className="ui button primary">Select</div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
