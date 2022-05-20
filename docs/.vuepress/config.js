
const { defaultTheme } = require('vuepress')


module.exports = {
    lang: 'zh-CN',
    title: 'anyui', 
    description: 'anyui的博客',
    base:'/anyui/', //配合项目部署路径
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
          {
            text: '首页',
            link: '/',
            
          },
        ],
        
        sidebar: {

        }
          // SidebarItem

      

      }),
}