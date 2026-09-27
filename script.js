const scenes = document.querySelectorAll(".scene");
const nextButtons = document.querySelectorAll("[data-next]");

const celebration = document.getElementById("celebration");
const celebrateBtn = document.getElementById("celebrateBtn");
const closeCelebration = document.getElementById("closeCelebration");

let currentScene = 0;

function showScene(index) {
  if (index < 0 || index >= scenes.length) return;

  scenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === index);
  });

  currentScene = index;
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.next);

    if (!target) return;

    showScene(target - 1);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showScene(currentScene + 1);
  }

  if (event.key === "ArrowLeft") {
    showScene(currentScene - 1);
  }
});

let startX = 0;

document.addEventListener("touchstart", (event) => {
  startX = event.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX;
  const distance = endX - startX;

  if (Math.abs(distance) < 60) return;

  if (distance < 0) {
    showScene(currentScene + 1);
  } else {
    showScene(currentScene - 1);
  }
}, { passive: true });

function createParticles() {
  const container = document.querySelector(".particles");

  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration =
      Math.random() * 8 + 8 + "s";

    container.appendChild(particle);
  }
}

createParticles();

function createStars() {
  const container = document.getElementById("stars");

  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    container.appendChild(star);
  }
}

function createConfetti() {
  const container = document.getElementById("confetti");

  if (!container) return;

  container.innerHTML = "";

  const symbols = ["✦", "✧", "♡", "✿", "•", "⋆"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(piece);
  }
}

celebrateBtn?.addEventListener("click", () => {
  createStars();
  createConfetti();

  celebration?.classList.add("show");
});

closeCelebration?.addEventListener("click", () => {
  celebration?.classList.remove("show");
});

showScene(0);
