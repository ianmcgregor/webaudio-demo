'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js');

function ScriptProcessor(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.node = this.audio.nodeFactory.scriptProcessor(2048, 0, 1, this.onProcess, this);

    this.pnl = new UIComponents.Panel(this.el, 'white noise');
//    this.dropdownType = new UIComponents.Dropdown(this.pnl.el, Model.wave, this.updateType, this);

}

ScriptProcessor.prototype = Object.create(AbstractDemo.prototype);
ScriptProcessor.prototype.constructor = ScriptProcessor;

ScriptProcessor.prototype.onProcess = function(event) {
    var output = event.outputBuffer.getChannelData(0);
    var l = output.length;
    for (var i = 0; i < l; i++) {
        output[i] = Math.random();
    }
};

ScriptProcessor.prototype.updateType = function(value) {
    if(!this.osc) { return; }
    this.osc.type = value;
    this.pnl.title = value;
};

ScriptProcessor.prototype.play = function() {
    this.audio.addNode(this.node);
};

ScriptProcessor.prototype.pause = function() {
    this.audio.removeNode(this.node);
};

ScriptProcessor.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = ScriptProcessor;
