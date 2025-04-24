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

const tipsList = loadTips();

const tipsContainer = document.getElementById('tips-list');
if (tipsContainer) {
  tipsList.forEach(tip => {
    const listItem = document.createElement('li');
    listItem.textContent = tip;
    tipsContainer.appendChild(listItem);
  });
}


