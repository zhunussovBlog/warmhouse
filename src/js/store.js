'use strict';

//Вывод товара на главную старницу
function goodOut(json) {
  let goods = null;
  if(!localStorage.getItem('goods')) goods = JSON.parse(json);
  else goods = JSON.parse(localStorage.getItem('goods'));

  //for popular goods
  let popGoodOut = '',
    goodOut = '';
  for (let key in goods) {
    if (document.querySelector('.popular-goods')) {
      popGoodOut += `<div class="good__img"></div>`;
      popGoodOut += `<span class="good__name">${goods[key].name}</span>`;
      if (goods[key].isValid) popGoodOut += '<div class="good-status"><span class="good-status__indicator active"></span><span class="good-status__text">Есть в наличии </span></div>';
      else popGoodOut += '<div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Нет в наличии</span></div>';
      popGoodOut += `<span class="good__price">${goods[key].cost} тг/шт</span>`;
      popGoodOut += '<a href="#" class="good__more">Подробнее</a>';
      if (goods[key].isFavorite) popGoodOut += '<span class="good__toF active"><span class="good__toF-icon active"></span></span>';
      else popGoodOut += '<span class="good__toF"><span class="good__toF-icon"></span></span>';
      let popGood = document.createElement('div');
      popGood.innerHTML = popGoodOut;
      popGood.className = 'good';
      popGood.id = key;

      popGood.children[0].style.backgroundImage = `url(../src/img/goods/${goods[key].image})`;
      document.querySelector('.popular-goods').appendChild(popGood);
      popGoodOut = '';
    }

    if (document.querySelector('.boilers_goods')) {
      goodOut += '<a href="#" class="img_toGood"><div class="good__img"></div></a>';
      goodOut += '<div class="good-info">';
      goodOut += `<a href="#" class="good__name">${goods[key].name}</a>`;
      if (goods[key].isValid) goodOut += '<div class="good-status"><span class="good-status__indicator active"></span><span class="good-status__text">Есть в наличии</span></div>';
      else goodOut += '<div class="good-status"><span class="good-status__indicator"></span><span class="good-status__text">Нет в наличии</span></div>';
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
      goodOut += '<div class="good_toFavorite">';
      if (goods[key].isFavorite) {
        goodOut += '<span class="good__toF active"><span class="good__toF-icon"></span></span>';
        goodOut += '<span class="good__toF_text">Отложенный</span>';
      } else {
        goodOut += '<span class="good__toF"><span class="good__toF-icon"></span></span>'
        goodOut += '<span class="good__toF_text">Отложить</span>'
      }
      goodOut += `
          </div>
        </div>
        <div class="good-toBasket">
          <span class="good__price">${goods[key].cost} тг./шт</span>
          <div class="good-toBasket_block">
            <div class="count-cell">
              <button class="cell-minus">–</button>
              <span class="count__number">1</span>
              <button class="cell-plus">+</button>
            </div>
            <button class="good-toBasket__btn">В корзину</button>
          </div>
        </div>
      `;
      let good = document.createElement('div');
      good.className = 'good';
      good.innerHTML = goodOut;
      good.id = key;

      good.children[0].children[0].style.backgroundImage = `url(../src/img/goods/${goods[key].image})`;
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

  document.querySelectorAll('.good_toFavorite').forEach(item => {
    item.addEventListener('click', () => {
      if(item.children[0].classList.contains('active')) {
        item.children[0].classList.remove('active');
        let parentGood = item.closest('.good');
        goods[parentGood.getAttribute('id')].isFavorite = false;
        item.children[1].innerHTML = 'Отложить';
        let jsonOut = JSON.stringify(goods);
        localStorage.setItem('goods', jsonOut);
      } else {
        item.children[0].classList.add('active');
        let parentGood = item.closest('.good');
        goods[parentGood.getAttribute('id')].isFavorite = true;
        item.children[1].innerHTML = 'Отложенный';
        let jsonOut = JSON.stringify(goods);
        localStorage.setItem('goods', jsonOut);
      }
    });
  });
  
  document.querySelectorAll('.good__toF').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        let parentGood = item.closest('.good');
        goods[parentGood.getAttribute('id')].isFavorite = false;
        let jsonOut = JSON.stringify(goods);
        localStorage.setItem('goods', jsonOut);
      } else {
        item.classList.add('active');
        let parentGood = item.closest('.good');
        goods[parentGood.getAttribute('id')].isFavorite = true;
        let jsonOut = JSON.stringify(goods);
        localStorage.setItem('goods', jsonOut);
      }
    });
  });
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
  init('json/goods.json', goodOut);
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
        document.querySelector('.mobile-menu__catalog_toggle').style.borderLeft = '1px solid #366098';
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
        document.querySelector('.mobile-menu__service_toggle').style.borderLeft = '1px solid #366098';
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
        document.querySelector('.mobile-menu__payment_toggle').style.borderLeft = '1px solid #366098';
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
        item.firstChild.style.display = 'block';
        setTimeout(() => {
          item.firstChild.classList.remove('visuallyHidden');
        }, 20);
        item.firstChild.nextSibling.style.top = '72%';
        item.lastChild.style.display = 'block';
      });
      item.addEventListener('mouseout', () => {
        item.style.backgroundSize = '100%';
        item.firstChild.style.display = 'none';
        item.firstChild.classList.add('visuallyHidden');
        item.firstChild.nextSibling.style.top = '80%';
        item.lastChild.style.display = 'none';
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
    document.querySelectorAll('.user-modal_rside__item_bg').forEach(item => {
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
            }
          } else {
            document.querySelector('.user-modal').classList.add('active');
            document.querySelector('.user-modal_basket').classList.add('active');
            document.querySelector('.user-modal_hidden__basketLink').classList.add('active');
            document.querySelector('.user-modal__toBasket').classList.add('active');
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
            }
          } else {
            document.querySelector('.user-modal').classList.add('active');
            document.querySelector('.user-modal_favorite').classList.add('active');
            document.querySelector('.user-modal_hidden__favoriteLink').classList.add('active');
            document.querySelector('.user-modal__toBasket').classList.remove('active');
            document.querySelector('.user-modal__toFavorites').classList.add('active');
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
      }
    });
    document.querySelector('.user-modal_hidden__favoriteLink').addEventListener('click', () => {
      if (!document.querySelector('.user-modal_hidden__favoriteLink').classList.contains('active')) {
        document.querySelector('.user-modal_favorite').classList.add('active');
        document.querySelector('.user-modal_hidden__favoriteLink').classList.add('active');
        document.querySelector('.user-modal_basket').classList.remove('active');
        document.querySelector('.user-modal_hidden__basketLink').classList.remove('active');
      }
    });
  }
});