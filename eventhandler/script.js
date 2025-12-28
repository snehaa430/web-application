const quadrants = document.querySelectorAll('.quadrant');
let isDragging = false;

const activeColors = {
  1: '#9a3636ff',
  2: '#4dabf7',
  3: '#51cf66',
  4: '#d0aa39ff'
};

function resetQuadrants() {
  quadrants.forEach(q => {
    q.style.backgroundColor = '';
    q.textContent = '';
    q.classList.remove('active');
  });
}

quadrants.forEach(q => {
  q.addEventListener('mousedown', () => {
    isDragging = true;
    q.classList.add('active');
  });

  q.addEventListener('mouseenter', () => {
    if (!isDragging) return;

    resetQuadrants();

    const id = q.dataset.id;
    q.style.backgroundColor = activeColors[id];
    q.textContent = `Dragged into Section ${id}`;
    q.classList.add('active');
  });

  q.addEventListener('mouseup', () => {
    isDragging = false;
    q.classList.remove('active');
  });
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  quadrants.forEach(q => q.classList.remove('active'));
});
