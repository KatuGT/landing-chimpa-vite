import { useEffect } from "react";

const useVideoPlay = (videoRef: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const handlePlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handlePauseVideo = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const videoElement = entries[0];
      if (videoElement.isIntersecting) {
        handlePlayVideo();
      } else {
        handlePauseVideo();
      }
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        const observer = new IntersectionObserver(handleIntersect, {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        });

        observer.observe(videoElement);

        return () => {
          observer.unobserve(videoElement);
        };
      } else {
        videoElement.addEventListener("mouseover", handlePlayVideo);
        videoElement.addEventListener("mouseout", handlePauseVideo);

        return () => {
          videoElement.removeEventListener("mouseover", handlePlayVideo);
          videoElement.removeEventListener("mouseout", handlePauseVideo);
        };
      }
    }
  }, [videoRef]);
};

export default useVideoPlay;
