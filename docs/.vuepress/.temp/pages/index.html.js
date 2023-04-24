export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"首页\",\"description\":\"首页\"},\"headers\":[{\"level\":2,\"title\":\"Hello VuePress\",\"slug\":\"hello-vuepress\",\"link\":\"#hello-vuepress\",\"children\":[]},{\"level\":2,\"title\":\"TestContents\",\"slug\":\"testcontents\",\"link\":\"#testcontents\",\"children\":[]},{\"level\":2,\"title\":\"This is a second title\",\"slug\":\"this-is-a-second-title\",\"link\":\"#this-is-a-second-title\",\"children\":[{\"level\":3,\"title\":\"代码块\",\"slug\":\"代码块\",\"link\":\"#代码块\",\"children\":[]},{\"level\":3,\"title\":\"v-pre\",\"slug\":\"v-pre\",\"link\":\"#v-pre\",\"children\":[]},{\"level\":3,\"title\":\"markdown中使用组件\",\"slug\":\"markdown中使用组件\",\"link\":\"#markdown中使用组件\",\"children\":[]},{\"level\":3,\"title\":\"静态资源\",\"slug\":\"静态资源\",\"link\":\"#静态资源\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
