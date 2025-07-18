/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "&:is(.dark *)"],
  plugins: [require("tailwindcss-animate")],
  theme: {
    fontFamily: {
      sans: [
        '"Inter"',
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryBlue: "hsl(var(--primaryBlue))",
        lightBlue: "hsl(var(--lightBlue))",
        deepBlue: "hsl(var(--deepBlue))",
        primaryText: "hsl(var(--primaryText))",
        secondaryText: "hsl(var(--secondaryText))",
        extremeBlue: "hsl(var(--extremeBlue))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
