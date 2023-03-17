/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': 'rgba(115, 227, 255, 1)',
        'BlueA20': 'rgba(115, 227, 255, 0.2)',
        'Gray000': 'rgba(255, 255, 255, 1)',
        'Gray050': 'rgba(243, 242, 242, 1)',
        'Gray100': 'rgba(0, 0, 0, 1)',
        'Gray300': 'rgba(180, 177, 177, 1)',
        'Gray500': 'rgba(130, 125, 127, 1)',
        'Gray700': 'rgba(78, 75, 76, 1)',
        'Gray900': 'rgba(26, 25, 25, 1)',
        'Green': 'rgba(134, 204, 20, 1)',
        'GreenA20': 'rgba(134, 204, 20, 0.2)',
        'Primary': 'rgba(0, 45, 156, 1)',
        'Primary500': 'rgba(0, 74, 255, 1)',
        'Primary600': 'rgba(0, 59, 204, 1)',
        'Primary800': 'rgba(0, 29, 102, 1)',
        'Secondary': 'rgba(237, 0, 92, 1)',
        'Secondary400': 'rgba(255, 51, 130, 1)',
        'Secondary700': 'rgba(153, 0, 59, 1)',
        'Yellow': 'rgba(255, 217, 64, 1)',
        'Yellow200': 'rgba(255, 235, 153, 1)',
        'Yellow650': 'rgba(178, 143, 0, 1)',
        'YellowA20': 'rgba(255, 217, 64, 0.2)',
      },
      backgroundImage: {
        'dollarCoin': "url('/dollar-coin.webp')",
      }
    },
  },
  plugins: [],
}
