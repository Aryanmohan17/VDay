const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const CB = document.getElementById('confetti-button')

noBtn.addEventListener('click', () => {
    noBtn.style.transform = `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`;
});

CB.addEventListener('click', () => {
    confetti();
    alert("Let's meet on Sunday for breakfast <3");
    
    
});

function createConfetti() {
    const colors = ['#fbc531', '#44bd32', '#0652dd', '#EA2027', '#5758BB', '#6D214F'];
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}