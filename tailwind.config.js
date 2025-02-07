/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradiente-azul-inclinada":
          "linear-gradient(25deg, #00A3DA 0%, #00214B 99%);",
        "gradiente-azul": "linear-gradient(90deg, #00214B 26%, #00A3DA 100%)",
        "gradiente-azul-dos":
          "linear-gradient(90deg, #00214B 0%, #00A3DA 100%)",
        "gradiente-celeste-azul":
          "linear-gradient(90deg, #00A3DA 0%, #00214B 100%)",
        "gradiente-azul-oscuro":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #00214B 100%)",
        "gradiente-radial-blanco":
          "radial-gradient(closest-side, #EBEBEB 78%, transparent 0);",
      },
      colors: {
        azul: "#00214B",
        celeste: "#00A3DA",
        amarillo: "#FFDA3A",
        grisClaro: "#EBEBEB",
      },
      fontFamily: {
        circular: ["Circular", "sans-serif"], 
        SpaceGrotesk: ["SpaceGrotesk", "sans-serif"],
      },
      boxShadow: {
        inputOutline: "inset 0 0 0 1px rgba(0,0,0,.1)",
      },
      screens: {
        tablet: "1260px",
      },
    },
  },
  plugins: [],
}

