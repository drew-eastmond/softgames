	// import packages
import * as PIXI from 'pixi.js';

import { AbstractApplication } from "../AbstractApplication";
import { DarkEmber } from './DarkEmber';
import { FireEmber } from './FireEmber';

export class MyApplication extends AbstractApplication {

	private fireEmbers: FireEmber[] = [];
	private darkEmbers: DarkEmber[] = [];

    constructor() {

        super();

		// quick script to write data for console...
		const atlasData: any = {
			frames: {
				flame0: {
					frame: { x: 0, y: 0, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame1: {
					frame: { x: 0, y: 128, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame2: {
					frame: { x: 0, y: 256, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame3: {
					frame: { x: 0, y: 384, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame4: {
					frame: { x: 0, y: 512, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame5: {
					frame: { x: 128, y: 0, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame6: {
					frame: { x: 128, y: 128, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame7: {
					frame: { x: 128, y: 256, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame8: {
					frame: { x: 128, y: 384, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame9: {
					frame: { x: 128, y: 512, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame10: {
					frame: { x: 256, y: 0, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame11: {
					frame: { x: 256, y: 128, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame12: {
					frame: { x: 256, y: 256, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame13: {
					frame: { x: 256, y: 384, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame14: {
					frame: { x: 256, y: 512, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame15: {
					frame: { x: 384, y: 0, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame16: {
					frame: { x: 384, y: 128, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame17: {
					frame: { x: 384, y: 256, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame18: {
					frame: { x: 384, y: 384, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame19: {
					frame: { x: 384, y: 512, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame20: {
					frame: { x: 512, y: 0, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame21: {
					frame: { x: 512, y: 128, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame22: {
					frame: { x: 512, y: 256, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame23: {
					frame: { x: 512, y: 384, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
				flame24: {
					frame: { x: 512, y: 512, w: 128, h: 128 },
					sourceSize: { w: 128, h: 128 },
					spriteSourceSize: { x: 0, y: 0, w: 128, h: 128 }
				},
			},
			meta: {
				image: './assets/fireSheet5x5.png',
				format: 'RGBA8888',
				size: { w: 640, h: 640 },
				scale: 1
			},
			animations: {
				flame: ["flame0", "flame1", "flame2", "flame3", "flame4", "flame5", "flame6", "flame7", "flame8", "flame9", "flame10", "flame11", "flame12", "flame13", "flame14", "flame15", "flame16", "flame17", "flame18", "flame19", "flame20", "flame21", "flame22", "flame23", "flame24"] //array of frames by name
			}
		};


		// Create the SpriteSheet from altas
		const spritesheet = new PIXI.Spritesheet(
			PIXI.BaseTexture.from(atlasData.meta.image),
			atlasData
		);

		// let the spritesheet do it thing...
		spritesheet.parse()
			.then(() => {

				const width:number = window.innerWidth;
				const height: number = window.innerHeight;

				const container: PIXI.Container = new PIXI.Container();

					// big flames
				const fireEmberA = new FireEmber(spritesheet);
				fireEmberA.position.set(width / 2, height * 0.85);
				fireEmberA.scale.set(6);
				fireEmberA.alpha = 0.7;
				fireEmberA.sway(Math.PI / 32);
				container.addChild(fireEmberA);

				const fireEmberB = new FireEmber(spritesheet);
				fireEmberB.position.set(width / 2, height * 0.75);
				fireEmberB.scale.set(5);
				fireEmberB.alpha = 0.7;
				fireEmberB.sway(-Math.PI / 64);
				container.addChild(fireEmberB);

				const fireEmberC = new FireEmber(spritesheet);
				fireEmberC.position.set(width / 2, height * 0.8);
				fireEmberC.scale.set(9, 3);
				fireEmberC.alpha = 0.5;
				fireEmberC.sway(-Math.PI / 16);
				container.addChild(fireEmberC);

				const fireEmberD = new FireEmber(spritesheet);
				fireEmberD.position.set(width / 2, height * 0.8);
				fireEmberD.scale.set(8, 6);
				fireEmberD.alpha = 0.5;
				fireEmberD.sway(Math.PI / 16);
				container.addChild(fireEmberD);

				const fireEmberE = new FireEmber(spritesheet);
				fireEmberE.position.set(width / 2, height * 0.85);
				fireEmberE.scale.set(9, 9);
				fireEmberE.alpha = 0.3;
				fireEmberE.sway(Math.PI / 64);
				container.addChild(fireEmberE);

				this.stage.addChild(container);

				for (var i = 0; i < 4; i++) {

						// smaller dark embers
					const darkEmber: DarkEmber = new DarkEmber();
					darkEmber.scale.set(0.125, 0.25);
					darkEmber.position.set(width / 2, height * Math.random());
					this.stage.addChild(darkEmber);

					this.darkEmbers.push(darkEmber);

				}

			});

    }

		/*
		 * start the frame ticker for each ember
		 */
	start() {

		super.start();

		this.application.ticker.add((delta: number) => {

			for (const darkEmber of this.darkEmbers) {

					// give each dark ember a chance to update it position
				darkEmber.frame(delta);

            }
		});
		
		

	}

}