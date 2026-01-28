// Eternal Forge Engine - Quantum Effects

// Initialize quantum particle effects
function initQuantumEffects() {
  console.log('Quantum effects initialized');
  
  // Create particle system
  createParticleSystem();
}

// Create animated particle background
function createParticleSystem() {
  const canvas = document.createElement('canvas');
  canvas.id = 'quantum-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  
  document.body.appendChild(canvas);
  
  console.log('Particle system created');
}

// Export functions
window.initQuantumEffects = initQuantumEffects;
