# -*- coding: utf-8 -*-
"""Patch Tokyo workbench: images, pre-departure checks, youth spots."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
GH = Path(r"F:\代碼\s07362022.github.io\tokyo")

WIKI_IMG = (
    "const wikiImage = (file) =>\n"
    '  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`;\n\n'
    "const IMAGES = {\n"
    '  narita: wikiImage("Narita International Airport 1.jpg"),\n'
    '  akihabara: wikiImage("Akihabara Electric Town 1.jpg"),\n'
    '  meiji: wikiImage("Meiji-jingu torii.jpg"),\n'
    '  shibuya: wikiImage("Shibuya Scramble Crossing (13918290264).jpg"),\n'
    '  kamakura: wikiImage("Tsurugaoka Hachimangu Front approach.jpg"),\n'
    '  enoshima: wikiImage("Enoshima Island.jpg"),\n'
    '  yanaka: wikiImage("Yanaka Ginza shopping street.jpg"),\n'
    '  koenji: wikiImage("Koenji Tokyo Japan.jpg"),\n'
    '  takeshita: wikiImage("Takeshita street Harajuku (156209345).jpg"),\n'
    "};\n"
)


def patch_script(js: str) -> str:
    if "const wikiImage" not in js:
        js = js.replace(
            "const mapUrl = (query) =>",
            WIKI_IMG + "const mapUrl = (query) =>",
        )

    # Replace broken upload.wikimedia thumb URLs with IMAGES refs
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Narita[^"]*"',
        "image: IMAGES.narita",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Akihabara[^"]*"',
        "image: IMAGES.akihabara",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Meiji[^"]*"',
        "image: IMAGES.meiji",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Shibuya[^"]*"',
        "image: IMAGES.shibuya",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Tsurugaoka[^"]*"',
        "image: IMAGES.kamakura",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Enoshima[^"]*"',
        "image: IMAGES.enoshima",
        js,
    )
    js = re.sub(
        r'image: "https://upload\.wikimedia\.org[^"]*Yanaka[^"]*"',
        "image: IMAGES.yanaka",
        js,
    )

    # D1 ramen -> youth pick
    js = js.replace(
        "title: \"中野站附近拉麵（抵達第一餐）\",",
        "title: \"中野拉麵（一風堂 / 麺屋武蔵 等）\",",
    )
    js = js.replace(
        "description: \"中野是拉麵激戰區。可選「中野站拉麵橫丁」或排隊名店；抵達日選不用訂位的店最穩。\",",
        "description: \"中野站南口拉麵激戰區。年輕人常排一風堂中野店、麺屋武蔵或站內拉麵橫丁；抵達日選不用訂位、排隊 <30 分的店。\",",
    )

    # D1 akihabara evening
    js = js.replace(
        "description: \"若體力夠，第一晚先感受電気街霓虹與扭蛋、中古遊戲氛圍。主行程在明天上午，今晚不必買齊。\",",
        "description: \"若體力夠，第一晚先逛 GiGO 遊戲中心、扭蛋會館、Radio Kaikan 外觀拍照。主行程在明天上午，今晚以感受氛圍為主、不必買齊。\",",
    )
    js = js.replace(
        "note: \"可逛 Radio Kaikan、扭蛋會館；太累的話改中野 Broadway 懷舊店就好。\",",
        "note: \"網紅打卡：秋葉原站前電氣街口、GiGO 1 號館。太累就改中野 Broadway 中古玩具。\",",
    )

    # D2 akihabara main
    js = js.replace(
        "title: \"秋葉原電気街主行程\",",
        "title: \"秋葉原主行程：GiGO・扭蛋・超級土豆\",",
    )
    js = js.replace(
        "description: \"主逛 Radio Kaikan（中古遊戲/模型）、扭蛋會館、多慶屋周邊。想更生活感可穿插「神田古書店街」或「合羽橋道具街」方向（步行 15 分圈）。\",",
        "description: \"20 代經典路線：GiGO 秋葉原 1 號館（復古遊戲機）→ 扭蛋會館 → Super Potato（中古紅白機）→ Radio Kaikan 模型樓。想拍照可加神田明神（距離秋葉原步行 10 分，御守很可愛）。\",",
    )

    js = js.replace(
        "title: \"スーパーポジション（喫茶・立食）\",",
        "title: \"扭蛋會館 / GiGO 歇腳\",",
    )
    js = js.replace(
        "description: \"秋葉原少數老派喫茶氛圍店，適合短暫歇腳。若客滿可改站前星巴克或吉野家旁小巷咖啡。\",",
        "description: \"扭蛋會館 5 樓整層扭蛋，IG 常見；或 GiGO 裡面夾娃娃。順便拍中央通霓虹街景。\",",
    )
    js = js.replace(
        "place: \"スーパーポジション 秋葉原\",",
        "place: \"秋葉原 扭蛋会館\",",
    )
    js = js.replace(
        'tags: ["喫茶", "生活感"]',
        'tags: ["網紅", "扭蛋"]',
        1,
    )

    js = js.replace(
        "title: \"秋葉原午餐（拉麵/牛丼/咖哩）\",",
        "title: \"秋葉原午餐（拉麵一番街 / 牛かつ）\",",
    )
    js = js.replace(
        "description: \"車站周邊選一間不用排太久隊的店。想居酒屋氛圍可找「秋葉原居酒屋橫丁」但周六中午選項較少。\",",
        "description: \"駅ビル「アキバ・イチ」拉麵一番街，或排隊名店牛かつもとむら秋葉原店（炸牛排）。周六 12:00 前到較少排隊。\",",
    )

    js = js.replace(
        "title: \"表參道 / 原宿咖啡休息\",",
        "title: \"竹下通 + % Arabica 原宿\",",
    )
    js = js.replace(
        "description: \"Blue Bottle 表參道或神宮前小巷咖啡。坐下回血，不要硬逛完表參道全線。\",",
        "description: \"明治神宮出來走竹下通（可麥當勞可麗餅、彩虹糖）拍 10-15 分鐘就好；再到 % Arabica 神宮前或 The Matcha Tokyo 坐下回血。\",",
    )
    js = js.replace(
        "place: \"表參道カフェ\",",
        "place: \"% Arabica Tokyo 神宮前\",",
    )

    js = js.replace(
        "title: \"澀谷燒肉或居酒屋晚餐\",",
        "title: \"澀谷晚餐：牛かつもとむら / Uobei 壽司\",",
    )
    js = js.replace(
        "description: \"必吃燒肉/居酒屋。澀谷橫丁或宇田川町一帶選店；周六建議 18:00 前先線上訂位或 19:00 前到店。\",",
        "description: \"年輕人愛：牛かつもとむら涉谷（炸牛排排隊名店）或 Uobei 涉谷（迴轉壽司平板點餐、便宜快）。想居酒屋改澀谷橫丁；周六 18:30 前到店。\",",
    )

    # D3 kamakura high school
    js = js.replace(
        "title: \"江之電（鎌倉高校前/長谷/江之島）\",",
        "title: \"江之電：鎌倉高校前（灌籃高手）→ 江之島\",",
    )
    js = js.replace(
        "description: \"經典海景電車。鎌倉高校前站拍照要注意交通安全；長谷可看大佛（入場約 ¥300）。\",",
        "description: \"經典海景電車。鎌倉高校前站路口是灌籃高手聖地，拍照注意號誌與車流、不要站馬路中央。可跳過長谷大佛直衝江之島。\",",
    )
    js = js.replace(
        'place: "江ノ電 鎌倉高校前"',
        'place: "鎌倉高校前駅",\n        tags: ["網紅", "灌籃高手"],\n        image: IMAGES.enoshima',
        1,
    )

    # D4 koenji
    js = js.replace(
        "description: \"古著、唱片、小劇場氛圍。比澀谷/原宿更在地，適合七年後看東京年輕人文化。\",",
        "description: \"古著、唱片、Live house 氛圍。二三四五北口小巷是年輕人挖寶聖地，比觀光區更「住在東京」的感覺。\",",
    )
    js = js.replace(
        'place: "高円寺"',
        'place: "高円寺",\n        image: IMAGES.koenji',
        1,
    )

    # preDepartureChecklist insert before checklistItems
    if "preDepartureGroups" not in js:
        insert = '''
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

'''
        js = js.replace("const checklistItems = [", insert + "const checklistItems = [")

    # Expand checklistItems
    extra_items = '''
  { id: "tabelog", title: "Tabelog 帳號 / 收藏店", detail: "牛かつもとむら、居酒屋先加入收藏；周六排隊先看即時等候。" },
  { id: "instagram", title: "存 IG 打卡點", detail: "鎌倉高校前、澀谷 Sky、竹下通、神田明神、江之島燈塔。" },
  { id: "powerbank", title: "行動電源與轉接頭", detail: "日本 100V，台灣電器多可用；行動電源不可托運。" },
  { id: "medicine", title: "常備藥", detail: "腸胃藥、止痛、OK 繃；鎌倉步行多。" },
'''
    if '"tabelog"' not in js:
        js = js.replace(
            '  { id: "souvenir", title: "伴手禮 D5 早上補貨", detail: "中野站與百貨地下；機場最後補。" }\n];',
            '  { id: "souvenir", title: "伴手禮 D5 早上補貨", detail: "中野站與百貨地下；機場最後補。" },\n' + extra_items + "];",
        )

    # foodList youth
    js = js.replace(
        "const foodList = [",
        "const foodList = [\n"
        '  { title: "一風堂 中野店", area: "中野", price: "約 ¥900-1,200", bestFor: "D1 抵達拉麵", source: "https://www.ippudo.com/", map: "一風堂 中野" },\n'
        '  { title: "牛かつもとむら 秋葉原/渋谷", area: "秋葉原/澀谷", price: "約 ¥1,200-1,800", bestFor: "D2 午餐或晚餐排隊名店", source: "https://motomura.jp/", map: "牛かつもとむら 秋葉原" },\n'
        '  { title: "% Arabica 神宮前", area: "原宿", price: "咖啡約 ¥500-700", bestFor: "D2 明治神宮後 IG 咖啡", source: "https://arabicacoffee.jp/", map: "% Arabica Tokyo 神宮前" },\n'
        '  { title: "Uobei 渋谷道玄坂店", area: "澀谷", price: "約 ¥2,000-3,500", bestFor: "D2 晚餐快食壽司", source: "https://www.uobei.com/", map: "Uobei 渋谷" },\n'
        '  { title: "Bills 鎌倉", area: "鎌倉", price: "鬆餅/brunch 約 ¥1,500+", bestFor: "D3 小町通旁（可選）", source: "https://billsjapan.com/", map: "Bills 鎌倉" },\n',
    )

    # nightList youth
    js = js.replace(
        '  { title: "秋葉原電気街夜景", type: "散步",',
        '  { title: "MIYASHITA PARK 屋上", type: "夜景/酒吧", hours: "依店舗", price: "免費入場；酒吧另計", route: "D2 澀谷 Sky 前後", source: "https://www.shibuya-scramble-square.com/", note: "年輕人愛的複合商場，屋上綠洲拍照。" },\n'
        '  { title: "秋葉原電気街夜景", type: "散步",',
    )

    # tips youth
    js = js.replace(
        '  { title: "七年後的東京", body: "現金仍重要、預約制變多（澀谷 Sky、部分餐廳）。Tabelog/Google 訂位先習慣。" }\n];',
        '  { title: "七年後的東京", body: "現金仍重要、預約制變多（澀谷 Sky、部分餐廳）。Tabelog/Google 訂位先習慣。" },\n'
        '  { title: "20 代排隊策略", body: "牛かつもとむら、一風堂熱門時段先排隊再逛；Uobei、扭蛋會館通常不用訂位。" },\n'
        '  { title: "拍照禮儀", body: "鎌倉高校前勿站馬路中央；神社與電車內避免擋路架腳架。" }\n];',
    )

    # renderPreDeparture + elements
    if "preDepartureGroups:" not in js:
        js = js.replace(
            "  tipsGrid: document.querySelector(\"#tipsGrid\")\n};",
            "  tipsGrid: document.querySelector(\"#tipsGrid\"),\n"
            "  preDepartureGroups: document.querySelector(\"#preDepartureGroups\")\n};",
        )

    if "function renderPreDeparture" not in js:
        render_fn = '''
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

'''
        js = js.replace("function renderChecklist() {", render_fn + "function renderChecklist() {")

        js = js.replace(
            "  elements.checklist.addEventListener(\"change\", saveChecklist);",
            "  elements.checklist.addEventListener(\"change\", saveChecklist);\n"
            "  elements.preDepartureGroups?.addEventListener(\"change\", savePreDeparture);",
        )
        js = js.replace(
            "renderChecklist();\nhydrateNotes();",
            "renderPreDeparture();\nrenderChecklist();\nhydrateNotes();",
        )

    return js


def patch_html(html: str) -> str:
    # Fix photo strip
    html = re.sub(
        r'<section class="photo-strip"[^>]*>.*?</section>',
        '''<section class="photo-strip" aria-label="行程主題照片">
          <figure>
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Akihabara%20Electric%20Town%201.jpg?width=900" alt="秋葉原電気街夜景" loading="lazy" />
            <figcaption>秋葉原</figcaption>
          </figure>
          <figure>
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Meiji-jingu%20torii.jpg?width=900" alt="明治神宮鳥居" loading="lazy" />
            <figcaption>明治神宮</figcaption>
          </figure>
          <figure>
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya%20Scramble%20Crossing%20(13918290264).jpg?width=900" alt="澀谷十字路口" loading="lazy" />
            <figcaption>澀谷 Sky 一帶</figcaption>
          </figure>
          <figure>
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Enoshima%20Island.jpg?width=900" alt="江之島" loading="lazy" />
            <figcaption>鎌倉・江之島</figcaption>
          </figure>
        </section>''',
        html,
        flags=re.DOTALL,
    )

    nav_old = '''          <a href="#taiwan">台灣出發</a>
                    <a href="#sources">參考來源</a>
          <a href="#prep">預約清單</a>'''
    nav_new = '''          <a href="#taiwan">台灣出發</a>
          <a href="#life">生活感</a>
          <a href="#food">餐廳</a>
          <a href="#night">夜景</a>
          <a href="#tips">行前提醒</a>
          <a href="#prep">行前檢查</a>
          <a href="#sources">參考來源</a>'''
    html = html.replace(nav_old, nav_new)

    html = html.replace(
        '<button class="filter-chip" type="button" data-filter="hutong">胡同</button>',
        '<button class="filter-chip" type="button" data-filter="hutong">街區</button>',
    )

    html = html.replace(
        "<h1>東京 4 晚：秋葉原、明治神宮、鎌倉江之島與澀谷 Sky。</h1>",
        "<h1>東京 4 晚：秋葉原、明治神宮、鎌倉江之島與澀谷 Sky（20 代友善路線）。</h1>",
    )

    life_old = '''              <h3>電気街 + 喫茶 + 中古遊戲</h3>
              <p>
                D1 20:30 可選暖身，D2 10:00-12:00 主行程。Radio Kaikan、扭蛋會館、多慶屋周邊；
                穿插超級ポジション等喫茶，比觀光客路線更有七年後重訪的熟悉感。
              </p>'''
    life_new = '''              <h3>GiGO・扭蛋會館・Super Potato</h3>
              <p>
                D1 晚可選暖身，D2 上午主行程。20 代常逛 GiGO 1 號館、扭蛋會館、Super Potato 中古遊戲；
                拍照可加神田明神。中野 Broadway 是住宿旁懷舊挖寶備案。
              </p>'''
    html = html.replace(life_old, life_new)

    prep_insert = '''        <section class="prep-grid" id="prep">
          <div class="prep-card prep-card-wide">
            <p class="eyebrow">行前檢查</p>
            <h2>分階段出發前檢查（可勾選、會記住）</h2>
            <p class="section-lead">14 天前 → 3 天前 → 出發當天。與下方「預約清單」一起用，出發前掃一次即可。</p>
            <div id="preDepartureGroups"></div>
          </div>
'''
    html = html.replace(
        '        <section class="prep-grid" id="prep">\n          <div class="prep-card">',
        prep_insert + '          <div class="prep-card">',
    )

    html = html.replace(
        'placeholder="例如：想吃的烤鴨店、不能太早起的日子、同行者偏好..."',
        'placeholder="例如：秋葉原想買的模型、牛かつ要不要排隊、同行者想去的店..."',
    )

    dep_grid = '''            <article class="info-card">
              <h3>出發前最後檢查</h3>
              <p>先下載 .ics → 到「行前檢查」勾完 14天/3天/當天 → 測試鬧鐘。</p>
            </article>
            <article class="info-card">
              <h3>20 代熱門店提醒</h3>
              <p>澀谷 Sky、牛かつもとむら、鎌倉高校前要排隊或預約；扭蛋會館、Uobei 通常現場即可。</p>
            </article>'''
    html = html.replace(
        '''                        <article class="info-card">
              <h3>出發前最後檢查</h3>
              <p>先打開一次本頁，先下載 .ics 測試行事曆提醒是否正常。</p>
            </article>''',
        dep_grid,
    )

    return html


def patch_css(css: str) -> str:
    if ".prep-card-wide" not in css:
        css += """

.prep-card-wide {
  grid-column: 1 / -1;
}

.section-lead {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 0.95rem;
}

.pre-phase {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.pre-phase:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.pre-phase h3 {
  margin: 0 0 12px;
  font-size: 1rem;
  color: var(--lake);
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
        if (ROOT / "tokyo-departure-pack.ics").exists():
            import shutil
            shutil.copy(ROOT / "tokyo-departure-pack.ics", folder / "tokyo-departure-pack.ics")

    print("Patched:", ROOT, GH)


if __name__ == "__main__":
    main()
