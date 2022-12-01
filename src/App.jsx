import { useState } from "react";
import Header from "./components/Layout/Header";
import VideoDetails from "./components/Videos/VideoDetails";
import VideoList from "./components/Videos/VideoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <main>
        <div className="results-container">
          <VideoList />
          <VideoDetails />
        </div>
      </main>
    </div>
  );
}

export default App;
