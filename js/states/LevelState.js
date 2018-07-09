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
            for(var j = 0; j < levels.length; j++) {
                App.game.add.image(xx + 14, yy + 45, 'level_star');
            }
        }
    }
  }
};