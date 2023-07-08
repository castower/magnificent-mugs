let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected--;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected++;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === nodes.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();

const { styler, spring, listen, pointer, value } = window.popmotion;

const heart1 = document.querySelector('.heart1');
const divStyler1 = styler(heart1);
const heartXY1 = value({ x: 0, y: 0 }, divStyler1.set);

listen(heart1, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(heartXY1.get()).start(heartXY1);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: heartXY1.get(),
      velocity: heartXY1.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(heartXY1);
  });

const heart2 = document.querySelector('.heart2');
const divStyler2 = styler(heart2);
const heartXY2 = value({ x: 0, y: 0 }, divStyler2.set);

listen(heart2, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(heartXY2.get()).start(heartXY2);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: heartXY2.get(),
      velocity: heartXY2.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(heartXY2);
  });