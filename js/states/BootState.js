var App = App || {};

App.BootState = {
  init: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#FFF';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.storage = new Storage(this.game.settings.storagePrefix);
  },
  preload: function() {

  },
  create: function() {
    this.game.state.start('PreloadState');
  }
};
