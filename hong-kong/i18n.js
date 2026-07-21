/**
 * @file Bilingual strings for HK itinerary page.
 * Supports data-i18n keys and inline data-i18n-en attributes.
 */
(function () {
  /** @type {Record<string, Record<string, string>>} */
  const T = {
    'page.title': { zh: '2026 香港 · 3 天 2 夜旅行筆記 v2', en: '2026 Hong Kong · 3D2N Trip Notes v2' },
    'meta.description': {
      zh: '2026年8月香港3天2夜：英皇駿景酒店、葵涌廣場13間掃街、Big Bus維港線、航班8/7–8/9，含Google Maps',
      en: '2026 Aug Hong Kong 3D2N: Emperor Hotel, Kwai Chung Plaza food crawl, Big Bus harbour, flights Aug 7–9, Google Maps'
    },
    'nav.label': { zh: '行程導覽', en: 'Navigate' },
    'nav.summary': { zh: '📋 摘要前提', en: '📋 Summary' },
    'nav.firsttimer': { zh: '🆕 新手注意', en: '🆕 First-timer' },
    'nav.checklist': { zh: '🎒 旅行清單', en: '🎒 Checklist' },
    'nav.d1': { zh: 'Day 1 · 8/7', en: 'Day 1 · Aug 7' },
    'nav.d2': { zh: 'Day 2 · Big Bus', en: 'Day 2 · Big Bus' },
    'nav.d3': { zh: 'Day 3 · 葵廣→機場', en: 'Day 3 · KCP→Airport' },
    'nav.transport': { zh: '🚇 交通小白', en: '🚇 Transport 101' },
    'nav.food': { zh: '🍢 葵涌13間', en: '🍢 KCP Food' },
    'nav.budget': { zh: '💰 預算總表', en: '💰 Budget' },
    'nav.cash': { zh: '💵 現金支付', en: '💵 Cash & Pay' },
    'nav.validate': { zh: '✅ 合理性', en: '✅ Validation' },
    'nav.score': { zh: '⭐ 行程評分', en: '⭐ Score' },
    'nav.tips': { zh: '💡 提醒', en: '💡 Tips' },
    'cover.title': { zh: '2026 香港<br>3 天 2 夜旅行筆記', en: '2026 Hong Kong<br>3 Days 2 Nights' },
    'cover.pill1': { zh: '🍢 葵涌廣場掃街', en: '🍢 Kwai Chung food crawl' },
    'cover.pill2': { zh: '🚌 Big Bus 維港', en: '🚌 Big Bus harbour' },
    'cover.pill3': { zh: '🥟 點心／街頭', en: '🥟 Dim sum & street food' },
    'cover.pill4': { zh: '🌊 星光大道', en: '🌊 Avenue of Stars' },
    'mobile.label': { zh: '快速跳轉', en: 'Quick links' },
    'img.harbour': { zh: '維多利亞港 · Victoria Harbour', en: 'Victoria Harbour' },
    'img.ferry': { zh: '天星小輪 · Star Ferry', en: 'Star Ferry' },
    'img.bruce': { zh: '星光大道 · Avenue of Stars', en: 'Avenue of Stars · Big Bus stop' },
    'img.kcp': { zh: '葵涌廣場 · Kwai Chung Plaza', en: 'Kwai Chung Plaza food crawl' },
    'sec.summary': { zh: '摘要 · 前提 · 概要', en: 'Summary · Prerequisites' },
    'sec.sub.summary': { zh: '第一次香港 · 3 天 2 夜 · 只有背包不托運 · 灣仔英皇駿景連住 · 美食（點心／街頭／葵廣）＋ Big Bus 維港', en: 'First HK trip · 3D2N · backpack only · Wan Chai hotel · food + Big Bus harbour' },
    'stat.days': { zh: '天數', en: 'Days' },
    'stat.hotel': { zh: '英皇駿景', en: 'Emperor Hotel' },
    'stat.backpack': { zh: '不托運', en: 'No check-in bag' },
    'stat.budget': { zh: 'HKD／人 在地', en: 'HKD/person local' },
    'stat.wanchai': { zh: '灣仔', en: 'Wan Chai' },
    'stat.backpack.val': { zh: '背包', en: 'Backpack' },
    'verified.flight': { zh: '✈ 航班（已核實）', en: '✈ Flights (verified)' },
    'verified.hotel': { zh: '🏨 英皇駿景酒店 The Emperor Hotel', en: '🏨 The Emperor Hotel' },
    'verified.hoteladdr': { zh: '灣仔皇后大道東 373 號 · 8/7–8/9 連住兩晚', en: '373 Queen\'s Road East, Wan Chai · 2 nights Aug 7–9' },
    'summary.core': { zh: '🎯 行程核心（三句話）', en: '🎯 Trip in three lines' },
    'summary.d1': { zh: 'Day 1：晚抵港 → 機場快線＋的士入住 → 飯店旁宵夜（不趕行程）。', en: 'Day 1: Late arrival → Airport Express + taxi → nearby late-night food.' },
    'summary.d2': { zh: 'Day 2：灣仔早茶 → Big Bus 九龍藍線 → 星光大道／維港海濱（主軸日）。', en: 'Day 2: Dim sum → Big Bus blue route → Avenue of Stars / harbour.' },
    'summary.d3': { zh: 'Day 3：退房 → 葵涌廣場掃 4–6 間 → 16:10 到機場（18:40 回程，提前 2.5 小時）。', en: 'Day 3: Checkout → Kwai Chung Plaza → airport by 16:10 (2.5h before flight).' },
    'budget.quick.title': { zh: '在地預算快覽（1 人 · 不含機票／飯店）', en: 'Local budget snapshot (1 person, excl. flights & hotel)' },
    'budget.quick.note': { zh: 'Day 1 約 HK$245–315 · Day 2 約 HK$560–780 · Day 3 約 HK$215–350 · 詳見各日下方與', en: 'Day 1 ~HK$245–315 · Day 2 ~HK$560–780 · Day 3 ~HK$215–350 · See daily bars & ' },
    'budget.link': { zh: '預算總表', en: 'full budget' },
    'sec.firsttimer': { zh: '第一次去香港 · 注意事項', en: 'First time in Hong Kong' },
    'sec.checklist': { zh: '旅行清單 · 出發前勾選', en: 'Packing checklist' },
    'checklist.intro': { zh: '你是<strong>背包客、不托運</strong> → 全部放進一個背包即可；出發前逐項打勾。', en: 'You travel with <strong>one backpack only</strong> — tick off before departure.' },
    'checklist.final': { zh: '✅ <strong>登機前最後檢查</strong>：護照、機票、錢包、手機、轉接頭、行動電源 — 六樣放同一小袋。', en: '✅ <strong>Before boarding</strong>: passport, tickets, wallet, phone, adapter, power bank — one pouch.' },
    'sec.itinerary': { zh: '3 天 2 夜 · 逐日行程', en: '3 days 2 nights · Daily plan' },
    'sec.sub.itinerary': { zh: '每個時段標示<strong>預算</strong>、說明與 Maps 連結；各日合計見橘色預算列。', en: 'Each slot shows <strong>budget</strong>, notes & Maps links; orange bar = daily total.' },
    'day1.title': { zh: '✈ 抵達 · Check-in · 灣仔宵夜', en: '✈ Arrive · Check-in · Wan Chai supper' },
    'day1.budget': { zh: '💰 <strong>Day 1 預算合計</strong>：約 HK$245–315／人（交通＋宵夜；八達通首次購買另計 HK$200 含可退押金）', en: '💰 <strong>Day 1 total</strong>: ~HK$245–315/person (transport + supper; Octopus ~HK$200 first purchase)' },
    'day2.title': { zh: '🌊 維港日 · 點心 · Big Bus 九龍藍線 · 星光大道', en: '🌊 Harbour day · dim sum · Big Bus · Avenue of Stars' },
    'day2.budget': { zh: '💰 <strong>Day 2 預算合計</strong>：約 HK$560–780／人（早茶＋Big Bus＋MTR＋晚餐）', en: '💰 <strong>Day 2 total</strong>: ~HK$560–780/person (dim sum + Big Bus + MTR + dinner)' },
    'day3.title': { zh: '🍢 葵涌廣場掃街 → 直達機場', en: '🍢 Kwai Chung Plaza → airport' },
    'day3.budget': { zh: '💰 <strong>Day 3 預算合計</strong>：約 HK$215–350／人（MTR×2＋葵廣掃街現金）', en: '💰 <strong>Day 3 total</strong>: ~HK$215–350/person (MTR ×2 + KCP cash food)' },
    'sec.transport': { zh: '交通小白 · 第一次去香港必讀', en: 'Transport 101 · first-timers' },
    'sec.food': { zh: '葵涌廣場 · 13 間掃街清單', en: 'Kwai Chung Plaza · 13 food stalls' },
    'sec.validate': { zh: '行程合理性驗證', en: 'Itinerary sanity check' },
    'sec.score': { zh: '行程評分（2026/7/22 更新）', en: 'Trip score (updated Jul 22, 2026)' },
    'sec.budget': { zh: '預算總表（不含機票・飯店）', en: 'Full budget (excl. flights & hotel)' },
    'sec.cash': { zh: '現金 vs 電子支付 · 怎麼準備', en: 'Cash vs digital payment' },
    'sec.tips': { zh: '行前提醒', en: 'Before you go' },
    'score.sub': { zh: '適合第一次香港 · 3 天 2 夜 · 背包客 · 美食＋維港', en: 'Great for first HK visit · 3D2N · backpacker · food + harbour' },
    'footer.note': { zh: '航班／飯店為已核實資料；其餘為建議動線，出發前請確認營業時間與票券。', en: 'Flights/hotel verified; rest are suggestions — confirm hours & tickets before go.' },
    'footer.credits': {
      zh: '美食參考：',
      en: 'Food refs: '
    }
  };

  /** @type {WeakSet<Element>} */
  const savedInline = new WeakSet();

  /**
   * Store original HTML for inline bilingual elements.
   */
  function captureInlineOriginals() {
    document.querySelectorAll('[data-i18n-en]').forEach(function (el) {
      if (savedInline.has(el)) return;
      el.dataset.i18nZh = el.innerHTML;
      savedInline.add(el);
    });
  }

  /**
   * @param {string} lang
   */
  function applyLang(lang) {
    const pack = lang === 'en' ? 'en' : 'zh';
    document.documentElement.lang = pack === 'en' ? 'en' : 'zh-Hant';
    document.body.classList.toggle('lang-en', pack === 'en');

    captureInlineOriginals();

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!key || !T[key] || !T[key][pack]) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = T[key][pack];
      } else {
        el.textContent = T[key][pack];
      }
    });

    document.querySelectorAll('[data-i18n-en]').forEach(function (el) {
      if (pack === 'en') {
        el.innerHTML = el.getAttribute('data-i18n-en') || el.innerHTML;
      } else if (el.dataset.i18nZh) {
        el.innerHTML = el.dataset.i18nZh;
      }
    });

    document.querySelectorAll('[data-i18n-aria-en]').forEach(function (el) {
      const en = el.getAttribute('data-i18n-aria-en');
      const zh = el.getAttribute('data-i18n-aria-zh') || el.getAttribute('aria-label');
      if (pack === 'en' && en) {
        el.setAttribute('aria-label', en);
      } else if (zh) {
        el.setAttribute('aria-label', zh);
      }
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && T['meta.description'] && T['meta.description'][pack]) {
      metaDesc.setAttribute('content', T['meta.description'][pack]);
    }

    if (T['page.title'][pack]) {
      document.title = T['page.title'][pack];
    }

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === pack);
    });

    try {
      localStorage.setItem('hk-trip-lang', pack);
    } catch (e) { /* ignore */ }
  }

  function initLang() {
    captureInlineOriginals();
    let saved = 'zh';
    try {
      saved = localStorage.getItem('hk-trip-lang') || 'zh';
    } catch (e) { /* ignore */ }
    applyLang(saved);

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang') || 'zh');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  window.hkTripApplyLang = applyLang;
})();
