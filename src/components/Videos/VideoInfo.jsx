import React from "react";
import classes from "./VideoInfo.module.css";
import {
  BsMusicPlayer,
  BsMusicNoteBeamed,
  BsInstagram,
  BsSpotify,
  BsWindow,
  BsMusicNoteList,
} from "react-icons/bs";

function VideoInfo() {
  return (
    <div className={classes["additional-infos__container"]}>
      <div className={classes["additional-infos__section"]}>
        <h2 className={classes["heading--2"]}> Additional Info</h2>
        <ul className={classes["additional-infos__list"]}>
          <li className={classes["additional-info"]}>
            {" "}
            {/* <BsMusicPlayer /> Artist: {artistInfo.name}{" "} */}
            <BsMusicPlayer /> Artist: Artist{" "}
          </li>
          <li className={classes["additional-info"]}>
            {" "}
            {/* <BsMusicNoteBeamed /> Genre:{" "}
            {artistInfo.classifications[0].genre.name}{" "} */}
            <BsMusicNoteBeamed /> Genre: Genre{" "}
          </li>
          <li className={classes["additional-info"]}>
            {" "}
            <BsMusicNoteList /> Sub-Genre: Sub-Genre{" "}
            {/* <BsMusicNoteList /> Sub-Genre:{" "}
            {artistInfo.classifications[0].subGenre.name}{" "} */}
          </li>
        </ul>
      </div>

      <div className={classes["additional-infos__section"]}>
        <h2 className={classes["heading--2"]}> Social Media Info</h2>
        <ul className={classes["additional-infos__list"]}>
          <a
            // href={artistInfo.externalLinks.homepage[0].url}
            className={classes["social-media__link"]}
            target="_blank"
          >
            <li className={classes["additional-info"]}>
              {" "}
              <BsWindow /> Homepage{" "}
            </li>
          </a>
          <a
            // href={artistInfo.externalLinks.instagram[0].url}
            className={classes["social-media__link"]}
            target="_blank"
          >
            <li className={classes["additional-info"]}>
              {" "}
              <BsInstagram /> Instagram{" "}
            </li>
          </a>
          <a
            // href={artistInfo.externalLinks.spotify[0].url}
            className={classes["social-media__link"]}
            target="_blank"
          >
            <li className={classes["additional-info"]}>
              {" "}
              <BsSpotify /> Spotify{" "}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default VideoInfo;
