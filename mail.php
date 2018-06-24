



<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	
	<title>Five Reklama</title>
	
	<meta name="description" content="IT Engineering" />
	<meta name="keywords" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
   

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/lightbox.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/animate.css"/>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
    

</head>

<body>
   <!----------Nav ----------->  
    

 
</section>
    
<section class="container-fluid">
    <section class="row wyslanie">
        <div class="">
    <span>
        
<?php

$to      = 'biuro@fivereklama.pl';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers = 'Content-Type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);

echo '<h1>Wiadomość wysłana :)</h1>';
?>
        
      <div class="powrot">
        <a href="index.html">Powrót</a>
        </div>  
    </span>
            </div>
    </section>
    
</section> 
    
    
    
    
    
    
    
   
    
   


	
   
    

   
   
</body>
</html>