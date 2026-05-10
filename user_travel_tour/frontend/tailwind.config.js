// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2563EB", // Màu xanh từ Figma
//       },
//       borderRadius: {
//         '4xl': '40px', // Bo góc lớn đặc trưng của SaaS
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Ghi đè font mặc định của Tailwind bằng font Inter
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};