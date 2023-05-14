/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      azul:"var(--color-azul)"
    },
    fontFamily:{
      mont:"var(--font-mont)"
    },
    extend: {
      overflowWrap:"anywhere"
    }
  },
  plugins: [],
}

