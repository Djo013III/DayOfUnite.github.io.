// ===== ДАННЫЕ ФРОНТОВ =====
const fronts = [
  {
    id: 'smuta',
    icon: '⚔️',
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
    icon: '🦅',
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
    icon: '🏺',
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
  questionIndex: 0,
  correctCount: 0,
  errorCount: 0,
  shuffledQuestions: [],
  answered: false
};

// ===== DOM =====
const $ = id => document.getElementById(id);
const screens = document.querySelectorAll('.screen');

function showScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ===== ЗВУК (Web Audio) =====
let audioCtx = null;
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

// ===== ПЕРЕМЕШИВАНИЕ =====
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
  container.innerHTML = '';
  fronts.forEach(f => {
    const card = document.createElement('div');
    card.className = 'front-card';
    card.innerHTML = `
      <span class="front-icon">${f.icon}</span>
      <div class="front-title">${f.title}</div>
      <div class="front-desc">${f.desc}</div>
    `;
    card.addEventListener('click', () => startFront(f));
    container.appendChild(card);
  });
}

function startFront(front) {
  state.currentFront = front;
  state.questionIndex = 0;
  state.correctCount = 0;
  state.errorCount = 0;
  state.answered = false;
  state.shuffledQuestions = shuffle(front.questions);
  $('front-name').textContent = front.title;
  renderBanner();
  updateHud();
  renderQuestion();
  showScreen('screen-battle');
}

// ===== ЗНАМЯ =====
function renderBanner() {
  const banner = $('banner');
  banner.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const seg = document.createElement('div');
    seg.className = 'banner-segment';
    banner.appendChild(seg);
  }
}

function updateBanner() {
  const segs = document.querySelectorAll('.banner-segment');
  segs.forEach((seg, i) => {
    seg.classList.remove('filled', 'cracked');
    if (i < state.correctCount) seg.classList.add('filled');
    else if (i >= 7 - state.errorCount) seg.classList.add('cracked');
  });
}

function updateHud() {
  $('shield-count').textContent = state.correctCount;
  $('error-count').textContent = state.errorCount;
  $('attempt-count').textContent = state.attempt;
}

// ===== ВОПРОС =====
function renderQuestion() {
  if (state.questionIndex >= 7) {
    // все вопросы пройдены
    if (state.correctCount === 7) {
      showVictory();
    }
    return;
  }
  const q = state.shuffledQuestions[state.questionIndex];
  $('question-text').textContent = q.q;
  const optsContainer = $('options-container');
  optsContainer.innerHTML = '';
  // перемешиваем варианты, запоминаем правильный текст
  const correctText = q.options[q.correct];
  const shuffledOpts = shuffle(q.options);
  shuffledOpts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => answer(btn, opt === correctText, q));
    optsContainer.appendChild(btn);
  });
  $('note').hidden = true;
  state.answered = false;
}

// ===== ОТВЕТ =====
function answer(btn, isCorrect, q) {
  if (state.answered) return;
  state.answered = true;
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    state.correctCount++;
    playSound('correct');
    updateBanner();
    updateHud();
    showNote(q.note);
    setTimeout(() => {
      state.questionIndex++;
      renderQuestion();
    }, 1200);
  } else {
    btn.classList.add('wrong');
    state.errorCount++;
    playSound('wrong');
    updateBanner();
    updateHud();
    showNote(q.note);
    setTimeout(() => {
      if (state.errorCount === 1) {
        showScreen('screen-breach');
      } else {
        showScreen('screen-retreat');
      }
    }, 1500);
  }
}

function showNote(text) {
  $('note-text').textContent = text;
  $('note').hidden = false;
}

$('note-close').addEventListener('click', () => {
  $('note').hidden = true;
});

// ===== ПОБЕДА =====
function showVictory() {
  drawVictoryCanvas();
  showScreen('screen-victory');
}

function drawVictoryCanvas() {
  const canvas = $('victory-canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  // фон — знамя
  ctx.fillStyle = '#8b2e2e';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#c9a227';
  ctx.fillRect(20, 20, w - 40, h - 40);
  ctx.fillStyle = '#8b2e2e';
  ctx.fillRect(30, 30, w - 60, h - 60);
  // текст
  ctx.fillStyle = '#e8dcc8';
  ctx.font = 'bold 28px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('ФРОНТ УДЕРЖАН', w / 2, h / 2 - 20);
  ctx.font = '18px Georgia, serif';
  ctx.fillText(state.currentFront.title, w / 2, h / 2 + 20);
  ctx.font = '14px Georgia, serif';
  ctx.fillText('КПЦ им. Ефима Честнякова', w / 2, h - 50);
  // обновляем og:image (для сниппета)
  const dataUrl = canvas.toDataURL('image/png');
  document.querySelector('meta[property="og:image"]').setAttribute('content', dataUrl);
  document.querySelector('meta[property="vk:image"]').setAttribute('content', dataUrl);
}

// ===== КНОПКИ =====
$('btn-back-select').addEventListener('click', () => {
  showScreen('screen-select');
});

$('btn-restart').addEventListener('click', () => {
  state.attempt++;
  updateHud();
  showScreen('screen-select');
});

$('btn-another').addEventListener('click', () => {
  showScreen('screen-select');
});

$('btn-share-vk').addEventListener('click', () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent('Я удержал фронт! — КПЦ им. Ефима Честнякова');
  window.open(`https://vk.com/share.php?url=${url}&title=${title}`, '_blank', 'width=600,height=400');
});

$('btn-copy').addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    $('btn-copy').textContent = 'Скопировано!';
    setTimeout(() => { $('btn-copy').textContent = 'Скопировать ссылку'; }, 2000);
  });
});

// ===== СТАРТ =====
renderFronts();
updateHud();