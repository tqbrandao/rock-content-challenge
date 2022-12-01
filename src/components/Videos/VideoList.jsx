import React from "react";
import VideoItem from "./VideoItem";
import classes from "./VideoList.module.css";

function VideoList() {
  return (
    <ul className={classes.results}>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </ul>
  );
}

export default VideoList;
