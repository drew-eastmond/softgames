import "../../styles/main.scss";

import * as PIXI from 'pixi.js';

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

import { MyApplication } from "./MyApplication";

console.log("start"); 

const application = new MyApplication();
application.start();

console.log("end");

