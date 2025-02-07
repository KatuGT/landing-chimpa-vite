import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { InputChimpa } from "..";
import SearchCountryComponent from "./SearchCountryComponent";
import LoadingIcon from "../../assets/SVGicon/LoadingIcon";
import { EmailIcon } from "../../assets/SVGicon/EmailIcon";
import TelefonoIcon from "../../assets/SVGicon/TelefonoIcon";
import EmpresaIcon from "../../assets/SVGicon/EmpresaIcon";
import EmpresaIconMobile from "../../assets/lotties/casa.json";
import TelefonoIconMobile from "../../assets/lotties/telefono.json";
import PersonaIcon from "../../assets/SVGicon/PersonaIcon";
import PersonaIconMobile from "../../assets/lotties/usuario.json";
import EmailIconMobile from "../../assets/lotties/mensaje.json";
import avionPapelVector from "../../assets/lotties/avionPapelVector.json";
import Lottie from "react-lottie";
import ReCAPTCHA from "react-google-recaptcha";
import { Country } from "../../utils/types/countries";

export default function FormularioContacto({
  header = "Contáctanos",
  section,
}: {
  header?: "Contáctanos" | "Hablemos de tu proyecto";
  section: string;
}) {

  const [showSearch, setShowSearch] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    nombre: "Argentina",
    phone_code: 54,
    iso2: "ar",
  });

  const [isSended, setIsSended] = useState(false);
  const [isSending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    nombreApellido: "",
    empresa: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const getData = () => {
    fetch("code_country.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
  };

  const [honeypot, setHoneypot] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Actualiza el estado con los valores de los campos de entrada
    if (name !== "honeypot") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setHoneypot("value");
    }
    updateButtonDisabled();
  };

  // Calcula si todos los campos están completos
  const areAllFieldsComplete = () => {
    for (const key in formData) {
      if ((formData as Record<string, string>)[key] === "") {
        return false;
      }
    }
    return true;
  };

  // Actualiza el estado que controla si se habilita o no el botón
  const updateButtonDisabled = () => {
    setIsButtonDisabled(!areAllFieldsComplete());
  };

  // Muestra los valores de los campos en la consola

  type HandleSearchInfo = (info: Country) => void;

  const handleSearchInfo: HandleSearchInfo = (info) => {
    setSelectedCountry({
      ...info,
      phone_code: +info.phone_code,
    });
  };

  const handleChangeShow = (res: boolean) => {
    setTimeout(() => {
      setShowSearch(res);
    }, 300);
  };

  const handleChangeSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    getData();
  }, []);

  const [recaptacha, setRecaptacha] = useState("");

  function onChange(value: string | null) {
    if (value) {
      setRecaptacha(value);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const jsonData = {
      name: formData.nombreApellido,
      email: formData.email,
      country: selectedCountry.nombre,
      company: formData.empresa,
      consulta: ["Campo"],
      message: formData.consulta,
      honeypot: honeypot,
      phone: selectedCountry.phone_code + formData.telefono,
      "g-recaptcha-response": recaptacha,
      // redirect: params?.meta ? params?.meta : "-",
    };
    setSending(true);
    axios
      .post(
        "https://propuestas.chimpance.digital/api/api/Mail/Form",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then(() => {
        setIsSended(true);
        setSending(false);
        // route.push("/gracias");
      })
      .catch((error) => {
        console.error(error);
        setSending(false);
      });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: avionPapelVector,
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contactanos"
      className={`group relative mr-auto flex h-full w-full flex-1 flex-col justify-between border-b-inherit fill-inherit pb-8  pt-5 `}
    >
      <h2
        className={`w-full text-center leading-none ${header === "Contáctanos" ? "text-[30px] xl:text-[40px]" : "text-[30px] xl:text-[40px]"} font-extralight`}
      >
        {header}
      </h2>
      <div className="relative z-20 flex w-full flex-col  gap-10 border-b-inherit fill-inherit px-2 pt-8 lg:gap-8">
        <div className="border-b-inherit fill-inherit">
          <InputChimpa
            htmlForId={"nombreCliente" + section}
            value={formData.nombreApellido}
            icon={<PersonaIcon className="fill-inherit" />}
            iconoMobile={PersonaIconMobile}
            type="text"
            name="nombreApellido"
            onChange={handleInputChange}
            onBlur={updateButtonDisabled}
            placeholder="Nombre"
          />
        </div>
        <div className="border-b-inherit fill-inherit">
          <InputChimpa
            htmlForId={"Empresacliente" + section}
            value={formData.empresa}
            icon={<EmpresaIcon className="fill-inherit" />}
            iconoMobile={EmpresaIconMobile}
            type="text"
            name="empresa"
            onChange={handleInputChange}
            onBlur={updateButtonDisabled}
            placeholder="Empresa"
          />
        </div>
        <div className="border-b-inherit fill-inherit">
          <InputChimpa
            htmlForId={"emailCliente" + section}
            value={formData.email}
            icon={<EmailIcon className="fill-inherit" />}
            iconoMobile={EmailIconMobile}
            type="email"
            name="email"
            onChange={handleInputChange}
            onBlur={updateButtonDisabled}
            placeholder="Email"
          />
        </div>
        <div className="hidden border-b-inherit fill-inherit">
          <InputChimpa
            htmlForId={"honeypot" + section}
            value={honeypot}
            icon={<EmailIcon className="fill-inherit" />}
            iconoMobile={EmailIconMobile}
            type="text"
            name="honeypot"
            onChange={handleInputChange}
            onBlur={updateButtonDisabled}
            placeholder="honeypot"
          />
        </div>
        <div className="flex gap-1 border-b-inherit">
          <div className="z-20 border-b-inherit">
            {selectedCountry ? (
              <div className="relative flex translate-y-[-4px] transform cursor-pointer items-center border-b-inherit font-thin">
                <div
                  onClick={handleChangeSearch}
                  className="relative flex w-full items-center border border-transparent border-b-inherit py-2 text-center font-thin "
                >
                  <span className="absolute -top-2 text-xs">País</span>
                  <span
                    className={`fi me-2 fi-${selectedCountry.iso2.toString().toLowerCase()} px-2`}
                  ></span>
                  <span className="ps-2">(+{selectedCountry.phone_code})</span>
                  <span className="flecha px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.646447 0.146447C0.841709 -0.0488155 1.15829 -0.0488155 1.35355 0.146447L7 5.79289L12.6464 0.146447C12.8417 -0.0488155 13.1583 -0.0488155 13.3536 0.146447C13.5488 0.341709 13.5488 0.658291 13.3536 0.853553L7.35355 6.85355C7.15829 7.04882 6.84171 7.04882 6.64645 6.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>
                {showSearch ? (
                  <div className="searchComponent absolute bottom-[0px] z-[999]">
                    <SearchCountryComponent
                      showSearch={showSearch}
                      onChangeShow={handleChangeShow}
                      onInfoSended={handleSearchInfo}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="relative w-full border-b-inherit">
            <InputChimpa
              htmlForId={"telefonoCliente" + section}
              value={formData.telefono}
              icon={<TelefonoIcon className="fill-inherit" />}
              iconoMobile={TelefonoIconMobile}
              type="number"
              name="telefono"
              onChange={handleInputChange}
              onBlur={updateButtonDisabled}
              placeholder="Teléfono"
            />
          </div>
        </div>

        <div className="border-b-inherit">
          <div className="relative border-b-inherit">
            <textarea
              className={`w-full border border-transparent  border-b-inherit bg-transparent p-2 font-thin  outline-none placeholder:text-inherit focus-within:border-2 focus:border focus:border-transparent focus:border-b-amarillo `}
              name="consulta"
              placeholder="Dejanos tu consulta..."
              value={formData.consulta}
              onChange={handleInputChange}
              onBlur={updateButtonDisabled}
              cols={10}
              rows={1}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="group relative flex w-full flex-col pt-2">
        <div className="flex w-full justify-center pb-4">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_CLAVE_WEB_CAPTCHA as string}
            onChange={onChange}
          />
        </div>
        <button
          disabled={isButtonDisabled || isSending}
          className={`group peer flex w-full items-center justify-center gap-3 rounded-full bg-amarillo  py-3 text-lg font-thin text-azul transition-all
              disabled:cursor-default
              ${!isButtonDisabled && "hover:bg-celeste hover:text-white"}
              ${!isButtonDisabled && section === "hero" ? "hover:text-white lg:hover:bg-celeste" : ""}
               ${isButtonDisabled && section === "hero" ? " bg-white lg:bg-amarillo" : ""}
              `}
        >
          {isSending ? (
            <LoadingIcon
              className={`stroke-azul  ${!isButtonDisabled && "group-hover:stroke-azul"}`}
            />
          ) : (
            <>
              <span>Enviar</span>
              <div className="relative flex h-6 w-6 cursor-default items-center justify-center group-hover:cursor-pointer ">
                <Lottie
                  options={defaultOptions}
                  height={90}
                  width={90}
                  style={{
                    margin: "initial",
                    position: "absolute",
                  }}
                />
              </div>
            </>
          )}
        </button>
        {isButtonDisabled && (
          <span className="absolute -bottom-7 w-full text-center text-red-500 opacity-0 peer-hover:opacity-100">
            Todos los campos son requeridos.
          </span>
        )}
      </div>
      <div className="mt-4 grid w-full place-items-center">
        {/* {recaptchaNeeded && (
          <span className="mt-1 text-center text-xs font-thin text-red-500">
            Debes completar el reCAPTCHA
          </span>
        )} */}
      </div>
      {isSended && (
        <div className=" ">
          <p className="text-center font-thin">Mensaje enviado correctamente</p>
        </div>
      )}
    </form>
  );
}
