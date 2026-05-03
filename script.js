/* ============================================
   CHÀ LÀ STORE v2.0 - Main Script
   ============================================ */

// ── DEFAULT SOUND TAG PLAYLISTS ──
const DEFAULT_PLAYLISTS = {
  'V-Shape':    'https://www.youtube.com/embed/5qap5aO4i9A',
  'Warm':       'https://www.youtube.com/embed/jfKfPfyJRdk',
  'Bright':     'https://www.youtube.com/embed/4To8_MfFSug',
  'Neutral':    'https://www.youtube.com/embed/aMyFd6EaLFw',
  'Bass-Heavy': 'https://www.youtube.com/embed/tNv7aUDAcQk',
  'Mid-Forward':'https://www.youtube.com/embed/Dx5qFachd3A'
};

const SOUND_DESCS = {
  'V-Shape':    'V-Shape: Bass mạnh + Treble sáng, Mid hơi lùi. Phù hợp game hành động, EDM, Hip-hop. Nghe rất "oomph".',
  'Warm':       'Warm: Âm thanh ấm áp, trung tần mượt mà. Nghe lâu không mỏi tai. Phù hợp Lofi, Acoustic, xem phim dài.',
  'Bright':     'Bright: Treble chi tiết, sắc nét. Phù hợp Classical, Jazz, nhạc cụ tự nhiên. Nghe lâu dễ mỏi.',
  'Neutral':    'Neutral/Flat: Trung thực, không tô màu. Phù hợp Podcast, Mixing, monitor. Tiêu chuẩn chuyên nghiệp.',
  'Bass-Heavy': 'Bass-Heavy: Sub bass dồn dập, uy lực. Phù hợp Hip-hop, Electronic, Game FPS cần hiệu ứng boom.',
  'Mid-Forward':'Mid-Forward: Vocal cực rõ, nhạc cụ nổi. Phù hợp K-pop, Jazz, Classical. Nghe nhạc acoustic rất sướng.'
};

const FR_PRESETS = {
  'V-Shape':    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60',
  'Warm':       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60',
  'Bright':     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60',
  'Neutral':    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60',
  'Bass-Heavy': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60',
  'Mid-Forward':'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=60'
};

// ── DEFAULT FAQs ──
const DEFAULT_FAQS = [
  { q: 'Headphone vs IEM — cái nào phù hợp cho tôi?', a: 'Headphone (chụp tai) cho âm thanh rộng hơn, cảm giác "soundstage" tốt cho game và phim. IEM (nhét tai) nhỏ gọn hơn, cô lập âm thanh tốt hơn, phù hợp di chuyển. Với gaming, headphone thường được ưu tiên vì định vị âm thanh tốt hơn.' },
  { q: 'Có dây hay Wireless — gaming nên chọn gì?', a: 'Có dây: Độ trễ 0ms, không lo pin, giá rẻ hơn. Wireless hiện đại (<20ms): Thoải mái, không vương dây. Với FPS competitive, có dây vẫn là lựa chọn an toàn nhất. Casual gaming thì wireless ổn hoàn toàn.' },
  { q: 'Nên chọn chất âm V-Shape hay Neutral?', a: 'V-Shape: Nghe "wow" ngay lập tức, game hành động cực đã, nhưng không trung thực. Neutral: Nghe quen mới sướng, phù hợp cho người muốn nghe nhạc đúng với ý định của nhạc sĩ. Đa số game thủ thích V-Shape hơn.' },
  { q: 'Hàng cũ có an toàn, hợp vệ sinh không?', a: 'Tất cả sản phẩm tại Chà Là đều qua 3 bước: Vệ sinh bằng cồn y tế, chiếu đèn UV-C diệt khuẩn, và sấy khô kỹ. Đệm tai mòn sẽ được thay mới trước khi bán. Yên tâm hoàn toàn.' },
  { q: 'Nếu tai nghe bị lỗi sau khi mua, xử lý thế nào?', a: 'Chà Là bảo hành 30 ngày lỗi kỹ thuật. Trong thời gian này, nếu sản phẩm có bất kỳ vấn đề nào về âm thanh hay kết nối, bạn được đổi sản phẩm tương đương hoặc hoàn tiền. Chỉ cần nhắn Messenger.' },
  { q: 'Có ship COD không? Đổi trả thế nào?', a: 'Có hỗ trợ COD toàn quốc. Đổi trả trong 7 ngày nếu sản phẩm không đúng mô tả. Phí ship đổi trả Chà Là chịu nếu lỗi từ shop. Thanh toán: COD, chuyển khoản, ví điện tử.' },
  { q: 'Pin tai nghe không dây còn được bao lâu?', a: 'Mỗi sản phẩm có thông số pin được đo thực tế và hiển thị rõ ràng trên trang. Chà Là không bán tai nghe có pin dưới 70%. Tham khảo card sản phẩm để biết % pin cụ thể.' },
  { q: 'Tại sao giá rẻ hơn mua mới rất nhiều?', a: 'Đơn giản vì đây là hàng đã qua sử dụng. Chất lượng âm thanh và chức năng hoàn toàn bình thường, nhưng giá chỉ bằng 20-50% hàng mới. Lý tưởng cho ai muốn trải nghiệm tai nghe cao cấp mà không bỏ nhiều tiền.' }
];

// ── SEED DATA ──
const SEED_PRODUCTS = [
  {
    id: 1000001, name: 'HyperX Cloud Stinger Core', brand: 'HyperX',
    segment: 'gaming',
    condition: 'Like New', price: 650000, originalPrice: 1290000, stock: 1,
    soundTag: 'V-Shape', latency: 'wired', isWireless: false, batteryHealth: null,
    images: ['https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80',
             'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&q=80',
             'https://images.unsplash.com/photo-1524678606370-a37ad95c7631?w=300&q=80'],
    video: '', youtubePlaylist: '', frGraph: '',
    shopeeLink: '#', description: 'Driver 40mm, mic có thể gập, đệm da mềm. Test âm thanh OK, dây zin. Phù hợp FPS và game bắn súng.',
    reviews: [{ name: 'Minh Khoa', stars: 5, date: '2024-11-10', text: 'Nghe rõ tiếng chân cực, chiến Valorant sướng lắm!' }],
    views: 47, createdAt: Date.now() - 86400000, isSold: false
  },
  {
    id: 1000002, name: 'Razer Kraken X Lite', brand: 'Razer',
    segment: 'gaming',
    condition: 'Hơi xước', price: 420000, originalPrice: 990000, stock: 1,
    soundTag: 'Bass-Heavy', latency: 'wired', isWireless: false, batteryHealth: null,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
             'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&q=80'],
    video: '', youtubePlaylist: '', frGraph: '',
    shopeeLink: '#', description: 'Nhẹ 250g, surround 7.1 ảo. Có vài vết xước nhỏ headband, không ảnh hưởng chức năng. Driver OK.',
    reviews: [{ name: 'Tuấn Anh', stars: 4, date: '2024-10-28', text: 'Bass rất đã, chơi game hành động cực hợp.' }],
    views: 31, createdAt: Date.now() - 172800000, isSold: false
  }
];

// ── INIT ──
const PUBLIC_DATA_URL = 'data/public-data.json';
let PUBLIC_DATA = null;

document.addEventListener('DOMContentLoaded', async () => {
  initData();
  await loadPublicDataIfNeeded();
  renderProducts();
  renderFAQ();
  setupSearch();
  setupFilters();
  setupMagnifier();
  setupScrollFab();
  applyGlobalSettings();
  updateAdminLinkVisibility();
});

function initData() {
  if (!localStorage.getItem('chala_v2_products')) {
    localStorage.setItem('chala_v2_products', JSON.stringify(SEED_PRODUCTS));
  }
  if (!localStorage.getItem('chala_v2_faqs')) {
    localStorage.setItem('chala_v2_faqs', JSON.stringify(DEFAULT_FAQS));
  }
  if (!localStorage.getItem('chala_v2_settings')) {
    localStorage.setItem('chala_v2_settings', JSON.stringify({
      messengerLink: 'https://m.me/chalachanai',
      facebook: 'https://www.facebook.com/chalachanai/',
      shopName: 'Chà Là',
      soundTagPlaylists: DEFAULT_PLAYLISTS
    }));
  }
}

function shouldUsePublicData() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('data') === 'cloud') return true;
  if (params.get('data') === 'public') return true;
  if (params.get('data') === 'local') return false;
  if (window.location.hostname.endsWith('github.io')) return true;
  if (window.ChalaCloud?.config?.provider === 'node') return true;
  return !['127.0.0.1', 'localhost', ''].includes(window.location.hostname);
}

async function loadPublicDataIfNeeded() {
  if (!shouldUsePublicData()) return;
  const isStaticHost = window.location.hostname.endsWith('github.io');
  if (!isStaticHost && window.ChalaCloud?.isConfigured()) {
    try {
      await window.ChalaCloud.init();
      const cloudData = await window.ChalaCloud.loadStore();
      if (cloudData?.products || cloudData?.faqs || cloudData?.settings) {
        PUBLIC_DATA = {
          products: Array.isArray(cloudData.products) ? cloudData.products : [],
          faqs: Array.isArray(cloudData.faqs) ? cloudData.faqs : DEFAULT_FAQS,
          settings: cloudData.settings || {}
        };
        return;
      }
    } catch (err) {
      console.warn('Không đọc được dữ liệu cloud, thử data/public-data.json.', err);
    }
  }
  try {
    const res = await fetch(`${PUBLIC_DATA_URL}?v=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    PUBLIC_DATA = {
      products: Array.isArray(data.products) ? data.products : [],
      faqs: Array.isArray(data.faqs) ? data.faqs : DEFAULT_FAQS,
      settings: data.settings || {}
    };
  } catch (err) {
    console.warn('Không đọc được data/public-data.json, dùng dữ liệu local.', err);
    PUBLIC_DATA = null;
  }
}

function getProducts() { return PUBLIC_DATA?.products || JSON.parse(localStorage.getItem('chala_v2_products') || '[]'); }
function getSettings() { return PUBLIC_DATA?.settings || JSON.parse(localStorage.getItem('chala_v2_settings') || '{}'); }
function getFaqs()     { return PUBLIC_DATA?.faqs || JSON.parse(localStorage.getItem('chala_v2_faqs') || '[]'); }

function applyGlobalSettings() {
  const s = getSettings();
  const link = normalizeContactLink(s.messengerLink || s.facebook || 'https://www.facebook.com/chalachanai/');
  document.getElementById('fabMsg').href = link;
  const fm = document.getElementById('footerMessenger');
  if (fm) fm.href = link;
  const ff = document.getElementById('footerFacebook');
  if (ff) ff.href = s.facebook || 'https://www.facebook.com/chalachanai/';
  const serviceMessenger = document.getElementById('serviceMessenger');
  if (serviceMessenger) serviceMessenger.href = link;
}

function normalizeContactLink(link) {
  const value = String(link || '').trim();
  if (!value || value === 'https://m.me/' || value === 'http://m.me/' || value === 'm.me/') {
    return 'https://www.facebook.com/chalachanai/';
  }
  return value;
}

function updateAdminLinkVisibility() {
  const link = document.getElementById('adminNavLink');
  if (!link) return;
  const isPublicGithub = window.location.hostname.endsWith('github.io');
  link.style.display = isPublicGithub ? 'none' : '';
}

const SEGMENTS = {
  gaming: { label: 'Gaming', icon: 'fa-gamepad' },
  music: { label: 'Nghe nhạc', icon: 'fa-music' },
  study: { label: 'Học bài', icon: 'fa-book-open' }
};

function getProductSegment(p = {}) {
  const key = p.segment || p.category || p.useCase || 'gaming';
  return SEGMENTS[key] ? { key, ...SEGMENTS[key] } : { key: 'gaming', ...SEGMENTS.gaming };
}

// ── RENDER PRODUCTS ──
let activeSegment = 'all', activeFilter = 'all', activeSoundFilter = '', activeLatency = '', activeSort = 'newest';
let searchQuery = '';

function getFilteredProducts() {
  let products = getProducts();
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.soundTag||'').toLowerCase().includes(q) ||
      (p.brand||'').toLowerCase().includes(q) ||
      getProductSegment(p).label.toLowerCase().includes(q) ||
      SOUND_DESCS[p.soundTag]?.toLowerCase().includes(q)
    );
  }
  if (activeSegment !== 'all') {
    products = products.filter(p => getProductSegment(p).key === activeSegment);
  }
  if (activeFilter !== 'all') {
    if (activeFilter === 'instock') products = products.filter(p => p.stock > 0 && !p.isSold);
    else if (activeFilter.startsWith('cond:')) {
      const cond = activeFilter.replace('cond:','');
      products = products.filter(p => {
        const grade = getConditionGrade(p.condition, p.isSold);
        return p.condition === cond || grade.code === cond || grade.label === cond;
      });
    }
  }
  if (activeSoundFilter) products = products.filter(p => p.soundTag === activeSoundFilter);
  if (activeLatency) products = products.filter(p => p.latency === activeLatency);
  if (activeSort === 'price-asc') products.sort((a,b) => a.price - b.price);
  else if (activeSort === 'price-desc') products.sort((a,b) => b.price - a.price);
  else products.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
  return products;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const products = getFilteredProducts();
  document.getElementById('gridCount').textContent = `${products.length} sản phẩm`;
  if (!products.length) {
    grid.innerHTML = `<div class="no-products"><i class="fas fa-search" style="font-size:2rem;margin-bottom:1rem;opacity:0.4"></i><br>Không tìm thấy sản phẩm phù hợp.</div>`;
    return;
  }
  grid.innerHTML = products.map(p => buildCard(p)).join('');
  attachCardEvents();
}

function buildCard(p) {
  const saved = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const timeAgo = getTimeAgo(p.createdAt);
  const grade = getConditionGrade(p.condition, p.isSold);
  const segment = getProductSegment(p);
  const soldHTML = p.isSold ? `<div class="sold-overlay"><span>ĐÃ BÁN</span><small>Sản phẩm không còn</small></div>` : '';
  const videoHTML = p.video ? `<video class="card-video" src="${p.video}" loop muted playsinline></video>` : '';
  const videoChip = p.video ? `<button class="media-video-chip" type="button" onclick="event.stopPropagation(); openQuickView(${p.id}, 'video')"><i class="fas fa-play"></i><span>Video</span></button>` : '';
  const descHTML = `<p class="card-desc">${getProductDescription(p)}</p>`;

  const batteryHTML = p.isWireless && p.batteryHealth ? `
    <div class="battery-bar">
      <div class="battery-label">🔋 Pin: ${p.batteryHealth}%</div>
      <div class="battery-track"><div class="battery-fill ${p.batteryHealth<70?'low':p.batteryHealth<85?'warn':''}" style="width:${p.batteryHealth}%"></div></div>
    </div>` : '';
  const priceOld = p.originalPrice ? `<span class="price-old">${fmt(p.originalPrice)}đ</span>` : '';
  const priceSave = saved > 0 ? `<span class="price-save">Tiết kiệm ${saved}%</span>` : '';
  const condClass = p.isSold ? 'sold' : '';
  const messengerLink = p.messengerLink || getSettings().messengerLink || '#';

  return `
  <div class="product-card" data-id="${p.id}">
    <div class="card-media" onclick="openQuickView(${p.id})">
      <img src="${p.images?.[0]||''}" class="card-img" id="ci-${p.id}" alt="${p.name}">
      ${videoHTML}
      ${videoChip}
      ${soldHTML}
      <div class="card-side-actions">
        <span class="side-badge side-badge-time">${timeAgo}</span>
        <span class="side-badge side-badge-cond ${condClass}" title="${grade.note}">${grade.short}</span>
          <button class="side-btn side-item btn-zoom" title="Soi chi tiết x2" data-img="${p.images?.[0]||''}"><i class="fas fa-search-plus"></i></button>
        ${p.video ? `<button class="side-btn side-item" title="Xem video" onclick="event.stopPropagation(); openQuickView(${p.id}, 'video')"><i class="fas fa-play"></i></button>` : ''}
        <button class="side-btn side-item btn-music" data-tag="${p.soundTag}" data-playlist="${p.youtubePlaylist||''}" data-fr="${p.frGraph||''}" data-name="${p.name}" title="Nghe thử gu âm nhạc"><i class="fas fa-music"></i></button>
        <a class="side-btn side-item side-btn-msg" href="${messengerLink}" target="_blank" onclick="event.stopPropagation()" title="Nhắn Messenger mua hàng"><i class="fab fa-facebook-messenger"></i></a>
      </div>
    </div>
    <div class="card-info">
      <div class="card-segment"><i class="fas ${segment.icon}"></i>${segment.label}</div>
      <div class="card-name" style="cursor:pointer" onclick="openQuickView(${p.id})">${p.name}</div>
      ${descHTML}
      <div class="price-row">
        <span class="price-new">${fmt(p.price)}đ</span>
        ${priceOld}
      </div>
      ${priceSave}
      ${batteryHTML}
      <div class="card-trust-row" title="${grade.note}">
        <span class="trust-pill trust-grade grade-${grade.className}">${grade.code}</span>
        <span class="trust-pill"><i class="fas fa-check"></i> Test OK</span>
        <span class="trust-pill"><i class="fas fa-shield-alt"></i> BH 30 ngày</span>
      </div>
      <div class="card-action-row">
        <button class="btn-card-check" onclick="openInfo(${p.id})"><i class="fas fa-clipboard-check"></i><span>Hồ sơ</span></button>
        <button class="btn-card-check btn-card-music-action" onclick="openMusic('${p.soundTag||''}', '${p.youtubePlaylist||''}', '${p.frGraph||''}', '${p.name}')"><i class="fas fa-music"></i><span>Nghe thử</span></button>
        <a class="btn-card-msg ${p.isSold ? 'disabled' : ''}" href="${p.isSold ? '#' : messengerLink}" target="_blank" onclick="${p.isSold ? 'return false;' : ''}">
          <i class="fab fa-facebook-messenger"></i><span>${p.isSold ? 'Đã bán' : 'Nhắn mua'}</span>
        </a>
      </div>
    </div>
  </div>`;
}

function attachCardEvents() {
  // Video hover
  document.querySelectorAll('.card-media').forEach(m => {
    const v = m.querySelector('video');
    if (v) {
      m.addEventListener('mouseenter', () => v.play().catch(()=>{}));
      m.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
    }
  });
  // Zoom btn
  document.querySelectorAll('.btn-zoom').forEach(b => {
    b.addEventListener('click', e => { e.stopPropagation(); openZoom(b.dataset.img); });
  });
  // Music btn
  document.querySelectorAll('.btn-music').forEach(b => {
    b.addEventListener('click', e => { e.stopPropagation(); openMusic(b.dataset.tag, b.dataset.playlist, b.dataset.fr, b.dataset.name); });
  });
}

// ── UTILS ──
function fmt(n) { return Number(n).toLocaleString('vi-VN'); }

function getProductDescription(p = {}) {
  return String(p.description || '').trim() || 'Đã vệ sinh, test âm và kiểm tra ngoại hình trước khi bán.';
}

function getTimeAgo(ts) {
  if (!ts) return 'Mới về';
  const diff = Date.now() - ts;
  const h = Math.floor(diff/3600000);
  const d = Math.floor(h/24);
  if (h < 1) return 'Vừa về';
  if (h < 24) return `${h}h trước`;
  if (d < 2) return 'Hôm qua';
  if (d < 7) return `${d} ngày trước`;
  return `${Math.floor(d/7)} tuần trước`;
}

function getConditionGrade(condition = '', isSold = false) {
  if (isSold) {
    return {
      code: 'SOLD',
      label: 'Đã bán',
      short: 'ĐÃ BÁN',
      note: 'Sản phẩm không còn',
      className: 'sold'
    };
  }

  const text = String(condition || '').toLowerCase();
  if (text.includes('like new')) {
    return {
      code: 'Like New(S)',
      label: 'Like New(S)',
      short: 'Like New(S)',
      note: 'Đẹp nhất shop, gần như mới, rất ít dấu sử dụng',
      className: 's'
    };
  }
  if (text === 'mới' || text.includes('đã thay đệm')) {
    return {
      code: 'Mới',
      label: 'Mới',
      short: 'Mới',
      note: 'Ngoại hình đẹp, dùng tốt, đã kiểm tra đầy đủ',
      className: 'new'
    };
  }
  if (text.includes('hơi xước') || text.includes('trầy nhẹ') || text.includes('đệm cũ')) {
    return {
      code: 'Trầy nhẹ',
      label: 'Trầy nhẹ',
      short: 'Trầy nhẹ',
      note: 'Có vết trầy nhẹ hoặc dấu dùng, chức năng đã test ổn',
      className: 'light'
    };
  }
  if (text.includes('xước nhiều') || text.includes('trầy nhiều')) {
    return {
      code: 'Trầy nhiều',
      label: 'Trầy nhiều',
      short: 'Trầy nhiều',
      note: 'Ngoại hình có nhiều dấu dùng, chức năng đã kiểm tra kỹ',
      className: 'heavy'
    };
  }

  return {
    code: condition || 'Mới',
    label: condition || 'Mới',
    short: condition || 'Mới',
    note: 'Đã kiểm tra chức năng cơ bản',
    className: 'new'
  };
}

// ── SEARCH & FILTER ──
function setupSearch() {
  const inp = document.getElementById('searchInput');
  inp.addEventListener('input', () => { searchQuery = inp.value.trim(); renderProducts(); });
}

function setupFilters() {
  document.querySelectorAll('.chip[data-reset-filter]').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeSegment = 'all';
      activeFilter = 'all';
      renderProducts();
    });
  });
  document.querySelectorAll('.chip[data-segment]').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-reset-filter], .chip[data-segment]').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeSegment = c.dataset.segment;
      renderProducts();
    });
  });
  document.querySelectorAll('.chip[data-filter]').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-reset-filter], .chip[data-filter]').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeFilter = c.dataset.filter;
      renderProducts();
    });
  });
  document.getElementById('soundFilter').addEventListener('change', e => { activeSoundFilter = e.target.value; renderProducts(); });
  document.getElementById('latencyFilter').addEventListener('change', e => { activeLatency = e.target.value; renderProducts(); });
  document.getElementById('sortFilter').addEventListener('change', e => { activeSort = e.target.value; renderProducts(); });
}

// ── OVERLAYS ──
function openOverlay(id) {
  const el = document.getElementById(id);
  el.style.display = 'flex';
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => el.classList.add('open'));
}
function closeOverlay(id) {
  const el = document.getElementById(id);
  el.classList.remove('open');
  setTimeout(() => {
    el.style.display = 'none';
    if (!document.querySelector('.overlay.open')) {
      document.body.classList.remove('modal-open');
    }
  }, 320);
  // Stop youtube
  if (id === 'musicOverlay') document.getElementById('musicIframe').src = '';
  if (id === 'quickOverlay') {
    const video = document.getElementById('qvMainVideo');
    if (video) video.pause();
  }
}
window.closeOverlay = closeOverlay;

// ── INFO (Checklist) ──
window.openInfo = function(id) {
  const p = getProducts().find(x => x.id == id);
  if (!p) return;
  const customInspection = String(p.inspection || '').trim();
  const customInspectionHTML = customInspection
    ? `<div class="inspection-note">${customInspection.replace(/\n/g, '<br>')}</div>`
    : '';
  const details = p.inspectionDetails || {};
  const shell = details.shell || (p.condition === 'Like New' ? 'Không vết' : p.condition === 'Hơi xước' ? 'Xước li ti, khó thấy' : 'Có vết xước rõ');
  const pads = details.pads || (p.condition === 'Đã thay đệm' ? 'Đệm mới thay' : p.condition === 'Đệm cũ' ? 'Đệm gốc, hơi mòn' : 'Đệm tốt');
  const driver = details.driver || 'Test OK, không rè, cân bằng hai bên';
  const mic = details.mic || 'Thu âm rõ, không nhiễu nền';
  const connect = details.connect || 'Ổn định, không rớt signal';
  const battery = details.battery || (p.batteryHealth ? `Còn ${p.batteryHealth}%` : 'Không đo được');
  const clean = details.clean || 'Cồn y tế + UV-C tiệt trùng ✓';
  document.getElementById('infoTitle').textContent = `Kiểm định: ${p.name}`;
  document.getElementById('infoBody').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0.75rem;">
      ${customInspectionHTML}
      ${checkItem('Vỏ máy / Headband', shell)}
      ${checkItem('Đệm tai (Earpads)', pads)}
      ${checkItem('Driver âm thanh', driver)}
      ${checkItem('Microphone', mic)}
      ${checkItem('Kết nối (Jack / USB / BT)', connect)}
      ${(p.isWireless || details.battery) ? checkItem('Pin', battery) : ''}
      ${checkItem('Vệ sinh', clean)}
    </div>`;
  openOverlay('infoOverlay');
};

function checkItem(label, value) {
  return `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid rgba(255,255,255,0.05);">
    <span style="font-size:0.85rem;color:#aaa;">${label}</span>
    <span style="font-size:0.82rem;color:#e8e8e8;text-align:right;max-width:55%;">${value}</span>
  </div>`;
}

// ── MUSIC POPUP ──
window.openMusic = function(tag, customPlaylist, customFr, name) {
  const settings = getSettings();
  const playlist = customPlaylist || (settings.soundTagPlaylists?.[tag]) || DEFAULT_PLAYLISTS[tag] || '';
  const fr = customFr || FR_PRESETS[tag] || '';
  document.getElementById('musicTitle').textContent = `🎵 ${tag || 'Gu âm nhạc'} — ${name}`;
  document.getElementById('musicIframe').src = playlist ? `${playlist}?autoplay=1` : '';
  const frEl = document.getElementById('frImg');
  frEl.src = fr;
  frEl.style.display = fr ? 'block' : 'none';
  document.getElementById('soundDesc').textContent = SOUND_DESCS[tag] || 'Chất âm đặc trưng của sản phẩm này.';
  openOverlay('musicOverlay');
};

// ── ZOOM / MAGNIFIER ──
window.openZoom = function(src) {
  document.getElementById('zoomImg').src = src;
  document.getElementById('magnifierLens').style.backgroundImage = `url('${src}')`;
  openOverlay('zoomOverlay');
};

function setupMagnifier() {
  const container = document.getElementById('zoomContainer');
  const lens = document.getElementById('magnifierLens');
  const ZOOM = 2;
  container.addEventListener('mouseenter', () => lens.style.display = 'block');
  container.addEventListener('mouseleave', () => lens.style.display = 'none');
  container.addEventListener('mousemove', e => {
    const r = container.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    x = Math.max(0, Math.min(x, r.width));
    y = Math.max(0, Math.min(y, r.height));
    lens.style.left = `${x - 75}px`;
    lens.style.top  = `${y - 75}px`;
    lens.style.backgroundSize     = `${r.width * ZOOM}px ${r.height * ZOOM}px`;
    lens.style.backgroundPosition = `-${x * ZOOM - 75}px -${y * ZOOM - 75}px`;
  });
}

let currentQuickProductId = null;
let currentQuickImageSrc = '';
let currentQuickVideoSrc = '';
let currentQuickMediaType = 'image';
let currentQuickImages = [];
let currentQuickIndex = 0;

function updateQuickGalleryState() {
  document.querySelectorAll('.qv-thumb[data-index]').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.index) === currentQuickIndex && currentQuickMediaType === 'image');
  });
  const hasMany = currentQuickImages.length > 1 && currentQuickMediaType === 'image';
  document.querySelectorAll('.qv-nav').forEach(btn => { btn.style.display = hasMany ? 'inline-flex' : 'none'; });
}

window.setQuickMedia = function(type, src, index = null) {
  const img = document.getElementById('qvMainImg');
  const video = document.getElementById('qvMainVideo');
  const zoomBtn = document.getElementById('qvZoomBtn');
  if (!img || !video) return;
  if (type === 'video' && src) {
    currentQuickMediaType = 'video';
    img.style.display = 'none';
    video.style.display = 'block';
    video.src = src;
    video.load();
    if (zoomBtn) zoomBtn.disabled = true;
    updateQuickGalleryState();
    return;
  }
  currentQuickMediaType = 'image';
  currentQuickImageSrc = src || '';
  const foundIndex = index !== null ? Number(index) : currentQuickImages.indexOf(currentQuickImageSrc);
  currentQuickIndex = foundIndex >= 0 ? foundIndex : 0;
  video.pause();
  video.removeAttribute('src');
  video.load();
  video.style.display = 'none';
  img.style.display = 'block';
  img.src = src || '';
  if (zoomBtn) zoomBtn.disabled = !currentQuickImageSrc;
  updateQuickGalleryState();
};

window.quickStep = function(delta) {
  if (!currentQuickImages.length) return;
  const next = (currentQuickIndex + delta + currentQuickImages.length) % currentQuickImages.length;
  setQuickMedia('image', currentQuickImages[next], next);
};

window.openQuickZoom = function() {
  if (currentQuickMediaType === 'image' && currentQuickImageSrc) openZoom(currentQuickImageSrc);
};

window.openQuickVideo = function() {
  if (currentQuickVideoSrc) setQuickMedia('video', currentQuickVideoSrc);
};

window.openQuickInfo = function() {
  if (currentQuickProductId) openInfo(currentQuickProductId);
};

window.openQuickMusic = function() {
  const p = getProducts().find(x => x.id == currentQuickProductId);
  if (!p) return;
  openMusic(p.soundTag, p.youtubePlaylist || '', p.frGraph || '', p.name);
};

function bindQuickSwipe() {
  const media = document.querySelector('.qv-media');
  if (!media || media.dataset.swipeBound) return;
  media.dataset.swipeBound = '1';
  let startX = 0;
  media.addEventListener('touchstart', e => {
    startX = e.changedTouches?.[0]?.clientX || 0;
  }, { passive: true });
  media.addEventListener('touchend', e => {
    const endX = e.changedTouches?.[0]?.clientX || 0;
    const dx = endX - startX;
    if (Math.abs(dx) > 45) quickStep(dx < 0 ? 1 : -1);
  }, { passive: true });
}

// ── QUICK VIEW ──
window.openQuickView = function(id, initialMedia = 'image', initialSrc = '') {
  const p = getProducts().find(x => x.id == id);
  if (!p) return;
  currentQuickProductId = p.id;
  currentQuickVideoSrc = p.video || '';
  currentQuickImages = Array.isArray(p.images) ? p.images.filter(Boolean) : [];
  const saved = p.originalPrice ? Math.round((1-p.price/p.originalPrice)*100) : 0;
  const grade = getConditionGrade(p.condition, p.isSold);
  const segment = getProductSegment(p);
  const startImage = initialSrc || currentQuickImages[0] || '';
  const startIndex = Math.max(0, currentQuickImages.indexOf(startImage));
  setQuickMedia(initialMedia === 'video' && p.video ? 'video' : 'image', initialMedia === 'video' && p.video ? p.video : startImage, startIndex);
  document.getElementById('qvName').textContent = p.name;
  document.getElementById('qvPriceNew').textContent = `${fmt(p.price)}đ`;
  document.getElementById('qvPriceOld').textContent = p.originalPrice ? `${fmt(p.originalPrice)}đ` : '';
  document.getElementById('qvSave').textContent = saved > 0 ? `Tiết kiệm ${saved}%` : '';
  document.getElementById('qvDesc').textContent = getProductDescription(p);
  document.getElementById('qvBadges').innerHTML = `
    <span class="qv-badge"><i class="fas ${segment.icon}"></i> ${segment.label}</span>
    <span class="qv-badge qv-grade grade-${grade.className}" title="${grade.note}">${grade.code}</span>
    <span class="qv-badge">${p.condition || grade.label}</span>
    <span class="qv-badge">Test OK</span>
    <span class="qv-badge">BH 30 ngày</span>
    ${p.soundTag ? `<span class="qv-badge">${p.soundTag}</span>` : ''}
    ${p.latency ? `<span class="qv-badge">${p.latency === 'wired' ? 'Có dây' : 'Wireless'}</span>` : ''}
    ${p.brand ? `<span class="qv-badge">${p.brand}</span>` : ''}`;
  // Thumbs
  const imageThumbs = currentQuickImages.map((img,i) =>
    `<button class="qv-thumb" type="button" data-index="${i}" onclick="setQuickMedia('image','${img}',${i})"><img src="${img}" alt="${i}"></button>`
  ).join('');
  const videoThumb = p.video
    ? `<button class="qv-thumb qv-video-thumb" type="button" onclick="setQuickMedia('video','${p.video}')"><i class="fas fa-play"></i><span>Video</span></button>`
    : '';
  document.getElementById('qvThumbs').innerHTML = imageThumbs + videoThumb;
  updateQuickGalleryState();
  const videoBtn = document.getElementById('qvVideoBtn');
  if (videoBtn) videoBtn.style.display = p.video ? 'inline-flex' : 'none';
  // Reviews
  const rv = p.reviews || [];
  document.getElementById('qvReviews').innerHTML = rv.length ? `
    <h4>💬 Đánh giá khách hàng (${rv.length})</h4>
    ${rv.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-av" style="background:hsl(${hashCode(r.name)%360},60%,40%);">${r.name[0]}</div>
        <div><div class="review-name">${r.name}</div><div class="review-date">${r.date}</div></div>
        <div class="review-stars">${'★'.repeat(r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join('')}` : '<h4 style="color:var(--text-dim)">Chưa có đánh giá nào.</h4>';
  // Messenger link
  document.getElementById('qvMsg').href = p.messengerLink || getSettings().messengerLink || '#';
  openOverlay('quickOverlay');
  bindQuickSwipe();
};

function hashCode(str) { let h=0; for(let c of str) h=Math.imul(31,h)+c.charCodeAt(0)|0; return Math.abs(h); }

// ── POLICY MODALS ──
const POLICIES = {
  wash: {
    title: '🧹 Quy trình Vệ sinh UV',
    steps: [
      ['Tháo rời đệm tai', 'Tháo đệm tai và headband nếu có thể, vệ sinh riêng từng phần.'],
      ['Cồn y tế 70°', 'Lau sạch toàn bộ vỏ máy, jack cắm và dây bằng cồn y tế.'],
      ['Chiếu đèn UV-C', 'Chiếu UV-C 15 phút mỗi mặt — tiêu diệt 99.9% vi khuẩn, nấm mốc.'],
      ['Sấy khô tự nhiên', 'Để khô hoàn toàn 30 phút trước khi lắp lại và test.'],
      ['Test âm thanh', 'Test toàn dải tần 20Hz-20kHz, kiểm tra cân bằng trái-phải.']
    ]
  },
  warranty: {
    title: '🛡️ Chính sách Bảo hành',
    steps: [
      ['Bảo hành 30 ngày', 'Lỗi kỹ thuật trong 30 ngày — đổi sản phẩm tương đương hoặc hoàn tiền.'],
      ['Đổi trả 7 ngày', 'Sản phẩm không đúng mô tả — hoàn trả không cần giải thích.'],
      ['Phí ship', 'Nếu lỗi từ phía shop, Chà Là chịu toàn bộ phí ship đổi trả.'],
      ['Liên hệ', 'Nhắn Messenger để được hỗ trợ trong vòng 30 phút.']
    ]
  },
  check: {
    title: '✅ 24 Bước Kiểm định',
    steps: [
      ['Ngoại quan', 'Kiểm tra vỏ, headband, hinge, logo — ghi nhận từng vết xước.'],
      ['Đệm tai', 'Kiểm tra độ đàn hồi, mùi, vệ sinh. Thay mới nếu cần.'],
      ['Driver L/R', 'Test bass, mid, treble riêng từng bên. Không chấp nhận lệch pha.'],
      ['Microphone', 'Test thu âm, khử noise. Ghi âm thực tế rồi nghe lại.'],
      ['Kết nối', 'Test jack 3.5mm, USB, Bluetooth (nếu có). Không chấp nhận tiếp xúc kém.'],
      ['Pin (Wireless)', 'Đo pin thực tế bằng phần mềm. Không nhận máy dưới 70%.']
    ]
  }
};

window.openPolicy = function(type) {
  const data = POLICIES[type];
  if (!data) return;
  document.getElementById('policyTitle').textContent = data.title;
  document.getElementById('policyBody').innerHTML = data.steps.map((s,i) => `
    <div class="policy-step">
      <div class="ps-num">${i+1}</div>
      <p><strong>${s[0]}</strong><br>${s[1]}</p>
    </div>`).join('');
  openOverlay('policyOverlay');
};

// ── WIZARD ──
let wizardTags = [], wizardLatencyNeeded = false;

window.toggleWizard = function() {
  const body = document.getElementById('wizardBody');
  const arrow = document.getElementById('wizardArrow');
  body.classList.toggle('open');
  arrow.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
};

window.wizardNext = function(type) {
  showWizardStep('ws-' + type);
};

window.wizardResult = function(tags, askLatency) {
  wizardTags = tags;
  if (askLatency) showWizardStep('ws-latency');
  else wizardFinish(false);
};

window.wizardFinish = function(needLow) {
  wizardLatencyNeeded = needLow;
  let products = getProducts().filter(p => !p.isSold && p.stock > 0);
  // Score
  products = products.map(p => {
    let score = wizardTags.includes(p.soundTag) ? 2 : 0;
    if (needLow && p.latency === 'wired') score += 1;
    if (needLow && p.latency === 'wireless-fast') score += 0.5;
    return { ...p, _score: score };
  }).sort((a,b) => b._score - a._score).slice(0,5);

  showWizardStep('ws-result');
  const grid = document.getElementById('wizardResultGrid');
  if (!products.length) {
    grid.innerHTML = `<p style="color:var(--text-dim);font-size:0.88rem;">Chưa có sản phẩm phù hợp. Vui lòng quay lại sau!</p>`;
    return;
  }
  grid.innerHTML = products.map(p => {
    const grade = getConditionGrade(p.condition, p.isSold);
    return `
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1rem;cursor:pointer" onclick="openQuickView(${p.id})">
      <img src="${p.images?.[0]||''}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:6px;margin-bottom:0.6rem;" alt="${p.name}">
      <div style="font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;">${p.name}</div>
      <div style="color:var(--gold);font-size:0.88rem;font-weight:700;">${fmt(p.price)}đ</div>
      <div style="font-size:0.72rem;color:var(--text-dim);margin-top:0.2rem;">${p.soundTag || 'Đã test'} • ${grade.code}</div>
    </div>`;
  }).join('');
};

function showWizardStep(id) {
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
}

window.resetWizard = function() {
  document.querySelectorAll('.wizard-step').forEach(s => { s.classList.remove('active'); s.style.display = ''; });
  showWizardStep('ws-0');
  wizardTags = []; wizardLatencyNeeded = false;
};

// ── FAQ ──
function renderFAQ() {
  const faqs = getFaqs();
  const grid = document.getElementById('faqGrid');
  grid.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

window.toggleFaq = function(i) {
  const el = document.getElementById(`faq-${i}`);
  el.classList.toggle('open');
};

// ── SCROLL FAB ──
function setupScrollFab() {
  const fab = document.getElementById('fabTop');
  window.addEventListener('scroll', () => {
    fab.classList.toggle('show', window.scrollY > 500);
  });
}
