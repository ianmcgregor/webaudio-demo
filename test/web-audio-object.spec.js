'use strict';

var AssetLoader = require('../src/js/app/utils/asset-loader.js'),
	WebAudio = require('../src/js/app/utils/web-audio.js');

describe('web audio', function() {
	this.timeout(5000);
	var audio = new WebAudio(),
		assetLoader = new AssetLoader(),
		el = document.createElement('audio'),
		ext = (el.canPlayType('audio/ogg; codecs="vorbis"') ? '.ogg' : '.mp3'),
		//host = 'http://' + document.location.host,
		//host = 'http://localhost:8080',
		host = 'http://prototypes.stinkdigital.com/webaudio/demos',
		file = (host + '/audio/CONGAS' + ext),
		playing = false;

	assetLoader.crossOrigin = 'anonymous';
	assetLoader.webAudioContext = audio.context;
	assetLoader.add(file);

	beforeEach(function(done) {
		assetLoader.onComplete.add(function() {
			//audioObject = new AudioObject(assetLoader.get(file).data, false, null);
			var data = assetLoader.get(file).data;
			audio.add(data);
			audio.play();
			playing = audio.playing;
			done();
		});
		assetLoader.start();
	});

	it('should be playing', function(){
		expect(playing).to.be.true;
		audio.stop();
	});
});
