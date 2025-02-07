
const VideoIntro = () => {
  return (
    <div className="">
      <video autoPlay loop muted playsInline poster="/poster-video-intro.webp" className="h-[40vh] md:h-[50vh] xl:h-[70vh] w-full object-cover ">
        <source src="/Videos/intro.webm" type="video/webm" />
        <source src="/Videos/intro.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de Videos.
      </video>
    </div>
  );
};

export default VideoIntro;
