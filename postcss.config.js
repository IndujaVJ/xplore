module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-preset-env')({
      browsers: ['last 2 versions', '> 5%']
    }),
    require('postcss-nested')
  ]
}
