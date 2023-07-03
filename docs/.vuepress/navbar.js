export default [
    {
        text: '🥪API',
        children: [
            {
                text: "公司信息接口",
                children: [
                    {
                        text: '基础信息接口',
                        link: '/API/1.md'
                    },
                    {
                        text: '财务数据分析',
                        link: '/API/2.md'
                    }
                ]
            },
            {
                text: "用户接口",
                children: [
                    {
                        text: '普通用户',
                        link: '/API/u1.md'
                    },
                    {
                        text: '管理员',
                        link: '/API/u2.md'
                    },

                ]
            },
            {
                text: "其他",
                children: [
                    {
                        text: "状态码",
                        link: "/API/code.md"
                    },
                ]
            }
        ]
    },
    {
        text: '🥎简介',
        link: '/Guide'
    },
    {
        text: '📕开发笔记',
        children: [
            { text: '创建数据库', link: '/script/info.md' },
            { text: '财务信息', link: '/script/categoryid_categoryname.md' },
            '/script/auth.md',
            {
                text: "周报",
                children: [
                    {
                        text: '十三周周报',
                        link: '/report/week13.md',
                    },
                    {
                        text: '十四周周报',
                        link: '/report/week14.md',
                    },
                    {
                        text: '十五周周报',
                        link: '/report/week15.md',
                    },
                    '/report/week16.md',

                ]
            }
        ]
    }
]