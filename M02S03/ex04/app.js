let imageElement = document.querySelector('.image');
const showMessage = (message) => {
  let paragraph = document.getElementById('toaster');
  if(paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = 'toaster';
    document.body.appendChild(p);
  }
};
imageElement.addEventListener('load', () => {
  showMessage('Imaginea s-a incarcat.');
  imageElement.addEventListener('click', (evt) => {
    alert(`Imaginea cu URLul: ${evt.target.src} s-a incarcat.`);
  });
  
});

