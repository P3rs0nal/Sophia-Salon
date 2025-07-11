module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
  "./public/index.html"],
  theme: { extend: {
    colors: {
        strawberry: "#EFC1CA",   // Primary pink
        matcha:     "#A1C181",   // Accent green
        bg:         "#FFFFFF",   // Page background
        surface:    "#F4F4F4",   // Card & section backgrounds
        text:       "#333333",   // Primary text
    },
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],  // Elegant for titles
      body: ['"Open Sans"', 'sans-serif'],       // Clean for text
      cursive: ['Allura', 'cursive']
    }
  } },
  plugins: [],
  
};