const gameCdnBase = "https://gl.githack.com/3kh0/3kh0-assets/raw/main/";
const imageBase = "https://gitlab.com/3kh0/3kh0-assets/-/raw/main/";
const colors = ["#55f0b2", "#ffd166", "#77d5ff", "#ff665c"];

const games = [
  ["2048", "2048", "Puzzle"],
  ["2048 Multitask", "2048-multitask", "Puzzle"],
  ["10 Minutes Till Dawn", "10-minutes-till-dawn", "Action"],
  ["1v1.LOL", "1v1lol", "Shooter"],
  ["99 Balls", "99balls", "Arcade"],
  ["Achievement Unlocked", "achievementunlocked", "Platform"],
  ["A Dark Room", "adarkroom", "Strategy"],
  ["Adventure Drivers", "adventure-drivers", "Racing"],
  ["Ages of Conflict", "ages-of-conflict", "Strategy"],
  ["Alien Hominid", "alienhominid", "Action"],
  ["Align 4", "align-4", "Board"],
  ["Amazing Rope Police", "amazing-rope-police", "Action"],
  ["Among Us", "among-us", "Party"],
  ["Angry Sharks", "angry-sharks", "Arcade"],
  ["Avalanche", "avalanche", "Arcade"],
  ["Awesome Tanks 2", "awesometanks2", "Action"],
  ["Backrooms", "backrooms", "Horror"],
  ["Bacon May Die", "bacon-may-die", "Action"],
  ["Bad Ice Cream", "bad-ice-cream", "Arcade"],
  ["Bad Ice Cream 2", "bad-ice-cream-2", "Arcade"],
  ["Bad Ice Cream 3", "bad-ice-cream-3", "Arcade"],
  ["Baldi's Basics", "baldis-basics", "Horror"],
  ["Basket Random", "basket-random", "Sports"],
  ["Basketball Stars", "basketball-stars", "Sports"],
  ["Basket Bros", "basketbros-io", "Sports"],
  ["BitLife", "bitlife", "Sim"],
  ["Black Knight", "blackknight", "Action"],
  ["Bloons TD", "bloonstd", "Strategy"],
  ["Bloons TD 2", "bloonstd2", "Strategy"],
  ["Bloxors", "bloxors", "Puzzle"],
  ["Bob the Robber 2", "bobtherobber2", "Stealth"],
  ["Bonk.io", "bonkio", "Multiplayer"],
  ["Boxhead 2Play", "boxhead2play", "Action"],
  ["Boxing Random", "boxing-random", "Sports"],
  ["Breaking the Bank", "breakingthebank", "Story"],
  ["BTD 4", "btd4", "Strategy"],
  ["BTD 5", "btd5", "Strategy"],
  ["Burger and Frights", "burger-and-frights", "Horror"],
  ["Cannon Basketball 4", "cannon-basketball-4", "Sports"],
  ["Cars Simulator", "cars-simulator", "Racing"],
  ["Cell Machine", "cell-machine", "Puzzle"],
  ["Champion Island", "champion-island", "Adventure"],
  ["Checkers", "checkers", "Board"],
  ["Chess", "chess", "Board"],
  ["Chrome Dino", "chrome-dino", "Arcade"],
  ["Classicube", "classicube", "Sandbox"],
  ["Cluster Rush", "cluster-rush", "Platform"],
  ["Connect 3", "connect3", "Puzzle"],
  ["Cookie Clicker", "cookie-clicker", "Clicker"],
  ["Core Ball", "core-ball", "Arcade"],
  ["CraftMine", "craftmine", "Sandbox"],
  ["Creative Kill Chamber", "creativekillchamber", "Action"],
  ["Crossy Road", "crossyroad", "Arcade"],
  ["CSGO Clicker", "csgo-clicker", "Clicker"],
  ["Cubefield", "cubefield", "Arcade"],
  ["Cupcake 2048", "cupcake2048", "Puzzle"],
  ["Death Run 3D", "death-run-3d", "Runner"],
  ["Deepest Sword", "deepest-sword", "Adventure"],
  ["Doodle Jump", "doodle-jump", "Arcade"],
  ["Doge Miner", "DogeMiner", "Clicker"],
  ["Doge Miner 2", "Dogeminer2", "Clicker"],
  ["Drift Boss", "drift-boss", "Racing"],
  ["Drift Hunters", "drift-hunters", "Racing"],
  ["Drive Mad", "drive-mad", "Racing"],
  ["Duck Life", "ducklife1", "Sim"],
  ["Duck Life 2", "ducklife2", "Sim"],
  ["Duck Life 3", "ducklife3", "Sim"],
  ["Duck Life 4", "ducklife4", "Sim"],
  ["Escaping the Prison", "escapingtheprison", "Story"],
  ["Factory Balls", "factoryballs", "Puzzle"],
  ["Fancy Pants Adventures", "fancypantsadventures", "Platform"],
  ["Fireboy and Watergirl", "fireboywatergirlforesttemple", "Puzzle"],
  ["Flappy Bird", "flappy-bird", "Arcade"],
  ["Fleeing the Complex", "fleeingthecomplex", "Story"],
  ["Friday Night Funkin", "fridaynightfunkin", "Rhythm"],
  ["Fruit Ninja", "fruitninja", "Arcade"],
  ["Geometry Dash", "geodash", "Runner"],
  ["Getaway Shootout", "getaway-shootout", "Action"],
  ["Google Snake", "google-snake", "Arcade"],
  ["Happy Wheels", "happywheels", "Physics"],
  ["HexGL", "HexGL", "Racing"],
  ["Idle Breakout", "idle-breakout", "Clicker"],
  ["Impossible Quiz", "impossiblequiz", "Puzzle"],
  ["Jetpack Joyride", "jetpack-joyride", "Runner"],
  ["Learn to Fly", "learntofly", "Arcade"],
  ["Line Rider", "linerider", "Sandbox"],
  ["Madalin Stunt Cars 2", "madalin-stunt-cars-2", "Racing"],
  ["Minecraft Classic", "minecraft-classic", "Sandbox"],
  ["Minesweeper", "minesweeper", "Puzzle"],
  ["Moto X3M", "motox3m", "Racing"],
  ["Moto X3M 2", "motox3m2", "Racing"],
  ["Monkey Mart", "MonkeyMart", "Sim"],
  ["OvO", "ovo", "Platform"],
  ["Papa's Burgeria", "papasburgeria", "Sim"],
  ["Papa's Pizzeria", "papaspizzaria", "Sim"],
  ["Paper.io 2", "paperio2", "Arcade"],
  ["Portal Flash", "portalflash", "Puzzle"],
  ["Retro Bowl", "retro-bowl", "Sports"],
  ["Riddle School", "riddleschool", "Story"],
  ["Rocket League", "Rocket-League", "Sports"],
  ["Run 2", "Run 2", "Runner"],
  ["Slope", "slope", "Runner"],
  ["Subway Surfers", "subway-surfers", "Runner"],
  ["Temple Run 2", "temple-run-2", "Runner"],
  ["Tanuki Sunset", "tanuki-sunset", "Racing"],
  ["There Is No Game", "there-is-no-game", "Puzzle"],
  ["Tiny Fishing", "tiny-fishing", "Idle"],
  ["Tunnel Rush", "tunnel-rush", "Runner"],
  ["Vex 3", "vex3", "Platform"],
  ["Vex 4", "vex4", "Platform"],
  ["Vex 5", "vex5", "Platform"],
  ["Vex 6", "vex6", "Platform"],
  ["Vex 7", "vex7", "Platform"],
  ["Volley Random", "volley-random", "Sports"],
  ["Wordle", "wordle", "Word"],
  ["World's Hardest Game", "worlds-hardest-game", "Arcade"]
].map(([title, slug, category], index) => ({
  title,
  slug,
  category,
  url: `${gameCdnBase}${encodePath(slug)}/index.html`,
  image: `${imageBase}${encodePath(slug)}/thumb.png`,
  fallbackImage: `${imageBase}${encodePath(slug)}/${encodeURIComponent(slug.split("/").pop())}.png`,
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
const randomButton = document.querySelector("#randomButton");
const focusButton = document.querySelector("#focusButton");

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
  playerMeta.textContent = `${game.category} | Credit: 3kh0 Assets`;
  frame.src = game.url;
  dialog.showModal();
}

function openRandom() {
  const visible = filteredGames();
  const list = visible.length ? visible : games;
  openGame(list[Math.floor(Math.random() * list.length)]);
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


searchInput.addEventListener("input", render);
randomButton.addEventListener("click", openRandom);
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  frame.src = "about:blank";
});
fullscreenButton.addEventListener("click", () => {
  if (frame.requestFullscreen) frame.requestFullscreen();
});
focusButton.addEventListener("click", () => {
  document.body.classList.toggle("focus");
  focusButton.textContent = document.body.classList.contains("focus") ? "Exit Focus" : "Focus Mode";
});

render();
