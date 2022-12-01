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

function VideoInfo(props) {
  const artistName = props.artistInfo?.name || "";
  const artistGenre = props.artistInfo?.classifications?.[0]?.genre?.name || "";
  const artistSubGenre =
    props.artistInfo?.classifications[0]?.subGenre?.name || "";
  const artistHomePage =
    props.artistInfo?.externalLinks?.homepage?.[0]?.url || ".";
  const artistInstagram =
    props.artistInfo?.externalLinks?.instagram?.[0]?.url || ".";
  const artistSpotify =
    props.artistInfo?.externalLinks?.spotify?.[0]?.url || ".";

  const disabled = classes["social-media__link--disabled"];
  return (
    <div className={classes["additional-infos__container"]}>
      <div className={classes["additional-infos__section"]}>
        <h2 className={classes["heading--2"]}> Additional Info</h2>
        <ul className={classes["additional-infos__list"]}>
          <li className={classes["additional-info"]}>
            {" "}
            <BsMusicPlayer /> Artist:{artistName}
          </li>
          <li className={classes["additional-info"]}>
            {" "}
            <BsMusicNoteBeamed /> Genre:{artistGenre}
          </li>
          <li className={classes["additional-info"]}>
            {" "}
            <BsMusicNoteList /> Sub-Genre:{artistSubGenre}
          </li>
        </ul>
      </div>

      <div className={classes["additional-infos__section"]}>
        <h2 className={classes["heading--2"]}> Social Media Info</h2>
        <ul className={classes["additional-infos__list"]}>
          <a
            href={artistHomePage}
            className={`${classes["social-media__link"]} ${
              artistHomePage === "." ? disabled : ""
            } `}
            target="_blank"
          >
            <li className={classes["additional-info"]}>
              {" "}
              <BsWindow /> Homepage{" "}
            </li>
          </a>
          <a
            href={artistInstagram}
            className={`${classes["social-media__link"]} ${
              artistInstagram === "." ? disabled : ""
            } `}
            target="_blank"
          >
            <li className={classes["additional-info"]}>
              {" "}
              <BsInstagram /> Instagram{" "}
            </li>
          </a>
          <a
            href={artistSpotify}
            className={`${classes["social-media__link"]} ${
              artistSpotify === "." ? disabled : ""
            } `}
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
