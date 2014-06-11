'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js');

function Micophone(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.pnlInfo = new UIComponents.Panel(this.el, 'Allow micophone to begin');

    navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    if(!!navigator.getUserMedia_) {
        this.getMicrophone();
    }
    else {
        this.pnlInfo.remove();
        this.displayError('ERROR: getUserMedia not available in this browser');
    }
}

Micophone.prototype = Object.create(AbstractDemo.prototype);
Micophone.prototype.constructor = Micophone;

Micophone.prototype.getMicrophone = function() {
    var self = this;
    navigator.getUserMedia_( {audio:true}, function(stream) {
        self.onSuccess(stream);
    }, function(e) {
        self.onError(e);
    });
};

Micophone.prototype.onSuccess = function(stream) {
    var mediaStreamSource = this.audio.context.createMediaStreamSource( stream );
        mediaStreamSource.connect( this.audio._gain );

    this.node = this.audio.nodeFactory.analyser(1024);
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    var display = new AnalyserDisplay();
    var panelWave = new UIComponents.Panel(this.el, 'Wave');
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    panelWave.append(wave.canvas);

    this.pnlInfo.remove();
};

Micophone.prototype.onError = function(e) {
    console.log(e);
    if(e.name === 'PermissionDeniedError') {
        this.displayError('ERROR: Permission denied. Go to "chrome://settings/content > media > manage exceptions" to undo in chrome.');
    }
    else {
        this.displayError('ERROR: ' + e.message);
    }

    this.pnlInfo.remove();
};

Micophone.prototype.displayError = function(msg) {
    if(!this.pnlError) {
        this.pnlError = new UIComponents.Panel(this.el);
        this.pnlError.el.classList.add('Panel--error');
    }
    this.pnlError.title = msg;
};

Micophone.prototype.play = function() {
    this.getMicrophone();
};

Micophone.prototype.updateSmoothing = function(value) {
    this.node.smoothingTimeConstant = parseFloat(value, 10);
};

Micophone.prototype.updateFFTSize = function(value) {
    this.node.fftSize = parseInt(value);
};

Micophone.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Micophone;