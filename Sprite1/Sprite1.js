/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 199.97931,
        y: 143.18945758361815
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("click", "./Sprite1/sounds/click.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}
