const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");

const celebration = document.getElementById("celebration");
const celebrateBtn = document.getElementById("celebrateBtn");
const closeCelebration = document.getElementById("closeCelebration");

const particlesContainer = document.querySelector(".particles");


/* ================================
   OPEN EXPERIENCE
================================ */

if (enterBtn) {

  enterBtn.addEventListener("click", () => {

    intro.style.transition =
      "opacity 1s ease, transform 1s ease";

    intro.style.opacity = "0";

    intro.style.transform = "scale(1.04)";

    setTimeout(() => {

      intro.classList.add("hidden");

      mainContent.classList.remove("hidden");

      window.scrollTo(0, 0);

      document.body.style.overflow = "auto";

    }, 900);

  });

}


/* ================================
   FLOATING PARTICLES
================================ */

function createParticle() {

  if (!particlesContainer) return;

  const particle = document.createElement("span");

  particle.classList.add("particle");

  const size = Math.random() * 4 + 2;

  particle.style.width = `${size}px`;

  particle.style.height = `${size}px`;

  particle.style.left =
    `${Math.random() * 100}%`;

  const duration =
    Math.random() * 9 + 7;

  particle.style.animationDuration =
    `${duration}s`;

  particle.style.animationDelay =
    `${Math.random() * 6}s`;

  particlesContainer.appendChild(particle);

}


for (let i = 0; i < 35; i++) {
  createParticle();
}


/* ================================
   CELEBRATION
================================ */

if (celebrateBtn) {

  celebrateBtn.addEventListener("click", () => {

    celebration.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    launchConfetti();

  });

}


if (closeCelebration) {

  closeCelebration.addEventListener("click", () => {

    celebration.style.opacity = "0";

    celebration.style.transition =
      "opacity 0.4s ease";

    setTimeout(() => {

      celebration.classList.add("hidden");

      celebration.style.opacity = "";

      document.body.style.overflow = "auto";

    }, 400);

  });

}


/* ================================
   CONFETTI
================================ */

function launchConfetti() {

  const colors = [
    "#d8b477",
    "#c98796",
    "#f8efe5",
    "#ffffff"
  ];

  for (let i = 0; i < 90; i++) {

    const piece =
      document.createElement("span");

    piece.style.position = "fixed";

    piece.style.zIndex = "150";

    piece.style.top = "-20px";

    piece.style.left =
      `${Math.random() * 100}vw`;

    piece.style.width =
      `${Math.random() * 7 + 4}px`;

    piece.style.height =
      `${Math.random() * 13 + 6}px`;

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    piece.style.opacity = "0.9";

    piece.style.pointerEvents = "none";

    document.body.appendChild(piece);

    const duration =
      Math.random() * 2.5 + 2.5;

    piece.animate(

      [
        {
          transform:
            "translate3d(0, 0, 0) rotate(0deg)",
          opacity: 1
        },

        {
          transform:
            `translate3d(
              ${(Math.random() - 0.5) * 300}px,
              110vh,
              0
            )
            rotate(${Math.random() * 900}deg)`,

          opacity: 0
        }
      ],

      {
        duration: duration * 1000,

        easing:
          "cubic-bezier(.2,.8,.3,1)"
      }

    );

    setTimeout(() => {

      piece.remove();

    }, duration * 1000 + 100);

  }

}


/* ================================
   PAGE START
================================ */

if (mainContent) {
  document.body.style.overflow = "hidden";
}


/* ================================
   CONSOLE
================================ */

console.log(
  "✨ Happy Birthday, Aeesha Olajumoke. ✨"
);
