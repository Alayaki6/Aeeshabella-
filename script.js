/* =====================================================
   AEESHA — SEPTEMBER 27
   Cinematic Birthday Experience
===================================================== */
const scenes = document.querySelectorAll(".scene");
const nextButtons = document.querySelectorAll("[data-next]");
const celebration = document.getElementById("celebration");
const celebrateBtn = document.getElementById("celebrateBtn");
const closeCelebration = document.getElementById("closeCelebration");
let currentScene = 0;
let moving = false;
/* =====================================================
   SCENE NAVIGATION
===================================================== */
function showScene(index) {
  if (
    index < 0 ||
    index >= scenes.length ||
    index === currentScene ||
    moving
  ) {
    return;
  }
  moving = true;
  const current = scenes[currentScene];
  const next = scenes[index];
  current.classList.remove("active");
  window.setTimeout(() => {
    next.classList.add("active");
    currentScene = index;
    window.setTimeout(() => {
      moving = false;
    }, 650);
  }, 180);
}
/* =====================================================
   BUTTON NAVIGATION
===================================================== */
nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.next);
    if (Number.isNaN(target)) {
      return;
    }
    /*
      Small envelope interaction before
      moving from the opening scene.
    */
    if (currentScene === 0) {
      const envelope =
        document.querySelector(".envelope");
      if (envelope) {
        envelope.classList.add("opening");
        window.setTimeout(() => {
          showScene(target - 1);
        }, 430);
        return;
      }
    }
    showScene(target - 1);
  });
});
/* =====================================================
   KEYBOARD
===================================================== */
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showScene(currentScene + 1);
  }
  if (event.key === "ArrowLeft") {
    showScene(currentScene - 1);
  }
  if (event.key === "Escape") {
    if (
      celebration &&
      celebration.classList.contains("show")
    ) {
      closeCelebrationScreen();
    }
  }
});
/* =====================================================
   SWIPE
===================================================== */
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
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
    const distanceX =
      touch.clientX - touchStartX;
    const distanceY =
      touch.clientY - touchStartY;
    /* Ignore vertical swipes */
    if (
      Math.abs(distanceY) >
      Math.abs(distanceX)
    ) {
      return;
    }
    /* Ignore tiny movement */
    if (
      Math.abs(distanceX) < 60
    ) {
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
/* =====================================================
   FLOATING PARTICLES
===================================================== */
const particleContainer =
  document.querySelector(".particles");
function createParticles() {
  if (!particleContainer) {
    return;
  }
  for (let i = 0; i < 34; i++) {
    const particle =
      document.createElement("span");
    particle.className =
      "particle";
    const size =
      Math.random() * 2.5 + 1;
    const left =
      Math.random() * 100;
    const duration =
      Math.random() * 9 + 8;
    const delay =
      Math.random() * 9;
    particle.style.width =
      `${size}px`;
    particle.style.height =
      `${size}px`;
    particle.style.left =
      `${left}%`;
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
/* =====================================================
   CELEBRATION
===================================================== */
function openCelebration() {
  if (!celebration) {
    return;
  }
  createStars();
  createConfetti();
  /*
    Tiny delay makes the final reveal
    feel intentional instead of instant.
  */
  requestAnimationFrame(() => {
    celebration.classList.add("show");
  });
}
function closeCelebrationScreen() {
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
  closeCelebrationScreen
);
/* =====================================================
   STARS
===================================================== */
const starsContainer =
  document.getElementById("stars");
function createStars() {
  if (!starsContainer) {
    return;
  }
  clearStars();
  const starCount = 60;
  for (
    let i = 0;
    i < starCount;
    i++
  ) {
    const star =
      document.createElement("span");
    star.className =
      "star";
    star.style.left =
      `${Math.random() * 100}%`;
    star.style.top =
      `${Math.random() * 100}%`;
    star.style.animationDelay =
      `${Math.random() * 2.5}s`;
    const size =
      Math.random() * 3 + 1;
    star.style.width =
      `${size}px`;
    star.style.height =
      `${size}px`;
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
/* =====================================================
   CONFETTI
===================================================== */
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
  for (
    let i = 0;
    i < 100;
    i++
  ) {
    const piece =
      document.createElement("span");
    piece.className =
      "confetti";
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
      `${Math.random() * 2.5 + 3}s`;
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
/* =====================================================
   INITIAL STATE
===================================================== */
scenes.forEach(
  (scene, index) => {
    scene.classList.toggle(
      "active",
      index === 0
    );
  }
);
/* =====================================================
   FINAL MESSAGE
===================================================== */
console.log(
  "✨ A little world made for Aeesha."
);
console.log(
  "♡ September 27 ♡"
);

One important thing

The upgraded JavaScript adds an .opening class to the envelope, but the CSS doesn’t currently define that animation. Don’t worry about it yet—the site will still work.

Once you’ve pasted this, say Done.

Then we’ll do one final tiny CSS addition for the envelope-opening effect, and after that you can refresh Netlify.
