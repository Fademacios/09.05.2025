document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formularz');
  const wynikDiv = document.getElementById('wynik');
  const czyscBtn = document.getElementById('czysc');

  form.addEventListener('submit', function () {
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const pelnoletni = document.getElementById('pelnoletni').checked;

    const pelnoletniTekst = pelnoletni ? 'jest pełnoletni' : 'nie jest pełnoletni';
    const tekst = imie + ' ' + nazwisko + ' ' + pelnoletniTekst;

    wynikDiv.textContent = tekst; 
  });

  czyscBtn.addEventListener('click', function () {
    form.reset();
    wynikDiv.textContent = '';
  });
});







