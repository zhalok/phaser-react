import Phaser from "phaser";
import { getRandomNumber } from "../../utils";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super();
        this.basketSpeed = 200;
        this.basket;
        this.apple;
        this.cursor;
        this.score = 0;
        this.scoreText = `${this.score}`;
    }

    preload() {
        this.load.image("bg", "/assets/bg.png");
        this.load.image("basket", "/assets/basket.png");
        this.load.image("apple", "/assets/apple.png");
    }

    create() {
        this.add.image(0, 0, "bg").setOrigin(0);
        this.basket = this.physics.add
            .image(getRandomNumber(0, 500), 450, "basket")
            .setScale(0.5);
        this.basket.setImmovable(true);
        this.basket.body.allowGravity = false;
        this.basket.setCollideWorldBounds(true);
        this.apple = this.physics.add.image(100, 100, "apple").setOrigin(0);
        this.apple.setMaxVelocity(0, 200);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(
            this.basket,
            this.apple,
            this.appleHitsBasket,
            null,
            this
        );
        this.scoreText = this.add.text(390, 10, `Score: ${this.score}`, {
            fontSize: "20px",
            fill: "#000",
        });
    }

    update() {
        if (this.apple.y > 450) {
            this.resetApplePosition();
        }
        const { left, right } = this.cursor;
        if (left.isDown) {
            this.basket.setVelocityX(-this.basketSpeed);
        } else if (right.isDown) {
            this.basket.setVelocityX(this.basketSpeed);
        } else {
            this.basket.setVelocityX(0);
        }
    }

    appleHitsBasket() {
        this.score++;
        this.scoreText.setText(`Score: ${this.score}`);
        this.resetApplePosition();
    }

    resetApplePosition() {
        this.apple.setX(getRandomNumber(0, 500));
        this.apple.setY(0);
    }
}

