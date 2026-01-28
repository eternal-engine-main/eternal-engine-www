// Eternal Forge Engine - UI Components

// Show notification toast
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.padding = '1rem 2rem';
  toast.style.background = type === 'error' ? '#f44336' : '#4CAF50';
  toast.style.color = '#fff';
  toast.style.borderRadius = '4px';
  toast.style.zIndex = '1000';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Show loading indicator
function showLoading(message = 'Loading...') {
  const loader = document.createElement('div');
  loader.id = 'loading-indicator';
  loader.innerHTML = `<p>${message}</p>`;
  document.body.appendChild(loader);
}

// Hide loading indicator
function hideLoading() {
  const loader = document.getElementById('loading-indicator');
  if (loader) loader.remove();
}

// Export UI functions
window.EternalForgeUI = {
  showToast,
  showLoading,
  hideLoading
};
