let score = parseInt(localStorage.getItem('score')) || 0;
let energy = 1000;
const maxEnergy = 1000;

const scoreEl = document.getElementById('score');
const energyText = document.getElementById('energy-text');
const energyFill = document.getElementById('energy-fill');

function updateUI() {
    scoreEl.innerText = score.toLocaleString();
    energyText.innerText = ${energy}/${maxEnergy};
    energyFill.style.width = (energy / maxEnergy * 100) + '%';
}

document.getElementById('tapper').addEventListener('pointerdown', (e) => {
    if (energy <= 0) return;
    score++;
    energy--;
    updateUI();
    localStorage.setItem('score', score);
    if(navigator.vibrate) navigator.vibrate(10);
});

function toggleShop(open) {
    const shop = document.getElementById('shop-screen');
    if (open) shop.classList.add('open');
    else shop.classList.remove('open');
}

// Регенерация
setInterval(() => {
    if (energy < maxEnergy) {
        energy += 1;
        updateUI();
    }
}, 1000);

updateUI();
