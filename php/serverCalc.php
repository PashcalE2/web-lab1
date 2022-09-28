<?php

const XMin = -5;
const XMax = 3;
const YMin = -3;
const YMax = 3;
const RVars = [1, 2, 3, 4, 5];

function isValidX($num) {
  return isset($num) && is_numeric($num) && ($num > XMin) && ($num < XMax);
}

function isValidY($num) {
  return isset($num) && is_numeric($num) && ($num > YMin) && ($num < YMax);
}

function isValidR($num) {
  return isset($num) && (in_array($num, RVars, true));
}

function inArea1($x, $y, $r) {
  return ($x >= -$r) && ($x <= 0) && ($y >= 0)
    && ($y <= $x + $r);
}

function inArea2($x, $y, $r) {
  return ($x >= -$r / 2) && ($x <= 0) && ($y <= 0)
    && ($x * $x + $y * $y <= $r * $r / 4);
}

function inArea3($x, $y, $r) {
  return ($x >= 0) && ($x <= $r) && ($y <= 0) && ($y >= -$r);
}

session_start();
if (!isset($_SESSION['data']))
    $_SESSION['data'] = array();

$x = (float)(isset($_POST["x-input"]) ? $_POST["x-input"] : "");
$y = (float)(isset($_POST["y-input"]) ? $_POST["y-input"] : "");
$r = (int)(isset($_POST["r-input"]) ? $_POST["r-input"] : "");
$tz = isset($_POST["timezone"]) ? $_POST["time"] : "";

if (isValidX($x) && isValidY($y) && isValidR($r)) {
  $inside = inArea1($x, $y, $r) || inArea2($x, $y, $r) || inArea3($x, $y, $r);
  $ans = $inside ? "Inside" : "Outside";
  $start_time = date("j M o G:i:s", time() - $tz * 60);
  $exec_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 6);
  $newrow = [
    "x" => $x,
    "y" => $y,
    "r" => $r,
    "ans" => $ans,
    "start_time"=> $start_time,
    "exec_time"=> $exec_time
  ];

  array_push($_SESSION["data"], $newrow);
}

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
?>
