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
  'V-Shape':    'V-Shape: bass lực, hiệu ứng nổi, hợp gaming/FPS casual, EDM và phim hành động.',
  'Warm':       'Warm: âm ấm, mềm, dễ nghe lâu; hợp lofi, podcast, phim dài và người sợ treble gắt.',
  'Bright':     'Bright: âm sáng, chi tiết, giọng nữ và tiếng nhạc cụ nổi hơn; hợp người thích rõ nét.',
  'Neutral':    'Neutral/Flat: cân bằng, ít màu mè; hợp học/call, nghe tạp và người muốn âm thật hơn.',
  'Bass-Heavy': 'Bass-Heavy: bass mạnh và dày; hợp EDM, hip-hop, phim và game cần cảm giác lực.',
  'Mid-Forward':'Mid-Forward: vocal tiến gần, giọng ca sĩ rõ; hợp ballad, acoustic, K-pop và nhạc có lời.'
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
  setupContactPopup();
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

let CONTACT_LINK = 'https://www.facebook.com/chalachanai/';

function setupContactPopup() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link || !isContactTrigger(link)) return;
    if (link.classList.contains('disabled')) return;
    e.preventDefault();
    e.stopPropagation();
    openContactPopup(link.href || CONTACT_LINK);
  });
}

function isContactTrigger(link) {
  return link.id === 'fabMsg'
    || link.id === 'footerMessenger'
    || link.id === 'serviceMessenger'
    || link.id === 'qvMsg'
    || link.classList.contains('side-btn-msg')
    || link.classList.contains('btn-card-msg');
}

function openContactPopup(link) {
  CONTACT_LINK = normalizeContactLink(link);
  const btn = document.getElementById('contactOpenBtn');
  if (btn) btn.href = CONTACT_LINK;
  openOverlay('contactOverlay');
}

window.copyContactLink = async function() {
  try {
    await navigator.clipboard.writeText(CONTACT_LINK);
    alert('Đã copy link Chà Là.');
  } catch (_err) {
    prompt('Copy link này:', CONTACT_LINK);
  }
};

const SEGMENTS = {
  gaming: { label: 'Gaming', icon: 'fa-gamepad' },
  music: { label: 'Nghe nhạc', icon: 'fa-music' },
  study: { label: 'Học bài', icon: 'fa-book-open' }
};

function getProductSegment(p = {}) {
  const key = p.segment || p.category || p.useCase || 'gaming';
  return SEGMENTS[key] ? { key, ...SEGMENTS[key] } : { key: 'gaming', ...SEGMENTS.gaming };
}

const TAG_LABELS = {
  'fps': 'FPS',
  'study-online': 'Học online',
  'call-zoom': 'Call/Zoom',
  'bass-music': 'Nghe bass',
  'casual-gaming': 'Game casual',
  'bluetooth': 'Bluetooth',
  'diy': 'DIY',
  'virtual-71': '7.1 giả lập',
  'bass-3d': 'Bass 3D',
  'bass-strong': 'Bass mạnh',
  'vocal-clear': 'Vocal rõ',
  'bright-sound': 'Âm sáng',
  'wide-stage': 'Âm rộng',
  'easy-listen': 'Dễ nghe lâu',
  'mic-clear': 'Mic rõ',
  'pad-service': 'Bọc đệm',
  'velvet-pad': 'Bọc nhung',
  'pad-comfort': 'Đệm êm',
  'bluetooth-mod': 'Làm Bluetooth',
  'battery-service': 'Thay pin',
  'wire-repair': 'Sửa dây/jack',
  'rgb': 'RGB/LED',
  'like-new': 'Like New',
  'revived': 'Hồi sinh',
  'has-video': 'Có video test'
};

const DISPLAY_TAG_PRIORITY = [
  'virtual-71',
  'fps',
  'mic-clear',
  'bass-3d',
  'bass-strong',
  'vocal-clear',
  'bass-music',
  'bluetooth',
  'study-online',
  'call-zoom',
  'pad-service',
  'bluetooth-mod',
  'velvet-pad',
  'pad-comfort',
  'rgb',
  'like-new',
  'revived',
  'has-video',
  'diy',
  'casual-gaming'
];

function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase();
}

function flattenProductValue(value) {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return value.map(flattenProductValue).join(' ');
  if (typeof value === 'object') return Object.values(value).map(flattenProductValue).join(' ');
  return String(value);
}

function getProductText(p = {}) {
  return [
    p.name,
    p.brand,
    getProductSegment(p).label,
    p.condition,
    p.soundTag,
    p.latency,
    p.description,
    p.bestFor,
    p.topHighlights,
    p.smartTags,
    p.soundProfile,
    p.gamingNote,
    p.micStatus,
    p.comfortNote,
    p.padStatus,
    p.conditionTruth,
    p.serviceDone,
    p.compatibility,
    p.caveat,
    p.batteryNote,
    p.inspection,
    p.inspectionDetails,
    p.reviews
  ].map(flattenProductValue).join(' ');
}

function hasAny(text, needles) {
  return needles.some(needle => text.includes(normalizeText(needle)));
}

function getExplicitProductTags(p = {}) {
  const tags = new Set();
  [p.bestFor, p.topHighlights, p.serviceDone, p.smartTags].forEach(value => {
    flattenProductValue(value).split(/\s+/).forEach(token => {
      const clean = token.trim();
      if (TAG_LABELS[clean]) tags.add(clean);
    });
  });
  return tags;
}

function getProductAddOns(p = {}) {
  const tags = getExplicitProductTags(p);
  const addOns = [];
  if (tags.has('pad-service') || tags.has('velvet-pad')) {
    addOns.push({ tag: 'pad-service', label: 'Bọc đệm' });
  }
  if (tags.has('bluetooth-mod')) {
    addOns.push({ tag: 'bluetooth-mod', label: 'Làm BT' });
  }
  return addOns;
}

function getProductTags(p = {}) {
  const tags = getExplicitProductTags(p);
  const text = normalizeText(getProductText(p));
  const segmentKey = getProductSegment(p).key;
  const sound = normalizeText(p.soundTag || '');
  const grade = getConditionGrade(p.condition, p.isSold);
  const hasBass = sound.includes('bass') || sound.includes('v-shape') || hasAny(text, ['bass', 'edm', 'hip-hop', 'hiphop', 'rap']);
  const hasMicNegative = hasAny(text, ['khong mic', 'khong co mic', 'chua test mic', 'mic re']);
  const hasDiy = hasAny(text, ['diy', 'boc dem', 'boc nhung', 'thay dem', 'lam bluetooth', 'do bluetooth', 'thay pin', 'sua day', 'sua jack', 'hoi sinh']);

  if (segmentKey === 'gaming') tags.add('casual-gaming');
  if (segmentKey === 'study') tags.add('study-online');
  if (p.isWireless || ['wireless-fast', 'wireless-slow'].includes(p.latency) || hasAny(text, ['bluetooth', 'wireless', 'khong day'])) tags.add('bluetooth');
  if (p.video) tags.add('has-video');
  if (grade.code === 'Like New(S)' || hasAny(text, ['like new', 'nhu moi', 'gan nhu moi'])) tags.add('like-new');
  else tags.add('revived');
  if (hasDiy) tags.add('diy');

  if (hasAny(text, ['fps', 'valorant', 'cs2', 'csgo', 'tieng chan', 'dinh vi', 'ban sung']) || (segmentKey === 'gaming' && ['bright', 'neutral'].includes(sound))) {
    tags.add('fps');
  }
  if (hasAny(text, ['hoc online', 'hoc bai', 'zoom', 'google meet', 'meet', 'discord', 'podcast', 'lam viec'])) {
    tags.add('study-online');
  }
  if (hasAny(text, ['call', 'zoom', 'discord', 'meet', 'podcast', 'thu am', 'microphone']) || (text.includes('mic') && !hasMicNegative)) {
    tags.add('call-zoom');
  }
  if (!hasMicNegative && hasAny(text, ['mic ro', 'mic on', 'mic dung hoc online', 'thu am ro', 'test mic'])) {
    tags.add('mic-clear');
  }
  if (hasBass) {
    tags.add('bass-music');
  }
  if (hasBass || hasAny(text, ['v-shape', 'vshape', 'bass manh', 'bass-heavy', 'bass heavy'])) {
    tags.add('bass-strong');
  }
  if (sound.includes('mid-forward') || hasAny(text, ['vocal ro', 'giong ca si ro', 'mid ro', 'mid-forward', 'podcast ro'])) {
    tags.add('vocal-clear');
  }
  if (sound.includes('bright') || hasAny(text, ['am sang', 'treble sang', 'chi tiet'])) {
    tags.add('bright-sound');
  }
  if (sound.includes('warm') || hasAny(text, ['de nghe lau', 'nghe lau khong moi', 'am am', 'lofi', 'chill'])) {
    tags.add('easy-listen');
  }
  if (hasAny(text, ['am truong', 'am rong', 'soundstage', 'wide stage'])) {
    tags.add('wide-stage');
  }
  if (hasAny(text, ['bass 3d', '3d bass']) || (hasBass && hasAny(text, ['3d', 'surround', 'am truong', 'am rong', 'soundstage']))) {
    tags.add('bass-3d');
  }
  if (hasAny(text, ['7.1', 'surround', 'gia lap', 'am thanh vom'])) {
    tags.add('virtual-71');
    tags.add('casual-gaming');
  }
  if (hasAny(text, ['boc nhung', 'nhung headband'])) {
    tags.add('velvet-pad');
    tags.add('pad-comfort');
    tags.add('pad-service');
  }
  if (hasAny(text, ['dem em', 'dem mem', 'dem dep', 'dem moi', 'da thay dem', 'thay dem', 'boc dem', 'earpad mem', 'earpad dep'])) {
    tags.add('pad-comfort');
    tags.add('pad-service');
  }
  if (hasAny(text, ['lam bluetooth', 'do bluetooth', 'mod bluetooth', 'bluetooth mod'])) {
    tags.add('bluetooth-mod');
    tags.add('diy');
  }
  if (hasAny(text, ['thay pin', 'pin moi', 'pin da thay'])) {
    tags.add('battery-service');
    tags.add('diy');
  }
  if (hasAny(text, ['sua day', 'sua jack', 'thay jack', 'test day/jack', 'test jack'])) {
    tags.add('wire-repair');
    tags.add('diy');
  }
  if (hasAny(text, ['rgb', 'led'])) {
    tags.add('rgb');
  }

  return tags;
}

function getProductDisplayTags(p = {}, limit = 3) {
  const tags = getProductTags(p);
  return DISPLAY_TAG_PRIORITY
    .filter(tag => tags.has(tag))
    .slice(0, limit)
    .map(tag => TAG_LABELS[tag]);
}

// ── RENDER PRODUCTS ──
let activeSegment = 'all', activeFilter = 'all', activeSoundFilter = '', activeLatency = '', activeSort = 'newest';
const activeTagFilters = new Set();
const activeFeatureFilters = new Map();
let searchQuery = '';

function getFilteredProducts() {
  let products = getProducts();
  if (searchQuery) {
    const q = normalizeText(searchQuery);
    products = products.filter(p => normalizeText(`${getProductText(p)} ${SOUND_DESCS[p.soundTag] || ''}`).includes(q));
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
  if (activeTagFilters.size) {
    const selectedTags = Array.from(activeTagFilters);
    products = products.filter(p => {
      const productTags = getProductTags(p);
      return selectedTags.every(tag => productTags.has(tag));
    });
  }
  if (activeFeatureFilters.size) {
    const selectedTags = Array.from(activeFeatureFilters.values()).filter(Boolean);
    products = products.filter(p => {
      const productTags = getProductTags(p);
      return selectedTags.every(tag => productTags.has(tag));
    });
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
  const smartTags = getProductDisplayTags(p);
  const smartTagsHTML = smartTags.length
    ? `<div class="card-smart-tags">${smartTags.map(tag => `<span class="card-smart-tag">${tag}</span>`).join('')}</div>`
    : '';
  const addOns = getProductAddOns(p);
  const trustCols = Math.max(1, Math.min(3, addOns.length + 1));
  const addOnHTML = addOns.map(addOn =>
    `<span class="trust-pill trust-addon"><i class="fas fa-check"></i> ${addOn.label}</span>`
  ).join('');

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
          <button class="side-btn side-item btn-zoom" title="Soi chi tiết x3" data-img="${p.images?.[0]||''}"><i class="fas fa-search-plus"></i></button>
        ${p.video ? `<button class="side-btn side-item" title="Xem video" onclick="event.stopPropagation(); openQuickView(${p.id}, 'video')"><i class="fas fa-play"></i></button>` : ''}
        <button class="side-btn side-item btn-music" data-tag="${p.soundTag}" data-playlist="${p.youtubePlaylist||''}" data-fr="${p.frGraph||''}" data-name="${p.name}" title="Nghe thử gu âm nhạc"><i class="fas fa-music"></i></button>
        <a class="side-btn side-item side-btn-msg" href="${messengerLink}" target="_blank" onclick="event.stopPropagation()" title="Nhắn Messenger mua hàng"><i class="fab fa-facebook-messenger"></i></a>
      </div>
    </div>
    <div class="card-info">
      <div class="card-segment"><i class="fas ${segment.icon}"></i>${segment.label}</div>
      <div class="card-name" style="cursor:pointer" onclick="openQuickView(${p.id})">${p.name}</div>
      ${descHTML}
      ${smartTagsHTML}
      <div class="price-row">
        <span class="price-new">${fmt(p.price)}đ</span>
        ${priceOld}
      </div>
      ${priceSave}
      ${batteryHTML}
      <div class="card-trust-row trust-cols-${trustCols}" title="${grade.note}">
        <span class="trust-pill trust-grade grade-${grade.className}">${grade.code}</span>
        ${addOnHTML}
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
      code: 'Hồi sinh',
      label: 'Hồi sinh',
      short: 'Hồi sinh',
      note: 'Đã được Chà Là xử lý lại, vệ sinh và kiểm tra trước khi bán',
      className: 'revived'
    };
  }
  if (text.includes('hơi xước') || text.includes('trầy nhẹ') || text.includes('đệm cũ')) {
    return {
      code: 'Hồi sinh',
      label: 'Hồi sinh',
      short: 'Hồi sinh',
      note: 'Có dấu dùng thật, đã vệ sinh và kiểm tra chức năng',
      className: 'revived'
    };
  }
  if (text.includes('xước nhiều') || text.includes('trầy nhiều')) {
    return {
      code: 'Hồi sinh',
      label: 'Hồi sinh',
      short: 'Hồi sinh',
      note: 'Ngoại hình có nhiều dấu dùng, chức năng đã kiểm tra kỹ',
      className: 'revived'
    };
  }

  return {
    code: 'Hồi sinh',
    label: 'Hồi sinh',
    short: 'Hồi sinh',
    note: 'Đã kiểm tra chức năng cơ bản',
    className: 'revived'
  };
}

// ── SEARCH & FILTER ──
function setupSearch() {
  const inp = document.getElementById('searchInput');
  inp.addEventListener('input', () => { searchQuery = inp.value.trim(); renderProducts(); });
}

function setupFilters() {
  const resetChip = document.querySelector('.chip[data-reset-filter]');
  const syncResetChip = () => {
    if (!resetChip) return;
    const hasAnyFilter = activeSegment !== 'all'
      || activeFilter !== 'all'
      || activeSoundFilter
      || activeLatency
      || activeTagFilters.size > 0
      || activeFeatureFilters.size > 0;
    resetChip.classList.toggle('active', !hasAnyFilter);
  };

  document.querySelectorAll('.chip[data-reset-filter]').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeSegment = 'all';
      activeFilter = 'all';
      activeSoundFilter = '';
      activeLatency = '';
      activeTagFilters.clear();
      activeFeatureFilters.clear();
      const soundFilter = document.getElementById('soundFilter');
      const latencyFilter = document.getElementById('latencyFilter');
      const sortFilter = document.getElementById('sortFilter');
      document.querySelectorAll('select[data-feature-filter]').forEach(select => { select.value = ''; });
      if (soundFilter) soundFilter.value = '';
      if (latencyFilter) latencyFilter.value = '';
      if (sortFilter) {
        activeSort = 'newest';
        sortFilter.value = 'newest';
      }
      renderProducts();
    });
  });
  document.querySelectorAll('.chip[data-segment]').forEach(c => {
    c.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-reset-filter], .chip[data-segment]').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeSegment = c.dataset.segment;
      syncResetChip();
      renderProducts();
    });
  });
  document.querySelectorAll('.chip[data-filter]').forEach(c => {
    c.addEventListener('click', () => {
      const isSelected = activeFilter === c.dataset.filter;
      document.querySelectorAll('.chip[data-filter]').forEach(x => x.classList.remove('active'));
      activeFilter = isSelected ? 'all' : c.dataset.filter;
      if (!isSelected) c.classList.add('active');
      syncResetChip();
      renderProducts();
    });
  });
  document.querySelectorAll('.chip[data-tag-filter]').forEach(c => {
    c.addEventListener('click', () => {
      const tag = c.dataset.tagFilter;
      if (activeTagFilters.has(tag)) {
        activeTagFilters.delete(tag);
        c.classList.remove('active');
      } else {
        activeTagFilters.add(tag);
        c.classList.add('active');
      }
      syncResetChip();
      renderProducts();
    });
  });

  const soundFilter = document.getElementById('soundFilter');
  const latencyFilter = document.getElementById('latencyFilter');
  const sortFilter = document.getElementById('sortFilter');
  document.querySelectorAll('select[data-feature-filter]').forEach(select => {
    select.addEventListener('change', e => {
      const group = e.target.dataset.featureFilter;
      if (e.target.value) activeFeatureFilters.set(group, e.target.value);
      else activeFeatureFilters.delete(group);
      syncResetChip();
      renderProducts();
    });
  });
  if (soundFilter) soundFilter.addEventListener('change', e => { activeSoundFilter = e.target.value; syncResetChip(); renderProducts(); });
  if (latencyFilter) latencyFilter.addEventListener('change', e => { activeLatency = e.target.value; syncResetChip(); renderProducts(); });
  if (sortFilter) sortFilter.addEventListener('change', e => { activeSort = e.target.value || 'newest'; renderProducts(); });
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
      ${buildSmartProfileHTML(p)}
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

function buildSmartProfileHTML(p = {}) {
  const tags = getProductTags(p);
  const pick = tagList => tagList.filter(tag => tags.has(tag)).map(tag => TAG_LABELS[tag]).join(', ');
  const needTags = pick(['fps', 'study-online', 'call-zoom', 'bass-music', 'casual-gaming', 'bluetooth', 'diy']);
  const featureTags = pick(['virtual-71', 'bass-3d', 'bass-strong', 'vocal-clear', 'bright-sound', 'wide-stage', 'easy-listen', 'mic-clear', 'rgb', 'like-new', 'revived', 'has-video']);
  const diyTags = pick(['pad-service', 'velvet-pad', 'pad-comfort', 'bluetooth-mod', 'battery-service', 'wire-repair']);
  const serviceDone = flattenProductValue(p.serviceDone);
  const compatibility = flattenProductValue(p.compatibility);
  const comfort = flattenProductValue(p.comfortNote || p.padStatus);
  const caveat = flattenProductValue(p.caveat || p.conditionTruth);
  const gaming = flattenProductValue(p.gamingNote) || (tags.has('fps') ? 'Có thông tin phù hợp FPS/định vị tiếng chân.' : tags.has('casual-gaming') ? 'Hợp chơi game casual, giải trí hằng ngày.' : '');
  const mic = flattenProductValue(p.micStatus) || (tags.has('mic-clear') ? 'Mic rõ hoặc đã có thông tin test mic.' : tags.has('call-zoom') ? 'Có thông tin phù hợp call/Zoom.' : '');

  const rows = [
    ['Hợp nhu cầu', needTags],
    ['Tính năng', featureTags],
    ['DIY / dịch vụ', diyTags],
    ['Chất âm', flattenProductValue(p.soundProfile || p.soundTag)],
    ['Gaming', gaming],
    ['Mic', mic],
    ['Comfort / đệm', comfort || (tags.has('velvet-pad') ? 'Có bọc nhung hoặc xử lý đệm.' : tags.has('pad-comfort') ? 'Đệm êm hoặc đã xử lý.' : '')],
    ['Tương thích', compatibility],
    ['Đã xử lý', serviceDone],
    ['Lưu ý thật', caveat]
  ].filter(([, value]) => String(value || '').trim());

  if (!rows.length) return '';
  return `<div class="smart-profile">${rows.map(([label, value]) => checkItem(label, value)).join('')}</div>`;
}

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
  const ZOOM = 3;
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
  const smartQuickTags = getProductDisplayTags(p, 5).map(tag => `<span class="qv-badge">${tag}</span>`).join('');
  const addOnQuickBadges = getProductAddOns(p).map(addOn => `<span class="qv-badge">${addOn.label}</span>`).join('');
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
    <span class="qv-badge">BH 30 ngày</span>
    ${addOnQuickBadges}
    ${smartQuickTags}
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
let wizardSelectedTags = new Set();

window.toggleWizard = function() {
  const body = document.getElementById('wizardBody');
  const arrow = document.getElementById('wizardArrow');
  body.classList.toggle('open');
  arrow.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
};

window.wizardStart = function(tags = []) {
  wizardSelectedTags = new Set(tags);
  showWizardStep('ws-sound');
};

window.wizardAdd = function(tags = [], nextStep = 'ws-feature') {
  tags.forEach(tag => wizardSelectedTags.add(tag));
  showWizardStep(nextStep);
};

window.wizardFinishTags = function(tags = []) {
  tags.forEach(tag => wizardSelectedTags.add(tag));
  const selected = Array.from(wizardSelectedTags);
  let products = getProducts().filter(p => !p.isSold && p.stock > 0);
  products = products.map(p => {
    const productTags = getProductTags(p);
    const matched = selected.filter(tag => productTags.has(tag));
    const score = matched.length * 2 + (p.video ? 0.25 : 0);
    return { ...p, _score: score, _matchedTags: matched };
  }).filter(p => !selected.length || p._score > 0)
    .sort((a,b) => b._score - a._score || (b.createdAt||0) - (a.createdAt||0))
    .slice(0,5);

  showWizardStep('ws-result');
  const grid = document.getElementById('wizardResultGrid');
  if (!products.length) {
    grid.innerHTML = `<p style="color:var(--text-dim);font-size:0.88rem;">Chưa có sản phẩm khớp đủ tag. Thử chọn rộng hơn hoặc nhắn Chà Là để tư vấn.</p>`;
    return;
  }
  grid.innerHTML = products.map(p => {
    const grade = getConditionGrade(p.condition, p.isSold);
    const matchedTags = (p._matchedTags || []).map(tag => TAG_LABELS[tag]).filter(Boolean).slice(0,3).join(' · ');
    return `
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1rem;cursor:pointer" onclick="openQuickView(${p.id})">
      <img src="${p.images?.[0]||''}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:6px;margin-bottom:0.6rem;" alt="${p.name}">
      <div style="font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;">${p.name}</div>
      <div style="color:var(--gold);font-size:0.88rem;font-weight:700;">${fmt(p.price)}đ</div>
      <div style="font-size:0.72rem;color:var(--text-dim);margin-top:0.2rem;">${matchedTags || p.soundTag || 'Hợp nhu cầu'} • ${grade.code}</div>
    </div>`;
  }).join('');
};

function showWizardStep(id) {
  document.querySelectorAll('.wizard-step').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
  const el = document.getElementById(id);
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
}

window.resetWizard = function() {
  document.querySelectorAll('.wizard-step').forEach(s => { s.classList.remove('active'); s.style.display = ''; });
  showWizardStep('ws-0');
  wizardSelectedTags.clear();
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
