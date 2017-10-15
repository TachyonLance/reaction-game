// Main Menu
var demo = {};

demo.state0 = function(){};
demo.state0.prototype = {
    
    preload: function(){
        game.load.image('ocean', '../assets/ocean.png');
        game.load.spritesheet('rain', '../assets/alphabetBlue.png', 32, 32);
        game.load.image('start', '../assets/start.png')
    },
    
    create:function(){
        // Initialize the Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // Integrate the Background
        game.add.sprite(0, 0, 'ocean');

        // Create an emitter that generates a storm of letters
        var emitter = game.add.emitter(game.world.centerX, 0, 400);
        emitter.width = game.world.width;
        emitter.makeParticles('rain',[0,1,2,3,4,5,6,7,8,9,10]);
        emitter.minParticleScale = 0.3;
        emitter.maxParticleScale = 0.5;
        emitter.setYSpeed(100, 300);
        emitter.setXSpeed(-5, 5);
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.start(false, 6500, 5, 0);
        
        // Main Menu Header
        var text = game.add.text(game.world.centerX, game.world.centerY, '- WORD CLOUD -\n', {font: "110px Dejavu Serif", fill: "#73d678", align: "center"});
        text.anchor.set(0.5);
        
        // Main Menu Subtitle
        var subText = game.add.text(game.world.centerX, game.world.centerY + 30, 'A Pepperjacks Project\n', {font: "40px  Courier New", fill: "#73d678", align: "center"});
        subText.anchor.set(0.5);
        
        // Main Menu Start Button
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