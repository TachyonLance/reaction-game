// Game State
var cursors, sentence; 

demo.state1 = function(){};
demo.state1.prototype = {
    
    preload: function(){
        
        game.load.image('ocean', '../assets/ocean.png');
        game.load.image('a', '../assets/letter/a.png');
        game.load.image('b', '../assets/letter/b.png');
        game.load.image('c', '../assets/letter/c.png');
        game.load.image('d', '../assets/letter/d.png');
        game.load.image('e', '../assets/letter/e.png');
        game.load.image('f', '../assets/letter/f.png');
        game.load.image('g', '../assets/letter/g.png');
        game.load.image('h', '../assets/letter/h.png');
        game.load.image('i', '../assets/letter/i.png');
        game.load.image('j', '../assets/letter/j.png');
        game.load.image('k', '../assets/letter/k.png');
        game.load.image('l', '../assets/letter/l.png');
        game.load.image('m', '../assets/letter/m.png');
        game.load.image('n', '../assets/letter/n.png');
        game.load.image('o', '../assets/letter/o.png');
        game.load.image('p', '../assets/letter/p.png');
        game.load.image('q', '../assets/letter/q.png');
        game.load.image('r', '../assets/letter/r.png');
        game.load.image('s', '../assets/letter/s.png');
        game.load.image('t', '../assets/letter/t.png');
        game.load.image('u', '../assets/letter/u.png');
        game.load.image('v', '../assets/letter/v.png');
        game.load.image('w', '../assets/letter/w.png');
        game.load.image('x', '../assets/letter/x.png');
        game.load.image('y', '../assets/letter/y.png');
        game.load.image('z', '../assets/letter/z.png');

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
        
        // Create the letters group to control physics
        letters = game.add.group();
        letters.enableBody = true;
        letters.physicsBodyType = Phaser.Physics.ARCADE;
        
        // Destroy the sprite when it reaches the ground
        letters.setAll('checkWorldBounds', true);
        letters.setAll('outOfBoundsKill', true);
                
        // Input the sentence
        sentence = "what color is pineapple?";
        
        var currentWordArray = sentence.split(" ");
        var currentSpriteArray = [];
        var sentenceWidth = 0
        
        // Determine the length of the sentence with sprites and spaces
//        for (k = 0; k < sentence.length; k++){
//            
//            
//            sentenceWidth += letterSprite.width;
//            
//        }
        
        spacingIndex = 0;
        for (i = 0; i < currentWordArray.length; i++){
            currentWord = currentWordArray[i];
            spacingIndex += 75;
            
            for (j = 0; j < currentWordArray[i].length; j++){
                
                if (currentWord[j] == "?"){}
            
                else if(currentWord[j] == " "){}

                else{
                    var letterSprite = game.add.sprite(spacingIndex, 10, currentWord[j]);
                    letterSprite.scale.set(0.25);
                    letters.add(letterSprite);
                    currentSpriteArray.push(letterSprite);
                    sentenceWidth += letterSprite.width;
                    
                spacingIndex += letterSprite.width + 5;
                }                
            }    
        }
        
        
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



































