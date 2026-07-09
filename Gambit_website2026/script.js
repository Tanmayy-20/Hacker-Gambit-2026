
        // 1. Particle Background Generation
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 25;

            for (let i = 0; i < particleCount; i++) {
                let particle = document.createElement('div');
                particle.className = 'particle';
                
                let size = Math.random() * 3 + 1;
                let posX = Math.random() * 100;
                let delay = Math.random() * 5;
                let duration = Math.random() * 3 + 4;

                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = posX + 'vw';
                particle.style.animationDelay = delay + 's';
                particle.style.animationDuration = duration + 's';

                container.appendChild(particle);
            }
        }

        // 2. Scroll Reveal Observer
        function initScrollReveal() {
            const reveals = document.querySelectorAll('.reveal');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Triggers when 15% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Stop observing once revealed
                    }
                });
            }, observerOptions);

            reveals.forEach(reveal => {
                observer.observe(reveal);
            });
        }

        // Initialize scripts on load
        window.onload = () => {
            createParticles();
            initScrollReveal();
        };

        const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

});

function animate(){

    ringX += (mouseX-ringX)*0.18;
    ringY += (mouseY-ringY)*0.18;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animate);

}

animate();
    


