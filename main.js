document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formularz');
  const kolorInput = document.getElementById('kolor');
  const wynik = document.getElementById('wynik');
  const czyscBtn = document.getElementById('czysc');
  let kliknietyTekst = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const pelnoletni = document.getElementById('pelnoletni').checked;
    const kolor = kolorInput.value;
    wynik.textContent = `${imie} ${nazwisko} ${pelnoletni ? 'jest pełnoletni' : 'nie jest pełnoletni'}`;
    wynik.style.color = kolor;
    wynik.style.backgroundColor = 'transparent';
    kliknietyTekst = false;
  });

  wynik.addEventListener('click', function () {
    kliknietyTekst = true;
  });

  kolorInput.addEventListener('input', function () {
    if (kliknietyTekst) wynik.style.backgroundColor = kolorInput.value;
  });

  czyscBtn.addEventListener('click', function () {
    form.reset();
    wynik.textContent = '';
    wynik.style.color = 'black';
    wynik.style.backgroundColor = 'transparent';
    kliknietyTekst = false;
  });
});


