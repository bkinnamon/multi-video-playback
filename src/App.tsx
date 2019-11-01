import React from "react";
import ReactPlayer from "react-player";
import {
  AppBar,
  Fab,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Backdrop
} from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import "./App.css";

import VideoInput from "./components/VideoInput";

const App: React.FC = () => {
  const [url1, setUrl1] = React.useState("");
  const [url2, setUrl2] = React.useState("");
  const [playing, setPlaying] = React.useState(false);

  return (
    <Grid
      container
      direction="column"
      className="h-100vh w-100vw"
      style={{ background: "#e0e0e0" }}
    >
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h3" component="h1">
            Multi-Video Playback
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container direction="column" style={{ width: "auto" }}>
          <VideoInput title="Video 1" setVideoUrl={url => setUrl1(url)} />
          <VideoInput title="Video 2" setVideoUrl={url => setUrl2(url)} />
        </Grid>
        <Grid container direction="column">
          <Paper style={{ flex: 1, margin: "1rem" }}>
            <ReactPlayer
              url={url1}
              height="100%"
              width="100%"
              playing={playing}
            />
          </Paper>
          <Paper style={{ flex: 1, margin: "1rem" }}>
            <ReactPlayer
              url={url2}
              height="100%"
              width="100%"
              playing={playing}
            />
          </Paper>
        </Grid>
      </main>
      <footer>
        <Fab color="secondary" onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
      </footer>
    </Grid>
  );
};

export default App;
