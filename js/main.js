// Eternal Forge Engine - Main JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Eternal Forge Engine initialized');
  
  // Initialize navigation
  initNavigation();
  
  // Initialize quantum effects if available
  if (typeof initQuantumEffects === 'function') {
    initQuantumEffects();
  }
});

// Navigation handler
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log('Navigating to:', link.href);
    });
  });
}

// Export functions for use in other modules
window.EternalForge = {
  version: '1.0.0',
  init: initNavigation
};
