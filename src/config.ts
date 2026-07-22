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

  // 实时天气/日落 API 坐标
  // 通过环境变量动态获取，支持 pSEO 批量部署不同景点
  coords: {
    lat: Number(import.meta.env.PUBLIC_LAT) || 18.8655, // 默认回退为 Mae Kampong (18.8655)
    lng: Number(import.meta.env.PUBLIC_LNG) || 99.3512, // 默认回退为 Mae Kampong (99.3512)
  },

  // Google Maps 跳转链接
  mapsUrl: import.meta.env.PUBLIC_MAPS_URL || '',

  // Google Maps 嵌入
  googleMapsEmbed: import.meta.env.PUBLIC_MAPS_EMBED || '',

  // 地址与 Plus Code（已剔除无关的湄卡运河信息，避免 SEO 数据污染）
  address: import.meta.env.PUBLIC_ADDRESS || '',
  plusCode: import.meta.env.PUBLIC_PLUS_CODE || '',

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
