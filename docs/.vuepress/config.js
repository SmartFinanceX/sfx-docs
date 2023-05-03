import { defaultTheme } from 'vuepress'
import mynavbar from './navbar.js'
export default {
    title: 'SmartFinanceX', // 设置网站标题
    description: '智能金融！主打的就是一个智能',
    base: '/', //默认路径
    port: '8114',
    head: [
        // 设置 favor.ico，.vuepress/public 下
        [
            'link', { rel: 'icon', href: 'logo.png' }
        ]
    ],
    theme: defaultTheme({
        // 默认主题配置
        navbar: mynavbar,
        home: '/',
        logo: '/logo_big.png',
        lastUpdated: true,
        notFound: ["404了，联系AntiOxidant让他去改吧"],
        backToHome: ["返回首页"],
        repo: 'https://github.com/SmartFinanceX',
        editLink: false,
        colorModeSwitch: false
    }),
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
}
