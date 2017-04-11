<!DOCTYPE html>
<html>
<head>
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

    <link href="styles/custom.css" rel="stylesheet" type="text/css" />
</head>
<body id="pageBody">

    <div id="divBoxed" class="container">

        <div class="transparent-bg" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;zoom: 1;"></div>

        <div class="divPanel notop nobottom">
            <div class="row-fluid">
                <div class="span12">

                    <div id="divLogo">
                        <a href="index.html" id="divSiteTitle">Combienj'tedois</a><br />
                        <a href="index.html" id="divTagLine">Rembourses tes amis en t'aumsant!</a>
                    </div>

                </div>
            </div>
            <div class="contentArea">

                <div class="divPanel notop page-content">



                    <div class="row-fluid">
                        <div class="span12" id="divMain">
                            
                            <?php
                            if($_GET['jeu'] == "pong")
                            {
                                if(isset($_GET['score']))
                                    {
                                        echo "<iframe src='games/Pong/pong.php?score=". $_GET['score'] ."&mail=". $_GET['mail'] ." &mail2=" . $_GET['mail2']."' frameborder='0' height='400px' width='100%''></iframe>";
                                    }
                                    else
                                    {
                                        echo "<iframe src='games/Pong/pong.php' frameborder='0' height='400px' width='100%''></iframe>";

                                    }                            }


                            if($_GET['jeu'] == "tetris")
                            {
                                if(isset($_GET['score']))
                                    {
                                        echo "<iframe src='games/Tetris/tetris.php?score=". $_GET['score'] ."&mail=". $_GET['mail'] ." &mail2=" . $_GET['mail2']."' frameborder='0' height='600px' width='100%''></iframe>";
                                    }
                                    else
                                    {
                                        echo "<iframe src='games/Tetris/tetris.php' frameborder='0' height='600px' width='100%''></iframe>";

                                    }
                            }
                            if($_GET['jeu'] =="quizz")
                            {
                                if(isset($_GET['score']))
                                    {
                                        echo "<iframe src='games/Quizz/quizz.php?score=". $_GET['score'] ."&mail=". $_GET['mail'] ." &mail2=" . $_GET['mail2']."' frameborder='0' height='600px' width='100%''></iframe>";
                                    }
                                    else
                                    {
                                        echo "<iframe src='games/Quizz/quizz.php' frameborder='0' height='600px' width='100%''></iframe>";

                                    }
                            }

                            ?>
                        <center><a class="btn btn-large btn-primary" href="index.html">Retour accueil</a></center>
                        </div>
                    </div>

                    <div id="footerInnerSeparator"></div>
                </div>
            </div>
</div>

</div>
</body>
</html>