class Scoreboard {
    constructor(selector) {
        this.selector = selector;
        this.rows = 7;
        this.cols = 5;
        this.secondPlayerScore = 0;
        this.firstPlayerHits = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
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
        const $board = $(this.selector);
        for (let i = 0; i < this.cols; i++) {
            const $col = $('<div>')
                .addClass('col')
                .attr('id', 'col-' + i);

            for (let j = 20; j >= this.rows + 7; j--) {
                if (i === 0 || i === 4) {
                    const $removeScore = $('<div>')
                        .addClass('remove-score')
                        .attr('data-col', i)
                        .attr('data-row', j)
                    $col.append($removeScore);
                } else if (i === 1 || i === 3) {
                    const $addScore = $('<div>')
                        .addClass('add-score')
                        .attr('data-col', i)
                        .attr('data-row', j)
                    $col.append($addScore);
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
    }

    setupEventListeners() {
        const $board = $(this.selector);
        const that = this;

        // CLICK LISTENER: Adding Score
        $board.on('click', '.add-score', function() {
            const col = $(this).data('col');
            const row = $(this).data('row');
            const clickedItem = $(`.add-score[data-col='${col}'][data-row='${row}']`);
            if (col === 1) {
                if (that.firstPlayerHits[row] !== 3) {
                    that.firstPlayerHits[row]++;
                } else if (row !== 14){
                    that.firstPlayerScore += row;
                    that.firstPlayerScorePerNum[row] += row;
                } else if (row === 14) {
                    that.firstPlayerScore += 25;
                    that.firstPlayerScorePerNum[row] += 25;
                }
            } else if (col === 3) {
                if (that.secondPlayerHits[row] !== 3) {
                    that.secondPlayerHits[row]++;
                } else if (row !== 14){
                    that.secondPlayerScore += row;
                    that.secondPlayerScorePerNum[row] += row;
                } else if (row === 14) {
                    that.secondPlayerScore += 25;
                    that.secondPlayerScorePerNum[row] += 25;
                }
            }
            that.checkIfWin();

            console.log('Player 1 Score: ' + that.firstPlayerScore);
            console.log('Player 2 Score: ' + that.secondPlayerScore);
            console.log('Player 1 Scores Per Num: ', that.firstPlayerScorePerNum);
            console.log('Player 2 Scores Per Num: ', that.secondPlayerScorePerNum);

        });

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
            console.clear();
            console.log('Player 2 Score: ' + that.secondPlayerScore);
            console.log('Player 1 Scores Per Num: ', that.firstPlayerScorePerNum);
            console.log('Player 2 Scores Per Num: ', that.secondPlayerScorePerNum);



            // else if (col === 4) {
            //     if (that.secondPlayerHits[row] !== 3) {
            //         that.secondPlayerHits[row]++;
            //     } else {
            //         that.secondPlayerScore += row;
            //     }
            // }
        });
    }

    checkIfWin() {
        console.clear();
        const that = this;
        console.log('Player 1 Hits: ', that.firstPlayerHits);
        console.log('Player 2 Hits: ', that.secondPlayerHits);

        if (
            that.firstPlayerScore > that.secondPlayerScore &&
            that.firstPlayerHits[20] === 3 &&
            that.firstPlayerHits[19] === 3 &&
            that.firstPlayerHits[18] === 3 &&
            that.firstPlayerHits[17] === 3 &&
            that.firstPlayerHits[16] === 3 &&
            that.firstPlayerHits[15] === 3 &&
            that.firstPlayerHits[14] === 3
        ) {
            return alert('Player 1 has won!');
        } else if (
            that.secondPlayerScore > that.firstPlayerScore &&
            that.secondPlayerHits[20] === 3 &&
            that.secondPlayerHits[19] === 3 &&
            that.secondPlayerHits[18] === 3 &&
            that.secondPlayerHits[17] === 3 &&
            that.secondPlayerHits[16] === 3 &&
            that.secondPlayerHits[15] === 3 &&
            that.secondPlayerHits[14] === 3
        ) {
            return alert('Player 2 Wins');
        }
    }
}
