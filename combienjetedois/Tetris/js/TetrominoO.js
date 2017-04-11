function TetrominoO(){      //contient une liste de carrés, mais de forme particulière. ici, en forme de O
	this.shape = new ListOfSquares();
	var sq = new Square((arrayWidth/2)-1,0);		//  ---------
	this.add(sq);						//  | 0 | 1 |
	board[(arrayWidth/2)-1][0]=2;				//  ---------
	sq = new Square(arrayWidth/2,0);			//  | 2 | 3 |
	this.add(sq);						//  ---------
	board[arrayWidth/2][0]=2;			 
	sq = new Square((arrayWidth/2)-1,1);		
	this.add(sq);
	board[(arrayWidth/2)-1][1]=2;
	sq = new Square(arrayWidth/2,1);
	this.add(sq);
	board[arrayWidth/2][1]=2;					

}

TetrominoO.prototype.add = function(k){
	this.shape.list.push(k);
}

TetrominoO.prototype.rotate = function(){
	
}
