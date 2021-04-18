const express = require('express');

const app = express();


<!doctype html>
<html lang="en">

<head>


  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css" />
  <title>Trivia Quiz</title>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
</head>

<body>
  <h1>Welcome to Trivia Quiz</h1>
  <div class="container">
    <div id="home" class="flex-center flex-column">
      <a class="btn" href="game.html"> Start General Knowledge</a>
      <a class="btn" href="categories.html">Categories</a>
      <a class="btn" href="leaderboard.html"> Scores</a>

// <!-- start takes you to general knowledge questions
// categories allows you to pick from different question category
// score displays all the scores save on the PC -->


    </div>
  </div>

</body>

</html>



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
