import { defaultTheme } from 'vuepress'

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
        navbar: [
            {
                text: '🧩API',
                children: [{ text: '没想好', link: '/API/1.md' }, '/API/2.md']
            },
            {
                text: '🥎简介',
                link: '/Guide'
            },
            {
                text: '📕开发笔记',
                children: [{ text: '构建SQL', link: '/Script/SQL.md' }]
            }
        ],
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
