<?php
require_once 'function.php';
$goods = get_boilers($link);
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - Админ панель</title>
  <link rel="stylesheet" href="../css/admin.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>

<body>
  <div class="container">
    <a href="/warmhouse/" class="mainpage">На главную</a>
    <h1 class="admin-header">Warm House - Админ панель - Список Товаров</h1>
    <div class="goods">
      <a href="/warmhouse/admin/add.php" class="add_good" title="Добавить товар">
        <img src="/warmhouse/img/plus.svg" alt="plus" class="plus">
        <span>Добавить товар</span>
      </a>
      <?php
      foreach ($goods as $key => $value) {
        echo '<div class="good" id="bx-' . $value['id'] . '">
          <a href="../catalog/kotly/good.php?id=' . $value['id'] . '" class="img_toGood"><div class="good__img" style="background-image: url(' . '../img/goods/' . $value['image'] . ')"></div></a>
          <div class="good-info">
            <a href="../catalog/kotly/good.php?id=' . $value['id'] . '" class="good__name">' . $value['name'] . '</a>
            <span class="good__feature-small">Мощность ' . $value['power'] . ' кВт, отапливает до ' . $value['premises'] . ' кв.м.</span>
            <div class="feature_header"><span class="feature_header__text">Характеристики:</span><span class="feature_header__icon"></span></div>
            <ul class="good_features">
              <li class="good_features__item">
                <span class="feature__name">Производитель</span>
            <span class="desc">' . $value['manufacturer'] . '</span></li>
          <li class="good_features__item">
            <span class="feature__name">Исполнение</span>
            <span class="desc">' . $value['execution'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Назначение</span>
            <span class="desc">' . $value['appointment'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Мощность (кВт)</span>
            <span class="desc">' . $value['power'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Площадь помещения (кв.м.)</span>
            <span class="desc">' . $value['premises'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Высота (мм)</span>
            <span class="desc">' . $value['height'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Ширина (мм)</span>
            <span class="desc">' . $value['width'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Глубина (мм)</span>
            <span class="desc">' . $value['depth'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Тип камеры сгорания</span>
            <span class="desc">' . $value['chamber'] . '</span>
          </li>
          <li class="good_features__item">
            <span class="feature__name">Гарантия (мес)</span>
            <span class="desc">' . $value['warranty'] . '</span>
          </li>
          </ul>
          </div>
          <div class="good-toBasket">
          <span class="good__price"> Цена: ' . $value['cost'] . ' тг./шт</span>
          <form action="edit.php" method="get" class="submit">
            <a href="/warmhouse/admin/edit.php?id=' . $value['id'] . '" class="edit" name="edit">Редактировать</a>
          </form>
          <button class="remove" name="remove">Удалить</button>
          </div>
          </div>';
      }
      ?>
    </div>
  </div>
</body>

</html>