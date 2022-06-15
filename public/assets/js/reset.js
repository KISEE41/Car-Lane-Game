function afterCollision() {
    isUpdate = false;
    stopScore();

    document.getElementsByClassName('grass-left')[0].style.animation = "none";
    document.getElementsByClassName('grass-right')[0].style.animation = "none";
    document.getElementsByClassName('road')[0].style.animation = "none";
    document.getElementById('player').style.display = "none";

    const endBoard = document.getElementById('endBoard')
    endBoard.style.display = 'block';

    const retryBtn = document.querySelector('#endBoard .play-button');
    retryBtn.addEventListener('click', () => {
        document.getElementsByClassName('grass-left')[0].style.animation = "roadSlide 5s infinite linear";
        document.getElementsByClassName('grass-right')[0].style.animation = "roadSlide 5s infinite linear";
        document.getElementsByClassName('road')[0].style.animation = "roadSlide 5s infinite linear";
        endBoard.style.display = 'none';

        player.reset();

        obs.forEach(obj => {
            obj.destory();
        })
        mainObstacle();

        score = -1;
        isUpdate = true;
        updateScore();

        document.getElementById('player').style.display = "block";
    })
}