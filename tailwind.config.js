module.exports = {
  content: [
    "./layouts/**/*.html",    // Ensure all HTML files in the layouts directory are included
    "./content/**/*.md",      // Include Markdown files in the content directory (adjust based on your structure)
    "./themes/**/*.html"      // Include HTML files in any themes directory (if applicable)
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")], // TailwindCSS typography plugin
};
