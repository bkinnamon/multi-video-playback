import React from "react";
import ReactPlayer from "react-player";

import "./App.css";

import VideoInput from "./components/VideoInput";

const App: React.FC = () => {
  const [url1, setUrl1] = React.useState("");
  const [url2, setUrl2] = React.useState("");
  const [playing, setPlaying] = React.useState(false);

  return (
    <>
      <header></header>
      <main>
        <div id="inputs">
          <VideoInput title="Video 1" setVideoUrl={url => setUrl1(url)} />
          <VideoInput title="Video 2" setVideoUrl={url => setUrl2(url)} />
        </div>
        <div id="videos">
          <div className="video">
            <ReactPlayer
              url={url1}
              height="100%"
              width="100%"
              playing={playing}
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={url2}
              height="100%"
              width="100%"
              playing={playing}
            />
          </div>
        </div>
      </main>
      <footer>
        <button
          type="button"
          id="btn--play"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </footer>
    </>
  );
};

export default App;
