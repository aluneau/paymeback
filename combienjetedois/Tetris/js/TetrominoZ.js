function TetrominoZ(){  
	this.shape = new ListOfSquares();
	this.state = 1;
	var sq = new Square((arrayWidth/2)-1,0);	
	this.add(sq);				           
	board[(arrayWidth/2)-1][0]=5;			//          -------
	sq = new Square(arrayWidth/2,0);    		//         | 0 | 1 |
	this.add(sq);					//          -----------
	board[arrayWidth/2][0]=5;			//             | 2 | 3 |  
	sq = new Square(arrayWidth/2,1);		//              -------
	this.add(sq);					
	board[arrayWidth/2][1]=5;			
	sq = new Square((arrayWidth/2)+1,1);		
	this.add(sq);					
	board[(arrayWidth/2)+1][1]=5;
}

TetrominoZ.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoZ.prototype.rotate = function(){
	if(this.state==1){
		var x = this.shape.list[1].x;
		var y = this.shape.list[1].y;
		if((y==0) || (board[x][y-1]!=0) || (board[x-1][y+1]!=0)) return 0;
		board[x][y+1]=0;
		board[x+1][y+1]=0;
		board[x][y-1]=5;
		board[x-1][y+1]=5;
		this.shape.list[0].x = x-1;
		this.shape.list[0].y = y+1;
		this.shape.list[1].x = x-1;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y;
		this.shape.list[3].x = x;
		this.shape.list[3].y = y-1;
		this.state=2;
	}
	else if(this.state==2){
		var x = this.shape.list[2].x;
		var y = this.shape.list[2].y;
		if((x==arrayWidth-1) || (board[x][y+1]!=0) || (board[x+1][y+1]!=0)) return 0;
		board[x][y-1]=0;
		board[x-1][y+1]=0;
		board[x][y+1]=5;
		board[x+1][y+1]=5;	
		this.shape.list[0].x = x-1;
		this.shape.list[0].y = y;
		this.shape.list[1].x = x;
		this.shape.list[1].y = y;
		this.shape.list[2].x = x;
		this.shape.list[2].y = y+1;
		this.shape.list[3].x = x+1;
		this.shape.list[3].y = y+1;	
		this.state=1;
	}
}
