/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2733",          // headings / primary text
        slate2: "#5C6674",       // body text
        sky1: "#CFE3F1",         // top-of-page sky
        sky2: "#BDD7EA",         // deeper sky
        cream: "#F6EFE4",        // warm horizon
        card: "#FFFFFF",
        mist: "#EDF3F8",         // pale panel background
        ember: "#F0703A",        // small orange accent (live dot, icons)
        line: "#DDE6EE",
      },
      fontFamily: {
        sans: ["Onest", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Onest", "ui-sans-serif", "system-ui", "sans-serif"], // alias — same face, kept so existing font-display classes still work
      },
      borderRadius: {
        blob: "1.75rem",
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(31,39,51,0.18)",
        lift: "0 12px 32px -12px rgba(31,39,51,0.14)",
      },
      backgroundImage: {
        "sky-fade": "linear-gradient(180deg, #CFE3F1 0%, #E4EEF4 38%, #F6EFE4 72%, #F2F4F3 100%)",
        "step-fade": "linear-gradient(180deg, #C9DFEF 0%, #F1E9DB 100%)",
      },
    },
  },
  plugins: [],
};
