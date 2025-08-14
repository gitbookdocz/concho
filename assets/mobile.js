document.addEventListener('DOMContentLoaded', function () {
    // Add mobile toggle for screens <= 1240px
    function initMobileMenu() {
        if (window.innerWidth <= 1240) {
            var summary = document.querySelector('.book-summary');
            var body = document.querySelector('.book-body');

            if (summary && body && !document.querySelector('.mobile-toggle')) {
                // Create toggle button
                var toggleBtn = document.createElement('button');
                toggleBtn.className = 'mobile-toggle';
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
                toggleBtn.style.cssText = `
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 2000;
          background: #fff;
          border: 1px solid #ddd;
          padding: 10px 12px;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-size: 16px;
          color: #333;
        `;

                toggleBtn.addEventListener('click', function () {
                    summary.classList.toggle('mobile-open');
                });

                document.body.appendChild(toggleBtn);

                // Close on outside click
                document.addEventListener('click', function (e) {
                    if (!summary.contains(e.target) &&
                        !toggleBtn.contains(e.target) &&
                        summary.classList.contains('mobile-open')) {
                        summary.classList.remove('mobile-open');
                    }
                });
            }
        } else {
            // Remove mobile elements on desktop
            var toggle = document.querySelector('.mobile-toggle');
            if (toggle) toggle.remove();

            var summary = document.querySelector('.book-summary');
            if (summary) summary.classList.remove('mobile-open');
        }
    }

    // Init and handle resize
    initMobileMenu();
    window.addEventListener('resize', initMobileMenu);

    // Fix navigation arrows
    var navPrev = document.querySelector('.navigation-prev');
    var navNext = document.querySelector('.navigation-next');

    if (navPrev && !navPrev.innerHTML.includes('fa-')) {
        navPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }

    if (navNext && !navNext.innerHTML.includes('fa-')) {
        navNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
    }
});