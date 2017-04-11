<?php
$sujet = 'Sujet de l\'email';
$message = "Bonjour,
Ceci est un message texte envoyé grâce à  php.
merci :)";
$destinataire = 'hugo.brunet@isen-lille.fr';
$headers = "From: \"expediteur moi\"emmanuel.luneau@numericable.fr\n";
$headers .= "Reply-To: moi@domaine.com\n";
$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";

if(mail($destinataire,$sujet,$message,$headers))
{
        echo "L'email a bien été envoyé.";
}
else
{
        echo "Une erreur c'est produite lors de l'envois de l'email.";
}

?>