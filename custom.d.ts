declare module "*.svg" {
    const value: any;
    export default value;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.mjs" {
    const value: any;
    export = value;
}

declare module "*.js" {
    const value: any;
    export = value;
}

declare global {
    var gsap: any;
}