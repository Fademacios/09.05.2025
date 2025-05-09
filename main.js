document.addEventListener('DOMContentLoaded', function () {
  const kolorInput = document.getElementById('kolor');

  if (kolorInput) {
    kolorInput.addEventListener('input', function () {
      const wybranyKolor = kolorInput.value;
      document.body.style.backgroundColor = wybranyKolor;
    });
  }
});


