<?php
$sujet = 'Défi de ' . $_POST['pseudo'] . " sur Combienjetedois!";
$message = "Bonjour, " . $_POST['pseudo'] . " te défi sur combienjetedois.com. L'adresse du défi est: http://stormhost.fr/tpJs/jeu.php?jeu=" . $_POST['jeu']  . "&score=" .$_POST['score'] . "&mail=". $_POST['mail2'] . "&mail2=". $_POST['mail'] . " Le score à battre est de : " . $_POST['score'];
$destinataire = $_POST['mail'];
$headers = "From: \"expediteur moi\"combienjetedois@isen.fr\n";
$headers .= "Reply-To: moi@domaine.com\n";
$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";



?>
<html>
    <header>
    <meta charset="utf-8">
    <title>Combienjetedois</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="scripts/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="scripts/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Icons -->
    <link href="scripts/icons/general/stylesheets/general_foundicons.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="scripts/icons/social/stylesheets/social_foundicons.css" media="screen" rel="stylesheet" type="text/css" />
    <!--[if lt IE 8]>
        <link href="scripts/icons/general/stylesheets/general_foundicons_ie7.css" media="screen" rel="stylesheet" type="text/css" />
        <link href="scripts/icons/social/stylesheets/social_foundicons_ie7.css" media="screen" rel="stylesheet" type="text/css" />
    <![endif]-->



    <link href="http://fonts.googleapis.com/css?family=Chewy" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Abel" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Terminal+Dosis+Light" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet" type="text/css">

    <link href="styles/custom.css" rel="stylesheet" type="text/css" />        <link rel="stylesheet" href="css/foundation.css" />
        <script src="js/vendor/modernizr.js"></script>
    </header>
<body id="pageBody">

                        <div class="span12" id="divMain">
                                	        <div class=" medium-uncollapse large-collapse">

            <div class="small-12 columns text-center centered panel">

<?php
if(mail($destinataire,$sujet,$message,$headers))
{
        echo "<h1>Défi envoyé! </h1>";
}
else
{
        echo "Une erreur c'est produite lors de l'envois de l'email.";
}

?>

</div>
</div>
</div>
</body>
</html>