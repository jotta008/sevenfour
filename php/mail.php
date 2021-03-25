<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$consulta = $_POST['consulta'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'josecirer@gmail.com';
    $mail->Password   = 'fcjdbkskepqpfbvp';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('josecirer@gmail.com', 'SEVEN FOUR');
    $mail->addAddress('josecirer@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Consulta SEVEN FOUR';
    $mail->Body    = 'Correo ' . $email . '<br/>Nombre ' . $name . '<br/>Telefono ' . $phone . '<br/>Consulta: ' . $consulta;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo json_encode('Message has been sent');
} catch (Exception $e) {
    echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
}
