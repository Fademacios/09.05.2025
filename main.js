document.addEventListener('DOMContentLoaded', () => {
  const kolorInput = document.getElementById('kolor');
  const form = document.getElementById('formularz');

  kolorInput.addEventListener('input', function () {
    document.body.style.backgroundColor = this.value;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // zapobiega przeładowaniu

    const dane = {
      imie: document.getElementById('imie').value,
      nazwisko: document.getElementById('nazwisko').value,
      pelnoletni: document.getElementById('pelnoletni').checked,
      kolor: document.getElementById('kolor').value,
    };

    console.log('Dane z formularza:', dane);
    alert("Formularz został wysłany (lokalnie)");
  });
});


