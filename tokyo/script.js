/** Local images in images/. Works offline and on GitHub Pages. */
const IMAGES = {
  narita: "images/narita.jpg",
  akihabara: "images/akihabara.jpg",
  meiji: "images/meiji.jpg",
  shibuya: "images/shibuya.jpg",
  kamakura: "images/kamakura.jpg",
  enoshima: "images/enoshima.jpg",
  takeshita: "images/takeshita.jpg",
  metroZh: "images/metroZh.png",
  yamanote: "images/yamanote.png",
  greaterTokyo: "images/greaterTokyo.png",
  nexTrain: "images/nexTrain.jpg",
  suica: "images/suica.png",
  ticketGate: "images/ticketGate.jpg",
  shinjuku: "images/shinjuku.jpg",
};
const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const calendarReminders = [
  {
    "id": "packing-d0",
    "title": "D0 打包・回覆易遊網同意 SL394 改 17:05",
    "start": "20261023T200000",
    "end": "20261023T213000",
    "location": "台灣・家中",
    "description": "帶折傘、保暖衣物。",
    "alarms": [
      60
    ]
  },
  {
    "id": "outbound-flight",
    "title": "SL394 桃園 → 成田（台灣 17:05 起飛）",
    "start": "20261024T180500",
    "end": "20261024T212500",
    "location": "桃園國際機場 第一航廈",
    "description": "日本時間 18:05＝台灣 17:05；21:25 抵達 NRT T1N。",
    "alarms": [
      1440,
      300
    ]
  },
  {
    "id": "checkin-numabukuro",
    "title": "沼袋入住（深夜）",
    "start": "20261025T001500",
    "end": "20261025T004500",
    "location": "東京都中野区新井4-26-2 101",
    "description": "確認碼 HMPWSSD3ZE。",
    "alarms": [
      60
    ]
  },
  {
    "id": "indoor-day",
    "title": "雨天室內日：池袋 Sunshine → 秋葉原",
    "start": "20261026T100000",
    "end": "20261026T210000",
    "location": "サンシャインシティ",
    "description": "預報整天雨。",
    "alarms": [
      60
    ]
  },
  {
    "id": "move-day",
    "title": "退房沼袋 11:00 → 入谷入住 15:00",
    "start": "20261027T101500",
    "end": "20261027T153000",
    "location": "東京都台東区北上野2-23-2",
    "description": "確認碼 HM5N242T99，Yoshi +81 80-3490-6745。",
    "alarms": [
      720,
      30
    ]
  },
  {
    "id": "fuji-day",
    "title": "河口湖一日（07:30 出門、Busta 新宿 08:15-08:35）",
    "start": "20261028T073000",
    "end": "20261028T190000",
    "location": "バスタ新宿 / 河口湖",
    "description": "主題看富士（紅葉祭 11/7-29）；巴士來回現在就訂。",
    "alarms": [
      720,
      60
    ]
  },
  {
    "id": "kamakura-day",
    "title": "鎌倉・江之島 → 有樂町 新日の基",
    "start": "20261029T100000",
    "end": "20261029T203000",
    "location": "鎌倉 / 江の島 / 有楽町",
    "description": "傍晚可能下雨；新日の基 14:00 後電話訂位。",
    "alarms": [
      720,
      60
    ]
  },
  {
    "id": "checkout-ueno",
    "title": "入谷退房 10:00",
    "start": "20261030T093000",
    "end": "20261030T100000",
    "location": "東京都台東区北上野2-23-2",
    "description": "雨天叫計程車到京成上野。",
    "alarms": [
      60,
      15
    ]
  },
  {
    "id": "skyliner-return",
    "title": "Skyliner 京成上野 13:20 → 成田",
    "start": "20261030T132000",
    "end": "20261030T140300",
    "location": "京成上野駅",
    "description": "15:00 前完成報到。",
    "alarms": [
      60,
      15
    ]
  },
  {
    "id": "return-flight",
    "title": "SL395 成田 NRT → 桃園 TPE",
    "start": "20261030T172500",
    "end": "20261030T212000",
    "location": "成田國際機場 第1航廈",
    "description": "NRT 17:25 → TPE 20:20（台灣時間）。",
    "alarms": [
      180,
      60
    ]
  }
];

const itinerary = [
  {
    "id": "d0",
    "date": "10/23（五）",
    "title": "台灣準備日：確認去程改 17:05、打包",
    "summary": "去程 SL394 改 17:05 起飛、21:25 抵成田；需上易遊網『聯絡客服』回覆同意。10/24-26 東京預報有雨，帶折傘與防水外套。",
    "stats": [
      "台灣準備日",
      "回覆同意",
      "帶雨具"
    ],
    "stops": [
      {
        "time": "19:00",
        "title": "回覆易遊網：同意 SL394 改 17:05",
        "category": "transport",
        "status": "needs",
        "price": "—",
        "route": "易遊網會員中心 → 聯絡客服",
        "eta": "約 15 分",
        "description": "ORD0030778555 已收異動通知：17:05 TPE T1 → 21:25 NRT T1N（SL394D）。LI（ORD0030778522）也請確認同班。",
        "transit": "—",
        "booking": "客服曹鳳欣 02-2516-3360 分機 1920。",
        "note": "—",
        "place": "易遊網"
      },
      {
        "time": "20:00",
        "title": "打包 + 證件 + 下載 .ics",
        "category": "rest",
        "status": "planned",
        "price": "—",
        "route": "家中",
        "eta": "約 90 分",
        "description": "護照、兩間 Airbnb 日文地址截圖、離線地圖。折傘、防水外套；河口湖 10/28 早上約 4°C，要帶保暖衣物。",
        "transit": "—",
        "booking": "—",
        "note": "免費託運「無」，大件行李先加購。",
        "place": "台灣"
      }
    ]
  },
  {
    "id": "d1",
    "date": "10/24（六）",
    "title": "17:05 飛東京 → 21:25 成田 → 深夜入住沼袋",
    "summary": "東京預報曇のち雨（80%）。抵達後 Skyliner → 日暮里 → 山手線 → 高田馬場 → 西武各停 → 沼袋，約 00:00 入住，便利商店宵夜休息。",
    "stats": [
      "飛行日",
      "深夜抵達",
      "雨"
    ],
    "stops": [
      {
        "time": "14:00",
        "title": "抵達桃園機場 T1 報到",
        "category": "transport",
        "status": "planned",
        "price": "機捷約 NT$160",
        "route": "台北 → 機場捷運 → A12",
        "eta": "約 40-60 分",
        "description": "起飛前 3 小時到櫃台。",
        "transit": "—",
        "booking": "可先線上 check-in。",
        "note": "—",
        "place": "桃園國際機場 第一航廈"
      },
      {
        "time": "17:05",
        "title": "SL394 桃園 TPE T1 → 成田 NRT T1N",
        "category": "transport",
        "status": "confirmed",
        "price": "機票已付",
        "route": "TPE T1 → NRT T1",
        "eta": "飛行約 3h20m",
        "description": "17:05 起飛、21:25 抵達（日本時間）。",
        "transit": "—",
        "booking": "以易遊網最新行程單為準。",
        "note": "—",
        "place": "Narita International Airport Terminal 1",
        "image": "images/narita.jpg"
      },
      {
        "time": "21:25",
        "title": "⚠ 入境 → Skyliner（22:20／22:40，末班約 23:00）",
        "category": "transport",
        "status": "needs",
        "price": "Skyliner 約 ¥2,580",
        "route": "成田空港 → 日暮里 → 高田馬場 → 沼袋",
        "eta": "約 1h40m",
        "description": "末班警示：入境＋行李約 45-70 分，到月台約 22:10-22:35，緩衝只剩 20-30 分。Skyliner 末班約 23:00；西武新宿線高田馬場末班約 00:20（約 00:29 到沼袋，搭各停）。",
        "transit": "—",
        "booking": "上飛機前先線上買 Skyliner 指定席。",
        "note": "錯過末班：計程車固定車資每台約 ¥23,500-38,500（≈¥25,000 起），4 大人＋行李要 2 台或預約 Jumbo Taxi。",
        "place": "京成 成田空港駅",
        "image": "images/narita.jpg"
      },
      {
        "time": "00:15",
        "title": "沼袋入住（中野區新井 4-26-2・101 室）",
        "category": "rest",
        "status": "confirmed",
        "price": "住宿已付",
        "route": "沼袋駅 徒歩 3 分",
        "eta": "—",
        "description": "Airbnb Shiryu，10/24-10/27，16:00 後入住、11:00 前退房，確認碼 HMPWSSD3ZE。",
        "transit": "急行不停沼袋。",
        "booking": "入住方式看房東信（密碼不寫在本頁）。",
        "note": "已先告知房東 Shiryu：約午夜 00:00-00:30 入住。",
        "place": "東京都中野区新井4-26-2"
      },
      {
        "time": "00:30",
        "title": "便利商店宵夜 → 休息",
        "category": "food",
        "status": "optional",
        "price": "約 ¥500-1,000",
        "route": "沼袋站周邊",
        "eta": "15 分",
        "description": "買回住處吃。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "沼袋駅 コンビニ"
      }
    ]
  },
  {
    "id": "d2",
    "date": "10/25（日）",
    "title": "明治神宮（上午）→ 原宿・表參道 → 澀谷室內商場",
    "summary": "預報曇のち雨：上午 30% 先走戶外明治神宮與表參道，午後 80% 下雨轉進澀谷室內（Scramble Square、PARCO、MIYASHITA PARK）。晚餐燒肉。",
    "stats": [
      "戶外上午",
      "室內下午",
      "燒肉"
    ],
    "stops": [
      {
        "time": "10:00",
        "title": "出門：沼袋 → 高田馬場 → 原宿",
        "category": "transport",
        "status": "planned",
        "price": "約 ¥200-300",
        "route": "西武各停 → 山手線",
        "eta": "約 30-35 分",
        "description": "—",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "原宿駅"
      },
      {
        "time": "10:40",
        "title": "明治神宮 參拜",
        "category": "heritage",
        "status": "planned",
        "price": "免費",
        "route": "原宿駅 → 南參道",
        "eta": "約 75 分",
        "description": "趁上午還沒下雨先走參道與本殿。",
        "transit": "—",
        "booking": "—",
        "note": "https://www.meijijingu.or.jp/",
        "place": "明治神宮",
        "image": "images/meiji.jpg"
      },
      {
        "time": "12:15",
        "title": "表參道午餐＋逛街（表參道 Hills 室內）",
        "category": "theme",
        "status": "planned",
        "price": "午餐約 ¥1,500-3,000",
        "route": "竹下通 → 表參道",
        "eta": "約 2.5 小時",
        "description": "竹下通快走，表參道 Hills 室內商場可避雨。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "表参道ヒルズ",
        "image": "images/takeshita.jpg"
      },
      {
        "time": "15:00",
        "title": "澀谷室內：Scramble Square・PARCO・MIYASHITA PARK",
        "category": "theme",
        "status": "planned",
        "price": "免費入館",
        "route": "表參道 → 銀座線 → 澀谷",
        "eta": "約 3 小時",
        "description": "PARCO（任天堂／寶可夢中心）、Scramble Square 地下美食。SHIBUYA SKY 改到 10/27 晴天傍晚。2026 話題：MilkyShop TOKYO（神南，外帶、可能排隊）。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "SHIBUYA PARCO",
        "image": "images/shibuya.jpg"
      },
      {
        "time": "18:30",
        "title": "晚餐：焼肉 よろにく（或備案）",
        "category": "food",
        "status": "needs",
        "price": "每人 ¥15,000-21,500＋10% 服務費（4 人約 ¥70,000-90,000）",
        "route": "澀谷 → 表參道",
        "eta": "約 90 分",
        "description": "很難訂、7 天前起收取消費。訂不到改平價：焼肉ライク 渋谷／牛かつもとむら，或回西武新宿吃 元ちゃん（70品＋3H飲み放題 ¥3,480-3,980）。",
        "transit": "—",
        "booking": "Tabelog 預約。",
        "note": "—",
        "place": "焼肉 よろにく"
      },
      {
        "time": "20:30",
        "title": "夜生活（可選）：澀谷 のんべい横丁",
        "category": "night",
        "status": "optional",
        "price": "1 杯約 ¥600-1,000",
        "route": "澀谷駅 JR 高架旁",
        "eta": "約 60 分",
        "description": "小酒館巷，雨天屋簷下就能喝。",
        "transit": "—",
        "booking": "—",
        "note": "22:00 前回沼袋。",
        "place": "渋谷 のんべい横丁"
      },
      {
        "time": "選配",
        "title": "2026 話題：阿佐ヶ谷 たおや（銅鑼燒）",
        "category": "food",
        "status": "optional",
        "price": "約 ¥300-600",
        "route": "中野 → JR 中央線 1 站 → 阿佐ヶ谷",
        "eta": "約 30 分",
        "description": "ELLE 2026 第 1 名，繼承うさぎや；週一、週二休 → 只有今天能去，只收現金。可早上出門前或晚上回程繞去。",
        "transit": "—",
        "booking": "不訂位。",
        "note": "https://www.elle.com/jp/gourmet/gourmet-restaurants-events/g71517719/ranking2026-2606/",
        "place": "たおや 阿佐ヶ谷"
      },
      {
        "time": "雨備",
        "title": "雨天備案：上午直接改澀谷／新宿百貨地下街",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "若早上就下雨，明治神宮挪到 10/27 以外的空檔，先逛新宿伊勢丹地下美食。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "伊勢丹新宿店"
      }
    ]
  },
  {
    "id": "d3",
    "date": "10/26（一）",
    "title": "全日室內：池袋 Sunshine City → 秋葉原 → 新宿",
    "summary": "預報整天雨（90%、約 16mm），全排室內：池袋 Sunshine 水族館＋展望台、秋葉原電玩街，晚上新宿思い出横丁。",
    "stats": [
      "室內日",
      "水族館",
      "秋葉原"
    ],
    "stops": [
      {
        "time": "10:00",
        "title": "出門：沼袋 → 高田馬場 → 池袋",
        "category": "transport",
        "status": "planned",
        "price": "約 ¥200-300",
        "route": "西武各停 → 山手線",
        "eta": "約 25 分",
        "description": "池袋東口地下通道可直達 Sunshine City，少淋雨。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "池袋駅"
      },
      {
        "time": "10:30",
        "title": "Sunshine City：水族館＋展望台てんぼうパーク＋寶可夢中心",
        "category": "theme",
        "status": "planned",
        "price": "水族館 ¥2,600-3,200",
        "route": "池袋東口 → 地下通道",
        "eta": "約 3.5 小時（含午餐）",
        "description": "水族館秋冬平日 10:00-18:00；ALPA 內有 Pokémon Center MEGA TOKYO、扭蛋店。",
        "transit": "—",
        "booking": "水族館官網可預約日時。",
        "note": "https://sunshinecity.jp/aquarium/ticket/",
        "place": "サンシャインシティ"
      },
      {
        "time": "14:30",
        "title": "秋葉原：GiGO・扭蛋會館・Yodobashi Akiba",
        "category": "theme",
        "status": "planned",
        "price": "—",
        "route": "池袋 → 山手線 → 秋葉原",
        "eta": "約 2.5 小時",
        "description": "電玩、動漫、家電都在室內。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "秋葉原電気街",
        "image": "images/akihabara.jpg"
      },
      {
        "time": "18:30",
        "title": "晚餐：新宿 思い出横丁",
        "category": "food",
        "status": "planned",
        "price": "約 ¥2,500-4,500",
        "route": "秋葉原 → 中央線 → 新宿",
        "eta": "約 90 分",
        "description": "串燒居酒屋，屋簷下有座。",
        "transit": "—",
        "booking": "不訂位。",
        "note": "https://shinjuku-omoide.com/",
        "place": "新宿 思い出横丁",
        "image": "images/shinjuku.jpg"
      },
      {
        "time": "雨備",
        "title": "2026 雨天替換：TAKANAWA GATEWAY CITY／MoN Takanawa",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "可替換池袋：MoN Takanawa（隈研吾設計，10/10-11/15「竜とそばかすの姫」live，每月第 2 個週二休）＋NEWoMan 高輪 MIMURE 美食＋PÂTISSERIE ASAKO IWAYANAGI；全室內。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "MoN Takanawa"
      },
      {
        "time": "選配",
        "title": "逛街選配：中野ブロードウェイ（室內，沼袋 1 站）",
        "category": "theme",
        "status": "optional",
        "price": "—",
        "route": "沼袋 → 中野",
        "eta": "約 1.5 小時",
        "description": "動漫、模型、中古鐘錶迷宮，雨天回住處前順路。",
        "transit": "—",
        "booking": "—",
        "note": "https://www.nakano-broadway.com/",
        "place": "中野ブロードウェイ"
      },
      {
        "time": "20:30",
        "title": "夜生活（可選）：新宿ゴールデン街",
        "category": "night",
        "status": "optional",
        "price": "席料＋1 杯 ¥1,000-2,000",
        "route": "新宿東口",
        "eta": "約 60 分",
        "description": "選標價清楚的店。",
        "transit": "新宿 → 高田馬場 → 西武各停。",
        "booking": "—",
        "note": "—",
        "place": "新宿ゴールデン街"
      },
      {
        "time": "21:00",
        "title": "夜生活（可選）：高輪SAUNAS 三溫暖",
        "category": "night",
        "status": "optional",
        "price": "依方案",
        "route": "山手線 → 高輪ゲートウェイ",
        "eta": "約 2 小時",
        "description": "2026/2 開幕，9 間三溫暖＋餐廳，營業至翌 2:00；雨夜好選擇。回沼袋注意西武末班 00:20。",
        "transit": "—",
        "booking": "官網確認方案。",
        "note": "https://saunas-saunas.com/takanawa/",
        "place": "高輪SAUNAS"
      },
      {
        "time": "雨備",
        "title": "其他室內備案：東京ドームシティ／teamLab Planets",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "東京ドームシティ（後樂園，遊樂設施＋Spa LaQua）；或豊洲 teamLab Planets（8:00-22:00，現場不售票，須網路預約）。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "東京ドームシティ"
      }
    ]
  },
  {
    "id": "d4",
    "date": "10/27（二）",
    "title": "搬家日：沼袋 → 上野・入谷 → アメ横・淺草",
    "summary": "預報曇一時雨→午後轉晴（東京 40-70%）。11:00 前退房，行李寄放後逛アメ横，15:00 入住，傍晚淺草寺，晚餐上野燒肉。",
    "stats": [
      "搬家日",
      "アメ横",
      "淺草"
    ],
    "stops": [
      {
        "time": "10:15",
        "title": "退房沼袋 → 叫 1-2 台計程車直送入谷",
        "category": "transport",
        "status": "planned",
        "price": "計程車約 ¥8,000-10,000（2 台）",
        "route": "沼袋 → 上野・入谷",
        "eta": "約 40-50 分",
        "description": "4 人帶行李不搭電車；計程車門到門。",
        "transit": "—",
        "booking": "—",
        "note": "11:00 前退房。",
        "place": "上野駅"
      },
      {
        "time": "11:15",
        "title": "行李寄放：先問 Yoshi 提早寄放，不行改置物櫃／ecbo cloak",
        "category": "rest",
        "status": "needs",
        "price": "大型置物櫃約 ¥700-1,000",
        "route": "入谷住處 或 JR 上野駅",
        "eta": "約 20 分",
        "description": "入谷 15:00 才能入住，前一天就傳訊問 Yoshi 能否 11:30 先放行李。",
        "transit": "—",
        "booking": "房東 Yoshi +81 80-3490-6745。",
        "note": "—",
        "place": "JR上野駅 コインロッカー"
      },
      {
        "time": "12:00",
        "title": "上野アメ横：午餐＋逛街",
        "category": "theme",
        "status": "planned",
        "price": "午餐約 ¥1,000-2,000",
        "route": "上野 → 御徒町",
        "eta": "約 2.5 小時",
        "description": "高架下多有遮蔽。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "アメ横商店街"
      },
      {
        "time": "15:00",
        "title": "入住上野・入谷（台東區北上野 2-23-2）",
        "category": "rest",
        "status": "confirmed",
        "price": "住宿已付",
        "route": "上野 徒歩 10 分／入谷 徒歩 4 分",
        "eta": "約 30 分",
        "description": "Airbnb Yoshi，10/27-10/30，15:00 後入住、10:00 前退房，確認碼 HM5N242T99。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "東京都台東区北上野2-23-2"
      },
      {
        "time": "15:45",
        "title": "淺草寺・仲見世・雷門（可選：蔵前散步）",
        "category": "heritage",
        "status": "planned",
        "price": "免費",
        "route": "入谷 → 計程車／步行 20 分",
        "eta": "約 1.5 小時",
        "description": "午後轉晴；有時間順走蔵前（手作皮件、咖啡，離上野近）。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "浅草寺"
      },
      {
        "time": "17:30",
        "title": "SHIBUYA SKY 晴天傍晚（從 v4 的 10/25 移來）",
        "category": "night",
        "status": "optional",
        "price": "約 ¥2,700-3,400",
        "route": "上野 → 銀座線直達澀谷",
        "eta": "約 1 小時",
        "description": "10/27 午後轉晴，當天看天氣再買票；不去就留在淺草。去的話晚餐改在澀谷或回上野吃。",
        "transit": "—",
        "booking": "官網當天購票。",
        "note": "https://www.shibuya-sky.com/",
        "place": "SHIBUYA SKY"
      },
      {
        "time": "18:45",
        "title": "晚餐：焼肉上野太昌園 本店",
        "category": "food",
        "status": "needs",
        "price": "約 ¥6,000-8,000",
        "route": "淺草 → 銀座線 → 上野廣小路",
        "eta": "約 90 分",
        "description": "備案 焼肉陽山道、焼肉ライク 上野店（一人一爐 ¥1,000-2,000）、ホルモン青木 上野店。",
        "transit": "—",
        "booking": "Tabelog 訂位。",
        "note": "—",
        "place": "焼肉上野太昌園 本店"
      },
      {
        "time": "20:30",
        "title": "夜生活（可選）：淺草ホッピー通り／アメ横ガード下",
        "category": "night",
        "status": "optional",
        "price": "約 ¥1,500-3,000",
        "route": "—",
        "eta": "約 60 分",
        "description": "—",
        "transit": "上野步行回住處。",
        "booking": "—",
        "note": "—",
        "place": "ホッピー通り 浅草"
      },
      {
        "time": "雨備",
        "title": "雨天備案：東京國立博物館（上野公園）",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "週二開館（週一休）；全室內，從住處步行可到。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "東京国立博物館"
      }
    ]
  },
  {
    "id": "d5",
    "date": "10/28（三）",
    "title": "郊區一日：富士山・河口湖（本週能見度最佳日）",
    "summary": "主題：看富士山（紅葉祭 11/7-29 才開始，10/28 紅葉剛轉色、無點燈）。預報晴のち曇、上午降水 10%，搭 08:15-08:35 巴士早到。2 個大行程：大石公園＋天上山纜車（或新倉山浅間公園）。",
    "stats": [
      "郊區一日遊",
      "富士晴天",
      "早出門"
    ],
    "stops": [
      {
        "time": "07:30",
        "title": "出門：入谷 → 上野 → JR 山手線 → 新宿（例外早出門）",
        "category": "transport",
        "status": "planned",
        "price": "約 ¥210",
        "route": "上野 → 山手線 → 新宿",
        "eta": "約 35 分",
        "description": "富士山上午最清楚、午後轉雲，今天提早出門。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "新宿駅"
      },
      {
        "time": "08:15",
        "title": "高速巴士 Busta 新宿 08:15-08:35 → 河口湖駅（現在就訂）",
        "category": "transport",
        "status": "needs",
        "price": "單程約 ¥2,000-2,600",
        "route": "バスタ新宿 4F → 河口湖駅",
        "eta": "約 1h45m",
        "description": "10/1 起需先訂位；回程訂 15:45-16:15。也可搭 JR 富士回遊號（新宿直通，需預約）。",
        "transit": "—",
        "booking": "高速バスネット。",
        "note": "—",
        "place": "バスタ新宿"
      },
      {
        "time": "10:15",
        "title": "河口湖：大石公園＋天上山纜車（看富士）",
        "category": "park",
        "status": "planned",
        "price": "纜車往返約 ¥1,000；周遊巴士另計",
        "route": "河口湖周遊巴士",
        "eta": "約 3 小時",
        "description": "中午前看富士倒影；もみじ回廊只當順路（紅葉祭 11/7 起）。早晚約 4°C，穿保暖。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "大石公園"
      },
      {
        "time": "13:30",
        "title": "午餐：ほうとう不動 東恋路店",
        "category": "food",
        "status": "planned",
        "price": "約 ¥1,200-1,500",
        "route": "河口湖駅周邊",
        "eta": "約 60 分",
        "description": "山梨南瓜味噌麵鍋。",
        "transit": "—",
        "booking": "不訂位。",
        "note": "https://www.houtou-fudou.jp/",
        "place": "ほうとう不動 東恋路店"
      },
      {
        "time": "15:45",
        "title": "巴士回新宿 → JR 回上野",
        "category": "transport",
        "status": "needs",
        "price": "約 ¥2,600",
        "route": "河口湖 → Busta 新宿 → 山手線 → 上野",
        "eta": "約 2.5 小時",
        "description": "—",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "河口湖駅"
      },
      {
        "time": "19:00",
        "title": "晚餐：アメ横 大統領（もつ焼き）",
        "category": "food",
        "status": "planned",
        "price": "約 ¥2,000-3,000",
        "route": "上野 不忍口 徒歩 3 分",
        "eta": "約 90 分",
        "description": "1950 年創業高架下老店；10:00-23:30、不訂位、只收現金。",
        "transit": "—",
        "booking": "—",
        "note": "https://tabelog.com/tokyo/A1311/A131101/13016740/",
        "place": "大統領 上野"
      },
      {
        "time": "20:45",
        "title": "夜生活（可選）：立飲み たきおか",
        "category": "night",
        "status": "optional",
        "price": "約 ¥1,000-2,000",
        "route": "上野 6-9-14",
        "eta": "約 45 分",
        "description": "Cash-on 立飲，帶零錢。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "立飲み たきおか"
      },
      {
        "time": "雨備",
        "title": "雲多看不到富士：改室內 teamLab Planets",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "與 10/29 互換；或改豊洲 teamLab Planets（需網路預約）＋銀座三越地下美食。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "teamLab Planets TOKYO"
      }
    ]
  },
  {
    "id": "d6",
    "date": "10/29（四）",
    "title": "郊區一日：鎌倉・江之島 → 有樂町ガード下",
    "summary": "預報曇、白天降水 30%，傍晚 18:00 後可能下雨。上野東京ライン → 東京轉橫須賀線到鎌倉，2 個大行程：鎌倉＋江之島。傍晚前回到有樂町室內晚餐。",
    "stats": [
      "郊區一日遊",
      "江之電",
      "有樂町夜"
    ],
    "stops": [
      {
        "time": "10:00",
        "title": "出門：上野 → 東京 → 鎌倉",
        "category": "transport",
        "status": "planned",
        "price": "約 ¥1,000",
        "route": "上野東京ライン → 東京轉橫須賀線",
        "eta": "約 1h15m",
        "description": "—",
        "transit": "—",
        "booking": "—",
        "note": "氣溫約 11-16°C，帶外套。",
        "place": "鎌倉駅"
      },
      {
        "time": "11:15",
        "title": "鎌倉：鶴岡八幡宮＋小町通",
        "category": "heritage",
        "status": "planned",
        "price": "免費",
        "route": "鎌倉駅東口",
        "eta": "約 2.5 小時",
        "description": "小町通吃吃喝喝當午餐。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "鶴岡八幡宮",
        "image": "images/kamakura.jpg"
      },
      {
        "time": "13:45",
        "title": "江之電 → 鎌倉高校前 → 江之島",
        "category": "park",
        "status": "planned",
        "price": "江之電約 ¥260-310",
        "route": "鎌倉 → 江ノ島",
        "eta": "約 2.5 小時",
        "description": "平交道拍照（勿站馬路中央）、弁財天、Sea Candle。",
        "transit": "—",
        "booking": "—",
        "note": "日落約 16:49，雨前離開。",
        "place": "江の島",
        "image": "images/enoshima.jpg"
      },
      {
        "time": "16:45",
        "title": "回程：藤澤 → 東海道線 → 新橋／有樂町",
        "category": "transport",
        "status": "planned",
        "price": "約 ¥1,000",
        "route": "藤澤 → 新橋",
        "eta": "約 1h10m",
        "description": "—",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "有楽町駅"
      },
      {
        "time": "18:30",
        "title": "晚餐：有樂町 新日の基（鮮魚居酒屋）",
        "category": "food",
        "status": "needs",
        "price": "約 ¥4,000-5,000",
        "route": "有楽町駅 日比谷口 徒歩 1 分",
        "eta": "約 90 分",
        "description": "1946 年開業高架下；17:00-23:30、週日休、只收現金。",
        "transit": "—",
        "booking": "當日 14:00 後電話 03-3214-8021。",
        "note": "https://tabelog.com/tokyo/A1301/A130102/13006216/",
        "place": "新日の基 有楽町"
      },
      {
        "time": "20:15",
        "title": "夜生活（可選）：銀座・有樂町室內酒吧／六本木",
        "category": "night",
        "status": "optional",
        "price": "—",
        "route": "日比谷線直回入谷",
        "eta": "約 60 分",
        "description": "晚上有雨，選室內酒吧；GINZA SIX 頂樓花園雨天不建議。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "銀座"
      },
      {
        "time": "雨備",
        "title": "下雨備案：teamLab Planets＋銀座百貨地下街",
        "category": "theme",
        "status": "optional",
        "price": "依館方",
        "route": "—",
        "eta": "—",
        "description": "豊洲 teamLab Planets（新豊洲站 3 分，8:00-22:00）→ 銀座三越／松屋地下美食 → 有樂町晚餐。",
        "transit": "—",
        "booking": "—",
        "note": "雨天或太累時替換當天戶外行程。",
        "place": "teamLab Planets TOKYO"
      }
    ]
  },
  {
    "id": "d7",
    "date": "10/30（五）",
    "title": "退房 → 上野百貨地下街 → 15:00 到成田 → SL395",
    "summary": "預報雨（90%、約 15mm），全排室內：10:00 前退房，行李寄京成上野，松坂屋上野店地下美食與上野マルイ補伴手禮，13:20 Skyliner → 14:03 成田。",
    "stats": [
      "退房 10:00",
      "室內購物",
      "SL395"
    ],
    "stops": [
      {
        "time": "09:45",
        "title": "退房入谷 → 京成上野寄放行李（雨天叫計程車）",
        "category": "rest",
        "status": "planned",
        "price": "置物櫃約 ¥700-1,000",
        "route": "入谷 → 京成上野",
        "eta": "約 30 分",
        "description": "—",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "京成上野駅"
      },
      {
        "time": "10:15",
        "title": "松坂屋上野店 地下美食＋上野マルイ",
        "category": "theme",
        "status": "planned",
        "price": "—",
        "route": "上野廣小路",
        "eta": "約 2 小時",
        "description": "室內伴手禮與熟食；退稅帶護照。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "松坂屋上野店"
      },
      {
        "time": "11:45",
        "title": "午餐：とんかつ山家 上野店",
        "category": "food",
        "status": "planned",
        "price": "約 ¥1,000-2,000",
        "route": "松坂屋上野店 → 徒歩約 5 分",
        "eta": "約 40 分",
        "description": "翻桌快的炸豬排，趕 Skyliner 前吃最穩；12:45 前吃完走去京成上野拿行李。",
        "transit": "—",
        "booking": "—",
        "note": "只收現金；午餐 11:00–15:00。",
        "place": "とんかつ山家 上野店"
      },
      {
        "time": "13:20",
        "title": "Skyliner 京成上野 → 成田空港",
        "category": "transport",
        "status": "needs",
        "price": "約 ¥2,580",
        "route": "京成上野 → 成田空港駅",
        "eta": "約 43 分（14:03 到）",
        "description": "晚一班 13:35 也可。",
        "transit": "—",
        "booking": "線上買指定席。",
        "note": "15:00 前完成報到。",
        "place": "京成上野駅"
      },
      {
        "time": "17:25",
        "title": "SL395 成田 NRT T1 → 桃園 TPE",
        "category": "transport",
        "status": "confirmed",
        "price": "機票已付",
        "route": "NRT T1 → TPE T1",
        "eta": "—",
        "description": "17:25 起飛、20:20 抵台（台灣時間）。",
        "transit": "—",
        "booking": "—",
        "note": "—",
        "place": "Narita International Airport Terminal 1",
        "image": "images/narita.jpg"
      }
    ]
  }
];


const geoPlaces = {
  nakano: { x: 148, y: 205, label: "沼袋", sub: "住宿 1", kind: "hub" },
  shinjuku: { x: 188, y: 182, label: "新宿", sub: "D3 夜・D5 巴士", kind: "area" },
  harajuku: { x: 202, y: 222, label: "原宿", sub: "明治神宮", kind: "area" },
  shibuya: { x: 208, y: 262, label: "澀谷", sub: "D2", kind: "area" },
  ueno: { x: 300, y: 160, label: "上野・入谷", sub: "住宿 2", kind: "hub" },
  asakusa: { x: 335, y: 165, label: "淺草", sub: "D4", kind: "area" },
  akihabara: { x: 290, y: 190, label: "秋葉原", sub: "D3", kind: "area" },
  yurakucho: { x: 280, y: 232, label: "有樂町", sub: "D6 夜", kind: "area" },
  nrt: { x: 440, y: 88, label: "成田", sub: "NRT", kind: "airport" },
  kamakura: { x: 120, y: 360, label: "鎌倉", sub: "D6", kind: "far" },
  enoshima: { x: 85, y: 375, label: "江之島", sub: "D6", kind: "far" },
  fuji: { x: 30, y: 270, label: "河口湖", sub: "D5 富士", kind: "far" },
  ikebukuro: { x: 180, y: 135, label: "池袋", sub: "D3 室內", kind: "area" },
  toyosu: { x: 320, y: 270, label: "teamLab", sub: "雨備", kind: "area" }
};

const tripGeoOverview = {
  routes: [
    { day: "d1", color: "#c4a574", width: 2.5, path: ["nrt", "ueno", "nakano"] },
    { day: "d2", color: "#2d6a4f", width: 2.5, path: ["nakano", "harajuku", "shibuya", "nakano"] },
    { day: "d3", color: "#4a6fa5", width: 2.5, path: ["nakano", "ikebukuro", "akihabara", "shinjuku", "nakano"] },
    { day: "d4", color: "#8b6f4e", width: 2.5, path: ["nakano", "ueno", "asakusa", "ueno"] },
    { day: "d5", color: "#b5543c", width: 2.5, path: ["ueno", "shinjuku", "fuji", "shinjuku", "ueno"] },
    { day: "d6", color: "#6b4c9a", width: 2.5, path: ["ueno", "kamakura", "enoshima", "yurakucho", "ueno"] },
    { day: "d7", color: "#2c5282", width: 2.5, path: ["ueno", "nrt"] }
  ],
  activePlaces: Object.keys(geoPlaces)
};

const tripDayMaps = [
  { day: "D1", date: "10/24", color: "#c4a574", title: "深夜抵達・沼袋", route: ["nrt", "ueno", "nakano"], note: "SL394 21:25 抵達；Skyliner → 日暮里 → 高田馬場 → 沼袋" },
  { day: "D2", date: "10/25", color: "#2d6a4f", title: "明治神宮・原宿・澀谷", route: ["nakano", "harajuku", "shibuya", "nakano"], note: "神宮 + 表參道逛街 + 澀谷；Yoroniku 燒肉" },
  { day: "D3", date: "10/26", color: "#4a6fa5", title: "雨天室內：池袋・秋葉原", route: ["nakano", "ikebukuro", "akihabara", "shinjuku", "nakano"], note: "Sunshine 水族館 + 秋葉原 + 思い出横丁" },
  { day: "D4", date: "10/27", color: "#8b6f4e", title: "搬家・アメ横・淺草", route: ["nakano", "ueno", "asakusa", "ueno"], note: "11:00 退房；15:00 入谷入住；太昌園燒肉" },
  { day: "D5", date: "10/28", color: "#b5543c", title: "富士山・河口湖", route: ["ueno", "shinjuku", "fuji", "shinjuku", "ueno"], note: "上野 → JR 新宿 → Busta 巴士；本週最晴" },
  { day: "D6", date: "10/29", color: "#6b4c9a", title: "鎌倉・江之島・有樂町", route: ["ueno", "kamakura", "enoshima", "yurakucho", "ueno"], note: "新日の基 鮮魚居酒屋" },
  { day: "D7", date: "10/30", color: "#2c5282", title: "返程 SL395", route: ["ueno", "nrt"], note: "13:20 Skyliner → 17:25 起飛 → 20:20 抵台" }
];


const transitTutorials = [
  {
    title: "成田機場 → 沼袋（Skyliner 完整 Step）",
    intro: "抵達當天照這個順序走，不會迷路。",
    steps: [
      {
        step: 1,
        title: "入境後找 JR 指標",
        body: "跟著「Railway / 鉄道」→「京成 Keisei / Skyliner」往下到 B1。",
        image: IMAGES.narita
      },
      {
        step: 2,
        title: "買 Skyliner 指定席 + Suica",
        body: "最好上飛機前就線上買好 Skyliner（22:20／22:40，末班約 23:00）。Suica 用 iPhone 錢包或機場購買 Welcome Suica。",
        image: IMAGES.ticketGate
      },
      {
        step: 3,
        title: "Skyliner → 日暮里 → 山手線 → 高田馬場",
        body: "Skyliner 約 36 分到日暮里，轉 JR 山手線（外回り）到高田馬場。",
        image: IMAGES.nexTrain
      },
      {
        step: 4,
        title: "高田馬場 → 西武新宿線各停 → 沼袋",
        body: "西武新宿線搭「各停」（急行不停沼袋），高田馬場末班約 00:20、約 00:29 到沼袋，徒歩 3 分。錯過末班：2 台計程車各約 ¥25,000 起。Maps：https://maps.app.goo.gl/atNgDQb1A8BMatWv7",
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
        body: "進站後看藍色電子看板，找你的目的地與發車時間。沼袋出發先搭西武線到高田馬場轉山手線。",
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
        title: "Skyliner（成田↔日暮里／上野）",
        body: "D1 深夜（末班約 23:00）、D7 京成上野 13:20；線上先買指定席。",
        image: IMAGES.nexTrain
      },
      {
        step: 2,
        title: "鎌倉・江之島（D6 10/29）",
        body: "從上野走 JR 上野東京ライン／橫須賀線（Suica 即可），江之電可買「のりおりくん」一日券。",
        image: IMAGES.kamakura
      },
      {
        step: 3,
        title: "景點門票",
        body: "澀谷 Sky、晴空塔、江之島展望台、河口湖高速巴士等需官網預約/現場購票，不能用 Suica 代替。",
        image: IMAGES.shibuya
      }
    ]
  }
];

const routeCards = [
  { title: "成田 → 沼袋（D1 深夜）", price: "Skyliner 約 ¥2,580 + JR/西武 約 ¥400", route: "成田空港 → 日暮里 → 高田馬場 → 沼袋", eta: "約 1h40m", note: "Skyliner 末班約 23:00、西武末班約 00:20；錯過 → 2 台計程車各約 ¥25,000 起。" },
  { title: "沼袋 ⇄ 原宿/澀谷/新宿", price: "約 ¥200-300", route: "西武各停 → 高田馬場 → 山手線", eta: "25-35 分", note: "D2、D3 主線。" },
  { title: "上野 → 新宿 → 河口湖", price: "JR ¥210 + 巴士約 ¥2,200-2,600", route: "山手線 → バスタ新宿 4F → 河口湖駅", eta: "約 2h15m", note: "D5 10/28；或 JR 富士回遊號（新宿直通）。" },
  { title: "沼袋 → 上野（搬家）", price: "電車約 ¥400／計程車約 ¥8,000-10,000", route: "高田馬場 → 山手線 → 上野", eta: "約 40-50 分", note: "D4；大行李建議計程車。" },
  { title: "沼袋 ⇄ 池袋／秋葉原", price: "約 ¥200-300", route: "西武各停 → 高田馬場 → 山手線", eta: "25-40 分", note: "D3 雨天室內日。" },
  { title: "上野 ⇄ 鎌倉", price: "約 ¥1,000", route: "上野東京ライン → 東京 → 橫須賀線", eta: "約 1h15m", note: "D6；回程藤澤 → 東海道線 → 新橋。" },
  { title: "入谷 ⇄ 銀座/有樂町/六本木", price: "約 ¥200-260", route: "日比谷線 直通", eta: "15-25 分", note: "D6 夜生活回家不用轉車。" },
  { title: "上野 → 成田（返程）", price: "Skyliner 約 ¥2,580", route: "京成上野 → 成田空港", eta: "約 43 分", note: "D7 13:20 班 → 14:03。" }
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
    note: "D2（10/25）用：沼袋 → 高田馬場 → 原宿 → 澀谷，山手線環狀一圈就懂。"
  },
  {
    title: "關東鐵路概覽圖",
    caption: "沼袋在東京西側、上野在東側、鎌倉在西南",
    image: IMAGES.greaterTokyo,
    link: "https://www.jreast.co.jp/",
    note: "看大局：沼袋（住宿 1）／上野（住宿 2）→ 新宿巴士往河口湖、JR 往鎌倉；成田在東邊。"
  }
];

const routeDiagrams = [
  { day: "D1", title: "成田 NRT → 沼袋（深夜）", line: "nex", steps: [ { label: "NRT T1", sub: "21:25 抵達", icon: "✈" }, { label: "Skyliner", sub: "22:20/22:40 末班 23:00", icon: "🚄" }, { label: "日暮里", sub: "轉山手線", icon: "🟢" }, { label: "高田馬場", sub: "轉西武各停", icon: "🚃" }, { label: "沼袋", sub: "徒歩 3 分", icon: "🏠", hub: true } ], tips: ["急行不停沼袋", "趕不上就計程車"] },
  { day: "D2", title: "沼袋 → 原宿 → 澀谷", line: "yamanote", steps: [ { label: "沼袋", sub: "10:00", icon: "🏠", hub: true }, { label: "原宿", sub: "明治神宮", icon: "⛩" }, { label: "表參道", sub: "逛街", icon: "🛍" }, { label: "澀谷", sub: "PARCO", icon: "🌃" } ], tips: ["Yoroniku 需訂位", "のんべい横丁可選"] },
  { day: "D3", title: "沼袋 → 池袋 → 秋葉原 → 新宿（室內）", line: "yamanote", steps: [ { label: "池袋", sub: "Sunshine", icon: "🐠" }, { label: "秋葉原", sub: "GiGO", icon: "🎮" }, { label: "新宿", sub: "思い出横丁", icon: "🏮" } ], tips: ["地下通道少淋雨", "全日雨備"] },
  { day: "D4", title: "沼袋 → 上野（搬家）→ 淺草", line: "local", steps: [ { label: "沼袋", sub: "11:00 退房", icon: "🧳" }, { label: "上野", sub: "寄放・アメ横", icon: "🛍" }, { label: "入谷", sub: "15:00 入住", icon: "🏠", hub: true }, { label: "淺草", sub: "淺草寺", icon: "⛩" } ], tips: ["計程車搬行李最省力", "太昌園燒肉"] },
  { day: "D5", title: "上野 → 新宿 → 河口湖（巴士）", line: "odakyu", steps: [ { label: "上野", sub: "08:30 山手線", icon: "🏠", hub: true }, { label: "バスタ新宿", sub: "08:15-08:35", icon: "🚌" }, { label: "河口湖", sub: "大石公園", icon: "🗻" }, { label: "上野", sub: "大統領", icon: "🏮" } ], tips: ["上午富士最清楚", "來回巴士先訂"] },
  { day: "D6", title: "上野 → 鎌倉 → 江之島 → 有樂町", line: "odakyu", steps: [ { label: "上野", sub: "10:00", icon: "🏠", hub: true }, { label: "鎌倉", sub: "八幡宮", icon: "⛩" }, { label: "江之島", sub: "江之電・夕陽", icon: "🌊" }, { label: "有樂町", sub: "新日の基", icon: "🍶" } ], tips: ["東京站轉橫須賀線", "日比谷線直回入谷"] },
  { day: "D7", title: "上野 → 成田（返程）", line: "nex", steps: [ { label: "入谷", sub: "10:00 前退房", icon: "🧳" }, { label: "京成上野", sub: "13:20 Skyliner", icon: "🚄" }, { label: "NRT T1", sub: "SL395 17:25", icon: "✈" } ], tips: ["15:00 前到機場", "20:20 抵台"] }
];

const transitTips = [
  {
    title: "Suica / Pasmo 怎麼用",
    icon: "💳",
    body: "進站刷卡、出站刷卡。儲值機在車站；便利店也能加值。iPhone 錢包可綁定 Suica，少一張實體卡。"
  },
  {
    title: "西武新宿線（沼袋的生命線）",
    icon: "🟡",
    body: "沼袋只停各停，高田馬場轉山手線；西武新宿駅可直達新宿東口。"
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
    title: "成田 Skyliner 購票",
    icon: "🎫",
    body: "京成官網或 Klook 先買指定席；成田空港站京成櫃台也可。"
  },
  {
    title: "末班車提醒",
    icon: "⏰",
    body: "西武新宿線末班約 00:20（D1-D3）；錯過末班計程車回沼袋約 ¥5,000-7,000。"
  }
];

const budgetItems = [
  { title: "交通（含巴士、Skyliner）", cny: "—", twd: "約 NT$6,000-9,000", note: "以 JPY 計：Suica 儲值 + 河口湖巴士往返約 ¥5,000 + Skyliner 往返約 ¥5,200。" },
  { title: "景點（澀谷 Sky 等）", cny: "—", twd: "約 NT$1,500-3,000", note: "澀谷 Sky（10/27 可選）約 ¥2,700-3,400；晴空塔（可選）約 ¥2,100-3,100；江之島、纜車另計。" },
  { title: "餐食（7 日）", cny: "—", twd: "約 NT$11,000-20,000", note: "含燒肉、拉麵、居酒屋、咖啡；燒肉日預算拉高。" },
  { title: "購物/扭蛋/伴手禮", cny: "—", twd: "約 NT$3,000-8,000", note: "秋葉原與中野 Broadway 最易超支，先設上限。" },
  { title: "總預估（不含機票住宿）", cny: "¥80,000-140,000", twd: "約 NT$17,500-31,000", note: "依 1 JPY ≈ NT$0.22 粗估；匯率與個人購物浮動大。" }
];

const taiwanPrep = [
  { title: "護照與簽證", label: "必做", body: "台灣護照赴日免簽 90 日。確認效期（建議 6 個月以上）、機票姓名與護照一致。" },
  { title: "機票 SL394 / SL395", label: "已確認", body: "4 人同班：去 10/24 SL394 17:05→21:25，回 10/30 SL395 17:25→20:20。行程單免費託運行李皆「無」，請先加購。" },
  { title: "網路與 Suica", label: "必備", body: "eSIM/漫遊 + 入境後購或綁定 Suica/Pasmo。iPhone 錢包可綁定，實體卡機場也能買。" },
  { title: "澀谷 Sky 預約", label: "可選", body: "可選：改 10/27（二）晴天傍晚，當天看天氣再買；備案為澀谷 Hikarie 展望。" },
  { title: "住宿聯絡", label: "必做", body: "沼袋 10/24-10/27、上野入谷 10/27-10/30；垃圾分類依房東說明。地址日文版存 Google Maps 離線地圖。" },
  { title: "旅遊保險", label: "建議", body: "海外醫療與班機延誤；鎌倉日步行多，扭傷理赔留意條款。" },
  { title: "現金與信用卡", label: "備援", body: "日本仍有不少小店只收現金。帶 ¥30,000-40,000 現金，其餘 Suica/信用卡。" },
  { title: "禮儀提醒", label: "重要", body: "電車內不講電話、垃圾隨身帶回、排隊靠左（大阪靠右，東京樓梯靠左為多）。" }
];

const foodList = [
  { title: "焼肉 よろにく（Yoroniku）", area: "表參道／南青山", price: "每人 ¥15,000-21,500＋10%", bestFor: "D2 燒肉晚餐（需訂位）", source: "https://tabelog.com/", map: "焼肉 よろにく 南青山" },
  { title: "牛かつもとむら 渋谷", area: "澀谷", price: "約 ¥1,500-2,500", bestFor: "D2 備案", source: "https://motomura.jp/", map: "牛かつもとむら 渋谷" },
  { title: "ほうとう不動", area: "河口湖", price: "約 ¥1,200-1,500", bestFor: "D5 河口湖午餐", source: "https://www.houtou-fudou.jp/", map: "ほうとう不動 東恋路店" },
  { title: "思い出横丁 串燒", area: "新宿", price: "約 ¥2,500-4,500", bestFor: "D3 晚餐居酒屋", source: "https://shinjuku-omoide.com/", map: "思い出横丁" },
  { title: "焼肉上野太昌園 本店", area: "上野", price: "約 ¥6,000-8,000", bestFor: "D4 燒肉晚餐", source: "https://tabelog.com/yakiniku/tokyo/A1311/rank/", map: "焼肉上野太昌園 本店" },
  { title: "焼肉陽山道 上野広小路店", area: "上野", price: "約 ¥6,000-8,000", bestFor: "D4 燒肉備案（全席個室）", source: "https://tabelog.com/yakiniku/tokyo/A1311/rank/", map: "焼肉陽山道 上野広小路店" },
  { title: "淺草 仲見世小吃", area: "淺草", price: "約 ¥300-800", bestFor: "D4 下午點心", source: "https://www.senso-ji.jp/", map: "仲見世通り" },
  { title: "サンシャインシティ 飲食街", area: "池袋", price: "約 ¥1,000-2,000", bestFor: "D3 雨天午餐", source: "https://sunshinecity.jp/", map: "サンシャインシティ" },
  { title: "松坂屋上野店 地下美食", area: "上野", price: "依店", bestFor: "D7 伴手禮", source: "https://www.matsuzakaya.co.jp/ueno/", map: "松坂屋上野店" },
  { title: "大統領（アメ横）", area: "上野", price: "約 ¥2,000-3,000", bestFor: "D5 河口湖回來晚餐", source: "https://tabelog.com/tokyo/A1311/A131101/13016740/", map: "大統領 上野6-10-14" },
  { title: "鎌倉小町通小吃", area: "鎌倉", price: "約 ¥500-1,500", bestFor: "D6 午餐散步", source: "https://www.kamakura-info.jp/", map: "鎌倉 小町通" },
  { title: "ホルモン焼肉 縁 中野店", area: "中野（沼袋旁）", price: "90分食べ放題 ¥4,180-6,380", bestFor: "D1-D3 高CP燒肉", source: "https://www.ensyouji.co.jp/", map: "ホルモン焼肉 縁 中野" },
  { title: "炭火焼肉 元ちゃん 新宿東口", area: "西武新宿 3 分", price: "¥3,480-3,980（含 3H 飲み放題）", bestFor: "D2-D3；西武線直回沼袋", source: "https://www.hotpepper.jp/strJ000651960/", map: "炭火焼肉 元ちゃん 新宿東口" },
  { title: "天龍 新宿東口店", area: "西武新宿 0 分", price: "¥2,800-3,980 食べ放題", bestFor: "D2-D3 包廂", source: "https://www.hotpepper.jp/SA11/G008/g080/dncLT0089/U012/", map: "天龍 新宿東口店" },
  { title: "焼肉ライク 上野店", area: "上野広小路", price: "¥1,000-2,000", bestFor: "D4-D7 一人一爐", source: "https://www.yakiniku-like.com/", map: "焼肉ライク 上野店" },
  { title: "焼肉 やまだ", area: "上野広小路", price: "約 ¥4,000-6,000", bestFor: "D4-D6（只接電話預約）", source: "https://uyamaresort.com/column/ueno-yakiniku/", map: "焼肉 やまだ 上野" },
  { title: "ホルモン本舗 炎 上野駅前店", area: "JR上野 1 分", price: "¥3,000-4,000", bestFor: "24 小時宵夜", source: "https://uyamaresort.com/column/ueno-yakiniku/", map: "ホルモン本舗 炎 上野駅前店" },
  { title: "焼肉陽山道 上野本店 平日午餐", area: "御徒町", price: "午餐 ¥1,000-2,000", bestFor: "D4-D7 平日午餐 CP 最強", source: "https://tabelog.com/tokyo/A1311/A131101/13016717/", map: "焼肉陽山道 上野本店" },
  { title: "たおや（銅鑼燒）", area: "阿佐ヶ谷", price: "約 ¥300-600", bestFor: "D2 10/25（週一二休、現金）", source: "https://www.elle.com/jp/gourmet/gourmet-restaurants-events/g71517719/ranking2026-2606/", map: "たおや 阿佐ヶ谷" },
  { title: "新日の基（Andy's）", area: "有樂町", price: "約 ¥4,000-5,000", bestFor: "D6 晚餐鮮魚居酒屋（週日休）", source: "https://tabelog.com/tokyo/A1301/A130102/13006216/", map: "新日の基 有楽町2-4-4" }
];

const nightList = [
  { title: "澀谷 のんべい横丁", type: "小酒館巷", hours: "約 18:00-深夜", price: "1 杯約 ¥600-1,000", route: "D2 澀谷", source: "https://www.gotokyo.org/", note: "店小，一兩杯就換。" },
  { title: "SHIBUYA SKY", type: "展望台", hours: "依預約時段", price: "約 ¥2,700-3,400", route: "D4 10/27 晴天傍晚", source: "https://www.shibuya-sky.com/", note: "當天看天氣再買。" },
  { title: "新宿 思い出横丁", type: "串燒居酒屋", hours: "多數 17:00-24:00", price: "約 ¥2,500-4,500", route: "D3 室內日晚餐", source: "https://shinjuku-omoide.com/", note: "晚餐兼夜生活。" },
  { title: "新宿ゴールデン街", type: "小酒吧街", hours: "約 20:00-深夜", price: "席料＋1 杯約 ¥1,000-2,000", route: "D3 可選", source: "https://www.gotokyo.org/", note: "看清楚座位費。" },
  { title: "淺草 ホッピー通り", type: "燉煮露天酒場", hours: "白天-22:00 前後", price: "約 ¥1,500-3,000", route: "D4 淺草", source: "https://www.gotokyo.org/", note: "淺草寺西側。" },
  { title: "立飲み たきおか", type: "立飲み", hours: "07:00-23:30", price: "約 ¥1,000-2,000", route: "D5 上野", source: "https://tabelog.com/tokyo/A1311/A131101/13024952/", note: "Cash-on，帶零錢。" },
  { title: "秋葉原電気街夜逛", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D3 室內日", source: "https://www.gotokyo.org/", note: "扭蛋、GiGO。" },
  { title: "有樂町ガード下", type: "高架下居酒屋", hours: "17:00-23:30", price: "約 ¥3,000-5,000", route: "D6 鎌倉回程", source: "https://shin-hinomoto.jp/", note: "新日の基週日休。" },
  { title: "高輪SAUNAS", type: "三溫暖（2026 新）", hours: "11:00-翌2:00", price: "依方案", route: "D3 雨夜可選", source: "https://saunas-saunas.com/takanawa/", note: "回沼袋注意西武末班 00:20。" },
  { title: "高円寺 小酒館／古著街", type: "在地酒場", hours: "傍晚-深夜", price: "約 ¥1,500-3,000", route: "D1-D3（中央線近沼袋）", source: "https://www.gotokyo.org/", note: "古著＋live house。" },
  { title: "六本木", type: "夜店/酒吧", hours: "深夜", price: "依店", route: "D6 可選（日比谷線直回入谷）", source: "https://www.gotokyo.org/", note: "注意拉客店家。" }
];

const tips = [
  { title: "去程改 17:05", body: "SL394 改為 17:05 起飛、21:25 抵成田（易遊網 10/23 通知，需回覆同意）。D1 只剩入境、移動、宵夜、休息。" },
  { title: "兩段住宿", body: "10/24-10/27 沼袋（退房 11:00）；10/27-10/30 上野・入谷（入住 15:00、退房 10:00）。" },
  { title: "依天氣排", body: "10/24-26 雨 → 室內為主；10/28 本週最晴 → 河口湖；10/29 曇 → 鎌倉江之島；10/30 雨 → 百貨地下街。出發前一晚再看 tenki.jp。" },
  { title: "輕井澤（候選，不計入預算）", body: "暫不排入。若 10/29 鎌倉下雨可改輕井澤 Outlet（室內多）：上野 10:39 はくたか → 11:36，約 ¥5,390 起；川上庵 本店午餐。" },
  { title: "10:00 出門・21:00 休息", body: "每天 10:00 出門（河口湖日 08:30），21:00 前後回住處；夜生活都標「可選」。" },
  { title: "沼袋交通", body: "西武新宿線急行不停沼袋，請搭各站停車；轉乘多在高田馬場。" },
  { title: "免費託運「無」", body: "伴手禮多就在泰國獅航官網先加購。" },
  { title: "現金", body: "大統領、たきおか、新日の基都只收現金。帶 ¥30,000-40,000。" },
  { title: "訂位優先", body: "河口湖巴士 10/28（08:15-08:35）→ Yoroniku（7 天前收取消費） → 太昌園 → 新日の基（當日 14:00 後電話）→ 焼肉やまだ（電話）→ SHIBUYA SKY 10/27 當天買。" }
];

const researchSources = [
  { type: "Official", title: "SHIBUYA SKY 官網", url: "https://www.shibuya-sky.com/", takeaways: ["需提前線上購票與時段入場。", "日落時段最熱門，建議出發前兩週關注開賣。"] },
  { type: "Official", title: "明治神宮 參拜案內", url: "https://www.meijijingu.or.jp/", takeaways: ["開門 5:00-6:40（依月而异），關門 16:30-18:30。", "10 月日落早，安排 16:40 前離開較穩。"] },
  
  { type: "Transport", title: "京成 Skyliner", url: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/", takeaways: ["成田 ↔ 日暮里／上野。", "返程 D7 13:20，預留 3 小時到機場。"] },
  { type: "Guide", title: "GO TOKYO 官方旅遊", url: "https://www.gotokyo.org/", takeaways: ["東京官方活動與區域介紹。", "可補週邊營業時間與活動。"] },
  { type: "Area", title: "鎌倉市観光", url: "https://www.kamakura-info.jp/", takeaways: ["鶴岡八幡宮、小町通、江之電路線。", "週末人潮多，早出發。"] }
];


const preDepartureGroups = [
  {
    phase: "10/23 晚上",
    items: [
      { id: "ticket-d0", title: "回覆易遊網同意 SL394 17:05", detail: "抵達 21:25 NRT T1N；4 人同班。" },
      { id: "fuji-d0", title: "訂 10/28 河口湖高速巴士來回", detail: "去 08:15-08:35、回 15:45-16:15（現在就訂）。" },
      { id: "yoroniku-d0", title: "訂 10/25 Yoroniku／10/27 太昌園", detail: "訂不到用備案。" },
      { id: "baggage-d0", title: "加購託運行李", detail: "泰國獅航官網。" },
      { id: "cash-d0", title: "日幣 ¥30,000-40,000", detail: "居酒屋只收現金。" }
    ]
  },
  {
    phase: "10/24 出發當天",
    items: [
      { id: "address-day", title: "兩間住宿日文地址截圖", detail: "中野區新井4-26-2 101／台東區北上野2-23-2。" },
      { id: "late-day", title: "告訴房東 Shiryu 會深夜入住", detail: "約 00:00-00:30；搬家日問 Yoshi 能否提早寄放行李。" },
      { id: "flight-day", title: "14:00 到桃園 T1", detail: "SL394 17:05 起飛。" }
    ]
  }
];

const checklistItems = [
  { id: "ticket", title: "4 人機票：去 10/24 SL394 17:05、回 10/30 SL395 17:25", detail: "去程時間異動需回覆同意。" },
  { id: "stay1", title: "沼袋 10/24-10/27（HMPWSSD3ZE）", detail: "16:00 後入住、11:00 退房。" },
  { id: "stay2", title: "上野入谷 10/27-10/30（HM5N242T99）", detail: "15:00 後入住、10:00 退房；Yoshi +81 80-3490-6745。" },
  { id: "fuji-bus", title: "河口湖巴士 10/28", detail: "高速バスネット。" },
  { id: "umbrella", title: "折傘＋防水外套", detail: "10/24-26、10/30 預報有雨。" },
  { id: "yoroniku", title: "Yoroniku 10/25", detail: "每人 ¥15,000-21,500＋10%，7 天前起收取消費；備案 焼肉ライク／元ちゃん。" },
  { id: "taishoen", title: "太昌園 10/27", detail: "備案 陽山道。" },
  { id: "hinomoto", title: "新日の基 10/29", detail: "當日 14:00 後電話。" },
  { id: "skyliner", title: "Skyliner 10/24 晚、10/30 13:20", detail: "線上買指定席。" },
  { id: "suica", title: "Suica/Pasmo", detail: "iPhone 錢包或機場購買。" },
  { id: "insurance", title: "旅遊保險 10/24-10/30", detail: "醫療、延誤、行李。" }
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
