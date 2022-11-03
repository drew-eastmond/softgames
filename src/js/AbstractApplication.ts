import * as PIXI from 'pixi.js';

export class AbstractApplication {

    application: any;
    stage: PIXI.Container;

    view: HTMLCanvasElement;

    private resizeDebounce: any;

        /*
         * create enviroment for subclasses
         */
    constructor() {

        this.application = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        this.view = this.application.view;

        document.body.appendChild(this.view);

        this.stage = this.application.stage;

        window.addEventListener("resize", (e) => {

            this.resize(window.innerWidth, window.innerHeight);

        });

    }

        /*
         * start requestAnimationFrame, and start logic in sublcasses
         */
    start(): void {

        const _this: AbstractApplication = this;

        requestAnimationFrame(() => {

            _this.frame();

        });



    }

        /*
         * recall requestAnimationFrame
         */
    frame(): void {

        const _this: AbstractApplication = this;

        requestAnimationFrame(() => {
            _this.frame();
        });

    }

        /*
         * resize canvas
         */
    resize(width: number, height: number): void {

        // stop the browser from reset the canvas size too much. Can shred memory recklessy
        // small delay to minimize the actually resize operation
        clearTimeout(this.resizeDebounce);
        this.resizeDebounce = setTimeout(() => {

            const renderer = PIXI.autoDetectRenderer();

            this.view.width = width;
            this.view.height = height;

            // this part adjusts the ratio:
            renderer.resize(width, height);

        }, 200);

    }

}