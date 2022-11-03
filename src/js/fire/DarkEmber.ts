// import packages
import * as PIXI from 'pixi.js';

export class DarkEmber extends PIXI.Container {

    private sprite: PIXI.Sprite;
    private ease: number;
    private speed: number;

    constructor(){

        super();

        this.sprite = PIXI.Sprite.from("./assets/dark-ember.png");
        this.sprite.anchor.set(0.5);

            // randomize the ease parameters
        this.ease = Math.random() * 300;

        const t = Math.random ();
        this.speed = 5 * t + 10 * (1.0 - t);

        this.alpha = 0.4 * t + (1.0 - t);

        this.addChild(this.sprite);
    }

    frame(elapsed: number) {

        this.ease += elapsed;

        this.sprite.x = Math.cos(this.ease * 0.05) * 700.0;
        this.position.y -= elapsed * this.speed;

        if (this.position.y < 0) {

            this.position.y = window.innerHeight;

                // randomize the ease parameters
            this.ease = Math.random() * 300;

            const t = Math.random();
            this.speed = 5 * t + 10 * (1.0 - t);

            this.alpha = 0.4 * t + (1.0 - t);

        }
         
    }

}