import React from "react";
import classes from "./VideoItem.module.css";

function VideoItem(props) {
  return (
    <li className={classes.preview} key={props.id}>
      <a
        className={classes["preview__link"]}
        // onClick={() => currentVideoHandler(video.id.videoId)}
        onClick={() => {
          props.setVideoPreviewUrl(`https://www.youtube.com/embed/${props.id}`);
        }}
      >
        <figure>
          <img className={classes.thumb} src={props.thumb} />
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>{props.title}</h4>
          {/* <h4 className="preview__title">{video.snippet.title}</h4> */}
          <p className={classes["preview__description"]}>
            <strong>Description:</strong> {props.description}
            {/* <strong>Description:</strong> {video.snippet.description} */}
          </p>
          <p className={classes["preview__description"]}>
            <strong>Published</strong>: {props.date}
            {/* <strong>Published</strong>: {video.snippet.publishedAt.slice(0, 10)} */}
          </p>
        </div>
      </a>
    </li>
  );
}

export default VideoItem;
