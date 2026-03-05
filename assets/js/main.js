// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Fake live counter increase (for demo realism)
let count = 1400;
const liveCount = document.getElementById('live-count');

setInterval(() => {
    count += Math.floor(Math.random() * 3) + 1; // +1 to +3 every 8-12s
    liveCount.textContent = count.toLocaleString() + '+';
}, 8000 + Math.random() * 4000);
