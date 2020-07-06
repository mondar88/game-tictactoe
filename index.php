<?php
if (isset($_POST['startButton'])) {
  $p1 = $_POST['playername1'];
  $p2 = $_POST['playername2'];
}


?>
<!DOCTYPE html>
<html>
<head>
  <title>Tic-Tac-Toe</title>
  <meta charset="utf-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie-edge">
  <link rel="stylesheet" href="tictactoe.css">
  <script src="script.js" defer></script>
  <title>Tic-Tac-Toe</title>
</head>

<body>
  <div class="startscreen">
    <div class="leadboard">
      <div class="turn" id="pturn">
        <div data-player-turn-text></div>
      </div>
      <form class="" id="playform" method="post">
        <div class="login" id="players">
          <input type="text" id="playername1" placeholder="player 1">
          <input type="text" id="playername2" placeholder="player 2">
          <button type="button" name="button" id="startButton">ok</button>
        </div>
      </form>


    </div>
    <div class="board" id="board">
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
    </div>
  </div>
  <div class="winning-message" id="winningMessage">
    <div data-winning-message-text></div>
    <button id="restartButton">Restart</button>
  </div>



</body>



</html>

<?php  ?>
