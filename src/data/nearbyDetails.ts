import { moreNearbyDetails } from './moreNearbyDetails';
export const nearbySlugs = ['chiang-mai-gate', 'wat-sri-suphan', 'wua-lai', 'tha-phae', 'night-bazaar', 'warorot-market', 'wat-chedi-luang', 'wat-phra-singh', 'wat-phan-tao', 'wat-chiang-man', 'wat-buppharam', 'wat-suan-dok', 'wat-chet-yot', 'wat-saen-fang', 'lanna-traditional-house-museum', 'chiang-mai-national-museum'] as const;
export type NearbySlug = typeof nearbySlugs[number];
export type NearbyLang = 'th' | 'en' | 'zh';

type Locale = {
  name: string; tagline: string; description: string; summary: string;
  managementTitle: string; management: string;
  history: string[]; features: string[]; experience: string[];
  route: string[]; photo: string[]; visit: string[]; transport: string[];
  faqs: { q: string; a: string }[];
};
type Place = {
  image: string; imageSource: string; mapQuery: string; address: string;
  fee: Record<NearbyLang,string>; hours: Record<NearbyLang,string>; duration: Record<NearbyLang,string>;
  source: string; locales: Record<NearbyLang,Locale>;
};
export const nearbyDetails: Record<NearbySlug, Place> = {
  'chiang-mai-gate': {
    image: '/nearby/chiang-mai-gate.jpg', imageSource: 'https://www.hopinnhotel.com/our-hotels/hop-inn-chiang-mai-airport',
    mapQuery: 'Chiang Mai Gate Pratu Chiang Mai Thailand', address: 'Chiang Mai Gate, Bumrung Buri Road, Haiya, Mueang Chiang Mai, Chiang Mai 50100, Thailand',
    fee: { th: 'ไม่มีค่าเข้าชมพื้นที่ประตูเมืองสาธารณะ', en: 'No ticket for the public gate area', zh: '公共城门区域无需门票' },
    hours: { th: 'พื้นที่ภายนอกเข้าถึงได้ทั่วไป; ร้านค้าเปิดต่างเวลากัน', en: 'Outdoor public area generally accessible; shop hours vary', zh: '户外公共区域通常可通行；商户时间各异' },
    duration: { th: '20–40 นาที', en: '20–40 minutes', zh: '20–40 分钟' },
    source: 'https://whc.unesco.org/en/tentativelists/6003',
    locales: {
      th: {
        name: 'ประตูเชียงใหม่', tagline: 'ประตูเมืองด้านใต้ของเขตเมืองเก่า', description: 'เที่ยวประตูเชียงใหม่ ประวัติ แนวกำแพงเมือง ตลาดใกล้เคียง แผนที่ และวิธีเดินทางจากคลองแม่ข่า',
        summary: 'ประตูเชียงใหม่เป็นจุดผ่านเข้าสู่เมืองเก่าทางด้านใต้ เชื่อมบริเวณคูเมืองกับย่านค้าขายและถนนวัวลาย เหมาะกับการแวะชมโครงสร้างกำแพงก่อนเดินสำรวจละแวกใกล้เคียง',
        managementTitle: 'เกี่ยวกับประตูเชียงใหม่และการดูแลพื้นที่', management: 'ประตูเชียงใหม่เป็นส่วนหนึ่งของภูมิทัศน์ประวัติศาสตร์และพื้นที่สาธารณะของเมืองเชียงใหม่ งานดูแลถนน ทางสาธารณะ และบริบทเมืองอยู่ภายใต้หน่วยงานท้องถิ่นที่เกี่ยวข้อง ส่วนร้านค้าและตลาดโดยรอบมีผู้ประกอบการแยกต่างหาก',
        history: ['ประตูแห่งนี้เดิมมีความเกี่ยวข้องกับเส้นทางจากเมืองเก่าลงสู่ชุมชนด้านใต้และเวียงกุมกาม ชื่อประตูเชียงใหม่ปรากฏในประวัติศาสตร์การเปลี่ยนชื่อประตูด้านตะวันออกเฉียงใต้ของกำแพงเมือง', 'กำแพงอิฐที่เห็นในปัจจุบันและการจราจรที่ล้อมรอบแสดงให้เห็นการอยู่ร่วมกันของเมืองเก่ากับชีวิตประจำวันสมัยใหม่'],
        features: ['สังเกตก่ออิฐ แนวคูเมือง และความสัมพันธ์ระหว่างช่องประตูกับถนน', 'บรรยากาศย่านตลาดด้านนอกกำแพงต่างจากความสงบของซอยด้านในเมืองเก่า', 'เป็นจุดเชื่อมต่อการเดินชมย่านวัวลายและอาหารท้องถิ่น'],
        experience: ['ใช้เป็นจุดเริ่มต้นการเดินในเขตเมืองเก่าตอนใต้', 'ชมโครงสร้างกำแพงจากพื้นที่ทางเท้าที่ปลอดภัย', 'จับคู่กับตลาดในย่านประตูเชียงใหม่ตามช่วงเวลาที่ร้านเปิด'],
        route: ['เริ่มที่จุดประตูเมืองและอ่านแผนที่ถนนโดยรอบ', 'เดินเลียบพื้นที่สาธารณะเพื่อมองผิวอิฐและขอบคูเมือง', 'เลือกเดินต่อไปย่านวัวลายหรือเรียกรถกลับคลองแม่ข่าจากจุดที่ปลอดภัย'],
        photo: ['ถ่ายมุมกว้างจากฝั่งที่มีทางเท้ารองรับเพื่อเห็นกำแพงกับถนน', 'ช่วงหัวค่ำมีไฟส่องอิฐ แต่ควรหลีกเลี่ยงการยืนบนถนนเพื่อถ่ายภาพ'],
        visit: ['ไม่มีบัตรผ่านเข้าชมประตูเมือง', 'การจราจรรอบกำแพงหนาแน่นได้ ต้องใช้ทางข้ามที่กำหนด', 'อย่านำเวลาตลาดรอบข้างมาใช้เป็นเวลาเปิดของโบราณสถาน'],
        transport: ['จากคลองแม่ข่าเลือกเส้นทางเดินหรือรถผ่านแอป โดยตรวจระยะจากทางเข้าที่ใช้งานจริง', 'รถแดงและแท็กซี่สามารถลงใกล้ประตูเมืองได้ตามข้อกำหนดจราจร'],
        faqs: [{ q: 'ต้องซื้อตั๋วไหม?', a: 'ไม่ต้องซื้อตั๋วเพื่อชมพื้นที่ประตูเมืองภายนอก' }, { q: 'เหมาะไปตอนกลางคืนไหม?', a: 'แสงไฟช่วยให้เห็นกำแพง แต่ต้องระวังถนนและรถที่ผ่านใกล้ประตู' }, { q: 'ไปเที่ยวที่ไหนต่อ?', a: 'สามารถต่อไปถนนวัวลายและวัดศรีสุพรรณ โดยตรวจเวลาเปิดแต่ละแห่ง' }],
      },
      en: {
        name: 'Chiang Mai Gate', tagline: 'The southern threshold of the Old City', description: 'Chiang Mai Gate visitor guide: southern city wall history, street views, nearby markets, map, photography and access from Mae Kha Canal.',
        summary: 'Chiang Mai Gate marks a southern approach to the walled Old City, connecting the moat with busy local streets and the Wua Lai district. It is a compact heritage stop best combined with an exploration of the surrounding neighbourhood.',
        managementTitle: 'About Chiang Mai Gate and its care', management: 'The gate forms part of Chiang Mai’s historic urban landscape and public street network. Relevant local authorities oversee the surrounding civic realm, while nearby traders operate independently. The gate is not a ticketed attraction run by the surrounding shops.',
        history: ['Historic accounts describe the southeastern gate as Tai Wiang, later known as Pratu Chiang Mai, leading towards Wiang Kum Kam and settlements to the south.', 'Today the brickwork sits amid roads and local commerce, making the contrast between former city defences and the modern transport network easy to see.'],
        features: ['Look at the brickwork, moat alignment and relationship between the opening and adjacent roads', 'Compare the busier market side of the wall with quieter lanes within the Old City', 'Use the gate as a starting point for the Wua Lai craft neighbourhood'],
        experience: ['Pause for a short architectural look before exploring the south Old City', 'Photograph the gateway from a safe pavement rather than the roadway', 'Combine the stop with nearby local food vendors when trading'],
        route: ['Begin at the gateway and orient yourself to the surrounding streets', 'Walk along the safe public footpath to examine the wall and moat edge', 'Continue towards Wua Lai or arrange transport back to Mae Kha Canal'],
        photo: ['A wider composition can capture brickwork with the changing city around it', 'Evening lighting brings out the masonry; never step into traffic for an unobstructed shot'],
        visit: ['The outdoor gateway requires no entrance ticket', 'Busy junctions require care and marked crossings', 'Surrounding market hours are not gate opening hours'],
        transport: ['From Mae Kha Canal, request directions from your actual canal entrance; walking and ride-hailing are both options', 'Songthaews and taxis can drop off nearby where local traffic rules permit'],
        faqs: [{ q: 'Is Chiang Mai Gate free?', a: 'Yes, there is no general ticket to view the public exterior.' }, { q: 'Can I visit at night?', a: 'The outdoor area can be viewed after dark, but traffic and crossing safety need extra attention.' }, { q: 'What combines well with it?', a: 'Wua Lai Walking Street on Saturdays and Wat Sri Suphan at its own visiting times.' }],
      },
      zh: {
        name: '清迈门', tagline: '清迈古城南侧历史城门', description: '清迈门旅游指南：南侧城墙历史、附近市集、建筑观察、拍照位置、Google 地图及从湄卡运河出发的交通。',
        summary: '清迈门是清迈古城南侧的重要入口，连接护城河、旧城街道与瓦莱传统工艺街区。这里适合短暂停留，观察城墙结构后顺游附近市场与寺庙。',
        managementTitle: '关于清迈门及公共空间管理', management: '清迈门属于城市历史景观与公共道路空间的一部分，周边道路及公共设施由相关地方单位管理维护。城门附近的餐饮、商铺和市场分别由经营者运营，并非城门统一售票服务。',
        history: ['历史资料记载古城东南方向的 Tai Wiang 门后来称为清迈门，过去是通往南侧聚落及 Wiang Kum Kam 的通道之一。', '如今的砖墙处在繁忙城市道路之间，古代防御边界与现代交通交织，是观察城市演变的好地点。'],
        features: ['观察砖墙砌筑、护城河走向与城门开口', '比较城墙外侧市场氛围与古城内侧街巷', '可将这里作为前往瓦莱银器街区的起点'],
        experience: ['在安全的人行道观赏城门建筑', '留意城墙与周围现代街区的关系', '根据商户实际营业时间顺游附近小吃摊'],
        route: ['先在清迈门定位点辨认周围道路与护城河', '沿安全人行道观察砖墙与城门结构', '继续前往瓦莱街区，或从附近适合停车的位置乘车返回湄卡运河'],
        photo: ['以较宽视角拍摄砖墙与街道，体现历史与现代的对比', '傍晚灯光可突出砖面质感，不要站到车道中央拍照'],
        visit: ['室外城门公共区域无需购买门票', '附近交通繁忙，请使用安全过街设施', '周围市场营业时间不等于城门开放时间'],
        transport: ['从湄卡运河实际入口查询步行路线，亦可使用网约车', '双条车和出租车可在符合现场交通规定的区域下客'],
        faqs: [{ q: '清迈门需要门票吗？', a: '室外公共城门区域无需统一门票。' }, { q: '晚上可以拍照吗？', a: '可以欣赏外部灯光，但要特别注意车辆与道路安全。' }, { q: '周边有什么？', a: '瓦莱周六步行街和素攀寺是适合组合游览的两个地点。' }],
      },
    },
  },
  'wat-sri-suphan': {
    image: '/nearby/wat-sri-suphan.jpg', imageSource: 'https://thai.jpn-guide.com/chiangmai/Wat-Sri-Suphan/', mapQuery: 'Wat Sri Suphan Silver Temple Chiang Mai Thailand',
    address: 'Wat Sri Suphan, Wua Lai Road, Haiya, Mueang Chiang Mai, Chiang Mai 50100, Thailand',
    fee: { th: 'ตรวจค่าธรรมเนียมและพื้นที่เข้าชมที่วัด', en: 'Check current visitor fees and accessible areas at the temple', zh: '门票及可入内区域请以寺方现场公告为准' },
    hours: { th: 'ตรวจสอบประกาศล่าสุดของวัดก่อนเดินทาง', en: 'Confirm current temple hours before visiting', zh: '到访前核对寺方最新开放公告' },
    duration: { th: '30–60 นาที', en: '30–60 minutes', zh: '30–60 分钟' },
    source: 'https://www.tourismthailand.org/Attraction/wat-si-suphan',
    locales: {
      th: {
        name: 'วัดศรีสุพรรณ', tagline: 'อุโบสถเงินและภูมิปัญญาช่างล้านนา', description: 'วัดศรีสุพรรณ เชียงใหม่ ประวัติอุโบสถเงิน ลวดลายช่างโลหะ การเดินทางจากคลองแม่ข่า และมารยาทเข้าชมวัด',
        summary: 'วัดศรีสุพรรณตั้งอยู่บนถนนวัวลาย ย่านช่างเงินเก่าของเชียงใหม่ มีชื่อเสียงจากอุโบสถที่ตกแต่งด้วยงานโลหะสีเงินอย่างละเอียด เป็นจุดชมทั้งศิลปกรรมและทักษะชุมชน',
        managementTitle: 'เกี่ยวกับวัดศรีสุพรรณและผู้ดูแล', management: 'วัดศรีสุพรรณเป็นศาสนสถานทางพุทธศาสนาที่ดูแลพื้นที่พิธีกรรมและการเข้าชมตามระเบียบของวัด งานเครื่องเงินเชื่อมโยงกับช่างฝีมือและชุมชนวัวลาย ผู้มาเยือนควรปฏิบัติตามป้ายและคำแนะนำของวัด',
        history: ['วัดมีความเป็นมาตั้งแต่ยุคล้านนา ราวต้นคริสต์ศตวรรษที่ 16 โดยมีเรื่องเล่าเกี่ยวกับพระเมืองแก้วและการประดิษฐานพระพุทธรูปสำคัญ', 'อุโบสถเงินสมัยใหม่ใช้ฐานโครงสร้างก่อสร้างทั่วไปแล้วหุ้มด้วยแผ่นโลหะตกแต่งลายนูน เชื่อมประเพณีศาสนาเข้ากับงานช่างของย่านวัวลาย'],
        features: ['พิจารณาลายดุนโลหะที่เล่าเรื่องพุทธประวัติและลวดลายล้านนา', 'สังเกตรูปทรงหลังคา หน้าบัน และประติมากรรมผู้พิทักษ์', 'ชมผลงานช่างเงินโดยไม่สัมผัสรายละเอียดประดับ'],
        experience: ['เริ่มชมด้านนอกอุโบสถเงินและอ่านข้อมูลบนพื้นที่วัด', 'เปรียบเทียบงานโลหะกับอาคารวัดอื่น ๆ', 'หากเปิดให้ชมงานช่าง ให้ดูการทำงานด้วยความเคารพ'],
        route: ['เข้าวัดจากถนนวัวลายและตรวจป้ายระเบียบ', 'ชมอุโบสถเงินจากด้านนอกโดยค่อย ๆ สังเกตรายละเอียด', 'เดินชมลานวัดและบริเวณที่อนุญาตก่อนกลับไปถนนวัวลาย'],
        photo: ['ถ่ายเฉียงเพื่อเห็นผิวโลหะและหลังคาซ้อนชั้น', 'แสงอ่อนช่วยลดแสงสะท้อนแรงบนพื้นผิวเงิน'],
        visit: ['แต่งกายสุภาพและรักษาความสงบในศาสนสถาน', 'บางพื้นที่มีข้อจำกัดผู้เข้า โดยเฉพาะภายในอุโบสถ; อ่านป้ายหน้างาน', 'ค่าบริการและเวลาอาจเปลี่ยนแปลง ให้สอบถามวัด'],
        transport: ['ใช้หมุดวัดศรีสุพรรณโดยเฉพาะบนถนนวัวลาย ไม่ใช่หมุดคลองแม่ข่า', 'จากคลองแม่ข่าเลือกเดินหรือใช้รถรับจ้าง โดยเผื่อเวลาย่านวัวลายในวันเสาร์'],
        faqs: [{ q: 'อุโบสถเป็นเงินแท้ทั้งหมดหรือไม่?', a: 'โครงสร้างใช้วัสดุก่อสร้างหลายชนิด ส่วนงานตกแต่งใช้โลหะสีเงิน รวมถึงวัสดุโลหะอื่นตามส่วนต่าง ๆ' }, { q: 'เข้าได้ทุกบริเวณหรือไม่?', a: 'พื้นที่บางส่วนมีข้อจำกัดตามประเพณีและระเบียบวัด ให้ปฏิบัติตามป้าย' }, { q: 'ควรเที่ยวคู่กับที่ไหน?', a: 'ถนนคนเดินวัวลายในเย็นวันเสาร์เหมาะสำหรับวางแผนร่วมกัน' }],
      },
      en: {
        name: 'Wat Sri Suphan (Silver Temple)', tagline: 'Lanna metalwork on historic Wua Lai Road', description: 'Explore Wat Sri Suphan Silver Temple: its metal-clad ordination hall, Lanna craftsmanship, visiting etiquette, transport and map.',
        summary: 'Wat Sri Suphan stands in Chiang Mai’s traditional Wua Lai silversmith neighbourhood. Its ornamented silver-coloured ordination hall is an impressive expression of religious art and local metalworking traditions.',
        managementTitle: 'Who manages Wat Sri Suphan?', management: 'Wat Sri Suphan is a functioning Buddhist temple. Its religious areas and visitor rules are managed through the temple, while the silverworking tradition also involves artisans in the surrounding Wua Lai community. Visitors should follow current temple notices and staff guidance.',
        history: ['The temple traces its history to the Lanna era around the early sixteenth century, with accounts linking its development to King Mueang Kaew and a revered Buddha image.', 'The modern metal-clad ordination hall uses a conventional structural base covered with decorative embossed panels illustrating Buddhist teachings, local stories and Lanna craft motifs.'],
        features: ['Examine repoussé panels and narrative reliefs without touching them', 'Notice tiered roofs, gables and guardian figures around the hall', 'Compare the metalwork with other temple buildings nearby'],
        experience: ['Begin outside the silver ordination hall and read visitor notices', 'Study the ornament from several angles as the light changes', 'Look for permitted craft displays and the connection to the Wua Lai neighbourhood'],
        route: ['Enter from Wua Lai Road and check the posted visitor rules', 'Walk around the permitted exterior viewing areas of the silver hall', 'Continue through open temple courtyards before returning to Wua Lai Road'],
        photo: ['A three-quarter view captures the roof layers and detailed silver facade', 'Soft morning or late-afternoon light helps control glare off the reflective metal'],
        visit: ['Dress modestly and keep noise low in worship areas', 'Some interiors have entry restrictions under temple customs; follow signs', 'Check current opening and entrance arrangements at the temple'],
        transport: ['Use the dedicated Wat Sri Suphan map destination on Wua Lai Road', 'From Mae Kha Canal, walk or use local transport; Saturday market road closures can affect vehicle access'],
        faqs: [{ q: 'Is the entire building made of solid silver?', a: 'No. It has a structural base and elaborate metal cladding using different materials and techniques.' }, { q: 'Can everyone enter the ordination hall?', a: 'Some religious areas have specific access rules. Check signage and respect temple guidance.' }, { q: 'What can I combine with the temple?', a: 'The Saturday Wua Lai Walking Street is a natural pairing if you visit on that day.' }],
      },
      zh: {
        name: '素攀寺（银庙）', tagline: '瓦莱传统银器街区的兰纳金属工艺', description: '清迈素攀寺银庙详细攻略：银色戒堂、兰纳建筑与金属雕饰、参观礼仪、门票、交通和地图。',
        summary: '素攀寺位于清迈瓦莱传统银器工艺街区，以装饰精细的银色戒堂闻名，能同时欣赏佛教艺术、兰纳建筑形式与当地金属雕刻技艺。',
        managementTitle: '关于素攀寺的管理主体', management: '素攀寺是仍在使用的佛教寺院，宗教活动区域和入内规则由寺院管理。银器工艺则与瓦莱社区的匠人传统密切相关。参观应遵守寺方现场告示和工作人员指引。',
        history: ['寺院历史可追溯至约 16 世纪初的兰纳时期，相关记载涉及孟格莱王朝君主及重要佛像的安置。', '如今醒目的金属装饰戒堂采用常规建筑结构，外覆精细的浮雕金属面板，表现佛教故事、地方文化与兰纳匠艺。'],
        features: ['观察表现佛教故事及传统纹样的金属浮雕', '留意层叠屋顶、山墙、守护神兽和装饰细节', '比较银色戒堂与寺内其他建筑的风格差异'],
        experience: ['从戒堂外侧开始欣赏，不触摸金属装饰', '留意不同光线下浮雕阴影的变化', '在允许的区域了解瓦莱工匠与寺庙艺术的联系'],
        route: ['从瓦莱路进入寺院，先阅读入内须知', '沿允许参观的外部路线观察戒堂立面与屋顶', '再游览开放的庭院区域，之后返回瓦莱路'],
        photo: ['斜向取景可同时捕捉戒堂侧面、屋顶及雕饰', '柔和光线更适合拍摄反光较强的金属面板'],
        visit: ['保持衣着得体，尊重宗教活动', '部分室内区域可能受传统参观规定限制，请遵守告示', '开放及收费安排以寺方现场说明为准'],
        transport: ['请导航到瓦莱路上的 Wat Sri Suphan 独立地点，而不是湄卡运河定位', '从运河可步行或乘车，周六夜市时路段可能交通管制'],
        faqs: [{ q: '银庙是纯银建筑吗？', a: '不是。建筑有常规主体结构，外侧覆盖使用不同金属工艺制作的装饰面板。' }, { q: '任何人都能进入戒堂吗？', a: '部分宗教区域有入内限制，须遵守寺院当日告示。' }, { q: '适合搭配什么行程？', a: '周六下午参观寺院，晚上顺游瓦莱步行街。' }],
      },
    },
  },
  'wua-lai': {
    image: '/nearby/wua-lai-market.webp', imageSource: 'https://www.taithaione.com/tw/article/1398', mapQuery: 'Wua Lai Saturday Walking Street Chiang Mai Thailand',
    address: 'Wua Lai Road, Haiya, Mueang Chiang Mai, Chiang Mai 50100, Thailand (market corridor; 69 Wua Lai Rd is a reference point)',
    fee: { th: 'เดินเข้าตลาดฟรี ค่าอาหารและของซื้อแยก', en: 'Free to browse; purchases extra', zh: '逛街不收统一门票，消费另计' },
    hours: { th: 'เย็นวันเสาร์โดยทั่วไปประมาณ 16:00–22:00; ตรวจหน้างาน', en: 'Saturday evenings, commonly around 16:00–22:00; check locally', zh: '通常周六约 16:00–22:00，具体以现场为准' },
    duration: { th: '60–120 นาที', en: '60–120 minutes', zh: '60–120 分钟' },
    source: 'https://silvertemple.org/en/experiences/walking-street',
    locales: {
      th: {
        name: 'ถนนคนเดินวัวลาย', tagline: 'ตลาดเย็นวันเสาร์ในย่านช่างเงิน', description: 'ตลาดถนนคนเดินวัวลาย เชียงใหม่ เปิดวันไหน เวลาเดินตลาด ของกิน งานฝีมือ จุดถ่ายรูปและวิธีเดินทางจากคลองแม่ข่า',
        summary: 'ถนนวัวลายเปลี่ยนเป็นถนนคนเดินในเย็นวันเสาร์ มีทั้งร้านอาหาร ของที่ระลึก งานหัตถกรรม และบรรยากาศชุมชนช่างเงินเก่า เริ่มวางแผนจากบริเวณประตูเชียงใหม่ได้สะดวก',
        managementTitle: 'เกี่ยวกับถนนคนเดินและการจัดการพื้นที่', management: 'ถนนคนเดินวัวลายใช้ถนนสาธารณะในย่านไหยา การจัดกิจกรรมและการปิดถนนเกี่ยวข้องกับหน่วยงานท้องถิ่นและผู้จัดกิจกรรม ส่วนแผงค้าเป็นธุรกิจของผู้ประกอบการแต่ละราย วันเวลาและข้อกำหนดการจราจรควรตรวจจากประกาศหน้างาน',
        history: ['ย่านวัวลายมีประวัติด้านช่างเครื่องเงินและงานหัตถกรรมล้านนา จึงเป็นมากกว่าตลาดของที่ระลึกทั่วไป', 'ตลาดวันเสาร์นำงานช่าง อาหารและการใช้ชีวิตย่านเมืองเก่ามารวมกันบนถนนที่เปิดให้คนเดินในช่วงจัดงาน'],
        features: ['แผงเครื่องเงิน เครื่องประดับ และงานทำมือสะท้อนงานช่างท้องถิ่น', 'ร้านอาหารพื้นเมืองและขนมช่วยเติมสีสันยามค่ำ', 'มีทางเชื่อมไปยังวัดศรีสุพรรณซึ่งมีผลงานโลหะตกแต่งโดดเด่น'],
        experience: ['เริ่มสำรวจบริเวณต้นถนนใกล้ประตูเชียงใหม่', 'เดินดูงานหัตถกรรมและเปรียบเทียบสินค้าจากหลายร้าน', 'หยุดพักชิมอาหารโดยไม่กีดขวางทางเดิน'],
        route: ['เริ่มที่ประตูเชียงใหม่ ตรวจทางปิดถนนประจำวัน', 'เดินต่อไปตามถนนวัวลาย แวะชมแผงหัตถกรรมและอาหาร', 'หากวัดศรีสุพรรณเปิดให้เข้าชม แวะตามระเบียบวัด ก่อนกลับโดยถนนที่รถเข้าถึงได้'],
        photo: ['ภาพมุมกว้างตามแนวถนนช่วยเก็บบรรยากาศไฟและร้านค้า', 'ถ่ายรายละเอียดงานฝีมือเฉพาะเมื่อผู้ขายอนุญาต'],
        visit: ['ตลาดจัดในเย็นวันเสาร์ ไม่ใช่ทุกคืน', 'ถนนอาจปิดรถยนต์และมีคนหนาแน่น ควรกำหนดจุดรับรถนอกเขตตลาด', 'เวลาแต่ละร้านต่างกันและเปลี่ยนได้ตามฝนหรือวันหยุด'],
        transport: ['จากคลองแม่ข่าเรียกรถมายังประตูเชียงใหม่แล้วเดินเข้าตลาด', 'อย่าตั้งหมุดเฉพาะร้านใดร้านหนึ่งเป็นตลาดทั้งหมด; ตลาดทอดยาวตามถนนวัวลาย'],
        faqs: [{ q: 'เปิดวันไหน?', a: 'ปกติจัดเย็นวันเสาร์เท่านั้น' }, { q: 'ต้องซื้อตั๋วไหม?', a: 'ไม่ต้องซื้อตั๋วเพื่อเดินตลาด' }, { q: 'ไปถึงกี่โมงดี?', a: 'ช่วงเย็นก่อนคนหนาแน่นเหมาะกับการเดินดูร้านและวางแผนกลับ' }],
      },
      en: {
        name: 'Wua Lai Saturday Walking Street', tagline: 'A Saturday market in Chiang Mai’s silverworking quarter', description: 'Wua Lai Saturday Walking Street guide: market days, opening times, crafts, northern Thai food, route and transport from Mae Kha Canal.',
        summary: 'On Saturday evenings Wua Lai Road becomes a pedestrian market, with locally made crafts, food stalls and an energetic street atmosphere. The setting is Chiang Mai’s traditional silversmith neighbourhood, close to Chiang Mai Gate.',
        managementTitle: 'About Wua Lai Walking Street management', management: 'The market uses public streets in the Haiya neighbourhood. Local authorities and event organisers coordinate street access and event arrangements, while individual vendors operate their own stalls. Road closures and market schedules should be checked against current local notices.',
        history: ['Wua Lai has a longstanding metalworking and craft identity, associated with Lanna silverware and artisan workshops.', 'The weekly market makes that heritage visible alongside food, clothing and contemporary small businesses, giving the neighbourhood a different character on Saturday evenings.'],
        features: ['Look for silverwork, handmade ornaments and craft demonstrations where available', 'Try small portions of northern Thai food while browsing', 'The adjacent Wat Sri Suphan connects the market with a living metalwork tradition'],
        experience: ['Enter from the Chiang Mai Gate end for a clear orientation', 'Compare handicraft stalls and talk with makers where welcome', 'Take breaks away from the busiest pedestrian flow'],
        route: ['Start near Chiang Mai Gate and confirm where vehicle access is closed', 'Follow Wua Lai Road, stopping for craft stalls and snacks', 'If the temple is open, visit Wat Sri Suphan according to its rules, then return via a road where pickups are permitted'],
        photo: ['Shoot along the lit market corridor to capture a sense of scale', 'Ask stallholders before close-up photos of people or merchandise'],
        visit: ['The walking street is usually a Saturday-evening event, not a daily night bazaar', 'Expect crowds and road closures; arrange pickup outside the pedestrian corridor', 'Vendors set individual hours and rain can affect trading'],
        transport: ['From Mae Kha Canal, navigate to Chiang Mai Gate or a permitted drop-off point, then walk in', 'The market stretches along Wua Lai Road; one business pin does not represent every stall'],
        faqs: [{ q: 'What day is Wua Lai market open?', a: 'Typically Saturday evenings.' }, { q: 'Is there an entrance fee?', a: 'No general market admission fee; shopping and food are optional.' }, { q: 'When should I arrive?', a: 'Early evening is useful for browsing before peak crowds.' }],
      },
      zh: {
        name: '瓦莱周六步行街', tagline: '清迈传统银器街区的周末夜市', description: '清迈瓦莱周六步行街攻略：开放日期、夜市时间、手工银器、泰北美食、步行路线及湄卡运河交通。',
        summary: '每到周六傍晚，瓦莱路会变成热闹的步行夜市，售卖手工艺、食品及纪念品。这里位于传统银器工匠街区，靠近清迈门和素攀寺。',
        managementTitle: '关于瓦莱步行街的管理', management: '瓦莱步行街使用海雅区的公共道路，活动及交通管制涉及地方单位与组织方，而各摊位分别由经营者经营。封路范围、营业时间与现场秩序请按当日公告安排。',
        history: ['瓦莱街区长期以银器、金属工艺及兰纳手工艺闻名，夜市因而具备鲜明的本地工匠背景。', '周六市集将工艺摊、服饰、小吃和社区活动集中在一条临时步行街上，展示旧城南侧不同于平日的活力。'],
        features: ['寻找手工银器、饰品及当地制作的小物', '品尝不同泰北小吃，注意摊位实际营业情况', '附近的素攀寺可帮助理解瓦莱金属工艺传统'],
        experience: ['从清迈门方向进入，先辨认整条市集道路', '慢慢逛工艺摊并比较作品', '到人流较少的位置用餐或休息'],
        route: ['从清迈门附近开始，确认当天封路范围', '沿瓦莱路步行，依次观察工艺摊与食品区', '如素攀寺开放，可按寺方规定顺游，返程到允许接车的道路叫车'],
        photo: ['沿夜市街道的纵深取景能体现摊位灯光与人流', '拍摄摊主或近距离商品前先征询同意'],
        visit: ['通常仅在周六傍晚举办，不是每天营业的夜市', '步行街可能封路、人流密集，返程应规划接车点', '不同摊主开收市时间不同，雨天安排可能调整'],
        transport: ['从湄卡运河可乘车到清迈门附近，再步行进入瓦莱路', '市场沿街分布，不宜把其中一个店铺的定位当作整条夜市'],
        faqs: [{ q: '瓦莱夜市哪天开？', a: '通常在周六傍晚举办。' }, { q: '需要门票吗？', a: '逛步行街无需统一门票，购物餐饮另计。' }, { q: '几点去最好？', a: '建议傍晚到达，可避开部分夜间高峰。' }],
      },
    },
  },
  'tha-phae': {
    image: '/nearby/tha-phae-gate.webp', imageSource: 'https://bangkokheaven.com/tha-phae-gate-the-heartbeat-of-chiang-mais-ancient-city/', mapQuery: 'Tha Phae Gate Chiang Mai Thailand',
    address: 'Tha Phae Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai 50200, Thailand',
    fee: { th: 'พื้นที่ลานประตูเมืองเข้าชมฟรี', en: 'Public gate square is free to visit', zh: '城门广场公共区域免费' },
    hours: { th: 'พื้นที่กลางแจ้งเข้าถึงได้ทั่วไป; กิจกรรมมีเวลาแยก', en: 'Outdoor public square generally accessible; events vary', zh: '户外广场通常可通行，活动时间另行安排' },
    duration: { th: '20–45 นาที', en: '20–45 minutes', zh: '20–45 分钟' },
    source: 'https://www.thailandtravel.or.jp/tha-phae-gate/',
    locales: {
      th: {
        name: 'ประตูท่าแพ', tagline: 'ซุ้มประตูอิฐแดงด้านตะวันออกของเมืองเก่า', description: 'ประตูท่าแพ เชียงใหม่ ประวัติกำแพงอิฐ จุดถ่ายรูป ลานประตูเมือง ถนนคนเดินวันอาทิตย์ และการเดินทางจากคลองแม่ข่า',
        summary: 'ประตูท่าแพเป็นจุดสังเกตสำคัญทางฝั่งตะวันออกของเมืองเก่าเชียงใหม่ กำแพงอิฐแดงและลานกว้างเป็นที่รู้จักทั้งในฐานะจุดถ่ายภาพและจุดเริ่มสำรวจถนนราชดำเนิน',
        managementTitle: 'เกี่ยวกับประตูท่าแพและการดูแลพื้นที่', management: 'ประตูท่าแพเป็นส่วนหนึ่งของภูมิทัศน์เมืองเก่าและพื้นที่สาธารณะของเชียงใหม่ การดูแลสภาพพื้นที่ ถนน และกิจกรรมสาธารณะเกี่ยวข้องกับหน่วยงานท้องถิ่นและผู้จัดกิจกรรมตามหน้าที่ ไม่ใช่พื้นที่ของผู้ประกอบการรายเดียว',
        history: ['ประตูท่าแพเกี่ยวข้องกับระบบกำแพงเมืองเชียงใหม่ที่เริ่มในยุคล้านนา โครงสร้างที่เห็นได้รับการบูรณะในสมัยใหม่', 'พื้นที่หน้าประตูทำหน้าที่เป็นจุดพบปะและเวทีของกิจกรรมเมือง รวมถึงการเดินเล่นและงานเทศกาล'],
        features: ['ผนังอิฐแดง ซุ้มประตู และแนวป้อมยามเป็นองค์ประกอบหลัก', 'ลานกว้างเปิดมุมมองไปยังโครงสร้างโดยรอบ', 'ถนนราชดำเนินด้านในเป็นแนวทางเดินสำคัญของเมืองเก่า'],
        experience: ['เริ่มจากลานหน้าประตูและสังเกตรูปทรงซุ้มอิฐ', 'เดินผ่านประตูเข้าสู่แนวถนนเมืองเก่า', 'หากเป็นวันอาทิตย์ ตรวจเวลาและเขตปิดถนนของตลาดก่อนจัดแผน'],
        route: ['ชมประตูและลานกว้างจากจุดที่ไม่กีดขวางทางเข้า', 'เดินลอดซุ้มเข้าไปด้านในถนนราชดำเนิน', 'เลือกเดินต่อในเมืองเก่าหรือกลับไปจุดรับรถใกล้ถนนหลัก'],
        photo: ['แสงเช้าหรือเย็นช่วยให้ผิวอิฐเด่น', 'เก็บกรอบซุ้มและลานกว้างในภาพเดียวโดยเว้นพื้นที่ให้คนเดิน'],
        visit: ['ลานสาธารณะไม่มีค่าบัตรเข้าชมทั่วไป', 'กิจกรรมและตลาดวันอาทิตย์อาจทำให้พื้นที่หนาแน่น', 'อย่ารบกวนสัตว์หรือผู้มาเยือนเพื่อถ่ายภาพ'],
        transport: ['จากคลองแม่ข่าเลือกเส้นทางไปประตูท่าแพโดยตรง ไม่ใช้หมุดประตูเชียงใหม่', 'รถแดงและรถผ่านแอปอาจต้องจอดห่างจากจุดที่ปิดถนนในวันจัดงาน'],
        faqs: [{ q: 'เข้าชมฟรีไหม?', a: 'พื้นที่ลานประตูเมืองเข้าชมได้โดยไม่ต้องซื้อตั๋วทั่วไป' }, { q: 'ประตูท่าแพอยู่ด้านไหน?', a: 'อยู่ทางตะวันออกของเมืองเก่าเชียงใหม่' }, { q: 'ตลาดวันอาทิตย์จัดทุกคืนไหม?', a: 'ไม่ ตลาดถนนคนเดินวันอาทิตย์มีวันจัดเฉพาะ ไม่ใช่กิจกรรมทุกคืน' }],
      },
      en: {
        name: 'Tha Phae Gate', tagline: 'The red-brick eastern gateway to Chiang Mai Old City', description: 'Tha Phae Gate guide: brick gateway history, plaza photography, Sunday Walking Street, directions and map from Mae Kha Canal.',
        summary: 'Tha Phae Gate is the best-known eastern gateway of Chiang Mai Old City. Its brick frontage and open square make it a popular meeting point, photographic landmark and starting place for a walk along Ratchadamnoen Road.',
        managementTitle: 'Who maintains Tha Phae Gate?', management: 'Tha Phae Gate forms part of Chiang Mai’s historic city landscape and public realm. Local authorities and relevant event organisers are involved in maintaining civic space and managing activities; it is not a private attraction run by a single nearby shop.',
        history: ['The gateway relates to Chiang Mai’s Lanna-era city-wall system, although the standing brick frontage has undergone modern reconstruction and restoration.', 'The square now acts as a public gathering and festival location, linking the historic street pattern with the city’s present-day cultural life.'],
        features: ['The red-brick facade, arched opening and crenellated wall are the defining visual elements', 'The plaza gives a broad, unobstructed view of the gate', 'Ratchadamnoen Road continues into the historic core beyond the arch'],
        experience: ['Photograph the gate from the square without blocking pedestrians', 'Walk through the arch to see how it frames the Old City street', 'On Sundays, check the separate walking-street event schedule and access restrictions'],
        route: ['Start in the public square and examine the wall frontage', 'Pass through the gate and continue a short way along Ratchadamnoen Road', 'Explore more of the Old City or arrange a pickup on an accessible main road'],
        photo: ['Morning or late-afternoon sidelight reveals brick textures', 'A wide shot of the arch and plaza shows the scale and its city setting'],
        visit: ['No general ticket is needed for the public square', 'Festivals and Sunday market activity can make the area very busy', 'Avoid disturbing birds or other visitors for a photograph'],
        transport: ['From Mae Kha Canal, navigate specifically to Tha Phae Gate, not Chiang Mai Gate', 'Songthaews and ride-hailing drop-offs may shift during pedestrianised events'],
        faqs: [{ q: 'Is Tha Phae Gate free?', a: 'The public square and exterior are free to visit.' }, { q: 'Which side of the Old City is it on?', a: 'The eastern side.' }, { q: 'Is the Sunday market open nightly?', a: 'No. Sunday Walking Street is a separate weekly market event.' }],
      },
      zh: {
        name: '塔佩门', tagline: '清迈古城东侧的红砖城门', description: '塔佩门游览指南：红砖建筑历史、广场拍照机位、周日步行街、从湄卡运河出发的交通与 Google 地图。',
        summary: '塔佩门是清迈古城东侧著名地标，红砖城门与开阔广场适合拍照、集合与步行游览。穿过城门便可沿 Ratchadamnoen Road 探索旧城。',
        managementTitle: '关于塔佩门的管理维护', management: '塔佩门属于清迈历史城市景观和公共空间。公共场地维护、道路使用与活动管理涉及当地相关政府部门及活动组织方，并非由某一家周边商户独占经营。',
        history: ['塔佩门与清迈兰纳时代的城墙体系有关，但今天可见的红砖城门经历了近代修复与重建。', '城门外的广场如今是市民与游客的公共聚集空间，也常成为城市活动和节庆的背景。'],
        features: ['红砖立面、拱形门洞及城墙顶部的垛口是重要建筑特点', '开阔广场提供观赏完整城门的角度', '城门内的 Ratchadamnoen Road 延伸至古城历史街区'],
        experience: ['先从广场整体观看城门与城墙', '穿过门洞体验古城街道的空间变化', '若逢周日，另行核对步行街开放及交通安排'],
        route: ['从广场安全位置观察红砖城门', '经门洞进入 Ratchadamnoen Road，探索沿线街区', '继续步行或到可正常接车的主路返程'],
        photo: ['清晨与傍晚侧光有利于展现红砖质感', '广角构图可以同时纳入门洞与广场，体现地标尺度'],
        visit: ['广场外部无需统一门票', '节庆与周日市集期间人流可能较大', '不要为了拍照惊扰鸟群或阻碍行人'],
        transport: ['从湄卡运河请独立导航到 Tha Phae Gate，不要误选清迈门', '市集或活动期间部分道路可能禁止车辆通行'],
        faqs: [{ q: '塔佩门免费吗？', a: '城门外部和公共广场无需统一门票。' }, { q: '它位于古城哪边？', a: '位于清迈古城东侧。' }, { q: '周日步行街每天都有吗？', a: '不是。周日步行街是独立的每周活动。' }],
      },
    },
  },
  'wat-phan-tao': {
    image: '', imageSource: '', mapQuery: 'วัดพันเตา 105 ถนนพระปกเกล้า เชียงใหม่', address: '105 Phra Pok Klao Road, Phra Sing, Mueang Chiang Mai, Chiang Mai 50200, Thailand',
    fee: { th: 'ตรวจสอบค่าบริการกับวัด', en: 'Check current admission arrangements at the temple', zh: '请向寺方确认当前入场安排' },
    hours: { th: 'การท่องเที่ยวแห่งประเทศไทยระบุ 08:00–17:00 น.; ตรวจสอบกับวัดก่อนเดินทาง', en: 'Tourism Authority of Thailand lists 08:00–17:00; confirm with the temple', zh: '泰国旅游局列示 08:00–17:00；出发前请向寺方确认' },
    duration: { th: '30–45 นาที', en: '30–45 minutes', zh: '30–45 分钟' },
    source: 'https://www.tourismthailand.org/attraction/wat-phan-tao',
    locales: {
      th: {
        name: 'วัดพันเตา', tagline: 'วิหารไม้สักใกล้วัดเจดีย์หลวง', description: 'เที่ยววัดพันเตา เชียงใหม่ ชมวิหารไม้สัก ประวัติ แผนที่ และการเดินทางจากคลองแม่ข่า',
        summary: 'วัดพันเตาอยู่บนถนนพระปกเกล้าใกล้วัดเจดีย์หลวง มีวิหารไม้สักที่เคยเป็นหอคำของเจ้าเมืองเชียงใหม่',
        managementTitle: 'เกี่ยวกับวัดพันเตาและการดูแล', management: 'วัดพันเตาเป็นศาสนสถานที่ยังใช้งาน โปรดสอบถามวัดเกี่ยวกับพื้นที่เข้าชมและการถ่ายภาพ การท่องเที่ยวแห่งประเทศไทยเป็นผู้เผยแพร่ข้อมูล ไม่ใช่ผู้ดำเนินงานวัด',
        history: ['วิหารไม้สักเดิมเป็นหอคำของพระเจ้ามโหตรประเทศ ก่อนถวายเป็นวิหารของวัดในสมัยพระเจ้าอินทวิชชานนท์'], features: ['สังเกตซุ้มประตูแกะสลักรูปนกยูงและโครงสร้างไม้สัก', 'ด้านหลังวิหารมีเจดีย์ประธาน'], experience: ['เดินชมอย่างสงบและเคารพผู้มาประกอบศาสนกิจ'],
        route: ['มาถึงวัดบนถนนพระปกเกล้าและตรวจป้ายทางเข้า', 'ชมวิหารไม้สักและซุ้มประตูจากพื้นที่ที่อนุญาต', 'เดินต่อไปชมเจดีย์ด้านหลังเมื่อพื้นที่เปิด แล้วเลือกไปวัดเจดีย์หลวง'], photo: ['ถ่ายจากพื้นที่ที่วัดอนุญาตและไม่รบกวนพิธี'], visit: ['แต่งกายสุภาพและปฏิบัติตามป้ายของวัด', 'เวลาและค่าบริการอาจเปลี่ยน ควรตรวจสอบก่อนเดินทาง'], transport: ['จากคลองแม่ข่าใช้แผนที่จากทางเข้าคลองที่คุณอยู่ เดินหรือเรียกรถไปถนนพระปกเกล้า'],
        faqs: [{q:'วัดพันเตาอยู่ใกล้วัดเจดีย์หลวงไหม?',a:'อยู่ติดบริเวณใกล้กันบนถนนพระปกเกล้า เหมาะจัดเที่ยวต่อกัน'}, {q:'จุดเด่นของวิหารคืออะไร?',a:'วิหารไม้สักเคยเป็นหอคำ และมีซุ้มประตูแกะสลักรูปนกยูง'}, {q:'เปิดกี่โมง?',a:'การท่องเที่ยวแห่งประเทศไทยระบุ 08:00–17:00 น. โปรดยืนยันกับวัดก่อนเดินทาง'}]
      },
      en: {
        name: 'Wat Phan Tao', tagline: 'A teakwood hall beside Wat Chedi Luang', description: 'Visit Wat Phan Tao in Chiang Mai: the teakwood hall, history, temple etiquette, map and directions from Mae Kha Canal.',
        summary: 'Wat Phan Tao stands on Phra Pok Klao Road near Wat Chedi Luang. Its teakwood hall was formerly a residence of a Chiang Mai ruler.',
        managementTitle: 'About Wat Phan Tao and its care', management: 'Wat Phan Tao is an active Buddhist temple. Ask the temple about access and photography. The Tourism Authority of Thailand publishes visitor information; it does not operate the temple.',
        history: ['The teak hall was formerly the residence of King Mahotara Prateth and was later given to the temple during the reign of King Inthawichayanon.'], features: ['Look for the carved peacock over the doorway and the teak structure', 'The principal chedi stands behind the hall'], experience: ['Walk quietly and respect worshippers and ceremonies'],
        route: ['Find the entrance on Phra Pok Klao Road and check posted instructions', 'Observe the teak hall and carved doorway from permitted areas', 'See the chedi behind the hall if accessible, then consider Wat Chedi Luang'], photo: ['Photograph only where permitted and avoid interrupting worship'], visit: ['Dress respectfully and follow temple signs', 'Hours and fees can change; confirm before travelling'], transport: ['From your actual Mae Kha Canal entrance, check walking directions or take a car to Phra Pok Klao Road'],
        faqs: [{q:'Is Wat Phan Tao near Wat Chedi Luang?',a:'Yes. They are adjacent on Phra Pok Klao Road and can be visited together.'}, {q:'What makes the hall distinctive?',a:'It is a former royal teak residence with a carved peacock above its doorway.'}, {q:'When is it open?',a:'The Tourism Authority of Thailand lists 08:00–17:00; confirm current access with the temple.'}]
      },
      zh: {
        name: '盼道寺', tagline: '契迪龙寺旁的柚木佛殿', description: '清迈盼道寺游览指南：柚木佛殿、历史、寺庙礼仪、地图与从湄卡运河出发的交通。',
        summary: '盼道寺位于帕波格劳路、契迪龙寺附近，其柚木佛殿原为清迈统治者的住所。',
        managementTitle: '关于盼道寺及其管理', management: '盼道寺是仍在使用的佛教寺院，参观范围及拍摄规定请向寺方确认。泰国旅游局发布游览资料，并非寺庙运营方。',
        history: ['柚木建筑原为玛霍塔拉帕特统治者的住所，后来在因他威猜亚侬统治时期捐赠给寺院作为佛殿。'], features: ['留意柚木结构及门楣上的孔雀雕刻', '主佛塔位于佛殿后方'], experience: ['安静参观，尊重礼佛者及宗教活动'],
        route: ['从帕波格劳路找到寺庙入口并查看现场指示', '在允许区域观察柚木佛殿和雕花门楣', '如后方开放，继续参观佛塔，再顺游契迪龙寺'], photo: ['仅在寺方允许的区域拍摄，避免打扰仪式'], visit: ['穿着得体并遵守寺方告示', '开放时间与费用可能调整，出发前请确认'], transport: ['从所在的湄卡运河入口查询步行路线，或乘车前往帕波格劳路'],
        faqs: [{q:'盼道寺离契迪龙寺近吗？',a:'两寺位于帕波格劳路相邻区域，可安排一起参观。'}, {q:'佛殿有什么特色？',a:'佛殿原是柚木王室住所，门楣有孔雀雕刻。'}, {q:'什么时候开放？',a:'泰国旅游局列示 08:00–17:00，实际开放情况请向寺方确认。'}]
      },
    },
  },
  "wat-chiang-man": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดเชียงมั่น ถนนราชภาคินัย เชียงใหม่",
  "address": "Ratchaphakhinai Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Check current admission arrangements at the temple",
    "zh": "请向寺方确认当前入场安排",
    "th": "ตรวจสอบค่าบริการกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "30–45 minutes",
    "zh": "30–45 分钟",
    "th": "30–45 นาที"
  },
  "source": "https://www.onep.go.th/oneponsite-ep3/",
  "locales": {
    "en": {
      "name": "Wat Chiang Man",
      "tagline": "Elephant-supported chedi in the Old City",
      "description": "Wat Chiang Man is an Old City temple associated with the founding of Chiang Mai. Its chedi is distinguished by elephant sculptures around its base.",
      "summary": "Wat Chiang Man is an Old City temple associated with the founding of Chiang Mai. Its chedi is distinguished by elephant sculptures around its base.",
      "managementTitle": "About Wat Chiang Man and its care",
      "management": "Wat Chiang Man is an active Buddhist temple. Ask the temple about access to buildings, photography and current arrangements; government heritage descriptions do not constitute temple operating rules.",
      "history": [
        "The Fine Arts Department describes a tradition linking the site to King Mangrai’s temporary residence while the city was being founded; the chedi has undergone later rebuilding."
      ],
      "features": [
        "Observe the elephant figures around the chedi base",
        "Compare the chedi and Lanna-style worship hall without entering restricted spaces"
      ],
      "experience": [
        "Allow time to observe quietly and respect worshippers."
      ],
      "route": [
        "Find the temple on Ratchaphakhinai Road and check signs at the entrance",
        "View the elephant-supported chedi from permitted paths",
        "Visit accessible worship halls quietly before continuing through the Old City"
      ],
      "photo": [
        "Photograph only where permitted and avoid disturbing ceremonies."
      ],
      "visit": [
        "Dress respectfully; ask the temple about current hours and fees."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check the route to Wat Chiang Man on Ratchaphakhinai Road; walk or arrange a car according to your starting point."
      ],
      "faqs": [
        {
          "q": "Why is Wat Chiang Man important?",
          "a": "The temple is associated with the founding of Chiang Mai and King Mangrai."
        },
        {
          "q": "What is distinctive about the chedi?",
          "a": "Elephant sculptures project around its base."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access may vary with worship and maintenance; follow temple notices and ask staff."
        }
      ]
    },
    "zh": {
      "name": "清曼寺",
      "tagline": "古城中的象驮佛塔",
      "description": "清曼寺位于清迈古城，与清迈建城历史相关；寺内佛塔基座周围有大象雕塑。",
      "summary": "清曼寺位于清迈古城，与清迈建城历史相关；寺内佛塔基座周围有大象雕塑。",
      "managementTitle": "关于清曼寺及其管理",
      "management": "清曼寺是仍在使用的佛教寺院。建筑开放、拍摄及参观安排请询问寺方；政府文物资料并不代表寺院开放规定。",
      "history": [
        "泰国艺术厅介绍，当地传统将寺址与孟莱王建城时的临时住所相联系；佛塔后来历经重建。"
      ],
      "features": [
        "在允许区域观察佛塔基座周围的大象造像",
        "比较佛塔与兰纳式佛殿，不进入限制区域"
      ],
      "experience": [
        "留出时间安静观察，并尊重礼佛者。"
      ],
      "route": [
        "从拉差帕金奈路找到寺院入口并查看告示",
        "沿允许通行的路径观察象驮佛塔",
        "安静参观开放的佛殿，再继续游览古城"
      ],
      "photo": [
        "仅在允许区域拍摄，避免打扰仪式。"
      ],
      "visit": [
        "穿着得体；开放时间与费用请向寺方确认。"
      ],
      "transport": [
        "从所在的湄卡运河入口查询至拉差帕金奈路清曼寺的路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "清曼寺为何重要？",
          "a": "寺院与清迈建城及孟莱王的历史相关。"
        },
        {
          "q": "佛塔有什么特色？",
          "a": "佛塔基座四周有大象雕塑。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围可能因礼佛或维护调整，请遵守告示并询问寺方。"
        }
      ]
    },
    "th": {
      "name": "วัดเชียงมั่น",
      "tagline": "เจดีย์ช้างล้อมในเมืองเก่า",
      "description": "วัดเชียงมั่นอยู่ในเมืองเก่าและเกี่ยวข้องกับการสร้างเมืองเชียงใหม่ จุดเด่นคือรูปช้างรอบฐานเจดีย์",
      "summary": "วัดเชียงมั่นอยู่ในเมืองเก่าและเกี่ยวข้องกับการสร้างเมืองเชียงใหม่ จุดเด่นคือรูปช้างรอบฐานเจดีย์",
      "managementTitle": "เกี่ยวกับวัดเชียงมั่นและการดูแล",
      "management": "วัดเชียงมั่นเป็นศาสนสถานที่ยังใช้งาน โปรดสอบถามวัดเรื่องการเข้าชมอาคาร การถ่ายภาพ และระเบียบปัจจุบัน ข้อมูลโบราณสถานของรัฐไม่ใช่กฎการเข้าชมของวัด",
      "history": [
        "กรมศิลปากรกล่าวถึงตำนานที่เชื่อมพื้นที่กับที่ประทับชั่วคราวของพญามังรายระหว่างสร้างเมือง เจดีย์ได้รับการสร้างใหม่ในสมัยต่อมา"
      ],
      "features": [
        "สังเกตรูปช้างรอบฐานเจดีย์จากทางเดินที่อนุญาต",
        "ชมความแตกต่างระหว่างเจดีย์กับวิหารแบบล้านนาโดยไม่เข้าพื้นที่หวงห้าม"
      ],
      "experience": [
        "เผื่อเวลาชมอย่างสงบและเคารพผู้มาประกอบศาสนกิจ"
      ],
      "route": [
        "หาทางเข้าวัดบนถนนราชภาคินัยและอ่านป้าย",
        "เดินตามทางที่อนุญาตเพื่อชมเจดีย์ช้างล้อม",
        "เข้าชมวิหารที่เปิดอย่างสงบก่อนเที่ยวเมืองเก่าต่อ"
      ],
      "photo": [
        "ถ่ายภาพเฉพาะบริเวณที่อนุญาตและไม่รบกวนพิธี"
      ],
      "visit": [
        "แต่งกายสุภาพ สอบถามเวลาเปิดและค่าบริการกับวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดเชียงมั่นบนถนนราชภาคินัย แล้วเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดเชียงมั่นสำคัญอย่างไร?",
          "a": "วัดเกี่ยวข้องกับการสร้างเมืองเชียงใหม่และพญามังราย"
        },
        {
          "q": "เจดีย์มีจุดเด่นอะไร?",
          "a": "มีรูปช้างประดับรอบฐานเจดีย์"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและการดูแล โปรดสอบถามวัดและปฏิบัติตามป้าย"
        }
      ]
    }
  }
},
  "wat-buppharam": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดบุพพาราม 143 ถนนท่าแพ เชียงใหม่",
  "address": "143 Tha Phae Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai 50100, Thailand",
  "fee": {
    "en": "Check current admission arrangements at the temple",
    "zh": "请向寺方确认当前入场安排",
    "th": "ตรวจสอบค่าบริการกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "30–45 minutes",
    "zh": "30–45 分钟",
    "th": "30–45 นาที"
  },
  "source": "https://worldheritagesite.onep.go.th/sitedetail/20",
  "locales": {
    "en": {
      "name": "Wat Buppharam",
      "tagline": "A historic temple on Tha Phae Road",
      "description": "Wat Buppharam is a temple at 143 Tha Phae Road in Chiang Mai. Thailand’s heritage office identifies its small worship hall among the city’s historic elements.",
      "summary": "Wat Buppharam is a temple at 143 Tha Phae Road in Chiang Mai. Thailand’s heritage office identifies its small worship hall among the city’s historic elements.",
      "managementTitle": "About Wat Buppharam and its care",
      "management": "Wat Buppharam is a Buddhist temple; the temple should be consulted about access, photography and current visitor arrangements. The heritage office identifies historic elements but is not the visitor operator.",
      "history": [
        "The government’s Chiang Mai heritage inventory identifies Wat Buppharam’s small wihan as a historic element. This temple on Tha Phae Road should not be confused with similarly named temples elsewhere."
      ],
      "features": [
        "Look for the small wihan identified in the heritage inventory",
        "Observe the temple setting along Tha Phae Road without obstructing worship"
      ],
      "experience": [
        "Allow time to observe quietly and respect worshippers."
      ],
      "route": [
        "Locate 143 Tha Phae Road and read the temple entrance notices",
        "Observe accessible temple buildings from permitted areas",
        "Continue along Tha Phae Road toward the gate or return to the canal by car"
      ],
      "photo": [
        "Photograph only where permitted and avoid disturbing ceremonies."
      ],
      "visit": [
        "Dress respectfully; ask the temple about current hours and fees."
      ],
      "transport": [
        "From the canal entrance you use, navigate to Wat Buppharam at 143 Tha Phae Road. Check the route before walking or use a car."
      ],
      "faqs": [
        {
          "q": "Which Wat Buppharam is this?",
          "a": "This is the temple at 143 Tha Phae Road in Chiang Mai, not a similarly named temple elsewhere."
        },
        {
          "q": "What historic feature is recorded?",
          "a": "Thailand’s heritage inventory identifies the small wihan."
        },
        {
          "q": "Are all halls open?",
          "a": "Access may vary; check with the temple and follow signs."
        }
      ]
    },
    "zh": {
      "name": "布帕兰寺",
      "tagline": "塔佩路上的历史寺院",
      "description": "布帕兰寺位于清迈塔佩路 143 号；泰国环境政策机构将寺内小佛殿列入城市历史要素。",
      "summary": "布帕兰寺位于清迈塔佩路 143 号；泰国环境政策机构将寺内小佛殿列入城市历史要素。",
      "managementTitle": "关于布帕兰寺及其管理",
      "management": "布帕兰寺是佛教寺院，开放范围、拍摄和参观安排请询问寺方。文物资料发布机构负责识别历史要素，并非寺院访客运营方。",
      "history": [
        "泰国政府清迈历史要素清单列出布帕兰寺的小佛殿。塔佩路这座寺院应与其他地区同名寺庙区分。"
      ],
      "features": [
        "留意历史要素清单所列的小佛殿",
        "观察寺院与塔佩路街区的关系，避免妨碍礼佛"
      ],
      "experience": [
        "留出时间安静观察，并尊重礼佛者。"
      ],
      "route": [
        "前往塔佩路 143 号并查看寺院入口告示",
        "在允许区域观察开放的寺院建筑",
        "沿塔佩路继续前往城门，或乘车返回运河"
      ],
      "photo": [
        "仅在允许区域拍摄，避免打扰仪式。"
      ],
      "visit": [
        "穿着得体；开放时间与费用请向寺方确认。"
      ],
      "transport": [
        "从所在的湄卡运河入口导航至塔佩路 143 号布帕兰寺；步行前核对路线，也可乘车。"
      ],
      "faqs": [
        {
          "q": "这是哪一座布帕兰寺？",
          "a": "这里是清迈塔佩路 143 号的寺院，不是其他地区的同名寺庙。"
        },
        {
          "q": "有什么已登记的历史建筑？",
          "a": "泰国政府历史要素清单列有寺内小佛殿。"
        },
        {
          "q": "每座佛殿都开放吗？",
          "a": "开放范围可能调整，请询问寺方并遵守告示。"
        }
      ]
    },
    "th": {
      "name": "วัดบุพพาราม",
      "tagline": "วัดประวัติศาสตร์บนถนนท่าแพ",
      "description": "วัดบุพพารามตั้งอยู่เลขที่ 143 ถนนท่าแพ เชียงใหม่ หน่วยงานมรดกของรัฐระบุวิหารเล็กของวัดเป็นองค์ประกอบประวัติศาสตร์ของเมือง",
      "summary": "วัดบุพพารามตั้งอยู่เลขที่ 143 ถนนท่าแพ เชียงใหม่ หน่วยงานมรดกของรัฐระบุวิหารเล็กของวัดเป็นองค์ประกอบประวัติศาสตร์ของเมือง",
      "managementTitle": "เกี่ยวกับวัดบุพพารามและการดูแล",
      "management": "วัดบุพพารามเป็นศาสนสถาน โปรดสอบถามวัดเรื่องพื้นที่เปิด การถ่ายภาพ และระเบียบปัจจุบัน หน่วยงานมรดกเป็นผู้ระบุคุณค่าทางประวัติศาสตร์ ไม่ใช่ผู้ดำเนินการรับผู้มาเยือนของวัด",
      "history": [
        "บัญชีองค์ประกอบประวัติศาสตร์เชียงใหม่ของหน่วยงานรัฐระบุวิหารเล็กวัดบุพพาราม ควรแยกวัดบนถนนท่าแพแห่งนี้จากวัดชื่อคล้ายกันในพื้นที่อื่น"
      ],
      "features": [
        "สังเกตวิหารเล็กที่ปรากฏในบัญชีมรดก",
        "ชมบริบทวัดริมถนนท่าแพโดยไม่รบกวนการประกอบศาสนกิจ"
      ],
      "experience": [
        "เผื่อเวลาชมอย่างสงบและเคารพผู้มาประกอบศาสนกิจ"
      ],
      "route": [
        "ไปเลขที่ 143 ถนนท่าแพและอ่านป้ายทางเข้า",
        "ชมอาคารที่เปิดจากพื้นที่ที่วัดอนุญาต",
        "เดินต่อไปทางประตูท่าแพหรือเรียกรถกลับคลอง"
      ],
      "photo": [
        "ถ่ายภาพเฉพาะบริเวณที่อนุญาตและไม่รบกวนพิธี"
      ],
      "visit": [
        "แต่งกายสุภาพ สอบถามเวลาเปิดและค่าบริการกับวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ นำทางไปวัดบุพพาราม เลขที่ 143 ถนนท่าแพ ตรวจเส้นทางเดินหรือใช้รถตามความสะดวก"
      ],
      "faqs": [
        {
          "q": "วัดบุพพารามแห่งนี้อยู่ที่ไหน?",
          "a": "อยู่เลขที่ 143 ถนนท่าแพ เชียงใหม่ ไม่ใช่วัดชื่อคล้ายกันในพื้นที่อื่น"
        },
        {
          "q": "มีอาคารประวัติศาสตร์ใดที่ระบุไว้?",
          "a": "บัญชีมรดกของรัฐระบุวิหารเล็กของวัด"
        },
        {
          "q": "เข้าชมทุกวิหารได้ไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยน โปรดสอบถามวัดและดูป้าย"
        }
      ]
    }
  }
},
  "wat-suan-dok": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดสวนดอก ถนนสุเทพ เชียงใหม่",
  "address": "139 Suthep Road, Suthep, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认入场安排",
    "th": "สอบถามค่าบริการกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "30–45 minutes",
    "zh": "30–45 分钟",
    "th": "30–45 นาที"
  },
  "source": "https://www.onep.go.th/oneponsite-ep3/",
  "locales": {
    "en": {
      "name": "Wat Suan Dok",
      "tagline": "White royal memorial chedis on Suthep Road",
      "description": "Wat Suan Dok is a living temple on Suthep Road. Its white memorial chedis hold the ashes of Chiang Mai rulers and members of the Lanna royal family.",
      "summary": "Wat Suan Dok is a living temple on Suthep Road. Its white memorial chedis hold the ashes of Chiang Mai rulers and members of the Lanna royal family.",
      "managementTitle": "About the temple and its care",
      "management": "This is an active Buddhist temple. The temple sets visitor access and photography rules; the cited government agency supplies historical information and is not the visitor operator.",
      "history": [
        "The white memorials mark a royal cemetery, while the large hall remains a place for religious activity; treat both as more than photo backdrops.",
        "The former flower-garden setting gives the temple its name. A separate large chedi is included in Thailand’s Chiang Mai heritage inventory."
      ],
      "features": [
        "Compare the white royal memorials with the temple’s principal chedi.",
        "Look across to the large worship hall and observe how the memorial and religious spaces sit together."
      ],
      "experience": [
        "Plan a quiet circuit of the memorial area and leave access clear for worshippers."
      ],
      "route": [
        "Start at the Suthep Road entrance and check the temple’s notices.",
        "Walk through permitted paths beside the white royal memorial chedis; remember these are resting places.",
        "Continue to the large worship hall if open, then leave by the signed exit."
      ],
      "photo": [
        "Photograph only where permitted and do not interrupt ceremonies."
      ],
      "visit": [
        "Dress respectfully and follow posted access rules."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check the route to this named temple; walking or a car may be suitable depending on your starting point."
      ],
      "faqs": [
        {
          "q": "How is this different from Wat Buppharam on Tha Phae Road?",
          "a": "Suan Dok is a different temple on Suthep Road, despite a similar alternative name."
        },
        {
          "q": "What are the white chedis?",
          "a": "They are memorials containing the ashes of Chiang Mai rulers and their family."
        },
        {
          "q": "Can visitors enter every building?",
          "a": "Access can change for worship or conservation; follow signs and ask the temple."
        }
      ]
    },
    "zh": {
      "name": "松德寺",
      "tagline": "素贴路上的白色王族纪念塔",
      "description": "松德寺是素贴路上仍在使用的寺院。寺内白色纪念塔安放清迈统治者和兰纳王族成员的骨灰。",
      "summary": "松德寺是素贴路上仍在使用的寺院。寺内白色纪念塔安放清迈统治者和兰纳王族成员的骨灰。",
      "managementTitle": "关于寺院及其管理",
      "management": "这里是仍在使用的佛教寺院，开放范围和拍摄规定由寺方决定；所引政府机构提供历史资料，并非访客运营方。",
      "history": [
        "白色纪念塔构成王族墓地，大型佛殿仍用于宗教活动；请将两处视为有实际意义的场所。",
        "寺名与原有花园有关。泰国清迈历史要素清单另列有寺内佛塔。"
      ],
      "features": [
        "比较白色王族纪念塔与寺院主佛塔。",
        "观察大型佛殿与纪念区域之间的空间关系。"
      ],
      "experience": [
        "安静绕行纪念区，并为礼佛者保留通道。"
      ],
      "route": [
        "从素贴路入口进入，先查看寺方告示。",
        "沿允许通行的路径观察白色王族纪念塔，尊重安息之所。",
        "如大型佛殿开放，可继续参观，再从标示出口离开。"
      ],
      "photo": [
        "仅在允许区域拍摄，不要打扰仪式。"
      ],
      "visit": [
        "穿着得体，遵守现场开放规定。"
      ],
      "transport": [
        "从所在的湄卡运河入口查询至本寺的路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "它与塔佩路的布帕兰寺是同一座吗？",
          "a": "不是。松德寺在素贴路，虽然别名相似，但两寺是不同地点。"
        },
        {
          "q": "白色佛塔是什么？",
          "a": "这些纪念塔安放清迈统治者及其家族成员的骨灰。"
        },
        {
          "q": "所有建筑都开放吗？",
          "a": "开放范围可能因礼佛或维护调整，请遵守告示并询问寺方。"
        }
      ]
    },
    "th": {
      "name": "วัดสวนดอก",
      "tagline": "กู่เจ้านายสีขาวบนถนนสุเทพ",
      "description": "วัดสวนดอกเป็นวัดที่ยังใช้งานบนถนนสุเทพ กู่สีขาวภายในบรรจุพระอัฐิเจ้าผู้ครองนครเชียงใหม่และเชื้อสายล้านนา",
      "summary": "วัดสวนดอกเป็นวัดที่ยังใช้งานบนถนนสุเทพ กู่สีขาวภายในบรรจุพระอัฐิเจ้าผู้ครองนครเชียงใหม่และเชื้อสายล้านนา",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดนี้เป็นศาสนสถานที่ยังใช้งาน วัดกำหนดพื้นที่เข้าชมและการถ่ายภาพ หน่วยงานรัฐที่อ้างอิงให้ข้อมูลประวัติศาสตร์ ไม่ใช่ผู้ดำเนินการรับผู้มาเยือน",
      "history": [
        "กู่สีขาวเป็นพื้นที่อนุสรณ์เจ้านาย ส่วนวิหารใหญ่ยังใช้ประกอบศาสนกิจ ทั้งสองบริเวณมีความหมายมากกว่าฉากถ่ายภาพ",
        "ชื่อวัดเชื่อมโยงกับสวนดอกไม้เดิม บัญชีมรดกเชียงใหม่ของรัฐยังระบุเจดีย์วัดสวนดอก"
      ],
      "features": [
        "เปรียบเทียบกู่เจ้านายสีขาวกับเจดีย์ประธาน",
        "สังเกตความสัมพันธ์ของพื้นที่อนุสรณ์กับวิหารใหญ่"
      ],
      "experience": [
        "เดินชมกู่อย่างสงบและเว้นทางให้ผู้มาประกอบศาสนกิจ"
      ],
      "route": [
        "เริ่มที่ทางเข้าถนนสุเทพและตรวจป้ายวัด",
        "เดินตามทางที่อนุญาตชมกู่เจ้านายสีขาว โดยเคารพสถานที่บรรจุพระอัฐิ",
        "หากวิหารใหญ่เปิดให้เข้าชมอย่างสงบ แล้วออกตามทางที่กำหนด"
      ],
      "photo": [
        "ถ่ายภาพเฉพาะบริเวณที่อนุญาตและไม่รบกวนพิธี"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้าย"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้ แล้วเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "เป็นวัดเดียวกับวัดบุพพารามบนถนนท่าแพไหม?",
          "a": "ไม่ใช่ วัดสวนดอกอยู่บนถนนสุเทพ แม้มีชื่อเรียกอื่นคล้ายกันแต่เป็นคนละแห่ง"
        },
        {
          "q": "กู่สีขาวคืออะไร?",
          "a": "เป็นอนุสรณ์บรรจุพระอัฐิเจ้าผู้ครองนครเชียงใหม่และพระญาติ"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีหรือการดูแล โปรดดูป้ายและสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-chet-yot": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดเจ็ดยอด ถนนซุปเปอร์ไฮเวย์ เชียงใหม่",
  "address": "90 Chiang Mai–Lampang Super Highway, Chang Phueak, Mueang Chiang Mai, Chiang Mai 50300, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认入场安排",
    "th": "สอบถามค่าบริการกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "30–45 minutes",
    "zh": "30–45 分钟",
    "th": "30–45 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-chedi-jed-yord",
  "locales": {
    "en": {
      "name": "Wat Chet Yot",
      "tagline": "Seven-spired sanctuary and stucco reliefs",
      "description": "Wat Chet Yot, also called Wat Photaram Mahawihan, stands beside the Chiang Mai–Lampang Super Highway. Its distinctive sanctuary has seven spires.",
      "summary": "Wat Chet Yot, also called Wat Photaram Mahawihan, stands beside the Chiang Mai–Lampang Super Highway. Its distinctive sanctuary has seven spires.",
      "managementTitle": "About the temple and its care",
      "management": "This is an active Buddhist temple. The temple sets visitor access and photography rules; the cited government agency supplies historical information and is not the visitor operator.",
      "history": [
        "The Fine Arts Department describes the seven-spired building and the preservation of its stucco as significant work in Lanna architectural history.",
        "The sanctuary’s design relates to the Mahabodhi temple at Bodh Gaya; the grounds are associated with a Buddhist scripture council held under King Tilokaraj."
      ],
      "features": [
        "Compare the taller central spire with the six surrounding spires.",
        "Observe the different poses of the celestial stucco figures from a respectful distance."
      ],
      "experience": [
        "Walk around the sanctuary where permitted, watching for fragile reliefs and conservation notices."
      ],
      "route": [
        "Find the entrance at the Chiang Mai–Lampang Super Highway and check the signs.",
        "View the seven-spired sanctuary from an allowed path without touching its stucco.",
        "Look for the celestial relief figures and leave time to observe their varied poses."
      ],
      "photo": [
        "Photograph only where permitted and do not interrupt ceremonies."
      ],
      "visit": [
        "Dress respectfully and follow posted access rules."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check the route to this named temple; walking or a car may be suitable depending on your starting point."
      ],
      "faqs": [
        {
          "q": "Why is it called Chet Yot?",
          "a": "The name refers to the seven spires on its sanctuary."
        },
        {
          "q": "What should visitors look for?",
          "a": "The Fine Arts Department highlights the celestial stucco reliefs around the sanctuary."
        },
        {
          "q": "Can visitors enter every building?",
          "a": "Access can change for worship or conservation; follow signs and ask the temple."
        }
      ]
    },
    "zh": {
      "name": "七塔寺",
      "tagline": "七座塔尖与灰泥浮雕",
      "description": "七塔寺又称 Wat Photaram Mahawihan，位于清迈—南邦超级公路旁；特色佛殿上有七座塔尖。",
      "summary": "七塔寺又称 Wat Photaram Mahawihan，位于清迈—南邦超级公路旁；特色佛殿上有七座塔尖。",
      "managementTitle": "关于寺院及其管理",
      "management": "这里是仍在使用的佛教寺院，开放范围和拍摄规定由寺方决定；所引政府机构提供历史资料，并非访客运营方。",
      "history": [
        "泰国艺术厅将七塔佛殿及其灰泥浮雕保护视为兰纳建筑史的重要工作。",
        "建筑设计与印度菩提伽耶的大菩提寺有关，寺院也与提洛迦王时期的经典结集相关。"
      ],
      "features": [
        "比较中央较高塔尖与周围六座塔尖。",
        "保持距离，观察天神浮雕姿态的变化。"
      ],
      "experience": [
        "在允许区域绕行佛殿，留意易损浮雕及保护告示。"
      ],
      "route": [
        "从清迈—南邦超级公路找到入口并查看告示。",
        "沿允许路线观察七塔佛殿，不触摸灰泥文物。",
        "留意天神浮雕不同的姿态，再从寺方指定路线离开。"
      ],
      "photo": [
        "仅在允许区域拍摄，不要打扰仪式。"
      ],
      "visit": [
        "穿着得体，遵守现场开放规定。"
      ],
      "transport": [
        "从所在的湄卡运河入口查询至本寺的路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "为什么叫七塔寺？",
          "a": "名称指特色佛殿上的七座塔尖。"
        },
        {
          "q": "有什么建筑细节值得看？",
          "a": "泰国艺术厅特别介绍佛殿四周的天神灰泥浮雕。"
        },
        {
          "q": "所有建筑都开放吗？",
          "a": "开放范围可能因礼佛或维护调整，请遵守告示并询问寺方。"
        }
      ]
    },
    "th": {
      "name": "วัดเจ็ดยอด",
      "tagline": "วิหารเจ็ดยอดและเทวดาปูนปั้น",
      "description": "วัดเจ็ดยอดหรือวัดโพธารามมหาวิหารอยู่ริมถนนซุปเปอร์ไฮเวย์เชียงใหม่–ลำปาง วิหารมีลักษณะเด่นเป็นยอดเจ็ดองค์",
      "summary": "วัดเจ็ดยอดหรือวัดโพธารามมหาวิหารอยู่ริมถนนซุปเปอร์ไฮเวย์เชียงใหม่–ลำปาง วิหารมีลักษณะเด่นเป็นยอดเจ็ดองค์",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดนี้เป็นศาสนสถานที่ยังใช้งาน วัดกำหนดพื้นที่เข้าชมและการถ่ายภาพ หน่วยงานรัฐที่อ้างอิงให้ข้อมูลประวัติศาสตร์ ไม่ใช่ผู้ดำเนินการรับผู้มาเยือน",
      "history": [
        "กรมศิลปากรให้ความสำคัญกับวิหารเจ็ดยอดและการอนุรักษ์ลายปูนปั้นในประวัติศาสตร์สถาปัตยกรรมล้านนา",
        "รูปแบบวิหารสัมพันธ์กับมหาวิหารโพธิพุทธคยา และวัดเกี่ยวข้องกับการสังคายนาพระไตรปิฎกสมัยพระเจ้าติโลกราช"
      ],
      "features": [
        "เปรียบเทียบยอดกลางที่สูงกับยอดบริวารทั้งหก",
        "สังเกตท่าทางต่างกันของเทวดาปูนปั้นจากระยะที่เหมาะสม"
      ],
      "experience": [
        "เดินรอบวิหารเฉพาะส่วนที่อนุญาต สังเกตป้ายอนุรักษ์และไม่สัมผัสลายปูนปั้น"
      ],
      "route": [
        "หาทางเข้าจากถนนซุปเปอร์ไฮเวย์เชียงใหม่–ลำปางและดูป้าย",
        "ชมวิหารเจ็ดยอดจากทางที่อนุญาตโดยไม่สัมผัสปูนปั้น",
        "สังเกตท่าทางที่แตกต่างของรูปเทวดา แล้วออกตามทางที่วัดกำหนด"
      ],
      "photo": [
        "ถ่ายภาพเฉพาะบริเวณที่อนุญาตและไม่รบกวนพิธี"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้าย"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้ แล้วเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "เหตุใดจึงเรียกว่าวัดเจ็ดยอด?",
          "a": "ชื่อนี้หมายถึงยอดเจ็ดองค์ของวิหาร"
        },
        {
          "q": "ควรสังเกตอะไรเป็นพิเศษ?",
          "a": "กรมศิลปากรให้ความสำคัญกับลายเทวดาปูนปั้นรอบวิหาร"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีหรือการดูแล โปรดดูป้ายและสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-saen-fang": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดแสนฝาง ถนนท่าแพ เชียงใหม่",
  "address": "Tha Phae Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认入场安排",
    "th": "สอบถามค่าบริการกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "30–45 minutes",
    "zh": "30–45 分钟",
    "th": "30–45 นาที"
  },
  "source": "https://worldheritagesite.onep.go.th/sitedetail/20",
  "locales": {
    "en": {
      "name": "Wat Saen Fang",
      "tagline": "Historic temple in the Tha Phae trading quarter",
      "description": "Wat Saen Fang is a temple on Tha Phae Road in Chang Moi. The National Archives identifies it among temples associated with the area’s historic trading communities.",
      "summary": "Wat Saen Fang is a temple on Tha Phae Road in Chang Moi. The National Archives identifies it among temples associated with the area’s historic trading communities.",
      "managementTitle": "About the temple and its care",
      "management": "This is an active Buddhist temple. The temple sets visitor access and photography rules; the cited government agency supplies historical information and is not the visitor operator.",
      "history": [
        "Thailand’s heritage inventory records both the main and subsidiary worship halls at Wat Saen Fang.",
        "The National Archives describes Tha Phae Road as a trading corridor linking the Ping River and the old city, with temples reflecting the neighbourhood’s diverse communities."
      ],
      "features": [
        "Look for the relationship between the main and smaller worship halls.",
        "Consider the temple as one stop in the historic Tha Phae trading corridor."
      ],
      "experience": [
        "Visit the open precinct quietly and compare its setting with neighbouring Wat Buppharam across the district."
      ],
      "route": [
        "Find the temple entrance on Tha Phae Road and check signs.",
        "Observe the accessible worship halls without interrupting ceremonies.",
        "Continue along Tha Phae Road to explore its historic trading-quarter context."
      ],
      "photo": [
        "Photograph only where permitted and do not interrupt ceremonies."
      ],
      "visit": [
        "Dress respectfully and follow posted access rules."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check the route to this named temple; walking or a car may be suitable depending on your starting point."
      ],
      "faqs": [
        {
          "q": "How does it relate to Tha Phae Road?",
          "a": "The National Archives includes it among temples in the historic commercial quarter."
        },
        {
          "q": "Which buildings are listed as heritage elements?",
          "a": "The government inventory identifies the main and subsidiary worship halls."
        },
        {
          "q": "Can visitors enter every building?",
          "a": "Access can change for worship or conservation; follow signs and ask the temple."
        }
      ]
    },
    "zh": {
      "name": "善方寺",
      "tagline": "塔佩路商贸街区的历史寺院",
      "description": "善方寺位于清迈长莫区塔佩路；国家档案馆将它列为这一历史商贸街区周边的寺院之一。",
      "summary": "善方寺位于清迈长莫区塔佩路；国家档案馆将它列为这一历史商贸街区周边的寺院之一。",
      "managementTitle": "关于寺院及其管理",
      "management": "这里是仍在使用的佛教寺院，开放范围和拍摄规定由寺方决定；所引政府机构提供历史资料，并非访客运营方。",
      "history": [
        "泰国历史要素清单同时列出善方寺的主佛殿与小佛殿。",
        "国家档案馆将塔佩路描述为连接平河与古城的商贸通道，沿街寺院反映了社区的多元背景。"
      ],
      "features": [
        "留意主佛殿与小佛殿的布局关系。",
        "把寺院与塔佩路历史商贸走廊联系起来观察。"
      ],
      "experience": [
        "安静参观开放区域，并与附近布帕兰寺的街区环境比较。"
      ],
      "route": [
        "从塔佩路找到寺院入口并查看告示。",
        "观察开放的佛殿，避免打扰仪式。",
        "沿塔佩路继续游览，体会历史商贸街区的背景。"
      ],
      "photo": [
        "仅在允许区域拍摄，不要打扰仪式。"
      ],
      "visit": [
        "穿着得体，遵守现场开放规定。"
      ],
      "transport": [
        "从所在的湄卡运河入口查询至本寺的路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "寺院与塔佩路有什么关系？",
          "a": "国家档案馆将其列为历史商贸街区周边寺院之一。"
        },
        {
          "q": "哪些建筑列入历史要素？",
          "a": "政府清单列有主佛殿和小佛殿。"
        },
        {
          "q": "所有建筑都开放吗？",
          "a": "开放范围可能因礼佛或维护调整，请遵守告示并询问寺方。"
        }
      ]
    },
    "th": {
      "name": "วัดแสนฝาง",
      "tagline": "วัดเก่าในย่านการค้าถนนท่าแพ",
      "description": "วัดแสนฝางอยู่บนถนนท่าแพ ตำบลช้างม่อย หอจดหมายเหตุแห่งชาติระบุวัดนี้เป็นหนึ่งในวัดย่านชุมชนการค้าเก่า",
      "summary": "วัดแสนฝางอยู่บนถนนท่าแพ ตำบลช้างม่อย หอจดหมายเหตุแห่งชาติระบุวัดนี้เป็นหนึ่งในวัดย่านชุมชนการค้าเก่า",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดนี้เป็นศาสนสถานที่ยังใช้งาน วัดกำหนดพื้นที่เข้าชมและการถ่ายภาพ หน่วยงานรัฐที่อ้างอิงให้ข้อมูลประวัติศาสตร์ ไม่ใช่ผู้ดำเนินการรับผู้มาเยือน",
      "history": [
        "บัญชีมรดกของรัฐระบุทั้งวิหารใหญ่และวิหารเล็กของวัดแสนฝาง",
        "หอจดหมายเหตุแห่งชาติอธิบายถนนท่าแพว่าเป็นเส้นทางการค้าเชื่อมแม่น้ำปิงกับเมืองเก่า โดยวัดสะท้อนชุมชนที่หลากหลาย"
      ],
      "features": [
        "สังเกตความสัมพันธ์ระหว่างวิหารใหญ่กับวิหารเล็ก",
        "มองวัดเป็นจุดหนึ่งบนเส้นทางการค้าประวัติศาสตร์ถนนท่าแพ"
      ],
      "experience": [
        "ชมพื้นที่เปิดอย่างสงบและเปรียบเทียบบริบทย่านกับวัดบุพพารามใกล้เคียง"
      ],
      "route": [
        "หาทางเข้าวัดบนถนนท่าแพและดูป้าย",
        "ชมวิหารที่เปิดโดยไม่รบกวนพิธี",
        "เดินต่อไปตามถนนท่าแพเพื่อชมบริบทของย่านการค้าเก่า"
      ],
      "photo": [
        "ถ่ายภาพเฉพาะบริเวณที่อนุญาตและไม่รบกวนพิธี"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้าย"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้ แล้วเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดเกี่ยวข้องกับถนนท่าแพอย่างไร?",
          "a": "หอจดหมายเหตุแห่งชาติระบุวัดนี้อยู่ในย่านชุมชนการค้าเก่า"
        },
        {
          "q": "อาคารใดอยู่ในบัญชีมรดก?",
          "a": "บัญชีของรัฐระบุวิหารใหญ่และวิหารเล็ก"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีหรือการดูแล โปรดดูป้ายและสอบถามวัด"
        }
      ]
    }
  }
},
  "lanna-traditional-house-museum": {
  "image": "",
  "imageSource": "",
  "mapQuery": "พิพิธภัณฑ์เรือนโบราณล้านนา มหาวิทยาลัยเชียงใหม่ 18.79216 98.96177",
  "address": "Center for the Promotion of Art, Culture and Creative Lanna, Chiang Mai University, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Adult 100 baht; eligible groups exempt — confirm with museum",
    "zh": "成人 100 泰铢；指定群体豁免，请向馆方确认",
    "th": "บุคคลทั่วไป 100 บาท กลุ่มที่กำหนดยกเว้น โปรดตรวจสอบกับพิพิธภัณฑ์"
  },
  "hours": {
    "en": "Tue–Sun 08:30–16:30; closed Mondays and public holidays — confirm",
    "zh": "周二至周日 08:30–16:30；周一及公众假期关闭，请确认",
    "th": "อังคาร–อาทิตย์ 08:30–16:30 ปิดจันทร์และวันหยุดราชการ โปรดตรวจสอบ"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://accl.cmu.ac.th/EN/Museum/contactmap",
  "locales": {
    "en": {
      "name": "Lanna Traditional House Museum",
      "tagline": "Historic northern Thai houses at Chiang Mai University",
      "summary": "The Lanna Traditional House Museum brings traditional northern Thai houses together at Chiang Mai University’s cultural centre. Visitors can learn how domestic architecture relates to Lanna ways of life.",
      "management": "Chiang Mai University’s Center for the Promotion of Art, Culture and Creative Lanna operates the museum. The museum publishes its own access and fee information; check with its staff before travel.",
      "history": [
        "The university collects and conserves traditional Lanna houses as a learning resource about architecture, community life and cultural heritage.",
        "The museum presents more than one house, allowing visitors to compare materials, raised floors and domestic layouts rather than treating the collection as one residence."
      ],
      "features": [
        "Look for differences in construction and elevated living spaces among the houses.",
        "Use the museum’s interpretation to connect architectural details with daily life."
      ],
      "experience": [
        "Allow time to move between the houses and read their individual information.",
        "Check the staff’s instructions before entering any raised house or taking photographs."
      ],
      "route": [
        "Reach the Chiang Mai University cultural centre and confirm admission at the museum entrance.",
        "Follow the open route among the houses, comparing their forms and construction.",
        "Read the interpretation at individual houses and return to the entrance before closing."
      ],
      "photo": [
        "Photograph from permitted paths and ask staff before shooting indoors."
      ],
      "visit": [
        "The museum lists Tuesday–Sunday 08:30–16:30, closing Mondays and public holidays; confirm before departure.",
        "The published general adult fee is 100 baht; exemptions apply to listed groups with evidence."
      ],
      "transport": [
        "Navigate from your actual Mae Kha Canal entrance to the CMU Lanna Traditional House Museum; the university’s map identifies the museum grounds separately from its general postal address."
      ],
      "faqs": [
        {
          "q": "Who operates the museum?",
          "a": "It is operated by Chiang Mai University’s cultural centre."
        },
        {
          "q": "When is it open?",
          "a": "The museum lists Tuesday–Sunday 08:30–16:30, closed Mondays and public holidays; verify current hours."
        },
        {
          "q": "How much is admission?",
          "a": "The museum lists 100 baht for adults, with exemptions for specified groups; check current eligibility with staff."
        }
      ],
      "description": "The Lanna Traditional House Museum brings traditional northern Thai houses together at Chiang Mai University’s cultural centre. Visitors can learn how domestic architecture relates to Lanna ways of life.",
      "managementTitle": "About the museum and its management"
    },
    "zh": {
      "name": "兰纳传统民居博物馆",
      "tagline": "清迈大学保存的泰北传统住宅",
      "summary": "兰纳传统民居博物馆位于清迈大学文化中心，集中保存泰北传统住宅，让参观者了解民居建筑与兰纳生活方式的关系。",
      "management": "博物馆由清迈大学艺术文化与兰纳创意促进中心运营。开放及费用由馆方公布，出发前请向馆方确认。",
      "history": [
        "大学收集和保护传统兰纳住宅，将建筑、社区生活与文化遗产作为学习资源。",
        "馆内展示不止一栋住宅，适合比较建筑材料、架高地板与居住空间布局。"
      ],
      "features": [
        "比较不同民居的结构与架高生活空间。",
        "结合馆方解说，理解建筑细节与日常生活的联系。"
      ],
      "experience": [
        "预留时间在不同民居之间移动并阅读各栋介绍。",
        "进入架高住宅或在室内拍照前，先确认工作人员的规定。"
      ],
      "route": [
        "到达清迈大学文化中心，在博物馆入口确认入场安排。",
        "按开放路线参观民居，比较房屋形式与结构。",
        "阅读各栋解说，并在闭馆前返回入口。"
      ],
      "photo": [
        "在允许的步道拍摄，室内拍照请先询问工作人员。"
      ],
      "visit": [
        "馆方列示周二至周日 08:30–16:30，周一及公众假期关闭；出发前请核实。",
        "馆方列示普通成人票 100 泰铢；指定群体出示证明可获豁免。"
      ],
      "transport": [
        "从所在湄卡运河入口导航至清迈大学兰纳传统民居博物馆；大学地图可区分馆区与大学一般邮寄地址。"
      ],
      "faqs": [
        {
          "q": "谁运营这座博物馆？",
          "a": "由清迈大学文化中心运营。"
        },
        {
          "q": "什么时候开放？",
          "a": "馆方列示周二至周日 08:30–16:30，周一及公众假期关闭；请核实最新安排。"
        },
        {
          "q": "门票是多少？",
          "a": "馆方列示成人 100 泰铢；指定群体可获豁免，资格请向馆方确认。"
        }
      ],
      "description": "兰纳传统民居博物馆位于清迈大学文化中心，集中保存泰北传统住宅，让参观者了解民居建筑与兰纳生活方式的关系。",
      "managementTitle": "关于博物馆及其管理"
    },
    "th": {
      "name": "พิพิธภัณฑ์เรือนโบราณล้านนา มช.",
      "tagline": "เรือนพื้นถิ่นภาคเหนือที่มหาวิทยาลัยเชียงใหม่",
      "summary": "พิพิธภัณฑ์เรือนโบราณล้านนารวบรวมเรือนพื้นถิ่นภาคเหนือไว้ที่ศูนย์วัฒนธรรมของมหาวิทยาลัยเชียงใหม่ เพื่อเรียนรู้ความสัมพันธ์ระหว่างสถาปัตยกรรมกับวิถีชีวิตล้านนา",
      "management": "สำนักส่งเสริมศิลปวัฒนธรรมและล้านนาสร้างสรรค์ มหาวิทยาลัยเชียงใหม่ ดำเนินงานพิพิธภัณฑ์ โดยเผยแพร่ข้อมูลเวลาและค่าบริการเอง โปรดตรวจสอบกับเจ้าหน้าที่ก่อนเดินทาง",
      "history": [
        "มหาวิทยาลัยรวบรวมและอนุรักษ์เรือนล้านนาเป็นแหล่งเรียนรู้สถาปัตยกรรม ชีวิตชุมชน และมรดกวัฒนธรรม",
        "พิพิธภัณฑ์จัดแสดงเรือนมากกว่าหนึ่งหลัง จึงเปรียบเทียบวัสดุ พื้นยกสูง และผังการอยู่อาศัยได้"
      ],
      "features": [
        "เปรียบเทียบโครงสร้างและพื้นที่อยู่อาศัยยกสูงของเรือนแต่ละหลัง",
        "อ่านคำอธิบายเพื่อเชื่อมรายละเอียดอาคารกับชีวิตประจำวัน"
      ],
      "experience": [
        "เผื่อเวลาเดินระหว่างเรือนและอ่านข้อมูลแต่ละหลัง",
        "สอบถามเจ้าหน้าที่ก่อนขึ้นเรือนหรือถ่ายภาพภายใน"
      ],
      "route": [
        "ไปศูนย์วัฒนธรรมมหาวิทยาลัยเชียงใหม่และตรวจการเข้าชมที่ทางเข้าพิพิธภัณฑ์",
        "เดินตามเส้นทางที่เปิดระหว่างเรือน เปรียบเทียบรูปทรงและโครงสร้าง",
        "อ่านคำอธิบายของแต่ละหลังและกลับทางเข้าก่อนเวลาปิด"
      ],
      "photo": [
        "ถ่ายจากทางเดินที่อนุญาต และสอบถามเจ้าหน้าที่ก่อนถ่ายภายใน"
      ],
      "visit": [
        "พิพิธภัณฑ์ระบุเปิดอังคาร–อาทิตย์ 08:30–16:30 ปิดวันจันทร์และวันหยุดราชการ โปรดตรวจสอบก่อนเดินทาง",
        "ค่าเข้าชมบุคคลทั่วไปที่ระบุคือ 100 บาท กลุ่มที่กำหนดได้รับยกเว้นเมื่อแสดงหลักฐาน"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ นำทางไปพิพิธภัณฑ์เรือนโบราณล้านนา มช. โดยใช้แผนที่พิพิธภัณฑ์แยกจากที่อยู่ไปรษณีย์ทั่วไปของมหาวิทยาลัย"
      ],
      "faqs": [
        {
          "q": "ใครดำเนินงานพิพิธภัณฑ์?",
          "a": "สำนักส่งเสริมศิลปวัฒนธรรมฯ มหาวิทยาลัยเชียงใหม่ดำเนินงาน"
        },
        {
          "q": "เปิดเวลาใด?",
          "a": "พิพิธภัณฑ์ระบุอังคาร–อาทิตย์ 08:30–16:30 ปิดจันทร์และวันหยุดราชการ โปรดตรวจสอบล่าสุด"
        },
        {
          "q": "ค่าเข้าชมเท่าไร?",
          "a": "ระบุบุคคลทั่วไป 100 บาท กลุ่มที่กำหนดได้รับยกเว้น โปรดสอบถามสิทธิจากเจ้าหน้าที่"
        }
      ],
      "description": "พิพิธภัณฑ์เรือนโบราณล้านนารวบรวมเรือนพื้นถิ่นภาคเหนือไว้ที่ศูนย์วัฒนธรรมของมหาวิทยาลัยเชียงใหม่ เพื่อเรียนรู้ความสัมพันธ์ระหว่างสถาปัตยกรรมกับวิถีชีวิตล้านนา",
      "managementTitle": "เกี่ยวกับพิพิธภัณฑ์และการดูแล"
    }
  }
},
  "chiang-mai-national-museum": {
  "image": "",
  "imageSource": "",
  "mapQuery": "พิพิธภัณฑสถานแห่งชาติ เชียงใหม่ ถนนซุปเปอร์ไฮเวย์ เชียงใหม่ ลำปาง",
  "address": "Chiang Mai–Lampang Super Highway, Chang Phueak, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission with the museum",
    "zh": "请向博物馆确认当前票价",
    "th": "ตรวจสอบค่าเข้าชมกับพิพิธภัณฑ์"
  },
  "hours": {
    "en": "Exhibition building Wed–Sun 09:00–16:00; confirm closures",
    "zh": "展馆周三至周日 09:00–16:00；请确认休馆安排",
    "th": "อาคารจัดแสดงพุธ–อาทิตย์ 09:00–16:00 โปรดตรวจวันปิด"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://www.finearts.go.th/chiangmaimuseum/contact",
  "locales": {
    "en": {
      "name": "Chiang Mai National Museum",
      "tagline": "Northern Thai heritage on the Super Highway",
      "description": "Chiang Mai National Museum presents archaeological and art objects from upper northern Thailand. Its two-storey building has northern-style kalae gable finials.",
      "summary": "Chiang Mai National Museum presents archaeological and art objects from upper northern Thailand. Its two-storey building has northern-style kalae gable finials.",
      "managementTitle": "About the museum and its management",
      "management": "The Fine Arts Department operates the museum through its seventh regional office. Its own visitor notice distinguishes exhibition-building hours from office hours.",
      "history": [
        "The museum was established beginning in 1969 and officially opened on 6 February 1973. Its collections were assembled from eight upper northern provinces and later archaeological work."
      ],
      "features": [
        "Compare the building’s northern-style gable finials with the objects inside.",
        "Check labels for the provenance of objects from different northern provinces."
      ],
      "experience": [
        "Allow time for object labels; ask staff before taking photographs."
      ],
      "route": [
        "Find the entrance on the Chiang Mai–Lampang Super Highway and check admission.",
        "Explore the open exhibitions, allowing time for labels and object context.",
        "Finish by comparing the regional collection with the architecture of nearby Wat Chet Yot."
      ],
      "photo": [
        "Allow time for object labels; ask staff before taking photographs."
      ],
      "visit": [
        "Allow time for object labels; ask staff before taking photographs."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, navigate to Chiang Mai National Museum on the Chiang Mai–Lampang Super Highway; a car may be more convenient."
      ],
      "faqs": [
        {
          "q": "Who runs the museum?",
          "a": "Thailand’s Fine Arts Department operates it through its Chiang Mai regional office."
        },
        {
          "q": "When are exhibition galleries open?",
          "a": "The museum lists Wednesday–Sunday 09:00–16:00; confirm closures before travelling."
        },
        {
          "q": "What does the museum collect?",
          "a": "Archaeological and art objects from upper northern Thailand."
        }
      ]
    },
    "zh": {
      "name": "清迈国立博物馆",
      "tagline": "超级公路旁的泰北文化遗产",
      "description": "清迈国立博物馆展示泰国北部的考古及艺术文物；两层展馆的山墙饰有泰北传统叉角。",
      "summary": "清迈国立博物馆展示泰国北部的考古及艺术文物；两层展馆的山墙饰有泰北传统叉角。",
      "managementTitle": "关于博物馆及其管理",
      "management": "博物馆由泰国艺术厅第七地区办公室管理。馆方将展馆开放时间与办公室办公时间分开列示。",
      "history": [
        "博物馆从 1969 年开始筹建，于 1973 年 2 月 6 日正式开放；馆藏来自泰北八府及后续考古工作。"
      ],
      "features": [
        "比较展馆的泰北叉角装饰与馆内文物。",
        "留意展品标签所述的泰北各府来源。"
      ],
      "experience": [
        "留出时间阅读展签，拍照前请询问工作人员。"
      ],
      "route": [
        "从清迈—南邦超级公路找到入口并确认入场安排。",
        "参观开放展厅，留出时间阅读文物背景。",
        "结束后可结合附近七塔寺的建筑安排参观。"
      ],
      "photo": [
        "留出时间阅读展签，拍照前请询问工作人员。"
      ],
      "visit": [
        "留出时间阅读展签，拍照前请询问工作人员。"
      ],
      "transport": [
        "从所在湄卡运河入口导航至清迈—南邦超级公路上的清迈国立博物馆，可按实际路况选择乘车。"
      ],
      "faqs": [
        {
          "q": "博物馆由谁管理？",
          "a": "由泰国艺术厅清迈地区办公室管理。"
        },
        {
          "q": "展馆什么时候开放？",
          "a": "馆方列示周三至周日 09:00–16:00，出发前请确认休馆安排。"
        },
        {
          "q": "馆藏以什么为主？",
          "a": "以泰北地区的考古和艺术文物为主。"
        }
      ]
    },
    "th": {
      "name": "พิพิธภัณฑสถานแห่งชาติ เชียงใหม่",
      "tagline": "มรดกภาคเหนือบนถนนซุปเปอร์ไฮเวย์",
      "description": "พิพิธภัณฑสถานแห่งชาติ เชียงใหม่ จัดแสดงโบราณวัตถุและศิลปวัตถุจากภาคเหนือตอนบน อาคารสองชั้นประดับกาแลแบบพื้นถิ่นเหนือ",
      "summary": "พิพิธภัณฑสถานแห่งชาติ เชียงใหม่ จัดแสดงโบราณวัตถุและศิลปวัตถุจากภาคเหนือตอนบน อาคารสองชั้นประดับกาแลแบบพื้นถิ่นเหนือ",
      "managementTitle": "เกี่ยวกับพิพิธภัณฑ์และการดูแล",
      "management": "กรมศิลปากรดูแลพิพิธภัณฑ์ผ่านสำนักศิลปากรที่ 7 เชียงใหม่ โดยประกาศเวลาอาคารจัดแสดงแยกจากเวลาสำนักงาน",
      "history": [
        "เริ่มจัดตั้งในปี 2512 และเปิดอย่างเป็นทางการเมื่อ 6 กุมภาพันธ์ 2516 รวบรวมวัตถุจากแปดจังหวัดภาคเหนือตอนบนและงานโบราณคดีภายหลัง"
      ],
      "features": [
        "เปรียบเทียบกาแลบนหน้าจั่วอาคารกับวัตถุที่จัดแสดง",
        "อ่านป้ายเพื่อดูที่มาของวัตถุจากจังหวัดต่าง ๆ ในภาคเหนือ"
      ],
      "experience": [
        "เผื่อเวลาอ่านป้ายวัตถุ และสอบถามเจ้าหน้าที่ก่อนถ่ายภาพ"
      ],
      "route": [
        "หาทางเข้าบนถนนซุปเปอร์ไฮเวย์เชียงใหม่–ลำปางและตรวจค่าเข้าชม",
        "ชมอาคารจัดแสดงที่เปิด โดยเผื่อเวลาอ่านป้ายและบริบทของวัตถุ",
        "หลังชมพิพิธภัณฑ์อาจต่อไปดูสถาปัตยกรรมวัดเจ็ดยอดใกล้เคียง"
      ],
      "photo": [
        "เผื่อเวลาอ่านป้ายวัตถุ และสอบถามเจ้าหน้าที่ก่อนถ่ายภาพ"
      ],
      "visit": [
        "เผื่อเวลาอ่านป้ายวัตถุ และสอบถามเจ้าหน้าที่ก่อนถ่ายภาพ"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ นำทางไปพิพิธภัณฑสถานแห่งชาติ เชียงใหม่ บนถนนซุปเปอร์ไฮเวย์ โดยพิจารณาการเดินทางด้วยรถ"
      ],
      "faqs": [
        {
          "q": "ใครดูแลพิพิธภัณฑ์?",
          "a": "กรมศิลปากรดูแลผ่านสำนักศิลปากรที่ 7 เชียงใหม่"
        },
        {
          "q": "อาคารจัดแสดงเปิดเมื่อใด?",
          "a": "พิพิธภัณฑ์ระบุพุธ–อาทิตย์ 09:00–16:00 โปรดตรวจวันปิดก่อนเดินทาง"
        },
        {
          "q": "จัดแสดงอะไร?",
          "a": "โบราณวัตถุและศิลปวัตถุจากภาคเหนือตอนบน"
        }
      ]
    }
  }
},
  ...moreNearbyDetails,
};
