// Brand mark + shared chrome injection
function brandMarkSVG(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M 7 4 L 4 4 L 4 28 L 7 28" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="square" />
    <path d="M 25 4 L 28 4 L 28 28 L 25 28" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="square" />
    <line x1="9" y1="9"  x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
    <line x1="22" y1="8" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
    <line x1="9" y1="22" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
    <line x1="22" y1="24" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
    <line x1="9" y1="9"  x2="22" y2="8"  stroke="currentColor" stroke-width="0.7" opacity="0.4" />
    <line x1="9" y1="22" x2="22" y2="24" stroke="currentColor" stroke-width="0.7" opacity="0.4" />
    <circle cx="9"  cy="9"  r="1.5" fill="currentColor" />
    <circle cx="22" cy="8"  r="1.5" fill="currentColor" />
    <circle cx="9"  cy="22" r="1.5" fill="currentColor" />
    <circle cx="22" cy="24" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="2.1" fill="var(--accent)" />
  </svg>`;
}

const NAV = [
  ['index.html',        '~/home',     'home'],
  ['research.html',     '~/research', 'research'],
  ['team.html',         '~/team',     'team'],
  ['publications.html', '~/pubs',     'publications'],
  ['positions.html',    '~/join',     'positions'],
  ['resources.html',    '~/resources','resources'],
  ['contact.html',      '~/contact',  'contact'],
];

function buildHeader(active){
  const links = NAV.map(([href, label, key]) =>
    `<a href="${href}"${key===active?' class="active"':''}>${label}</a>`).join('');
  return `<header class="site-header">
    <a href="index.html" style="display:inline-flex;align-items:center;gap:10px;color:var(--ink)">
      ${brandMarkSVG(20)}
      <span style="font-weight:500;letter-spacing:0.02em">omnia.lab</span>
    </a>
    <nav class="nav">${links}</nav>
    <span class="meta">[v.2.4]</span>
  </header>
  <div class="path-bar">
    <span><span class="accent-dot">●</span> running &mdash; puc.cl / iibm / santiago</span>
    <span>$ cat ./${active}.md</span>
  </div>`;
}

function buildFooter(){
  const d = new Date();
  return `<footer class="site-footer">
    <span>omnia.lab — made at PUC Chile · GNU GPL v3.0 · ${d.getFullYear()}</span>
    <span><a href="https://github.com/omnia-lab-uc">github</a> · <a href="mailto:tgonza@uc.cl">tgonza@uc.cl</a></span>
  </footer>`;
}

function buildTweaks(){
  return `<button id="tweaks-toggle">[ tweaks ]</button>
  <div id="tweaks-panel">
    <label>Accent hue <span id="hue-val" style="float:right;color:var(--ink-2)">95</span></label>
    <input type="range" id="hue-slider" min="0" max="360" value="95" />
    <div style="margin-top:10px"><span class="swatch" id="hue-swatch"></span><span>preview</span></div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const active = document.body.dataset.page || 'home';
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (headerSlot) headerSlot.innerHTML = buildHeader(active);
  if (footerSlot) footerSlot.innerHTML = buildFooter();
  document.body.insertAdjacentHTML('beforeend', buildTweaks());

  const saved = localStorage.getItem('omnia-hue');
  const initialHue = saved ? Number(saved) : 95;
  applyHue(initialHue);

  const slider = document.getElementById('hue-slider');
  const hueVal = document.getElementById('hue-val');
  slider.value = initialHue;
  hueVal.textContent = initialHue;
  slider.addEventListener('input', e => {
    const h = Number(e.target.value);
    hueVal.textContent = h;
    applyHue(h);
    localStorage.setItem('omnia-hue', h);
  });

  const toggle = document.getElementById('tweaks-toggle');
  const panel  = document.getElementById('tweaks-panel');
  toggle.addEventListener('click', () => panel.classList.toggle('open'));
});

function applyHue(h){
  document.documentElement.style.setProperty('--accent', `oklch(0.78 0.16 ${h})`);
}
