:root {
  --night: #120b10;
  --night-2: #1b1018;
  --night-3: #24131e;
  --cream: #f8eee7;
  --soft: #d9c7c0;
  --muted: #a99799;
  --gold: #d9b879;
  --rose: #c98798;
  --rose-light: #e4a9b5;
  --white: #fffaf7;
  --serif: "Cormorant Garamond", serif;
  --sans: "DM Sans", sans-serif;
}
/* =====================================
   RESET
===================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  background: var(--night);
  color: var(--cream);
  font-family: var(--sans);
  -webkit-font-smoothing: antialiased;
}
button {
  font: inherit;
}
/* =====================================
   MAIN EXPERIENCE
===================================== */
.experience {
  width: 100%;
  height: 100dvh;
  position: relative;
  overflow: hidden;
}
/* =====================================
   SCENES
===================================== */
.scene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 22px;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.04);
  transition:
    opacity 0.8s ease,
    transform 1s cubic-bezier(.22, 1, .36, 1),
    visibility 0.8s;
  overflow: hidden;
}
.scene.active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
/* =====================================
   BACKGROUND
===================================== */
.scene::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(201, 135, 152, 0.12),
      transparent 34%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(217, 184, 121, 0.06),
      transparent 30%
    );
  pointer-events: none;
}
.scene::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.015) 50%,
      transparent 100%
    );
  pointer-events: none;
}
/* =====================================
   CONTENT
===================================== */
.content {
  position: relative;
  z-index: 5;
  width: min(100%, 430px);
  text-align: center;
}
/* =====================================
   TYPOGRAPHY
===================================== */
.eyebrow {
  font-family: var(--sans);
  font-size: 9px;
  letter-spacing: 0.34em;
  color: var(--gold);
  font-weight: 600;
  margin-bottom: 18px;
}
h1,
h2 {
  font-family: var(--serif);
  font-weight: 500;
  line-height: 0.95;
}
h1 {
  font-size: clamp(55px, 16vw, 88px);
}
h1 span,
h2 span {
  display: block;
  color: var(--rose-light);
  font-style: italic;
}
.intro,
.description,
.final-text {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}
/* =====================================
   PAGE COUNTER
===================================== */
.counter {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(248, 238, 231, 0.38);
  font-size: 9px;
  letter-spacing: 0.2em;
}
.counter i {
  color: var(--gold);
  font-style: normal;
  margin: 0 5px;
}
/* =====================================
   FLOATING PARTICLES
===================================== */
.particles {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}
.particle {
  position: absolute;
  bottom: -10px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: rgba(255,255,255,0.65);
  animation: rise linear infinite;
}
@keyframes rise {
  0% {
    transform: translateY(0) scale(0.5);
    opacity: 0;
  }
  15% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-105vh) scale(1.4);
    opacity: 0;
  }
}
/* =====================================
   SCENE 1 — OPENING
===================================== */
.opening-content {
  margin-top: -10px;
}
.scene-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(201, 135, 152, 0.1);
  filter: blur(70px);
  animation: breathe 5s ease-in-out infinite;
}
@keyframes breathe {
  0%,
  100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
.tiny-star {
  color: var(--gold);
  font-size: 18px;
  margin-bottom: 16px;
  animation: twinkle 2s ease-in-out infinite;
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
.opening-content .intro {
  margin-top: 22px;
}
/* =====================================
   ENVELOPE
===================================== */
.envelope-wrap {
  height: 105px;
  margin: 28px auto 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.envelope {
  position: relative;
  width: 150px;
  height: 90px;
  filter:
    drop-shadow(0 20px 30px rgba(0,0,0,0.35));
  animation: envelopeFloat 4s ease-in-out infinite;
}
@keyframes envelopeFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }
  50% {
    transform: translateY(-7px) rotate(1deg);
  }
}
.envelope-front {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(
      145deg,
      #55303d,
      #321b26
    );
  border: 1px solid rgba(217,184,121,0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.envelope-front::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      transparent 48%,
      rgba(255,255,255,0.07) 50%,
      transparent 52%
    );
}
.envelope-front span {
  font-family: var(--serif);
  font-size: 36px;
  color: var(--gold);
  position: relative;
  z-index: 3;
}
.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  z-index: 4;
  background: #6a3a4b;
  clip-path: polygon(
    0 0,
    100% 0,
    50% 100%
  );
  border-bottom: 1px solid rgba(217,184,121,0.3);
}
/* =====================================
   BUTTONS
===================================== */
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-width: 180px;
  padding: 14px 20px;
  border: 1px solid rgba(217,184,121,0.35);
  border-radius: 100px;
  background: rgba(255,255,255,0.025);
  color: var(--cream);
  cursor: pointer;
  font-size: 11px;
  letter-spacing: 0.05em;
  transition:
    background 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;
}
.primary-btn b {
  color: var(--gold);
  font-size: 17px;
  font-weight: 400;
}
.primary-btn:active {
  transform: scale(0.96);
}
.primary-btn:hover {
  background: rgba(217,184,121,0.08);
  border-color: rgba(217,184,121,0.7);
}
/* =====================================
   SCENE 2 — REVEAL
===================================== */
.reveal-content {
  margin-top: -15px;
}
.number {
  font-family: var(--serif);
  font-size: clamp(125px, 38vw, 190px);
  line-height: 0.68;
  color: transparent;
  -webkit-text-stroke: 1px rgba(217,184,121,0.5);
  opacity: 0.8;
  margin-bottom: 18px;
}
.reveal-content h2 {
  font-size: clamp(42px, 11vw, 62px);
}
.gold-line {
  width: 45px;
  height: 1px;
  background: var(--gold);
  margin: 22px auto;
}
.description {
  margin-bottom: 25px;
}
/* =====================================
   PHOTO SCENES
===================================== */
.photo-content {
  margin-top: -3px;
}
.photo-frame {
  position: relative;
  width: min(76vw, 300px);
  height: min(56vh, 360px);
  margin: 0 auto 19px;
  padding: 7px;
  background: #f2e7df;
  box-shadow:
    0 30px 70px rgba(0,0,0,0.5),
    0 0 45px rgba(201,135,152,0.08);
  transform: rotate(-1.5deg);
  transition: transform 0.5s ease;
}
.photo-frame.tilted {
  transform: rotate(2deg);
}
.photo-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.photo-light {
  position: absolute;
  width: 100px;
  height: 100px;
  top: -40px;
  right: -40px;
  border-radius: 50%;
  background: rgba(217,184,121,0.14);
  filter: blur(30px);
  z-index: 4;
  pointer-events: none;
}
.photo-label {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 7px 10px;
  background: rgba(18,11,16,0.78);
  backdrop-filter: blur(10px);
  border-left: 1px solid var(--gold);
}
.photo-label strong {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 0.2em;
}
.photo-label span {
  color: #eee2dc;
  font-size: 8px;
  margin-top: 2px;
}
.photo-title {
  font-size: clamp(31px, 8vw, 45px);
  margin-bottom: 19px;
}
.photo-title em {
  color: var(--rose-light);
  font-weight: 400;
}
/* =====================================
   LETTER
===================================== */
.letter-content {
  max-width: 390px;
  margin-top: -4px;
}
.letter-content h2 {
  font-size: clamp(43px, 11vw, 60px);
  margin-bottom: 10px;
}
.letter-line {
  width: 36px;
  height: 1px;
  background: var(--gold);
  margin: 15px auto 18px;
}
.letter {
  color: var(--soft);
  font-family: var(--serif);
  font-size: clamp(15px, 4.1vw, 18px);
  line-height: 1.28;
}
.letter p {
  margin-bottom: 10px;
}
.letter .signature {
  color: var(--rose-light);
  font-style: italic;
  margin-top: 12px;
}
/* =====================================
   FINAL SCENE
===================================== */
.final-scene {
  background:
    radial-gradient(
      circle at center,
      #321a29 0%,
      #1b1018 40%,
      #120b10 78%
    );
}
.final-orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(217,184,121,0.17),
      rgba(201,135,152,0.05) 45%,
      transparent 70%
    );
  filter: blur(10px);
  animation: finalOrb 5s ease-in-out infinite;
}
@keyframes finalOrb {
  0%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
.final-content {
  margin-top: -3px;
}
.final-star {
  color: var(--gold);
  font-size: 25px;
  margin-bottom: 16px;
  animation:
    twinkle 2s ease-in-out infinite,
    spinSlow 8s linear infinite;
}
@keyframes spinSlow {
  to {
    transform: rotate(360deg);
  }
}
.final-content h2 {
  font-size: clamp(43px, 11vw, 62px);
}
.final-content h2 span {
  color: var(--rose-light);
}
.cake {
  font-size: 50px;
  margin: 20px 0 12px;
  filter: drop-shadow(
    0 10px 25px rgba(201,135,152,0.25)
  );
  animation: cakeFloat 3s ease-in-out infinite;
}
@keyframes cakeFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.final-text {
  margin-bottom: 21px;
}
.celebrate-btn {
  position: relative;
  border: 1px solid rgba(217,184,121,0.55);
  border-radius: 100px;
  padding: 15px 22px;
  background:
    linear-gradient(
      100deg,
      rgba(201,135,152,0.13),
      rgba(217,184,121,0.09)
    );
  color: var(--cream);
  font-size: 11px;
  letter-spacing: 0.04em;
  cursor: pointer;
  box-shadow:
    0 0 0 rgba(217,184,121,0);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.celebrate-btn span {
  display: inline;
  color: var(--rose-light);
  margin-left: 7px;
}
.celebrate-btn:active {
  transform: scale(0.95);
}
.celebrate-btn:hover {
  box-shadow:
    0 0 35px rgba(217,184,121,0.14);
}
/* =====================================
   CELEBRATION OVERLAY
===================================== */
.celebration {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background:
    radial-gradient(
      circle at center,
      rgba(61,30,48,0.98),
      rgba(13,8,12,0.99) 70%
    );
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.7s ease,
    visibility 0.7s;
}
.celebration.show {
  opacity: 1;
  visibility: visible;
}
.celebration-content {
  position: relative;
  z-index: 10;
  width: min(100%, 390px);
  text-align: center;
  transform: translateY(25px) scale(0.96);
  transition:
    transform 0.8s cubic-bezier(.22,1,.36,1);
}
.celebration.show .celebration-content {
  transform: translateY(0) scale(1);
}
.celebration-star {
  color: var(--gold);
  font-size: 27px;
  margin-bottom: 20px;
  animation: twinkle 1.5s ease-in-out infinite;
}
.celebration-content h2 {
  font-size: clamp(54px, 14vw, 78px);
}
.celebration-line {
  width: 45px;
  height: 1px;
  background: var(--gold);
  margin: 22px auto;
}
.celebration-content > p:not(.eyebrow) {
  color: var(--soft);
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.5;
}
.wish {
  margin-top: 22px;
  color: var(--gold);
  font-family: var(--serif);
  font-size: 22px;
  font-style: italic;
}
#closeCelebration {
  margin-top: 25px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.12em;
  cursor: pointer;
}
/* =====================================
   STARS
===================================== */
.stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.star {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: white;
  box-shadow:
    0 0 8px rgba(255,255,255,0.8);
  animation: starBlink 2s ease-in-out infinite;
}
@keyframes starBlink {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
}
/* =====================================
   CONFETTI
===================================== */
.confetti {
  position: absolute;
  top: -20px;
  font-size: 13px;
  animation: confettiFall linear forwards;
}
@keyframes confettiFall {
  0% {
    transform:
      translateY(-20px)
      rotate(0deg);
    opacity: 1;
  }
  100% {
    transform:
      translateY(110vh)
      rotate(720deg);
    opacity: 0;
  }
}
/* =====================================
   MOBILE
===================================== */
@media (max-width: 500px) {
  .scene {
    padding:
      22px
      18px
      30px;
  }
  .eyebrow {
    font-size: 8px;
    letter-spacing: 0.28em;
    margin-bottom: 15px;
  }
  .intro {
    font-size: 12px;
  }
  .envelope-wrap {
    margin-top: 24px;
    margin-bottom: 20px;
  }
  .envelope {
    width: 140px;
    height: 84px;
  }
  .primary-btn {
    min-width: 170px;
    padding: 13px 18px;
  }
  .number {
    font-size: 125px;
  }
  .reveal-content h2 {
    font-size: 43px;
  }
  .description {
    font-size: 12px;
  }
  .photo-frame {
    width: min(76vw, 285px);
    height: min(53vh, 340px);
  }
  .photo-title {
    font-size: 31px;
  }
  .letter {
    font-size: 14px;
    line-height: 1.25;
  }
  .letter p {
    margin-bottom: 8px;
  }
  .letter .signature {
    margin-top: 8px;
  }
  .final-content h2 {
    font-size: 43px;
  }
  .cake {
    font-size: 43px;
    margin: 16px 0 9px;
  }
  .final-text {
    font-size: 11px;
    margin-bottom: 18px;
  }
  .celebrate-btn {
    padding: 14px 19px;
    font-size: 10px;
  }
  .celebration-content h2 {
    font-size: 54px;
  }
  .celebration-content > p:not(.eyebrow) {
    font-size: 16px;
  }
}
/* =====================================
   SMALL HEIGHT DEVICES
===================================== */
@media (max-height: 700px) {
  .scene {
    padding-top: 14px;
    padding-bottom: 24px;
  }
  .envelope-wrap {
    height: 80px;
    margin: 17px auto;
  }
  .envelope {
    transform: scale(0.82);
  }
  .photo-frame {
    height: 45vh;
  }
  .photo-title {
    margin-bottom: 12px;
  }
  .letter {
    font-size: 13px;
  }
  .letter p {
    margin-bottom: 6px;
  }
  .cake {
    margin: 10px 0 5px;
  }
  .final-text {
    margin-bottom: 12px;
  }
}
/* =====================================
   ACCESSIBILITY
===================================== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

After pasting it, don’t touch script.js yet.

Tell me Done, and I’ll give you the final script.js that controls all six scenes, swiping, particles, stars, and the birthday celebration.
