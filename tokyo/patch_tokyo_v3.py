# -*- coding: utf-8 -*-
"""v3: Akihabara D1 only, transit tutorials, trip visualization."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
GH = Path(r"F:\代碼\s07362022.github.io\tokyo")

D1_BLOCK = '''  {
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
  },'''

D2_BLOCK = '''  {
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
        description: "牛かつもとむura 涉谷或 Uobei 迴轉壽司；周六 18:30 前到店較少排隊。",
        transit: "步行；JR 回中野約 15 分。",
        booking: "熱門店建議 Tabelog 訂位。",
        note: "末班車約 00:30 前。",
        place: "渋谷 牛かつもとむら"
      }
    ]
  },'''


def patch_script(js: str) -> str:
    # IMAGES extras
    if "nexTrain" not in js:
        js = js.replace(
            '  greaterTokyo: wikiImage("Greater Tokyo rail network.png"),\n};',
            '  greaterTokyo: wikiImage("Greater Tokyo rail network.png"),\n'
            '  nexTrain: wikiImage("Narita Express 2000 series.jpg"),\n'
            '  suica: wikiImage("Suica card.jpg"),\n'
            '  ticketGate: wikiImage("Ticket gates at Tokyo Station.jpg"),\n'
            '  ticketMachine: wikiImage("Ticket vending machines at a JR station.jpg"),\n'
            '  naritaStation: wikiImage("Narita Airport Terminal 1 Station 20141220.jpg"),\n'
            "};",
        )

    # Replace D1 and D2 itinerary blocks
    js = re.sub(
        r'  \{\s*id: "d1",.*?^\s*\},\s*\n\s*\{\s*id: "d2",.*?^\s*\},\s*\n\s*\{\s*id: "d3",',
        D1_BLOCK + "\n" + D2_BLOCK + "\n  {\n    id: \"d3\",",
        js,
        count=1,
        flags=re.MULTILINE | re.DOTALL,
    )

    # Calendar akihabara
    js = js.replace(
        'id: "akihabara-d2",\n    title: "10/24 秋葉原 + 明治神宮 + 澀谷 Sky",\n    start: "20261024T093000",\n    end: "20261024T213000",\n    location: "秋葉原 / 原宿 / 澀谷",\n    description: "10:00 秋葉原主行程 2h → 午餐 → 明治神宮（16:40 前離開）→ 原宿咖啡 → 澀谷 Sky → 澀谷燒肉/居酒屋。",',
        'id: "akihabara-d1",\n    title: "10/23 秋葉原電気街（唯一一天）",\n    start: "20261023T203000",\n    end: "20261023T230000",\n    location: "秋葉原",\n    description: "20:30 起 GiGO、扭蛋會館、Super Potato。僅 D1，之後行程不再排秋葉原。",',
    )

    js = js.replace(
        'note: "秋葉原排 D1 晚 + D2 上午，最常用路線。"',
        'note: "秋葉原只在 D1 晚上；這條路線當天會用到。"',
    )

    # routeDiagrams D2 fix
    js = js.replace(
        'day: "D1/D2",\n    title: "中野 ⇄ 秋葉原（最常用）",',
        'day: "D1",\n    title: "中野 ⇄ 秋葉原（僅第一天晚上）",',
    )
    js = js.replace(
        '''    day: "D2",
    title: "秋葉原 → 原宿 → 澀谷（周六主線）",
    line: "yamanote",
    steps: [
      { label: "秋葉原", sub: "JR", icon: "🎮" },
      { label: "原宿", sub: "明治神宮・竹下通", icon: "⛩" },
      { label: "澀谷", sub: "Sky 夜景", icon: "🌃" }
    ],
    tips: ["山手線環狀", "原宿→澀谷 1 站", "16:40 前離開明治神宮"]''',
        '''    day: "D2",
    title: "中野 → 原宿 → 澀谷（無秋葉原）",
    line: "yamanote",
    steps: [
      { label: "中野", sub: "JR 出發", icon: "🏠", hub: true },
      { label: "原宿", sub: "明治神宮・竹下通", icon: "⛩" },
      { label: "澀谷", sub: "Sky 夜景", icon: "🌃" }
    ],
    tips: ["不經秋葉原", "原宿→澀谷 1 站", "16:40 前離開明治神宮"]''',
    )

    js = js.replace(
        'note: "D2 會用到：秋葉原 → 原宿 → 澀谷，山手線環狀一圈就懂。"',
        'note: "D2 用：中野 → 原宿 → 澀谷，山手線環狀一圈就懂。"',
    )

    # expert audit
    js = js.replace(
        '{ title: "總評：秋葉原在前兩天、體力分配合理", score: "強度 7/10", body: "D1 晚 + D2 上午完成秋葉原；D2 下午明治神宮與澀谷 Sky；D3 鎌倉全日；D4 生活感；D5 返程。每天都有撤退點。" },\n'
        '  { title: "秋葉原：已排前兩天", score: "已調整", body: "依你要求，主行程在 10/24 10:00-12:00，可選暖身在 10/23 晚。不再放 D4。" },\n'
        '  { title: "D2 時間緊：明治 16:40 前離開", score: "偏緊", body: "秋葉原 2h + 午餐 + 移動後，明治神宮只剩約 2h。表參道可縮短。" },',
        '{ title: "總評：秋葉原僅 D1，D2 更從容", score: "強度 6.5/10", body: "D1 晚完成秋葉原；D2 直達原宿逛明治神宮與澀谷 Sky；D3 鎌倉；D4 生活感；D5 返程。" },\n'
        '  { title: "秋葉原：僅 10/23 一天", score: "已調整", body: "20:30-23:00 秋葉原主行程；D2 起不再安排秋葉原。" },\n'
        '  { title: "D2 時間：移除秋葉原後更鬆", score: "舒適", body: "10:45 抵明治神宮，有 2h+ 參拜時間；16:40 前離開仍充裕。" },',
    )

    js = js.replace(
        '{ title: "明治神宮關門", body: "10 月約 16:40 停止入內。D2 秋葉原別逛過頭。" },',
        '{ title: "明治神宮關門", body: "10 月約 16:40 停止入內。D2 已不排秋葉原，時間較充裕。" },',
    )

    js = js.replace(
        '{ title: "秋葉原電気街夜景", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D1 可選",',
        '{ title: "秋葉原電気街夜景", type: "散步", hours: "店舖約至 21:00-22:00", price: "免費", route: "D1 唯一一天",',
    )

    js = js.replace(
        'bestFor: "D2 午餐或晚餐排隊名店", source: "https://motomura.jp/", map: "牛かつもとむら 秋葉原" },',
        'bestFor: "D1 秋葉原或 D2 澀谷晚餐", source: "https://motomura.jp/", map: "牛かつもとむら 秋葉原" },',
    )
    js = js.replace(
        '{ title: "秋葉原午餐（駅周邊）", area: "秋葉原", price: "約 ¥900-1,500", bestFor: "D2 上午後",',
        '{ title: "秋葉原駅ビル拉麵一番街", area: "秋葉原", price: "約 ¥900-1,500", bestFor: "D1 晚上可順便吃",',
    )

    js = js.replace(
        '{ id: "akihabara", title: "秋葉原購物清單（可選）", detail: "D1 晚暖身 + D2 上午主買；先逛後結帳。" },',
        '{ id: "akihabara", title: "秋葉原購物清單（僅 D1）", detail: "10/23 20:30 起主買；先逛後結帳，之後不再回。" },',
    )

    if "tripHub" not in js:
        insert_point = "const routeCards = ["
        hub_data = '''
const tripHub = {
  center: { id: "nakano", label: "中野", sub: "住宿基地", day: "hub" },
  nodes: [
    { id: "nrt", label: "成田 NRT", sub: "N'EX", day: "d1", angle: -90, color: "#2c5282" },
    { id: "akiba", label: "秋葉原", sub: "僅 D1", day: "d1", angle: -30, color: "#c4a574" },
    { id: "meiji", label: "明治神宮", sub: "D2", day: "d2", angle: 30, color: "#2d6a4f" },
    { id: "shibuya", label: "澀谷 Sky", sub: "D2", day: "d2", angle: 70, color: "#6b4c9a" },
    { id: "kamakura", label: "鎌倉", sub: "D3", day: "d3", angle: 150, color: "#4a6fa5" },
    { id: "enoshima", label: "江之島", sub: "D3", day: "d3", angle: 180, color: "#3d8b8b" },
    { id: "yanaka", label: "谷中銀座", sub: "D4", day: "d4", angle: 210, color: "#8b6f4e" },
    { id: "koenji", label: "高圓寺", sub: "D4", day: "d4", angle: 240, color: "#73506a" },
    { id: "nrt-out", label: "成田返程", sub: "D5", day: "d5", angle: -120, color: "#2c5282" }
  ],
  edges: [
    { from: "nakano", to: "nrt", label: "N'EX" },
    { from: "nakano", to: "akiba", label: "總武線 10分" },
    { from: "nakano", to: "meiji", label: "JR 30分" },
    { from: "meiji", to: "shibuya", label: "1站" },
    { from: "nakano", to: "kamakura", label: "經新宿" },
    { from: "kamakura", to: "enoshima", label: "江之電" },
    { from: "nakano", to: "yanaka", label: "JR" },
    { from: "yanaka", to: "koenji", label: "D4" },
    { from: "nakano", to: "nrt-out", label: "N'EX" }
  ]
};

const tripDayTrees = [
  {
    day: "D1", date: "10/23", color: "#c4a574",
    root: "中野基地",
    branches: [
      { label: "成田入境", children: ["N'EX 直達中野", "買 Suica"] },
      { label: "秋葉原（唯一）", children: ["GiGO", "扭蛋會館", "Super Potato"] }
    ]
  },
  {
    day: "D2", date: "10/24", color: "#2d6a4f",
    root: "中野基地",
    branches: [
      { label: "原宿", children: ["明治神宮", "竹下通", "% Arabica"] },
      { label: "澀谷", children: ["澀谷 Sky", "晚餐"] }
    ]
  },
  {
    day: "D3", date: "10/25", color: "#4a6fa5",
    root: "中野基地",
    branches: [
      { label: "新宿轉乘", children: ["小田急", "周遊券"] },
      { label: "鎌倉・江之島", children: ["八幡宮", "高校前", "江之島"] }
    ]
  },
  {
    day: "D4", date: "10/26", color: "#8b6f4e",
    root: "中野基地",
    branches: [
      { label: "下町", children: ["谷中銀座", "神保町喫茶"] },
      { label: "夜", children: ["高圓寺立飲", "錢湯可選"] }
    ]
  },
  {
    day: "D5", date: "10/27", color: "#2c5282",
    root: "中野基地",
    branches: [
      { label: "返程", children: ["伴手禮", "N'EX", "SL395"] }
    ]
  }
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

'''
        js = js.replace(insert_point, hub_data + insert_point)

    # elements + render functions
    if "tripHubCanvas" not in js:
        js = js.replace(
            "  transitTipGrid: document.querySelector(\"#transitTipGrid\")\n};",
            "  transitTipGrid: document.querySelector(\"#transitTipGrid\"),\n"
            "  tripHubCanvas: document.querySelector(\"#tripHubCanvas\"),\n"
            "  tripDayTreeGrid: document.querySelector(\"#tripDayTreeGrid\"),\n"
            "  transitTutorialGrid: document.querySelector(\"#transitTutorialGrid\")\n};",
        )

    if "function renderTripHub" not in js:
        render = '''
function renderTripHub() {
  const svg = elements.tripHubCanvas;
  if (!svg || !tripHub) return;
  const cx = 220, cy = 200, r = 130;
  const dayLabels = { d1: "D1", d2: "D2", d3: "D3", d4: "D4", d5: "D5", hub: "基地" };
  const pos = { nakano: { x: cx, y: cy } };
  tripHub.nodes.forEach((node) => {
    const rad = (node.angle * Math.PI) / 180;
    pos[node.id] = { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });
  const lines = tripHub.edges.map((edge) => {
    const from = pos[edge.from] || pos.nakano;
    const to = pos[edge.to];
    if (!to) return "";
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" class="hub-edge" />
      <text x="${mx}" y="${my - 4}" class="hub-edge-label">${edge.label}</text>`;
  }).join("");
  const nodeDots = tripHub.nodes.map((node) => {
    const p = pos[node.id];
    return `<g class="hub-node hub-${node.day}">
      <circle cx="${p.x}" cy="${p.y}" r="28" fill="${node.color}" opacity="0.92" />
      <text x="${p.x}" y="${p.y - 4}" class="hub-node-label">${node.label}</text>
      <text x="${p.x}" y="${p.y + 12}" class="hub-node-sub">${node.sub}</text>
    </g>`;
  }).join("");
  const center = `<g class="hub-center">
    <circle cx="${cx}" cy="${cy}" r="38" class="hub-center-circle" />
    <text x="${cx}" y="${cy - 2}" class="hub-center-label">${tripHub.center.label}</text>
    <text x="${cx}" y="${cy + 14}" class="hub-center-sub">${tripHub.center.sub}</text>
  </g>`;
  svg.innerHTML = `<defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9aa3b0"/></marker></defs>
    ${lines}${nodeDots}${center}`;
}

function renderTripDayTrees() {
  if (!elements.tripDayTreeGrid) return;
  elements.tripDayTreeGrid.innerHTML = tripDayTrees.map((tree) => `
    <article class="day-tree-card" style="--tree-color:${tree.color}">
      <header><span class="tree-day">${tree.day}</span><span class="tree-date">${tree.date}</span></header>
      <div class="tree-root">${tree.root}</div>
      <ul class="tree-branches">
        ${tree.branches.map((branch) => `
          <li class="tree-branch">
            <strong>${branch.label}</strong>
            <ul>${branch.children.map((c) => `<li>${c}</li>`).join("")}</ul>
          </li>
        `).join("")}
      </ul>
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

'''
        js = js.replace("function renderTransitMaps() {", render + "function renderTransitMaps() {")

        js = js.replace(
            "renderTransitMaps();\nrenderRouteDiagrams();",
            "renderTripHub();\nrenderTripDayTrees();\nrenderTransitTutorials();\nrenderTransitMaps();\nrenderRouteDiagrams();",
        )

    return js


def patch_html(html: str) -> str:
    html = html.replace(
        "<strong>中野基地，秋葉原排前兩天</strong>\n              <small>D1 晚可選 + D2 上午主行程；鎌倉獨立一日。</small>",
        "<strong>中野基地，秋葉原僅 D1</strong>\n              <small>10/23 晚秋葉原；D2 起明治神宮・澀谷。</small>",
    )
    html = html.replace(
        "另可下載 .ics，把澀谷 Sky 預約、鎌倉周遊券、秋葉原主行程與返程提醒加入行事曆。",
        "含行程視覺化地圖、交通 Step 教學；可下載 .ics 加入行事曆。",
    )
    html = html.replace(
        '<a class="button ghost" href="#departure-pack">下載行事曆</a>',
        '<a class="button ghost" href="#trip-visual">行程地圖</a>\n'
        '              <a class="button ghost" href="#transit-guide">交通教學</a>',
    )

    if 'id="trip-visual"' not in html:
        visual = '''
        <section class="trip-visual-section" id="trip-visual">
          <div class="section-heading">
            <div>
              <p class="eyebrow">行程視覺化</p>
              <h2>中心圖・每日樹狀圖</h2>
            </div>
            <span class="soft-badge">中野為圓心，放射到各日景點</span>
          </div>
          <p class="section-lead">先看中心圖掌握「從住宿出發」的全局，再展開每日樹狀圖看細節動線。</p>

          <h3 class="subsection-title">中心放射圖（中野基地）</h3>
          <div class="hub-canvas-wrap">
            <svg id="tripHubCanvas" class="trip-hub-canvas" viewBox="0 0 440 400" role="img" aria-label="以中野為中心的行程放射圖"></svg>
            <ul class="hub-legend">
              <li><span class="leg d1"></span>D1 抵達・秋葉原</li>
              <li><span class="leg d2"></span>D2 明治神宮・澀谷</li>
              <li><span class="leg d3"></span>D3 鎌倉江之島</li>
              <li><span class="leg d4"></span>D4 谷中・高圓寺</li>
              <li><span class="leg d5"></span>D5 返程</li>
            </ul>
          </div>

          <h3 class="subsection-title">每日樹狀圖</h3>
          <div class="trip-day-tree-grid" id="tripDayTreeGrid"></div>
        </section>

'''
        html = html.replace(
            '        <section class="departure-section" id="departure-pack">',
            visual + '        <section class="departure-section" id="departure-pack">',
        )

    html = html.replace(
        '<a href="#itinerary">每日行程</a>',
        '<a href="#trip-visual">行程地圖</a>\n          <a href="#itinerary">每日行程</a>',
    )

    html = html.replace(
        '<p class="section-lead">\n            先看「每日路線示意」掌握動線，需要轉乘時再對照下方地鐵全圖。實戰仍以 Google Maps 月台資訊為準。\n          </p>',
        '<p class="section-lead">\n            新手先看「圖文教學」學會買票與刷卡；再對照路線示意與地鐵全圖。實戰以 Google Maps 月台資訊為準。\n          </p>\n\n          <h3 class="subsection-title">圖文教學：機場→市區、Suica 刷卡</h3>\n          <div class="transit-tutorial-grid" id="transitTutorialGrid"></div>',
    )

    html = html.replace(
        '<span class="soft-badge">秋葉原已排 D1 晚 + D2 上午</span>',
        '<span class="soft-badge">秋葉原僅 D1 晚上</span>',
    )
    html = html.replace(
        'D1 晚可選暖身，D2 10:00-12:00 主行程',
        'D1 20:30 主行程（唯一一天）',
    )
    return html


def patch_css(css: str) -> str:
    if ".trip-visual-section" not in css:
        css += """

/* --- 行程視覺化 --- */
.trip-visual-section {
  margin-bottom: 48px;
}

.hub-canvas-wrap {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.trip-hub-canvas {
  width: 100%;
  max-width: 440px;
  height: auto;
  min-height: 320px;
}

.hub-edge {
  stroke: #b8c0cc;
  stroke-width: 1.5;
  stroke-dasharray: 5 4;
}

.hub-edge-label {
  font-size: 9px;
  fill: var(--muted);
  text-anchor: middle;
}

.hub-center-circle {
  fill: var(--charcoal);
  stroke: var(--gold);
  stroke-width: 3;
}

.hub-center-label {
  fill: #fff6e8;
  font-size: 13px;
  font-weight: 700;
  text-anchor: middle;
}

.hub-center-sub {
  fill: #d4c4a8;
  font-size: 9px;
  text-anchor: middle;
}

.hub-node-label {
  fill: #fff;
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
}

.hub-node-sub {
  fill: rgba(255,255,255,0.85);
  font-size: 8px;
  text-anchor: middle;
}

.hub-legend {
  list-style: none;
  margin: 0;
  padding: 8px 0;
  font-size: 0.85rem;
}

.hub-legend li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.hub-legend .leg {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hub-legend .leg.d1 { background: #c4a574; }
.hub-legend .leg.d2 { background: #2d6a4f; }
.hub-legend .leg.d3 { background: #4a6fa5; }
.hub-legend .leg.d4 { background: #8b6f4e; }
.hub-legend .leg.d5 { background: #2c5282; }

.trip-day-tree-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

.day-tree-card {
  padding: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-left: 4px solid var(--tree-color, var(--gold));
  border-radius: var(--radius);
}

.day-tree-card header {
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-bottom: 8px;
}

.tree-day {
  font-weight: 700;
  color: var(--tree-color);
}

.tree-date {
  font-size: 0.8rem;
  color: var(--muted);
}

.tree-root {
  padding: 6px 10px;
  margin-bottom: 10px;
  background: var(--charcoal);
  color: #fff6e8;
  border-radius: 4px;
  font-size: 0.88rem;
  font-weight: 600;
  text-align: center;
}

.tree-branches {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tree-branch {
  margin-bottom: 10px;
  padding-left: 12px;
  border-left: 2px solid var(--tree-color);
}

.tree-branch strong {
  display: block;
  font-size: 0.88rem;
  margin-bottom: 4px;
}

.tree-branch ul {
  margin: 0;
  padding-left: 14px;
  font-size: 0.82rem;
  color: var(--muted);
}

.transit-tutorial-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 28px;
}

.tutorial-card {
  padding: 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.tutorial-card h3 {
  margin: 0 0 6px;
}

.tutorial-intro {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 0.9rem;
}

.tutorial-steps {
  display: grid;
  gap: 14px;
}

.tutorial-step {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 8px 14px;
  padding: 12px;
  background: var(--paper);
  border-radius: var(--radius);
  border: 1px solid var(--line);
}

.step-num {
  grid-row: 1 / 3;
  align-self: start;
  padding: 6px 10px;
  background: var(--charcoal);
  color: #fff6e8;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
}

.step-body h4 {
  margin: 0 0 4px;
  font-size: 0.95rem;
}

.step-body p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.45;
}

.step-img {
  grid-column: 1 / -1;
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
}

@media (max-width: 720px) {
  .hub-canvas-wrap {
    grid-template-columns: 1fr;
  }

  .tutorial-step {
    grid-template-columns: 1fr;
  }

  .step-num {
    grid-row: auto;
    width: fit-content;
  }
}
"""
    return css


def main():
    js = (ROOT / "script.js").read_text(encoding="utf-8")
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    js = patch_script(js)
    html = patch_html(html)
    css = patch_css(css)
    for folder in (ROOT, GH):
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "script.js").write_text(js, encoding="utf-8")
        (folder / "index.html").write_text(html, encoding="utf-8")
        (folder / "styles.css").write_text(css, encoding="utf-8")
    print("v3 OK")


if __name__ == "__main__":
    main()
