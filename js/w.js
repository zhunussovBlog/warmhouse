'use strict';

//out goods to main pages
function goodOut(json) {
  let myJson = JSON.parse(json);
  let obj = {};
  for(let i in myJson){
    obj[myJson[i].id] = {
      "name": myJson[i].name,
      "description": myJson[i].description,
      "cost": +myJson[i].cost,
      "amount": +myJson[i].amount,
      "isFavorite": Boolean(+myJson[i].isFavorite),
      "isBasket": Boolean(+myJson[i].isBasket),
      "image": myJson[i].image,
      "feature": {
        "manufacturer": myJson[i].manufacturer,
        "execution": myJson[i].execution,
        "appointment": myJson[i].appointment,
        "power": +myJson[i].power,
        "premises": +myJson[i].premises,
        "height": +myJson[i].height,
        "width": +myJson[i].width,
        "depth": +myJson[i].depth,
        "chamber": myJson[i].chamber,
        "warranty": +myJson[i].warranty
      }
    };
  }
  let goods = obj;
  let favorites = JSON.parse(localStorage.getItem('favs'));
  let basket = JSON.parse(localStorage.getItem('bas'));

  if(document.querySelector('.user-modal')) {
    //user modal favorites (out goods in favorites)
    if (favorites && Object.keys(favorites).length != 0) {
      let length = 0;
      document.querySelector('.user-modal_tableFav-item').style.display = 'table-row';
      document.querySelector('.trush').classList.add('active');

      for (let prop in favorites) {
        length++;
        //to user-modal
        let newFavGood = favorites[prop];
        let favoriteItem = document.createElement('tr');
        favoriteItem.className = 'favorite-modal_good';
        favoriteItem.id = 'fav-' + prop;
        favoriteItem.innerHTML = `
        <td class="basket-modal_good_img"><img src="/warmhouse/img/goods/${newFavGood['image']}" alt=""></td>
        <td class="favorite_name"><a href="/warmhouse/catalog/kotly/good.php?id=${prop}" class="basket-modal_name__link">${newFavGood['name']}</a></td>
        <td class="favorite_price">
          <span>Розничная цена</span>
          <span class="favorite_price__text">${newFavGood['cost']} тг.</span>
        </td>
        <td class="favorite__count">
          <span class="count__text">1</span> шт.
        </td>
        <td class="favorite__sum">${newFavGood['cost']} тг.</td>
        <td class="favorite__toF" title="Добавить в корзину"><img class="favorite__toF_img" src="/warmhouse/img/user-modal/basket-dark.svg" alt=""></td>
        <td class="favorite__remove"><span class="remove-s" title="Удалить">&times;</span></td>
      `;

        document.querySelector('.user-modal_tableFav').appendChild(favoriteItem);
      }

      document.querySelector('.favorite-good__number').innerHTML = length;
      document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.innerHTML = length);
      document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.style.display = 'flex');
      if (!length) document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.style.display = 'none');
    } else document.querySelector('.fav-empty').classList.add('active');

    //user modal basket (out goods in basket)
    if (basket && Object.keys(basket).length != 0) {
      let length = 0,
        sum = 0;
      document.querySelector('.user-modal_tableBasket-item').style.display = 'table-row';
      document.querySelector('.trush').classList.add('active');

      for (let prop in basket) {
        length++;
        let newBasketGood = basket[prop];
        let basketItem = document.createElement('tr');
        basketItem.className = 'basket-modal_good';
        basketItem.id = 'bas-' + prop;
        basketItem.innerHTML = `
        <td class="basket-modal_good_img"><img src="/warmhouse/img/goods/${newBasketGood['image']}" alt=""></td>
        <td class="basket-modal_good_name"><a href="/warmhouse/catalog/kotly/good.php?id=${prop}" class="basket-modal_name__link">${newBasketGood['name']}</a></td>
        <td class="basket-modal_good_price">
          <span>Розничная цена</span>
          <span class="basket-modal_good_price__text">${newBasketGood['cost']} тг.</span>
        </td>
        <td class="basket-modal_good__count">
          <div class="count-cell">
            <button class="cell-minus">–</button>
            <span class="count__number">${newBasketGood['amount']}</span>
            <button class="cell-plus">+</button>
          </div>
        </td>
        <td class="basket-modal_good__sum">${newBasketGood['cost'] * newBasketGood['amount']} тг.</td>
        <td class="basket-modal_good__toF" title="Отложить"><img class="basket-modal_good__toF_img" src="/warmhouse/img/popular/favorite.svg" alt=""></td>
        <td class="basket-modal_good__remove"><span class="remove-s" title="Удалить">&times;</span></td>
        `;

        document.querySelector('.user-modal_tableBasket').appendChild(basketItem);
        sum += +basketItem.querySelector('.basket-modal_good__sum').innerHTML.match(/\d+/);
      }

      let footer = document.querySelector('.user-modal_basket-footer');
      footer.classList.add('active');
      footer.querySelector('.total__count').innerHTML = sum + ' тг.';
      document.querySelector('.basket-good__number').innerHTML = length;
      document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.innerHTML = length);
      document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.style.display = 'flex');
      if (!length) document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.style.display = 'none');
      else document.querySelector('.basket-empty').classList.remove('active');
    } else document.querySelector('.basket-empty').classList.add('active');
  }

  //for out goods in main pages
  let popGoodOut = '', goodOut = '';

  //out goods to main pages from data(json file)
  for (let key in goods) {
    let favoriteGood = null;
    let basketGood = null;
    for (let prop in favorites){
      favoriteGood = favorites[key];
    }
    for(let prop in basket){
      basketGood = basket[key];
    }

    //out popular goods in popular goods block
    if (document.querySelector('.popular-goods')) {
      popGoodOut += `<div class="good__img"></div>`;
      popGoodOut += `<span class="good__name">${goods[key].name}</span>`;
      popGoodOut += '<div class="good-status"><span class="good-status__indicator active"></span><span class="good-status__text">Есть в наличии </span></div>';
      popGoodOut += `<span class="good__price">${goods[key].cost} тг/шт</span>`;
      popGoodOut += `<a href="catalog/kotly/good.php?id=${key}" class="good__more">Подробнее</a>`;
      if (favoriteGood && favoriteGood.isFavorite) popGoodOut += '<span class="good__toF active"><span class="good__toF-icon active"></span></span>';
      else popGoodOut += '<span class="good__toF"><span class="good__toF-icon"></span></span>';
      let popGood = document.createElement('div');
      popGood.innerHTML = popGoodOut;
      popGood.className = 'good';
      popGood.id = 'bx-' + key;

      popGood.children[0].style.backgroundImage = `url(/warmhouse/img/goods/${goods[key].image})`;
      document.querySelector('.popular-goods').appendChild(popGood);
      popGoodOut = '';
    }

    //out goods(boilers) in boilers block
    if (document.querySelector('.boilers_goods')) {
      goodOut += `<a href="../../catalog/kotly/good.php?id=${key}" class="img_toGood"><div class="good__img"></div></a>`;
      goodOut += '<div class="good-info">';
      goodOut += `<a href="../../catalog/kotly/good.php?id=${key}" class="good__name">${goods[key].name}</a>`;
      goodOut += '<div class="good-status"><span class="good-status__indicator active"></span><span class="good-status__text">Есть в наличии</span></div>';
      goodOut += `<span class="good__feature-small">Мощность ${goods[key].feature.power} кВт, отапливает до ${goods[key].feature.premises} кв.м.</span>`;
      goodOut += `
      <ul class="good_features">
        <li class="good_features__item">
          <span class="feature__name">Производитель</span>
          <span class="desc">${goods[key].feature.manufacturer}</span></li>
        <li class="good_features__item">
          <span class="feature__name">Исполнение</span>
          <span class="desc">${goods[key].feature.execution}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Назначение</span>
          <span class="desc">${goods[key].feature.appointment}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Мощность (кВт)</span>
          <span class="desc">${goods[key].feature.power}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Площадь помещения (кв.м.)</span>
          <span class="desc">${goods[key].feature.premises}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Высота (мм)</span>
          <span class="desc">${goods[key].feature.height}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Ширина (мм)</span>
          <span class="desc">${goods[key].feature.width}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Глубина (мм)</span>
          <span class="desc">${goods[key].feature.depth}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Тип камеры сгорания</span>
          <span class="desc">${goods[key].feature.chamber}</span>
        </li>
        <li class="good_features__item">
          <span class="feature__name">Гарантия (мес)</span>
          <span class="desc">${goods[key].feature.warranty}</span>
        </li>
      </ul>
      <div class="feature_header"><span class="feature_header__text">Характеристики</span><span class="feature_header__icon"></span></div>
    `;
      if (favoriteGood && favoriteGood.isFavorite) {
        goodOut += '<div class="good_toFavorite active">';
        goodOut += '<span class="good__toF active"><span class="good__toF-icon"></span></span>';
        goodOut += '<span class="good__toF_text">Отложенный</span>';
      } else {
        goodOut += '<div class="good_toFavorite">';
        goodOut += '<span class="good__toF"><span class="good__toF-icon"></span></span>'
        goodOut += '<span class="good__toF_text">Отложить</span>'
      }
      goodOut += `
          </div>
        </div>
        <div class="good-toBasket">
          <span class="good__price">${goods[key].cost} тг./шт</span>`;
      if(basketGood && basketGood.isBasket){
        goodOut += `<div class="good-toBasket_block">
            <div class="count-cell active">
              <button class="cell-minus">–</button>
              <span class="count__number">1</span>
              <button class="cell-plus">+</button>
            </div>`;
        goodOut += `<button class="good-toBasket__btn active">В корзине</button>`;
      } else {
        goodOut += `<div class="good-toBasket_block">
            <div class="count-cell">
              <button class="cell-minus">–</button>
              <span class="count__number">1</span>
              <button class="cell-plus">+</button>
            </div>`;
        goodOut += `<button class="good-toBasket__btn">В корзину</button>`;
      }
      goodOut += `</div></div>`;
      let good = document.createElement('div');
      good.className = 'good';
      good.innerHTML = goodOut;
      good.id = 'bx-' + key;

      good.querySelector('.good__img').style.backgroundImage = `url(/warmhouse/img/goods/${goods[key].image})`;
      document.querySelector('.boilers_goods').appendChild(good);
      goodOut = '';
    }
  }

  //good features open close
  document.querySelectorAll('.feature_header').forEach(item => {
    item.addEventListener('click', () => {
      item.previousElementSibling.classList.toggle('active');
      item.classList.toggle('active');
    });
  });

  let favs = favorites ? favorites : {};
  let bas = basket ? basket : {};


  //create good for adding to Basket
  function createBasketGood(parentGood) {
    let id = '';
    for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
      id += parentGood.getAttribute('id')[i];
    }
    let newBasketGood = goods[id];
    let basketItem = document.createElement('tr');
    basketItem.className = 'basket-modal_good';
    basketItem.id = 'bas-' + id;
    basketItem.innerHTML = `
        <td class="basket-modal_good_img"><img src="/warmhouse/img/goods/${newBasketGood['image']}" alt=""></td>
        <td class="basket-modal_good_name"><a href="/warmhouse/catalog/kotly/good.php?id=${id}" class="basket-modal_name__link">${newBasketGood['name']}</a></td>
        <td class="basket-modal_good_price">
          <span>Розничная цена</span>
          <span class="basket-modal_good_price__text">${newBasketGood['cost']} тг.</span>
        </td>
        <td class="basket-modal_good__count">
          <div class="count-cell">
            <button class="cell-minus">–</button>
            <span class="count__number">${newBasketGood['amount']}</span>
            <button class="cell-plus">+</button>
          </div>
        </td>
        <td class="basket-modal_good__sum">${newBasketGood['cost'] * newBasketGood['amount']} тг.</td>
        <td class="basket-modal_good__toF" title="Отложить"><img class="basket-modal_good__toF_img" src="/warmhouse/img/popular/favorite.svg" alt=""></td>
        <td class="basket-modal_good__remove"><span class="remove-s" title="Удалить">&times;</span></td>
        `;
    document.querySelector('.user-modal_tableBasket').appendChild(basketItem);
    bas[id] = goods[id];
    let jsonOut = JSON.stringify(bas);
    localStorage.setItem('bas', jsonOut);

    let footer = document.querySelector('.user-modal_basket-footer');
    footer.classList.add('active');
    let count = footer.querySelector('.total__count').innerHTML;
    footer.querySelector('.total__count').innerHTML = +count.match(/\d+/) + +basketItem.querySelector('.basket-modal_good__sum').innerHTML.match(/\d+/) + ' тг.';
  }

  //when user click add good to Basket button
  function addBasketGood(parentGood) {
    let id = '';
    for(let i = 3; i < parentGood.getAttribute('id').length; i++){
      id += parentGood.getAttribute('id')[i];
    }
    document.querySelector('.basket-empty').classList.remove('active');
    document.querySelector('.trush').classList.add('active');
    document.querySelector('.user-modal_tableBasket-item').style.display = 'table-row';

    parentGood.querySelector('.good-toBasket__btn').innerHTML = "В корзине";
    parentGood.querySelector('.good-toBasket__btn').classList.add('active');
    parentGood.querySelector('.count-cell').classList.add('active');
    goods[id].amount = parentGood.querySelector('.count__number').innerHTML;
    goods[id].isBasket = true;
    createBasketGood(parentGood);
    document.querySelector('.basket-good__number').innerHTML = Object.keys(bas).length;
    document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.innerHTML = Object.keys(bas).length);
    document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.style.display = 'flex');
  }

  //create good for adding to Favorite
  function createFavoriteGood(parentGood) {
    let id = '';
    for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
      id += parentGood.getAttribute('id')[i];
    }
    let newFavGood = goods[id];
    let favoriteItem = document.createElement('tr');
    favoriteItem.className = 'favorite-modal_good';
    favoriteItem.id = 'fav-' + id;
    favoriteItem.innerHTML = `
          <td class="basket-modal_good_img"><img src="/warmhouse/img/goods/${newFavGood['image']}" alt=""></td>
          <td class="favorite_name"><a href="/warmhouse/catalog/kotly/good.php?id=${id}" class="basket-modal_name__link">${newFavGood['name']}</a></td>
          <td class="favorite_price">
            <span>Розничная цена</span>
            <span class="favorite_price__text">${newFavGood['cost']} тг.</span>
          </td>
          <td class="favorite__count">
            <span class="count__text">1</span> шт.
          </td>
          <td class="favorite__sum">${newFavGood['cost']} тг.</td>
          <td class="favorite__toF" title="Добавить в корзину"><img class="favorite__toF_img" src="/warmhouse/img/user-modal/basket-dark.svg" alt=""></td>
          <td class="favorite__remove"><span class="remove-s" title="Удалить">&times;</span></td>
        `;
    document.querySelector('.user-modal_tableFav').appendChild(favoriteItem);
    favs[id] = goods[id];
    let jsonOut = JSON.stringify(favs);
    localStorage.setItem('favs', jsonOut);
  }

  //when user click add good to Favorite button
  function addFavGood(parentGood) {
    let id = '';
    for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
      id += parentGood.getAttribute('id')[i];
    }
    document.querySelector('.fav-empty').classList.remove('active');
    document.querySelector('.trush').classList.add('active');
    document.querySelector('.user-modal_tableFav-item').style.display = 'table-row';
    goods[id].isFavorite = true;
    if(document.querySelector('.boilers_goods')){
      parentGood.querySelector('.good_toFavorite').classList.add('active');
      parentGood.querySelector('.good__toF').classList.add('active');
      parentGood.querySelector('.good__toF_text').innerHTML = 'Отложенный';
    } else parentGood.querySelector('.good__toF').classList.add('active');
    createFavoriteGood(parentGood);

    document.querySelector('.favorite-good__number').innerHTML = Object.keys(favs).length;
    document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.innerHTML = Object.keys(favs).length);
    document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.style.display = 'flex');
  }

  //remove good from Favorites
  function removeFavGood(idOfGood) {
    goods[idOfGood].isFavorite = false;
    delete favs[idOfGood];
    let jsonOut = JSON.stringify(favs);
    localStorage.setItem('favs', jsonOut);
    document.querySelector('.user-modal_tableFav').removeChild(document.querySelector(`#fav-${idOfGood}`));

    document.querySelector('.favorite-good__number').innerHTML = Object.keys(favs).length;
    document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.innerHTML = Object.keys(favs).length);
    if (Object.keys(favs).length == 0) {
      document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.style.display = 'none');
      document.querySelector('.user-modal_tableFav-item').style.display = 'none';
      Object.keys(bas).length == 0 ? document.querySelector('.trush').classList.remove('active') : false;
      document.querySelector('.fav-empty').classList.add('active');
    }
    if (document.querySelector('.boilers_goods')) {
      document.querySelector(`#bx-${idOfGood}`).querySelector('.good_toFavorite').classList.remove('active');
      document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF').classList.remove('active');
      document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF_text').innerHTML = 'Отложить';
    } else document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF').classList.remove('active');
  }

  //remove good from Basket
  function removeBasketGood(idOfGood) {
    goods[idOfGood].isBasket = false;
    goods[idOfGood].amount = 1;
    delete bas[idOfGood];
    let jsonOut = JSON.stringify(bas);
    localStorage.setItem('bas', jsonOut);
    
    let sum = +document.querySelector(`#bas-${idOfGood}`).querySelector('.basket-modal_good__sum').innerHTML.match(/\d+/);
    document.querySelector('.total__count').innerHTML = +document.querySelector('.total__count').innerHTML.match(/\d+/) - sum + ' тг.';
    
    document.querySelector('.user-modal_tableBasket').removeChild(document.querySelector(`#bas-${idOfGood}`));
    
    document.querySelector('.basket-good__number').innerHTML = Object.keys(bas).length;
    document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.innerHTML = Object.keys(bas).length);
    document.querySelector(`#bx-${idOfGood}`).querySelector('.good-toBasket__btn').innerHTML = "В корзину";
    document.querySelector(`#bx-${idOfGood}`).querySelector('.good-toBasket__btn').classList.remove('active');
    document.querySelector(`#bx-${idOfGood}`).querySelector('.count-cell').classList.remove('active');
    if (Object.keys(bas).length == 0) {
      document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.style.display = 'none');
      document.querySelector('.user-modal_tableBasket-item').style.display = 'none';
      Object.keys(favs).length == 0 ? document.querySelector('.trush').classList.remove('active') : false;
      document.querySelector('.basket-empty').classList.add('active');
      document.querySelector('.user-modal_basket-footer').classList.remove('active');
      document.querySelector('.total__count').innerHTML = '';
    }
  }

  //remove all goods from Favorites
  function removeAllFavGoods() {
    document.querySelector('.fav-empty').classList.add('active');
    favs = {};
    let jsonOut = JSON.stringify(favs);
    localStorage.setItem('favs', jsonOut);
    document.querySelectorAll('.favorite-modal_good').forEach(item => {
      let idOfGood = '';
      for (let i = 4; i < item.getAttribute('id').length; i++) {
        idOfGood += item.getAttribute('id')[i];
      }
      goods[idOfGood].isFavorite = false;
      document.querySelector('.user-modal_tableFav').removeChild(document.querySelector(`#fav-${idOfGood}`));
      document.querySelector('.favorite-good__number').innerHTML = Object.keys(favs).length;
      document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.innerHTML = Object.keys(favs).length);
      document.querySelectorAll('.user-modal_favorites__amount').forEach(x => x.style.display = 'none');
      document.querySelector('.user-modal_tableFav-item').style.display = 'none';
      Object.keys(bas).length == 0 ? document.querySelector('.trush').classList.remove('active') : false;
      if (document.querySelector('.boilers_goods')) {
        document.querySelector(`#bx-${idOfGood}`).querySelector('.good_toFavorite').classList.remove('active');
        document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF').classList.remove('active');
        document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF_text').innerHTML = 'Отложить';
      } else document.querySelector(`#bx-${idOfGood}`).querySelector('.good__toF').classList.remove('active');
      
      if (document.querySelector('.goodPage')) return;
    });
  }

  //remove all goods from Basket
  function removeAllBasketGoods() {
    document.querySelector('.basket-empty').classList.add('active');
    bas = {};
    let jsonOut = JSON.stringify(bas);
    localStorage.setItem('bas', jsonOut);
    document.querySelectorAll('.basket-modal_good').forEach(item => {
      let idOfGood = '';
      for (let i = 4; i < item.getAttribute('id').length; i++) {
        idOfGood += item.getAttribute('id')[i];
      }
      goods[idOfGood].isFavorite = false;
      document.querySelector('.user-modal_tableBasket').removeChild(document.querySelector(`#bas-${idOfGood}`));
      document.querySelector('.basket-good__number').innerHTML = Object.keys(bas).length;
      document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.innerHTML = Object.keys(bas).length);
      document.querySelectorAll('.user-modal_basket__amount').forEach(x => x.style.display = 'none');
      document.querySelector('.user-modal_tableBasket-item').style.display = 'none';
      Object.keys(favs).length == 0 ? document.querySelector('.trush').classList.remove('active') : false;
      document.querySelector(`#bx-${idOfGood}`).querySelector('.good-toBasket__btn').innerHTML = "В корзину";
      document.querySelector(`#bx-${idOfGood}`).querySelector('.good-toBasket__btn').classList.remove('active');
      document.querySelector(`#bx-${idOfGood}`).querySelector('.count-cell').classList.remove('active');
      document.querySelector('.user-modal_basket-footer').classList.remove('active');
      document.querySelector('.total__count').innerHTML = '';
      if (document.querySelector('.goodPage')) return;
    });
  }

  //functionality for popular goods (adding goods to favorites, to basket, remove them)
  if (document.querySelector('.boilers_goods') || document.querySelector('.search_goods')){
    document.querySelector('.goods').addEventListener('click', e => {
      if (e.target.classList.contains('good-toBasket__btn')) {
        let parentGood = e.target.closest('.good');
        let id = '';
        for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
          id += parentGood.getAttribute('id')[i];
        }
        if (e.target.classList.contains('active')) {
          removeBasketGood(`${id}`);
        } else {
          if(favs[id]){
            removeFavGood(id);
            addBasketGood(parentGood);
          } else addBasketGood(parentGood);
        }
      } else if (e.target.classList.contains('good__toF_text') || e.target.classList.contains('good__toF-icon')) {
        let parentGood = e.target.closest('.good');
        let id = '';
        for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
          id += parentGood.getAttribute('id')[i];
        }
        if (e.target.closest('.good_toFavorite').classList.contains('active')) {
          removeFavGood(id);
        } else {
          if(bas[id]){
            removeBasketGood(id);
            addFavGood(parentGood);
          } else addFavGood(parentGood);
        }
      } else if (e.target.classList.contains('cell-minus')) {
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        if (num > 1) {
          e.target.closest('.good').querySelector('.count__number').innerHTML = --num;
        }
      } else if (e.target.classList.contains('cell-plus')) {
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        e.target.closest('.good').querySelector('.count__number').innerHTML = ++num;
      }
    });
  }

  //functionality for popular goods (adding goods to favorites)
  if(document.querySelector('.popular-goods')){
    document.querySelector('.popular-goods').addEventListener('click', e => {
      if (e.target.classList.contains('good__toF') || e.target.classList.contains('good__toF-icon')) {
        let parentGood = e.target.closest('.good');
        let id = '';
        for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
          id += parentGood.getAttribute('id')[i];
        }
        if ((e.target.classList.contains('good__toF') && e.target.classList.contains('active')) || (e.target.classList.contains('good__toF-icon') && e.target.closest('.good__toF').classList.contains('active'))) {
          removeFavGood(id);
        } else {
          if (bas[id]) {
            removeBasketGood(id);
            addFavGood(parentGood);
          } else addFavGood(parentGood);
        }
      }
    });
  }

  //functionality for favorite goods in user-modal(remove, add to basket, trush)
  if (document.querySelector('.user-modal_tableFav')){
    document.querySelector('.user-modal_tableFav').addEventListener('click', e => {
      if(e.target.classList.contains('remove-s')){
        let parentGood = e.target.closest('.favorite-modal_good');
        let idOfGood = '';
        for(let i = 4; i < parentGood.getAttribute('id').length; i++){
          idOfGood += parentGood.getAttribute('id')[i];
        }
        removeFavGood(idOfGood);
        idOfGood = null;
      } else if (e.target.classList.contains('favorite__toF_img')) {
        let parentGood = e.target.closest('.favorite-modal_good');
        let idOfGood = '';
        for (let i = 4; i < parentGood.getAttribute('id').length; i++) {
          idOfGood += parentGood.getAttribute('id')[i];
        }
        setTimeout(() => {
          removeFavGood(idOfGood);
          addBasketGood(document.querySelector(`#bx-${idOfGood}`));
        }, 200);
      }
    });
  }

  //functionality for basket goods in user-modal(remove, add to basket, trush)
  if (document.querySelector('.user-modal_tableBasket')){
    document.querySelector('.user-modal_tableBasket').addEventListener('click', e => {
      if (e.target.classList.contains('remove-s')) {
        let parentGood = e.target.closest('.basket-modal_good');
        let idOfGood = '';
        for (let i = 4; i < parentGood.getAttribute('id').length; i++) {
          idOfGood += parentGood.getAttribute('id')[i];
        }
        removeBasketGood(idOfGood);
        idOfGood = null;
      } else if (e.target.classList.contains('basket-modal_good__toF_img')) {
        let parentGood = e.target.closest('.basket-modal_good');
        let idOfGood = '';
        for (let i = 4; i < parentGood.getAttribute('id').length; i++) {
          idOfGood += parentGood.getAttribute('id')[i];
        }
        setTimeout(() => {
          removeBasketGood(idOfGood);
          addFavGood(document.querySelector(`#bx-${idOfGood}`));
        }, 200);
      } else if (e.target.classList.contains('cell-minus')) {
        let num = +e.target.closest('.basket-modal_good').querySelector('.count__number').innerHTML;
        if (num > 1) {
          e.target.closest('.basket-modal_good').querySelector('.count__number').innerHTML = --num;
          bas[e.target.closest('.basket-modal_good').getAttribute('id').slice(4)].amount = num;
          localStorage.setItem('bas', JSON.stringify(bas));
          let sum = +e.target.closest('.basket-modal_good').querySelector('.basket-modal_good__sum').innerHTML.match(/\d+/);
          let amount = +e.target.closest('.basket-modal_good').querySelector('.basket-modal_good_price__text').innerHTML.match(/\d+/);
          e.target.closest('.basket-modal_good').querySelector('.basket-modal_good__sum').innerHTML = (sum - amount) + ' тг.';
          let total = +document.querySelector('.total__count').innerHTML.match(/\d+/);
          document.querySelector('.total__count').innerHTML = (total - amount) + ' тг.';
        }
      } else if (e.target.classList.contains('cell-plus')) {
        let num = +e.target.closest('.basket-modal_good').querySelector('.count__number').innerHTML;
        e.target.closest('.basket-modal_good').querySelector('.count__number').innerHTML = ++num;
        bas[e.target.closest('.basket-modal_good').getAttribute('id').slice(4)].amount = num;
        localStorage.setItem('bas', JSON.stringify(bas));
        let sum = +e.target.closest('.basket-modal_good').querySelector('.basket-modal_good__sum').innerHTML.match(/\d+/);
        let amount = +e.target.closest('.basket-modal_good').querySelector('.basket-modal_good_price__text').innerHTML.match(/\d+/);
        e.target.closest('.basket-modal_good').querySelector('.basket-modal_good__sum').innerHTML = (sum + amount) + ' тг.';
        let total = +document.querySelector('.total__count').innerHTML.match(/\d+/);
        document.querySelector('.total__count').innerHTML = (total + amount) + ' тг.';
      }
    });
  }

  //when the user click trush button for remove all goods from basket or favorites
  if(document.querySelector('.user-modal')){
    document.querySelector('.user-modal_hidden-header').addEventListener('click', e => {
      if (e.target.classList.contains('trush') || e.target.classList.contains('trush__icon') || e.target.classList.contains('trush__text')) {
        if (document.querySelector('.user-modal_favorite').classList.contains('active')) {
          setTimeout(() => {
            removeAllFavGoods();
          }, 200);
        } else if (document.querySelector('.user-modal_basket').classList.contains('active')) {
          setTimeout(() => {
            removeAllBasketGoods();
          }, 200);
        }
      }
    });
    document.querySelector('.user-modal_hidden').addEventListener('click', e => {
      if (e.target.classList.contains('exit_btn')) {
        document.querySelector('.user-modal').classList.remove('active');
        document.querySelector('.user-modal_basket').classList.remove('active');
        document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
        document.querySelector('.user-modal_favorite').classList.remove('active');
        document.querySelector('.user-modal_hidden__favoriteLink').classList.remove('active');
        document.querySelector('.user-modal__toBasket').classList.remove('active');
        document.querySelector('.user-modal__toFavorites').classList.remove('active');
        document.querySelector('.user-modal_basket-footer').classList.remove('active');
      }
    });
  }


  if(document.querySelector('.goodPage')){
    document.querySelector('.goodPage').addEventListener('click', e => {
      if (e.target.classList.contains('good-toBasket__btn')) {
        let parentGood = e.target.closest('.good');
        let id = '';
        for (let i = 3; i < parentGood.getAttribute('id').length; i++) {
          id += parentGood.getAttribute('id')[i];
        }
        if (e.target.classList.contains('active')) {
          removeBasketGood(`${id}`);
        } else {
          if (favs[id]) {
            removeFavGood(id);
            addBasketGood(parentGood);
          } else addBasketGood(parentGood);
        }
      } else if (e.target.classList.contains('cell-minus')) {
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        if (num > 1) {
          e.target.closest('.good').querySelector('.count__number').innerHTML = --num;
        }
      } else if (e.target.classList.contains('cell-plus')) {
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        e.target.closest('.good').querySelector('.count__number').innerHTML = ++num;
      } else if (e.target.classList.contains('good__toF') || e.target.classList.contains('good__toF-icon')) {
        let parentGood = e.target.closest('.good');
        if ((e.target.classList.contains('good__toF') && e.target.classList.contains('active')) || (e.target.classList.contains('good__toF-icon') && e.target.closest('.good__toF').classList.contains('active'))) {
          removeFavGood(parentGood.getAttribute('id').slice(3));
        } else {
          if (bas[parentGood.getAttribute('id').slice(3)]) {
            removeBasketGood(parentGood.getAttribute('id').slice(3));
            addFavGood(parentGood);
          } else addFavGood(parentGood);
        }
      }
    });
    
    {
      let id = document.querySelector('.goodPage').getAttribute('id').slice(3);
      if(bas[id]){
        document.querySelector(`#bx-${id}`).querySelector('.good-toBasket__btn').innerHTML = "В корзине";
        document.querySelector(`#bx-${id}`).querySelector('.good-toBasket__btn').classList.add('active');
        document.querySelector(`#bx-${id}`).querySelector('.count-cell').classList.add('active');
      } else {
        document.querySelector(`#bx-${id}`).querySelector('.good-toBasket__btn').innerHTML = "В корзину";
        document.querySelector(`#bx-${id}`).querySelector('.good-toBasket__btn').classList.remove('active');
        document.querySelector(`#bx-${id}`).querySelector('.count-cell').classList.remove('active');
      }

      if(favs[id]){
        document.querySelector(`#bx-${id}`).querySelector('.good__toF').classList.add('active');
      } else {
        document.querySelector(`#bx-${id}`).querySelector('.good__toF').classList.remove('active');
      }
    }
  }

  if(document.querySelector('.basket-goods')){
    if(Object.keys(bas).length != 0){
      let sum = 0;
      for(let i in bas){
        sum += bas[i].cost * +bas[i].amount;
      }

      document.querySelector('.total__price').innerHTML = sum + ' тг.';
      document.querySelector('.basket-goods__amount').innerHTML = Object.keys(bas).length;
      if(Object.keys(favs).length != 0) {
        document.querySelector('.favorites').innerHTML = Object.keys(favs).length + ' отложено';
      }

      for(let i in bas){
        let good = document.createElement('div');
        good.className = 'good';
        good.id = `bx-${i}`;
        good.innerHTML = `
          <img src="img/goods/${bas[i].image}" alt="" class="good__img">
          <div class="good-info_block">
            <span class="good__name">${bas[i].name}</span>
            <span class="price-type">Тип цены: <strong>Розничная цена</strong></span>
            <span class="good__price">${bas[i].cost} тг.</span>
            <div class="count-cell">
              <button class="cell-minus">–</button>
              <span class="count__number">${bas[i].amount}</span>
              <button class="cell-plus">+</button>
            </div>
          </div>
          <span class="good-total__price">${bas[i].cost * +bas[i].amount} тг.</span>
          <span class="delete-good">&#10005;</span>
        `;

        document.querySelector('.basket-goods').appendChild(good);
      }
    }

    document.querySelector('.basket-goods').addEventListener('click', e => {
      if(e.target.classList.contains('delete-good')){
        let parentGood = e.target.closest('.good');
        let total_price = +document.querySelector('.total__price').innerHTML.match(/\d+/);
        total_price -= bas[parentGood.getAttribute('id').slice(3)].cost * bas[parentGood.getAttribute('id').slice(3)].amount;
        document.querySelector('.total__price').innerHTML = total_price + " тг.";
        delete bas[parentGood.getAttribute('id').slice(3)];
        document.querySelector('.basket-goods__amount').innerHTML = Object.keys(bas).length;
        localStorage.setItem('bas', JSON.stringify(bas));
        document.querySelector('.basket-goods').removeChild(parentGood);
      } else if (e.target.classList.contains('cell-minus')) {
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        let good_total = +e.target.closest('.good').querySelector('.good-total__price').innerHTML.match(/\d+/);
        if (num > 1) {
          e.target.closest('.good').querySelector('.count__number').innerHTML = --num;
          good_total -= bas[e.target.closest('.good').getAttribute('id').slice(3)].cost;
          bas[e.target.closest('.good').getAttribute('id').slice(3)].amount = num;
          localStorage.setItem('bas', JSON.stringify(bas));
          e.target.closest('.good').querySelector('.good-total__price').innerHTML = good_total + ' тг.';
          let total_price = +document.querySelector('.total__price').innerHTML.match(/\d+/);
          document.querySelector('.total__price').innerHTML = total_price - bas[e.target.closest('.good').getAttribute('id').slice(3)].cost;
        }
      } else if (e.target.classList.contains('cell-plus')) {
        let good_total = +e.target.closest('.good').querySelector('.good-total__price').innerHTML.match(/\d+/);
        let num = +e.target.closest('.good').querySelector('.count__number').innerHTML;
        e.target.closest('.good').querySelector('.count__number').innerHTML = ++num;
        good_total += bas[e.target.closest('.good').getAttribute('id').slice(3)].cost;
        bas[e.target.closest('.good').getAttribute('id').slice(3)].amount = num;
        localStorage.setItem('bas', JSON.stringify(bas));
        e.target.closest('.good').querySelector('.good-total__price').innerHTML = good_total + ' тг.';
        let total_price = +document.querySelector('.total__price').innerHTML.match(/\d+/);
        document.querySelector('.total__price').innerHTML = total_price + bas[e.target.closest('.good').getAttribute('id').slice(3)].cost;
      }
    });
  }
};

function init(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

document.addEventListener('DOMContentLoaded', () => {
  init('/warmhouse/admin/boilers.json', goodOut);
  
  
  //callback
  {
    document.querySelector('.call__btn').addEventListener('click', () => {
      document.querySelector('.bg-black').classList.add('active');
      document.querySelector('.callback').classList.add('active');
    });
    document.querySelectorAll('.callback__close').forEach(i => i.addEventListener('click', () => {
      document.querySelector('.bg-black').classList.remove('active');
      document.querySelector('.callback').classList.remove('active');
    }));
  }
  // menu-toggle
  {
    document.querySelector('.menu-service').addEventListener('mouseover', () => {
      document.querySelector('.menu-service_toggle').style.transform = 'translateY(1%)';
    });
    document.querySelector('.menu-service_toggle').addEventListener('mouseover', () => {
      document.querySelector('.menu-service_toggle').style.transform = 'translateY(1%)';
    });
    document.querySelector('.menu-service_toggle').addEventListener('mouseout', () => {
      document.querySelector('.menu-service_toggle').style.transform = 'translateY(-120%)';
    });
    document.querySelector('.menu-service').addEventListener('mouseout', () => {
      document.querySelector('.menu-service_toggle').style.transform = 'translateY(-120%)';
    });
    document.querySelector('.menu-payment').addEventListener('mouseover', () => {
      document.querySelector('.menu-payment_toggle').style.transform = 'translateY(1%)';
    });
    document.querySelector('.menu-payment_toggle').addEventListener('mouseover', () => {
      document.querySelector('.menu-payment_toggle').style.transform = 'translateY(1%)';
    });
    document.querySelector('.menu-payment_toggle').addEventListener('mouseout', () => {
      document.querySelector('.menu-payment_toggle').style.transform = 'translateY(-120%)';
    });
    document.querySelector('.menu-payment').addEventListener('mouseout', () => {
      document.querySelector('.menu-payment_toggle').style.transform = 'translateY(-120%)';
    });
  }

  //mobile menu toggle
  {
    let height = 0;
    document.querySelector('.mobile-menu_interface').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu_wrapper').classList.contains('active')) {
        document.querySelector('.mobile-menu_wrapper').classList.add('active');
        document.querySelector('.mobile-menu_wrapper').style.transform = 'translateY(0%)';
        document.querySelector('.mobile-menu_wrapper').style.boxShadow = '0px 0px 8px -1px rgba(0,0,0,0.4)';
      } else {
        document.querySelector('.mobile-menu_wrapper').classList.remove('active');
        document.querySelector('.mobile-menu_wrapper').style.boxShadow = '';
        document.querySelector('.mobile-menu_wrapper').style.transform = 'translateY(-100%)';
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';
      }
    });

    document.querySelector('.mobile-menu__catalog').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu__catalog_toggle').classList.contains('active')) {
        document.querySelector('.mobile-menu__catalog_toggle').classList.add('active');
        height = document.querySelector('.mobile-menu__catalog_toggle').clientHeight;
        document.querySelector('.mobile-menu__service').style.marginTop = `${height}px`;
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'flex';
        document.querySelector('.mobile-menu__catalog_toggle').style.bamountLeft = '1px solid #366098';
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';

        document.querySelector('.mobile-menu__catalog').classList.add('active');
        document.querySelector('.mobile-menu__service').classList.remove('active');
        document.querySelector('.mobile-menu__payment').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').classList.remove('active');
      } else {
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__catalog').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
      }
    });
    document.querySelector('.mobile-menu__service').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu__service_toggle').classList.contains('active')) {
        document.querySelector('.mobile-menu__service_toggle').classList.add('active');
        height = document.querySelector('.mobile-menu__service_toggle').clientHeight;
        document.querySelector('.mobile-menu__payment').style.marginTop = `${height}px`;
        document.querySelector('.mobile-menu__service_toggle').style.display = 'flex';
        document.querySelector('.mobile-menu__service_toggle').style.bamountLeft = '1px solid #366098';
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';

        document.querySelector('.mobile-menu__catalog').classList.remove('active');
        document.querySelector('.mobile-menu__service').classList.add('active');
        document.querySelector('.mobile-menu__payment').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').classList.remove('active');
      } else {
        document.querySelector('.mobile-menu__service').classList.remove('active');
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
      }
    });
    document.querySelector('.mobile-menu__payment').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu__payment_toggle').classList.contains('active')) {
        document.querySelector('.mobile-menu__payment_toggle').classList.add('active');
        height = document.querySelector('.mobile-menu__payment_toggle').clientHeight;
        document.querySelector('.mobile-menu__contacts').style.marginTop = `${height}px`;
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'flex';
        document.querySelector('.mobile-menu__payment_toggle').style.bamountLeft = '1px solid #366098';
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';

        document.querySelector('.mobile-menu__catalog').classList.remove('active');
        document.querySelector('.mobile-menu__service').classList.remove('active');
        document.querySelector('.mobile-menu__payment').classList.add('active');
        document.querySelector('.mobile-menu__contacts').classList.remove('active');
      } else {
        document.querySelector('.mobile-menu__payment').classList.remove('active');
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';
      }
    });
    document.querySelector('.mobile-menu__contacts').addEventListener('click', () => {
      document.querySelector('.mobile-menu__contacts').classList.toggle('active');
      document.querySelector('.mobile-menu__catalog').classList.remove('active');
      document.querySelector('.mobile-menu__service').classList.remove('active');
      document.querySelector('.mobile-menu__payment').classList.remove('active');
    });
  }

  //hover effect for catalog item
  {
    document.querySelectorAll('.catalog__item').forEach(item => {
      item.addEventListener('mouseover', () => {
        const items = document.querySelectorAll('.catalog__item');
        for (let i = 0; i < items.length; i++)
          items[i].classList.remove('hover');
        item.classList.add('hover');
      });
      item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
      });
    });
  }

  //adaptive hover catalog
  {
    if(document.querySelector('.catalog')) {
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 951) {
          document.querySelector('.catalog').style.transform = 'translateY(0)';
        } else if (window.innerWidth < 951) {
          document.querySelector('.catalog').style.transform = 'translateY(-220px)';
        }
      });
      if (getComputedStyle(document.querySelector('.catalog')).transform == 'matrix(1, 0, 0, 1, 0, -220)') {
        let catalog = document.querySelector('.menu-catalog');
        catalog.addEventListener('mouseover', () => {
          document.querySelector('.catalog').style.transform = 'translateY(0)';
        });
        document.querySelector('.catalog').addEventListener('mouseover', () => {
          document.querySelector('.catalog').style.transform = 'translateY(0)';
        });
        document.querySelector('.catalog').addEventListener('mouseout', () => {
          document.querySelector('.catalog').style.transform = 'translateY(-220px)';
        });
        catalog.addEventListener('mouseout', () => {
          document.querySelector('.catalog').style.transform = 'translateY(-220px)';
        });
      }
    }
  }

  //catalog item hover
  {
    let hovers = document.querySelectorAll('.catalog__item-hover');
    document.querySelectorAll('.catalog__item').forEach(item => {
      item.addEventListener('mouseover', () => {
        for (let i = 0; i < hovers.length; i++)
          hovers[i].style.display = 'none';
        if (item.classList.contains('boilers')) {
          document.querySelector('.boilers-hover').style.display = 'flex';
        }
        if (item.classList.contains('parts')) {
          document.querySelector('.parts-hover').style.display = 'flex';
        }
      });
      item.addEventListener('mouseout', () => {
        for (let i = 0; i < hovers.length; i++)
          hovers[i].style.display = 'none';
      });
    });
    hovers.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.display = 'flex';
      });
      item.addEventListener('mouseout', () => {
        item.style.display = 'none';
      });
    });
  }

  //first section slider
  {
    //hover slider btns
    if (document.contains(document.querySelector('.top_slider-wrapper'))) {
      document.querySelector('.top_slider-wrapper').addEventListener('mouseover', () => {
        document.querySelector('.slider_nav-btns').style.display = 'flex';
      });
      document.querySelector('.top_slider-wrapper').addEventListener('mouseout', () => {
        document.querySelector('.slider_nav-btns').style.display = 'none';
      });
    }
  }

  //good types hover
  {
    document.querySelectorAll('.good-type').forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundSize = '120%';
        item.querySelector('.bg--black').style.display = 'block';
        setTimeout(() => {
          item.querySelector('.bg--black').classList.remove('visuallyHidden');
        }, 20);
        item.querySelector('.bg--black').nextSibling.style.top = '72%';
        item.querySelector('.good-type__desc').style.display = 'block';
      });
      item.addEventListener('mouseout', () => {
        item.style.backgroundSize = '100%';
        item.querySelector('.bg--black').style.display = 'none';
        item.querySelector('.bg--black').classList.add('visuallyHidden');
        item.querySelector('.bg--black').nextSibling.style.top = '80%';
        item.querySelector('.good-type__desc').style.display = 'none';
      });
    });
  }
  
  //menu item is active when open the page
  {
    window.onload = () => {
      let url = window.location.pathname.split('/');
      document.querySelectorAll('.menu-toggle__item').forEach(item => {
        let href = item.getAttribute('href');
        if (url[url.length - 1] == href) item.classList.add('active');
      });
      document.querySelectorAll('.mobile-menu_toggle__item').forEach(item => {
        let href = item.getAttribute('href');
        if (url[url.length - 1] == href) item.classList.add('active');
      });
    };
  }

  //user modal functionality
  {
    if(document.querySelector('.user-modal')) {
      document.querySelectorAll('.user-modal__btn').forEach(item => {
        item.addEventListener('click', () => {
          if (item.closest('.user-modal__toBasket')) {
            if (document.querySelector('.user-modal').classList.contains('active')) {
              if (document.querySelector('.user-modal_hidden__basketLink').classList.contains('active')) {
                document.querySelector('.user-modal').classList.remove('active');
                document.querySelector('.user-modal_basket').classList.remove('active');
                document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
                document.querySelector('.user-modal_favorite').classList.remove('active');
                document.querySelector('.user-modal_hidden__favoriteLink').classList.remove('active');
                document.querySelector('.user-modal__toBasket').classList.remove('active');
                document.querySelector('.user-modal__toFavorites').classList.remove('active');
              } else {
                document.querySelector('.user-modal_basket').classList.add('active');
                document.querySelector('.user-modal_hidden__basketLink').classList.add('active');
                document.querySelector('.user-modal_favorite').classList.remove('active');
                document.querySelector('.user-modal_hidden__favoriteLink').classList.remove('active');
                document.querySelector('.user-modal__toBasket').classList.add('active');
                document.querySelector('.user-modal__toFavorites').classList.remove('active');
                document.querySelector('.user-modal_basket-footer').classList.add('active');
              }
            } else {
              document.querySelector('.user-modal').classList.add('active');
              document.querySelector('.user-modal_basket').classList.add('active');
              document.querySelector('.user-modal_hidden__basketLink').classList.add('active');
              document.querySelector('.user-modal__toBasket').classList.add('active');
              document.querySelector('.user-modal_basket-footer').classList.add('active');
            }
          }
          if (item.closest('.user-modal__toFavorites')) {
            if (document.querySelector('.user-modal').classList.contains('active')) {
              if (document.querySelector('.user-modal_hidden__favoriteLink').classList.contains('active')) {
                document.querySelector('.user-modal').classList.remove('active');
                document.querySelector('.user-modal_basket').classList.remove('active');
                document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
                document.querySelector('.user-modal_favorite').classList.remove('active');
                document.querySelector('.user-modal_hidden__favoriteLink').classList.remove('active');
                document.querySelector('.user-modal__toBasket').classList.remove('active');
                document.querySelector('.user-modal__toFavorites').classList.remove('active');
              } else {
                document.querySelector('.user-modal_basket').classList.remove('active');
                document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
                document.querySelector('.user-modal_favorite').classList.add('active');
                document.querySelector('.user-modal_hidden__favoriteLink').classList.add('active');
                document.querySelector('.user-modal__toBasket').classList.remove('active');
                document.querySelector('.user-modal__toFavorites').classList.add('active');
                document.querySelector('.user-modal_basket-footer').classList.remove('active');
              }
            } else {
              document.querySelector('.user-modal').classList.add('active');
              document.querySelector('.user-modal_favorite').classList.add('active');
              document.querySelector('.user-modal_hidden__favoriteLink').classList.add('active');
              document.querySelector('.user-modal__toBasket').classList.remove('active');
              document.querySelector('.user-modal__toFavorites').classList.add('active');
              document.querySelector('.user-modal_basket-footer').classList.remove('active');
            }
          }
        });
      });
      document.querySelector('.user-modal_hidden__basketLink').addEventListener('click', () => {
        if (!document.querySelector('.user-modal_hidden__basketLink').classList.contains('active')) {
          document.querySelector('.user-modal_basket').classList.add('active');
          document.querySelector('.user-modal_hidden__basketLink').classList.add('active');
          document.querySelector('.user-modal_favorite').classList.remove('active');
          document.querySelector('.user-modal_hidden__favoriteLink').classList.remove('active');
          document.querySelector('.user-modal__toBasket').classList.add('active');
          document.querySelector('.user-modal__toFavorites').classList.remove('active');
          document.querySelector('.user-modal_basket-footer').classList.add('active');
        }
      });
      document.querySelector('.user-modal_hidden__favoriteLink').addEventListener('click', () => {
        if (!document.querySelector('.user-modal_hidden__favoriteLink').classList.contains('active')) {
          document.querySelector('.user-modal_favorite').classList.add('active');
          document.querySelector('.user-modal_hidden__favoriteLink').classList.add('active');
          document.querySelector('.user-modal_basket').classList.remove('active');
          document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
          document.querySelector('.user-modal__toBasket').classList.remove('active');
          document.querySelector('.user-modal__toFavorites').classList.add('active');
          document.querySelector('.user-modal_basket-footer').classList.remove('active');
        }
      });
    }
  }
});