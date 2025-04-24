import { renderGroups } from "./components/Groups";
import { createTipInput } from './components/Tips';
import { renderMatchdayTips } from '/Users/niklas.fcb/wm-planer/src/components/Tips.ts';

renderGroups(); // Zeigt die Gruppen mit je 4 Teams an
createTipInput(); // Zeigt das Eingabefeld und den Button für Tipps an
document.addEventListener('DOMContentLoaded', () => {
    renderMatchdayTips();
  });
