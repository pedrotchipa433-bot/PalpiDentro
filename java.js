alert('Bem Vindo
DEVb- Pedro Tchipa')
function trocar(secao) {
    document.querySelectorAll('.content > section').forEach(s => s.style.display = 'none');
    document.getElementById(secao).style.display = 'block';
  }
  trocar('Bundesliga');
    trocar('Premier');

  //texte
  