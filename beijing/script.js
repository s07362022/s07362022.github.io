const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const amapUrl = (query) => `https://www.amap.com/search?query=${encodeURIComponent(query)}`;

const itinerary = [
  {
    id: "d1",
    date: "9/23（三）",
    title: "抵達北京、入住管莊、勇盛深夜牛肉麵",
    summary: "抵達日不排硬景點。先完成入境、取行李、入住、支付/地圖/叫車測試，晚上用 24 小時勇盛牛肉麵當第一餐。",
    stats: ["抵達日", "DD優先", "晚餐可到22:30"],
    stops: [
      {
        time: "16:15",
        title: "抵達北京首都機場 T3",
        category: "transport",
        status: "confirmed",
        price: "機票已訂；機場線單程 ¥25，DD/出租車依路況",
        route: "PEK T3 → 北京傳媒大學管莊地鐵站亞朵酒店",
        eta: "入境+行李 60-90 分；DD 約 35-55 分",
        description: "首都機場 T3 網約車上車點在 3 號停車樓 B2 層 H 區；若搭機場線，官方列單程 ¥25。",
        transit: "建議 DD 到飯店。帶行李轉地鐵較累，且第一天要保留體力。",
        booking: "確認 CA186、行李、入境證件；叫車 App 目的地存飯店中文名。",
        note: "北京大型站點安檢多，第一天先把支付寶/微信支付、地圖、DD 都測好。",
        place: "北京首都國際機場 T3",
      },
      {
        time: "18:30",
        title: "入住北京傳媒大學管莊地鐵站亞朵酒店",
        category: "rest",
        status: "confirmed",
        price: "住宿已訂；早餐平台列 CNY 48/人",
        route: "飯店地址：北京市朝陽區朝陽路 28 號 1 號樓",
        eta: "辦入住 15-25 分",
        description: "平台資料顯示飯店近管莊地鐵站，24 小時櫃台，早餐 07:00-10:30。",
        transit: "入住後若要進城，地鐵 1 號線/八通線最直覺；深夜回程用 DD。",
        booking: "9/28 退房後行李寄存要先問櫃台。",
        note: "把隔天出門小包整理好：證件、行動電源、水、薄外套。",
        place: "北京傳媒大學管莊地鐵站亞朵酒店",
      },
      {
        time: "20:15",
        title: "勇盛牛肉麵紅廟店",
        category: "food",
        status: "verified",
        price: "大眾點評片段列約 ¥36/人；以現場為準",
        route: "飯店 → 勇盛牛肉麵紅廟店 → 飯店",
        eta: "DD 約 25-40 分；地鐵+步行約 45-60 分",
        description: "高德與 Trip.com 均可查到紅廟店地址：朝陽路紅廟北里 85 號樓底商；多個旅遊/社群來源標示 24 小時。",
        transit: "第一晚建議 DD 來回，省體力。",
        booking: "不需預約；熱門時段可能排隊。",
        note: "適合抵達日，因為不怕晚到。點牛肉麵、豌豆雜醬麵、小菜。",
        place: "勇盛牛肉麵紅廟店"
      }
    ]
  },
  {
    id: "d2",
    date: "9/24（四）",
    title: "天壇、南門涮肉、前門楊梅竹、北京坊下午茶",
    summary: "鬆中帶吃的一天：天壇控制 2 小時，南門涮肉午餐，下午前門/楊梅竹斜街/北京坊控制 2 小時，中間留咖啡或茶，不硬逛到腿酸。",
    stats: ["10:00出發", "胡同小巷", "伴手禮"],
    stops: [
      {
        time: "10:00",
        title: "飯店出發：地鐵往天壇",
        category: "transport",
        status: "planned",
        price: "北京地鐵一般 ¥3 起，長距離多落在 ¥5-7",
        route: "管莊站 → 1號線/八通線進城 → 轉線至天壇東門/天橋一帶",
        eta: "約 60-75 分",
        description: "北京市軌道交通官方票制為 6 公里內 ¥3、6-12 公里 ¥4、12-22 公里 ¥5、22-32 公里 ¥6。",
        transit: "這天全程地鐵+步行即可，晚上若太累再 DD 回管莊。",
        booking: "無。",
        note: "地鐵進站安檢，水可以帶，刀具/大型噴霧不要帶。",
        place: "天壇公園"
      },
      {
        time: "11:15",
        title: "天壇公園：祈年殿、回音壁、圜丘",
        category: "heritage",
        status: "verified",
        price: "旺季聯票 ¥34；大門票 ¥15",
        route: "天壇東門/天橋站 → 祈年殿 → 回音壁 → 圜丘 → 南門",
        eta: "2 小時",
        description: "北京旅遊網列天壇旺季聯票 ¥34、門票 ¥15；週一核心景點可能受限，所以排週四。",
        transit: "園內步行，最後從南門出接南門涮肉。",
        booking: "建議買聯票，否則核心景點進不去。",
        note: "早上 10 點後人會變多，但你的作息比較重要，照這版走即可。",
        place: "天壇公園",
      },
      {
        time: "13:45",
        title: "南門涮肉（天壇南門店）",
        category: "food",
        status: "verified",
        price: "TripAdvisor 評論約兩人 ¥150；Trip Moments 顯示 10:30-22:30",
        route: "天壇南門步行到永定門東街東里 13 號樓",
        eta: "步行約 8-15 分",
        description: "天壇南門附近的老北京銅鍋涮肉，適合接天壇後午餐。",
        transit: "步行。",
        booking: "午餐錯峰較穩，熱門時段仍可能等位。",
        note: "羊肉、麻醬、糖蒜是重點；下午還要走胡同，不要吃到太撐。",
        place: "南門涮肉天壇店"
      },
      {
        time: "15:30",
        title: "前門、大柵欄、楊梅竹斜街、北京坊下午茶",
        category: "hutong",
        status: "verified",
        price: "街區免費；咖啡/文創依店家",
        route: "天橋/珠市口 → 前門 → 大柵欄 → 楊梅竹斜街 → 北京坊",
        eta: "2-2.5 小時",
        description: "Trip.com 胡同攻略與 2026 楊梅竹斜街 Citywalk 文都把大柵欄、楊梅竹斜街列為胡同慢逛路線；這版只抓精華，再加北京坊/書店/茶飲坐一下。",
        transit: "地鐵到珠市口或前門後步行。楊梅竹斜街從珠市口 C 口約 10 分。",
        booking: "不需預約。",
        note: "伴手禮可看北京坊、北京禮物、稻香村、吳裕泰/張一元茶葉。累了就直接找茶飲或咖啡坐下。",
        place: "楊梅竹斜街",
      },
      {
        time: "19:00",
        title: "四季民福烤鴨店（前門店）",
        category: "food",
        status: "verified",
        price: "攜程美食列人均約 ¥155；營業 10:30-22:30",
        route: "北京坊/大柵欄步行到四季民福前門店",
        eta: "步行 5-15 分",
        description: "前門店適合接胡同線，不用再跨城；官方門店頁也列北京有前門/大柵欄/故宮等分店。",
        transit: "步行；回飯店可地鐵或 DD。",
        booking: "務必線上取號/訂位。故宮店更熱門，這天選前門店比較合理。",
        note: "烤鴨、貝勒烤肉、炸醬麵、驢打滾都可點。",
        place: "四季民福烤鴨店前門店",
        image: "https://danielfooddiary.com/wp-content/uploads/2018/05/sijiminfu1.jpg"
      }
    ]
  },
  {
    id: "d3",
    date: "9/25（五）",
    title: "天安門、故宮精華、景山、漂亮晚餐或夜生活",
    summary: "必去日：天安門廣場 1 小時、故宮精華 3-3.5 小時、景山 1 小時。這天是緊湊日，五道營/咖啡只當有體力才加。",
    stats: ["必去緊湊日", "故宮天安門", "可到00:00"],
    stops: [
      {
        time: "09:45",
        title: "飯店出發往天安門/故宮",
        category: "transport",
        status: "planned",
        price: "地鐵約 ¥6-7；DD 約依出租車標準與路況估算 ¥80-130",
        route: "管莊站 → 1號線/八通線 → 天安門東/西 → 午門",
        eta: "地鐵+步行約 65-80 分；DD 約 45-70 分",
        description: "你想 9:30-10:00 出發，故宮日建議 09:45 前出門，避免午門排隊壓縮參觀。",
        transit: "地鐵優先；若天氣差或想省腳力，DD 到管制區外再步行。",
        booking: "故宮票 9/18 20:00 搶 9/25；天安門廣場也需提前 1-7 日實名預約。",
        note: "證件原件一定要帶。天安門安檢嚴，打火機、刀具、大型噴霧不要帶。",
        place: "天安門廣場"
      },
      {
        time: "10:55",
        title: "天安門廣場、天安門城樓外觀",
        category: "heritage",
        status: "verified",
        price: "廣場免費；天安門城樓若入內需另行官方預約購票",
        route: "天安門東/西 → 廣場 → 長安街外觀拍照 → 午門",
        eta: "1-1.25 小時",
        description: "天安門地區管委會公告：天安門廣場個人與團隊均須提前 1-7 日透過官方平台實名預約。只拍外觀與廣場就好，不追升旗。",
        transit: "全程步行與安檢動線。",
        booking: "用天安門廣場預約參觀平台/微信小程序，預約上午或下午時段；若故宮預約可通行仍以現場要求為準。",
        note: "這段只抓 1 小時，不加國博、不看升旗，避免拖垮故宮。",
        place: "天安門廣場"
      },
      {
        time: "12:15",
        title: "故宮博物院",
        category: "heritage",
        status: "verified",
        price: "旺季大門票 ¥60；珍寶館/鐘錶館各 ¥10",
        route: "午門 → 太和殿 → 中軸線 → 乾清宮 → 珍寶館/鐘錶館擇一 → 神武門",
        eta: "3-3.5 小時",
        description: "故宮官方票務政策列 4/1-10/31 旺季大門票 ¥60，珍寶館與鐘錶館各 ¥10；週一閉館。",
        transit: "園內步行，最後神武門出接景山。",
        booking: "最重要預約。護照/台胞證資訊先填好。",
        note: "故宮是本日例外，不壓成 1 小時；但只走精華，不加國博或城樓入內。",
        place: "故宮博物院",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Forbidden%20City%2C%20as%20viewed%20from%20Jingshan.jpg?width=900"
      },
      {
        time: "15:50",
        title: "景山公園俯瞰紫禁城",
        category: "heritage",
        status: "planned",
        price: "現場/線上小額門票，出發前再查",
        route: "故宮神武門 → 景山南門 → 萬春亭",
        eta: "45-60 分",
        description: "故宮北門出接景山，是最順的收尾；天氣不好則跳過。",
        transit: "步行。",
        booking: "出發前查暢遊公園或現場規則。",
        note: "這是看故宮全景的最佳點之一。",
        place: "景山公園",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Forbidden%20City%20-%20View%20from%20Coal%20Hill.jpg?width=900"
      },
      {
        time: "17:10",
        title: "咖啡備選：五道營 Metal Hands / Barista",
        category: "hutong",
        status: "verified",
        price: "咖啡約 ¥30-60；街區免費",
        route: "景山/北海北 → 雍和宮站 → 五道營胡同",
        eta: "1-1.5 小時，可直接刪",
        description: "Metal Hands 五道營店在 Trip.com/Tripadvisor 評分高，Barista Specialty Coffee Roasters 也在五道營胡同；這段是故宮後的坐下回血，不是硬景點。",
        transit: "地鐵或 DD 到雍和宮站，再步行。",
        booking: "不需；如果故宮走太久，直接跳到晚餐。",
        note: "這就是鬆弛感的開關：累就坐咖啡，不累才逛國子監街。",
        place: "五道營胡同",
      },
      {
        time: "19:15",
        title: "小街豬手（團結湖店）",
        category: "food",
        status: "verified",
        price: "Trip.com/攜程評論列人均約 ¥150；營業 11:30-21:30",
        route: "五道營/雍和宮 → 團結湖路 9 號樓南側胡同",
        eta: "DD 約 20-35 分；地鐵約 35-50 分",
        description: "Trip.com 列地址為團結湖路 9 號樓南側胡同內，營業 11:30-21:30；招牌是酸湯豬手鍋。",
        transit: "晚餐時間建議 DD，避免轉乘耗時。",
        booking: "熱門店，建議提前取號；評論提到晚餐時段易等位，19:15 抵達比 20:00 後穩。",
        note: "如果故宮走到太累，五道營縮短或直接跳過，優先保住晚餐與夜生活。",
        place: "小街豬手團結湖店"
      },
      {
        time: "22:00",
        title: "夜生活二選一：三里屯清吧 / 目的地酒吧",
        category: "night",
        status: "verified",
        price: "小魔王 Klook 約 ¥50 起；目的地酒吧價格依當晚活動",
        route: "小街豬手 → 三里屯/工體 → 飯店",
        eta: "店間 DD 約 10-20 分；00:00 回管莊約 35-55 分",
        description: "目的地官網列酒吧 21:00-次日05:00、餐吧 11:00-次日04:00；三里屯酒吧街是北京代表夜生活區。",
        transit: "夜間一律 DD 回飯店。",
        booking: "Club/熱門酒吧週五建議查當晚活動與訂位。",
        note: "想輕鬆就三里屯清吧；想 club 氛圍就目的地/工體，但回程別超過 00:00 太多。",
        place: "北京目的地酒吧 / 三里屯酒吧街",
      }
    ]
  },
  {
    id: "d4",
    date: "9/26（六）",
    title: "慕田峪長城 tour、簋街胡大或李串串",
    summary: "長城日是唯一建議 09:00 左右出門的例外。若堅持 09:30 後出門，可改 13:00 慕巴士，但長城停留只有 3.5 小時。",
    stats: ["長城一日遊", "tour", "晚餐簋街"],
    stops: [
      {
        time: "09:00",
        title: "飯店出發往東直門集合",
        category: "transport",
        status: "needs",
        price: "地鐵約 ¥6-7；DD 約 ¥70-120（依出租車標準與路況估）",
        route: "飯店 → 東直門站 B1 口",
        eta: "DD 約 35-55 分；地鐵約 60-75 分",
        description: "慕巴士官方列 10:00 市區東直門站 B1 口集合，11:30 抵達景區。",
        transit: "長城日建議 DD 到東直門，避免錯過巴士。",
        booking: "先預約 MuBus/Klook/KKday/易遊網任一慕田峪 tour。",
        note: "這天若 9:30 才從飯店出發，風險很高；請當例外日。",
        place: "東直門站 B1 口"
      },
      {
        time: "10:00",
        title: "慕巴士 10:00 慕田峪長城專線",
        category: "tour",
        status: "verified",
        price: "慕巴士往返 ¥80；門票慕巴士價 ¥40；雙程纜車/滑道 ¥140",
        route: "東直門 B1 → 慕田峪長城 → 東直門",
        eta: "10:00 出發；11:30 到；16:30 返程；18:00 回市區",
        description: "慕巴士官方列 10:00 班次、景區 5 小時、18:00 回市區；Klook/KKday 亦有慕田峪一日遊選項。",
        transit: "tour 巴士。",
        booking: "MuBus 可當日車上付款；Klook/KKday/易遊網平台價會波動，頁面已附來源。",
        note: "建議纜車上、滑道/纜車下；如果怕排隊，就雙程纜車。",
        place: "慕田峪長城",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mutianyu%20Great%20Wall%2C%20Beijing%2C%20China%20%289762365735%29.jpg?width=900"
      },
      {
        time: "18:30",
        title: "簋街晚餐：胡大飯館 24h 或李串串",
        category: "food",
        status: "verified",
        price: "胡大高德可查；百度/Trip 資訊約 ¥108-153；李串串大眾點評片段約 ¥125/人",
        route: "東直門 → 簋街/北新橋 → 飯店",
        eta: "東直門到簋街步行/地鐵短程；回飯店 DD 約 35-55 分",
        description: "胡大飯館 24h 簋街總店高德列地址東直門內大街 233 號；目的就是接長城回城後吃夜宵感。",
        transit: "步行到簋街；回飯店建議 DD。",
        booking: "胡大飯點排隊長，若太滿就改李串串或附近火鍋。",
        note: "長城後吃辣要量力，隔天還有西北城園林日。",
        place: "胡大飯館24h簋街總店",
      }
    ]
  },
  {
    id: "d5",
    date: "9/27（日）",
    title: "頤和園鬆弛版、五道口咖啡、瀟湘閣或漂亮晚餐",
    summary: "這天改成鬆弛園林日：頤和園只走昆明湖/長廊/石舫精華 2 小時，圓明園降為備選，把下午留給咖啡、五道口或望京晚餐。",
    stats: ["鬆弛日", "園林2小時", "咖啡備選"],
    stops: [
      {
        time: "10:00",
        title: "飯店出發往頤和園，路上當休息",
        category: "transport",
        status: "planned",
        price: "地鐵約 ¥7-8；DD 跨城可能 ¥120-190+",
        route: "管莊 → 地鐵進城轉北宮門/西苑",
        eta: "地鐵約 90 分；DD 約 70-100 分",
        description: "東邊住到西北景點較遠，這天交通時間最長。若想省腳力，可 DD 到地鐵換乘少的站再進城。",
        transit: "地鐵優先，回程可 DD。",
        booking: "無。",
        note: "這天不早起趕路，交通時間就當休息；穿舒服鞋。",
        place: "頤和園北宮門"
      },
      {
        time: "11:30",
        title: "頤和園精華 2 小時：昆明湖、長廊、石舫",
        category: "park",
        status: "verified",
        price: "官方旺季門票 ¥30；聯票 ¥60；遊船多條線約 ¥30-40/人",
        route: "西苑/北宮門 → 長廊 → 石舫 → 昆明湖湖邊 → 近出口",
        eta: "2-2.5 小時",
        description: "頤和園官網列旺季門票 ¥30、聯票 ¥60；遊船官方列多條航線，票價約 ¥30-40。",
        transit: "園內步行；可用船減少折返。",
        booking: "建議提前 1-7 天購票，視平台規則。",
        note: "不爬佛香閣、不追全園；天氣好可加短程遊船，天氣差就早點撤。",
        place: "頤和園",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kunming%20Lake%20%28Summer%20Palace%2C%20Beijing%29%20in%20summer.JPG?width=900"
      },
      {
        time: "15:00",
        title: "下午茶/備案：五道口咖啡或圓明園西洋樓",
        category: "food",
        status: "planned",
        price: "咖啡約 ¥30-70；若進圓明園依官方/現場門票",
        route: "頤和園 → 五道口/圓明園 → 望京或管莊",
        eta: "1-1.5 小時",
        description: "頤和園後先坐下喝咖啡。若體力很好再去圓明園西洋樓 1 小時；如果累了，直接去五道口或回東邊。",
        transit: "地鐵/短程 DD。",
        booking: "圓明園屬備選，當天看腿決定。",
        note: "這天的目標是鬆弛，不是打卡數量。",
        place: "五道口 / 圓明園"
      },
      {
        time: "17:45",
        title: "瀟湘閣望京 SOHO 店，或 gaga/花家怡園漂亮飯",
        category: "food",
        status: "verified",
        price: "攜程列瀟湘閣望京 SOHO 店人均 ¥80；10:30-21:30",
        route: "五道口/圓明園 → 望京 SOHO → 飯店",
        eta: "地鐵/ DD 約 45-70 分；望京回管莊約 35-55 分",
        description: "瀟湘閣望京 SOHO 店資料列地址為阜安東路望京 SOHO T3 下沉廣場，營業 10:30-21:30。",
        transit: "這段跨區，建議依疲勞程度選 DD。",
        booking: "可先電話/平台排隊。",
        note: "如果這幾天已吃很多重口，這晚可改 gaga 三里屯漂亮飯或花家怡園四合院京味菜。",
        place: "瀟湘閣望京SOHO店"
      },
      {
        time: "21:00",
        title: "養生備選：水酷雙井 / 曲水蘭亭 / 湯泉良子",
        category: "wellness",
        status: "verified",
        price: "水酷雙井 Trip.com 可查；曲水蘭亭為酒店/度假型，價格較高；足療以現場套餐為準",
        route: "晚餐後視體力選近路線養生館",
        eta: "1.5-2.5 小時",
        description: "Trip.com 顯示水酷湯泉雙井店全日營業，地址廣渠門外大街 9 號院；曲水蘭亭在惠河南街 1070 號。",
        transit: "深夜 DD。",
        booking: "週末建議先查平台券與是否需預約。",
        note: "9/28 已安排正式湯泉過夜，這晚養生只當備選。",
        place: "水酷湯泉雙井店"
      }
    ]
  },
  {
    id: "d6",
    date: "9/28（一）",
    title: "退房、798 藝術區、亮馬河散步、湯泉過夜",
    summary: "不去環球後，9/28 改成鬆弛東北線：先寄湯泉行李，再去 798 看展喝咖啡，傍晚亮馬河/藍色港灣散步，晚上回水裹湯泉睡。",
    stats: ["鬆弛日", "咖啡看展", "湯泉睡"],
    stops: [
      {
        time: "09:30",
        title: "退房、DD 到水裹寄行李",
        category: "rest",
        status: "needs",
        price: "水裹 Klook 寫明可免費寄存行李；寄完只帶小包 citywalk",
        route: "飯店退房 → 水裹四惠店寄行李 → 798 藝術區",
        eta: "退房 30 分；飯店到水裹 DD 約 20-35 分；水裹到 798 約 30-45 分",
        description: "專家修正版：先把大行李放到當晚要睡的湯泉，再去 798/亮馬河。這樣不折返飯店，也不用拖行李逛街。",
        transit: "DD 優先，因為帶行李且要控制下午節奏。",
        booking: "前一晚確認水裹可用護照/台胞證登記、可寄行李、夜間票最早/最晚入場。",
        note: "分出湯泉小包：換洗衣物、證件、充電器、耳塞、隔天機場用品。",
        place: "北京傳媒大學管莊地鐵站亞朵酒店"
      },
      {
        time: "11:30",
        title: "798 藝術區：展覽、街拍、工業風咖啡",
        category: "hutong",
        status: "verified",
        price: "園區免費；看展/咖啡依店家，Trip.com 顯示建議停留 3-5 小時，可縮成 2 小時精華",
        route: "水裹四惠店 → 798 藝術區（酒仙橋路4號）",
        eta: "DD 約 30-45 分；園區慢逛 2-2.5 小時",
        description: "Trip.com/永安資訊列 798 藝術區免費、地址酒仙橋路4號；這裡比環球輕鬆很多，適合拍照、看展、喝 GREYBOX/FISHEYE 或園區咖啡。",
        transit: "DD 最順；園區內步行。",
        booking: "園區不需門票；若要特定展覽，當天查展館是否週一營業。",
        note: "這天不追很多點，798 只抓精華 2 小時，留體力給湯泉和早班機。",
        place: "798藝術區",
      },
      {
        time: "15:15",
        title: "亮馬河、藍色港灣、河邊下午茶",
        category: "park",
        status: "verified",
        price: "河岸散步免費；亮馬河遊船 Trip.com 顯示約 HK$58 起，營業 14:00-18:30、19:00-22:00",
        route: "798 → 亮馬河/藍色港灣 → 三里屯或水裹",
        eta: "DD 約 20-35 分；散步/下午茶 1.5-2 小時",
        description: "亮馬河水岸有步道、餐廳、咖啡與藍色港灣商圈；若想多一點儀式感，可加 40 分鐘左右遊船，否則只散步拍照也很 chill。",
        transit: "DD 或短程地鐵+步行；傍晚若塞車就用地鐵到亮馬橋/農展館一帶再走。",
        booking: "遊船需看亮馬河國際風情水岸微信/Trip.com 當日票；不坐船則不需預約。",
        note: "這段是環球替代主菜：好拍、好坐、好撤退，天氣不好可改僑福芳草地室內藝術商場。",
        place: "亮馬河國際風情水岸",
      },
      {
        time: "18:00",
        title: "漂亮飯二選一：gaga 三里屯 / Le Café Louis Vuitton",
        category: "food",
        status: "verified",
        price: "gaga/三里屯漂亮飯約 ¥100-200+；LV Café 屬高價位，需訂位與當日菜單確認",
        route: "亮馬河 → 三里屯太古里 → 水裹四惠店",
        eta: "亮馬河到三里屯 DD 約 10-20 分；用餐 1.5 小時",
        description: "Trip Moments 把 gaga 三里屯形容成垂直空中花園，漂亮飯、果茶適合拍照；LV 官方列北京三里屯店有 Le Café Louis Vuitton，可做高預算漂亮飯備案。",
        transit: "短程 DD；吃完直接 DD 回水裹。",
        booking: "gaga 可現場排；LV Café 建議先查官方訂位。",
        note: "如果想吃更北京味，把漂亮飯換成花家怡園四合院總店或胡大簋街。",
        place: "三里屯太古里",
      },
      {
        time: "20:30",
        title: "水裹·湯泉生活（北京四惠店）過夜",
        category: "wellness",
        status: "verified",
        price: "Klook 列週日至週四夜間票+過夜費+自助早餐；實際價格按日期顯示",
        route: "三里屯/亮馬河 → 水裹四惠店 → 9/29 清晨 PEK T3",
        eta: "三里屯/亮馬河回水裹約 25-45 分；隔天去 PEK 約 45-70 分",
        description: "Klook 頁面列水裹四惠店有泡湯、休息區、書吧、遊戲區，並標示前台有免費行李寄存。",
        transit: "DD 最穩。隔天 05:10 左右叫車去機場。",
        booking: "預訂夜間票+過夜費；確認護照登記、最晚入場、早餐時間。",
        note: "設 04:35 與 04:50 兩個鬧鐘；睡前把鞋、證件、行李擺好。",
        place: "水裹·湯泉生活 北京四惠店"
      }
    ]
  },
  {
    id: "d7",
    date: "9/29（二）",
    title: "清晨去首都機場，CA185 回台北",
    summary: "08:30 回程航班，建議清晨 05:10 從湯泉出發，目標 06:00 前後到 PEK T3。若前一晚太累，備案是直接去 PEK T3 計時休息室。",
    stats: ["早班機", "PEK T3", "回程"],
    stops: [
      {
        time: "05:10",
        title: "從湯泉 DD 到 PEK T3",
        category: "transport",
        status: "needs",
        price: "出租車官方起步 ¥13，超 3 公里 ¥2.3/km；夜間 23:00-05:00 加收 20%",
        route: "水裹四惠店 → 北京首都機場 T3",
        eta: "約 45-70 分，目標 06:00 前後到 T3",
        description: "首都機場官方列 T3 網約車上車/下車規則；清晨以 DD/出租車最穩。",
        transit: "DD 或出租車。",
        booking: "前一晚收藏 PEK T3 目的地，設鬧鐘。",
        note: "國際/兩岸航班抓早不抓晚；05:10 出發比 05:45 安心很多。",
        place: "北京首都國際機場 T3"
      },
      {
        time: "08:30",
        title: "CA185 北京首都 PEK → 台北桃園 TPE",
        category: "transport",
        status: "confirmed",
        price: "機票已訂",
        route: "PEK T3 → TPE T2",
        eta: "飛行約 3 小時 10-15 分",
        description: "航班狀態頁列 CA185 為北京首都 PEK 至台北桃園 TPE，通常由 T3 出發。",
        transit: "機場報到、安檢、出境。",
        booking: "以國航與機場當日資訊為準。",
        note: "充電寶隨身，不要託運；液體依航空安檢規則。",
        place: "北京首都國際機場 T3"
      }
    ]
  }
];

const routeCards = [
  {
    title: "地鐵基本票價",
    price: "¥3 起，22-32 公里 ¥6",
    route: "北京城市軌道交通，機場線除外",
    eta: "市區跨城通常 45-90 分",
    note: "官方票制：6公里內¥3、6-12公里¥4、12-22公里¥5、22-32公里¥6。"
  },
  {
    title: "首都機場線",
    price: "單程 ¥25/人",
    route: "T3/T2 ⇄ 三元橋/東直門/北新橋",
    eta: "約 10 分發車間隔，依實際公布",
    note: "你去飯店不一定適合機場線，因為還要多次轉乘。"
  },
  {
    title: "出租車/DD估價規則",
    price: "起步 ¥13；超 3 公里 ¥2.3/km；夜間 +20%",
    route: "跨區、深夜、帶行李時使用",
    eta: "以高德/滴滴即時路況為準",
    note: "頁面內 DD 金額都是按官方出租車規則估的範圍，不是即時報價。"
  },
  {
    title: "長城 tour 主案",
    price: "MuBus 往返 ¥80；Klook/KKday 約 NT$321/464 起依頁面波動",
    route: "東直門 B1 ⇄ 慕田峪長城",
    eta: "10:00-18:00；景區 5 小時",
    note: "10:00 班次最平衡；13:00 班次可配合作息但長城停留縮短。"
  }
];

const expertAudit = [
  {
    title: "總評：可玩，但屬中高強度",
    score: "強度 7.5/10",
    body: "這版改成幾天緊、一兩天鬆。故宮天安門與長城是必去緊湊日；天壇、頤和園、798、亮馬河都拆成 1-2 小時小行程，走累就坐咖啡。"
  },
  {
    title: "熱門程度：故宮、長城、四季民福最高",
    score: "高熱門",
    body: "故宮票與四季民福取號是第一優先；慕田峪排在週六，纜車/滑道可能排隊，所以 09:00 從飯店出發是必要例外。三里屯/工體週五夜也會熱，建議先查當晚活動。"
  },
  {
    title: "9/24 天壇+前門線：時間合理",
    score: "穩",
    body: "10:00 出門、11:15 到天壇、13:45 南門涮肉、15:30 前門大柵欄是順路的。午餐要控制份量，因為晚上四季民福也是重餐。伴手禮可先比價，不必第一天買滿。"
  },
  {
    title: "9/25 故宮日：五道營是可刪項",
    score: "偏緊",
    body: "11:00 入故宮只適合走中軸線+珍寶館或鐘錶館擇一。若故宮超過 16:00 才出，景山保留、五道營縮短或跳過，直接去小街豬手，才能接上夜生活。"
  },
  {
    title: "9/26 長城日：交通要用 DD 保險",
    score: "關鍵",
    body: "飯店到東直門跨區且早上要趕集合，地鐵雖便宜但轉乘與安檢風險高。這天建議 DD 到東直門 B1，回市區後胡大若排隊太久，就改李串串或簋街附近備案。"
  },
  {
    title: "9/27 頤和園鬆弛版：只抓湖邊精華",
    score: "鬆",
    body: "頤和園不走全園，抓昆明湖、長廊、石舫 2 小時即可。圓明園降為備選，把下午留給五道口咖啡或早點吃瀟湘閣，這天負責恢復體力。"
  },
  {
    title: "9/28 798+亮馬河+湯泉：鬆弛替代環球",
    score: "已改鬆",
    body: "不要去環球後，最順的是先到水裹寄大行李，再去 798 看展喝咖啡、亮馬河散步，晚上直接回水裹睡。這天是全程可撤退的 chill day。"
  },
  {
    title: "9/29 早班機：05:10 出發",
    score: "已加緩衝",
    body: "08:30 CA185 不建議 05:45 才走。已改成 05:10 從水裹出發，目標 06:00 前後到 PEK T3，留足報到、安檢、出境和找登機口時間。"
  },
  {
    title: "交通教學：地鐵主線，DD 用在四種情境",
    score: "實用",
    body: "白天進城、景點串點以地鐵為主；帶行李、跨區趕集合、晚餐後續夜生活、深夜回管莊時改 DD。北京地鐵安檢多，時間估算要比導航多抓 10-15 分。"
  }
];

const compareCards = [
  {
    title: "舊版值得保留",
    label: "保留",
    body: "舊版的優點是像一本出發手冊：有版本比較、到達交通表、美食價格表、伴手禮清單與預算區。新版已把這些重新整理成可掃描卡片，不再只藏在長文裡。"
  },
  {
    title: "新版行程更合理",
    label: "採新版",
    body: "舊版把故宮、長城、胡同夜生活排得更早更硬；新版依你的 09:30-10:00 出門習慣重排，並避開週一閉館，故宮與長城都放在更適合的平日/週六 tour 節奏。"
  },
  {
    title: "長城方案採新版",
    label: "採新版",
    body: "舊版有 07:00 出門的強烈版本，但你希望不要太早。新版改用 MuBus 10:00 主案，只要求長城日 09:00 例外出門，仍可保留景區約 5 小時。"
  },
  {
    title: "9/28 行李動線採修正版",
    label: "修正",
    body: "舊版偏向直接泡湯休息，新版一度安排環球後再去湯泉。現在按你的新偏好改成最佳解：退房後先到水裹寄大行李，再去 798/亮馬河，晚上直接回湯泉睡。"
  },
  {
    title: "舊版價格表已升級",
    label: "升級",
    body: "舊版有預算概念但缺即時匯率與平台波動提醒。新版用人民幣區間、台幣粗估與『是否可省』標籤，並把環球大筆票價改成咖啡、漂亮飯和湯泉預算。"
  },
  {
    title: "舊版安全提醒已補強",
    label: "補強",
    body: "新版新增台灣人赴陸提醒：台胞證、動態登錄、手機資料、支付綁卡、網路與現金備案，並放入官方/政府來源。"
  }
];

const budgetItems = [
  {
    title: "景點門票",
    cny: "¥180-320",
    twd: "約 NT$865-1,535",
    note: "故宮、天安門、天壇、頤和園、景山等；不含長城纜車。"
  },
  {
    title: "長城一日",
    cny: "¥260-420",
    twd: "約 NT$1,250-2,020",
    note: "MuBus 往返 ¥80 + 門票 ¥40 + 纜車/滑道約 ¥140；午餐/平台 tour 會讓總額上浮。"
  },
  {
    title: "798/亮馬河/咖啡",
    cny: "¥160-420",
    twd: "約 NT$770-2,020",
    note: "798 園區免費，主要花在咖啡甜點、亮馬河遊船或下午茶；比環球省很多。"
  },
  {
    title: "餐食",
    cny: "¥950-1,650",
    twd: "約 NT$4,560-7,920",
    note: "含勇盛、南門涮肉、四季民福、小街豬手、胡大/李串串、瀟湘閣與日常飲料小吃。"
  },
  {
    title: "市內交通",
    cny: "¥550-950",
    twd: "約 NT$2,640-4,560",
    note: "地鐵很便宜，但機場、長城集合、夜生活、湯泉早班機都建議 DD，這裡已抓計程車/DD彈性。"
  },
  {
    title: "第六晚湯泉",
    cny: "¥180-420",
    twd: "約 NT$865-2,020",
    note: "依 Klook/平台日期與夜間過夜方案浮動；先確認是否含過夜費與早餐。"
  },
  {
    title: "夜生活/養生加購",
    cny: "¥250-900",
    twd: "約 NT$1,200-4,320",
    note: "清吧較低，club/酒水/按摩會高；週五工體與三里屯建議先看活動價。"
  },
  {
    title: "伴手禮",
    cny: "¥300-900",
    twd: "約 NT$1,440-4,320",
    note: "稻香村、吳裕泰/張一元茶、北京坊文創、故宮文創；建議最後兩天集中買。"
  },
  {
    title: "總預估，不含機票住宿",
    cny: "¥2,830-5,980+",
    twd: "約 NT$13,600-28,700+",
    note: "省錢版少喝酒、少 DD；舒適版加 DD、漂亮飯、湯泉與伴手禮。匯率以 1 RMB ≈ NT$4.8 粗估。"
  }
];

const taiwanPrep = [
  {
    title: "台胞證與證件",
    label: "必做",
    body: "入境大陸必備有效台胞證；台灣出發時護照、身分證也一起帶。國台辦/移民管理資料顯示卡式台胞證通常 5 年有效，口岸一次有效台胞證是備援，不建議把它當主方案。"
  },
  {
    title: "機票證件資料",
    label: "核對",
    body: "國航 CA186/CA185 訂票資料、姓名拼音、台胞證/護照號碼與效期先截圖。機場報到時把護照與台胞證都放同一個證件夾，減少地勤來回確認。"
  },
  {
    title: "赴陸港澳動態登錄",
    label: "建議",
    body: "陸委會設有國人赴陸港澳動態登錄，用於急難協助聯繫。填好航班、飯店、緊急聯絡人與大致行程，家人也留一份網頁行程連結。"
  },
  {
    title: "手機與資料安全",
    label: "謹慎",
    body: "海基會旅行安全手冊提醒赴陸前檢查手機/筆電內容。建議把重要資料雲端備份，手機減少敏感檔案，避免拍攝軍警、港口、機場管制區、軍事或抗議相關場景。"
  },
  {
    title: "支付寶/微信支付",
    label: "必測",
    body: "出發前完成支付寶與微信支付實名、綁 Visa/Master/JCB 等可用卡，並用小額付款測試。北京官方支付服務資訊顯示國際卡小額交易常有手續費減免，超過 ¥200 可能有 3% 費用，以付款頁為準。"
  },
  {
    title: "網路與地圖",
    label: "必備",
    body: "準備中國可用 eSIM/漫遊方案，並預裝高德地圖、滴滴/高德打車、Klook/Trip.com。Google 服務在大陸不穩，行程頁雖有 Google 地圖，也要同時用高德搜尋。"
  },
  {
    title: "現金與提款",
    label: "備援",
    body: "帶人民幣現金 ¥500-1,000 當支付失敗備用，面額以 ¥100/¥50/¥20 混搭。大額主要用行動支付；銀行卡海外提款與信用卡海外交易手續費先問發卡行。"
  },
  {
    title: "健康、藥品與保險",
    label: "穩妥",
    body: "常用藥、腸胃藥、止痛藥、過敏藥、OK繃隨身；處方藥帶原包裝與處方備份。長城、故宮、頤和園步行量高，鞋子比穿搭重要。"
  },
  {
    title: "不要踩的線",
    label: "重要",
    body: "內政部移民署提醒不要申領中國邊境旅遊護照；旅途中也避免討論或拍攝敏感政治、軍事、執法現場。自由行要好玩，前提是把風險降到最低。"
  }
];

const foodList = [
  {
    title: "勇盛牛肉麵紅廟店",
    area: "紅廟/朝陽路",
    price: "約 ¥36/人，24h 來源需以店家當日為準",
    bestFor: "抵達日晚餐、深夜宵夜",
    source: "https://hk.trip.com/restaurant/china/beijing/detail/yongsheng-beef-noodles-11131265/",
    map: "勇盛牛肉麵紅廟店"
  },
  {
    title: "南門涮肉天壇店",
    area: "天壇南門",
    price: "約 ¥75-100/人；TripAdvisor 評論兩人約 ¥150",
    bestFor: "天壇日午餐",
    source: "https://hk.trip.com/moments/poi-nan-men-hotpot-11085326/",
    map: "南門涮肉 天壇店"
  },
  {
    title: "四季民福前門店",
    area: "前門/大柵欄",
    price: "攜程列約 ¥155/人，10:30-22:30",
    bestFor: "烤鴨與老北京晚餐",
    source: "https://gs.ctrip.com/html5/you/foods/fooddetail/1/134823897.html",
    map: "四季民福烤鴨店 前門店"
  },
  {
    title: "小街豬手團結湖店",
    area: "團結湖/三里屯",
    price: "Trip.com/攜程評論約 ¥150/人，11:30-21:30",
    bestFor: "故宮日後接夜生活",
    source: "https://my.trip.com/restaurant/china/beijing/detail/restaurant-97419320/",
    map: "小街豬手 團結湖店"
  },
  {
    title: "胡大飯館24h簋街總店",
    area: "簋街/北新橋",
    price: "約 ¥108-153/人，排隊常見",
    bestFor: "長城回城後吃小龍蝦",
    source: "https://www.amap.com/place/B0FFF9XSVV",
    map: "胡大飯館24h 簋街總店"
  },
  {
    title: "瀟湘閣望京SOHO店",
    area: "望京",
    price: "攜程列 ¥80/人，10:30-21:30",
    bestFor: "頤和園/圓明園日回東北方向晚餐",
    source: "https://gs.ctrip.com/html5/you/foods/fooddetail/1/15096473.html",
    map: "瀟湘閣 望京SOHO店"
  },
  {
    title: "芈重山老火鍋",
    area: "多分店",
    price: "亦莊店 Trip.com 列 11:00-24:00；約 $$-$$$",
    bestFor: "你原寫「辦重山」疑似此店，需你確認店名",
    source: "https://us.trip.com/restaurant/china/beijing/detail/restaurant-140533732/",
    map: "芈重山老火鍋 北京"
  },
  {
    title: "李串串老店",
    area: "百子灣/五道口等",
    price: "大眾點評片段約 ¥111-125/人",
    bestFor: "胡大排隊太久時的辣味備選",
    source: "https://m.dianping.com/shop/128043320?msource=applemaps",
    map: "李串串老店 北京"
  },
  {
    title: "Metal Hands 五道營店",
    area: "五道營胡同",
    price: "咖啡約 ¥30-60；Trip.com 4.7/5",
    bestFor: "故宮後回血、胡同精品咖啡",
    source: "https://hk.trip.com/restaurant/china/beijing/detail/metal-hands-30984368/",
    map: "Metal Hands 五道營店"
  },
  {
    title: "Barista Specialty Coffee Roasters",
    area: "五道營胡同47號",
    price: "咖啡約 ¥30-60；TimeOut/Blogger 有地址與營業資訊",
    bestFor: "安靜坐一下，替代硬逛國子監",
    source: "https://www.timeoutcn.com/m/timeOutStoreDetail.html?id=581",
    map: "Barista Specialty Coffee Roasters 五道營"
  },
  {
    title: "798 咖啡備選：FISHEYE / GREYBOX",
    area: "798藝術區",
    price: "咖啡甜點約 ¥40-90",
    bestFor: "9/28 不去環球後的工業風下午茶",
    source: "https://hk.trip.com/moments/theme/poi-798-art-district-87890-restaurant-993134/",
    map: "798藝術區 GREYBOX FISHEYE"
  },
  {
    title: "gaga 三里屯旗艦店",
    area: "三里屯太古里",
    price: "漂亮飯/果茶約 ¥100-200+",
    bestFor: "漂亮飯、網紅感、9/28 亮馬河後晚餐",
    source: "https://hk.trip.com/moments/detail/beijing-1-140150032/",
    map: "gaga 三里屯"
  },
  {
    title: "花家怡園四合院總店",
    area: "簋街/東直門內大街235號",
    price: "Trip.com 列 $$-$$$，11:00-14:00、17:00-翌日02:00",
    bestFor: "四合院京味菜、烤鴨，漂亮又有北京感",
    source: "https://hk.trip.com/restaurant/china/beijing/detail/hua-s-restaurant-11084496/",
    map: "花家怡園四合院總店"
  },
  {
    title: "Le Café Louis Vuitton 北京三里屯",
    area: "三里屯",
    price: "高預算漂亮飯，需看官方訂位與菜單",
    bestFor: "想拍高級感下午茶/晚餐時使用",
    source: "https://www.louisvuitton.cn/zhs-cn/magazine/articles/maison-louis-vuitton-beijing-sanlitun",
    map: "Le Café Louis Vuitton 北京三里屯"
  }
];

const nightList = [
  {
    title: "三里屯酒吧街",
    type: "清吧/散步",
    hours: "街區 24h；各店不同",
    price: "清吧約 ¥80-200/人，依店家",
    route: "團結湖站/三里屯 → DD 回管莊",
    source: "https://hk.trip.com/moments/poi-sanlitun-bar-street-10558961/",
    note: "最容易即興選店；適合 22:00 前後輕鬆收尾。"
  },
  {
    title: "北京目的地酒吧 Destination",
    type: "Club/酒吧",
    hours: "官網列酒吧 21:00-次日05:00",
    price: "依當晚活動/酒水",
    route: "工體西路7號，深夜 DD 回飯店",
    source: "https://www.bjdestination.com.cn/",
    note: "想體驗 club 氛圍可排週五；先看當晚活動。"
  },
  {
    title: "小魔王酒吧（近雍和宮）",
    type: "胡同清吧",
    hours: "Klook 有套餐，營業以店家為準",
    price: "Klook 中國頁片段列 ¥50 起",
    route: "五道營/雍和宮胡同線後接",
    source: "https://www.klook.com/zh-CN/activity/162055-little-demon-king-bar-yonghe-palace-headquarters/",
    note: "復古、爵士藍調、雞尾酒與威士忌，比夜店安靜。"
  },
  {
    title: "水裹·湯泉生活四惠店",
    type: "湯泉過夜",
    hours: "Klook 列夜間票+過夜費+早餐",
    price: "平台依日期顯示",
    route: "四惠/高碑店一帶 → 早上 DD 去 PEK",
    source: "https://www.klook.com/zh-TW/activity/138965-water-wrap-soup-spa-life-beijing-gaobeidian/",
    note: "本行程第六晚主案。"
  },
  {
    title: "水酷湯泉雙井店",
    type: "24h 養生備選",
    hours: "Trip.com 列全日營業",
    price: "票價依 Trip.com/現場",
    route: "雙井，適合市區夜晚備案",
    source: "https://hk.trip.com/travel-guide/attraction/beijing/shuiku-hot-spring-139042174/",
    note: "若某晚臨時想泡湯/汗蒸可放入。"
  }
];

const tips = [
  {
    title: "實名預約與證件",
    body: "故宮、天安門、恭王府、部分景點都可能需要證件資訊。護照/台胞證原件每天帶，照片備份放手機。"
  },
  {
    title: "週一閉館習慣",
    body: "故宮、恭王府等博物館類常週一閉館，所以 9/28 週一排 798 外街區、亮馬河與湯泉；若特定 798 展館週一閉館，就只逛園區與咖啡。"
  },
  {
    title: "支付與 App",
    body: "支付寶/微信支付、DD/高德/百度地圖、Klook/Trip.com 先裝好。台灣手機收驗證碼若不穩，出發前先測。"
  },
  {
    title: "安檢很多",
    body: "地鐵、景點、廣場都會安檢。不要帶刀具、大罐噴霧；行動電源隨身，液體簡化。"
  },
  {
    title: "等位文化",
    body: "四季民福、小街豬手、胡大這類店熱門時段常等位。能線上取號就先取；不能取就準備備選餐廳。"
  },
  {
    title: "地鐵優先，深夜 DD",
    body: "白天跨城地鐵最穩；23:00 後或喝酒後只用 DD/出租車。北京出租車 23:00-05:00 夜間加收。"
  },
  {
    title: "伴手禮策略",
    body: "北京坊/前門買文創，北京稻香村買糕點，吳裕泰/張一元買茶葉。糕點不要太早買，最後兩天買較新鮮。"
  },
  {
    title: "長城日體力",
    body: "慕田峪仍有大量台階。不要穿新鞋；帽子、防曬、水、少量零食必備。滑道是否開放看天氣與現場。"
  }
];

const researchSources = [
  {
    type: "Tour",
    title: "慕巴士慕田峪長城專線",
    url: "https://www.beijingmubus.cn/?page_id=16474",
    takeaways: ["10:00 東直門 B1 出發、11:30 抵達、景區 5 小時、18:00 回市區。", "往返巴士 ¥80；門票/纜車/滑道列有現場優惠價。"]
  },
  {
    type: "Tour",
    title: "Klook 慕田峪長城一日遊",
    url: "https://www.klook.com/zh-TW/activity/14942-mutianyu-great-wall-day-tour-beijing/",
    takeaways: ["行程 7-9 小時，可選飯店接送、纜車/索道/滑道套餐。", "Klook 目的地頁顯示另有 NT$321 起的一日遊與 NT$599 起接駁巴士等方案。"]
  },
  {
    type: "Official",
    title: "故宮博物院票務政策",
    url: "https://www.dpm.org.cn/singles_detail/257830.html",
    takeaways: ["旺季大門票 ¥60，珍寶館與鐘錶館各 ¥10。", "參觀前 7 日 20:00 起預約，週一閉館。"]
  },
  {
    type: "Official",
    title: "天壇公園票價",
    url: "https://s.visitbeijing.com.cn/attraction/101409",
    takeaways: ["旺季門票 ¥15、聯票 ¥34。", "核心景點建議買聯票。"]
  },
  {
    type: "Official",
    title: "頤和園官網",
    url: "https://summerpalace.net.cn/home.html",
    takeaways: ["旺季門票 ¥30、聯票 ¥60；淡季門票 ¥20、聯票 ¥50。", "遊船航線多為 ¥30-40/人，視航線與天氣。"]
  },
  {
    type: "Transport",
    title: "北京京港地鐵購票指南",
    url: "https://www.mtr.bj.cn/page/instructions.html",
    takeaways: ["地鐵 6 公里內 ¥3，6-12 公里 ¥4，12-22 公里 ¥5，22-32 公里 ¥6。", "一日票 ¥20、三日票 ¥40、七日票 ¥90。"]
  },
  {
    type: "Transport",
    title: "首都機場線與網約車資訊",
    url: "https://www.bcia.com.cn/dtjcx.html",
    takeaways: ["首都機場線單程 ¥25。", "T3 網約車官方頁列上車區在 3 號停車樓 B2 層 H 區。"]
  },
  {
    type: "Transport",
    title: "北京市出租車價格標準",
    url: "https://fgw.beijing.gov.cn/bmcx/djcx/cxldj/202003/t20200331_1752789.htm",
    takeaways: ["3 公里內 ¥13，基本單價 ¥2.3/km。", "23:00-05:00 夜間基本單價加收 20%。"]
  },
  {
    type: "Food",
    title: "四季民福前門店",
    url: "https://gs.ctrip.com/html5/you/foods/fooddetail/1/134823897.html",
    takeaways: ["攜程頁列前門店人均 ¥155、10:30-22:30。", "適合接前門/大柵欄/北京坊。"]
  },
  {
    type: "Food",
    title: "小街豬手團結湖店",
    url: "https://my.trip.com/restaurant/china/beijing/detail/restaurant-97419320/",
    takeaways: ["Trip.com 列地址團結湖路 9 號樓南側胡同內、11:30-21:30。", "評論提到晚餐易等位，人均約 ¥150。"]
  },
  {
    type: "Night",
    title: "北京目的地酒吧官網",
    url: "https://www.bjdestination.com.cn/",
    takeaways: ["官網列地址工體西路 7 號。", "酒吧 21:00-次日05:00，餐吧 11:00-次日04:00。"]
  },
  {
    type: "Spa",
    title: "水裹·湯泉生活四惠店",
    url: "https://www.klook.com/zh-TW/activity/138965-water-wrap-soup-spa-life-beijing-gaobeidian/",
    takeaways: ["Klook 列週日至週四夜間票+過夜費+自助早餐。", "頁面標示有休息區、書吧、遊戲區與免費行李寄存。"]
  },
  {
    type: "Official",
    title: "故宮開放與停止入館時間",
    url: "https://www.dpm.org.cn/Visit.html",
    takeaways: ["故宮官方導覽頁列入館 8:30、停止入館 16:00、閉館 17:00。", "11:00 入館仍可走精華，但不適合加國博或天安門深逛。"]
  },
  {
    type: "Official",
    title: "天安門廣場預約參觀",
    url: "https://tamgw.beijing.gov.cn/zhengwugongkai/tzgg/202509/t20250922_4207260.html",
    takeaways: ["天安門地區管委會公告：個人與旅遊團均須提前 1-7 日透過預約平台實名預約。", "本行程只排 1 小時外觀與廣場，不追升旗。"]
  },
  {
    type: "Chill",
    title: "798 藝術區",
    url: "https://www.trip.com/travel-guide/attraction/beijing/798-art-zone-87890/",
    takeaways: ["Trip.com 列 798 Art Zone 免費入場、全年開放；許多展館與咖啡店另有個別營業時間。", "本行程用 2-2.5 小時精華，不照建議 3-5 小時走滿。"]
  },
  {
    type: "Chill",
    title: "亮馬河國際風情水岸",
    url: "https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260323_4563863.html",
    takeaways: ["北京官方英文站列日航 15:00-18:30、夜航 19:00-23:00。", "成人日航 CNY 50、夜航 CNY 80；不坐船也可免費河岸散步。"]
  },
  {
    type: "Cafe",
    title: "Metal Hands 五道營",
    url: "https://www.trip.com/moments/poi-metal-hands-30984368/",
    takeaways: ["Trip.com 旅遊資訊列地址 No.61 Wudaoying Hutong，評分 4.7/5。", "適合故宮後坐下回血，替代硬逛。"]
  },
  {
    type: "Cafe",
    title: "gaga Central 三里屯旗艦店",
    url: "https://hk.trip.com/restaurant/china/beijing/detail/restaurant-110763413/",
    takeaways: ["Trip.com 列地址三里屯路19號院太古里南區5號樓3層30號，評分 5.0/5。", "作為 9/28 亮馬河後漂亮飯備選。"]
  },
  {
    type: "Taiwan",
    title: "陸委會國人赴陸港澳動態登錄",
    url: "https://www.mac.gov.tw/cp.aspx?n=015A70099E11C8A8",
    takeaways: ["陸委會說明登錄目的為強化國人急難救助服務。", "出發前建議填航班、飯店、緊急聯絡人與行程。"]
  },
  {
    type: "Taiwan",
    title: "海基會中國大陸旅行安全手冊",
    url: "https://www.sef.org.tw/eBook/CHebook/2025/index.html",
    takeaways: ["手冊列出大陸旅遊警示、人身安全、通訊、證件遺失與緊急處理。", "提醒赴陸前檢查手機/筆電資料與個人物品。"]
  },
  {
    type: "Taiwan",
    title: "移民署赴陸旅遊證件提醒",
    url: "https://www.immigration.gov.tw/5385/7229/7238/405128/",
    takeaways: ["移民署提醒勿申領中國一次性邊境旅遊護照。", "赴陸旅遊應循正常管道辦理目的地所需證件。"]
  },
  {
    type: "Permit",
    title: "國台辦台胞證便利政策",
    url: "https://www.gwytb.gov.cn/xwdt/xwfb/wyly/202511/t20251105_12732704.htm",
    takeaways: ["國台辦資料提及台灣居民可透過台灣當地旅行社代辦卡式台胞證。", "口岸一次有效台胞證可作備援，但自由行仍建議出發前辦好卡式台胞證。"]
  },
  {
    type: "Money",
    title: "臺灣銀行人民幣牌告匯率",
    url: "https://rate.bot.com.tw/xrt?Lang=en-US",
    takeaways: ["2026/08/24 查詢：人民幣現金賣出 4.805，現匯賣出 4.77。", "頁面價格用 1 RMB ≈ NT$4.8 做保守粗估。"]
  },
  {
    type: "Payment",
    title: "北京官方支付服務資訊",
    url: "https://english.beijing.gov.cn/specials/paymentservices/news/202505/t20250528_4100629.html",
    takeaways: ["北京官方英文站提及微信支付國際卡小額交易手續費減免。", "國際卡支付規則會以付款頁與當期活動為準。"]
  }
];

const checklistItems = [
  { id: "palace-ticket", title: "9/18 起處理 9/25 故宮與天安門預約", detail: "故宮 20:00 搶票；天安門提前 1-7 日實名預約，證件資料先準備。" },
  { id: "permit", title: "檢查台胞證效期與證件照片", detail: "台胞證、護照、身分證都帶；拍照備份放雲端與手機。" },
  { id: "mac-register", title: "填國人赴陸港澳動態登錄", detail: "填航班、飯店、行程與緊急聯絡人，家人留一份行程連結。" },
  { id: "payment-test", title: "支付寶/微信支付小額測試", detail: "綁卡、實名、付款碼與收款碼都先測；準備 ¥500-1,000 現金備用。" },
  { id: "network", title: "準備中國可用網路與 App", detail: "eSIM/漫遊、高德、滴滴/高德打車、Klook/Trip.com。" },
  { id: "mutianyu-tour", title: "預訂 9/26 慕田峪 tour", detail: "主案 MuBus 10:00；若想晚起改 13:00 但長城停留變短。" },
  { id: "siji", title: "四季民福前門店取號/訂位", detail: "9/24 晚餐。可接受排隊就保留，不想排就改附近老字號。" },
  { id: "xiaojie", title: "小街豬手晚餐備案", detail: "9/25 接三里屯/工體夜生活，先看等位。" },
  { id: "chill-day", title: "查 9/28 798 展覽與亮馬河船票", detail: "798 園區可直接逛；若要特定展覽或亮馬河遊船，出發前再確認營業與票價。" },
  { id: "bath-ticket", title: "預訂 9/28 水裹四惠夜間過夜方案", detail: "確認護照登記、最晚入場、早餐與寄存。" },
  { id: "hotel-luggage", title: "確認 9/28 水裹可寄行李", detail: "主案是退房後先到水裹寄大行李，再去 798/亮馬河。" },
  { id: "apps", title: "安裝支付/地圖/DD/訂票 App", detail: "台灣手機註冊驗證碼先測，必要時用微信/支付寶小程序。" },
  { id: "souvenir", title: "伴手禮最後兩天買", detail: "稻香村糕點、吳裕泰/張一元茶葉、北京坊文創。" },
  { id: "airport", title: "9/29 設雙鬧鐘與 PEK T3 目的地", detail: "05:10 從湯泉出發，目標 06:00 前後到 T3。" }
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
  routeGrid: document.querySelector("#routeGrid"),
  auditGrid: document.querySelector("#auditGrid"),
  compareGrid: document.querySelector("#compareGrid"),
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
    <a class="button" href="${amapUrl(stop.place)}" target="_blank" rel="noopener noreferrer">高德搜尋</a>
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

function renderCompareGrid() {
  renderCardGrid(elements.compareGrid, compareCards, (item) => `
    <article class="info-card">
      <span class="source-type">${item.label}</span>
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
  const saved = JSON.parse(localStorage.getItem("beijingChecklist") || "{}");
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
  const saved = JSON.parse(localStorage.getItem("beijingChecklist") || "{}");
  saved[checkbox.dataset.check] = checkbox.checked;
  localStorage.setItem("beijingChecklist", JSON.stringify(saved));
}

function hydrateNotes() {
  elements.tripNotes.value = localStorage.getItem("beijingTripNotes") || "";
  elements.tripNotes.addEventListener("input", () => {
    localStorage.setItem("beijingTripNotes", elements.tripNotes.value);
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
}

function render() {
  renderTabs();
  renderTimeline();
  renderInspector();
}

render();
renderRouteGrid();
renderAuditGrid();
renderCompareGrid();
renderBudgetGrid();
renderTaiwanGrid();
renderFoodGrid();
renderNightGrid();
renderTips();
renderSources();
renderChecklist();
hydrateNotes();
bindEvents();
