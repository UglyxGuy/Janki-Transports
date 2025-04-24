// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-fade-in').forEach((element) => {
        observer.observe(element);
    });

    // Initialize counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let count = 0;
        const speed = 2000 / target;
        
        function updateCount() {
            if(count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, speed);
            }
        }
        
        updateCount();
    });
}); 