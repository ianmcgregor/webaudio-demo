require.config({
	paths: {
		signals: 'vendors/js-signals/dist/signals'
	},
	shim: {
	}
});

require(
	[
		'app/app',
		'lib/webkitAudioContextMonkeyPatch'
	],

	function(App) {

		'use strict';

		new App();
	}
);
