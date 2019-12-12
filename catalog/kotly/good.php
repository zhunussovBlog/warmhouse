<?php
require_once "../../admin/function.php";
$id = $_GET['id'];
$good = get_boiler($link, $id);

$goodOut = [];
foreach ($good as $key => $value) {
  foreach ($value as $k => $v) {
    $goodOut[$k] = $v;
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $goodOut['name']; ?></title>
  <link rel="stylesheet" href="../../css/loadFirst.css">
  <link rel="stylesheet" href="../../css/userModal.css">
  <link rel="stylesheet" href="../../css/good.css">
</head>

<body>
  <?php include ('../../callback.php')?>
  <?php
  include('../../user-modal.php');
  ?>
  <div class="container">
    <?php
    include('../../header.php');
    ?>
    <div class="main">
      <?php
      include('../../catalog.php');
      ?>
      <div class="first-section">
        <div class="pathname">
          <a href="../../" class="pathname_main__link">Главная</a> -
          <a href="#" class="pathname_service__link">Каталог</a> -
          <a href="index.php" class="pathname_service__link">Котлы</a> -
          <span class="pathname__text"><?php echo $goodOut['name']; ?></span>
        </div>
        <div class="good goodPage" id="bx-<?php echo $goodOut['id'] ?>">
          <h1 class="good__name"><?php echo $goodOut['name']; ?></h1>
          <div class="good-wrapper">
            <div class="good-img_block">
              <img class="good__img" src="../../img/goods/<?php echo $goodOut['image']; ?>" alt="<?php $goodOut['name']; ?>">
              <div class="good__toF">
                <span class="good__toF-icon"></span>
              </div>
            </div>
            <div class="good-info_block">
              <span class="good__desc"><?php echo $goodOut['description']?></span>
              <ul class="good_features">
                <li class="good_features__item">
                  <span class="feature__name">Производитель</span>
                  <span class="desc"><?php echo $goodOut['manufacturer']?></span></li>
                <li class="good_features__item">
                  <span class="feature__name">Исполнение</span>
                  <span class="desc"><?php echo $goodOut['execution']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Назначение</span>
                  <span class="desc"><?php echo $goodOut['appointment']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Мощность (кВт)</span>
                  <span class="desc"><?php echo $goodOut['power']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Площадь помещения (кв.м.)</span>
                  <span class="desc"><?php echo $goodOut['premises']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Высота (мм)</span>
                  <span class="desc"><?php echo $goodOut['height']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Ширина (мм)</span>
                  <span class="desc"><?php echo $goodOut['width']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Глубина (мм)</span>
                  <span class="desc"><?php echo $goodOut['depth']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Тип камеры сгорания</span>
                  <span class="desc"><?php echo $goodOut['chamber']?></span>
                </li>
                <li class="good_features__item">
                  <span class="feature__name">Гарантия (мес)</span>
                  <span class="desc"><?php echo $goodOut['warranty']?></span>
                </li>
              </ul>
              <div class="feature_header"><span class="feature_header__text">Характеристики</span><span
                  class="feature_header__icon"></span></div>
              
              <div class="good-toBasket_block">
                <div class="good-about">
                  <span class="good__price"><?php echo $goodOut['cost']; ?> тг./шт</span>
                  <div class="good-status">
                    <span class="good-status__indicator active"></span>
                    <span class="good-status__text">Есть в наличии </span>
                  </div>
                </div>
                <div class="good-action">
                  <div class="count-cell">
                    <button class="cell-minus">–</button>
                    <span class="count__number">1</span>
                    <button class="cell-plus">+</button>
                  </div>
                  <button class="good-toBasket__btn">В корзину</button>
                </div>
              </div>
              <span class="textPrice">Цена действительна только для интернет-магазина и может отличаться от цен в розничных магазинах</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php
    include('../../footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>

  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/callback.css">
  <script src="../../js/w.js"></script>
</body>

</html>