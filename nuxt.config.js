var conf = {
  build: {
    vendor: ['element-ui']
  },
  css: [
    '@/assets/common.sass',
    'element-ui/lib/theme-chalk/index.css'
  ],
  head: {
    titleTemplate: 'Podcast Freaks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '日本語のテック系ポッドキャストの更新情報をまとめています' }
    ],
    link: [
      { type: 'text/css', rel: 'stylesheet', href: '//cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.css' },
      { type: 'text/css', rel: 'stylesheet', href: '//fonts.googleapis.com/earlyaccess/notosansjp.css' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', {id: 'UA-117929880-2'}]
  ],
  plugins: [
    '~plugins/filters.js',
    '~plugins/element-ui'
  ],
  generate: {
    fallback: true
  }
}

module.exports = conf