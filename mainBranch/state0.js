
// Main Menu
var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        // The Matrix Raining
        // The button images

    },
    create:function(){
<<<<<<< Updated upstream
//        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
//        
//        // Load the background
//        // var matrixRain = game.add.sprite(0,-100,'matrixRain');
//        // matrixRain.scale.set(0.45);
//        
//        var title = game.add.text(600, 200, "Word Cloud");
//        title.anchor.set(0.5,0.5);
//        title.align = 'center';
//        title.font = 'Book Antiqua';
//        title.fontSize = 100;
//        title.fontWeight = 'bold';
//        title.fontVariant = 'small-caps';
//        title.fontStyle = 'italic';
//        title.fill = '#fff';
//        title.setShadow(5, 0, 'rgba(0,0,0,0.5)', 0);
//        title.shadowBlur = 5;
//        
//        this.createButton(45, "Start Game", 600, 375, 400, 200, function(){
//            this.state.start("state1");
//        });
//        
//        this.createButton(25, "Instructions", 600, 500, 300, 100, function(){
//            this.state.start("state2");
//        });
//        
//        this.createButton(25, "Settings", 600, 600, 300, 100, function(){
//            this.state.start("state3");
//        });
//        
//        // 
//        this.createButton(25, "Leaderboards", 200, 375, 400, 200, function(){
//            this.state.start("state4", true, false, "../assets/BattleAssets.JSON", "BattleState");
//        });
=======
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        // Load the background
        // var matrixRain = game.add.sprite(0,-100,'matrixRain');
        // matrixRain.scale.set(0.45);
        
        var title = game.add.text(600, 200, "Word Cloud");
        title.anchor.set(0.5,0.5);
        title.align = 'center';
        title.font = 'Book Antiqua';
        title.fontSize = 100;
        title.fontWeight = 'bold';
        title.fontVariant = 'small-caps';
        title.fontStyle = 'italic';
        title.fill = '#fff';
        title.setShadow(5, 0, 'rgba(0,0,0,0.5)', 0);
        title.shadowBlur = 5;
        
        this.createButton(45, "Start Game", 600, 375, 400, 200, function(){
            this.state.start("state1");
        });
        
        this.createButton(25, "Instructions", 600, 500, 300, 100, function(){
            this.state.start("state2");
        });
        
        this.createButton(25, "Settings", 600, 600, 300, 100, function(){
            this.state.start("state3");
        });
        
        // 
        this.createButton(25, "Leaderboards", 200, 375, 400, 200, function(){
            this.state.start("state4", true, false, "../assets/BattleAssets.JSON", "BattleState");
        });
>>>>>>> Stashed changes
    },
    
    update: function(){

    },
    
    createButton:function(s, string, x, y, w, h, callback){
//        var btn = game.add.button(x,y,'button',callback,this,2,1,0);
//        
//        btn.anchor.setTo(0.5,0.5);
//        btn.width = w;
//        btn.height = h;
//        
//        var txt = game.add.text(btn.x, btn.y, string, {
//            font: "Book Antiqua",
//            fontStyle: "italic",
//            fontSize: s,
//            fontVariant: 'small-caps',
//            fontWeight:"bold",
//            fill:'#4d2800', 
//            align:'center'
//        });
//        
//        txt.setShadow(2.5, 0, 'rgba(0,0,0,0.5)', 0);
//        txt.shadowBlur = 5;
//        txt.anchor.setTo(0.5,0.5);
//        
//        btn.alpha = 0.9;
//        txt.alpha = 0.9;
    }
}