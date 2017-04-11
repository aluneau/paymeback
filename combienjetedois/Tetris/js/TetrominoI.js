function TetrominoI(){ 
	this.shape = new ListOfSquares();
	this.state = 1; 	
	var sq = new Square((arrayWidth/2)-2,0);		//    ---------------
	this.add(sq);						//   | 0 | 1 | 2 | 3 |
	board[(arrayWidth/2)-2][0]=3;				//    ---------------
	sq = new Square((arrayWidth/2)-1,0);			
	this.add(sq);
	board[(arrayWidth/2)-1][0]=3;
	sq = new Square(arrayWidth/2,0);
	this.add(sq);
	board[arrayWidth/2][0]=3;
	sq = new Square((arrayWidth/2)+1,0);
	this.add(sq);
	board[(arrayWidth/2)+1][0]=3;
}

TetrominoI.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoI.prototype.rotate = function(){
	if(this.state==1){
		var x = this.shape.list[2].x;
		var y = this.shape.list[2].y;
		if((y==0) || (y>=arrayHeight-2) || (board[x][y-1]!=0) || (board[x][y+1]!=0) || (board[x][y+2]!=0)) return 0;
		board[x-2][y]=0;
		board[x-1][y]=0;
		board[x+1][y]=0;
		board[x][y-1]=3;
		board[x][y+1]=3;
		board[x][y+2]=3;
		this.shape.list[0].x = x;
		this.shape.list[0].y = y-1;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y+1;
		this.shape.list[3].x = x;
		this.shape.list[3].y = y+2;
		this.state=2;
	}
	else if(this.state==2){
		var x = this.shape.list[2].x;
		var y = this.shape.list[2].y;
		if((x==arrayWidth-1) || (x<=1) || (board[x-2][y]!=0) || (board[x-1][y]!=0) || (board[x+1][y]!=0)) return 0;
		board[x][y-2]=0;
		board[x][y-1]=0;
		board[x][y+1]=0;
		board[x-2][y]=3;
		board[x-1][y]=3;
		board[x+1][y]=3;
		this.shape.list[0].x = x+1;
		this.shape.list[0].y = y;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x-1;
		this.shape.list[2].y = y;
		this.shape.list[3].x = x-2;
		this.shape.list[3].y = y;
		this.state=3;
	}
	else if(this.state==3){
		var x = this.shape.list[2].x;
		var y = this.shape.list[2].y;
		if ((y==arrayHeight-1) || (y<=1) || (board[x][y+1]!=0) || (board[x][y-1]!=0) || (board[x][y-2]!=0)) return 0;
		board[x-1][y]=0;
		board[x+1][y]=0;
		board[x+2][y]=0;
		board[x][y+1]=3;
		board[x][y-1]=3;
		board[x][y-2]=3;
		this.shape.list[0].x = x;
		this.shape.list[0].y = y+1;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y-1;
		this.shape.list[3].x = x;
		this.shape.list[3].y = y-2;		
		this.state=4;
	}
	else if(this.state==4){
		var x = this.shape.list[2].x;
		var y = this.shape.list[2].y;
		if ((x==0) || (x>=arrayWidth-2) || (board[x-1][y]!=0) || (board[x+1][y]!=0) || (board[x+2][y]!=0)) return 0;
		board[x][y-1]=0;
		board[x][y+1]=0;
		board[x][y+2]=0;
		board[x-1][y]=3;
		board[x+1][y]=3;
		board[x+2][y]=3;
		this.shape.list[0].x = x-1;
		this.shape.list[0].y = y;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x+1;
		this.shape.list[2].y = y;
		this.shape.list[3].x = x+2;
		this.shape.list[3].y = y;		
		this.state=1;
	}
}
