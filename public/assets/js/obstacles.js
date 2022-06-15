var obstacleTransition = 30;
var numberOfObstacles = 1;
var obstacleSpawnTime = 1000;
var obs = [];


class Obstacle {
    constructor() {
        this.position = {
            x: getRandomSpawnPoint(),
            y: -15
        };
        this.width = obstaclesDimension.width;
        this.height = obstaclesDimension.height;
        this.movementValue = 1;

        this.create();
    }

    create() {
        this.obstacle = document.createElement("div");
        this.obstacle.setAttribute('class', 'obstacle');
        this.obstacle.style.width = `${toPx(this.width)}`;
        this.obstacle.style.height = `${toPx(this.height)}`;
        this.obstacle.style.position = "absolute";
        this.obstacle.style.top = `${toPer(this.position.y)}`;
        this.obstacle.style.left = `${toPer(this.position.x)}`;
        this.obstacle.style.backgroundImage = getRandomImage();

        road.appendChild(this.obstacle);

        this.move();
    }

    collisionCheck() {
        return isCollided(player, this);
    }

    move() {
        const animate = setInterval(() => {
            if (!this.collisionCheck()) {
                this.position.y += this.movementValue;
                this.obstacle.style.top = `${toPer(this.position.y)}`;

                if (this.position.y >= 110) {
                    clearInterval(animate);
                    this.destory();
                    updateScore();
                }
            } else {
                // console.log("collided");
                afterCollision();
            }
        }, obstacleTransition);
    }

    destory() {
        let index = obtainIndex(this, obs);
        obs.splice(index, 1);
        this.obstacle.remove();
    }

    reset() {
        this.destory();
    }
}



function mainObstacle() {
    setInterval(() => {
        if (obs.length < numberOfObstacles) {
            const obstacle = new Obstacle();
            obs.push(obstacle);
        }
    }, obstacleSpawnTime);
}





