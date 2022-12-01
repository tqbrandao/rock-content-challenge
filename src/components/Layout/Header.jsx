import React from "react";
import { useState } from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";

function Header(props) {
  const [input, setInput] = useState("");
  // const [videos, setVideos] = useState(null);
  // const [artistInfo, setArtistInfo] = useState(null);

  function changeInputHandler(e) {
    setInput(e.target.value);
  }

  async function fetchVideosHandler(e) {
    e.preventDefault();
    const API_KEY_YT = "AIzaSyCEeEmF_zYECwCUDUFKQi4i3VasCH28uMk";
    const artist = input.replace(" ", "%");
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${artist}&key=${API_KEY_YT}`;

    const response = await fetch(URL);
    const data = await response.json();
    const apiVideos = data.items;

    props.setVideos(apiVideos);
  }

  async function fetchTicketMasterData(e) {
    e.preventDefault();
    const API_KEY_TM = "bYjUI8NZXoqIXO1WsRPkmGcka8pQ7w91";
    const artist = input.replace(" ", "%20");
    const URL = `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${API_KEY_TM}&keyword=${artist}}&locale=*`;

    const response = await fetch(URL);
    const data = await response.json();
    const info = data._embedded.attractions[0];

    props.setArtistInfo(info);
  }

  return (
    <header className={classes.header}>
      <h1 className={classes["heading--primary"]}>🤟Rock Content 🤟</h1>
      <form
        className={classes.search}
        onSubmit={(e) => {
          fetchTicketMasterData(e);
          fetchVideosHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Type an artist or band"
          className={classes["search__field"]}
          onChange={changeInputHandler}
        ></input>
        <button className={`${classes.btn} ${classes["btn__search"]}`}>
          Search
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default Header;
