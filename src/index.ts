import { groups } from './data/matches';
function showGroups() {
    const container = document.getElementById('groups-container');
  
    if (!container) return;
  
    groups.forEach((group, index) => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'group';
      
      const title = document.createElement('h2');
      title.textContent = `Gruppe ${String.fromCharCode(65 + index)}`;
      groupDiv.appendChild(title);
  
      const list = document.createElement('ul');
      group.teams.forEach((team) => {
        const listItem = document.createElement('li');
        listItem.textContent = team;
        list.appendChild(listItem);
      });
  
      groupDiv.appendChild(list);
      container.appendChild(groupDiv);
    });
  }
  
  showGroups();
  