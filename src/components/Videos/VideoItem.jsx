import React from "react";
import classes from "./VideoItem.module.css";

function VideoItem() {
  return (
    <li
      className={classes.preview}
      // key={video.id.videoId}
    >
      <a
        className={classes["preview__link"]}
        // onClick={() => currentVideoHandler(video.id.videoId)}
      >
        <figure>
          <img
            className={classes.thumb}
            src="https://i.ytimg.com/vi/gGdGFtwCNBE/mqdefault.jpg"
          />
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>Title</h4>
          {/* <h4 className="preview__title">{video.snippet.title}</h4> */}
          <p className={classes["preview__description"]}>
            <strong>Description:</strong> Test teste
            tesraierjairjaierjiasjeriarje
            {/* <strong>Description:</strong> {video.snippet.description} */}
          </p>
          <p className={classes["preview__description"]}>
            <strong>Published</strong>: 2022-10-05
            {/* <strong>Published</strong>: {video.snippet.publishedAt.slice(0, 10)} */}
          </p>
        </div>
      </a>
    </li>
  );
}

export default VideoItem;
