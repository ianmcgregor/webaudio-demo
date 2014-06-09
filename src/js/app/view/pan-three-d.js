'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function PanThreeD(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.sound = this.audio.add(Model.getFile('Piano').data);
    this.node = this.audio.nodeFactory.pan();
    this.sound.addNode(this.node);

    this.panel = new UIComponents.Panel(el, 'Pan');

    //this.sliderX = new UIComponents.Slider(this.panel.el, 'x', -Math.PI, Math.PI, 0.01, 0, this.update, this);
    this.sliderX = new UIComponents.Slider(this.panel.el, 'x', -1, 1, 0.01, 0, this.update, this);
    this.sliderY = new UIComponents.Slider(this.panel.el, 'y', -1, 1, 0.01, 0, this.update, this);
    this.sliderZ = new UIComponents.Slider(this.panel.el, 'z', -1, 1, 0.01, 0, this.update, this);
}

PanThreeD.prototype = Object.create(AbstractDemo.prototype);
PanThreeD.prototype.constructor = PanThreeD;

PanThreeD.prototype.update = function() {
    //this.audio.effects.panX(this.node, value);
    //console.log(value);
    this.audio.effects.pan(this.node, this.sliderX.value, this.sliderY.value, this.sliderZ.value);
};

PanThreeD.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
    this.panel.remove();
};

module.exports = PanThreeD;
