'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    document.querySelector('.mobile-menu_interface').addEventListener('click', () => {

      if (!document.querySelector('.mobile-menu_wrapper').classList.contains('active')){
        document.querySelector('.mobile-menu_wrapper').classList.add('active');
        document.querySelector('.mobile-menu_wrapper').style.transform = 'translateY(1%)';
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
      if (!document.querySelector('.mobile-menu__catalog_toggle').classList.contains('active')){
        document.querySelector('.mobile-menu__catalog_toggle').classList.add('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '96px';
        setTimeout(() => {
          document.querySelector('.mobile-menu__catalog_toggle').style.display = 'flex';
          document.querySelector('.mobile-menu__catalog_toggle').style.borderLeft = '1px solid #366098';
        }, 50);
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';
      } else {
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
      }
    });
    document.querySelector('.mobile-menu__service').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu__service_toggle').classList.contains('active')){
        document.querySelector('.mobile-menu__service_toggle').classList.add('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '96px';
        setTimeout(() => {
          document.querySelector('.mobile-menu__service_toggle').style.display = 'flex';
          document.querySelector('.mobile-menu__service_toggle').style.borderLeft = '1px solid #366098';
        }, 50);
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';
      } else {
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
      }
    });
    document.querySelector('.mobile-menu__payment').addEventListener('click', () => {
      if (!document.querySelector('.mobile-menu__payment_toggle').classList.contains('active')){
        document.querySelector('.mobile-menu__payment_toggle').classList.add('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '144px';
        setTimeout(() => {
          document.querySelector('.mobile-menu__payment_toggle').style.display = 'flex';
          document.querySelector('.mobile-menu__payment_toggle').style.borderLeft = '1px solid #366098';
        }, 50);
        document.querySelector('.mobile-menu__service_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__payment').style.marginTop = '0';
        document.querySelector('.mobile-menu__service_toggle').style.display = 'none';
        document.querySelector('.mobile-menu__catalog_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__service').style.marginTop = '0';
        document.querySelector('.mobile-menu__catalog_toggle').style.display = 'none';
      } else {
        document.querySelector('.mobile-menu__payment_toggle').classList.remove('active');
        document.querySelector('.mobile-menu__contacts').style.marginTop = '0';
        document.querySelector('.mobile-menu__payment_toggle').style.display = 'none';
      }
    });
  }

  //hover effect for catalog item
  {
    document.querySelectorAll('.catalog__item').forEach(item => {
      item.addEventListener('mouseover', () => {
        const items = document.querySelectorAll('.catalog__item');
        for(let i = 0; i < items.length; i++)
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
      if (window.innerWidth >= 951){
        document.querySelector('.catalog').style.transform = 'translateY(0)';
      } else if(window.innerWidth < 951) {
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
        if(item.classList.contains('boilers')){
          document.querySelector('.boilers-hover').style.display = 'flex';
        }
        if(item.classList.contains('parts')){
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
    document.querySelector('.top_slider-wrapper').addEventListener('mouseover', () => {
      document.querySelector('.slider_nav-btns').style.display = 'flex';
    });
    document.querySelector('.top_slider-wrapper').addEventListener('mouseout', () => {
      document.querySelector('.slider_nav-btns').style.display = 'none';
    });
  }
});