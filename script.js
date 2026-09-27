/* =========================================
   AEESHA — BIRTHDAY EXPERIENCE
   September 27
========================================= */
const scenes = document.querySelectorAll(".scene");
const nextButtons = document.querySelectorAll("[data-next]");
const celebration = document.getElementById("celebration");
const celebrateBtn = document.getElementById("celebrateBtn");
const closeCelebration = document.getElementById("closeCelebration");
let currentScene = 0;
let isMoving = false;
/* =========================================
   SCENE NAVIGATION
========================================= */
function showScene(index) {
  if (
    index < 0 ||
    index >= scenes.length ||
    index === currentScene ||
    isMoving
  ) {
    return;
  }
  isMoving = true;
  scenes[currentScene].classList.remove("active");
  setTimeout(() => {
    scenes[index].classList.add("active");
    currentScene = index;
    setTimeout(() => {
      isMoving = false;
    }, 700);
  }, 120);
}
/* =========================================
   BUTTON NAVIGATION
========================================= */
nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.next);
    if (Number.isNaN(target)) {
      return;
    }
    showScene(target - 1);
  });
});
/* =========================================
   KEYBOARD NAVIGATION
========================================= */
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showScene(currentScene + 1);
  }
  if (event.key === "ArrowLeft") {
    showScene(currentScene - 1);
  }
});
/* =========================================
   SWIPE NAVIGATION
========================================= */
let startX = 0;
let startY = 0;
document.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    startX = touch.clientX;
    startY = touch.clientY;
  },
  {
    passive: true
  }
);
document.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    const endX = touch.clientX;
    const endY = touch.clientY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    /* Ignore vertical gestures */
    if (
      Math.abs(distanceY) >
      Math.abs(distanceX)
    ) {
      return;
    }
    /* Ignore tiny swipes */
    if (Math.abs(distanceX) < 60) {
      return;
    }
    if (distanceX < 0) {
      showScene(currentScene + 1);
    } else {
      showScene(currentScene - 1);
    }
  },
  {
    passive: true
  }
);
/* =========================================
   FLOATING PARTICLES
========================================= */
const particleContainer =
  document.querySelector(".particles");
function createParticles() {
  if (!particleContainer) {
    return;
  }
  for (let i = 0; i < 32; i++) {
    const particle =
      document.createElement("span");
    particle.className = "particle";
    const size =
      Math.random() * 3 + 1;
    const position =
      Math.random() * 100;
    const duration =
      Math.random() * 8 + 8;
    const delay =
      Math.random() * 8;
    particle.style.width =
      `${size}px`;
    particle.style.height =
      `${size}px`;
    particle.style.left =
      `${position}%`;
    particle.style.animationDuration =
      `${duration}s`;
    particle.style.animationDelay =
      `${delay}s`;
    particleContainer.appendChild(
      particle
    );
  }
}
createParticles();
/* =========================================
   FINAL CELEBRATION
========================================= */
function openCelebration() {
  if (!celebration) {
    return;
  }
  celebration.classList.add("show");
  createStars();
  createConfetti();
}
function closeCelebrationModal() {
  if (!celebration) {
    return;
  }
  celebration.classList.remove("show");
  clearStars();
  clearConfetti();
}
celebrateBtn?.addEventListener(
  "click",
  openCelebration
);
closeCelebration?.addEventListener(
  "click",
  closeCelebrationModal
);
/* =========================================
   STARS
========================================= */
const starsContainer =
  document.getElementById("stars");
function createStars() {
  if (!starsContainer) {
    return;
  }
  clearStars();
  for (let i = 0; i < 55; i++) {
    const star =
      document.createElement("span");
    star.className = "star";
    star.style.left =
      `${Math.random() * 100}%`;
    star.style.top =
      `${Math.random() * 100}%`;
    star.style.animationDelay =
      `${Math.random() * 2}s`;
    starsContainer.appendChild(
      star
    );
  }
}
function clearStars() {
  if (!starsContainer) {
    return;
  }
  starsContainer.innerHTML = "";
}
/* =========================================
   CONFETTI
========================================= */
const confettiContainer =
  document.getElementById("confetti");
function createConfetti() {
  if (!confettiContainer) {
    return;
  }
  clearConfetti();
  const symbols = [
    "✦",
    "✧",
    "♡",
    "✿",
    "•",
    "⋆"
  ];
  for (let i = 100; i > 0; i--) {
    const piece =
      document.createElement("span");
    piece.className = "confetti";
    piece.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];
    piece.style.left =
      `${Math.random() * 100}%`;
    piece.style.animationDelay =
      `${Math.random() * 1.8}s`;
    piece.style.animationDuration =
      `${Math.random() * 2 + 3}s`;
    confettiContainer.appendChild(
      piece
    );
  }
}
function clearConfetti() {
  if (!confettiContainer) {
    return;
  }
  confettiContainer.innerHTML = "";
}
/* =========================================
   INITIAL STATE
========================================= */
scenes.forEach((scene, index) => {
  scene.classList.toggle(
    "active",
    index === 0
  );
});
/* =========================================
   CONSOLE
========================================= */
console.log(
  "✨ Aeesha's birthday experience is ready."
);
console.log(
  "♡ September 27 ♡"
);

Now the structure is simply:

aeesha-birthday/
│
├── index.html
├── style.css
├── script.js
│
└── pictures/
    ├── IMG_4719.jpeg
    └── IMG_5797.jpeg

No TypeScript. No build command. No dist.

Once you’ve pasted script.js, say Done. Then we’ll do a quick GitHub/Netlify check so the live site actually loads this version.
