import { useState } from "react";
import Header from "./components/Layout/Header";
import VideoDetails from "./components/Videos/VideoDetails";
import VideoList from "./components/Videos/VideoList";

function App() {
  const [videos, setVideos] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [defaultUrl, setDefaultUrl] = useState(null);

  return (
    <div className="container">
      <Header
        setVideos={setVideos}
        setArtistInfo={setArtistInfo}
        setDefaultUrl={setDefaultUrl}
      />
      <main>
        <div className="results-container">
          <VideoList videos={videos} setVideoPreviewUrl={setVideoPreviewUrl} />
          {
            <VideoDetails
              artistInfo={artistInfo}
              videoPreviewUrl={videoPreviewUrl}
              defaultUrl={defaultUrl}
            />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
