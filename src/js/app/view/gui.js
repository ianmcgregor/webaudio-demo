'use strict';

var hasher = require('hasher'),
	LoadingBar = require('./components/loading-bar.js'),
	UIComponents = require('./components/ui-components.js'),
	Keyboard = require('../utils/keyboard.js'),
	Microphone = require('../utils/microphone.js');

var Demo = {
	Reverb: require('./reverb.js'),
	Analyser: require('./analyser.js'),
	MultiTrack: require('./multi-track.js'),
	PanThreeD: require('./pan-three-d.js'),
	Filter: require('./filter.js'),
	MicrophoneInput: require('./microphone-input.js'),
	Oscillator: require('./oscillator.js'),
	Compressor: require('./compressor.js'),
	Distortion: require('./distortion.js'),
	Delay: require('./delay.js'),
	ScriptProcessor: require('./script-processor.js'),
	Sequencer: require('./sequencer.js')
};

function GUI(el) {
	this.el = el;
	this.addLoader();
}

GUI.prototype.init = function(audioContext) {
	this.audioContext = audioContext;
	LoadingBar.hide();

	this.menu = new UIComponents.Panel(this.el);
	for(var key in Demo) {
		new UIComponents.Button(this.menu.el, key, this.changeDemo, this);
	}

	this.controls = new UIComponents.Panel(this.el);
	this.playButton = new UIComponents.ToggleButton(this.controls.el, 'PLAY', 'PAUSE', this.play, this.pause, this, Keyboard.SPACEBAR);
	this.microphone = new Microphone();
	if(this.microphone.isSupported) {
		this.micButton = new UIComponents.ToggleButton(this.controls.el, 'MIC ON', 'MIC OFF', this.connectMicrophone, this.disconnectMicrophone, this, Keyboard.M);
	}

	this.demoHolder = document.createElement('div');
	this.el.appendChild(this.demoHolder);

	hasher.changed.add(this.onHashChange, this);
	hasher.initialized.add(this.onHashChange, this);
	hasher.init();
};

GUI.prototype.onHashChange = function(hash) {
	this.setDemo(hash);
};

GUI.prototype.changeDemo = function(btn) {
	this.setDemo(btn.innerHTML);
};

GUI.prototype.setDemo = function(name) {
	var hideMicrophone = name === 'MultiTrack' || name === 'MicrophoneInput' || name === 'Oscillator' || name === 'Sequencer';
	var hideControls = name === 'MicrophoneInput';
	this.clearDemo(hideMicrophone, hideControls);
	this.demo = new Demo[name](this.demoHolder, this.audioContext);
	hasher.changed.active = false;
	hasher.setHash(name);
	hasher.changed.active = true;
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
