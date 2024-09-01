/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  relative: true,
  transform: (content) => content.replace(/taos:/g, ""),
  files: ["./src/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "background-image":
          "url(https://images.pexels.com/photos/4022121/pexels-photo-4022121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("taos/plugin")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "black"],
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
