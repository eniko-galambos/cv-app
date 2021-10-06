module.exports = {
  theme: {
    extend: {
      colors: {
        'vivid-red': '#f23424',
        'dark-night': '#14142d',
        'gray-sand': '#e7ddd5',
        'spring-green': '#b7dd32',
        'warm-orange': '#f2721a',
      },
      fill: (theme) => theme('colors'),
      fontFamily: {
        roboto: ['Roboto'],
        janetta: ['Janetta Silloam'],
      },
    },
  },
};
