export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo_color.png\",\"heroText\":\"上市公司财务分析系统🦄\",\"tagline\":null,\"actions\":[{\"text\":\"快速上手\",\"link\":\"/API\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"摸鱼🐟\",\"details\":\"主打的就是一个摸\"},{\"title\":\"未完工☣️\",\"details\":\"什么都还没做\"},{\"title\":\"技术低下😼\",\"details\":\"撒也不懂！\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
