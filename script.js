// ============================================================ -->
// ВНИМАНИЕ: ЧТОБЫ ДОБАВИТЬ КАРТИНКУ ФРОНТУ, ВСТАВЬ ССЫЛКУ В ПОЛЕ image -->
// Например: image: 'https://example.com/smuta.jpg' -->
// Если ссылки нет — оставь пустые кавычки: image: '' -->
// ============================================================ -->
const fronts = [
  {
    id: 'smuta',
    image: '', // <-- ССЫЛКА НА КАРТИНКУ ФРОНТА «СМУТНОЕ ВРЕМЯ»
    title: 'Смутное время',
    desc: 'История ополчения Минина и Пожарского',
    questions: [
      { q: 'Когда отмечают День народного единства?', options: ['4 ноября', '1 января', '12 июня', '9 мая'], correct: 0, note: 'Праздник связан с событиями 1612 года, когда ополчение освободило Москву.' },
      { q: 'Кто возглавил народное ополчение?', options: ['Минин и Пожарский', 'Пётр I и Иван Грозный', 'Александр Невский и Дмитрий Донской', 'Екатерина II и Павел I'], correct: 0, note: 'Кузьма Минин и князь Дмитрий Пожарский собрали народное ополчение.' },
      { q: 'От кого освободили Москву в 1612 году?', options: ['От польских интервентов', 'От французов', 'От монголов', 'От шведов'], correct: 0, note: 'Ополчение выдворило из столицы польских интервентов.' },
      { q: 'Что означает слово «единство» в названии праздника?', options: ['Когда народ вместе', 'Когда все молчат', 'Когда один правит', 'Когда все отдыхают'], correct: 0, note: 'Праздник — про сплочённость народа перед общей бедой.' },
      { q: 'Где стоит памятник Минину и Пожарскому?', options: ['В Москве на Красной площади', 'В Санкт-Петербурге', 'В Костроме', 'В Казани'], correct: 0, note: 'Памятник стоит в самом центре Москвы.' },
      { q: 'В каком году произошли эти события?', options: ['1612', '1812', '1945', '2005'], correct: 0, note: 'Ополчение освободило Москву в 1612 году.' },
      { q: 'Когда в современной России впервые отметили этот праздник?', options: ['В 2005 году', 'В 1991 году', 'В 1612 году', 'В 2020 году'], correct: 0, note: 'Праздник стал государственным и впервые отмечался в 2005 году.' }
    ]
  },
  {
    id: 'russia',
    image: '', // <-- ССЫЛКА НА КАРТИНКУ ФРОНТА «РОССИЯ СЕГОДНЯ»
    title: 'Россия сегодня',
    desc: 'Символы и праздники страны',
    questions: [
      { q: 'Какие цвета у флага России?', options: ['Белый, синий, красный', 'Красный, жёлтый, зелёный', 'Синий, белый, зелёный', 'Чёрный, жёлтый, белый'], correct: 0, note: 'Белый — мир, синий — верность, красный — сила.' },
      { q: 'Кто изображён на гербе России?', options: ['Двуглавый орёл', 'Медведь', 'Лев', 'Конь'], correct: 0, note: 'Орёл держит скипетр и державу — символы власти.' },
      { q: 'Как называется главная песня страны?', options: ['Гимн', 'Частушка', 'Колыбельная', 'Марш'], correct: 0, note: 'Гимн — главная песня страны, его слушают стоя.' },
      { q: 'Какой город — столица России?', options: ['Москва', 'Санкт-Петербург', 'Кострома', 'Казань'], correct: 0, note: 'Москва — столица и самый большой город России.' },
      { q: 'Что слушают стоя?', options: ['Гимн', 'Сказку', 'Песню о дружбе', 'Тишину'], correct: 0, note: 'Гимн слушают стоя — так выражают уважение к стране.' },
      { q: 'Что изображено на гербе России?', options: ['Двуглавый орёл', 'Медведь', 'Лев', 'Конь'], correct: 0, note: 'Орёл держит скипетр и державу — символы власти.' },
      { q: 'Сколько народов живёт в России?', options: ['Более 190', '10', '50', '2'], correct: 0, note: 'Россия — многонациональная страна.' }
    ]
  },
  {
    id: 'kostroma',
    image: '', // <-- ССЫЛКА НА КАРТИНКУ ФРОНТА «КОСТРОМСКОЙ КРАЙ»
    title: 'Костромской край',
    desc: 'Честняков и народные промыслы',
    questions: [
      { q: 'В каком году родился Ефим Честняков?', options: ['1874', '1900', '1850', '1920'], correct: 0, note: 'Честняков родился в 1874 году.' },
      { q: 'В какой деревне родился Честняков?', options: ['Шаблово', 'Петровское', 'Красное', 'Галич'], correct: 0, note: 'Шаблово — родная деревня художника.' },
      { q: 'Что такое петровская игрушка?', options: ['Глиняная свистулька', 'Деревянная кукла', 'Тряпичный мяч', 'Соломенная шляпа'], correct: 0, note: 'Это глиняная свистулька из тёмной глины.' },
      { q: 'Чем петровская игрушка отличается от других?', options: ['Её не раскрашивают', 'Её делают из дерева', 'Её делают только зимой', 'В неё нельзя свистеть'], correct: 0, note: 'Узор выдавливают прямо в глине, краски не используют.' },
      { q: 'Какое кружево плетут в Костромской области?', options: ['Галичское', 'Вологодское', 'Елецкое', 'Михайловское'], correct: 0, note: 'Галичское кружево плели из льна и шёлка.' },
      { q: 'Что делают красносельские мастера?', options: ['Ажурные узоры из проволоки', 'Глиняные свистульки', 'Льняные рубахи', 'Деревянные ложки'], correct: 0, note: 'Это скань — узор из тонкой проволоки, похожий на кружево.' },
      { q: 'Какое ремесло было развито в Галичском крае?', options: ['Гончарное', 'Космическое', 'Морское', 'Цирковое'], correct: 0, note: 'Галичские гончары славились на всю губернию.' }
    ]
  }
];

// ===== СОСТОЯНИЕ =====
let state = {
  attempt: 1,
  currentFront: null,
  correctCount: 0,
  totalErrors: 0,   // <-- ОБЩИЙ БАНК ОШИБОК НА ВСЮ ИГРУ
  answered: false,
  progress: {}
};

fronts.forEach(f => {
  // errorCount внутри фронта больше не храним — ошибки общие
  state.progress[f.id] = { correctCount: 0, answeredIndices: [] };
});

const $ = id => document.getElementById(id);
const screens = document.querySelectorAll('.screen');
let audioCtx = null;
let musicStarted = false;

function showScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
}

// ===== МУЗЫКА (громкость 0.2) =====
function tryStartMusic() {
  if (musicStarted) return;
  const music = $('bg-music');
  if (music && music.querySelector('source') && music.querySelector('source').src) {
    music.volume = 0.2;
    music.play().then(() => { musicStarted = true; }).catch(() => {});
  }
}

function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === 'correct') {
      osc.frequency.value = 660;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } else {
      osc.frequency.value = 120;
      osc.type = 'sawtooth';
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    }
  } catch(e) {}
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== ЭКРАН ВЫБОРА =====
function renderFronts() {
  const container = $('fronts-container');
  if (!container) return;
  container.innerHTML = '';
  fronts.forEach(f => {
    const prog = state.progress[f.id];
    const card = document.createElement('div');
    card.className = 'front-card' + (f.image ? '' : ' no-image');
    const imgHtml = f.image
      ? `<img class="front-card-image" src="${f.image}" alt="${f.title}" onerror="this.style.display='none'">`
      : '';
    card.innerHTML = `
      ${imgHtml}
      <div class="front-card-body">
        <div class="front-title">${f.title}</div>
        <div class="front-desc">${f.desc}</div>
        <div class="front-progress">Щит: ${prog.correctCount}/7</div>
      </div>
    `;
    card.addEventListener('click', () => {
      tryStartMusic();
      resumeFront(f);
    });
    container.appendChild(card);
  });
}

function resumeFront(front) {
  state.currentFront = front;
  const prog = state.progress[front.id];
  state.correctCount = prog.correctCount;
  state.answered = false;

    if (prog.answeredIndices.length >= 7) {
    if (prog.correctCount === 7) {
      showVictory();
    } else {
      // Все вопросы отвечены, но не 7/7 — это значит, что была ошибка.
      // НЕ сбрасываем прогресс, а показываем экран поражения.
      if (state.totalErrors === 1) {
        $('breach-text').textContent = `Фронт «${front.title}» прорван. Прогресс сохранён — вернись и продолжи с того же места.`;
        showScreen('screen-breach');
      } else {
        resetAllProgress();
        showScreen('screen-retreat');
      }
    }
    return;
  }

  $('front-name').textContent = front.title;

  const imgWrap = $('front-image-wrap');
  const img = $('front-image');
  if (front.image && imgWrap && img) {
    img.src = front.image;
    img.alt = front.title;
    imgWrap.hidden = false;
  } else if (imgWrap) {
    imgWrap.hidden = true;
  }

  renderBanner();
  updateHud();
  updateBanner();
  renderNextQuestion();
  showScreen('screen-battle');
}

function renderBanner() {
  const banner = $('banner');
  if (!banner) return;
  banner.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const seg = document.createElement('div');
    seg.className = 'banner-segment';
    banner.appendChild(seg);
  }
}

function updateBanner() {
  const segs = document.querySelectorAll('.banner-segment');
  if (!state.currentFront) return;
  const prog = state.progress[state.currentFront.id];
  segs.forEach((seg, i) => {
    seg.classList.remove('filled', 'cracked');
    if (i < prog.correctCount) seg.classList.add('filled');
  });
}

function updateHud() {
  const prog = state.progress[state.currentFront?.id];
  if (prog) {
    $('shield-count').textContent = prog.correctCount;
  }
  $('error-count').textContent = state.totalErrors;  // <-- ОБЩИЙ СЧЁТЧИК
  $('attempt-count').textContent = state.attempt;
}

function renderNextQuestion() {
  const front = state.currentFront;
  const prog = state.progress[front.id];

  let nextIdx = -1;
  for (let i = 0; i < front.questions.length; i++) {
    if (!prog.answeredIndices.includes(i)) {
      nextIdx = i;
      break;
    }
  }

    if (nextIdx === -1) {
    if (prog.correctCount === 7) {
      showVictory();
    } else {
      // Вопросы кончились, но не 7/7 — не сбрасываем, показываем поражение
      if (state.totalErrors === 1) {
        $('breach-text').textContent = `Фронт «${front.title}» прорван. Прогресс сохранён — вернись и продолжи с того же места.`;
        showScreen('screen-breach');
      } else {
        resetAllProgress();
        showScreen('screen-retreat');
      }
    }
    return;
  }

  const q = front.questions[nextIdx];
  $('question-text').textContent = q.q;
  const optsContainer = $('options-container');
  optsContainer.innerHTML = '';
  const correctText = q.options[q.correct];
  const shuffledOpts = shuffle(q.options);

  shuffledOpts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => answer(btn, opt === correctText, q, nextIdx));
    optsContainer.appendChild(btn);
  });

  $('note').hidden = true;
  state.answered = false;
}

function answer(btn, isCorrect, q, questionIdx) {
  if (state.answered) return;
  state.answered = true;
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  const front = state.currentFront;
  const prog = state.progress[front.id];
  prog.answeredIndices.push(questionIdx);

  if (isCorrect) {
    btn.classList.add('correct');
    prog.correctCount++;
    playSound('correct');
    updateBanner();
    updateHud();
    showNote(q.note);
    setTimeout(() => {
      // Если это был 7-й правильный ответ — сразу показываем победу
      if (prog.correctCount === 7) {
        showVictory();
      } else {
        renderFronts();
        showScreen('screen-select');
      }
    }, 1200);
  } else {
    btn.classList.add('wrong');
    state.totalErrors++;   // <-- ОБЩИЙ БАНК
    playSound('wrong');
    updateBanner();
    updateHud();
    showNote(q.note);

    setTimeout(() => {
      if (state.totalErrors === 1) {
        $('breach-text').textContent = `Фронт «${front.title}» прорван. Прогресс сохранён — вернись и продолжи с того же места.`;
        showScreen('screen-breach');
      } else {
        // ВТОРАЯ ОШИБКА — ПОЛНЫЙ СБРОС ВСЕХ ФРОНТОВ
        resetAllProgress();
        showScreen('screen-retreat');
      }
      renderFronts();
    }, 1500);
  }
}

function showNote(text) {
  $('note-text').textContent = text;
  $('note').hidden = false;
}

// СБРОС ВСЕХ ФРОНТОВ И ОБЩЕГО БАНКА ОШИБОК
function resetAllProgress() {
  fronts.forEach(f => {
    state.progress[f.id] = { correctCount: 0, answeredIndices: [] };
  });
  state.totalErrors = 0;
  state.currentFront = null;
  state.correctCount = 0;
}

function resetFrontProgress(frontId) {
  state.progress[frontId] = { correctCount: 0, answeredIndices: [] };
}

function showVictory() {
  try { drawVictoryCanvas(); } catch(e) {}
  showScreen('screen-victory');
}

// ===== ЩИТ НА ПОБЕДУ =====
function drawVictoryCanvas() {
  const canvas = $('victory-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const top = 40;
  const bottom = h - 30;
  const left = cx - 140;
  const right = cx + 140;

  function shieldPath(inset) {
    ctx.beginPath();
    ctx.moveTo(left + inset, top + inset);
    ctx.lineTo(right - inset, top + inset);
    ctx.lineTo(right - inset, top + (bottom - top) * 0.55);
    ctx.quadraticCurveTo(right - inset, bottom - inset, cx, bottom - inset);
    ctx.quadraticCurveTo(left + inset, bottom - inset, left + inset, top + (bottom - top) * 0.55);
    ctx.closePath();
  }

  const metalGrad = ctx.createLinearGradient(left, top, right, bottom);
  metalGrad.addColorStop(0, '#8a7a5a');
  metalGrad.addColorStop(0.3, '#c9a227');
  metalGrad.addColorStop(0.5, '#e8d18a');
  metalGrad.addColorStop(0.7, '#c9a227');
  metalGrad.addColorStop(1, '#8a7a5a');
  ctx.fillStyle = metalGrad;
  shieldPath(0);
  ctx.fill();

  const fieldGrad = ctx.createLinearGradient(cx, top, cx, bottom);
  fieldGrad.addColorStop(0, '#a83232');
  fieldGrad.addColorStop(0.5, '#8b2e2e');
  fieldGrad.addColorStop(1, '#6b1f1f');
  ctx.fillStyle = fieldGrad;
  shieldPath(14);
  ctx.fill();

  ctx.strokeStyle = 'rgba(201,162,39,0.5)';
  ctx.lineWidth = 2;
  shieldPath(24);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(201,162,39,0.35)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, top + 50);
  ctx.lineTo(cx, bottom - 60);
  ctx.moveTo(cx - 80, top + 110);
  ctx.lineTo(cx + 80, top + 110);
  ctx.stroke();

  const rivets = [
    [left + 30, top + 30],
    [right - 30, top + 30],
    [left + 30, top + (bottom - top) * 0.55],
    [right - 30, top + (bottom - top) * 0.55]
  ];
  rivets.forEach(([x, y]) => {
    const rg = ctx.createRadialGradient(x - 2, y - 2, 1, x, y, 6);
    rg.addColorStop(0, '#f0e0a0');
    rg.addColorStop(0.6, '#c9a227');
    rg.addColorStop(1, '#6a5020');
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#f0e0a0';
  ctx.font = 'bold 26px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;
  ctx.fillText('ФРОНТ УДЕРЖАН', cx, top + 80);

  ctx.font = '16px Georgia, serif';
  ctx.fillStyle = '#e8dcc8';
  ctx.fillText(state.currentFront.title, cx, top + 110);


  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  const dataUrl = canvas.toDataURL('image/png');
  const ogImg = document.querySelector('meta[property="og:image"]');
  const vkImg = document.querySelector('meta[property="vk:image"]');
  if (ogImg) ogImg.setAttribute('content', dataUrl);
  if (vkImg) vkImg.setAttribute('content', dataUrl);
}

// ===== ЩИТ С МЕЧАМИ (МЕДВЕДЬ) =====
function drawIntroShield() {
  const canvas = document.getElementById('intro-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2;

  ctx.clearRect(0, 0, w, h);

  function drawSword(angle, offsetX) {
    ctx.save();
    ctx.translate(cx + offsetX, h / 2 + 10);
    ctx.rotate(angle);

    const bladeGrad = ctx.createLinearGradient(0, -90, 0, 40);
    bladeGrad.addColorStop(0, '#e8e8e8');
    bladeGrad.addColorStop(0.5, '#b0b0b0');
    bladeGrad.addColorStop(1, '#808080');
    ctx.fillStyle = bladeGrad;
    ctx.beginPath();
    ctx.moveTo(0, -95);
    ctx.lineTo(-6, -80);
    ctx.lineTo(-6, 40);
    ctx.lineTo(6, 40);
    ctx.lineTo(6, -80);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;
    ctx.stroke();

    const guardGrad = ctx.createLinearGradient(-25, 0, 25, 0);
    guardGrad.addColorStop(0, '#8a7a5a');
    guardGrad.addColorStop(0.5, '#e8d18a');
    guardGrad.addColorStop(1, '#8a7a5a');
    ctx.fillStyle = guardGrad;
    ctx.fillRect(-25, 40, 50, 8);

    ctx.fillStyle = '#5a3a1a';
    ctx.fillRect(-5, 48, 10, 30);
    ctx.strokeStyle = '#3a2510';
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(-5, 52 + i * 7);
      ctx.lineTo(5, 52 + i * 7);
      ctx.stroke();
    }

    const pommelGrad = ctx.createRadialGradient(0, 82, 1, 0, 82, 8);
    pommelGrad.addColorStop(0, '#f0e0a0');
    pommelGrad.addColorStop(1, '#6a5020');
    ctx.fillStyle = pommelGrad;
    ctx.beginPath();
    ctx.arc(0, 82, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawSword(-0.4, -35);
  drawSword(0.4, 35);

  const top = 50;
  const bottom = h - 20;
  const left = cx - 75;
  const right = cx + 75;

  function shieldPath(inset) {
    ctx.beginPath();
    ctx.moveTo(left + inset, top + inset);
    ctx.lineTo(right - inset, top + inset);
    ctx.lineTo(right - inset, top + (bottom - top) * 0.55);
    ctx.quadraticCurveTo(right - inset, bottom - inset, cx, bottom - inset);
    ctx.quadraticCurveTo(left + inset, bottom - inset, left + inset, top + (bottom - top) * 0.55);
    ctx.closePath();
  }

  const metalGrad = ctx.createLinearGradient(left, top, right, bottom);
  metalGrad.addColorStop(0, '#8a7a5a');
  metalGrad.addColorStop(0.3, '#c9a227');
  metalGrad.addColorStop(0.5, '#e8d18a');
  metalGrad.addColorStop(0.7, '#c9a227');
  metalGrad.addColorStop(1, '#8a7a5a');
  ctx.fillStyle = metalGrad;
  shieldPath(0);
  ctx.fill();

  const fieldGrad = ctx.createLinearGradient(cx, top, cx, bottom);
  fieldGrad.addColorStop(0, '#a83232');
  fieldGrad.addColorStop(0.5, '#8b2e2e');
  fieldGrad.addColorStop(1, '#6b1f1f');
  ctx.fillStyle = fieldGrad;
  shieldPath(10);
  ctx.fill();

  ctx.strokeStyle = 'rgba(201,162,39,0.5)';
  ctx.lineWidth = 2;
  shieldPath(18);
  ctx.stroke();

  // МЕДВЕДЬ
  ctx.fillStyle = 'rgba(232,209,138,0.85)';
  ctx.font = 'bold 38px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🐻', cx, h / 2 + 5);

  const rivets = [
    [left + 18, top + 18],
    [right - 18, top + 18],
    [left + 18, top + (bottom - top) * 0.55],
    [right - 18, top + (bottom - top) * 0.55]
  ];
  rivets.forEach(([x, y]) => {
    const rg = ctx.createRadialGradient(x - 1, y - 1, 1, x, y, 5);
    rg.addColorStop(0, '#f0e0a0');
    rg.addColorStop(0.6, '#c9a227');
    rg.addColorStop(1, '#6a5020');
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ===== ДЫМ НА ВЕСЬ ЭКРАН =====
function initSmoke() {
  const canvas = document.getElementById('smoke-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(resize);
  setTimeout(resize, 100);

  const smokeParticles = [];
  const SMOKE_COUNT = 60;

  function createSmoke() {
    const yBias = Math.random() < 0.7
      ? h * (0.5 + Math.random() * 0.5)
      : h * Math.random();
    return {
      x: Math.random() * w,
      y: yBias,
      r: 40 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.4,
      life: 0,
      maxLife: 400 + Math.random() * 400,
      alpha: 0.06 + Math.random() * 0.1
    };
  }

  for (let i = 0; i < SMOKE_COUNT; i++) {
    const p = createSmoke();
    p.life = Math.random() * p.maxLife;
    smokeParticles.push(p);
  }

  const embers = [];
  const EMBER_COUNT = 25;

  function createEmber() {
    return {
      x: Math.random() * w,
      y: h - Math.random() * (h * 0.3),
      r: 1 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.4 - Math.random() * 0.8,
      life: 0,
      maxLife: 120 + Math.random() * 180,
      hue: 20 + Math.random() * 20
    };
  }

  for (let i = 0; i < EMBER_COUNT; i++) {
    const e = createEmber();
    e.life = Math.random() * e.maxLife;
    embers.push(e);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    smokeParticles.forEach((p, i) => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.r += 0.12;

      if (p.life > p.maxLife || p.y + p.r < 0) {
        smokeParticles[i] = createSmoke();
        return;
      }

      const lifeRatio = p.life / p.maxLife;
      let alpha = p.alpha;
      if (lifeRatio < 0.2) alpha *= lifeRatio / 0.2;
      if (lifeRatio > 0.7) alpha *= (1 - lifeRatio) / 0.3;
      const heightFactor = Math.max(0, Math.min(1, p.y / h));
      alpha *= (0.2 + heightFactor * 0.8);

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grad.addColorStop(0, `rgba(120, 100, 85, ${alpha})`);
      grad.addColorStop(0.5, `rgba(90, 75, 65, ${alpha * 0.6})`);
      grad.addColorStop(1, `rgba(60, 50, 45, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    embers.forEach((e, i) => {
      e.life++;
      e.x += e.vx;
      e.y += e.vy;
      e.vy *= 0.995;

      if (e.life > e.maxLife || e.y < -10) {
        embers[i] = createEmber();
        return;
      }

      const lifeRatio = e.life / e.maxLife;
      const alpha = Math.sin(lifeRatio * Math.PI) * 0.9;

      ctx.fillStyle = `hsla(${e.hue}, 90%, 60%, ${alpha})`;
      ctx.shadowColor = `hsla(${e.hue}, 90%, 60%, 0.8)`;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
function init() {
  renderFronts();
  updateHud();
  showScreen('screen-intro');

  const btnStart = document.getElementById('btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      tryStartMusic();
      showScreen('screen-select');
    });
  }

  try { drawIntroShield(); } catch(e) { console.warn('Intro shield error:', e); }
  try { initSmoke(); } catch(e) { console.warn('Smoke error:', e); }

  const btnBackSelect = document.getElementById('btn-back-select');
  if (btnBackSelect) btnBackSelect.addEventListener('click', () => showScreen('screen-select'));

  const btnRestart = document.getElementById('btn-restart');
  if (btnRestart) btnRestart.addEventListener('click', () => {
    state.attempt++;
    resetAllProgress();  // <-- СБРОС ВСЕХ ФРОНТОВ И ОБЩЕГО БАНКА
    updateHud();
    renderFronts();
    showScreen('screen-select');
  });

  const btnAnother = document.getElementById('btn-another');
  if (btnAnother) btnAnother.addEventListener('click', () => showScreen('screen-select'));

  const btnShareVk = document.getElementById('btn-share-vk');
  if (btnShareVk) btnShareVk.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Я удержал фронт! — КПЦ им. Ефима Честнякова');
    const comment = encodeURIComponent(
      `Я прошёл фронт «${state.currentFront.title}» в игре ко Дню народного единства! ` +
      `7 из 7. А ты сможешь? 🛡️`
    );
    window.open(
      `https://vk.com/share.php?url=${url}&title=${title}&comment=${comment}`,
      '_blank',
      'width=600,height=500'
    );
  });

  const noteClose = document.getElementById('note-close');
  if (noteClose) noteClose.addEventListener('click', () => {
    document.getElementById('note').hidden = true;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
