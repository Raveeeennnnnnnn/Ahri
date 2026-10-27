"use strict";
/* ==========================================================
   EDIT EVERYTHING PERSONAL HERE (top of file)
   ========================================================== */
const birthdayConfig = {
  girlfriendName: "",
  yourName: "Raven Cuadro",
  /* Birthday as "YYYY-MM-DD" in the viewer's LOCAL time zone. Leave "" to hide the countdown.
     Only month and day matter; the year is ignored. */
  birthdayDate: "2004-11-04",
  /* "next": count down to the next birthday after it passes. "greeting": show a plain greeting instead. */
  countdownMode: "next",
  backgroundMusic: "assets/music/birthday-song.mp3", /* the Happy Birthday music: it plays while the "Celebrate" pop-up is open (♪ there pauses it) */
  /* Audio that plays when "One Last Surprise" opens (the background music pauses meanwhile). "" = none. */
  secretAudio: "assets/music/surprise.mp3",
  songTitle: "Happy Birthday (music box)",
  heroPhoto: "assets/photos/hero.jpg",
  drawerPhoto: "assets/photos/drawer.jpg", /* photo at the top of the menu drawer */
  puzzleSize: 3, /* how many puzzle pieces across (2 to 5) */
  requirePassword: true, /* she must enter her birthday (birthdayDate above, with the year) to open the surprise; false = no password */
  welcomeMessage: "I made something special just for you.",
  birthdayMessage: "Your personalized birthday message here.",
  /* Optional colour overrides, e.g. { "pink-main": "#FF8FB1", "pink-deep": "#E75480" } */
  colors: {},

  letterTitle: "To My Favorite Person 💌",
  letter: `Happy birthday, my love!

Today is a very special day because it is the day someone as wonderful as you came into this world.

I want you to know how grateful I am to have you in my life. Your smile makes ordinary days feel special, and your presence brings happiness into my world.

Thank you for being yourself, for sharing your time with me, and for creating beautiful memories with me.

On your birthday, I wish you happiness, good health, peace of mind, success, and all the beautiful things your heart deserves.

No matter how simple or difficult life becomes, I hope you always remember that you are loved, appreciated, and important.

I hope this little website makes you smile because you deserve to feel special, not only today but every day.

Happy birthday, my love. I love you so much! ❤️`,
  letterSignature: "",

  /* Add or remove photos freely. Put files in assets/photos/ */
  photos: [
    { src: "assets/photos/photo1.jpg", alt: "Her, smiling by the sofa with a hand on the cushion", caption: "Standing tall, smiling bright.", date: "" },
    { src: "assets/photos/photo2.jpg", alt: "Her looking to the side with a hand in her hair", caption: "A quiet moment, still beautiful.", date: "" },
    { src: "assets/photos/photo3.jpg", alt: "Her smiling with a hand in her hair", caption: "That smile again.", date: "" },
    { src: "assets/photos/photo4.jpg", alt: "Her leaning on the wall, smiling to the side", caption: "Caught in a candid moment.", date: "" },
    { src: "assets/photos/photo5.jpg", alt: "Her laughing with her eyes closed", caption: "A laugh worth keeping.", date: "" },
    { src: "assets/photos/photo6.jpg", alt: "Her looking to the side with a hand in her hair", caption: "Effortlessly beautiful.", date: "" },
    { src: "assets/photos/photo7.jpg", alt: "Her looking at the camera with a hand in her hair", caption: "Eyes that say everything.", date: "" },
    { src: "assets/photos/photo8.jpg", alt: "Her smiling brightly with a hand in her hair", caption: "A smile that lights up the night.", date: "" },
    { src: "assets/photos/photo9.jpg", alt: "Her laughing with her eyes closed", caption: "Pure joy, caught on camera.", date: "" },
    { src: "assets/photos/photo10.jpg", alt: "Her leaning on the low wall with a hand in her hair", caption: "A calm, quiet kind of beautiful.", date: "" }
  ],

  /* Videos shown under the photos (swipe sideways to see the next one). Put the files in assets/video/
     (mp4 works best on phones). Delete a line to remove a video; poster is an optional preview picture.
     Leave the list empty to hide this section. */
  videoTitle: "Our Little Movie 🎬",
  videoCaption: "Press play to watch. Swipe for more.",
  videos: [
    { src: "assets/video/our-video.mp4", poster: "assets/video/poster.jpg" },
    { src: "assets/video/our-video2.mp4", poster: "assets/video/poster2.jpg" },
    { src: "assets/video/our-video3.mp4", poster: "assets/video/poster3.jpg" },
    { src: "assets/video/our-video4.mp4", poster: "assets/video/poster4.jpg" }
  ],

  /* Each card: icon, text (front) and more (what appears when she taps it) */
  reasons: [
    { icon: "😊", text: "Your beautiful smile.", more: "It lights up my whole day." },
    { icon: "💖", text: "The way you make me happy.", more: "Being with you feels like my favorite place." },
    { icon: "🌸", text: "Your kindness and caring heart.", more: "You care in the sweetest ways." },
    { icon: "🏡", text: "The comfort I feel when I’m with you.", more: "With you, I can simply be me." },
    { icon: "✨", text: "Your unique personality.", more: "There is no one else like you." },
    { icon: "🎁", text: "The little things you do.", more: "I notice every one of them, and they matter." },
    { icon: "📷", text: "The memories we share.", more: "Every one is a treasure to me." },
    { icon: "💞", text: "Simply because you are you.", more: "And that is always enough for me." }
  ],

  /* Replace the sample dates and text with your real memories. image is optional. */
  timeline: [],
  /* Timeline is hidden while the list above is empty. To bring it back, paste these entries into the list:
    { date: "Where it all began", title: "The Beginning", text: "Every story has a first page. I’m so glad mine led me to you.", image: "" },
    { date: "A sunny day with you", title: "A Memory Worth Keeping", text: "Tall palm trees, a bright blue sky, and you right beside me. I would happily relive this day again and again.", image: "" },
    { date: "Just us being silly", title: "A Day That Made Me Smile", text: "Funny faces, big smiles, and a little camera that caught us just being happy.", image: "" },
    { date: "Over good food", title: "Sharing Every Little Moment", text: "Even the simplest meal feels special when I get to share it with you.", image: "" },
    { date: "Today and always", title: "More Beautiful Memories Ahead", text: "Flowers fade, but this feeling never does. I can’t wait for every memory still waiting for us.", image: "" }
  */

  secretMessage: `If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Then you would know just how special, beautiful, and loved you truly are.

Happy birthday, my love. Thank you for being you. ❤️`,

  finalMessage: `Today is your day, but honestly, I feel lucky every day that I get to have you in my life.

I hope this new chapter brings you more happiness, more reasons to smile, and more dreams coming true.

Keep shining, keep smiling, and keep being the amazing person you are.

Happy birthday, my love!

Here’s to more laughter, more adventures, more memories, and more beautiful days together.

I love you! 💗`,
  finalSignature: "",

  /* "Celebrate" button: this text pops up. Write it like: Happy 22nd Birthday My Love! */
  celebrateText: "Happy 22nd Birthday My Love!"
};

/* ==========================================================
   APP CODE (no need to edit below)
   ========================================================== */
(function () {
  const C = birthdayConfig;
  const $ = (s) => document.querySelector(s);
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  function mk(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function paras(el, text) {
    if (!el) return;
    el.textContent = "";
    String(text || "").split(/\n\s*\n/).forEach((p) => { if (p.trim()) el.appendChild(mk("p", p.trim().length < 32 ? "short" : "", p.trim())); });
  }
  function setText(sel, t) { const e = $(sel); if (e) e.textContent = t; }
  function safe(fn) { try { fn(); } catch (err) { console.warn("Feature skipped:", err); } }
  const you = () => C.yourName || "";

  /* ---------- Theme & text ---------- */
  safe(() => {
    Object.keys(C.colors || {}).forEach((k) => document.documentElement.style.setProperty("--" + k.replace(/^--/, ""), C.colors[k]));
    setText("#gfName", C.girlfriendName);
    setText("#welcome", C.welcomeMessage);
    setText("#birthdayMsg", C.birthdayMessage);
    paras($("#letterBody"), C.letter);
    setText("#letterSign", String(C.letterSignature || "").replace("{you}", you()));
    const lt = $("#letterCard h2"); if (lt && C.letterTitle) lt.textContent = C.letterTitle;
    paras($("#finalBody"), C.finalMessage);
    setText("#finalSign", String(C.finalSignature || "").replace("{you}", you()));
    paras($("#secretBody"), C.secretMessage);
    document.title = "Happy Birthday My Love!";
  });

  /* ---------- Ambient background (fixed small count) ---------- */
  safe(() => {
    const box = $("#ambient"), icons = ["💗", "✦", "🌸", "💖", "✨"];
    for (let i = 0; i < 14; i++) {
      const s = mk("span", "amb", icons[i % icons.length]);
      s.style.left = (i * 7.3 + Math.random() * 5) % 100 + "%";
      s.style.fontSize = 12 + Math.random() * 18 + "px";
      s.style.animationDuration = 14 + Math.random() * 14 + "s";
      s.style.animationDelay = -Math.random() * 20 + "s";
      box.appendChild(s);
    }
  });

  /* ---------- Floating hearts (capped) ---------- */
  const fx = $("#fx");
  function hearts(n) {
    if (!fx || reduce) return;
    for (let i = 0; i < n && fx.children.length < 40; i++) {
      const h = mk("span", "fh", "💗");
      h.style.left = Math.random() * 95 + "%";
      h.style.fontSize = 16 + Math.random() * 22 + "px";
      h.style.animationDuration = 3 + Math.random() * 3 + "s";
      h.style.animationDelay = Math.random() * 0.8 + "s";
      h.addEventListener("animationend", () => h.remove());
      fx.appendChild(h);
    }
  }

  /* ---------- Confetti (one canvas, 90 particles) ---------- */
  const cv = $("#confetti"), cx = cv && cv.getContext ? cv.getContext("2d") : null;
  let parts = [], raf = 0;
  function confetti() {
    if (!cx || reduce) { hearts(10); return; }
    cv.width = innerWidth; cv.height = innerHeight;
    const cols = ["#FF8FB1", "#E75480", "#E8C27D", "#FFD6E7", "#E9DDFB", "#fff"];
    parts = Array.from({ length: 90 }, () => ({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.4,
      vx: Math.random() * 2 - 1, vy: 2 + Math.random() * 3, s: 5 + Math.random() * 6,
      r: Math.random() * 6, vr: Math.random() * 0.2 - 0.1, c: cols[(Math.random() * cols.length) | 0]
    }));
    if (!raf) raf = requestAnimationFrame(step);
  }
  function step() {
    cx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter((p) => p.y < cv.height + 20);
    parts.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c;
      cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore();
    });
    raf = parts.length ? requestAnimationFrame(step) : 0;
    if (!raf) cx.clearRect(0, 0, cv.width, cv.height);
  }

  /* ---------- Music (never required) ---------- */
  let audio = null;
  const playBtn = $("#playBtn"), muteBtn = $("#muteBtn");
  function syncMusic() {
    const on = !!audio && !audio.paused;
    const tg = $("#musicToggle"); if (tg) { tg.classList.toggle("on", on); tg.setAttribute("aria-pressed", String(on)); tg.setAttribute("aria-label", on ? "Pause music" : "Play music"); }
    if (playBtn) { playBtn.textContent = on ? "⏸" : "▶"; playBtn.setAttribute("aria-label", on ? "Pause music" : "Play music"); playBtn.setAttribute("aria-pressed", String(on)); }
    const m = !!audio && audio.muted;
    if (muteBtn) { muteBtn.textContent = m ? "🔇" : "🔊"; muteBtn.setAttribute("aria-label", m ? "Unmute music" : "Mute music"); muteBtn.setAttribute("aria-pressed", String(m)); }
    setText("#musicState", on ? "Playing" + (C.songTitle ? ": " + C.songTitle : "") : "Music off");
  }
  function musicFail() { const h = $("#musicHint"); if (h) h.hidden = false; syncMusic(); }
  function tryPlay() {
    try {
      if (!C.backgroundMusic) return musicFail();
      if (!audio) {
        audio = new Audio(C.backgroundMusic);
        audio.loop = true;
        audio.addEventListener("error", musicFail);
        audio.addEventListener("play", syncMusic);
        audio.addEventListener("pause", syncMusic);
      }
      const p = audio.play();
      if (p && p.then) p.then(() => { const h = $("#musicHint"); if (h) h.hidden = true; syncMusic(); }).catch(musicFail);
    } catch (e) { musicFail(); }
  }
  if (playBtn) playBtn.addEventListener("click", () => { if (audio && !audio.paused) audio.pause(); else tryPlay(); });
  if (muteBtn) muteBtn.addEventListener("click", () => { if (audio) { audio.muted = !audio.muted; syncMusic(); } });

  /* The ♪ button is the only music control: tap to play or pause */
  const mTg = $("#musicToggle");
  if (mTg) mTg.addEventListener("click", (e) => { e.stopPropagation(); /* do not close the pop-up */ if (audio && !audio.paused) audio.pause(); else tryPlay(); });

  /* ---------- Opening ---------- */
  /* ---------- Password: she must enter her birthday before the surprise opens ---------- */
  const pw = $("#pw"), pwCard = $("#pwCard"), pwM = $("#pwM"), pwD = $("#pwD"), pwY = $("#pwY"), pwMsg = $("#pwMsg");
  const secret = /^(\d{4})-(\d{2})-(\d{2})$/.exec(C.birthdayDate || "");
  const needPw = C.requirePassword !== false && !!secret && !!pw; /* no birthday set = no password */
  let unlocked = false;
  function showPw() {
    if (!pw) return;
    pw.hidden = false; if (pwMsg) pwMsg.textContent = ""; if (pwM) pwM.focus();
  }
  function hidePw() { if (pw) pw.hidden = true; const b = $("#openBtn"); if (b && !opened) b.focus(); }
  function tryPw() {
    const m = (pwM.value || "").padStart(2, "0"), d = (pwD.value || "").padStart(2, "0"), y = pwY.value || "";
    if (y + "-" + m + "-" + d === secret[0]) { unlocked = true; if (pwMsg) pwMsg.textContent = ""; pw.hidden = true; const b = $("#openBtn"); if (b) b.click(); return; }
    if (pwMsg) pwMsg.textContent = "That’s not it, my love. Try again.";
    pwCard.classList.remove("shake"); void pwCard.offsetWidth; pwCard.classList.add("shake");
  }
  if (needPw) {
    [[pwM, pwD, 2], [pwD, pwY, 2], [pwY, null, 4]].forEach(([el, next, len]) => {
      el.addEventListener("input", () => { el.value = el.value.replace(/\D/g, "").slice(0, len); if (next && el.value.length === len) next.focus(); });
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); tryPw(); } });
    });
    $("#pwGo").addEventListener("click", tryPw);
    pw.addEventListener("click", (e) => { if (e.target === pw) hidePw(); }); /* tap outside to go back */
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !pw.hidden) hidePw(); });
  }

  let opened = false;
  const openBtn = $("#openBtn");
  if (openBtn) openBtn.addEventListener("click", () => {
    if (opened) return;
    if (needPw && !unlocked) { showPw(); return; } /* ask for her birthday first */
    opened = true; openBtn.disabled = true;
    const gift = $("#gift"), intro = $("#intro");
    if (gift) gift.classList.add("open");
    hearts(12); /* the Happy Birthday music no longer starts here: it starts when "Celebrate" is opened */
    setTimeout(() => { if (intro) intro.classList.add("leaving"); }, reduce ? 0 : 1100);
    setTimeout(() => { document.documentElement.classList.add("opened"); window.scrollTo(0, 0); hearts(10); observe(); }, reduce ? 50 : 2000);
  });

  /* ---------- Back to the first page ("Hey, My Love…" + password) ---------- */
  const backBtn = $("#homeBtn");
  if (backBtn) backBtn.addEventListener("click", () => {
    closeDrawer();
    document.querySelectorAll("#videoBox video").forEach((v) => v.pause());
    if (audio) audio.pause();
    if (current) closeModal();
    document.documentElement.classList.remove("opened");
    const gift = $("#gift"), intro = $("#intro");
    if (gift) gift.classList.remove("open");
    if (intro) intro.classList.remove("leaving");
    [pwM, pwD, pwY].forEach((x) => { if (x) x.value = ""; });
    if (pw) pw.hidden = true; if (pwMsg) pwMsg.textContent = "";
    opened = false; unlocked = false; if (openBtn) openBtn.disabled = false;
    window.scrollTo(0, 0);
    if (openBtn) openBtn.focus({ preventScroll: true });
  });

  /* ---------- Scroll buttons & reveal ---------- */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-scroll]");
    const t = b && $(b.getAttribute("data-scroll"));
    if (t) t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
  let io = null;
  function observe() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Drawer photo: the whole picture, in a rectangle with a puzzle-piece look ---------- */
  safe(() => {
    const box = $(".drawer-photo"); if (!box) return;
    if (!C.drawerPhoto) { box.hidden = true; return; }
    const img = new Image(); img.alt = "A November 2026 calendar with the 4th circled and a birthday message";
    img.onerror = () => { box.hidden = true; };
    img.onload = () => {
      box.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight; /* fit any picture shape */
      box.appendChild(img);
      const N = Math.max(2, Math.min(5, Number(C.puzzleSize) || 3)), W = 300, H = 400, cw = W / N, ch = H / N;
      let d = "";
      for (let i = 1; i < N; i++) for (let k = 0; k < N; k++) {
        /* one jigsaw edge with a round knob: vertical line i (piece row k) and horizontal line i (piece column k) */
        const x = i * cw, y0 = k * ch, cy = y0 + ch / 2, w = ch * 0.2, r = ch * 0.15, s = (i + k) % 2;
        d += "M" + x + " " + y0 + "L" + x + " " + (cy - w / 2) + "A" + r + " " + r + " 0 1 " + s + " " + x + " " + (cy + w / 2) + "L" + x + " " + (y0 + ch);
        const y = i * ch, x0 = k * cw, cx = x0 + cw / 2, w2 = cw * 0.2, r2 = cw * 0.15, s2 = 1 - ((i + k) % 2);
        d += "M" + x0 + " " + y + "L" + (cx - w2 / 2) + " " + y + "A" + r2 + " " + r2 + " 0 1 " + s2 + " " + (cx + w2 / 2) + " " + y + "L" + (x0 + cw) + " " + y;
      }
      const ns = "http://www.w3.org/2000/svg", svg = document.createElementNS(ns, "svg"), path = document.createElementNS(ns, "path");
      svg.setAttribute("viewBox", "0 0 " + W + " " + H); svg.setAttribute("preserveAspectRatio", "none"); svg.setAttribute("aria-hidden", "true"); svg.setAttribute("class", "pz-lines");
      path.setAttribute("d", d); svg.appendChild(path); box.appendChild(svg);
    };
    img.src = C.drawerPhoto;
  });

  /* ---------- Hero photo ---------- */
  safe(() => {
    const img = $("#heroPhoto"); if (!img || !C.heroPhoto) return;
    img.onload = () => { img.hidden = false; const p = $("#heroPh"); if (p) p.hidden = true; };
    img.onerror = () => { img.hidden = true; };
    img.src = C.heroPhoto;
  });

  /* ---------- Envelope ---------- */
  const env = $("#envelope"), wrap = $("#letterWrap");
  if (env && wrap) env.addEventListener("click", () => {
    const o = wrap.classList.toggle("open");
    env.classList.toggle("open", o);
    env.setAttribute("aria-expanded", String(o));
    if (o) hearts(6);
  });
  /* Tap the letter itself to put it back in the envelope */
  const letterCard = $("#letterCard");
  function closeLetter() {
    if (!wrap || !env || !wrap.classList.contains("open")) return;
    wrap.classList.remove("open"); env.classList.remove("open"); env.setAttribute("aria-expanded", "false");
    env.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }
  if (letterCard) {
    letterCard.setAttribute("tabindex", "0");
    letterCard.addEventListener("click", () => { const sel = window.getSelection && String(window.getSelection()); if (!sel) closeLetter(); }); /* ignore it if she was selecting text */
    letterCard.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); closeLetter(); } });
  }

  /* ---------- Modals (shared) ---------- */
  let current = null, lastFocus = null;
  function openModal(el) {
    if (!el) return;
    lastFocus = document.activeElement; current = el; el.hidden = false;
    document.body.classList.add("lock");
    const f = el.querySelector("[data-close]"); if (f) f.focus();
  }
  function closeModal() {
    if (!current) return;
    if (current.id === "secret") secretStop();
    if (current.id === "celebrate" && audio) audio.pause(); /* the music belongs to Celebrate: it stops when the pop-up closes */
    current.hidden = true; current = null;
    document.body.classList.remove("lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("keydown", (e) => {
    if (!current) return;
    if (e.key === "Escape") closeModal();
    else if (current.id === "lightbox" && e.key === "ArrowLeft") lbMove(-1);
    else if (current.id === "lightbox" && e.key === "ArrowRight") lbMove(1);
    else if (e.key === "Tab") {
      const f = [...current.querySelectorAll("button")].filter((b) => !b.hidden && b.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  document.querySelectorAll(".modal").forEach((m) => m.addEventListener("click", (e) => {
    if (e.target === m || e.target.closest("[data-close]")) closeModal();
  }));

  /* ---------- Gallery & lightbox ---------- */
  const photos = Array.isArray(C.photos) ? C.photos : [];
  let idx = 0;
  function placeholder(p) { return mk("div", "ph", "📷 Add your photo: " + (p.src || "assets/photos/…")); }
  function picture(p, cls) {
    const img = new Image();
    img.className = cls || ""; img.alt = p.alt || p.caption || "Our photo"; img.loading = "lazy";
    img.onerror = () => { const ph = placeholder(p); if (img.parentNode) img.replaceWith(ph); };
    img.src = p.src || "";
    return img;
  }
  safe(() => {
    const grid = $("#photoGrid");
    if (!photos.length) { const s = $("#gallery"); if (s) s.hidden = true; return; }
    photos.forEach((p, i) => {
      const b = mk("button", "photo"); b.type = "button"; b.dataset.i = i;
      b.setAttribute("aria-label", "Open photo: " + (p.caption || "memory " + (i + 1)));
      b.appendChild(picture(p, "pic"));
      const cap = mk("span", "cap", p.caption || ""); 
      if (p.date) cap.appendChild(mk("small", "", p.date));
      b.appendChild(cap); grid.appendChild(b);
    });
    grid.addEventListener("click", (e) => { const b = e.target.closest(".photo"); if (b) { idx = +b.dataset.i; lbShow(); openModal($("#lightbox")); } });
  });
  function lbShow() {
    const p = photos[idx], fig = $("#lbFig"); if (!p || !fig) return;
    fig.textContent = "";
    fig.appendChild(picture(p, ""));
    fig.appendChild(mk("figcaption", "", (p.caption || "") + (p.date ? " · " + p.date : "")));
  }
  function lbMove(d) { if (!photos.length) return; idx = (idx + d + photos.length) % photos.length; lbShow(); }
  const pv = $("#prevBtn"), nx = $("#nextBtn");
  if (pv) pv.addEventListener("click", () => lbMove(-1));
  if (nx) nx.addEventListener("click", () => lbMove(1));

  /* ---------- Videos: circular (looping) carousel; a missing file shows a placeholder ---------- */
  safe(() => {
    const box = $("#videoBox"), list = Array.isArray(C.videos) ? C.videos.filter((x) => x && x.src) : [];
    if (!box || !list.length) return;
    box.hidden = false;
    box.appendChild(mk("h3", "", C.videoTitle || "Our Video 🎬"));
    if (C.videoCaption) box.appendChild(mk("p", "vcap", C.videoCaption));
    const stage = mk("div", "vstage"); stage.tabIndex = 0;
    stage.setAttribute("role", "group"); stage.setAttribute("aria-roledescription", "carousel"); stage.setAttribute("aria-label", C.videoTitle || "Videos");
    box.appendChild(stage);
    const n = list.length, slides = [], vids = []; let cur = 0, vResume = false; /* the background music pauses while any video plays */
    const anyPlaying = () => vids.some((x) => !x.paused && !x.ended);
    const maybeResume = () => setTimeout(() => { if (vResume && !anyPlaying()) { if (audio) audio.play().catch(() => {}); vResume = false; } }, 80);
    list.forEach((V, i) => {
      const slide = mk("div", "vslide"), wrap = mk("div", "video-wrap"); slide.appendChild(wrap); stage.appendChild(slide); slides.push(slide);
      const v = document.createElement("video");
      v.controls = true; v.playsInline = true; v.preload = "metadata";
      if (V.poster) v.poster = V.poster;
      v.setAttribute("aria-label", (C.videoTitle || "Our video") + " " + (i + 1));
      v.addEventListener("error", () => { v.remove(); wrap.appendChild(mk("div", "vph", "🎬 Add your video: " + V.src)); });
      v.addEventListener("play", () => {
        vids.forEach((x) => { if (x !== v && !x.paused) x.pause(); });
        if (!vResume && audio && !audio.paused) { vResume = true; audio.pause(); }
      });
      v.addEventListener("pause", maybeResume); v.addEventListener("ended", maybeResume);
      v.addEventListener("loadedmetadata", () => { if (v.videoWidth > v.videoHeight) slide.classList.add("wide"); updateH(); });
      v.src = V.src; wrap.appendChild(v); vids[i] = v;
      slide.addEventListener("click", () => { if (moved) { moved = false; return; } if (i !== cur) go(i); }); /* tap a side video to bring it to the front */
    });
    /* dots + arrows (only when there is more than one video) */
    let ds = [];
    if (n > 1) {
      const dots = mk("div", "vdots"); box.appendChild(dots);
      ds = list.map((_, i) => { const d = mk("button", "vdot"); d.type = "button"; d.setAttribute("aria-label", "Video " + (i + 1)); d.addEventListener("click", () => go(i)); dots.appendChild(d); return d; });
      [["prev", "Previous video", "M15 5l-7 7 7 7", -1], ["next", "Next video", "M9 5l7 7-7 7", 1]].forEach(([cls, label, path, step]) => {
        const bt = mk("button", "vnav " + cls); bt.type = "button"; bt.setAttribute("aria-label", label);
        bt.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
        bt.addEventListener("click", () => go(cur + step)); stage.appendChild(bt);
      });
    }
    function updateH() { const s = slides[cur]; if (s) stage.style.height = s.offsetHeight + 58 + "px"; }
    function layout() {
      slides.forEach((s, i) => {
        let d = (((i - cur) % n) + n) % n; if (d > n / 2) d -= n; /* shortest way round the ring */
        const a = Math.abs(d);
        s.style.setProperty("--d", d); s.style.setProperty("--a", Math.min(a, 2)); s.style.zIndex = String(10 - a);
        s.classList.toggle("is-active", d === 0); s.classList.toggle("is-hidden", a > 1);
        s.setAttribute("aria-hidden", String(d !== 0)); vids[i].tabIndex = d === 0 ? 0 : -1;
      });
      ds.forEach((d, i) => d.classList.toggle("on", i === cur));
      vids.forEach((x, i) => { if (i !== cur && !x.paused) x.pause(); }); /* pause the one that moved away */
      updateH();
    }
    function go(i) { cur = ((i % n) + n) % n; layout(); }
    /* swipe (touch or mouse drag) */
    let sx = 0, sy = 0, tracking = false, moved = false;
    stage.addEventListener("pointerdown", (e) => {
      if (e.button) return;
      tracking = true; moved = false; sx = e.clientX; sy = e.clientY;
      const vr = e.target.closest && e.target.closest("video"); /* leave the video's own controls alone */
      if (vr) { const r = vr.getBoundingClientRect(); if (e.clientY > r.bottom - 56) tracking = false; }
    });
    stage.addEventListener("pointermove", (e) => { if (tracking && Math.abs(e.clientX - sx) > 12 && Math.abs(e.clientX - sx) > Math.abs(e.clientY - sy)) moved = true; });
    stage.addEventListener("pointerup", (e) => { if (!tracking) return; tracking = false; const dx = e.clientX - sx; if (moved && Math.abs(dx) > 40 && n > 1) go(cur + (dx < 0 ? 1 : -1)); });
    stage.addEventListener("pointercancel", () => { tracking = false; });
    stage.addEventListener("keydown", (e) => { if (n > 1 && e.key === "ArrowRight") go(cur + 1); else if (n > 1 && e.key === "ArrowLeft") go(cur - 1); });
    if ("ResizeObserver" in window) { const ro = new ResizeObserver(updateH); slides.forEach((s) => ro.observe(s)); }
    window.addEventListener("resize", updateH);
    layout();
  });

  /* ---------- Reasons (tap-to-flip cards) ---------- */
  safe(() => {
    const g = $("#reasonGrid"), hint = $("#reasonHint");
    const list = Array.isArray(C.reasons) ? C.reasons : [];
    if (!g || !list.length) { const s = $("#reasons"); if (s) s.hidden = true; return; }
    const seen = new Set();
    list.forEach((r, i) => {
      const c = mk("button", "card"); c.type = "button"; c.style.transitionDelay = i * 80 + "ms";
      c.setAttribute("aria-pressed", "false");
      c.setAttribute("aria-label", "Reason " + (i + 1) + ": " + (r.text || "") + ". Tap to see more.");
      const inner = mk("span", "in"), f = mk("span", "f"), b = mk("span", "b");
      f.append(mk("span", "n", String(i + 1).padStart(2, "0")), mk("span", "ic", r.icon || "💗"), mk("span", "rt", r.text || ""), mk("span", "tap", "tap to open"));
      b.append(mk("span", "ic", "💗"), mk("span", "", r.more || r.text || ""));
      inner.append(f, b); c.appendChild(inner); g.appendChild(c);
    });
    g.addEventListener("click", (e) => {
      const c = e.target.closest(".card"); if (!c) return;
      const on = c.classList.toggle("flipped"); c.setAttribute("aria-pressed", String(on));
      const i = [...g.children].indexOf(c);
      if (on) { seen.add(i); hearts(4); }
      if (!hint) return;
      if (seen.size >= list.length) { hint.textContent = "All " + list.length + " opened… and there are a million more 💞"; if (!hint.dataset.done) { hint.dataset.done = "1"; confetti(); } }
      else hint.textContent = seen.size ? seen.size + " of " + list.length + " opened 💗" : "Tap each card to open it 💗";
    });
  });

  /* ---------- Timeline ---------- */
  safe(() => {
    const ol = $("#tlList"); const list = Array.isArray(C.timeline) ? C.timeline : [];
    if (!list.length) { const s = $("#timeline"); if (s) s.hidden = true; return; }
    list.forEach((t, i) => {
      const li = mk("li"); li.style.transitionDelay = i * 100 + "ms";
      const b = mk("div", "box");
      if (t.date) b.appendChild(mk("time", "", t.date));
      b.appendChild(mk("h3", "", t.title || "")); b.appendChild(mk("p", "", t.text || ""));
      if (t.image) { const im = new Image(); im.alt = t.title || "Memory"; im.loading = "lazy"; im.onerror = () => im.remove(); im.src = t.image; b.appendChild(im); }
      li.appendChild(b); ol.appendChild(li);
    });
  });

  /* ---------- Cake ---------- */
  const cake = $("#cake"), blow = $("#blowBtn"), relight = $("#relightBtn"), wish = $("#wishMsg");
  if (blow) blow.addEventListener("click", () => {
    if (!cake || cake.classList.contains("out")) return;
    cake.classList.add("out"); confetti(); hearts(14);
    if (wish) wish.classList.add("show");
    /* the button lights up, then the "relight" button slides in and glows */
    blow.disabled = true; blow.classList.add("lit");
    setTimeout(() => {
      blow.hidden = true; blow.disabled = false; blow.classList.remove("lit");
      if (relight) { relight.hidden = false; relight.classList.remove("slide"); void relight.offsetWidth; relight.classList.add("slide"); relight.focus(); }
    }, reduce ? 0 : 1000);
  });
  if (relight) relight.addEventListener("click", () => {
    if (cake) cake.classList.remove("out");
    if (wish) wish.classList.remove("show");
    relight.hidden = true; relight.classList.remove("slide");
    if (blow) { blow.hidden = false; blow.focus(); }
  });

  /* ---------- Drawer (menu at the top-left) ---------- */
  const menuBtn = $("#menuBtn"), drawerBackdrop = $("#drawerBackdrop"), root = document.documentElement;
  function drawerSet(o) {
    root.classList.toggle("drawer-open", o);
    if (menuBtn) { menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.setAttribute("aria-label", o ? "Close menu" : "Open menu"); }
    if (o) { const f = $("#drawer .btn"); if (f) setTimeout(() => f.focus(), 60); }
    else if (menuBtn && document.activeElement && document.activeElement.closest && document.activeElement.closest("#drawer")) menuBtn.focus();
  }
  function closeDrawer() { if (root.classList.contains("drawer-open")) drawerSet(false); }
  if (menuBtn) menuBtn.addEventListener("click", () => drawerSet(!root.classList.contains("drawer-open")));
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  /* ---------- Final section ---------- */
  const cel = $("#celebrateBtn"), sec = $("#secretBtn");
  /* The button lights up (steady, no movement), then the pop-up opens */
  function glow(btn) { btn.classList.remove("lit"); void btn.offsetWidth; btn.classList.add("lit"); setTimeout(() => btn.classList.remove("lit"), 1000); }
  const wait = reduce ? 0 : 800; /* time to enjoy the light before the drawer closes and the pop-up opens */
  if (cel) cel.addEventListener("click", () => { if (audio) audio.currentTime = 0; tryPlay(); /* start the music right in the tap so phones allow it */ glow(cel); setTimeout(() => { closeDrawer(); if (!current) celebrateStart(); }, wait); });
  if (sec) sec.addEventListener("click", () => {
    glow(sec); secretStart(); /* audio starts right away so phones allow it */
    setTimeout(() => { closeDrawer(); if (!current) { hearts(8); openModal($("#secret")); } }, wait);
  });


  /* ---------- Audio for "One Last Surprise" ---------- */
  let sAudio = null, sResume = false;
  function secretEnd() { if (sResume && audio) audio.play().catch(() => {}); sResume = false; }
  function secretStop() { if (sAudio) sAudio.pause(); secretEnd(); }
  function secretStart() {
    if (!C.secretAudio) return;
    try {
      if (!sAudio) { sAudio = new Audio(C.secretAudio); sAudio.addEventListener("ended", secretEnd); sAudio.addEventListener("error", secretEnd); }
      sResume = !!audio && !audio.paused; if (sResume) audio.pause();
      sAudio.currentTime = 0;
      const p = sAudio.play(); if (p && p.catch) p.catch(secretEnd);
    } catch (e) { secretEnd(); }
  }


  /* ---------- Celebrate: pretty birthday text pop-up ---------- */
  function celebrateStart() {
    confetti(); hearts(6);
    const el = $("#celebrate"), t = $("#celTitle"); if (!el) return;
    if (t) {
      const text = String(C.celebrateText || "").trim();
      const words = text.split(/\s+/).filter(Boolean);
      const k = words.findIndex((w) => /^\d+(st|nd|rd|th)$/i.test(w));
      /* Layout: [before number] / [number] / [next word] / [the rest] */
      const lines = k >= 0 ? [words.slice(0, k).join(" "), words[k], words[k + 1] || "", words.slice(k + 2).join(" ")] : [text];
      t.textContent = ""; t.setAttribute("aria-label", text);
      lines.filter(Boolean).forEach((l, i) => { const s = mk("span", "cl cl" + (k >= 0 ? i + 1 : 4), l); s.style.setProperty("--i", i); t.appendChild(s); });
    }
    openModal(el);
  }

  /* ---------- Countdown (local time, month/day only) ---------- */
  safe(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(C.birthdayDate || "");
    const box = $("#countdown"); if (!box || !m) return;
    const mo = +m[2] - 1, d = +m[3], chk = new Date(+m[1], mo, d);
    if (chk.getMonth() !== mo || chk.getDate() !== d) return; /* invalid date: stay hidden */
    const when = (y) => { const t = new Date(y, mo, d); return t.getMonth() === mo ? t : new Date(y, mo + 1, 0); }; /* Feb 29 → Feb 28 in non-leap years */
    const grid = $("#cdGrid"); let timer = 0;
    const stop = () => { if (timer) { clearInterval(timer); timer = 0; } };
    box.hidden = false;
    function tick() {
      const now = new Date(), y = now.getFullYear();
      const today = new Date(y, now.getMonth(), now.getDate()), tgt = when(y);
      if (today.getTime() === tgt.getTime()) { grid.hidden = true; setText("#cdText", "🎉 Today is your birthday, my love! 🎉"); stop(); return; }
      let next = tgt;
      if (tgt < today) {
        if (C.countdownMode !== "next") { grid.hidden = true; setText("#cdText", "Every day with you feels like a celebration. 💗"); stop(); return; }
        next = when(y + 1);
      }
      const diff = Math.max(0, next - now), s = Math.floor(diff / 1000);
      grid.hidden = false; setText("#cdText", "Counting down to your special day…");
      setText("#cdD", Math.floor(s / 86400)); setText("#cdH", Math.floor(s % 86400 / 3600));
      setText("#cdM", Math.floor(s % 3600 / 60)); setText("#cdS", s % 60);
    }
    tick(); if (grid.hidden === false || !timer) timer = setInterval(tick, 1000);
    /* If tick already stopped (birthday today / greeting), the interval would restart — clear it. */
    const t0 = new Date(); if (new Date(t0.getFullYear(), t0.getMonth(), t0.getDate()).getTime() === when(t0.getFullYear()).getTime() || (C.countdownMode !== "next" && when(t0.getFullYear()) < new Date(t0.getFullYear(), t0.getMonth(), t0.getDate()))) stop();
    window.addEventListener("pagehide", stop);
  });

  /* Offline support / home-screen install (only works on a real http(s) website, not a file) */
  if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  syncMusic();
  if (!document.documentElement.classList.contains("js")) observe();
})();
