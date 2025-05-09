document.addEventListener('DOMContentLoaded', () => {
  const kolorInput = document.getElementById('kolor');

  kolorInput.addEventListener('input', (event) => {
    const wybranyKolor = event.target.value;
    document.body.style.backgroundColor = wybranyKolor;
  });
});

