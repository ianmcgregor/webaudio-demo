/* asset-loader.js */

define(
	[
		'signals'
	],
	function(signals) {

		'use strict';

		function AssetLoader() {
			this.onChildComplete = new signals.Signal();
			this.onComplete = new signals.Signal();
			this.onProgress = new signals.Signal();
			this.onError = new signals.Signal();

			this.queue = [];
			this.index = 0;
			this.loaders = {};

			this.loaded = false;
			this.webAudioContext = null;
			this.crossOrigin = false;
			this.touchLocked = false;
			this.numTotal = 0;
			this.numLoaded = 0;
		}

		function createXHR() {
			var xhr, i, progId,
				progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];

			if (typeof XMLHttpRequest !== 'undefined') {
				return new XMLHttpRequest();
			} else if (typeof window.ActiveXObject !== 'undefined') {
				for (i = 0; i < 3; i += 1) {
					progId = progIds[i];
					try {
						xhr = new window.ActiveXObject(progId);
					} catch (e) {}
				}
			}
			return xhr;
		}

		AssetLoader.prototype = {
			add: function(url, type) {
				var loader = new AssetLoader.Loader(url, type);
				loader.webAudioContext = this.webAudioContext;
				loader.crossOrigin = this.crossOrigin;
				loader.touchLocked = this.touchLocked;
				this.queue.push(loader);
				this.numTotal++;
				return loader;
			},
			start: function() {
				this.numTotal = this.queue.length;
				this.next();
			},
			next: function() {
				if(this.queue.length === 0) {
					this.loaded = true;
					this.onComplete.dispatch(this.loaders);
					return;
				}
				var loader = this.queue.pop();
				var self = this;
				loader.onComplete.addOnce(function(){
					self.numLoaded++;
					if(self.onProgress.getNumListeners() > 0) {
						self.onProgress.dispatch(self.numLoaded/self.numTotal);
					}
					self.loaders[loader.url] = loader;
					self.onChildComplete.dispatch(loader);
					self.next();
				});
				loader.onError.addOnce(function(){
					self.onError.dispatch(loader);
					self.next();
				});
				loader.start();
			},
			addMultiple: function(array) {
				for (var i = 0; i < array.length; i++) {
					this.add(array[i]);
				}
			},
			get: function(url) {
				return this.loaders[url];
			}
		};

		AssetLoader.Loader = function(url, type) {
			this.url = url;
			this.type = type || this.url.split('?')[0].toLowerCase().split('.').pop();

			this.onComplete = new signals.Signal();
			this.onError = new signals.Signal();

			this.webAudioContext = null;
			this.crossOrigin = false;
			this.touchLocked = false;
		};

		AssetLoader.Loader.prototype = {
			start: function() {
				switch(this.type) {
					case 'mp3':
					case 'ogg':
						this.loadAudio(this.webAudioContext, this.touchLocked);
						break;
					case 'jpg':
					case 'png':
					case 'gif':
						this.loadImage(this.crossOrigin);
						break;
					case 'json':
						this.loadJSON();
						break;
					default:
						throw 'ERROR: Unknown type for file with URL: ' + this.url;
				}
			},
			loadAudio: function(webAudioContext, touchLocked) {
				if(webAudioContext) {
					this.loadWebAudio(webAudioContext);
				} else {
					this.loadHTML5Audio(touchLocked);
				}
			},
			loadWebAudio: function(webAudioContext) {
				var request = new XMLHttpRequest();
				request.open('GET', this.url, true);
				request.responseType = 'arraybuffer';
				var self = this;
				request.onprogress = function(event) {
					if (event.lengthComputable) {
						var percentComplete = event.loaded / event.total;
						console.log('percentComplete:', percentComplete);
					} else {
						console.log('Unable to compute progress information since the total size is unknown');
					}
				};
				request.onload = function() {
					webAudioContext.decodeAudioData(request.response, function(buffer) {
						self.data = buffer;
						self.onComplete.dispatch(buffer);
					}, function() {
						self.onError.dispatch();
					});
				};
				request.onerror = function() {
					self.onError.dispatch();
				};
				request.send();
			},
			loadHTML5Audio: function(touchLocked) {
				var request = new Audio();
				this.data = request;
				request.name = this.url;
				request.preload = 'auto';
				var self = this;
				request.onerror = function() {
					self.onError.dispatch();
				};
				request.src = this.url;
				if (!!touchLocked) {
					this.onComplete.dispatch(this.data);
				}
				else {
					/*request.addEventListener('canplaythrough', function(){
						console.log('audio canplaythrough');
						self.onComplete.dispatch(self.data);
					}, false);*/
					request.load();
					this.onComplete.dispatch(this.data);
				}
			},
			loadImage: function(crossOrigin) {
				var request = new Image();
				this.data = request;
				request.name = this.url;
				var self = this;
				request.onload = function () {
					self.onComplete.dispatch(self.data);
				};
				request.onerror = function () {
					self.onError.dispatch();
				};
				if(crossOrigin) {
					request.crossOrigin = 'anonymous';
				}
				request.src = this.url;
			},
			loadJSON: function() {

				var request = createXHR();
				request.open('GET', this.url, true);
				request.responseType = 'text';
				var self = this;
				
				function handleLoaded() {
					if (request.status >= 400) {
						self.onError.dispatch();
						return;
					}
					self.json = self.data = JSON.parse(request.responseText);

					self.onComplete.dispatch(self.data);
				}

				function handleError() {
					self.onError.dispatch();
				}

				if ('onload' in request && 'onerror' in request) {
					request.onload = handleLoaded;
					request.onerror = handleError;
				} else {
					request.onreadystatechange = function () {
						try {
							if (this.done !== undefined) { return; }

							if (this.status >= 200 && this.status < 300) {
								this.done = true;
								handleLoaded();
							}
							if (this.status >= 400) {
								this.done = true;
								handleError();
							}
						} catch(e) {}
					};
				}

				request.send();
			}
		};

		return AssetLoader;
	}
);