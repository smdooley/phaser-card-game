var App = App || {};

App.GameOverState = {
  init: function() {
    console.log('GameOverState', 'init');
  },
  create: function() {
    var style = { align: 'center', font: '32px Pattaya', fill: '#fff' };
    
    var text_gameover = this.add.text(this.game.world.centerX, this.game.world.centerY - 32, 'GAME OVER', style);
    text_gameover.anchor.setTo(0.5);
    text_gameover.stroke = '#E86A17';
    text_gameover.strokeThickness = 8;

    this.game.input.onDown.addOnce(this.restart, this);
  },
  update: function() {

  },
  restart: function() {
    this.game.state.start('GameState');
  }
}
