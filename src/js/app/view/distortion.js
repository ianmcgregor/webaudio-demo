'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Distortion(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    // master gain > compressor > destination
    this.node = this.audio.nodeFactory.distortion();
    //this.audio._gain.connect(this.node);
    //this.node.connect(this.audio.context.destination);
    this.audio.addNode(this.node);

    this.panel = new UIComponents.Panel(el, 'Distortion');
    this.slider = new UIComponents.Slider(this.panel.el, 'amount', 0, 1, 0.0001, 0, this.update, this);
    this.panel.append(document.createElement('div'));
    this.onButton = new UIComponents.ToggleButton(this.panel.el, 'TURN OFF', 'TURN ON', this.off, this.on, this);

    var files = Model.audioFiles;
    for (var i in files) {
        var sound = this.audio.add(files[i].data);
        sound.addNode(this.audio.nodeFactory.gain());
        var control = new UIComponents.Panel(el, i);
        for (var j = 0; j < sound._node.length; j++) {
            this.createGainControls(sound._node[j], control.el);
        }
    }
}

Distortion.prototype = Object.create(AbstractDemo.prototype);
Distortion.prototype.constructor = Distortion;

Distortion.prototype.update = function() {
    this.node.curve = this.audio.helpers.distort(this.slider.value);
};

Distortion.prototype.on = function() {
    this.audio.addNode(this.node);
};

Distortion.prototype.off = function() {
    this.audio.removeNode(this.node);
};

Distortion.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Distortion;
