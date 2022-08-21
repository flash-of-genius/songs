import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "القلب يعشق كل جميل", duration: "90" },
    { title: "حلم", duration: "70" },
    { title: "شمس الاصيل", duration: "100" },
    { title: "ثورة الشك", duration: "75" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
