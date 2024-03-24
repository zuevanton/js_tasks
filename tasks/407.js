const computeRanks = (number, games) => {
  const teams = []

  for(let i = 0; i < number; i++) {
    teams.push({id: i, gd: 0, points: 0, rank: 0, goals: 0})
  }

  for(const game of games) {
    const [teamA, teamB, goalA, goalB] = game;

    teams[teamA].goals += goalA
    teams[teamB].goals += goalB

    teams[teamA].gd += goalA - goalB;
    teams[teamB].gd += goalB - goalA;

    if(goalA > goalB) {
      teams[teamA].points += 2;
    } else if(goalB > goalA) {
      teams[teamB].points += 2;
    } else {
      teams[teamB].points += 1;
      teams[teamA].points += 1;
    }
  }
  const comparator = (a, b) => b.points - a.points || b.gd - a.gd || b.goals - a.goals
  teams.sort(comparator)
  
  for(let i = 0; i < teams.length; i++) {
    if(i !== 0 && comparator(teams[i], teams[i - 1]) === 0){
      teams[i].rank = teams[i - 1].rank;
    } else {
      teams[i].rank = i + 1;
    }
    
  }
  console.table(teams);
  return teams.sort((a, b) => a.id - b.id).map((team) => team.rank)
}

console.log(computeRanks(6, 
  [[0, 5, 2, 2],
   [1, 4, 0, 2],
   [2, 3, 1, 2],
   [1, 5, 2, 2],
   [2, 0, 1, 1],
   [3, 4, 1, 1],
   [2, 5, 0, 2],
   [3, 1, 1, 1],
   [4, 0, 2, 0]]))
// [4,4,6,3,1,2]
