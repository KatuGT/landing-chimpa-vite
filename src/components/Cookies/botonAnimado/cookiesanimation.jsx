 
import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles"

/*
import cookie1 from "../../../../public/cookies/Cookie1.svg"
import cookie2 from "../../../../public/cookies/cookie2.svg"
import cookie3 from "../../../../public/cookies/Cookie3.svg"
import cookie4 from "../../../../public/cookies/Cookie4.svg"
import cookie5 from "../../../../public/cookies/Cookie5.svg"
*/


const cookie1 = "https://propuestas.chimpance.digital/assets/img/Cookie1.svg";
const cookie2 = "https://propuestas.chimpance.digital/assets/img/cookie2.svg"
const cookie3 = "https://propuestas.chimpance.digital/assets/img/Cookie3.svg"
const cookie4 = "https://propuestas.chimpance.digital/assets/img/Cookie4.svg"
const cookie5 = "https://propuestas.chimpance.digital/assets/img/Cookie5.svg"

export const AnimationParticles = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const images = [
                  {
                    src: cookie1,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16
                      }
                    }
                  },
                  {
                    src: cookie2,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16
                      }
                    }
                  },
                  {
                    src: cookie3,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16
                      }
                    }
                  },
                  {
                    src: cookie4,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16
                      }
                    }
                  },
                  {
                    src: cookie5,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16
                      }
                    }
                  }
                  
                ]
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  

    return (
        <Particles  init={particlesInit} loaded={particlesLoaded} 
        options={
          
            {
              
                fullScreen: {
                  zIndex: 500
                },
                emitters: {
                  position: {
                    x: 50,
                    y: 100,
                  },
                  life: {
                    count: 1,
                    duration: 0.05,
                    delay: 1
                  },
                  rate: {
                    delay: 0,
                    quantity: 50
                  },
                  size: {
                    width: 0,
                    height: 0
                  }
                },              
                particles: {
                  color: {
                    value: [
                      "#1E00FF",
                      "#FF0061",
                      "#E1FF00",
                      "#00FF9E"
                    ]
                  },
                  move: {
                    decay: 0.05,
                    direction: "top",
                    enable: true,
                    gravity: {
                      enable: true
                    },
                    outModes: {
                      top: "none",
                      default: "destroy"
                    },
                    speed: {
                      min: 30,
                      max: 45
                    }
                  },
                 
                  number: {
                    value: 50,
                    density:{
                      enable:false
                    }
                  },
                  opacity: {
                    value: 1
                  },
                  rotate: {
                    value: {
                      min: 0,
                      max: 360
                    },
                    direction: "random",
                    animation: {
                      enable: true,
                      speed: 20
                    }
                  },
                  tilt: {
                    direction: "random",
                    enable: true,
                    value: {
                      min: 0,
                      max: 360
                    },
                    animation: {
                      enable: true,
                      speed: 30
                    }
                  },
                  size: {
                    value: 3,
                    animation: {
                      enable: true,
                      startValue: "min",
                      count: 1,
                      speed: 16,
                      sync: true
                    }
                  },
                  roll: {
                    darken: {
                      enable: true,
                      value: 25
                    },
                    enlighten: {
                      enable: true,
                      value: 25
                    },
                    
                    enable: true,
                    speed: {
                      min: 5,
                      max: 15
                    }
                  },
                  wobble: {
                    distance: 30,
                    enable: true,
                    speed: {
                      min: -7,
                      max: 7
                    }
                  },
                  shape: {
                    type: [
                      
                      "image"
                    ],
                    options: {
                      image: images
                    }
                  }
                },
               
              }
          
        }/>
    );
};