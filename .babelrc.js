module.export = {
  presets: ['@babel/preset-env'],
  plugins: [['babel-plugin-styled-components', { pure: true }]],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            pure: true,
            displayName: process.env.NODE_ENV === 'development',
          },
        ],
      ],
    },
  },
}
