<?php
require_once 'function.php';
$good = get_boiler($link, $_GET['id']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $good[0]['name']?> - Редактировать</title>
  <link rel="stylesheet" href="../css/admin.css">
</head>
<body>
  <div class="container">
    <a href="/warmhouse/admin/" class="mainpage">Назад</a>
    <h1 class="admin-header">Админ панель - Редактирование</h1>
    <?php
      echo '<form action="/warmhouse/admin/index.php?action=edit&id='. $good[0]['id'] .'" class="editGood" method="POST">
        <div class="good" id="bx-' . $good[0]['id'] . '">
          <div class="img">
            <div class="img_toGood">
              <div class="good__img" style="background-image: url(' . '/warmhouse/img/goods/' . $good[0]['image'] . ')">
              </div>
            </div>
            <input class="change_img" type="text" name="image" placeholder="Изменить фото" value="' . $good[0]['image'] . '">
          </div>
          <div class="good-info">
            <input required class="good__name" name="goodName" value="'. $good[0]['name'] .'">
            <div class="feature_header"><span class="feature_header__text">Характеристики:</span><span
                class="feature_header__icon"></span></div>
            <ul class="good_features">
              <li class="good_features__item">
                <span class="feature__name">Описание</span>
                <input required class="desc" name="description" type="text" value="' . $good[0]['description'] . '"></li>
              <li class="good_features__item">
                <span class="feature__name">Производитель</span>
                <input required class="desc" name="manufacturer" type="text" value="' . $good[0]['manufacturer'] . '"></li>
              <li class="good_features__item">
                <span class="feature__name">Исполнение</span>
                <input required class="desc" name="execution" type="text" value="' . $good[0]['execution'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Назначение</span>
                <input required class="desc" name="appointment" type="text" value="' . $good[0]['appointment'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Мощность (кВт)</span>
                <input required class="desc" name="power" type="number" value="' . $good[0]['power'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Площадь помещения (кв.м.)</span>
                <input required class="desc" name="premises" type="number" value="' . $good[0]['premises'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Высота (мм)</span>
                <input required class="desc" name="height" type="number" value="' . $good[0]['height'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Ширина (мм)</span>
                <input required class="desc" name="width" type="number" value="' . $good[0]['width'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Глубина (мм)</span>
                <input required class="desc" name="depth" type="number" value="' . $good[0]['depth'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Тип камеры сгорания</span>
                <input required class="desc" name="chumber" type="text" value="' . $good[0]['chamber'] . '">
              </li>
              <li class="good_features__item">
                <span class="feature__name">Гарантия (мес)</span>
                <input required class="desc" name="warranty" type="number" value="' . $good[0]['warranty'] . '">
              </li>
            </ul>
          </div>
          <div class="good-toBasket">
            <span class="good__price"> Цена: <input required class="input-price" name="price" type="number"
                value="' . $good[0]['cost'] . '"> тг./шт</span>
            <button type="submit" name="sub">Подвердить</button>
            <button type="button" class="resetBtn">Сбросить</button>
            <a href="/warmhouse/admin/" class="cancelBtn">Отменить редактирование</a>
          </div>
        </div>
      </form>';
    ?>
  </div>

  <script src="/warmhouse/admin/js/admin.js"></script>
</body>
</html>