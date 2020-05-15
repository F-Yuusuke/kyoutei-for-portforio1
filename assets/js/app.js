(function() {
  let btn = document.getElementById('btn');
  let output = document.getElementById('output');
  let overlay = document.getElementById('overlay');

  btn.addEventListener('click', function() {
    result();
    overlay.classList.add('fadein');
    output.classList.add('fadein');
  });

  overlay.addEventListener('click', function() {
    output.classList.remove('fadein');
    overlay.classList.remove('fadein');
  });

  function result() {
    let index = Math.floor(Math.random() * 6);

    switch (index) {
      case 0:
        output.textContent = '1-2-3';
        break;
      case 1:
        output.textContent = '1-3-2';
        break;
      case 2:
        output.textContent = '2-1-3';
        break;
      case 3:
        output.textContent = '2-3-1';
        break;
      case 4:
        output.textContent = '3-1-2';
        break;
      default:
        output.textContent = '3-2-1';
        break;
    }
  }
})();