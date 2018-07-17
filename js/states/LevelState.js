var App = App || {};

App.LevelState = {
  init: function() {
      if(!this.game.storage.getItem('levels')) this.initLevels();

      this.renderLevels();
  },
  preload: function() {

  },
  create: function() {

  },
  update: function() {

  },
  initLevels: function() {
    var levels = [];

    for (var i = 0; i < 12; i++) {
        levels.push({
            "unlocked": false,
            "stars": 0
        });
    }
    
    levels[0].unlocked = true;
    
    App.game.storage.setItem('levels', JSON.stringify(levels));
  },
  renderLevels: function() {
    var levels = JSON.parse(App.game.storage.getItem('levels'));

    for (var i = 0; i < levels.length; i++) {
        var xx = 35 + (i % 4) * 106;
        var yy = 150 + Math.floor(i / 4) * 125;

        if(levels[i].unlocked) {
            // show unlocked level state
            var button = this.game.add.button(xx, yy, 'level_unlocked', this.startLevel, this, 0, 0, 0, 0);
            button.level = i;

            // show how many stars achieved for that level
            for(var j = 0; j < levels[i].stars; j++) {
                this.game.add.image(xx + 5 + j * 32, yy + 85, 'level_star');
            }
        }
        else {
            // show locked level state
            this.game.add.image(xx, yy, 'level_locked');
        }
    }
  },
  startLevel: function(button) {
    this.game.state.start('GameState', true, false, button.level+1);
  }
};