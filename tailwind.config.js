// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Specify the paths to all of the template files in your project
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // General pattern to cover any additional directories
  ],

  // 2. Enable dark mode based on a CSS class
  darkMode: "class",

  // 3. Extend the default theme
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      // 3.a. Add custom colors using CSS variables
      colors: {
        background: "var(--background)", // Custom background color using CSS variable
        foreground: "var(--foreground)", // Custom foreground color using CSS variable
        // You can add more custom colors here if needed
      },
      // 3.b. Retain only necessary animations (remove aurora)
      animation: {
        shimmer: "shimmer 2s linear infinite", // Existing shimmer animation
      },
      // 3.c. Define keyframes for retained animations
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      // You can extend other theme properties here as needed
    },
  },

  // 4. Include plugins
  plugins: [
    // 4.a. Plugin to add Tailwind colors as CSS variables
    addVariablesForColors,

    // 4.b. Custom plugin to add background utilities: bg-grid, bg-grid-small, bg-dot
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // Utility for grid background
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          // Utility for small grid background
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          // Utility for dot pattern background
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ], // Ensure a comma here if you add more plugins later
};

/**
 * Plugin to add each Tailwind color as a global CSS variable, e.g., var(--gray-200).
 */
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars, // Adds CSS variables to the root element
  });
}
