<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['userName'];
$phone = $_POST['userPhone'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'asekenskigo@mail.ru';
$mail->Password = 'adonis168';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 

$mail->setFrom('asekenskigo@mail.ru');
$mail->addAddress('zhunussov.blog.kz@gmail.com'); 

$mail->isHTML(true);

$mail->Subject = 'Заявка на обратный звонок с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>