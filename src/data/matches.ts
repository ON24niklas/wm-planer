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

  export const matchday2: Match[] = [
    { id: 'match-013', date: '26.12.2025', group: 'A', team1: 'Marokko', team2: 'Mali' },
    { id: 'match-014', date: '26.12.2025', group: 'A', team1: 'Sambia', team2: 'Komoren' },
    { id: 'match-015', date: '26.12.2025', group: 'B', team1: 'Angola', team2: 'Simbabwe' },
    { id: 'match-016', date: '26.12.2025', group: 'B', team1: 'Ägypten', team2: 'Südafrika' },
    { id: 'match-017', date: '27.12.2025', group: 'C', team1: 'Nigeria', team2: 'Tunesien' },
    { id: 'match-018', date: '27.12.2025', group: 'C', team1: 'Uganda', team2: 'Tansania' },
    { id: 'match-019', date: '27.12.2025', group: 'D', team1: 'Senegal', team2: 'DR Kongo' },
    { id: 'match-020', date: '27.12.2025', group: 'D', team1: 'Benin', team2: 'Botswana' },
    { id: 'match-021', date: '28.12.2025', group: 'E', team1: 'Algerien', team2: 'Burkina Faso' },
    { id: 'match-022', date: '28.12.2025', group: 'E', team1: 'Äquatorialguinea', team2: 'Sudan' },
    { id: 'match-023', date: '28.12.2025', group: 'F', team1: 'Gabun', team2: 'Mosambik' },
    { id: 'match-024', date: '28.12.2025', group: 'F', team1: 'Elfenbeinküste', team2: 'Kamerun' },
  ];

