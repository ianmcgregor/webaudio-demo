/* app.js */

define(
	[
		'utils/asset-loader',
		'app/web-audio',
		'app/gui',
		'utils/page-visibility',
		'utils/raf-polyfill'
	],
	function(AssetLoader, WebAudio, GUI, PageVisibility) {

		'use strict';

		function App() {

			var gui = new GUI(document.body);
			var webAudio = new WebAudio();

			var assetLoader = new AssetLoader(),
				el = document.createElement('audio'),
				ext = (el.canPlayType('audio/mpeg;') ? '.mp3' : '.ogg'),
				files = [
					
					'audio/hc/DRUMS' + ext,
					'audio/hc/DOUBLE BASS' + ext,
					'audio/hc/CONGAS' + ext,
					'audio/hc/PIANO_MIC_2' + ext,
					'audio/hc/PIANO_MIC_1' + ext,
					'audio/hc/VOX_BV_3' + ext,
					'audio/hc/VOX_BV_2' + ext,
					'audio/hc/VOX_BV_1' + ext,
					'audio/hc/VOX_LEAD_OSDALGIA' + ext,
					'audio/hc/VOX_LEAD_MICHA_DBL' + ext,
					'audio/hc/VOX_LEAD_MICHA' + ext
				],
				names = [
					'DRUMS',
					'DOUBLE BASS',
					'CONGAS',
					'PIANO_MIC_2',
					'PIANO_MIC_1',
					'VOX_BV_3',
					'VOX_BV_2',
					'VOX_BV_1',
					'VOX_LEAD_OSDALGIA',
					'VOX_LEAD_MICHA_DBL',
					'VOX_LEAD_MICHA'
				];
/*
				files = [
					'audio/0/39_drums_Arno_van_Nieuwenhuize' + ext,
					'audio/0/18_sampler_Sonja_van_Hamel' + ext,
					'audio/0/38_bassguitar_Boudewijn_Lucas' + ext,
					'audio/0/40_guitar_Peter_Tiehuis' + ext,
					'audio/0/50_bongos_Eddie_Koopman' + ext
				],
				names = [
					'drums',
					'sampler',
					'bass',
					'guitar',
					'bongos'
				];
*/
			assetLoader.webAudioContext = webAudio.context;
			assetLoader.crossOrigin = true;
			assetLoader.addMultiple(files);
			assetLoader.onProgress.add(function(progress) {
				gui.updateLoadProgress(progress);
			});
			assetLoader.onComplete.add(function() {
				done();
			});
			assetLoader.start();

			function done() {
				for (var i = 0; i < files.length; i++) {
					var sound = webAudio.add(assetLoader.get(files[i]).data);
					sound.name = names[i];
					sound.addNode(webAudio.nodeFactory.filter.highpass(0));
					sound.addNode(webAudio.nodeFactory.filter.lowpass(10000));
					sound.addNode(webAudio.nodeFactory.delay());
					sound.addNode(webAudio.nodeFactory.gain());
					//sound.addNode(webAudio.nodeFactory.pan());
				}
				var analyser = webAudio.nodeFactory.analyser();
				webAudio._gain.connect(analyser);
				analyser.connect(webAudio.context.destination);
				gui.init(webAudio, analyser);
			}

			PageVisibility.onPageHidden.add(function() {
				webAudio.pause();
			});
			PageVisibility.onPageShown.add(function() {
				webAudio.play();
			});
		}

		return App;
	}
);
