const username = document.getElementById("username")

const saveScores = document.getElementById("saveScores");

const mostRecentScore = localStorage.getItem("mostRecentScore")

const totalScore = document.getElementById("totalScore")

const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
// alert(leaderboard)




totalScore.innerText = "Well done you got" + " " + mostRecentScore + " points";


username.addEventListener("keyup",() =>{
  saveScores.disabled = !username.value;
  // alert(username.value);

});






saveEndScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    leaderboard.push(score);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.splice(10);

    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    window.location.assign("index.html")
    // alert(leaderboard)
};
