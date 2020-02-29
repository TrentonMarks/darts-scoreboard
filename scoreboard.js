class Scoreboard {
    constructor(selectorA, selectorB) {
        this.selectorA = selectorA;
        this.selectorB = selectorB;
        this.firstPlayerName = 'Player 1';
        this.secondPlayerName = 'Player 2';
        this.rows = 7;
        this.cols = 5;
        this.firstPlayerScore = 0;
        this.secondPlayerScore = 0;
        this.firstPlayerHits = {
            20: 0,
            19: 0,
            18: 0,
            17: 3, // change back to 0!!!
            16: 0,
            15: 0,
            14: 0
        };
        this.secondPlayerHits = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        this.firstPlayerScorePerNum = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        this.secondPlayerScorePerNum = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };

        this.createBoard();
        this.setupEventListeners();
    }

    createBoard() {
        const $playerNamesContainer = $('<div>')
            .attr('id', 'player-names-container');
        const $firstPlayerName = $('<input>')
            .attr('type', 'text')
            .attr('value', 'Player 1')
            .attr('id', 'first-player-name')
            .addClass('player-name');
            const $secondPlayerName = $('<input>')
                .attr('type', 'text')
                .attr('value', 'Player 2')
                .attr('id', 'second-player-name')
                .addClass('player-name');
        $('.player-name').remove();
        $($playerNamesContainer).append($firstPlayerName);
        $($playerNamesContainer).append($secondPlayerName);
        $('h1').append($playerNamesContainer);
        const $board = $(this.selectorA);
        $board.empty();
        const that = this;
        for (let i = 0; i < this.cols; i++) {
            const $col = $('<div>')
                .addClass('col')
                .attr('id', 'col-' + i);
            for (let j = 20; j >= this.rows + 7; j--) {
                if (i === 0 || i === 4) {
                    let $removeScore = $('<div>')
                        .addClass('remove-score')
                        .attr('data-col', i)
                        .attr('data-row', j);
                    if (i === 0 && this.firstPlayerScorePerNum[j] > 0) {
                        $removeScore.addClass('show-score');
                        const $firstPlayerScorePerNumDisplay = $('<p>')
                            .text(this.firstPlayerScorePerNum[j])
                            .addClass('player-score-per-num-display');
                        $removeScore.append($firstPlayerScorePerNumDisplay);
                    } else if (i === 0 && this.firstPlayerScorePerNum[j] <= 0){
                        const $firstPlayerMinus = $('<div>')
                            .addClass('show-minus');
                        $removeScore.append($firstPlayerMinus);
                    } else if (i === 4 && this.secondPlayerScorePerNum[j] > 0) {
                        $removeScore.addClass('show-score');
                        const $secondPlayerScorePerNumDisplay = $('<p>')
                            .text(this.secondPlayerScorePerNum[j])
                            .addClass('player-score-per-num-display');
                        $removeScore.append($secondPlayerScorePerNumDisplay);
                    } else if (i === 4 && this.secondPlayerScorePerNum[j] <= 0) {
                        const $secondPlayerMinus = $('<div>')
                            .addClass('show-minus');
                        $removeScore.append($secondPlayerMinus);
                    }
                    $col.append($removeScore);
                } else if (i === 1 || i === 3) {
                    if (i === 1) {
                        if (this.firstPlayerHits[j] === 0) {
                            const $addScore = $('<div>')
                                .addClass('add-score')
                                .addClass('plus-sign')
                                .attr('data-col', i)
                                .attr('data-row', j)
                            $col.append($addScore);
                        } else if (this.firstPlayerHits[j] === 1) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashA')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            $col.append($forwardSlash);
                        } else if (this.firstPlayerHits[j] === 2) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashB')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $backwardSlash = $('<div>')
                                .addClass('backward-slash')
                                .attr('data-col', i)
                                .attr('data-row', j)
                            $col.append($backwardSlash);
                            $backwardSlash.append($forwardSlash);
                        } else if (this.firstPlayerHits[j] === 3) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashB')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $backwardSlash = $('<div>')
                                .addClass('backward-slash')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $innerCircle = $('<div>')
                                .addClass('inner-circle')
                                .attr('data-col', i)
                                .attr('data-row', j);
                                $col.append($backwardSlash);
                                $backwardSlash.append($forwardSlash);
                                $forwardSlash.append($innerCircle);
                        }
                    } else if (i === 3) {
                        if (this.secondPlayerHits[j] === 0) {
                            const $addScore = $('<div>')
                                .addClass('add-score')
                                .addClass('plus-sign')
                                .attr('data-col', i)
                                .attr('data-row', j)
                            $col.append($addScore);
                        } else if (this.secondPlayerHits[j] === 1) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashA')
                                .attr('data-col', i)
                                .attr('data-row', j)
                            $col.append($forwardSlash);
                        } else if (this.secondPlayerHits[j] === 2) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashB')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $backwardSlash = $('<div>')
                                .addClass('backward-slash')
                                .attr('data-col', i)
                                .attr('data-row', j)
                            $col.append($backwardSlash);
                            $backwardSlash.append($forwardSlash);
                        } else if (this.secondPlayerHits[j] === 3) {
                            const $forwardSlash = $('<div>')
                                .addClass('add-score')
                                .addClass('forward-slashB')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $backwardSlash = $('<div>')
                                .addClass('backward-slash')
                                .attr('data-col', i)
                                .attr('data-row', j);
                            const $innerCircle = $('<div>')
                                .addClass('inner-circle')
                                .attr('data-col', i)
                                .attr('data-row', j);
                                $col.append($backwardSlash);
                                $backwardSlash.append($forwardSlash);
                                $forwardSlash.append($innerCircle);
                        }
                    }
                } else if (j >= 15) {
                    const $score = function() {
                        return $(`<p>${j}</p>`)
                            .addClass('score');
                    }
                    $col.append($score);
                } else {
                    const $score = $('<p>B</p>')
                        .addClass('score');
                    $col.append($score);
                }
            }
            $board.append($col);
        }
        const $scoreContainer = $(this.selectorB);
        $scoreContainer.empty();
        const $firstPlayerScoreContainer = $('<div>')
            .attr('id', 'first-player-score');
        const $secondPlayerScoreContainer = $('<div>')
            .attr('id', 'second-player-score');
        const $firstPlayerScoreDisplay = $('<p>')
            .attr('id', 'first-player-score-display')
            .addClass('player-score-display')
            .text(that.firstPlayerScore);
        const $secondPlayerScoreDisplay = $('<p>')
            .attr('id', 'second-player-score-display')
            .addClass('player-score-display')
            .text(that.secondPlayerScore);
        $('body').append($scoreContainer);
        $($scoreContainer).append($firstPlayerScoreContainer)
                          .append($secondPlayerScoreContainer);
        $($firstPlayerScoreContainer).append($firstPlayerScoreDisplay);
        $($secondPlayerScoreContainer).append($secondPlayerScoreDisplay);

        // RESET BUTTON
        const $resetButton = $('<a>')
            .attr('id', 'reset')
            .text('RESET');
        $('#reset').remove();
        $('body').append($resetButton);
    }

    setupEventListeners() {
        const $board = $(this.selectorA);
        const that = this;

        // CLICK LISTENER: ADD SCORE
        $board.on('click', '.add-score', function() {
            const col = $(this).data('col');
            const row = $(this).data('row');
            if (col === 1) {
                if (that.firstPlayerHits[row] !== 3) {
                    that.firstPlayerHits[row]++;
                } else if (row !== 14 && that.secondPlayerHits[row] !== 3){
                    that.firstPlayerScore += row;
                    that.firstPlayerScorePerNum[row] += row;
                } else if (row === 14 && that.secondPlayerHits[row] !== 3) {
                    that.firstPlayerScore += 25;
                    that.firstPlayerScorePerNum[row] += 25;
                }
            } else if (col === 3) {
                if (that.secondPlayerHits[row] !== 3) {
                    that.secondPlayerHits[row]++;
                } else if (row !== 14 && that.firstPlayerHits[row] !== 3){
                    that.secondPlayerScore += row;
                    that.secondPlayerScorePerNum[row] += row;
                } else if (row === 14 && that.firstPlayerHits[row] !== 3) {
                    that.secondPlayerScore += 25;
                    that.secondPlayerScorePerNum[row] += 25;
                }
            }
            that.checkIfWin();
            that.createBoard();
            console.log('Player 1 Score: ' + that.firstPlayerScore);
            console.log('Player 2 Score: ' + that.secondPlayerScore);
            console.log('Player 1 Scores Per Num: ', that.firstPlayerScorePerNum);
            console.log('Player 2 Scores Per Num: ', that.secondPlayerScorePerNum);
        });

        // CLICK LISTENER: SUBTRACT SCORE
        $board.on('click', '.remove-score', function(){
            const col = $(this).data('col');
            const row = $(this).data('row');
            if (col === 0) {
                if (that.firstPlayerScorePerNum[row] > 0) {
                    if (row !== 14) {
                        that.firstPlayerScorePerNum[row] -= row;
                        that.firstPlayerScore -= row;

                    } else if (row === 14){
                        that.firstPlayerScorePerNum[row] -= 25;
                        that.firstPlayerScore -= 25;
                    }
                } else if (that.firstPlayerHits[row] > 0) {
                    that.firstPlayerHits[row]--;
                }
            } else if (col === 4) {
                if (that.secondPlayerScorePerNum[row] > 0) {
                    if (row !== 14) {
                        that.secondPlayerScorePerNum[row] -= row;
                        that.secondPlayerScore -= row;
                    } else if (row === 14) {
                        that.secondPlayerScorePerNum[row] -= 25;
                        that.secondPlayerScore -= 25;
                    }

                }  else if (that.secondPlayerHits[row] > 0) {
                    that.secondPlayerHits[row]--;
                }
            }
            that.createBoard();

            console.clear();
            console.log('Player 2 Score: ' + that.secondPlayerScore);
            console.log('Player 1 Scores Per Num: ', that.firstPlayerScorePerNum);
            console.log('Player 2 Scores Per Num: ', that.secondPlayerScorePerNum);
        });

        // CLICK LISTENER: RESET BUTTON
        $('body').on('click', '#reset', function(){
            if (confirm('Reset the game?')) {
                that.reset();
            }
        });
    }

    checkIfWin() {
        console.clear();
        const that = this;
        console.log('Player 1 Hits: ', that.firstPlayerHits);
        console.log('Player 2 Hits: ', that.secondPlayerHits);

        if (
            that.firstPlayerScore >= that.secondPlayerScore &&
            that.firstPlayerHits[20] === 3 &&
            that.firstPlayerHits[19] === 3 &&
            that.firstPlayerHits[18] === 3 &&
            that.firstPlayerHits[17] === 3 &&
            that.firstPlayerHits[16] === 3 &&
            that.firstPlayerHits[15] === 3 &&
            that.firstPlayerHits[14] === 3
        ) {
             if (confirm('Player 1 has won! Reset the game?')) {
                 return that.reset();
             }
        } else if (
            that.secondPlayerScore >= that.firstPlayerScore &&
            that.secondPlayerHits[20] === 3 &&
            that.secondPlayerHits[19] === 3 &&
            that.secondPlayerHits[18] === 3 &&
            that.secondPlayerHits[17] === 3 &&
            that.secondPlayerHits[16] === 3 &&
            that.secondPlayerHits[15] === 3 &&
            that.secondPlayerHits[14] === 3
        ) {
            if (confirm('Player 2 has won! Reset the game?')) {
                return that.reset();
            }
        }
    }

    reset() {
        const that = this;
        that.firstPlayerScore = 0;
        that.secondPlayerScore = 0;
        that.firstPlayerHits = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        that.secondPlayerHits = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        that.firstPlayerScorePerNum = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        that.secondPlayerScorePerNum = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            14: 0
        };
        console.clear();
        this.createBoard();
    }
}
