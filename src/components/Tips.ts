// src/components/Tips.ts
export function createTipInput() {
    const container = document.getElementById('tip-input-container');

    if (!container) return;

    // Erstelle das Eingabefeld
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Gib deinen Tipp ein';

    // Erstelle einen Button für die Eingabe
    const button = document.createElement('button');
    button.textContent = 'Tipp speichern';

    // Button Event Listener
    button.addEventListener('click', () => {
        const value = input.value.trim();
        const regex = /^\d+:\d+$/; // prüft Format wie "3:1"
    
        if (regex.test(value)) {
          console.log(`Tipp gespeichert: ${value}`);
          input.value = '';
        } else {
          console.log('Bitte Tipp im Format z. B. "2:1" eingeben.');
        }
      });

    // Füge Input und Button zum Container hinzu
    container.appendChild(input);
    container.appendChild(button);
}

// Tipps speichern
function saveTips(tips: string[]) {
    localStorage.setItem('userTips', JSON.stringify(tips));  // Speichert die Tipps als JSON-String
  }
  
  // Tipps aus dem localStorage abrufen
  function loadTips(): string[] {
    const savedTips = localStorage.getItem('userTips');
    return savedTips ? JSON.parse(savedTips) : [];  // Gibt die gespeicherten Tipps oder ein leeres Array zurück
  }

// Beispiel, wie Tipps gespeichert werden:
const tips: string[] = [];

// Wenn der Benutzer einen Tipp hinzufügt:
function handleTipInput(tip: string) {
  tips.push(tip);
  saveTips(tips); // Speichern der Tipps im localStorage
}

// Laden der gespeicherten Tipps beim Start der Seite:
const loadedTips = loadTips(); // Holt die gespeicherten Tipps beim Laden der Seite
console.log(loadedTips); // Gibt die gespeicherten Tipps in der Konsole aus



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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Tipp löschen';
    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(match.id); // Tipp aus dem Speicher entfernen
      savedTipDisplay.textContent = '';
      input.value = ''; // Eingabefeld leeren
    });

    matchDiv.appendChild(label);
    matchDiv.appendChild(document.createElement('br'));
    matchDiv.appendChild(input);
    matchDiv.appendChild(button);
    matchDiv.appendChild(deleteButton);
    matchDiv.appendChild(savedTipDisplay);
    container.appendChild(matchDiv);

  });
}




