 

import { useEffect, useRef } from "react";

interface VideoProps {
  srcMp4: string;
  srcwebm?: string;
  poster: string;
}

const Video = ({ srcMp4, srcwebm, poster }: VideoProps) => {

  const videoRef = useRef<HTMLVideoElement>(null);

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
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
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
          if (observer) {
            observer.disconnect();
          }
        };
      } else {
        videoElement.addEventListener("mouseover", () => handlePlayVideo());
        videoElement.addEventListener("mouseout", () => handlePauseVideo());

        return () => {
          videoElement.addEventListener("mouseover", () => handlePlayVideo());
          videoElement.addEventListener("mouseout", () => handlePauseVideo());
        };
      }
    }
  }, []);

  return (
    <div className="relative flex-1 overflow-hidden">
      <img
        alt="poster de video"
        src={poster}
        className=" h-full w-full object-cover sm:hidden absolut inset-0"
      />
      <video
        ref={videoRef}
        preload="none"
        loop
        muted
        playsInline
        poster={poster}
        className="proyectoVideo lozad relative z-10 aspect-[1/1.1] w-full object-cover md:aspect-auto"
      >
        {srcwebm && <source src={srcwebm} type="video/webm" />}
        <source src={srcMp4} type="video/mp4" />
        Tu navegador no soporta la etiqueta de Videos.
      </video>
    </div>
  );
};

export default Video;
