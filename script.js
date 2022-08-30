const container = document.querySelector('#container');

for (i = 1; i <= 16; i++) {
  div = document.createElement('div');
  div.id = 'square'
  container.appendChild(div);
};


const pixels = document.querySelectorAll('#square')

for (let pixel of pixels) {
  pixel.addEventListener('mouseover', () => {
    pixel.classList.toggle("pix")
  });
}


//give div class name
//add an event listener to the divs
//if mouse hovers over div toggle css class on/off