var game = new Phaser.Game(window.innerWidth,window.innerHeight, 1282, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.start('state2');