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
    id: "kamakura-prep",
    title: "確認鎌倉・江之島周遊券與天氣",
    start: "20261024T200000",
    end: "20261024T203000",
    location: "新宿站小田急窗口 / 自動售票機",
    description: "10/25 一日遊。江之島・鎌倉周遊券約 ¥1,640（2025 價格，出發前再確認）。查颱風或大雨備案改市區。",
    alarms: [1440, 60]
  },
  {
    id: "kamakura-day",
    title: "鎌倉・江之島一日",
    start: "20261025T090000",
    end: "20261025T200000",
    location: "鎌倉 / 江之島 / 湘南",
    description: "10:00 出門。鶴岡八幡宮、小町通、江之電、江之島燈塔或洞穴。帶現金、防曬、輕便鞋。",
    alarms: [720, 60]
  },
  {
    id: "akihabara-d1",
    title: "10/23 秋葉原電気街（唯一一天）",
    start: "20261023T203000",
    end: "20261023T230000",
    location: "秋葉原",
    description: "20:30 起 GiGO、扭蛋會館、Super Potato。僅 D1，之後行程不再排秋葉原。",
    alarms: [1440, 90]
  },
  {
    id: "return-airport",
    title: "返程：出發去 NRT T1",
    start: "20261027T140000",
    end: "20261027T153000",
    location: "成田國際機場 第1航廈 北 wing",
    description: "14:00 從中野出發。N'EX 或京成 Skyliner + 轉乘，或利木津巴士。國際線建議起飛前 3 小時到機場。",
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
    title: "抵達中野、秋葉原電気街（唯一一天）",
    summary: "抵達日：成田入境 → N'EX 到中野入住 → 簡短晚餐 → 秋葉原主行程（GiGO、扭蛋會館、Super Potato）。秋葉原只排這一天，之後不再回。",
    stats: ["抵達日", "秋葉原僅D1", "23:00收尾"],
    stops: [
      {
        time: "16:30",
        title: "抵達成田 NRT 第1航廈（北）",
        category: "transport",
        status: "confirmed",
        price: "機票已訂；N'EX 中野約 ¥3,070",
        route: "NRT T1 北 → JR 成田站",
        eta: "入境 60-90 分",
        description: "SL394 抵達後：取行李 → 跟著「鉄道/JR」指標走 → 到 JR 售票區。詳見下方「交通圖解」Step 教學。",
        transit: "入境大廳往下到 B1 鐵路層。",
        booking: "確認 SL394、住宿地址日文截圖。",
        note: "先買 N'EX + Suica，再上車。",
        place: "成田國際機場 第1旅客航廈",
        image: IMAGES.narita
      },
      {
        time: "18:00",
        title: "N'EX 成田特快 → 中野",
        category: "transport",
        status: "confirmed",
        price: "N'EX 約 ¥3,070；Suica 押金 ¥500",
        route: "成田機場站 → 中野站（直達）",
        eta: "約 80 分",
        description: "N'EX 中野行不用轉車。車上可看風景休息；到中野後北口出站，步行 8-12 分到公寓。",
        transit: "JR 綠色售票機或櫃台買「成田特快 + Suica」套票最省事。",
        booking: "可指定席；大件行李放車廂末端。",
        note: "到站先記住中野站布局，之後每天都從這出發。",
        place: "中野駅",
        image: IMAGES.nexTrain
      },
      {
        time: "19:30",
        title: "入住 + 中野快速晚餐",
        category: "rest",
        status: "confirmed",
        price: "拉麵約 ¥900-1,200",
        route: "公寓 → 中野站南口拉麵",
        eta: "入住 20 分 + 用餐 30 分",
        description: "放行李、確認 Wi-Fi。吃一風堂或拉麵橫丁墊肚子，留體力給秋葉原。",
        transit: "步行。",
        booking: "不需預約。",
        note: "秋葉原今晚是主行程，別吃太飽。",
        place: "中野駅 ラーメン"
      },
      {
        time: "20:30",
        title: "秋葉原主行程：GiGO・扭蛋・Super Potato",
        category: "theme",
        status: "planned",
        price: "逛街免費；扭蛋/遊戲依個人",
        route: "中野 → JR 總武線 2 站 → 秋葉原",
        eta: "車程 10 分；停留 2-2.5h",
        description: "唯一一天的秋葉原：GiGO 1 號館 → 扭蛋會館 5F → Super Potato 中古遊戲 → Radio Kaikan 外觀。想拍照可步行 10 分到神田明神。",
        transit: "JR 中野 → 秋葉原（黃色總武線各站停車）。",
        booking: "不需預約。",
        note: "先逛再買；23:00 前搭 JR 回中野。",
        place: "秋葉原電気街",
        tags: ["秋葉原", "必去", "僅D1"],
        image: IMAGES.akihabara
      },
      {
        time: "22:45",
        title: "回中野休息",
        category: "rest",
        status: "planned",
        price: "—",
        route: "秋葉原 → 中野",
        eta: "車程 10 分",
        description: "搭 JR 回公寓。隔天 10:00 出門，不排秋葉原。",
        transit: "總武線回中野。",
        booking: "—",
        note: "戰利品可先放公寓，輕裝出門隔天行程。",
        place: "中野駅"
      }
    ]
  },
  {
    id: "d2",
    date: "10/24（六）",
    title: "明治神宮、原宿、澀谷 Sky（無秋葉原）",
    summary: "今天不排秋葉原。10:00 從中野直達原宿，從容逛明治神宮與竹下通，傍晚澀谷 Sky 夜景，晚餐澀谷。",
    stats: ["10:00出門", "無秋葉原", "夜景主案"],
    stops: [
      {
        time: "10:00",
        title: "中野 → 原宿（JR）",
        category: "transport",
        status: "planned",
        price: "JR 約 ¥200",
        route: "中野 → 新宿/代々木 → 原宿",
        eta: "車程 25-30 分",
        description: "搭 JR 山手線或中央線轉乘。週六上午建議 10:00 出發避開人潮尖峰。",
        transit: "Google Maps 看月台；山手線外回り往澀谷方向。",
        booking: "不需預約。",
        note: "不經秋葉原；今天動線是原宿 → 澀谷。",
        place: "原宿駅"
      },
      {
        time: "10:45",
        title: "明治神宮",
        category: "heritage",
        status: "needs",
        price: "免費參拜",
        route: "原宿站 → 表參道鳥居 → 本殿",
        eta: "停留 2-2.5h",
        description: "必去。時間比舊版充裕（已移除上午秋葉原）。森林步道很療癒，10 月約 16:40 停止入內。",
        transit: "步行。",
        booking: "不需門票。",
        note: "16:40 前離開；御守排隊預留 20 分。",
        place: "明治神宮",
        tags: ["必去"],
        image: IMAGES.meiji
      },
      {
        time: "13:15",
        title: "原宿午餐（表參道 / 烏龍麵 / 輕食）",
        category: "food",
        status: "planned",
        price: "約 ¥1,000-1,800/人",
        route: "神宮前・表參道",
        eta: "60 分",
        description: "明治神宮出口附近用餐。不想排隊可吃丸龜製麵或表參道輕食。",
        transit: "步行。",
        booking: "一般不需預約。",
        note: "下午留時間給竹下通與咖啡。",
        place: "表參道 ランチ"
      },
      {
        time: "14:30",
        title: "竹下通 + % Arabica 原宿",
        category: "hutong",
        status: "planned",
        price: "咖啡約 ¥500-700",
        route: "明治神宮 → 竹下通 → 神宮前",
        eta: "60-90 分",
        description: "竹下通拍 15 分鐘即可；% Arabica 神宮前或 The Matcha Tokyo 坐下休息。",
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
        title: "澀谷晚餐：牛かつもとむら / Uobei",
        category: "food",
        status: "planned",
        price: "約 ¥2,000-8,000/人",
        route: "澀谷站周邊",
        eta: "90-120 分",
        description: "牛かつもとむら 澀谷或 Uobei 迴轉壽司；周六 18:30 前到店較少排隊。",
        transit: "步行；JR 回中野約 15 分。",
        booking: "熱門店建議 Tabelog 訂位。",
        note: "末班車約 00:30 前。",
        place: "渋谷 牛かつもとむら"
      }
    ]
  },
  {
    id: "d3",
    date: "10/25（日）",
    title: "鎌倉・江之島 → 新宿夜景",
    summary: "必去海邊一日。10:00 出門，新宿買周遊券，走鎌倉江之島；回程留新宿吃晚餐逛夜景，不經東京車站。",
    stats: ["一日遊", "周遊券", "海邊"],
    stops: [
      {
        time: "10:00",
        title: "中野出發 → 新宿轉小田急",
        category: "transport",
        status: "planned",
        price: "周遊券約 ¥1,640（出發前確認最新價）",
        route: "中野 → 新宿 → 藤沢/鎌倉",
        eta: "車程約 60-75 分",
        description: "在新宿小田急售票處或自動機買「江之島・鎌倉周遊券」，含小田急往返 + 江之電不限次。",
        transit: "JR 中野 → 新宿 → 小田急線。",
        booking: "現場購買即可；假日建議提早出發。",
        note: "颱風天改室內備案：池袋/新宿逛街 + 拉麵。",
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
        description: "鎌倉代表神社與商店街。小町通吃鎌倉啤酒、鎌倉薯條、烤仙貝。",
        transit: "步行。",
        booking: "不需預約。",
        note: "週日人多，午餐可錯開 12:30 高峰。",
        place: "鶴岡八幡宮",
        image: IMAGES.kamakura
      },
      {
        time: "14:00",
        title: "江之電：鎌倉高校前（灌籃高手）→ 江之島",
        category: "transport",
        status: "planned",
        price: "含在周遊券",
        route: "鎌倉 → 長谷 → 江之島",
        eta: "每站 30-60 分",
        description: "經典海景電車。鎌倉高校前站路口是灌籃高手聖地，拍照注意號誌與車流、不要站馬路中央。可跳過長谷大佛直衝江之島。",
        transit: "江之電。",
        booking: "不需預約。",
        note: "想省體力可跳過大佛，直衝江之島。",
        place: "鎌倉高校前駅",
        tags: ["網紅", "灌籃高手"],
        image: IMAGES.kamakuraHigh
      },
      {
        time: "16:00",
        title: "江之島（燈塔/洞穴/海岸）",
        category: "park",
        status: "planned",
        price: "展望台/洞穴聯票約 ¥1,000-1,500（以現場為準）",
        route: "江之島站 → 弁天橋 → 島上",
        eta: "90-120 分",
        description: "必去海邊段落。日落前光線最好；島上神社與海鮮餐廳。",
        transit: "步行；可搭江之島電梯（單程約 ¥360）。",
        booking: "現場購票。",
        note: "17:30 後慢慢往回程走，避免錯過末班車。",
        place: "江の島",
        tags: ["必去"],
        image: IMAGES.enoshima
      },
      {
        time: "19:00",
        title: "新宿夜景・晚餐（思い出横丁 / 歌舞伎町）",
        category: "night",
        status: "planned",
        price: "晚餐約 ¥2,000-4,000/人",
        route: "藤沢/鎌倉 → 新宿（小田急）",
        eta: "停留 2-2.5h",
        description: "鎌倉回來不直接回家：在新宿吃晚餐、逛思い出横丁或歌舞伎町周邊。可選都廳展望台（免費夜景，至 23:00）。不經東京車站。",
        transit: "小田急到達新宿站；回中野 JR 1 站。",
        booking: "居酒屋 Walk-in；都廳展望台不需預約。",
        note: "這趟新宿主排晚上；週日人多，21:30 前搭 JR 回中野。",
        place: "新宿 思い出横丁",
        tags: ["新宿", "夜景"],
        image: IMAGES.shinjuku
      },
      {
        time: "21:30",
        title: "新宿 → 中野（回住宿）",
        category: "rest",
        status: "planned",
        price: "JR 約 ¥160",
        route: "新宿 → 中野",
        eta: "車程 5 分",
        description: "搭 JR 中央線或山手線轉回中野。一日步行量大，回公寓泡腳休息。",
        transit: "JR 新宿 → 中野（約 1 站中央線或 2 站山手線）。",
        booking: "不需預約。",
        note: "隔天是泡湯日，可早睡。",
        place: "中野駅"
      }
    ]
  },
  {
    id: "d4",
    date: "10/26（一）",
    title: "泡湯日：谷中散步 + 住宿旁錢湯",
    summary: "專門排一天在住宿附近泡湯。上午下町散步與喫茶，下午回中野泡光明泉或中野湯田（步行圈），不跑東京車站。",
    stats: ["泡湯必去", "10:00出門", "住宿旁"],
    stops: [
      {
        time: "10:00",
        title: "谷中銀座商店街",
        category: "hutong",
        status: "planned",
        price: "免費；小吃約 ¥500-1,500",
        route: "中野 → 日暮里 → 谷中銀座",
        eta: "車程 35 分；逛 1.5-2h",
        description: "下町氛圍、貓街、炸肉丸與草鞋燒。週一部分店休，但散步仍值得。",
        transit: "JR 中野 → 日暮里 → 步行。",
        booking: "不需預約。",
        note: "上野動物園不在此日主線，避免塞太多。",
        place: "谷中銀座",
        tags: ["生活感"],
        image: IMAGES.yanaka
      },
      {
        time: "13:00",
        title: "神保町古書街 + 喫茶",
        category: "hutong",
        status: "planned",
        price: "咖啡約 ¥600-1,000",
        route: "谷中 → 神保町",
        eta: "車程 25 分；停留 1.5h",
        description: "二手書店與老派喫茶（如 Sabour 或 Miyama 類型，當日看營業再選）。文青但不做作的生活感停點。",
        transit: "Metro 或 JR。",
        booking: "部分名店可能需排隊。",
        note: "書店只逛 2-3 家就好，避免變成體力戰。",
        place: "神保町 古書街",
        tags: ["喫茶", "生活感"]
      },
      {
        time: "15:00",
        title: "回中野・準備泡湯",
        category: "rest",
        status: "planned",
        price: "—",
        route: "神保町 → 中野",
        eta: "車程 25 分 + 休息 30 分",
        description: "回公寓放東西、換洗衣物、帶毛巾（或現場買）。泡湯前吃輕食，避免空腹或太飽。",
        transit: "JR 或 Metro 回中野。",
        booking: "—",
        note: "光明泉、中野湯田都在中野站步行 10 分內。",
        place: "ギャラリー平和の森館"
      },
      {
        time: "16:30",
        title: "光明泉／中野湯田（住宿旁泡湯・必去）",
        category: "wellness",
        status: "needs",
        price: "約 ¥500-1,000（以現場為準）",
        route: "中野站北口步行圈",
        eta: "停留 90-120 分",
        description: "這趟泡湯主行程。推薦光明泉（中野名湯、木造氛圍）或中野湯田。像本地人一樣泡錢湯，結束後在站前吃晚餐。",
        transit: "從公寓步行或搭一站到北口。",
        booking: "不需預約；週一部分錢湯公休，出發前查官網。",
        note: "刺青政策各店不同；帶 ¥100 硬幣（置物櫃）。",
        place: "光明泉 中野",
        tags: ["泡湯", "必去", "住宿旁"],
        image: IMAGES.onsen
      },
      {
        time: "19:00",
        title: "中野站前晚餐（居酒屋 / 拉麵）",
        category: "food",
        status: "planned",
        price: "約 ¥2,000-4,000/人",
        route: "中野站南口・北口",
        eta: "60-90 分",
        description: "泡完湯在住宿旁吃晚餐，不必再搭車。中野拉麵橫丁或站前居酒屋。",
        transit: "步行。",
        booking: "Walk-in 為主。",
        note: "隔天要整理行李退房，控制酒量。",
        place: "中野駅 ラーメン"
      }
    ]
  },
  {
    id: "d5",
    date: "10/27（二）",
    title: "中野最後半天、返程 NRT",
    summary: "退房日輕鬆收尾：中野早午餐、伴手禮，14:00 前出發往成田。17:25 SL395 回台北。",
    stats: ["14:00出發", "返程", "伴手禮"],
    stops: [
      {
        time: "09:00",
        title: "中野早午餐 + 伴手禮",
        category: "food",
        status: "planned",
        price: "約 ¥1,500-3,000",
        route: "中野站 → 中野百貨/ Broadway 周邊",
        eta: "90 分",
        description: "最後補貨：東京香蕉（站內）、百貨地下便當、中野 Broadway 小物。不要在機場才買全部。",
        transit: "步行。",
        booking: "不需預約。",
        note: "10:30 前回公寓收行李退房。",
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
        description: "確認垃圾分類、鑰匙歸還、檢查充電器與護照。",
        transit: "—",
        booking: "依房東規則。",
        note: "大件行李若超重，前一晚先秤重。",
        place: "ギャラリー平和の森館"
      },
      {
        time: "14:00",
        title: "出發往成田 NRT T1",
        category: "transport",
        status: "needs",
        price: "N'EX 約 ¥3,070 或 Skyliner 組合",
        route: "中野 → 成田機場 第1航廈",
        eta: "車程 75-100 分 + 緩衝",
        description: "國際線建議起飛前 3 小時到機場。17:25 起飛 → 14:00-14:30 出發較穩。",
        transit: "N'EX 中野直達或京成線。",
        booking: "可提前買 N'EX 指定席。",
        note: "SL395 以泰國獅航櫃台與行李規定為準。",
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
        description: "泰國獅航 SL395，17:25 起飛，20:30 抵台（以航空公司公告為準）。",
        transit: "—",
        booking: "線上 check-in 若開放可先做。",
        note: "免稅最後補貨控制在登機時間內。",
        place: "成田國際機場 第1旅客航廈"
      }
    ]
  }
];


const geoPlaces = {
  nakano: { x: 148, y: 205, label: "中野", sub: "住宿", kind: "hub" },
  koenji: { x: 108, y: 198, label: "高圓寺", sub: "西", kind: "area" },
  shinjuku: { x: 188, y: 172, label: "新宿", sub: "D3 夜", kind: "area" },
  harajuku: { x: 202, y: 218, label: "原宿", sub: "D2", kind: "area" },
  shibuya: { x: 208, y: 262, label: "澀谷", sub: "D2 夜", kind: "area" },
  akihabara: { x: 268, y: 188, label: "秋葉原", sub: "D1", kind: "area" },
  yanaka: { x: 308, y: 158, label: "谷中", sub: "D4", kind: "area" },
  jimbocho: { x: 252, y: 168, label: "神保町", sub: "D4", kind: "area" },
  onsen: { x: 138, y: 192, label: "光明泉", sub: "D4 泡湯", kind: "onsen" },
  nrt: { x: 418, y: 88, label: "成田", sub: "NRT", kind: "airport" },
  kamakura: { x: 72, y: 348, label: "鎌倉", sub: "D3", kind: "far" },
  enoshima: { x: 48, y: 368, label: "江之島", sub: "海", kind: "far" }
};

const tripGeoOverview = {
  routes: [
    { day: "d1", color: "#c4a574", width: 2.5, path: ["nrt", "nakano", "akihabara", "nakano"] },
    { day: "d2", color: "#2d6a4f", width: 2.5, path: ["nakano", "harajuku", "shibuya", "nakano"] },
    { day: "d3", color: "#4a6fa5", width: 2.5, path: ["nakano", "shinjuku", "kamakura", "enoshima", "shinjuku", "nakano"] },
    { day: "d4", color: "#8b6f4e", width: 2.5, path: ["nakano", "yanaka", "jimbocho", "nakano", "onsen"] },
    { day: "d5", color: "#2c5282", width: 2.5, path: ["nakano", "nrt"] }
  ],
  activePlaces: ["nakano", "shinjuku", "harajuku", "shibuya", "akihabara", "yanaka", "jimbocho", "onsen", "nrt", "kamakura", "enoshima"]
};

const tripDayMaps = [
  { day: "D1", date: "10/23", color: "#c4a574", title: "抵達・秋葉原", route: ["nrt", "nakano", "akihabara", "nakano"], note: "N'EX 直達中野，不經東京車站" },
  { day: "D2", date: "10/24", color: "#2d6a4f", title: "明治神宮・澀谷", route: ["nakano", "harajuku", "shibuya", "nakano"], note: "澀谷 Sky 夜景" },
  { day: "D3", date: "10/25", color: "#4a6fa5", title: "鎌倉・新宿夜", route: ["nakano", "shinjuku", "kamakura", "enoshima", "shinjuku", "nakano"], note: "回程新宿晚餐・夜景" },
  { day: "D4", date: "10/26", color: "#8b6f4e", title: "泡湯日", route: ["nakano", "yanaka", "jimbocho", "nakano", "onsen"], note: "住宿旁光明泉／中野湯田" },
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
        title: "中野站出站 → 公寓",
        body: "北口出站，步行 8-12 分到ギャラリー平和の森館。出站前可在站內便利店補給。",
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
  { title: "中野 ⇄ 新宿（夜景・小田急）", price: "JR 約 ¥160", route: "中野 → 新宿", eta: "約 5-15 分", note: "D3 買周遊券 + 晚上新宿晚餐；不經東京車站。" },
  { title: "中野 ⇄ 日暮里（谷中）", price: "JR 約 ¥160-200", route: "中野 → 日暮里", eta: "約 20 分", note: "D4 谷中銀座。" },
  { title: "中野 ⇄ 成田 NRT", price: "N'EX 約 ¥3,070", route: "中野 → 成田機場", eta: "約 80 分", note: "D1 入境與 D5 返程；可買指定席。" },
  { title: "深夜回中野", price: "JR 末班約 00:30 前後", route: "澀谷/新宿 → 中野", eta: "15-25 分", note: "喝酒後注意末班車；錯過就計程車約 ¥5,000-7,000。" }
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
      { label: "中野站", sub: "步行 8 分 → 公寓", icon: "🏠", hub: true }
    ],
    tips: ["機場買/綁 Suica", "北口出站較近住宿方向"]
  },
  {
    day: "D1",
    title: "中野 ⇄ 秋葉原（僅第一天晚上）",
    line: "sobu",
    steps: [
      { label: "中野", sub: "JR 總武線", icon: "🏠", hub: true },
      { label: "→ 2 站", sub: "約 10 分", icon: "🟡" },
      { label: "秋葉原", sub: "電気街・GiGO", icon: "🎮" }
    ],
    tips: ["黃色總武線各站停車", "不用轉車"]
  },
  {
    day: "D2",
    title: "中野 → 原宿 → 澀谷（無秋葉原）",
    line: "yamanote",
    steps: [
      { label: "中野", sub: "JR 出發", icon: "🏠", hub: true },
      { label: "原宿", sub: "明治神宮・竹下通", icon: "⛩" },
      { label: "澀谷", sub: "Sky 夜景", icon: "🌃" }
    ],
    tips: ["不經秋葉原", "原宿→澀谷 1 站", "16:40 前離開明治神宮"]
  },
  {
    day: "D3",
    title: "鎌倉・江之島 → 新宿夜景",
    line: "odakyu",
    steps: [
      { label: "中野", sub: "JR", icon: "🏠", hub: true },
      { label: "新宿", sub: "買周遊券", icon: "🎫" },
      { label: "鎌倉", sub: "八幡宮・小町通", icon: "⛩" },
      { label: "江之電", sub: "高校前・江之島", icon: "🌊" },
      { label: "新宿", sub: "夜景・晚餐", icon: "🌃" },
      { label: "中野", sub: "回住宿", icon: "🏠", hub: true }
    ],
    tips: ["回程留新宿吃晚餐", "不經東京車站", "21:30 前回中野"]
  },
  {
    day: "D4",
    title: "谷中 → 神保町 → 住宿旁泡湯",
    line: "local",
    steps: [
      { label: "中野", sub: "出發", icon: "🏠", hub: true },
      { label: "日暮里", sub: "谷中銀座", icon: "🐱" },
      { label: "神保町", sub: "喫茶", icon: "☕" },
      { label: "光明泉", sub: "泡湯必去", icon: "♨" }
    ],
    tips: ["下午回中野換衣", "泡湯後站前晚餐", "週一查錢湯公休"]
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
  { title: "一風堂 中野店", area: "中野", price: "約 ¥900-1,200", bestFor: "D1 抵達拉麵", source: "https://www.ippudo.com/", map: "一風堂 中野" },
  { title: "牛かつもとむら 秋葉原/渋谷", area: "秋葉原/澀谷", price: "約 ¥1,200-1,800", bestFor: "D1 秋葉原或 D2 澀谷晚餐", source: "https://motomura.jp/", map: "牛かつもとむら 秋葉原" },
  { title: "% Arabica 神宮前", area: "原宿", price: "咖啡約 ¥500-700", bestFor: "D2 明治神宮後 IG 咖啡", source: "https://arabicacoffee.jp/", map: "% Arabica Tokyo 神宮前" },
  { title: "Uobei 渋谷道玄坂店", area: "澀谷", price: "約 ¥2,000-3,500", bestFor: "D2 晚餐快食壽司", source: "https://www.uobei.com/", map: "Uobei 渋谷" },
  { title: "Bills 鎌倉", area: "鎌倉", price: "鬆餅/brunch 約 ¥1,500+", bestFor: "D3 小町通旁（可選）", source: "https://billsjapan.com/", map: "Bills 鎌倉" },

  { title: "中野站拉麵橫丁", area: "中野", price: "約 ¥900-1,400", bestFor: "D1 抵達日晚餐", source: "https://www.gotokyo.org/", map: "中野駅 ラーメン" },
  { title: "秋葉原駅ビル拉麵一番街", area: "秋葉原", price: "約 ¥900-1,500", bestFor: "D1 晚上可順便吃", source: "https://www.gotokyo.org/", map: "秋葉原駅 ランチ" },
  { title: "澀谷燒肉（宇田川町一帶）", area: "澀谷", price: "約 ¥4,000-8,000", bestFor: "D2 夜景後必吃燒肉", source: "https://tabelog.com/", map: "渋谷 焼肉" },
  { title: "鎌倉小町通小吃", area: "鎌倉", price: "約 ¥500-1,500", bestFor: "D3 午餐散步", source: "https://www.kamakura-info.jp/", map: "鎌倉 小町通" },
  { title: "江之島海鮮", area: "江之島", price: "約 ¥1,500-3,000", bestFor: "D3 下午茶/晚餐", source: "https://www.fujisawa-kanko.jp/", map: "江の島 海鮮" },
  { title: "谷中銀座 肉まん/草鞋燒", area: "谷中", price: "約 ¥300-800", bestFor: "D4 下町點心", source: "https://www.gotokyo.org/", map: "谷中銀座" },
  { title: "神保町喫茶", area: "神保町", price: "咖啡 ¥600-1,000", bestFor: "D4 午後休息", source: "https://www.gotokyo.org/", map: "神保町 喫茶店" },
  { title: "高圓寺立飲居酒屋", area: "高圓寺", price: "約 ¥3,000-5,000", bestFor: "D4 晚餐", source: "https://tabelog.com/", map: "高円寺 立ち飲み" }
];

const nightList = [
  { title: "澀谷 Sky", type: "展望台", hours: "依預約時段", price: "約 ¥2,700-3,400", route: "澀谷 Scramble Square 14F", source: "https://www.shibuya-sky.com/", note: "D2 夜景主案；需提前購票。" },
  { title: "MIYASHITA PARK 屋上", type: "夜景/酒吧", hours: "依店舗", price: "免費入場；酒吧另計", route: "D2 澀谷 Sky 前後", source: "https://www.shibuya-scramble-square.com/", note: "年輕人愛的複合商場，屋上綠洲拍照。" },
  { title: "秋葉原電気街夜景", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D1 唯一一天", source: "https://www.gotokyo.org/", note: "霓虹與扭蛋，不必購物也可感受氛圍。" },
  { title: "澀谷居酒屋橫丁", type: "居酒屋", hours: "17:00-23:00", price: "約 ¥3,000-6,000", route: "D2 晚餐圈", source: "https://tabelog.com/", note: "周六熱門，建議訂位或早到。" },
  { title: "新宿思い出横丁・都廳夜景", type: "夜景/居酒屋", hours: "D3 19:00-21:30", price: "晚餐約 ¥2,000-4,000", route: "鎌倉回程留新宿", source: "https://www.gotokyo.org/", note: "這趟新宿主排晚上；都廳展望台免費。" },
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
  { title: "D3 新宿晚上", body: "鎌倉回來留 2h 給新宿：思い出横丁、都廳展望台（免費）。21:30 前回中野。" },
  { title: "20 代排隊策略", body: "牛かつもとむら、一風堂熱門時段先排隊再逛；Uobei、扭蛋會館通常不用訂位。" },
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
      { id: "housing-3d", title: "聯絡公寓入住", detail: "ギャラリー平和の森館 101：入住方式、Wi-Fi、垃圾分類、退房時間。" },
      { id: "suica-3d", title: "確認 Suica 可加值", detail: "iPhone 錢包綁定或準備實體卡；台灣先查卡片海外交易。" },
      { id: "cash-3d", title: "兌換 ¥20,000-30,000", detail: "小店、神社、部分拉麵只收現金；面額 ¥1000/500。" },
      { id: "pack-3d", title: "行李稱重", detail: "廉航行李嚴；回程留空間給秋葉原戰利品。" },
      { id: "weather-3d", title: "看 10/25 鎌倉天氣", detail: "大雨改池袋/新宿室內備案（TeamLab、Sunshine City）。" },
      { id: "restaurant-3d", title: "牛かつもとむら / 燒肉訂位（可選）", detail: "D2 周六晚餐熱門；Uobei 通常不用訂。" }
    ]
  },
  {
    phase: "出發當天",
    items: [
      { id: "flight-day", title: "SL394 12:10 起飛", detail: "建議提前 2.5-3 小時到桃園；護照、登機證、行動電源隨身。" },
      { id: "apps-day", title: "下載 App", detail: "Google Maps、Tabelog、Japan Official Travel App、匯率計算機。" },
      { id: "offline-day", title: "Google Maps 離線地圖", detail: "中野、秋葉原、澀谷、鎌倉區域先下載。" },
      { id: "address-day", title: "住宿地址日文截圖", detail: "新井 4-26-2 ギャラリー平和の森館 101；給司機或房東看。" },
      { id: "ics-day", title: "下載本頁 .ics", detail: "澀谷 Sky、鎌倉、10/27 14:00 出發鬧鐘。" }
    ]
  }
];

const checklistItems = [
  { id: "passport", title: "檢查護照效期與機票姓名", detail: "SL394/395 訂位姓名與護照一致；建議效期 6 個月以上。" },
  { id: "shibuya-sky", title: "預約 10/24 澀谷 Sky", detail: "官網搶日落時段；備案澀谷 Hikarie 或地面拍攝。" },
  { id: "suica", title: "準備 Suica/Pasmo 或手機綁定", detail: "入境機場購卡或加值；中野站也可儲值。" },
  { id: "housing", title: "確認公寓入住與退房", detail: "ギャラリー平和の森館 101；日文地址、Wi-Fi、垃圾規則。" },
  { id: "kamakura-pass", title: "記 10/25 買鎌倉周遊券", detail: "新宿小田急；查天氣，颱風備室內方案。" },
  { id: "nex-return", title: "D5 14:00 出發鬧鐘", detail: "N'EX 或 Skyliner；17:25 起飛，目標 15:30 前到 NRT。" },
  { id: "insurance", title: "海外旅遊保險", detail: "醫療、班機延誤、行李遺失。" },
  { id: "cash", title: "準備日幣現金", detail: "¥20,000-30,000；小店與神社只收現金仍常見。" },
  { id: "akihabara", title: "秋葉原購物清單（僅 D1）", detail: "10/23 20:30 起主買；先逛後結帳，之後不再回。" },
  { id: "onsen-d4", title: "查 D4 光明泉／中野湯田公休", detail: "10/26 週一可能公休；確認營業時間、刺青規定，準備 ¥100 硬幣。" },
  { id: "souvenir", title: "伴手禮 D5 早上補貨", detail: "中野站與百貨地下；機場最後補。" },

  { id: "tabelog", title: "Tabelog 帳號 / 收藏店", detail: "牛かつもとむら、居酒屋先加入收藏；周六排隊先看即時等候。" },
  { id: "instagram", title: "存 IG 打卡點", detail: "鎌倉高校前、澀谷 Sky、竹下通、神田明神、江之島燈塔。" },
  { id: "powerbank", title: "行動電源與轉接頭", detail: "日本 100V，台灣電器多可用；行動電源不可托運。" },
  { id: "medicine", title: "常備藥", detail: "腸胃藥、止痛、OK 繃；鎌倉步行多。" },
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
