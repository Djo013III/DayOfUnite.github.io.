:root {
  --bg: #1a1512;
  --panel: #2a221c;
  --panel-border: #4a3b2e;
  --text: #e8dcc8;
  --accent: #a83232;
  --accent-soft: #c9a227;
  --green: #4a7c4a;
  --red: #8b2e2e;
  --font-main: Georgia, 'Times New Roman', serif;
  --font-ui: system-ui, -apple-system, sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

/* ============================================================ */
/* ФОНОВОЕ ИЗОБРАЖЕНИЕ: ЗАМЕНИ bg.jpg НА СВОЙ ФАЙЛ */
/* Положи файл рядом с index.html. Если файла нет — останется тёмный фон. */
/* ============================================================ */
body {
  background-color: var(--bg);
  background-image: url('bg.jpg'); /* <-- ЗДЕСЬ СВОЁ ИЗОБРАЖЕНИЕ */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: var(--text);
  font-family: var(--font-ui);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 16px;
}

/* Дым по низу экрана */
#smoke-canvas {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25vh;
  pointer-events: none;
  z-index: 1;
  opacity: 0.85;
}

@media (max-width: 640px) {
  #smoke-canvas { height: 20vh; }
}

#app {
  width: 100%;
  max-width: 900px;
  background: rgba(42, 34, 28, 0.94);
  border: 2px solid var(--panel-border);
  border-radius: 4px;
  padding: 28px;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 0 0 1px #1a1512,
    0 0 0 3px var(--panel-border),
    0 0 0 5px #1a1512,
    0 0 20px rgba(0,0,0,0.6);
}

/* Уголки-заклёпки панели */
#app::before,
#app::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid var(--accent-soft);
  border-radius: 2px;
  opacity: 0.6;
}
#app::before { top: 6px; left: 6px; }
#app::after { bottom: 6px; right: 6px; }

.screen { display: none; }
.screen.active { display: block; }

/* ===== HUD ===== */
.hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 18px;
  font-size: 14px;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
}

.hud::after {
  content: "";
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, var(--accent-soft) 20%, var(--accent-soft) 80%, transparent 100%);
  opacity: 0.5;
  border-radius: 2px;
}

.hud-title { font-family: var(--font-main); font-weight: bold; color: var(--accent-soft); letter-spacing: 1px; text-transform: uppercase; font-size: 13px; }
.hud-item b { color: var(--accent-soft); }

/* ===== СТАРТОВЫЙ ЭКРАН ===== */
.intro-title {
  font-family: var(--font-main);
  font-size: clamp(32px, 7vw, 56px);
  text-align: center;
  margin: 20px 0 6px;
  color: var(--accent-soft);
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 3px 8px rgba(0,0,0,0.9), 0 0 20px rgba(201,162,39,0.2);
}

.intro-subtitle {
  text-align: center;
  font-size: clamp(14px, 2.5vw, 18px);
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

#intro-canvas {
  display: block;
  margin: 0 auto 24px;
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.7));
}

.intro-rules {
  max-width: 620px;
  margin: 0 auto 28px;
  padding: 18px 22px;
  background: rgba(26, 21, 18, 0.6);
  border: 1px solid var(--panel-border);
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(201,162,39,0.1);
  font-size: 14px;
  line-height: 1.6;
}

.intro-rules p { margin-bottom: 10px; }
.intro-rules p:last-child { margin-bottom: 0; }
.intro-rules b { color: var(--accent-soft); }

.btn-big {
  font-size: 18px;
  padding: 16px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: btnGlow 2.5s ease-in-out infinite;
}

@keyframes btnGlow {
  0%, 100% { box-shadow: 0 3px 0 #4a1515, 0 5px 10px rgba(0,0,0,0.4); }
  50% { box-shadow: 0 3px 0 #4a1515, 0 5px 20px rgba(201,162,39,0.4); }
}

/* ===== ЗАГОЛОВКИ ===== */
.main-title {
  font-family: var(--font-main);
  font-size: clamp(24px, 5vw, 40px);
  text-align: center;
  margin: 20px 0 8px;
  color: var(--accent-soft);
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  letter-spacing: 2px;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  margin-bottom: 28px;
  opacity: 0.8;
  font-style: italic;
}

/* ===== КАРТОЧКИ ФРОНТОВ ===== */
.fronts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

@media (max-width: 640px) {
  .fronts { grid-template-columns: 1fr; }
}

.front-card {
  background: linear-gradient(180deg, #2e241c 0%, #1f1913 100%);
  border: 2px solid var(--panel-border);
  border-radius: 4px;
  padding: 22px 14px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s, border-color 0.2s, box-shadow 0.2s;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(201,162,39,0.15);
}

.front-card::before {
  content: "";
  position: absolute;
  top: 4px; left: 4px; right: 4px; bottom: 4px;
  border: 1px solid rgba(201,162,39,0.25);
  border-radius: 2px;
  pointer-events: none;
}

.front-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-soft);
  box-shadow: 0 6px 20px rgba(0,0,0,0.5), 0 0 15px rgba(201,162,39,0.2);
}

.front-card:active {
  transform: translateY(-1px) scale(0.98);
}

.front-icon { font-size: 40px; display: block; margin-bottom: 10px; }
.front-title { font-family: var(--font-main); font-size: 18px; margin-bottom: 6px; color: var(--accent-soft); letter-spacing: 1px; }
.front-desc { font-size: 12px; opacity: 0.7; margin-bottom: 8px; }
.front-progress { 
  font-size: 12px; 
  color: var(--accent-soft); 
  border-top: 1px solid rgba(201,162,39,0.2); 
  padding-top: 8px; 
  margin-top: 4px; 
}

/* ===== ЗНАМЯ ===== */
.banner {
  display: flex;
  gap: 4px;
  margin-bottom: 24px;
  height: 32px;
  padding: 3px;
  background: #1a1512;
  border: 1px solid var(--panel-border);
  border-radius: 3px;
}

.banner-segment {
  flex: 1;
  background: #2a221c;
  border: 1px solid #3a2f24;
  border-radius: 2px;
  transition: background 0.4s, box-shadow 0.4s;
}

.banner-segment.filled { 
  background: linear-gradient(180deg, #5a8c5a 0%, #3a5c3a 100%);
  box-shadow: 0 0 8px rgba(74,124,74,0.5);
  animation: pulse 0.6s ease;
}

.banner-segment.cracked { 
  background: linear-gradient(180deg, #a83232 0%, #6b1f1f 100%);
  box-shadow: 0 0 8px rgba(139,46,46,0.5);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

/* ===== ВОПРОС ===== */
.question-text {
  font-family: var(--font-main);
  font-size: clamp(18px, 3.5vw, 24px);
  margin-bottom: 22px;
  line-height: 1.4;
  padding: 12px 0;
  border-top: 1px solid rgba(201,162,39,0.15);
  border-bottom: 1px solid rgba(201,162,39,0.15);
}

/* ===== ВАРИАНТЫ ОТВЕТОВ ===== */
.options { display: flex; flex-direction: column; gap: 10px; }

.option-btn {
  background: linear-gradient(180deg, #2e241c 0%, #1f1913 100%);
  border: 2px solid var(--panel-border);
  color: var(--text);
  padding: 14px 18px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-family: var(--font-ui);
  transition: border-color 0.2s, background 0.2s, transform 0.1s;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(201,162,39,0.1);
}

.option-btn::before {
  content: "▸";
  color: var(--accent-soft);
  margin-right: 10px;
  opacity: 0;
  transition: opacity 0.2s;
}

.option-btn:hover:not(:disabled) { 
  border-color: var(--accent-soft);
  background: linear-gradient(180deg, #3a2e22 0%, #2a2018 100%);
}

.option-btn:hover:not(:disabled)::before { opacity: 1; }

.option-btn:active:not(:disabled) { transform: scale(0.99); }

.option-btn.correct { 
  border-color: var(--green); 
  background: linear-gradient(180deg, #2a3a2a 0%, #1f2a1f 100%);
  box-shadow: 0 0 12px rgba(74,124,74,0.3);
}
.option-btn.wrong { 
  border-color: var(--red); 
  background: linear-gradient(180deg, #3a2222 0%, #2a1818 100%);
  box-shadow: 0 0 12px rgba(139,46,46,0.3);
}
.option-btn:disabled { cursor: default; }

/* ===== ЗАМЕТКА ===== */
.note {
  margin-top: 18px;
  padding: 14px 18px;
  background: linear-gradient(180deg, #332a22 0%, #241d16 100%);
  border-left: 4px solid var(--accent-soft);
  border-radius: 2px;
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.note-close {
  position: absolute;
  top: 4px; right: 8px;
  background: none; border: none;
  color: var(--text); font-size: 20px;
  cursor: pointer; opacity: 0.6;
}

.note-close:hover { opacity: 1; }

/* ===== РЕЗУЛЬТАТЫ ===== */
.result-title {
  font-family: var(--font-main);
  font-size: clamp(22px, 4vw, 32px);
  text-align: center;
  margin: 28px 0 14px;
  color: var(--accent-soft);
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.result-text { text-align: center; font-size: 16px; margin-bottom: 26px; line-height: 1.5; }

/* ===== КНОПКИ ===== */
.btn {
  display: block;
  margin: 0 auto 12px;
  background: linear-gradient(180deg, #a83232 0%, #6b1f1f 100%);
  border: 2px solid var(--accent-soft);
  color: var(--text);
  padding: 12px 32px;
  font-size: 16px;
  font-family: var(--font-ui);
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
  position: relative;
  box-shadow: 0 3px 0 #4a1515, 0 5px 10px rgba(0,0,0,0.4);
  letter-spacing: 0.5px;
}

.btn:hover { 
  background: linear-gradient(180deg, #c03a3a 0%, #8b2e2e 100%);
  box-shadow: 0 3px 0 #4a1515, 0 5px 15px rgba(168,50,50,0.4);
}

.btn:active { 
  transform: translateY(2px); 
  box-shadow: 0 1px 0 #4a1515, 0 2px 5px rgba(0,0,0,0.4);
}

.btn-secondary { 
  background: linear-gradient(180deg, #3a2e22 0%, #241d16 100%);
  box-shadow: 0 3px 0 #1a1512, 0 5px 10px rgba(0,0,0,0.4);
}

.btn-secondary:hover { 
  background: linear-gradient(180deg, #4a3a2a 0%, #2e241c 100%);
  box-shadow: 0 3px 0 #1a1512, 0 5px 15px rgba(0,0,0,0.5);
}

.share-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }

/* ===== CANVAS-ЩИТ ===== */
#victory-canvas {
  display: block;
  margin: 0 auto 18px;
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 6px 15px rgba(0,0,0,0.6));
}

/* ===== ЛЕНТА ВРЕМЕНИ ===== */
.timeline {
  display: flex;
  justify-content: center;
  gap: 16px;
  font-family: var(--font-main);
  font-size: 14px;
  color: var(--accent-soft);
  margin-bottom: 18px;
  flex-wrap: wrap;
  letter-spacing: 1px;
}

.timeline span { position: relative; }
.timeline span:not(:last-child)::after {
  content: "→";
  margin-left: 16px;
  opacity: 0.5;
}
