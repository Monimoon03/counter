let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      counter--;
    }
    else if (styles.contains('increase')) {
      counter++;
    } 
    else {
      counter = 0;
    }
    value.textContent = counter;
  })
})