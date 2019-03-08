import './news-app.js';

// Use this instead of the direct import if you want to support browsers without native support
// import loadPolyfills from '@open-wc/polyfills-loader';
// loadPolyfills().then(() => {
//   import('./news-app.js');
// });

window.addEventListener('load', () => {
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
