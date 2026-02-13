let balance = parseInt(localStorage.getItem('bal')) || 0;
let energy = 1000;
let power = parseInt(localStorage.getItem('pow')) || 1;
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
    localStorage.setItem('bal', balance);
    document.getElementById('tapper').style.transform = 'scale(0.9)';
    setTimeout(() => document.getElementById('tapper').style.transform = 'scale(1)', 100);
    if(navigator.vibrate) navigator.vibrate(10);
});

function toggleShop(open) {
    document.getElementById('market').classList.toggle('open', open);
}

function upgrade() {
    if (balance >= 1000) {
        balance -= 1000;
        power += 1;
        localStorage.setItem('bal', balance);
        localStorage.setItem('pow', power);
        sync();
        alert('Мульти-счет активен!');
    }
}

setInterval(() => { if (energy < maxE) { energy += 2; sync(); } }, 1000);
sync();
