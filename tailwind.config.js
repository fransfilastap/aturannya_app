module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins','ui-sans-serif', 'system-ui'],
      'serif': ['Poppins','ui-serif', 'Georgia'],
      'mono': ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      'display': ['Source Sans Pro', 'ui-serif', 'Georgia'],
      'body': ['Source Serif Pro', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
