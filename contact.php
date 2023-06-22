<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill in all the required fields.";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address.";
    exit;
  }

  $to = 'ymarketing508@outlook.com';
  $subject = 'New Contact Form Submission';
  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Message:\n$message";

  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $email_body, $headers)) {
    echo "Thank you for your message. We will get back to you soon!";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>