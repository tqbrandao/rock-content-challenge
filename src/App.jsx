import { useState } from "react";
import Header from "./components/Layout/Header";
import HeaderDefault from "./components/Layout/HeaderDefault";
import VideoDetails from "./components/Videos/VideoDetails";
import VideoList from "./components/Videos/VideoList";

function App() {
  const [videos, setVideos] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [defaultUrl, setDefaultUrl] = useState(null);

  return (
    <div className={`container ${!videos ? "centered" : ""}`}>
      {!videos ? (
        <HeaderDefault
          setVideos={setVideos}
          setArtistInfo={setArtistInfo}
          setDefaultUrl={setDefaultUrl}
        />
      ) : (
        <div>
          {" "}
          <Header
            setVideos={setVideos}
            setArtistInfo={setArtistInfo}
            setDefaultUrl={setDefaultUrl}
          />
          <main>
            <div className="results-container">
              <VideoList
                videos={videos}
                setVideoPreviewUrl={setVideoPreviewUrl}
              />
              {
                <VideoDetails
                  artistInfo={artistInfo}
                  videoPreviewUrl={videoPreviewUrl}
                  defaultUrl={defaultUrl}
                />
              }
            </div>
          </main>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
