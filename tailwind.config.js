/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-style": {
          backgroundColor: "#16a34a",
          fontWeight: "700",
          color: "#ffffff",
          paddingTop: "0.75rem",
          paddingRight: "1.25rem",
          paddingBottom: "0.75rem",
          paddingLeft: "1.25rem",
          marginRight: "0.75rem",
          width: "fit-content",
          borderRadius: "0.375rem",
        },
        ".custom-style-red": {
          backgroundColor: "#dc2626",
          fontWeight: "700",
          color: "#ffffff",
          paddingTop: "0.75rem",
          paddingRight: "1.25rem",
          paddingBottom: "0.75rem",
          paddingLeft: "1.25rem",
          width: "fit-content",
          borderRadius: "0.375rem",
        },
        ".custom-border": {
          border: "1px solid #6B7280", // Color de borde slate-500
          paddingLeft: "32px",
          paddingRight: "23px",
          paddingTop: "8px",
          paddingBottom: "8px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
