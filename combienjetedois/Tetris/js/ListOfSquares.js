function Square(x,y) {
	this.x = x
	this.y = y;
}

function ListOfSquares() {  //liste de carrés
	this.list = [];
}


//Fonction goDown pour une liste de carrés. Vérifie s'il est possible de descendre la liste, et le fait.
ListOfSquares.prototype.goDown = function(){
	var color = board[this.list[0].x][this.list[0].y];
	var isDownable=true;
	var squarePartOfList=false;
	for(var i=0; i<this.list.length ; i++){ //on parcourt tous les carrés de la liste pour savoir si on peut la descendre ou pas.
		var x = this.list[i].x;
		var y = this.list[i].y;
		if(y==arrayHeight-1){  //si il y en a un au sol, on ne peut pas le descendre. On crée donc une nouvelle shape
			newShape=true;
			isDownable=false;
		}
		else if(board[x][y+1]!=0){ //si un carré est deja en dessous : on regarde s'il fait partie de la liste.
			squarePartOfList=false;
			for(var j=0; j<this.list.length ; j++){
				var x2 = this.list[j].x;
				var y2 = this.list[j].y;
				if(x2==x && y2==y+1) squarePartOfList=true; // alors le carré en dessous fait bien partie de la liste.
			}
			if(!squarePartOfList){ // dans ce cas, le carré qu'il y a en dessous ne fait pas partie de la liste .
				newShape=true;
				isDownable=false;
			}
		}
	}
	if(isDownable){ //si on a pas trouvé de contre indication, on descend tous les squares de la liste.
		for(var i=0; i<this.list.length ; i++){ 
			var x = this.list[i].x;
			var y = this.list[i].y;   	//tout d abord on efface la forme
			board[x][y]=0;
		}
		for(var j=0; j<this.list.length ; j++){ 
			this.list[j].y += 1;				//puis on la descend
		}
		for(var k=0; k<this.list.length ; k++){ 
			var x = this.list[k].x;
			var y = this.list[k].y;   	//puis on la re dessine
			board[x][y]=color;
		}
	}
}

ListOfSquares.prototype.moveLeft = function() { //Vérifie s'il est possible de bouge vers la gauche une liste de carrés, et le fait.
	var isLeftable=true;
	var color = board[this.list[0].x][this.list[0].y];
	var squarePartOfList=false;
	for(var i=0; i<this.list.length ; i++){ //on parcourt tous les carrés de la liste pour savoir si on peut la bouger a gauche ou pas.
		var x = this.list[i].x;
		var y = this.list[i].y;
		if(x==0){  //si il y en a un à l'extreme gauche, on ne peut pas le bouger.
			isLeftable=false;
		}
		else if(board[x-1][y]!=0){ //si un carré est deja a gauche : on regarde s'il fait partie de la liste.
			squarePartOfList=false;
			for(var j=0; j<this.list.length ; j++){
				var x2 = this.list[j].x;
				var y2 = this.list[j].y;
				if(x2==x-1 && y2==y) squarePartOfList=true; // alors le carré a gauche fait bien partie de la liste.
			}
			if(!squarePartOfList){ // dans ce cas, le carré qu'il y a a gauche ne fait pas partie de la liste .
				isLeftable=false;
			}
		}
	}
	if(isLeftable){ //si on a pas trouvé de contre indication, on bouge a gauche tous les squares de la liste.
		newShape=false;
		for(var i=0; i<this.list.length ; i++){ 
			var x = this.list[i].x;
			var y = this.list[i].y;   	//tout d abord on efface la forme
			board[x][y]=0;
		}
		for(var j=0; j<this.list.length ; j++){ 
			this.list[j].x -= 1;				//puis on la bouge à gauche
		}
		for(var k=0; k<this.list.length ; k++){ 
			var x = this.list[k].x;
			var y = this.list[k].y;   	//puis on la re dessine
			board[x][y]=color;
		}
	}
}

ListOfSquares.prototype.moveRight = function() { //Vérifie s'il est possible de bouger vers la droite une liste de carrés, et le fait.
	var isRightable=true;
	var color = board[this.list[0].x][this.list[0].y];
	var squarePartOfList=false;
	for(var i=0; i<this.list.length ; i++){ //on parcourt tous les carrés de la liste pour savoir si on peut la bouger a gauche ou pas.
		var x = this.list[i].x;
		var y = this.list[i].y;
		if(x==arrayWidth-1){  //si il y en a un à l'extreme droite, on ne peut pas le bouger.
			isRightable=false;
		}
		else if(board[x+1][y]!=0){ //si un carré est deja a droite : on regarde s'il fait partie de la liste.
			squarePartOfList=false;
			for(var j=0; j<this.list.length ; j++){
				var x2 = this.list[j].x;
				var y2 = this.list[j].y;
				if(x2==x+1 && y2==y) squarePartOfList=true; // alors le carré a droite fait bien partie de la liste.
			}
			if(!squarePartOfList){ // dans ce cas, le carré qu'il y a a droite ne fait pas partie de la liste .
				isRightable=false;
			}
		}
	}
	if(isRightable){ //si on a pas trouvé de contre indication, on bouge a droite tous les squares de la liste.
		newShape=false;
		var color = board[this.list[0].x][this.list[0].y];
		for(var i=0; i<this.list.length ; i++){ 
			var x = this.list[i].x;
			var y = this.list[i].y;   	//tout d abord on efface la forme
			board[x][y]=0;
		}
		for(var j=0; j<this.list.length ; j++){ 
			this.list[j].x += 1;				//puis on la bouge à droite
		}
		for(var k=0; k<this.list.length ; k++){ 
			var x = this.list[k].x;
			var y = this.list[k].y;   	//puis on la re dessine
			board[x][y]=color;
		}
	}
}
	

