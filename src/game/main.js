import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import Phaser from "phaser";
import { Preloader } from "./scenes/Preloader";
import GameScene from "./scenes/GameSene";
import { SpriteAnimation } from "./scenes/SpreiteAnimation";
import MovingObjects from "./scenes/MovingObject";

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
export const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    parent: "game-container",
    backgroundColor: "#028af8",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 100 },
            debug: true,
        },
    },
    scene: [SpriteAnimation],
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
};

export default StartGame;

