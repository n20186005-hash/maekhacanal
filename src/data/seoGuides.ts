export const guideSlugs = ['opening-hours', 'getting-there', 'evening-walk'] as const;
export type GuideSlug = typeof guideSlugs[number];
export type GuideLang = 'th' | 'en' | 'zh';

type Entry = {
  title: string; description: string; eyebrow: string; intro: string;
  facts: [string, string][]; sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
};

export const guides: Record<GuideLang, Record<GuideSlug, Entry>> = {
  th: {
    'opening-hours': {
      title: 'คลองแม่ข่าเปิดกี่โมง เปิดวันไหน? เวลาเดินเล่นและร้านค้า 2026',
      description: 'คลองแม่ข่า เชียงใหม่ เปิดวันไหน ปิดกี่โมง? แยกเวลาเข้าถึงทางเดินริมคลองกับเวลาร้านค้า พร้อมคำแนะนำก่อนออกเดินทาง',
      eyebrow: 'ข้อมูลก่อนเดินทาง',
      intro: 'คลองแม่ข่าเป็นทางน้ำสาธารณะ ส่วนบริเวณเดินเล่นและร้านค้าไม่ได้มีเวลาเปิดปิดเดียวกันทั้งหมด หากกำลังค้นหาว่า “คลองแม่ข่าเปิดกี่โมง” ให้แยกระหว่างทางเดินกับเวลาที่ร้านค้าแต่ละร้านเปิดจริง',
      facts: [['สถานที่', 'คลองแม่ข่า ย่านไหยา เชียงใหม่ 50100'], ['วันเข้าชม', 'ทางเดินริมคลองโดยทั่วไปเข้าถึงได้ทุกวัน'], ['เวลาร้านค้า', 'ร้านและแผงขายส่วนมากคึกคักช่วงบ่ายแก่ ๆ ถึงค่ำ; เวลาแตกต่างกัน'], ['ค่าเข้า', 'ไม่มีบัตรเข้าชมทางเดินสาธารณะ'], ['เวลาที่เหมาะ', 'ช่วงเย็นก่อนพระอาทิตย์ตกถึงช่วงเปิดไฟ'], ['ตรวจสอบ', 'ถามร้านค้าที่ต้องการไปโดยตรง และตรวจสภาพพื้นที่หน้างาน']],
      sections: [
        { heading: 'คลองแม่ข่าเปิดวันไหนบ้าง?', paragraphs: ['พื้นที่ริมคลองไม่ใช่ตลาดที่จัดเฉพาะวันเสาร์หรืออาทิตย์ สามารถมาเดินชมได้หลายวันในสัปดาห์ แต่ร้านค้าและกิจกรรมอาจไม่เปิดครบทุกวัน โดยเฉพาะช่วงฝนตกหรือวันหยุดของร้าน', 'อย่าสับสนกับถนนคนเดินวัวลายหรือถนนคนเดินวันอาทิตย์ ซึ่งมีตารางตลาดเฉพาะวัน'] },
        { heading: 'คลองแม่ข่าปิดกี่โมง?', paragraphs: ['ยังไม่พบประกาศเวลาเปิดปิดมาตรฐานที่ครอบคลุมทางเดินทุกส่วน ไม่ควรถือว่าเวลาร้านค้าเป็นเวลาเปิดปิดของคลองทั้งสาย ร้านอาหารและร้านของที่ระลึกอาจทยอยปิดในช่วงค่ำ', 'ถ้าตั้งใจซื้ออาหารหรือชมไฟ ให้ไปถึงก่อนช่วงค่ำมาก แสงเย็นเหมาะกับการถ่ายภาพ ส่วนเช้าเหมาะกับการเดินเงียบ ๆ แต่ร้านอาจเปิดน้อย'] },
        { heading: 'สิ่งที่ควรทราบก่อนมา', paragraphs: ['ทางเดินบางช่วงแคบ มีสะพานและบันได ควรดูแลเด็กเล็กและระวังพื้นลื่นหลังฝนตก', 'เตรียมเงินสำหรับร้านค้าขนาดเล็ก ดูแลความสะอาด และอย่ากีดขวางทางเข้าบ้านของชุมชน'] },
      ],
      faqs: [{ q: 'คลองแม่ข่าเปิดทุกวันไหม?', a: 'โดยทั่วไปทางเดินริมคลองเข้าถึงได้ทุกวัน แต่ร้านค้าหลายร้านกำหนดเวลาและวันหยุดเอง' }, { q: 'ต้องซื้อตั๋วไหม?', a: 'ไม่ต้องซื้อตั๋วเพื่อเดินชมทางเดินสาธารณะ ค่าอาหารและสินค้าแยกต่างหาก' }, { q: 'ควรไปเวลาไหน?', a: 'ช่วงเย็นเหมาะกับบรรยากาศร้านค้า แสงถ่ายภาพ และไฟริมทาง; หากต้องการความสงบ ลองช่วงเช้า' }],
    },
    'getting-there': {
      title: 'คลองแม่ข่าอยู่ที่ไหน? แผนที่ วิธีเดินทางและจุดลงรถ',
      description: 'วิธีไปคลองแม่ข่า เชียงใหม่ พร้อมลิงก์ Google Maps จุดสังเกตจากเมืองเก่า การเดินทางด้วยรถรับจ้างและข้อควรรู้เรื่องที่จอดรถ',
      eyebrow: 'การเดินทาง', intro: 'จุดหมายของนักท่องเที่ยวคือช่วงทางเดินริมคลองที่ได้รับการฟื้นฟูใกล้ถนนศรีดอนไชยและย่านไหยา ไม่ใช่คลองแม่ข่าทั้งสายซึ่งยาวผ่านหลายชุมชน ตรวจชื่อจุดหมายก่อนเรียกรถ',
      facts: [['ที่อยู่สำหรับวางแผน', '118 ถนนระแกง ตำบลหายยา อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50100 ประเทศไทย'], ['จุดหมายในแผนที่', 'Mae Kha Canal / คลองแม่ข่า'], ['พื้นที่', 'ไหยา ทางใต้และตะวันออกของเขตเมืองเก่าเชียงใหม่'], ['การเดินทาง', 'เดินจากจุดใกล้เคียง รถแดง รถรับจ้าง หรือรถผ่านแอป'], ['ที่จอดรถ', 'จำนวนจำกัดและข้อกำหนดเปลี่ยนได้; ตรวจหน้างาน']],
      sections: [
        { heading: 'จากประตูท่าแพและเมืองเก่า', paragraphs: ['เริ่มจากตำแหน่งจริงของคุณในแผนที่แล้วเลือกเส้นทางเดินที่เหมาะสม ระยะและเวลาขึ้นอยู่กับทางเข้าและสภาพการจราจร ไม่ควรใช้ชื่อคลองอย่างเดียวเป็นหมุดปลายทาง', 'หากอากาศร้อนหรือฝนตก สามารถใช้รถแดงหรือรถผ่านแอปไปยังบริเวณทางเดินคลองแม่ข่า แล้วเดินต่อระยะสั้น'] },
        { heading: 'แท็กซี่ รถแดง และรถส่วนตัว', paragraphs: ['แสดงชื่อ “คลองแม่ข่า / Mae Kha Canal” พร้อมลิงก์แผนที่ให้คนขับดูเพื่อป้องกันการลงรถผิดช่วงคลอง', 'บริเวณชุมชนมีถนนแคบและที่จอดรถอาจจำกัด หลีกเลี่ยงการจอดขวางบ้านและทางสัญจร'] },
        { heading: 'การเดินและความปลอดภัย', paragraphs: ['มีทางเดินเลียบคลอง สะพานเล็ก และพื้นต่างระดับบางช่วง สวมรองเท้าที่เดินสบายและระวังช่วงฝนตก', 'วางแผนกลับด้วยรถที่เรียกได้จริง โดยเฉพาะหลังร้านค้าปิด และตรวจการจราจรในแอปก่อนเดินทาง'] },
      ], faqs: [{ q: 'คลองแม่ข่ามีหลายจุดหรือไม่?', a: 'คลองยาวผ่านหลายพื้นที่ จุดท่องเที่ยวที่นิยมคือช่วงทางเดินที่ปรับปรุงแล้วใกล้ศรีดอนไชย' }, { q: 'ต้องขับรถไปไหม?', a: 'ไม่จำเป็น สามารถเดินหรือใช้รถรับจ้างจากตัวเมืองได้ตามสภาพอากาศและจุดเริ่มต้น' }],
    },
    'evening-walk': {
      title: 'เที่ยวคลองแม่ข่าตอนเย็น: เส้นทางเดิน ถ่ายรูป อาหารและชุมชน',
      description: 'จัดทริปคลองแม่ข่าเชียงใหม่แบบ 45–90 นาที รวมจุดถ่ายรูปสะพาน บ้านริมคลอง ร้านท้องถิ่น และมารยาทเมื่อเดินในชุมชน',
      eyebrow: 'แผนเที่ยวริมคลอง', intro: 'คลองแม่ข่าเหมาะกับการเดินเล่นระยะสั้นมากกว่าทริปเต็มวัน จุดเด่นคือการเปลี่ยนโฉมคลองเมืองเก่าสู่พื้นที่ที่ชุมชนและนักท่องเที่ยวใช้ร่วมกัน เลือกเดินอย่างช้า ๆ เพื่อเห็นรายละเอียดจริง',
      facts: [['ระยะเวลาแนะนำ', '45–90 นาทีโดยประมาณ'], ['ช่วงเวลา', 'บ่ายแก่ถึงค่ำเพื่อชมบรรยากาศร้านค้า'], ['ค่าใช้จ่าย', 'เดินชมฟรี ซื้ออาหารและสินค้าตามต้องการ'], ['ลักษณะเส้นทาง', 'ทางเดินริมคลองและสะพานสั้น ๆ'], ['สิ่งที่ควรพก', 'น้ำดื่ม รองเท้ากันลื่น และร่มในฤดูฝน']],
      sections: [
        { heading: 'เส้นทางเดิน 3 ช่วง', paragraphs: ['1. เริ่มที่ทางเข้าช่วงปรับปรุงใกล้ศรีดอนไชย ตรวจแผนที่และสังเกตแนวคลองกับสะพาน', '2. เดินชมร้านเล็ก บ้านริมคลอง และมุมสะท้อนแสงบนผิวน้ำ หลีกเลี่ยงการหยุดขวางทาง', '3. เลือกซื้อของจากร้านในชุมชน แล้วเดินกลับทางเดิมหรือเรียกรถจากถนนหลักที่ปลอดภัย'] },
        { heading: 'ถ่ายภาพเวลาไหนดี?', paragraphs: ['แสงอุ่นก่อนพระอาทิตย์ตกช่วยให้พื้นผิวบ้านและน้ำดูนุ่มนวล หลังเปิดไฟช่วงค่ำสามารถถ่ายเงาสะท้อนของสะพานได้ แต่แสงและสภาพน้ำเปลี่ยนไปตามฤดูกาล', 'ขออนุญาตก่อนถ่ายภาพคนในร้านหรือพื้นที่ส่วนบุคคล และหลีกเลี่ยงการกีดขวางทางเดินเพื่อถ่ายภาพ'] },
        { heading: 'ประวัติและการฟื้นฟู', paragraphs: ['คลองแม่ข่าเป็นส่วนหนึ่งของระบบน้ำเก่าแก่ของเชียงใหม่ เคยมีปัญหาน้ำเสียและพื้นที่เสื่อมโทรม ก่อนเกิดความร่วมมือในการฟื้นฟูหลายช่วง', 'ทางเดินที่เห็นในปัจจุบันจึงสะท้อนทั้งเรื่องภูมิทัศน์เมืองและชีวิตของชุมชน ไม่ใช่เพียงฉากถ่ายรูป ลองสังเกตทางเชื่อมบ้าน ร้านเล็ก และการใช้งานพื้นที่ร่วมกัน'] },
      ], faqs: [{ q: 'ใช้เวลาเดินนานแค่ไหน?', a: 'ประมาณ 45–90 นาทีสำหรับการเดินสบาย ๆ พร้อมแวะร้านและถ่ายภาพ' }, { q: 'เหมาะกับเด็กไหม?', a: 'มาได้เมื่อผู้ใหญ่ดูแลใกล้ชิด เพราะมีขอบคลองและทางเดินแคบบางช่วง' }],
    },
  },
  en: {
    'opening-hours': {
      title: 'Mae Kha Canal Opening Hours 2026: What Time Do Shops Open?', description: 'Is Mae Kha Canal open daily? Understand the difference between public promenade access and individual evening-stall opening hours in Chiang Mai.', eyebrow: 'Plan your visit', intro: 'Mae Kha Canal is a public waterway with a restored visitor promenade, not one ticketed market with a single opening and closing time. Separate access to the walkway from the schedules of individual shops.',
      facts: [['Location', 'Haiya, Chiang Mai 50100, Thailand'], ['Days', 'Public waterside paths are generally accessible daily'], ['Shop hours', 'Many stalls become livelier in late afternoon and evening; schedules vary'], ['Entry', 'No general admission ticket for the public promenade'], ['Best visit', 'Late afternoon through early evening'], ['Confirm', 'Check directly with the specific shop and conditions on arrival']],
      sections: [{ heading: 'Is Mae Kha Canal open every day?', paragraphs: ['Unlike Chiang Mai’s Saturday and Sunday walking streets, the restored canal promenade is not a once-a-week market. You can generally visit the public walking area on any day, but individual traders may take days off.', 'Rain, maintenance and local events can change which stretches and businesses are active. There is no reliable single operating timetable for every stall.'] }, { heading: 'What time does Mae Kha Canal close?', paragraphs: ['Do not treat a café’s closing time as the canal’s closing time. A fixed, officially published timetable for the entire public walkway has not been verified.', 'Go in late afternoon if you want both daylight photos and an opportunity to browse shops. Morning is quieter, but many stalls will not be trading.'] }, { heading: 'Before you go', paragraphs: ['Some paths are narrow, with small bridges or steps. Watch children near the water and take care after rain.', 'Support local shops if you wish, take litter away and leave entrances to homes clear.'] }],
      faqs: [{ q: 'Is Mae Kha Canal open on weekdays?', a: 'The public walkway is generally accessible daily; individual shops choose their own days and hours.' }, { q: 'Does Mae Kha Canal charge an entrance fee?', a: 'No general entrance ticket is required for the public promenade. Food and shopping cost extra.' }, { q: 'What is the best time to visit?', a: 'Late afternoon to early evening is a good compromise between light, stalls and illuminated reflections.' }],
    },
    'getting-there': {
      title: 'How to Get to Mae Kha Canal: Map, Entrance and Chiang Mai Transport', description: 'Find the restored Mae Kha Canal promenade in Chiang Mai, with a map, route planning from the Old City, transport options and parking tips.', eyebrow: 'Map and access', intro: 'The visitor area is a restored stretch near Sri Don Chai Road and Haiya, not the entire Mae Kha watercourse. Use the named attraction pin to avoid being dropped at another section of the canal.',
      facts: [['Planning address', '118 Ragang Rd, Haiya, Mueang Chiang Mai, Chiang Mai 50100, Thailand'], ['Map destination', 'Mae Kha Canal / คลองแม่ข่า'], ['Area', 'Haiya, southeast of Chiang Mai Old City'], ['Transport', 'Walking from nearby areas, red songthaew, taxi or ride-hailing'], ['Parking', 'Limited around residential streets; check local restrictions']],
      sections: [{ heading: 'From Tha Phae Gate and the Old City', paragraphs: ['Open the attraction pin and request walking directions from your actual starting point. The distance depends on which entrance you choose.', 'A red songthaew or ride-hailing car can make the journey more comfortable in hot weather or heavy rain.'] }, { heading: 'By taxi, songthaew or car', paragraphs: ['Show the driver the exact Mae Kha Canal Google Maps link and the Thai name คลองแม่ข่า. The canal extends well beyond its best-known visitor section.', 'Narrow residential streets and variable parking restrictions make a drop-off near a main road preferable to blocking local access.'] }, { heading: 'Walking safely', paragraphs: ['Expect short bridges, uneven levels and occasional slippery ground after rain. Wear comfortable footwear.', 'If staying into the evening, check that a pickup point is accessible from a main road.'] }], faqs: [{ q: 'Where is the tourist section of Mae Kha Canal?', a: 'Around the restored walkway near Sri Don Chai Road and Haiya, southeast of Chiang Mai Old City.' }, { q: 'Do I need a car?', a: 'No. Walking, songthaews and ride-hailing are practical choices depending on your starting point.' }],
    },
    'evening-walk': {
      title: 'Mae Kha Canal Evening Walk: Photo Spots, Food and a 1-Hour Route', description: 'A practical 45–90-minute Mae Kha Canal walk through small bridges, waterside shops, local food and evening reflections in Chiang Mai.', eyebrow: 'Walking itinerary', intro: 'Mae Kha Canal makes a rewarding short city stop, rather than an all-day attraction. The restored stretch combines local life, small businesses and an urban-waterway revival story.',
      facts: [['Suggested visit', 'About 45–90 minutes'], ['Best time', 'Late afternoon into evening for stalls and reflections'], ['Admission', 'Free public walking area; purchases optional'], ['Terrain', 'Waterside paths and small bridges'], ['Bring', 'Water, comfortable shoes and rain protection in wet season']],
      sections: [{ heading: 'Three-part walking route', paragraphs: ['1. Begin near the restored access by Sri Don Chai Road, check the map and take in the canal and footbridges.', '2. Continue at a relaxed pace past small stalls and waterside houses. Pause for reflections without blocking the path.', '3. Support a local vendor if you like, then return along the walkway or arrange pickup from an accessible main street.'] }, { heading: 'Best photo stops and light', paragraphs: ['Late afternoon gives warmer light over the buildings and water. After dusk, look for bridge lights and reflections; their appearance changes with weather and water conditions.', 'Ask before photographing residents or private shop interiors, and keep doorways and narrow bridges clear.'] }, { heading: 'Why the canal matters', paragraphs: ['Mae Kha is part of Chiang Mai’s historic urban water network. Sections became polluted over time, prompting efforts to clean and reclaim the waterway.', 'Today’s promenade is also a community space. Notice how old and new buildings, local trade and shared access meet along the water.'] }], faqs: [{ q: 'How long should I stay?', a: 'Allow roughly 45–90 minutes for a relaxed walk, photographs and a snack.' }, { q: 'Is the walk family-friendly?', a: 'Yes with close supervision around the water’s edge, bridges and narrow sections.' }],
    },
  },
  zh: {
    'opening-hours': {
      title: '湄卡运河开放时间：2026 每天开放吗？商店几点关门？', description: '清迈湄卡运河开放时间、商铺营业时段、门票及最佳到访时间。区分公共步道与各商户的实际营业安排。', eyebrow: '行前信息', intro: '湄卡运河是城市公共水道，游客常去的是整治后的河岸步道，并非统一营业的收费夜市。查询“几点开门”时，需要区分步道通行与每一家商铺的营业时间。',
      facts: [['位置', '泰国清迈府海雅区 50100'], ['开放日期', '公共步道通常每日可通行'], ['商铺营业', '下午后段至晚间较热闹，具体按各店安排'], ['门票', '公共步道无需统一门票'], ['建议时间', '傍晚至入夜'], ['行前确认', '有指定店铺时向店家确认，并以现场情况为准']],
      sections: [{ heading: '每周哪天开放？', paragraphs: ['这里与清迈周六、周日限定的步行街不同，河岸公共步道通常每天可到访，但小店可能休息，并不保证天天全部营业。', '雨天、维护或临时活动可能影响部分区域，出行前请结合天气和商户公告安排。'] }, { heading: '晚上几点关门？', paragraphs: ['目前未核实到适用于整条公共步道的统一官方关门时间。不要把单一餐厅或摊位的营业时间误写为整个运河的开放时间。', '想同时看到日落光线、灯光与商铺活动，建议在傍晚到达；清晨更安静，但不少商户尚未营业。'] }, { heading: '出发前注意', paragraphs: ['步道部分路段较窄，设有小桥和台阶，下雨后可能湿滑，带儿童须留意水边。', '尊重沿岸居民，不堵住住宅入口，垃圾随身带走。'] }], faqs: [{ q: '湄卡运河每天都能去吗？', a: '公共步道通常每天可以到访，但各店休息日与营业时间不同。' }, { q: '需要门票吗？', a: '在公共步道散步无需统一门票，餐饮购物另计。' }, { q: '什么时候最适合拍照？', a: '傍晚有柔和自然光，入夜可拍灯光倒影；天气会影响实际效果。' }],
    },
    'getting-there': {
      title: '湄卡运河在哪里？清迈交通路线、地图与入口指南', description: '清迈湄卡运河 Google 地图定位、从塔佩门和古城的交通、双条车与网约车建议，以及步行和停车注意事项。', eyebrow: '地址与交通', intro: '游客通常所说的湄卡运河是靠近 Sri Don Chai Road 与海雅区的整治步道，而非整条贯穿多个社区的水道。建议直接使用景点地图定位。',
      facts: [['行程参考地址', '118 Ragang Rd, Haiya, Mueang Chiang Mai, Chiang Mai 50100, Thailand'], ['地图名称', 'Mae Kha Canal / คลองแม่ข่า'], ['所在区域', '清迈古城东南侧海雅区'], ['抵达方式', '周边步行、双条车、出租车或网约车'], ['停车', '社区道路车位有限，以现场限制为准']],
      sections: [{ heading: '从塔佩门与清迈古城出发', paragraphs: ['在地图中选择自己实际的出发点，导航至 Mae Kha Canal 景点定位。步行距离会随所选入口不同而变化。', '天气炎热或下雨时，可选择双条车或网约车，抵达主干道附近后短程步行。'] }, { heading: '出租车、双条车和自驾', paragraphs: ['向司机出示泰文名称“คลองแม่ข่า”和对应地图链接，避免被送到运河其他区段。', '附近有居民住宅及较窄道路，停车请遵守现场标志，不占用住户通道。'] }, { heading: '步行安全与返程', paragraphs: ['河岸有小桥、台阶和部分不平整路面，雨后注意防滑。', '晚间离开前可先确认网约车可抵达的主路接送点。'] }], faqs: [{ q: '湄卡运河的游客区是哪一段？', a: '通常指靠近 Sri Don Chai Road、海雅区的整治河岸步道。' }, { q: '一定要自驾吗？', a: '不需要，可根据住处选择步行、双条车或网约车。' }],
    },
    'evening-walk': {
      title: '清迈湄卡运河傍晚散步路线：拍照点、美食与历史', description: '用 45–90 分钟探索湄卡运河步道、桥梁、河畔小店、日落倒影及社区复兴故事，附实用拍照与亲子建议。', eyebrow: '游览路线', intro: '湄卡运河更适合安排为一段轻松的城市散步，而非全天景点。整治后的河岸空间融合了小店、住宅和城市水道修复的故事。',
      facts: [['建议停留', '约 45–90 分钟'], ['最佳时段', '傍晚至入夜，兼顾小店与灯光'], ['费用', '公共步道免费，消费自选'], ['路线特点', '沿河步道与小桥'], ['随身物品', '饮水、舒适防滑鞋及雨具']],
      sections: [{ heading: '三段式步行路线', paragraphs: ['1. 从靠近 Sri Don Chai Road 的整治步道入口开始，观察河道与跨河小桥。', '2. 沿步道慢慢走，欣赏河畔住宅、小店和水面倒影，拍照时不阻碍通行。', '3. 如有兴趣，可在社区小店消费，最后按原路返回或到方便叫车的主路离开。'] }, { heading: '摄影机位与光线', paragraphs: ['日落前的暖光适合拍河道与建筑，入夜后则可尝试桥灯与倒影。水色和光线随天气季节而变。', '拍摄居民或商店私人区域前先征得同意，不要为了取景堵住窄桥。'] }, { heading: '历史与社区复兴', paragraphs: ['湄卡运河属于清迈传统城市水系的一部分，一些区段长期受到水质与环境问题困扰，后来逐步开展清理及空间改善。', '今天的步道不仅是拍照背景，也是居民生活和游客活动共享的空间，值得留意新旧建筑、社区小店与水岸之间的关系。'] }], faqs: [{ q: '游览要安排多久？', a: '轻松散步、拍照和吃点东西可预留约 45–90 分钟。' }, { q: '适合带小朋友吗？', a: '可以，但水边、窄桥及台阶需要成人全程看护。' }],
    },
  },
};
