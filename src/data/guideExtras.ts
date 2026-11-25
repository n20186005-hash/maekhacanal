import type { GuideLang, GuideSlug } from './seoGuides';

type Extra = {
  managementTitle: string; management: string[];
  headings: { highlights: string; history: string; route: string; photos: string; transport: string; amenities: string; nearby: string; reviews: string };
  highlights: string[]; history: string[]; route: string[]; photoTips: string[]; transport: string[];
  amenities: string[]; reviews: string;
};

const common = {
  th: {
    managementTitle: 'เกี่ยวกับการดูแลและฟื้นฟูคลองแม่ข่า',
    management: [
      'เทศบาลนครเชียงใหม่เป็นหน่วยงานหลักที่ขับเคลื่อนการปรับปรุงคุณภาพน้ำและภูมิทัศน์คลองแม่ข่า โดยร่วมมือกับหน่วยงานภาครัฐ กลุ่มชุมชน และภาคส่วนอื่น ๆ โครงการฟื้นฟูช่วยเปลี่ยนพื้นที่ริมคลองบางช่วงให้เป็นทางเดินและพื้นที่เศรษฐกิจชุมชน',
      'พื้นที่ริมคลองยังเป็นย่านที่มีคนอยู่อาศัย ร้านค้าแต่ละแห่งมีผู้ประกอบการและเวลาเปิดของตนเอง ควรเคารพชุมชนและปฏิบัติตามประกาศหน้างาน',
    ],
    headings: { highlights: 'สิ่งที่น่าสังเกต', history: 'เรื่องเล่าของคลองและชุมชน', route: 'เส้นทางแนะนำทีละขั้น', photos: 'มุมถ่ายภาพ', transport: 'วิธีเดินทาง', amenities: 'สิ่งอำนวยความสะดวกและข้อควรทราบ', nearby: 'สถานที่ใกล้เคียง', reviews: 'ประสบการณ์การเที่ยวและความคิดเห็น' },
    highlights: ['สะพานคนเดินข้ามคลองและแนวราวทางเดินเป็นจุดดูโครงสร้างพื้นที่ใหม่', 'บ้านเรือนและร้านค้าตามแนวคลองสะท้อนความสัมพันธ์ระหว่างชุมชนกับทางน้ำ', 'แสงยามเย็นและเงาสะท้อนเผยให้เห็นผิวน้ำที่เปลี่ยนไปตามสภาพอากาศ'],
    history: ['คลองแม่ข่าเป็นส่วนหนึ่งของเครือข่ายน้ำของเมืองเชียงใหม่มาอย่างยาวนาน ในอดีตทำหน้าที่เกี่ยวข้องกับการระบายน้ำและพื้นที่รอบเขตเมือง', 'เมื่อเมืองขยายตัว ปัญหาน้ำเสียและสภาพพื้นที่ริมคลองทำให้เกิดโครงการฟื้นฟูด้านน้ำ ภูมิทัศน์ และการมีส่วนร่วมของชุมชน ทางเดินท่องเที่ยวที่เห็นเป็นเพียงส่วนหนึ่งของคลองทั้งหมด'],
    route: ['1. เปิดหมุดคลองแม่ข่าและเริ่มที่ทางเข้าทางเดินช่วงปรับปรุงใกล้ถนนศรีดอนไชย', '2. สังเกตทางเดิน สะพาน และบ้านริมคลอง เดินช้า ๆ โดยไม่กีดขวางคนในพื้นที่', '3. แวะดูร้านค้าหรือซื้อเครื่องดื่มตามต้องการ และลองถ่ายภาพสะท้อนน้ำจากจุดที่ปลอดภัย', '4. เดินกลับทางเดิมหรือไปยังจุดรับรถที่ถนนหลัก ตรวจสภาพถนนก่อนออกเดินทาง'],
    photoTips: ['ช่วงก่อนพระอาทิตย์ตกเหมาะกับภาพอาคารและคลองในแสงอุ่น', 'ช่วงฟ้าสีน้ำเงินหลังตะวันตกเหมาะกับสะพานและแสงไฟร้านค้า', 'หลีกเลี่ยงการยืนริมขอบคลองหรือกีดขวางสะพานเพื่อถ่ายรูป'],
    transport: ['จากเมืองเก่าให้เปิดเส้นทางเดินหรือเรียกรถจากตำแหน่งจริง โดยระบุปลายทางเป็นคลองแม่ข่าช่วงทางเดินที่ปรับปรุงแล้ว', 'รถแดง แท็กซี่ หรือรถผ่านแอปสามารถช่วยลดการเดินกลางแดดได้ ที่จอดรถและจุดลงรถขึ้นอยู่กับสภาพการจราจร'],
    amenities: ['ทางเดินสาธารณะไม่เก็บค่าเข้าชม แต่ค่าอาหารและสินค้าคิดแยก', 'ร้านอาหารและห้องน้ำไม่ได้มีตารางหรือจุดให้บริการที่เหมือนกันทุกวัน', 'ทางเดินบางจุดแคบ มีพื้นต่างระดับและขอบคลอง ควรดูแลเด็กและระวังหลังฝน'],
    reviews: 'ผู้มาเยือนมักสนใจภาพสะท้อน สะพานเล็ก และบรรยากาศร้านค้าตอนเย็น ประสบการณ์จริงขึ้นกับเวลาและสภาพอากาศ โปรดดูจำนวนรีวิวและวันที่ล่าสุดจากรายการ Google Maps โดยตรง',
  },
  en: {
    managementTitle: 'Who looks after Mae Kha Canal?',
    management: [
      'Chiang Mai Municipality has led improvements to the canal’s water quality and public landscape in cooperation with government partners, local communities and other groups. The rehabilitation has turned selected banks into more welcoming public walkways and spaces for small-scale community trade.',
      'The canal remains a lived-in neighbourhood. Individual shops run their own businesses and set their own schedules; the restoration programme does not imply that the municipality operates every stall. Respect residents and follow posted local guidance.',
    ],
    headings: { highlights: 'What to notice', history: 'History and the restored streetscape', route: 'Step-by-step walking route', photos: 'Photography spots', transport: 'Getting around', amenities: 'Facilities and practical notes', nearby: 'Nearby places to explore', reviews: 'Visitor impressions' },
    highlights: ['Small pedestrian bridges and walkway rails show how public access has been reshaped', 'Houses and independent shops reveal how the waterway meets everyday neighbourhood life', 'Evening reflections make the water and buildings look different as the light changes'],
    history: ['Mae Kha has long formed part of Chiang Mai’s urban water network, helping to drain and shape areas around the historic city.', 'Urban growth, pollution and neglected banks prompted water-quality and landscape rehabilitation involving public bodies and local communities. The tourist promenade represents just one restored part of a much longer canal.'],
    route: ['1. Navigate to the restored walkway near Sri Don Chai Road using the attraction pin.', '2. Pause at a small bridge to observe the canal edge, housing and pedestrian spaces without blocking circulation.', '3. Browse a local stall if it is operating and photograph reflections from a safe place on the path.', '4. Retrace your steps or arrange pickup on an accessible main road; check current walking conditions.'],
    photoTips: ['Warm light before sunset brings out building textures and plants', 'Blue hour can frame bridges and shop lights against the darkening sky', 'Avoid leaning over the water or occupying narrow crossings for a photograph'],
    transport: ['From Chiang Mai Old City, choose directions from your actual starting point to the restored Mae Kha Canal visitor area.', 'Songthaews, taxis and ride-hailing can reduce exposure to heat. Parking and drop-off convenience vary with local traffic.'],
    amenities: ['The public walking space has no general admission charge; purchases are optional', 'Food stalls, bathrooms and seating may vary by section and time of day', 'Narrow bridges, changes in level and wet paving call for care, especially with children'],
    reviews: 'Visitors often come for the small bridges, canalside houses and evening reflections. Your experience will depend on weather, crowds and which stalls are operating. Check the current rating, review count and dates directly on Google Maps.',
  },
  zh: {
    managementTitle: '关于湄卡运河的管理与整治',
    management: [
      '清迈市政府是湄卡运河水质及沿岸景观改善的重要推动单位，项目由政府相关部门、社区组织与其他参与方协作开展。部分河岸由此改善为公共步道和社区小型商业空间。',
      '运河周边依然是居民生活区。不同商铺由各自经营者安排营业，并非由市政府统一运营。参观时请尊重社区秩序及现场管理指引。',
    ],
    headings: { highlights: '沿途观察重点', history: '历史与街区更新', route: '编号步行路线', photos: '建议拍摄机位', transport: '交通方式', amenities: '设施与游览须知', nearby: '附近值得顺游的地点', reviews: '游客体验与评价' },
    highlights: ['横跨水道的小桥和步道栏杆展现了河岸公共空间的改造方式', '沿河住宅与独立小店体现了运河与居民日常生活的联系', '夕阳与夜间倒影会随水质、天气和灯光发生变化'],
    history: ['湄卡运河长期是清迈城市水系的一部分，与历史城区周边的排水和聚落发展有关。', '随着城市扩张，水污染及河岸环境问题促使政府和社区共同参与水质、景观与步行空间改善。游客所见的河岸步道只是较长运河中的部分整治区段。'],
    route: ['1. 使用景点地图定位，在 Sri Don Chai Road 附近的整治步道入口开始。', '2. 从小桥观察河道、住宅和行人空间，留出通行位置。', '3. 如店铺营业，可停留购物或喝饮料，再选择安全的位置拍摄水面倒影。', '4. 沿原路返回或前往主干道叫车，出发前核实道路状况。'],
    photoTips: ['日落前的暖光适合拍植物、河岸建筑与水面', '蓝调时刻可用小桥与店铺灯光形成前后景层次', '不要为了取景靠近无防护水边或堵塞狭窄通道'],
    transport: ['从清迈古城出发，请用自己的实际位置导航到整治后的游客步道，而非运河全线任意一点。', '双条车、出租车与网约车可减轻炎热天气下的步行负担；停车与下车位置随道路情况变化。'],
    amenities: ['公共步道不收取统一门票，购物餐饮自由消费', '摊位、厕所和休憩位置不保证全天或每日一致', '小桥、台阶及雨后湿滑地面需要注意，儿童应由成人陪同'],
    reviews: '游客常关注小桥、河岸住宅、傍晚氛围和夜景倒影。体验会随天气、人流和营业商铺而变化；最新评分、评论数量与日期请以 Google 地图景点页为准。',
  },
};

export const guideExtras: Record<GuideLang, Record<GuideSlug, Extra>> = Object.fromEntries(
  (['th', 'en', 'zh'] as GuideLang[]).map((lang) => [lang, Object.fromEntries(
    (['opening-hours', 'getting-there', 'evening-walk'] as GuideSlug[]).map((slug) => [slug, common[lang]])
  )])
) as Record<GuideLang, Record<GuideSlug, Extra>>;

export const nearbyPlaces = [
  { id: 'chiang-mai-gate', name: { th: 'ประตูเชียงใหม่', en: 'Chiang Mai Gate', zh: '清迈门' }, place: 'Chiang Mai Gate Chiang Mai Thailand', note: { th: 'ประตูเมืองทางใต้และจุดเริ่มสำรวจย่านเก่า', en: 'Southern Old City gate and a useful orientation point', zh: '古城南门，也是探索旧城区的起点' } },
  { id: 'wat-sri-suphan', name: { th: 'วัดศรีสุพรรณ', en: 'Wat Sri Suphan (Silver Temple)', zh: '素攀寺（银庙）' }, place: 'Wat Sri Suphan Chiang Mai Thailand', note: { th: 'ศิลปะเครื่องเงินและงานช่างย่านวัวลาย', en: 'Silverwork temple in the traditional Wua Lai craft district', zh: '以银饰工艺及金属装饰著称的寺庙' } },
  { id: 'wua-lai', name: { th: 'ถนนคนเดินวัวลาย', en: 'Wua Lai Saturday Walking Street', zh: '瓦莱周六步行街' }, place: 'Wua Lai Saturday Walking Street Chiang Mai Thailand', note: { th: 'ตลาดคนเดินวันเสาร์ มีของทำมือและอาหาร', en: 'Saturday market with handicrafts and local snacks', zh: '周六限定市集，可逛手工艺摊与小吃' } },
  { id: 'tha-phae', name: { th: 'ประตูท่าแพ', en: 'Tha Phae Gate', zh: '塔佩门' }, place: 'Tha Phae Gate Chiang Mai Thailand', note: { th: 'จุดสำคัญทางตะวันออกของเมืองเก่า', en: 'Well-known eastern entrance to the historic Old City', zh: '清迈古城东侧的地标性城门' } },
  { id: 'night-bazaar', name: { th: 'เชียงใหม่ไนท์บาซาร์', en: 'Chiang Mai Night Bazaar', zh: '清迈夜市' }, place: 'Chiang Mai Night Bazaar Chang Khlan Road Thailand', note: { th: 'ร้านค้าและอาหารยามเย็นบนถนนช้างคลาน', en: 'Evening shopping and food along Chang Khlan Road', zh: '长康路沿线的夜间购物与餐饮街区' } },
  { id: 'warorot-market', name: { th: 'ตลาดวโรรส', en: 'Warorot Market', zh: '瓦洛洛市场' }, place: 'Warorot Market Chiang Mai Thailand', note: { th: 'กาดหลวง ตลาดอาหารเหนือและของฝาก', en: 'Traditional Kad Luang market for northern food and gifts', zh: '可体验泰北食品与伴手礼的传统市场' } },
  { id: 'wat-chedi-luang', name: { th: 'วัดเจดีย์หลวง', en: 'Wat Chedi Luang', zh: '契迪龙寺' }, place: 'Wat Chedi Luang Chiang Mai Thailand', note: { th: 'เจดีย์อิฐเก่าแก่กลางเมืองเก่า', en: 'Monumental historic brick chedi in the Old City', zh: '清迈古城中心的历史砖砌佛塔' } },
  { id: 'wat-phra-singh', name: { th: 'วัดพระสิงห์', en: 'Wat Phra Singh', zh: '帕辛寺' }, place: 'Wat Phra Singh Chiang Mai Thailand', note: { th: 'ศิลปกรรมวัดล้านนาและเจดีย์ทอง', en: 'Lanna temple architecture and golden chedi', zh: '兰纳建筑艺术与金色佛塔' } },
  { id: 'wat-phan-tao', name: { th: 'วัดพันเตา', en: 'Wat Phan Tao', zh: '盼道寺' }, place: 'Wat Phan Tao Chiang Mai', note: { th: 'วิหารไม้สักใกล้วัดเจดีย์หลวง', en: 'Teakwood hall beside Wat Chedi Luang', zh: '契迪龙寺旁的柚木佛殿' } },
] as const;
