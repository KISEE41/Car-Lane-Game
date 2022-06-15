var score = 0;
var highestScore = 0;

var isUpdate = true;

const scoreBox = document.getElementsByClassName('score');
const highestScoreBox = document.getElementsByClassName('highest-score');

const scoreUpdation = (Box, finalScore) => {
    for (let i = 0; i < Box.length; i++) {
        Box[i].innerHTML = `${finalScore}`;
    }
}

const updateScore = () => {
    if (!isUpdate) return;
    score++;
    levelCheck();
    scoreUpdation(scoreBox, score);
}

const stopScore = () => {
    const finalScore = score;

    if (finalScore > highestScore) {
        scoreUpdation(highestScoreBox, finalScore);
    }

    scoreUpdation(scoreBox, finalScore);
}

