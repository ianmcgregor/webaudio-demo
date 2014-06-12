'use strict';

var WebAudio = require('../../utils/web-audio.js'),
	AssetLoader = require('../../utils/asset-loader.js'),
	LoadingBar = require('./loading-bar.js');

function AbstractDemo(el, audioContext) {
	this.el = el;
	this.audio = new WebAudio(audioContext);
}

AbstractDemo.prototype = {
	play: function() {
		this.audio.play();
	},
	pause: function() {
		this.audio.pause();
	},
	load: function(url, fn) {
		LoadingBar.show();
		var loader = new AssetLoader.Loader(url);
			loader.crossOrigin = true;
			loader.onProgress.add(function(p) {
				LoadingBar.update(p);
			});
			loader.onComplete.addOnce(function(buffer) {
				loader.onProgress.removeAll();
				LoadingBar.hide();
				fn.call(this, buffer);
			}, this);
			loader.loadWebAudio(this.audio.context);
		return loader;
	},
	connectMicrophone: function(microphone) {
		this.microphone = microphone;
		this.audio.helpers.createMicrophoneSource(microphone.stream, this.node);
		this.node.connect(this.audio._gain);
	},
	disconnectMicrophone: function() {
		if(this.microphone) {
			this.microphone.disconnect();
			this.microphone = null;
		}
	},
	destroy: function() {
		this.pause();
		this.disconnectMicrophone();
	}
};

module.exports = AbstractDemo;
