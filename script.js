const container = document.querySelector('#container');

for (i = 1; i <= 16; i++) {
  div = document.createElement('div');
  div.id = 'square'
  container.appendChild(div);
};

togglePixel();

document.rem

const promptBtn = document.querySelector('#promptBtn');

promptBtn.addEventListener('click', () => {
  container.remove();
  divs = containerTwo.querySelectorAll('#square');
  divs.forEach(div => {
    div.remove();
  });
  containerTwo.setAttribute('class', 'containerTwo');
  userInput = prompt('Enter a number 1 - 100');
  widthSize = Math.floor(Math.sqrt(userInput));
  containerTwo.style.display = `grid`;
  containerTwo.style.gridTemplateColumns = `repeat(${widthSize}, 1fr)`;
  for (i = 1; i <= userInput; i++) {
  div = document.createElement('div');
  div.id = 'square'
  containerTwo.appendChild(div);
  };
  togglePixel();
  })


  function togglePixel() {
 
    let pixels = document.querySelectorAll('#square')
  
    for (let pixel of pixels) {
      pixel.addEventListener('mouseover', () => {
        pixel.classList.toggle("pix")
      });
    }
  }