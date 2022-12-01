import { useState } from "react";
import Header from "./components/Layout/Header";
import VideoDetails from "./components/Videos/VideoDetails";
import VideoList from "./components/Videos/VideoList";

function App() {
  const [videos, setVideos] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);

  return (
    <div className="container">
      <Header setVideos={setVideos} setArtistInfo={setArtistInfo} />
      <main>
        <div className="results-container">
          <VideoList videos={videos} />
          <VideoDetails />
        </div>
      </main>
    </div>
  );
}

export default App;
