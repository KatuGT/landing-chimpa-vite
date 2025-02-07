 
import React, { useState, useRef } from "react";
import { useCookies } from "react-cookie";

const chimpa = "https://propuestas.chimpance.digital/assets/img/Chimpa_cookie.svg";
const pote = "https://propuestas.chimpance.digital/assets/img/pote_cookie.png";

import "./Cookies.css";

import { AnimationParticles } from "./botonAnimado/cookiesanimation";

const cookie1 = "https://propuestas.chimpance.digital/assets/img/Cookie1.svg";
const cookie2 = "https://propuestas.chimpance.digital/assets/img/cookie2.svg";
const cookie3 = "https://propuestas.chimpance.digital/assets/img/Cookie3.svg";
const cookie4 = "https://propuestas.chimpance.digital/assets/img/Cookie4.svg";
const cookie5 = "https://propuestas.chimpance.digital/assets/img/Cookie5.svg";

export default function Cookies() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [cookiesFalse, setCookieFalse] = useState(false);
  const [cookiesStart, setCookiesShow] = useState(false);

  const [booleanImages, setBooleanImages] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  let preHolderImages = [];

  const imgURLs = [cookie1, cookie2, cookie3, cookie4, cookie5];

  const cookiesContainerRef = useRef();

  const handleDecline = () => {
    setCookieFalse(true);
  };
  const handleAccept = () => {
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 3); // Set the expiration date to three months later
    setCookiesShow(true);
    cookiesContainerRef.current.style.opacity = 0;
    setTimeout(() => {
      setCookie("cookieConsent", true, { path: "/", expires: expirationDate });
    }, 800);
  };

  const handleImageLoad = (index) => {
    preHolderImages.push(index);
    setLoadedImages([...loadedImages, index]);
    console.log(preHolderImages);
    setBooleanImages(preHolderImages.length === imgURLs.length);
  };

  return (
    <>
      {cookies.cookieConsent || cookiesFalse ? null : (
        <div
          ref={cookiesContainerRef}
          className={`${!booleanImages ? "cookies background" : "cookies"}`}
        >
          <div>
            {imgURLs.map((url, index) => (
              <img
                className="hidden"
                key={index}
                src={url}
                alt={`Image ${index}`}
                onLoad={() => handleImageLoad(index)}
              />
            ))}
            {booleanImages && (
              <>
                <div className="container mx-auto px-5">
                  <div className="grid grid-cols-12 lg:grid-cols-12">
                    <div className="lg:col-span-7 col-span-12 text-white">
                      <h1 className="h1 font-bold">Los Chimpancés comemos Cookies</h1>
                      <p>
                        Y también las utilizamos para mejorar tu experiencia de
                        navegación.
                        <br />
                        Para obtener más información, visita nuestra{" "}
                        <a href="/privacy-policy">Política de Privacidad.</a>
                      </p>
                    </div>
                    <div className="lg:col-span-5 col-span-12 flex justify-center md:items-center items-start flex-column flex-md-row buttons">
                      <div className="relative">
                        <button
                          onClick={handleAccept}
                          className="bg-white px-2 py-3 rounded lg:items-center me-2 flex"
                        >
                          {cookiesStart ? (
                            <svg
                              width="33"
                              height="25"
                              viewBox="0 0 33 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 13.2L10.8611 22L31 2"
                                stroke="#002C58"
                                stroke-width="3"
                                stroke-linecap="round"
                              />
                            </svg>
                          ) : (
                            <>
                              <svg
                                className="me-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23.0948 7.99265V7.99745C23.6948 9.44226 24 10.9776 24 12.5623C24 19.1773 18.6151 24.5623 12 24.5623C5.38494 24.5623 0 19.1773 0 12.5623C0 5.94717 5.38494 0.562256 12 0.562256C13.25 0.562256 14.4851 0.757006 15.661 1.13757C15.6658 1.13757 15.6658 1.14236 15.6658 1.14236H15.6809C15.6977 1.1481 15.7113 1.15834 15.7254 1.16888L15.7386 1.17864L15.7443 1.18258L15.7507 1.18666L15.7541 1.18868L15.7611 1.19243C15.7865 1.20753 15.8166 1.21232 15.8414 1.23221C15.8414 1.23221 15.8414 1.23383 15.8423 1.2352C15.8429 1.23617 15.8441 1.237 15.8461 1.237C15.8731 1.26449 15.8925 1.29201 15.9145 1.32318L15.9209 1.33232C15.9239 1.3362 15.927 1.33987 15.9302 1.34348L15.9371 1.35123C15.9434 1.35812 15.9497 1.36502 15.9551 1.37268C15.9594 1.37854 15.9632 1.38488 15.9661 1.39198C15.9742 1.40604 15.9794 1.42136 15.9833 1.43737L15.9853 1.44631L15.9876 1.45723L15.9909 1.477L15.9955 1.48964L16.0005 1.50269L16.0008 1.50366C16.0091 1.52526 16.0176 1.54761 16.0211 1.57232C16.0211 1.58049 16.02 1.5888 16.0189 1.59741V1.60138C16.0176 1.61259 16.0162 1.62446 16.0162 1.63745C16.0162 1.6827 16.0115 1.72247 16.0012 1.76775V1.77254C15.9954 1.78938 15.9852 1.80471 15.9754 1.81927C15.9677 1.83081 15.9603 1.84185 15.9558 1.85277C15.9408 1.88295 15.9305 1.91311 15.9106 1.93779C15.2701 2.71815 14.9205 3.69323 14.9205 4.693C14.9205 7.0875 16.8699 9.03769 19.2652 9.03769C20.3952 9.03769 21.465 8.60295 22.2802 7.813C22.2869 7.8074 22.2937 7.80264 22.3004 7.79835C22.3101 7.79219 22.3198 7.78701 22.3295 7.78186C22.3381 7.77737 22.3466 7.77287 22.355 7.76775C22.3852 7.74786 22.4051 7.72798 22.4353 7.71288H22.4454C22.4805 7.69847 22.521 7.693 22.5607 7.6882C22.5853 7.6882 22.6108 7.67311 22.6354 7.6779C22.6656 7.6779 22.6903 7.6882 22.7204 7.693C22.7554 7.69779 22.7904 7.70259 22.8205 7.71288C22.8336 7.71919 22.8446 7.72786 22.8562 7.73733L22.8626 7.74259L22.8755 7.75266C22.9152 7.77254 22.9502 7.79243 22.9851 7.82261C22.9851 7.82548 22.9851 7.82664 22.9862 7.82711C22.9869 7.82741 22.988 7.82741 22.9899 7.82741C23.0098 7.85209 23.0249 7.88224 23.04 7.91243C23.055 7.93711 23.0798 7.9522 23.0901 7.98236C23.0901 7.98537 23.0901 7.98674 23.0909 7.98816L23.0923 7.99005L23.0948 7.99265ZM3.49988 14.0619C3.49988 15.1673 4.39548 16.0621 5.50012 16.0621C6.60476 16.0621 7.50036 15.1673 7.50036 14.0619C7.50036 12.9566 6.60476 12.0617 5.50012 12.0617C4.39477 12.0617 3.49988 12.9572 3.49988 14.0619ZM8.49941 5.56181C7.67448 5.56181 6.99976 6.23724 6.99976 7.06214C6.99976 7.88707 7.67519 8.56249 8.49941 8.56181C9.32505 8.56181 9.99976 7.88707 9.99976 7.06214C9.99976 6.23653 9.32434 5.56181 8.49941 5.56181ZM11.5001 19.0621C11.5001 19.8877 12.1748 20.5625 12.9998 20.5625C13.8247 20.5625 14.5001 19.8871 14.5001 19.0621C14.5001 18.2372 13.8247 17.5625 12.9998 17.5625C12.1748 17.5625 11.5001 18.2372 11.5001 19.0621ZM12 12.312C12 13.4173 12.8956 14.3122 14.0002 14.3122C15.1049 14.3122 15.9998 13.4173 16.0005 12.312C16.0005 11.2066 15.1049 10.3118 14.0002 10.3118C12.8949 10.3118 12 11.2073 12 12.312Z"
                                  fill="#002C58"
                                />
                              </svg>
                              Acepto cookies
                            </>
                          )}
                        </button>
                      </div>
                      <button
                        onClick={handleDecline}
                        className="border border-white text-white px-3 py-3 rounded lg:items-center me-2 flex "
                      >
                        No acepto
                      </button>
                    </div>
                  </div>
                </div>
                <div className="items-baseline containerimg md:flex hidden">
                  <img src={pote} alt="" />
                  <img src={chimpa} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="canvas">{cookiesStart && <AnimationParticles />}</div>
    </>
  );
}
