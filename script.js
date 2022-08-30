const container = document.querySelector('#container');

for (i = 1; i <= 16; i++) {
  div = document.createElement('div');
  div.textContent = i;
  container.appendChild(div);
}

//give div class name
//add an event listener to the divs
//if mouse hovers over div toggle css class on/off