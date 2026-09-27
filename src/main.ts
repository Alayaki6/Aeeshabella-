type BirthdayPage = HTMLElement;

const pages: BirthdayPage[] = Array.from(
  document.querySelectorAll<HTMLElement>(".birthday-page")
);

const celebration = document.getElementById("celebration");
const celebrateButton =
  document.getElementById("celebrateButton");
const closeCelebration =
  document.getElementById("closeCelebration");

let currentPage = 0;
let isTransitioning = false;

/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageIndex: number): void {
  if (
    pageIndex < 0 ||
    pageIndex >= pages.length ||
    isTransitioning ||
    pageIndex === currentPage
  ) {
    return;
  }

  isTransitioning = true;

  const current = pages[currentPage];
  const next = pages[pageIndex];

  current.classList.remove("active");

  window.setTimeout(() => {
    next.classList.add("active");
    currentPage = pageIndex;

    window.setTimeout(() => {
      isTransitioning = false;
    }, 700);
  }, 120);
}

function goNext(): void {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}

function goPrevious(): void {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

/* =========================================
   NEXT BUTTONS
========================================= */

const nextButtons =
  document.querySelectorAll<HTMLButtonElement>(
    "[data-next]"
  );

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.dataset.next);

    if (Number.isNaN(target)) {
      return;
    }

    showPage(target - 1);
  });
});

/* =========================================
   PREVIOUS BUTTONS
========================================= */

const previousButtons =
  document.querySelectorAll<HTMLButtonElement>(
    "[data-prev]"
  );

previousButtons.forEach((button) => {
  button.addEventListener("click", goPrevious);
});

/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
  "keydown",
  (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      goNext();
    }

    if (event.key === "ArrowLeft") {
      goPrevious();
    }
  }
);

/* =========================================
   SWIPE CONTROLS
========================================= */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener(
  "touchstart",
  (event: TouchEvent) => {
    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    touchStartX = touch.screenX;
    touchStartY = touch.screenY;
  },
  {
    passive: true
  }
);

document.addEventListener(
  "touchend",
  (event: TouchEvent) => {
    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    const touchEndX = touch.screenX;
    const touchEndY = touch.screenY;

    const horizontalDistance =
      touchEndX - touchStartX;

    const verticalDistance =
      touchEndY - touchStartY;

    /*
      Ignore the gesture if it is mostly vertical.
    */

    if (
      Math.abs(horizontalDistance) <
      Math.abs(verticalDistance)
    ) {
      return;
    }

    /*
      Ignore tiny movements.
    */

    if (Math.abs(horizontalDistance) < 60) {
      return;
    }

    if (horizontalDistance < 0) {
      goNext();
    } else {
      goPrevious();
    }
  },
  {
    passive: true
  }
);

/* =========================================
   BACKGROUND PARTICLES
========================================= */

function createParticle(): void {
  const container =
    document.querySelector<HTMLDivElement>(
      ".particles"
    );

  if (!container) {
    return;
  }

  const particle =
    document.createElement("span");

  particle.className = "particle";

  const size =
    Math.random() * 3 + 1;

  const left =
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
    `${left}%`;

  particle.style.animationDuration =
    `${duration}s`;

  particle.style.animationDelay =
    `${delay}s`;

  container.appendChild(particle);
}

function createParticles(): void {
  const amount = 30;

  for (let i = 0; i < amount; i++) {
    createParticle();
  }
}

createParticles();

/* =========================================
   FINAL CELEBRATION
========================================= */

function openCelebration(): void {
  if (!celebration) {
    return;
  }

  celebration.classList.remove("hidden");

  document.body.classList.add(
    "celebrating"
  );

  createStars();
  launchConfetti();
}

function closeCelebrationModal(): void {
  if (!celebration) {
    return;
  }

  celebration.classList.add("hidden");

  document.body.classList.remove(
    "celebrating"
  );

  clearStars();
  clearConfetti();
}

celebrateButton?.addEventListener(
  "click",
  openCelebration
);

closeCelebration?.addEventListener(
  "click",
  closeCelebrationModal
);

/* =========================================
   CONFETTI
========================================= */

function launchConfetti(): void {
  const container =
    document.querySelector<HTMLDivElement>(
      ".confetti-container"
    );

  if (!container) {
    return;
  }

  const symbols = [
    "✦",
    "✧",
    "•",
    "♡",
    "✿"
  ];

  for (let i = 0; i < 90; i++) {
    const piece =
      document.createElement("span");

    piece.className = "confetti";

    const symbol =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];

    piece.textContent = symbol;

    piece.style.left =
      `${Math.random() * 100}%`;

    piece.style.animationDelay =
      `${Math.random() * 1.5}s`;

    piece.style.animationDuration =
      `${Math.random() * 2 + 3}s`;

    container.appendChild(piece);

    window.setTimeout(() => {
      piece.remove();
    }, 6000);
  }
}

function clearConfetti(): void {
  const container =
    document.querySelector<HTMLDivElement>(
      ".confetti-container"
    );

  if (container) {
    container.innerHTML = "";
  }
}

/* =========================================
   STAR FIELD
========================================= */

function createStars(): void {
  const container =
    document.querySelector<HTMLDivElement>(
      ".star-container"
    );

  if (!container) {
    return;
  }

  for (let i = 0; i < 45; i++) {
    const star =
      document.createElement("span");

    star.className = "star";

    star.style.left =
      `${Math.random() * 100}%`;

    star.style.top =
      `${Math.random() * 100}%`;

    star.style.animationDelay =
      `${Math.random() * 2}s`;

    container.appendChild(star);
  }
}

function clearStars(): void {
  const container =
    document.querySelector<HTMLDivElement>(
      ".star-container"
    );

  if (container) {
    container.innerHTML = "";
  }
}

/* =========================================
   INITIAL STATE
========================================= */

pages.forEach(
  (page, index) => {
    page.classList.toggle(
      "active",
      index === 0
    );
  }
);

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "✨ Aeesha's birthday experience is ready."
);
console.log(
  "♡ September 27 ♡"
);
