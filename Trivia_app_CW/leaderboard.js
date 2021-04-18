const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];


const leaderboardFib = document.getElementById("leaderboardUsers");


leaderboard.map(scores =>{
  console.log(scores)
})



leaderboardFib.innerHTML = leaderboard
  .map(scores => {
    return `<li class="high-score">${scores.name} - ${scores.score}</li>`;
  })
  .join("");
