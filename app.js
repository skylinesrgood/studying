const gameCdnBase = "https://gl.githack.com/3kh0/3kh0-assets/raw/main/";
const imageBase = "https://gitlab.com/3kh0/3kh0-assets/-/raw/main/";
const friendBase = "https://geodmeeee.github.io/forksnspoons/";
const colors = ["#55f0b2", "#ffd166", "#77d5ff", "#ff665c"];

const games = [
  ["10 Minutes Till Dawn", "1b2druj6_Zlrdq1h9gS4oaqQwJvND4z08", "Drive Game", "drive"],
  ["1v1.lol", "16SVHF4XRFjv5WCqlLHJZhF6nkBM7q4ex", "Drive Game", "drive"],
  ["Wheelie Bike", "1Xy9-f-8KIutBbUhfoON6y2299RhqJ55a", "Drive Game", "drive"],
  ["Geometry Dash Lite", "1jvsz_EmjOTwgCcfeyPtZCfXKJn9SD2bs", "Drive Game", "drive"],
  ["Happy Wheels", "13jcuwX7tgPFaANNGs9RaSAJGZRqcVU_Q", "Drive Game", "drive"],
  ["Wheely", "1FE0CvE69h-DwtOE00YgxKM3SyuUZkuT7", "Drive Game", "drive"],
  ["Wheely 2", "1XG_AkL01BMb_h2NOCssBhU8cLExZSCCc", "Drive Game", "drive"],
  ["Wheely 3", "1m6tZTj_nkCClXu5sl5dtXXpYq7ZL1W0b", "Drive Game", "drive"],
  ["Wheely 4", "1A5Q_xlAU5x4AfHF3pn6-uAGZZRJEpy9N", "Drive Game", "drive"],
  ["Wheely 5", "1SODdbCxyU8djnI2-6NsRVjvSXikWAR74", "Drive Game", "drive"],
  ["Wheely 6", "1zyBd6eGjWRoZDFJOhTN7nbJvlghFqZm3", "Drive Game", "drive"],
  ["Wheely 7", "1go7TIoyeh0QSDol8fAie540MPK7dOwKc", "Drive Game", "drive"],
  ["Wheely 8", "1S-8EY6b87ztRKnnW82w_5BrVgXsOFwXs", "Drive Game", "drive"]
].map(([title, slug, imageOrCategory, category, source], index) => {
  const gameSource = source || (category === "drive" ? "drive" : "3kh0");
  const emptyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";

  return {
    title,
    slug,
    category: gameSource === "friend" ? category : imageOrCategory,
    source: gameSource,
    url: gameSource === "friend"
      ? `${friendBase}${encodePath(slug)}`
      : gameSource === "drive"
        ? `https://drive.google.com/file/d/${encodeURIComponent(slug)}/preview`
        : `${gameCdnBase}${encodePath(slug)}/index.html`,
    image: gameSource === "friend"
      ? `${friendBase}${encodePath(imageOrCategory)}`
      : gameSource === "drive"
        ? emptyImage
        : `${imageBase}${encodePath(slug)}/thumb.png`,
    fallbackImage: gameSource === "friend"
      ? `${friendBase}${encodePath(imageOrCategory)}`
      : gameSource === "drive"
        ? emptyImage
        : `${imageBase}${encodePath(slug)}/${encodeURIComponent(slug.split("/").pop())}.png`,
    accent: colors[index % colors.length]
  };
});

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
  playerMeta.textContent = `${game.category} | Credit: ${game.source === "friend" ? "Forks N Frogz" : game.source === "drive" ? "Google Drive file" : "3kh0 Assets"}`;
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
  if (!window.VANTA?.NET) return;
  window.VANTA.NET({
    el: "#cloudBackground",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x18ff82,
    backgroundColor: 0x000000,
    points: 20,
    maxDistance: 20,
    spacing: 15,
    showDots: true,
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
