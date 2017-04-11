function TetrominoT(){      //contient une liste de carrés, mais de forme particulière. ici, en forme de T
	this.shape = new ListOfSquares();
	this.state = 1;
	var sq = new Square((arrayWidth/2)-2,0);	
	this.add(sq);				        //     -----------
	board[(arrayWidth/2)-2][0]=1;			//    | 0 | 1 | 2 |
	sq = new Square((arrayWidth/2)-1,0);    	//     ¯¯¯|¯¯¯|¯¯¯
	this.add(sq);					//        | 3 |
	board[(arrayWidth/2)-1][0]=1;			//         ¯¯¯   
	sq = new Square(arrayWidth/2,0);		
	this.add(sq);					
	board[arrayWidth/2][0]=1;			
	sq = new Square((arrayWidth/2)-1,1);		
	this.add(sq);					
	board[(arrayWidth/2)-1][1]=1;
	
}

TetrominoT.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoT.prototype.rotate = function(){ //cette fonction permet de faire tourner la pièce d'un quart de tour dans le sens horaire.		
	if(this.state==1){
		if((this.shape.list[0].y==0) || (board[this.shape.list[1].x][this.shape.list[1].y-1]!=0)) return 0;
		board[this.shape.list[2].x][this.shape.list[2].y]=0;
		board[this.shape.list[1].x][this.shape.list[1].y-1]=1;
		this.shape.list[2].x = this.shape.list[3].x;
		this.shape.list[2].y = this.shape.list[3].y;
		this.shape.list[3].x = this.shape.list[0].x;
		this.shape.list[3].y = this.shape.list[0].y;
		this.shape.list[0].x = this.shape.list[1].x;
		this.shape.list[0].y = this.shape.list[1].y-1;
		this.state=2;
	}
	else if(this.state==2){
		if((this.shape.list[0].x==arrayWidth-1) || (board[this.shape.list[1].x+1][this.shape.list[1].y]!=0)) return 0;
		board[this.shape.list[2].x][this.shape.list[2].y]=0;
		board[this.shape.list[1].x+1][this.shape.list[1].y]=1;
		this.shape.list[2].x = this.shape.list[3].x;
		this.shape.list[2].y = this.shape.list[3].y;
		this.shape.list[3].x = this.shape.list[0].x;
		this.shape.list[3].y = this.shape.list[0].y;
		this.shape.list[0].x = this.shape.list[1].x+1;
		this.shape.list[0].y = this.shape.list[1].y;			
		this.state=3;
	}
	else if(this.state==3){
		if((this.shape.list[1].y==arrayHeight-1) || (board[this.shape.list[1].x][this.shape.list[1].y+1]!=0)) return 0;
		board[this.shape.list[2].x][this.shape.list[2].y]=0;
		board[this.shape.list[1].x][this.shape.list[1].y+1]=1;
		this.shape.list[2].x = this.shape.list[3].x;
		this.shape.list[2].y = this.shape.list[3].y;
		this.shape.list[3].x = this.shape.list[0].x;
		this.shape.list[3].y = this.shape.list[0].y;
		this.shape.list[0].x = this.shape.list[1].x;
		this.shape.list[0].y = this.shape.list[1].y+1;					
		this.state=4;
	}
	else if(this.state==4){
		if((this.shape.list[1].x==0) || (board[this.shape.list[1].x-1][this.shape.list[1].y]!=0)) return 0;
		board[this.shape.list[2].x][this.shape.list[2].y]=0;
		board[this.shape.list[1].x-1][this.shape.list[1].y]=1;
		this.shape.list[2].x = this.shape.list[3].x;
		this.shape.list[2].y = this.shape.list[3].y;
		this.shape.list[3].x = this.shape.list[0].x;
		this.shape.list[3].y = this.shape.list[0].y;
		this.shape.list[0].x = this.shape.list[1].x-1;
		this.shape.list[0].y = this.shape.list[1].y;		
		this.state=1;
	}

}
