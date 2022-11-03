// import packages
import * as PIXI from 'pixi.js';
import { gsap, Linear } from "gsap";

export class FireEmber extends PIXI.Container{

	private animation: PIXI.AnimatedSprite;

	constructor(spritesheet: PIXI.Spritesheet) {

		super();

			// spritesheet is ready to use!
		const animation = new PIXI.AnimatedSprite(spritesheet.animations.flame);

		animation.anchor.set(0.5, 1);

		const t = Math.random();
		animation.animationSpeed = 0.1 * t + 0.2 * (1.0 - t);
		animation.autoUpdate = true;
		animation.loop = true;
		animation.play();

		this.addChild(animation);

		animation.blendMode = PIXI.BLEND_MODES.ADD;

		this.animation = animation;

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
		 * Give each flame a small slow away for randomness.
		 */
	sway(rotate: number): void {

		const tweenVal: any = {
			alpha: this.alpha,
			rotation: -rotate
		};

		const t = Math.random();
		const animationTime = 15 * t + 20 * (1.0 - t);
		const delay = Math.random() * 5;
		gsap.to(tweenVal, animationTime, { alpha: this.alpha * 0.75, delay: delay, rotation: rotate, repeat: -1, yoyo: true, ease: Linear.easeNone, onUpdate: this.update, onUpdateParams: [this, tweenVal] });

    }
}