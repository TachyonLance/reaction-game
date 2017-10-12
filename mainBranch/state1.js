<<<<<<< Updated upstream
// Game State
var cursors, words; 

demo.state1 = function(){};
demo.state1.prototype = {
    
    preload: function(){
        
        game.load.image('ocean', '../assets/ocean.png');

    },
    
    create: function(){
        
        //Read in the file
        //readTextFile('../assets/testFile.txt');
        
        // Initialize Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Adjust camera settings
        game.world.setBounds(0, 0, 2400, 2400);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        game.add.sprite(0, 0, 'ocean');
        
        // Controls
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        
        
        
    }
};


<<<<<<< HEAD
// Reference text file for reading
//$.ajax({
//    url:'assets/testFile.txt',
//    type:'HEAD',
//    error: readTextFile("assets/testFile.txt"), success: readTextFile("assets/testFile.txt")
//});


// Read in the file and convert the strings into arrays
//function readTextFile(file) {
//    var rawFile = new XMLHttpRequest();
//    rawFile.open("GET", file, false);
//    rawFile.onreadystatechange = function ()
//    {
//        if(rawFile.readyState === 4)
//        {
//            if(rawFile.status === 200 || rawFile.status == 0)
//            {
//                var allText = rawFile.responseText;
//                words = allText.split("\n");
//            }
//        }
//    }
//    rawFile.send(null);
//}


words = ['TACO', 'BURRITO', 'CHURRO', 'PASTA', 'ANTIPASTA'];
console.log(words);


// Convert the words to lowercase
words = words.map(v => v.toLowerCase());
console.log(words);
console.log(words[0], words[3]);
=======
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
=======
// c is the identifier of the canvas in .html
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#DDD"; //Color of text #0F0 for green
	//ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);


>>>>>>> Stashed changes
>>>>>>> 1a9c69618fef46954e3835999e47ba1bd6d2cc5c
