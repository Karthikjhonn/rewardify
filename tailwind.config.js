/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #668D12 0%, #ACC43F 113.61%)",
      },
      colors: {
        black: "#1B1D1A",
        accent: { 
          50: "#f9fde8",
          100: "#effacd",
          200: "#e0f5a1",
          300: "#c8eb6b",
          400: "#b0de3d",
          500: "#92c41e",
          600: "#668d12",
          700: "#567714",
          800: "#465e16",
          900: "#3b5017",
          950: "#1e2c07",
        },
        secondary:"#F2F8DF"
      },
    },
  },
  plugins: [],
};
