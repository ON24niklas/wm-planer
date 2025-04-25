// Import von Spieldaten und dem Match-Typ
import { matchday1, matchday2, Match } from '/Users/niklas.fcb/wm-planer/src/data/matches.ts'; 

// Button für Spieltag 1
document.getElementById('showMatchday1')?.addEventListener('click', () => {
    // Vorherigen Inhalt löschen, bevor Spieltag 1 angezeigt wird
    const container = document.getElementById('tip-input-container');
    if (container) {
        container.innerHTML = ''; // Löscht den aktuellen Inhalt
    }
    renderMatchdayTips(matchday1); // Zeigt Spieltag 1 an
});

// Button für Spieltag 2
document.getElementById('showMatchday2')?.addEventListener('click', () => {
    // Vorherigen Inhalt löschen, bevor Spieltag 2 angezeigt wird
    const container = document.getElementById('tip-input-container');
    if (container) {
        container.innerHTML = ''; // Löscht den aktuellen Inhalt
    }
    renderMatchdayTips(matchday2); // Zeigt Spieltag 2 an
});

// Funktion zur Darstellung und Bearbeitung der Tipps für den 1. Spieltag
export function renderMatchdayTips(matches: Match[]) {
  const container = document.getElementById('tip-input-container');
  if (!container) return;

  // Vorherigen Inhalt löschen
  container.innerHTML = '';

  // Für jedes Spiel:
  matches.forEach((match) => {
    // Container für ein einzelnes Spiel erstellen
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-entry';

    // Label mit Spieldetails (Datum, Gruppe, Teams)
    const label = document.createElement('label');
    label.textContent = `${match.date} | Gruppe ${match.group}: ${match.team1} vs. ${match.team2}`;

    // Eingabefeld für Tipp
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'z. B. 2:1';
    input.id = `tip-${match.id}`;

    // Tipp aus dem lokalen Speicher laden (falls vorhanden)
    const savedTip = localStorage.getItem(match.id);

    // Anzeigeelement für gespeicherten Tipp
    const savedTipDisplay = document.createElement('span');
    savedTipDisplay.textContent = savedTip ? ` | Mein Tipp: ${savedTip}` : '';

    // Button zum Löschen des Tipps
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Tipp löschen';

    // Button zum Speichern des Tipps
    const button = document.createElement('button');
    button.textContent = 'Tipp speichern';

    // Tipp speichern: Validierung (Format X:Y) und Abspeichern
    button.addEventListener('click', () => {
      const tip = input.value.trim();
      const regex = /^\d+:\d+$/;

      if (regex.test(tip)) {
        localStorage.setItem(match.id, tip);
        savedTipDisplay.textContent = ` | Mein Tipp: ${tip}`;
        input.value = '';
      } else {
        alert('Bitte das Format X:Y verwenden');
      }
    });

    // Tipp löschen: Aus dem Speicher und aus der Anzeige entfernen
    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(match.id);
      savedTipDisplay.textContent = '';
      input.value = '';
    });

    // Elemente in den Match-Container einfügen
    matchDiv.appendChild(label);
    matchDiv.appendChild(document.createElement('br'));
    matchDiv.appendChild(input);
    matchDiv.appendChild(deleteButton);
    matchDiv.appendChild(button);
    matchDiv.appendChild(savedTipDisplay);

    // Match-Container in das Haupt-Container-Element einfügen
    container.appendChild(matchDiv);
  });
}

