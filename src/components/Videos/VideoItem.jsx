import React from "react";
import classes from "./VideoItem.module.css";

function VideoItem(props) {
  return (
    <li className={classes.preview} key={props.id}>
      <a
        className={classes["preview__link"]}
        onClick={() => {
          props.setVideoPreviewUrl(`https://www.youtube.com/embed/${props.id}`);
        }}
      >
        <figure>
          <img className={classes.thumb} src={props.thumb} />
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>{props.title}</h4>
          <p className={classes["preview__description"]}>
            <strong>Description:</strong> {props.description}
          </p>
          <p className={classes["preview__description"]}>
            <strong>Published</strong>: {props.date}
          </p>
        </div>
      </a>
    </li>
  );
}

export default VideoItem;
