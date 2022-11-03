import * as PIXI from 'pixi.js';
import { gsap } from "gsap";

export class RichText extends PIXI.Container {

    private textCursor: number = 0;
    private lineCursor: number = 0;
    private fontSize: number;
    private textWidth: number;

    private defaultStyling: Object;

    private spacingText: PIXI.Text;

    constructor(fontSize: number, textWidth: number) {

        super();

        this.fontSize = fontSize;
        this.textWidth = textWidth;

        this.spacingText = new PIXI.Text(" ");

            // currently no checks if the colour is close to black
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        this.defaultStyling = {
            fontFamily: 'Arial',
            fontSize: fontSize,
            fill: "0x" + randomColor,
            align: 'center',
        };

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
        * starts the tween, return promise so the next RichText can be made
        */
    async start(): Promise<any> {

        const tweenVal = { alpha: 1 };

        const _this = this;

        // use promise for to signal end of animation
        const promise: Promise<any> = new Promise((resolve: any, reject: any) => {

            // tween the flip between decks
            gsap.to(tweenVal, 0.25, {
                delay: 1.75,
                alpha: 0,
                onUpdate: this.update,
                onUpdateParams: [_this, tweenVal],
                onComplete: () => {
                    resolve(_this);
                }
            });

        });

        return promise;
    }

        /*
        * add Sprite to the Container and update cursor
        */
    async queueSprite(sprite: PIXI.Sprite): Promise<any> {

        await new Promise(function(resolve, reject):void {
            let interval = setInterval(() => {
                if (sprite.width > 1) {
                    resolve(true);
                    clearInterval(interval);
                }
            }, 20);
        });

            // rescale the image to the font size
        const scale: number = this.fontSize / sprite.height;
        sprite.scale.set(scale);

            // test for line breaks. Simple line break test
        if (this.textCursor + sprite.width > this.textWidth) {

            this.textCursor = 0;
            this.lineCursor += this.fontSize + 5;

        }

            // reposition the sprite base on the cursor, and add as a child to this container
        sprite.x = this.textCursor;
        sprite.y = this.lineCursor;
        this.addChild(sprite);

            // update the `textCursor`
        this.textCursor += sprite.width + this.spacingText.width;

    }

        /*
        * add Text to the Container and update cursor
        */
    queueText(text: string): void {

        const pixiText: PIXI.Text = new PIXI.Text(text, this.defaultStyling);

        // test for line breaks. Simple line break test
        if (this.textCursor + pixiText.width > this.textWidth) {

            this.textCursor = 0;
            this.lineCursor += this.fontSize + 5;

        }

            // reposition the text base on the cursor, and add as a child to this container
        pixiText.x = this.textCursor;
        pixiText.y = this.lineCursor;
        this.addChild(pixiText);

            // update the `textCursor`
        this.textCursor += pixiText.width + this.spacingText.width;
    }
}