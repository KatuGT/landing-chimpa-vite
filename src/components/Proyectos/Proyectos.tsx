 

import { useEffect, useRef } from "react";
import { Video } from "..";

const Proyectos = () => {
  const mainVideo = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (mainVideo.current) {
      mainVideo.current.play();
    }
  };

  const handlePauseVideo = () => {
    if (mainVideo.current) {
      mainVideo.current.pause();
    }
  };

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const videoElement = entries[0];

    if (videoElement.isIntersecting) {
      if (mainVideo.current) {
        mainVideo.current.play();
      }
    } else {
      if (mainVideo.current) {
        mainVideo.current.pause();
      }
    }
  };

  useEffect(() => {
    const videoElement = mainVideo.current;
      
    if (videoElement) {
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        const observer = new IntersectionObserver(handleIntersect, {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        });

        observer.observe(videoElement);
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
    <section className="proyectoVideo hidden  gap-[30px] px-5 md:flex md:px-10">
        <div className="static top-0 h-screen w-full flex-1 md:sticky">
        <video
          id="proyectoVideo"
          ref={mainVideo}
          preload="none"
          loop
          muted
          playsInline
          poster="/VideosPosters/proyecto1poster.webp"
          className="lozad h-full w-full object-cover"
        >
          <source src="/Videos/proyecto1.mp4" type="video/mp4" />
          <source src="/Videos/proyecto1.webm" type="video/webm" />
          Tu navegador no soporta la etiqueta de Videos.
        </video>
      </div>
      <div className="flex flex-1 flex-col gap-[30px]">
        <div className="flex w-full flex-col flex-wrap gap-[30px] md:flex-row">
          <Video
            poster="/VideosPosters/proyecto2poster.webp"
            srcwebm="/Videos/proyecto2.webm"
            srcMp4="/Videos/proyecto2.mp4"
          />
          <Video
            poster="/VideosPosters//proyecto3poster.webp"
            srcwebm="/Videos/proyecto3.webm"
            srcMp4="/Videos/proyecto3.mp4"
          />
        </div>

        <div className="flex w-full flex-col flex-wrap gap-[30px] md:flex-row">
          <Video
            poster="/VideosPosters/proyecto4poster.webp"
            srcwebm="/Videos/proyecto4.webm"
            srcMp4="/Videos/proyecto4.mp4"
          />
          <Video
            poster="/VideosPosters/proyecto5poster.webp"
            srcwebm="/Videos/proyecto5.webm"
            srcMp4="/Videos/proyecto5.mp4"
          />
        </div>

        <div className="flex w-full flex-col flex-wrap gap-[30px] md:flex-row">
          <Video
            poster="/VideosPosters/proyecto6poster.webp"
            srcwebm="/Videos/proyecto6.webm"
            srcMp4="/Videos/proyecto6.mp4"
          />
          <Video
            poster="/VideosPosters/proyecto7poster.webp"
            srcwebm="/Videos/proyecto7.webm"
            srcMp4="/Videos/proyecto7.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
