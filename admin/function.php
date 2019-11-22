<?php
$link = mysqli_connect('localhost', 'non-root', '123', 'eshop');

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
?>