  const sidebar = require('./auto-sidebar-generator');

module.exports = {
  title: 'Today Gimun Learned',
  description: 'Personal Wiki (Today I Learned)',
  email: 'gimoon0226@naver.com',
  base: "/TIL/",
  head: [
    ['link', { rel: 'icon', href: `/images/logo-144.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  themeConfig: {
   nav: [
      { text: 'GitHub', link: 'https://github.com/GimunLee/TIL' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
