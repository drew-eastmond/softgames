import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

import cardImgA from './../../assets/card-a.png';
import cardImgB from './../../assets/card-b.png';



// @ts-ignore
export class Card extends PIXI.Sprite {

    constructor() {
        super(PIXI.Texture.from(cardImgA));

        this.anchor.set(0.5, 0.5);

        this.alpha = 0;
        this.scale.set(2, 2);

    }

        /*
         * Passed to `gsap` `onUpdate` as a callback.
         * Simulates a custom plugin without going overboard
         */
    update(instance: any, tweenVal: any): void {

        instance.alpha = tweenVal.alpha || instance.alpha;
        instance.scale.set(tweenVal.scale || instance.scale.x, tweenVal.scale || instance.scale.y);
        instance.position.x = tweenVal.x || instance.position.x;
        instance.position.y = tweenVal.y || instance.position.y;
        instance.rotation = tweenVal.rotation || instance.rotation;

    }

        /*
         * Quick drop animation
         */
    drop(delay: number): void {

            // use tweenVal to build the logic for a quick custom plugin
        const tweenVal = { scale: 2, alpha: 0.5, x: this.position.x, y: this.position.y };

            // tween a quick drop
        gsap.to(tweenVal, 0.5, { scale: .4, alpha: 1, onUpdate: this.update, onUpdateParams: [this, tweenVal] });
        
    }

        /*
         * Moves card from one deck to the next
         */
    flip(x: number, y: number): Promise<any> {

            // use tweenVal to build the logic for a quick custom plugin
        const tweenVal = { x: this.position.x, y: this.position.y };

            // use a hard reference for scoping
        const _this: Card = this;

            // use promise for to signal end of animation
        const promise: Promise<any> = new Promise((resolve: any, reject: any) => {

            // tween the flip between decks
            gsap.to(tweenVal, 2, {
                x: x, y: y, onUpdate: this.update, onUpdateParams: [_this, tweenVal], onComplete: () => {
                    resolve(_this);
                }
            });

        });

            // when the card are done flipping add a small slide
        promise
            .then(( card: Card ) => {

                    // use tweenVal to build the logic for a quick custom plugin
                const tweenVal = { rotation: this.rotation };

                    // add a bit of rotation, just to be flashy :P
                gsap.to(tweenVal, 0.5, {
                    rotation: this.rotation + Math.random () * 0.125 - 0.125 / 2, onUpdate: this.update, onUpdateParams: [_this, tweenVal]
                });

            });

            // promise resolve will reset the timer
        return promise;

    }
}