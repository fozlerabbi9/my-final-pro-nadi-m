module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          third: "#3A4256",
          buttonGr: "bg-gradient-to-r from-secondary to-primary",
          "base-100": "#ffffff",
        },
      },
      "light",
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}