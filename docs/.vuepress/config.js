module.exports = {
  title: "CQB-UI", // 网站标题
  description: "高效的UI组件库", // 网站描述
  dest: "./build", // 指定 vuepress build 输出目录 注意配置顺序
  // base: "/CQB-UI/", // 基础路径
  // head:[], // 额外注入当前页面的html head 标签
  head: [
    ['link', { rel: 'icon', src: '/icon.png' }]
  ],
  // host:"",  // 指定ip
  port: "9099", // 指定端口
  // temp:"", // 指定客户端文件的临时路径
  // locales:"", // 多语言配置
  // shouldPrefetch:()=>{}, // 用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的
  home: true,
  themeConfig: {
    // logo: './assets/logo.jpg',
    displayAllHeaders: true,
    activeHeaderLinks: false,
    collapsable: true,
    sidebar: 'auto',
    lastUpdated: 'Last Updated', // string | boolean
    // 导航
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: "GitHub",
        link: 'https://github.com/Mrxiaotaotao/CQB-UI'
      }
    ],
    sidebar: [
      {
        title: "基础组件",
        sidebarDepth: 1,
        sidebar: 'auto',
        collapsable: false, // 让一个组永远都是展开状态
        children: [
          {
            title: "Button组件",
            path: "/foo/1"
          }
        ]
      }
    ]
  }
}