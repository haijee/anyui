
const { defaultTheme } = require('vuepress')

module.exports = {
  title: 'anyui',
  description: 'anyui的博客',
  base: '/anyui/', //配合项目部署路径
  plugins: ['demo-container'], // 配置插件
  markdown: {},
  theme: defaultTheme({
    home: '/',
    // Public 文件路径
    logo: '/images/hero.png',
    darkMode: true,
    repo: 'https://github.com/any-script/anyui',
    repoLabel:'仓库',
    docsRepo: "https://github.com/haijee/anyui",
    notFound:['Not Found'],
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/docs',
      },
      {
        text: '关于',
        link: '/about',
      },

    ],

  }),
}