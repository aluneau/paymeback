var lightSpeed = 10;

var widthPlayer = 1;
var heightPlayer = 15;

var sizeBall = 1.5;

var UP = 38;
var DOWN = 40;
var SPACE = 32;
var RETURN = 13;

var FPS = 60;


// By default every set/get function uses percentages :
// setX(50) means setX at 50 % of the total width.
// If you want to use pixels just set the second argument to true :
// The above example becomes setX(window.innerWidth / 2).
// It's useful when you want to set the x coordinate to something which does not
// depend on the window's width (the same goes for y and the window's height).
// R35P0N51V3 !!!1!@!!


// Do not write something.x = number :
// The object is only moved if it's style.top/left is modified.
// setX() and setY() do that so you don't have to.
// (Call to updatePosition())
// The same goes with setWidth() and setHeight().


// Check if the speed of the given speed is too hight.
// (A speed too hight might cause problems with collisions)
function isFasterThanLight(xSpeed, ySpeed){
    return ((xSpeed * xSpeed + ySpeed * ySpeed) >= lightSpeed);
}


/*******/
/* Key */
/*******/
/******************************************************************************/
var Key = function(code){
    if (typeof(code) === 'undefined') return;

    this.code = code; // KeyCode, see above.
    this.pressed = false; // Key currently pressed or not.
    this.down = false; // Event Key down (just 1 frame).
    this.up = false; // Event Key up (jsut 1 frame).
};


Key.prototype.setPressed = function(pressed){
    if (typeof(pressed) === 'undefined') pressed = true;

    if (pressed){
        if (this.pressed) return;

        this.pressed = true;
        this.down = true;

        this.up = false;
    }
    else{
        if (!this.pressed) return;

        this.pressed = false;
        this.up = true;

        this.down = false;
    }
};
/******************************************************************************/


/*********/
/* Block */
/******************************************************************************/
var Block = function(id, xSpeed, ySpeed){
    this.id = id;
    this.div = document.getElementById(id);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    this.x = this.div.offsetLeft;
    this.y = this.div.offsetTop;
};

Block.prototype.setY = function(y, inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        this.y = 100.0 * y / window.innerHeight;
    }
    else{
        this.y = y;
    }

    this.updatePosition();
};

Block.prototype.setX = function(x, inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        this.x = 100.0 * x / window.innerWidth;
    }
    else{
        this.x = x;
    }

    this.updatePosition();
};

Block.prototype.setHeight = function(height, inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        this.height = 100.0 * height / window.innerHeight;
    }
    else{
        this.height = height;
    }

    this.updateDimensions();
};

Block.prototype.setWidth = function(width, inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        this.width = 100.0 * width / window.innerWidth;
    }
    else{
        this.width = width;
    }

    this.updateDimensions();
};

Block.prototype.getY = function(inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        return 100 * this.y / window.innerHeight;
    }

    return this.y;
};

Block.prototype.getX = function(inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        return this.x * window.innerWidth / 100;
    }

    return this.x;
};

Block.prototype.getHeight = function(inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        return this.height * window.innerHeight / 100;
    }

    return this.height;
};

Block.prototype.getWidth = function(inPixel){
    if (typeof(inPixel) === 'undefined') inPixel = false;

    if (inPixel){
        return this.width * window.innerWidth / 100;
    }

    return this.width;
};

Block.prototype.move = function(factor){
    if (typeof(factor) === 'undefined') factor = 1;

    factor *= (60.0 / FPS);

    this.x += factor * this.xSpeed;
    this.y += factor * this.ySpeed;

    this.updatePosition();
};

Block.prototype.moveVertical = function(type, factor){
    if (typeof(type) === 'undefined') type = 1;
    if (typeof(factor) === 'undefined') factor = 1;

    factor *= (60.0 / FPS);

    this.y += type * factor * this.ySpeed;

    this.updatePosition();
};

Block.prototype.moveHorizontal = function(type, factor){
    if (typeof(type) === 'undefined') type = 1;
    if (typeof(factor) === 'undefined') factor = 1;

    factor *= (60.0 / FPS);

    this.x += type * factor * this.xSpeed;

    this.updatePosition();
};

Block.prototype.updatePosition = function(){
    this.div.style.left = this.x + "%";
    this.div.style.top = this.y + "%";
};

Block.prototype.updateDimensions = function(){
    this.div.style.width = this.width + "%";
    this.div.style.height = this.height + "%";
};

Block.prototype.increaseYSpeed = function(){
    if (this.ySpeed < 0){
        this.ySpeed -= (0.1 * !isFasterThanLight(this.xSpeed,
												 this.ySpeed - 0.1));
    }
    else{
        this.ySpeed += (0.1 * !isFasterThanLight(this.xSpeed,
												 this.ySpeed + 0.1));
    }
};

Block.prototype.increaseXSpeed = function(){
    if (this.xSpeed < 0){
        this.xSpeed -= (0.1 * !isFasterThanLight(this.xSpeed - 0.1,
												 this.ySpeed));
    }
    else{
        this.xSpeed += (0.1 * !isFasterThanLight(this.xSpeed + 0.1,
												 this.ySpeed));
    }
};

Block.prototype.rotateSpeed = function(type){
    if (typeof(type) === 'undefined') type = 0;

    if (!type){
        this.ySpeed *= -1;
    }
    else{
        this.xSpeed *= -1;
    }
};

Block.prototype.collision = function(block2){
    if((block2.x >= this.x + this.width)
       || (block2.x + block2.width <= this.x)
       || (block2.y >= this.y + this.height)
       || (block2.y + block2.height <= this.y))
        return false;
    else
        return true;
};

Block.prototype.updateCoordinates = function(increaseSpeed){
    if (typeof(increaseSpeed) === 'undefined') increaseSpeed = 0;

    if (this.getY() <= 1){
        this.setY(1);

        if (this.id != "player"){
            this.rotateSpeed();
        }

        if (increaseSpeed){
            this.increaseYSpeed();
        }
    }
    else if (this.getY() + this.getHeight() >= 99){
        this.setY(99 - this.getHeight());

        if (this.id != "player"){
            this.rotateSpeed();
        }

        if (increaseSpeed){
            this.increaseYSpeed();
        }
    }
};
/******************************************************************************/


/**********/
/* Player */
/**********/
/******************************************************************************/
var Player = function(id, xSpeed, ySpeed){
    Block.apply(this, [id, xSpeed, ySpeed]);
    this.score = 0;
    this.divScore = document.getElementById(id.concat("Score"));
}

Player.prototype = Object.create(Block.prototype);
Player.prototype.constructor = Player;

Player.prototype.increaseScore = function(){
    this.score++;

    var child = this.divScore.firstChild;
    child.innerHTML = this.score.toString();
};
/******************************************************************************/


var allKeys = [new Key(UP), new Key(DOWN), new Key(SPACE), new Key(RETURN)];

/********/
/* Game */
/********/
/******************************************************************************/
var Game = function(isReal, numberOfRounds){
    if (typeof(numberOfRounds) === "undefined") numberOfRounds = 3;

    this.isReal = isReal;
    this.numberOfRounds = numberOfRounds;

    this.endGameDiv = document.getElementById("endGame");
	
	function reset(){
		game.isRunning = true;
		game.reset();
	}

    this.endGameDiv.lastChild.addEventListener("click", reset);

	this.isRunning = true;

    this.player = new Player("player", 0, 1);
    this.iaPlayer = new Player("ia", 0, 1);

    this.ball = new Block("ball", 0, 0);

    window.onresize = function(){
        var ball = document.getElementById("ball");
        this.ball.style.height = this.ball.offsetWidth + "px";
    };

    // Key Event Handler
    document.addEventListener('keydown', function(event) {
        for(var i = 0; i < allKeys.length; i++) {
            if (allKeys[i].code == event.keyCode){
                allKeys[i].setPressed();
            }
        }
    });

    document.addEventListener('keyup', function(event){
        for(var i = 0; i < allKeys.length; i++) {
            if (allKeys[i].code == event.keyCode){
                allKeys[i].setPressed(0);
            }
        }
    });

    this.init();

    // Run Game
    this.loop = setInterval(
        (function(self) {
            return function() {
                if ((self.numberOfRounds != -1) &&
                    (self.player.score + self.iaPlayer.score >=
					 numberOfRounds)){
                    self.end();
                }
                else{
                    self.run();
                }
            }
        })(this), 1000.0 / FPS);
};

// Init Game
Game.prototype.init = function(){
    this.endGameDiv.style.display = "none";

    this.enableMovement = false;

    // Init Player
    this.player.setWidth(widthPlayer);
    this.player.setHeight(heightPlayer);

    this.player.setX(widthPlayer);
    this.player.setY(50 - heightPlayer / 2);

    // Init IA Player
    this.iaPlayer.setWidth(widthPlayer);
    this.iaPlayer.setHeight(heightPlayer);

    this.iaPlayer.setX(100 - widthPlayer * 2);
    this.iaPlayer.setY(this.player.getY());

    // Init Ball
    this.ball.setWidth(sizeBall);
    this.ball.setHeight(this.ball.getWidth(1), 1);

    this.ball.setX(Math.floor(50 - sizeBall / 2));
    this.ball.setY(Math.floor(50 - sizeBall / 2));

    this.ball.xSpeed = 0.5;
    this.ball.ySpeed = 0.8;

    if (Math.floor(Math.random() * 2) - 1){
        this.ball.xSpeed *= -1;
    }

    if (Math.floor(Math.random() * 2) - 1){
        this.ball.ySpeed *= -1;
    }
};

Game.prototype.run = function(){
    if (this.enableMovement){
        this.ball.move();

        this.ball.updateCoordinates(1);

        // If the ball hits the player.
        if ((this.ball.getX() > this.player.getX() / 2) &&
            this.ball.collision(this.player)){
            this.ball.setX(this.player.getX() + this.player.getWidth());
            this.ball.increaseXSpeed();
            this.ball.rotateSpeed(1);
        }

        // If the ball hits the IA Player.
        else if ((this.ball.getX() <
                  (this.iaPlayer.getX() + this.iaPlayer.getWidth() / 2)) &&
                 this.ball.collision(this.iaPlayer)){
            this.ball.setX(this.iaPlayer.getX() - this.ball.getWidth());
            this.ball.increaseXSpeed();
            this.ball.rotateSpeed(1);
        }

        // If the ball hits the left wall.
        if (this.ball.getX() <= -this.ball.getWidth()){
            this.iaPlayer.increaseScore();

            this.init();

        }

        // If the ball hits the right wall.
        else if (this.ball.getX() >= 100 - this.ball.getWidth()){
            this.ball.setX(100 - this.ball.getWidth());
            this.player.increaseScore();

            this.init();
        }

        // Player Movement
        if (allKeys[0].pressed){
            // Move Up
            this.player.moveVertical(-1);
            this.player.updateCoordinates();
        }

        if (allKeys[1].pressed){
            //Move Down
            this.player.moveVertical();
            this.player.updateCoordinates();
        }

        // IA Movement
        if (this.ball.xSpeed < 0){
			if (this.iaPlayer.getY() > 50){
				if (this.iaPlayer.ySpeed < 0){
					this.iaPlayer.moveVertical();
				}
				else{
					this.iaPlayer.moveVertical(-1);
				}
			}
			else if (this.iaPlayer.getY() < 50){
				if (this.iaPlayer.ySpeed < 0){
					this.iaPlayer.moveVertical(-1);
				}
				else{
					this.iaPlayer.moveVertical();
				}
			}
            //this.iaPlayer.moveVertical();
            this.iaPlayer.updateCoordinates();
        }
        else{
            if (this.ball.getY() + this.ball.getHeight() / 2 + this.ball.ySpeed - this.iaPlayer.getY() >
                this.iaPlayer.getHeight() - this.iaPlayer.getHeight() / 2){
                if (this.iaPlayer.ySpeed < 0){
                    this.iaPlayer.moveVertical(-1);
                }
                else{
                    this.iaPlayer.moveVertical();
                }
            }
            else if (this.ball.getY() + this.ball.getHeight() / 2 + this.ball.ySpeed - this.iaPlayer.getY() <
                     this.iaPlayer.getHeight() - this.iaPlayer.getHeight() / 2){
                if (this.iaPlayer.ySpeed < 0){
                    this.iaPlayer.moveVertical();
                }
                else{
                    this.iaPlayer.moveVertical(-1);
                }
            }
            this.iaPlayer.updateCoordinates();
        }
    }

    // If the user presses Space or Return.
    if (allKeys[2].down ||
        allKeys[3].down){
        // Pause / Unpause
        this.enableMovement = !this.enableMovement;
    }

    for(var i = 0; i < allKeys.length; i++) {
        if (allKeys[i].pressed){
            allKeys[i].down = false;
        }
        else{
            allKeys[i].up = false;
        }
    }
}

Game.prototype.end = function(){
    if (this.endGameDiv.style.display === "none"){
		this.isRunning = false;
        if (this.player.score > this.iaPlayer.score){
            this.endGameDiv.firstChild.innerHTML = "Victory !";
            this.endGameDiv.firstChild.style.color = "green";
        }
        else if(this.player.score < this.iaPlayer.score){
            this.endGameDiv.firstChild.innerHTML = "Defeat !";
            this.endGameDiv.firstChild.style.color = "red";
        }
        else{
            this.endGameDiv.firstChild.innerHTML = "Draw !";
            this.endGameDiv.firstChild.style.color = "grey";
        }


		this.endGameDiv.style.display = "block";
		this.endGameDiv.style.zIndex = "2";

		if (this.isReal){
			this.endGameDiv.lastChild.style.display = "none";
			this.isReal = false;
		}
    }
}

Game.prototype.reset = function(){
    this.endGameDiv.style.display = "none";
	this.endGameDiv.style.zIndex = "0";

    this.player.score = -1;
    this.iaPlayer.score = -1;

    this.player.increaseScore();
    this.iaPlayer.increaseScore();

    this.init();
}

function checkFirstVisit() {
	if(document.cookie.indexOf('cheatCheck') == -1) {
		document.cookie = 'cheatCheck=1';
		
		return true;
	}
	else {
		alert('The page has been reloaded.\nYou therefore loose by default.');
		
		return false;
	}
}

function load(isReal, numberOfRounds){
	if (!isReal || checkFirstVisit()){
		if (isReal){
			window.onbeforeunload = function(){
				if (game.isReal && game.isRunning){
					return "If you do that, you'll loose by default !";
				}
			}
		}
		game = new Game(isReal, numberOfRounds);
	}	
}
/******************************************************************************/
