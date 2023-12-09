/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Snow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Snow/costumes/costume1.svg", {
        x: -185.5375243724685,
        y: -7.797252857822514
      }),
      new Costume("costume2", "./Snow/costumes/costume2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Snow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.stage.vars.me = this.random(30, -30);
    this.effects.ghost = 10;
    this.goto(this.random(-300, 300), 300);
    this.direction = this.random(170, 150);
    while (!(this.compare(140, this.x) < 0 || this.compare(this.y, -100) < 0)) {
      this.y -= 2;
      this.direction += 0.05;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.stage.vars.tick = 0;
    this.stage.vars.fade = 0.7;
    while (true) {
      this.createClone();
      yield* this.wait(this.toNumber(this.stage.vars.fade));
      this.stage.vars.tick += 4;
      if (this.compare(0, this.stage.vars.fade) < 0) {
        this.stage.vars.fade -= 0.1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "costume1";
    while (true) {
      this.size = this.random(20, 40);
      if (this.compare(this.size, 40) > 0) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.costume = this.random(1, 2);
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.compare(this.y, -100) < 0) {
        this.visible = false;
      }
      yield;
    }
  }
}
