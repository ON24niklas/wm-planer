import { renderGroups } from "./components/Groups";
import { renderMatchdayTips } from './components/Tips';
import { matchday1 } from './data/matches';

renderGroups();

document.addEventListener('DOMContentLoaded', () => {
    renderMatchdayTips();
  });

