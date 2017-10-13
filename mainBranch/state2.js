
demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('ocean', '../assets/ocean.png');
        game.load.spritesheet('rain', '../assets/alphabet.png', 20, 20);
    },
    
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // c is the identifier of the canvas in HTML
        game.add.sprite(0, 0, 'ocean');

        var emitter = game.add.emitter(game.world.centerX, 0, 500);

        emitter.width = game.world.width;
        // emitter.angle = 30; // uncomment to set an angle for the rain.
        emitter.makeParticles('rain');

        emitter.minParticleScale = 0.5;
        emitter.maxParticleScale = 1;
        emitter.setYSpeed(300, 500);
        emitter.setXSpeed(-5, 5);

        emitter.minRotation = 0;
        emitter.maxRotation = 0;

        emitter.start(false, 1600, 5, 0);
    },
    
    update: function(){
    }
}