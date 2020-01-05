<?php
$link = mysqli_connect('localhost', 'phpmyadmin', '123', 'phpmyadmin');

if(mysqli_connect_errno()) {
  echo 'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'): '.mysqli_connect_error();
  exit();
}

mysqli_query($link, 'set names utf8');

function get_boilers($link)
{
  $sql = "SELECT * FROM `kotly`";
  $result = mysqli_query($link, $sql);

  $goods = mysqli_fetch_all($result, MYSQLI_ASSOC);

  return $goods;
}

function get_boiler($link, $id){
  $sql = "SELECT * FROM `kotly` WHERE id = {$id}";
  $result = mysqli_query($link, $sql);

  $good = mysqli_fetch_all($result, MYSQLI_ASSOC);

  return $good;
}

function search($link, $text){
  $sql = "SELECT * FROM `kotly` WHERE name LIKE '%{$text}%'";
  $result = mysqli_query($link, $sql);
  $goods = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $goods;
}

function add($link, $array){
  $name = trim($array[0]);
  $manufacturer = trim($array[1]);
  $execution = trim($array[2]);
  $appointment = trim($array[3]);
  $chamber = trim($array[9]);

  $power = $array[4];
  $premises = $array[5];
  $height = $array[6];
  $width = $array[7];
  $depth = $array[8];
  $warranty = $array[10];
  $price = $array[11];
  $image = $array[12];
  $description = trim($array[13]);
  
  $id = rand(1000, 9999);
  
  $sql = "INSERT INTO `kotly` (`id`, `name`, `manufacturer`, `execution`, `appointment`, `chamber`, `power`, `premises`, `height`,
                              `width`, `depth`, `warranty`, `cost`, `image`, `amount`, `isFavorite`, `isBasket`, `description`) VALUES 
                              ($id, '$name', '$manufacturer', '$execution', '$appointment', '$chamber', $power, $premises, 
                              $height, $width, $depth, $warranty, $price, '$image', 1, 0, 0, '$description')";

  mysqli_query($link, $sql);

  return true;
}

function edit ($link, $array, $id){
  $name = trim($array[0]);
  $manufacturer = trim($array[1]);
  $execution = trim($array[2]);
  $appointment = trim($array[3]);
  $chamber = trim($array[9]);

  $power = $array[4];
  $premises = $array[5];
  $height = $array[6];
  $width = $array[7];
  $depth = $array[8];
  $warranty = $array[10];
  $price = $array[11];
  $image = $array[12];
  $description = trim($array[13]);

  $sql = "UPDATE `kotly` SET `name` = '$name', `description` = '$description', `cost` = $price, `amount` = 1, `isFavorite` = 0, 
                            `isBasket` = 0, `image` = '$image', `manufacturer`= '$manufacturer', `execution` = '$execution', `appointment` = '$appointment', 
                            `power` = $power, `premises` = $premises, `height` = $height, `width` = $width, `depth` = $depth,
                            `chamber` = '$chamber', `warranty` = $warranty WHERE id = {$id}";
  mysqli_query($link, $sql);

  return true;
}

function remove($link, $id){
  $sql = "DELETE FROM `kotly` WHERE id = {$id}";

  mysqli_query($link, $sql);

  return true;
}

/* 
$array[0] == 'goodName';
$array[1] == 'manufacturer';
$array[2] == 'execution';
$array[3] == 'appointment';
$array[4] == 'power';
$array[5] == 'premises';
$array[6] == 'height';
$array[7] == 'width';
$array[8] == 'depth';
$array[9] == 'chumber';
$array[10] == 'warranty';
$array[11] == 'price';
$array[12] == 'image';
$array[13] == 'description';
*/
?>