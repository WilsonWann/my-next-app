import { Description } from "@radix-ui/react-dialog";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const PORTFOLIO_CASES = [
  {
    name: "rings",
    imageUrl: '/portfolio/rings/wedding-vows-and-wedding-rings.jpg',
    title: "VOWS | RINGS",
    description: "鑽戒, 婚禮, RINGS"
  },
  {
    name: "necklace",
    imageUrl: '/portfolio/necklace/wedding-vows-and-wedding-rings.jpg',
    title: "GOLD CHAIN | NECKLACE",
    description: "鑽戒, 婚禮, RINGS"
  },
  {
    name: "jewelry",
    imageUrl: '/portfolio/jewelry/gemstones-and-tools-flatlay.jpg',
    title: "GEMSTONES | JEWELRY",
    description: "珠寶, 玉石, JEWELRY"
  },
  {
    name: "bracelet",
    imageUrl: '/portfolio/bracelet/womens-hand-moon-bracelet.jpg',
    title: "LEISURE | BRACELET",
    description: "手環, 個性, BRACELET"
  },
  {
    name: "earrings",
    imageUrl: '/portfolio/earrings/blue-and-pink-background-with-earrings-in-a-line.jpg',
    title: "MODERN | EARRINGS",
    description: "耳環, 場合, EARRINGS"
  },
  {
    name: "watch",
    imageUrl: '/portfolio/watch/modern-jewelry-and-accessories-on-display.jpg',
    title: "VOWS | WATCH",
    description: "手錶, 形象, WATCH"
  },
]