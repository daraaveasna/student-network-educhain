/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}", 'node_modules/preline/dist/*.js'],
  plugins: [
    require('preline/plugin')
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eee",
        "colors-green": "#70ce88",
        darkslategray: {
          100: "#37474f",
          200: "#373737",
          300: "#2f2f2f",
          400: "rgba(55, 71, 79, 0.72)",
        },
        "colors-orange": "#fa706c",
        "colors-blue": "#5c96ff",
        "colors-danger": "#ff5959",
        "state-hover": "#fff",
        gray: {
          100: "#fafafa",
          200: "#7d7d7d",
        },
        slategray: {
          100: "#5d6d79",
          200: "rgba(93, 109, 121, 0.5)",
        },
        strokes: "#d1d1d1",
        dimgray: {
          100: "#505050",
          200: "rgba(115, 115, 115, 0.5)",
        },
        color1: "#56aeff",
        color4: "#3f72af",
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "19xl": "38px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      base: "16px",
      mid: "17px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
