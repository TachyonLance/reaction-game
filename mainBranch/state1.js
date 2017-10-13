// Game State
var cursors, sentence; 

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
        
        sentence = "taco burrito churro pasta antipasta";

        // Iterate through the word list
        var currentArray = [];
        console.log(sentence);

        for (i = 0; i < sentence.length; i++){

            currentArray.push(sentence[i]);

        }

        console.log(currentArray);
        
        // Controls
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        
        
        
    }
};


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



































