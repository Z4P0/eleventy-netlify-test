const decimalTime = new Date().getHours() / 24;
console.log(decimalTime);


const hue = Math.floor(decimalTime * 250);
console.log(hue);

const header = document.querySelector('#hero-header');
header.style.backgroundColor = `hsla(${hue}, 65%, 50%, .8)`;
// header.style.color = '#333';

// https://css-tricks.com/css3-gradients/
/*
  background-image supports linear-gradients
*/
// header.style.backgroundImage = `linear-gradient(hsla(${hue}, 85%, 60%, .8), hsla(${hue}, 95%, 40%, .8))`;
// header.style.backgroundImage = `linear-gradient(45deg, hsla(${hue}, 85%, 60%, .8), hsla(${hue}, 95%, 40%, .8))`;
// header.style.backgroundImage = `linear-gradient(135deg, hsla(${hue}, 85%, 60%, .8), hsla(${hue}, 95%, 40%, .8))`;
