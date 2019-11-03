<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - интернет магазин, газовые котлы и запчасти</title>
  <link rel="stylesheet" href="css/firstload.css">
  <link rel="stylesheet" href="css/user-modal.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>
<body>
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
        <div class="top_slider-wrapper">
          <div class="slider">
            <ul class="slides"></ul>
            <ol class="slider_control-nav">
              <li class="slider_control-nav__item active"></li>
              <li class="slider_control-nav__item"></li>
              <li class="slider_control-nav__item"></li>
            </ol>
            <ul class="slider_nav-btns">
              <li class="slider_nav-prev"></li>
              <li class="slider_nav-next"></li>
            </ul>
          </div>
        </div>
        <div class="tizers-block">
          <div class="tizer"><img src="img/tizers/present.svg" alt="" class="tizer__img"><span class="tizer__text">Обслуживание в первый месяц</span></div>
          <div class="tizer"><img src="img/tizers/sec.svg" alt="" class="tizer__img"><span class="tizer__text">Гарантия на весь товар</span></div>
          <div class="tizer"><img src="img/tizers/time.svg" alt="" class="tizer__img"><span class="tizer__text">Быстрая обработка заказа</span></div>
          <div class="tizer"><img src="img/tizers/del.svg" alt="" class="tizer__img"><span class="tizer__text">Служба доставки</span></div>
        </div>
        <div class="types-block">
          <a href="boilers.php" class="good-type"><div class="bg--black visuallyHidden"></div><span class="good-type__name">Lorem</span><span class="good-type__desc">Lorem ipsum dolor sit amet.</span></a>
          <a href="#" class="good-type"><div class="bg--black visuallyHidden"></div><span class="good-type__name">Lorem</span><span class="good-type__desc">Lorem ipsum dolor sit amet.</span></a>
        </div>
        <div class="popular-block">
          <span class="popular-block__text">Популярные товары</span>
          <div class="popular-goods">
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php 
      include('footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>

  <link rel="stylesheet" href="css/main.css">
  <script src="js/script.js"></script>
</body>
</html>