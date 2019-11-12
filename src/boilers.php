<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Warm House - интернет магазин, газовые котлы и запчасти</title>
  <link rel="stylesheet" href="css/f.css">
  <link rel="stylesheet" href="css/user-m.css">
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
        <div class="pathname">
          <a href="index.php" class="pathname_main__link">Главная</a> -
          <a href="#" class="pathname_service__link">Каталог</a> -
          <span class="pathname__text">Котлы</span>
        </div>
        <h1 class="boilers__header">Котлы в Актобе, каталог, цены</h1>
        <div class="boilers_links">
          <a href="#" class="boilers_links__item">Газовые котлы</a>
          <a href="#" class="boilers_links__item">Комплектующие для котлов</a>
        </div>
        <div class="boilers_goods">
        </div>
      </div>
    </div>
     <?php 
      include('footer.php');
    ?>
  </div>
  <div class="site-name"><span class="site-name__text">2019 &#169; Warm House</span></div>
  
  <link rel="stylesheet" href="css/style.css">
  <script src="js/a.js"></script>
</body>

</html>