<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - интернет магазин, газовые котлы и запчасти</title>
  <link rel="stylesheet" href="./css/loadFirst.css">
  <link rel="stylesheet" href="./css/userModal.css">
  <link rel="stylesheet" href="./css/contacts.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>

<body>
  <?php include ('./callback.php')?>
  <?php
  include('./user-modal.php');
  ?>
  <div class="container">
    <?php
    include('./header.php');
    ?>
    <div class="main">
      <?php
      include('./catalog.php');
      ?>
      <div class="first-section">
        <div class="pathname">
          <a href="./" class="pathname_main__link">Главная</a> -
          <span class="pathname__text">Контакты</span>
        </div>
        <h1 class="boilers__header">Контакты</h1>
        <div class="contacts">
          <span class="address">г. Актобе, Техцентр "Султан", 2/80Б</span>
          <div class="phone">
            <span class="text">Телефон</span>
            <span class="phone__text">8(747)-605-9955</span><span class="phone__text">8(771)-186-22-30</span>
          </div>
          <div class="mode">
            <span class="text">Режим работы</span>
            <span class="mode__text"><strong>Будни</strong>: с 9:00 до 17:00, <strong>CБ, ВС</strong>: с 10:00 до 17:00</span>
          </div>
          <div class="email">
            <span class="text">Email</span>
            <span class="email__text">asekenskigo@gmail.com</span>
          </div>
          <div class="map">
            <script type="text/javascript" charset="utf-8" async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3495ce6a9f06dda26e94831bb1110f9e9ce04d05949f65087af4ce9044ab09ba&amp;width=916&amp;height=500&amp;lang=ru_RU&amp;scroll=false">
            </script>
          </div>
        </div>
      </div>
    </div>
    <?php
    include('./footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>

  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/callback.css">
  <script src="./js/w.js"></script>
</body>

</html>