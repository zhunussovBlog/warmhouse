<div class="callback">
  <div class="callback_header">
    <h2 class="callback_header__h">Заказать звонок</h2>
    <span class="callback__close">&times;</span>
  </div>
  <form method="post" action="mail.php" class="callback_form">
    <label for="userName">Ваше имя *</label>
    <input class="callback_form__inp" required type="text" name="userName">
    <label for="userPhone">Телефон *</label>
    <input class="callback_form__inp" required type="tel" pattern="+7-[0-9]{3}-[0-9]{3}-[0-9]{4}" name="userPhone">
    <div class="form-btns">
      <button type="submit" class="send" name="sub">Отправить</button>
      <button class="callback__close">Закрыть</button>
    </div>
  </form>
  
</div>
<div class="bg-black"></div>