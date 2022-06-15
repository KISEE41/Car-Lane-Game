const body = document.getElementsByTagName('body')[0];

document.getElementsByClassName('grass-left')[0].style.animation = "none";
document.getElementsByClassName('grass-right')[0].style.animation = "none";
document.getElementsByClassName('road')[0].style.animation = "none";

startBtn = document.getElementsByClassName('play-button')[0];
startBtn.addEventListener('click', start);

document.getElementById('endBoard').style.display = "none";

function start() {
    document.getElementById('startBoard').style.display = "none";
    document.getElementById('endBoard').style.display = "none";

    document.getElementsByClassName('grass-left')[0].style.animation = "roadSlide 5s infinite linear";
    document.getElementsByClassName('grass-right')[0].style.animation = "roadSlide 5s infinite linear";
    document.getElementsByClassName('road')[0].style.animation = "roadSlide 5s infinite linear";


    mainObstacle();
    mainPlayer();
}