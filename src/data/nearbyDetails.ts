import { moreNearbyDetails } from './moreNearbyDetails';
export const nearbySlugs = ['chiang-mai-gate', 'wat-sri-suphan', 'wua-lai', 'tha-phae', 'night-bazaar', 'warorot-market', 'wat-chedi-luang', 'wat-phra-singh', 'wat-phan-tao', 'wat-chiang-man', 'wat-buppharam', 'wat-suan-dok', 'wat-chet-yot', 'wat-saen-fang', 'lanna-traditional-house-museum', 'chiang-mai-national-museum', 'wat-umong-suan-phutthatham', 'wat-lok-molee', 'wat-ketkaram', 'wat-phra-that-doi-suthep', 'chiang-mai-treasury-museum', 'wat-pha-lat', 'wat-chiang-yuen', 'wat-phra-that-doi-kham', 'chiang-mai-cultural-centre', 'lanna-folklife-centre', 'wat-mueng-nguen-kong', 'wat-chang-khong', 'jing-jai-market', 'wat-buak-krok-luang', 'wat-puak-hong', 'wat-pa-pao', 'ban-khang-wat', 'royal-park-rajapruek', 'wat-inthrawat-ton-kwen', 'chiang-mai-zoo', 'huay-tung-tao-reservoir', 'maiiam-contemporary-art-museum'] as const;
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
  source: string; additionalSources?: string[]; locales: Record<NearbyLang,Locale>;
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
  "wat-umong-suan-phutthatham": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดอุโมงค์ สวนพุทธธรรม สุเทพ เชียงใหม่",
  "address": "135 Moo 10, Suthep, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-umong/",
  "locales": {
    "en": {
      "name": "Wat Umong Suan Phutthatham",
      "tagline": "Forest monastery and historic tunnels",
      "description": "Wat Umong Suan Phutthatham lies in Suthep at the foot of Doi Suthep. Its wooded grounds contain a chedi above historic tunnels.",
      "summary": "Wat Umong Suan Phutthatham lies in Suthep at the foot of Doi Suthep. Its wooded grounds contain a chedi above historic tunnels.",
      "managementTitle": "About the temple and its care",
      "management": "The Fine Arts Department records cracks to the tunnels after the 2025 earthquake and announced conservation work. Ask the temple which areas are currently safe and open.",
      "history": [
        "The site is associated with meditation and later development as Suan Phutthatham. It is distinct from Wat Umong Maha Thera Chan in the Old City."
      ],
      "features": [
        "Observe the chedi and wooded grounds; enter the tunnels only if the temple has opened them."
      ],
      "experience": [
        "Observe the chedi and wooded grounds; enter the tunnels only if the temple has opened them."
      ],
      "route": [
        "Find the Suthep entrance and check the current conservation notices.",
        "Follow open paths to the chedi and permitted tunnel entrance.",
        "Continue through the grounds quietly and return by the signed route."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Is this the Old City Wat Umong?",
          "a": "No. Suan Phutthatham is the forest temple in Suthep; the Old City temple is a different site."
        },
        {
          "q": "Are the tunnels always open?",
          "a": "Access may change for conservation; check current temple instructions."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "乌蒙寺森林禅修园",
      "tagline": "森林寺院与历史隧道",
      "description": "乌蒙寺森林禅修园位于素贴山麓的素贴区，林木环绕的寺地内有佛塔及其下方的历史隧道。",
      "summary": "乌蒙寺森林禅修园位于素贴山麓的素贴区，林木环绕的寺地内有佛塔及其下方的历史隧道。",
      "managementTitle": "关于寺院及其管理",
      "management": "泰国艺术厅记录了 2025 年地震后隧道出现裂缝并公布修复计划；请向寺方确认当前安全开放范围。",
      "history": [
        "该地与禅修传统及后来的佛法园发展有关；它不同于古城内的同名乌蒙寺。"
      ],
      "features": [
        "观察佛塔与林地，仅在寺方开放时进入隧道。"
      ],
      "experience": [
        "观察佛塔与林地，仅在寺方开放时进入隧道。"
      ],
      "route": [
        "找到素贴区入口并查看当前修复告示。",
        "沿开放路线前往佛塔与允许进入的隧道入口。",
        "安静游览寺地，再按指示路线返回。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "这是古城里的乌蒙寺吗？",
          "a": "不是。森林禅修园位于素贴区，古城内的是另一座寺院。"
        },
        {
          "q": "隧道一直开放吗？",
          "a": "开放范围可能因保护工程调整，请确认寺方当前指示。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดอุโมงค์ สวนพุทธธรรม",
      "tagline": "วัดป่าและอุโมงค์ประวัติศาสตร์",
      "description": "วัดอุโมงค์ สวนพุทธธรรม ตั้งอยู่ตำบลสุเทพเชิงดอยสุเทพ มีเจดีย์และอุโมงค์เก่าท่ามกลางบริเวณร่มไม้",
      "summary": "วัดอุโมงค์ สวนพุทธธรรม ตั้งอยู่ตำบลสุเทพเชิงดอยสุเทพ มีเจดีย์และอุโมงค์เก่าท่ามกลางบริเวณร่มไม้",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "กรมศิลปากรบันทึกรอยร้าวของอุโมงค์หลังแผ่นดินไหวปี 2568 และประกาศแผนอนุรักษ์ โปรดสอบถามวัดว่าพื้นที่ใดปลอดภัยและเปิดอยู่",
      "history": [
        "สถานที่เกี่ยวข้องกับการปฏิบัติธรรมและการพัฒนาเป็นสวนพุทธธรรม ไม่ใช่วัดอุโมงค์มหาเถรจันทร์ในเมืองเก่า"
      ],
      "features": [
        "ชมเจดีย์และบริเวณป่า เข้าอุโมงค์เฉพาะเมื่อวัดเปิดให้เข้าชม"
      ],
      "experience": [
        "ชมเจดีย์และบริเวณป่า เข้าอุโมงค์เฉพาะเมื่อวัดเปิดให้เข้าชม"
      ],
      "route": [
        "หาทางเข้าตำบลสุเทพและตรวจป้ายอนุรักษ์ปัจจุบัน",
        "เดินตามเส้นทางที่เปิดไปยังเจดีย์และทางเข้าอุโมงค์ที่อนุญาต",
        "ชมบริเวณวัดอย่างสงบและกลับตามทางที่กำหนด"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "เป็นวัดอุโมงค์ในเมืองเก่าหรือไม่?",
          "a": "ไม่ใช่ สวนพุทธธรรมอยู่สุเทพ ส่วนวัดในเมืองเก่าเป็นคนละแห่ง"
        },
        {
          "q": "อุโมงค์เปิดตลอดหรือไม่?",
          "a": "พื้นที่อาจเปลี่ยนตามงานอนุรักษ์ โปรดตรวจคำแนะนำปัจจุบันของวัด"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  },
  "additionalSources": [
    "https://www.finearts.go.th/promotion/view/56279--%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93--%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%AB%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A7"
  ]
},
  "wat-lok-molee": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดโลกโมฬี 229 ถนนมณีนพรัตน์ เชียงใหม่",
  "address": "229 Manee Nopparat Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-lokmolee/",
  "locales": {
    "en": {
      "name": "Wat Lok Molee",
      "tagline": "A Lanna temple outside the north-west wall",
      "description": "Wat Lok Molee stands on Manee Nopparat Road outside the north-western Old City wall. Its historic brick chedi and teak worship hall offer contrasting materials to observe.",
      "summary": "Wat Lok Molee stands on Manee Nopparat Road outside the north-western Old City wall. Its historic brick chedi and teak worship hall offer contrasting materials to observe.",
      "managementTitle": "About the temple and its care",
      "management": "The National Library of Chiang Mai describes royal patronage and a later teak hall; the temple should be consulted about access and photography.",
      "history": [
        "The temple’s exact foundation date is uncertain. The National Library records a major chedi built in 1528 and later changes to the complex."
      ],
      "features": [
        "Compare the brick chedi with the later teak worship hall without touching the historic surfaces."
      ],
      "experience": [
        "Compare the brick chedi with the later teak worship hall without touching the historic surfaces."
      ],
      "route": [
        "Reach the entrance on Manee Nopparat Road and read the posted rules.",
        "Observe the chedi and the hall from permitted areas.",
        "Return to the moat using a safe crossing."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Where is the temple?",
          "a": "It is outside the north-west city wall on Manee Nopparat Road."
        },
        {
          "q": "What should I compare?",
          "a": "The brick chedi and later teak hall show different materials and periods."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "洛摩利寺",
      "tagline": "古城西北城墙外的兰纳寺院",
      "description": "洛摩利寺位于古城西北城墙外的玛尼诺帕拉特路，砖砌佛塔与柚木佛殿形成鲜明对照。",
      "summary": "洛摩利寺位于古城西北城墙外的玛尼诺帕拉特路，砖砌佛塔与柚木佛殿形成鲜明对照。",
      "managementTitle": "关于寺院及其管理",
      "management": "清迈国家图书馆介绍寺院的王室供养背景及后建柚木佛殿；开放和拍摄规定请向寺方确认。",
      "history": [
        "寺院确切创建时间不详。国家图书馆记载主要佛塔建于 1528 年，寺院后来继续演变。"
      ],
      "features": [
        "比较砖砌佛塔与后建柚木佛殿，不触摸历史表面。"
      ],
      "experience": [
        "比较砖砌佛塔与后建柚木佛殿，不触摸历史表面。"
      ],
      "route": [
        "从玛尼诺帕拉特路进入并查看现场规定。",
        "在允许区域观察佛塔与佛殿。",
        "使用安全过街设施返回护城河一侧。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "寺院在哪里？",
          "a": "位于古城西北城墙外的玛尼诺帕拉特路。"
        },
        {
          "q": "有什么值得比较？",
          "a": "砖砌佛塔与后建柚木佛殿体现不同材料和时期。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดโลกโมฬี",
      "tagline": "วัดล้านนานอกกำแพงเมืองด้านตะวันตกเฉียงเหนือ",
      "description": "วัดโลกโมฬีอยู่บนถนนมณีนพรัตน์นอกกำแพงเมืองด้านตะวันตกเฉียงเหนือ มีเจดีย์อิฐเก่าและวิหารไม้สักที่ให้สังเกตวัสดุต่างยุค",
      "summary": "วัดโลกโมฬีอยู่บนถนนมณีนพรัตน์นอกกำแพงเมืองด้านตะวันตกเฉียงเหนือ มีเจดีย์อิฐเก่าและวิหารไม้สักที่ให้สังเกตวัสดุต่างยุค",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "หอสมุดแห่งชาติเชียงใหม่กล่าวถึงการอุปถัมภ์จากราชวงศ์และวิหารไม้สักที่สร้างภายหลัง โปรดสอบถามวัดเรื่องการเข้าชมและถ่ายภาพ",
      "history": [
        "ไม่ปรากฏปีสร้างวัดแน่ชัด หอสมุดแห่งชาติบันทึกเจดีย์สำคัญสร้างในปี 2071 และการเปลี่ยนแปลงในสมัยต่อมา"
      ],
      "features": [
        "เปรียบเทียบเจดีย์อิฐกับวิหารไม้สักที่สร้างภายหลังโดยไม่สัมผัสโบราณสถาน"
      ],
      "experience": [
        "เปรียบเทียบเจดีย์อิฐกับวิหารไม้สักที่สร้างภายหลังโดยไม่สัมผัสโบราณสถาน"
      ],
      "route": [
        "มาทางเข้าบนถนนมณีนพรัตน์และอ่านป้าย",
        "ชมเจดีย์และวิหารจากพื้นที่ที่อนุญาต",
        "ใช้ทางข้ามที่ปลอดภัยกลับไปฝั่งคูเมือง"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดอยู่ที่ไหน?",
          "a": "อยู่นอกกำแพงเมืองด้านตะวันตกเฉียงเหนือบนถนนมณีนพรัตน์"
        },
        {
          "q": "มีสิ่งใดให้เปรียบเทียบ?",
          "a": "เจดีย์อิฐกับวิหารไม้สักภายหลังแสดงวัสดุและช่วงเวลาต่างกัน"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-ketkaram": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดเกตการาม ถนนเจริญราษฎร์ เชียงใหม่",
  "address": "Charoen Rat Road, Wat Ket, Mueang Chiang Mai, Chiang Mai 50000, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-ket-community",
  "locales": {
    "en": {
      "name": "Wat Ketkaram",
      "tagline": "Temple and community history east of the Ping",
      "description": "Wat Ketkaram stands in the historic Wat Ket community on the eastern bank of the Ping River. A museum within the temple grounds preserves objects connected with the community and temple.",
      "summary": "Wat Ketkaram stands in the historic Wat Ket community on the eastern bank of the Ping River. A museum within the temple grounds preserves objects connected with the community and temple.",
      "managementTitle": "About the temple and its care",
      "management": "The temple and its community museum have their own caretakers. Confirm the museum’s opening and photography rules locally; the Tourism Authority of Thailand supplies visitor information.",
      "history": [
        "Before rail transport, Wat Ket was an important river landing. The museum collection includes carved architectural elements and everyday objects that help explain the district’s trading history."
      ],
      "features": [
        "Look at the temple setting and, if open, the museum’s architectural fragments and household objects."
      ],
      "experience": [
        "Look at the temple setting and, if open, the museum’s architectural fragments and household objects."
      ],
      "route": [
        "Find Wat Ketkaram on Charoen Rat Road on the east bank.",
        "Visit the temple precinct respectfully and ask whether its museum is open.",
        "Continue along the public riverfront streets without entering private premises."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Where is Wat Ketkaram?",
          "a": "It is on the eastern bank of the Ping in the Wat Ket community."
        },
        {
          "q": "Is the museum a separate journey?",
          "a": "The community museum is within the temple area; ask locally about current access."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "吉德卡兰寺",
      "tagline": "平河东岸的寺院与社区历史",
      "description": "吉德卡兰寺位于平河东岸的历史性 Wat Ket 社区。寺院内的社区博物馆保存与寺院和街区有关的物件。",
      "summary": "吉德卡兰寺位于平河东岸的历史性 Wat Ket 社区。寺院内的社区博物馆保存与寺院和街区有关的物件。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺院及社区博物馆分别有现场管理者，博物馆开放与拍摄规定请现场确认；泰国旅游局提供访客资料。",
      "history": [
        "铁路出现前，Wat Ket 曾是重要的河运码头。馆藏包括建筑木雕与日常器物，帮助理解街区的贸易历史。"
      ],
      "features": [
        "观察寺院环境；如博物馆开放，可留意建筑构件与生活器物。"
      ],
      "experience": [
        "观察寺院环境；如博物馆开放，可留意建筑构件与生活器物。"
      ],
      "route": [
        "在平河东岸的 Charoen Rat 路找到寺院。",
        "尊重礼佛者，并询问寺内博物馆是否开放。",
        "沿公共街道继续游览河岸，不进入私人场所。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "寺院在哪里？",
          "a": "位于平河东岸的 Wat Ket 社区。"
        },
        {
          "q": "博物馆需要另去别处吗？",
          "a": "社区博物馆位于寺院范围内，当前开放情况请现场确认。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดเกตการาม",
      "tagline": "วัดและประวัติชุมชนฝั่งตะวันออกแม่น้ำปิง",
      "description": "วัดเกตการามอยู่ในชุมชนวัดเกตเก่าฝั่งตะวันออกของแม่น้ำปิง ภายในวัดมีพิพิธภัณฑ์เก็บสิ่งของที่เกี่ยวข้องกับวัดและชุมชน",
      "summary": "วัดเกตการามอยู่ในชุมชนวัดเกตเก่าฝั่งตะวันออกของแม่น้ำปิง ภายในวัดมีพิพิธภัณฑ์เก็บสิ่งของที่เกี่ยวข้องกับวัดและชุมชน",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดและพิพิธภัณฑ์ชุมชนมีผู้ดูแลในพื้นที่ โปรดตรวจสอบเวลาเปิดและกฎถ่ายภาพ ณ สถานที่ การท่องเที่ยวแห่งประเทศไทยเป็นผู้ให้ข้อมูลผู้มาเยือน",
      "history": [
        "ก่อนมีรถไฟ วัดเกตเคยเป็นท่าเรือการค้าสำคัญ พิพิธภัณฑ์เก็บชิ้นส่วนสถาปัตยกรรมและของใช้ที่ช่วยเล่าเรื่องย่านการค้า"
      ],
      "features": [
        "ชมบริบทวัด และหากพิพิธภัณฑ์เปิดให้สังเกตชิ้นส่วนอาคารและของใช้"
      ],
      "experience": [
        "ชมบริบทวัด และหากพิพิธภัณฑ์เปิดให้สังเกตชิ้นส่วนอาคารและของใช้"
      ],
      "route": [
        "หาวัดเกตการามบนถนนเจริญราษฎร์ฝั่งตะวันออก",
        "ชมวัดด้วยความเคารพและสอบถามว่าพิพิธภัณฑ์เปิดหรือไม่",
        "เดินต่อบนถนนสาธารณะริมแม่น้ำโดยไม่เข้าพื้นที่ส่วนบุคคล"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดเกตการามอยู่ที่ไหน?",
          "a": "อยู่ในชุมชนวัดเกตฝั่งตะวันออกของแม่น้ำปิง"
        },
        {
          "q": "พิพิธภัณฑ์อยู่แยกจากวัดหรือไม่?",
          "a": "พิพิธภัณฑ์ชุมชนอยู่ในบริเวณวัด โปรดสอบถามการเข้าชมปัจจุบัน"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-phra-that-doi-suthep": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดพระธาตุดอยสุเทพราชวรวิหาร เชียงใหม่",
  "address": "Doi Suthep, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-phra-that-doi-suthep",
  "locales": {
    "en": {
      "name": "Wat Phra That Doi Suthep",
      "tagline": "Mountain temple overlooking Chiang Mai",
      "description": "Wat Phra That Doi Suthep is a Buddhist temple on Doi Suthep above Chiang Mai, known for its golden chedi and naga-lined staircase.",
      "summary": "Wat Phra That Doi Suthep is a Buddhist temple on Doi Suthep above Chiang Mai, known for its golden chedi and naga-lined staircase.",
      "managementTitle": "About the temple and its care",
      "management": "The temple controls religious spaces, access and visitor arrangements. The Tourism Authority of Thailand publishes visitor guidance; confirm charges and lift availability with the temple.",
      "history": [
        "The temple is an important pilgrimage destination associated with a Buddhist relic. Its mountain setting places the historic city below the temple precinct."
      ],
      "features": [
        "Observe the chedi and the naga stairway; check access to the lift if steps are difficult."
      ],
      "experience": [
        "Observe the chedi and the naga stairway; check access to the lift if steps are difficult."
      ],
      "route": [
        "Arrange transport from your Mae Kha Canal entrance to the Doi Suthep temple approach.",
        "Choose the stairway or ask about the lift, then follow temple signs.",
        "Visit the permitted temple precinct and plan a safe return down the mountain."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "How do visitors reach the temple precinct?",
          "a": "The Tourism Authority describes a naga staircase and an electric lift; verify current availability."
        },
        {
          "q": "Is this the forest Wat Umong?",
          "a": "No. Doi Suthep is the mountain temple; Wat Umong Suan Phutthatham is a separate forest temple in Suthep."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "素贴山双龙寺",
      "tagline": "俯瞰清迈的山上寺院",
      "description": "双龙寺位于清迈上方的素贴山，以金色佛塔和那伽护栏台阶著称。",
      "summary": "双龙寺位于清迈上方的素贴山，以金色佛塔和那伽护栏台阶著称。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺方负责宗教空间和参观安排。泰国旅游局公布游览资料，收费和升降设施可用情况请向寺方确认。",
      "history": [
        "这里是与佛教舍利有关的重要朝圣地，山上寺院可俯瞰下方清迈城区。"
      ],
      "features": [
        "观察佛塔与那伽台阶；如上下台阶困难，请确认升降设施是否运行。"
      ],
      "experience": [
        "观察佛塔与那伽台阶；如上下台阶困难，请确认升降设施是否运行。"
      ],
      "route": [
        "从所在湄卡运河入口安排车辆前往双龙寺山上入口。",
        "选择台阶或询问升降设施，再遵守寺方指示。",
        "参观开放区域，提前安排安全下山返程。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "怎样到达寺院上层？",
          "a": "泰国旅游局介绍了那伽台阶及电动升降设施，实际运行请确认。"
        },
        {
          "q": "这就是森林乌蒙寺吗？",
          "a": "不是。双龙寺在山上，乌蒙寺森林禅修园是素贴区另一座寺院。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดพระธาตุดอยสุเทพราชวรวิหาร",
      "tagline": "วัดบนดอยเหนือเมืองเชียงใหม่",
      "description": "วัดพระธาตุดอยสุเทพเป็นวัดบนดอยสุเทพเหนือเมืองเชียงใหม่ มีเจดีย์ทองและบันไดนาคเป็นจุดเด่น",
      "summary": "วัดพระธาตุดอยสุเทพเป็นวัดบนดอยสุเทพเหนือเมืองเชียงใหม่ มีเจดีย์ทองและบันไดนาคเป็นจุดเด่น",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดดูแลพื้นที่ศาสนกิจและการเข้าชม การท่องเที่ยวแห่งประเทศไทยเผยแพร่ข้อมูลเดินทาง โปรดตรวจค่าบริการและการเปิดลิฟต์กับวัด",
      "history": [
        "วัดเป็นสถานที่แสวงบุญสำคัญที่เกี่ยวข้องกับพระบรมสารีริกธาตุ พื้นที่บนดอยมองลงมายังเมืองเชียงใหม่"
      ],
      "features": [
        "ชมเจดีย์และบันไดนาค หากเดินขึ้นลำบากให้สอบถามการเปิดลิฟต์"
      ],
      "experience": [
        "ชมเจดีย์และบันไดนาค หากเดินขึ้นลำบากให้สอบถามการเปิดลิฟต์"
      ],
      "route": [
        "จัดรถจากทางเข้าคลองแม่ข่าที่ใช้อยู่ไปยังทางขึ้นวัดบนดอย",
        "เลือกบันไดหรือสอบถามลิฟต์ แล้วปฏิบัติตามป้ายวัด",
        "ชมพื้นที่ที่อนุญาตและวางแผนเดินทางลงดอยอย่างปลอดภัย"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "ขึ้นไปยังบริเวณวัดอย่างไร?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุบันไดนาคและลิฟต์ไฟฟ้า โปรดตรวจการเปิดใช้ปัจจุบัน"
        },
        {
          "q": "เป็นวัดอุโมงค์ในป่าหรือไม่?",
          "a": "ไม่ใช่ วัดพระธาตุดอยสุเทพอยู่บนดอย ส่วนวัดอุโมงค์สวนพุทธธรรมเป็นอีกแห่งในสุเทพ"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "chiang-mai-treasury-museum": {
  "image": "",
  "imageSource": "",
  "mapQuery": "พิพิธภัณฑ์ธนารักษ์ จังหวัดเชียงใหม่ 52 ถนนราชดำเนิน",
  "address": "52 Ratchadamnoen Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Free admission to exhibitions; confirm current arrangements",
    "zh": "展览免费，请确认当前安排",
    "th": "ชมนิทรรศการฟรี โปรดตรวจสอบการเข้าชมปัจจุบัน"
  },
  "hours": {
    "en": "Tue–Fri 08:30–16:30; Sat–Sun 10:00–18:00; closed 12:00–13:00, Mondays and announced holidays — confirm",
    "zh": "周二至周五 08:30–16:30、周末 10:00–18:00；每日 12:00–13:00、周一及公告假日关闭，请确认",
    "th": "อังคาร–ศุกร์ 08:30–16:30 เสาร์–อาทิตย์ 10:00–18:00 ปิดพัก 12:00–13:00 ปิดจันทร์และวันหยุดที่ประกาศ โปรดตรวจสอบ"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://emuseum-chiangmai.treasury.go.th/news/260869/",
  "locales": {
    "en": {
      "name": "Chiang Mai Treasury Museum",
      "tagline": "Lanna currency and national treasures on Ratchadamnoen Road",
      "description": "Chiang Mai Treasury Museum presents Thai money, royal regalia and decorations in a former residence on Ratchadamnoen Road.",
      "summary": "Chiang Mai Treasury Museum presents Thai money, royal regalia and decorations in a former residence on Ratchadamnoen Road.",
      "managementTitle": "About the museum and its management",
      "management": "The Treasury Department operates the museum and publishes its own visitor information. Coin sales and exchange services are separate from the exhibitions.",
      "history": [
        "The Treasury Department converted the former residence of Chao Thipwan Na Chiang Tung into Treasury Pavilion 1 and began using it as a museum in 1995."
      ],
      "features": [
        "Compare displays of Lanna currency with later Thai coinage.",
        "Note how a former two-storey residence has been adapted for a museum."
      ],
      "experience": [
        "Compare displays of Lanna currency with later Thai coinage."
      ],
      "route": [
        "Find the entrance at 52 Ratchadamnoen Road.",
        "Check current opening and admission at the museum, then explore the currency exhibits.",
        "Allow time for the regalia displays and leave by the signed route."
      ],
      "photo": [
        "Allow time for object labels; ask staff before taking photographs."
      ],
      "visit": [
        "Allow time for object labels; ask staff before taking photographs."
      ],
      "transport": [
        "From your Mae Kha Canal entrance, check directions to 52 Ratchadamnoen Road near Klang Wiang intersection."
      ],
      "faqs": [
        {
          "q": "Who operates the museum?",
          "a": "Thailand’s Treasury Department operates it."
        },
        {
          "q": "What is displayed?",
          "a": "The museum presents Thai currency, royal regalia and decorations, including Lanna currency."
        },
        {
          "q": "When is it open?",
          "a": "Tue–Fri 08:30–16:30; Sat–Sun 10:00–18:00; closed 12:00–13:00, Mondays and announced holidays — confirm"
        }
      ]
    },
    "zh": {
      "name": "清迈财政博物馆",
      "tagline": "拉差丹能路上的兰纳货币与国宝",
      "description": "清迈财政博物馆位于拉差丹能路一座旧宅内，展示泰国货币、王室仪仗物和勋章。",
      "summary": "清迈财政博物馆位于拉差丹能路一座旧宅内，展示泰国货币、王室仪仗物和勋章。",
      "managementTitle": "关于博物馆及其管理",
      "management": "博物馆由泰国财政厅运营并公布访客信息；纪念币销售及兑换服务与展览是不同服务。",
      "history": [
        "财政厅将昭提帕婉·那清东的旧居改建为第一财政展馆，自 1995 年起作为博物馆使用。"
      ],
      "features": [
        "比较兰纳货币与后来的泰国钱币。",
        "观察两层旧宅如何改作博物馆。"
      ],
      "experience": [
        "比较兰纳货币与后来的泰国钱币。"
      ],
      "route": [
        "前往拉差丹能路 52 号入口。",
        "向馆方确认当前开放及入场安排，再参观货币展区。",
        "预留时间观看王室仪仗物展品，并按指示路线离开。"
      ],
      "photo": [
        "留出时间阅读展签，拍照前请询问工作人员。"
      ],
      "visit": [
        "留出时间阅读展签，拍照前请询问工作人员。"
      ],
      "transport": [
        "从所在湄卡运河入口查询至拉差丹能路 52 号、Klang Wiang 路口附近的路线。"
      ],
      "faqs": [
        {
          "q": "博物馆由谁运营？",
          "a": "由泰国财政厅运营。"
        },
        {
          "q": "展示什么？",
          "a": "展示泰国货币、王室仪仗物与勋章，其中包括兰纳货币。"
        },
        {
          "q": "什么时候开放？",
          "a": "周二至周五 08:30–16:30、周末 10:00–18:00；每日 12:00–13:00、周一及公告假日关闭，请确认"
        }
      ]
    },
    "th": {
      "name": "พิพิธภัณฑ์ธนารักษ์ จังหวัดเชียงใหม่",
      "tagline": "เงินตราล้านนาและทรัพย์สินของชาติบนถนนราชดำเนิน",
      "description": "พิพิธภัณฑ์ธนารักษ์ จังหวัดเชียงใหม่ ตั้งอยู่ในเรือนเก่าบนถนนราชดำเนิน จัดแสดงเงินตราไทย เครื่องราชอิสริยยศ และเครื่องราชอิสริยาภรณ์",
      "summary": "พิพิธภัณฑ์ธนารักษ์ จังหวัดเชียงใหม่ ตั้งอยู่ในเรือนเก่าบนถนนราชดำเนิน จัดแสดงเงินตราไทย เครื่องราชอิสริยยศ และเครื่องราชอิสริยาภรณ์",
      "managementTitle": "เกี่ยวกับพิพิธภัณฑ์และการดูแล",
      "management": "กรมธนารักษ์ดำเนินงานและเผยแพร่ข้อมูลผู้เข้าชม การจำหน่ายและแลกเหรียญเป็นบริการแยกจากนิทรรศการ",
      "history": [
        "กรมธนารักษ์ปรับคุ้มเดิมของเจ้าทิพวรรณ ณ เชียงตุงเป็นศาลาธนารักษ์ 1 และใช้เป็นพิพิธภัณฑ์ตั้งแต่ปี 2538"
      ],
      "features": [
        "เปรียบเทียบเงินตราล้านนากับเหรียญไทยยุคหลัง",
        "สังเกตการปรับเรือนสองชั้นเดิมให้เป็นพิพิธภัณฑ์"
      ],
      "experience": [
        "เปรียบเทียบเงินตราล้านนากับเหรียญไทยยุคหลัง"
      ],
      "route": [
        "ไปทางเข้าเลขที่ 52 ถนนราชดำเนิน",
        "ตรวจเวลาเปิดและค่าเข้าชมกับพิพิธภัณฑ์ แล้วชมเงินตรา",
        "เผื่อเวลาชมเครื่องราชอิสริยยศและออกตามทางที่กำหนด"
      ],
      "photo": [
        "เผื่อเวลาอ่านป้ายวัตถุ และสอบถามเจ้าหน้าที่ก่อนถ่ายภาพ"
      ],
      "visit": [
        "เผื่อเวลาอ่านป้ายวัตถุ และสอบถามเจ้าหน้าที่ก่อนถ่ายภาพ"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปเลขที่ 52 ถนนราชดำเนิน ใกล้แยกกลางเวียง"
      ],
      "faqs": [
        {
          "q": "ใครดำเนินงานพิพิธภัณฑ์?",
          "a": "กรมธนารักษ์เป็นผู้ดำเนินงาน"
        },
        {
          "q": "จัดแสดงอะไร?",
          "a": "จัดแสดงเงินตราไทย เครื่องราชอิสริยยศ และเครื่องราชอิสริยาภรณ์ รวมถึงเงินตราล้านนา"
        },
        {
          "q": "เปิดเวลาใด?",
          "a": "อังคาร–ศุกร์ 08:30–16:30 เสาร์–อาทิตย์ 10:00–18:00 ปิดพัก 12:00–13:00 ปิดจันทร์และวันหยุดที่ประกาศ โปรดตรวจสอบ"
        }
      ]
    }
  }
},
  "wat-pha-lat": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดผาลาด ถนนศรีวิชัย เชียงใหม่",
  "address": "101 Sriwichai Alley, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-pha-lat/",
  "locales": {
    "en": {
      "name": "Wat Pha Lat",
      "tagline": "Forest temple on the Doi Suthep route",
      "description": "Wat Pha Lat is a forest temple on the route to Wat Phra That Doi Suthep. Its grounds include a small waterfall and historic chedi.",
      "summary": "Wat Pha Lat is a forest temple on the route to Wat Phra That Doi Suthep. Its grounds include a small waterfall and historic chedi.",
      "managementTitle": "About the temple and its care",
      "management": "The temple controls access to its religious grounds. Confirm paths and current conditions with the temple, especially in wet weather.",
      "history": [
        "A local tradition associates the site with a pause in a white elephant’s journey carrying a relic towards Doi Suthep. The Tourism Authority describes later Burmese and Mon influences in the chedi’s restoration."
      ],
      "features": [
        "Notice the chedi in its wooded setting and the small waterfall without leaving marked paths."
      ],
      "experience": [
        "Notice the chedi in its wooded setting and the small waterfall without leaving marked paths."
      ],
      "route": [
        "Arrange transport to the temple approach on the Doi Suthep route.",
        "Check current path conditions and visit open temple areas quietly.",
        "Continue to Doi Suthep or return to the city, allowing for mountain travel."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Is Pha Lat the same as Doi Suthep temple?",
          "a": "No. It is a separate temple on the way up to Wat Phra That Doi Suthep."
        },
        {
          "q": "What is distinctive about its setting?",
          "a": "The temple stands in woodland and has a small waterfall within the grounds."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "帕拉特寺",
      "tagline": "通往素贴山途中的森林寺院",
      "description": "帕拉特寺是前往素贴山双龙寺途中的森林寺院，寺地内有小瀑布和历史佛塔。",
      "summary": "帕拉特寺是前往素贴山双龙寺途中的森林寺院，寺地内有小瀑布和历史佛塔。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺方管理宗教场所与参观范围，尤其雨天请向寺方确认步道和现场状况。",
      "history": [
        "当地传说将此地与运送舍利前往素贴山的白象途中休息联系起来。泰国旅游局介绍佛塔后来的修复受到缅甸与孟族风格影响。"
      ],
      "features": [
        "沿标示路线观察林中的佛塔与小瀑布。"
      ],
      "experience": [
        "沿标示路线观察林中的佛塔与小瀑布。"
      ],
      "route": [
        "安排车辆前往素贴山道路上的寺院入口。",
        "确认当前步道状况，安静参观开放区域。",
        "可继续前往双龙寺或返回市区，并预留山路时间。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "帕拉特寺和双龙寺是同一座吗？",
          "a": "不是。它是前往双龙寺途中的独立寺院。"
        },
        {
          "q": "这里的环境有什么特色？",
          "a": "寺院位于林中，寺地内有一处小瀑布。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดผาลาด",
      "tagline": "วัดป่าระหว่างทางขึ้นดอยสุเทพ",
      "description": "วัดผาลาดเป็นวัดป่าระหว่างทางไปวัดพระธาตุดอยสุเทพ ภายในมีน้ำตกขนาดเล็กและเจดีย์เก่า",
      "summary": "วัดผาลาดเป็นวัดป่าระหว่างทางไปวัดพระธาตุดอยสุเทพ ภายในมีน้ำตกขนาดเล็กและเจดีย์เก่า",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดดูแลพื้นที่ศาสนกิจและการเข้าชม โปรดตรวจสภาพทางและพื้นที่เปิดกับวัด โดยเฉพาะช่วงฝน",
      "history": [
        "ตำนานท้องถิ่นเชื่อมสถานที่กับการหยุดพักของช้างเผือกที่อัญเชิญพระธาตุไปดอยสุเทพ การท่องเที่ยวแห่งประเทศไทยกล่าวถึงอิทธิพลพม่าและมอญในการบูรณะเจดีย์ภายหลัง"
      ],
      "features": [
        "สังเกตเจดีย์ท่ามกลางป่าและน้ำตกเล็กโดยอยู่ในทางที่กำหนด"
      ],
      "experience": [
        "สังเกตเจดีย์ท่ามกลางป่าและน้ำตกเล็กโดยอยู่ในทางที่กำหนด"
      ],
      "route": [
        "จัดรถไปทางเข้าวัดบนเส้นทางขึ้นดอยสุเทพ",
        "ตรวจสภาพทางปัจจุบันและชมพื้นที่เปิดอย่างสงบ",
        "เดินทางต่อไปดอยสุเทพหรือกลับเมือง โดยเผื่อเวลาสำหรับทางขึ้นเขา"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดผาลาดเป็นที่เดียวกับวัดพระธาตุดอยสุเทพไหม?",
          "a": "ไม่ใช่ เป็นวัดแยกกันซึ่งอยู่ระหว่างทางขึ้นดอยสุเทพ"
        },
        {
          "q": "บริเวณวัดมีอะไรเด่น?",
          "a": "วัดอยู่ในป่าและมีน้ำตกขนาดเล็กภายในบริเวณ"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-chiang-yuen": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดเชียงยืน 160 ถนนมณีนพรัตน์ เชียงใหม่",
  "address": "160 Manee Nopparat Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-chiang-yuen/",
  "locales": {
    "en": {
      "name": "Wat Chiang Yuen",
      "tagline": "Historic temple on Manee Nopparat Road",
      "description": "Wat Chiang Yuen is a Buddhist temple at 160 Manee Nopparat Road near the north side of Chiang Mai’s Old City.",
      "summary": "Wat Chiang Yuen is a Buddhist temple at 160 Manee Nopparat Road near the north side of Chiang Mai’s Old City.",
      "managementTitle": "About the temple and its care",
      "management": "The temple manages its worship spaces and visitor access. Check opening times and photography rules with the temple.",
      "history": [
        "The Tourism Authority describes the temple as rebuilt in 1794 after destruction during conflict. Its name is associated with longevity."
      ],
      "features": [
        "Read the setting in relation to the northern city wall and the neighbouring moat."
      ],
      "experience": [
        "Read the setting in relation to the northern city wall and the neighbouring moat."
      ],
      "route": [
        "Find the entrance on Manee Nopparat Road and check signs.",
        "Observe the open temple buildings without interrupting worship.",
        "Use a safe crossing to continue towards Chang Phueak Gate."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Where is Wat Chiang Yuen?",
          "a": "It is on Manee Nopparat Road near the north side of the Old City."
        },
        {
          "q": "What does its name evoke?",
          "a": "The Tourism Authority associates the name with longevity."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "清元寺",
      "tagline": "玛尼诺帕拉特路上的历史寺院",
      "description": "清元寺位于清迈古城北侧附近的玛尼诺帕拉特路 160 号。",
      "summary": "清元寺位于清迈古城北侧附近的玛尼诺帕拉特路 160 号。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺方负责礼佛空间和访客开放范围；开放时间与拍摄规定请向寺方确认。",
      "history": [
        "泰国旅游局介绍，寺院在战乱中遭毁后于 1794 年重建，寺名与长寿之意相关。"
      ],
      "features": [
        "结合北侧城墙与护城河的位置观察寺院环境。"
      ],
      "experience": [
        "结合北侧城墙与护城河的位置观察寺院环境。"
      ],
      "route": [
        "从玛尼诺帕拉特路找到入口并查看告示。",
        "安静参观开放建筑，避免打扰礼佛。",
        "使用安全过街设施继续前往昌卜克门。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "清元寺在哪里？",
          "a": "位于古城北侧附近的玛尼诺帕拉特路。"
        },
        {
          "q": "寺名有什么含义？",
          "a": "泰国旅游局将寺名与长寿之意联系起来。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดเชียงยืน",
      "tagline": "วัดเก่าบนถนนมณีนพรัตน์",
      "description": "วัดเชียงยืนเป็นวัดพุทธเลขที่ 160 ถนนมณีนพรัตน์ใกล้ด้านเหนือของเมืองเก่าเชียงใหม่",
      "summary": "วัดเชียงยืนเป็นวัดพุทธเลขที่ 160 ถนนมณีนพรัตน์ใกล้ด้านเหนือของเมืองเก่าเชียงใหม่",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดดูแลพื้นที่บูชาและการเข้าชม โปรดสอบถามเวลาเปิดและกฎถ่ายภาพกับวัด",
      "history": [
        "การท่องเที่ยวแห่งประเทศไทยระบุว่าวัดสร้างใหม่ในปี 2337 หลังเสียหายจากสงคราม และชื่อวัดเกี่ยวข้องกับความยืนยาว"
      ],
      "features": [
        "สังเกตตำแหน่งวัดสัมพันธ์กับกำแพงเมืองด้านเหนือและคูเมือง"
      ],
      "experience": [
        "สังเกตตำแหน่งวัดสัมพันธ์กับกำแพงเมืองด้านเหนือและคูเมือง"
      ],
      "route": [
        "หาทางเข้าถนนมณีนพรัตน์และดูป้าย",
        "ชมอาคารที่เปิดโดยไม่รบกวนการบูชา",
        "ใช้ทางข้ามที่ปลอดภัยเพื่อไปประตูช้างเผือก"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดเชียงยืนอยู่ที่ไหน?",
          "a": "อยู่บนถนนมณีนพรัตน์ใกล้ด้านเหนือของเมืองเก่า"
        },
        {
          "q": "ชื่อวัดมีความหมายอย่างไร?",
          "a": "การท่องเที่ยวแห่งประเทศไทยเชื่อมชื่อวัดกับความยืนยาว"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "wat-phra-that-doi-kham": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดพระธาตุดอยคำ แม่เหียะ เชียงใหม่",
  "address": "108 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai 50100, Thailand",
  "fee": {
    "en": "Ask the temple about current admission",
    "zh": "请向寺方确认当前入场安排",
    "th": "สอบถามค่าเข้าชมกับวัด"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "zh": "请向寺方确认当前开放时间",
    "th": "ตรวจสอบเวลาเปิดกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-phra-that-doi-kham/",
  "locales": {
    "en": {
      "name": "Wat Phra That Doi Kham",
      "tagline": "Hilltop temple southwest of Chiang Mai",
      "description": "Wat Phra That Doi Kham is a hilltop temple in Mae Hia southwest of Chiang Mai, known for its chedi and the revered Luang Pho Than Chai image.",
      "summary": "Wat Phra That Doi Kham is a hilltop temple in Mae Hia southwest of Chiang Mai, known for its chedi and the revered Luang Pho Than Chai image.",
      "managementTitle": "About the temple and its care",
      "management": "The temple manages worship and access. Confirm admission and current conditions before travelling to the hilltop.",
      "history": [
        "The Tourism Authority recounts the temple’s long history, a period of abandonment and later local rebuilding after important objects were discovered in 1966."
      ],
      "features": [
        "Observe the chedi and the worship area for Luang Pho Than Chai while respecting those praying."
      ],
      "experience": [
        "Observe the chedi and the worship area for Luang Pho Than Chai while respecting those praying."
      ],
      "route": [
        "Arrange transport from the canal to the Mae Hia hilltop temple.",
        "Check temple notices and visit the permitted chedi and worship areas.",
        "Allow time for the return journey to Chiang Mai."
      ],
      "photo": [
        "Photograph only where permitted; do not interrupt worship."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From your actual Mae Kha Canal entrance, check directions to this named temple and choose walking or a car for your starting point."
      ],
      "faqs": [
        {
          "q": "Where is Doi Kham?",
          "a": "It is in Mae Hia, southwest of Chiang Mai city."
        },
        {
          "q": "What image is associated with the temple?",
          "a": "The Tourism Authority identifies the revered Luang Pho Than Chai image."
        },
        {
          "q": "Can I enter every building?",
          "a": "Access varies with religious activity and conservation; check with the temple."
        }
      ]
    },
    "zh": {
      "name": "金山寺",
      "tagline": "清迈西南的山顶寺院",
      "description": "金山寺位于清迈西南的 Mae Hia 山上，以佛塔和受信众敬奉的 Luang Pho Than Chai 佛像闻名。",
      "summary": "金山寺位于清迈西南的 Mae Hia 山上，以佛塔和受信众敬奉的 Luang Pho Than Chai 佛像闻名。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺方管理礼佛与参观区域。前往山顶前请确认入场安排及当前状况。",
      "history": [
        "泰国旅游局介绍该寺历史悠久，曾一度荒废；1966 年发现重要文物后，当地居民协助重建。"
      ],
      "features": [
        "观察佛塔与 Luang Pho Than Chai 礼佛区域，并尊重正在祈祷的人。"
      ],
      "experience": [
        "观察佛塔与 Luang Pho Than Chai 礼佛区域，并尊重正在祈祷的人。"
      ],
      "route": [
        "从运河安排车辆前往 Mae Hia 山顶寺院。",
        "查看寺方告示，参观开放的佛塔与礼佛区域。",
        "预留时间返回清迈市区。"
      ],
      "photo": [
        "仅在允许区域拍摄，不打扰礼佛。"
      ],
      "visit": [
        "穿着得体并遵守寺方告示。"
      ],
      "transport": [
        "从所在湄卡运河入口查询本寺路线，按实际起点选择步行或乘车。"
      ],
      "faqs": [
        {
          "q": "金山寺在哪里？",
          "a": "位于清迈市区西南的 Mae Hia。"
        },
        {
          "q": "寺院与哪尊佛像有关？",
          "a": "泰国旅游局介绍了受信众敬奉的 Luang Pho Than Chai 佛像。"
        },
        {
          "q": "所有建筑都能进入吗？",
          "a": "开放范围随宗教活动和保护工作调整，请向寺方确认。"
        }
      ]
    },
    "th": {
      "name": "วัดพระธาตุดอยคำ",
      "tagline": "วัดบนดอยทางตะวันตกเฉียงใต้ของเชียงใหม่",
      "description": "วัดพระธาตุดอยคำเป็นวัดบนดอยในตำบลแม่เหียะทางตะวันตกเฉียงใต้ของเมืองเชียงใหม่ มีเจดีย์และหลวงพ่อทันใจที่ผู้คนเคารพ",
      "summary": "วัดพระธาตุดอยคำเป็นวัดบนดอยในตำบลแม่เหียะทางตะวันตกเฉียงใต้ของเมืองเชียงใหม่ มีเจดีย์และหลวงพ่อทันใจที่ผู้คนเคารพ",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดดูแลพื้นที่บูชาและการเข้าชม โปรดตรวจการเข้าชมและสภาพปัจจุบันก่อนเดินทางขึ้นดอย",
      "history": [
        "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงประวัติยาวนาน ช่วงที่วัดร้าง และการบูรณะโดยชาวบ้านหลังพบโบราณวัตถุสำคัญในปี 2509"
      ],
      "features": [
        "ชมเจดีย์และบริเวณบูชาหลวงพ่อทันใจโดยเคารพผู้กำลังสักการะ"
      ],
      "experience": [
        "ชมเจดีย์และบริเวณบูชาหลวงพ่อทันใจโดยเคารพผู้กำลังสักการะ"
      ],
      "route": [
        "จัดรถจากคลองแม่ข่าไปวัดบนดอยตำบลแม่เหียะ",
        "ตรวจป้ายวัดและชมเจดีย์กับพื้นที่บูชาที่เปิด",
        "เผื่อเวลาสำหรับเดินทางกลับเมืองเชียงใหม่"
      ],
      "photo": [
        "ถ่ายเฉพาะพื้นที่อนุญาตและไม่รบกวนการบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากทางเข้าคลองแม่ข่าที่ใช้อยู่ ตรวจเส้นทางไปวัดนี้และเลือกเดินหรือเรียกรถตามจุดเริ่มต้น"
      ],
      "faqs": [
        {
          "q": "วัดดอยคำอยู่ที่ไหน?",
          "a": "อยู่ตำบลแม่เหียะทางตะวันตกเฉียงใต้ของเมืองเชียงใหม่"
        },
        {
          "q": "พระพุทธรูปใดเป็นที่รู้จัก?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุหลวงพ่อทันใจเป็นพระพุทธรูปที่ผู้คนเคารพ"
        },
        {
          "q": "เข้าได้ทุกอาคารไหม?",
          "a": "พื้นที่เปิดอาจเปลี่ยนตามพิธีและงานอนุรักษ์ โปรดสอบถามวัด"
        }
      ]
    }
  }
},
  "chiang-mai-cultural-centre": {
  "image": "",
  "imageSource": "",
  "mapQuery": "หอศิลปวัฒนธรรมเมืองเชียงใหม่ ถนนพระปกเกล้า",
  "address": "Chiang Mai Cultural Centre, Prapokklao Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200",
  "fee": {
    "en": "Confirm current admission and eligibility with the centre",
    "zh": "请向馆方确认当前票价及适用条件",
    "th": "โปรดตรวจสอบค่าเข้าชมและสิทธิ์กับศูนย์"
  },
  "hours": {
    "en": "Wed–Sun 08:30–16:30; closed Mon–Tue; confirm current arrangements",
    "zh": "周三至周日 08:30–16:30，周一和周二关闭；请确认当前安排",
    "th": "พุธ–อาทิตย์ 08:30–16:30 ปิดจันทร์–อังคาร โปรดตรวจสอบปัจจุบัน"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://cmocity.com/chiang-mai-art-cultural-centre/",
  "locales": {
    "en": {
      "name": "Chiang Mai Cultural Centre",
      "tagline": "Trace the city’s development through its cultural exhibits",
      "description": "This city museum presents Chiang Mai’s history, administration and culture through models, images and multimedia.",
      "summary": "This city museum presents Chiang Mai’s history, administration and culture through models, images and multimedia.",
      "managementTitle": "About the museum and its management",
      "management": "Chiang Mai Municipality’s City Heritage Centre operates the museum and publishes visitor information. Ask staff about current exhibits and accessibility.",
      "history": [
        "The city heritage centre records the restoration of the old City Hall in 1999 and the formal opening of the arts and cultural centre on 5 November 2002."
      ],
      "features": [
        "Compare displays on the founding of the city with those on its twentieth-century development.",
        "Look for models, photographs and multimedia among the permanent exhibitions, which the centre describes as covering 15 rooms."
      ],
      "experience": [
        "Compare displays on the founding of the city with those on its twentieth-century development.",
        "Look for models, photographs and multimedia among the permanent exhibitions, which the centre describes as covering 15 rooms."
      ],
      "route": [
        "Find the museum on Prapokklao Road at the Three Kings Monument.",
        "Check tickets at the entrance and start with the introduction to Chiang Mai today.",
        "Continue through the city-founding and later-history displays, then leave time for the building-history exhibit."
      ],
      "photo": [
        "Ask staff before photographing exhibits."
      ],
      "visit": [
        "Allow time to read the exhibit labels and check current access with staff."
      ],
      "transport": [
        "From Mae Kha Canal, use the museum’s name on Prapokklao Road when arranging transport to the Old City."
      ],
      "faqs": [
        {
          "q": "Which museum is this?",
          "a": "It is the city cultural centre by the Three Kings Monument, distinct from the Lanna Folklife Centre across the road."
        },
        {
          "q": "What can I see inside?",
          "a": "The permanent displays use models, pictures and multimedia to explain the city’s history and culture."
        },
        {
          "q": "When is it open?",
          "a": "The centre lists Wednesday–Sunday 08:30–16:30; confirm special changes before visiting."
        }
      ]
    },
    "zh": {
      "name": "清迈城市艺术文化中心",
      "tagline": "通过文化展览认识清迈城市发展",
      "description": "这座市立博物馆以模型、图片和多媒体介绍清迈的历史、治理与文化。",
      "summary": "这座市立博物馆以模型、图片和多媒体介绍清迈的历史、治理与文化。",
      "managementTitle": "关于博物馆及其管理",
      "management": "清迈市政府城市遗产中心运营该馆并公布参观信息；当前展览及无障碍设施请询问工作人员。",
      "history": [
        "市府城市遗产中心记载，旧市政厅于 1999 年修复，城市艺术文化中心于 2002 年 11 月 5 日正式开幕。"
      ],
      "features": [
        "比较建城展览与二十世纪城市发展展览。",
        "留意模型、照片及多媒体；馆方介绍常设展分布于 15 个展室。"
      ],
      "experience": [
        "比较建城展览与二十世纪城市发展展览。",
        "留意模型、照片及多媒体；馆方介绍常设展分布于 15 个展室。"
      ],
      "route": [
        "前往三王纪念碑旁的帕波格劳路入口。",
        "在入口确认票务，从今日清迈介绍开始。",
        "继续参观建城和后期历史展，并为建筑历史展留出时间。"
      ],
      "photo": [
        "拍摄展品前请先询问工作人员。"
      ],
      "visit": [
        "预留时间阅读展签，并向工作人员确认当前开放范围。"
      ],
      "transport": [
        "从湄卡运河前往古城时，以帕波格劳路上的馆名安排交通。"
      ],
      "faqs": [
        {
          "q": "这是哪座博物馆？",
          "a": "它是三王纪念碑旁的城市文化中心，与马路对面的兰纳民俗馆不同。"
        },
        {
          "q": "馆内能看什么？",
          "a": "常设展以模型、图片和多媒体介绍城市历史与文化。"
        },
        {
          "q": "什么时候开放？",
          "a": "馆方列示周三至周日 08:30–16:30，出发前请确认临时调整。"
        }
      ]
    },
    "th": {
      "name": "หอศิลปวัฒนธรรมเมืองเชียงใหม่",
      "tagline": "เรียนรู้พัฒนาการของเมืองผ่านนิทรรศการ",
      "description": "พิพิธภัณฑ์เมืองนำเสนอประวัติ การปกครอง และวัฒนธรรมเชียงใหม่ผ่านแบบจำลอง ภาพ และสื่อผสม",
      "summary": "พิพิธภัณฑ์เมืองนำเสนอประวัติ การปกครอง และวัฒนธรรมเชียงใหม่ผ่านแบบจำลอง ภาพ และสื่อผสม",
      "managementTitle": "เกี่ยวกับพิพิธภัณฑ์และการดูแล",
      "management": "ศูนย์มรดกเมืองเชียงใหม่ของเทศบาลนครเชียงใหม่ดูแลพิพิธภัณฑ์และเผยแพร่ข้อมูลผู้เข้าชม สอบถามเจ้าหน้าที่เรื่องนิทรรศการและการเข้าถึงปัจจุบัน",
      "history": [
        "ศูนย์มรดกเมืองบันทึกการบูรณะศาลากลางเดิมในปี 2542 และพิธีเปิดหอศิลปวัฒนธรรมเมื่อ 5 พฤศจิกายน 2545"
      ],
      "features": [
        "เปรียบเทียบเรื่องการสร้างเมืองกับการเปลี่ยนแปลงในศตวรรษที่ 20",
        "ชมแบบจำลอง ภาพ และสื่อผสมในนิทรรศการถาวร ซึ่งศูนย์ระบุว่ามี 15 ห้อง"
      ],
      "experience": [
        "เปรียบเทียบเรื่องการสร้างเมืองกับการเปลี่ยนแปลงในศตวรรษที่ 20",
        "ชมแบบจำลอง ภาพ และสื่อผสมในนิทรรศการถาวร ซึ่งศูนย์ระบุว่ามี 15 ห้อง"
      ],
      "route": [
        "ไปทางเข้าถนนพระปกเกล้าใกล้อนุสาวรีย์สามกษัตริย์",
        "ตรวจบัตรที่ทางเข้าและเริ่มจากเรื่องเชียงใหม่ปัจจุบัน",
        "ชมเรื่องสร้างเมืองและประวัติยุคหลัง แล้วเผื่อเวลาดูประวัติอาคาร"
      ],
      "photo": [
        "สอบถามเจ้าหน้าที่ก่อนถ่ายภาพนิทรรศการ"
      ],
      "visit": [
        "เผื่อเวลาอ่านป้ายและสอบถามเจ้าหน้าที่เรื่องพื้นที่เปิด"
      ],
      "transport": [
        "จากคลองแม่ข่า ใช้ชื่อพิพิธภัณฑ์บนถนนพระปกเกล้าเพื่อจัดรถไปเมืองเก่า"
      ],
      "faqs": [
        {
          "q": "ที่นี่เป็นพิพิธภัณฑ์ใด?",
          "a": "เป็นหอศิลปวัฒนธรรมข้างอนุสาวรีย์สามกษัตริย์ แยกจากหอพื้นถิ่นล้านนาฝั่งตรงข้าม"
        },
        {
          "q": "ภายในมีอะไร?",
          "a": "นิทรรศการถาวรใช้แบบจำลอง ภาพ และสื่อผสมอธิบายประวัติและวัฒนธรรมเมือง"
        },
        {
          "q": "เปิดเมื่อไร?",
          "a": "ศูนย์ระบุวันพุธ–อาทิตย์ 08:30–16:30 โปรดตรวจการเปลี่ยนแปลงก่อนเดินทาง"
        }
      ]
    }
  },
  "additionalSources": [
    "https://cmocity.com/history/"
  ]
},
  "lanna-folklife-centre": {
  "image": "",
  "imageSource": "",
  "mapQuery": "หอพื้นถิ่นล้านนา ถนนพระปกเกล้า เชียงใหม่",
  "address": "Lanna Folklife Centre, Prapokklao Road, Si Phum, Mueang Chiang Mai, Chiang Mai 50200",
  "fee": {
    "en": "Confirm current admission and eligibility with the centre",
    "zh": "请向馆方确认当前票价及适用条件",
    "th": "โปรดตรวจสอบค่าเข้าชมและสิทธิ์กับศูนย์"
  },
  "hours": {
    "en": "Wed–Sun 08:30–16:30; closed Mon–Tue; confirm current arrangements",
    "zh": "周三至周日 08:30–16:30，周一和周二关闭；请确认当前安排",
    "th": "พุธ–อาทิตย์ 08:30–16:30 ปิดจันทร์–อังคาร โปรดตรวจสอบปัจจุบัน"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://cmocity.com/lanna-folklife-museum/",
  "locales": {
    "en": {
      "name": "Lanna Folklife Centre",
      "tagline": "Discover Lanna craft and everyday life in the former court",
      "description": "The Lanna Folklife Centre presents northern Thai religious art, architecture, crafts and ways of life in a former district court.",
      "summary": "The Lanna Folklife Centre presents northern Thai religious art, architecture, crafts and ways of life in a former district court.",
      "managementTitle": "About the museum and its management",
      "management": "The Chiang Mai Municipality City Heritage Centre operates the museum. Ask its staff about access and current exhibitions.",
      "history": [
        "The former Chiang Mai District Court was converted into the museum; the city heritage centre records its formal opening on 13 August 2013."
      ],
      "features": [
        "Compare lacquerware and ceramics with basketry and textile displays.",
        "Explore the displays on Lanna worship offerings, mural painting and the traditions of Hae Khrua Than."
      ],
      "experience": [
        "Compare lacquerware and ceramics with basketry and textile displays.",
        "Explore the displays on Lanna worship offerings, mural painting and the traditions of Hae Khrua Than."
      ],
      "route": [
        "Locate the former court on Prapokklao Road opposite the Three Kings Monument.",
        "Confirm admission and explore the exhibits on architecture and religious art.",
        "Continue to craft and everyday-life displays; allow time for the building-history exhibit."
      ],
      "photo": [
        "Ask staff before photographing exhibits."
      ],
      "visit": [
        "Allow time to read the exhibit labels and check current access with staff."
      ],
      "transport": [
        "From Mae Kha Canal, use the museum’s name on Prapokklao Road when arranging transport to the Old City."
      ],
      "faqs": [
        {
          "q": "Is it the same as the Lanna Traditional House Museum?",
          "a": "No. This museum is in the former district court in the Old City; the traditional house museum is a separate Chiang Mai University site."
        },
        {
          "q": "What crafts are displayed?",
          "a": "The centre describes ceramics, lacquerware, textiles and basketry among its exhibits."
        },
        {
          "q": "When is it open?",
          "a": "The centre lists Wednesday–Sunday 08:30–16:30; confirm special changes before visiting."
        }
      ]
    },
    "zh": {
      "name": "兰纳民俗馆",
      "tagline": "在旧法院探索兰纳工艺与生活",
      "description": "兰纳民俗馆设于旧地方法院，展示泰北宗教艺术、建筑、工艺和生活方式。",
      "summary": "兰纳民俗馆设于旧地方法院，展示泰北宗教艺术、建筑、工艺和生活方式。",
      "managementTitle": "关于博物馆及其管理",
      "management": "该馆由清迈市政府城市遗产中心运营；开放范围和当前展览请向工作人员确认。",
      "history": [
        "清迈地方法院旧址改为博物馆；市府城市遗产中心记载正式开幕日期为 2013 年 8 月 13 日。"
      ],
      "features": [
        "比较漆器、陶器与竹编、织物展品。",
        "了解兰纳供奉器物、壁画及 Hae Khrua Than 供奉游行传统。"
      ],
      "experience": [
        "比较漆器、陶器与竹编、织物展品。",
        "了解兰纳供奉器物、壁画及 Hae Khrua Than 供奉游行传统。"
      ],
      "route": [
        "前往帕波格劳路三王纪念碑对面的旧法院。",
        "确认票务后参观建筑与宗教艺术展区。",
        "继续观看工艺和生活展，并为建筑历史展留出时间。"
      ],
      "photo": [
        "拍摄展品前请先询问工作人员。"
      ],
      "visit": [
        "预留时间阅读展签，并向工作人员确认当前开放范围。"
      ],
      "transport": [
        "从湄卡运河前往古城时，以帕波格劳路上的馆名安排交通。"
      ],
      "faqs": [
        {
          "q": "这与兰纳传统民居博物馆是同一处吗？",
          "a": "不是。本馆位于古城旧地方法院；传统民居博物馆是清迈大学的另一处场所。"
        },
        {
          "q": "展示哪些工艺？",
          "a": "馆方介绍展品包括陶器、漆器、织物和竹编。"
        },
        {
          "q": "什么时候开放？",
          "a": "馆方列示周三至周日 08:30–16:30，出发前请确认临时调整。"
        }
      ]
    },
    "th": {
      "name": "หอพื้นถิ่นล้านนา",
      "tagline": "สำรวจหัตถศิลป์และวิถีล้านนาในอาคารศาลเดิม",
      "description": "หอพื้นถิ่นล้านนาตั้งอยู่ในอาคารศาลแขวงเดิม จัดแสดงพุทธศิลป์ สถาปัตยกรรม หัตถกรรม และวิถีชีวิตภาคเหนือ",
      "summary": "หอพื้นถิ่นล้านนาตั้งอยู่ในอาคารศาลแขวงเดิม จัดแสดงพุทธศิลป์ สถาปัตยกรรม หัตถกรรม และวิถีชีวิตภาคเหนือ",
      "managementTitle": "เกี่ยวกับพิพิธภัณฑ์และการดูแล",
      "management": "ศูนย์มรดกเมืองเชียงใหม่ของเทศบาลนครเชียงใหม่ดูแลพิพิธภัณฑ์ โปรดสอบถามเจ้าหน้าที่เรื่องพื้นที่เปิดและนิทรรศการปัจจุบัน",
      "history": [
        "อาคารศาลแขวงเชียงใหม่เดิมปรับเป็นพิพิธภัณฑ์ ศูนย์มรดกเมืองระบุพิธีเปิดเมื่อ 13 สิงหาคม 2556"
      ],
      "features": [
        "เปรียบเทียบเครื่องเขินและเครื่องปั้นดินเผากับเครื่องจักสานและผ้าทอ",
        "ชมเรื่องเครื่องสักการะ จิตรกรรมล้านนา และประเพณีแห่ครัวทาน"
      ],
      "experience": [
        "เปรียบเทียบเครื่องเขินและเครื่องปั้นดินเผากับเครื่องจักสานและผ้าทอ",
        "ชมเรื่องเครื่องสักการะ จิตรกรรมล้านนา และประเพณีแห่ครัวทาน"
      ],
      "route": [
        "ไปอาคารศาลเดิมบนถนนพระปกเกล้าตรงข้ามอนุสาวรีย์สามกษัตริย์",
        "ตรวจค่าเข้าชมแล้วชมนิทรรศการสถาปัตยกรรมและพุทธศิลป์",
        "ชมงานหัตถกรรมและวิถีชีวิตต่อ พร้อมเผื่อเวลาดูประวัติอาคาร"
      ],
      "photo": [
        "สอบถามเจ้าหน้าที่ก่อนถ่ายภาพนิทรรศการ"
      ],
      "visit": [
        "เผื่อเวลาอ่านป้ายและสอบถามเจ้าหน้าที่เรื่องพื้นที่เปิด"
      ],
      "transport": [
        "จากคลองแม่ข่า ใช้ชื่อพิพิธภัณฑ์บนถนนพระปกเกล้าเพื่อจัดรถไปเมืองเก่า"
      ],
      "faqs": [
        {
          "q": "เป็นที่เดียวกับพิพิธภัณฑ์เรือนโบราณล้านนาหรือไม่?",
          "a": "ไม่ใช่ หอแห่งนี้อยู่ในศาลแขวงเดิมกลางเมืองเก่า ส่วนพิพิธภัณฑ์เรือนโบราณเป็นอีกสถานที่ของมหาวิทยาลัยเชียงใหม่"
        },
        {
          "q": "มีงานหัตถกรรมใด?",
          "a": "ศูนย์ระบุว่ามีเครื่องปั้นดินเผา เครื่องเขิน ผ้าทอ และเครื่องจักสาน"
        },
        {
          "q": "เปิดเมื่อไร?",
          "a": "ศูนย์ระบุวันพุธ–อาทิตย์ 08:30–16:30 โปรดตรวจการเปลี่ยนแปลงก่อนเดินทาง"
        }
      ]
    }
  },
  "additionalSources": [
    "https://cmocity.com/history/"
  ]
},
  "wat-mueng-nguen-kong": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดหมื่นเงินกอง 30 ถนนสามล้าน เชียงใหม่",
  "address": "30 Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai 50200, Thailand",
  "fee": {
    "en": "Tourism Authority lists free entry; confirm current arrangements",
    "zh": "旅游局列示免费参拜，请确认当前安排",
    "th": "ททท. ระบุเข้าชมฟรี โปรดตรวจสอบปัจจุบัน"
  },
  "hours": {
    "en": "Tourism Authority lists 08:00–17:00; confirm with the temple",
    "zh": "旅游局列示 08:00–17:00，请向寺方确认",
    "th": "ททท. ระบุ 08:00–17:00 โปรดตรวจสอบกับวัด"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.thailandtravel.or.jp/wat-mueng-nguen-kong/",
  "locales": {
    "en": {
      "name": "Wat Mueng Nguen Kong",
      "tagline": "A Lanna wooden prayer hall near Wat Phra Singh",
      "description": "Wat Mueng Nguen Kong is an Old City temple on Samlan Road known for its wooden Lanna-style prayer hall.",
      "summary": "Wat Mueng Nguen Kong is an Old City temple on Samlan Road known for its wooden Lanna-style prayer hall.",
      "managementTitle": "About the temple and its care",
      "management": "The temple manages its worship areas and access. Ask the temple which buildings are open and respect services in progress.",
      "history": [
        "The Tourism Authority relates a tradition that a prosperous official donated his land to establish the temple; it notes that the wooden hall was restored in 1989."
      ],
      "features": [
        "Study the ornamented columns and upward-curving roof of the wooden hall.",
        "See the reclining Buddha and square golden chedi beside the hall where access is permitted."
      ],
      "experience": [
        "Study the ornamented columns and upward-curving roof of the wooden hall.",
        "See the reclining Buddha and square golden chedi beside the hall where access is permitted."
      ],
      "route": [
        "Locate the entrance at 30 Samlan Road.",
        "Check which parts are open, then quietly observe the wooden hall.",
        "Look for the reclining Buddha and chedi before continuing towards Wat Phra Singh."
      ],
      "photo": [
        "Photograph the wooden hall from public areas; ask before photographing worshippers."
      ],
      "visit": [
        "Dress respectfully and follow temple notices."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to 30 Samlan Road in the Old City."
      ],
      "faqs": [
        {
          "q": "Is this Wat Phra Singh?",
          "a": "No. Wat Mueng Nguen Kong is a separate temple a short walk away on Samlan Road."
        },
        {
          "q": "What is distinctive about its hall?",
          "a": "The Tourism Authority identifies its wooden hall as an example of Lanna architecture and notes its 1989 restoration."
        },
        {
          "q": "What else is beside the hall?",
          "a": "The Tourism Authority describes a reclining Buddha and a square golden chedi nearby."
        }
      ]
    },
    "zh": {
      "name": "孟银贡寺",
      "tagline": "帕辛寺附近的兰纳木造礼佛殿",
      "description": "孟银贡寺位于古城三兰路，以兰纳风格木造礼佛殿闻名。",
      "summary": "孟银贡寺位于古城三兰路，以兰纳风格木造礼佛殿闻名。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺方管理礼佛区与参观范围；请询问哪些建筑开放，并尊重正在进行的宗教活动。",
      "history": [
        "泰国旅游局介绍，当地传说一位经商致富的官员捐地建寺；木殿于 1989 年修复。"
      ],
      "features": [
        "观察木殿装饰柱与向上翘起的屋顶。",
        "在允许进入的范围内观看殿旁卧佛与方形金色佛塔。"
      ],
      "experience": [
        "观察木殿装饰柱与向上翘起的屋顶。",
        "在允许进入的范围内观看殿旁卧佛与方形金色佛塔。"
      ],
      "route": [
        "找到三兰路 30 号入口。",
        "确认开放范围，安静参观木殿。",
        "再看卧佛与佛塔，随后可继续前往帕辛寺。"
      ],
      "photo": [
        "在开放区域拍摄木殿；拍摄礼佛者前请先征求同意。"
      ],
      "visit": [
        "着装得体，遵守寺方告示。"
      ],
      "transport": [
        "从湄卡运河安排交通前往古城三兰路 30 号。"
      ],
      "faqs": [
        {
          "q": "这是帕辛寺吗？",
          "a": "不是。孟银贡寺是三兰路上步行可达的另一座寺院。"
        },
        {
          "q": "木殿有何特色？",
          "a": "旅游局将它列为兰纳建筑实例，并记载其 1989 年修复。"
        },
        {
          "q": "殿旁还有什么？",
          "a": "旅游局介绍附近有卧佛与方形金色佛塔。"
        }
      ]
    },
    "th": {
      "name": "วัดหมื่นเงินกอง",
      "tagline": "วิหารไม้ล้านนาใกล้วัดพระสิงห์",
      "description": "วัดหมื่นเงินกองเป็นวัดในเมืองเก่าบนถนนสามล้าน มีวิหารไม้แบบล้านนา",
      "summary": "วัดหมื่นเงินกองเป็นวัดในเมืองเก่าบนถนนสามล้าน มีวิหารไม้แบบล้านนา",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "วัดดูแลพื้นที่บูชาและการเข้าชม โปรดสอบถามอาคารที่เปิดและเคารพศาสนกิจ",
      "history": [
        "การท่องเที่ยวแห่งประเทศไทยเล่าตำนานว่าขุนนางผู้มั่งคั่งอุทิศที่ดินสร้างวัด และระบุว่าวิหารไม้ได้รับการบูรณะในปี 2532"
      ],
      "features": [
        "สังเกตเสาตกแต่งและหลังคาเชิดขึ้นของวิหารไม้",
        "ชมพระนอนและเจดีย์ทองฐานสี่เหลี่ยมข้างวิหารในบริเวณที่อนุญาต"
      ],
      "experience": [
        "สังเกตเสาตกแต่งและหลังคาเชิดขึ้นของวิหารไม้",
        "ชมพระนอนและเจดีย์ทองฐานสี่เหลี่ยมข้างวิหารในบริเวณที่อนุญาต"
      ],
      "route": [
        "หาทางเข้าที่เลขที่ 30 ถนนสามล้าน",
        "ตรวจพื้นที่เปิดแล้วชมวิหารไม้อย่างสงบ",
        "ชมพระนอนและเจดีย์ก่อนเดินต่อไปวัดพระสิงห์"
      ],
      "photo": [
        "ถ่ายวิหารไม้จากพื้นที่เปิดและขออนุญาตก่อนถ่ายผู้มาบูชา"
      ],
      "visit": [
        "แต่งกายสุภาพและปฏิบัติตามป้ายวัด"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไปเลขที่ 30 ถนนสามล้านในเมืองเก่า"
      ],
      "faqs": [
        {
          "q": "เป็นวัดพระสิงห์หรือไม่?",
          "a": "ไม่ใช่ วัดหมื่นเงินกองเป็นอีกวัดบนถนนสามล้านซึ่งเดินถึงกันได้"
        },
        {
          "q": "วิหารมีลักษณะเด่นอย่างไร?",
          "a": "ททท. ระบุว่าเป็นวิหารไม้แบบล้านนาและได้รับการบูรณะในปี 2532"
        },
        {
          "q": "ข้างวิหารมีอะไรอีก?",
          "a": "ททท. กล่าวถึงพระนอนและเจดีย์ทองฐานสี่เหลี่ยมใกล้วิหาร"
        }
      ]
    }
  }
},
  "jing-jai-market": {
  "image": "",
  "imageSource": "",
  "mapQuery": "ตลาดจริงใจ เชียงใหม่",
  "address": "45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and individual charges on site",
    "th": "ตรวจสอบค่าเข้าชมและค่าใช้จ่ายแต่ละรายการ ณ สถานที่",
    "zh": "请在现场确认入场及各项费用"
  },
  "hours": {
    "en": "Confirm current hours with the market and individual shops",
    "th": "ตรวจสอบเวลาเปิดกับตลาดและร้านค้าแต่ละแห่ง",
    "zh": "请向市集及各店确认当前开放时间"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/jing-jai-market-chiang-mai",
  "locales": {
    "en": {
      "name": "Jing Jai Market Chiang Mai",
      "tagline": "The tourism authority describes a community for craft lovers and a weekend market including farmers and handmade-goods sections.",
      "description": "A craft and market destination on Atsadathon Road north of Chiang Mai’s old-city centre.",
      "summary": "A craft and market destination on Atsadathon Road north of Chiang Mai’s old-city centre.",
      "managementTitle": "About the market and its management",
      "management": "Individual shops and vendors operate within the market; check the market organiser’s current announcements for event arrangements.",
      "history": [
        "By 2024 the Tourism Authority included Jing Jai in its Chiang Mai visitor recommendations, highlighting produce from farmers alongside local food and handmade goods."
      ],
      "features": [
        "The tourism authority describes a community for craft lovers and a weekend market including farmers and handmade-goods sections.",
        "The Tourism Authority describes products by local designers and artists alongside the weekend craft and farmers’ market."
      ],
      "experience": [
        "The tourism authority describes a community for craft lovers and a weekend market including farmers and handmade-goods sections.",
        "The weekend market and individual shops may keep different hours; check the current schedule before travelling."
      ],
      "route": [
        "From Mae Kha Canal, navigate to 45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "Check the entrance and current visitor notices.",
        "Explore the permitted area, then return using the same location on the map."
      ],
      "photo": [
        "Ask stallholders before close photographs and keep market aisles clear."
      ],
      "visit": [
        "The weekend market and individual shops may keep different hours; check the current schedule before travelling."
      ],
      "transport": [
        "From Mae Kha Canal, navigate to 45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Is Jing Jai the Sunday Walking Street?",
          "a": "No. Jing Jai is a separate market on Atsadathon Road; the Sunday Walking Street follows the old-city street corridor."
        },
        {
          "q": "What is the weekend market known for?",
          "a": "The tourism authority describes farmers and craft-market sections; individual sellers vary."
        },
        {
          "q": "Will all shops follow the weekend market timetable?",
          "a": "Not necessarily. Check the current market schedule and individual shop hours separately."
        }
      ]
    },
    "zh": {
      "name": "真心市集（Jing Jai Market）",
      "tagline": "泰国旅游局将其介绍为手作社群，并提到包含农产品和手工艺区域的周末市集。",
      "description": "位于清迈古城中心以北 Atsadathon 路的手工艺与市集空间。",
      "summary": "位于清迈古城中心以北 Atsadathon 路的手工艺与市集空间。",
      "managementTitle": "关于市集及其管理",
      "management": "场内店铺与摊贩分别经营；活动安排请看市集主办方最新公告。",
      "history": [
        "到 2024 年，泰国旅游局已将真心市集列入清迈推荐，介绍农夫农产品、本地食品与手作商品。"
      ],
      "features": [
        "泰国旅游局将其介绍为手作社群，并提到包含农产品和手工艺区域的周末市集。",
        "泰国旅游局介绍本地设计师与艺术家的作品，以及周末手作和农夫市集。"
      ],
      "experience": [
        "泰国旅游局将其介绍为手作社群，并提到包含农产品和手工艺区域的周末市集。",
        "周末市集与各店营业时间可能不同，出发前请核对最新安排。"
      ],
      "route": [
        "从湄卡运河查询前往45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand的路线。",
        "到达后查看入口与当前访客告示。",
        "参观开放区域后，使用同一地点定位返回。"
      ],
      "photo": [
        "近距离拍摄摊位前先询问摊主，不要阻挡通道。"
      ],
      "visit": [
        "周末市集与各店营业时间可能不同，出发前请核对最新安排。"
      ],
      "transport": [
        "从湄卡运河查询前往45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand的路线。"
      ],
      "faqs": [
        {
          "q": "真心市集就是周日步行街吗？",
          "a": "不是。真心市集在 Atsadathon 路；周日步行街沿古城街道展开。"
        },
        {
          "q": "周末市集有什么特色？",
          "a": "旅游局提到农夫市集和手工艺区域；实际摊贩可能变化。"
        },
        {
          "q": "所有商店都按周末市集时间营业吗？",
          "a": "不一定，请分别核对市集活动与各店的最新时间。"
        }
      ]
    },
    "th": {
      "name": "ตลาดจริงใจ เชียงใหม่",
      "tagline": "การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นชุมชนคนรักงานคราฟต์และมีตลาดสุดสัปดาห์ทั้งสินค้าเกษตรและงานทำมือ",
      "description": "แหล่งงานคราฟต์และตลาดบนถนนอัษฎาธรทางเหนือของใจกลางเมืองเก่าเชียงใหม่",
      "summary": "แหล่งงานคราฟต์และตลาดบนถนนอัษฎาธรทางเหนือของใจกลางเมืองเก่าเชียงใหม่",
      "managementTitle": "เกี่ยวกับตลาดและการดูแล",
      "management": "ร้านค้าและผู้ขายแต่ละรายดำเนินกิจการในพื้นที่ โปรดดูประกาศผู้จัดตลาดเรื่องกิจกรรมปัจจุบัน",
      "history": [
        "ภายในปี 2567 ททท. แนะนำตลาดจริงใจในรายการท่องเที่ยวเชียงใหม่ โดยกล่าวถึงผลผลิตเกษตรกร อาหารท้องถิ่น และงานทำมือ"
      ],
      "features": [
        "การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นชุมชนคนรักงานคราฟต์และมีตลาดสุดสัปดาห์ทั้งสินค้าเกษตรและงานทำมือ",
        "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงสินค้าของนักออกแบบและศิลปินท้องถิ่น รวมถึงตลาดงานคราฟต์และเกษตรกรช่วงสุดสัปดาห์"
      ],
      "experience": [
        "การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นชุมชนคนรักงานคราฟต์และมีตลาดสุดสัปดาห์ทั้งสินค้าเกษตรและงานทำมือ",
        "ตลาดสุดสัปดาห์และร้านแต่ละร้านอาจเปิดต่างเวลากัน ควรตรวจสอบตารางปัจจุบัน"
      ],
      "route": [
        "จากคลองแม่ข่า ตรวจเส้นทางไป 45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand",
        "ตรวจทางเข้าและประกาศผู้เข้าชมปัจจุบัน",
        "ชมพื้นที่ที่เปิด แล้วใช้หมุดเดียวกันเพื่อเดินทางกลับ"
      ],
      "photo": [
        "ขออนุญาตผู้ค้าก่อนถ่ายใกล้และไม่กีดขวางทางเดิน"
      ],
      "visit": [
        "ตลาดสุดสัปดาห์และร้านแต่ละร้านอาจเปิดต่างเวลากัน ควรตรวจสอบตารางปัจจุบัน"
      ],
      "transport": [
        "จากคลองแม่ข่า ตรวจเส้นทางไป 45 Atsadathon Road, Pa Tan, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "ตลาดจริงใจคือถนนคนเดินวันอาทิตย์หรือไม่?",
          "a": "ไม่ ตลาดจริงใจอยู่ถนนอัษฎาธร ส่วนถนนคนเดินวันอาทิตย์อยู่ตามถนนในเมืองเก่า"
        },
        {
          "q": "ตลาดสุดสัปดาห์มีอะไรเด่น?",
          "a": "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงส่วนตลาดเกษตรกรและงานคราฟต์ โดยผู้ขายอาจเปลี่ยนไป"
        },
        {
          "q": "ทุกร้านเปิดตามเวลาตลาดสุดสัปดาห์หรือไม่?",
          "a": "ไม่จำเป็น ควรตรวจสอบตารางตลาดและเวลาเปิดของแต่ละร้านแยกกัน"
        }
      ]
    }
  },
  "additionalSources": [
    "https://thai.tourismthailand.org/Articles/5-must-do-in-chiang-mai"
  ]
},
  "wat-chang-khong": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดช่างฆ้อง ถนนลอยเคราะห์ เชียงใหม่",
  "address": "Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and individual charges on site",
    "th": "ตรวจสอบค่าเข้าชมและค่าใช้จ่ายแต่ละรายการ ณ สถานที่",
    "zh": "请在现场确认入场及各项费用"
  },
  "hours": {
    "en": "Confirm current hours with the temple",
    "th": "ตรวจสอบเวลาเปิดกับวัด",
    "zh": "请向寺方确认当前开放时间"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-changkhong",
  "locales": {
    "en": {
      "name": "Wat Chang Khong",
      "tagline": "The tourism authority identifies the temple as part of the Maha Nikaya Buddhist tradition, on the eastern side of the city.",
      "description": "A Buddhist temple on Loi Khro Road in the Chang Khlan area of Chiang Mai.",
      "summary": "A Buddhist temple on Loi Khro Road in the Chang Khlan area of Chiang Mai.",
      "managementTitle": "About the temple and its care",
      "management": "The temple community directs religious use and visitor access; ask staff about current arrangements.",
      "history": [
        "Thailand’s tourism directory recounts that gong makers migrating from Chiang Saen rebuilt the former Wat Si Phun To in the early Rattanakosin period. Official accounts differ on precise dates."
      ],
      "features": [
        "The tourism authority identifies the temple as part of the Maha Nikaya Buddhist tradition, on the eastern side of the city.",
        "The Tourism Authority describes the main hall as Lanna style with floral patterns and notes Thai, Chinese and Burmese architectural influences."
      ],
      "experience": [
        "The tourism authority identifies the temple as part of the Maha Nikaya Buddhist tradition, on the eastern side of the city.",
        "Follow temple guidance and ask before entering buildings used for worship."
      ],
      "route": [
        "From Mae Kha Canal, navigate to Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "Check the entrance and current visitor notices.",
        "Explore the permitted area, then return using the same location on the map."
      ],
      "photo": [
        "Photograph from permitted grounds and leave space for worshippers."
      ],
      "visit": [
        "Follow temple guidance and ask before entering buildings used for worship."
      ],
      "transport": [
        "From Mae Kha Canal, navigate to Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Where is Wat Chang Khong?",
          "a": "The tourism authority places it on Loi Khro Road in Chang Khlan, Mueang Chiang Mai."
        },
        {
          "q": "What Buddhist tradition does the authority identify?",
          "a": "It identifies Wat Chang Khong as a Maha Nikaya temple."
        },
        {
          "q": "Is it Wat Chedi Luang?",
          "a": "No. They are separate temples; use the Loi Khro Road listing for Wat Chang Khong."
        }
      ]
    },
    "zh": {
      "name": "昌孔寺（Wat Chang Khong）",
      "tagline": "泰国旅游局将寺院列为上座部大宗派（Maha Nikaya）寺院，位置在城市东侧。",
      "description": "位于清迈 Chang Khlan 地区 Loi Khro 路的佛寺。",
      "summary": "位于清迈 Chang Khlan 地区 Loi Khro 路的佛寺。",
      "managementTitle": "关于寺院及其管理",
      "management": "寺院僧团及工作人员安排宗教活动与访客进入；请向寺方确认当前规定。",
      "history": [
        "泰国官方旅游目录记载，早期拉达那哥欣时期，从清盛迁来的制锣工匠重建了原名 Wat Si Phun To 的寺院；官方资料对确切年代说法不同。"
      ],
      "features": [
        "泰国旅游局将寺院列为上座部大宗派（Maha Nikaya）寺院，位置在城市东侧。",
        "泰国旅游局介绍主殿采用兰纳风格及花卉图案，并提及泰国、中国和缅甸建筑影响。"
      ],
      "experience": [
        "泰国旅游局将寺院列为上座部大宗派（Maha Nikaya）寺院，位置在城市东侧。",
        "遵守寺方指引，进入用于宗教活动的建筑前先询问。"
      ],
      "route": [
        "从湄卡运河查询前往Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand的路线。",
        "到达后查看入口与当前访客告示。",
        "参观开放区域后，使用同一地点定位返回。"
      ],
      "photo": [
        "在获准进入的区域拍摄，并为礼佛者留出空间。"
      ],
      "visit": [
        "遵守寺方指引，进入用于宗教活动的建筑前先询问。"
      ],
      "transport": [
        "从湄卡运河查询前往Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand的路线。"
      ],
      "faqs": [
        {
          "q": "昌孔寺在哪里？",
          "a": "旅游局将其定位在清迈 Mueang 区 Chang Khlan 的 Loi Khro 路。"
        },
        {
          "q": "官方资料将它列为哪个佛教宗派？",
          "a": "泰国旅游局将其列为 Maha Nikaya 寺院。"
        },
        {
          "q": "它就是契迪龙寺吗？",
          "a": "不是。两者是不同寺院；请使用 Loi Khro 路的昌孔寺定位。"
        }
      ]
    },
    "th": {
      "name": "วัดช่างฆ้อง",
      "tagline": "การท่องเที่ยวแห่งประเทศไทยระบุว่าเป็นวัดฝ่ายมหานิกายทางด้านตะวันออกของเมือง",
      "description": "วัดบนถนนลอยเคราะห์ในย่านช้างคลาน อำเภอเมืองเชียงใหม่",
      "summary": "วัดบนถนนลอยเคราะห์ในย่านช้างคลาน อำเภอเมืองเชียงใหม่",
      "managementTitle": "เกี่ยวกับวัดและการดูแล",
      "management": "คณะสงฆ์และผู้ดูแลวัดจัดการศาสนกิจและการเข้าชม โปรดสอบถามกติกาปัจจุบัน",
      "history": [
        "ฐานข้อมูลท่องเที่ยวทางการเล่าว่าช่างทำฆ้องจากเชียงแสนสร้างวัดศรีพูนโตขึ้นใหม่ในช่วงต้นรัตนโกสินทร์ โดยข้อมูลทางการระบุปีที่แน่ชัดแตกต่างกัน"
      ],
      "features": [
        "การท่องเที่ยวแห่งประเทศไทยระบุว่าเป็นวัดฝ่ายมหานิกายทางด้านตะวันออกของเมือง",
        "การท่องเที่ยวแห่งประเทศไทยระบุว่าวิหารเป็นแบบล้านนามีลายดอกไม้ และกล่าวถึงอิทธิพลสถาปัตยกรรมไทย จีน และพม่า"
      ],
      "experience": [
        "การท่องเที่ยวแห่งประเทศไทยระบุว่าเป็นวัดฝ่ายมหานิกายทางด้านตะวันออกของเมือง",
        "ปฏิบัติตามคำแนะนำของวัดและสอบถามก่อนเข้าอาคารที่ใช้ประกอบศาสนกิจ"
      ],
      "route": [
        "จากคลองแม่ข่า ตรวจเส้นทางไป Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand",
        "ตรวจทางเข้าและประกาศผู้เข้าชมปัจจุบัน",
        "ชมพื้นที่ที่เปิด แล้วใช้หมุดเดียวกันเพื่อเดินทางกลับ"
      ],
      "photo": [
        "ถ่ายจากบริเวณที่อนุญาตและเว้นทางให้ผู้มาทำบุญ"
      ],
      "visit": [
        "ปฏิบัติตามคำแนะนำของวัดและสอบถามก่อนเข้าอาคารที่ใช้ประกอบศาสนกิจ"
      ],
      "transport": [
        "จากคลองแม่ข่า ตรวจเส้นทางไป Loi Khro Road, Chang Khlan, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "วัดช่างฆ้องอยู่ที่ใด?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุว่าตั้งอยู่บนถนนลอยเคราะห์ ตำบลช้างคลาน อำเภอเมืองเชียงใหม่"
        },
        {
          "q": "วัดอยู่ในนิกายใดตามข้อมูลทางการ?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุว่าเป็นวัดฝ่ายมหานิกาย"
        },
        {
          "q": "เป็นวัดเดียวกับวัดเจดีย์หลวงหรือไม่?",
          "a": "ไม่ เป็นคนละวัด ควรใช้หมุดวัดช่างฆ้องบนถนนลอยเคราะห์"
        }
      ]
    }
  },
  "additionalSources": [
    "https://www.thailandtourismdirectory.go.th/attraction/3314"
  ]
},
  "wat-buak-krok-luang": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดบวกครกหลวง เชียงใหม่",
  "address": "Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-buak-krok-luang",
  "locales": {
    "en": {
      "name": "Wat Buak Krok Luang",
      "tagline": "The paintings depict episodes from the Buddha’s life and Jataka stories. The tourism authority describes them as work by Shan artists.",
      "description": "A temple in Tha Sala, east of central Chiang Mai, known for murals in its Lanna-style worship hall.",
      "summary": "A temple in Tha Sala, east of central Chiang Mai, known for murals in its Lanna-style worship hall.",
      "managementTitle": "About the place and its management",
      "management": "The temple’s monastic community and staff arrange religious use and access; confirm the hall’s current availability directly.",
      "history": [
        "The Tourism Authority says the hall was extensively renovated during Chao Kaew Nawarat’s rule (1911–1939); an inscription dated 1925 may mark that renovation. Its original construction date is unknown."
      ],
      "features": [
        "The paintings depict episodes from the Buddha’s life and Jataka stories. The tourism authority describes them as work by Shan artists."
      ],
      "experience": [
        "The paintings depict episodes from the Buddha’s life and Jataka stories. The tourism authority describes them as work by Shan artists.",
        "The worship hall may not always be accessible. Ask the temple before planning an interior visit and respect photography restrictions."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "The paintings depict episodes from the Buddha’s life and Jataka stories. The tourism authority describes them as work by Shan artists.",
        "The worship hall may not always be accessible. Ask the temple before planning an interior visit and respect photography restrictions."
      ],
      "photo": [
        "Photograph the hall from permitted areas; ask before taking pictures of the murals."
      ],
      "visit": [
        "The worship hall may not always be accessible. Ask the temple before planning an interior visit and respect photography restrictions."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "What is distinctive about this temple?",
          "a": "Its worship hall contains murals of Buddhist narratives, attributed by the tourism authority to Shan artists."
        },
        {
          "q": "Is it in the old city?",
          "a": "No. It is in Tha Sala east of the centre, along the Chiang Mai–San Kamphaeng corridor."
        },
        {
          "q": "Can I always see the murals?",
          "a": "Do not assume the hall is open. Ask the temple about access and photography on the day."
        }
      ]
    },
    "zh": {
      "name": "卜克洛銮寺（Wat Buak Krok Luang）",
      "tagline": "壁画描绘佛陀生平与本生故事；泰国旅游局将其归为掸族画师的作品。",
      "description": "位于清迈市中心以东 Tha Sala 的寺院，兰纳式佛殿内保存壁画。",
      "summary": "位于清迈市中心以东 Tha Sala 的寺院，兰纳式佛殿内保存壁画。",
      "managementTitle": "关于此地及其管理",
      "management": "寺院僧团及工作人员安排宗教活动和访客进入，请直接确认佛殿当前开放情况。",
      "history": [
        "泰国旅游局介绍，礼佛殿在昭觉诺拉时期（1911–1939）大规模修缮；1925 年的铭文可能记载该次修缮。寺院最初建造年代未明。"
      ],
      "features": [
        "壁画描绘佛陀生平与本生故事；泰国旅游局将其归为掸族画师的作品。"
      ],
      "experience": [
        "壁画描绘佛陀生平与本生故事；泰国旅游局将其归为掸族画师的作品。",
        "佛殿未必随时开放，请在安排室内参观前询问寺方，并遵守摄影限制。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "壁画描绘佛陀生平与本生故事；泰国旅游局将其归为掸族画师的作品。",
        "佛殿未必随时开放，请在安排室内参观前询问寺方，并遵守摄影限制。"
      ],
      "photo": [
        "在允许区域拍摄佛殿外观，拍摄壁画前先征得许可。"
      ],
      "visit": [
        "佛殿未必随时开放，请在安排室内参观前询问寺方，并遵守摄影限制。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "这座寺院有什么特色？",
          "a": "佛殿壁画描绘佛教故事，泰国旅游局称其为掸族画师的作品。"
        },
        {
          "q": "寺院在古城内吗？",
          "a": "不在。它位于市中心以东的 Tha Sala，靠近清迈—讪甘烹路线。"
        },
        {
          "q": "任何时候都能看壁画吗？",
          "a": "不要假定佛殿一直开放；请在出发当天向寺方确认入内及摄影安排。"
        }
      ]
    },
    "th": {
      "name": "วัดบวกครกหลวง",
      "tagline": "ภาพเขียนเล่าเรื่องพุทธประวัติและชาดก การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นผลงานช่างชาวไทใหญ่",
      "description": "วัดในตำบลท่าศาลาทางตะวันออกของตัวเมืองเชียงใหม่ มีจิตรกรรมฝาผนังในวิหารล้านนา",
      "summary": "วัดในตำบลท่าศาลาทางตะวันออกของตัวเมืองเชียงใหม่ มีจิตรกรรมฝาผนังในวิหารล้านนา",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "คณะสงฆ์และผู้ดูแลวัดจัดการศาสนกิจและการเข้าชม ควรสอบถามการเปิดวิหารโดยตรง",
      "history": [
        "ททท. ระบุว่าวิหารได้รับการบูรณะครั้งใหญ่สมัยเจ้าแก้วนวรัฐ พ.ศ. 2454–2482 และจารึก พ.ศ. 2468 อาจเป็นปีบูรณะ ส่วนปีสร้างเดิมไม่ปรากฏ"
      ],
      "features": [
        "ภาพเขียนเล่าเรื่องพุทธประวัติและชาดก การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นผลงานช่างชาวไทใหญ่"
      ],
      "experience": [
        "ภาพเขียนเล่าเรื่องพุทธประวัติและชาดก การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นผลงานช่างชาวไทใหญ่",
        "วิหารอาจไม่ได้เปิดตลอดเวลา ควรสอบถามวัดก่อนเดินทางและเคารพข้อจำกัดการถ่ายภาพ"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand",
        "ภาพเขียนเล่าเรื่องพุทธประวัติและชาดก การท่องเที่ยวแห่งประเทศไทยอธิบายว่าเป็นผลงานช่างชาวไทใหญ่",
        "วิหารอาจไม่ได้เปิดตลอดเวลา ควรสอบถามวัดก่อนเดินทางและเคารพข้อจำกัดการถ่ายภาพ"
      ],
      "photo": [
        "ถ่ายวิหารจากพื้นที่ที่อนุญาต และขออนุญาตก่อนถ่ายจิตรกรรมภายใน"
      ],
      "visit": [
        "วิหารอาจไม่ได้เปิดตลอดเวลา ควรสอบถามวัดก่อนเดินทางและเคารพข้อจำกัดการถ่ายภาพ"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Tha Sala, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "วัดนี้มีจุดเด่นอะไร?",
          "a": "วิหารมีจิตรกรรมเรื่องราวทางพุทธศาสนา ซึ่งการท่องเที่ยวแห่งประเทศไทยระบุว่าเป็นงานช่างไทใหญ่"
        },
        {
          "q": "วัดอยู่ในเมืองเก่าหรือไม่?",
          "a": "ไม่ อยู่ตำบลท่าศาลาทางตะวันออกของเมือง บนแนวถนนเชียงใหม่–สันกำแพง"
        },
        {
          "q": "ชมจิตรกรรมได้ตลอดหรือไม่?",
          "a": "ไม่ควรสมมติว่าวิหารเปิดเสมอ โปรดสอบถามวัดเรื่องการเข้าและการถ่ายภาพในวันเดินทาง"
        }
      ]
    }
  }
},
  "wat-puak-hong": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดพวกหงษ์ ถนนสามล้าน เชียงใหม่",
  "address": "Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-puag-hong",
  "locales": {
    "en": {
      "name": "Wat Puak Hong",
      "tagline": "Look at the chedi’s rounded, layered form and compare it with the square brick mass of Wat Chedi Luang.",
      "description": "A temple in Chiang Mai whose circular, tiered chedi is an unusual feature of the city’s religious architecture.",
      "summary": "A temple in Chiang Mai whose circular, tiered chedi is an unusual feature of the city’s religious architecture.",
      "managementTitle": "About the place and its management",
      "management": "The temple community oversees worship and local visitor arrangements; the scope of conservation responsibility should be confirmed on site.",
      "history": [
        "The Tourism Authority reports a tradition that the chedi was built during King Yot Chiang Rai’s reign in 1487; treat the date as a reported tradition."
      ],
      "features": [
        "Look at the chedi’s rounded, layered form and compare it with the square brick mass of Wat Chedi Luang."
      ],
      "experience": [
        "Look at the chedi’s rounded, layered form and compare it with the square brick mass of Wat Chedi Luang.",
        "This is a working religious site; follow temple instructions and confirm access before entering buildings."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "Look at the chedi’s rounded, layered form and compare it with the square brick mass of Wat Chedi Luang.",
        "This is a working religious site; follow temple instructions and confirm access before entering buildings."
      ],
      "photo": [
        "From the grounds, choose a viewpoint that shows the chedi’s stacked circular tiers."
      ],
      "visit": [
        "This is a working religious site; follow temple instructions and confirm access before entering buildings."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "What distinguishes the chedi?",
          "a": "The tourism authority identifies its round, tiered form as unusual among Chiang Mai chedis."
        },
        {
          "q": "Is it the same as Wat Chedi Luang?",
          "a": "No. These are separate temples; compare Puak Hong’s rounded tiers with Chedi Luang’s massive square brick structure."
        },
        {
          "q": "How should I locate the correct temple?",
          "a": "Use the Thai-name map search วัดพวกหงษ์ ถนนสามล้าน เชียงใหม่ and check the listing before travelling."
        }
      ]
    },
    "zh": {
      "name": "卜洪寺（Wat Puak Hong）",
      "tagline": "观察佛塔的圆形层级，再与契迪龙寺巨大的方形砖塔基座作对比。",
      "description": "清迈一座以层叠圆形佛塔为特色的寺院，这种形制在当地并不多见。",
      "summary": "清迈一座以层叠圆形佛塔为特色的寺院，这种形制在当地并不多见。",
      "managementTitle": "关于此地及其管理",
      "management": "寺院僧团及工作人员安排礼佛和访客活动；文物维护的具体责任范围请向寺方确认。",
      "history": [
        "泰国旅游局记载一种说法：佛塔建于清莱育王在位时期的 1487 年；这一年代应视为传说记载。"
      ],
      "features": [
        "观察佛塔的圆形层级，再与契迪龙寺巨大的方形砖塔基座作对比。"
      ],
      "experience": [
        "观察佛塔的圆形层级，再与契迪龙寺巨大的方形砖塔基座作对比。",
        "寺院仍用于宗教活动，请遵守寺方指引，进入建筑前先确认。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "观察佛塔的圆形层级，再与契迪龙寺巨大的方形砖塔基座作对比。",
        "寺院仍用于宗教活动，请遵守寺方指引，进入建筑前先确认。"
      ],
      "photo": [
        "在寺院允许区域寻找能呈现佛塔层叠圆形结构的角度。"
      ],
      "visit": [
        "寺院仍用于宗教活动，请遵守寺方指引，进入建筑前先确认。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "佛塔有什么特别之处？",
          "a": "泰国旅游局指出，这种层叠圆形佛塔在清迈较为少见。"
        },
        {
          "q": "它与契迪龙寺是同一寺院吗？",
          "a": "不是。两处为不同寺院；可比较卜洪寺的圆形塔层与契迪龙寺巨大的方形砖基座。"
        },
        {
          "q": "如何避免导航到同名地点？",
          "a": "用泰文 วัดพวกหงษ์ 加清迈搜索地图，并在出发前核对地点。"
        }
      ]
    },
    "th": {
      "name": "วัดพวกหงษ์",
      "tagline": "สังเกตชั้นเจดีย์ทรงกลม แล้วเปรียบเทียบกับฐานอิฐสี่เหลี่ยมขนาดใหญ่ของวัดเจดีย์หลวง",
      "description": "วัดในเชียงใหม่ที่มีเจดีย์ทรงกลมเป็นชั้นซึ่งพบไม่บ่อยในเมือง",
      "summary": "วัดในเชียงใหม่ที่มีเจดีย์ทรงกลมเป็นชั้นซึ่งพบไม่บ่อยในเมือง",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "คณะสงฆ์และผู้ดูแลวัดจัดการศาสนกิจและการเข้าชม ส่วนขอบเขตผู้รับผิดชอบงานอนุรักษ์ควรสอบถามที่วัด",
      "history": [
        "ททท. กล่าวตามคำบอกเล่าว่าเจดีย์สร้างในรัชสมัยพระยอดเชียงราย พ.ศ. 2030 จึงควรมองปีนี้เป็นข้อมูลตามคำบอกเล่า"
      ],
      "features": [
        "สังเกตชั้นเจดีย์ทรงกลม แล้วเปรียบเทียบกับฐานอิฐสี่เหลี่ยมขนาดใหญ่ของวัดเจดีย์หลวง"
      ],
      "experience": [
        "สังเกตชั้นเจดีย์ทรงกลม แล้วเปรียบเทียบกับฐานอิฐสี่เหลี่ยมขนาดใหญ่ของวัดเจดีย์หลวง",
        "เป็นศาสนสถานที่ยังใช้งาน โปรดปฏิบัติตามคำแนะนำของวัดและตรวจสอบก่อนเข้าอาคาร"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand",
        "สังเกตชั้นเจดีย์ทรงกลม แล้วเปรียบเทียบกับฐานอิฐสี่เหลี่ยมขนาดใหญ่ของวัดเจดีย์หลวง",
        "เป็นศาสนสถานที่ยังใช้งาน โปรดปฏิบัติตามคำแนะนำของวัดและตรวจสอบก่อนเข้าอาคาร"
      ],
      "photo": [
        "เลือกมุมจากภายในบริเวณวัดที่เห็นชั้นวงกลมของเจดีย์"
      ],
      "visit": [
        "เป็นศาสนสถานที่ยังใช้งาน โปรดปฏิบัติตามคำแนะนำของวัดและตรวจสอบก่อนเข้าอาคาร"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Samlan Road, Phra Sing, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "เจดีย์มีลักษณะเด่นอย่างไร?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุว่าเจดีย์ทรงกลมซ้อนชั้นเช่นนี้พบไม่บ่อยในเชียงใหม่"
        },
        {
          "q": "เป็นวัดเดียวกับวัดเจดีย์หลวงหรือไม่?",
          "a": "ไม่ เป็นคนละวัด เปรียบเทียบชั้นกลมของวัดพวกหงษ์กับฐานอิฐสี่เหลี่ยมขนาดใหญ่ของวัดเจดีย์หลวง"
        },
        {
          "q": "ค้นหาวัดให้ถูกแห่งอย่างไร?",
          "a": "ใช้ชื่อ วัดพวกหงษ์ ถนนสามล้าน เชียงใหม่ ในแผนที่และตรวจสอบตำแหน่งก่อนเดินทาง"
        }
      ]
    }
  }
},
  "wat-pa-pao": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดป่าเป้า เชียงใหม่",
  "address": "Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-pa-pao",
  "locales": {
    "en": {
      "name": "Wat Pa Pao",
      "tagline": "The Tourism Authority of Thailand links the temple with the Tai Yai (Shan) community and describes a school and a museum within the compound.",
      "description": "A Buddhist temple on Manee Nopparat Road on the northern side of Chiang Mai’s old city.",
      "summary": "A Buddhist temple on Manee Nopparat Road on the northern side of Chiang Mai’s old city.",
      "managementTitle": "About the place and its management",
      "management": "The temple community manages religious activity. Ask the temple directly about access to the school and museum.",
      "history": [
        "The Tourism Authority dates the temple’s founding to 1883, during Chao Inthawichayanon’s reign, with Lady Bua Lai and Tai Yai people involved."
      ],
      "features": [
        "The Tourism Authority of Thailand links the temple with the Tai Yai (Shan) community and describes a school and a museum within the compound."
      ],
      "experience": [
        "The Tourism Authority of Thailand links the temple with the Tai Yai (Shan) community and describes a school and a museum within the compound.",
        "Ask the temple whether the museum and particular buildings are accessible before planning an interior visit."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "The Tourism Authority of Thailand links the temple with the Tai Yai (Shan) community and describes a school and a museum within the compound.",
        "Ask the temple whether the museum and particular buildings are accessible before planning an interior visit."
      ],
      "photo": [
        "Observe the temple buildings from permitted grounds and avoid interrupting worship or classes."
      ],
      "visit": [
        "Ask the temple whether the museum and particular buildings are accessible before planning an interior visit."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "What community is associated with Wat Pa Pao?",
          "a": "The Thai tourism authority describes it as a temple associated with Chiang Mai’s Tai Yai community."
        },
        {
          "q": "Is the museum always open?",
          "a": "The tourism authority mentions a museum in the compound, but current access should be confirmed with the temple."
        },
        {
          "q": "Where is it relative to the monument?",
          "a": "It is on Manee Nopparat Road north of the old-city centre, rather than in the monument square."
        }
      ]
    },
    "zh": {
      "name": "帕炮寺（Wat Pa Pao）",
      "tagline": "泰国旅游局介绍了寺院与掸族社群的联系，并提到院内的学校与博物馆。",
      "description": "位于清迈古城北侧 Manee Nopparat 路的佛寺。",
      "summary": "位于清迈古城北侧 Manee Nopparat 路的佛寺。",
      "managementTitle": "关于此地及其管理",
      "management": "寺院僧团安排宗教活动；学校和博物馆的参观范围请直接向寺方确认。",
      "history": [
        "泰国旅游局将寺院创建追溯至 1883 年因他威猜亚暖统治时期，由 Bua Lai 女士与掸族居民参与兴建。"
      ],
      "features": [
        "泰国旅游局介绍了寺院与掸族社群的联系，并提到院内的学校与博物馆。"
      ],
      "experience": [
        "泰国旅游局介绍了寺院与掸族社群的联系，并提到院内的学校与博物馆。",
        "安排室内参观前，请向寺方确认博物馆和各建筑是否开放。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "泰国旅游局介绍了寺院与掸族社群的联系，并提到院内的学校与博物馆。",
        "安排室内参观前，请向寺方确认博物馆和各建筑是否开放。"
      ],
      "photo": [
        "在允许区域观察寺院建筑，避免打扰礼佛或上课。"
      ],
      "visit": [
        "安排室内参观前，请向寺方确认博物馆和各建筑是否开放。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "帕炮寺与哪个社群有关？",
          "a": "泰国旅游局介绍了这座寺院与清迈掸族社群的联系。"
        },
        {
          "q": "院内博物馆一直开放吗？",
          "a": "旅游局提到院内设有博物馆，但当前能否参观须向寺方确认。"
        },
        {
          "q": "从纪念碑往哪里走？",
          "a": "寺院在古城中心以北的 Manee Nopparat 路，不在纪念碑广场内。"
        }
      ]
    },
    "th": {
      "name": "วัดป่าเป้า",
      "tagline": "การท่องเที่ยวแห่งประเทศไทยเชื่อมโยงวัดกับชุมชนไทใหญ่ และกล่าวถึงโรงเรียนกับพิพิธภัณฑ์ในบริเวณวัด",
      "description": "วัดบนถนนมณีนพรัตน์ทางด้านเหนือของเมืองเก่าเชียงใหม่",
      "summary": "วัดบนถนนมณีนพรัตน์ทางด้านเหนือของเมืองเก่าเชียงใหม่",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "คณะสงฆ์และผู้ดูแลวัดจัดการศาสนกิจ โปรดสอบถามวัดเรื่องการเข้าโรงเรียนและพิพิธภัณฑ์โดยตรง",
      "history": [
        "ททท. ระบุว่าสร้างวัดเมื่อ พ.ศ. 2426 สมัยพระเจ้าอินทวิชยานนท์ โดยเจ้าบัวไหลและชาวไทใหญ่ร่วมสร้าง"
      ],
      "features": [
        "การท่องเที่ยวแห่งประเทศไทยเชื่อมโยงวัดกับชุมชนไทใหญ่ และกล่าวถึงโรงเรียนกับพิพิธภัณฑ์ในบริเวณวัด"
      ],
      "experience": [
        "การท่องเที่ยวแห่งประเทศไทยเชื่อมโยงวัดกับชุมชนไทใหญ่ และกล่าวถึงโรงเรียนกับพิพิธภัณฑ์ในบริเวณวัด",
        "สอบถามวัดก่อนว่าพิพิธภัณฑ์และอาคารแต่ละหลังเปิดให้เข้าชมหรือไม่"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand",
        "การท่องเที่ยวแห่งประเทศไทยเชื่อมโยงวัดกับชุมชนไทใหญ่ และกล่าวถึงโรงเรียนกับพิพิธภัณฑ์ในบริเวณวัด",
        "สอบถามวัดก่อนว่าพิพิธภัณฑ์และอาคารแต่ละหลังเปิดให้เข้าชมหรือไม่"
      ],
      "photo": [
        "ชมอาคารจากบริเวณที่อนุญาตโดยไม่รบกวนการทำบุญหรือการเรียน"
      ],
      "visit": [
        "สอบถามวัดก่อนว่าพิพิธภัณฑ์และอาคารแต่ละหลังเปิดให้เข้าชมหรือไม่"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Manee Nopparat Road, Chang Moi, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "วัดป่าเป้าเกี่ยวข้องกับชุมชนใด?",
          "a": "การท่องเที่ยวแห่งประเทศไทยอธิบายความเชื่อมโยงของวัดกับชุมชนไทใหญ่ในเชียงใหม่"
        },
        {
          "q": "พิพิธภัณฑ์เปิดตลอดหรือไม่?",
          "a": "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงพิพิธภัณฑ์ในวัด แต่ควรสอบถามวัดเรื่องการเปิดปัจจุบัน"
        },
        {
          "q": "วัดอยู่ตรงไหนเมื่อเทียบกับอนุสาวรีย์?",
          "a": "อยู่บนถนนมณีนพรัตน์ทางเหนือของใจกลางเมืองเก่า ไม่ได้อยู่ในลานอนุสาวรีย์"
        }
      ]
    }
  }
},
  "ban-khang-wat": {
  "image": "",
  "imageSource": "",
  "mapQuery": "บ้านข้างวัด เชียงใหม่",
  "address": "Suthep, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/ban-khang-wat",
  "locales": {
    "en": {
      "name": "Ban Khang Wat",
      "tagline": "Thailand’s tourism authority lists this as a local shopping and market destination; its independent shops offer a different stop from the old-city temples.",
      "description": "A small arts and shopping community in the Suthep area west of Chiang Mai’s old city.",
      "summary": "A small arts and shopping community in the Suthep area west of Chiang Mai’s old city.",
      "managementTitle": "About the place and its management",
      "management": "The community consists of independently operated shops and spaces; verify individual opening and workshop arrangements directly.",
      "history": [
        "A 2020 Tourism Authority itinerary already described Ban Khang Wat as an arts complex where local artists present crafts; individual businesses and activities continue to change."
      ],
      "features": [
        "Thailand’s tourism authority lists this as a local shopping and market destination; its independent shops offer a different stop from the old-city temples."
      ],
      "experience": [
        "Thailand’s tourism authority lists this as a local shopping and market destination; its independent shops offer a different stop from the old-city temples.",
        "Shops and activities can operate on different schedules. Check the venue and individual makers before a planned workshop."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Suthep, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "Thailand’s tourism authority lists this as a local shopping and market destination; its independent shops offer a different stop from the old-city temples.",
        "Shops and activities can operate on different schedules. Check the venue and individual makers before a planned workshop."
      ],
      "photo": [
        "Ask individual makers before photographing products, workspaces or people."
      ],
      "visit": [
        "Shops and activities can operate on different schedules. Check the venue and individual makers before a planned workshop."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Suthep, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Is Ban Khang Wat itself Wat Umong?",
          "a": "No. It is a separate shopping and arts community in the same western area; Wat Umong is an active temple."
        },
        {
          "q": "Can I attend a workshop without booking?",
          "a": "Individual makers set their own activities and booking rules; contact the relevant shop first."
        },
        {
          "q": "Is it in the old-city walking loop?",
          "a": "It is in Suthep west of the old city; allow extra travel time or use local transport."
        }
      ]
    },
    "zh": {
      "name": "班康瓦手作村（Ban Khang Wat）",
      "tagline": "泰国旅游局将这里列为本地购物与市集地点；独立店铺与古城寺院提供不同的游览体验。",
      "description": "清迈古城以西 Suthep 地区的小型艺术和商店社区。",
      "summary": "清迈古城以西 Suthep 地区的小型艺术和商店社区。",
      "managementTitle": "关于此地及其管理",
      "management": "社区由分别经营的商店和空间组成；开放及工作坊预约安排请直接向各店确认。",
      "history": [
        "泰国旅游局 2020 年的行程已将班康瓦介绍为本地艺术家展示手工艺的艺术社区；店铺及活动会随时间变化。"
      ],
      "features": [
        "泰国旅游局将这里列为本地购物与市集地点；独立店铺与古城寺院提供不同的游览体验。"
      ],
      "experience": [
        "泰国旅游局将这里列为本地购物与市集地点；独立店铺与古城寺院提供不同的游览体验。",
        "各店和活动时间可能不同，计划参加工作坊前请分别向场地及手作者确认。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Suthep, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "泰国旅游局将这里列为本地购物与市集地点；独立店铺与古城寺院提供不同的游览体验。",
        "各店和活动时间可能不同，计划参加工作坊前请分别向场地及手作者确认。"
      ],
      "photo": [
        "拍摄作品、工作空间或人物前，请询问店主。"
      ],
      "visit": [
        "各店和活动时间可能不同，计划参加工作坊前请分别向场地及手作者确认。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Suthep, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "班康瓦就是乌蒙寺吗？",
          "a": "不是。班康瓦是艺术商店社区，乌蒙寺是西部同一区域的另一座活跃寺院。"
        },
        {
          "q": "不预约就能参加工作坊吗？",
          "a": "各手作者自行安排活动和预约，请先联系感兴趣的店铺。"
        },
        {
          "q": "它在古城步行环线上吗？",
          "a": "它位于古城以西的 Suthep，应额外预留交通时间或使用当地交通。"
        }
      ]
    },
    "th": {
      "name": "บ้านข้างวัด",
      "tagline": "การท่องเที่ยวแห่งประเทศไทยจัดให้เป็นแหล่งชอปปิงและตลาดท้องถิ่น ร้านอิสระให้ประสบการณ์ต่างจากการชมวัดในเมืองเก่า",
      "description": "ชุมชนร้านค้าและงานศิลปะขนาดย่อมในย่านสุเทพทางตะวันตกของเมืองเก่าเชียงใหม่",
      "summary": "ชุมชนร้านค้าและงานศิลปะขนาดย่อมในย่านสุเทพทางตะวันตกของเมืองเก่าเชียงใหม่",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "ชุมชนประกอบด้วยร้านและพื้นที่ที่ดำเนินการแยกกัน ควรตรวจสอบเวลาและการจองกับแต่ละร้าน",
      "history": [
        "แผนเที่ยวของ ททท. ปี 2563 กล่าวถึงบ้านข้างวัดว่าเป็นพื้นที่ศิลปะที่ศิลปินท้องถิ่นนำเสนองานคราฟต์ ร้านและกิจกรรมแต่ละแห่งเปลี่ยนแปลงได้"
      ],
      "features": [
        "การท่องเที่ยวแห่งประเทศไทยจัดให้เป็นแหล่งชอปปิงและตลาดท้องถิ่น ร้านอิสระให้ประสบการณ์ต่างจากการชมวัดในเมืองเก่า"
      ],
      "experience": [
        "การท่องเที่ยวแห่งประเทศไทยจัดให้เป็นแหล่งชอปปิงและตลาดท้องถิ่น ร้านอิสระให้ประสบการณ์ต่างจากการชมวัดในเมืองเก่า",
        "แต่ละร้านและกิจกรรมอาจเปิดต่างกัน ควรตรวจสอบสถานที่และผู้จัดก่อนวางแผนเวิร์กช็อป"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Suthep, Mueang Chiang Mai, Chiang Mai, Thailand",
        "การท่องเที่ยวแห่งประเทศไทยจัดให้เป็นแหล่งชอปปิงและตลาดท้องถิ่น ร้านอิสระให้ประสบการณ์ต่างจากการชมวัดในเมืองเก่า",
        "แต่ละร้านและกิจกรรมอาจเปิดต่างกัน ควรตรวจสอบสถานที่และผู้จัดก่อนวางแผนเวิร์กช็อป"
      ],
      "photo": [
        "สอบถามเจ้าของร้านก่อนถ่ายสินค้า พื้นที่ทำงาน หรือบุคคล"
      ],
      "visit": [
        "แต่ละร้านและกิจกรรมอาจเปิดต่างกัน ควรตรวจสอบสถานที่และผู้จัดก่อนวางแผนเวิร์กช็อป"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Suthep, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "บ้านข้างวัดคือวัดอุโมงค์หรือไม่?",
          "a": "ไม่ บ้านข้างวัดเป็นชุมชนร้านค้าและศิลปะ ส่วนวัดอุโมงค์เป็นศาสนสถานอีกแห่งในย่านตะวันตก"
        },
        {
          "q": "เข้าร่วมเวิร์กช็อปโดยไม่จองได้หรือไม่?",
          "a": "ผู้จัดแต่ละร้านกำหนดกิจกรรมและการจองเอง ควรติดต่อร้านที่สนใจก่อน"
        },
        {
          "q": "อยู่ในเส้นทางเดินรอบเมืองเก่าหรือไม่?",
          "a": "สถานที่อยู่ย่านสุเทพทางตะวันตกนอกเมืองเก่า ควรเผื่อเวลาเดินทางหรือใช้รถท้องถิ่น"
        }
      ]
    }
  },
  "additionalSources": [
    "https://www.tourismthailand.org/Articles/budget-chiang-mai-trip"
  ]
},
  "royal-park-rajapruek": {
  "image": "",
  "imageSource": "",
  "mapQuery": "อุทยานหลวงราชพฤกษ์ เชียงใหม่",
  "address": "334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://rprp2025.royalparkrajapruek.org/en/WhatWeDo/TheRoyalParkRajapruek",
  "locales": {
    "en": {
      "name": "Royal Park Rajapruek",
      "tagline": "Explore themed gardens and the Lanna-style Ho Kham Luang pavilion, linking horticulture with northern Thai architecture.",
      "description": "A horticultural park in Mae Hia southwest of central Chiang Mai, developed from the 2006 Royal Flora exposition site.",
      "summary": "A horticultural park in Mae Hia southwest of central Chiang Mai, developed from the 2006 Royal Flora exposition site.",
      "managementTitle": "About the place and its management",
      "management": "The Highland Research and Development Institute (Public Organization) operates Royal Park Rajapruek.",
      "history": [
        "The park developed after the 2006 Royal Flora Ratchaphruek exposition and was further developed through the 2011 exposition, according to its operator HRDI."
      ],
      "features": [
        "Explore themed gardens and the Lanna-style Ho Kham Luang pavilion, linking horticulture with northern Thai architecture."
      ],
      "experience": [
        "Explore themed gardens and the Lanna-style Ho Kham Luang pavilion, linking horticulture with northern Thai architecture.",
        "Allow transport time from the old city and check the park’s current visitor information before travel."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "Explore themed gardens and the Lanna-style Ho Kham Luang pavilion, linking horticulture with northern Thai architecture.",
        "Allow transport time from the old city and check the park’s current visitor information before travel."
      ],
      "photo": [
        "From an open path, frame the Ho Kham Luang pavilion with its surrounding gardens."
      ],
      "visit": [
        "Allow transport time from the old city and check the park’s current visitor information before travel."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "What is the connection to the 2006 exposition?",
          "a": "The park developed from the site of Royal Flora Ratchaphruek 2006 and continued as a horticultural learning destination."
        },
        {
          "q": "What building should I look for?",
          "a": "Ho Kham Luang is a Lanna-style pavilion in the park; see the park map for its location and current access."
        },
        {
          "q": "Is this a short walk from Three Kings Monument?",
          "a": "No. The park is in Mae Hia southwest of the old city, so allow transport time."
        }
      ]
    },
    "zh": {
      "name": "皇家拉查帕克公园",
      "tagline": "游览主题花园及兰纳风格的 Ho Kham Luang 展馆，观察园艺与泰北建筑如何结合。",
      "description": "位于清迈市中心西南侧 Mae Hia 的园艺公园，由 2006 年皇家园艺博览会场地发展而来。",
      "summary": "位于清迈市中心西南侧 Mae Hia 的园艺公园，由 2006 年皇家园艺博览会场地发展而来。",
      "managementTitle": "关于此地及其管理",
      "management": "泰国高地研究与发展机构（公共组织）运营皇家拉查帕克公园。",
      "history": [
        "运营机构高地研究与发展研究所介绍，公园在 2006 年皇家花卉博览会后形成，并借 2011 年博览会进一步发展。"
      ],
      "features": [
        "游览主题花园及兰纳风格的 Ho Kham Luang 展馆，观察园艺与泰北建筑如何结合。"
      ],
      "experience": [
        "游览主题花园及兰纳风格的 Ho Kham Luang 展馆，观察园艺与泰北建筑如何结合。",
        "从古城出发须预留交通时间，出行前核对公园最新访客信息。"
      ],
      "route": [
        "从湄卡运河安排交通前往 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "游览主题花园及兰纳风格的 Ho Kham Luang 展馆，观察园艺与泰北建筑如何结合。",
        "从古城出发须预留交通时间，出行前核对公园最新访客信息。"
      ],
      "photo": [
        "从开放步道将 Ho Kham Luang 展馆与周围花园一同纳入画面。"
      ],
      "visit": [
        "从古城出发须预留交通时间，出行前核对公园最新访客信息。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "公园与 2006 年博览会有什么关系？",
          "a": "公园由 2006 年皇家园艺博览会场地发展而来，延续为园艺学习场所。"
        },
        {
          "q": "园内有什么值得观察的建筑？",
          "a": "Ho Kham Luang 是兰纳风格展馆，具体位置和当前开放情况请看园区地图。"
        },
        {
          "q": "从三王纪念碑步行很近吗？",
          "a": "不近。公园位于古城西南侧 Mae Hia，需预留交通时间。"
        }
      ]
    },
    "th": {
      "name": "อุทยานหลวงราชพฤกษ์",
      "tagline": "ชมสวนจัดแสดงและหอคำหลวงซึ่งใช้สถาปัตยกรรมล้านนา เชื่อมโยงความรู้พืชสวนกับศิลปะภาคเหนือ",
      "description": "อุทยานพืชสวนในตำบลแม่เหียะทางตะวันตกเฉียงใต้ของเชียงใหม่ พัฒนาจากพื้นที่มหกรรมพืชสวนโลกปี 2549",
      "summary": "อุทยานพืชสวนในตำบลแม่เหียะทางตะวันตกเฉียงใต้ของเชียงใหม่ พัฒนาจากพื้นที่มหกรรมพืชสวนโลกปี 2549",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "สถาบันวิจัยและพัฒนาพื้นที่สูง (องค์การมหาชน) บริหารอุทยานหลวงราชพฤกษ์",
      "history": [
        "สถาบันวิจัยและพัฒนาพื้นที่สูงผู้ดูแลระบุว่าอุทยานพัฒนาต่อจากงานราชพฤกษ์ พ.ศ. 2549 และพัฒนาเพิ่มเติมผ่านงานปี 2554"
      ],
      "features": [
        "ชมสวนจัดแสดงและหอคำหลวงซึ่งใช้สถาปัตยกรรมล้านนา เชื่อมโยงความรู้พืชสวนกับศิลปะภาคเหนือ"
      ],
      "experience": [
        "ชมสวนจัดแสดงและหอคำหลวงซึ่งใช้สถาปัตยกรรมล้านนา เชื่อมโยงความรู้พืชสวนกับศิลปะภาคเหนือ",
        "เผื่อเวลาเดินทางจากเมืองเก่าและตรวจสอบข้อมูลผู้เข้าชมล่าสุดก่อนออกเดินทาง"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand",
        "ชมสวนจัดแสดงและหอคำหลวงซึ่งใช้สถาปัตยกรรมล้านนา เชื่อมโยงความรู้พืชสวนกับศิลปะภาคเหนือ",
        "เผื่อเวลาเดินทางจากเมืองเก่าและตรวจสอบข้อมูลผู้เข้าชมล่าสุดก่อนออกเดินทาง"
      ],
      "photo": [
        "จากทางเดินที่เปิดให้เข้าชม ถ่ายหอคำหลวงพร้อมสวนโดยรอบ"
      ],
      "visit": [
        "เผื่อเวลาเดินทางจากเมืองเก่าและตรวจสอบข้อมูลผู้เข้าชมล่าสุดก่อนออกเดินทาง"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป 334 Moo 3, Mae Hia, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "อุทยานเกี่ยวข้องกับงานปี 2549 อย่างไร?",
          "a": "พื้นที่พัฒนาต่อจากมหกรรมพืชสวนโลกเฉลิมพระเกียรติฯ ราชพฤกษ์ 2549 เป็นแหล่งเรียนรู้ด้านพืชสวน"
        },
        {
          "q": "มีอาคารใดน่าสังเกต?",
          "a": "หอคำหลวงเป็นอาคารสถาปัตยกรรมล้านนาในอุทยาน ตรวจสอบตำแหน่งและการเข้าชมจากแผนที่อุทยาน"
        },
        {
          "q": "เดินจากอนุสาวรีย์สามกษัตริย์ใกล้หรือไม่?",
          "a": "ไม่ อุทยานอยู่แม่เหียะทางตะวันตกเฉียงใต้ของเมืองเก่า ควรเผื่อเวลาเดินทาง"
        }
      ]
    }
  }
},
  "wat-inthrawat-ton-kwen": {
  "image": "",
  "imageSource": "",
  "mapQuery": "วัดต้นเกว๋น วัดอินทราวาส เชียงใหม่",
  "address": "Nong Khwai, Hang Dong, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "45–60 minutes",
    "zh": "45–60 分钟",
    "th": "45–60 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/wat-inthrawat-wat-tonkwen",
  "locales": {
    "en": {
      "name": "Wat Inthrawat (Wat Ton Kwen)",
      "tagline": "The tourism authority highlights its old worship hall and carefully carved wooden architectural details.",
      "description": "A temple in Nong Khwai, Hang Dong, southwest of Chiang Mai.",
      "summary": "A temple in Nong Khwai, Hang Dong, southwest of Chiang Mai.",
      "managementTitle": "About the place and its management",
      "management": "The temple community oversees religious use; confirm visitor access with the temple.",
      "history": [
        "Thailand’s cultural-environment office dates the temple approximately to 1856–1869, during Chao Kawilorot Suriyawong’s rule; its original name Ton Kwen came from a local tree."
      ],
      "features": [
        "The tourism authority highlights its old worship hall and carefully carved wooden architectural details."
      ],
      "experience": [
        "The tourism authority highlights its old worship hall and carefully carved wooden architectural details.",
        "The temple is an active religious place. Confirm access to individual buildings and follow local instructions."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Nong Khwai, Hang Dong, Chiang Mai, Thailand.",
        "The tourism authority highlights its old worship hall and carefully carved wooden architectural details.",
        "The temple is an active religious place. Confirm access to individual buildings and follow local instructions."
      ],
      "photo": [
        "Observe the wooden hall from permitted grounds without interrupting worship."
      ],
      "visit": [
        "The temple is an active religious place. Confirm access to individual buildings and follow local instructions."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Nong Khwai, Hang Dong, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Are Wat Inthrawat and Wat Ton Kwen different temples?",
          "a": "No. The tourism authority uses Wat Ton Kwen as an alternative name for Wat Inthrawat."
        },
        {
          "q": "What is distinctive about the hall?",
          "a": "The tourism authority notes its older worship hall and carved wooden details."
        },
        {
          "q": "Is it within the old city walls?",
          "a": "No. It is in Nong Khwai, Hang Dong, southwest of the city; plan transport."
        }
      ]
    },
    "zh": {
      "name": "因他拉瓦寺（ต้นเกว๋น寺）",
      "tagline": "泰国旅游局特别介绍了寺院的古老佛殿及精细木雕建筑细节。",
      "description": "位于清迈西南侧 Hang Dong 县 Nong Khwai 的佛寺。",
      "summary": "位于清迈西南侧 Hang Dong 县 Nong Khwai 的佛寺。",
      "managementTitle": "关于此地及其管理",
      "management": "寺院僧团及工作人员安排宗教使用；访客进入情况请向寺方确认。",
      "history": [
        "泰国自然资源与环境政策规划办公室将建寺年代约定为 1856–1869 年，即 Kawilorot Suriyawong 统治时期；原名 Ton Kwen 来自当地树木。"
      ],
      "features": [
        "泰国旅游局特别介绍了寺院的古老佛殿及精细木雕建筑细节。"
      ],
      "experience": [
        "泰国旅游局特别介绍了寺院的古老佛殿及精细木雕建筑细节。",
        "这里仍用于宗教活动，请确认各建筑是否可进入并遵守寺方指引。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Nong Khwai, Hang Dong, Chiang Mai, Thailand。",
        "泰国旅游局特别介绍了寺院的古老佛殿及精细木雕建筑细节。",
        "这里仍用于宗教活动，请确认各建筑是否可进入并遵守寺方指引。"
      ],
      "photo": [
        "从获准进入的区域观察木殿，不要打扰礼佛。"
      ],
      "visit": [
        "这里仍用于宗教活动，请确认各建筑是否可进入并遵守寺方指引。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Nong Khwai, Hang Dong, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "Wat Inthrawat 和 Wat Ton Kwen 是两座寺院吗？",
          "a": "不是。泰国旅游局将 Wat Ton Kwen 列为 Wat Inthrawat 的别称。"
        },
        {
          "q": "佛殿有什么特色？",
          "a": "旅游局介绍了古老的佛殿及精细木雕细节。"
        },
        {
          "q": "寺院位于古城墙内吗？",
          "a": "不在。它位于清迈西南侧 Hang Dong 县 Nong Khwai，需要安排交通。"
        }
      ]
    },
    "th": {
      "name": "วัดอินทราวาส (วัดต้นเกว๋น)",
      "tagline": "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงวิหารเก่าและรายละเอียดไม้แกะสลักของวัด",
      "description": "วัดในตำบลหนองควาย อำเภอหางดง ทางตะวันตกเฉียงใต้ของเชียงใหม่",
      "summary": "วัดในตำบลหนองควาย อำเภอหางดง ทางตะวันตกเฉียงใต้ของเชียงใหม่",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "คณะสงฆ์และผู้ดูแลวัดจัดการศาสนกิจ โปรดสอบถามการเข้าชมกับวัด",
      "history": [
        "สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อมระบุว่าวัดสร้างราว พ.ศ. 2399–2412 สมัยเจ้ากาวิโลรสสุริยวงศ์ ชื่อเดิมต้นเกว๋นมาจากต้นไม้ท้องถิ่น"
      ],
      "features": [
        "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงวิหารเก่าและรายละเอียดไม้แกะสลักของวัด"
      ],
      "experience": [
        "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงวิหารเก่าและรายละเอียดไม้แกะสลักของวัด",
        "เป็นศาสนสถานที่ยังใช้งาน ควรสอบถามการเข้าอาคารและปฏิบัติตามคำแนะนำของวัด"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Nong Khwai, Hang Dong, Chiang Mai, Thailand",
        "การท่องเที่ยวแห่งประเทศไทยกล่าวถึงวิหารเก่าและรายละเอียดไม้แกะสลักของวัด",
        "เป็นศาสนสถานที่ยังใช้งาน ควรสอบถามการเข้าอาคารและปฏิบัติตามคำแนะนำของวัด"
      ],
      "photo": [
        "ชมและถ่ายวิหารไม้จากบริเวณที่อนุญาตโดยไม่รบกวนการทำบุญ"
      ],
      "visit": [
        "เป็นศาสนสถานที่ยังใช้งาน ควรสอบถามการเข้าอาคารและปฏิบัติตามคำแนะนำของวัด"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Nong Khwai, Hang Dong, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "วัดอินทราวาสกับวัดต้นเกว๋นเป็นคนละวัดหรือไม่?",
          "a": "ไม่ การท่องเที่ยวแห่งประเทศไทยใช้ชื่อวัดต้นเกว๋นเป็นชื่อเรียกอีกชื่อของวัดอินทราวาส"
        },
        {
          "q": "วิหารมีจุดเด่นอะไร?",
          "a": "การท่องเที่ยวแห่งประเทศไทยระบุถึงวิหารเก่าและรายละเอียดไม้แกะสลัก"
        },
        {
          "q": "วัดอยู่ในกำแพงเมืองเก่าหรือไม่?",
          "a": "ไม่ วัดอยู่ตำบลหนองควาย อำเภอหางดง ทางตะวันตกเฉียงใต้ ควรจัดรถเดินทาง"
        }
      ]
    }
  },
  "additionalSources": [
    "https://culturalenvi.onep.go.th/site/detail/4873"
  ]
},
  "chiang-mai-zoo": {
  "image": "",
  "imageSource": "",
  "mapQuery": "สวนสัตว์เชียงใหม่ ถนนห้วยแก้ว",
  "address": "100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://www.chiangmaizoo.com/",
  "locales": {
    "en": {
      "name": "Chiang Mai Zoo",
      "tagline": "The zoo’s own visitor information distinguishes general zoo admission from separately ticketed attractions such as the aquarium.",
      "description": "A zoo on Huay Kaew Road west of central Chiang Mai, on the approach towards Doi Suthep.",
      "summary": "A zoo on Huay Kaew Road west of central Chiang Mai, on the approach towards Doi Suthep.",
      "managementTitle": "About the place and its management",
      "management": "The Zoological Park Organization of Thailand manages Chiang Mai Zoo; zoo staff administer visitor facilities and current arrangements.",
      "history": [
        "The Chiang Mai City Heritage Centre records a first public opening in 1957; Suthep Municipality says the zoo came under the Zoological Park Organization in 1977."
      ],
      "features": [
        "The zoo’s own visitor information distinguishes general zoo admission from separately ticketed attractions such as the aquarium."
      ],
      "experience": [
        "The zoo’s own visitor information distinguishes general zoo admission from separately ticketed attractions such as the aquarium.",
        "Check the zoo’s current admission, opening arrangements and any separate attraction tickets before travelling."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand.",
        "The zoo’s own visitor information distinguishes general zoo admission from separately ticketed attractions such as the aquarium.",
        "Check the zoo’s current admission, opening arrangements and any separate attraction tickets before travelling."
      ],
      "photo": [
        "Use public visitor areas and follow animal-enclosure and photography instructions."
      ],
      "visit": [
        "Check the zoo’s current admission, opening arrangements and any separate attraction tickets before travelling."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Does zoo admission automatically include the aquarium?",
          "a": "The zoo lists aquarium admission separately; confirm the current ticket terms before buying."
        },
        {
          "q": "Is the zoo the same destination as Wat Phra That Doi Suthep?",
          "a": "No. The zoo is on Huay Kaew Road on the approach to the mountain; the temple is farther uphill."
        },
        {
          "q": "Where is the entrance?",
          "a": "The zoo lists its address as 100 Huay Kaew Road, Suthep, Mueang Chiang Mai."
        }
      ]
    },
    "zh": {
      "name": "清迈动物园",
      "tagline": "园方访客资料将动物园入场与水族馆等独立项目的门票分开列示。",
      "description": "位于清迈市中心西侧惠考路、前往素贴山方向的动物园。",
      "summary": "位于清迈市中心西侧惠考路、前往素贴山方向的动物园。",
      "managementTitle": "关于此地及其管理",
      "management": "清迈动物园由泰国动物园组织管理；访客设施与当前安排请向园方确认。",
      "history": [
        "清迈市城市遗产中心记载动物园于 1957 年首次向公众开放；素贴市政府记载其于 1977 年转归泰国动物园组织。"
      ],
      "features": [
        "园方访客资料将动物园入场与水族馆等独立项目的门票分开列示。"
      ],
      "experience": [
        "园方访客资料将动物园入场与水族馆等独立项目的门票分开列示。",
        "出发前向动物园核对最新开放安排、入场及各独立项目票务。"
      ],
      "route": [
        "从湄卡运河安排交通前往 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand。",
        "园方访客资料将动物园入场与水族馆等独立项目的门票分开列示。",
        "出发前向动物园核对最新开放安排、入场及各独立项目票务。"
      ],
      "photo": [
        "使用访客公共区域，遵守动物围栏和摄影标识。"
      ],
      "visit": [
        "出发前向动物园核对最新开放安排、入场及各独立项目票务。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "动物园门票自动包括水族馆吗？",
          "a": "园方分开列示水族馆门票，购买前请核对当前票务条件。"
        },
        {
          "q": "动物园就是素贴寺吗？",
          "a": "不是。动物园位于惠考路上山途中，素贴寺则在更高的山上。"
        },
        {
          "q": "入口在哪里？",
          "a": "园方公布的地址是清迈 Mueang 区 Suthep 惠考路 100 号。"
        }
      ]
    },
    "th": {
      "name": "สวนสัตว์เชียงใหม่",
      "tagline": "ข้อมูลผู้เข้าชมของสวนสัตว์แยกบัตรเข้าสวนสัตว์ออกจากสถานที่บางแห่งที่มีบัตรต่างหาก เช่น อควาเรียม",
      "description": "สวนสัตว์บนถนนห้วยแก้วทางตะวันตกของตัวเมืองเชียงใหม่ บนเส้นทางไปดอยสุเทพ",
      "summary": "สวนสัตว์บนถนนห้วยแก้วทางตะวันตกของตัวเมืองเชียงใหม่ บนเส้นทางไปดอยสุเทพ",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "องค์การสวนสัตว์แห่งประเทศไทยดูแลสวนสัตว์เชียงใหม่ เจ้าหน้าที่สวนดูแลสิ่งอำนวยความสะดวกและการเข้าชมปัจจุบัน",
      "history": [
        "ศูนย์มรดกเมืองเชียงใหม่บันทึกว่าสวนสัตว์เปิดให้ประชาชนเข้าชมครั้งแรกในปี 2500 และเทศบาลเมืองสุเทพระบุว่าโอนเข้าสังกัดองค์การสวนสัตว์ในปี 2520"
      ],
      "features": [
        "ข้อมูลผู้เข้าชมของสวนสัตว์แยกบัตรเข้าสวนสัตว์ออกจากสถานที่บางแห่งที่มีบัตรต่างหาก เช่น อควาเรียม"
      ],
      "experience": [
        "ข้อมูลผู้เข้าชมของสวนสัตว์แยกบัตรเข้าสวนสัตว์ออกจากสถานที่บางแห่งที่มีบัตรต่างหาก เช่น อควาเรียม",
        "ตรวจสอบเวลาทำการ ค่าเข้าปัจจุบันและบัตรแยกแต่ละสถานที่กับสวนสัตว์ก่อนเดินทาง"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand",
        "ข้อมูลผู้เข้าชมของสวนสัตว์แยกบัตรเข้าสวนสัตว์ออกจากสถานที่บางแห่งที่มีบัตรต่างหาก เช่น อควาเรียม",
        "ตรวจสอบเวลาทำการ ค่าเข้าปัจจุบันและบัตรแยกแต่ละสถานที่กับสวนสัตว์ก่อนเดินทาง"
      ],
      "photo": [
        "ใช้พื้นที่ผู้เข้าชมและปฏิบัติตามป้ายบริเวณสัตว์และข้อกำหนดการถ่ายภาพ"
      ],
      "visit": [
        "ตรวจสอบเวลาทำการ ค่าเข้าปัจจุบันและบัตรแยกแต่ละสถานที่กับสวนสัตว์ก่อนเดินทาง"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป 100 Huay Kaew Road, Suthep, Mueang Chiang Mai, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "บัตรเข้าสวนสัตว์รวมอควาเรียมหรือไม่?",
          "a": "สวนสัตว์แสดงบัตรอควาเรียมแยกต่างหาก ควรตรวจสอบเงื่อนไขล่าสุดก่อนซื้อ"
        },
        {
          "q": "สวนสัตว์เป็นแห่งเดียวกับวัดพระธาตุดอยสุเทพหรือไม่?",
          "a": "ไม่ สวนสัตว์อยู่ถนนห้วยแก้วระหว่างทางขึ้นดอย ส่วนวัดอยู่สูงขึ้นไป"
        },
        {
          "q": "ทางเข้าอยู่ที่ใด?",
          "a": "สวนสัตว์ระบุที่อยู่เลขที่ 100 ถนนห้วยแก้ว ตำบลสุเทพ อำเภอเมืองเชียงใหม่"
        }
      ]
    }
  },
  "additionalSources": [
    "https://cmocity.com/th/100-%E0%B8%9B%E0%B8%B5/",
    "https://www.suthep.go.th/travel_view.php?cateid=0&id=41&p=1"
  ]
},
  "huay-tung-tao-reservoir": {
  "image": "",
  "imageSource": "",
  "mapQuery": "อ่างเก็บน้ำห้วยตึงเฒ่า เชียงใหม่",
  "address": "Don Kaeo, Mae Rim, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://www.tourismthailand.org/Attraction/huay-tung-tao-reservoir",
  "locales": {
    "en": {
      "name": "Huay Tung Tao Reservoir",
      "tagline": "The lakeside setting offers a contrast to the compact civic and temple sites inside the old city.",
      "description": "A reservoir in Don Kaeo, Mae Rim district, north of central Chiang Mai.",
      "summary": "A reservoir in Don Kaeo, Mae Rim district, north of central Chiang Mai.",
      "managementTitle": "About the place and its management",
      "management": "The reservoir and visitor facilities can have different responsible operators; confirm current access with the site.",
      "history": [
        "A Chiang Mai provincial government inventory published in 2015 lists Huay Tung Tao reservoir in Don Kaeo among local royal-initiative projects; consult the site for the precise construction chronology."
      ],
      "features": [
        "The lakeside setting offers a contrast to the compact civic and temple sites inside the old city."
      ],
      "experience": [
        "The lakeside setting offers a contrast to the compact civic and temple sites inside the old city.",
        "Check current access, water conditions and local safety notices before planning lakeside activities."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to Don Kaeo, Mae Rim, Chiang Mai, Thailand.",
        "The lakeside setting offers a contrast to the compact civic and temple sites inside the old city.",
        "Check current access, water conditions and local safety notices before planning lakeside activities."
      ],
      "photo": [
        "Use accessible public viewpoints and stay clear of restricted waterside areas."
      ],
      "visit": [
        "Check current access, water conditions and local safety notices before planning lakeside activities."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to Don Kaeo, Mae Rim, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "Is the reservoir inside the old city?",
          "a": "No. It is in Don Kaeo, Mae Rim district, north of the city centre and needs a separate journey."
        },
        {
          "q": "Is this a museum or a temple?",
          "a": "It is a reservoir and lakeside destination, distinct from the old-city heritage sites."
        },
        {
          "q": "Can I assume every waterside activity is available?",
          "a": "No. Check local access, safety and water-condition notices on the day."
        }
      ]
    },
    "zh": {
      "name": "会登套水库",
      "tagline": "湖畔环境与古城里相对集中的市政广场和寺院构成不同的游览体验。",
      "description": "位于清迈市中心以北 Mae Rim 县 Don Kaeo 的水库。",
      "summary": "位于清迈市中心以北 Mae Rim 县 Don Kaeo 的水库。",
      "managementTitle": "关于此地及其管理",
      "management": "水库和游客设施可能由不同单位负责；当前进入安排请向现场确认。",
      "history": [
        "清迈府政府 2015 年公布的项目清单将 Don Kaeo 的 Huay Tung Tao 水库列入当地皇家倡议项目；确切施工年代请向管理方核实。"
      ],
      "features": [
        "湖畔环境与古城里相对集中的市政广场和寺院构成不同的游览体验。"
      ],
      "experience": [
        "湖畔环境与古城里相对集中的市政广场和寺院构成不同的游览体验。",
        "计划湖畔活动前，请核对当前入内安排、水况和现场安全公告。"
      ],
      "route": [
        "从湄卡运河安排交通前往 Don Kaeo, Mae Rim, Chiang Mai, Thailand。",
        "湖畔环境与古城里相对集中的市政广场和寺院构成不同的游览体验。",
        "计划湖畔活动前，请核对当前入内安排、水况和现场安全公告。"
      ],
      "photo": [
        "在可进入的公共观景点拍摄，避开限制进入的水边区域。"
      ],
      "visit": [
        "计划湖畔活动前，请核对当前入内安排、水况和现场安全公告。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 Don Kaeo, Mae Rim, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "水库位于古城内吗？",
          "a": "不在。它位于市中心以北的 Mae Rim 县 Don Kaeo，需另行安排交通。"
        },
        {
          "q": "这里是寺院或博物馆吗？",
          "a": "不是。这里是水库与湖畔地点，与古城的历史景点不同。"
        },
        {
          "q": "所有水边活动都一定开放吗？",
          "a": "不能假定；请在当天检查入内、安全和水况公告。"
        }
      ]
    },
    "th": {
      "name": "อ่างเก็บน้ำห้วยตึงเฒ่า",
      "tagline": "บรรยากาศริมอ่างแตกต่างจากวัดและลานประวัติศาสตร์ในเมืองเก่าที่มีพื้นที่ค่อนข้างกระชับ",
      "description": "อ่างเก็บน้ำในตำบลดอนแก้ว อำเภอแม่ริม ทางเหนือของตัวเมืองเชียงใหม่",
      "summary": "อ่างเก็บน้ำในตำบลดอนแก้ว อำเภอแม่ริม ทางเหนือของตัวเมืองเชียงใหม่",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "ตัวอ่างและสิ่งอำนวยความสะดวกผู้มาเที่ยวอาจมีผู้รับผิดชอบต่างกัน โปรดสอบถามการเข้าชมกับสถานที่",
      "history": [
        "บัญชีโครงการของจังหวัดเชียงใหม่ที่เผยแพร่ในปี 2558 ระบุอ่างห้วยตึงเฒ่าในตำบลดอนแก้วเป็นโครงการอันเนื่องมาจากพระราชดำริ โปรดสอบถามสถานที่เรื่องลำดับปีการก่อสร้างที่แน่ชัด"
      ],
      "features": [
        "บรรยากาศริมอ่างแตกต่างจากวัดและลานประวัติศาสตร์ในเมืองเก่าที่มีพื้นที่ค่อนข้างกระชับ"
      ],
      "experience": [
        "บรรยากาศริมอ่างแตกต่างจากวัดและลานประวัติศาสตร์ในเมืองเก่าที่มีพื้นที่ค่อนข้างกระชับ",
        "ตรวจสอบการเข้าถึง สภาพน้ำและประกาศความปลอดภัยก่อนวางแผนกิจกรรมริมน้ำ"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป Don Kaeo, Mae Rim, Chiang Mai, Thailand",
        "บรรยากาศริมอ่างแตกต่างจากวัดและลานประวัติศาสตร์ในเมืองเก่าที่มีพื้นที่ค่อนข้างกระชับ",
        "ตรวจสอบการเข้าถึง สภาพน้ำและประกาศความปลอดภัยก่อนวางแผนกิจกรรมริมน้ำ"
      ],
      "photo": [
        "ถ่ายจากจุดสาธารณะที่เข้าถึงได้และหลีกเลี่ยงพื้นที่ริมน้ำที่ห้ามเข้า"
      ],
      "visit": [
        "ตรวจสอบการเข้าถึง สภาพน้ำและประกาศความปลอดภัยก่อนวางแผนกิจกรรมริมน้ำ"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป Don Kaeo, Mae Rim, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "อ่างเก็บน้ำอยู่ในเมืองเก่าหรือไม่?",
          "a": "ไม่ อยู่ตำบลดอนแก้ว อำเภอแม่ริม ทางเหนือของตัวเมือง ต้องวางแผนเดินทางแยก"
        },
        {
          "q": "ที่นี่เป็นวัดหรือพิพิธภัณฑ์หรือไม่?",
          "a": "ไม่ เป็นอ่างเก็บน้ำและพื้นที่ริมอ่าง ต่างจากแหล่งประวัติศาสตร์ในเมืองเก่า"
        },
        {
          "q": "กิจกรรมริมน้ำเปิดทุกอย่างเสมอหรือไม่?",
          "a": "ไม่ควรสมมติ ควรตรวจสอบการเข้าถึง ความปลอดภัยและสภาพน้ำในวันเดินทาง"
        }
      ]
    }
  },
  "additionalSources": [
    "https://www.chiangmai.go.th/managing/public/D2/2D29Dec2015095918.pdf"
  ]
},
  "maiiam-contemporary-art-museum": {
  "image": "",
  "imageSource": "",
  "mapQuery": "MAIIAM Contemporary Art Museum San Kamphaeng Chiang Mai",
  "address": "122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand",
  "fee": {
    "en": "Confirm current admission and any separate charges",
    "zh": "请确认当前门票及单独收费项目",
    "th": "ตรวจสอบค่าเข้าชมและค่าบริการแยกปัจจุบัน"
  },
  "hours": {
    "en": "Confirm current opening times with the site",
    "zh": "请向场地确认当前开放时间",
    "th": "โปรดตรวจสอบเวลาเปิดปัจจุบันกับสถานที่"
  },
  "duration": {
    "en": "60–90 minutes",
    "zh": "60–90 分钟",
    "th": "60–90 นาที"
  },
  "source": "https://maiiam.com/en/visit",
  "locales": {
    "en": {
      "name": "MAIIAM Contemporary Art Museum",
      "tagline": "The museum presents Thai and regional contemporary art in a converted industrial building; its mirrored exterior is a landmark on the San Kamphaeng road.",
      "description": "A private contemporary-art museum in Ton Pao, San Kamphaeng, east of Chiang Mai.",
      "summary": "A private contemporary-art museum in Ton Pao, San Kamphaeng, east of Chiang Mai.",
      "managementTitle": "About the place and its management",
      "management": "MAIIAM is a private museum founded by the Bunnag Booth family; its team manages exhibitions and visitor access.",
      "history": [
        "The museum says Jean Michel Beurdeley, Patsri Bunnag and their son Eric Bunnag Booth established it to share their family collection; an industrial site was converted into the museum.",
        "The museum identifies The Serenity of Madness, held from July to September 2016, as its inaugural exhibition."
      ],
      "features": [
        "The museum presents Thai and regional contemporary art in a converted industrial building; its mirrored exterior is a landmark on the San Kamphaeng road."
      ],
      "experience": [
        "The museum presents Thai and regional contemporary art in a converted industrial building; its mirrored exterior is a landmark on the San Kamphaeng road.",
        "The museum’s own pages give different opening days. Confirm its latest schedule and exhibition access before travelling."
      ],
      "route": [
        "From Mae Kha Canal, arrange transport to 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand.",
        "The museum presents Thai and regional contemporary art in a converted industrial building; its mirrored exterior is a landmark on the San Kamphaeng road.",
        "The museum’s own pages give different opening days. Confirm its latest schedule and exhibition access before travelling."
      ],
      "photo": [
        "Photograph the mirrored facade from a safe position and check gallery photography rules inside."
      ],
      "visit": [
        "The museum’s own pages give different opening days. Confirm its latest schedule and exhibition access before travelling."
      ],
      "transport": [
        "From Mae Kha Canal, arrange transport to 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand."
      ],
      "faqs": [
        {
          "q": "What kind of art does MAIIAM present?",
          "a": "The museum presents Thai and regional contemporary art, with changing exhibitions and programmes."
        },
        {
          "q": "Is the building purpose-built as an ancient palace?",
          "a": "No. The museum describes its building as a transformed former industrial site with a mirrored exterior."
        },
        {
          "q": "Which days is it open?",
          "a": "Its own pages currently differ on opening days; contact the museum for the latest schedule before setting out."
        }
      ]
    },
    "zh": {
      "name": "MAIIAM 当代艺术博物馆",
      "tagline": "博物馆在改造后的工业建筑中展示泰国及区域当代艺术，镜面外墙是讪甘烹路上的辨识标志。",
      "description": "位于清迈以东 San Kamphaeng 县 Ton Pao 的私人当代艺术博物馆。",
      "summary": "位于清迈以东 San Kamphaeng 县 Ton Pao 的私人当代艺术博物馆。",
      "managementTitle": "关于此地及其管理",
      "management": "MAIIAM 是由 Bunnag Booth 家族创办的私人博物馆，馆方团队管理展览及入场。",
      "history": [
        "馆方介绍 Jean Michel Beurdeley、Patsri Bunnag 与儿子 Eric Bunnag Booth 创立美术馆，分享家族藏品，并将旧工业建筑改作展馆。",
        "馆方将 2016 年 7 月至 9 月举办的《The Serenity of Madness》列为开馆首展。"
      ],
      "features": [
        "博物馆在改造后的工业建筑中展示泰国及区域当代艺术，镜面外墙是讪甘烹路上的辨识标志。"
      ],
      "experience": [
        "博物馆在改造后的工业建筑中展示泰国及区域当代艺术，镜面外墙是讪甘烹路上的辨识标志。",
        "博物馆自己的网站页面对开放日的说明不一致，出发前请向馆方确认最新时间及展览。"
      ],
      "route": [
        "从湄卡运河安排交通前往 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand。",
        "博物馆在改造后的工业建筑中展示泰国及区域当代艺术，镜面外墙是讪甘烹路上的辨识标志。",
        "博物馆自己的网站页面对开放日的说明不一致，出发前请向馆方确认最新时间及展览。"
      ],
      "photo": [
        "从安全位置拍摄镜面外墙，在展厅内先核对摄影规定。"
      ],
      "visit": [
        "博物馆自己的网站页面对开放日的说明不一致，出发前请向馆方确认最新时间及展览。"
      ],
      "transport": [
        "从湄卡运河安排交通前往 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand。"
      ],
      "faqs": [
        {
          "q": "MAIIAM 展示什么艺术？",
          "a": "馆方介绍其收藏与展览涵盖泰国和区域当代艺术，并举办更换的展览和活动。"
        },
        {
          "q": "馆舍原来是古代宫殿吗？",
          "a": "不是。馆方称馆舍由原工业场地改造而成，具有镜面外墙。"
        },
        {
          "q": "博物馆哪几天开放？",
          "a": "馆方不同页面列出的开放日不一致，出发前请联系博物馆确认最新安排。"
        }
      ]
    },
    "th": {
      "name": "พิพิธภัณฑ์ศิลปะร่วมสมัยใหม่เอี่ยม",
      "tagline": "พิพิธภัณฑ์จัดแสดงศิลปะร่วมสมัยไทยและภูมิภาคในอาคารอุตสาหกรรมที่ปรับใช้ใหม่ มีผิวกระจกเป็นจุดสังเกตบนถนนสันกำแพง",
      "description": "พิพิธภัณฑ์ศิลปะร่วมสมัยเอกชนในตำบลต้นเปา อำเภอสันกำแพง ทางตะวันออกของเชียงใหม่",
      "summary": "พิพิธภัณฑ์ศิลปะร่วมสมัยเอกชนในตำบลต้นเปา อำเภอสันกำแพง ทางตะวันออกของเชียงใหม่",
      "managementTitle": "เกี่ยวกับสถานที่และการดูแล",
      "management": "ใหม่เอี่ยมเป็นพิพิธภัณฑ์เอกชนที่ก่อตั้งโดยครอบครัวบุนนาคบูธ ทีมพิพิธภัณฑ์ดูแลนิทรรศการและการเข้าชม",
      "history": [
        "พิพิธภัณฑ์ระบุว่า Jean Michel Beurdeley, Patsri Bunnag และบุตร Eric Bunnag Booth ร่วมก่อตั้งเพื่อแบ่งปันผลงานสะสมของครอบครัว และปรับพื้นที่อุตสาหกรรมเดิมเป็นพิพิธภัณฑ์",
        "พิพิธภัณฑ์ระบุว่านิทรรศการเปิดตัว The Serenity of Madness จัดตั้งแต่เดือนกรกฎาคมถึงกันยายน 2559"
      ],
      "features": [
        "พิพิธภัณฑ์จัดแสดงศิลปะร่วมสมัยไทยและภูมิภาคในอาคารอุตสาหกรรมที่ปรับใช้ใหม่ มีผิวกระจกเป็นจุดสังเกตบนถนนสันกำแพง"
      ],
      "experience": [
        "พิพิธภัณฑ์จัดแสดงศิลปะร่วมสมัยไทยและภูมิภาคในอาคารอุตสาหกรรมที่ปรับใช้ใหม่ มีผิวกระจกเป็นจุดสังเกตบนถนนสันกำแพง",
        "หน้าเว็บไซต์ของพิพิธภัณฑ์ระบุวันเปิดไม่ตรงกัน ควรสอบถามตารางและนิทรรศการล่าสุดก่อนเดินทาง"
      ],
      "route": [
        "จากคลองแม่ข่า จัดรถไป 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand",
        "พิพิธภัณฑ์จัดแสดงศิลปะร่วมสมัยไทยและภูมิภาคในอาคารอุตสาหกรรมที่ปรับใช้ใหม่ มีผิวกระจกเป็นจุดสังเกตบนถนนสันกำแพง",
        "หน้าเว็บไซต์ของพิพิธภัณฑ์ระบุวันเปิดไม่ตรงกัน ควรสอบถามตารางและนิทรรศการล่าสุดก่อนเดินทาง"
      ],
      "photo": [
        "ถ่ายอาคารผิวกระจกจากจุดปลอดภัยและสอบถามกติกาการถ่ายภาพในห้องจัดแสดง"
      ],
      "visit": [
        "หน้าเว็บไซต์ของพิพิธภัณฑ์ระบุวันเปิดไม่ตรงกัน ควรสอบถามตารางและนิทรรศการล่าสุดก่อนเดินทาง"
      ],
      "transport": [
        "จากคลองแม่ข่า จัดรถไป 122 Moo 7, Ton Pao, San Kamphaeng, Chiang Mai, Thailand"
      ],
      "faqs": [
        {
          "q": "ใหม่เอี่ยมจัดแสดงศิลปะแบบใด?",
          "a": "พิพิธภัณฑ์นำเสนอศิลปะร่วมสมัยไทยและภูมิภาค พร้อมนิทรรศการและกิจกรรมที่เปลี่ยนแปลง"
        },
        {
          "q": "อาคารเดิมเป็นวังโบราณหรือไม่?",
          "a": "ไม่ พิพิธภัณฑ์อธิบายว่าเป็นพื้นที่อุตสาหกรรมเดิมที่ปรับใช้ใหม่และมีผิวกระจก"
        },
        {
          "q": "พิพิธภัณฑ์เปิดวันใด?",
          "a": "หน้าเว็บไซต์ของพิพิธภัณฑ์ระบุวันเปิดต่างกัน โปรดสอบถามตารางล่าสุดก่อนเดินทาง"
        }
      ]
    }
  },
  "additionalSources": [
    "https://maiiam.com/en/exhibition/the-serenity-of-madness"
  ]
},
  ...moreNearbyDetails,
};
