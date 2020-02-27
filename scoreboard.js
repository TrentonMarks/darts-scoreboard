class Scoreboard {
    constructor(selector) {
        this.selector = selector;
        this.rows = 7;
        this.cols = 5;
        this.firstPlayerScore = 0;
        this.secondPlayerScore = 0;
        this.createBoard();
    }

    createBoard() {
        const $board = $(this.selector);
        for (let i = 0; i < this.cols; i++) {
            let num = 20;
            const $col = $('<div>')
                .addClass('col')
                .attr('id', 'col-' + i);

            for (let j = 0; j < this.rows; j++) {
                if (i === 0 || i === 4) {
                    const $removeScore = $('<div>')
                        .addClass('remove-score');
                    $col.append($removeScore);
                } else if (i === 1 || i === 3) {
                    const $addScore = $('<div><div class="add-btn2"></div></div>')
                        .addClass('add-score');
                    $col.append($addScore);
                } else if (num >= 15) {
                    const $score = function() {
                        return $(`<p>${num}</p>`)
                            .addClass('score');
                    }
                    $col.append($score);
                    num--;
                } else {
                    const $score = $('<p>B</p>')
                        .addClass('score');
                    $col.append($score);
                }
            }


            $board.append($col);
            console.log($col);
        }
    }
}
