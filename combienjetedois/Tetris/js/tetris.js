/*
Version 3 avec des getElementById.innerHTML;
*/
var speed = 0;
var arrayWidth=10;
var loser=0;
var timer1,timer2,timer3,timer4;
var score=0;
var arrayHeight=20;
var newShape=true;	//si on doit creer une nouvelle forme ou pas
var tetrominos = new Array();	//tableau qui contient toutes les formes créées
var board = new Array(arrayWidth);   //le tableau de jeu
var pattern = new Array();


function initArray(){
	for(var i=0; i<7; i++){
		pattern[i] = i;
	}
	for(var i=0; i<arrayWidth; i++){
		board[i]=new Array(arrayHeight);  //passe le tableau en 2D
	}
	for(var p=0; p < arrayHeight ;p++){
		for(var m=0; m < arrayWidth ; m++)
			board[m][p]=0; 			//chaque case prend la valeur 0 : vide
	}	
	shuffleArray();
}

function shuffleArray(){   //mélange le tableau pour obtenir un pattern de formes différent 
	var k,m,temp;
	for(var i=0; i<49; i++){
		k = Math.floor(Math.random()*7);
		m = Math.floor(Math.random()*7);
		temp = pattern[k];
		pattern[k] = pattern[m];
		pattern[m] = temp;
	}
}

function printArray(){
	document.getElementById("gameBoard").innerHTML = '';				//on clear la page
	var stringHTML = "<table id='board' border='1px'>";
	for(var p=0 ; p < arrayHeight ;p++){
		stringHTML += '<tr>';
		for(var m=0 ; m < arrayWidth; m++){
			if(board[m][p]==0)			//si la case est vide, pas de couleur
				stringHTML += "<td></td>";
			else if(board[m][p]==1)				
				stringHTML += "<td style='background-color:Purple;'></td>";
			else if(board[m][p]==2)				
				stringHTML += "<td style='background-color:Yellow;'></td>";
			else if(board[m][p]==3)				
				stringHTML += "<td style='background-color:Cyan;'></td>";
			else if(board[m][p]==4)				
				stringHTML += "<td style='background-color:Green;'></td>";
			else if(board[m][p]==5)				
				stringHTML += "<td style='background-color:Red;'></td>";
			else if(board[m][p]==6)				
				stringHTML += "<td style='background-color:Blue;'></td>";
			else if(board[m][p]==7)				
				stringHTML += "<td style='background-color:Orange;'></td>";
		}
		stringHTML += "</tr>";
	}
	stringHTML += "</table>";
	document.getElementById("gameBoard").innerHTML = stringHTML;	
	document.getElementById("score").innerHTML = "<div style='text-align:center'>Score : " + score + "</div>" ;	//on affiche le score 	
}

function printing(){				//toutes les 10ms on refresh le tableau sauf si on a perdu
	printArray();
	if(loser==0) timer4 = setTimeout("printing()",1000.0/60.0);
}

function createShape(){
	checkFilledLines(); 	 //vu qu'on crée une nouvelle shape, on regarde si celle d'avant n'a pas rempli une ou plusieurs lignes
	if(tetrominos.length%7 == 6){
		var s = pattern[6];
		shuffleArray();           //on mélange de tableau de formes 
		var ss = pattern[0];   //forme suivant, pour le div nextShape
	}else{
		var s = pattern[(tetrominos.length)%7];
		var ss = pattern[(tetrominos.length)%7+1];
	}
	if(checkIfLost()){ //si on a pas perdu, on peux creer une shape
		if(s==0) var ns = new TetrominoT();
		else if(s==1) var ns = new TetrominoO();
		else if(s==2) var ns = new TetrominoI();
		else if(s==3) var ns = new TetrominoL();
		else if(s==4) var ns = new TetrominoJ();
		else if(s==5) var ns = new TetrominoS();
		else if(s==6) var ns = new TetrominoZ();
		if(ss==0) document.getElementById("next").innerHTML = "<img src='./content/T.png'></img>";
		else if(ss==1) document.getElementById("next").innerHTML = "<img src='./content/O.png'></img>";
		else if(ss==2) document.getElementById("next").innerHTML = "<img src='./content/I.png'></img>";
		else if(ss==3) document.getElementById("next").innerHTML = "<img src='./content/L.png'></img>";
		else if(ss==4) document.getElementById("next").innerHTML = "<img src='./content/J.png'></img>";
		else if(ss==5) document.getElementById("next").innerHTML = "<img src='./content/S.png'></img>";
		else if(ss==6) document.getElementById("next").innerHTML = "<img src='./content/Z.png'></img>";
		tetrominos.push(ns);	 			
	}
}


function nextState(){
	if(newShape){			//si on doit creer une forme on le fait
		createShape();
		newShape=false;
	}
	if(loser==0){
		timer1 = setTimeout("tetrominos[tetrominos.length-1].shape.goDown()",500 - speed);
		timer2 = setTimeout("nextState()",500 - speed);
	}
}


function keyPressed(e){  
	e = e || window.event;
	if (e.keyCode == '37'){		        //si on a appuyé sur la fleche gauche
		tetrominos[tetrominos.length-1].shape.moveLeft();
	}
	else if (e.keyCode == '39'){		//droite
		tetrominos[tetrominos.length-1].shape.moveRight();
	}
	else if (e.keyCode == '40'){  	       //si on appuie sur la flèche du bas, on accelère la cadence de descente
		tetrominos[tetrominos.length-1].shape.goDown();
	}
	else if (e.keyCode == '38'){		//flèche du haut -> rotation de la forme dans le sens horaire
		tetrominos[tetrominos.length-1].rotate();
	}
}
function checkKey(){				//toutes les 10ms on regarde si une touche est pressee
	document.onkeydown = keyPressed;
	if(loser==0) timer3 = setTimeout("checkKey()",1.0);
}

function loose(){
	document.getElementById("gameBoard").innerHTML = '';	  //affichage de fin.
	document.getElementById("score").innerHTML = '';
	document.getElementById("next").innerHTML = '';
	document.getElementById("nextShape").innerHTML = '';
	document.getElementById("gameEnd").innerHTML = "Game over. Score : " + score + "<br></br>";
	document.getElementById("gameEnd").innerHTML += "<a href=\"javascript:location.reload(true)\">Retry ?</a>";
	console.log("fuck");
}


function checkIfLost(){		//on regarde si au moment de creer une shape, une est déjà sur la premiere ligne
	var lost=0;
	for(var j=0; j<arrayWidth;j++){
		if(board[j][0]!=0) lost=1;			
	}
	if(lost==1){
		loser=1;	//loser : variable globale qui permet d'arreter toutes les fonctions recursives
		setTimeout("loose()",500);
		return 0;
	}
	return 1;
}

function deleteLine(i){			//on supprime la ligne correspondante
	for(var k=0; k<arrayWidth; k++){
		board[k][i]=0;			//elle vaut 0 et forcément celle du haut aussi vu que tout va descendre
		board[k][0]=0;
	}
	for(var m=i;m>=1;m--){
		for(var j=0; j<arrayWidth;j++){		
			board[j][m]=board[j][m-1]	//on décale tout
		}
	}
	if(speed<350) speed += 10;	//augmentation de la vitesse ! jusqu à 350.
}
function checkFilledLines(){			//on check si une ligne est pleine, dans ce cas on la supprime
	var isLineFilled;
	for (var i=arrayHeight-1; i>=0; i--){
		isLineFilled=1;  		
		for(var m=0; m<arrayWidth; m++){
			if(board[m][i]==0) isLineFilled=0; 
		}	
		if(isLineFilled==1){
			deleteLine(i);
			score+=10;  	
			i++;		
		}
	}	
}
