document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    const container = banner.querySelector('.container');

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        container.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Smooth transition between pages
    document.addEventListener('click', function(e) {
        if (e.target.closest('a')) {
            banner.style.opacity = '0';
            setTimeout(() => {
                banner.style.opacity = '1';
            }, 100);
        }
    });
}); 