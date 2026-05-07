document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", buildTweaks());

  const saved = localStorage.getItem("omnia-hue");
  const initialHue = saved ? Number(saved) : 95;
  applyHue(initialHue);

  const slider = document.getElementById("hue-slider");
  const hueVal = document.getElementById("hue-val");
  slider.value = initialHue;
  hueVal.textContent = initialHue;

  slider.addEventListener("input", (event) => {
    const hue = Number(event.target.value);
    hueVal.textContent = hue;
    applyHue(hue);
    localStorage.setItem("omnia-hue", hue);
  });

  document.getElementById("tweaks-toggle").addEventListener("click", () => {
    document.getElementById("tweaks-panel").classList.toggle("open");
  });
});

function buildTweaks() {
  return `<button id="tweaks-toggle" type="button">[ tweaks ]</button>
  <div id="tweaks-panel">
    <label for="hue-slider">Accent hue <span id="hue-val">95</span></label>
    <input type="range" id="hue-slider" min="0" max="360" value="95" />
    <div class="tweaks-preview"><span class="swatch" id="hue-swatch"></span><span>preview</span></div>
  </div>`;
}

function applyHue(hue) {
  document.documentElement.style.setProperty("--accent", `oklch(0.78 0.16 ${hue})`);
}
