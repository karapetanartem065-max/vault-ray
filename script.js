let balance = parseInt(localStorage.getItem('b_val')) || 0;
let energy = 1000;
let power = parseInt(localStorage.getItem('b_pow')) || 1;
const maxE = 1000;

function sync() {
    document.getElementById('score').innerText = balance.toLocaleString('ru-RU');
    document.getElementById('e-text').innerText = ${energy}/${maxE};
    document.getElementById('fill').style.width = (energy / maxE * 100) + '%';
}

document.getElementById('tapper').addEventListener('pointerdown', (e) => {
    if (energy < power) return;
    balance += power;
    energy -= power;
    sync();
    localStorage.setItem('b_val', balance);
    
    const img = e.currentTarget.querySelector('img');
    img.style.transform = 'scale(0.92)';
    setTimeout(() => img.style.transform = 'scale(1)', 100);
    if(navigator.vibrate) navigator.vibrate(5);
});

function toggleMarket(open) {
    document.getElementById('market').classList.toggle('open', open);
}

function upgrade() {
    if (balance >= 1000) {
        balance -= 1000;
        power += 1;
        localStorage.setItem('b_val', balance);
        localStorage.setItem('b_pow', power);
        sync();
        alert('Услуга подключена!');
    }
}

setInterval(() => {
    if (energy < maxE) { energy += 2; sync(); }
}, 1000);

sync();
