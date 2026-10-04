document.documentElement.classList.add("js");
const $ = id => document.getElementById(id);
const page = document.body.dataset.page;
const now = new Date();
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Shared header and footer (same on every page)
const ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230A1628'/%3E%3Cpath d='M28 10h8v14h14v8H36v22h-8V32H14v-8h14z' fill='%23E8B84A'/%3E%3C/svg%3E";
const menu = [["index", "Home"], ["about", "About"], ["gospel", "Gospel"], ["encouragement", "Encouragement"], ["service", "Service"], ["education", "Education"], ["achievements", "Achievements"], ["contact", "Contact"]];
$("site-header").outerHTML =
  '<header class="site-header"><a class="brand" href="index.html"><img src="' + ICON + '" alt="" width="28" height="28"><span>Vincent Ferreras</span></a>' +
  '<nav id="nav" aria-label="Main"><ul class="nav-list">' +
  menu.map(function (m) { return '<li><a href="' + m[0] + '.html"' + (m[0] === page ? ' class="active" aria-current="page"' : "") + ">" + m[1] + "</a></li>"; }).join("") +
  '</ul></nav><div class="controls"><button id="theme-btn" class="ctl" type="button" aria-pressed="true">Light mode</button>' +
  '<button id="menu-btn" class="ctl" type="button" aria-expanded="false" aria-controls="nav">Menu</button></div></header><div id="progress"></div>';
$("site-footer").outerHTML = '<footer class="site-footer"><p>&copy; 2026 Vincent Ferreras. City College of Calamba.</p></footer>';

// 2. Theme button (remembered on all pages)
const themeBtn = $("theme-btn");
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  themeBtn.textContent = mode === "dark" ? "Light mode" : "Dark mode";
  themeBtn.setAttribute("aria-pressed", String(mode === "dark"));
  try { localStorage.setItem("theme", mode); } catch (e) { /* ignore */ }
}
let saved = "dark";
try { saved = localStorage.getItem("theme") || "dark"; } catch (e) { /* ignore */ }
setTheme(saved);
themeBtn.addEventListener("click", function () {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// 3. Mobile menu and scroll progress bar
const nav = $("nav"), menuBtn = $("menu-btn");
menuBtn.addEventListener("click", function () {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
window.addEventListener("scroll", function () {
  const h = document.documentElement;
  $("progress").style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100 + "%";
});

// 4. Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add("in"); });
}

// 5. Filter buttons (used by Encouragement and Service pages)
function setupFilters() {
  document.querySelectorAll(".filters").forEach(function (group) {
    const chips = group.querySelectorAll(".chip");
    const cards = $(group.dataset.target).querySelectorAll(".card");
    const limit = Number(group.dataset.limit || 0);
    const moreBtn = limit ? $(group.dataset.more) : null;
    let filter = "all", expanded = false;
    function apply() {
      let shown = 0, matching = 0;
      cards.forEach(function (card) {
        const match = filter === "all" || card.dataset.cat === filter;
        if (match) { matching++; }
        const show = match && (!limit || expanded || shown < limit);
        if (show) { shown++; }
        card.classList.toggle("hidden", !show);
      });
      if (moreBtn) {
        moreBtn.hidden = matching <= limit;
        moreBtn.textContent = expanded ? "Show fewer verses" : "Show all " + matching + " verses";
      }
    }
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        filter = chip.dataset.filter;
        expanded = false;
        chips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        apply();
      });
    });
    if (moreBtn) { moreBtn.addEventListener("click", function () { expanded = !expanded; apply(); }); }
    apply();
  });
}

// 6. Page-specific code
if (page === "index") {
  // Typing animation
  const phrases = ["Computer Science student.", "B.Y.S.C. President.", "Servant leader."];
  const typed = $("typed");
  let phraseIndex = 0, charIndex = 0, deleting = false;
  (function type() {
    const current = phrases[phraseIndex];
    if (reduceMotion) { typed.textContent = current; return; }
    charIndex += deleting ? -1 : 1;
    typed.textContent = current.slice(0, charIndex);
    let delay = deleting ? 40 : 80;
    if (!deleting && charIndex === current.length) { deleting = true; delay = 1600; }
    else if (deleting && charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 400; }
    setTimeout(type, delay);
  })();

  // Verse of the day + button for another verse
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  let verseIndex = dayOfYear % verses.length;
  const vText = $("verse-text"), vRef = $("verse-ref");
  $("verse-label").textContent = "// Verse of the day: " + now.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  function showVerse(i) {
    vText.textContent = '"' + verses[i].text + '"';
    vRef.textContent = '"' + verses[i].ref + '"';
  }
  showVerse(verseIndex);
  $("verse-btn").addEventListener("click", function () {
    verseIndex = (verseIndex + 1) % verses.length;
    vText.classList.add("fade");
    setTimeout(function () { showVerse(verseIndex); vText.classList.remove("fade"); }, 250);
  });

  // Quick facts with count-up animation
  const facts = [
    { n: now.getFullYear() - 2014, label: "years serving in church" },
    { n: roles.length, label: "roles and memberships" },
    { n: 14, label: "schools taught evangelism" },
    { n: seasons.length, label: "encouraging verses (KJV)" }
  ];
  $("stats").innerHTML = facts.map(function (f) {
    return '<div class="stat"><b data-to="' + f.n + '">0</b><span>' + f.label + "</span></div>";
  }).join("");
  document.querySelectorAll(".stat b").forEach(function (el) {
    const to = Number(el.dataset.to);
    if (reduceMotion) { el.textContent = to; return; }
    const start = performance.now();
    function tick(t) {
      const p = Math.min((t - start) / 1200, 1);
      el.textContent = Math.round(to * p);
      if (p < 1) { requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
  });
}

if (page === "gospel") {
  $("step-list").innerHTML = steps.map(function (s, i) {
    return '<details class="step"' + (i === 0 ? " open" : "") + "><summary>" + (i + 1) + ". " + s.title +
      '</summary><div class="body"><blockquote class="verse">&ldquo;' + s.text + "&rdquo; " + s.ref +
      " KJV</blockquote><p>" + s.note + "</p></div></details>";
  }).join("");
}

if (page === "encouragement") {
  $("verse-list").innerHTML = seasons.map(function (s) {
    return '<article class="card" data-cat="' + s[0] + '"><p class="when">' + s[1].toUpperCase() +
      '</p><blockquote class="verse">&ldquo;' + s[3] + "&rdquo; " + s[2] + " KJV</blockquote><p>" + s[4] + "</p></article>";
  }).join("");
  setupFilters();
}

if (page === "service") {
  $("role-list").innerHTML = roles.map(function (r) {
    const heading = r.link ? '<a href="' + r.link + '" target="_blank" rel="noopener">' + r.title + "</a>" : r.title;
    return '<article class="card" data-cat="' + r.cat + '"><h3>' + heading + "</h3><p>" + r.where + '</p><p class="years">' + r.years + "</p></article>";
  }).join("");
  setupFilters();
}

if (page === "contact") {
  const form = $("contact-form");
  function showError(id, message) {
    $(id + "-error").textContent = message;
    $(id).classList.toggle("invalid", message !== "");
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = $("name").value.trim();
    const email = $("email").value.trim();
    const message = $("message").value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    showError("name", name === "" ? "Please enter your name." : "");
    showError("email", emailOk ? "" : "Please enter a valid email address.");
    showError("message", message.length < 10 ? "Message must be at least 10 characters." : "");
    const status = $("form-status");
    if (name === "" || !emailOk || message.length < 10) { status.textContent = ""; return; }
    status.textContent = "Sending...";
        fetch("/contact.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    }).then(function (res) {
      if (!res.ok) { throw new Error("Failed"); }
      status.textContent = "Thank you, " + name + ". Your message was sent.";
      form.reset();
    }).catch(function () {
      status.textContent = "Could not send right now. Please use the email link above.";
    });
  });
}