const road = document.getElementsByClassName('road')[0];

const playerDimension = {
    width: 110,
    height: 110
}

const playerMovementLimit = {
    maxLeft: 85,
    minLeft: 0,
    maxTop: 85,
    minTop: 0,
}

const maxRotationAngle = 35;
const stepMovement = 2;

const obstacles = [
    'opponent1.png',
    'opponent2.png',
    'opponent3.png'
]

const obstaclesDimension = {
    width: 80,
    height: 130
}

const obstacleSpawnPoint = [4, 18, 37, 51, 69, 84];

const collisionOffset = 20;

