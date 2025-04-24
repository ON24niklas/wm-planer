// src/data/matches.ts
export const groups = [
    { name: "Gruppe A", teams: ["Mali", "Marokko", "Sambia", "Union der Komoren"] },
    { name: "Gruppe B", teams: ["Angola", "Simbabwe", "Südafrika", "Ägypten"] },
    { name: "Gruppe C", teams: ["Nigeria", "Tansania", "Tunesien", "Uganda"] },
    { name: "Gruppe D", teams: ["Benin", "Botsuana", "Demokratische Republik Kongo", "Senegal"] },
    { name: "Gruppe E", teams: ["Algerien", "Burkina Faso", "Sudan", "Äquatorialguinea"] },
    { name: "Gruppe F", teams: ["Elfenbeinküste", "Gabun", "Kamerun", "Mosambik"] },
  ];

  export interface Match {
    id: string;
    date: string;
    group: string;
    team1: string;
    team2: string;
  }
  
  export const matchday1: Match[] = [
    { id: 'match-001', date: '21.12.2025', group: 'A', team1: 'Marokko', team2: 'Komoren' },
    { id: 'match-002', date: '22.12.2025', group: 'A', team1: 'Mali', team2: 'Sambia' },
    { id: 'match-003', date: '22.12.2025', group: 'B', team1: 'Ägypten', team2: 'Simbabwe' },
    { id: 'match-004', date: '22.12.2025', group: 'B', team1: 'Südafrika', team2: 'Angola' },
    { id: 'match-005', date: '23.12.2025', group: 'C', team1: 'Nigeria', team2: 'Tansania' },
    { id: 'match-006', date: '23.12.2025', group: 'C', team1: 'Tunesien', team2: 'Uganda' },
    { id: 'match-007', date: '23.12.2025', group: 'D', team1: 'Senegal', team2: 'Botswana' },
    { id: 'match-008', date: '23.12.2025', group: 'D', team1: 'DR Kongo', team2: 'Benin' },
    { id: 'match-009', date: '24.12.2025', group: 'E', team1: 'Algerien', team2: 'Sudan' },
    { id: 'match-010', date: '24.12.2025', group: 'E', team1: 'Burkina Faso', team2: 'Äquatorialguinea' },
    { id: 'match-011', date: '24.12.2025', group: 'F', team1: 'Elfenbeinküste', team2: 'Mosambik' },
    { id: 'match-012', date: '24.12.2025', group: 'F', team1: 'Kamerun', team2: 'Gabun' },
  ];
  

