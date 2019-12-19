let heightElement = document.querySelector('#height');
let widthElement = document.querySelector('#width');


const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById('toaster');
  if(paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  }
};

let originalW = window.innerWidth;
window.addEventListener('resize', module.exports((evt) => {
  heightElement.innerText = window.innerHeight;
  widthElement.innerText = window.innerWidth;
  showMessage(`Fereastra are ${evt.target.innerWidth} pixeli.`, 'toaster');
  if (evt.target.innerWidth !== originalW) {
    showMessage('Fereastra si-a schimbat latimea.', 'salam');
  }

}, 400));
