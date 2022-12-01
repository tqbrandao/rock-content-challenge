import React from "react";
import classes from "./VideoPreview.module.css";

function VideoPreview(props) {
  return (
    <div className={classes["video-container"]} data-testid="video-preview">
      <iframe
        width="560"
        height="315"
        src={props.videoPreviewUrl || props.defaultUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPreview;
