import { Scene } from "phaser";
import { getFrameRange } from "../../utils";
import { config } from "../main";

export class SpriteAnimation extends Scene {
    constructor() {
        super("SpriteAnimation");
        this.playerSpeed = 100;
    }

    preload() {
        this.load.image("background", "assets/background.png");

        this.load.spritesheet("sheet", "/sprites/sheet.png", {
            frameWidth: 117,
            frameHeight: 115,
        });
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.displayWidth = config.width;
        this.background.scaleY = this.background.scaleX;
        this.background.y = config.height / 2;
        this.background.x = config.width / 2;
        this.anims.create(this.getMovement("walk"));
        this.player = this.physics.add.sprite(50, config.height - 100, "sheet");
        this.player.body.allowGravity = false;

        this.player.setInteractive();
        this.cursor = this.input.keyboard.createCursorKeys();
    }

    update() {
        const { left, right } = this.cursor;

        if (left.isDown) {
            this.player.setScale(-1, 1);
            this.player.play("walk", true);
            this.player.setVelocityX(-this.playerSpeed);
        } else if (right.isDown) {
            this.player.setScale(1, 1);
            this.player.play("walk", true);

            this.player.setVelocityX(this.playerSpeed);
        } else {
            this.player.stop("walk");
            this.player.setVelocityX(0);
        }
    }

    moveRight(object, speed) {
        object.x += speed;
        if (object.x > config.width) {
            this.resetPos(object);
        }
    }

    resetPos(object) {
        object.x = 50;
    }

    getMovement(action) {
        return {
            key: action,
            frames: this.anims.generateFrameNumbers("sheet", {
                frames: getFrameRange(action),
            }),
            frameRate: 16,
            repeat: -1,
        };
    }
}

