// Main Menu
var demo = {};

demo.state0 = function(){};
demo.state0.prototype = {
    
    preload: function(){
        game.load.image('ocean', '../assets/ocean.png');
        game.load.spritesheet('rain', '../assets/alphabetBlack.png', 32, 32);
        game.load.image('start', '../assets/start.png')
    },
    
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // c is the identifier of the canvas in HTML
        game.add.sprite(0, 0, 'ocean');

        var emitter = game.add.emitter(game.world.centerX, 0, 400);
        emitter.width = game.world.width;
        // emitter.angle = 30; // uncomment to set an angle for the rain.
        emitter.makeParticles('rain',[0,1,2,3,4,5,6,7,8,9,10]);
        emitter.minParticleScale = 0.3;
        emitter.maxParticleScale = 0.5;
        emitter.setYSpeed(300, 500);
        emitter.setXSpeed(-5, 5);
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.start(false, 1600, 5, 0);
        
        var text = game.add.text(game.world.centerX, game.world.centerY, '- WORD CLOUD -\n', {font: "80px Courier", fill: "#000", align: "center"});
        text.anchor.set(0.5);
        var subText = game.add.text(game.world.centerX, game.world.centerY + 30, 'A Pepperjacks Project\n', {font: "40px Courier", fill: "#000", align: "center"});
        subText.anchor.set(0.5);
        var button = game.add.button(game.world.centerX, game.world.centerY + 70, 'start', function() {changeState(1)})
        button.scale.set(0.6)
        button.anchor.set(0.5)
        },
    
    update: function(){
    }
}
function changeState(stateNum){
        game.state.start('state' + stateNum)
    }