import * as PIXI from 'pixi.js';

import { Deck } from "./Deck";
import { Card } from "./Card";
import { AbstractApplication } from '../AbstractApplication';

export class MyApplication extends AbstractApplication{

    private deckA: Deck;
    private deckB: Deck;

    private fpsCount: number = 0; 

    constructor() {

        super();

            // build decks
        this.buildDecks();

        this.frame.bind(this);
    }

        /*
         * build the decks and addcards
         */
    private buildDecks(): void {

        const centerX: number = window.innerWidth / 2;
        const centerY: number = window.innerHeight / 2;

        this.deckA = new Deck();
        this.deckB = new Deck();

        const deckA = this.deckA;
        const deckB = this.deckB;

        const stage = this.stage;
        stage.sortableChildren = true;

        deckA.nextDeck = deckB;
        deckB.nextDeck = deckA;

        deckA.position.x = centerX - centerX / 2;
        deckA.position.y = centerY;
        stage.addChild(deckA);


        this.stage.addChild(this.deckB);
        deckB.position.x = centerX + centerX / 2;
        deckB.position.y = centerY;

        const variance = 30;        

        for (let i = 0; i < 144; i++) {


            const card: any = new Card();
            card.position.x = deckA.position.x + Math.random() * variance - variance/2;
            card.position.y = deckA.position.y + Math.random() * variance - variance/2;
            card.rotation = Math.random() * 0.25;
            stage.addChild(card);

            deckA.addCard(card);

            card.drop(i * 0.025);

        }



    }

        /*
         * start deck and start timer for FPS count
         */
    start(): void {

        super.start();

        this.deckA.start();

        setInterval(() => {

                // straight forward counting of frames
            document.getElementById("fps_counter").innerText = String(this.fpsCount);

                // reset the fps
            this.fpsCount = 0;

        }, 1000);
    }

        /*
         * increment FPS count
         */
    frame() {

        super.frame();

        this.fpsCount++;
        
    }


}