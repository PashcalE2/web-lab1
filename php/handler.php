<?php
$str_x = !empty($_POST['XVar']) ? $_POST['XVar'] : '';
$str_y = !empty($_POST['YVar']) ? $_POST['YVar'] : '';
?>
<html>
<head>
    <title>Обработка POST-запроса</title>
</head>
<body>
<p>
    Переданный x: <?= $str_x ?>
    <br>
    Переданный y: <?= $str_y ?>
</p>
</body>
</html>
