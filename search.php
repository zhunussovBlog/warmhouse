<?php
require_once 'admin/function.php';
$goods = null;
if ($_POST['enter']) {
  $goods = search($link, $_POST['searchInput']);
} else {
  $goods = search($link, $_POST['searchInput']);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Поиск по запросу '<?php echo $_POST['searchInput'] ?>'</title>
  <link rel="stylesheet" href="css/l-f.css">
  <link rel="stylesheet" href="css/um.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>

<body>
  <?php include ('callback.php')?>
  <?php
  include('user-modal.php');
  ?>
  <div class="container">
    <?php
    include('header.php');
    ?>
    <div class="main">
      <?php
      include('catalog.php');
      ?>
      <div class="first-section">
        <div class="pathname">
          <a href="../" class="pathname_main__link">Главная</a> -
          <a href="#" class="pathname_service__link">Каталог</a> -
          <span class="pathname__text">Поиск</span>
        </div>
        <h1 class="search__header">Результаты поиска по запросу: <?php echo $_POST['searchInput'] ?></h1>
        <div class="search_goods goods">
          <?php
          if ($goods) {
            foreach ($goods as $key => $value) {
              echo '<div class="good" id="bx-' . $value['id'] . '">
              <a href="/warmhouse/catalog/kotly/good.php?id=' . $value['id'] . '" class="img_toGood"><div class="good__img" style="background-image: url(' . '/warmhouse/img/goods/' . $value['image'] . ')"></div></a>
              <div class="good-info">
              <a href="/warmhouse/catalog/kotly/good.php?id=' . $value['id'] . '" class="good__name">' . $value['name'] . '</a>
              <div class="good-status"><span class="good-status__indicator active"></span><span class="good-status__text">Есть в наличии</span></div>
              <span class="good__feature-small">Мощность ' . $value['power'] . ' кВт, отапливает до ' . $value['premises'] . ' кв.м.</span>
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
              <div class="feature_header"><span class="feature_header__text">Характеристики</span><span class="feature_header__icon"></span></div>
              <div class="good_toFavorite">
              <span class="good__toF"><span class="good__toF-icon"></span></span>
              <span class="good__toF_text">Отложить</span>
              </div>
              </div>
              <div class="good-toBasket">
              <span class="good__price">' . $value['cost'] . ' тг./шт</span>
              <div class="good-toBasket_block">
              <div class="count-cell">
              <button class="cell-minus">–</button>
              <span class="count__number">1</span>
              <button class="cell-plus">+</button>
              </div>
              <button class="good-toBasket__btn">В корзину</button>
              </div>
              </div>
              </div>';
            }
          } else {
            echo "<span class='nothing__text'>К сожалению по вашему зарпосу ничего не найдено</span>";
          }
          ?>
        </div>
      </div>
    </div>
    <?php
    include('footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>

  <link rel="stylesheet" href="css/s.css">
  <link rel="stylesheet" href="css/callback.css">
  <script src="js/w.js"></script>
</body>

</html>