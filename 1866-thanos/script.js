const container = document.querySelector('.container');
for (let i = 0; i < 400; i++) {
  const block = document.createElement('div');
  block.classList.add('block');
  container.appendChild(block);
}

// use anime js
const blocks = document.querySelectorAll('.block');
const animation = anime.timeline({
  targets: blocks,
  easing: 'easeInOutExpo',
  loop: true,
  delay: anime.stagger(10, { start: 50 }),
});

animation
  .add({
    scale: 0,
    translateX: function () {
      return anime.random(360, 2100);
    },
    translateY: function () {
      return anime.random(360, -2100);
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    duration: function () {
      return anime.random(500, 3000);
    },
  })
  .add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,
    duration: function () {
      return anime.random(500, 3000);
    },
  });
