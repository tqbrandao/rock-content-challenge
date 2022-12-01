import React from "react";
import classes from "./VideoDetails.module.css";
import VideoInfo from "./VideoInfo";
import VideoPreview from "./VideoPreview";

function VideoDetails() {
  return (
    <div className={classes.details}>
      <VideoPreview />
      <VideoInfo />
    </div>
  );
}

export default VideoDetails;
