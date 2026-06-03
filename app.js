const gameCdnBase = "https://gl.githack.com/3kh0/3kh0-assets/raw/main/";
const imageBase = "https://gitlab.com/3kh0/3kh0-assets/-/raw/main/";
const friendBase = "https://geodmeeee.github.io/forksnspoons/";
const colors = ["#55f0b2", "#ffd166", "#77d5ff", "#ff665c"];

const games = [
  ["2048", "2048", "Puzzle"],
  ["2048 Multitask", "2048-multitask", "Puzzle"],
  ["10 Minutes Till Dawn", "games/Ten Minutes Till Dawn/index.html", "images/Ten Minutes Till Dawn.png", "Action", "friend"],
  ["Achievement Unlocked", "achievementunlocked", "Platform"],
  ["A Dark Room", "adarkroom", "Strategy"],
  ["Adventure Drivers", "games/Adventure Drivers/index.html", "images/Adventure Drivers.png", "Racing", "friend"],
  ["Alien Hominid", "alienhominid", "Action"],
  ["Align 4", "align-4", "Board"],
  ["Avalanche", "avalanche", "Arcade"],
  ["Bad Ice Cream", "games/Bad Ice Cream/index.html", "images/Bad Ice Cream.png", "Arcade", "friend"],
  ["Bad Ice Cream 2", "games/Bad Ice Cream 2/index.html", "images/Bad Ice Cream 2.png", "Arcade", "friend"],
  ["Bad Ice Cream 3", "games/Bad Ice Cream 3/index.html", "images/Bad Ice Cream 3.png", "Arcade", "friend"],
  ["Basketball Stars", "games/BasketBall Stars/index.html", "images/Basketball Stars.png", "Sports", "friend"],
  ["BitLife", "games/Bitlife/index.html", "images/Bitlife.png", "Sim", "friend"],
  ["Black Knight", "blackknight", "Action"],
  ["Bloons TD", "bloonstd", "Strategy"],
  ["Bloons TD 2", "bloonstd2", "Strategy"],
  ["Bloxors", "bloxors", "Puzzle"],
  ["Boxhead 2Play", "boxhead2play", "Action"],
  ["Breaking the Bank", "breakingthebank", "Story"],
  ["Champion Island", "champion-island", "Adventure"],
  ["Cookie Clicker", "cookie-clicker", "Clicker"],
  ["Core Ball", "core-ball", "Arcade"],
  ["Creative Kill Chamber", "creativekillchamber", "Action"],
  ["CSGO Clicker", "csgo-clicker", "Clicker"],
  ["Cupcake 2048", "cupcake2048", "Puzzle"],
  ["Duck Life 3", "ducklife3", "Sim"],
  ["Fancy Pants Adventures", "fancypantsadventures", "Platform"],
  ["Fleeing the Complex", "fleeingthecomplex", "Story"],
  ["Impossible Quiz", "impossiblequiz", "Puzzle"],
  ["Learn to Fly", "learntofly", "Arcade"],
  ["Minesweeper", "minesweeper", "Puzzle"],
  ["Papa's Pizzeria", "papaspizzaria", "Sim"],
  ["Paper.io 2", "paperio2", "Arcade"],
  ["Portal Flash", "portalflash", "Puzzle"],
  ["Riddle School", "riddleschool", "Story"],
  ["Wordle", "wordle", "Word"],
].map(([title, slug, imageOrCategory, category, source], index) => ({
  title,
  slug,
  category: source === "friend" ? category : imageOrCategory,
  source: source || "3kh0",
  url: source === "friend" ? `${friendBase}${encodePath(slug)}` : `${gameCdnBase}${encodePath(slug)}/index.html`,
  image: source === "friend" ? `${friendBase}${encodePath(imageOrCategory)}` : `${imageBase}${encodePath(slug)}/thumb.png`,
  fallbackImage: source === "friend" ? `${friendBase}${encodePath(imageOrCategory)}` : `${imageBase}${encodePath(slug)}/${encodeURIComponent(slug.split("/").pop())}.png`,
  accent: colors[index % colors.length]
}));

const grid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const categoryBar = document.querySelector("#categoryBar");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const dialog = document.querySelector("#playerDialog");
const frame = document.querySelector("#gameFrame");
const playerTitle = document.querySelector("#playerTitle");
const playerMeta = document.querySelector("#playerMeta");
const closeButton = document.querySelector("#closeButton");
const fullscreenButton = document.querySelector("#fullscreenButton");

let activeCategory = "All";

function categories() {
  return ["All", ...new Set(games.map((game) => game.category).sort())];
}

function renderCategories() {
  categoryBar.innerHTML = "";
  categories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      render();
    });
    categoryBar.append(button);
  });
}

function filteredGames() {
  const query = searchInput.value.trim().toLowerCase();
  return games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const matchesQuery = `${game.title} ${game.category} ${game.slug}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}

function render() {
  renderCategories();
  const visible = filteredGames();
  grid.innerHTML = "";
  resultTitle.textContent = activeCategory === "All" ? "All Games" : activeCategory;
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "game" : "games"}`;

  visible.forEach((game) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "game-card";
    card.style.setProperty("--accent", game.accent);
    card.innerHTML = `
      <span class="thumb-wrap">
        <img src="${game.image}" alt="" loading="lazy" data-fallback="${game.fallbackImage}">
        <span class="thumb-fallback">${escapeHtml(game.title)}</span>
      </span>
      <strong>${escapeHtml(game.title)}</strong>
      <span>${escapeHtml(game.category)}</span>
    `;
    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      if (!image.dataset.triedFallback) {
        image.dataset.triedFallback = "true";
        image.src = image.dataset.fallback;
      } else {
        image.hidden = true;
      }
    });
    card.addEventListener("click", () => openGame(game));
    grid.append(card);
  });
}

function openGame(game) {
  playerTitle.textContent = game.title;
  playerMeta.textContent = `${game.category} | Credit: ${game.source === "friend" ? "Forks N Frogz" : "3kh0 Assets"}`;
  frame.src = game.url;
  dialog.showModal();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function encodePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}


function startClouds() {
  if (!window.VANTA?.CLOUDS) return;
  window.VANTA.CLOUDS({
    el: "#cloudBackground",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    skyColor: 0x0f1764,
    cloudColor: 0xadd9de,
    cloudShadowColor: 0x183050,
    sunColor: 0xff8f19,
    sunGlareColor: 0xff6c33,
    sunlightColor: 0xffad53,
    speed: 1,
    scale: 3,
    scaleMobile: 12,
    backgroundAlpha: 1
  });
}

searchInput.addEventListener("input", render);
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  frame.src = "about:blank";
});
fullscreenButton.addEventListener("click", () => {
  if (frame.requestFullscreen) frame.requestFullscreen();
});

startClouds();
render();
