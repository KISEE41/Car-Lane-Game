class Player {
    constructor() {
        this.position = {
            x: 35,
            y: 5
        }
        this.rot = 0;
        this.iscollide = false;
        this.create();
    }

    create() {
        this.player = document.createElement('div');
        this.player.setAttribute('id', 'player');
        this.player.style.width = `${toPx(playerDimension.width)}`;
        this.player.style.height = `${toPx(playerDimension.height)}`;
        this.player.style.position = 'absolute';
        this.player.style.bottom = `${toPer(this.position.y)}`;
        this.player.style.left = `${toPer(this.position.x)}`;

        document.getElementsByClassName('road')[0].appendChild(this.player);
    }

    move() {
        if (!this.iscollide) {
            this.player.style.bottom = `${toPer(this.position.y)}`;
            this.player.style.left = `${toPer(this.position.x)}`;
        } else {
            console.log("_________collided___________");
        }
    }

    rotate(value) {
        if (value === 0) {
            this.rot = 0;
            this.player.style.transform = "rotateZ(0deg)";
        }
        else {
            const rotation = setInterval(() => {
                if (value > 0) {
                    this.rot += 3;
                    this.rot = this.rot > value ? value : this.rot;
                    this.player.style.transform = `rotateZ(${this.rot}deg)`;
                }
                else {
                    this.rot -= 3;
                    this.rot = this.rot <= value ? value : this.rot;
                    this.player.style.transform = `rotateZ(${this.rot}deg)`;
                }
                if (this.rot >= value || this.rot <= value) {
                    clearInterval(rotation);
                }
            }, 0.1);
        }
    }

    reset() {
        this.position = {
            x: 35,
            y: 5
        }
        this.player.style.bottom = `${toPer(this.position.y)}`;
        this.player.style.left = `${toPer(this.position.x)}`;
    }
}

function mainPlayer() {
    player = new Player();

    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'ArrowRight':
                player.rotate(maxRotationAngle);
                player.position.x += stepMovement;
                player.position.x = (player.position.x >= playerMovementLimit.maxLeft) ? playerMovementLimit.maxLeft : player.position.x;
                break;
            case 'ArrowLeft':
                player.rotate(-maxRotationAngle);
                player.position.x -= stepMovement;
                player.position.x = (player.position.x <= playerMovementLimit.minLeft) ? playerMovementLimit.minLeft : player.position.x;
                break;
            case 'ArrowUp':
                player.position.y += stepMovement;
                player.position.y = (player.position.y >= playerMovementLimit.maxTop) ? playerMovementLimit.maxTop : player.position.y;
                break;
            case 'ArrowDown':
                player.position.y -= stepMovement;
                player.position.y = (player.position.y <= playerMovementLimit.minTop) ? playerMovementLimit.minLeft : player.position.y;
                break;
        }
        player.move();
    })

    document.addEventListener('keyup', (e) => {
        this.rot = 0;
        player.rotate(0);
    });
}


