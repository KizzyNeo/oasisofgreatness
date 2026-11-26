import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { siteContent } from "../data/siteContent";
import "./VideoSlider.css";

function VideoSlider() {
  const videos = siteContent.videos || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedVideos, setFailedVideos] = useState([]);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const currentVideo = videos[currentIndex];

  // Move to the next available video
  const playNextVideo = () => {
    if (videos.length === 0) return;

    setCurrentIndex((previousIndex) => {
      let nextIndex = (previousIndex + 1) % videos.length;
      let attempts = 0;

      while (
        failedVideos.includes(videos[nextIndex].id) &&
        attempts < videos.length
      ) {
        nextIndex = (nextIndex + 1) % videos.length;
        attempts++;
      }

      return nextIndex;
    });
  };

  const handleReady = (event) => {
    setAutoplayBlocked(false);

    event.target.mute();
    event.target.playVideo();
  };

  const handleEnd = () => {
    playNextVideo();
  };

  const handleError = () => {
    setFailedVideos((previous) => {
      if (previous.includes(currentVideo.id)) {
        return previous;
      }

      return [...previous, currentVideo.id];
    });

    playNextVideo();
  };

  const handleAutoplayBlocked = () => {
    setAutoplayBlocked(true);
  };

  const selectVideo = (index) => {
    if (!failedVideos.includes(videos[index].id)) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (
      videos.length > 0 &&
      failedVideos.length === videos.length
    ) {
      setFailedVideos([]);
      setCurrentIndex(0);
    }
  }, [failedVideos, videos]);

  if (videos.length === 0) {
    return null;
  }

  if (videos.every((video) => failedVideos.includes(video.id))) {
    return (
      <section className="video-slider">
        <div className="video-error">
          <p>Unable to load the videos. Please try again later.</p>
          <button onClick={() => setFailedVideos([])}>
            Try Again
          </button>
        </div>
      </section>
    );
  }

  const playerOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
      enablejsapi: 1,
    },
  };

  return (
    <section className="video-slider">

      <div className="video-slider-container">

        <div className="video-player-wrapper">

          <YouTube
            key={currentVideo.id}
            videoId={currentVideo.id}
            opts={playerOptions}
            onReady={handleReady}
            onEnd={handleEnd}
            onError={handleError}
            onAutoplayBlocked={handleAutoplayBlocked}
            className="youtube-player"
            iframeClassName="youtube-iframe"
          />

          {autoplayBlocked && (
            <div className="video-autoplay-notice">
              <button
                onClick={() => {
                  setAutoplayBlocked(false);
                }}
              >
                Play Video
              </button>
            </div>
          )}

        </div>

        <div className="video-navigation">

          {videos.map((video, index) => (
            <button
              key={video.id}
              className={`video-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => selectVideo(index)}
              disabled={failedVideos.includes(video.id)}
              aria-label={`Play ${video.title || `video ${index + 1}`}`}
              aria-current={
                currentIndex === index ? "true" : undefined
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default VideoSlider;
