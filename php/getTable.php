<?php

session_set_cookie_params(0);
session_start();

if (isset($_SESSION["data"])) {
  foreach ($_SESSION["data"] as $row) {
    echo '<tr>' .
      '<td>' . $row["x"] . '</td>' .
      '<td>' . $row["y"] . '</td>' .
      '<td>' . $row["r"] . '</td>' .
      '<td>' . $row["ans"] . '</td>' .
      '<td>' . $row["start_time"] . '</td>' .
      '<td>' . $row["exec_time"] . '</td>' .
      '</tr>';
  }
}

?>
