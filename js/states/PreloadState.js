var App = App || {};

App.PreloadState = {
  init: function() {
  },
  preload: function() {

    this.load.text('game_data', 'assets/data/game_data.json');

    this.load.spritesheet('deck', 'assets/images/deck.png', 80, 120, 53);

    this.load.image('level_star', 'assets/images/hud/level_star.png');
    this.load.image('level_locked', 'assets/images/hud/level_locked.png');
    this.load.image('level_unlocked', 'assets/images/hud/level_unlocked.png');

    this.load.image('text_dots', 'assets/images/hud/text_dots.png');
    this.load.image('text_dots_small', 'assets/images/hud/text_dots_small.png');
    this.load.image('text_gameover', 'assets/images/hud/text_gameover.png');
    this.load.image('text_go', 'assets/images/hud/text_go.png');
    this.load.image('text_ready', 'assets/images/hud/text_ready.png');
    this.load.image('text_score', 'assets/images/hud/text_score.png');
    this.load.image('text_score_small', 'assets/images/hud/text_score_small.png');
    this.load.image('text_timeup', 'assets/images/hud/text_timeup.png');

    this.load.image("profile_photo", App.profile.photo);

    this.load.audio('card_flip', ['assets/audio/240776__f4ngy__card-flip.mp3', 'assets/audio/240776__f4ngy__card-flip.ogg'])
  },
  create: function() {
    this.game.state.start('LevelState');
    //this.game.state.start('GameState');
    //this.game.state.start('CompleteState', true, false, 50);
  }
};
