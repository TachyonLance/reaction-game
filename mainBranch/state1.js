// Game State
var cursors; 

demo.state1 = function(){};
demo.state1.prototype = {
    
    preload: function(){
        
        game.load.image('ocean', '../assets/ocean.png');

    },
    
    create: function(){
        
        //Read in the file
        readTextFile('../assets/testFile.txt');
        
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