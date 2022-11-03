    // import packages
import * as PIXI from 'pixi.js';

    // local imports
import { RichText } from "./RichText";
import { AbstractApplication } from "../AbstractApplication";

    // assets
import contentEmoji from "../../assets/emojis/content.svg";
import smileyEmoji from "../../assets/emojis/smiley.svg";
import meltedEmoji from "../../assets/emojis/melted.svg";
import heartsEmoji from "../../assets/emojis/hearts.svg";
import starsEmoji from "../../assets/emojis/stars.svg";
import roflmaoEmoji from "../../assets/emojis/roflmao.svg";
import upside_downEmoji from "../../assets/emojis/upside_down.svg";
import happyEmoji from "../../assets/emojis/happy.svg";
import cloudsEmoji from "../../assets/emojis/clouds.svg";
import kissEmoji from "../../assets/emojis/kiss.svg";
import winkEmoji from "../../assets/emojis/wink.svg";
import angelEmoji from "../../assets/emojis/angel.svg";
import funnyEmoji from "../../assets/emojis/funny.svg";
import sweatEmoji from "../../assets/emojis/sweat.svg";
import excitedEmoji from "../../assets/emojis/excited.svg";
import funny_tearsEmoji from "../../assets/emojis/funny_tears.svg";
import loveEmoji from "../../assets/emojis/love.svg";

export class MyApplication extends AbstractApplication {

    private currentRichText: RichText;

    private emojis: any[] = [];

    private text: string[] = [
        "I love interviews.",
        "Softgames is the best.",
        "Wow! that so funny",
        "Winter is just around the corner.",
        "It sunny today!",
        "Who wants ice cream?",
        "There only so many hours in a day.",
        "Thank you for coming.",
        "Oh Canada!",
        "Wait a second..."

    ];

    constructor() {

        super();

    }

        /*
        * Preloads assets. For some reason it not working
        */
    async preloadAssets(): Promise<any> {

        const manifest = {
            bundles: [
                {
                    name: 'emojis',
                    assets: [
                        {
                            name: 'contentEmoji',
                            srcs: "./assets/emojis/content.svg"
                        },
                        {
                            name: 'smileyEmoji',
                            srcs: "./assets/emojis/smiley.svg"
                        },
                        {
                            name: 'meltedEmoji',
                            srcs: "./assets/emojis/melted.svg"
                        },
                        {
                            name: 'heartsEmoji',
                            srcs: "./assets/emojis/hearts.svg"
                        },
                        {
                            name: 'starsEmoji',
                            srcs: "./assets/emojis/stars.svg"
                        },
                        {
                            name: 'roflmaoEmoji',
                            srcs: "./assets/emojis/roflmao.svg"
                        },
                        {
                            name: 'happyEmoji',
                            srcs: "./assets/emojis/happy.svg"
                        },
                        {
                            name: 'cloudsEmoji',
                            srcs: "./assets/emojis/clouds.svg"
                        },
                        {
                            name: 'kissEmoji',
                            srcs: "./assets/emojis/kiss.svg"
                        },
                        {
                            name: 'winkEmoji',
                            srcs: "./assets/emojis/wink.svg"
                        },
                        {
                            name: 'angelEmoji',
                            srcs: "./assets/emojis/angel.svg"
                        },
                        {
                            name: 'funnyEmoji',
                            srcs: "./assets/emojis/funny.svg"
                        },
                        {
                            name: 'sweatEmoji',
                            srcs: "./assets/emojis/sweat.svg"
                        },
                        {
                            name: 'excitedEmoji',
                            srcs: "./assets/emojis/excited.svg"
                        },
                        {
                            name: 'funny_tearsEmoji',
                            srcs: "./assets/emojis/funny_tears.svg"
                        },
                        {
                            name: 'loveEmoji',
                            srcs: "./assets/emojis/love.svg"
                        },
                    ],
                }
            ]
        };

            // for some reason this isnt working properly. Ill just do it manually
            // kinf od runnign out of time
        // await PIXI.Assets.init({ manifest });
        // const emojiAssets = await PIXI.Assets.loadBundle("emojis");

        const bundles: any = {};
        for (const bundleData of manifest.bundles) {

            const assets: any = {};
            bundles[bundleData.name] = assets;

            for (const assetData of bundleData.assets) {

                const source = assetData.srcs;
                await PIXI.Assets.load(source);
                const texture: PIXI.Texture = PIXI.Texture.from(source);
                
                assets[assetData.name] = texture;

            }

        }
        
        console.log(bundles)

        this.emojis = bundles.emojis;

        return bundles;
    }

        /*
        * pick random sprite for RichText
        */
    getRandomEmoji(): PIXI.Sprite {

            // pick random texture as base for sprite
        const values: any = Array.from(Object.values(this.emojis));
        const texture: any = values[values.length * Math.random() << 0];

            // return random sprite
        return PIXI.Sprite.from(texture);

    }

        /*
        * pick random text for RichText
        */
    getRandomText(): string {

            // pick random text
        const values: any = Array.from(Object.values(this.text));
        return values[values.length * Math.random() << 0];

    }

        /*
        * Creates new RichText and animates it, cleans up and spawn a new one.
        */
    async spawnText(): Promise<any> {

        const width: number = window.innerWidth;
        const height: number = window.innerHeight;

        const minX: number = 0;
        const maxX: number = width / 2;

        const minY: number = 0;
        const maxY: number = height * 0.75;

        const xt:number = Math.random();
        const positionX: number = minX * xt + maxX * (1.0 - xt);

        const yt: number = Math.random();
        const positionY: number = minY * yt + maxY * (1.0 - yt);

        const t: number = Math.random();
        const fontSize: number = Math.round(15 * t + 35 * (1.0 - t)); 

        const currentRichText: RichText = new RichText(fontSize, width - positionX );
        currentRichText.position.set(positionX, positionY);


            // random mize text or money quote!
        if (Math.random() < 0.25) {

                // premade money text
            const price = Math.random() * 100;
            currentRichText.queueText(this.getRandomText());
            currentRichText.queueText("Your total will be:");
            await currentRichText.queueSprite(PIXI.Sprite.from("./assets/money.png"));
            currentRichText.queueText(price.toFixed(2));

        } else {

            for (let i = 0; i < 3; i++) {

                    // randomize either a text or sprite to queue to the RichText
                if (Math.random() > 0.5) {

                    currentRichText.queueText(this.getRandomText());

                } else {

                    await currentRichText.queueSprite(this.getRandomEmoji());

                }

            }

        }

            // add to the stage
        this.stage.addChild(currentRichText);

            // start animating the text for 2 seconds.
        currentRichText.start()
            .then((richText: RichText) => {

                    // all done remove from stage and hope for clean up sometime soon
                this.stage.removeChild(richText);

                    // make a new text
                this.spawnText();

            });
    }

        /*
        * Creates new RichText and animates it, cleans up and spawn a new one.
        */
    start(): void {

        super.start();

            // preload assets. Not working for some reason???
        this.preloadAssets()
            .then(() => {

                    // assets loaded now animate
                this.spawnText();

            });
       
    }

}