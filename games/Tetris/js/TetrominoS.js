function TetrominoS(){  
	this.shape = new ListOfSquares();
	this.state = 1;
	var sq = new Square((arrayWidth/2)-1,1);	
	this.add(sq);				          
	board[(arrayWidth/2)-1][1]=4;			//          -------
	sq = new Square(arrayWidth/2,1);    		//         | 2 | 3 |
	this.add(sq);					//      -----------
	board[arrayWidth/2][1]=4;			//     | 0 | 1 |  
	sq = new Square(arrayWidth/2,0);		//      -------
	this.add(sq);					
	board[arrayWidth/2][0]=4;			
	sq = new Square((arrayWidth/2)+1,0);		
	this.add(sq);					
	board[(arrayWidth/2)+1][0]=4;
}

TetrominoS.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoS.prototype.rotate = function(){
	if(this.state==1){
		var x = this.shape.list[0].x;
		var y = this.shape.list[0].y;
		if((y==1) || (board[x][y-1]!=0) || (board[x][y-2]!=0)) return 0;
		board[x][y]=0;
		board[x+2][y-1]=0;
		board[x][y-1]=4;
		board[x][y-2]=4;
		this.shape.list[3].x=x;
		this.shape.list[3].y=y-2;
		this.shape.list[0].x=this.shape.list[1].x;
		this.shape.list[0].y=this.shape.list[1].y;
		this.shape.list[1].x=this.shape.list[2].x;
		this.shape.list[1].y=this.shape.list[2].y;
		this.shape.list[2].x=x;
		this.shape.list[2].y=y-1;
		this.state=2;
	}
	else if(this.state==2){
		var x = this.shape.list[1].x;
		var y = this.shape.list[1].y;
		if((x==arrayWidth-1) || (board[x-1][y+1]!=0) || (board[x+1][y]!=0)) return 0;
		board[x-1][y-1]=0;
		board[x-1][y]=0;
		board[x-1][y+1]=4;
		board[x+1][y]=4;
		this.shape.list[3].x=x+1;
		this.shape.list[3].y=y;
		this.shape.list[0].x=x-1;
		this.shape.list[0].y=y+1;
		this.shape.list[1].x=x;
		this.shape.list[1].y=y+1;
		this.shape.list[2].x=x;
		this.shape.list[2].y=y;		
		this.state=1;
	}
}
