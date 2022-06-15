var level = 1;

function levelCheck() {
    if (score % 5 === 0) {
        obstacleTransition -= 0.5;
        numberOfObstacles += 1;
        obstacleSpawnTime -= 10;
    }
}
