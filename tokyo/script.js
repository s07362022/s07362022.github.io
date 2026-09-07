/** Local images (see images/ + download_images.py). Works offline & on GitHub Pages. */
const IMAGES = {
  narita: "images/narita.jpg",
  akihabara: "images/akihabara.jpg",
  meiji: "images/meiji.jpg",
  shibuya: "images/shibuya.jpg",
  kamakura: "images/kamakura.jpg",
  enoshima: "images/enoshima.jpg",
  yanaka: "images/yanaka.jpg",
  koenji: "images/koenji.jpg",
  takeshita: "images/takeshita.jpg",
  kamakuraHigh: "images/kamakuraHigh.jpg",
  metroZh: "images/metroZh.png",
  yamanote: "images/yamanote.png",
  greaterTokyo: "images/greaterTokyo.png",
  nexTrain: "images/nexTrain.jpg",
  suica: "images/suica.png",
  ticketGate: "images/ticketGate.jpg",
  shinjuku: "images/shinjuku.jpg",
  onsen: "images/onsen.jpg",
  ticketMachine: "images/ticketMachine.jpg",
  naritaStation: "images/naritaStation.jpg",
  hero: "images/hero.jpg",
};
const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const calendarReminders = [
  {
    id: "shibuya-sky-book",
    title: "預約澀谷 Sky 日落時段",
    start: "20261010T200000",
    end: "20261010T203000",
    location: "SHIBUYA SKY 官網 / Klook",
    description: "10/24 傍晚主案。官網通常提前約兩週開賣日落時段，建議 10/10 前後搶 17:00-18:30 入場。帶護照或實名資料。",
    alarms: [1440, 120]
  },
  {
    id: "onepiece-reserve",
    title: "確認 ONE PIECE BASE SHOP 抽籤／入場",
    start: "20261020T200000",
    end: "20261020T203000",
    location: "ONE PIECE BASE App / baseshop.onepiece-base.com",
    description: "10/25 回新宿後逛新宿丸井本館 4F。需 BASE CREW 帳號抽籤預約；確認 10/25 入場時段。",
    alarms: [1440, 120]
  },
  {
    id: "hiyama-book",
    title: "預約壽喜燒割烹 日山（人形町）午餐",
    start: "20261015T120000",
    end: "20261015T123000",
    location: "https://hiyama-gr.com/sukiyaki/honten/",
    description: "10/26（一）午餐。週日公休，務必訂週一。電話 03-3666-2901 或 Tabelog。",
    alarms: [1440, 180]
  },
  {
    id: "kamakura-prep",
    title: "確認鎌倉・江之島周遊券與天氣",
    start: "20261024T200000",
    end: "20261024T203000",
    location: "新宿站小田急窗口 / 自動售票機",
    description: "10/25 一日遊。江之島・鎌倉周遊券約 ¥1,640（出發前再確認）。查颱風或大雨備案改市區。",
    alarms: [1440, 60]
  },
  {
    id: "kamakura-day",
    title: "鎌倉・江之島 → One Piece → 池袋あぶる",
    start: "20261025T090000",
    end: "20261025T220000",
    location: "鎌倉 / 江之島 / 新宿丸井 / 池袋",
    description: "白天鎌倉；回新宿逛 ONE PIECE BASE SHOP；晚餐燒肉あぶる。池袋。",
    alarms: [720, 60]
  },
  {
    id: "akihabara-d1",
    title: "10/23 秋葉原電気街（唯一一天）",
    start: "20261023T203000",
    end: "20261023T230000",
    location: "秋葉原",
    description: "宇奈とと中野店輕食後，20:30 起 GiGO、扭蛋會館、Super Potato。僅 D1。",
    alarms: [1440, 90]
  },
  {
    id: "aburu-d3",
    title: "燒肉あぶる。池袋（D3 晚餐）",
    start: "20261025T190000",
    end: "20261025T210000",
    location: "豊島区池袋1-1-5 村田ビル1F",
    description: "建議訂位。北口ドンキ附近。預算約 ¥5,000+/人。",
    alarms: [1440, 120]
  },
  {
    id: "return-airport",
    title: "返程：出發去 NRT T1",
    start: "20261027T140000",
    end: "20261027T153000",
    location: "成田國際機場 第1航廈 北 wing",
    description: "14:00 從中野／沼袋出發。N'EX 或京成 Skyliner + 轉乘。國際線建議起飛前 3 小時到機場。",
    alarms: [120, 30, 10]
  },
  {
    id: "return-flight",
    title: "SL395 成田 NRT → 台北 TPE",
    start: "20261027T172500",
    end: "20261027T203000",
    location: "成田國際機場 第1航廈",
    description: "泰國獅航 SL395，NRT 17:25 → TPE 20:30。以航空公司與機場當日資訊為準。",
    alarms: [180, 60]
  }
];

const itinerary = [
  {
    id: "d1",
    date: "10/23（五）",
    title: "抵達沼袋、宇奈とと、秋葉原（唯一一天）",
    summary: "抵達日：成田 → N'EX 中野 → 步行／西武至沼袋入住 → 名代宇奈とと中野店 → 秋葉原主行程。秋葉原只排這一天。",
    stats: ["抵達日", "秋葉原僅D1", "沼袋住宿"],
    stops: [
      {
        time: "16:30",
        title: "抵達成田 NRT 第1航廈（北）",
        category: "transport",
        status: "confirmed",
        price: "機票已訂；N'EX 中野約 ¥3,070",
        route: "NRT T1 北 → JR 成田站",
        eta: "入境 60-90 分",
        description: "SL394 抵達後：取行李 → 跟著「鉄道/JR」指標 → JR 售票區。詳見「交通圖解」Step。",
        transit: "入境大廳往下到 B1 鐵路層。",
        booking: "確認 SL394、住宿地址日文截圖。",
        note: "先買 N'EX + Suica，再上車。",
        place: "成田國際機場 第1旅客航廈",
        image: IMAGES.narita
      },
      {
        time: "18:00",
        title: "N'EX → 中野 → 沼袋公寓",
        category: "transport",
        status: "confirmed",
        price: "N'EX 約 ¥3,070；Suica 押金 ¥500",
        route: "成田機場站 → 中野站 → 沼袋／公寓",
        eta: "約 80 分 + 末段 10-20 分",
        description: "N'EX 直達中野。公寓：中野區新井 4-26-2 ギャラリー平和の森館 101。房東：西武新宿線沼袋駅徒歩 3 分；中野駅徒歩約 18 分。",
        transit: "中野站北口出站後步行約 15-18 分，或轉西武新宿線各站停車至沼袋（急行不停沼袋）。",
        booking: "Google Maps：https://maps.app.goo.gl/atNgDQb1A8BMatWv7",
        note: "西武新宿線務必搭各站停車，急行不停沼袋。",
        place: "ギャラリー平和の森館",
        image: IMAGES.nexTrain
      },
      {
        time: "19:30",
        title: "名代宇奈とと 中野店（鰻魚飯）",
        category: "food",
        status: "planned",
        price: "約 ¥900-1,800／人",
        route: "公寓 → 中野駅周邊 中野5-52-1",
        eta: "用餐 40-50 分",
        description: "住宿旁平價鰻魚丼。官網：unatoto.com/shop/nakano/。備選：一風堂中野店、拉麵橫丁。",
        transit: "步行或沼袋／中野短程。",
        booking: "不需預約；熱門時段可能排隊。",
        note: "秋葉原今晚是主行程，別吃太撐。",
        place: "名代 宇奈とと 中野店",
        tags: ["必吃", "中野"]
      },
      {
        time: "20:30",
        title: "秋葉原主行程：GiGO・扭蛋・Super Potato",
        category: "theme",
        status: "planned",
        price: "逛街免費；扭蛋/遊戲依個人",
        route: "中野 → JR 總武線 2 站 → 秋葉原",
        eta: "車程 10 分；停留 2-2.5h",
        description: "唯一一天秋葉原：GiGO 1 號館 → 扭蛋會館 5F → Super Potato → Radio Kaikan 外觀。可加神田明神。",
        transit: "JR 中野 → 秋葉原（黃色總武線各站停車）。",
        booking: "不需預約。",
        note: "先逛再買；23:00 前搭 JR 回中野／沼袋。",
        place: "秋葉原電気街",
        tags: ["秋葉原", "必去", "僅D1"],
        image: IMAGES.akihabara
      },
      {
        time: "22:45",
        title: "回中野／沼袋休息",
        category: "rest",
        status: "planned",
        price: "—",
        route: "秋葉原 → 中野 → 公寓",
        eta: "車程 10 分 + 步行",
        description: "搭 JR 回中野後回公寓。隔天 10:00 出門，不排秋葉原。",
        transit: "總武線回中野；末段步行或西武各停至沼袋。",
        booking: "—",
        note: "戰利品先放公寓，輕裝出門。",
        place: "ギャラリー平和の森館"
      }
    ]
  },
  {
    id: "d2",
    date: "10/24（六）",
    title: "明治神宮、やまわらう、澀谷 Sky、Yoroniku",
    summary: "不排秋葉原。明治神宮 → 表参道涮涮鍋やまわらう午餐 → 竹下通短逛 → 澀谷 Sky → Yoroniku 晚餐。",
    stats: ["10:00出門", "涮涮鍋午餐", "燒肉晚餐"],
    stops: [
      {
        time: "10:00",
        title: "中野 → 原宿（JR）",
        category: "transport",
        status: "planned",
        price: "JR 約 ¥200",
        route: "中野 → 新宿/代々木 → 原宿",
        eta: "車程 25-30 分",
        description: "搭 JR。週六上午建議 10:00 出發。",
        transit: "山手線外回り往澀谷方向，或中央線轉乘。",
        booking: "不需預約。",
        note: "今天動線：原宿 → 表参道 → 澀谷 → 惠比壽一帶。",
        place: "原宿駅"
      },
      {
        time: "10:45",
        title: "明治神宮",
        category: "heritage",
        status: "needs",
        price: "免費參拜",
        route: "原宿站 → 表參道鳥居 → 本殿",
        eta: "停留約 2h",
        description: "森林步道參拜。10 月約 16:40 停止入內；午餐前離開即可。",
        transit: "步行。",
        booking: "不需門票。",
        note: "御守排隊預留 15-20 分。",
        place: "明治神宮",
        tags: ["必去"],
        image: IMAGES.meiji
      },
      {
        time: "13:00",
        title: "しゃぶしゃぶ やまわらう 表参道（午餐）",
        category: "food",
        status: "needs",
        price: "約 ¥3,000-6,000／人（出發前再確認菜單）",
        route: "明治神宮 → 表参道",
        eta: "用餐 90-120 分",
        description: "表参道涮涮鍋主案。Google Maps：Shabushabu yamawarau Omotesando（約 35.6675, 139.7110）。",
        transit: "步行。",
        booking: "建議 Tabelog／電話訂位（周六午餐熱門）。",
        note: "下午留體力給 Sky；竹下通改短逛。",
        place: "しゃぶしゃぶ やまわらう 表参道",
        tags: ["必吃", "表参道"],
        image: IMAGES.takeshita
      },
      {
        time: "15:00",
        title: "竹下通短逛 + 咖啡（可選）",
        category: "hutong",
        status: "optional",
        price: "咖啡約 ¥500-700",
        route: "表参道 → 竹下通 → 神宮前",
        eta: "40-60 分",
        description: "竹下通拍 15 分鐘即可；% Arabica 或 The Matcha Tokyo 可選。",
        transit: "步行。",
        booking: "不需預約。",
        note: "為澀谷 Sky 保留體力。",
        place: "% Arabica Tokyo 神宮前",
        image: IMAGES.takeshita
      },
      {
        time: "17:30",
        title: "澀谷 Sky 夜景",
        category: "night",
        status: "needs",
        price: "官網約 ¥2,700-3,400",
        route: "原宿 → 澀谷 → Scramble Square 14F",
        eta: "停留 1-1.5h",
        description: "夜景主案。360 度露天展望，需提前線上購票。",
        transit: "JR 原宿 → 澀谷 1 站。",
        booking: "https://www.shibuya-sky.com/",
        note: "風大帶外套；包包可能要寄櫃。",
        place: "SHIBUYA SKY",
        tags: ["必去", "夜景"],
        image: IMAGES.shibuya
      },
      {
        time: "19:30",
        title: "Yoroniku（晚餐主案）",
        category: "food",
        status: "needs",
        price: "約 ¥5,000-10,000／人（以現場為準）",
        route: "澀谷 → 惠比壽／代官山一帶",
        eta: "用餐 90-120 分",
        description: "燒肉名店。Maps：Yoroniku（約 35.6602, 139.7176）。備選：牛かつもとむら、Uobei。",
        transit: "JR／步行；回中野約 20-30 分。",
        booking: "強烈建議提前訂位。",
        note: "末班車約 00:30 前；連續牛肉日控制份量。",
        place: "Yoroniku",
        tags: ["必吃", "燒肉"],
        image: IMAGES.shibuya
      }
    ]
  },
  {
    id: "d3",
    date: "10/25（日）",
    title: "鎌倉・江之島 → One Piece → 池袋あぶる",
    summary: "白天鎌倉江之島；回新宿逛 ONE PIECE BASE SHOP（丸井本館 4F）；晚餐池袋燒肉あぶる。日山週日公休，不排。",
    stats: ["一日遊", "One Piece", "池袋燒肉"],
    stops: [
      {
        time: "10:00",
        title: "中野出發 → 新宿轉小田急",
        category: "transport",
        status: "planned",
        price: "周遊券約 ¥1,640（出發前確認）",
        route: "中野 → 新宿 → 藤沢/鎌倉",
        eta: "車程約 60-75 分",
        description: "新宿小田急買「江之島・鎌倉周遊券」。",
        transit: "JR 中野 → 新宿 → 小田急線。",
        booking: "現場購買；假日提早出發。",
        note: "颱風備案：新宿 One Piece + 池袋室內／あぶる。",
        place: "新宿駅 小田急"
      },
      {
        time: "11:30",
        title: "鶴岡八幡宮 + 小町通",
        category: "heritage",
        status: "planned",
        price: "參拜免費",
        route: "鎌倉站 → 若宮大路",
        eta: "90-120 分",
        description: "鎌倉代表神社與商店街小吃。",
        transit: "步行。",
        booking: "不需預約。",
        note: "週日人多，午餐錯開 12:30 高峰。",
        place: "鶴岡八幡宮",
        image: IMAGES.kamakura
      },
      {
        time: "14:00",
        title: "江之電：鎌倉高校前 → 江之島",
        category: "transport",
        status: "planned",
        price: "含在周遊券",
        route: "鎌倉 → 長谷 → 江之島",
        eta: "每站 30-60 分",
        description: "灌籃高手聖地注意車流。可跳過大佛直衝江之島。",
        transit: "江之電。",
        booking: "不需預約。",
        note: "想省體力可跳過大佛。",
        place: "鎌倉高校前駅",
        tags: ["網紅", "灌籃高手"],
        image: IMAGES.kamakuraHigh
      },
      {
        time: "16:00",
        title: "江之島（燈塔/洞穴/海岸）",
        category: "park",
        status: "planned",
        price: "展望台/洞穴聯票約 ¥1,000-1,500",
        route: "江之島站 → 弁天橋 → 島上",
        eta: "60-90 分",
        description: "海邊段落；為回新宿預留時間，提早收。",
        transit: "步行；可搭江之島電梯。",
        booking: "現場購票。",
        note: "約 17:00-17:30 開始回程。",
        place: "江の島",
        tags: ["必去"],
        image: IMAGES.enoshima
      },
      {
        time: "18:30",
        title: "ONE PIECE BASE SHOP（新宿丸井本館 4F）",
        category: "theme",
        status: "needs",
        price: "入場依抽籤／預約；購物另計",
        route: "小田急回新宿 → 新宿3-30-13 丸井本館",
        eta: "停留 45-75 分",
        description: "官方旗艦店。需 ONE PIECE BASE App「BASE CREW」抽籤預約。https://baseshop.onepiece-base.com/",
        transit: "JR／地鐵至新宿三丁目或新宿東口徒歩。",
        booking: "App 抽籤；確認 10/25 時段。一人一日限入一次。",
        note: "沒抽中改新宿逛街或直接去池袋晚餐。",
        place: "ONE PIECE BASE SHOP 新宿マルイ本館",
        tags: ["必去", "需預約"],
        image: IMAGES.shinjuku
      },
      {
        time: "19:45",
        title: "燒肉あぶる。池袋（晚餐）",
        category: "food",
        status: "needs",
        price: "約 ¥5,000-6,000／人",
        route: "新宿 → 池袋北口（山手線約 5-8 分）",
        eta: "用餐 90-120 分",
        description: "A5 黑毛和牛。地址：豊島区池袋1-1-5 村田ビル1F（北口ドンキ附近）。https://yakinikuabull.com/ikebukuro-store/",
        transit: "JR 山手線新宿 → 池袋。",
        booking: "建議訂位（Hot Pepper / 電話）。",
        note: "思い出横丁改備選。21:30-22:00 前回沼袋／中野。",
        place: "焼肉あぶる。池袋店",
        tags: ["必吃", "燒肉", "池袋"],
        image: IMAGES.shinjuku
      },
      {
        time: "22:00",
        title: "池袋 → 中野／沼袋（回住宿）",
        category: "rest",
        status: "planned",
        price: "JR／西武約 ¥160-260",
        route: "池袋 → 高田馬場／新宿 → 中野或沼袋",
        eta: "約 20-30 分",
        description: "回公寓休息。隔天壽喜燒 + 泡湯，早睡。",
        transit: "山手線轉中央線，或西武轉乘（查 Google Maps）。",
        booking: "不需預約。",
        note: "西武回沼袋請搭各站停車。",
        place: "ギャラリー平和の森館"
      }
    ]
  },
  {
    id: "d4",
    date: "10/26（一）",
    title: "谷中短逛、日山壽喜燒、住宿旁泡湯",
    summary: "上午谷中銀座短逛；午餐人形町壽喜燒割烹日山（週一可、週日休）；下午回中野泡光明泉／中野湯田；晚餐清淡。",
    stats: ["日山午餐", "泡湯必去", "10:00出門"],
    stops: [
      {
        time: "10:00",
        title: "谷中銀座商店街（短逛）",
        category: "hutong",
        status: "planned",
        price: "免費；小吃約 ¥500-1,000",
        route: "中野 → 日暮里 → 谷中銀座",
        eta: "車程 35 分；逛 60-75 分",
        description: "下町氛圍與點心。為日山午餐提早離開。",
        transit: "JR 中野 → 日暮里 → 步行。",
        booking: "不需預約。",
        note: "神保町改備選，今天主線是日山。",
        place: "谷中銀座",
        tags: ["生活感"],
        image: IMAGES.yanaka
      },
      {
        time: "12:00",
        title: "壽喜燒割烹 日山（人形町・午餐）",
        category: "food",
        status: "needs",
        price: "午餐套餐約 ¥8,000-20,000＋／人（另服務費，以官網為準）",
        route: "谷中 → 人形町",
        eta: "用餐 90-120 分",
        description: "老舖壽喜燒。中央区日本橋人形町2-5-1 日山ビル 2F。官網：hiyama-gr.com。週日公休。",
        transit: "Metro 日比谷線等至人形町駅徒歩約 2 分。",
        booking: "必訂：03-3666-2901 或 Tabelog。",
        note: "高預算日；下午輕食即可再去泡湯。",
        place: "すき焼割烹 日山",
        tags: ["必吃", "壽喜燒", "需預約"]
      },
      {
        time: "14:30",
        title: "回中野・準備泡湯",
        category: "rest",
        status: "planned",
        price: "—",
        route: "人形町 → 中野／沼袋",
        eta: "車程約 30-40 分 + 休息",
        description: "回公寓換洗衣物、帶毛巾。泡湯前勿過飽。",
        transit: "Metro／JR 回中野。",
        booking: "—",
        note: "光明泉、中野湯田在中野站步行圈。",
        place: "ギャラリー平和の森館"
      },
      {
        time: "16:30",
        title: "光明泉／中野湯田（住宿旁泡湯・必去）",
        category: "wellness",
        status: "needs",
        price: "約 ¥500-1,000",
        route: "中野站北口步行圈",
        eta: "停留 90-120 分",
        description: "錢湯主行程。推薦光明泉或中野湯田。",
        transit: "從公寓步行。",
        booking: "不需預約；週一查公休與刺青規定。",
        note: "帶 ¥100 硬幣（置物櫃）。",
        place: "光明泉 中野",
        tags: ["泡湯", "必去", "住宿旁"],
        image: IMAGES.onsen
      },
      {
        time: "19:00",
        title: "中野輕食晚餐（拉麵／便當）",
        category: "food",
        status: "planned",
        price: "約 ¥900-2,000／人",
        route: "中野站前",
        eta: "45-60 分",
        description: "中午已吃日山，晚上清淡即可。拉麵橫丁或便利店便當。",
        transit: "步行。",
        booking: "Walk-in。",
        note: "隔天退房，控制酒量。",
        place: "中野駅"
      }
    ]
  },
  {
    id: "d5",
    date: "10/27（二）",
    title: "中野最後半天、返程 NRT",
    summary: "退房日：早午餐／伴手禮（可再訪宇奈とと），14:00 前出發，17:25 SL395。",
    stats: ["14:00出發", "返程", "伴手禮"],
    stops: [
      {
        time: "09:00",
        title: "中野早午餐 + 伴手禮",
        category: "food",
        status: "planned",
        price: "約 ¥1,500-3,000",
        route: "中野站 → Broadway／百貨",
        eta: "90 分",
        description: "東京香蕉、百貨地下、Broadway。可再吃宇奈とと（若 D1 沒吃到）。",
        transit: "步行。",
        booking: "不需預約。",
        note: "10:30 前回公寓收行李。",
        place: "中野駅 土産"
      },
      {
        time: "11:30",
        title: "退房・最後整理",
        category: "rest",
        status: "confirmed",
        price: "—",
        route: "ギャラリー平和の森館",
        eta: "30-45 分",
        description: "垃圾分類、鑰匙、護照與充電器。",
        transit: "—",
        booking: "依房東規則。",
        note: "大件行李前一晚秤重。",
        place: "ギャラリー平和の森館"
      },
      {
        time: "14:00",
        title: "出發往成田 NRT T1",
        category: "transport",
        status: "needs",
        price: "N'EX 約 ¥3,070",
        route: "中野 → 成田機場 第1航廈",
        eta: "車程 75-100 分 + 緩衝",
        description: "17:25 起飛 → 14:00-14:30 出發較穩。",
        transit: "N'EX 中野直達。",
        booking: "可提前買指定席。",
        note: "SL395 以航空公司規定為準。",
        place: "成田國際機場"
      },
      {
        time: "17:25",
        title: "SL395 成田 → 台北",
        category: "transport",
        status: "confirmed",
        price: "機票已訂",
        route: "NRT T1 → TPE",
        eta: "飛行約 4h",
        description: "泰國獅航 SL395，17:25 → 20:30（以公告為準）。",
        transit: "—",
        booking: "線上 check-in 若開放可先做。",
        note: "免稅補貨控制時間。",
        place: "成田國際機場 第1旅客航廈"
      }
    ]
  }
];


const geoPlaces = {
  nakano: { x: 148, y: 205, label: "中野／沼袋", sub: "住宿", kind: "hub" },
  koenji: { x: 108, y: 198, label: "高圓寺", sub: "西", kind: "area" },
  shinjuku: { x: 188, y: 172, label: "新宿", sub: "One Piece", kind: "area" },
  ikebukuro: { x: 178, y: 128, label: "池袋", sub: "あぶる", kind: "area" },
  harajuku: { x: 202, y: 218, label: "原宿", sub: "D2", kind: "area" },
  shibuya: { x: 208, y: 262, label: "澀谷", sub: "Sky", kind: "area" },
  ebisu: { x: 228, y: 278, label: "Yoroniku", sub: "D2 晚", kind: "area" },
  akihabara: { x: 268, y: 188, label: "秋葉原", sub: "D1", kind: "area" },
  yanaka: { x: 308, y: 158, label: "谷中", sub: "D4", kind: "area" },
  ningyocho: { x: 292, y: 178, label: "人形町", sub: "日山", kind: "area" },
  jimbocho: { x: 252, y: 168, label: "神保町", sub: "備選", kind: "area" },
  onsen: { x: 138, y: 192, label: "光明泉", sub: "D4 泡湯", kind: "onsen" },
  nrt: { x: 418, y: 88, label: "成田", sub: "NRT", kind: "airport" },
  kamakura: { x: 72, y: 348, label: "鎌倉", sub: "D3", kind: "far" },
  enoshima: { x: 48, y: 368, label: "江之島", sub: "海", kind: "far" }
};

const tripGeoOverview = {
  routes: [
    { day: "d1", color: "#c4a574", width: 2.5, path: ["nrt", "nakano", "akihabara", "nakano"] },
    { day: "d2", color: "#2d6a4f", width: 2.5, path: ["nakano", "harajuku", "shibuya", "ebisu", "nakano"] },
    { day: "d3", color: "#4a6fa5", width: 2.5, path: ["nakano", "shinjuku", "kamakura", "enoshima", "shinjuku", "ikebukuro", "nakano"] },
    { day: "d4", color: "#8b6f4e", width: 2.5, path: ["nakano", "yanaka", "ningyocho", "nakano", "onsen"] },
    { day: "d5", color: "#2c5282", width: 2.5, path: ["nakano", "nrt"] }
  ],
  activePlaces: ["nakano", "shinjuku", "ikebukuro", "harajuku", "shibuya", "ebisu", "akihabara", "yanaka", "ningyocho", "onsen", "nrt", "kamakura", "enoshima"]
};

const tripDayMaps = [
  { day: "D1", date: "10/23", color: "#c4a574", title: "抵達・秋葉原", route: ["nrt", "nakano", "akihabara", "nakano"], note: "N'EX 直達中野，不經東京車站" },
  { day: "D2", date: "10/24", color: "#2d6a4f", title: "明治・やまわらう・Yoroniku", route: ["nakano", "harajuku", "shibuya", "ebisu", "nakano"], note: "表参道涮涮鍋 + Sky + Yoroniku" },
  { day: "D3", date: "10/25", color: "#4a6fa5", title: "鎌倉・One Piece・あぶる", route: ["nakano", "shinjuku", "kamakura", "enoshima", "shinjuku", "ikebukuro", "nakano"], note: "丸井 One Piece + 池袋燒肉" },
  { day: "D4", date: "10/26", color: "#8b6f4e", title: "日山・泡湯", route: ["nakano", "yanaka", "ningyocho", "nakano", "onsen"], note: "人形町日山午餐 + 錢湯" },
  { day: "D5", date: "10/27", color: "#2c5282", title: "返程", route: ["nakano", "nrt"], note: "N'EX 中野直達成田" }
];

const transitTutorials = [
  {
    title: "成田機場 → 中野（完整 Step）",
    intro: "抵達當天照這個順序走，不會迷路。",
    steps: [
      {
        step: 1,
        title: "入境後找 JR 指標",
        body: "跟著「Railway / 鉄道」→「JR East」往下到 B1。成田機場站與 JR 在同一層。",
        image: IMAGES.naritaStation
      },
      {
        step: 2,
        title: "買 N'EX 車票 + Suica",
        body: "綠色 JR 售票機可選中文。買「成田特快 N'EX 中野」+ 加購 Suica（押金 ¥500，餘額建議先充 ¥3,000）。或櫃台排隊一次辦好。",
        image: IMAGES.ticketMachine
      },
      {
        step: 3,
        title: "搭 N'EX 成田特快",
        body: "看月台螢幕確認「Narita Express → Nakano」。上車找座位，約 80 分鐘直達中野，不用轉車。",
        image: IMAGES.nexTrain
      },
      {
        step: 4,
        title: "中野站 → 沼袋公寓",
        body: "房東：沼袋駅徒歩 3 分、中野駅徒歩約 18 分。可北口出站步行，或轉西武新宿線「各站停車」至沼袋（急行不停）。Maps：https://maps.app.goo.gl/atNgDQb1A8BMatWv7",
        image: IMAGES.narita
      }
    ]
  },
  {
    title: "Suica 搭車教學（地鐵/JR 通用）",
    intro: "東京 95% 情境用 Suica 刷卡就夠，不用每次買票。",
    steps: [
      {
        step: 1,
        title: "進站：刷卡進閘門",
        body: "把 Suica 放在閘門上「IC」圖示處，聽到嗶聲且閘門打開就進去。不要走一般售票閘門。",
        image: IMAGES.ticketGate
      },
      {
        step: 2,
        title: "找月台",
        body: "進站後看藍色電子看板，找你的目的地與發車時間。中野去秋葉原 = 黃色總武線各站停車。",
        image: IMAGES.yamanote
      },
      {
        step: 3,
        title: "出站：再刷一次",
        body: "出站閘門再刷同一张卡；螢幕顯示扣款金額。餘額不足會無法出站，到旁邊儲值機加值。",
        image: IMAGES.suica
      },
      {
        step: 4,
        title: "儲值",
        body: "站內「チャージ」機或 7-11 都可加值。建議維持 ¥2,000 以上餘額。",
        image: IMAGES.suica
      }
    ]
  },
  {
    title: "什麼時候要買實體票？",
    intro: "大多數日子 Suica 就夠；少數情況買專用票更划算。",
    steps: [
      {
        step: 1,
        title: "N'EX（成田↔中野）",
        body: "D1 入境、D5 返程：買 N'EX 指定席票（可用 Suica 搭但需另購特快券，建議買套票最清楚）。",
        image: IMAGES.nexTrain
      },
      {
        step: 2,
        title: "鎌倉周遊券（D3）",
        body: "新宿小田急售票機買「江之島・鎌倉周遊券」約 ¥1,640，含往返 + 江之電無限搭。比單買划算。",
        image: IMAGES.kamakura
      },
      {
        step: 3,
        title: "景點門票",
        body: "澀谷 Sky、江之島展望台等需官網預約/現場購票，不能用 Suica 代替。",
        image: IMAGES.shibuya
      }
    ]
  }
];

const routeCards = [
  { title: "中野 ⇄ 秋葉原", price: "JR 總武線約 ¥160-200", route: "中野 → 秋葉原（2 站）", eta: "約 10 分", note: "秋葉原只在 D1 晚上；這條路線當天會用到。" },
  { title: "中野 ⇄ 原宿/澀谷", price: "JR 約 ¥200-260", route: "中野 → 新宿/代々木 → 原宿/澀谷", eta: "25-35 分", note: "D2 明治神宮 + 澀谷 Sky 主線。" },
  { title: "中野 ⇄ 新宿（小田急／One Piece）", price: "JR 約 ¥160", route: "中野 → 新宿", eta: "約 5-15 分", note: "D3 買周遊券 + ONE PIECE BASE SHOP（丸井本館）。" },
  { title: "新宿 ⇄ 池袋（あぶる）", price: "JR 約 ¥160-200", route: "新宿 → 池袋", eta: "約 5-8 分", note: "D3 晚餐燒肉あぶる；北口ドンキ附近。" },
  { title: "中野 ⇄ 日暮里／人形町", price: "JR／Metro 約 ¥200-300", route: "中野 → 日暮里 → 人形町", eta: "約 35-50 分", note: "D4 谷中短逛 + 日山午餐。" },
  { title: "沼袋（住宿）", price: "西武各停", route: "中野 ↔ 沼袋", eta: "徒歩 3 分（沼袋）／18 分（中野）", note: "急行不停沼袋；務必搭各站停車。" },
  { title: "中野 ⇄ 成田 NRT", price: "N'EX 約 ¥3,070", route: "中野 → 成田機場", eta: "約 80 分", note: "D1 入境與 D5 返程；可買指定席。" },
  { title: "深夜回中野／沼袋", price: "JR 末班約 00:30 前後", route: "澀谷/池袋 → 中野", eta: "15-30 分", note: "喝酒後注意末班車；錯過計程車約 ¥5,000-7,000。" }
];

const transitMaps = [
  {
    title: "東京地鐵路線圖（繁中）",
    caption: "東京 Metro + 都營地下鐵",
    image: IMAGES.metroZh,
    link: "https://www.tokyometro.jp/tcn/subwaymap/",
    note: "雙指放大。你這趟多數走 JR，地鐵主要用於神保町、部分轉乘。"
  },
  {
    title: "山手線＋地鐵關係圖",
    caption: "澀谷・新宿・原宿・秋葉原怎麼串",
    image: IMAGES.yamanote,
    link: "https://www.jreast.co.jp/multi/zh-CHT/",
    note: "D2 用：中野 → 原宿 → 澀谷，山手線環狀一圈就懂。"
  },
  {
    title: "關東鐵路概覽圖",
    caption: "中野在東京西側、鎌倉在西南",
    image: IMAGES.greaterTokyo,
    link: "https://www.jreast.co.jp/",
    note: "看大局：中野（住宿）→ 新宿 → 小田急往鎌倉；成田在東邊。"
  }
];

const routeDiagrams = [
  {
    day: "D1",
    title: "成田 NRT → 中野（抵達）",
    line: "nex",
    steps: [
      { label: "NRT 第1航廈", sub: "SL394 入境", icon: "✈" },
      { label: "N'EX 成田特快", sub: "約 80 分・可買指定席", icon: "🚄" },
      { label: "中野／沼袋", sub: "徒歩或西武各停 → 公寓", icon: "🏠", hub: true }
    ],
    tips: ["機場買/綁 Suica", "西武急行不停沼袋", "Maps 存房東連結"]
  },
  {
    day: "D1",
    title: "中野 ⇄ 秋葉原（僅第一天晚上）",
    line: "sobu",
    steps: [
      { label: "中野", sub: "宇奈とと後出發", icon: "🏠", hub: true },
      { label: "→ 2 站", sub: "約 10 分", icon: "🟡" },
      { label: "秋葉原", sub: "電気街・GiGO", icon: "🎮" }
    ],
    tips: ["黃色總武線各站停車", "不用轉車"]
  },
  {
    day: "D2",
    title: "中野 → 原宿 → 澀谷 → Yoroniku",
    line: "yamanote",
    steps: [
      { label: "中野", sub: "JR 出發", icon: "🏠", hub: true },
      { label: "原宿", sub: "明治・やまわらう", icon: "⛩" },
      { label: "澀谷", sub: "Sky 夜景", icon: "🌃" },
      { label: "Yoroniku", sub: "晚餐燒肉", icon: "🥩" }
    ],
    tips: ["不經秋葉原", "表参道涮涮鍋午餐", "Yoroniku 需訂位"]
  },
  {
    day: "D3",
    title: "鎌倉 → One Piece → 池袋あぶる",
    line: "odakyu",
    steps: [
      { label: "中野", sub: "JR", icon: "🏠", hub: true },
      { label: "新宿", sub: "買周遊券", icon: "🎫" },
      { label: "鎌倉", sub: "八幡宮・江之島", icon: "🌊" },
      { label: "丸井", sub: "ONE PIECE", icon: "🏴‍☠️" },
      { label: "池袋", sub: "あぶる", icon: "🥩" },
      { label: "沼袋", sub: "回住宿", icon: "🏠", hub: true }
    ],
    tips: ["One Piece 需 App 抽籤", "あぶる訂位", "西武回沼袋搭各停"]
  },
  {
    day: "D4",
    title: "谷中 → 日山 → 住宿旁泡湯",
    line: "local",
    steps: [
      { label: "中野", sub: "出發", icon: "🏠", hub: true },
      { label: "日暮里", sub: "谷中短逛", icon: "🐱" },
      { label: "人形町", sub: "日山壽喜燒", icon: "🍲" },
      { label: "光明泉", sub: "泡湯必去", icon: "♨" }
    ],
    tips: ["日山週日休、週一午餐", "必訂位", "泡湯後輕食即可"]
  },
  {
    day: "D5",
    title: "中野 → 成田（返程）",
    line: "nex",
    steps: [
      { label: "公寓", sub: "14:00 出門", icon: "🏠", hub: true },
      { label: "N'EX", sub: "約 80 分", icon: "🚄" },
      { label: "NRT T1", sub: "SL395 17:25", icon: "✈" }
    ],
    tips: ["起飛前 3 小時到機場", "預留安檢排隊"]
  }
];

const transitTips = [
  {
    title: "Suica / Pasmo 怎麼用",
    icon: "💳",
    body: "進站刷卡、出站刷卡。儲值機在車站；便利店也能加值。iPhone 錢包可綁定 Suica，少一張實體卡。"
  },
  {
    title: "JR 總武線（中野的生命線）",
    icon: "🟡",
    body: "中野站的黃色各站停車，往秋葉原/御茶ノ水方向。去秋葉原只要 2 站，是這趟最常用路線。"
  },
  {
    title: "山手線（環狀記法）",
    icon: "🟢",
    body: "綠色環狀線：新宿、澀谷、原宿、秋葉原都在上面。搞不清方向就看月台螢幕的「外回り/内回り」。"
  },
  {
    title: "Google Maps 實戰",
    icon: "📱",
    body: "輸入目的地 → 選電車圖示 → 看「發車月台」與「第幾節車廂」。比只看路線圖更不容易搭錯。"
  },
  {
    title: "成田 N'EX 購票",
    icon: "🎫",
    body: "機場 JR 櫃台或售票機；也可預先在 Klook/JR East 網站買。中野可直達，不用轉車。"
  },
  {
    title: "末班車提醒",
    icon: "⏰",
    body: "JR 末班約 00:30 前後。D2 澀谷喝酒後，錯過末班計程車回中野約 ¥5,000-7,000。"
  }
];

const budgetItems = [
  { title: "交通（含鎌倉周遊券）", cny: "—", twd: "約 NT$2,500-4,500", note: "以 JPY 計：Suica 儲值 + 周遊券 ¥1,640 + N'EX 往返約 ¥6,000。" },
  { title: "景點（澀谷 Sky 等）", cny: "—", twd: "約 NT$1,200-2,000", note: "澀谷 Sky 約 ¥2,700-3,400；江之島展望/洞穴另計。" },
  { title: "餐食（5 日）", cny: "—", twd: "約 NT$8,000-15,000", note: "含燒肉、拉麵、居酒屋、咖啡；燒肉日預算拉高。" },
  { title: "購物/扭蛋/伴手禮", cny: "—", twd: "約 NT$3,000-8,000", note: "秋葉原與中野 Broadway 最易超支，先設上限。" },
  { title: "總預估（不含機票住宿）", cny: "¥35,000-55,000", twd: "約 NT$7,500-12,000", note: "依 1 JPY ≈ NT$0.22 粗估；匯率與個人購物浮動大。" }
];

const taiwanPrep = [
  { title: "護照與簽證", label: "必做", body: "台灣護照赴日免簽 90 日。確認效期（建議 6 個月以上）、機票姓名與護照一致。" },
  { title: "機票 SL394 / SL395", label: "核對", body: "泰國獅航行李與線上 check-in 規定以官網為準；廉航注意托運行李加購。" },
  { title: "網路與 Suica", label: "必備", body: "eSIM/漫遊 + 入境後購或綁定 Suica/Pasmo。iPhone 錢包可綁定，實體卡機場也能買。" },
  { title: "澀谷 Sky 預約", label: "高優先", body: "10/24 傍晚時段建議出發前兩週搶購；備案為澀谷 Hikarie 展望或地面十字路口。" },
  { title: "住宿聯絡", label: "必做", body: "公寓入住方式、Wi-Fi、垃圾分類問清楚。地址日文版存 Google Maps 離線地圖。" },
  { title: "旅遊保險", label: "建議", body: "海外醫療與班機延誤；鎌倉日步行多，扭傷理赔留意條款。" },
  { title: "現金與信用卡", label: "備援", body: "日本仍有不少小店只收現金。帶 ¥20,000-30,000 現金，其餘 Suica/信用卡。" },
  { title: "禮儀提醒", label: "重要", body: "電車內不講電話、垃圾隨身帶回、排隊靠左（大阪靠右，東京樓梯靠左為多）。" }
];

const foodList = [
  { title: "名代宇奈とと 中野店", area: "中野", price: "約 ¥900-1,800", bestFor: "D1 抵達鰻魚飯主案", source: "https://www.unatoto.com/shop/nakano/", map: "名代 宇奈とと 中野店" },
  { title: "しゃぶしゃぶ やまわらう 表参道", area: "表参道", price: "約 ¥3,000-6,000", bestFor: "D2 午餐主案", source: "https://tabelog.com/", map: "しゃぶしゃぶ やまわらう 表参道" },
  { title: "Yoroniku", area: "惠比壽／澀谷", price: "約 ¥5,000-10,000", bestFor: "D2 晚餐主案（Sky 後）", source: "https://maps.google.com/?q=Yoroniku+Tokyo", map: "Yoroniku" },
  { title: "燒肉あぶる。池袋", area: "池袋", price: "約 ¥5,000-6,000", bestFor: "D3 晚餐主案", source: "https://yakinikuabull.com/ikebukuro-store/", map: "焼肉あぶる。池袋店" },
  { title: "壽喜燒割烹 日山（人形町）", area: "人形町", price: "約 ¥8,000-20,000+", bestFor: "D4 午餐主案（週日休）", source: "https://hiyama-gr.com/sukiyaki/honten/", map: "すき焼割烹 日山" },
  { title: "一風堂 中野店", area: "中野", price: "約 ¥900-1,200", bestFor: "D1 備選拉麵", source: "https://www.ippudo.com/", map: "一風堂 中野" },
  { title: "牛かつもとむら", area: "秋葉原/澀谷", price: "約 ¥1,200-1,800", bestFor: "D2 備選（Yoroniku 訂不到時）", source: "https://motomura.jp/", map: "牛かつもとむら 渋谷" },
  { title: "% Arabica 神宮前", area: "原宿", price: "咖啡約 ¥500-700", bestFor: "D2 竹下通短逛", source: "https://arabicacoffee.jp/", map: "% Arabica Tokyo 神宮前" },
  { title: "Uobei 渋谷", area: "澀谷", price: "約 ¥2,000-3,500", bestFor: "D2 備選快食壽司", source: "https://www.uobei.com/", map: "Uobei 渋谷" },
  { title: "鎌倉小町通小吃", area: "鎌倉", price: "約 ¥500-1,500", bestFor: "D3 午餐散步", source: "https://www.kamakura-info.jp/", map: "鎌倉 小町通" },
  { title: "谷中銀座 肉まん/草鞋燒", area: "谷中", price: "約 ¥300-800", bestFor: "D4 上午點心", source: "https://www.gotokyo.org/", map: "谷中銀座" },
  { title: "中野站拉麵橫丁", area: "中野", price: "約 ¥900-1,400", bestFor: "D4 泡湯後輕食", source: "https://www.gotokyo.org/", map: "中野駅 ラーメン" },
  { title: "神保町喫茶", area: "神保町", price: "咖啡 ¥600-1,000", bestFor: "D4 備選", source: "https://www.gotokyo.org/", map: "神保町 喫茶店" }
];

const nightList = [
  { title: "澀谷 Sky", type: "展望台", hours: "依預約時段", price: "約 ¥2,700-3,400", route: "澀谷 Scramble Square 14F", source: "https://www.shibuya-sky.com/", note: "D2 夜景主案；需提前購票。" },
  { title: "MIYASHITA PARK 屋上", type: "夜景/酒吧", hours: "依店舗", price: "免費入場；酒吧另計", route: "D2 澀谷 Sky 前後", source: "https://www.shibuya-scramble-square.com/", note: "年輕人愛的複合商場，屋上綠洲拍照。" },
  { title: "秋葉原電気街夜景", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D1 唯一一天", source: "https://www.gotokyo.org/", note: "霓虹與扭蛋，不必購物也可感受氛圍。" },
  { title: "澀谷居酒屋橫丁", type: "居酒屋", hours: "17:00-23:00", price: "約 ¥3,000-6,000", route: "D2 晚餐圈", source: "https://tabelog.com/", note: "周六熱門，建議訂位或早到。" },
  { title: "ONE PIECE BASE SHOP", type: "旗艦店", hours: "約 11:00-20:00（以官網為準）", price: "需抽籤預約", route: "D3 新宿丸井本館 4F", source: "https://baseshop.onepiece-base.com/", note: "BASE App 抽籤；沒抽中改逛街。" },
  { title: "燒肉あぶる。池袋", type: "燒肉晚餐", hours: "D3 19:45 起", price: "約 ¥5,000-6,000", route: "新宿 → 池袋北口", source: "https://yakinikuabull.com/ikebukuro-store/", note: "D3 晚餐主案；建議訂位。" },
  { title: "新宿思い出横丁（備選）", type: "夜景/居酒屋", hours: "彈性", price: "約 ¥2,000-4,000", route: "あぶる訂不到時", source: "https://www.gotokyo.org/", note: "本版主線改池袋あぶる。" },
  { title: "光明泉／中野湯田", type: "錢湯", hours: "D4 16:30 起", price: "約 ¥500-1,000", route: "中野站步行 10 分", source: "https://www.gotokyo.org/", note: "泡湯日主行程；刺青規定先查。" },
];

const tips = [
  { title: "10:00 出門節奏", body: "多數日 10:00 離開公寓，每點 1-2 小時。D5 例外要 14:00 去機場。" },
  { title: "Suica 先儲值", body: "機場或中野站儲值 ¥5,000。7-11、地鐵都能加值。" },
  { title: "明治神宮關門", body: "10 月約 16:40 停止入內。D2 已不排秋葉原，時間較充裕。" },
  { title: "鎌倉颱風備案", body: "大雨改池袋/新宿室內 + 拉麵/咖啡，周遊券可改日（視票種規定）。" },
  { title: "垃圾帶回", body: "街上垃圾桶少。便利店可丟小垃圾，公寓依房東分類。" },
  { title: "不經東京車站", body: "這趟 N'EX 中野直達、轉乘用新宿/原宿/澀谷。不必特地去東京駅。" },
  { title: "D4 泡湯準備", body: "帶毛巾或現場買；¥100 硬幣給置物櫃。泡完喝牛奶是儀式感。" },
  { title: "D3 晚上", body: "鎌倉回來：ONE PIECE（需抽籤）→ 池袋あぶる → 回沼袋。西武搭各停。" },
  { title: "訂位優先", body: "日山、Yoroniku、やまわらう、あぶる、澀谷 Sky、One Piece 抽籤——出發前依序處理。" },
  { title: "沼袋交通", body: "西武新宿線急行不停沼袋；回住宿請搭各站停車。中野徒歩約 18 分。" },
  { title: "拍照禮儀", body: "鎌倉高校前勿站馬路中央；神社與電車內避免擋路架腳架。" }
];

const researchSources = [
  { type: "Official", title: "SHIBUYA SKY 官網", url: "https://www.shibuya-sky.com/", takeaways: ["需提前線上購票與時段入場。", "日落時段最熱門，建議出發前兩週關注開賣。"] },
  { type: "Official", title: "明治神宮 參拜案內", url: "https://www.meijijingu.or.jp/", takeaways: ["開門 5:00-6:40（依月而异），關門 16:30-18:30。", "10 月日落早，安排 16:40 前離開較穩。"] },
  { type: "Transport", title: "小田急 江之島・鎌倉周遊券", url: "https://www.odakyu.jp/", takeaways: ["含小田急往返與江之電不限次。", "價格每年調整，出發前再確認。"] },
  { type: "Transport", title: "JR East N'EX", url: "https://www.jreast.co.jp/", takeaways: ["成田 ↔ 中野有 N'EX 直達。", "可購指定席；返程 D5 建議預留 3 小時到機場。"] },
  { type: "Guide", title: "GO TOKYO 官方旅遊", url: "https://www.gotokyo.org/", takeaways: ["東京官方活動與區域介紹。", "可補週邊營業時間與活動。"] },
  { type: "Area", title: "鎌倉市観光", url: "https://www.kamakura-info.jp/", takeaways: ["鶴岡八幡宮、小町通、江之電路線。", "週末人潮多，早出發。"] }
];


const preDepartureGroups = [
  {
    phase: "出發 14 天前",
    items: [
      { id: "passport-14d", title: "護照效期 ≥ 6 個月", detail: "SL394/395 姓名拼音與護照一致；影本存雲端。" },
      { id: "insurance-14d", title: "海外旅遊保險", detail: "醫療、班機延誤、行李；確認鎌倉戶外活動是否理賠。" },
      { id: "esim-14d", title: "預訂日本 eSIM / 漫遊", detail: "落地要能開 Google Maps、Tabelog、Instagram 查店。" },
      { id: "sky-14d", title: "設鬧鐘：澀谷 Sky 開賣", detail: "10/10 前後搶 10/24 17:00-18:30 日落時段。" },
      { id: "lionair-14d", title: "泰國獅航行李加購", detail: "確認 SL394/395 托運公斤數；超重先在官網買。" }
    ]
  },
  {
    phase: "出發 3 天前",
    items: [
      { id: "restaurant-3d", title: "訂餐廳：やまわらう／Yoroniku／あぶる／日山", detail: "D2 午餐涮涮鍋、D2 晚 Yoroniku、D3 晚あぶる、D4 午日山（週日休）。" },
      { id: "onepiece-3d", title: "確認 ONE PIECE BASE 抽籤結果", detail: "App BASE CREW；10/25 新宿丸井本館 4F 入場時段。" },
      { id: "weather-3d", title: "看 10/25 鎌倉天氣", detail: "大雨改 One Piece + 池袋あぶる／Sunshine City。" },
      { id: "housing-3d", title: "聯絡公寓入住", detail: "ギャラリー平和の森館 101：沼袋徒歩3分；西武請搭各停。" },
      { id: "suica-3d", title: "確認 Suica 可加值", detail: "iPhone 錢包綁定或準備實體卡。" },
      { id: "cash-3d", title: "兌換 ¥20,000-30,000", detail: "小店、神社、部分拉麵只收現金。" }
    ]
  },
  {
    phase: "出發當天",
    items: [
      { id: "address-day", title: "住宿地址日文截圖", detail: "新井4-26-2 ギャラリー平和の森館101；Maps https://maps.app.goo.gl/atNgDQb1A8BMatWv7" },
      { id: "offline-day", title: "Google Maps 離線地圖", detail: "沼袋、中野、秋葉原、表参道、澀谷、鎌倉、池袋、人形町。" },
      { id: "ics-day", title: "下載本頁 .ics", detail: "Sky、One Piece、日山、あぶる、14:00 出發。" },
      { id: "flight-day", title: "SL394 12:10 起飛", detail: "提前 2.5-3 小時到桃園。" },
      { id: "apps-day", title: "下載 App", detail: "Maps、Tabelog、ONE PIECE BASE、Japan Travel。" }
    ]
  }
];

const checklistItems = [
  { id: "housing", title: "確認公寓入住與退房", detail: "平和の森館101；沼袋徒歩3分；西武各停（急行不停）。" },
  { id: "yamawarau", title: "訂 D2 やまわらう 表参道午餐", detail: "明治神宮後表参道涮涮鍋。" },
  { id: "yoroniku", title: "訂 D2 Yoroniku 晚餐", detail: "澀谷 Sky 後；備選もとむら／Uobei。" },
  { id: "onepiece", title: "ONE PIECE BASE 抽籤", detail: "App BASE CREW；10/25 新宿丸井本館 4F。" },
  { id: "aburu", title: "訂 D3 燒肉あぶる。池袋", detail: "鎌倉＋One Piece 後晚餐。" },
  { id: "hiyama", title: "訂 D4 日山壽喜燒午餐", detail: "人形町；週日休，務必訂 10/26。" },
  { id: "shibuya-sky", title: "預約 10/24 澀谷 Sky", detail: "官網搶日落時段。" },
  { id: "kamakura-pass", title: "記 10/25 買鎌倉周遊券", detail: "新宿小田急；查天氣。" },
  { id: "akihabara", title: "秋葉原購物清單（僅 D1）", detail: "宇奈とと後 20:30 起；之後不再回。" },
  { id: "onsen-d4", title: "查 D4 光明泉／中野湯田公休", detail: "10/26 週一；刺青規定、¥100 硬幣。" },
  { id: "passport", title: "檢查護照效期與機票姓名", detail: "SL394/395 與護照一致。" },
  { id: "suica", title: "準備 Suica/Pasmo", detail: "機場或中野站加值。" },
  { id: "nex-return", title: "D5 14:00 出發鬧鐘", detail: "17:25 起飛，15:30 前到 NRT。" },
  { id: "insurance", title: "海外旅遊保險", detail: "醫療、班機延誤、行李。" },
  { id: "cash", title: "準備日幣現金", detail: "¥20,000-30,000。" },
  { id: "souvenir", title: "伴手禮 D5 早上補貨", detail: "中野站與百貨；機場最後補。" },
  { id: "tabelog", title: "Tabelog 收藏主案店", detail: "やまわらう、Yoroniku、あぶる、日山。" },
  { id: "powerbank", title: "行動電源與轉接頭", detail: "日本 100V；行動電源不可托運。" },
  { id: "medicine", title: "常備藥", detail: "腸胃藥、止痛、OK 繃。" },
];

const state = { activeDay: itinerary[0].id, activeFilter: "all", activeStopKey: null };

const elements = {
  dayTabs: document.querySelector("#dayTabs"),
  daySummary: document.querySelector("#daySummary"),
  timeline: document.querySelector("#timeline"),
  detailTitle: document.querySelector("#detailTitle"),
  detailMeta: document.querySelector("#detailMeta"),
  detailTransit: document.querySelector("#detailTransit"),
  detailBooking: document.querySelector("#detailBooking"),
  detailNote: document.querySelector("#detailNote"),
  detailActions: document.querySelector("#detailActions"),
  sourceGrid: document.querySelector("#sourceGrid"),
  checklist: document.querySelector("#checklist"),
  tripNotes: document.querySelector("#tripNotes"),
  reminderList: document.querySelector("#reminderList"),
  downloadCalendar: document.querySelector("#downloadCalendar"),
  offlineStatus: document.querySelector("#offlineStatus"),
  routeGrid: document.querySelector("#routeGrid"),
  budgetGrid: document.querySelector("#budgetGrid"),
  taiwanGrid: document.querySelector("#taiwanGrid"),
  foodGrid: document.querySelector("#foodGrid"),
  nightGrid: document.querySelector("#nightGrid"),
  tipsGrid: document.querySelector("#tipsGrid"),
  preDepartureGroups: document.querySelector("#preDepartureGroups"),
  transitMapGrid: document.querySelector("#transitMapGrid"),
  routeDiagramGrid: document.querySelector("#routeDiagramGrid"),
  transitTipGrid: document.querySelector("#transitTipGrid"),
  tripHubCanvas: document.querySelector("#tripHubCanvas"),
  tripDayTreeGrid: document.querySelector("#tripDayTreeGrid"),
  transitTutorialGrid: document.querySelector("#transitTutorialGrid")
};

function getActiveDay() {
  return itinerary.find((day) => day.id === state.activeDay) || itinerary[0];
}

function stopKey(dayId, index) {
  return `${dayId}-${index}`;
}

function statusLabel(status) {
  return { confirmed: "已確定", verified: "已驗證", needs: "需預約", optional: "彈性", planned: "規劃估時" }[status] || status;
}

function statusClass(status) {
  if (status === "confirmed" || status === "verified") return "booked";
  if (status === "needs") return "needs";
  return "risk";
}

function renderTabs() {
  elements.dayTabs.innerHTML = itinerary.map((day) => `
    <button class="day-tab ${day.id === state.activeDay ? "active" : ""}" type="button" role="tab" data-day="${day.id}">
      <strong>${day.date}</strong>
      <small>${day.title.split("、")[0]}</small>
    </button>
  `).join("");
}

function renderTimeline() {
  const day = getActiveDay();
  const filteredStops = day.stops.filter((stop) => state.activeFilter === "all" || stop.category === state.activeFilter);
  elements.daySummary.innerHTML = `
    <div>
      <h3>${day.title}</h3>
      <p>${day.summary}</p>
    </div>
    <div class="day-stats">${day.stats.map((stat) => `<span class="stat-pill">${stat}</span>`).join("")}</div>
  `;

  if (!filteredStops.length) {
    elements.timeline.innerHTML = `<p class="empty-state">這一天沒有符合此分類的行程點。</p>`;
    return;
  }

  elements.timeline.innerHTML = filteredStops.map((stop) => {
    const originalIndex = day.stops.indexOf(stop);
    const key = stopKey(day.id, originalIndex);
    return `
      <article class="timeline-item">
        <div class="time-block">${stop.time}</div>
        <button class="stop-card ${state.activeStopKey === key ? "active" : ""}" type="button" data-stop="${key}">
          ${stop.image ? `<img class="stop-thumb" src="${stop.image}" alt="${stop.title}圖片" loading="lazy" onerror="this.remove()" />` : ""}
          <h4>${stop.title}</h4>
          <p>${stop.description}</p>
          <div class="meta-grid">
            <span>路線：${stop.route}</span>
            <span>估時：${stop.eta}</span>
            <span>價格：${stop.price}</span>
          </div>
          <div class="tag-row">
            <span class="tag ${statusClass(stop.status)}">${statusLabel(stop.status)}</span>
            ${(stop.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </button>
      </article>
    `;
  }).join("");

  if (!state.activeStopKey || !document.querySelector(`[data-stop="${state.activeStopKey}"]`)) {
    const firstIndex = day.stops.indexOf(filteredStops[0]);
    state.activeStopKey = stopKey(day.id, firstIndex);
  }
}

function renderInspector() {
  const day = getActiveDay();
  const [, indexText] = (state.activeStopKey || stopKey(day.id, 0)).split("-");
  const stop = day.stops[Number(indexText)] || day.stops[0];
  if (!stop) return;
  elements.detailTitle.textContent = stop.title;
  elements.detailMeta.textContent = `${day.date} ${stop.time} · ${statusLabel(stop.status)} · ${stop.eta} · ${stop.price}`;
  elements.detailTransit.textContent = stop.transit;
  elements.detailBooking.textContent = stop.booking;
  elements.detailNote.textContent = stop.note;
  elements.detailActions.innerHTML = `
    <a class="button primary" href="${mapUrl(stop.place)}" target="_blank" rel="noopener noreferrer">Google 地圖</a>
    <a class="button" href="#prep">預約清單</a>
  `;
}

function renderCardGrid(target, items, template) {
  if (!target) return;
  target.innerHTML = items.map(template).join("");
}

function renderSources() {
  renderCardGrid(elements.sourceGrid, researchSources, (source) => `
    <article class="source-card">
      <span class="source-type">${source.type}</span>
      <h3>${source.title}</h3>
      <ul>${source.takeaways.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">開啟來源</a>
    </article>
  `);
}

function escapeIcsText(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldIcsLine(line) {
  const chunks = [];
  let rest = line;
  while (rest.length > 72) {
    chunks.push(rest.slice(0, 72));
    rest = ` ${rest.slice(72)}`;
  }
  chunks.push(rest);
  return chunks.join("\r\n");
}

function formatIcsTimestamp(date = new Date()) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function reminderDisplayDate(value) {
  const month = Number(value.slice(4, 6));
  const day = Number(value.slice(6, 8));
  const hour = value.slice(9, 11);
  const minute = value.slice(11, 13);
  return `${month}/${day} ${hour}:${minute}`;
}

function buildCalendarFile() {
  const stamp = formatIcsTimestamp();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AIBO2//Tokyo Departure Pack//ZH-TW",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:東京出發包提醒",
    "X-WR-TIMEZONE:Asia/Tokyo"
  ];

  calendarReminders.forEach((event) => {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.id}@aibo2-tokyo-departure-pack`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Asia/Tokyo:${event.start}`,
      `DTEND;TZID=Asia/Tokyo:${event.end}`,
      `SUMMARY:${escapeIcsText(event.title)}`,
      `LOCATION:${escapeIcsText(event.location)}`,
      `DESCRIPTION:${escapeIcsText(event.description)}`
    );

    event.alarms.forEach((minutes) => {
      lines.push(
        "BEGIN:VALARM",
        "ACTION:DISPLAY",
        `DESCRIPTION:${escapeIcsText(event.title)}`,
        `TRIGGER:-PT${minutes}M`,
        "END:VALARM"
      );
    });

    lines.push("END:VEVENT");
  });

  lines.push("END:VCALENDAR");
  return `${lines.map(foldIcsLine).join("\r\n")}\r\n`;
}

function downloadCalendar() {
  const blob = new Blob([buildCalendarFile()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tokyo-departure-pack.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderReminderList() {
  renderCardGrid(elements.reminderList, calendarReminders, (item) => `
    <article class="reminder-item">
      <span>${reminderDisplayDate(item.start)}</span>
      <strong>${item.title}</strong>
      <small>${item.description}</small>
    </article>
  `);
}

function renderRouteGrid() {
  renderCardGrid(elements.routeGrid, routeCards, (item) => `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p><strong>${item.price}</strong></p>
      <p>${item.route}</p>
      <p>${item.eta}</p>
      <span>${item.note}</span>
    </article>
  `);
}


let miniMapIdSeed = 0;

function mapBackgroundSvg() {
  const uid = `mm${miniMapIdSeed++}`;
  return `
    <defs>
      <pattern id="mapGrid${uid}" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e0d8c8" stroke-width="0.45"/>
      </pattern>
      <linearGradient id="mapLand${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#faf6ee"/>
        <stop offset="100%" stop-color="#ebe3d2"/>
      </linearGradient>
      <linearGradient id="mapBay${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c5d9e8"/>
        <stop offset="100%" stop-color="#9ec0d8"/>
      </linearGradient>
      <linearGradient id="mapPark${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d8e8d4"/>
        <stop offset="100%" stop-color="#e8f0e4"/>
      </linearGradient>
      <filter id="mapShadow${uid}" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#2c3e5a" flood-opacity="0.18"/>
      </filter>
      <marker id="mapArrow${uid}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="context-stroke"/>
      </marker>
    </defs>
    <rect width="500" height="400" rx="12" fill="url(#mapLand${uid})"/>
    <rect width="500" height="400" fill="url(#mapGrid${uid})" opacity="0.55"/>
    <path d="M0,305 Q90,285 180,295 T500,325 L500,400 L0,400 Z" fill="url(#mapBay${uid})" opacity="0.72"/>
    <ellipse cx="95" cy="355" rx="55" ry="28" fill="url(#mapBay${uid})" opacity="0.5"/>
    <ellipse cx="175" cy="205" rx="95" ry="72" fill="url(#mapPark${uid})" opacity="0.35"/>
    <ellipse cx="210" cy="215" rx="122" ry="90" fill="none" stroke="#7fa88a" stroke-width="2.2" stroke-dasharray="9 7" opacity="0.75"/>
    <rect x="118" y="168" width="88" height="58" rx="8" fill="#c4a574" opacity="0.08" stroke="#c4a574" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="162" y="200" class="map-zone-label">中野・住宿</text>
    <text x="248" y="124" class="map-region-label">山手線</text>
    <text x="24" y="382" class="map-region-label">湘南・鎌倉</text>
    <text x="395" y="78" class="map-region-label">成田方向 →</text>
  `;
}

function mapRoutePath(placeIds, color, width = 3, dashed = false, arrowId = "") {
  const pts = placeIds.map((id) => geoPlaces[id]).filter(Boolean);
  if (pts.length < 2) return "";
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const dash = dashed ? ' stroke-dasharray="7 5"' : "";
  const marker = arrowId ? ` marker-end="url(#${arrowId})"` : "";
  const glow = `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width + 4}" stroke-linecap="round" stroke-linejoin="round" opacity="0.15"/>`;
  const line = `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" opacity="0.92"${dash}${marker}/>`;
  return glow + line;
}

function mapMarker(id, place, options = {}) {
  const { active = true, highlight = false, color = "#2c3e5a", shadowId = "mapShadowmm0" } = options;
  const r = place.kind === "hub" ? 16 : place.kind === "onsen" ? 12 : place.kind === "airport" ? 11 : 10;
  const fill = place.kind === "hub" ? "#2c3e5a" : place.kind === "onsen" ? "#9a6848" : place.kind === "airport" ? "#2c5282" : place.kind === "far" ? "#5a7fa8" : color;
  const opacity = active ? 1 : 0.22;
  const ring = highlight
    ? `<circle cx="${place.x}" cy="${place.y}" r="${r + 9}" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.55"/>
       <circle cx="${place.x}" cy="${place.y}" r="${r + 14}" fill="none" stroke="${color}" stroke-width="1" opacity="0.25"/>`
    : "";
  const icon = place.kind === "hub" ? "🏠" : place.kind === "onsen" ? "♨" : place.kind === "airport" ? "✈" : "";
  return `
    <g class="map-pin map-pin-${id}" opacity="${opacity}" filter="url(#${shadowId})">
      ${ring}
      <circle cx="${place.x}" cy="${place.y}" r="${r + 3}" fill="${fill}" opacity="0.2"/>
      <circle cx="${place.x}" cy="${place.y}" r="${r}" fill="${fill}" stroke="#fff8ee" stroke-width="2.5"/>
      ${icon ? `<text x="${place.x}" y="${place.y + 5}" class="map-pin-icon" text-anchor="middle">${icon}</text>` : ""}
      <text x="${place.x}" y="${place.y - r - 8}" class="map-pin-label">${place.label}</text>
      <text x="${place.x}" y="${place.y + r + 16}" class="map-pin-sub">${place.sub}</text>
    </g>`;
}

function buildMiniMapContent({ routes = [], highlightPlaces = [], showAllPlaces = false }) {
  const bg = mapBackgroundSvg();
  const arrowMatch = bg.match(/id="(mapArrow[^"]+)"/);
  const shadowMatch = bg.match(/id="(mapShadow[^"]+)"/);
  const arrowId = arrowMatch ? arrowMatch[1] : "";
  const shadowId = shadowMatch ? shadowMatch[1] : "mapShadowmm0";
  const usedIds = new Set(highlightPlaces);
  routes.forEach((r) => r.path.forEach((id) => usedIds.add(id)));
  const routeSvg = routes.map((r) => mapRoutePath(r.path, r.color, r.width || 3.5, r.dashed, arrowId)).join("");
  const placeSvg = Object.entries(geoPlaces)
    .map(([id, place]) => {
      const active = showAllPlaces || usedIds.has(id);
      const highlight = highlightPlaces.includes(id);
      const route = routes.find((rt) => rt.path.includes(id));
      return mapMarker(id, place, { active, highlight, color: route?.color || "#2c3e5a", shadowId });
    })
    .join("");
  return `${bg}${routeSvg}${placeSvg}`;
}

function wrapMiniMap(content, className = "mini-map-svg") {
  return `<svg viewBox="0 0 500 400" class="${className}" role="img">${content}</svg>`;
}

function renderTripHub() {
  const svg = elements.tripHubCanvas;
  if (!svg) return;
  miniMapIdSeed = 0;
  svg.setAttribute("viewBox", "0 0 500 400");
  svg.innerHTML = buildMiniMapContent({
    routes: tripGeoOverview.routes,
    showAllPlaces: true
  });
}

function renderTripDayTrees() {
  if (!elements.tripDayTreeGrid) return;
  miniMapIdSeed = 0;
  elements.tripDayTreeGrid.innerHTML = tripDayMaps.map((day) => `
    <article class="day-map-card" style="--day-color:${day.color}">
      <header class="day-map-header">
        <span class="tree-day">${day.day}</span>
        <span class="tree-date">${day.date}</span>
        <strong>${day.title}</strong>
      </header>
      <div class="day-map-canvas">
        ${wrapMiniMap(buildMiniMapContent({
          routes: [{ day: day.day, color: day.color, width: 4, path: day.route }],
          highlightPlaces: day.route
        }))}
      </div>
      <p class="day-map-note">${day.note}</p>
    </article>
  `).join("");
}

function renderTransitTutorials() {
  if (!elements.transitTutorialGrid) return;
  elements.transitTutorialGrid.innerHTML = transitTutorials.map((tutorial) => `
    <article class="tutorial-card">
      <h3>${tutorial.title}</h3>
      <p class="tutorial-intro">${tutorial.intro}</p>
      <div class="tutorial-steps">
        ${tutorial.steps.map((step) => `
          <div class="tutorial-step">
            <span class="step-num">Step ${step.step}</span>
            <div class="step-body">
              <h4>${step.title}</h4>
              <p>${step.body}</p>
            </div>
            ${step.image ? `<img src="${step.image}" alt="${step.title}" loading="lazy" class="step-img" />` : ""}
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderTransitMaps() {
  renderCardGrid(elements.transitMapGrid, transitMaps, (item) => `
    <article class="transit-map-card">
      <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="transit-map-link">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </a>
      <div class="transit-map-body">
        <span class="source-type">${item.caption}</span>
        <h3>${item.title}</h3>
        <p>${item.note}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">開啟官方路線圖 ↗</a>
      </div>
    </article>
  `);
}

function renderRouteDiagrams() {
  if (!elements.routeDiagramGrid) return;
  elements.routeDiagramGrid.innerHTML = routeDiagrams.map((route) => `
    <article class="route-diagram-card line-${route.line}">
      <header>
        <span class="diagram-day">${route.day}</span>
        <h3>${route.title}</h3>
      </header>
      <div class="route-flow" aria-label="${route.title} 路線示意">
        ${route.steps.map((step, index) => `
          ${index > 0 ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ""}
          <div class="flow-stop ${step.hub ? "hub" : ""}">
            <span class="flow-icon">${step.icon}</span>
            <strong>${step.label}</strong>
            <small>${step.sub}</small>
          </div>
        `).join("")}
      </div>
      <ul class="flow-tips">
        ${route.tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderTransitTips() {
  renderCardGrid(elements.transitTipGrid, transitTips, (item) => `
    <article class="transit-tip-card">
      <span class="tip-icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderBudgetGrid() {
  renderCardGrid(elements.budgetGrid, budgetItems, (item) => `
    <article class="info-card ${item.title.includes("總預估") ? "dark" : ""}">
      <h3>${item.title}</h3>
      <div class="money-line">
        <strong>${item.cny}</strong>
        <small>${item.twd}</small>
      </div>
      <p>${item.note}</p>
    </article>
  `);
}

function renderTaiwanGrid() {
  renderCardGrid(elements.taiwanGrid, taiwanPrep, (item) => `
    <article class="info-card">
      <span class="source-type">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderFoodGrid() {
  renderCardGrid(elements.foodGrid, foodList, (item) => `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p>${item.area}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.bestFor}</span>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
        <a href="${mapUrl(item.map)}" target="_blank" rel="noopener noreferrer">地圖</a>
      </div>
    </article>
  `);
}

function renderNightGrid() {
  renderCardGrid(elements.nightGrid, nightList, (item) => `
    <article class="info-card dark">
      <h3>${item.title}</h3>
      <p>${item.type} · ${item.hours}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.route}</span>
      <small>${item.note}</small>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
      </div>
    </article>
  `);
}

function renderTips() {
  renderCardGrid(elements.tipsGrid, tips, (item) => `
    <article class="tip-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}


function renderPreDeparture() {
  if (!elements.preDepartureGroups) return;
  const saved = JSON.parse(localStorage.getItem("tokyoPreDeparture") || "{}");
  elements.preDepartureGroups.innerHTML = preDepartureGroups.map((group) => `
    <section class="pre-phase">
      <h3>${group.phase}</h3>
      <div class="checklist">
        ${group.items.map((item) => `
          <label class="check-item">
            <input type="checkbox" data-pre="${item.id}" ${saved[item.id] ? "checked" : ""} />
            <span>
              <strong>${item.title}</strong>
              <span>${item.detail}</span>
            </span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function savePreDeparture(event) {
  const checkbox = event.target.closest("[data-pre]");
  if (!checkbox) return;
  const saved = JSON.parse(localStorage.getItem("tokyoPreDeparture") || "{}");
  saved[checkbox.dataset.pre] = checkbox.checked;
  localStorage.setItem("tokyoPreDeparture", JSON.stringify(saved));
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem("tokyoChecklist") || "{}");
  elements.checklist.innerHTML = checklistItems.map((item) => `
    <label class="check-item">
      <input type="checkbox" data-check="${item.id}" ${saved[item.id] ? "checked" : ""} />
      <span>
        <strong>${item.title}</strong>
        <span>${item.detail}</span>
      </span>
    </label>
  `).join("");
}

function saveChecklist(event) {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;
  const saved = JSON.parse(localStorage.getItem("tokyoChecklist") || "{}");
  saved[checkbox.dataset.check] = checkbox.checked;
  localStorage.setItem("tokyoChecklist", JSON.stringify(saved));
}

function hydrateNotes() {
  elements.tripNotes.value = localStorage.getItem("tokyoTripNotes") || "";
  elements.tripNotes.addEventListener("input", () => {
    localStorage.setItem("tokyoTripNotes", elements.tripNotes.value);
  });
}

function updateOfflineStatus(message, ready = false) {
  if (!elements.offlineStatus) return;
  elements.offlineStatus.textContent = message;
  elements.offlineStatus.classList.toggle("ready", ready);
}

function bindEvents() {
  elements.dayTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-day]");
    if (!button) return;
    state.activeDay = button.dataset.day;
    state.activeStopKey = null;
    render();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeFilter = button.dataset.filter;
      state.activeStopKey = null;
      renderTimeline();
      renderInspector();
    });
  });

  elements.timeline.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stop]");
    if (!button) return;
    state.activeStopKey = button.dataset.stop;
    renderTimeline();
    renderInspector();
  });

  elements.checklist.addEventListener("change", saveChecklist);
  elements.preDepartureGroups?.addEventListener("change", savePreDeparture);
  elements.downloadCalendar?.addEventListener("click", downloadCalendar);
}

function initFoldSections() {
  const folds = [...document.querySelectorAll(".fold-section")];
  const desktop = window.matchMedia("(min-width: 681px)");

  const applyDefault = () => {
    folds.forEach((el) => {
      if (el.dataset.alwaysOpen === "true") {
        el.open = true;
        return;
      }
      el.open = desktop.matches && el.dataset.mobileOnly !== "true";
    });
  };

  applyDefault();
  desktop.addEventListener("change", applyDefault);

  document.getElementById("expandAllFolds")?.addEventListener("click", () => {
    folds.forEach((el) => {
      el.open = true;
    });
  });

  document.getElementById("collapseAllFolds")?.addEventListener("click", () => {
    folds.forEach((el) => {
      if (el.dataset.alwaysOpen !== "true") {
        el.open = false;
      }
    });
  });
}

function initNavHighlight() {
  const sectionIds = ["prep-briefing", "trip-visual", "itinerary", "transit-guide", "budget", "sources"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = [...document.querySelectorAll(".nav-links a, .mobile-quick-nav a")];

  const setActive = () => {
    let current = sectionIds[0];
    const offset = window.innerWidth <= 680 ? 120 : 80;
    sections.forEach((section) => {
      if (section && window.scrollY >= section.offsetTop - offset) {
        current = section.id;
      }
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href")?.slice(1);
      link.classList.toggle("is-active", href === current);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

function render() {
  renderTabs();
  renderTimeline();
  renderInspector();
}

render();
renderRouteGrid();
renderTripHub();
renderTripDayTrees();
renderTransitTutorials();
renderTransitMaps();
renderRouteDiagrams();
renderTransitTips();
renderBudgetGrid();
renderTaiwanGrid();
renderFoodGrid();
renderNightGrid();
renderTips();
renderSources();
renderReminderList();
renderPreDeparture();
renderChecklist();
hydrateNotes();
bindEvents();
initFoldSections();
initNavHighlight();
updateOfflineStatus("線上版；可下載 .ics 行事曆", true);
