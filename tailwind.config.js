module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/**/*.{html,md}',
    '!./_site/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    fontFamily: {
      serif: ['Font Name', 'serif'],
      sans: ['Font Name', 'sans-serif'],
      body:  ['Font Name', 'sans-serif'],
    },
    safelist: [
      {
         pattern: /grid-cols-.*/,
         variants: ['lg, md, sm'],
      },
      { pattern: /col-span-.*/,
        variants: ['lg, md, sm'],
       },
     { pattern: /columns-.*/,
     variants: ['lg, md, sm'],
       },
      ],
    extend: {
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',  
        'square': '1/1',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
        '20': '20vh',
      },
      height:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
        '20': '20vh',
      },  
    },
  },
  plugins: [],
}
