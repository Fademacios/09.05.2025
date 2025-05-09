document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formularz');
  const kolorInput = document.getElementById('kolor');
  const wynikDiv = document.getElementById('wynik');
  const czyscBtn = document.getElementById('czysc');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const pelnoletni = document.getElementById('pelnoletni').checked;
    const kolor = kolorInput.value;

    const pelnoletniTekst = pelnoletni ? 'jest pełnoletni' : 'nie jest pełnoletni';
    const tekst = imie + ' ' + nazwisko + ' ' + pelnoletniTekst;

    wynikDiv.textContent = tekst;
    wynikDiv.style.color = kolor;
  });

  kolorInput.addEventListener('input', function () {
    wynikDiv.style.backgroundColor = kolorInput.value;
  });

  czyscBtn.addEventListener('click', function () {
    form.reset();
    wynikDiv.textContent = '';
    wynikDiv.style.backgroundColor = 'transparent';
    wynikDiv.style.color = 'black';
  });
});


