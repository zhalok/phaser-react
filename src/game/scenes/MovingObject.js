import { config } from "../main";

export default class MovingObjects extends Phaser.Scene {
    constructor() {
        super("MovingObjects");
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("ship", "assets/ship.png");
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        // this.background.setOrigin(0, 0);
        this.background.displayWidth = config.width;
        this.background.scaleY = this.background.scaleX;
        this.background.y = config.height / 2;
        this.background.x = config.width / 2;

        this.ship = this.add
            .image(config.width / 2 - 50, config.height / 2, "ship")
            .setScale(3);
    }

    update() {
        // this.moveShip(this.ship, 1);
        // this.background.tilePositionY -= 0.5;
    }

    // 1.2 create the function to move the ships
    moveShip(ship, speed) {
        // increase the position of the ship on the vertical axis
        ship.y += speed;
        // if the ship hits the bottom of the screen call the reset function
        if (ship.y > config.height) {
            // 2.1 call a reset position function
            this.resetShipPos(ship);
        }
    }

    // 2.2 create the reset position function
    resetShipPos(ship) {
        // put the ship on the top
        ship.y = 0;
        // put the ship on a random position on the x axis
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }
}

