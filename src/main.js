const clips = [
  { src: '/video/sue-vid1.mp4', poster: '/images/sue-vid1-thumb.png' },
  { src: '/video/sue-vid2.mp4', poster: '/images/sue-vid2-thumb.png' },
  { src: '/video/sue-vid3.mp4', poster: '/images/sue-vid3-thumb.png' },
];

const hero = document.getElementById('hero-video');
const thumbButtons = document.querySelectorAll('.thumb-btn');

function setActive(index) {
  thumbButtons.forEach((btn, i) => {
    const on = i === index;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', String(on));
  });
}

function loadAndPlay(index) {
  const clip = clips[index];
  hero.pause();
  hero.src = clip.src;
  hero.poster = clip.poster;

  const playWhenReady = () => {
    hero.play().catch(() => {});
  };

  hero.addEventListener('loadedmetadata', playWhenReady, { once: true });
}

function selectClip(index) {
  if (index < 0 || index >= clips.length) return;
  setActive(index);
  loadAndPlay(index);
}

thumbButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const index = Number.parseInt(btn.dataset.index, 10);
    selectClip(index);
  });
});

selectClip(0);
