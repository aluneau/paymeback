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
            		echo "Score à battre: " . $_GET['score'] . " sur le jeu: " . $_GET['jeu'];
            	?>
                    <form action="mailDefi.php" method="post" data-abide >
                        <div class="name-field">
                            <label>Ton pseudo <small>*</small>
                                <input type="text" name = "pseudo" required pattern="[a-zA-Z]+"/>
                            </label>
                            <small class="error">Champ obligatoire</small>
                        </div>

                        <div class="name-field">
                            <label>Le mail de la personne que tu veux defier: <small>*</small>
                                <input type="text" name = "mail" required pattern="[a-zA-Z]+"/>
                            </label>
                            <small class="error">Champ obligatoire</small>

                        </div>

                        <div class="name-field">
                            <label>Ton mail: <small>*</small>
                                <input type="text" name = "mail2" required pattern="[a-zA-Z]+"/>
                            </label>
                            <small class="error">Champ obligatoire</small>

                        </div>
                        <input type="hidden" name = "jeu" value="<?php echo $_GET['jeu']; ?>"> 
                        <input type="hidden" name = "score" value="<?php echo $_GET['score']; ?>"> 

                        <input type="submit" class="button round" value="Valider"/>
                    </form>
</div>
</div>
        <script src="js/vendor/jquery.js"></script>
        <script src="js/foundation.min.js"></script>
        <script>
            $(document).foundation();
        </script>

                        </div>
                    </div>

                    <div id="footerInnerSeparator"></div>
                </div>
            </div>
</div>

</div>
</body>
</html>