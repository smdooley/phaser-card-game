var App = App || {};

App.CompleteState = {
    init: function (data) {
        this.score = data.score;

        // Set player's best score
        FBInstant.player.setDataAsync({
            'score': Math.max(App.profile.bestScore, this.score)
        });

        // Update player's best score on the leaderboard
        FBInstant.getLeaderboardAsync('global_leaderboard')
            .then(leaderboard => {
                console.log("retrieved leaderboard: " + leaderboard.getName());
                return leaderboard.setScoreAsync(this.score);
            })
            .then(() => console.log("Score saved: " + this.score))
            .catch(error => console.error(error));

        // Get top 3 scores on the leaderboard
        FBInstant.getLeaderboardAsync('global_leaderboard')
            .then(leaderboard => leaderboard.getEntriesAsync(3, 0))
            .then(entries => {
                console.log('TOP SCORES');
                for (var i = 0; i < entries.length; i++) {
                    console.log("#" + entries[i].getRank() + " " + entries[i].getPlayer().getName() + ": " + entries[i].getScore());
                }
            })
            .catch(error => console.error(error));
    },
    create: function () {
        var style = { align: 'center', font: '32px Pattaya', fill: '#fff' };

        var text_gameover = this.add.text(this.game.world.centerX, this.game.world.centerY - 32, 'CONGRATULATIONS', style);
        text_gameover.anchor.setTo(0.5);
        text_gameover.stroke = '#E86A17';
        text_gameover.strokeThickness = 8;

        var text_score = this.add.text(this.game.world.centerX, this.game.world.centerY + 32, this.score, style);
        text_score.stroke = '#E86A17';
        text_score.strokeThickness = 8;
        text_score.anchor.setTo(0.5);

        this.game.input.onDown.addOnce(this.restart, this);
    },
    update: function () {

    },
    restart: function () {
        this.game.state.start('GameState');
    }
};