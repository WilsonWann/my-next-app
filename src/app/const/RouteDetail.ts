import { RouteDetail } from "@/types";
import { handleScrollTo } from "@/utils/scrollTo/scrollTo.utils";

export const routes: RouteDetail[] = [
  { route: '/', mainName: 'about', altName: '關於陌聲', onClick: () => handleScrollTo('about') },
  { route: '/service', mainName: 'service', altName: '服務內容' },
  { route: '/portfolio', mainName: 'portfolio', altName: '作品集' },
  {
    index: true, mainName: 'video', altName: '影音分享',
    routes: [
      { route: '/news', mainName: 'news', altName: '最新消息' },
      { route: '/articles', mainName: 'articles', altName: '相關文章' },
      { route: '/cases', mainName: 'cases', altName: '最新消息' },
    ]
  },
  { route: '/contact', mainName: 'contact', altName: '聯絡我們' },
]