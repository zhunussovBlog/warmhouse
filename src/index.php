<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - интернет магазин, газовые котлы и запчасти</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/user_modal.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>
<body>
  <div class="user-modal">
    <div class="user-modal_rside">
      <div class="user-modal__toBasket user-modal_rside__item">
        <span class="user-modal_rside__item_bg"></span><span class="user-modal_rside__item_icon"></span>
      </div>
      <div class="user-modal__toFavorites user-modal_rside__item">
        <span class="user-modal_rside__item_bg"></span><span class="user-modal_rside__item_icon"></span>
      </div>
      <div class="user-modal_rside__item"></div>
      <a href="#" class="user-modal__toPersonal user-modal_rside__item">
        <span class="user-modal_rside__item_bg"></span><span class="user-modal_rside__item_icon"></span>
      </a>
    </div>
    <div class="user-modal_hidden">
      <div class="user-modal_hidden-header">
        <h2 class="user-modal_hidden__header">Корзина заказа</h2>
        <div class="user-modal_hidden__basketLink">Готовые к заказу (<span class="basket-good__number">0</span>)</div>
        <div class="user-modal_hidden__favoriteLink">Отложенные (<span class="favorite-good__number">0</span>)</div>
      </div>
      <div class="user-modal_favorite">
        <table class="user-modal_table">
          <tr class="user-modal_table-item">
            <th></th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th></th>
            <th></th>
          </tr>
          <tr class="favorite-modal_good">
            <td class="basket-modal_good_img"><img src="img/main/parts-1.png" alt=""></td>
            <td class="favorite_name"><a href="#" class="basket-modal_name__link">Lorem ipsum dolor sit amet.</a></td>
            <td class="favorite_price">
              <span>Розничная цена</span>
              <span class="favorite_price__text">80 000 тг.</span>
            </td>
            <td class="favorite__count">
              <span class="count__text">1</span> шт.
            </td>
            <td class="favorite__sum">80 000 тг.</td>
            <td class="favorite__toF" title="Добавить в корзину"><img src="img/user-modal/basket-dark.svg" alt=""></td>
            <td class="favorite__remove"><span class="remove-s" title="Удалить">&times;</span></td>
          </tr>
        </table>
      </div>
      <div class="user-modal_basket">
        <table class="user-modal_table">
          <tr class="user-modal_table-item">
            <th></th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th></th>
            <th></th>
          </tr>
          <tr class="basket-modal_good">
            <td class="basket-modal_good_img"><img src="img/main/parts-1.png" alt=""></td>
            <td class="basket-modal_good_name"><a href="#" class="basket-modal_name__link">Lorem ipsum dolor sit amet.</a></td>
            <td class="basket-modal_good_price">
              <span>Розничная цена</span>
              <span class="basket-modal_good_price__text">80 000 тг.</span>
            </td>
            <td class="basket-modal_good__count">
              <div class="count-cell">
                <button class="cell-minus">–</button>
                <span class="count__number">1</span>
                <button class="cell-plus">+</button>
              </div>
            </td>
            <td class="basket-modal_good__sum">80 000 тг.</td>
            <td class="basket-modal_good__toF" title="Отложить"><img src="img/popular/favorite.svg" alt=""></td>
            <td class="basket-modal_good__remove"><span class="remove-s" title="Удалить">&times;</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
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
          <a href="#" class="good-type"><div class="bg--black visuallyHidden"></div><span class="good-type__name">Lorem</span><span class="good-type__desc">Lorem ipsum dolor sit amet.</span></a>
          <a href="#" class="good-type"><div class="bg--black visuallyHidden"></div><span class="good-type__name">Lorem</span><span class="good-type__desc">Lorem ipsum dolor sit amet.</span></a>
        </div>
        <div class="popular-block">
          <span class="popular-block__text">Популярные товары</span>
          <div class="popular-goods">
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
              <div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Есть
                  в наличии</span></div>
              <span class="good__price">80 000 тг/шт</span>
              <a href="#" class="good__more">Подробнее</a>
              <span class="good__toF"><span class="good__toF-icon"></span></span>
            </div>
            <div class="good">
              <div class="good__img"></div>
              <span class="good__name">Lorem ipsum dolor sit amet.</span>
              <div class="good-rating">
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
                <span class="good-rating__item"></span>
              </div>
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

  <script src="js/script.js"></script>
</body>
</html>