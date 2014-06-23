'use strict';

var LoadingBar = require('./components/loading-bar.js'),
	UIComponents = require('./components/ui-components.js'),
	Keyboard = require('../utils/keyboard.js'),
	Reverb = require('./reverb.js'),
	Analyser = require('./analyser.js'),
	MultiTrack = require('./multi-track.js'),
	PanThreeD = require('./pan-three-d.js'),
	Filter = require('./filter.js'),
	MicrophoneInput = require('./microphone-input.js'),
	Oscillator = require('./oscillator.js'),
	Microphone = require('../utils/microphone.js'),
	Compressor = require('./compressor.js'),
	Distortion = require('./distortion.js'),
	Delay = require('./delay.js'),
	ScriptProcessor = require('./script-processor.js');

function GUI(el) {
	this.el = el;
	this.addLoader();
}

GUI.prototype.init = function(audioContext) {
	this.audioContext = audioContext;
	LoadingBar.hide();

	this.menu = new UIComponents.Panel(this.el);
	new UIComponents.Button(this.menu.el, 'Reverb', this.reverb, this, Keyboard.ONE);
	new UIComponents.Button(this.menu.el, 'Analyser', this.analyser, this, Keyboard.TWO);
	new UIComponents.Button(this.menu.el, 'MultiTrack', this.multiTrack, this, Keyboard.THREE);
	new UIComponents.Button(this.menu.el, 'Pan', this.pan, this, Keyboard.FOUR);
	new UIComponents.Button(this.menu.el, 'Filter', this.filter, this, Keyboard.FIVE);
	new UIComponents.Button(this.menu.el, 'Microphone', this.microphoneInput, this, Keyboard.SIX);
	new UIComponents.Button(this.menu.el, 'Oscillator', this.oscillator, this, Keyboard.SEVEN);
	new UIComponents.Button(this.menu.el, 'Compressor', this.compressor, this, Keyboard.EIGHT);
	new UIComponents.Button(this.menu.el, 'Distortion', this.distortion, this, Keyboard.NINE);
	new UIComponents.Button(this.menu.el, 'Delay', this.delay, this, Keyboard.ZERO);
	new UIComponents.Button(this.menu.el, 'Script', this.sciptProcessor, this);

	this.controls = new UIComponents.Panel(this.el);
	this.playButton = new UIComponents.ToggleButton(this.controls.el, 'PLAY', 'PAUSE', this.play, this.pause, this, Keyboard.SPACEBAR);
	this.microphone = new Microphone();
	if(this.microphone.isSupported) {
		this.micButton = new UIComponents.ToggleButton(this.controls.el, 'MIC ON', 'MIC OFF', this.connectMicrophone, this.disconnectMicrophone, this, Keyboard.M);
	}

	this.demoHolder = document.createElement('div');
	this.el.appendChild(this.demoHolder);

	this.delay();
};

GUI.prototype.reverb = function() {
	this.clearDemo();
	this.demo = new Reverb(this.demoHolder, this.audioContext);
};

GUI.prototype.analyser = function() {
	this.clearDemo();
	this.demo = new Analyser(this.demoHolder, this.audioContext);
};

GUI.prototype.multiTrack = function() {
	this.clearDemo(true);
	this.demo = new MultiTrack(this.demoHolder, this.audioContext);
};

GUI.prototype.pan = function() {
	this.clearDemo();
	this.demo = new PanThreeD(this.demoHolder, this.audioContext);
};

GUI.prototype.filter = function() {
	this.clearDemo();
	this.demo = new Filter(this.demoHolder, this.audioContext);
};

GUI.prototype.microphoneInput = function() {
	this.clearDemo(true, true);
	this.demo = new MicrophoneInput(this.demoHolder, this.audioContext);
};

GUI.prototype.oscillator = function() {
	this.clearDemo(true);
	this.demo = new Oscillator(this.demoHolder, this.audioContext);
};

GUI.prototype.compressor = function() {
	this.clearDemo();
	this.demo = new Compressor(this.demoHolder, this.audioContext);
};

GUI.prototype.distortion = function() {
	this.clearDemo();
	this.demo = new Distortion(this.demoHolder, this.audioContext);
};

GUI.prototype.sciptProcessor = function() {
	this.clearDemo();
	this.demo = new ScriptProcessor(this.demoHolder, this.audioContext);
};

GUI.prototype.delay = function() {
	this.clearDemo();
	this.demo = new Delay(this.demoHolder, this.audioContext);
};

GUI.prototype.connectMicrophone = function() {
	this.microphone.onConnected.add(this.microphoneConnected, this);
    this.microphone.onDenied.add(this.microphoneError, this);
    this.microphone.onError.add(this.microphoneError, this);
    this.microphone.connect();
};

GUI.prototype.microphoneConnected = function() {
	this.demo.connectMicrophone(this.microphone);
};

GUI.prototype.microphoneError = function() {
	this.micButton.reset();
};

GUI.prototype.disconnectMicrophone = function() {
	this.demo.disconnectMicrophone();
};

GUI.prototype.clearDemo = function(hideMicrophone, hideControls) {
	if(this.demo) {
		this.demo.destroy();
	}
	this.demoHolder.innerHTML = '';
	this.playButton.reset();
	if(this.micButton) {
		this.micButton.reset();

		if(hideMicrophone) {
			this.micButton.el.classList.add('hidden');
		}
		else {
			this.micButton.el.classList.remove('hidden');
		}
	}

	if(hideControls) {
		this.controls.el.classList.add('hidden');
	}
	else {
		this.controls.el.classList.remove('hidden');
	}
};

GUI.prototype.play = function() {
	this.demo.play();
};

GUI.prototype.pause = function() {
	this.demo.pause();
};

GUI.prototype.addLoader = function() {
	LoadingBar.show();
};

GUI.prototype.updateLoadProgress = function(p) {
	LoadingBar.update(p);
};

module.exports = GUI;
