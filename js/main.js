var App = App || {};

FBInstant.initializeAsync().then(function() {
    FBInstant.setLoadingProgress(100);
    FBInstant.startGameAsync().then(function() {
        App.game = new Phaser.Game(480, 720, Phaser.AUTO);

        App.game.state.add('BootState', App.BootState);
        App.game.state.add('PreloadState', App.PreloadState);
        App.game.state.add('GameState', App.GameState);
        App.game.state.add('CompleteState', App.CompleteState);
        App.game.state.add('GameOverState', App.GameOverState);

        App.game.state.start('BootState');
    });
});
