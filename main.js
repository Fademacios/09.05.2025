document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formularz');
  const kolorInput = document.getElementById('kolor');
  const wynik = document.getElementById('wynik');

  form.addEventListener('submit', function () {
    wynik.textContent = document.getElementById('imie').value + ' ' + document.getElementById('nazwisko').value + 
                        (document.getElementById('pelnoletni').checked ? ' jest pełnoletni' : ' nie jest pełnoletni');
    wynik.style.color = kolorInput.value;
  });

  document.getElementById('czysc').addEventListener('click', function () {
    form.reset();
    wynik.textContent = '';
    wynik.style.color = 'black';
  });
});



