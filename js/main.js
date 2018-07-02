// https://www.facebook.com/embed/instantgames/219864452127337/player?game_url=https%3A%2F%2Flocalhost%3A3000

var App = App || {};

App.profile = {
    name: '',
    photo: '',
    bestScore: 0
};

FBInstant.initializeAsync().then(function() {
    FBInstant.setLoadingProgress(100);
    FBInstant.startGameAsync().then(function() {
        App.profile.name = FBInstant.player.getName();
        App.profile.photo = FBInstant.player.getPhoto();

        // Setup Phaser
        App.game = new Phaser.Game(480, 720, Phaser.AUTO);

        App.game.settings = {
            'storagePrefix': 'pcg_'
        };

        App.game.state.add('BootState', App.BootState);
        App.game.state.add('PreloadState', App.PreloadState);
        App.game.state.add('LevelState', App.LevelState);
        App.game.state.add('GameState', App.GameState);
        App.game.state.add('CompleteState', App.CompleteState);
        App.game.state.add('GameOverState', App.GameOverState);

        App.game.state.start('BootState');
    });
});