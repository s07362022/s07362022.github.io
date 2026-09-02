/** Local images (see images/ + download_images.py). Works offline & on GitHub Pages. */
const IMAGES = {
  hero: "images/hero.jpg",
  hakata: "images/hakata.jpg",
  ainoshima: "images/ainoshima.jpg",
  dazaifu: "images/dazaifu.jpg",
  mojiko: "images/mojiko.jpg",
  ohori: "images/ohori.jpg",
  canal: "images/canal.jpg",
  kushida: "images/kushida.jpg",
  tenjin: "images/tenjin.jpg",
  yatai: "images/yatai.jpg",
  fuglen: "images/fuglen.jpg",
};

const mapUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const calendarReminders = [
  {
    id: "book-flights",
    title: "訂桃園↔福岡機票",
    start: "20260901T200000",
    end: "20260901T203000",
    location: "航空公司官網 / Skyscanner",
    description: "建議 9/19 下午抵 FUK、9/27 傍晚離開。訂好後更新本頁備註與行事曆。",
    alarms: [1440, 60],
  },
  {
    id: "book-hotel",
    title: "訂博多駅住宿 8 晚",
    start: "20260905T200000",
    end: "20260905T203000",
    location: "Booking / Agoda",
    description: "博多駅徒歩 5～10 分。確認雙床、可寄行李、9/27 上午退房。",
    alarms: [1440, 60],
  },
  {
    id: "reserve-akachokobe",
    title: "預約 博多あかちょこべ（9/20 晚餐）",
    start: "20260912T200000",
    end: "20260912T203000",
    location: "Google 預約 / 電話",
    description: "茶壺烏龍麵居酒屋，櫛田神社附近。週六建議提前訂位。",
    alarms: [1440, 120],
  },
  {
    id: "cat-island-day",
    title: "相島貓島一日（08:00 博多出發）",
    start: "20260922T080000",
    end: "20260922T160000",
    location: "博多 → 福工大前 → 新宮港 → 相島",
    description: "JR + マリンクス + 渡輪。目標搭 09:20 船。帶防曬、現金、貓勿餵人類食物。出發前查新宮町巴士時刻。",
    alarms: [720, 120, 30],
  },
  {
    id: "dazaifu-day",
    title: "太宰府一日（旅人巴士）",
    start: "20260923T090000",
    end: "20260923T160000",
    location: "博多バスターミナル 11 番 → 太宰府",
    description: "西鐵太宰府ライナーバス「旅人」約 40 分、800 円。平日參道較空。",
    alarms: [720, 60],
  },
  {
    id: "mojiko-day",
    title: "門司港一日",
    start: "20260924T083000",
    end: "20260924T180000",
    location: "博多 → 門司港 JR",
    description: "在來線直達約 1.5 小時（1,730 円）或新幹線經小倉較快。Blue Wing 吊橋整點表演。",
    alarms: [720, 60],
  },
  {
    id: "return-airport",
    title: "返程：博多 → 福岡機場",
    start: "20260927T110000",
    end: "20260927T123000",
    location: "福岡機場 國際線",
    description: "地鐵空港線約 5 分。國際線建議起飛前 2.5 小時到機場。",
    alarms: [180, 60, 30],
  },
  {
    id: "return-flight",
    title: "FUK → TPE 返程班機",
    start: "20260927T150000",
    end: "20260927T180000",
    location: "福岡機場",
    description: "時間為假設值；訂票後請自行修改。",
    alarms: [180, 60],
  },
];

const itinerary = [
  {
    id: "d1",
    date: "9/19（五）",
    title: "抵達・博多初體驗",
    summary: "假設下午抵達。只做 check-in、IC 卡、站旁晚餐。不排硬景點。",
    stats: ["抵達日", "博多基地", "輕量"],
    stops: [
      {
        time: "15:00",
        title: "福岡機場 → 博多駅",
        category: "transport",
        status: "planned",
        price: "地鐵空港線約 ¥260/人",
        route: "FUK → 博多",
        eta: "約 5 分鐘",
        description: "國際線抵達後跟指示到地下鐵。順便買 nimoca / Suica。",
        transit: "福岡市地下鐵空港線",
        booking: "機票待訂；確認入境與行李。",
        note: "先找到飯店位置存 Google Maps。",
        place: "JR博多駅",
      },
      {
        time: "16:00",
        title: "飯店 check-in（博多駅周邊）",
        category: "rest",
        status: "needs",
        price: "住宿待訂",
        route: "博多駅徒歩 5～10 分",
        eta: "15～20 分",
        description: "8 晚同一間，之後每天從這裡出發。",
        transit: "拖行李走飯店最近出口。",
        booking: "確認雙床、寄行李、9/27 退房時間。",
        note: "整理小包：IC 卡、護照、行動電源。",
        place: "博多駅",
      },
      {
        time: "18:30",
        title: "二◯加屋長介（博多駅旁）",
        category: "food",
        status: "verified",
        price: "約 ¥1,000～1,500/人",
        route: "JP 博多大樓 B1F",
        eta: "步行 3～5 分",
        description: "烏龍麵居酒屋，比一蘭排隊少。酢橘烏龍麵是招牌。",
        transit: "從飯店步行或地下街。",
        booking: "不需預約；21:00 前到較穩。",
        note: "累了可在 Amu Plaza 買伴手禮後回飯店。",
        place: "二◯加屋長介 JRJP博多大樓店",
      },
      {
        time: "備選",
        title: "【備選】FUGLEN FUKUOKA 咖啡",
        category: "cafe",
        status: "optional",
        price: "約 ¥500～1,000",
        route: "博多駅筑紫口徒歩 3～5 分",
        eta: "30～45 分",
        description: "挪威人氣咖啡九州唯一店。北歐空間，早上 8:30–10:30 較忙，其餘時段通常等不久。",
        transit: "步行",
        booking: "不需",
        note: "若晚餐想輕一點，可改晚餐前在這裡喝一杯。",
        place: "FUGLEN FUKUOKA",
      },
      {
        time: "備選",
        title: "【備選】Cafe Miel 喫茶",
        category: "cafe",
        status: "optional",
        price: "約 ¥800～1,500",
        route: "博多朝日大樓 B2",
        eta: "30～60 分",
        description: "地下室復古喫茶，手沖／虹吸。適合早餐或抵達日咖啡。",
        transit: "博多口對面大樓地下",
        booking: "不需；早餐時段較忙",
        note: "下雨天不用淋雨，地下街可到。",
        place: "Cafe Miel 博多",
      },
    ],
  },
  {
    id: "d2",
    date: "9/20（六）",
    title: "天神逛街日",
    summary: "週末人多，10:00 開門就去。離峰午餐、可預約晚餐。穿插咖啡與選物店。",
    stats: ["購物", "週末早出", "天神"],
    stops: [
      {
        time: "10:00",
        title: "天神 PARCO・IMS・地下街",
        category: "shopping",
        status: "planned",
        price: "依消費",
        route: "博多 → 天神（地鐵約 10 分）",
        eta: "半日～一日",
        description: "PARCO 文創、IMS 伴手禮、ヴィオレ地下街。",
        transit: "空港線/七隈線到天神或渡辺通。",
        booking: "不需",
        note: "週六 10:00 開店就去，避 14:00 人潮。",
        place: "福岡 PARCO",
      },
      {
        time: "11:30",
        title: "【穿插】新天町商店街",
        category: "shopping",
        status: "optional",
        price: "依消費",
        route: "天神地下街旁",
        eta: "30～60 分",
        description: "1946 年開業的傳統商店街，懷舊雜貨、小店，比百貨慢節奏。",
        transit: "天神步行",
        booking: "不需",
        note: "想少一點觀光感就走這裡。",
        place: "新天町商店街",
      },
      {
        time: "13:30",
        title: "Shin-Shin 天神本店（離峰午餐）",
        category: "food",
        status: "verified",
        price: "約 ¥800～1,000",
        route: "天神 3 丁目",
        eta: "排隊 0～20 分（離峰）",
        description: "清爽系豚骨，在地人愛。避 12:00 尖峰。",
        transit: "天神站步行",
        booking: "不需",
        note: "若仍排隊，改 nearby うどんの長介。",
        place: "博多純情ラーメン Shin Shin 天神本店",
      },
      {
        time: "15:00",
        title: "【備選咖啡】connect coffee 天神",
        category: "cafe",
        status: "optional",
        price: "約 ¥600～1,200",
        route: "天神",
        eta: "30～45 分",
        description: "天神晚間也營業的精品咖啡，適合逛街中場休息。",
        transit: "天神步行",
        booking: "不需",
        note: "或改 TOFFEE park（中洲川端）。",
        place: "connect coffee 福岡",
      },
      {
        time: "16:00",
        title: "【備選逛街】ONE FUKUOKA BLDG. / 藥妝",
        category: "shopping",
        status: "optional",
        price: "依消費",
        route: "天神 1 丁目",
        eta: "1 小時",
        description: "新複合大樓＋Beauty Lounge；大賀／鶴羽藥妝可退稅。",
        transit: "天神地下街連通",
        booking: "不需",
        note: "藥妝建議比價；護照退稅。",
        place: "ONE FUKUOKA BLDG",
      },
      {
        time: "18:30",
        title: "博多あかちょこべ（預約晚餐）",
        category: "food",
        status: "needs",
        price: "約 ¥2,000～3,000/人",
        route: "櫛田神社附近",
        eta: "博多站步行 10 分",
        description: "茶壺烏龍麵＋居酒屋。Google 可預約。",
        transit: "從天神搭地鐵回博多後步行",
        booking: "建議 Google 預約",
        note: "串燒平價，適合情侶小酌。",
        place: "博多あかちょこべ",
      },
    ],
  },
  {
    id: "d3",
    date: "9/21（日）",
    title: "大濠公園・中洲屋台",
    summary: "市區慢遊。下午回飯店休息，晚上屋台要 20:00 後去。大濠周邊可加咖啡。",
    stats: ["公園", "屋台", "週日"],
    stops: [
      {
        time: "10:00",
        title: "大濠公園・福岡城跡",
        category: "park",
        status: "planned",
        price: "免費",
        route: "博多 → 大濠公園前（地鐵約 15 分）",
        eta: "1.5～2 小時",
        description: "情侶散步、湖景。可順舞鶴公園。",
        transit: "空港線到赤坂換東西線",
        booking: "不需",
        note: "熱的話縮短，改去 Canal City 吹冷氣。",
        place: "大濠公園",
      },
      {
        time: "11:30",
        title: "【備選咖啡】大濠／六本松一帶咖啡",
        category: "cafe",
        status: "optional",
        price: "約 ¥600～1,500",
        route: "大濠公園周邊",
        eta: "45 分",
        description: "公園散步後坐下回血。可搜「大濠公園 カフェ」選當日營業店。",
        transit: "步行",
        booking: "人氣店可能要預約（如 mume 類）",
        note: "不想走遠就回博多喝 FUGLEN。",
        place: "大濠公園 カフェ",
      },
      {
        time: "12:00",
        title: "弁天堂 総本店（明太子拉麵）",
        category: "food",
        status: "verified",
        price: "約 ¥1,280",
        route: "博多駅前徒歩 5 分",
        eta: "11:00 開門去人少",
        description: "明太子豚骨，博多站旁。週日定休請出發前確認。",
        transit: "回博多後步行",
        booking: "不需",
        note: "若定休改 二◯加屋長介。",
        place: "麺屋弁天堂 総本店",
      },
      {
        time: "15:00",
        title: "【備選逛街】藥院選物・廚房雜貨",
        category: "shopping",
        status: "optional",
        price: "依消費",
        route: "藥院駅周邊",
        eta: "1～2 小時",
        description: "在地人逛的生活選物、廚房用品店（如 Kitchen Paradise 類），節奏比天神慢。",
        transit: "七隈線藥院",
        booking: "不需",
        note: "累了就改 Canal City 吹冷氣。",
        place: "薬院",
      },
      {
        time: "20:00",
        title: "中洲屋台 or 長浜屋台",
        category: "night",
        status: "planned",
        price: "約 ¥2,000～4,000/人",
        route: "中洲川端",
        eta: "20:00 後較有空位",
        description: "屋台文化。先走一圈再選攤。",
        transit: "地鐵中洲川端站",
        booking: "不需",
        note: "週日仍可能排隊；長浜屋台較在地。",
        place: "中洲 屋台",
      },
    ],
  },
  {
    id: "d4",
    date: "9/22（一）",
    title: "相島（貓島）★",
    summary: "平日排貓島。08:00 博多出發，搭 09:20 渡輪。下午回博多。",
    stats: ["貓島", "08:00 出發", "船班銜接"],
    stops: [
      {
        time: "08:14",
        title: "JR 博多 → 福工大前",
        category: "transport",
        status: "verified",
        price: "約 ¥280",
        route: "鹿兒島本線",
        eta: "約 18 分",
        description: "08:00 要在博多站。",
        transit: "JR 在來線",
        booking: "IC 卡即可",
        note: "錯過 08:36 巴士要改搭下一班，船班也要跟著改。",
        place: "JR福工大前駅",
      },
      {
        time: "08:36",
        title: "マリンクス → 相島渡船場",
        category: "transport",
        status: "verified",
        price: "¥100",
        route: "相らんど線第1（時計回り）",
        eta: "約 10 分",
        description: "必搭行先顯示 1-1 到渡船場的班次。",
        transit: "新宮町コミュニティバス",
        booking: "現金準備",
        note: "時刻表：新宮町官網",
        place: "相島渡船場",
      },
      {
        time: "09:20",
        title: "渡輪 → 相島",
        category: "tour",
        status: "verified",
        price: "¥480 單程",
        route: "新宮港 → 相島港",
        eta: "約 17 分",
        description: "町營渡船「しんぐう」。販賣機買票，支援中文。",
        transit: "渡輪",
        booking: "旺季建議提早到碼頭",
        note: "島上步行；眼鏡岩、神社、貓咪聚點。",
        place: "相島港",
      },
      {
        time: "12:30",
        title: "島食堂午餐",
        category: "food",
        status: "planned",
        price: "約 ¥1,000～1,500",
        route: "島の駅あいのしま附近",
        eta: "30～45 分",
        description: "海鮮定食。現金為主。",
        transit: "島內步行",
        booking: "不需",
        note: "不要餵貓人類食物。",
        place: "相島 島食堂",
      },
      {
        time: "13:50",
        title: "回程渡輪 → 博多",
        category: "transport",
        status: "verified",
        price: "¥480 + JR",
        route: "相島 → 新宮港 → 福工大前 → 博多",
        eta: "約 15:30 抵博多",
        description: "13:50 相島發；14:29 巴士接 JR。",
        transit: "渡輪 + 巴士 + JR",
        booking: "確認末班船時間",
        note: "若錯過改 16:00 船，整體延後 2 小時。",
        place: "JR博多駅",
      },
    ],
  },
  {
    id: "d5",
    date: "9/23（二）",
    title: "太宰府天滿宮 ★",
    summary: "平日參道較空。博多巴士總站搭「旅人」直達。",
    stats: ["太宰府", "旅人巴士", "平日"],
    stops: [
      {
        time: "09:00",
        title: "太宰府ライナーバス「旅人」",
        category: "transport",
        status: "verified",
        price: "¥800",
        route: "博多バスターミナル 11 番 → 太宰府",
        eta: "約 40 分",
        description: "免換車，終點站步行 5 分到參道。",
        transit: "西鐵巴士",
        booking: "不需；滿座等下一班",
        note: "可買 Fukuoka Tourist City Pass 太宰府版若當天還搭市區巴士。",
        place: "博多バスターミナル",
      },
      {
        time: "10:00",
        title: "太宰府天滿宮・表參道",
        category: "heritage",
        status: "planned",
        price: "免費",
        route: "參道 → 本殿",
        eta: "2～3 小時",
        description: "梅枝餅、Starbucks 太宰府（隈研吾）。",
        transit: "步行",
        booking: "不需",
        note: "週二比週末空很多。",
        place: "太宰府天満宮",
      },
      {
        time: "13:00",
        title: "參道午餐（梅枝餅＋茶屋）",
        category: "food",
        status: "planned",
        price: "約 ¥800～1,500",
        route: "表參道",
        eta: "45 分",
        description: "現烤梅枝餅多家，選離峰時段。",
        transit: "步行",
        booking: "不需",
        note: "星巴克可休息但可能排隊。",
        place: "太宰府 表参道",
      },
      {
        time: "14:00",
        title: "【備選】Starbucks 太宰府（隈研吾）",
        category: "cafe",
        status: "optional",
        price: "約 ¥500～800",
        route: "天滿宮旁",
        eta: "30 分",
        description: "建築本身值得看；週末排隊長，平日較好。",
        transit: "步行",
        booking: "不需",
        note: "只想看建築可不點餐。",
        place: "スターバックス 太宰府天満宮表参道店",
      },
      {
        time: "15:00",
        title: "巴士回博多",
        category: "transport",
        status: "verified",
        price: "¥800",
        route: "太宰府 → 博多",
        eta: "約 40 分",
        description: "回程班次頻繁。",
        transit: "旅人巴士",
        booking: "不需",
        note: "回飯店休息。",
        place: "博多バスターミナル",
      },
      {
        time: "19:00",
        title: "博多元気一杯（無招牌拉麵）",
        category: "food",
        status: "verified",
        price: "約 ¥1,000",
        route: "呉服町（地鐵 1 站）",
        eta: "排隊通常較短",
        description: "在地人店，看板なし。クリーミー豚骨。",
        transit: "地鐵呉服町駅",
        booking: "不需",
        note: "シャッター全開＝有營業。備選：WHITE GLASS COFFEE 櫛田附近。",
        place: "博多元気一杯",
      },
    ],
  },
  {
    id: "d6",
    date: "9/24（三）",
    title: "門司港レトロ ★",
    summary: "北九州一日。JR 直達或新幹線經小倉。海邊懷舊＋河豚/咖哩。",
    stats: ["門司港", "JR 1.5h", "海邊"],
    stops: [
      {
        time: "08:30",
        title: "JR 博多 → 門司港",
        category: "transport",
        status: "verified",
        price: "¥1,730（在來線直達）",
        route: "鹿兒島本線終點門司港",
        eta: "約 1h25～1h50",
        description: "部分班次直達不用換車。急可改新幹線→小倉→門司港。",
        transit: "JR",
        booking: "IC 卡",
        note: "車上可補眠。",
        place: "門司港駅",
      },
      {
        time: "10:30",
        title: "門司港レトロ散策",
        category: "heritage",
        status: "planned",
        price: "舊海關等部分收費",
        route: "車站旁步行區",
        eta: "3～4 小時",
        description: "舊門司海關、Blue Wing 吊橋（整點）、海邊。",
        transit: "步行",
        booking: "不需",
        note: "香蕉霜淇淋是必吃小食。",
        place: "門司港レトロ",
      },
      {
        time: "12:30",
        title: "焼きカレー or ふくふく食堂",
        category: "food",
        status: "planned",
        price: "約 ¥1,500～3,000",
        route: "レトロ區內",
        eta: "1 小時",
        description: "門司名物焼きカレー；河豚可預約ふくふく。",
        transit: "步行",
        booking: "河豚建議預約",
        note: "累了在海邊咖啡休息。",
        place: "門司港 焼きカレー",
      },
      {
        time: "16:30",
        title: "JR 回博多",
        category: "transport",
        status: "verified",
        price: "¥1,730",
        route: "門司港 → 博多",
        eta: "約 1.5 小時",
        description: "傍晚回飯店。",
        transit: "JR",
        booking: "不需",
        note: "晚上可在飯店附近輕鬆晚餐。",
        place: "JR博多駅",
      },
    ],
  },
  {
    id: "d7",
    date: "9/25（四）",
    title: "博多深度・伴手禮踩點",
    summary: "櫛田神社、川端商店街、阪急伴手禮試買。",
    stats: ["博多", "伴手禮", "輕量"],
    stops: [
      {
        time: "10:00",
        title: "櫛田神社",
        category: "heritage",
        status: "planned",
        price: "免費",
        route: "博多站步行 10 分",
        eta: "30～45 分",
        description: "博多總鎮守，求平安。",
        transit: "步行",
        booking: "不需",
        note: "順路去川端商店街。",
        place: "櫛田神社",
      },
      {
        time: "11:00",
        title: "川端通商店街",
        category: "shopping",
        status: "planned",
        price: "依消費",
        route: "川端通",
        eta: "1 小時",
        description: "明太子試吃、老字號。",
        transit: "步行",
        booking: "不需",
        note: "記哪些要 9/27 正式買。",
        place: "川端通商店街",
      },
      {
        time: "12:30",
        title: "【備選午餐】WHITE GLASS / APOC COFFEE",
        category: "cafe",
        status: "optional",
        price: "約 ¥1,000～2,000",
        route: "櫛田神社周邊",
        eta: "45～60 分",
        description: "WHITE GLASS：早餐／散步咖啡。APOC：起司蛋糕＋夜咖啡也行。",
        transit: "步行",
        booking: "不需",
        note: "想吃正餐可改博多駅拉麵街離峰。",
        place: "WHITE GLASS COFFEE FUKUOKA",
      },
      {
        time: "14:00",
        title: "博多阪急・Amu Plaza 伴手禮",
        category: "shopping",
        status: "planned",
        price: "依消費",
        route: "博多駅直結",
        eta: "1～2 小時",
        description: "ふくや明太子、福砂屋、菓子。",
        transit: "步行",
        booking: "不需",
        note: "明太子需保冷；最後一天再買生鮮類。",
        place: "博多阪急",
      },
      {
        time: "16:00",
        title: "【備選逛街】博多河岸（博多織・在地品牌）",
        category: "shopping",
        status: "optional",
        price: "依消費",
        route: "中洲川端附近",
        eta: "45～90 分",
        description: "博多織、在地文創與選物，比百貨更有福岡感。",
        transit: "地鐵中洲川端",
        booking: "不需",
        note: "想買衣服可改 BEAMS／URBAN RESEARCH（運河城）。",
        place: "博多河岸",
      },
    ],
  },
  {
    id: "d8",
    date: "9/26（五）",
    title: "彈性日（三選一）",
    summary: "前幾天走累就選輕鬆方案。預設：運河城＋補買。可加咖啡與拉麵競技場。",
    stats: ["彈性", "休息", "補買"],
    stops: [
      {
        time: "10:00",
        title: "キャナルシティ博多",
        category: "shopping",
        status: "optional",
        price: "免費入場",
        route: "博多站巴士/步行 15 分",
        eta: "2～3 小時",
        description: "運河商場：北面、LOFT、迪士尼、鋼彈基地、噴泉秀。",
        transit: "步行或巴士",
        booking: "不需",
        note: "方案 B：海の中道；方案 C：マリノア outlet；方案 D：糸島半日。",
        place: "キャナルシティ博多",
      },
      {
        time: "備選",
        title: "【備選】糸島半日（情侶海景）",
        category: "tour",
        status: "optional",
        price: "JR+巴士約 ¥1,000～2,000",
        route: "博多 → 糸島（約 40～60 分）",
        eta: "半日",
        description: "櫻井二見ヶ浦、白糸瀑布、海邊咖啡。比貓島輕鬆、風景更「度假感」。",
        transit: "JR 筑肥線 + 西鐵／租車",
        booking: "不需；週五可能略擠",
        note: "若 9/22 貓島因颱風停航，可改排這天。",
        place: "糸島市",
      },
      {
        time: "備選",
        title: "【備選】海の中道海濱公園",
        category: "park",
        status: "optional",
        price: "入園免費；水族館另計",
        route: "博多 → 香椎 → 海の中道（約 30 分）",
        eta: "3～4 小時",
        description: "沙灘、單車、水族館。體力恢復日首選，情侶散步友好。",
        transit: "JR 香椎線",
        booking: "不需",
        note: "比運河城更戶外；記得防曬。",
        place: "海の中道海浜公園",
      },
      {
        time: "12:00",
        title: "【備選美食】拉麵競技場（運河城 5F）",
        category: "food",
        status: "optional",
        price: "約 ¥900～1,300",
        route: "Canal City 北館 5F",
        eta: "45 分",
        description: "多家拉麵可選；比一蘭本店好分流。",
        transit: "館內",
        booking: "不需",
        note: "想少走路就回博多駅拉麵街。",
        place: "ラーメンスタジアム キャナルシティ",
      },
      {
        time: "14:00",
        title: "【備選咖啡】運河城內咖啡 or 回 FUGLEN",
        category: "cafe",
        status: "optional",
        price: "約 ¥500～1,000",
        route: "Canal City / 博多",
        eta: "30 分",
        description: "逛街後回血；想質感就回博多 FUGLEN。",
        transit: "步行",
        booking: "不需",
        note: "為 9/27 離開保留體力。",
        place: "キャナルシティ カフェ",
      },
      {
        time: "14:00",
        title: "回飯店休息 / 溫泉日歸（可選）",
        category: "rest",
        status: "optional",
        price: "溫泉約 ¥1,000～2,000",
        route: "博多周邊",
        eta: "彈性",
        description: "想泡湯可搜「博多 日帰り 温泉」。",
        transit: "依選點",
        booking: "溫泉可不預約",
        note: "為 9/27 離開保留體力。",
        place: "博多駅",
      },
      {
        time: "19:00",
        title: "最後一晚居酒屋",
        category: "night",
        status: "optional",
        price: "約 ¥3,000～5,000/人",
        route: "中洲 or 博多站",
        eta: "2 小時",
        description: "補還沒吃到的居酒屋或屋台。",
        transit: "地鐵",
        booking: "可選預約",
        note: "控制酒量，隔天要買伴手禮。",
        place: "中洲 居酒屋",
      },
    ],
  },
  {
    id: "d9",
    date: "9/27（六）",
    title: "伴手禮・離開",
    summary: "上午採買、午餐、地鐵到機場。",
    stats: ["離開日", "伴手禮", "機場"],
    stops: [
      {
        time: "09:00",
        title: "博多駅伴手禮總採購",
        category: "shopping",
        status: "planned",
        price: "依消費",
        route: "阪急/Amu/デイトス",
        eta: "1.5 小時",
        description: "明太子、福砂屋、一蘭禮盒、清酒。",
        transit: "步行",
        booking: "不需",
        note: "生鮮明太子最後買；確認保冷袋。",
        place: "博多駅",
      },
      {
        time: "11:30",
        title: "最後午餐 + 退房",
        category: "food",
        status: "planned",
        price: "約 ¥1,000",
        route: "駅弁 or 長介",
        eta: "45 分",
        description: "快速午餐後取行李。",
        transit: "步行",
        booking: "不需",
        note: "確認沒漏 charger、護照。",
        place: "博多駅",
      },
      {
        time: "12:30",
        title: "博多 → 福岡機場",
        category: "transport",
        status: "planned",
        price: "¥260",
        route: "地鐵空港線",
        eta: "約 5 分 + 步行",
        description: "國際線建議起飛前 2.5 小時到。",
        transit: "地鐵",
        booking: "依實際航班",
        note: "更新 .ics 裡的航班時間。",
        place: "福岡空港",
      },
    ],
  },
];

const dayHeroImages = {
  d1: IMAGES.hakata,
  d2: IMAGES.tenjin,
  d3: IMAGES.ohori,
  d4: IMAGES.ainoshima,
  d5: IMAGES.dazaifu,
  d6: IMAGES.mojiko,
  d7: IMAGES.kushida,
  d8: IMAGES.canal,
  d9: IMAGES.hakata,
};

/** Attach local thumbnails to timeline stops and list cards. */
function assignStopImages() {
  const rules = [
    [/相島|貓島|渡輪|新宮港/, IMAGES.ainoshima],
    [/太宰府|天滿|天満/, IMAGES.dazaifu],
    [/門司|レトロ|焼きカレー|ふくふく/, IMAGES.mojiko],
    [/大濠|福岡城|海の中道|海濱/, IMAGES.ohori],
    [/糸島|櫻井|二見/, IMAGES.ainoshima],
    [/天神|PARCO|新天町|ONE FUKUOKA|Shin-Shin|connect coffee/, IMAGES.tenjin],
    [/運河|Canal|キャナル|ラーメンスタジアム/, IMAGES.canal],
    [/櫛田|川端|WHITE GLASS|APOC/, IMAGES.kushida],
    [/屋台|中洲|居酒屋/, IMAGES.yatai],
    [/FUGLEN|咖啡|喫茶|COFFEE|Starbucks|Cafe Miel|TOFFEE/, IMAGES.fuglen],
    [/博多/, IMAGES.hakata],
  ];

  for (const day of itinerary) {
    const fallback = dayHeroImages[day.id] || IMAGES.hakata;
    for (const stop of day.stops) {
      if (stop.category === "transport" || stop.category === "rest") continue;
      const text = `${stop.title} ${stop.place || ""} ${stop.description || ""}`;
      stop.image = rules.find(([pattern]) => pattern.test(text))?.[1] || fallback;
    }
  }
}

function assignListImages() {
  const listRules = [
    [/相島|貓/, IMAGES.ainoshima],
    [/太宰府/, IMAGES.dazaifu],
    [/門司|運河|Canal|キャナル/, IMAGES.canal],
    [/天神|Shin-Shin|connect/, IMAGES.tenjin],
    [/大濠|藥院/, IMAGES.ohori],
    [/屋台|中洲|居酒屋/, IMAGES.yatai],
    [/FUGLEN|咖啡|COFFEE|Cafe|TOFFEE|WHITE|APOC/, IMAGES.fuglen],
    [/櫛田|川端|明太子|ふくや|阪急|Amu|PARCO|IMS|新天町|博多河岸|藥妝|BEAMS/, IMAGES.hakata],
    [/拉麵|弁天堂|元気|あかちょこべ|長介|競技場/, IMAGES.hakata],
  ];

  for (const item of [...foodList, ...cafeList, ...shoppingList]) {
    const text = `${item.title} ${item.area} ${item.bestFor}`;
    item.image = listRules.find(([pattern]) => pattern.test(text))?.[1] || IMAGES.hakata;
  }
}

assignStopImages();

const routeCards = [
  {
    title: "機場 ↔ 博多",
    price: "¥260/人",
    route: "福岡市地下鐵空港線",
    eta: "約 5 分",
    note: "最簡單。大件行李可搭巴士。",
  },
  {
    title: "博多 ↔ 相島（貓島）",
    price: "JR ¥280 + 巴士 ¥100 + 渡輪 ¥480 ×2",
    route: "博多 → 福工大前 → 新宮港 → 相島",
    eta: "單程約 1h10（含等船）",
    note: "9 月夏令船班；巴士必須搭到渡船場的班次。",
  },
  {
    title: "博多 ↔ 太宰府",
    price: "巴士 ¥800",
    route: "博多バスターミナル 旅人",
    eta: "約 40 分",
    note: "住博多最省心。塞車時可能延長。",
  },
  {
    title: "博多 ↔ 門司港",
    price: "JR 在來線 ¥1,730 或 新幹線約 ¥2,430",
    route: "博多 → 門司港（直達或經小倉）",
    eta: "1h25～55 分",
    note: "JR 九州 Pass 不含博多→小倉新幹線。",
  },
  {
    title: "博多 ↔ 天神",
    price: "地鐵約 ¥200",
    route: "空港線/七隈線",
    eta: "約 10 分",
    note: "逛街日來回天神。",
  },
];

const expertAudit = [
  {
    score: "A",
    title: "整體強度適中",
    body: "外圍三日（貓島、太宰府、門司港）各排一天，中間穿插逛街與公園，情侶第一次不會太趕。",
  },
  {
    score: "B+",
    title: "貓島船班是最大變數",
    body: "必須 08:00 在博多。錯過 08:36 巴士就要整個船班往後挪。出發前查新宮町マリンクス時刻。",
  },
  {
    score: "A-",
    title: "美食排隊策略合理",
    body: "用離峰、可預約店替代一蘭尖峰。屋台 20:00 後去。",
  },
  {
    score: "B",
    title: "9/20 週六天神仍會人多",
    body: "已排 10:00 開門去。若仍覺擠，週日改去 Canal City、週一後再補天神。",
  },
];

const budgetItems = [
  {
    title: "住宿 8 晚（2 人）",
    cny: "¥80,000～120,000",
    twd: "NT$16,800～25,200",
    note: "博多中價位商務飯店，依訂房平台浮動。",
  },
  {
    title: "餐食 9 天（2 人）",
    cny: "¥60,000～90,000",
    twd: "NT$12,600～18,900",
    note: "含居酒屋、屋台；不含高端壽司。",
  },
  {
    title: "交通（2 人）",
    cny: "¥15,000～25,000",
    twd: "NT$3,150～5,250",
    note: "含相島、太宰府、門司港與市區地鐵。",
  },
  {
    title: "總預估（不含機票）",
    cny: "¥155,000～235,000",
    twd: "NT$32,550～49,350",
    note: "1 JPY≈0.21 TWD 粗估；購物另計。",
  },
];

const taiwanPrep = [
  {
    label: "證件",
    title: "護照與入境",
    body: "台灣護照赴日免簽 90 日。確認效期 6 個月以上。",
  },
  {
    label: "IC 卡",
    title: "Suica / nimoca",
    body: "機場或博多站購買。地鐵、JR、巴士、便利商店可用。",
  },
  {
    label: "網路",
    title: "eSIM 或漫遊",
    body: "查船班、Google Maps、餐廳預約需要網路。",
  },
  {
    label: "現金",
    title: "相島與部分小店",
    body: "渡輪、島上食堂、部分屋台要現金。準備 ¥10,000～20,000/人。",
  },
  {
    label: "保險",
    title: "旅遊平安險",
    body: "含海外急診與班機延誤。",
  },
];

const foodList = [
  {
    title: "二◯加屋長介",
    area: "博多駅 JP 大樓 B1",
    price: "¥1,000～1,500",
    bestFor: "9/19 抵達；少排隊烏龍",
    source: "https://natasha-traveler.tw/fukuoka-niwakahaya-chosuke-udon/",
    map: "二◯加屋長介 博多",
  },
  {
    title: "博多あかちょこべ",
    area: "櫛田神社旁",
    price: "¥2,000～3,000",
    bestFor: "9/20 可預約晚餐",
    source: "https://tenjo.tw/hakata-akachokobe/",
    map: "博多あかちょこべ",
  },
  {
    title: "Shin-Shin 天神本店",
    area: "天神",
    price: "¥800～1,000",
    bestFor: "14:00 離峰拉麵",
    source: "https://marukoblog.tw/shin-shin.html",
    map: "Shin Shin 天神",
  },
  {
    title: "博多元気一杯",
    area: "呉服町",
    price: "¥1,000",
    bestFor: "9/23 太宰府歸來晚餐",
    source: "https://www.activitv.com/entry/taxi_umaimise_250213-2/",
    map: "博多元気一杯 福岡",
  },
  {
    title: "弁天堂 総本店",
    area: "博多駅前",
    price: "¥1,280",
    bestFor: "明太子拉麵；11:00 開門",
    source: "https://peikie.com/bentendo/",
    map: "麺屋弁天堂 総本店",
  },
  {
    title: "拉麵競技場",
    area: "運河城北館 5F",
    price: "¥900～1,300",
    bestFor: "9/26 彈性日；多家可選",
    source: "https://canalcity.co.jp/",
    map: "ラーメンスタジアム キャナルシティ",
  },
  {
    title: "博多駅ラメンストリート",
    area: "博多駅地下",
    price: "¥800～1,200",
    bestFor: "雨天備案；離峰去",
    source: "https://www.jr-hakata-eki-building.jp/",
    map: "博多駅 ラーメンストリート",
  },
  {
    title: "明太子・ふくや試吃",
    area: "川端／博多阪急",
    price: "試吃免費；伴手禮另計",
    bestFor: "9/25 踩點、9/27 採買",
    source: "https://www.fukuya.com/",
    map: "ふくや 博多",
  },
];

const cafeList = [
  {
    title: "FUGLEN FUKUOKA",
    area: "博多駅筑紫口徒歩 3～5 分",
    price: "¥500～1,000",
    bestFor: "抵達日／任何半天回血；北歐空間",
    source: "https://365hygge.com/fuglen-fukuoka/",
    map: "FUGLEN FUKUOKA",
  },
  {
    title: "Cafe Miel",
    area: "博多朝日大樓 B2",
    price: "¥800～1,500",
    bestFor: "早餐・喫茶；地下街可達",
    source: "https://www.bigfang.tw/blog/post/cafe-miel-hakata",
    map: "Cafe Miel 博多",
  },
  {
    title: "connect coffee",
    area: "天神",
    price: "¥600～1,200",
    bestFor: "9/20 逛街中場；晚間也營業",
    source: "https://todolist-japan.com/zh/fukuoka-cafe/",
    map: "connect coffee 福岡",
  },
  {
    title: "TOFFEE park",
    area: "中洲川端",
    price: "約 ¥999 以下",
    bestFor: "豆乳系；屋台前先喝一杯",
    source: "https://todolist-japan.com/zh/fukuoka-cafe/",
    map: "TOFFEE park 福岡",
  },
  {
    title: "WHITE GLASS COFFEE",
    area: "櫛田神社前",
    price: "¥1,000～1,999",
    bestFor: "9/25 博多散步＋咖啡",
    source: "https://todolist-japan.com/zh/fukuoka-cafe/",
    map: "WHITE GLASS COFFEE FUKUOKA",
  },
  {
    title: "APOC COFFEE",
    area: "博多／櫛田一帶",
    price: "¥1,000～1,999",
    bestFor: "起司蛋糕；夜咖啡也可",
    source: "https://todolist-japan.com/zh/fukuoka-cafe/",
    map: "APOC COFFEE 福岡",
  },
  {
    title: "Starbucks 太宰府表參道",
    area: "太宰府天滿宮旁",
    price: "¥500～800",
    bestFor: "9/23；看隈研吾建築",
    source: "https://www.starbucks.co.jp/",
    map: "スターバックス 太宰府天満宮表参道店",
  },
  {
    title: "サン・フカヤ 新天町本店",
    area: "天神・新天町",
    price: "約 ¥999 以下",
    bestFor: "天神早餐・老派喫茶",
    source: "https://todolist-japan.com/zh/fukuoka-cafe/",
    map: "サン・フカヤ 新天町",
  },
];

const shoppingList = [
  {
    title: "天神地下街＋PARCO＋IMS",
    area: "天神",
    price: "依消費",
    bestFor: "9/20 主逛街；百貨＋地下街連通",
    source: "https://gogojp.tw/tenjin-shopping/",
    map: "天神地下街",
  },
  {
    title: "新天町商店街",
    area: "天神",
    price: "依消費",
    bestFor: "懷舊小店；節奏比百貨慢",
    source: "https://kyushu.letsgojp.com/archives/519744/",
    map: "新天町商店街",
  },
  {
    title: "ONE FUKUOKA BLDG.",
    area: "天神 1 丁目",
    price: "依消費",
    bestFor: "新複合大樓；藥妝 Beauty Lounge",
    source: "https://gogojp.tw/tenjin-shopping/",
    map: "ONE FUKUOKA BLDG",
  },
  {
    title: "キャナルシティ博多",
    area: "博多・住吉",
    price: "免費入場",
    bestFor: "9/26；LOFT／無印／鋼彈／噴泉",
    source: "https://canalcity.co.jp/",
    map: "キャナルシティ博多",
  },
  {
    title: "川端通商店街",
    area: "櫛田神社旁",
    price: "依消費",
    bestFor: "明太子試吃・老字號",
    source: "https://www.gltjp.com/zh-hant/article/item/20614/",
    map: "川端通商店街",
  },
  {
    title: "博多阪急・Amu Plaza",
    area: "博多駅直結",
    price: "依消費",
    bestFor: "伴手禮總採購；雨天首選",
    source: "https://www.jr-hakata-eki-building.jp/",
    map: "アミュプラザ博多",
  },
  {
    title: "藥院選物・生活雜貨",
    area: "藥院駅",
    price: "依消費",
    bestFor: "在地生活感；廚房／家居",
    source: "https://www.gltjp.com/zh-hant/article/item/20614/",
    map: "薬院 雑貨",
  },
  {
    title: "マリノアシティ福岡（Outlet）",
    area: "博多灣沿岸",
    price: "需巴士約 30～40 分",
    bestFor: "9/26 方案 C；血拼半日",
    source: "https://www.gltjp.com/zh-hant/article/item/20614/",
    map: "マリノアシティ福岡",
  },
];

const nightList = [
  {
    title: "中洲屋台",
    type: "屋台",
    hours: "18:00～24:00",
    price: "¥2,000～4,000/人",
    route: "中洲川端站",
    note: "20:00 後去；先走一圈再選攤",
    source: "https://fukuoka-info.com/",
  },
  {
    title: "長浜屋台",
    type: "屋台（在地）",
    hours: "傍晚～",
    price: "¥1,500～3,000",
    route: "長浜站附近",
    note: "比中洲觀光客少",
    source: "https://fukuoka-info.com/",
  },
  {
    title: "博多駅居酒屋街",
    type: "居酒屋",
    hours: "17:00～23:00",
    price: "¥3,000～5,000",
    note: "9/26 最後一晚；可預約",
    route: "博多駅地下街",
    source: "https://fukuoka-info.com/",
  },
];

assignListImages();
for (const item of nightList) {
  item.image = IMAGES.yatai;
}

const tips = [
  {
    title: "少排隊三原則",
    body: "① 11:00 或 14:00 後吃拉麵 ② 可 Google 預約的店先訂 ③ 屋台 20:00 後去。",
  },
  {
    title: "咖啡怎麼塞",
    body: "主行程不動；篩選「咖啡」看每日【備選】。博多：FUGLEN／Cafe Miel；天神：connect；太宰府：星巴克建築。",
  },
  {
    title: "逛街怎麼選",
    body: "大血拼＝天神；雨天＝博多駅／運河城；在地感＝藥院／新天町／川端。一天選 1～2 區就好。",
  },
  {
    title: "相島貓咪禮儀",
    body: "不要餵人類食物；不要追貓；垃圾帶回本島。",
  },
  {
    title: "週末 vs 平日",
    body: "天神週六仍擠，但 10:00 開門去可接受。太宰府、貓島已排平日。",
  },
];

const researchSources = [
  {
    type: "Transport",
    title: "相島交通・船班",
    url: "https://www.town.shingu.fukuoka.jp/soshiki/sangyo_shinko/8/1/1/6884.html",
    takeaways: ["新宮町マリンクス時刻表", "夏冬ダイヤ不同"],
  },
  {
    type: "Transport",
    title: "太宰府ライナーバス旅人",
    url: "https://www.nishitetsu.jp/bus/rosen/dazaihu_liner/",
    takeaways: ["博多→太宰府約40分", "¥800"],
  },
  {
    type: "Transport",
    title: "博多→門司港",
    url: "https://fukuoka-info.com/transportation-hakata-to-mojiko/",
    takeaways: ["在來線約1h25", "新幹線經小倉較快"],
  },
  {
    type: "Cafe",
    title: "福岡咖啡廳整理",
    url: "https://todolist-japan.com/zh/fukuoka-cafe/",
    takeaways: ["博多・天神・藥院・大濠分區", "FUGLEN／connect／WHITE GLASS"],
  },
  {
    type: "Shopping",
    title: "天神逛街地圖",
    url: "https://gogojp.tw/tenjin-shopping/",
    takeaways: ["地下街・PARCO・ONE FUKUOKA", "藥妝退稅"],
  },
  {
    type: "Shopping",
    title: "博多運河城",
    url: "https://canalcity.co.jp/",
    takeaways: ["LOFT・拉麵競技場・噴泉", "無料入場"],
  },
  {
    type: "Food",
    title: "福岡少排隊美食／貓島動線",
    url: "https://todolist-japan.com/zh/fukuoka-cat-island-ainoshima-transport/",
    takeaways: ["相島完整動線", "渡輪¥480"],
  },
];

const checklistItems = [
  { id: "flights", title: "訂 9/19-9/27 機票", detail: "建議下午到、傍晚走。訂好更新備註。" },
  { id: "hotel", title: "訂博多駅 8 晚", detail: "徒歩 5～10 分、雙床、可寄行李。" },
  { id: "ic", title: "準備 IC 卡或現金", detail: "Suica/nimoca + ¥10,000～20,000 現金/人。" },
  { id: "esim", title: "買 eSIM 或開漫遊", detail: "貓島查船班需要網路。" },
  { id: "akachokobe", title: "預約 博多あかちょこべ 9/20", detail: "Google 預約或電話。" },
  { id: "cafe-pick", title: "從咖啡清單勾 2～3 間想去的", detail: "建議：FUGLEN + Cafe Miel + connect。" },
  { id: "shop-pick", title: "決定逛街主軸", detail: "天神主日／運河城彈性日／藥院備選。" },
  { id: "cat-bus", title: "9/21 查相島巴士+船班", detail: "新宮町官網確認 9/22 接駁時刻。" },
  { id: "mojiko-fugu", title: "（可選）門司港河豚預約", detail: "9/24 若吃ふくふく食堂先訂。" },
  { id: "insurance", title: "旅遊平安險", detail: "含醫療與班機延誤。" },
  { id: "souvenir", title: "9/27 上午伴手禮清單", detail: "明太子、福砂屋、一蘭禮盒。" },
];

const state = { activeDay: itinerary[0].id, activeFilter: "all", activeStopKey: null };

const elements = {
  dayTabs: document.querySelector("#dayTabs"),
  daySummary: document.querySelector("#daySummary"),
  timeline: document.querySelector("#timeline"),
  detailTitle: document.querySelector("#detailTitle"),
  detailPhoto: document.querySelector("#detailPhoto"),
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
  routeGrid: document.querySelector("#routeGrid"),
  auditGrid: document.querySelector("#auditGrid"),
  budgetGrid: document.querySelector("#budgetGrid"),
  taiwanGrid: document.querySelector("#taiwanGrid"),
  foodGrid: document.querySelector("#foodGrid"),
  cafeGrid: document.querySelector("#cafeGrid"),
  shoppingGrid: document.querySelector("#shoppingGrid"),
  nightGrid: document.querySelector("#nightGrid"),
  tipsGrid: document.querySelector("#tipsGrid"),
};

function getActiveDay() {
  return itinerary.find((day) => day.id === state.activeDay) || itinerary[0];
}

function stopKey(dayId, index) {
  return `${dayId}-${index}`;
}

function statusLabel(status) {
  return (
    {
      confirmed: "已確定",
      verified: "已驗證",
      needs: "需預約",
      optional: "彈性",
      planned: "規劃估時",
    }[status] || status
  );
}

function statusClass(status) {
  if (status === "confirmed" || status === "verified") return "booked";
  if (status === "needs") return "needs";
  return "planned";
}

function renderTabs() {
  elements.dayTabs.innerHTML = itinerary
    .map(
      (day) => `
    <button
      type="button"
      class="day-tab ${state.activeDay === day.id ? "active" : ""}"
      data-day="${day.id}"
      role="tab"
      aria-selected="${state.activeDay === day.id}"
    >
      <span>${day.date}</span>
      <small>${day.title.split("・")[0].split("★")[0].trim()}</small>
    </button>`
    )
    .join("");
}

function renderTimeline() {
  const day = getActiveDay();
  elements.daySummary.innerHTML = `
    <h3>${day.title}</h3>
    <p>${day.summary}</p>
    <div class="chip-row">${day.stats.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
  `;

  const filteredStops =
    state.activeFilter === "all"
      ? day.stops
      : day.stops.filter((stop) => stop.category === state.activeFilter);

  elements.timeline.innerHTML = filteredStops
    .map((stop) => {
      const index = day.stops.indexOf(stop);
      const key = stopKey(day.id, index);
      const active = state.activeStopKey === key;
      return `
      <button type="button" class="timeline-item ${active ? "active" : ""}" data-stop="${key}">
        ${stop.image ? `<img class="stop-thumb" src="${stop.image}" alt="${stop.title}圖片" loading="lazy" onerror="this.remove()" />` : ""}
        <span class="timeline-row">
          <span class="time">${stop.time}</span>
          <span class="timeline-body">
            <strong>${stop.title}</strong>
            <span class="status ${statusClass(stop.status)}">${statusLabel(stop.status)}</span>
            <small>${stop.eta} · ${stop.price}</small>
          </span>
        </span>
      </button>`;
    })
    .join("");

  if (!state.activeStopKey || !document.querySelector(`[data-stop="${state.activeStopKey}"]`)) {
    const first = filteredStops[0];
    if (first) {
      state.activeStopKey = stopKey(day.id, day.stops.indexOf(first));
    }
  }
}

function renderInspector() {
  const day = getActiveDay();
  const [, indexText] = (state.activeStopKey || stopKey(day.id, 0)).split("-");
  const stop = day.stops[Number(indexText)] || day.stops[0];
  if (!stop) return;
  elements.detailTitle.textContent = stop.title;
  elements.detailMeta.textContent = `${day.date} ${stop.time} · ${statusLabel(stop.status)} · ${stop.eta} · ${stop.price}`;
  if (elements.detailPhoto) {
    if (stop.image) {
      elements.detailPhoto.hidden = false;
      elements.detailPhoto.innerHTML = `<img src="${stop.image}" alt="${stop.title}照片" loading="lazy" onerror="this.closest('figure').hidden=true" />`;
    } else {
      elements.detailPhoto.hidden = true;
      elements.detailPhoto.innerHTML = "";
    }
  }
  elements.detailTransit.textContent = `${stop.transit}\n${stop.route}\n${stop.description}`;
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
  renderCardGrid(
    elements.sourceGrid,
    researchSources,
    (source) => `
    <article class="source-card">
      <span class="source-type">${source.type}</span>
      <h3>${source.title}</h3>
      <ul>${source.takeaways.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">開啟來源</a>
    </article>`
  );
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
    "PRODID:-//Fukuoka Departure Pack//ZH-TW",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:福岡出發包提醒",
    "X-WR-TIMEZONE:Asia/Tokyo",
  ];

  calendarReminders.forEach((event) => {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.id}@fukuoka-departure-pack`,
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
  link.download = "fukuoka-departure-pack.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderReminderList() {
  renderCardGrid(
    elements.reminderList,
    calendarReminders,
    (item) => `
    <article class="reminder-item">
      <span>${reminderDisplayDate(item.start)}</span>
      <strong>${item.title}</strong>
      <small>${item.description}</small>
    </article>`
  );
}

function renderRouteGrid() {
  renderCardGrid(
    elements.routeGrid,
    routeCards,
    (item) => `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p><strong>${item.price}</strong></p>
      <p>${item.route}</p>
      <p>${item.eta}</p>
      <span>${item.note}</span>
    </article>`
  );
}

function renderAuditGrid() {
  renderCardGrid(
    elements.auditGrid,
    expertAudit,
    (item) => `
    <article class="info-card audit-card">
      <span class="score">${item.score}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>`
  );
}

function renderBudgetGrid() {
  renderCardGrid(
    elements.budgetGrid,
    budgetItems,
    (item) => `
    <article class="info-card ${item.title.includes("總預估") ? "dark" : ""}">
      <h3>${item.title}</h3>
      <div class="money-line">
        <strong>${item.cny}</strong>
        <small>${item.twd}</small>
      </div>
      <p>${item.note}</p>
    </article>`
  );
}

function renderTaiwanGrid() {
  renderCardGrid(
    elements.taiwanGrid,
    taiwanPrep,
    (item) => `
    <article class="info-card">
      <span class="source-type">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>`
  );
}

function renderFoodGrid() {
  renderCardGrid(
    elements.foodGrid,
    foodList,
    (item) => `
    <article class="info-card">
      ${item.image ? `<img class="card-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.remove()" />` : ""}
      <h3>${item.title}</h3>
      <p>${item.area}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.bestFor}</span>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
        <a href="${mapUrl(item.map)}" target="_blank" rel="noopener noreferrer">地圖</a>
      </div>
    </article>`
  );
}

function renderCafeGrid() {
  renderCardGrid(
    elements.cafeGrid,
    cafeList,
    (item) => `
    <article class="info-card">
      ${item.image ? `<img class="card-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.remove()" />` : ""}
      <h3>${item.title}</h3>
      <p>${item.area}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.bestFor}</span>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
        <a href="${mapUrl(item.map)}" target="_blank" rel="noopener noreferrer">地圖</a>
      </div>
    </article>`
  );
}

function renderShoppingGrid() {
  renderCardGrid(
    elements.shoppingGrid,
    shoppingList,
    (item) => `
    <article class="info-card">
      ${item.image ? `<img class="card-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.remove()" />` : ""}
      <h3>${item.title}</h3>
      <p>${item.area}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.bestFor}</span>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
        <a href="${mapUrl(item.map)}" target="_blank" rel="noopener noreferrer">地圖</a>
      </div>
    </article>`
  );
}

function renderNightGrid() {
  renderCardGrid(
    elements.nightGrid,
    nightList,
    (item) => `
    <article class="info-card dark">
      ${item.image ? `<img class="card-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.remove()" />` : ""}
      <h3>${item.title}</h3>
      <p>${item.type} · ${item.hours}</p>
      <p><strong>${item.price}</strong></p>
      <span>${item.route}</span>
      <small>${item.note}</small>
      <div class="card-actions">
        <a href="${item.source}" target="_blank" rel="noopener noreferrer">來源</a>
      </div>
    </article>`
  );
}

function renderTips() {
  renderCardGrid(
    elements.tipsGrid,
    tips,
    (item) => `
    <article class="tip-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>`
  );
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem("fukuokaChecklist") || "{}");
  elements.checklist.innerHTML = checklistItems
    .map(
      (item) => `
    <label class="check-item">
      <input type="checkbox" data-check="${item.id}" ${saved[item.id] ? "checked" : ""} />
      <span>
        <strong>${item.title}</strong>
        <span>${item.detail}</span>
      </span>
    </label>`
    )
    .join("");
}

function saveChecklist(event) {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;
  const saved = JSON.parse(localStorage.getItem("fukuokaChecklist") || "{}");
  saved[checkbox.dataset.check] = checkbox.checked;
  localStorage.setItem("fukuokaChecklist", JSON.stringify(saved));
}

function hydrateNotes() {
  elements.tripNotes.value = localStorage.getItem("fukuokaTripNotes") || "";
  elements.tripNotes.addEventListener("input", () => {
    localStorage.setItem("fukuokaTripNotes", elements.tripNotes.value);
  });
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
  elements.downloadCalendar?.addEventListener("click", downloadCalendar);
}

function render() {
  renderTabs();
  renderTimeline();
  renderInspector();
}

render();
renderRouteGrid();
renderAuditGrid();
renderBudgetGrid();
renderTaiwanGrid();
renderFoodGrid();
renderCafeGrid();
renderShoppingGrid();
renderNightGrid();
renderTips();
renderSources();
renderReminderList();
renderChecklist();
hydrateNotes();
bindEvents();
