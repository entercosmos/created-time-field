module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CreatedTimeField',
      externals: {
        react: 'React'
      }
    }
  }
}
