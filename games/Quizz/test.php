<?php
$monfichier = fopen('compteur.txt', 'a+');
 
fputs($monfichier, "TEST1"); // On écrit le nouveau nombre de pages vues
 
fclose($monfichier);
 
echo '<p>Cette page a été vue ' . $pages_vues . ' fois !</p>';
?>