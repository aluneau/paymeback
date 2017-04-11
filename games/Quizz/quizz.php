<?php
if(isset($_GET['score']))
{
	$scoreToWin=$_GET['score'];

}
if(isset($_GET['mail']))
{
		$mailToSend=$_GET['mail'];

}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head> 

	<title> quizz </title>
	<meta charset="utf8" />
        <link rel="stylesheet" href="../../styles/foundation.css" />
        <script src="../../scripts/jquery-1.8.2.min.js"></script>

        <style>
            @import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300);
            .timer{
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            background: grey;
            }
            
            .custom-panel {
                  border-radius: 17px;
                  background-color: #B8E7FF;
            }
            
.pie {
  width: 105px;
  height: 105px;
  display: block;
  position: absolute;
  top:12%;
  right:5px;
  border-radius: 50%;
  background-color: #00b5e8;
  border: 2px solid #00b5e8;
  float: left;
  margin: 2em;
}
.pie .block {
  position: relative;
  background: #fff;
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 50%;
  top: 10px;
  left: 10px;
}

.time {
  font-size: 3em;
  position: absolute;
  top: 17%;
  left: 38%;
  color: #999999;
}

.degree {
  /*90 + ( 360 * .1 )*/
  background-image: linear-gradient(90deg, transparent 50%, white 50%), linear-gradient(90deg, white 50%, transparent 50%);
}
        </style>

	<script type= "text/javascript"> 
function getXMLHttpRequest() {
	var xhr = null;
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}



		var a;
		var nbre_question=1;
		var bonne_rep=0;
		var mauvaise_rep=0;
		question = new Array();
		reponse = new Array();
		 question[2]= "</br> <span> En quelle année l'ISEN a été créé ? </span></br>"
		reponse[0]= "</br> <input type='radio' name='annee' onclick='clearTimeout(a);question_suivante(3,0)'/> <span> 1958 </span>";
		reponse[1]= "</br> <input type='radio' name='annee' onclick='clearTimeout(a);question_suivante(3,1)'/>  <span> 1956 </span>";
		reponse[2]= "</br> <input type='radio' name='annee' onclick='clearTimeout(a);question_suivante(3,0)'/>  <span> 1957 </span>";
		reponse[3]="</br> <input type='radio' name='annee' onclick='clearTimeout(a);question_suivante(3,0)'/>  <span> 1962 </span>";
		reponse[4]="</br> <input type='radio' name='annee' onclick='clearTimeout(a);question_suivante(3,0)'/> <span> 1955</span>";
		question[3]= "</br> <span>Qui fut Premier ministre de la République Française entre Mars 1983 et Juillet 1984 ? </span></br>";
		reponse[5]= "</br> <input type='radio' name='ministre' onclick='clearTimeout(a);question_suivante(4,0)'/> <span> Michel Rocard</span>";
		reponse[6]= "</br> <input type='radio' name='ministre' onclick='clearTimeout(a);question_suivante(4,0)'/><span> Laurent Fabius </span>";
		reponse[7]=" </br> <input type='radio' name='ministre' onclick='clearTimeout(a);question_suivante(4,0)'/><span> Jacques Delors </span>";
		reponse[8]=" </br> <input type='radio' name='ministre' onclick='clearTimeout(a);question_suivante(4,0)'/><span> Edith Cresson </span>";
		reponse[9]=" </br> <input type='radio' name='ministre' onclick='clearTimeout(a);question_suivante(4,1)'/> <span> Pierre Mauroy </span>";
		question[4]= "</br> <span>Dans le film Hunger Games, de quel district est issue Katniss Everdeen? </span></br>";
		reponse[10]= "</br> <input type='radio' name='film' onclick='clearTimeout(a);question_suivante(5,0)'/> <span> District 8 </span>";
		reponse[11]="</br> <input type='radio' name='film' onclick='clearTimeout(a);question_suivante(5,0)'/><span> District 9 </span>";
		reponse[12]="</br> <input type='radio' name='film' onclick='clearTimeout(a);question_suivante(5,0)'/> <span> District 10 </span>";
		reponse[13]="</br> <input type='radio' name='film' onclick='clearTimeout(a);question_suivante(5,0)'/><span> District 11 </span>";
		reponse[14]="</br> <input type='radio' name='film' onclick='clearTimeout(a);question_suivante(5,1)'/><span> District 12 </span>";
		question[5]= "</br> <span> Durant la seconde guerre mondiale, qui fut chef de la résistance Française ?</span></br>";
		reponse[15]="</br> <input type='radio' name='homme' onclick='clearTimeout(a);question_suivante(6,1)'/><span> Charles De Gaulle </span>";
		reponse[16]="</br><input type='radio' name='homme' onclick='clearTimeout(a);question_suivante(6,0)'/> <span> Guy Môquet </span>";
		reponse[17]="</br><input type='radio' name='homme' onclick='clearTimeout(a);question_suivante(6,0)'/> <span> Jean Moulin </span>";
		reponse[18]="</br> <input type='radio' name='homme' onclick='clearTimeout(a);question_suivante(6,0)'/><span> Michel Debré </span>";
		reponse[19]="</br> <input type='radio' name='homme' onclick='clearTimeout(a);question_suivante(6,0)'/><span> Pierre Mendès France </span>";
		question[6]="</br> <span> Avant 2011, quel club de football était le seul à ne pas avoir de sponsor maillot?</span></br>";
		reponse[20]="</br> <input type='radio' name='club' onclick='clearTimeout(a);question_suivante(7,0)'/><span> Liverpool FC </span>";
		reponse[21]="</br> <input type='radio' name='club' onclick='clearTimeout(a);question_suivante(7,0)'/><span> Inter Milan </span>";
		reponse[22]="</br> <input type='radio' name='club' onclick='clearTimeout(a);question_suivante(7,1)'/><span> FC Barcelone </span>";
		reponse[23]="</br> <input type='radio' name='club' onclick='clearTimeout(a);question_suivante(7,0)'/><span> Bayern Munich </span>";
		reponse[24]="</br> <input type='radio' name='club' onclick='clearTimeout(a);question_suivante(7,0)'/><span> Arsenal FC </span>";
		question[7]="</br> <span> Dans la série Américaine Breaking Bad, comment s'appelle l'avocat de la famille White ? </span></br>";
		reponse[25]="</br> <input type='radio' name='avocat' onclick='clearTimeout(a);question_suivante(8,0)'/> <span> Gustavo Frings </span>";
		reponse[26]="</br> <input type='radio' name='avocat' onclick='clearTimeout(a);question_suivante(8,0)'/><span> Jessie Pinkman </span>";
		reponse[27]="</br><input type='radio' name='avocat' onclick='clearTimeout(a);question_suivante(8,0)'/> <span> Ted Beneke </span>";
		reponse[28]="</br> <input type='radio' name='avocat' onclick='clearTimeout(a);question_suivante(8,1)'/><span> Saul Goodman </span>";
		reponse[29]="</br> <input type='radio' name='avocat' onclick='clearTimeout(a);question_suivante(8,0)'/><span> Mike Ehrmantraut </span>";
		question[8]="</br> <span> Calculez (48/8) x (64/8) </span></br>";
		reponse[30]="</br>  <input type='radio' name='nombre' onclick='clearTimeout(a);question_suivante(9,0)'/> <span> 64 </span>";
		reponse[31]="</br>  <input type='radio' name='nombre' onclick='clearTimeout(a);question_suivante(9,1)'/> <span> 48 </span>";
		reponse[32]="</br> <input type='radio' name='nombre' onclick='clearTimeout(a);question_suivante(9,0)'/> <span> 32 </span>";
		reponse[33]="</br> <input type='radio' name='nombre' onclick='clearTimeout(a);question_suivante(9,0)'/> <span> 56 </span>";
		reponse[34]="</br> <input type='radio' name='nombre' onclick='clearTimeout(a);question_suivante(9,0)'/> <span> 128 </span>";
		question[9]="</br> <span> Dans quel ville est située le 1er port de pêche Français en terme d'activités ? </span></br>";
		reponse[35]="</br> <input type='radio' name='port' onclick='clearTimeout(a);question_suivante(10,0)'/><span> Le Havre </span>";
		reponse[36]="</br> <input type='radio' name='port' onclick='clearTimeout(a);question_suivante(10,0)'/><span> Marseille </span>";
		reponse[37]="</br> <input type='radio' name='port' onclick='clearTimeout(a);question_suivante(10,0)'/><span> Lorient </span>";		
		reponse[38]="</br><input type='radio' name='port' onclick='clearTimeout(a);question_suivante(10,1)'/> <span> Boulogne sur Mer </span>";
		reponse[39]="</br><input type='radio' name='port' onclick='clearTimeout(a);question_suivante(10,0)'/> <span> Saint Nazaire </span>";
		question[10]="</br> <span> Quel est le jeu vidéo le plus vendu de tous les temps toutes plateformes confondues ?</span></br>";
		reponse[40]="</br><input type='radio' name='jeu' onclick='clearTimeout(a);fin_quiz(1)'/> <span> Wii Sports </span>";	
		reponse[41]="</br> <input type='radio' name='jeu' onclick='clearTimeout(a);fin_quiz(0)'/><span> GTA V </span>";
		reponse[42]="</br> <input type='radio' name='jeu' onclick='clearTimeout(a);fin_quiz(0)'/><span> Call of Duty Modern Warfare 3 </span>";
		reponse[43]="</br> <input type='radio' name='jeu' onclick='clearTimeout(a);fin_quiz(0)'/><span> Minecraft </span>";
		reponse[44]="</br><input type='radio' name='jeu' onclick='clearTimeout(a);fin_quiz(0)'/> <span> Duck Hunt </span>";
		function question_suivante(numero_question,rep_precedente){
			nbre_question+=1;
			var text_page=document.getElementById("page");
			if (rep_precedente){
				bonne_rep+=1;
				htmlString = "<span style='color:green;'>Bravo bonne réponse !</span>";
				htmlString+= "</br><span style='color:blue; '> Question "+numero_question + "</span> </br>"; 
				htmlString += question[numero_question];
				htmlString+=  reponse[(numero_question-2)*5];
				htmlString+= reponse[((numero_question-2)*5)+1];
				htmlString+= reponse[((numero_question-2)*5)+2];
				htmlString+= reponse[((numero_question-2)*5)+3];
				htmlString+= reponse[((numero_question-2)*5)+4];
				text_page.innerHTML = htmlString;
				timer(10);
			}
			else {
				mauvaise_rep+=1;
				
				htmlString = "<span style='color:red;'>Mauvaise réponse ! </span>";
				htmlString+= "</br><span style='color:blue; '> Question "+numero_question + "</span> </br>"; 
				htmlString+= question[numero_question];
				htmlString+=  reponse[(numero_question-2)*5];
				htmlString+= reponse[((numero_question-2)*5)+1];
				htmlString+= reponse[((numero_question-2)*5)+2];
				htmlString+= reponse[((numero_question-2)*5)+3];
				htmlString+= reponse[((numero_question-2)*5)+4];
				text_page.innerHTML = htmlString;
				
				timer(10);
			}
		}
		function lancement(){
			
			var text_page=document.getElementById("page");
			htmlString = '<span style="color:blue; "> Question 1 </span> </br></br>';
			htmlString += '<span> Quelle est la capitale de la Suède ? </span> </br></br> ';
	htmlString += '<form> <input type="radio" name="capital" onclick="clearTimeout(a);question_suivante(2,0)"/><span> Oslo</span> </br> ';
			
			htmlString += '<input type="radio" name="capital" onclick="clearTimeout(a);question_suivante(2,0)"/> <span> Helsinki </span> </br> ';
			htmlString += '<input type="radio"  name="capital" onclick="clearTimeout(a);question_suivante(2,1)"/> <span> Stockholm </span> </br>';
			htmlString += '<input type="radio" name="capital" onclick="clearTimeout(a);question_suivante(2,0)"/> <span> Göteborg </span> </br>';
			htmlString += '<input type="radio" name="capital" onclick="clearTimeout(a);question_suivante(2,0)"/> <span> Malmö </span> </br></form>';

			text_page.innerHTML = htmlString;
			document.getElementById("timeId").style.display="";
			timer(10);
		}
		function fin_quiz(rep_precedante){
			if(rep_precedante){
				bonne_rep +=1;
			}
			else{
				mauvaise_rep+=1;}
			htmlString= '<span> vous venez de terminer ce quizz</span></br>';
			htmlString+= '<span> vous avez obtenu ' + bonne_rep + ' bonne(s) réponse(s) et '+ mauvaise_rep + ' mauvaise(s) réponse(s)';
			htmlString+= '</span>';
                        document.getElementById("timeId").style.display="none"
			var text_page=document.getElementById("page");
			text_page.innerHTML = htmlString;
			var text_timer=document.getElementById("page");
			text_timer.innerHTML+= '<br/>   <input class="button round"type="button" value= "voir les bonnes réponses et defier" onclick="voir_bonne_reponse()">';
			if (bonne_rep > scoreToWin)
			{
							text_timer.innerHTML+= '</br> <h1>vous avez gagné</h1>';
							var xhr = getXMLHttpRequest(); // Voyez la fonction getXMLHttpRequest() définie dans la partie précédente
							xhr.open("GET", "../../mailGain.php?jeu=quizz&mail=<?php echo $_GET['mail'];?>&mail2=<?php echo $_GET['mail2'];?>", true);
							xhr.send(null);

			}
			else
			{
				if(scoreToWin!= undefined)
				{
								text_timer.innerHTML+= '</br> <h1>vous avez perdu</h1>';
							var xhr = getXMLHttpRequest(); // Voyez la fonction getXMLHttpRequest() définie dans la partie précédente
							xhr.open("GET", "../../mailLose.php?jeu=quizz&mail=<?php echo $_GET['mail'];?>&mail2=<?php echo $_GET['mail2'];?>", true);
							xhr.send(null);
				}							
			}

		}
		function timer(n){
			
			var text_timer=document.getElementById("timer");
			n--;
                        text_timer.innerHTML=  n;
                        update(n);
			if(n<=0 ){//alert("vous avez dépassé la limite de temps, par conséquent, votre réponse est comptée comme fausse");
				 question_suivante(nbre_question+1,0);}
			if (n>0){
			a =setTimeout(function (){timer(n)},1000);}
		}

		function voir_bonne_reponse(){
			htmlString= '<span>';
			htmlString+='Quelle est la capitale de la Suède ? </span> </br>';
			htmlString+= '<span style="color:green;"> Stockholm </span> </br>';
			htmlString+="<span> En quelle année l'ISEN a été créé ? </span> </br>";
			htmlString+='<span style="color:green;"> 1956 </span></br>';
			htmlString2=' <span>Qui fut Premier ministre de la République Française entre Mars 1983 et Juillet 1984 ? </span></br>';
			htmlString2+='<span style="color:green;"> Pierre Mauroy </span></br>';
			htmlString2+='<span>Dans le film Hunger Games, de quel district est issue Katniss Everdeen? </span></br>';
			htmlString2+='<span style="color:green;"> District 12 </span></br>';
			htmlString3= '<span> Durant la seconde guerre mondiale, qui fut chef de la résistance Française ?</span></br>';
			htmlString3+= '<span style="color:green;"> Charles De Gaulle </span> </br>';
			htmlString3+= '<span> Avant 2011, quel club de football était le seul à ne pas avoir de sponsor maillot?</span></br>';
			htmlString3+= '<span style="color:green;"> FC Barcelona </span> </br>';
			htmlString3+= "<span> Dans la série Américaine Breaking Bad, comment s'appelle l'avocat de la famille White ? </span></br>";
			htmlString3+= '<span style="color:green;"> Saul Goodman </span> </br>';
			htmlString4= '<span> Calculez (48/8) x (64/8) </span></br>';
			htmlString4+= '<span style="color:green;"> 48 </span></br>';
			htmlString4+= "<span> Dans quel ville est située le 1er port de pêche Français en terme d'activités ? </span></br>";
			htmlString4+= '<span style="color:green;"> Boulogne sur Mer </span> </br>';
			htmlString4+= ' <span> Quel est le jeu vidéo le plus vendu de tous les temps toutes plateformes confondues ?</span></br>';
			htmlString4+= '<span style="color:green;"> Wii Sports </span> </br>';

			htmlString4+= '<a href="../../defiForm.php?score='+ bonne_rep + '&jeu=quizz"' + ' class="button alert round"type="button">Defier</a>'
			var text_timer=document.getElementById("page");
			text_timer.innerHTML= htmlString+htmlString2+htmlString3+htmlString4;
		}
                
                
                
                var totaltime = 10;

function update(percent) {
    var deg;
    if(percent <4)
    {
console.log("test");    }
    
    if (percent < (totaltime / 2)) {
        deg = 90 + (360 * percent / totaltime);
        $('.pie').css('background-image',
            'linear-gradient(' + deg + 'deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)'
        );
        
    } else if (percent >= (totaltime / 2)) {
        deg = -90 + (360 * percent / totaltime);
        $('.pie').css('background-image',
            'linear-gradient(' + deg + 'deg, transparent 50%, #00b5e8 50%),linear-gradient(90deg, white 50%, transparent 50%)'
        );
        
    }
}

	</script>  
</head>

<body>
        <div class="row">
            <div class="large-12 columns text-center " style="padding-top: 7%">
                <div class="panel custom-panel" >
                    <span id="page">
                                <p>
                                    Ce jeu est un quiz de 10 questions. Pour chaque question vous aurez 5 propositions. A vous de choisir la bonne. Cependant vous n aurez que 10 secondes pour répondre aux questions, lorsque ce délai sera dépassé , la question sera passée et donc vous ne marquerez pas de point. Bon jeu !
                                	<?php
                                		if(isset($scoreToWin))
                                		{
                                			echo "<br/>Score à battre: ";
                                			echo $scoreToWin;
                                		}
                                	?>

                                	<script type="text/javascript">
                                		scoreToWin = <?php echo $scoreToWin; ?>;
                                	</script>
                                </p>
                                <button class = "button round" type="buton" id="jouer" onclick="lancement()"> jouer </button>
                    </span>
                    <div id="timeId" class="timer" style="display:none">
                            <div class="pie degree">
                                <span class="block"></span>
                                <span class = "time" id="timer">0</span>
                            </div>
                    </div>
                </div>
                </br>        
                </div>
            </div>
</body>

</html>
