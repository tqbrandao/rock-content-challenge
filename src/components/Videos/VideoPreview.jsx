import React from "react";
import classes from "./VideoPreview.module.css";

function VideoPreview() {
  return (
    <div className={classes["video-container"]}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPreview;
