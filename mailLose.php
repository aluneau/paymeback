<?php
$sujet = 'Défi de ' . $_GET['pseudo'] . " sur Combienjetedois!";
$message = "Bonjour, ".$_GET['mail2'] . " a perdu à votre défi sur le jeu: " . $_GET['jeu'] ."! Vous pouvez voir avec lui pour l'argent! ";
$destinataire = $_GET['mail'];
$headers = "From: \"expediteur moi\"combienjetedois@isen.fr\n";
$headers .= "Reply-To: moi@domaine.com\n";
$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";

if(mail($destinataire,$sujet,$message,$headers))
{
        echo "<h1>Défi envoyé! </h1>";
}
else
{
        echo "Une erreur c'est produite lors de l'envois de l'email.";
}

?>