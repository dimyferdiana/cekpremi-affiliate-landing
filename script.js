"use strict";

// Browser-local prototype interactions. No registration form, analytics, or data submission.
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka menu navigasi");
  mobileNav.hidden = true;
}
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menuButton.setAttribute("aria-label", expanded ? "Buka menu navigasi" : "Tutup menu navigasi");
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 1001px)").addEventListener("change", event => {
  if (event.matches) closeMenu();
});

// Prototype activity ticker. In production, these messages must be supplied only
// from completed, privacy-safe reward or redemption events on the server.
const activityMessages = [
  {message: "R*** menukar voucher game", time: "2 menit lalu", dateTime: "PT2M"},
  {message: "A*** menerima Reward Points", time: "5 menit lalu", dateTime: "PT5M"},
  {message: "D*** mengajukan redeem penghasilan", time: "9 menit lalu", dateTime: "PT9M"}
];
const activityMessage = document.querySelector("[data-activity-message]");
const activityTime = document.querySelector("[data-activity-time]");
let activityIndex = 0;
function updateActivityMessage() {
  const activity = activityMessages[activityIndex];
  activityMessage.textContent = activity.message;
  activityTime.textContent = activity.time;
  activityTime.dateTime = activity.dateTime;
  activityIndex = (activityIndex + 1) % activityMessages.length;
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(updateActivityMessage, 6500);
}

const rewardContent = {
  points: {
    title: "Reward Points",
    heading: "Poin yang mencatat reward kamu.",
    description: "Reward Points (RP) diperoleh melalui aktivitas sesuai ketentuan program. Poin yang tercatat perlu dibedakan dari penghasilan yang sudah memenuhi syarat untuk ditarik.",
    items: ["Periksa sumber aktivitas dan status poin pada akun kamu.", "Periksa aturan konversi dan syarat penarikan yang berlaku.", "Poin dalam demo merupakan simulasi dan tidak dapat ditukar atau ditarik."]
  },
  voucher: {
    title: "Voucher game",
    heading: "Akses aktivitas, dengan aturan tersendiri.",
    description: "Voucher digunakan untuk mengakses permainan dalam program. Cara memperoleh, jumlah, dan penggunaan voucher mengikuti aktivitas serta promo yang berlaku.",
    items: ["Voucher berbeda dari saldo rupiah atau penghasilan siap tarik.", "Periksa jumlah voucher yang dibutuhkan sebelum bermain.", "Voucher demo berasal dari simulasi; ketentuannya berbeda dari akun sesungguhnya."]
  },
  income: {
    title: "Penghasilan & penarikan",
    heading: "Pastikan semua persyaratannya terpenuhi.",
    description: "Menurut informasi program Cekpremi, pengajuan penarikan memerlukan akun terverifikasi dan saldo yang memenuhi batas minimum. Reward Points tidak otomatis menjadi penghasilan siap tarik.",
    items: ["Periksa status reward, nilai minimum, serta ketentuan konversi terbaru.", "Pahami proses verifikasi identitas dan rekening yang terdaftar.", "Periksa ketentuan program dan perpajakan yang relevan pada situs resmi."]
  }
};

const rewardDialog = document.querySelector("#reward-dialog");
const rewardPanel = document.querySelector("#reward-panel");
const tabs = [...document.querySelectorAll("[data-tab]")];
function selectReward(type) {
  const content = rewardContent[type];
  document.querySelector("#reward-dialog-title").textContent = content.title;
  rewardPanel.setAttribute("aria-labelledby", `tab-${type}`);
  rewardPanel.replaceChildren();
  const heading = document.createElement("h3");
  heading.textContent = content.heading;
  const description = document.createElement("p");
  description.textContent = content.description;
  const list = document.createElement("ul");
  content.items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
  rewardPanel.append(heading, description, list);
  tabs.forEach(tab => {
    const selected = tab.dataset.tab === type;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
}

function openDialog(dialog) {
  closeMenu();
  dialog.showModal();
  document.body.classList.add("modal-open");
}
document.querySelectorAll("[data-reward]").forEach(button => {
  button.addEventListener("click", () => {
    selectReward(button.dataset.reward);
    openDialog(rewardDialog);
  });
});
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectReward(tab.dataset.tab));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectReward(tabs[next].dataset.tab);
      tabs[next].focus();
    }
  });
});
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openDialog(document.querySelector(`#${button.dataset.open}-dialog`)));
});
document.querySelectorAll("dialog").forEach(dialog => {
  dialog.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => dialog.close()));
  dialog.addEventListener("click", event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (!document.querySelector("dialog[open]")) document.body.classList.remove("modal-open");
  });
});
selectReward("points");

// Game artwork and animation come from the observed Cekpremi public catalog.
// This showcase never runs a game or consumes vouchers. Demo actions lead to its public catalog.
const games = {
  garden: {name:"Garden of Olympus",description:"Jelajahi permainan bertema taman dan simbol buah. Kenali mekanik, penggunaan voucher, serta ketentuan reward pada demo resmi.",cover:"assets/games/garden-cover.webp",preview:"assets/games/garden-preview.webp"},
  mahjong: {name:"Mahjong Festival",description:"Kenali permainan dengan visual ubin mahjong. Pelajari mekanik, penggunaan voucher, serta ketentuan reward melalui demo resmi.",cover:"assets/games/mahjong-cover.webp",preview:"assets/games/mahjong-preview.webp"},
  immortal: {name:"Immortal Auto 777",description:"Jelajahi permainan bertema otomotif dengan visual mobil dan spare part. Baca mekanik, penggunaan voucher, serta ketentuan reward sebelum mencoba.",cover:"assets/games/immortal-cover.webp",preview:"assets/games/immortal-preview.webp"}
};
let selectedGame = "garden";
let previewPlaying = false;
const gameTabs = [...document.querySelectorAll("[data-game]")];
const gameImage = document.querySelector("#featured-game-image");
const gameVisual = document.querySelector(".game-visual");
const previewToggle = document.querySelector("#preview-toggle");
function setPreview(playing) {
  previewPlaying = playing;
  gameImage.src = playing ? games[selectedGame].preview : games[selectedGame].cover;
  gameImage.alt = `${playing ? "Preview animasi" : "Artwork asli"} ${games[selectedGame].name} dari katalog Cekpremi.`;
  gameVisual.classList.toggle("is-playing", playing);
  previewToggle.setAttribute("aria-pressed", String(playing));
  previewToggle.querySelector("span").textContent = playing ? "Hentikan preview" : "Putar preview";
  document.querySelector("#preview-status").textContent = playing ? "Preview animasi · bukan game interaktif" : "Artwork game";
}
function selectGame(key) {
  selectedGame = key;
  gameVisual.dataset.theme = key;
  setPreview(false);
  document.querySelector("#featured-game-title").textContent = games[key].name;
  document.querySelector("#featured-game-description").textContent = games[key].description;
  document.querySelector("#featured-game").setAttribute("aria-labelledby", `game-tab-${key}`);
  gameTabs.forEach(tab => {
    const selected = tab.dataset.game === key;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    [document.querySelector(".featured-copy"), gameImage].forEach(element => {
      element.getAnimations().forEach(animation => animation.cancel());
      element.animate([
        {opacity: .4, transform: "translateY(7px)"},
        {opacity: 1, transform: "translateY(0)"}
      ], {duration: 380, easing: "cubic-bezier(.22,1,.36,1)"});
    });
  }
}
gameTabs.forEach((tab,index) => {
  tab.addEventListener("click", () => selectGame(tab.dataset.game));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % gameTabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + gameTabs.length) % gameTabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = gameTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectGame(gameTabs[next].dataset.game);
      gameTabs[next].focus();
    }
  });
});
previewToggle.addEventListener("click", () => setPreview(!previewPlaying));
document.addEventListener("visibilitychange", () => {
  if (document.hidden && previewPlaying) setPreview(false);
});
const previewObserver = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting && previewPlaying) setPreview(false);
});
previewObserver.observe(gameVisual);
const gameDetailDialog = document.querySelector("#game-detail-dialog");
function showGameDetails() {
  setPreview(false);
  document.querySelector("#game-detail-title").textContent = games[selectedGame].name;
  document.querySelector("#game-detail-description").textContent = games[selectedGame].description;
  document.querySelector("#game-detail-cover").src = games[selectedGame].cover;
  openDialog(gameDetailDialog);
}
document.querySelectorAll("[data-demo],[data-game-details]").forEach(button => button.addEventListener("click",showGameDetails));

// Pause ambient animation outside the viewport and in hidden browser tabs.
const heroArtwork = document.querySelector(".campaign-art");
let heroInView = true;
function updateHeroMotion() {
  heroArtwork.classList.toggle("motion-paused", document.hidden || !heroInView);
}
const heroMotionObserver = new IntersectionObserver(entries => {
  heroInView = entries[0].isIntersecting;
  updateHeroMotion();
}, {threshold: 0});
heroMotionObserver.observe(heroArtwork);
document.addEventListener("visibilitychange", updateHeroMotion);
