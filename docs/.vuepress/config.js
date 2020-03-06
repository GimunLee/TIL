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
    sidebar: [
      sidebar.getSidebarGroup('/goals-for/', '🎯Goals For', true),
      sidebar.getSidebarGroup('/book-object/', '📖Book: Object', true),
      sidebar.getSidebarGroup('/book-design-patterns/', '📖Book: Design Patterns', true),
      sidebar.getSidebarGroup('/etc/', '📚ETC', true)
    ],
    sidebarDepth: 0,
    nav: [
      { text: 'GitHub', link: 'https://github.com/GimunLee/TIL' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
