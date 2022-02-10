module.exports = {
  theme: {
    extend: {
      colors: {
        'vivid-red': '#f23424',
        'dark-night': '#14142d',
        'gray-sand': '#e7ddd5',
        'spring-green': '#d4ff29',
        'warm-orange': '#f2721a',
        'gradient-peach': '#f36455',
      },
      fill: (theme) => theme('colors'),
      fontFamily: {
        newyork: ['NewYork'],
        fashion: ['Fashion Fetish'],
      },
      backgroundImage: {
        'me-madeira': "url('/src/assets/images/madeira.jpg')",
        sunset: "url('/src/assets/images/sunset.png')",
      },
    },
  },
};
