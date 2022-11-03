import "../../styles/main.scss";

import * as PIXI from 'pixi.js';

import { MyApplication } from "./MyApplication";

console.log("start");

const application: MyApplication = new MyApplication();
application.start();