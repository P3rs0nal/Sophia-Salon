module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
  "./public/index.html"],
  theme: { extend: {
    colors: {
      brand1: "#D6D2D2",   // light gray
        brand2: "#F1E4F3",   // off-white lavender
        brand3: "#F4BBD3",   // pale pink
        brand4: "#F686BD",   // medium rose
        brand5: "#FE5D9F",   // bold magenta
    },
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],  // Elegant for titles
      body: ['"Open Sans"', 'sans-serif'],       // Clean for text
    }
  } },
  plugins: []
};