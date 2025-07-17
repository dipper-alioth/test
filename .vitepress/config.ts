import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress-theme-async/config'

export default defineConfig({
  cleanUrls: true,
  // base: '/docs',
  outDir: './dist',
  //   vite: {
  //     css: {
  //       preprocessorOptions: {
  //         less: {},
  //       },
  //     },
  //   },
  markdown: {
    config(md) {
      md.use(taskLists)
    },
  },
  lang: 'zh-CN',
  titleTemplate: ':title | 星蘅',
  themeConfig: {
    postDir: 'docs',
    rewritePost: true,
    author: '星蘅',
    // 分页规则
    indexGenerator: {
      static: true,
    },
    // 归档分页
    archiveGenerator: {
      static: true,
    },
    // 全局组件
    globalComponents: true,
    topBars: [
      { title: '首页', url: '/' },
      { title: '归档', url: '/archives/' },
      { title: '分类', url: '/categories' },
      { title: '标签', url: '/tags' },
      { title: '友链', url: '/links' },
      { title: '关于', url: '/about' },
      { title: '相册', url: '/gallery/' },
    ],
    // 侧边栏
    sidebar: {
      typedTextPrefix: '欢迎来到',
      typedText: ['我的博客!'],
      info: [
        {
          key: '地址',
          val: '中国 · 甘肃',
        },
      ],
      social: [
        {
          name: 'vue',
          url: 'https://cn.vuejs.org/',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
        },
      ],
    },
    // 配置用户信息
    user: {
      name: '星蘅',
      firstName: '博客',
      lastName: '星蘅',
      email: 'aliothstar@aliyun.com',
      //   avatar: '',
      describe: '一个正在学习、正在生活、正在成长、正在改变的Web程序员',
      domain: 'https://docs.aliothstar.cn',
    },
    // 配置网站信息
    footer: {
      beian: {
        enable: true,
        icp: '陇ICP备2023000076号-2',
      },
      copyrightYear: '2025',
      liveTime: {
        enable: true,
        startTime: '2025/7/15',
      },
    },
    // 配置网站图标
    favicon: {
      //   logo: '/favicon.svg',
      //   icon16: '/favicon.svg',
      //   icon32: '/favicon.svg',
    },
    // 配置友链
    links: [
      {
        name: 'Vitepress',
        url: 'https://vitepress.dev',
        image: 'https://vitepress.dev/vitepress-logo-mini.svg',
        desc: 'VitePress is a Static Site Generator (SSG) designed for building fast, content-centric websites',
      },
      {
        name: '白云苍狗',
        url: 'https://www.imalun.com/',
        image: 'https://www.imalun.com/images/avatar.jpg',
        desc: '醒，亦在人间；梦，亦在人间',
      },
    ],
    // 打赏
    // reward: {
    //   enable: true,
    //   methods: [
    //     {
    //       name: '微信',
    //       //   path: '',
    //     },
    //     {
    //       name: '支付宝',
    //       //   path: '',
    //     },
    //     {
    //       name: 'QQ',
    //       //   path: 'https://www.imalun.com/images/reward/qq_pay.jpg',
    //     },
    //   ],
    // },
    // 固定按钮
    rightside: {
      readmode: true,
      aside: true,
    },
    outline: {
      level: [2, 6],
    },
    // 版权信息
    creativeCommons: {
      post: true,
      clipboard: true,
    },
    // 上下篇
    postPagination: {
      enable: true,
      type: 'large',
    },
    // 搜索
    search: {
      provider: 'local',
    },
    page: {
      archives: '/archives/',
      tags: '/tags',
      categorys: '/categories',
      index: '/',
    },
    // 过期提醒
    noticeOutdate: {
      enable: true,
      limitDay: 1,
      style: 'flat',
      position: 'top',
    },
    // 自定义样式
    themeColor: {
      enable: true,
      primary: ['#c33737', '#d77093'],
      primaryWeak: ['#ca5a33', '#c0ca00'],
    },
    // 关于页面
    about: {
      title: '如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。',
      introduction:
        '大家好，我是 <strong>星蘅</strong>，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。',
      blog: `<ul class="trm-list"> <li>程序：Vitepress </li> <li>主题：vitepress-theme-async </li> </ul>`,
      privacy:
        '本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。',
    },
  },
})
