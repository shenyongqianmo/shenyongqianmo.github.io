import { defineUserConfig } from "vuepress"
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: "zh-CN",
    title: "Hello, VuePress!",
    description: "This is my first VuePress site!",
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: "Qianmo's Blog",
                children: [
                    {
                        text: 'Github',
                        link: 'https://github.com/shenyongqianmo',
                    },
                    {
                        text: 'CSDN',
                        link: 'https://blog.csdn.net/qq_52000150',
                    }
                ]
            },
        ],
    }),
    // 部署到Github Pages
    base: '/',
    
})
