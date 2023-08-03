const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const bubblesContainer = document.querySelector('.slider-bubbles');

let currentIndex = 0;

// Create bubbles based on the number of slides
slides.forEach((_, index) => {
  const bubble = document.createElement('span');
  bubble.classList.add('slider-bubble');
  if (index === 0) {
    bubble.classList.add('active');
  }
  bubblesContainer.appendChild(bubble);
});

const bubbles = document.querySelectorAll('.slider-bubble');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  bubbles.forEach((bubble, i) => {
    if (i === index) {
      bubble.classList.add('active');
    } else {
      bubble.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 5000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

bubbles.forEach((bubble, index) => {
  bubble.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});