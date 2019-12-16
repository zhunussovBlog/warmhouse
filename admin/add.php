<?php
require_once 'function.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Админ панель - Добавить товар</title>
  <link rel="stylesheet" href="../css/admin.css">
</head>

<body>
  <div class="container">
    <a href="/warmhouse/admin/" class="mainpage">Назад</a>
    <h1 class="admin-header">Админ панель - Добавить товар</h1>
    <?php
    echo '<form action="/warmhouse/admin/index.php?action=add" class="addGood" method="POST">
        <div class="good">
          <div class="img addImg">
            <div class="img_toGood">
              <div class="good__img" style="background-image: url(' . '/warmhouse/img/photo.svg' . '">
              </div>
            </div>
            <input class="change_img" type="text" name="image" placeholder="Добавить фото" required>
          </div>
          <div class="good-info">
            <input required class="good__name" name="goodName" placeholder="Название товара">
            <div class="feature_header"><span class="feature_header__text">Характеристики:</span><span
                class="feature_header__icon"></span></div>
            <ul class="good_features">
              <li class="good_features__item">
                <span class="feature__name">Описание</span>
                <input required class="desc" name="description" type="text"></li>
              <li class="good_features__item">
                <span class="feature__name">Производитель</span>
                <input required class="desc" name="manufacturer" type="text"></li>
              <li class="good_features__item">
                <span class="feature__name">Исполнение</span>
                <input required class="desc" name="execution" type="text">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Назначение</span>
                <input required class="desc" name="appointment" type="text">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Мощность (кВт)</span>
                <input required class="desc" name="power" type="number">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Площадь помещения (кв.м.)</span>
                <input required class="desc" name="premises" type="number">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Высота (мм)</span>
                <input required class="desc" name="height" type="number">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Ширина (мм)</span>
                <input required class="desc" name="width" type="number">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Глубина (мм)</span>
                <input required class="desc" name="depth" type="number">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Тип камеры сгорания</span>
                <input required class="desc" name="chumber" type="text">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Гарантия (мес)</span>
                <input required class="desc" name="warranty" type="number">
              </li>
            </ul>
          </div>
          <div class="good-toBasket">
            <span class="good__price"> Цена: <input requsetred class="input-price" name="price" type="number"
                placeholder="' . $good[0]['cost'] . '"> тг./шт</span>
            <button type="submit" name="sub">Добавить</button>
            <button type="button" class="resetBtn">Сбросить</button>
            <a href="/warmhouse/admin/" class="cancelBtn">Отменить добавление</a>
          </div>
        </div>
      </form>';
    ?>

  </div>

  <script src="/warmhouse/admin/js/admin.js"></script>
</body>

</html>