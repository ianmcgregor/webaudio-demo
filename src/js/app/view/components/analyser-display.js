'use strict';

function AnalyserDisplay() {
    this.analysers = [];
    this.draw();
}

AnalyserDisplay.prototype.addFreq = function(node, el) {
    return this.addDisplay(AnalyserDisplay.Freq, node, el);
    /*if(el.tagName.toLowerCase() === 'canvas') {
    }
    else {
        //this.analysers.push(new AnalyserDisplay.HTMLView(node, el));
    }*/
};

AnalyserDisplay.prototype.addWave = function(node, el) {
    return this.addDisplay(AnalyserDisplay.Wave, node, el);
};

AnalyserDisplay.prototype.addLevels = function(node, el) {
    return this.addDisplay(AnalyserDisplay.Levels, node, el);
};

AnalyserDisplay.prototype.addDisplay = function(Class, node, el) {
    el = el || this.getCanvas();
    var display = new Class(node, el);
    this.analysers.push(display);
    return display;
};

AnalyserDisplay.prototype.getCanvas = function(width, height) {
    width = width || 512;
    height = height || 256;
    var c = document.createElement('canvas');
    c.width = width;
    c.height = height;
    return c;
};

AnalyserDisplay.prototype.draw = function() {
    window.requestAnimationFrame(this.draw.bind(this));
    var l = this.analysers.length;
    for (var i = 0; i < l; i++) {
        this.analysers[i].draw();
    }
};

// frequencies

AnalyserDisplay.Freq = function(node, el) {
    this.canvas = el;
    this.context = this.canvas.getContext('2d');
    this.node = node;
    this.background = null;
};

AnalyserDisplay.Freq.prototype.draw = function() {
    var width = this.canvas.width,
        height = this.canvas.height,
        frequencyBinCount = this.node.frequencyBinCount,
        barWidth = Math.round(width/frequencyBinCount),
        barSpacing = 0;

    if(this.background) {
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, width, height);        
    }
    else {
        this.context.clearRect(0, 0, width, height);
    }

    var freqByteData = new Uint8Array(frequencyBinCount);
    this.node.getByteFrequencyData(freqByteData);

    for (var i = 0; i < frequencyBinCount; i++) {
        var magnitude = freqByteData[i];
        var percent = magnitude / 256;
        var hue = i/frequencyBinCount * 360;
        this.context.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        this.context.fillRect(barWidth * i, height, barWidth - barSpacing, 0 - height * percent);
    }
};

// waveform

AnalyserDisplay.Wave = function(node, el) {
    this.canvas = el;
    this.context = this.canvas.getContext('2d');
    this.node = node;
    this.thickness = 1;
    this.background = null;
};

AnalyserDisplay.Wave.prototype.draw = function() {
    var width = this.canvas.width,
        height = this.canvas.height,
        frequencyBinCount = this.node.frequencyBinCount,
        barWidth = Math.round(width/frequencyBinCount);

    if(this.background) {
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, width, height);        
    }
    else {
        this.context.clearRect(0, 0, width, height);
    }

    var freqByteData = new Uint8Array(frequencyBinCount);
    this.node.getByteTimeDomainData(freqByteData);

    for (var i = 0; i < frequencyBinCount; i++) {
        var magnitude = freqByteData[i];
        var percent = magnitude / 256;
        var hue = i/frequencyBinCount * 360;
        this.context.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        this.context.fillRect(barWidth * i, height - height * percent - 1, this.thickness, this.thickness);
    }
};

AnalyserDisplay.Levels = function(node, el) {
    this.canvas = el;
    this.context = this.canvas.getContext('2d');
    this.node = node;
};

AnalyserDisplay.Levels.prototype.draw = function() {
    var width = this.canvas.width,
        height = this.canvas.height,
        frequencyBinCount = this.node.frequencyBinCount;

    if(this.background) {
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, width, height);        
    }
    else {
        this.context.clearRect(0, 0, width, height);
    }

    var freqByteData = new Uint8Array(frequencyBinCount);
    this.node.getByteFrequencyData(freqByteData);

    var length = freqByteData.length,
        total = 0;
    for (var i = 0; i < length; i++) {
        total += freqByteData[i];
    }
    var average = total / length;
    var percent = average / 128;

    var gradient = this.context.createLinearGradient(0, 0, width * percent, 0);
    gradient.addColorStop(0, 'hsl(128, 100%, 50%)');
    gradient.addColorStop(1, 'hsl(360, 100%, 50%)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, width * percent, height);
};

module.exports = AnalyserDisplay;
