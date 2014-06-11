'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js'),
    Model = require('../model/audio-model.js');

function Oscillator(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.osc = this.audio.context.createOscillator();
    this.osc.type = 'sine';
    this.osc.frequency.value = 100;
    this.audio._gain.value = 0.2;
    this.osc.connect(this.audio._gain);
    this.osc.start(0);

    this.node = this.audio.nodeFactory.analyser(2048);
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);
    
    this.pnl = new UIComponents.Panel(this.el, this.osc.type);
    this.dropdownType = new UIComponents.Dropdown(this.pnl.el, Model.wave, this.updateType, this);
    this.sliderFreq = new UIComponents.Slider(this.pnl.el, 'Frequency', 0, 1, 0.01, 0.5, this.updateFreq, this);
    
    var display = new AnalyserDisplay();
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    this.pnl.append(wave.canvas);
}

Oscillator.prototype = Object.create(AbstractDemo.prototype);
Oscillator.prototype.constructor = Oscillator;

Oscillator.prototype.updateType = function(value) {
    this.osc.type = value;
    this.pnl.title = value;
};

Oscillator.prototype.updateFreq = function(value) {
    this.osc.frequency.value = this.audio.effects.getFrequency(value);
};

Oscillator.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Oscillator;