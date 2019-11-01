import React from "react";

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
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label htmlFor={`url-${title}`}>URL</label>
        <input
          type="url"
          id={`url-${title}`}
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button type="button" onClick={() => setVideoUrl(url)}>
          Load
        </button>
      </div>
    </fieldset>
  );
};

export default VideoInput;
