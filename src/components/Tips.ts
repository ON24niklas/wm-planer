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
