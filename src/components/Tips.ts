import { matchday1, Match } from '/Users/niklas.fcb/wm-planer/src/data/matches.ts';
export function renderMatchdayTips() {
  const container = document.getElementById('tip-input-container');
  if (!container) return;
  container.innerHTML = ''; // Vorherigen Inhalt löschen
  matchday1.forEach((match) => {
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-entry';
    const label = document.createElement('label');
    label.textContent = `${match.date} | Gruppe ${match.group}: ${match.team1} vs. ${match.team2}`;
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'z. B. 2:1';
    input.id = `tip-${match.id}`;
    const savedTip = localStorage.getItem(match.id); // Vorher gespeicherten Tipp laden
    const savedTipDisplay = document.createElement('span');
    savedTipDisplay.textContent = savedTip ? ` | Mein Tipp: ${savedTip}` : '';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Tipp löschen';
    const button = document.createElement('button');
    button.textContent = 'Tipp speichern';
    button.addEventListener('click', () => {
      const tip = input.value.trim();
      const regex = /^\d+:\d+$/;
      if (regex.test(tip)) {
        localStorage.setItem(match.id, tip); // Tipp unter der Match-ID speichern
        savedTipDisplay.textContent = ` | Mein Tipp: ${tip}`; // Anzeige aktualisieren
        input.value = '';
      } else {
        alert('Bitte das Format X:Y verwenden');
      }
    });
    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(match.id); // Tipp aus dem Speicher entfernen
      savedTipDisplay.textContent = '';
      input.value = ''; // Eingabefeld leeren


    });
    matchDiv.appendChild(label);
    matchDiv.appendChild(document.createElement('br'));
    matchDiv.appendChild(input);
    matchDiv.appendChild(deleteButton);
    matchDiv.appendChild(button);
    matchDiv.appendChild(savedTipDisplay);
    container.appendChild(matchDiv);
  });
}
