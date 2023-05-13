export default [
    {
        text: '🥪API',
        children: [
            {
                text: "公司信息接口",
                children: [
                    {
                        text: '没想好',
                        link: '/API/1.md'
                    },
                    '/API/2.md']
            },
            {
                text: "用户接口",
                children: [
                    {
                        text: '普通用户',
                        link: '/api/u1.md'
                    },
                    {
                        text: '管理员',
                        link: '/api/u2.md'
                    },

                ]
            },
            {
                text: "其他",
                children: [
                    {
                        text: "状态码",
                        link: "/api/code.md"
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
            { text: '创建数据库', link: '/Script/SQL.md' }
            { text: '财务信息', link: '/Script/categoryid_categoryname.md' }
        ]
    }
]