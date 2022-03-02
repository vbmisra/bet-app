module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  variants: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
    },
  },
    //...
    plugins: 
    [require("daisyui"),
    require('@tailwindcss/forms')],

    daisyui: {
      themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade"],
    },
}
