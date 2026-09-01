# -*- coding: utf-8 -*-
"""Generate Tokyo workbench files from Beijing template runtime section."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BEIJING_JS = Path(r"F:\代碼\s07362022.github.io\beijing\script.js")
BEIJING_HTML = Path(r"F:\代碼\s07362022.github.io\beijing\index.html")
BEIJING_CSS = Path(r"F:\代碼\s07362022.github.io\beijing\styles.css")

TOKYO_DATA = r'''const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

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
    id: "akihabara-d2",
    title: "10/24 秋葉原 + 明治神宮 + 澀谷 Sky",
    start: "20261024T093000",
    end: "20261024T213000",
    location: "秋葉原 / 原宿 / 澀谷",
    description: "10:00 秋葉原主行程 2h → 午餐 → 明治神宮（16:40 前離開）→ 原宿咖啡 → 澀谷 Sky → 澀谷燒肉/居酒屋。",
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
    title: "抵達中野、拉麵、可選晚間秋葉原",
    summary: "抵達日不排硬景點。入境、Suica/Pasmo、入住中野公寓後，先在中野站附近吃拉麵；體力夠可 20:30 後逛秋葉原電気街暖身，或改中野 Broadway 懷舊掃街。",
    stats: ["抵達日", "秋葉原可選", "22:00 收尾"],
    stops: [
      {
        time: "16:30",
        title: "抵達成田 NRT 第1航廈（北）",
        category: "transport",
        status: "confirmed",
        price: "機票已訂；N'EX 中野約 ¥3,070 或 Skyliner+地鐵",
        route: "NRT T1 北 → 中野站",
        eta: "入境 60-90 分；到住宿約 75-100 分",
        description: "泰國獅航 SL394，TPE 12:10 → NRT 16:30。建議入境後在機場買 Suica/Pasmo 或用手機錢包綁定。",
        transit: "初到建議 N'EX 直達中野（約 80 分）或 Skyliner 到日暮里轉 JR 總武線。",
        booking: "確認 SL394、行李、入境卡與住宿地址日文版截圖。",
        note: "住宿：中野區新井 4-26-2 ギャラリー平和の森館 101。Google Maps 先存「中野站」與公寓 pin。",
        place: "成田國際機場 第1旅客航廈",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Narita_International_Airport_Terminal_1.jpg/900px-Narita_International_Airport_Terminal_1.jpg"
      },
      {
        time: "18:30",
        title: "入住ギャラリー平和の森館 101",
        category: "rest",
        status: "confirmed",
        price: "住宿已訂",
        route: "中野站北口步行約 8-12 分",
        eta: "辦入住 15-20 分",
        description: "中野當地公寓，適合連住 4 晚當基地。附近便利店、中野 Broadway、拉麵店密集。",
        transit: "之後每天從中野站出發，JR 中央線/東京 Metro 東西線都方便。",
        booking: "確認入住時間、鑰匙或密碼箱、垃圾分類規則。",
        note: "把隔天小包整理好：交通卡、行動電源、薄外套、雨傘。",
        place: "ギャラリー平和の森館 中野"
      },
      {
        time: "19:30",
        title: "中野站附近拉麵（抵達第一餐）",
        category: "food",
        status: "verified",
        price: "約 ¥900-1,400/人",
        route: "住宿 → 中野站南口/北口拉麵街",
        eta: "步行 5-15 分",
        description: "中野是拉麵激戰區。可選「中野站拉麵橫丁」或排隊名店；抵達日選不用訂位的店最穩。",
        transit: "步行即可，第一天不要轉太多車。",
        booking: "不需預約；熱門店可能排隊 15-30 分。",
        note: "七年沒來可先試醬油或鹽味拉麵，份量選小（小盛）留肚子給秋葉原。",
        place: "中野駅 ラーメン"
      },
      {
        time: "20:30",
        title: "秋葉原電気街（可選・第一晚暖身）",
        category: "theme",
        status: "optional",
        price: "逛街免費；扭蛋/中古遊戲依個人",
        route: "中野 → JR 總武線 2 站 → 秋葉原",
        eta: "車程約 10 分；逛 1-1.5h",
        description: "若體力夠，第一晚先感受電気街霓虹與扭蛋、中古遊戲氛圍。主行程在明天上午，今晚不必買齊。",
        transit: "JR 中野 → 秋葉原。23:00 前回中野較舒服。",
        booking: "不需預約。",
        note: "可逛 Radio Kaikan、扭蛋會館；太累的話改中野 Broadway 懷舊店就好。",
        place: "秋葉原電気街",
        tags: ["秋葉原", "生活感"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Akihabara_Electric_Town_2018.jpg/900px-Akihabara_Electric_Town_2018.jpg"
      },
      {
        time: "21:45",
        title: "中野 Broadway（備選・懷舊掃街）",
        category: "hutong",
        status: "optional",
        price: "免費逛；中古玩具/唱片依個人",
        route: "住宿旁或秋葉原回中野後",
        eta: "步行 10 分；逛 45-60 分",
        description: "昭和懷舊商場，二手錄音帶、模型、錶店。比秋葉原更「住家隔壁」的趣味，適合不想人擠人的夜晚。",
        transit: "完全步行圈。",
        booking: "不需預約；部分店 20:00 後陸續打烊。",
        note: "與秋葉原二選一即可，不要兩邊都硬撐。",
        place: "中野ブロードウェイ"
      }
    ]
  },
  {
    id: "d2",
    date: "10/24（六）",
    title: "秋葉原主行程、明治神宮、澀谷 Sky 夜景",
    summary: "秋葉原排在前兩天的核心日：上午專心逛 2 小時電気街與生活感小店，午後轉原宿明治神宮，傍晚澀谷 Sky 看夜景，晚餐澀谷燒肉或居酒屋。",
    stats: ["10:00出門", "秋葉原2h", "夜景主案"],
    stops: [
      {
        time: "10:00",
        title: "秋葉原電気街主行程",
        category: "theme",
        status: "planned",
        price: "逛街免費",
        route: "中野 → 秋葉原 → 中央通り → 昭和通り",
        eta: "車程 10 分；停留 2h",
        description: "主逛 Radio Kaikan（中古遊戲/模型）、扭蛋會館、多慶屋周邊。想更生活感可穿插「神田古書店街」或「合羽橋道具街」方向（步行 15 分圈）。",
        transit: "JR 中野 → 秋葉原。",
        booking: "不需預約。",
        note: "週六人多，10:00 開門時段較舒服。先逛再買，最後 30 分才結帳。",
        place: "秋葉原電気街",
        tags: ["秋葉原", "必去"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Akihabara_Electric_Town_2018.jpg/900px-Akihabara_Electric_Town_2018.jpg"
      },
      {
        time: "10:45",
        title: "スーパーポジション（喫茶・立食）",
        category: "food",
        status: "verified",
        price: "咖啡/輕食約 ¥500-900",
        route: "秋葉原站周邊",
        eta: "15-30 分",
        description: "秋葉原少數老派喫茶氛圍店，適合短暫歇腳。若客滿可改站前星巴克或吉野家旁小巷咖啡。",
        transit: "步行。",
        booking: "不需預約。",
        note: "生活感停點：觀察在地上班族與宅文化交錯。",
        place: "スーパーポジション 秋葉原",
        tags: ["喫茶", "生活感"]
      },
      {
        time: "12:00",
        title: "秋葉原午餐（拉麵/牛丼/咖哩）",
        category: "food",
        status: "planned",
        price: "約 ¥900-1,500/人",
        route: "秋葉原站周邊",
        eta: "45-60 分",
        description: "車站周邊選一間不用排太久隊的店。想居酒屋氛圍可找「秋葉原居酒屋橫丁」但周六中午選項較少。",
        transit: "步行。",
        booking: "一般不需預約。",
        note: "吃完直接往原宿移動，預留 13:30 前上車。",
        place: "秋葉原駅 ランチ"
      },
      {
        time: "13:30",
        title: "移動：秋葉原 → 原宿（明治神宮）",
        category: "transport",
        status: "planned",
        price: "JR 約 ¥200",
        route: "秋葉原 → 新宿/代々木 → 原宿",
        eta: "車程 25-35 分",
        description: "搭 JR 山手線或中央線轉乘。週六下午山手線較擠，可改 Metro 丸之內線。",
        transit: "依 Google Maps 當下月台資訊。",
        booking: "不需預約。",
        note: "明治神宮 10 月日落前約 16:40 停止進入，這天時間剛好但不宜再拖。",
        place: "原宿駅"
      },
      {
        time: "14:15",
        title: "明治神宮",
        category: "heritage",
        status: "needs",
        price: "免費參拜",
        route: "原宿站 → 鳥居 → 本殿 → 神聖酒",
        eta: "停留 1.5-2h",
        description: "必去。森林步道很療癒，建議走表參道鳥居進。10 月約 16:40 停止入內，17:00 關門（以官網為準）。",
        transit: "步行為主。",
        booking: "不需門票；婚禮儀式時部分區域管制。",
        note: "16:40 前離開；若想寫御守，排隊預留 20 分。",
        place: "明治神宮",
        tags: ["必去"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Torii_gate_at_Meiji_Shrine.jpg/900px-Torii_gate_at_Meiji_Shrine.jpg"
      },
      {
        time: "16:15",
        title: "表參道 / 原宿咖啡休息",
        category: "hutong",
        status: "optional",
        price: "咖啡約 ¥500-800",
        route: "明治神宮 → 表參道交差點",
        eta: "30-45 分",
        description: "Blue Bottle 表參道或神宮前小巷咖啡。坐下回血，不要硬逛完表參道全線。",
        transit: "步行。",
        booking: "不需預約。",
        note: "為澀谷 Sky 保留體力。",
        place: "表參道カフェ"
      },
      {
        time: "17:30",
        title: "澀谷 Sky 夜景",
        category: "night",
        status: "needs",
        price: "官網約 ¥2,700-3,400（日落時段較貴，以官網為準）",
        route: "原宿/表參道 → 澀谷 → Shibuya Scramble Square 14F",
        eta: "停留 1-1.5h",
        description: "夜景主案。360 度露天展望，建議預約日落前後時段。天氣差可改澀谷十字路口地面拍照 + 百貨頂樓備案。",
        transit: "JR 原宿 → 澀谷 1 站。",
        booking: "https://www.shibuya-sky.com/ 提前線上購票，實名入場。",
        note: "風大帶外套；包包可能要寄櫃。",
        place: "SHIBUYA SKY",
        tags: ["必去", "夜景"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shibuya_Scramble_Square_2019.jpg/900px-Shibuya_Scramble_Square_2019.jpg"
      },
      {
        time: "19:30",
        title: "澀谷燒肉或居酒屋晚餐",
        category: "food",
        status: "planned",
        price: "燒肉約 ¥4,000-8,000；居酒屋約 ¥3,000-5,000",
        route: "澀谷站周邊",
        eta: "90-120 分",
        description: "必吃燒肉/居酒屋。澀谷橫丁或宇田川町一帶選店；周六建議 18:00 前先線上訂位或 19:00 前到店。",
        transit: "步行；回中野 JR 約 15 分。",
        booking: "熱門燒肉建議 Tabelo/Google 訂位。",
        note: "喝酒後用 JR 回中野，避免錯過末班車（約 00:30 前後）。",
        place: "渋谷 焼肉 居酒屋"
      }
    ]
  },
  {
    id: "d3",
    date: "10/25（日）",
    title: "鎌倉・江之島一日",
    summary: "必去海邊一日。建議 10:00 出門，新宿購江之島・鎌倉周遊券，走鶴岡八幡宮 → 小町通 → 江之電 → 江之島。體力夠再加鎌倉大佛。",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tsurugaoka_Hachimangu_2018.jpg/900px-Tsurugaoka_Hachimangu_2018.jpg"
      },
      {
        time: "14:00",
        title: "江之電（鎌倉高校前/長谷/江之島）",
        category: "transport",
        status: "planned",
        price: "含在周遊券",
        route: "鎌倉 → 長谷 → 江之島",
        eta: "每站 30-60 分",
        description: "經典海景電車。鎌倉高校前站拍照要注意交通安全；長谷可看大佛（入場約 ¥300）。",
        transit: "江之電。",
        booking: "不需預約。",
        note: "想省體力可跳過大佛，直衝江之島。",
        place: "江ノ電 鎌倉高校前"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Enoshima_2018.jpg/900px-Enoshima_2018.jpg"
      },
      {
        time: "19:00",
        title: "返回中野（晚餐便利店或站前簡餐）",
        category: "rest",
        status: "planned",
        price: "交通含在周遊券回程段",
        route: "藤沢/鎌倉 → 新宿 → 中野",
        eta: "車程 60-75 分",
        description: "一日步行量大，回程可在新宿站內便當或回中野後便利店結束。",
        transit: "小田急 → JR。",
        booking: "不需預約。",
        note: "泡腳、拉伸；隔天是生活感市區日，可睡飽一點。",
        place: "中野駅"
      }
    ]
  },
  {
    id: "d4",
    date: "10/26（一）",
    title: "谷中銀座、神保町喫茶、高圓寺立飲",
    summary: "不跑大景點，專心體驗「像住在東京」的一天：下町散步、二手書街喫茶、高圓寺立飲與居酒屋；想泡湯可回中野附近錢湯。",
    stats: ["生活感", "10:00出門", "可選錢湯"],
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yanaka_Ginza_2019.jpg/900px-Yanaka_Ginza_2019.jpg"
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
        time: "15:30",
        title: "高圓寺古著與小巷",
        category: "theme",
        status: "planned",
        price: "免費逛",
        route: "神保町 → 高圓寺",
        eta: "車程 30 分；逛 1.5h",
        description: "古著、唱片、小劇場氛圍。比澀谷/原宿更在地，適合七年後看東京年輕人文化。",
        transit: "JR 總武線 高圓寺站。",
        booking: "不需預約。",
        note: "週一有些小店休，當作散步即可。",
        place: "高円寺"
      },
      {
        time: "18:00",
        title: "高圓寺立飲 / 居酒屋",
        category: "night",
        status: "planned",
        price: "約 ¥3,000-5,000/人",
        route: "高圓寺站北口小巷",
        eta: "90-120 分",
        description: "立飲居酒屋或串燒小館，體驗下班後一杯的節奏。",
        transit: "步行；回中野 JR 1 站。",
        booking: "Walk-in 為主；18:00 前到較易有位。",
        note: "必吃居酒屋日；控制酒量，隔天要整理行李。",
        place: "高円寺 立ち飲み"
      },
      {
        time: "21:00",
        title: "中野湯田中野温泉（可選錢湯）",
        category: "wellness",
        status: "optional",
        price: "約 ¥500-900（以現場為準）",
        route: "中野站步行圈",
        eta: "60-90 分",
        description: "若想體驗在地錢湯，回住宿附近泡湯放鬆。刺青政策各店不同，先查官網。",
        transit: "步行或公車。",
        booking: "不需預約。",
        note: "錢湯是生活感亮點；不想泡就早點回公寓打包。",
        place: "中野湯田 中野温泉"
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

const routeCards = [
  { title: "中野 ⇄ 秋葉原", price: "JR 總武線約 ¥160-200", route: "中野 → 秋葉原（2 站）", eta: "約 10 分", note: "秋葉原排 D1 晚 + D2 上午，最常用路線。" },
  { title: "中野 ⇄ 原宿/澀谷", price: "JR 約 ¥200-260", route: "中野 → 新宿/代々木 → 原宿/澀谷", eta: "25-35 分", note: "D2 明治神宮 + 澀谷 Sky 主線。" },
  { title: "中野 ⇄ 新宿（鎌倉起點）", price: "JR 約 ¥160", route: "中野 → 新宿", eta: "約 15 分", note: "D3 買江之島・鎌倉周遊券。" },
  { title: "中野 ⇄ 日暮里（谷中）", price: "JR 約 ¥160-200", route: "中野 → 日暮里", eta: "約 20 分", note: "D4 谷中銀座。" },
  { title: "中野 ⇄ 成田 NRT", price: "N'EX 約 ¥3,070", route: "中野 → 成田機場", eta: "約 80 分", note: "D1 入境與 D5 返程；可買指定席。" },
  { title: "深夜回中野", price: "JR 末班約 00:30 前後", route: "澀谷/新宿 → 中野", eta: "15-25 分", note: "喝酒後注意末班車；錯過就計程車約 ¥5,000-7,000。" }
];

const expertAudit = [
  { title: "總評：秋葉原在前兩天、體力分配合理", score: "強度 7/10", body: "D1 晚 + D2 上午完成秋葉原；D2 下午明治神宮與澀谷 Sky；D3 鎌倉全日；D4 生活感；D5 返程。每天都有撤退點。" },
  { title: "秋葉原：已排前兩天", score: "已調整", body: "依你要求，主行程在 10/24 10:00-12:00，可選暖身在 10/23 晚。不再放 D4。" },
  { title: "D2 時間緊：明治 16:40 前離開", score: "偏緊", body: "秋葉原 2h + 午餐 + 移動後，明治神宮只剩約 2h。表參道可縮短。" },
  { title: "澀谷 Sky：必須先預約", score: "高優先", body: "周六日落時段熱門。建議 10/10 前後搶票，並預留入場排隊 20-30 分。" },
  { title: "D3 鎌倉：週日人多", score: "中等", body: "江之電與小町通排隊正常。想拍照就接受人潮，或 11:00 前抵鎌倉。" },
  { title: "D4 週一：部分店休", score: "注意", body: "谷中/高圓寺週一休店較多，行程以散步與喫茶為主，不強求每店都開。" },
  { title: "D5 14:00 出發", score: "已加緩衝", body: "17:25 起飛，14:00 從中野出發搭 N'EX，目標 15:30-16:00 到 NRT，留足報到與安檢。" },
  { title: "交通教學：JR 為主", score: "實用", body: "中野是絕佳基地。Suica 先儲值 ¥5,000；跨區趕時間用 Google Maps 看月台。" }
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
  { title: "中野站拉麵橫丁", area: "中野", price: "約 ¥900-1,400", bestFor: "D1 抵達日晚餐", source: "https://www.gotokyo.org/", map: "中野駅 ラーメン" },
  { title: "秋葉原午餐（駅周邊）", area: "秋葉原", price: "約 ¥900-1,500", bestFor: "D2 上午後", source: "https://www.gotokyo.org/", map: "秋葉原駅 ランチ" },
  { title: "澀谷燒肉（宇田川町一帶）", area: "澀谷", price: "約 ¥4,000-8,000", bestFor: "D2 夜景後必吃燒肉", source: "https://tabelog.com/", map: "渋谷 焼肉" },
  { title: "鎌倉小町通小吃", area: "鎌倉", price: "約 ¥500-1,500", bestFor: "D3 午餐散步", source: "https://www.kamakura-info.jp/", map: "鎌倉 小町通" },
  { title: "江之島海鮮", area: "江之島", price: "約 ¥1,500-3,000", bestFor: "D3 下午茶/晚餐", source: "https://www.fujisawa-kanko.jp/", map: "江の島 海鮮" },
  { title: "谷中銀座 肉まん/草鞋燒", area: "谷中", price: "約 ¥300-800", bestFor: "D4 下町點心", source: "https://www.gotokyo.org/", map: "谷中銀座" },
  { title: "神保町喫茶", area: "神保町", price: "咖啡 ¥600-1,000", bestFor: "D4 午後休息", source: "https://www.gotokyo.org/", map: "神保町 喫茶店" },
  { title: "高圓寺立飲居酒屋", area: "高圓寺", price: "約 ¥3,000-5,000", bestFor: "D4 晚餐", source: "https://tabelog.com/", map: "高円寺 立ち飲み" }
];

const nightList = [
  { title: "澀谷 Sky", type: "展望台", hours: "依預約時段", price: "約 ¥2,700-3,400", route: "澀谷 Scramble Square 14F", source: "https://www.shibuya-sky.com/", note: "D2 夜景主案；需提前購票。" },
  { title: "秋葉原電気街夜景", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D1 可選", source: "https://www.gotokyo.org/", note: "霓虹與扭蛋，不必購物也可感受氛圍。" },
  { title: "澀谷居酒屋橫丁", type: "居酒屋", hours: "17:00-23:00", price: "約 ¥3,000-6,000", route: "D2 晚餐圈", source: "https://tabelog.com/", note: "周六熱門，建議訂位或早到。" },
  { title: "中野湯田 中野温泉", type: "錢湯", hours: "依官網", price: "約 ¥500-900", route: "D4 可選", source: "https://www.gotokyo.org/", note: "在地生活感；刺青規定先查。" }
];

const tips = [
  { title: "10:00 出門節奏", body: "多數日 10:00 離開公寓，每點 1-2 小時。D5 例外要 14:00 去機場。" },
  { title: "Suica 先儲值", body: "機場或中野站儲值 ¥5,000。7-11、地鐵都能加值。" },
  { title: "明治神宮關門", body: "10 月約 16:40 停止入內。D2 秋葉原別逛過頭。" },
  { title: "鎌倉颱風備案", body: "大雨改池袋/新宿室內 + 拉麵/咖啡，周遊券可改日（視票種規定）。" },
  { title: "垃圾帶回", body: "街上垃圾桶少。便利店可丟小垃圾，公寓依房東分類。" },
  { title: "七年後的東京", body: "現金仍重要、預約制變多（澀谷 Sky、部分餐廳）。Tabelog/Google 訂位先習慣。" }
];

const researchSources = [
  { type: "Official", title: "SHIBUYA SKY 官網", url: "https://www.shibuya-sky.com/", takeaways: ["需提前線上購票與時段入場。", "日落時段最熱門，建議出發前兩週關注開賣。"] },
  { type: "Official", title: "明治神宮 參拜案內", url: "https://www.meijijingu.or.jp/", takeaways: ["開門 5:00-6:40（依月而异），關門 16:30-18:30。", "10 月日落早，安排 16:40 前離開較穩。"] },
  { type: "Transport", title: "小田急 江之島・鎌倉周遊券", url: "https://www.odakyu.jp/", takeaways: ["含小田急往返與江之電不限次。", "價格每年調整，出發前再確認。"] },
  { type: "Transport", title: "JR East N'EX", url: "https://www.jreast.co.jp/", takeaways: ["成田 ↔ 中野有 N'EX 直達。", "可購指定席；返程 D5 建議預留 3 小時到機場。"] },
  { type: "Guide", title: "GO TOKYO 官方旅遊", url: "https://www.gotokyo.org/", takeaways: ["東京官方活動與區域介紹。", "可補週邊營業時間與活動。"] },
  { type: "Area", title: "鎌倉市観光", url: "https://www.kamakura-info.jp/", takeaways: ["鶴岡八幡宮、小町通、江之電路線。", "週末人潮多，早出發。"] }
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
  { id: "akihabara", title: "秋葉原購物清單（可選）", detail: "D1 晚暖身 + D2 上午主買；先逛後結帳。" },
  { id: "souvenir", title: "伴手禮 D5 早上補貨", detail: "中野站與百貨地下；機場最後補。" }
];
'''

RUNTIME_PATCH = r'''
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
  auditGrid: document.querySelector("#auditGrid"),
  budgetGrid: document.querySelector("#budgetGrid"),
  taiwanGrid: document.querySelector("#taiwanGrid"),
  foodGrid: document.querySelector("#foodGrid"),
  nightGrid: document.querySelector("#nightGrid"),
  tipsGrid: document.querySelector("#tipsGrid")
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

function renderAuditGrid() {
  renderCardGrid(elements.auditGrid, expertAudit, (item) => `
    <article class="info-card audit-card">
      <span class="score">${item.score}</span>
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
renderNightGrid();
renderTips();
renderSources();
renderReminderList();
renderChecklist();
hydrateNotes();
bindEvents();
updateOfflineStatus("線上版；可下載 .ics 行事曆", true);
'''

def patch_html(html: str) -> str:
    replacements = [
        ('content="2026 北京自由行手機出發包', 'content="2026 東京自由行手機出發包'),
        ('content="#2d332f"', 'content="#2c3e5a"'),
        ('apple-mobile-web-app-title" content="北京出發包"', 'apple-mobile-web-app-title" content="東京出發包"'),
        ('<title>2026 北京自由行出發包</title>', '<title>2026 東京自由行出發包</title>'),
        ('    <link rel="manifest" href="manifest.webmanifest" />\n    <link rel="apple-touch-icon" href="icon.svg" />\n', ''),
        ("fill='%232d332f'/%3E%3Ctext x='32' y='43' text-anchor='middle' font-size='34' fill='%23f8efe2' font-family='Georgia'%3E北%3C/text%3E",
         "fill='%232c3e5a'/%3E%3Ctext x='32' y='43' text-anchor='middle' font-size='34' fill='%23f7f3eb' font-family='Georgia'%3E東%3C/text%3E"),
        ('<span class="brand-mark">北</span>', '<span class="brand-mark">東</span>'),
        ('<strong>北京 6 晚</strong>\n            <small>9/23-9/29</small>',
         '<strong>東京 4 晚</strong>\n            <small>10/23-10/27</small>'),
        ('<a href="#bath">第六晚湯泉</a>\n', ''),
        ('<strong>CA186 / CA185</strong>\n          <span>TPE ⇄ PEK 首都機場 T3</span>',
         '<strong>SL394 / SL395</strong>\n          <span>TPE ⇄ NRT 成田第1航廈</span>'),
        ('<strong>北京傳媒大學管莊地鐵站亞朵酒店</strong>\n          <span>9/23-9/28，共 5 晚</span>',
         '<strong>ギャラリー平和の森館 101（中野）</strong>\n          <span>10/23-10/27，共 4 晚</span>'),
        ('<section class="mini-card alert">\n          <p class="label">最後一晚</p>\n          <strong>9/28 湯泉過夜</strong>\n          <span>9/29 05:10 前後出發去 PEK</span>\n        </section>\n\n', ''),
        ('<strong>09:30-10:00 出發</strong>\n          <span>9/24 KKday 06:15 出門；其餘日 09:30-10:00</span>',
         '<strong>10:00 出門</strong>\n          <span>10/27 返程日 14:00 出發去 NRT</span>'),
        ('<h1>北京 6 晚：KKday 長城園林、故宮、胡同咖啡與湯泉。</h1>',
         '<h1>東京 4 晚：秋葉原、明治神宮、鎌倉江之島與澀谷 Sky。</h1>'),
        ('另可下載 .ics，把故宮搶票、KKday 9/24 一日團、胡同咖啡伴手禮、湯泉與返程提醒加入行事曆。',
         '另可下載 .ics，把澀谷 Sky 預約、鎌倉周遊券、秋葉原主行程與返程提醒加入行事曆。'),
        ('<strong>9/23（三）13:00-16:15</strong>\n              <small>中國國際航空 CA186，TPE → PEK</small>',
         '<strong>10/23（五）12:10-16:30</strong>\n              <small>泰國獅航 SL394，TPE → NRT</small>'),
        ('<strong>9/29（二）08:30-11:40</strong>\n              <small>中國國際航空 CA185，PEK → TPE</small>',
         '<strong>10/27（二）17:25-20:30</strong>\n              <small>泰國獅航 SL395，NRT → TPE</small>'),
        ('<strong>東邊住宿，中軸線分日攻</strong>\n              <small>管莊適合東邊線；市中心景點集中成整日。</small>',
         '<strong>中野基地，秋葉原排前兩天</strong>\n              <small>D1 晚可選 + D2 上午主行程；鎌倉獨立一日。</small>'),
        ('<strong>9/24 KKday、9/27 胡同咖啡</strong>\n              <small>下載 .ics 後，手機行事曆會提醒搶票、tour、咖啡伴手禮、湯泉和返程。</small>',
         '<strong>澀谷 Sky、鎌倉、返程</strong>\n              <small>下載 .ics 後，手機行事曆會提醒預約、一日遊與 14:00 出發去機場。</small>'),
        ('Forbidden%20City', 'Akihabara_Electric_Town_2018'),
        ('從景山俯瞰北京故宮', '秋葉原電気街'),
        ('故宮與景山', '秋葉原'),
        ('Mutianyu%20Great%20Wall', 'Torii_gate_at_Meiji_Shrine'),
        ('北京慕田峪長城', '明治神宮鳥居'),
        ('慕田峪長城', '明治神宮'),
        ('Qianmen%20Street', 'Shibuya_Scramble_Square_2019'),
        ('北京前門與胡同街區', '澀谷 Scramble Square'),
        ('前門與北京坊', '澀谷 Sky'),
        ('Beijing_798_Art_District', 'Enoshima_2018'),
        ('北京 798 藝術區入口', '江之島海岸'),
        ('798 藝術區', '鎌倉・江之島'),
        ('包含故宮搶票、KKday 一日遊、胡同咖啡伴手禮、湯泉過夜與返程鬧鐘。',
         '包含澀谷 Sky 預約、鎌倉周遊券、秋葉原主行程與返程提醒。'),
        ('<article class="info-card">\n              <h3>加到手機桌面</h3>\n              <p>開啟本頁後加入主畫面。之後即使沒有網路，也能看行程、勾清單、寫備註。</p>\n            </article>\n', ''),
        ('等離線狀態變成已快取，再測一次行事曆下載。', '先下載 .ics 測試行事曆提醒是否正常。'),
        ('<span class="soft-badge" id="offlineStatus">離線快取準備中</span>',
         '<span class="soft-badge ready" id="offlineStatus">可下載 .ics</span>'),
        ('地鐵優先；跨區/深夜用 DD', 'JR 為主；成田用 N\'EX'),
        ('以 1 RMB ≈ NT$4.8 粗估', '以 1 JPY ≈ NT$0.22 粗估'),
        ('台灣人赴大陸出發前提醒', '台灣人赴日出發前提醒'),
        ('證件 / 支付 / 網路 / 安全', '護照 / Suica / 預約 / 保險'),
    ]
    for old, new in replacements:
        html = html.replace(old, new)
    # Replace bath section with life section
    bath_start = html.find('<section class="bath-section" id="bath">')
    bath_end = html.find('</section>', html.find('</div>\n        </section>', bath_start)) + len('</section>')
    if bath_start > 0:
        life_section = '''<section class="bath-section" id="life">
          <div class="section-heading">
            <div>
              <p class="eyebrow">生活感</p>
              <h2>喫茶、立飲、錢湯與商店街</h2>
            </div>
            <span class="soft-badge">秋葉原已排 D1 晚 + D2 上午</span>
          </div>

          <div class="bath-grid">
            <article class="recommend-card">
              <span class="recommend-label">秋葉原</span>
              <h3>電気街 + 喫茶 + 中古遊戲</h3>
              <p>
                D1 20:30 可選暖身，D2 10:00-12:00 主行程。Radio Kaikan、扭蛋會館、多慶屋周邊；
                穿插超級ポジション等喫茶，比觀光客路線更有七年後重訪的熟悉感。
              </p>
            </article>

            <article class="option-card">
              <h3>谷中銀座 + 神保町喫茶（D4）</h3>
              <p>
                下町肉丸與草鞋燒，轉神保町古書街喝咖啡。週一部分店休，以散步為主。
              </p>
            </article>

            <article class="option-card">
              <h3>高圓寺立飲 + 中野錢湯（D4 晚）</h3>
              <p>
                立飲居酒屋體驗下班一杯；可選中野湯田泡湯。刺青政策各店不同，出發前查官網。
              </p>
            </article>
          </div>
        </section>'''
        # simpler: find bath section end by next food-section
        food_idx = html.find('<section class="food-section"', bath_start)
        if food_idx > 0:
            html = html[:bath_start] + life_section + '\n\n        ' + html[food_idx:]
    html = html.replace('資料更新：2026-08-30。景點營業時間、票價、天安門/故宮預約、KKday 集合通知、咖啡餐廳營業、伴手禮店與湯泉過夜規則請在出發前再次確認。',
                        '資料更新：2026-09-02。澀谷 Sky 票價與時段、明治神宮關門時間、鎌倉周遊券價格、餐廳營業與航班資訊請在出發前再次確認。')
    html = html.replace('夜生活、酒吧、Club、養生館', '夜景、居酒屋、錢湯')
    html = html.replace('行前通知與北京習慣', '行前通知與東京習慣')
    return html


def patch_css(css: str) -> str:
    css = css.replace('--ink: #232823;', '--ink: #1f2836;')
    css = css.replace('--paper: #f5efe4;', '--paper: #f7f3eb;')
    css = css.replace('--panel: #fffaf1;', '--panel: #fffdf8;')
    css = css.replace('--panel-strong: #f7ead8;', '--panel-strong: #efe6d6;')
    css = css.replace('--line: #d8ccba;', '--line: #d9cfc0;')
    css = css.replace('--charcoal: #2d332f;', '--charcoal: #2c3e5a;')
    css = css.replace('--cypress: #546b5a;', '--cypress: #3d5a6e;')
    css = css.replace('--lake: #2d6f7a;', '--lake: #2c3e5a;')
    css = css.replace('--brick: #b8493a;', '--brick: #a65d4e;')
    css = css.replace('--gold: #b8862e;', '--gold: #c4a574;')
    css = css.replace('rgba(45, 51, 47,', 'rgba(44, 62, 90,')
    return css


def main():
    (ROOT / "script.js").write_text(TOKYO_DATA + RUNTIME_PATCH, encoding="utf-8")
    html = BEIJING_HTML.read_text(encoding="utf-8")
    (ROOT / "index.html").write_text(patch_html(html), encoding="utf-8")
    css = BEIJING_CSS.read_text(encoding="utf-8")
    (ROOT / "styles.css").write_text(patch_css(css), encoding="utf-8")
    # standalone ics
    from datetime import datetime
    reminders = [
        ("shibuya-sky-book", "預約澀谷 Sky 日落時段", "20261010T200000", "20261010T203000", "SHIBUYA SKY 官網", "10/24 傍晚主案，提前約兩週搶票。"),
        ("kamakura-prep", "確認鎌倉周遊券", "20261024T200000", "20261024T203000", "新宿小田急", "10/25 一日遊。"),
        ("return-airport", "出發去 NRT", "20261027T140000", "20261027T153000", "成田機場", "14:00 從中野出發。"),
        ("return-flight", "SL395 回台北", "20261027T172500", "20261027T203000", "NRT T1", "17:25 起飛。"),
    ]
    stamp = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
    lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//AIBO2//Tokyo//ZH", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "X-WR-CALNAME:東京出發包", "X-WR-TIMEZONE:Asia/Tokyo"]
    for uid, title, start, end, loc, desc in reminders:
        lines += ["BEGIN:VEVENT", f"UID:{uid}@tokyo", f"DTSTAMP:{stamp}", f"DTSTART;TZID=Asia/Tokyo:{start}", f"DTEND;TZID=Asia/Tokyo:{end}", f"SUMMARY:{title}", f"LOCATION:{loc}", f"DESCRIPTION:{desc}", "END:VEVENT"]
    lines.append("END:VCALENDAR")
    (ROOT / "tokyo-departure-pack.ics").write_text("\r\n".join(lines) + "\r\n", encoding="utf-8")
    print("OK:", ROOT)


if __name__ == "__main__":
    main()
