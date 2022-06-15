/**
 * 
 * @param {Html Object} element 
 * @param {CSS property} style 
 * @returns value
 */
function getStyle(element, style) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(style));
};

/**
 * 
 * @param {number} value 
 * @returns px value in string format
 */
function toPx(value) {
    return `${value}px`;
}

/**
 * 
 * @param {number} value 
 * @returns % value in string format
 */
function toPer(value) {
    return `${value}%`;
}


/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns random number
 */
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * 
 * @returns image's path
 */
function getRandomImage() {
    var noOfImages = obstacles.length;
    var chooseImage = randomIntFromRange(0, noOfImages - 1);
    var path = 'url(./assets/images/players/' + obstacles[chooseImage] + ')';
    return path;
}


/**
 * 
 * @returns array element
 */
function getRandomSpawnPoint() {
    var noPossibleSpawnPoint = obstacleSpawnPoint.length;
    return obstacleSpawnPoint[randomIntFromRange(0, noPossibleSpawnPoint - 1)];
}


/**
 * 
 * @param {obj} object 
 * @param {arr} array 
 * @returns index of obj in arr
 */
function obtainIndex(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === object) {
            return i;
        }
    }
}

/**
 * 
 * @param {object} player 
 * @param {object} opponent 
 * @returns boolean
 */
function isCollided(player, opponent) {
    playerRect = player.player.getBoundingClientRect();
    opponentRect = opponent.obstacle.getBoundingClientRect();

    return !(
        (playerRect.bottom < opponent.top) ||
        (playerRect.top > opponentRect.bottom) ||
        (playerRect.right < opponentRect.left) ||
        (playerRect.left > opponentRect.right)
    )
}