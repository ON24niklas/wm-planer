import { renderGroups } from "./components/Groups";
import { renderMatchdayTips } from './components/Tips';
import { matchday1,matchday2,matchday3 } from './data/matches';

// Funktion zum Ändern des Titels und der Tipps basierend auf dem Spieltag
function updateMatchday(matchday: 'matchday1' | 'matchday2' | 'matchday3') {
    const matchdayTitle = document.getElementById('matchday-title') as HTMLHeadingElement;
    const tipInputContainer = document.getElementById('tip-input-container');
  
    if (matchdayTitle && tipInputContainer) {
      if (matchday === 'matchday1') {
        matchdayTitle.textContent = 'Spieltag 1';
        renderMatchdayTips(matchday1);
      } else if (matchday === 'matchday2') {
        matchdayTitle.textContent = 'Spieltag 2';
        renderMatchdayTips(matchday2);
        } else if (matchday === 'matchday3') {
        matchdayTitle.textContent = 'Spieltag 3';
      }
    }
  }

// Event-Listener für die Buttons
document.getElementById('showMatchday1')?.addEventListener('click', () => updateMatchday('matchday1'));
document.getElementById('showMatchday2')?.addEventListener('click', () => updateMatchday('matchday2'));
document.getElementById('showMatchday3')?.addEventListener('click', () => updateMatchday('matchday3'));

// Standardmäßig Spieltag 1 anzeigen
updateMatchday('matchday1');


renderGroups();

//document.addEventListener('DOMContentLoaded', () => {
    //renderMatchdayTips();
  //});

