// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(220,20%,95%)",
          100: "hsl(220,20%,90%)",
          200: "hsl(220,25%,80%)",
          300: "hsl(220,30%,70%)",
          400: "hsl(220,35%,60%)",
          500: "hsl(220,40%,50%)",
          600: "hsl(220,45%,40%)",
          700: "hsl(220,50%,30%)",
          800: "hsl(220,55%,20%)",
          900: "hsl(220,60%,15%)"
        },
        accent: {
          50: "hsl(160,50%,98%)",
          100: "hsl(160,50%,95%)",
          200: "hsl(160,45%,85%)",
          300: "hsl(160,40%,75%)",
          400: "hsl(160,35%,65%)",
          500: "hsl(160,30%,55%)",
          600: "hsl(160,25%,45%)",
          700: "hsl(160,20%,35%)",
          800: "hsl(160,15%,25%)",
          900: "hsl(160,10%,15%)"
        },
        glass: "rgba(255,255,255,0.08)"
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px"
      },
      backgroundImage: {
        "aurora-gradient": "radial-gradient(at 20% 30%, rgba(0,191,255,0.15), rgba(255,0,255,0.12))"
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    function({ addUtilities }) {
      const newUtilities = {
        ".glass": {
          "background-color": "var(--glass, rgba(255,255,255,0.08))",
          "backdrop-filter": "blur(8px)",
          "border": "1px solid rgba(255,255,255,0.12)",
          "border-radius": "0.75rem",
          "box-shadow": "var(--tw-shadow, 0 4px 30px rgba(0,0,0,0.12))"
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ]
};
