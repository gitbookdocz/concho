document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu toggle
  if (window.innerWidth <= 1240) {
    const summary = document.querySelector('.book-summary');
    const body = document.querySelector('.book-body');
    
    if (summary && body) {
      // Create toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      toggleBtn.style.cssText = `
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 1001;
        background: #fff;
        border: 1px solid #ddd;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      `;
      
      toggleBtn.onclick = function() {
        summary.classList.toggle('open');
      };
      
      document.body.appendChild(toggleBtn);
      
      // Close sidebar when clicking outside
      document.addEventListener('click', function(e) {
        if (!summary.contains(e.target) && 
            !toggleBtn.contains(e.target) && 
            summary.classList.contains('open')) {
          summary.classList.remove('open');
        }
      });
    }
  }
});
