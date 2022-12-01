import React from "react";
import classes from "./VideoDetails.module.css";
import VideoInfo from "./VideoInfo";
import VideoPreview from "./VideoPreview";

function VideoDetails(props) {
  return (
    <div className={classes.details}>
      <VideoPreview
        videoPreviewUrl={props.videoPreviewUrl}
        defaultUrl={props.defaultUrl}
      />
      <VideoInfo artistInfo={props.artistInfo} />
    </div>
  );
}

export default VideoDetails;
