export const siteConfig = {
  name: {
    th: 'คลองแม่ข่า',
    en: 'Mae Kha Canal',
    zh: '湄卡运河',
  },

  shortName: {
    th: 'แม่ข่า',
    en: 'Mae Kha',
    zh: '湄卡',
  },

  domain: 'https://maekhacanal.com',

  attractionFullName: {
    th: 'คลองแม่ข่า (Mae Kha Canal)',
    en: 'Mae Kha Canal',
    zh: '湄卡运河（Mae Kha Canal / คลองแม่ข่า）',
  },

  cityName: {
    th: 'เชียงใหม่',
    en: 'Chiang Mai',
    zh: '清迈',
  },

  stateProvince: {
    th: 'เชียงใหม่',
    en: 'Chiang Mai',
    zh: '清迈府',
  },

  countryName: {
    th: 'ประเทศไทย',
    en: 'Thailand',
    zh: '泰国',
  },

  countryCode: 'TH',

  postalCode: '50100',

  description: {
    th: 'คลองแม่ข่า เส้นทางคลองประวัติศาสตร์ของเชียงใหม่ พื้นที่เดินเล่น ตลาดเย็น และล่องเรือริมน้ำ',
    en: 'Mae Kha Canal — Chiang Mai’s historic canal reborn as an evening walking street, boat rides, and riverside food.',
    zh: '湄卡运河——清迈历史悠久的水道，如今是傍晚漫步、游船与河畔美食的胜地。',
  },

  phone: '+66937908058',
  phoneDisplay: '+66 93 790 8058',

  rating: 4.2,
  reviewCount: '6,371',

  coords: {
    lat: Number(import.meta.env.PUBLIC_LAT) || 18.7771,
    lng: Number(import.meta.env.PUBLIC_LNG) || 98.9836,
  },

  alternateNames: {
    en: ['Khlong Mae Kha', 'Mae Kha', 'Chiang Mai Canal', 'Khlong Mae Kha Canal Village'],
    zh: ['美卡运河', '母卡河', '清迈小樽运河', '卡运河'],
    th: ['แม่ข่า', 'คลองแม่ข่าเชียงใหม่', 'คลองแม่ข่า ตัวเมือง'],
  },

  mapsUrl: import.meta.env.PUBLIC_MAPS_URL || 'https://maps.app.goo.gl/mjLfRYB7xBtk5quR9',

  googleMapsEmbed: import.meta.env.PUBLIC_MAPS_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.8244844694084!2d98.98358!3d18.7771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ2JzM3LjYiTiA5OMKwNTgnNTQuOSJF!5e0!3m2!1sen!2sus!4v1',

  address: import.meta.env.PUBLIC_ADDRESS || '118 Ragang Rd, Haiya Sub-district, Mueang Chiang Mai District, Chiang Mai 50100, Thailand',

  addressStreet: '118 Ragang Rd',
  addressLocality: 'Haiya Sub-district, Mueang Chiang Mai District',
  addressRegion: 'Chiang Mai',

  plusCode: import.meta.env.PUBLIC_PLUS_CODE || 'QXGW+R6 Chiang Mai, Mueang Chiang Mai District, Chiang Mai, Thailand',

  nearbyLandmark1: {
    th: 'เมืองเก่าเชียงใหม่',
    en: 'Chiang Mai Old City',
    zh: '清迈古城',
  },
  nearbyLandmark2: {
    th: 'ตลาดวโรรส',
    en: 'Warorot Market',
    zh: '嘎鲁昂市场（Warorot Market）',
  },

  govtTourismUrl: 'https://www.tourismthailand.org',

  galleryPrefix: 'mae-kha-canal-',

  heroImage: '/gallery/mae-kha-canal-13.jpg',
  ogImage: '/gallery/mae-kha-canal-1.jpg',

  sameAs: [
    'https://maps.app.goo.gl/mjLfRYB7xBtk5quR9',
    'https://maekhacanal.com',
    'https://www.tourismthailand.org',
  ],

  sources: [
    {
      name: {
        th: 'การท่องเที่ยวแห่งประเทศไทย (ททท.)',
        en: 'Tourism Authority of Thailand (TAT)',
        zh: '泰国国家旅游局（TAT）',
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

  reviewsSyncDate: {
    th: 'พฤศจิกายน 2026',
    en: 'November 2026',
    zh: '2026 年 11 月',
  },
};

export type SiteConfig = typeof siteConfig;
