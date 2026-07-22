// 全局站点配置（Mae Kha Canal / คลองแม่ข่า）
export const siteConfig = {
  // 景点名称（多语言）
  name: {
    th: 'คลองแม่ข่า',
    en: 'Mae Kha Canal',
    zh: '湄卡运河',
  },

  // 站点域名（用于 Canonical / sitemap / JSON-LD）
  domain: 'https://maekhacanal.com',

  // 简短描述（备用；页面实际描述来自 i18n meta）
  description: {
    th: 'คลองแม่ข่า เส้นทางคลองประวัติศาสตร์ของเชียงใหม่ พื้นที่เดินเล่น ตลาดเย็น และล่องเรือริมน้ำ',
    en: 'Mae Kha Canal — Chiang Mai’s historic canal reborn as an evening walking street, boat rides, and riverside food.',
    zh: '湄卡运河——清迈历史悠久的水道，如今是傍晚漫步、游船与河畔美食的胜地。',
  },

  // 联系电话（Google 商家资料）
  phone: '+66937908058',
  phoneDisplay: '+66 93 790 8058',

  // 评分与评论数（Google 商家资料）
  rating: 4.2,
  reviewCount: '6,094',

  // 实时天气/日落 API 坐标（景点真实位置：湄卡运河，Haiya，清迈）
  // 来源：Google Maps 嵌入定位 18.7771°N, 98.3858°E
  coords: {
    lat: 18.7771,
    lng: 98.3858,
  },

  // Google Maps 跳转链接（首屏 / 照片 / 评价 / 页脚 共 4 处可见锚点均指向此处）
  mapsUrl: 'https://maps.app.goo.gl/mjLfRYB7xBtk5quR9',

  // Google Maps 嵌入（地图区右侧缩略图）。语言由 MapSection 按站点语言动态替换。
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483516.53501180286!2d98.38582688906251!3d18.777065699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bb458d9dc27%3A0x2989451c5630692f!2sMae%20Kha%20Canal!5e0!3m2!1szh-CN!2sus!4v1784700761929!5m2!1szh-CN!2sus',

  // 地址与 Plus Code
  address: '118 Ragang Rd, Haiya, Mueang Chiang Mai District, Chiang Mai 50100, Thailand',
  plusCode: 'QXGW+R6',

  // 画廊图片前缀（配合 public/gallery/mae-kha-canal-1..N.jpg 使用）
  galleryPrefix: 'mae-kha-canal-',

  // JSON-LD sameAs
  sameAs: [
    'https://maps.app.goo.gl/mjLfRYB7xBtk5quR9',
    'https://maekhacanal.com',
  ],

  // 页脚引用来源
  sources: [
    {
      name: {
        th: 'การท่องเที่ยวแห่งประเทศไทย (ททท.)',
        en: 'Tourism Authority of Thailand',
        zh: '泰国国家旅游局',
      },
      url: 'https://www.tourismthailand.org',
    },
    {
      name: {
        th: 'เทศบาลนครเชียงใหม่',
        en: 'Chiang Mai Municipality',
        zh: '清迈市政府',
      },
      url: 'https://www.chiangmai.go.th',
    },
    {
      name: {
        th: 'Google Maps (คลองแม่ข่า)',
        en: 'Google Maps listing',
        zh: 'Google 地图商家页',
      },
      url: 'https://maps.app.goo.gl/mjLfRYB7xBtk5quR9',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
