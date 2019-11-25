<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - интернет магазин, газовые котлы и запчасти</title>
  <link rel="stylesheet" href="css/firstload.css">
  <link rel="stylesheet" href="css/um.css">
  <link rel="stylesheet" href="css/basket.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>

<body>
  <div class="container">
    <?php
    include('header.php');
    ?>
    <div class="main">
      <div class="first-section">
        <div class="pathname">
          <a href="/warmhouse/" class="pathname_main__link">Главная</a> -
          <span class="pathname__text">Корзина</span>
        </div>
        <h1 class="basket__header">Корзина</h1>
        <div class="total-wrapper">
          <span class="total_block"><span class="total__text">Итого:</span><span class="total__price" name="total-price">0 тг.</span></span>
          <button type="submit" class="basket__btn">Оформить заказ</button>
        </div>

        <div class="goods-wrapper">
          <div class="header_block">
            <span class="good_amount">В корзине <span class="basket-goods__amount">0</span> товара <span class="favorites">0 отложено</span></span>
          </div>
          <div class="goods basket-goods">
            
          </div>
        </div>
      </div>
    </div>
    <?php
    include('footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>

  <link rel="stylesheet" href="css/style.css">
  <script src="js/p.js"></script>
</body>

</html>