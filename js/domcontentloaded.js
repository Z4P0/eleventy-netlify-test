document.querySelector('html').classList.toggle('no-js');

let sourceSans = new FontFaceObserver('Source Sans Pro');

sourceSans.load().then(() => {
  document.querySelector('body').classList.add('font-loaded');
});
