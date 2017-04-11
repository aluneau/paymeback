function TetrominoL(){  
	this.shape = new ListOfSquares();
	this.state = 1;
	var sq = new Square((arrayWidth/2)-2,1);	
	this.add(sq);				           
	board[(arrayWidth/2)-2][1]=7;			//          -----------
	sq = new Square((arrayWidth/2)-2,0);    	//         | 1 | 2 | 3 |
	this.add(sq);					//          -----------
	board[(arrayWidth/2)-2][0]=7;			//         | 0 |
	sq = new Square((arrayWidth/2)-1,0);		//          ---
	this.add(sq);					
	board[(arrayWidth/2)-1][0]=7;			
	sq = new Square(arrayWidth/2,0);		
	this.add(sq);					
	board[arrayWidth/2][0]=7;
}

TetrominoL.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoL.prototype.rotate = function(){
	var x = this.shape.list[2].x;
	var y = this.shape.list[2].y;
	if(this.state==1){
		if((y==0) || (board[x-1][y-1]!=0) || (board[x][y-1]!=0) || (board[x][y+1]!=0)) return 0;
		board[x-1][y+1]=0;
		board[x-1][y]=0;
		board[x+1][y]=0;
		board[x-1][y-1]=7;
		board[x][y-1]=7;
		board[x][y+1]=7;
		this.shape.list[0].x = x-1;
		this.shape.list[0].y = y-1;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y-1;
		this.shape.list[3].x = x;
		this.shape.list[3].y = y+1;
		this.state=2;
	}
	else if(this.state==2){
		if((x==arrayWidth-1) || (board[x-1][y+1]!=0) || (board[x+1][y]!=0) || (board[x+1][y+1]!=0)) return 0;
		board[x][y]=0;
		board[x][y-1]=0;
		board[x-1][y-1]=0;
		board[x-1][y+1]=7;
		board[x+1][y+1]=7;
		board[x+1][y]=7;
		this.shape.list[0].x = x+1;
		this.shape.list[0].y = y;
		this.shape.list[1].x = x+1;
		this.shape.list[1].y = y+1;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y+1;
		this.shape.list[3].x = x-1;
		this.shape.list[3].y = y+1;
		this.state=3;
	}
	else if(this.state==3){
		if((y==1) || (board[x][y-1]!=0) || (board[x][y-2]!=0)) return 0;
		board[x+1][y-1]=0;
		board[x-1][y]=0;
		board[x][y-1]=7;
		board[x][y-2]=7;
		this.shape.list[0].x = x+1;
		this.shape.list[0].y = y;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y-1;
		this.shape.list[3].x = x;
		this.shape.list[3].y = y-2;
		this.state=4;
	}
	else if(this.state==4){
		if((x==0) || (board[x+1][y]!=0) || (board[x-1][y]!=0) || (board[x-1][y+1]!=0)) return 0;
		board[x][y+1]=0;
		board[x+1][y+1]=0;
		board[x][y-1]=0;
		board[x-1][y+1]=7;
		board[x-1][y]=7;
		board[x+1][y]=7;
		this.shape.list[0].x = x-1;
		this.shape.list[0].y = y+1;
		this.shape.list[1].x = x-1;
		this.shape.list[1].y = y;
		this.shape.list[3].x = x+1;
		this.shape.list[3].y = y;
		this.state=1;
	}
}
