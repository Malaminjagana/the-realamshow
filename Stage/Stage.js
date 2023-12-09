/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 243.46063232421875,
        y: 192.07638549804688
      }),
      new Costume("Screenshot (21)", "./Stage/costumes/Screenshot (21).svg", {
        x: 261.2406026260937,
        y: 187.9876345278193
      }),
      new Costume("Screenshot (22)", "./Stage/costumes/Screenshot (22).png", {
        x: 480,
        y: 355
      }),
      new Costume("Screenshot (23)", "./Stage/costumes/Screenshot (23).svg", {
        x: 267.0740966796876,
        y: 182.62960815429688
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 226.1013726219889,
        y: 92.106883653723
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 172.7353678080816,
        y: 89.83176212823808
      })
    ];

    this.sounds = [
      new Sound(
        "imma show you how great i am edit - Google Search - Google Chrome 2023-04-08 09-27-44",
        "./Stage/sounds/imma show you how great i am edit - Google Search - Google Chrome 2023-04-08 09-27-44.wav"
      ),
      new Sound("click", "./Stage/sounds/click.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.me = 25;
    this.vars.tick = 420;
    this.vars.fade = -0.09999999999999998;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone(
        "imma show you how great i am edit - Google Search - Google Chrome 2023-04-08 09-27-44"
      );
      yield;
    }
  }

  *whenKeySpacePressed() {
    yield* this.playSoundUntilDone("click");
  }

  *whenKeySpacePressed2() {
    this.costumeNumber++;
  }

  *whenGreenFlagClicked2() {
    this.costume = "backdrop1";
  }
}
