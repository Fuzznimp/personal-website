// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "media",
  theme: {
    colors: {
      primary: "hsl(0, 0%, 6%)",
      secondary: "hsl(0, 0%, 90%)",
      background: "hsl(0, 0%, 92%)",
      contrastCopy: "hsl(0, 0%, 93%)",
      lightGray: "hsl(0, 0%, 40%)",
    },
    fontSize: {
      xs: "1rem",
      s: "1.2rem",
      m: "1.4rem",
      base: "1.6rem",
      l: "1.8rem",
      xl: "2rem",
      xxl: "2.2rem",
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        robotoMono: "'Roboto Mono', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      });
    }),
  ],
};
