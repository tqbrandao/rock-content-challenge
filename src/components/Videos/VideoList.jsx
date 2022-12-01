import React from "react";
import VideoItem from "./VideoItem";
import classes from "./VideoList.module.css";

function VideoList(props) {
  return (
    <ul className={classes.results}>
      {props.videos &&
        props.videos.map((video) => {
          return (
            <VideoItem
              id={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              date={video.snippet.publishedAt.slice(0, 10)}
              thumb={video.snippet.thumbnails.medium.url}
              setVideoPreviewUrl={props.setVideoPreviewUrl}
            />
          );
        })}
    </ul>
  );
}

export default VideoList;
