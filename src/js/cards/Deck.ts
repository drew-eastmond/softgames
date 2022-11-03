import * as PIXI from 'pixi.js';
import { gsap } from "gsap";

import { Card } from "./Card";

export class Deck extends PIXI.Container {

    private cards: Card[] = [];
    nextDeck: Deck;

    zCount: number = 0;

        /*
         * Entry point to start logic
         */
    start(): void {

            // start flipping cards
        this.flipCard();

    }

        /*
         * flips cards one by one
         */
    flipCard(): void {

        setTimeout(() => {

            const nextDeck: Deck = this.nextDeck; 

            // nextDeck.getGlobalPosition().x;

            const _this = this;

            if (this.cards.length) {

                const card = this.cards.pop();

                // increase the zIndex so new card appear over old cards
                card.zIndex = this.zCount++;

                card.flip(nextDeck.position.x, nextDeck.position.y)
                    .then((card) => {

                        // add the card to the deck


                    })
                    .then(function () {

                        _this.flipCard();
                    })

            } else {

                    // completed the deck

            }

            

        }, 1000);
            

    }

        /*
         * Keeps references of all cards and updates zIndex
         */
    addCard(card: Card): void {

        card.zIndex = this.zCount++;

        this.cards.push(card);

    }


}