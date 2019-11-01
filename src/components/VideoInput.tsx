import React from "react";
import {
  Box,
  Button,
  FormGroup,
  TextField,
  Typography
} from "@material-ui/core";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

interface Props {
  setVideoUrl?: (url: string) => void;
  title?: string;
}

const VideoInput: React.FC<Props> = ({
  setVideoUrl = (url: string) => url,
  title = "Video"
}) => {
  const [url, setUrl] = React.useState("");

  return (
    <Box style={{ flex: 1, margin: "1rem" }}>
      <Typography variant="h5">{title}</Typography>
      <div>
        <FormGroup>
          <TextField
            variant="outlined"
            margin="normal"
            label="URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={() => setVideoUrl(url)}
          >
            <OpenInBrowserIcon /> Load Video
          </Button>
        </FormGroup>
      </div>
    </Box>
  );
};

export default VideoInput;
