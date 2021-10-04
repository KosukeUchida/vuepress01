module.exports = {
    title: 'GitHub Pages product by VuePress',
    description: 'VuePress やっていき',
    dest: 'docs/',
    base: '/vuepress01/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' }
        ],
        sidebar: 'auto',
        sidebarDepth: 1,
    },
  }