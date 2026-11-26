
import { useState } from "react";
import { siteContent } from "../data/siteContent";

function VideoSlider() {
  const videos = siteContent.videos;

  const [currentVideo, setCurrentVideo] = useState(0);
  const [failedVideos, setFailedVideos] = useState([]);

  const allFailed = failedVideos.length === videos.length;

  const nextVideo = () => {
    setCurrentVideo((previous) => (previous + 1) % videos.length);
  };

  const handleVideoError = () => {
    setFailedVideos((previous) =>
      previous.includes(currentVideo)
        ? previous
        : [...previous, currentVideo]
    );

    if (failedVideos.length + 1 < videos.length) {
      nextVideo();
    }
  };

  return (
    <section className="video-section">

      <div className="section-heading">
        <span className="section-subtitle">
          WORDS THAT INSPIRE
        </span>

        <h2>Poetry & Expressions</h2>

        <p>
          Discover thoughts, reflections and expressions through poetry.
        </p>
      </div>

      <div className="video-container">

        {!allFailed ? (
          <>
            <video
              key={videos[currentVideo].src}
              className="featured-video"
              src={videos[currentVideo].src}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              onEnded={nextVideo}
              onError={handleVideoError}
              aria-label={videos[currentVideo].title}
            />

            <div className="video-title">
              <span>{videos[currentVideo].title}</span>
              <span>
                {currentVideo + 1} / {videos.length}
              </span>
            </div>
          </>
        ) : (
          <div className="video-error">
            <h3>Videos currently unavailable</h3>
            <p>
              Please check your internet connection or refresh this page.
            </p>
          </div>
        )}

        <div className="video-indicators">
          {videos.map((video, index) => (
            <button
              key={video.src}
              className={
                currentVideo === index
                  ? "indicator active"
                  : "indicator"
              }
              onClick={() => {
                if (!failedVideos.includes(index)) {
                  setCurrentVideo(index);
                }
              }}
              disabled={failedVideos.includes(index)}
              aria-label={`Play ${video.title}`}
              aria-current={currentVideo === index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default VideoSlider;
