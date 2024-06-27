import stackedBracelets from "@/assets/stacked-bracelets.jpg";
import weddingVowsAndRings from "@/assets/wedding-vows-and-wedding-rings.jpg";
import weddingVowsAndRingsVertical from "@/assets/wedding-rings-with-wedding-vows.jpg";
import holdingHands from "@/assets/holding-hands.jpg";

import womansNecklace from "@/assets/womans-necklace.jpg";
import detailedSnowflake from "@/assets/detailed-snowflake.jpg";

import moonBracelet from "@/assets/womens-hand-moon-bracelet.jpg";
import goldChainNecklace from "@/assets/gold-chain-necklace-on-corner.jpg";
import youngProfessional from "@/assets/young-professional.jpg";
import galaxyEarrings from "@/assets/galaxy-earrings.jpg";

import modernWatch from "@/assets/modern-jewelry-and-accessories-on-display.jpg";

import makeupAndJewelry from "@/assets/makeup-and-jewelry.jpg";
import gemStonesAndToolsFlatlay from "@/assets/gemstones-and-tools-flatlay.jpg";
import earringsInALine from "@/assets/blue-and-pink-background-with-earrings-in-a-line.jpg";

import businessWomenWorking from "@/assets/business-women-working.jpg"
import personWorkingOnFashionDesignOnATablet from "@/assets/person-working-on-fashion-design-on-a-tablet.jpg"
import gemstonesAndToolsFlatlay from "@/assets/gemstones-and-tools-flatlay.jpg"
import officeTeamBusinessMeeting from "@/assets/office-team-business-meeting.jpg"
import jewelersWorkDesk from "@/assets/jewelers-work-desk.jpg"
import preparingToFinishARing from "@/assets/preparing-to-finish-a-ring.jpg"
import goldRingWithWiteDiamondsAndALargeStone from "@/assets/gold-ring-with-white-diamonds-and-a-large-stone.jpg"
import professionalSmilingWoman from "@/assets/professional-smiling-woman.jpg"

import { StaticImageData } from "next/image";

const bannerList = [stackedBracelets, weddingVowsAndRings, holdingHands];
const aboutImages = [detailedSnowflake, womansNecklace];
const photosImages = [moonBracelet, goldChainNecklace, youngProfessional, galaxyEarrings];
const mainBannerImage = modernWatch;

const serviceBannerImage = makeupAndJewelry
const serviceContentImages = [
  {
    image: businessWomenWorking,
    title: '初步諮詢',
    content: `了解客戶的需求與喜好
解說設計流程及細節
設計費、付款方式說明`
  },
  {
    image: personWorkingOnFashionDesignOnATablet,
    title: '設計概念',
    content: `根據客戶需求和風格進行設計草圖
提供設計概念與建議
確認設計方向`
  },
  {
    image: gemstonesAndToolsFlatlay,
    title: '選材搭配',
    content: `根據設計草圖選擇合適的寶石和金屬材料
提供不同材質的搭配建議
確認最終設計方案`
  },
  {
    image: officeTeamBusinessMeeting,
    title: '設計合約',
    content: `簽訂設計合約並收取設計費
繪製詳細設計圖紙
確認製作細節和時間表`
  },
  {
    image: jewelersWorkDesk,
    title: '工藝製作',
    content: `開始進行首飾製作
按照設計圖紙精雕細琢
定期向客戶報告進度`
  },
  {
    image: preparingToFinishARing,
    title: '品質檢驗',
    content: `完成製作後進行質量檢查
確保每件首飾符合高品質標準
進行最後的細節修正`
  },
  {
    image: goldRingWithWiteDiamondsAndALargeStone,
    title: '交付首飾',
    content: `與客戶一起檢查完成的首飾
確認滿意後進行交付
收取最終付款`
  },
  {
    image: professionalSmilingWoman,
    title: '售後服務',
    content: `提供完善的售後服務及保養建議
免費諮詢及維修服務
持續關注客戶的使用情況`
  },
];


export type PortfolioType = {
  image: StaticImageData
  children: {
    title: string
    description: string
  }
}

const portfolioImages: PortfolioType[] = [
  {
    image: weddingVowsAndRingsVertical,
    children: {
      title: 'Rings',
      description: 'Wedding'
    }
  },
  {
    image: goldChainNecklace,
    children: {
      title: 'Necklace',
      description: 'Public'
    }
  },
  {
    image: gemStonesAndToolsFlatlay,
    children: {
      title: 'Jewelry',
      description: 'Eternity'
    }
  },
  {
    image: moonBracelet,
    children: {
      title: 'Bracelet',
      description: 'Leisure'
    }
  },
  {
    image: earringsInALine,
    children: {
      title: 'Earrings',
      description: 'Banquet'
    }
  },
  {
    image: modernWatch,
    children: {
      title: 'Watch',
      description: 'Career'
    }
  },
]

export {
  bannerList,
  aboutImages,
  photosImages,
  mainBannerImage,
  serviceBannerImage,
  serviceContentImages,
  portfolioImages
}