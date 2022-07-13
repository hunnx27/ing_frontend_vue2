const { defineConfig } = require('@vue/cli-service')
const BACKEND_URI = process.env.VUE_APP_BACKEND_URI === null ? '' : `${process.env.VUE_APP_BACKEND_URI}`

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy : BACKEND_URI || ''
  },
})
