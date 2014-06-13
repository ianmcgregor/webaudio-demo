'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
  UIComponents = require('./components/ui-components.js'),
  Model = require('../model/audio-model.js');

function Delay(el, audioContext) {
  AbstractDemo.call(this, el, audioContext);

  this.sound = this.audio.add(Model.getFile('Piano').data);
  this.node = this.audio.nodeFactory.delay(0.5);

  this.gainNode = this.audio.context.createGainNode();
  this.gainNode.gain.value = 0.5;

  this.audio.addNode(this.gainNode);

  this.node.connect(this.gainNode);
  this.gainNode.connect(this.node);

  this.panel = new UIComponents.Panel(el, 'Delay');
  this.sliderSeconds = new UIComponents.Slider(this.panel.el, 'seconds', 0.1, 10, 0.1, this.node.delayTime.value, this.update, this);
}

Delay.prototype = Object.create(AbstractDemo.prototype);
Delay.prototype.constructor = Delay;

Delay.prototype.update = function(value) {
  this.node.delayTime.value = value;
};

Delay.prototype.connectMicrophone = function(microphone) {
  this.microphone = microphone;
  this.micSource = this.audio.helpers.createMicrophoneSource(microphone.stream, this.node);
  //this.node.connect(this.audio._gain);
};

Delay.prototype.destroy = function() {
  AbstractDemo.prototype.destroy.call(this);
  this.panel.remove();
};

module.exports = Delay;
