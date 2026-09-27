type Page = HTMLElement;

const pages = Array.from(
  document.querySelectorAll<Page>(".birthday-page")
);

const celebration = document.getElementById("celebration");
const celebrateButton =
  document.getElementById("celebrateButton");
const closeCelebration =
  document.getElementById("closeCelebration");

let currentPage = 0;
let isAnimating = false;

function showPage(index: number): void {
  if (index < 0 || index >= pages.length || isAnimating) {
    return;
  }

  if (index === currentPage && pages[index].classList.contains("active")) {
    return;
  }

  isAnimating = true;

  pages[currentPage]?.classList.remove("active");

  setTimeout(() => {
    pages[index]?.classList.add("active");
    currentPage = index;

    setTimeout(() => {
      isAnimating = false;
    }, 850);
  }, 150);
}

function nextPage(): void {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}

function previousPage(): void {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

/* -----------------------------
   PAGE BUTTONS
----------------------------- */

document
  .querySelectorAll<HTMLButtonElement>("[data-next]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.next);

      if (!Number.isNaN(target)) {
        showPage(target - 1);
      }
    });
  });

document
  .querySelectorAll<HTMLButtonElement>("[data-prev]")
  .forEach((button) => {
    button.addEventListener("click", previousPage);
  });

/* -----------------------------
   KEYBOARD NAVIGATION
----------------------------- */

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "ArrowRight") {
    nextPage();
  }

  if (event.key === "ArrowLeft") {
    previousPage();
  }
});

/* -----------------------------
   TOUCH SWIPE
----------------------------- */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  (event: TouchEvent) => {
    touchStartX = event.changedTouches[0]?.screenX ?? 0;
  },
  { passive: true }
);

document.addEventListener(
  "touchend",
  (event: TouchEvent) => {
    touchEndX = event.changedTouches[0]?.screenX ?? 0;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 60) return;

    if (distance < 0) {
      nextPage();
    } else {
      previousPage();
    }
  },
  { passive: true }
);

/* -----------------------------
   PARTICLES
----------------------------- */

function createParticle(): void {
  const container = document.querySelector<HTMLDivElement>(
    ".particles"
  );

  if (!container) return;

  const particle = document.createElement("span");

  particle.className = "particle";

  const size = Math.random() * 3 + 1;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 8}s`;
  particle.style.animationDuration =
    `${Math.random() * 8 + 8}s`;

  container.appendChild(particle);
}

for (let i = 0; i < 30; i++) {
  createParticle();
}

/* -----------------------------
   FINAL CELEBRATION
----------------------------- */

celebrateButton?.addEventListener("click", () => {
  celebration?.classList.remove("hidden");

  document.body.classList.add("celebrating");

  launchConfetti();
  createStars();
});

closeCelebration?.addEventListener("click", () => {
  celebration?.classList.add("hidden");

  document.body.classList.remove("celebrating");
});

/* -----------------------------
   CONFETTI
----------------------------- */

function launchConfetti(): void {
  const container = document.querySelector<HTMLDivElement>(
    ".confetti-container"
  );

  if (!container) return;

  const symbols = ["✦", "✧", "•", "♡", "✿"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay =
      `${Math.random() * 1.5}s`;
    piece.style.animationDuration =
      `${Math.random() * 2 + 3}s`;

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6000);
  }
}

/* -----------------------------
   STARS
----------------------------- */

function createStars(): void {
  const container = document.querySelector<HTMLDivElement>(
    ".star-container"
  );

  if (!container) return;

  for (let i = 0; i < 45; i++) {
    const star = document.createElement("span");

    star.className = "star";

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay =
      `${Math.random() * 2}s`;

    container.appendChild(star);
  }
}

/* -----------------------------
   START
----------------------------- */

pages.forEach((page, index) => {
  page.classList.toggle("active", index === 0);
});

console.log(
  "✨ Aeesha's birthday experience has started."
);
