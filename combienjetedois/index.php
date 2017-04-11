<html>
    <header>
        <meta charset="UTF-8" />
        <title>PayMeBack</title>
        <link rel="stylesheet" href="css/foundation.css" />
        <link rel="stylesheet" type="text/css" href="css/index.css"/>

        <!-- Magnific Popup core CSS file -->
        <link rel="stylesheet" href="Magnific-Popup-master/dist/magnific-popup.css"> 
        <!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
        
<!--        <script type="text/javascript">
            function changeText(name)
            {
                if(document.getElementsByName(name).value != "")
                {
                    document.getElementById(name).style.display='none';
                    document.getElementById(name).innerHTML = "";
                }
                else
                {
                    document.getElementById(name).style.display='';
                    document.getElementById(name).innerHTML = "Non ";
                }
            }
        </script>-->
        
         <script>
            $(document).ready(function() {
                $(".gamesimg").magnificPopup({
                    type : "inline",
                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: false,
                    preloader: false,
                    
                    midClick: true,
                    removalDelay: 200,
                    mainClass: 'my-mfp-zoom-in'

                });

            });    
            var timer1;
            function scrollDiv(divId, depl){
                var toScroll = document.getElementById(divId);
                toScroll.scrollTop -= depl;
                timer1 = setTimeout('scrollDiv("'+divId+'", '+depl+')', 30);
            }



        </script>
        <style>
            .navbar{
                background-color: #004C82;
            }
            .custom-panel {
                  border-radius: 17px;
            }
            .blue {
                background-color: #81DAF5;
            }
        </style>
        <script src="js/vendor/jquery.js"></script>
        <script src="js/foundation.min.js"></script>
    </header>
    
    <body>


<nav class="navbar top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a href="#">Paymeback</a></h1>
    </li>
  </ul>
    
    
    <section class="top-bar-section navbar">
    <!-- Right Nav Section -->
    <ul class="right">
        <li>
            <form action="_connection.php" method="post">
            <div class="row">
                <div class="large-4 small-9 columns navbar">
                    <input type="text" placeholder="Email" id="email">
                </div>
                <div class="large-4 small-9 columns navbar">
                    <input type="password" placeholder="Mot de passe" id>
                </div>
                <div class="large-4 small-3 columns navbar">
                    <input type="submit" value="Connexion" class=" button alert round expand"/>
                </div>
            </div>
            </form>
</li>
    
    </ul>
  </section>
</nav>

    <center><h1>PayMeBack</h1><center>
        
        <div class=" medium-uncollapse large-collapse">
            <div class="small-8 columns text-center ">
                <div class="panel custom-panel"  style="height: 65%">
                    <h3>Fil d'actualités</h3>


                </div>
            </div>
            <div class="large-3 columns text-center ">
                <div class ="panel custom-panel blue" style="height: 65%">
                    <h3>Jeux</h3>
                    <div id="games">
                        <button type='button' id='top' value='top' 
                            class = "button radius secondary tiny"
                            onmouseover="scrollDiv('scrollGames', 2);" 
                            onmouseout="clearTimeout(timer1);"
                            onclick="clearTimeout(timer1);scrollDiv('scrollGames', 4);">
                            <img src="img/top-arrow.png"alt="top"/>
                        </button>  

                        <div id="scrollGames">
                            <a class="gamesimg" href="#TryorDice">
                                <img src="data:image/png;base64,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"
                                alt="pong" id="pong"/>
                            </a>

                            <a class="gamesimg" href="#TryorDice">
                                <img src="img/tetris.png"
                                alt="tetris" id="tetris"/>
                            </a>

                            <a class="gamesimg" href="#TryorDice">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YOT66z9mGHn6ETCGMlNIitvtbfPV8yL3QhxOFH40SrAwwTD6qg"
                                alt="quizz" id="quizz"/>
                            </a>
                        </div>    
                        <button type='button' id='bottom' value='bottom' 
                            class = "button radius secondary tiny"
                            onmouseover="scrollDiv('scrollGames', -2);" 
                            onmouseout="clearTimeout(timer1);"
                            onclick="clearTimeout(timer1);scrollDiv('scrollGames', -4);">
                            <img src="img/bottom-arrow.png" alt="bottom"/>
                        </button>
                    </div>           
                </div>
            </div>
        </div>

            <div id="TryorDice" class="zoom-anim-dialog mfp-hide">
                <center>Tu te prépares à plumer quelqu'un ? Fais ton choix.</center>
                <input type="submit" value="S'entraîner" class=" button secondary round expand"/>
                <input type="submit" value="Défier" class=" button secondary round expand"/>
            </div>

        <script src="js/vendor/modernizr.js"></script>
        <script src="js/index.js"></script>
        <!-- Magnific Popup core JS file -->
        <script src="Magnific-Popup-master/dist/jquery.magnific-popup.js"></script>


    </body>
</html>
