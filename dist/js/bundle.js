require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "Drums": { "url": "audio/DRUMS", "loop": true, "data": null },
    "Bass": { "url": "audio/DOUBLE_BASS", "loop": true, "data": null },
    "Congas": { "url": "audio/CONGAS", "loop": true, "data": null },
    "Piano": { "url": "audio/PIANO_MIC_1", "loop": true, "data": null }
}
},{}],2:[function(require,module,exports){
module.exports={
    "Generate impulse": "generate",

    "ambience:": "",
        "&nbsp;&nbsp;Amb_1_(450)": "audio/impulse/ambience/480L_Amb_1_(450)_dc",
        "&nbsp;&nbsp;Amb_2_(451)": "audio/impulse/ambience/480L_Amb_2_(451)_dc",
        "&nbsp;&nbsp;Amb_3_(452)": "audio/impulse/ambience/480L_Amb_3_(452)_dc",
        "&nbsp;&nbsp;Amb_6969_(454)": "audio/impulse/ambience/480L_Amb_6969_(454)_dc",
        "&nbsp;&nbsp;Amb_close_(457)": "audio/impulse/ambience/480L_Amb_close_(457)_dc",
        "&nbsp;&nbsp;Amb_is_it_(455)": "audio/impulse/ambience/480L_Amb_is_it_(455)_dc",
        "&nbsp;&nbsp;Amb_let_it_go_(458)": "audio/impulse/ambience/480L_Amb_let_it_go_(458)_dc",
        "&nbsp;&nbsp;Amb_oh_(453)": "audio/impulse/ambience/480L_Amb_oh_(453)_dc",
        "&nbsp;&nbsp;Amb_tails_(456)": "audio/impulse/ambience/480L_Amb_tails_(456)_dc",
        "&nbsp;&nbsp;Ambience_(449)": "audio/impulse/ambience/480L_Ambience_(449)_dc",
    
    "hall:": "",
        "&nbsp;&nbsp;Auto_Park_(504)": "audio/impulse/hall/480L_Auto_Park_(504)_dc",
        "&nbsp;&nbsp;Jazz_Hall_(503)": "audio/impulse/hall/480L_Jazz_Hall_(503)_dc",
        "&nbsp;&nbsp;Large-Stage_(496)": "audio/impulse/hall/480L_Large-Stage_(496)_dc",
        "&nbsp;&nbsp;Large_Hall_(495)": "audio/impulse/hall/480L_Large_Hall_(495)_dc",
        "&nbsp;&nbsp;Medium-Stage_(498)": "audio/impulse/hall/480L_Medium-Stage_(498)_dc",
        "&nbsp;&nbsp;Medium_Hall_(497)": "audio/impulse/hall/480L_Medium_Hall_(497)_dc",
        "&nbsp;&nbsp;Small-Stage_(500)": "audio/impulse/hall/480L_Small-Stage_(500)_dc",
        "&nbsp;&nbsp;Small_Church_(502)": "audio/impulse/hall/480L_Small_Church_(502)_dc",
        "&nbsp;&nbsp;Small_Hall_(499)": "audio/impulse/hall/480L_Small_Hall_(499)_dc",
    
    "plate:": "",
        "&nbsp;&nbsp;A_Plate_(470)": "audio/impulse/plate/480L_A_Plate_(470)_dc",
        "&nbsp;&nbsp;Fat_Plate_(474)": "audio/impulse/plate/480L_Fat_Plate_(474)_dc",
        "&nbsp;&nbsp;Small_Plate_(472)": "audio/impulse/plate/480L_Small_Plate_(472)_dc",
        "&nbsp;&nbsp;Snare_Plate_(471)": "audio/impulse/plate/480L_Snare_Plate_(471)_dc",
        "&nbsp;&nbsp;Thin_Plate_(473)": "audio/impulse/plate/480L_Thin_Plate_(473)_dc",
    
    "random_hall:": "",
        "&nbsp;&nbsp;Big_R_(460)": "audio/impulse/random_hall/480L_Big_R_(460)_dc",
        "&nbsp;&nbsp;Crazy_ass_(463)": "audio/impulse/random_hall/480L_Crazy_ass_(463)_dc",
        "&nbsp;&nbsp;Down_You_Say_(468)": "audio/impulse/random_hall/480L_Down_You_Say_(468)_dc",
        "&nbsp;&nbsp;R_Two_(462)": "audio/impulse/random_hall/480L_R_Two_(462)_dc",
        "&nbsp;&nbsp;Random_well_(464)": "audio/impulse/random_hall/480L_Random_well_(464)_dc",
        "&nbsp;&nbsp;Short_Me_again_(465)": "audio/impulse/random_hall/480L_Short_Me_again_(465)_dc",
        "&nbsp;&nbsp;Well_Hmmm_R_(461)": "audio/impulse/random_hall/480L_Well_Hmmm_R_(461)_dc",
        "&nbsp;&nbsp;You_Said_(467)": "audio/impulse/random_hall/480L_You_Said_(467)_dc",
        "&nbsp;&nbsp;testy_testy_(466)": "audio/impulse/random_hall/480L_testy_testy_(466)_dc",
    
    "room:": "",
        "&nbsp;&nbsp;LG_Wood_Room_(490)": "audio/impulse/room/480L_LG_Wood_Room_(490)_dc",
        "&nbsp;&nbsp;Large_Chamber_(492)": "audio/impulse/room/480L_Large_Chamber_(492)_dc",
        "&nbsp;&nbsp;Large_Room_(486)": "audio/impulse/room/480L_Large_Room_(486)_dc",
        "&nbsp;&nbsp;Medium_Room_(487)": "audio/impulse/room/480L_Medium_Room_(487)_dc",
        "&nbsp;&nbsp;Music_Club_(485)": "audio/impulse/room/480L_Music_Club_(485)_dc",
        "&nbsp;&nbsp;SM_Wood_Room_(491)": "audio/impulse/room/480L_SM_Wood_Room_(491)_dc",
        "&nbsp;&nbsp;Small_-_Bright_(494)": "audio/impulse/room/480L_Small_-_Bright_(494)_dc",
        "&nbsp;&nbsp;Small_Chamb_(493)": "audio/impulse/room/480L_Small_Chamb_(493)_dc",
        "&nbsp;&nbsp;Small_Room_(488)": "audio/impulse/room/480L_Small_Room_(488)_dc",
        "&nbsp;&nbsp;Very_Small_(489)": "audio/impulse/room/480L_Very_Small_(489)_dc",
    
    "wild_spaces:": "",
        "&nbsp;&nbsp;10W-40_(478)": "audio/impulse/wild_spaces/480L_10W-40_(478)_dc",
        "&nbsp;&nbsp;20w-50_(479)": "audio/impulse/wild_spaces/480L_20w-50_(479)_dc",
        "&nbsp;&nbsp;Big_Bottom_(477)": "audio/impulse/wild_spaces/480L_Big_Bottom_(477)_dc",
        "&nbsp;&nbsp;Brick_Wall_(475)": "audio/impulse/wild_spaces/480L_Brick_Wall_(475)_dc",
        "&nbsp;&nbsp;Buckram_(476)": "audio/impulse/wild_spaces/480L_Buckram_(476)_dc",
        "&nbsp;&nbsp;Inside_Out_(482)": "audio/impulse/wild_spaces/480L_Inside_Out_(482)_dc",
        "&nbsp;&nbsp;Metallica_(480)": "audio/impulse/wild_spaces/480L_Metallica_(480)_dc",
        "&nbsp;&nbsp;Ricochet_(483)": "audio/impulse/wild_spaces/480L_Ricochet_(483)_dc",
        "&nbsp;&nbsp;Silica_Beads_(481)": "audio/impulse/wild_spaces/480L_Silica_Beads_(481)_dc",
        "&nbsp;&nbsp;Varoom_(484)": "audio/impulse/wild_spaces/480L_Varoom_(484)_dc"
}
},{}],3:[function(require,module,exports){
'use strict';

var audioFiles = require('../config/audio-files.json'),
	impulse = require('../config/impulse-response.json');

var model = {
    extension: '',
	audioFiles: audioFiles,
	getFile: function(key) {
		return model.audioFiles[key];
	},
	impulse: impulse,
	filter : {
        'lowpass': 0,
        'highpass': 1,
        'bandpass': 2,
        'lowshelf': 3,
        'highshelf': 4,
        'peaking': 5,
        'notch': 6,
        'allpass': 7
	},
    wave: {
        'sine': 'sine',
        'square': 'square',
        'sawtooth': 'sawtooth',
        'triangle': 'triangle'
    }
};

module.exports = model;

},{"../config/audio-files.json":1,"../config/impulse-response.json":2}],4:[function(require,module,exports){
'use strict';

var signals = require('signals');

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

    this.onProgress = new signals.Signal();
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
                self.onProgress.dispatch(percentComplete);
            } else {
                //console.log('Unable to compute progress information since the total size is unknown');
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
        request.onerror = function(e) {
            self.onError.dispatch(e);
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

module.exports = AssetLoader;

/*if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssetLoader;
}*/

/*var root = this;
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = AssetLoader;
    }
    exports.AssetLoader = AssetLoader;
} else if (typeof define !== 'undefined' && define.amd) {
    define('PIXI', (function() { return root.AssetLoader = AssetLoader; })() );
} else {
    root.PIXI = PIXI;
}*/
},{"signals":"w8Izcx"}],5:[function(require,module,exports){
'use strict';

// webkitAudioContextMonkeyPatch is breaking Firefox
//require('./webkitAudioContextMonkeyPatch.js');

var WebAudio = require('./web-audio.js'),
	HTMLAudio = require('./html-audio.js'),
	PageVisibility = require('./page-visibility.js');

function AudioManager() {
	this.webAudioContext = WebAudio.createContext();
	this._sounds = {};
	this._delayTimeouts = [];
	this._ext = undefined;
	this._isSupported = undefined;
	this._touchLocked = false;
	this._queued = [];

	PageVisibility.onPageHidden.add(function() {
		this.pauseAll();
	}, this);
	PageVisibility.onPageShown.add(function() {
		this.resumeAll();
	}, this);
}

AudioManager.prototype = {
	add: function(key, data, loop) {
		var sound = this.webAudioContext && !(data && data.tagName) ? new WebAudio(this.webAudioContext) : new HTMLAudio();
		sound.loop = !!(loop);
		sound.add(data);
		this._sounds[key] = sound;
		return sound;
	},
	getExtension: function() {
		if(!this._ext) {
			var el = document.createElement('audio');
			this._ext = (el.canPlayType('audio/ogg; codecs="vorbis"') ? '.ogg' : '.mp3');
		}
		return this._ext;
	},
	isSupported: function() {
		if(this._isSupported === undefined) {
			try {
				var el = document.createElement('audio');
				this._isSupported = !!(el && (el.canPlayType('audio/ogg; codecs="vorbis"') || el.canPlayType('audio/mpeg;')));
			} catch(e) {
				this._isSupported = false;
			}
		}
		return this._isSupported;
	},
	webAudioSupported: function() {
		return !!this.webAudioContext;
	},
	get: function(key) {
		return this._sounds[key];
	},
	play: function(key, delay, loop) {
		if(this._touchLocked) {
			this.queueUp(key, delay, loop);
			return;
		}
		var sound = this._sounds[key];
		if(!sound) {
			return;
		}
        if(loop !== undefined) {
			sound.loop = loop;
        }
        if(delay !== undefined && delay > 0) {
            var delayed = setTimeout(function(){
                sound.play();
            }, delay);
            this._delayTimeouts.push(delayed);
        }
        else {
            sound.play();
        }
    },
    mute: function() {
		for(var i in this._sounds) {
			this._sounds[i].volume = 0;
		}
	},
	unMute: function() {
		for(var i in this._sounds) {
			this._sounds[i].volume = 1;
		}
	},
	pause: function(key) {
		if(!this._sounds[key]) {
			return;
		}
		this._sounds[key].pause();
	},
	stop: function(key) {
		if(!this._sounds[key]) {
			return;
		}
		this._sounds[key].stop();
	},
	pauseAll: function() {
		for(var i in this._sounds) {
			if(this._sounds[i].playing) {
				this._sounds[i].pause();
			}
		}
	},
	resumeAll: function() {
		for(var i in this._sounds) {
			if(this._sounds[i].paused) {
				this._sounds[i].play();
			}
		}
	},
	stopAll: function() {
		for(var key in this._sounds) {
			this._sounds[key].stop();
		}
		for (var i = 0; i < this._delayTimeouts.length; i++) {
            clearTimeout(this._delayTimeouts[i]);
        }
        this._delayTimeouts.length = 0;
	},
	getTouchLocked: function() {
		return this._touchLocked;
	},
	setTouchLocked: function(value) {
		this._touchLocked = value;

		var self = this;
		var unlock = function() {
			self._touchLocked = false;
			document.body.removeEventListener('touchstart', unlock);
			for (var i = 0; i < self._queued.length; i++) {
				self._queued[i]();
			}
			self._queued.length = 0;
		};

		if(this._touchLocked) {
			document.body.addEventListener('touchstart', unlock, false);
		}
	},
	queueUp: function(key, delay, loop) {
		var self = this;
		var fn = function() {
			self.play(key, delay, loop);
		};
		this._queued.push(fn);
	}
};

module.exports = AudioManager;

},{"./html-audio.js":6,"./page-visibility.js":9,"./web-audio.js":11}],6:[function(require,module,exports){
'use strict';

function HTMLAudio() {
	this._sound = null;
	this._loop = false;
	this._volume = 1;
	this._playing = false;
	this._paused = false;
}

HTMLAudio.prototype = {
	add: function(el) {
		this._sound = el;
		return this._sound;
	},
	play: function() {
		if(this._sound.volume !== undefined) {
			this._sound.volume = this._volume;
		}
		this._sound.play();
		this._playing = true;
		this._paused = false;

		var self = this;
		this._sound.addEventListener('ended', function() {
			if(self._loop) {
				this.currentTime = 0;
				this.play();
			}
			else {
				self._playing = false;
			}
		}, false);
	},
	pause: function() {
		this._sound.pause();
		this._playing = false;
		this._paused = true;
	},
	stop: function() {
		this._sound.pause();
		this._playing = false;
		this._paused = false;
	}
};

Object.defineProperty(HTMLAudio.prototype, 'loop', {
	get: function() {
		return this._loop;
	},
	set: function(value) {
		this._loop = value;
	}
});

Object.defineProperty(HTMLAudio.prototype, 'volume', {
	get: function() {
		return this._volume;
	},
	set: function(value) {
		if(isNaN(value)) {
			return;
		}
		this._volume = value;
		if(this._sound && this._sound.volume !== undefined) {
			this._sound.volume = this._volume;
		}
	}
});

Object.defineProperty(HTMLAudio.prototype, 'playing', {
	get: function() {
		return this._playing;
	}
});

Object.defineProperty(HTMLAudio.prototype, 'paused', {
	get: function() {
		return this._paused;
	}
});

Object.defineProperty(HTMLAudio.prototype, 'sound', {
	get: function() {
		return this._sound;
	}
});

module.exports = HTMLAudio;

},{}],7:[function(require,module,exports){
var Keyboard = {
	A: 'A'.charCodeAt(0),
	B: 'B'.charCodeAt(0),
	C: 'C'.charCodeAt(0),
	D: 'D'.charCodeAt(0),
	E: 'E'.charCodeAt(0),
	F: 'F'.charCodeAt(0),
	G: 'G'.charCodeAt(0),
	H: 'H'.charCodeAt(0),
	I: 'I'.charCodeAt(0),
	J: 'J'.charCodeAt(0),
	K: 'K'.charCodeAt(0),
	L: 'L'.charCodeAt(0),
	M: 'M'.charCodeAt(0),
	N: 'N'.charCodeAt(0),
	O: 'O'.charCodeAt(0),
	P: 'P'.charCodeAt(0),
	Q: 'Q'.charCodeAt(0),
	R: 'R'.charCodeAt(0),
	S: 'S'.charCodeAt(0),
	T: 'T'.charCodeAt(0),
	U: 'U'.charCodeAt(0),
	V: 'V'.charCodeAt(0),
	W: 'W'.charCodeAt(0),
	X: 'X'.charCodeAt(0),
	Y: 'Y'.charCodeAt(0),
	Z: 'Z'.charCodeAt(0),
	ZERO: '0'.charCodeAt(0),
	ONE: '1'.charCodeAt(0),
	TWO: '2'.charCodeAt(0),
	THREE: '3'.charCodeAt(0),
	FOUR: '4'.charCodeAt(0),
	FIVE: '5'.charCodeAt(0),
	SIX: '6'.charCodeAt(0),
	SEVEN: '7'.charCodeAt(0),
	EIGHT: '8'.charCodeAt(0),
	NINE: '9'.charCodeAt(0),
	NUMPAD_0: 96,
	NUMPAD_1: 97,
	NUMPAD_2: 98,
	NUMPAD_3: 99,
	NUMPAD_4: 100,
	NUMPAD_5: 101,
	NUMPAD_6: 102,
	NUMPAD_7: 103,
	NUMPAD_8: 104,
	NUMPAD_9: 105,
	NUMPAD_MULTIPLY: 106,
	NUMPAD_ADD: 107,
	NUMPAD_ENTER: 108,
	NUMPAD_SUBTRACT: 109,
	NUMPAD_DECIMAL: 110,
	NUMPAD_DIVIDE: 111,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	F13: 124,
	F14: 125,
	F15: 126,
	COLON: 186,
	EQUALS: 187,
	UNDERSCORE: 189,
	QUESTION_MARK: 191,
	TILDE: 192,
	OPEN_BRACKET: 219,
	BACKWARD_SLASH: 220,
	CLOSED_BRACKET: 221,
	QUOTES: 222,
	BACKSPACE: 8,
	TAB: 9,
	CLEAR: 12,
	ENTER: 13,
	SHIFT: 16,
	CONTROL: 17,
	ALT: 18,
	CAPS_LOCK: 20,
	ESC: 27,
	SPACEBAR: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	INSERT: 45,
	DELETE: 46,
	HELP: 47,
	NUM_LOCK: 144
};

module.exports = Keyboard;
},{}],8:[function(require,module,exports){
'use strict';

var signals = require('signals');

function Microphone() {
    navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    this._isSupported = !!navigator.getUserMedia_;
    this._stream = null;

    this.onConnected = new signals.Signal();
    this.onDenied = new signals.Signal();
    this.onError = new signals.Signal();
}

Microphone.prototype.connect = function() {
    if(!this._isSupported) { return; }
    var self = this;
    navigator.getUserMedia_( {audio:true}, function(stream) {
        self._stream = stream;
        self.onConnected.dispatch(stream);
    }, function(e) {
        console.log(e);
        if(e.name === 'PermissionDeniedError' || e === 'PERMISSION_DENIED') {
            console.log('Permission denied. You can undo this by clicking the camera icon with the red cross in the address bar');
            self.onDenied.dispatch();
        }
        else {
            self.onError.dispatch(e.message || e);
        }
    });
};

Microphone.prototype.disconnect = function() {
    if(this._stream) {
        this._stream.stop();
        this._stream = null;
    }
};

Microphone.prototype.createWebAudioSource = function(webAudioContext, connectTo) {
    if(!this._stream) { return; }

    var mediaStreamSource = webAudioContext.createMediaStreamSource( this._stream );
    if(connectTo) {
        mediaStreamSource.connect(connectTo);
    }
    // HACK: stops moz garbage collection killing the stream
    // see https://support.mozilla.org/en-US/questions/984179
    if(navigator.mozGetUserMedia) {
        window.horrible_hack_for_mozilla = mediaStreamSource;
    }
    return mediaStreamSource;
};

Object.defineProperty(Microphone.prototype, 'stream', {
    get: function() {
        return this._stream;
    }
});

Object.defineProperty(Microphone.prototype, 'isSupported', {
    get: function() {
        return this._isSupported;
    }
});

if (typeof module === 'object' && module.exports) {
    module.exports = Microphone;
}

},{"signals":"w8Izcx"}],9:[function(require,module,exports){
'use strict';

var signals = require('signals');

var onPageHidden = new signals.Signal(),
    onPageShown = new signals.Signal(),
    hidden, visibilityChange;

function onVisibilityChange() {
    if (document[hidden]) {
        onPageHidden.dispatch();
    } else {
        onPageShown.dispatch();
    }
}

if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support 
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
    hidden = 'mozHidden';
    visibilityChange = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
}

if(visibilityChange !== undefined) {
    document.addEventListener(visibilityChange, onVisibilityChange, false);
}

module.exports = {
    onPageShown: onPageShown,
    onPageHidden: onPageHidden
};
},{"signals":"w8Izcx"}],10:[function(require,module,exports){
'use strict';

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
        window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
 
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
},{}],11:[function(require,module,exports){
'use strict';

function WebAudio(context) {
    this.context = context || WebAudio.createContext();
    this._sound = [];
    this._node = [];
    this._gain = this.context.createGain();
    this._gain.connect(this.context.destination);
    this._startedAt = 0;
    this._pausedAt = 0;
    this._loop = false;
    this._playing = false;
    this._nodeFactory = new WebAudio.NodeFactory(this.context);
    this._helpers = new WebAudio.Helpers(this.context);
}

WebAudio.prototype = {
    add: function(buffer) {
        if(!buffer) { return; }
        this._sound.push(new WebAudio.Sound(buffer, this.context));
        this._sound[this._sound.length-1].loop = this._loop;
        return this._sound[this._sound.length-1];
    },
    play: function() {
        var maxDuration = -1,
            longestSound;
        for (var i = 0; i < this._sound.length; i++) {
            this._sound[i].stop();
            this._sound[i].connect(this._gain);
            this._sound[i].play(0, this._pausedAt / 1000);
            if(this._sound[i].duration > maxDuration) {
                maxDuration = this._sound[i].duration;
                longestSound = this._sound[i];
            }
        }
        var self = this;
        longestSound.source.onended = function() {
            self._playing = false;
        };
        this._startedAt = Date.now() - this._pausedAt;
        this._playing = true;
    },
    pause: function() {
        this.stop();
        this._pausedAt = Date.now() - this._startedAt;
    },
    stop: function() {
        for (var i = 0; i < this._sound.length; i++) {
            this._sound[i].stop();
        }
        this._pausedAt = 0;
        this._playing = false;
    }
};

Object.defineProperty(WebAudio.prototype, 'loop', {
    get: function() {
        return this._loop;
    },
    set: function(value) {
        this._loop = value;
        for (var i = 0; i < this._sound.length; i++) {
            this._sound[i].loop = value;
        }
    }
});

Object.defineProperty(WebAudio.prototype, 'volume', {
    get: function() {
        return this._gain.gain.value;
    },
    set: function(value) {
        if(isNaN(value)) {
            return;
        }
        this._gain.gain.value = value;
    }
});

Object.defineProperty(WebAudio.prototype, 'playing', {
    get: function() {
        return this._playing;
    }
});

Object.defineProperty(WebAudio.prototype, 'paused', {
    get: function() {
        return this._pausedAt > 0;
    }
});

Object.defineProperty(WebAudio.prototype, 'sound', {
    get: function() {
        return this._sound;
    }
});

Object.defineProperty(WebAudio.prototype, 'nodeFactory', {
    get: function() {
        return this._nodeFactory;
    }
});

Object.defineProperty(WebAudio.prototype, 'helpers', {
    get: function() {
        return this._helpers;
    }
});

/*
 * Context
 */

WebAudio.createContext = function() {
    var context = null;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if(window.AudioContext) {
        context = new window.AudioContext();
    }
    return context;
};

/*
 * Sound
 */

WebAudio.Sound = function(buffer, context) {
    this._buffer = buffer;
    this._context = context;
    this._source = null;
    this._node = [];
    this._loop = false;
    this.name = '';
};

WebAudio.Sound.prototype = {
    play: function(delay, offset) {
        if(delay === undefined) {
            delay = 0;
        }
        else if(delay > 0) {
            delay = this._context.currentTime + delay;
        }
        if(offset === undefined) {
            offset = 0;
        }
        this.source.loop = this._loop;
        this.source.start(delay, offset);
    },
    stop: function() {
        if(this._source) {
            this._source.stop(0);
            this._source = null;
        }
    },
    connect: function(node) {
        if(this._node.length > 0) {
            this._node[this._node.length - 1].connect(node);
        }
        else {
            this.source.connect(node);
        }
        this.destination = node;
    },
    addNode: function(node) {
        this._node.push(node);
        this.updateConnections();
    },
    updateConnections: function() {
        if(!this._source) {
            return;
        }
        for (var i = 0; i < this._node.length; i++) {
            if(i === 0) {
                this._source.connect(this._node[i]);
            }
            else {
                this._node[i-1].connect(this._node[i]);
            }
        }
        if(this.destination) {
            this.connect(this.destination);
        }
    }
};

Object.defineProperty(WebAudio.Sound.prototype, 'source', {
    get: function() {
        if(!this._source) {
            this._source = this._context.createBufferSource();
            this._source.buffer = this._buffer;
            this.updateConnections();
        }
        return this._source;
    }
});

Object.defineProperty(WebAudio.Sound.prototype, 'loop', {
    get: function() {
        return this._loop;
    },
    set: function(value) {
        this._loop = value;
    }
});

Object.defineProperty(WebAudio.Sound.prototype, 'duration', {
    get: function() {
        return this._buffer ? this._buffer.duration : 0;
    }
});

/*
 * Nodes
 */

WebAudio.NodeFactory = function(context) {

    function createFilter(type, frequency) {
        var filterNode = context.createBiquadFilter();
        filterNode.type = type;
        if(frequency !== undefined) {
            filterNode.frequency.value = frequency;
        }
        return filterNode;
    }

    return {
        gain: function(value) {
            var node = context.createGain();
            if(value !== undefined) {
                node.gain.value = value;
            }
            return node;
        },
        pan: function() {
            var node = context.createPanner();
            node.panningModel = 'HRTF';
            //node.panningModel = 'equalpower';
            //setOptionalParam(x, 0);
            //setOptionalParam(y, 0);
            //setOptionalParam(z, 0);
            //node.setPosition(x, y, z);
            /*

            // Default for stereo is HRTF 


            // Uses a 3D cartesian coordinate system 
            node.setPosition(object.position.x/290, object.position.y/290, object.position.z/290);
            // node.setPosition(0, 0, 0);
            // node.setOrientation(1, 0, 0);
            // node.setVelocity(0, 0, 0);

            // Distance model and attributes 
            node.distanceModel = 'inverse'; // 'linear' 'inverse' 'exponential' 
            node.refDistance = 1;
            node.maxDistance = 10000;
            node.rolloffFactor = 1;

            // Directional sound cone - The cone angles are in degrees and run from 0 to 360
            // node.coneInnerAngle = 360;
            // node.coneOuterAngle = 360;
            // node.coneOuterGain = 0;

            */
            // normalised vec
            // node.setOrientation(vec.x, vec.y, vec.z);
            return node;
        },
        filter: {
            lowpass: function(frequency) {
                return createFilter('lowpass', frequency);
            },
            highpass: function(frequency) {
                return createFilter('highpass', frequency);
            },
            bandpass: function(frequency) {
                return createFilter('bandpass', frequency);
            },
            lowshelf: function(frequency) {
                return createFilter('lowshelf', frequency);
            },
            highshelf: function(frequency) {
                return createFilter('highshelf', frequency);
            },
            peaking: function(frequency) {
                return createFilter('peaking', frequency);
            },
            notch: function(frequency) {
                return createFilter('notch', frequency);
            },
            allpass: function(frequency) {
                return createFilter('allpass', frequency);
            }
        },
        delay: function(time) {
            var node = context.createDelay();
            if(time !== undefined) {
                node.delayTime = time;
            }
            return node;
        },
        convolver: function(impulseResponse) {
            // impulseResponse is an audio file buffer
            var node = context.createConvolver();
            node.buffer = impulseResponse;
            return node;
        },
        reverb: function(seconds, decay, reverse) {
           return this.convolver(this.createImpulseResponse(seconds, decay, reverse));
        },
        createImpulseResponse: function(seconds, decay, reverse) {
            // generate a reverb effect
            seconds = seconds || 1;
            decay = decay || 5;
            reverse = !!reverse;

            var numChannels = 2,
                rate = context.sampleRate,
                length = rate * seconds,
                impulseResponse = context.createBuffer(numChannels, length, rate),
                left = impulseResponse.getChannelData(0),
                right = impulseResponse.getChannelData(1),
                n;

            for (var i = 0; i < length; i++) {
                n = reverse ? length - 1 : i;
                left[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
                right[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
            }

            return impulseResponse;
        },
        analyser: function(fftSize) {
            fftSize = fftSize || 1024;
            var node = context.createAnalyser();
            node.smoothingTimeConstant = 0.85;
            // resolution fftSize: 32 - 2048 (pow 2)
            // frequencyBinCount will be half this value
            node.fftSize = fftSize;
            //node.minDecibels = -100;
            //node.maxDecibels = -30;
            return node;
        },
        compressor: function() {
            // lowers the volume of the loudest parts of the signal and raises the volume of the softest parts
            var node = context.createDynamicsCompressor();
            // min decibels to start compressing at from -100 to 0
            node.threshold.value = -24;
            // decibel value to start curve to compressed value from 0 to 40
            node.knee.value = 30;
            // amount of change per decibel from 1 to 20
            node.ratio.value = 12;
            // gain reduction currently applied by compressor from -20 to 0
            // node.reduction.value
            // seconds to reduce gain by 10db from 0 to 1 - how quickly signal adapted when volume increased
            node.attack.value = 0.0003;
            // seconds to increase gain by 10db from 0 to 1 - how quickly signal adapted when volume redcuced
            node.release.value = 0.25;
            return node;
        },
        distortion: function() {
            var node = context.createWaveShaper();
            // Float32Array defining curve (values are interpolated)
            //node.curve
            // up-sample before applying curve for better resolution result 'none', '2x' or '4x'
            node.oversample = '2x';
            return node;
        }
    };
};

/*
 * Helpers
 */

WebAudio.Helpers = function(context) {

    function ramp(param, value, duration) {
        param.linearRampToValueAtTime(value, context.currentTime + duration);
    }

    function panXYZ(node, x, y, z) {
        x = parseFloat(x, 10);
        y = parseFloat(y, 10);
        z = parseFloat(z, 10);
        node.setPosition(x, y, z);
    }

    function panX(node, x) {
        x = parseFloat(x, 10);
        // x from -Math.PI/4 to Math.PI/4 (-45 to 45 deg)
        var z = x + Math.PI / 2;
        if (z > Math.PI / 2) {
            z = Math.PI - z;
        }
        x = Math.sin(x);
        z = Math.sin(z);
        node.setPosition(x, 0, z);
    }

    function setCameraPosition(x, y, z) {
        // set the audio context's listener position to match the camera position
        context.listener.setPosition(x, y, z);
    }

    function doppler(pannerNode, x, y, z, deltaX, deltaY, deltaZ, deltaTime) {
        // Tracking the velocity can be done by getting the object's previous position, subtracting 
        // it from the current position and dividing the result by the time elapsed since last frame
        pannerNode.setPosition(x, y, z);
        pannerNode.setVelocity(deltaX/deltaTime, deltaY/deltaTime, deltaZ/deltaTime);
    }

    function filter(filterNode, value, quality, gain) {
        value = parseFloat(value, 10);
        quality = parseFloat(quality, 10);
        gain = parseFloat(gain, 10);
        // Get back to the frequency value between min and max.
        filterNode.frequency.value = getFrequency(value);

        //filterNode.Q.value = quality;
        //filterNode.gain.value = gain;
    }

    // get frequency by passing number from 0 to 1
    function getFrequency(value) {
        // Clamp the frequency between the minimum value (40 Hz) and half of the
        // sampling rate.
        var minValue = 40;
        var maxValue = context.sampleRate / 2;
        // Logarithm (base 2) to compute how many octaves fall in the range.
        var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
        // Compute a multiplier from 0 to 1 based on an exponential scale.
        var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
        // Get back to the frequency value between min and max.
        return maxValue * multiplier;
    }

    function createMicrophoneSource(stream, connectTo) {
        var mediaStreamSource = context.createMediaStreamSource( stream );
        if(connectTo) {
            mediaStreamSource.connect(connectTo);
        }
        // HACK: stops moz garbage collection killing the stream
        // see https://support.mozilla.org/en-US/questions/984179
        if(navigator.mozGetUserMedia) {
            window.horrible_hack_for_mozilla = mediaStreamSource;
        }
        return mediaStreamSource;
    }

    // create waveShaper distortion curve from 0 to 1
    function distort(value) {
        var k = value * 100,
            n = 22050,
            curve = new Float32Array(n),
            deg = Math.PI / 180;

        for (var i = 0; i < n; i++) {
            var x = i * 2 / n - 1;
            curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
        return curve;
    }

    return {
        fade: function(gainNode, value, duration) {
            ramp(gainNode.gain, value, duration);
        },
        panX: function(pannerNode, value) {
            panX(pannerNode, value * Math.PI / 4);
        },
        'setCameraPosition': setCameraPosition,
        'pan': panXYZ,
        'doppler': doppler,
        'filter': filter,
        'getFrequency': getFrequency,
        'createMicrophoneSource': createMicrophoneSource,
        'distort' : distort
    };
};

/*

ThreeJS positional

setPositionAndVelocity : function(object, audioNode, x, y, z, dt) {
    var p = object.matrixWorld.getPosition();
    var px = p.x, py = p.y, pz = p.z;
    object.position.set(x,y,z);
    object.updateMatrixWorld();
    var q = object.matrixWorld.getPosition();
    var dx = q.x-px, dy = q.y-py, dz = q.z-pz;
    if (this.positionEnabled) {
      audioNode.setPosition(q.x, q.y, q.z);
    }
    if (this.velocityEnabled) {
      audioNode.setVelocity(dx/dt, dy/dt, dz/dt);
    }
  },

  setPosition : function(object, x, y, z, dt) {
    this.setPositionAndVelocity(object, object.sound.panner, x, y, z, dt);
    if (this.orientationEnabled) {
      var vec = new THREE.Vector3(0,0,1);
      var m = object.matrixWorld;
      var mx = m.n14, my = m.n24, mz = m.n34;
      m.n14 = m.n24 = m.n34 = 0;
      m.multiplyVector3(vec);
      vec.normalize();
      object.sound.panner.setOrientation(vec.x, vec.y, vec.z);
      m.n14 = mx;
      m.n24 = my; 
      m.n34 = mz;
    }
  },

  setListenerPosition : function(object, x, y, z, dt) {
    this.setPositionAndVelocity(object, this.audio.context.listener, x, y, z, dt);
    if (this.orientationEnabled) {
      var m = object.matrix;
      var mx = m.n14, my = m.n24, mz = m.n34;
      m.n14 = m.n24 = m.n34 = 0;

      var vec = new THREE.Vector3(0,0,1);
      m.multiplyVector3(vec);
      vec.normalize();

      var up = new THREE.Vector3(0,-1,0);
      m.multiplyVector3(up);
      up.normalize();

      this.audio.context.listener.setOrientation(vec.x, vec.y, vec.z, up.x, up.y, up.z);

      m.n14 = mx;
      m.n24 = my; 
      m.n34 = mz;
    }
  },


  */

module.exports = WebAudio;

},{}],12:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js'),
    AnalyserDisplay = require('./components/analyser-display.js');

function Analyser(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    //this.sound = 
    this.audio.add(Model.getFile('Piano').data);
    this.audio.add(Model.getFile('Drums').data);
    this.audio.add(Model.getFile('Bass').data);
    // 1024 fft size is 512 parts
    this.node = this.audio.nodeFactory.analyser(1024);
    //this.sound.addNode(this.node);

    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    var display = new AnalyserDisplay();

    var panelFreq = new UIComponents.Panel(el, 'Frequencies');
    this.sliderSmoothing = new UIComponents.Slider(panelFreq.el, 'Smoothing', 0, 1, 0.01, this.node.smoothingTimeConstant, this.updateSmoothing, this);
    this.dropdownFFT = new UIComponents.Dropdown(panelFreq.el, {
        '64': 64,
        '128': 128,
        '256': 256,
        '512': 512,
        '1024': 1024,
        '2048': 2048
    }, this.updateFFTSize, this, this.node.fftSize, 'FFT Size');

    var freq = display.addFreq(this.node);
    freq.background = 'rgb(0,0,0)';
    panelFreq.append(freq.canvas);

    var panelWave = new UIComponents.Panel(el, 'Wave');
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    panelWave.append(wave.canvas);

    var panelLevels = new UIComponents.Panel(el, 'Levels');
    var levels = display.addLevels(this.node);
    levels.background = 'rgb(0,0,0)';
    panelLevels.append(levels.canvas);
}

Analyser.prototype = Object.create(AbstractDemo.prototype);
Analyser.prototype.constructor = Analyser;

Analyser.prototype.updateSmoothing = function(value) {
    this.node.smoothingTimeConstant = parseFloat(value, 10);
};

Analyser.prototype.updateFFTSize = function(value) {
    this.node.fftSize = parseInt(value);
};

Analyser.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Analyser;
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],13:[function(require,module,exports){
'use strict';

var WebAudio = require('../../utils/web-audio.js'),
	AssetLoader = require('../../utils/asset-loader.js'),
	UIComponents = require('../components/ui-components.js'),
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
	createGainControls: function(node, el) {
		var vol = new UIComponents.Slider(el, 'gain', 0, 2, 0.1, 1, function() {
			node.gain.value = this.value;
		});
	    var mute = new UIComponents.ToggleButton(el, 'mute', 'unmute',
	        function(){
	            mute.volume = node.gain.value;
	            node.gain.value = vol.value = 0;
	        },
	        function() {
	            node.gain.value = vol.value = mute.volume || 1; 
	        }
	    );
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

},{"../../utils/asset-loader.js":4,"../../utils/web-audio.js":11,"../components/ui-components.js":16,"./loading-bar.js":15}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

function LoadingBar() {
    var loader = document.querySelector('.Loader'),
        label = loader.querySelector('.Loader-label');
        
    function update(p) {
        label.innerHTML = Math.round(p * 100) + '%';
    }

    function show() {
        loader.classList.remove('Loader--hidden');
    }

    function hide() {
        loader.classList.add('Loader--hidden');
    }

    return {
        'update': update,
        'show': show,
        'hide': hide
    };
}

module.exports = new LoadingBar();

},{}],16:[function(require,module,exports){
'use strict';

function UIComponents() {
}

// helpers

function addKeyDown(key, fn, context) {
    if(key !== undefined) {
        var onKeyDown = function(event) {
            if (event.keyCode === key) {
                fn.call(context);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        var removeKey = function() {
            document.removeEventListener('keydown', onKeyDown);
        };
        return removeKey;
    }
}

/*
 * Slider
 */

UIComponents.Slider = function(parent, label, min, max, step, value, fn, context) {
    var lbl = document.createElement('label');
        lbl.innerHTML = label;
        lbl.className = 'Slider-label';
    var input = document.createElement('input');
        input.className = 'Slider-input';
        input.setAttribute('type', 'range');
        input.setAttribute('min', min);
        input.setAttribute('max', max);
        input.setAttribute('step', step);
        input.setAttribute('value', value);
    if(typeof fn === 'function') {
        var onChange = function() {
            fn.call(context || this, this.value);
        };
        input.addEventListener('change', onChange);
    }
    var output = document.createElement('output');
        output.className = 'Slider-output';
        output.value = input.value;
    var form = document.createElement('form');
        form.className = 'Slider Slider--large';
        form.addEventListener('input', function() {
            output.value = input.value;
        });
        form.appendChild(lbl);
        form.appendChild(input);
        form.appendChild(output);
    if(parent) {
        parent.appendChild(form);
    }
    this.input = input;
    this.el = form;
};

Object.defineProperty(UIComponents.Slider.prototype, 'value', {
    get: function() {
        return this.input.value;
    },
    set: function(value) {
        this.input.value = value;
    }
});

/*
 * Panel
 */

UIComponents.Panel = function(parent, title) {
    this.el = document.createElement('div');
    this.el.className = 'Panel';
    if(parent) {
        parent.appendChild(this.el);
    }
    if(title) {
        this.title = title;
    }
};

UIComponents.Panel.prototype.append = function(el) {
    this.el.appendChild(el);
};

UIComponents.Panel.prototype.remove = function() {
    if(this.el.parentElement) {
        this.el.parentElement.removeChild(this.el);
    }
};

Object.defineProperty(UIComponents.Panel.prototype, 'title', {
    set: function(value) {
        if(!this.titleEl) {
            this.titleEl = document.createElement('h3');
            this.el.insertBefore(this.titleEl, this.el.firstChild);
        }
        this.titleEl.innerHTML = value;
    }
});

/*
 * Button
 */

UIComponents.Button = function(parent, label, fn, context, key) {
    var input = document.createElement('button');
        input.innerHTML = label;
        input.classList.add('Button', 'Button--default');
    if(typeof fn === 'function') {
        var click = function() {
            fn.call(context || this);
        };
        input.addEventListener('click', click);
    }
    this.removeKey = addKeyDown(key, fn, input);
    if(parent) {
        parent.appendChild(input);
    }
    this.el = input;
};

/*
 * Toggle Button
 */

UIComponents.ToggleButton = function(parent, labelA, labelB, fnA, fnB, context, key) {
    var input = document.createElement('button');
        input.innerHTML = labelA;
        input.value = labelB;
        input.classList.add('Button', 'Button--default');
    var toggle = function() {
        if(this.innerHTML === labelA) {
            this.innerHTML = labelB;
            this.value = labelA;
            if(typeof fnA === 'function') {
                fnA.call(context || this);
            }
        }
        else {
            this.innerHTML = labelA;
            this.value = labelB;
            if(typeof fnB === 'function') {
                fnB.call(context || this);
            }
        }
    };
    input.addEventListener('click', toggle);
    this.removeKey = addKeyDown(key, toggle, input);
    if(parent) {
        parent.appendChild(input);
    }
    this.reset = function() {
        input.innerHTML = labelA;
        input.value = labelB;
    };
    this.el = input;
};

/*
 * Dropdown
 */

UIComponents.Dropdown = function(parent, options, fn, context, selectedValue, title) {
    var dd = document.createElement('select');
    dd.className = 'Dropdown';
    for(var key in options) {
        var o = document.createElement('option');
        o.setAttribute('value', options[key]);
        o.innerHTML = key;
        dd.appendChild(o);
        if(options[key] === selectedValue) {
            o.setAttribute('selected', 'selected');
        }
    }
    if(typeof fn === 'function') {
        dd.addEventListener('change', function() {
            fn.call(context, dd.options[dd.selectedIndex].value);
        });
    }
    if(parent) {
        if(title) {
            var h = document.createElement('h3');
            h.className = 'Dropdown-title';
            h.innerHTML = title;
            parent.appendChild(h);
        }
        parent.appendChild(dd);
    }
    this.el = dd;
};

Object.defineProperty(UIComponents.Dropdown.prototype, 'value', {
    get: function() {
        return this.el.options[this.el.selectedIndex].value;
    }
});

Object.defineProperty(UIComponents.Dropdown.prototype, 'text', {
    get: function() {
        return this.el.options[this.el.selectedIndex].text;
    }
});

module.exports = UIComponents;

},{}],17:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Compressor(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    var files = Model.audioFiles;
    for (var i in files) {
        this.audio.add(files[i].data);
    }
    //this.audio.add(Model.getFile('Drums').data);

    // master gain > compressor > destination
    this.node = this.audio.nodeFactory.compressor();
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    this.panel = new UIComponents.Panel(el, 'Compressor');
    this.sliderThreshold = new UIComponents.Slider(this.panel.el, 'threshold', -100, 0, 0.1, this.node.threshold.value, this.update, this);
    this.sliderKnee = new UIComponents.Slider(this.panel.el, 'knee', 0, 40, 0.1, this.node.knee.value, this.update, this);
    this.sliderRatio = new UIComponents.Slider(this.panel.el, 'ratio', 1, 20, 0.1, this.node.ratio.value, this.update, this);
    this.sliderAttack = new UIComponents.Slider(this.panel.el, 'attack', 0, 1, 0.0001, this.node.attack.value, this.update, this);
    this.sliderRelease = new UIComponents.Slider(this.panel.el, 'release', 0, 1, 0.0001, this.node.release.value, this.update, this);
    this.panel.append(document.createElement('div'));
    this.onButton = new UIComponents.ToggleButton(this.panel.el, 'TURN OFF', 'TURN ON', this.off, this.on, this);
}

Compressor.prototype = Object.create(AbstractDemo.prototype);
Compressor.prototype.constructor = Compressor;

Compressor.prototype.update = function() {
    this.node.threshold.value = this.sliderThreshold.value;
    this.node.knee.value = this.sliderKnee.value;
    this.node.ratio.value = this.sliderRatio.value;
    this.node.attack.value = this.sliderAttack.value;
    this.node.release.value = this.sliderRelease.value;
};

Compressor.prototype.on = function() {
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);    
};

Compressor.prototype.off = function() {
    this.audio._gain.disconnect(this.node);
    this.audio._gain.connect(this.audio.context.destination);
};

Compressor.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Compressor;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],18:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Distortion(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    // master gain > compressor > destination
    this.node = this.audio.nodeFactory.distortion();
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    this.panel = new UIComponents.Panel(el, 'Distortion');
    this.slider = new UIComponents.Slider(this.panel.el, 'amount', 0, 1, 0.0001, 0, this.update, this);
    this.panel.append(document.createElement('div'));
    this.onButton = new UIComponents.ToggleButton(this.panel.el, 'TURN OFF', 'TURN ON', this.off, this.on, this);

    var files = Model.audioFiles;
    for (var i in files) {
        var sound = this.audio.add(files[i].data);
        sound.addNode(this.audio.nodeFactory.gain());
        var control = new UIComponents.Panel(el, i);
        for (var j = 0; j < sound._node.length; j++) {
            this.createGainControls(sound._node[j], control.el);
        }
    }
}

Distortion.prototype = Object.create(AbstractDemo.prototype);
Distortion.prototype.constructor = Distortion;

Distortion.prototype.update = function() {
    this.node.curve = this.audio.helpers.distort(this.slider.value);
};

Distortion.prototype.on = function() {
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);    
};

Distortion.prototype.off = function() {
    this.audio._gain.disconnect(this.node);
    this.audio._gain.connect(this.audio.context.destination);
};

Distortion.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Distortion;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],19:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Filter(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);
    this.sound = this.audio.add(Model.getFile('Drums').data);
    this.node = this.audio.nodeFactory.filter.lowpass();
    this.sound.addNode(this.node);

    this.panel = new UIComponents.Panel(el, 'Filter <a href="https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode">+</a>');
    this.dropdown = new UIComponents.Dropdown(this.panel.el, Model.filter, this.updateFilterType, this);

    this.sliderFreq = new UIComponents.Slider(this.panel.el, 'Frequency', 0, 1, 0.01, 0.5, this.update, this);
    this.sliderQual = new UIComponents.Slider(this.panel.el, 'Quality', 0, 1000, 0.1, 0, this.update, this);
    this.sliderGain = new UIComponents.Slider(this.panel.el, 'Gain', -40, 40, 0.1, 0, this.update, this);
}

Filter.prototype = Object.create(AbstractDemo.prototype);
Filter.prototype.constructor = Filter;

Filter.prototype.updateFilterType = function() {
    this.node.type = this.dropdown.text;
};

Filter.prototype.update = function() {
    this.audio.helpers.filter(this.node, this.sliderFreq.value, this.sliderQual.value, this.sliderGain.value);
};

Filter.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Filter;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],20:[function(require,module,exports){
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
	Distortion = require('./distortion.js');

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

	this.controls = new UIComponents.Panel(this.el);
	this.playButton = new UIComponents.ToggleButton(this.controls.el, 'PLAY', 'PAUSE', this.play, this.pause, this, Keyboard.SPACEBAR);
	this.microphone = new Microphone();
	if(this.microphone.isSupported) {
		this.micButton = new UIComponents.ToggleButton(this.controls.el, 'MIC ON', 'MIC OFF', this.connectMicrophone, this.disconnectMicrophone, this, Keyboard.M);
	}

	this.demoHolder = document.createElement('div');
	this.el.appendChild(this.demoHolder);

	this.oscillator();
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
	this.micButton.reset();

	if(hideMicrophone) {
		this.micButton.el.classList.add('hidden');
	}
	else {
		this.micButton.el.classList.remove('hidden');
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

},{"../utils/keyboard.js":7,"../utils/microphone.js":8,"./analyser.js":12,"./components/loading-bar.js":15,"./components/ui-components.js":16,"./compressor.js":17,"./distortion.js":18,"./filter.js":19,"./microphone-input.js":21,"./multi-track.js":22,"./oscillator.js":23,"./pan-three-d.js":24,"./reverb.js":25}],21:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js'),
    Microphone = require('../utils/microphone.js');

function MicrophoneInput(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.pnlInfo = new UIComponents.Panel(this.el, 'Allow micophone to begin');

    this.microphone = new Microphone();

    if(this.microphone.isSupported) {
        this.microphone.onConnected.add(this.onSuccess, this);
        this.microphone.onDenied.add(this.onDenied, this);
        this.microphone.onError.add(this.onError, this);
        this.microphone.connect();
    }
    else {
        this.pnlInfo.remove();
        this.displayError('ERROR: getUserMedia not available in this browser');
    }
}

MicrophoneInput.prototype = Object.create(AbstractDemo.prototype);
MicrophoneInput.prototype.constructor = MicrophoneInput;

MicrophoneInput.prototype.getMicrophone = function() {
    var self = this;
    navigator.getUserMedia_( {audio:true}, function(stream) {
        self.onSuccess(stream);
    }, function(e) {
        self.onError(e);
    });
};

MicrophoneInput.prototype.onSuccess = function(stream) {
    //this.microphone.createWebAudioSource(this.audio.context, this.audio._gain);
    this.connectToMicrophone(stream);

    this.node = this.audio.nodeFactory.analyser(1024);
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    var display = new AnalyserDisplay();
    var panelWave = new UIComponents.Panel(this.el, 'Microphone');
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    panelWave.append(wave.canvas);

    this.pnlInfo.remove();
};

MicrophoneInput.prototype.onDenied = function() {
    this.displayError('ERROR: Permission denied. You can undo this by clicking the camera icon with the red cross in the address bar.');
    this.pnlInfo.remove();
};

MicrophoneInput.prototype.onError = function(e) {
    this.displayError('ERROR: ' + e);
    this.pnlInfo.remove();
};

MicrophoneInput.prototype.displayError = function(msg) {
    if(!this.pnlError) {
        this.pnlError = new UIComponents.Panel(this.el);
        this.pnlError.el.classList.add('Panel--error');
    }
    this.pnlError.title = msg;
};

MicrophoneInput.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
    if(this.microphone) {
        this.microphone.disconnect();
        this.microphone = null;
    }
};

module.exports = MicrophoneInput;
},{"../utils/microphone.js":8,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],22:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function MultiTrack(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    var files = Model.audioFiles;
    for (var i in files) {
        var sound = this.audio.add(files[i].data);
        sound.addNode(this.audio.nodeFactory.gain());
        var control = new UIComponents.Panel(el, i);
        for (var j = 0; j < sound._node.length; j++) {
            this.createGainControls(sound._node[j], control.el);
        }
    }
}

MultiTrack.prototype = Object.create(AbstractDemo.prototype);
MultiTrack.prototype.constructor = MultiTrack;

MultiTrack.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = MultiTrack;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],23:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js'),
    Model = require('../model/audio-model.js');

function Oscillator(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.node = this.audio.nodeFactory.analyser(2048);
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);
    
    this.pnl = new UIComponents.Panel(this.el, 'sine');
    this.dropdownType = new UIComponents.Dropdown(this.pnl.el, Model.wave, this.updateType, this);
    this.sliderFreq = new UIComponents.Slider(this.pnl.el, 'Frequency', 0, 1, 0.01, 0.1, this.updateFreq, this);
    
    var display = new AnalyserDisplay();
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    this.pnl.append(wave.canvas);
}

Oscillator.prototype = Object.create(AbstractDemo.prototype);
Oscillator.prototype.constructor = Oscillator;

Oscillator.prototype.updateType = function(value) {
    if(!this.osc) { return; }
    this.osc.type = value;
    this.pnl.title = value;
};

Oscillator.prototype.updateFreq = function(value) {
    if(!this.osc) { return; }
    this.osc.frequency.value = this.audio.helpers.getFrequency(value);
};

Oscillator.prototype.play = function() {
    this.osc = this.audio.context.createOscillator();
    this.osc.type = this.dropdownType.value;
    this.osc.frequency.value = this.audio.helpers.getFrequency(this.sliderFreq.value);
    this.audio._gain.value = 0.2;
    this.osc.connect(this.audio._gain);
    this.osc.start(0);
};

Oscillator.prototype.pause = function() {
    if(!this.osc) { return; }
    this.osc.stop(0);
    this.osc = null;
};

Oscillator.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Oscillator;
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],24:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function PanThreeD(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.sound = this.audio.add(Model.getFile('Piano').data);
    this.node = this.audio.nodeFactory.pan();
    this.sound.addNode(this.node);

    this.panel = new UIComponents.Panel(el, 'Pan');

    //this.sliderX = new UIComponents.Slider(this.panel.el, 'x', -Math.PI, Math.PI, 0.01, 0, this.update, this);
    this.sliderX = new UIComponents.Slider(this.panel.el, 'x', -1, 1, 0.01, 0, this.update, this);
    this.sliderY = new UIComponents.Slider(this.panel.el, 'y', -1, 1, 0.01, 0, this.update, this);
    this.sliderZ = new UIComponents.Slider(this.panel.el, 'z', -1, 1, 0.01, 0, this.update, this);
}

PanThreeD.prototype = Object.create(AbstractDemo.prototype);
PanThreeD.prototype.constructor = PanThreeD;

PanThreeD.prototype.update = function() {
    //this.audio.helpers.panX(this.node, value);
    //console.log(value);
    this.audio.helpers.pan(this.node, this.sliderX.value, this.sliderY.value, this.sliderZ.value);
};

PanThreeD.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
    this.panel.remove();
};

module.exports = PanThreeD;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],25:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
	UIComponents = require('./components/ui-components.js'),
	Model = require('../model/audio-model.js');

function Reverb(el, audioContext) {
	AbstractDemo.call(this, el, audioContext);

	this.sound = this.audio.add(Model.getFile('Piano').data);
	this.node = this.audio.nodeFactory.reverb();
	this.sound.addNode(this.node);

	this.panel = new UIComponents.Panel(el, 'Reverb');
	this.dropdown = new UIComponents.Dropdown(this.panel.el, Model.impulse, this.updateImpulseResponse, this);

	this.sliderSeconds = new UIComponents.Slider(this.panel.el, 'seconds', 0.1, 10, 0.1, 1, this.generateImpulseResponse, this);
	this.sliderDecay = new UIComponents.Slider(this.panel.el, 'decay', 0, 20, 0.1, 5, this.generateImpulseResponse, this);
}

Reverb.prototype = Object.create(AbstractDemo.prototype);
Reverb.prototype.constructor = Reverb;

Reverb.prototype.generateImpulseResponse = function() {
	this.node.buffer = this.audio.nodeFactory.createImpulseResponse(this.sliderSeconds.value, this.sliderDecay.value);
};

Reverb.prototype.updateImpulseResponse = function(value) {
	if(value === '') { return; }
	this.sliderSeconds.el.classList.add('hidden');
	this.sliderDecay.el.classList.add('hidden');

	switch(value) {
		case 'generate':
			this.sliderSeconds.el.classList.remove('hidden');
			this.sliderDecay.el.classList.remove('hidden');
			this.generateImpulseResponse();
			break;
		default:
			this.load(value + Model.extension, this.applyImpulse);
			break;
	}
};

Reverb.prototype.applyImpulse = function(buffer) {
	this.node.buffer = buffer;
};

Reverb.prototype.destroy = function() {
	AbstractDemo.prototype.destroy.call(this);
	this.panel.remove();
};

module.exports = Reverb;
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],26:[function(require,module,exports){
'use strict';

var AudioManager = require('./app/utils/audio-manager.js'),
	AssetLoader = require('./app/utils/asset-loader.js'),
	Model = require('./app/model/audio-model.js'),
	GUI = require('./app/view/gui.js');

require('./app/utils/raf-polyfill.js');

function App() {
	this.init();
}

App.prototype.init = function() {
	this.audio = new AudioManager();
	this.gui = new GUI(document.body);
	this.loader = new AssetLoader();

	this.log();
	this.load();
};

App.prototype.log = function() {
	var msg = 'Audio Manager. Supported:' + this.audio.isSupported() +
	' WebAudioAPI:' + this.audio.webAudioSupported() +
	' TouchLocked:' + this.audio.getTouchLocked();
	console.log(msg);
};

App.prototype.load = function() {
	this.loader.touchLocked = this.audio.getTouchLocked();
	this.loader.webAudioContext = this.audio.webAudioContext;
	this.loader.crossOrigin = true;

	Model.extension = this.audio.getExtension();
	var files = Model.audioFiles;
	for (var i in files) {
		var file = files[i];
		file.url = file.url + Model.extension;
		this.loader.add(file.url);
	}

	this.loader.onProgress.add(this.gui.updateLoadProgress, this.gui);
	this.loader.onComplete.add(this.loadComplete, this);
	this.loader.start();
};

App.prototype.loadComplete = function() {
	var files = Model.audioFiles;
	for (var i in files) {
		var file = files[i];
		file.data = this.loader.get(file.url).data;
	}
	this.gui.init(this.audio.webAudioContext);
};

new App();

},{"./app/model/audio-model.js":3,"./app/utils/asset-loader.js":4,"./app/utils/audio-manager.js":5,"./app/utils/raf-polyfill.js":10,"./app/view/gui.js":20}],"w8Izcx":[function(require,module,exports){
/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal : function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function(){
            Signal.prototype.dispatch.apply(self, arguments);
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                n = this._bindings.length,
                bindings;

            if (this.memorize) {
                this._prevParams = paramsArr;
            }

            if (! n) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(typeof define === 'function' && define.amd){ //AMD
        define(function () { return signals; });
    } else if (typeof module !== 'undefined' && module.exports){ //node
        module.exports = signals;
    } else { //browser
        //use string because of Google closure compiler ADVANCED_MODE
        /*jslint sub:true */
        global['signals'] = signals;
    }

}(this));

},{}],"signals":[function(require,module,exports){
module.exports=require('w8Izcx');
},{}]},{},[26])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvYXVkaW8tZmlsZXMuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL21pY3JvcGhvbmUuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvYW5hbHlzZXIuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wcmVzc29yLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2Rpc3RvcnRpb24uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvZmlsdGVyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2d1aS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9taWNyb3Bob25lLWlucHV0LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L211bHRpLXRyYWNrLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L29zY2lsbGF0b3IuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcGFuLXRocmVlLWQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcmV2ZXJiLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL21haW4uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvdmVuZG9yL2pzLXNpZ25hbHMvZGlzdC9zaWduYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiRHJ1bXNcIjogeyBcInVybFwiOiBcImF1ZGlvL0RSVU1TXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQmFzc1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vRE9VQkxFX0JBU1NcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJDb25nYXNcIjogeyBcInVybFwiOiBcImF1ZGlvL0NPTkdBU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIlBpYW5vXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9QSUFOT19NSUNfMVwiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcIkdlbmVyYXRlIGltcHVsc2VcIjogXCJnZW5lcmF0ZVwiLFxuXG4gICAgXCJhbWJpZW5jZTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfMV8oNDUwKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfMV8oNDUwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl8yXyg0NTEpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl8yXyg0NTEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzNfKDQ1MilcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzNfKDQ1MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfNjk2OV8oNDU0KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfNjk2OV8oNDU0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9jbG9zZV8oNDU3KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfY2xvc2VfKDQ1NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfaXNfaXRfKDQ1NSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2lzX2l0Xyg0NTUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2xldF9pdF9nb18oNDU4KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfbGV0X2l0X2dvXyg0NTgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX29oXyg0NTMpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9vaF8oNDUzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl90YWlsc18oNDU2KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfdGFpbHNfKDQ1NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJpZW5jZV8oNDQ5KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJpZW5jZV8oNDQ5KV9kY1wiLFxuICAgIFxuICAgIFwiaGFsbDpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBdXRvX1BhcmtfKDUwNClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9BdXRvX1BhcmtfKDUwNClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtKYXp6X0hhbGxfKDUwMylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9KYXp6X0hhbGxfKDUwMylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZS1TdGFnZV8oNDk2KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0xhcmdlLVN0YWdlXyg0OTYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2VfSGFsbF8oNDk1KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0xhcmdlX0hhbGxfKDQ5NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW0tU3RhZ2VfKDQ5OClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW0tU3RhZ2VfKDQ5OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW1fSGFsbF8oNDk3KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX01lZGl1bV9IYWxsXyg0OTcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGwtU3RhZ2VfKDUwMClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbC1TdGFnZV8oNTAwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0NodXJjaF8oNTAyKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsX0NodXJjaF8oNTAyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0hhbGxfKDQ5OSlcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbF9IYWxsXyg0OTkpX2RjXCIsXG4gICAgXG4gICAgXCJwbGF0ZTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBX1BsYXRlXyg0NzApXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX0FfUGxhdGVfKDQ3MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtGYXRfUGxhdGVfKDQ3NClcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfRmF0X1BsYXRlXyg0NzQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfUGxhdGVfKDQ3MilcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfU21hbGxfUGxhdGVfKDQ3MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbmFyZV9QbGF0ZV8oNDcxKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9TbmFyZV9QbGF0ZV8oNDcxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1RoaW5fUGxhdGVfKDQ3MylcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfVGhpbl9QbGF0ZV8oNDczKV9kY1wiLFxuICAgIFxuICAgIFwicmFuZG9tX2hhbGw6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QmlnX1JfKDQ2MClcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfQmlnX1JfKDQ2MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtDcmF6eV9hc3NfKDQ2MylcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfQ3JhenlfYXNzXyg0NjMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7RG93bl9Zb3VfU2F5Xyg0NjgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0Rvd25fWW91X1NheV8oNDY4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1JfVHdvXyg0NjIpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1JfVHdvXyg0NjIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7UmFuZG9tX3dlbGxfKDQ2NClcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfUmFuZG9tX3dlbGxfKDQ2NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaG9ydF9NZV9hZ2Fpbl8oNDY1KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9TaG9ydF9NZV9hZ2Fpbl8oNDY1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1dlbGxfSG1tbV9SXyg0NjEpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1dlbGxfSG1tbV9SXyg0NjEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7WW91X1NhaWRfKDQ2NylcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfWW91X1NhaWRfKDQ2NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDt0ZXN0eV90ZXN0eV8oNDY2KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF90ZXN0eV90ZXN0eV8oNDY2KV9kY1wiLFxuICAgIFxuICAgIFwicm9vbTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMR19Xb29kX1Jvb21fKDQ5MClcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MR19Xb29kX1Jvb21fKDQ5MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9DaGFtYmVyXyg0OTIpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTGFyZ2VfQ2hhbWJlcl8oNDkyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX1Jvb21fKDQ4NilcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MYXJnZV9Sb29tXyg0ODYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtX1Jvb21fKDQ4NylcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9NZWRpdW1fUm9vbV8oNDg3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO011c2ljX0NsdWJfKDQ4NSlcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9NdXNpY19DbHViXyg0ODUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U01fV29vZF9Sb29tXyg0OTEpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU01fV29vZF9Sb29tXyg0OTEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfLV9CcmlnaHRfKDQ5NClcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TbWFsbF8tX0JyaWdodF8oNDk0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0NoYW1iXyg0OTMpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfQ2hhbWJfKDQ5MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9Sb29tXyg0ODgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfUm9vbV8oNDg4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1ZlcnlfU21hbGxfKDQ4OSlcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9WZXJ5X1NtYWxsXyg0ODkpX2RjXCIsXG4gICAgXG4gICAgXCJ3aWxkX3NwYWNlczpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDsxMFctNDBfKDQ3OClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfMTBXLTQwXyg0NzgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7MjB3LTUwXyg0NzkpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMXzIwdy01MF8oNDc5KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JpZ19Cb3R0b21fKDQ3NylcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQmlnX0JvdHRvbV8oNDc3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JyaWNrX1dhbGxfKDQ3NSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQnJpY2tfV2FsbF8oNDc1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0J1Y2tyYW1fKDQ3NilcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQnVja3JhbV8oNDc2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0luc2lkZV9PdXRfKDQ4MilcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfSW5zaWRlX091dF8oNDgyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01ldGFsbGljYV8oNDgwKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9NZXRhbGxpY2FfKDQ4MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSaWNvY2hldF8oNDgzKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9SaWNvY2hldF8oNDgzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NpbGljYV9CZWFkc18oNDgxKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9TaWxpY2FfQmVhZHNfKDQ4MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtWYXJvb21fKDQ4NClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfVmFyb29tXyg0ODQpX2RjXCJcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdWRpb0ZpbGVzID0gcmVxdWlyZSgnLi4vY29uZmlnL2F1ZGlvLWZpbGVzLmpzb24nKSxcblx0aW1wdWxzZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9pbXB1bHNlLXJlc3BvbnNlLmpzb24nKTtcblxudmFyIG1vZGVsID0ge1xuICAgIGV4dGVuc2lvbjogJycsXG5cdGF1ZGlvRmlsZXM6IGF1ZGlvRmlsZXMsXG5cdGdldEZpbGU6IGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBtb2RlbC5hdWRpb0ZpbGVzW2tleV07XG5cdH0sXG5cdGltcHVsc2U6IGltcHVsc2UsXG5cdGZpbHRlciA6IHtcbiAgICAgICAgJ2xvd3Bhc3MnOiAwLFxuICAgICAgICAnaGlnaHBhc3MnOiAxLFxuICAgICAgICAnYmFuZHBhc3MnOiAyLFxuICAgICAgICAnbG93c2hlbGYnOiAzLFxuICAgICAgICAnaGlnaHNoZWxmJzogNCxcbiAgICAgICAgJ3BlYWtpbmcnOiA1LFxuICAgICAgICAnbm90Y2gnOiA2LFxuICAgICAgICAnYWxscGFzcyc6IDdcblx0fSxcbiAgICB3YXZlOiB7XG4gICAgICAgICdzaW5lJzogJ3NpbmUnLFxuICAgICAgICAnc3F1YXJlJzogJ3NxdWFyZScsXG4gICAgICAgICdzYXd0b290aCc6ICdzYXd0b290aCcsXG4gICAgICAgICd0cmlhbmdsZSc6ICd0cmlhbmdsZSdcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2lnbmFscyA9IHJlcXVpcmUoJ3NpZ25hbHMnKTtcblxuZnVuY3Rpb24gQXNzZXRMb2FkZXIoKSB7XG4gICAgdGhpcy5vbkNoaWxkQ29tcGxldGUgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uUHJvZ3Jlc3MgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLmxvYWRlcnMgPSB7fTtcblxuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy53ZWJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoTG9ja2VkID0gZmFsc2U7XG4gICAgdGhpcy5udW1Ub3RhbCA9IDA7XG4gICAgdGhpcy5udW1Mb2FkZWQgPSAwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIoKSB7XG4gICAgdmFyIHhociwgaSwgcHJvZ0lkLFxuICAgICAgICBwcm9nSWRzID0gWydNc3htbDIuWE1MSFRUUCcsICdNaWNyb3NvZnQuWE1MSFRUUCcsICdNc3htbDIuWE1MSFRUUC40LjAnXTtcblxuICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuQWN0aXZlWE9iamVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICAgICAgcHJvZ0lkID0gcHJvZ0lkc1tpXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeGhyID0gbmV3IHdpbmRvdy5BY3RpdmVYT2JqZWN0KHByb2dJZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4aHI7XG59XG5cbkFzc2V0TG9hZGVyLnByb3RvdHlwZSA9IHtcbiAgICBhZGQ6IGZ1bmN0aW9uKHVybCwgdHlwZSkge1xuICAgICAgICB2YXIgbG9hZGVyID0gbmV3IEFzc2V0TG9hZGVyLkxvYWRlcih1cmwsIHR5cGUpO1xuICAgICAgICBsb2FkZXIud2ViQXVkaW9Db250ZXh0ID0gdGhpcy53ZWJBdWRpb0NvbnRleHQ7XG4gICAgICAgIGxvYWRlci5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW47XG4gICAgICAgIGxvYWRlci50b3VjaExvY2tlZCA9IHRoaXMudG91Y2hMb2NrZWQ7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChsb2FkZXIpO1xuICAgICAgICB0aGlzLm51bVRvdGFsKys7XG4gICAgICAgIHJldHVybiBsb2FkZXI7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubnVtVG90YWwgPSB0aGlzLnF1ZXVlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmxvYWRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsb2FkZXIgPSB0aGlzLnF1ZXVlLnBvcCgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxvYWRlci5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYubnVtTG9hZGVkKys7XG4gICAgICAgICAgICBpZihzZWxmLm9uUHJvZ3Jlc3MuZ2V0TnVtTGlzdGVuZXJzKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vblByb2dyZXNzLmRpc3BhdGNoKHNlbGYubnVtTG9hZGVkL3NlbGYubnVtVG90YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5sb2FkZXJzW2xvYWRlci51cmxdID0gbG9hZGVyO1xuICAgICAgICAgICAgc2VsZi5vbkNoaWxkQ29tcGxldGUuZGlzcGF0Y2gobG9hZGVyKTtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGVyLm9uRXJyb3IuYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKGxvYWRlcik7XG4gICAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRlci5zdGFydCgpO1xuICAgIH0sXG4gICAgYWRkTXVsdGlwbGU6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyc1t1cmxdO1xuICAgIH1cbn07XG5cbkFzc2V0TG9hZGVyLkxvYWRlciA9IGZ1bmN0aW9uKHVybCwgdHlwZSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgdGhpcy51cmwuc3BsaXQoJz8nKVswXS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcuJykucG9wKCk7XG5cbiAgICB0aGlzLm9uUHJvZ3Jlc3MgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIHRoaXMud2ViQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaExvY2tlZCA9IGZhbHNlO1xufTtcblxuQXNzZXRMb2FkZXIuTG9hZGVyLnByb3RvdHlwZSA9IHtcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21wMyc6XG4gICAgICAgICAgICBjYXNlICdvZ2cnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvKHRoaXMud2ViQXVkaW9Db250ZXh0LCB0aGlzLnRvdWNoTG9ja2VkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnZ2lmJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLmNyb3NzT3JpZ2luKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEpTT04oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0VSUk9SOiBVbmtub3duIHR5cGUgZm9yIGZpbGUgd2l0aCBVUkw6ICcgKyB0aGlzLnVybDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZEF1ZGlvOiBmdW5jdGlvbih3ZWJBdWRpb0NvbnRleHQsIHRvdWNoTG9ja2VkKSB7XG4gICAgICAgIGlmKHdlYkF1ZGlvQ29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkV2ViQXVkaW8od2ViQXVkaW9Db250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEhUTUw1QXVkaW8odG91Y2hMb2NrZWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkV2ViQXVkaW86IGZ1bmN0aW9uKHdlYkF1ZGlvQ29udGV4dCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbDtcbiAgICAgICAgICAgICAgICBzZWxmLm9uUHJvZ3Jlc3MuZGlzcGF0Y2gocGVyY2VudENvbXBsZXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVW5hYmxlIHRvIGNvbXB1dGUgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gc2luY2UgdGhlIHRvdGFsIHNpemUgaXMgdW5rbm93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2ViQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXF1ZXN0LnJlc3BvbnNlLCBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKGJ1ZmZlcik7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH0sXG4gICAgbG9hZEhUTUw1QXVkaW86IGZ1bmN0aW9uKHRvdWNoTG9ja2VkKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7XG4gICAgICAgIHJlcXVlc3QubmFtZSA9IHRoaXMudXJsO1xuICAgICAgICByZXF1ZXN0LnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgaWYgKCEhdG91Y2hMb2NrZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLypyZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXVkaW8gY2FucGxheXRocm91Z2gnKTtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goc2VsZi5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTsqL1xuICAgICAgICAgICAgcmVxdWVzdC5sb2FkKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZEltYWdlOiBmdW5jdGlvbihjcm9zc09yaWdpbikge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmRhdGEgPSByZXF1ZXN0O1xuICAgICAgICByZXF1ZXN0Lm5hbWUgPSB0aGlzLnVybDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIHJlcXVlc3QuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0LnNyYyA9IHRoaXMudXJsO1xuICAgIH0sXG4gICAgbG9hZEpTT046IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciByZXF1ZXN0ID0gY3JlYXRlWEhSKCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTG9hZGVkKCkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuanNvbiA9IHNlbGYuZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goc2VsZi5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ29ubG9hZCcgaW4gcmVxdWVzdCAmJiAnb25lcnJvcicgaW4gcmVxdWVzdCkge1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBoYW5kbGVMb2FkZWQ7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgIT09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NldExvYWRlcjtcblxuLyppZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xufSovXG5cbi8qdmFyIHJvb3QgPSB0aGlzO1xuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBBc3NldExvYWRlcjtcbiAgICB9XG4gICAgZXhwb3J0cy5Bc3NldExvYWRlciA9IEFzc2V0TG9hZGVyO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCdQSVhJJywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gcm9vdC5Bc3NldExvYWRlciA9IEFzc2V0TG9hZGVyOyB9KSgpICk7XG59IGVsc2Uge1xuICAgIHJvb3QuUElYSSA9IFBJWEk7XG59Ki8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyB3ZWJraXRBdWRpb0NvbnRleHRNb25rZXlQYXRjaCBpcyBicmVha2luZyBGaXJlZm94XHJcbi8vcmVxdWlyZSgnLi93ZWJraXRBdWRpb0NvbnRleHRNb25rZXlQYXRjaC5qcycpO1xyXG5cclxudmFyIFdlYkF1ZGlvID0gcmVxdWlyZSgnLi93ZWItYXVkaW8uanMnKSxcclxuXHRIVE1MQXVkaW8gPSByZXF1aXJlKCcuL2h0bWwtYXVkaW8uanMnKSxcclxuXHRQYWdlVmlzaWJpbGl0eSA9IHJlcXVpcmUoJy4vcGFnZS12aXNpYmlsaXR5LmpzJyk7XHJcblxyXG5mdW5jdGlvbiBBdWRpb01hbmFnZXIoKSB7XHJcblx0dGhpcy53ZWJBdWRpb0NvbnRleHQgPSBXZWJBdWRpby5jcmVhdGVDb250ZXh0KCk7XHJcblx0dGhpcy5fc291bmRzID0ge307XHJcblx0dGhpcy5fZGVsYXlUaW1lb3V0cyA9IFtdO1xyXG5cdHRoaXMuX2V4dCA9IHVuZGVmaW5lZDtcclxuXHR0aGlzLl9pc1N1cHBvcnRlZCA9IHVuZGVmaW5lZDtcclxuXHR0aGlzLl90b3VjaExvY2tlZCA9IGZhbHNlO1xyXG5cdHRoaXMuX3F1ZXVlZCA9IFtdO1xyXG5cclxuXHRQYWdlVmlzaWJpbGl0eS5vblBhZ2VIaWRkZW4uYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5wYXVzZUFsbCgpO1xyXG5cdH0sIHRoaXMpO1xyXG5cdFBhZ2VWaXNpYmlsaXR5Lm9uUGFnZVNob3duLmFkZChmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucmVzdW1lQWxsKCk7XHJcblx0fSwgdGhpcyk7XHJcbn1cclxuXHJcbkF1ZGlvTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcblx0YWRkOiBmdW5jdGlvbihrZXksIGRhdGEsIGxvb3ApIHtcclxuXHRcdHZhciBzb3VuZCA9IHRoaXMud2ViQXVkaW9Db250ZXh0ICYmICEoZGF0YSAmJiBkYXRhLnRhZ05hbWUpID8gbmV3IFdlYkF1ZGlvKHRoaXMud2ViQXVkaW9Db250ZXh0KSA6IG5ldyBIVE1MQXVkaW8oKTtcclxuXHRcdHNvdW5kLmxvb3AgPSAhIShsb29wKTtcclxuXHRcdHNvdW5kLmFkZChkYXRhKTtcclxuXHRcdHRoaXMuX3NvdW5kc1trZXldID0gc291bmQ7XHJcblx0XHRyZXR1cm4gc291bmQ7XHJcblx0fSxcclxuXHRnZXRFeHRlbnNpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoIXRoaXMuX2V4dCkge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5cdFx0XHR0aGlzLl9leHQgPSAoZWwuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKSA/ICcub2dnJyA6ICcubXAzJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fZXh0O1xyXG5cdH0sXHJcblx0aXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcy5faXNTdXBwb3J0ZWQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcblx0XHRcdFx0dGhpcy5faXNTdXBwb3J0ZWQgPSAhIShlbCAmJiAoZWwuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKSB8fCBlbC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKSkpO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHR0aGlzLl9pc1N1cHBvcnRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5faXNTdXBwb3J0ZWQ7XHJcblx0fSxcclxuXHR3ZWJBdWRpb1N1cHBvcnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gISF0aGlzLndlYkF1ZGlvQ29udGV4dDtcclxuXHR9LFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmRzW2tleV07XHJcblx0fSxcclxuXHRwbGF5OiBmdW5jdGlvbihrZXksIGRlbGF5LCBsb29wKSB7XHJcblx0XHRpZih0aGlzLl90b3VjaExvY2tlZCkge1xyXG5cdFx0XHR0aGlzLnF1ZXVlVXAoa2V5LCBkZWxheSwgbG9vcCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBzb3VuZCA9IHRoaXMuX3NvdW5kc1trZXldO1xyXG5cdFx0aWYoIXNvdW5kKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuICAgICAgICBpZihsb29wICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0c291bmQubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRlbGF5ICE9PSB1bmRlZmluZWQgJiYgZGVsYXkgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWxheWVkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbGF5VGltZW91dHMucHVzaChkZWxheWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXV0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kc1tpXS52b2x1bWUgPSAwO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dW5NdXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2ldLnZvbHVtZSA9IDE7XHJcblx0XHR9XHJcblx0fSxcclxuXHRwYXVzZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZighdGhpcy5fc291bmRzW2tleV0pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmRzW2tleV0ucGF1c2UoKTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYoIXRoaXMuX3NvdW5kc1trZXldKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NvdW5kc1trZXldLnN0b3AoKTtcclxuXHR9LFxyXG5cdHBhdXNlQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0aWYodGhpcy5fc291bmRzW2ldLnBsYXlpbmcpIHtcclxuXHRcdFx0XHR0aGlzLl9zb3VuZHNbaV0ucGF1c2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVzdW1lQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0aWYodGhpcy5fc291bmRzW2ldLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuX3NvdW5kc1tpXS5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHN0b3BBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kc1trZXldLnN0b3AoKTtcclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZGVsYXlUaW1lb3V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZW91dHMubGVuZ3RoID0gMDtcclxuXHR9LFxyXG5cdGdldFRvdWNoTG9ja2VkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl90b3VjaExvY2tlZDtcclxuXHR9LFxyXG5cdHNldFRvdWNoTG9ja2VkOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dGhpcy5fdG91Y2hMb2NrZWQgPSB2YWx1ZTtcclxuXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgdW5sb2NrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGYuX3RvdWNoTG9ja2VkID0gZmFsc2U7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jayk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5fcXVldWVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0c2VsZi5fcXVldWVkW2ldKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2VsZi5fcXVldWVkLmxlbmd0aCA9IDA7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMuX3RvdWNoTG9ja2VkKSB7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jaywgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cXVldWVVcDogZnVuY3Rpb24oa2V5LCBkZWxheSwgbG9vcCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIGZuID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGYucGxheShrZXksIGRlbGF5LCBsb29wKTtcclxuXHRcdH07XHJcblx0XHR0aGlzLl9xdWV1ZWQucHVzaChmbik7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBdWRpb01hbmFnZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIEhUTUxBdWRpbygpIHtcclxuXHR0aGlzLl9zb3VuZCA9IG51bGw7XHJcblx0dGhpcy5fbG9vcCA9IGZhbHNlO1xyXG5cdHRoaXMuX3ZvbHVtZSA9IDE7XHJcblx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5IVE1MQXVkaW8ucHJvdG90eXBlID0ge1xyXG5cdGFkZDogZnVuY3Rpb24oZWwpIHtcclxuXHRcdHRoaXMuX3NvdW5kID0gZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmQ7XHJcblx0fSxcclxuXHRwbGF5OiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMuX3NvdW5kLnZvbHVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kLnZvbHVtZSA9IHRoaXMuX3ZvbHVtZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NvdW5kLnBsYXkoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5fc291bmQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoc2VsZi5fbG9vcCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0XHRcdHRoaXMucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbGYuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH0sXHJcblx0cGF1c2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5fc291bmQucGF1c2UoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XHJcblx0fSxcclxuXHRzdG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ2xvb3AnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb29wO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbG9vcCA9IHZhbHVlO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3ZvbHVtZScsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZvbHVtZTtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl92b2x1bWUgPSB2YWx1ZTtcclxuXHRcdGlmKHRoaXMuX3NvdW5kICYmIHRoaXMuX3NvdW5kLnZvbHVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kLnZvbHVtZSA9IHRoaXMuX3ZvbHVtZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdwbGF5aW5nJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGxheWluZztcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdwYXVzZWQnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXVzZWQ7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAnc291bmQnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZDtcclxuXHR9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIVE1MQXVkaW87XHJcbiIsInZhciBLZXlib2FyZCA9IHtcblx0QTogJ0EnLmNoYXJDb2RlQXQoMCksXG5cdEI6ICdCJy5jaGFyQ29kZUF0KDApLFxuXHRDOiAnQycuY2hhckNvZGVBdCgwKSxcblx0RDogJ0QnLmNoYXJDb2RlQXQoMCksXG5cdEU6ICdFJy5jaGFyQ29kZUF0KDApLFxuXHRGOiAnRicuY2hhckNvZGVBdCgwKSxcblx0RzogJ0cnLmNoYXJDb2RlQXQoMCksXG5cdEg6ICdIJy5jaGFyQ29kZUF0KDApLFxuXHRJOiAnSScuY2hhckNvZGVBdCgwKSxcblx0SjogJ0onLmNoYXJDb2RlQXQoMCksXG5cdEs6ICdLJy5jaGFyQ29kZUF0KDApLFxuXHRMOiAnTCcuY2hhckNvZGVBdCgwKSxcblx0TTogJ00nLmNoYXJDb2RlQXQoMCksXG5cdE46ICdOJy5jaGFyQ29kZUF0KDApLFxuXHRPOiAnTycuY2hhckNvZGVBdCgwKSxcblx0UDogJ1AnLmNoYXJDb2RlQXQoMCksXG5cdFE6ICdRJy5jaGFyQ29kZUF0KDApLFxuXHRSOiAnUicuY2hhckNvZGVBdCgwKSxcblx0UzogJ1MnLmNoYXJDb2RlQXQoMCksXG5cdFQ6ICdUJy5jaGFyQ29kZUF0KDApLFxuXHRVOiAnVScuY2hhckNvZGVBdCgwKSxcblx0VjogJ1YnLmNoYXJDb2RlQXQoMCksXG5cdFc6ICdXJy5jaGFyQ29kZUF0KDApLFxuXHRYOiAnWCcuY2hhckNvZGVBdCgwKSxcblx0WTogJ1knLmNoYXJDb2RlQXQoMCksXG5cdFo6ICdaJy5jaGFyQ29kZUF0KDApLFxuXHRaRVJPOiAnMCcuY2hhckNvZGVBdCgwKSxcblx0T05FOiAnMScuY2hhckNvZGVBdCgwKSxcblx0VFdPOiAnMicuY2hhckNvZGVBdCgwKSxcblx0VEhSRUU6ICczJy5jaGFyQ29kZUF0KDApLFxuXHRGT1VSOiAnNCcuY2hhckNvZGVBdCgwKSxcblx0RklWRTogJzUnLmNoYXJDb2RlQXQoMCksXG5cdFNJWDogJzYnLmNoYXJDb2RlQXQoMCksXG5cdFNFVkVOOiAnNycuY2hhckNvZGVBdCgwKSxcblx0RUlHSFQ6ICc4Jy5jaGFyQ29kZUF0KDApLFxuXHROSU5FOiAnOScuY2hhckNvZGVBdCgwKSxcblx0TlVNUEFEXzA6IDk2LFxuXHROVU1QQURfMTogOTcsXG5cdE5VTVBBRF8yOiA5OCxcblx0TlVNUEFEXzM6IDk5LFxuXHROVU1QQURfNDogMTAwLFxuXHROVU1QQURfNTogMTAxLFxuXHROVU1QQURfNjogMTAyLFxuXHROVU1QQURfNzogMTAzLFxuXHROVU1QQURfODogMTA0LFxuXHROVU1QQURfOTogMTA1LFxuXHROVU1QQURfTVVMVElQTFk6IDEwNixcblx0TlVNUEFEX0FERDogMTA3LFxuXHROVU1QQURfRU5URVI6IDEwOCxcblx0TlVNUEFEX1NVQlRSQUNUOiAxMDksXG5cdE5VTVBBRF9ERUNJTUFMOiAxMTAsXG5cdE5VTVBBRF9ESVZJREU6IDExMSxcblx0RjE6IDExMixcblx0RjI6IDExMyxcblx0RjM6IDExNCxcblx0RjQ6IDExNSxcblx0RjU6IDExNixcblx0RjY6IDExNyxcblx0Rjc6IDExOCxcblx0Rjg6IDExOSxcblx0Rjk6IDEyMCxcblx0RjEwOiAxMjEsXG5cdEYxMTogMTIyLFxuXHRGMTI6IDEyMyxcblx0RjEzOiAxMjQsXG5cdEYxNDogMTI1LFxuXHRGMTU6IDEyNixcblx0Q09MT046IDE4Nixcblx0RVFVQUxTOiAxODcsXG5cdFVOREVSU0NPUkU6IDE4OSxcblx0UVVFU1RJT05fTUFSSzogMTkxLFxuXHRUSUxERTogMTkyLFxuXHRPUEVOX0JSQUNLRVQ6IDIxOSxcblx0QkFDS1dBUkRfU0xBU0g6IDIyMCxcblx0Q0xPU0VEX0JSQUNLRVQ6IDIyMSxcblx0UVVPVEVTOiAyMjIsXG5cdEJBQ0tTUEFDRTogOCxcblx0VEFCOiA5LFxuXHRDTEVBUjogMTIsXG5cdEVOVEVSOiAxMyxcblx0U0hJRlQ6IDE2LFxuXHRDT05UUk9MOiAxNyxcblx0QUxUOiAxOCxcblx0Q0FQU19MT0NLOiAyMCxcblx0RVNDOiAyNyxcblx0U1BBQ0VCQVI6IDMyLFxuXHRQQUdFX1VQOiAzMyxcblx0UEFHRV9ET1dOOiAzNCxcblx0RU5EOiAzNSxcblx0SE9NRTogMzYsXG5cdExFRlQ6IDM3LFxuXHRVUDogMzgsXG5cdFJJR0hUOiAzOSxcblx0RE9XTjogNDAsXG5cdElOU0VSVDogNDUsXG5cdERFTEVURTogNDYsXG5cdEhFTFA6IDQ3LFxuXHROVU1fTE9DSzogMTQ0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtleWJvYXJkOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNpZ25hbHMgPSByZXF1aXJlKCdzaWduYWxzJyk7XG5cbmZ1bmN0aW9uIE1pY3JvcGhvbmUoKSB7XG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYV8gPSAobmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhKTtcbiAgICB0aGlzLl9pc1N1cHBvcnRlZCA9ICEhbmF2aWdhdG9yLmdldFVzZXJNZWRpYV87XG4gICAgdGhpcy5fc3RyZWFtID0gbnVsbDtcblxuICAgIHRoaXMub25Db25uZWN0ZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uRGVuaWVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG59XG5cbk1pY3JvcGhvbmUucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZighdGhpcy5faXNTdXBwb3J0ZWQpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfKCB7YXVkaW86dHJ1ZX0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzZWxmLl9zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHNlbGYub25Db25uZWN0ZWQuZGlzcGF0Y2goc3RyZWFtKTtcbiAgICB9LCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZihlLm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkRXJyb3InIHx8IGUgPT09ICdQRVJNSVNTSU9OX0RFTklFRCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQZXJtaXNzaW9uIGRlbmllZC4gWW91IGNhbiB1bmRvIHRoaXMgYnkgY2xpY2tpbmcgdGhlIGNhbWVyYSBpY29uIHdpdGggdGhlIHJlZCBjcm9zcyBpbiB0aGUgYWRkcmVzcyBiYXInKTtcbiAgICAgICAgICAgIHNlbGYub25EZW5pZWQuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaChlLm1lc3NhZ2UgfHwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbk1pY3JvcGhvbmUucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5fc3RyZWFtLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fc3RyZWFtID0gbnVsbDtcbiAgICB9XG59O1xuXG5NaWNyb3Bob25lLnByb3RvdHlwZS5jcmVhdGVXZWJBdWRpb1NvdXJjZSA9IGZ1bmN0aW9uKHdlYkF1ZGlvQ29udGV4dCwgY29ubmVjdFRvKSB7XG4gICAgaWYoIXRoaXMuX3N0cmVhbSkgeyByZXR1cm47IH1cblxuICAgIHZhciBtZWRpYVN0cmVhbVNvdXJjZSA9IHdlYkF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSggdGhpcy5fc3RyZWFtICk7XG4gICAgaWYoY29ubmVjdFRvKSB7XG4gICAgICAgIG1lZGlhU3RyZWFtU291cmNlLmNvbm5lY3QoY29ubmVjdFRvKTtcbiAgICB9XG4gICAgLy8gSEFDSzogc3RvcHMgbW96IGdhcmJhZ2UgY29sbGVjdGlvbiBraWxsaW5nIHRoZSBzdHJlYW1cbiAgICAvLyBzZWUgaHR0cHM6Ly9zdXBwb3J0Lm1vemlsbGEub3JnL2VuLVVTL3F1ZXN0aW9ucy85ODQxNzlcbiAgICBpZihuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgIHdpbmRvdy5ob3JyaWJsZV9oYWNrX2Zvcl9tb3ppbGxhID0gbWVkaWFTdHJlYW1Tb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBtZWRpYVN0cmVhbVNvdXJjZTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaWNyb3Bob25lLnByb3RvdHlwZSwgJ3N0cmVhbScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyZWFtO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWljcm9waG9uZS5wcm90b3R5cGUsICdpc1N1cHBvcnRlZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTdXBwb3J0ZWQ7XG4gICAgfVxufSk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gTWljcm9waG9uZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNpZ25hbHMgPSByZXF1aXJlKCdzaWduYWxzJyk7XG5cbnZhciBvblBhZ2VIaWRkZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKSxcbiAgICBvblBhZ2VTaG93biA9IG5ldyBzaWduYWxzLlNpZ25hbCgpLFxuICAgIGhpZGRlbiwgdmlzaWJpbGl0eUNoYW5nZTtcblxuZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmIChkb2N1bWVudFtoaWRkZW5dKSB7XG4gICAgICAgIG9uUGFnZUhpZGRlbi5kaXNwYXRjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9uUGFnZVNob3duLmRpc3BhdGNoKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50LmhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gT3BlcmEgMTIuMTAgYW5kIEZpcmVmb3ggMTggYW5kIGxhdGVyIHN1cHBvcnQgXG4gICAgaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21zSGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ21zdmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbn1cblxuaWYodmlzaWJpbGl0eUNoYW5nZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb25QYWdlU2hvd246IG9uUGFnZVNob3duLFxuICAgIG9uUGFnZUhpZGRlbjogb25QYWdlSGlkZGVuXG59OyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgICB9XG59KCkpOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gV2ViQXVkaW8oY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgV2ViQXVkaW8uY3JlYXRlQ29udGV4dCgpO1xuICAgIHRoaXMuX3NvdW5kID0gW107XG4gICAgdGhpcy5fbm9kZSA9IFtdO1xuICAgIHRoaXMuX2dhaW4gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuX2dhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMuX3N0YXJ0ZWRBdCA9IDA7XG4gICAgdGhpcy5fcGF1c2VkQXQgPSAwO1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fbm9kZUZhY3RvcnkgPSBuZXcgV2ViQXVkaW8uTm9kZUZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLl9oZWxwZXJzID0gbmV3IFdlYkF1ZGlvLkhlbHBlcnModGhpcy5jb250ZXh0KTtcbn1cblxuV2ViQXVkaW8ucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIGlmKCFidWZmZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuX3NvdW5kLnB1c2gobmV3IFdlYkF1ZGlvLlNvdW5kKGJ1ZmZlciwgdGhpcy5jb250ZXh0KSk7XG4gICAgICAgIHRoaXMuX3NvdW5kW3RoaXMuX3NvdW5kLmxlbmd0aC0xXS5sb29wID0gdGhpcy5fbG9vcDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kW3RoaXMuX3NvdW5kLmxlbmd0aC0xXTtcbiAgICB9LFxuICAgIHBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWF4RHVyYXRpb24gPSAtMSxcbiAgICAgICAgICAgIGxvbmdlc3RTb3VuZDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0uY29ubmVjdCh0aGlzLl9nYWluKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnBsYXkoMCwgdGhpcy5fcGF1c2VkQXQgLyAxMDAwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuX3NvdW5kW2ldLmR1cmF0aW9uID4gbWF4RHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbiA9IHRoaXMuX3NvdW5kW2ldLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGxvbmdlc3RTb3VuZCA9IHRoaXMuX3NvdW5kW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbG9uZ2VzdFNvdW5kLnNvdXJjZS5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3N0YXJ0ZWRBdCA9IERhdGUubm93KCkgLSB0aGlzLl9wYXVzZWRBdDtcbiAgICAgICAgdGhpcy5fcGxheWluZyA9IHRydWU7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLl9wYXVzZWRBdCA9IERhdGUubm93KCkgLSB0aGlzLl9zdGFydGVkQXQ7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0uc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhdXNlZEF0ID0gMDtcbiAgICAgICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdsb29wJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLmxvb3AgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAndm9sdW1lJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYWluLmdhaW4udmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAncGxheWluZycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWluZztcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3BhdXNlZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkQXQgPiAwO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAnc291bmQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAnbm9kZUZhY3RvcnknLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVGYWN0b3J5O1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAnaGVscGVycycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVscGVycztcbiAgICB9XG59KTtcblxuLypcbiAqIENvbnRleHRcbiAqL1xuXG5XZWJBdWRpby5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xuICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgaWYod2luZG93LkF1ZGlvQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4vKlxuICogU291bmRcbiAqL1xuXG5XZWJBdWRpby5Tb3VuZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgY29udGV4dCkge1xuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuX25vZGUgPSBbXTtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gJyc7XG59O1xuXG5XZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUgPSB7XG4gICAgcGxheTogZnVuY3Rpb24oZGVsYXksIG9mZnNldCkge1xuICAgICAgICBpZihkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkZWxheSA+IDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gdGhpcy5fY29udGV4dC5jdXJyZW50VGltZSArIGRlbGF5O1xuICAgICAgICB9XG4gICAgICAgIGlmKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlLmxvb3AgPSB0aGlzLl9sb29wO1xuICAgICAgICB0aGlzLnNvdXJjZS5zdGFydChkZWxheSwgb2Zmc2V0KTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29ubmVjdDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBpZih0aGlzLl9ub2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX25vZGVbdGhpcy5fbm9kZS5sZW5ndGggLSAxXS5jb25uZWN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbm9kZTtcbiAgICB9LFxuICAgIGFkZE5vZGU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fbm9kZS5wdXNoKG5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgfSxcbiAgICB1cGRhdGVDb25uZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX25vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2UuY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVbaS0xXS5jb25uZWN0KHRoaXMuX25vZGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUsICdzb3VyY2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fc291cmNlID0gdGhpcy5fY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5idWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ2xvb3AnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ2R1cmF0aW9uJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXIgPyB0aGlzLl9idWZmZXIuZHVyYXRpb24gOiAwO1xuICAgIH1cbn0pO1xuXG4vKlxuICogTm9kZXNcbiAqL1xuXG5XZWJBdWRpby5Ob2RlRmFjdG9yeSA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcih0eXBlLCBmcmVxdWVuY3kpIHtcbiAgICAgICAgdmFyIGZpbHRlck5vZGUgPSBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgICAgICBmaWx0ZXJOb2RlLnR5cGUgPSB0eXBlO1xuICAgICAgICBpZihmcmVxdWVuY3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmlsdGVyTm9kZS5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3k7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlck5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2FpbjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVQYW5uZXIoKTtcbiAgICAgICAgICAgIG5vZGUucGFubmluZ01vZGVsID0gJ0hSVEYnO1xuICAgICAgICAgICAgLy9ub2RlLnBhbm5pbmdNb2RlbCA9ICdlcXVhbHBvd2VyJztcbiAgICAgICAgICAgIC8vc2V0T3B0aW9uYWxQYXJhbSh4LCAwKTtcbiAgICAgICAgICAgIC8vc2V0T3B0aW9uYWxQYXJhbSh5LCAwKTtcbiAgICAgICAgICAgIC8vc2V0T3B0aW9uYWxQYXJhbSh6LCAwKTtcbiAgICAgICAgICAgIC8vbm9kZS5zZXRQb3NpdGlvbih4LCB5LCB6KTtcbiAgICAgICAgICAgIC8qXG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgZm9yIHN0ZXJlbyBpcyBIUlRGIFxuXG5cbiAgICAgICAgICAgIC8vIFVzZXMgYSAzRCBjYXJ0ZXNpYW4gY29vcmRpbmF0ZSBzeXN0ZW0gXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKG9iamVjdC5wb3NpdGlvbi54LzI5MCwgb2JqZWN0LnBvc2l0aW9uLnkvMjkwLCBvYmplY3QucG9zaXRpb24uei8yOTApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0T3JpZW50YXRpb24oMSwgMCwgMCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldFZlbG9jaXR5KDAsIDAsIDApO1xuXG4gICAgICAgICAgICAvLyBEaXN0YW5jZSBtb2RlbCBhbmQgYXR0cmlidXRlcyBcbiAgICAgICAgICAgIG5vZGUuZGlzdGFuY2VNb2RlbCA9ICdpbnZlcnNlJzsgLy8gJ2xpbmVhcicgJ2ludmVyc2UnICdleHBvbmVudGlhbCcgXG4gICAgICAgICAgICBub2RlLnJlZkRpc3RhbmNlID0gMTtcbiAgICAgICAgICAgIG5vZGUubWF4RGlzdGFuY2UgPSAxMDAwMDtcbiAgICAgICAgICAgIG5vZGUucm9sbG9mZkZhY3RvciA9IDE7XG5cbiAgICAgICAgICAgIC8vIERpcmVjdGlvbmFsIHNvdW5kIGNvbmUgLSBUaGUgY29uZSBhbmdsZXMgYXJlIGluIGRlZ3JlZXMgYW5kIHJ1biBmcm9tIDAgdG8gMzYwXG4gICAgICAgICAgICAvLyBub2RlLmNvbmVJbm5lckFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgLy8gbm9kZS5jb25lT3V0ZXJBbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZU91dGVyR2FpbiA9IDA7XG5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAvLyBub3JtYWxpc2VkIHZlY1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgIGxvd3Bhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2xvd3Bhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdoaWdocGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFuZHBhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2JhbmRwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb3dzaGVsZjogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignbG93c2hlbGYnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hzaGVsZjogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignaGlnaHNoZWxmJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZWFraW5nOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdwZWFraW5nJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RjaDogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignbm90Y2gnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbHBhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2FsbHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxheTogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZURlbGF5KCk7XG4gICAgICAgICAgICBpZih0aW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmRlbGF5VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udm9sdmVyOiBmdW5jdGlvbihpbXB1bHNlUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vIGltcHVsc2VSZXNwb25zZSBpcyBhbiBhdWRpbyBmaWxlIGJ1ZmZlclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUNvbnZvbHZlcigpO1xuICAgICAgICAgICAgbm9kZS5idWZmZXIgPSBpbXB1bHNlUmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV2ZXJiOiBmdW5jdGlvbihzZWNvbmRzLCBkZWNheSwgcmV2ZXJzZSkge1xuICAgICAgICAgICByZXR1cm4gdGhpcy5jb252b2x2ZXIodGhpcy5jcmVhdGVJbXB1bHNlUmVzcG9uc2Uoc2Vjb25kcywgZGVjYXksIHJldmVyc2UpKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlSW1wdWxzZVJlc3BvbnNlOiBmdW5jdGlvbihzZWNvbmRzLCBkZWNheSwgcmV2ZXJzZSkge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgYSByZXZlcmIgZWZmZWN0XG4gICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyB8fCAxO1xuICAgICAgICAgICAgZGVjYXkgPSBkZWNheSB8fCA1O1xuICAgICAgICAgICAgcmV2ZXJzZSA9ICEhcmV2ZXJzZTtcblxuICAgICAgICAgICAgdmFyIG51bUNoYW5uZWxzID0gMixcbiAgICAgICAgICAgICAgICByYXRlID0gY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJhdGUgKiBzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGltcHVsc2VSZXNwb25zZSA9IGNvbnRleHQuY3JlYXRlQnVmZmVyKG51bUNoYW5uZWxzLCBsZW5ndGgsIHJhdGUpLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBpbXB1bHNlUmVzcG9uc2UuZ2V0Q2hhbm5lbERhdGEoMCksXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBpbXB1bHNlUmVzcG9uc2UuZ2V0Q2hhbm5lbERhdGEoMSksXG4gICAgICAgICAgICAgICAgbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG4gPSByZXZlcnNlID8gbGVuZ3RoIC0gMSA6IGk7XG4gICAgICAgICAgICAgICAgbGVmdFtpXSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogTWF0aC5wb3coMSAtIG4gLyBsZW5ndGgsIGRlY2F5KTtcbiAgICAgICAgICAgICAgICByaWdodFtpXSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogTWF0aC5wb3coMSAtIG4gLyBsZW5ndGgsIGRlY2F5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGltcHVsc2VSZXNwb25zZTtcbiAgICAgICAgfSxcbiAgICAgICAgYW5hbHlzZXI6IGZ1bmN0aW9uKGZmdFNpemUpIHtcbiAgICAgICAgICAgIGZmdFNpemUgPSBmZnRTaXplIHx8IDEwMjQ7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIG5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC44NTtcbiAgICAgICAgICAgIC8vIHJlc29sdXRpb24gZmZ0U2l6ZTogMzIgLSAyMDQ4IChwb3cgMilcbiAgICAgICAgICAgIC8vIGZyZXF1ZW5jeUJpbkNvdW50IHdpbGwgYmUgaGFsZiB0aGlzIHZhbHVlXG4gICAgICAgICAgICBub2RlLmZmdFNpemUgPSBmZnRTaXplO1xuICAgICAgICAgICAgLy9ub2RlLm1pbkRlY2liZWxzID0gLTEwMDtcbiAgICAgICAgICAgIC8vbm9kZS5tYXhEZWNpYmVscyA9IC0zMDtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBjb21wcmVzc29yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGxvd2VycyB0aGUgdm9sdW1lIG9mIHRoZSBsb3VkZXN0IHBhcnRzIG9mIHRoZSBzaWduYWwgYW5kIHJhaXNlcyB0aGUgdm9sdW1lIG9mIHRoZSBzb2Z0ZXN0IHBhcnRzXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgICAgICAgICAvLyBtaW4gZGVjaWJlbHMgdG8gc3RhcnQgY29tcHJlc3NpbmcgYXQgZnJvbSAtMTAwIHRvIDBcbiAgICAgICAgICAgIG5vZGUudGhyZXNob2xkLnZhbHVlID0gLTI0O1xuICAgICAgICAgICAgLy8gZGVjaWJlbCB2YWx1ZSB0byBzdGFydCBjdXJ2ZSB0byBjb21wcmVzc2VkIHZhbHVlIGZyb20gMCB0byA0MFxuICAgICAgICAgICAgbm9kZS5rbmVlLnZhbHVlID0gMzA7XG4gICAgICAgICAgICAvLyBhbW91bnQgb2YgY2hhbmdlIHBlciBkZWNpYmVsIGZyb20gMSB0byAyMFxuICAgICAgICAgICAgbm9kZS5yYXRpby52YWx1ZSA9IDEyO1xuICAgICAgICAgICAgLy8gZ2FpbiByZWR1Y3Rpb24gY3VycmVudGx5IGFwcGxpZWQgYnkgY29tcHJlc3NvciBmcm9tIC0yMCB0byAwXG4gICAgICAgICAgICAvLyBub2RlLnJlZHVjdGlvbi52YWx1ZVxuICAgICAgICAgICAgLy8gc2Vjb25kcyB0byByZWR1Y2UgZ2FpbiBieSAxMGRiIGZyb20gMCB0byAxIC0gaG93IHF1aWNrbHkgc2lnbmFsIGFkYXB0ZWQgd2hlbiB2b2x1bWUgaW5jcmVhc2VkXG4gICAgICAgICAgICBub2RlLmF0dGFjay52YWx1ZSA9IDAuMDAwMztcbiAgICAgICAgICAgIC8vIHNlY29uZHMgdG8gaW5jcmVhc2UgZ2FpbiBieSAxMGRiIGZyb20gMCB0byAxIC0gaG93IHF1aWNrbHkgc2lnbmFsIGFkYXB0ZWQgd2hlbiB2b2x1bWUgcmVkY3VjZWRcbiAgICAgICAgICAgIG5vZGUucmVsZWFzZS52YWx1ZSA9IDAuMjU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzdG9ydGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpO1xuICAgICAgICAgICAgLy8gRmxvYXQzMkFycmF5IGRlZmluaW5nIGN1cnZlICh2YWx1ZXMgYXJlIGludGVycG9sYXRlZClcbiAgICAgICAgICAgIC8vbm9kZS5jdXJ2ZVxuICAgICAgICAgICAgLy8gdXAtc2FtcGxlIGJlZm9yZSBhcHBseWluZyBjdXJ2ZSBmb3IgYmV0dGVyIHJlc29sdXRpb24gcmVzdWx0ICdub25lJywgJzJ4JyBvciAnNHgnXG4gICAgICAgICAgICBub2RlLm92ZXJzYW1wbGUgPSAnMngnO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLypcbiAqIEhlbHBlcnNcbiAqL1xuXG5XZWJBdWRpby5IZWxwZXJzID0gZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gcmFtcChwYXJhbSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHBhcmFtLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBjb250ZXh0LmN1cnJlbnRUaW1lICsgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhblhZWihub2RlLCB4LCB5LCB6KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoeSwgMTApO1xuICAgICAgICB6ID0gcGFyc2VGbG9hdCh6LCAxMCk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFuWChub2RlLCB4KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgLy8geCBmcm9tIC1NYXRoLlBJLzQgdG8gTWF0aC5QSS80ICgtNDUgdG8gNDUgZGVnKVxuICAgICAgICB2YXIgeiA9IHggKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgaWYgKHogPiBNYXRoLlBJIC8gMikge1xuICAgICAgICAgICAgeiA9IE1hdGguUEkgLSB6O1xuICAgICAgICB9XG4gICAgICAgIHggPSBNYXRoLnNpbih4KTtcbiAgICAgICAgeiA9IE1hdGguc2luKHopO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHgsIDAsIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhbWVyYVBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgICAgLy8gc2V0IHRoZSBhdWRpbyBjb250ZXh0J3MgbGlzdGVuZXIgcG9zaXRpb24gdG8gbWF0Y2ggdGhlIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICBjb250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvcHBsZXIocGFubmVyTm9kZSwgeCwgeSwgeiwgZGVsdGFYLCBkZWx0YVksIGRlbHRhWiwgZGVsdGFUaW1lKSB7XG4gICAgICAgIC8vIFRyYWNraW5nIHRoZSB2ZWxvY2l0eSBjYW4gYmUgZG9uZSBieSBnZXR0aW5nIHRoZSBvYmplY3QncyBwcmV2aW91cyBwb3NpdGlvbiwgc3VidHJhY3RpbmcgXG4gICAgICAgIC8vIGl0IGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIGRpdmlkaW5nIHRoZSByZXN1bHQgYnkgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IGZyYW1lXG4gICAgICAgIHBhbm5lck5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIHBhbm5lck5vZGUuc2V0VmVsb2NpdHkoZGVsdGFYL2RlbHRhVGltZSwgZGVsdGFZL2RlbHRhVGltZSwgZGVsdGFaL2RlbHRhVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGZpbHRlck5vZGUsIHZhbHVlLCBxdWFsaXR5LCBnYWluKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xuICAgICAgICBxdWFsaXR5ID0gcGFyc2VGbG9hdChxdWFsaXR5LCAxMCk7XG4gICAgICAgIGdhaW4gPSBwYXJzZUZsb2F0KGdhaW4sIDEwKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICBmaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGdldEZyZXF1ZW5jeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9maWx0ZXJOb2RlLlEudmFsdWUgPSBxdWFsaXR5O1xuICAgICAgICAvL2ZpbHRlck5vZGUuZ2Fpbi52YWx1ZSA9IGdhaW47XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZyZXF1ZW5jeSBieSBwYXNzaW5nIG51bWJlciBmcm9tIDAgdG8gMVxuICAgIGZ1bmN0aW9uIGdldEZyZXF1ZW5jeSh2YWx1ZSkge1xuICAgICAgICAvLyBDbGFtcCB0aGUgZnJlcXVlbmN5IGJldHdlZW4gdGhlIG1pbmltdW0gdmFsdWUgKDQwIEh6KSBhbmQgaGFsZiBvZiB0aGVcbiAgICAgICAgLy8gc2FtcGxpbmcgcmF0ZS5cbiAgICAgICAgdmFyIG1pblZhbHVlID0gNDA7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSAvIDI7XG4gICAgICAgIC8vIExvZ2FyaXRobSAoYmFzZSAyKSB0byBjb21wdXRlIGhvdyBtYW55IG9jdGF2ZXMgZmFsbCBpbiB0aGUgcmFuZ2UuXG4gICAgICAgIHZhciBudW1iZXJPZk9jdGF2ZXMgPSBNYXRoLmxvZyhtYXhWYWx1ZSAvIG1pblZhbHVlKSAvIE1hdGguTE4yO1xuICAgICAgICAvLyBDb21wdXRlIGEgbXVsdGlwbGllciBmcm9tIDAgdG8gMSBiYXNlZCBvbiBhbiBleHBvbmVudGlhbCBzY2FsZS5cbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygyLCBudW1iZXJPZk9jdGF2ZXMgKiAodmFsdWUgLSAxLjApKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICByZXR1cm4gbWF4VmFsdWUgKiBtdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2Uoc3RyZWFtLCBjb25uZWN0VG8pIHtcbiAgICAgICAgdmFyIG1lZGlhU3RyZWFtU291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSggc3RyZWFtICk7XG4gICAgICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICAgICAgbWVkaWFTdHJlYW1Tb3VyY2UuY29ubmVjdChjb25uZWN0VG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgICAgIC8vIHNlZSBodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvZW4tVVMvcXVlc3Rpb25zLzk4NDE3OVxuICAgICAgICBpZihuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYVN0cmVhbVNvdXJjZTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgd2F2ZVNoYXBlciBkaXN0b3J0aW9uIGN1cnZlIGZyb20gMCB0byAxXG4gICAgZnVuY3Rpb24gZGlzdG9ydCh2YWx1ZSkge1xuICAgICAgICB2YXIgayA9IHZhbHVlICogMTAwLFxuICAgICAgICAgICAgbiA9IDIyMDUwLFxuICAgICAgICAgICAgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KG4pLFxuICAgICAgICAgICAgZGVnID0gTWF0aC5QSSAvIDE4MDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBpICogMiAvIG4gLSAxO1xuICAgICAgICAgICAgY3VydmVbaV0gPSAoMyArIGspICogeCAqIDIwICogZGVnIC8gKE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJ2ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmYWRlOiBmdW5jdGlvbihnYWluTm9kZSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICByYW1wKGdhaW5Ob2RlLmdhaW4sIHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhblg6IGZ1bmN0aW9uKHBhbm5lck5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBwYW5YKHBhbm5lck5vZGUsIHZhbHVlICogTWF0aC5QSSAvIDQpO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0Q2FtZXJhUG9zaXRpb24nOiBzZXRDYW1lcmFQb3NpdGlvbixcbiAgICAgICAgJ3Bhbic6IHBhblhZWixcbiAgICAgICAgJ2RvcHBsZXInOiBkb3BwbGVyLFxuICAgICAgICAnZmlsdGVyJzogZmlsdGVyLFxuICAgICAgICAnZ2V0RnJlcXVlbmN5JzogZ2V0RnJlcXVlbmN5LFxuICAgICAgICAnY3JlYXRlTWljcm9waG9uZVNvdXJjZSc6IGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2UsXG4gICAgICAgICdkaXN0b3J0JyA6IGRpc3RvcnRcbiAgICB9O1xufTtcblxuLypcblxuVGhyZWVKUyBwb3NpdGlvbmFsXG5cbnNldFBvc2l0aW9uQW5kVmVsb2NpdHkgOiBmdW5jdGlvbihvYmplY3QsIGF1ZGlvTm9kZSwgeCwgeSwgeiwgZHQpIHtcbiAgICB2YXIgcCA9IG9iamVjdC5tYXRyaXhXb3JsZC5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBweCA9IHAueCwgcHkgPSBwLnksIHB6ID0gcC56O1xuICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoeCx5LHopO1xuICAgIG9iamVjdC51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgIHZhciBxID0gb2JqZWN0Lm1hdHJpeFdvcmxkLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIGR4ID0gcS54LXB4LCBkeSA9IHEueS1weSwgZHogPSBxLnotcHo7XG4gICAgaWYgKHRoaXMucG9zaXRpb25FbmFibGVkKSB7XG4gICAgICBhdWRpb05vZGUuc2V0UG9zaXRpb24ocS54LCBxLnksIHEueik7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbG9jaXR5RW5hYmxlZCkge1xuICAgICAgYXVkaW9Ob2RlLnNldFZlbG9jaXR5KGR4L2R0LCBkeS9kdCwgZHovZHQpO1xuICAgIH1cbiAgfSxcblxuICBzZXRQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCBvYmplY3Quc291bmQucGFubmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDEpO1xuICAgICAgdmFyIG0gPSBvYmplY3QubWF0cml4V29ybGQ7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuICAgICAgb2JqZWN0LnNvdW5kLnBhbm5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgIG0ubjE0ID0gbXg7XG4gICAgICBtLm4yNCA9IG15OyBcbiAgICAgIG0ubjM0ID0gbXo7XG4gICAgfVxuICB9LFxuXG4gIHNldExpc3RlbmVyUG9zaXRpb24gOiBmdW5jdGlvbihvYmplY3QsIHgsIHksIHosIGR0KSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkFuZFZlbG9jaXR5KG9iamVjdCwgdGhpcy5hdWRpby5jb250ZXh0Lmxpc3RlbmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgbSA9IG9iamVjdC5tYXRyaXg7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG5cbiAgICAgIHZhciB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMSk7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuXG4gICAgICB2YXIgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygwLC0xLDApO1xuICAgICAgbS5tdWx0aXBseVZlY3RvcjModXApO1xuICAgICAgdXAubm9ybWFsaXplKCk7XG5cbiAgICAgIHRoaXMuYXVkaW8uY29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56LCB1cC54LCB1cC55LCB1cC56KTtcblxuICAgICAgbS5uMTQgPSBteDtcbiAgICAgIG0ubjI0ID0gbXk7IFxuICAgICAgbS5uMzQgPSBtejtcbiAgICB9XG4gIH0sXG5cblxuICAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYkF1ZGlvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpO1xuXG5mdW5jdGlvbiBBbmFseXNlcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICAvL3RoaXMuc291bmQgPSBcbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdQaWFubycpLmRhdGEpO1xuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnQmFzcycpLmRhdGEpO1xuICAgIC8vIDEwMjQgZmZ0IHNpemUgaXMgNTEyIHBhcnRzXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigxMDI0KTtcbiAgICAvL3RoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIHZhciBkaXNwbGF5ID0gbmV3IEFuYWx5c2VyRGlzcGxheSgpO1xuXG4gICAgdmFyIHBhbmVsRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdGcmVxdWVuY2llcycpO1xuICAgIHRoaXMuc2xpZGVyU21vb3RoaW5nID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIocGFuZWxGcmVxLmVsLCAnU21vb3RoaW5nJywgMCwgMSwgMC4wMSwgdGhpcy5ub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCwgdGhpcy51cGRhdGVTbW9vdGhpbmcsIHRoaXMpO1xuICAgIHRoaXMuZHJvcGRvd25GRlQgPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHBhbmVsRnJlcS5lbCwge1xuICAgICAgICAnNjQnOiA2NCxcbiAgICAgICAgJzEyOCc6IDEyOCxcbiAgICAgICAgJzI1Nic6IDI1NixcbiAgICAgICAgJzUxMic6IDUxMixcbiAgICAgICAgJzEwMjQnOiAxMDI0LFxuICAgICAgICAnMjA0OCc6IDIwNDhcbiAgICB9LCB0aGlzLnVwZGF0ZUZGVFNpemUsIHRoaXMsIHRoaXMubm9kZS5mZnRTaXplLCAnRkZUIFNpemUnKTtcblxuICAgIHZhciBmcmVxID0gZGlzcGxheS5hZGRGcmVxKHRoaXMubm9kZSk7XG4gICAgZnJlcS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsRnJlcS5hcHBlbmQoZnJlcS5jYW52YXMpO1xuXG4gICAgdmFyIHBhbmVsV2F2ZSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdXYXZlJyk7XG4gICAgdmFyIHdhdmUgPSBkaXNwbGF5LmFkZFdhdmUodGhpcy5ub2RlKTtcbiAgICB3YXZlLnRoaWNrbmVzcyA9IDE7XG4gICAgd2F2ZS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsV2F2ZS5hcHBlbmQod2F2ZS5jYW52YXMpO1xuXG4gICAgdmFyIHBhbmVsTGV2ZWxzID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0xldmVscycpO1xuICAgIHZhciBsZXZlbHMgPSBkaXNwbGF5LmFkZExldmVscyh0aGlzLm5vZGUpO1xuICAgIGxldmVscy5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsTGV2ZWxzLmFwcGVuZChsZXZlbHMuY2FudmFzKTtcbn1cblxuQW5hbHlzZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkFuYWx5c2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFuYWx5c2VyO1xuXG5BbmFseXNlci5wcm90b3R5cGUudXBkYXRlU21vb3RoaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLm5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xufTtcblxuQW5hbHlzZXIucHJvdG90eXBlLnVwZGF0ZUZGVFNpemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5mZnRTaXplID0gcGFyc2VJbnQodmFsdWUpO1xufTtcblxuQW5hbHlzZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQW5hbHlzZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuLi8uLi91dGlscy93ZWItYXVkaW8uanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG5cdExvYWRpbmdCYXIgPSByZXF1aXJlKCcuL2xvYWRpbmctYmFyLmpzJyk7XG5cbmZ1bmN0aW9uIEFic3RyYWN0RGVtbyhlbCwgYXVkaW9Db250ZXh0KSB7XG5cdHRoaXMuZWwgPSBlbDtcblx0dGhpcy5hdWRpbyA9IG5ldyBXZWJBdWRpbyhhdWRpb0NvbnRleHQpO1xufVxuXG5BYnN0cmFjdERlbW8ucHJvdG90eXBlID0ge1xuXHRwbGF5OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fSxcblx0cGF1c2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuYXVkaW8ucGF1c2UoKTtcblx0fSxcblx0bG9hZDogZnVuY3Rpb24odXJsLCBmbikge1xuXHRcdExvYWRpbmdCYXIuc2hvdygpO1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCk7XG5cdFx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSB0cnVlO1xuXHRcdFx0bG9hZGVyLm9uUHJvZ3Jlc3MuYWRkKGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0TG9hZGluZ0Jhci51cGRhdGUocCk7XG5cdFx0XHR9KTtcblx0XHRcdGxvYWRlci5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0XHRcdGxvYWRlci5vblByb2dyZXNzLnJlbW92ZUFsbCgpO1xuXHRcdFx0XHRMb2FkaW5nQmFyLmhpZGUoKTtcblx0XHRcdFx0Zm4uY2FsbCh0aGlzLCBidWZmZXIpO1xuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRsb2FkZXIubG9hZFdlYkF1ZGlvKHRoaXMuYXVkaW8uY29udGV4dCk7XG5cdFx0cmV0dXJuIGxvYWRlcjtcblx0fSxcblx0Y3JlYXRlR2FpbkNvbnRyb2xzOiBmdW5jdGlvbihub2RlLCBlbCkge1xuXHRcdHZhciB2b2wgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcihlbCwgJ2dhaW4nLCAwLCAyLCAwLjEsIDEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bm9kZS5nYWluLnZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHR9KTtcblx0ICAgIHZhciBtdXRlID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24oZWwsICdtdXRlJywgJ3VubXV0ZScsXG5cdCAgICAgICAgZnVuY3Rpb24oKXtcblx0ICAgICAgICAgICAgbXV0ZS52b2x1bWUgPSBub2RlLmdhaW4udmFsdWU7XG5cdCAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZvbC52YWx1ZSA9IDA7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gdm9sLnZhbHVlID0gbXV0ZS52b2x1bWUgfHwgMTsgXG5cdCAgICAgICAgfVxuXHQgICAgKTtcblx0fSxcblx0Y29ubmVjdE1pY3JvcGhvbmU6IGZ1bmN0aW9uKG1pY3JvcGhvbmUpIHtcblx0XHR0aGlzLm1pY3JvcGhvbmUgPSBtaWNyb3Bob25lO1xuXHRcdHRoaXMuYXVkaW8uaGVscGVycy5jcmVhdGVNaWNyb3Bob25lU291cmNlKG1pY3JvcGhvbmUuc3RyZWFtLCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uX2dhaW4pO1xuXHR9LFxuXHRkaXNjb25uZWN0TWljcm9waG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYodGhpcy5taWNyb3Bob25lKSB7XG5cdFx0XHR0aGlzLm1pY3JvcGhvbmUuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5taWNyb3Bob25lID0gbnVsbDtcblx0XHR9XG5cdH0sXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGF1c2UoKTtcblx0XHR0aGlzLmRpc2Nvbm5lY3RNaWNyb3Bob25lKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3REZW1vO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBBbmFseXNlckRpc3BsYXkoKSB7XG4gICAgdGhpcy5hbmFseXNlcnMgPSBbXTtcbiAgICB0aGlzLmRyYXcoKTtcbn1cblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGRGcmVxID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5GcmVxLCBub2RlLCBlbCk7XG4gICAgLyppZihlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjYW52YXMnKSB7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL3RoaXMuYW5hbHlzZXJzLnB1c2gobmV3IEFuYWx5c2VyRGlzcGxheS5IVE1MVmlldyhub2RlLCBlbCkpO1xuICAgIH0qL1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5XYXZlLCBub2RlLCBlbCk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZExldmVscyA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkRGlzcGxheShBbmFseXNlckRpc3BsYXkuTGV2ZWxzLCBub2RlLCBlbCk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZERpc3BsYXkgPSBmdW5jdGlvbihDbGFzcywgbm9kZSwgZWwpIHtcbiAgICBlbCA9IGVsIHx8IHRoaXMuZ2V0Q2FudmFzKCk7XG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQ2xhc3Mobm9kZSwgZWwpO1xuICAgIHRoaXMuYW5hbHlzZXJzLnB1c2goZGlzcGxheSk7XG4gICAgcmV0dXJuIGRpc3BsYXk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmdldENhbnZhcyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3aWR0aCA9IHdpZHRoIHx8IDUxMjtcbiAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMjU2O1xuICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgYy53aWR0aCA9IHdpZHRoO1xuICAgIGMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiBjO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgdmFyIGwgPSB0aGlzLmFuYWx5c2Vycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5hbmFseXNlcnNbaV0uZHJhdygpO1xuICAgIH1cbn07XG5cbi8vIGZyZXF1ZW5jaWVzXG5cbkFuYWx5c2VyRGlzcGxheS5GcmVxID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGVsO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LkZyZXEucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBmcmVxdWVuY3lCaW5Db3VudCA9IHRoaXMubm9kZS5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoL2ZyZXF1ZW5jeUJpbkNvdW50KSxcbiAgICAgICAgYmFyU3BhY2luZyA9IDA7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyZXF1ZW5jeUJpbkNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBtYWduaXR1ZGUgLyAyNTY7XG4gICAgICAgIHZhciBodWUgPSBpL2ZyZXF1ZW5jeUJpbkNvdW50ICogMzYwO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2hzbCgnICsgaHVlICsgJywgMTAwJSwgNTAlKSc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChiYXJXaWR0aCAqIGksIGhlaWdodCwgYmFyV2lkdGggLSBiYXJTcGFjaW5nLCAwIC0gaGVpZ2h0ICogcGVyY2VudCk7XG4gICAgfVxufTtcblxuLy8gd2F2ZWZvcm1cblxuQW5hbHlzZXJEaXNwbGF5LldhdmUgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGhpY2tuZXNzID0gMTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBmcmVxdWVuY3lCaW5Db3VudCA9IHRoaXMubm9kZS5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoL2ZyZXF1ZW5jeUJpbkNvdW50KTtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyZXF1ZW5jeUJpbkNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBtYWduaXR1ZGUgLyAyNTY7XG4gICAgICAgIHZhciBodWUgPSBpL2ZyZXF1ZW5jeUJpbkNvdW50ICogMzYwO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2hzbCgnICsgaHVlICsgJywgMTAwJSwgNTAlKSc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChiYXJXaWR0aCAqIGksIGhlaWdodCAtIGhlaWdodCAqIHBlcmNlbnQgLSAxLCB0aGlzLnRoaWNrbmVzcywgdGhpcy50aGlja25lc3MpO1xuICAgIH1cbn07XG5cbkFuYWx5c2VyRGlzcGxheS5MZXZlbHMgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LkxldmVscy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50O1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxQnl0ZURhdGEpO1xuXG4gICAgdmFyIGxlbmd0aCA9IGZyZXFCeXRlRGF0YS5sZW5ndGgsXG4gICAgICAgIHRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICB9XG4gICAgdmFyIGF2ZXJhZ2UgPSB0b3RhbCAvIGxlbmd0aDtcbiAgICB2YXIgcGVyY2VudCA9IGF2ZXJhZ2UgLyAxMjg7XG5cbiAgICB2YXIgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgd2lkdGggKiBwZXJjZW50LCAwKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ2hzbCgxMjgsIDEwMCUsIDUwJSknKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ2hzbCgzNjAsIDEwMCUsIDUwJSknKTtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGggKiBwZXJjZW50LCBoZWlnaHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmFseXNlckRpc3BsYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmdCYXIoKSB7XG4gICAgdmFyIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Mb2FkZXInKSxcbiAgICAgICAgbGFiZWwgPSBsb2FkZXIucXVlcnlTZWxlY3RvcignLkxvYWRlci1sYWJlbCcpO1xuICAgICAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGUocCkge1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHAgKiAxMDApICsgJyUnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdMb2FkZXItLWhpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdMb2FkZXItLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgICd1cGRhdGUnOiB1cGRhdGUsXG4gICAgICAgICdzaG93Jzogc2hvdyxcbiAgICAgICAgJ2hpZGUnOiBoaWRlXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9hZGluZ0JhcigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBVSUNvbXBvbmVudHMoKSB7XG59XG5cbi8vIGhlbHBlcnNcblxuZnVuY3Rpb24gYWRkS2V5RG93bihrZXksIGZuLCBjb250ZXh0KSB7XG4gICAgaWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9uS2V5RG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgICAgIHZhciByZW1vdmVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVtb3ZlS2V5O1xuICAgIH1cbn1cblxuLypcbiAqIFNsaWRlclxuICovXG5cblVJQ29tcG9uZW50cy5TbGlkZXIgPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsLCBtaW4sIG1heCwgc3RlcCwgdmFsdWUsIGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgbGJsLmNsYXNzTmFtZSA9ICdTbGlkZXItbGFiZWwnO1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdTbGlkZXItaW5wdXQnO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBtaW4pO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsIG1heCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHN0ZXApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dC5jbGFzc05hbWUgPSAnU2xpZGVyLW91dHB1dCc7XG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdTbGlkZXIgU2xpZGVyLS1sYXJnZSc7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYmwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvdXRwdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLmVsID0gZm9ybTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuU2xpZGVyLnByb3RvdHlwZSwgJ3ZhbHVlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBQYW5lbFxuICovXG5cblVJQ29tcG9uZW50cy5QYW5lbCA9IGZ1bmN0aW9uKHBhcmVudCwgdGl0bGUpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnUGFuZWwnO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICAgIGlmKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59O1xuXG5VSUNvbXBvbmVudHMuUGFuZWwucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG59O1xuXG5VSUNvbXBvbmVudHMuUGFuZWwucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUsICd0aXRsZScsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmKCF0aGlzLnRpdGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmluc2VydEJlZm9yZSh0aGlzLnRpdGxlRWwsIHRoaXMuZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXRsZUVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG4vKlxuICogQnV0dG9uXG4gKi9cblxuVUlDb21wb25lbnRzLkJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIGZuLCBjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCBmbiwgaW5wdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gaW5wdXQ7XG59O1xuXG4vKlxuICogVG9nZ2xlIEJ1dHRvblxuICovXG5cblVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24gPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsQSwgbGFiZWxCLCBmbkEsIGZuQiwgY29udGV4dCwga2V5KSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbEI7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuaW5uZXJIVE1MID09PSBsYWJlbEEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gbGFiZWxCO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGxhYmVsQTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBmbkEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBmbkEuY2FsbChjb250ZXh0IHx8IHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbGFiZWxCO1xuICAgICAgICAgICAgaWYodHlwZW9mIGZuQiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGZuQi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCB0b2dnbGUsIGlucHV0KTtcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbGFiZWxCO1xuICAgIH07XG4gICAgdGhpcy5lbCA9IGlucHV0O1xufTtcblxuLypcbiAqIERyb3Bkb3duXG4gKi9cblxuVUlDb21wb25lbnRzLkRyb3Bkb3duID0gZnVuY3Rpb24ocGFyZW50LCBvcHRpb25zLCBmbiwgY29udGV4dCwgc2VsZWN0ZWRWYWx1ZSwgdGl0bGUpIHtcbiAgICB2YXIgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkZC5jbGFzc05hbWUgPSAnRHJvcGRvd24nO1xuICAgIGZvcih2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uc1trZXldKTtcbiAgICAgICAgby5pbm5lckhUTUwgPSBrZXk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG8pO1xuICAgICAgICBpZihvcHRpb25zW2tleV0gPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCwgZGQub3B0aW9uc1tkZC5zZWxlY3RlZEluZGV4XS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgaWYodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGguY2xhc3NOYW1lID0gJ0Ryb3Bkb3duLXRpdGxlJztcbiAgICAgICAgICAgIGguaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRkKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGRkO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5Ecm9wZG93bi5wcm90b3R5cGUsICd2YWx1ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuRHJvcGRvd24ucHJvdG90eXBlLCAndGV4dCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVSUNvbXBvbmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBDb21wcmVzc29yKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICB9XG4gICAgLy90aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdEcnVtcycpLmRhdGEpO1xuXG4gICAgLy8gbWFzdGVyIGdhaW4gPiBjb21wcmVzc29yID4gZGVzdGluYXRpb25cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmNvbXByZXNzb3IoKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdDb21wcmVzc29yJyk7XG4gICAgdGhpcy5zbGlkZXJUaHJlc2hvbGQgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAndGhyZXNob2xkJywgLTEwMCwgMCwgMC4xLCB0aGlzLm5vZGUudGhyZXNob2xkLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJLbmVlID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ2tuZWUnLCAwLCA0MCwgMC4xLCB0aGlzLm5vZGUua25lZS52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyUmF0aW8gPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAncmF0aW8nLCAxLCAyMCwgMC4xLCB0aGlzLm5vZGUucmF0aW8udmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlckF0dGFjayA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdhdHRhY2snLCAwLCAxLCAwLjAwMDEsIHRoaXMubm9kZS5hdHRhY2sudmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclJlbGVhc2UgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAncmVsZWFzZScsIDAsIDEsIDAuMDAwMSwgdGhpcy5ub2RlLnJlbGVhc2UudmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnBhbmVsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgdGhpcy5vbkJ1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMucGFuZWwuZWwsICdUVVJOIE9GRicsICdUVVJOIE9OJywgdGhpcy5vZmYsIHRoaXMub24sIHRoaXMpO1xufVxuXG5Db21wcmVzc29yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5Db21wcmVzc29yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbXByZXNzb3I7XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZS50aHJlc2hvbGQudmFsdWUgPSB0aGlzLnNsaWRlclRocmVzaG9sZC52YWx1ZTtcbiAgICB0aGlzLm5vZGUua25lZS52YWx1ZSA9IHRoaXMuc2xpZGVyS25lZS52YWx1ZTtcbiAgICB0aGlzLm5vZGUucmF0aW8udmFsdWUgPSB0aGlzLnNsaWRlclJhdGlvLnZhbHVlO1xuICAgIHRoaXMubm9kZS5hdHRhY2sudmFsdWUgPSB0aGlzLnNsaWRlckF0dGFjay52YWx1ZTtcbiAgICB0aGlzLm5vZGUucmVsZWFzZS52YWx1ZSA9IHRoaXMuc2xpZGVyUmVsZWFzZS52YWx1ZTtcbn07XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTsgICAgXG59O1xuXG5Db21wcmVzc29yLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmRpc2Nvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbn07XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcHJlc3NvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIERpc3RvcnRpb24oZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLy8gbWFzdGVyIGdhaW4gPiBjb21wcmVzc29yID4gZGVzdGluYXRpb25cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmRpc3RvcnRpb24oKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdEaXN0b3J0aW9uJyk7XG4gICAgdGhpcy5zbGlkZXIgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnYW1vdW50JywgMCwgMSwgMC4wMDAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5wYW5lbC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRoaXMub25CdXR0b24gPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbih0aGlzLnBhbmVsLmVsLCAnVFVSTiBPRkYnLCAnVFVSTiBPTicsIHRoaXMub2ZmLCB0aGlzLm9uLCB0aGlzKTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRGlzdG9ydGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuRGlzdG9ydGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEaXN0b3J0aW9uO1xuXG5EaXN0b3J0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUuY3VydmUgPSB0aGlzLmF1ZGlvLmhlbHBlcnMuZGlzdG9ydCh0aGlzLnNsaWRlci52YWx1ZSk7XG59O1xuXG5EaXN0b3J0aW9uLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7ICAgIFxufTtcblxuRGlzdG9ydGlvbi5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5kaXNjb25uZWN0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG59O1xuXG5EaXN0b3J0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3RvcnRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBGaWx0ZXIoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuICAgIHRoaXMuc291bmQgPSB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdEcnVtcycpLmRhdGEpO1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZmlsdGVyLmxvd3Bhc3MoKTtcbiAgICB0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnRmlsdGVyIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQmlxdWFkRmlsdGVyTm9kZVwiPis8L2E+Jyk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuZmlsdGVyLCB0aGlzLnVwZGF0ZUZpbHRlclR5cGUsIHRoaXMpO1xuXG4gICAgdGhpcy5zbGlkZXJGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ0ZyZXF1ZW5jeScsIDAsIDEsIDAuMDEsIDAuNSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyUXVhbCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdRdWFsaXR5JywgMCwgMTAwMCwgMC4xLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJHYWluID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ0dhaW4nLCAtNDAsIDQwLCAwLjEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbn1cblxuRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5GaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsdGVyO1xuXG5GaWx0ZXIucHJvdG90eXBlLnVwZGF0ZUZpbHRlclR5cGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUudHlwZSA9IHRoaXMuZHJvcGRvd24udGV4dDtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5oZWxwZXJzLmZpbHRlcih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyRnJlcS52YWx1ZSwgdGhpcy5zbGlkZXJRdWFsLnZhbHVlLCB0aGlzLnNsaWRlckdhaW4udmFsdWUpO1xufTtcblxuRmlsdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMb2FkaW5nQmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzJyksXHJcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcclxuXHRLZXlib2FyZCA9IHJlcXVpcmUoJy4uL3V0aWxzL2tleWJvYXJkLmpzJyksXHJcblx0UmV2ZXJiID0gcmVxdWlyZSgnLi9yZXZlcmIuanMnKSxcclxuXHRBbmFseXNlciA9IHJlcXVpcmUoJy4vYW5hbHlzZXIuanMnKSxcclxuXHRNdWx0aVRyYWNrID0gcmVxdWlyZSgnLi9tdWx0aS10cmFjay5qcycpLFxyXG5cdFBhblRocmVlRCA9IHJlcXVpcmUoJy4vcGFuLXRocmVlLWQuanMnKSxcclxuXHRGaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlci5qcycpLFxyXG5cdE1pY3JvcGhvbmVJbnB1dCA9IHJlcXVpcmUoJy4vbWljcm9waG9uZS1pbnB1dC5qcycpLFxyXG5cdE9zY2lsbGF0b3IgPSByZXF1aXJlKCcuL29zY2lsbGF0b3IuanMnKSxcclxuXHRNaWNyb3Bob25lID0gcmVxdWlyZSgnLi4vdXRpbHMvbWljcm9waG9uZS5qcycpLFxyXG5cdENvbXByZXNzb3IgPSByZXF1aXJlKCcuL2NvbXByZXNzb3IuanMnKSxcclxuXHREaXN0b3J0aW9uID0gcmVxdWlyZSgnLi9kaXN0b3J0aW9uLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBHVUkoZWwpIHtcclxuXHR0aGlzLmVsID0gZWw7XHJcblx0dGhpcy5hZGRMb2FkZXIoKTtcclxufVxyXG5cclxuR1VJLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oYXVkaW9Db250ZXh0KSB7XHJcblx0dGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XHJcblx0TG9hZGluZ0Jhci5oaWRlKCk7XHJcblxyXG5cdHRoaXMubWVudSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnUmV2ZXJiJywgdGhpcy5yZXZlcmIsIHRoaXMsIEtleWJvYXJkLk9ORSk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnQW5hbHlzZXInLCB0aGlzLmFuYWx5c2VyLCB0aGlzLCBLZXlib2FyZC5UV08pO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ011bHRpVHJhY2snLCB0aGlzLm11bHRpVHJhY2ssIHRoaXMsIEtleWJvYXJkLlRIUkVFKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdQYW4nLCB0aGlzLnBhbiwgdGhpcywgS2V5Ym9hcmQuRk9VUik7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnRmlsdGVyJywgdGhpcy5maWx0ZXIsIHRoaXMsIEtleWJvYXJkLkZJVkUpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ01pY3JvcGhvbmUnLCB0aGlzLm1pY3JvcGhvbmVJbnB1dCwgdGhpcywgS2V5Ym9hcmQuU0lYKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdPc2NpbGxhdG9yJywgdGhpcy5vc2NpbGxhdG9yLCB0aGlzLCBLZXlib2FyZC5TRVZFTik7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnQ29tcHJlc3NvcicsIHRoaXMuY29tcHJlc3NvciwgdGhpcywgS2V5Ym9hcmQuRUlHSFQpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0Rpc3RvcnRpb24nLCB0aGlzLmRpc3RvcnRpb24sIHRoaXMsIEtleWJvYXJkLk5JTkUpO1xyXG5cclxuXHR0aGlzLmNvbnRyb2xzID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsKTtcclxuXHR0aGlzLnBsYXlCdXR0b24gPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbih0aGlzLmNvbnRyb2xzLmVsLCAnUExBWScsICdQQVVTRScsIHRoaXMucGxheSwgdGhpcy5wYXVzZSwgdGhpcywgS2V5Ym9hcmQuU1BBQ0VCQVIpO1xyXG5cdHRoaXMubWljcm9waG9uZSA9IG5ldyBNaWNyb3Bob25lKCk7XHJcblx0aWYodGhpcy5taWNyb3Bob25lLmlzU3VwcG9ydGVkKSB7XHJcblx0XHR0aGlzLm1pY0J1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMuY29udHJvbHMuZWwsICdNSUMgT04nLCAnTUlDIE9GRicsIHRoaXMuY29ubmVjdE1pY3JvcGhvbmUsIHRoaXMuZGlzY29ubmVjdE1pY3JvcGhvbmUsIHRoaXMsIEtleWJvYXJkLk0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kZW1vSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlbW9Ib2xkZXIpO1xyXG5cclxuXHR0aGlzLm9zY2lsbGF0b3IoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUucmV2ZXJiID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgUmV2ZXJiKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5hbmFseXNlciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IEFuYWx5c2VyKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5tdWx0aVRyYWNrID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE11bHRpVHJhY2sodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBhbiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFBhblRocmVlRCh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgRmlsdGVyKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5taWNyb3Bob25lSW5wdXQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbyh0cnVlLCB0cnVlKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgTWljcm9waG9uZUlucHV0KHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5vc2NpbGxhdG9yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE9zY2lsbGF0b3IodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmNvbXByZXNzb3IgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBDb21wcmVzc29yKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5kaXN0b3J0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgRGlzdG9ydGlvbih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuY29ubmVjdE1pY3JvcGhvbmUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm1pY3JvcGhvbmUub25Db25uZWN0ZWQuYWRkKHRoaXMubWljcm9waG9uZUNvbm5lY3RlZCwgdGhpcyk7XHJcbiAgICB0aGlzLm1pY3JvcGhvbmUub25EZW5pZWQuYWRkKHRoaXMubWljcm9waG9uZUVycm9yLCB0aGlzKTtcclxuICAgIHRoaXMubWljcm9waG9uZS5vbkVycm9yLmFkZCh0aGlzLm1pY3JvcGhvbmVFcnJvciwgdGhpcyk7XHJcbiAgICB0aGlzLm1pY3JvcGhvbmUuY29ubmVjdCgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5taWNyb3Bob25lQ29ubmVjdGVkID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLmNvbm5lY3RNaWNyb3Bob25lKHRoaXMubWljcm9waG9uZSk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLm1pY3JvcGhvbmVFcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubWljQnV0dG9uLnJlc2V0KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmRpc2Nvbm5lY3RNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLmRpc2Nvbm5lY3RNaWNyb3Bob25lKCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmNsZWFyRGVtbyA9IGZ1bmN0aW9uKGhpZGVNaWNyb3Bob25lLCBoaWRlQ29udHJvbHMpIHtcclxuXHRpZih0aGlzLmRlbW8pIHtcclxuXHRcdHRoaXMuZGVtby5kZXN0cm95KCk7XHJcblx0fVxyXG5cdHRoaXMuZGVtb0hvbGRlci5pbm5lckhUTUwgPSAnJztcclxuXHR0aGlzLnBsYXlCdXR0b24ucmVzZXQoKTtcclxuXHR0aGlzLm1pY0J1dHRvbi5yZXNldCgpO1xyXG5cclxuXHRpZihoaWRlTWljcm9waG9uZSkge1xyXG5cdFx0dGhpcy5taWNCdXR0b24uZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5taWNCdXR0b24uZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0fVxyXG5cclxuXHRpZihoaWRlQ29udHJvbHMpIHtcclxuXHRcdHRoaXMuY29udHJvbHMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5jb250cm9scy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHR9XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8ucGxheSgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZGVtby5wYXVzZSgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5hZGRMb2FkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRMb2FkaW5nQmFyLnNob3coKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUudXBkYXRlTG9hZFByb2dyZXNzID0gZnVuY3Rpb24ocCkge1xyXG5cdExvYWRpbmdCYXIudXBkYXRlKHApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHVUk7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpLFxuICAgIE1pY3JvcGhvbmUgPSByZXF1aXJlKCcuLi91dGlscy9taWNyb3Bob25lLmpzJyk7XG5cbmZ1bmN0aW9uIE1pY3JvcGhvbmVJbnB1dChlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLnBubEluZm8gPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwsICdBbGxvdyBtaWNvcGhvbmUgdG8gYmVnaW4nKTtcblxuICAgIHRoaXMubWljcm9waG9uZSA9IG5ldyBNaWNyb3Bob25lKCk7XG5cbiAgICBpZih0aGlzLm1pY3JvcGhvbmUuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLm9uQ29ubmVjdGVkLmFkZCh0aGlzLm9uU3VjY2VzcywgdGhpcyk7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5vbkRlbmllZC5hZGQodGhpcy5vbkRlbmllZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5vbkVycm9yLmFkZCh0aGlzLm9uRXJyb3IsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUuY29ubmVjdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcignRVJST1I6IGdldFVzZXJNZWRpYSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbn1cblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWljcm9waG9uZUlucHV0O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLmdldE1pY3JvcGhvbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYV8oIHthdWRpbzp0cnVlfSwgZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHNlbGYub25TdWNjZXNzKHN0cmVhbSk7XG4gICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoZSk7XG4gICAgfSk7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIC8vdGhpcy5taWNyb3Bob25lLmNyZWF0ZVdlYkF1ZGlvU291cmNlKHRoaXMuYXVkaW8uY29udGV4dCwgdGhpcy5hdWRpby5fZ2Fpbik7XG4gICAgdGhpcy5jb25uZWN0VG9NaWNyb3Bob25lKHN0cmVhbSk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDEwMjQpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICB2YXIgZGlzcGxheSA9IG5ldyBBbmFseXNlckRpc3BsYXkoKTtcbiAgICB2YXIgcGFuZWxXYXZlID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnTWljcm9waG9uZScpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbFdhdmUuYXBwZW5kKHdhdmUuY2FudmFzKTtcblxuICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbn07XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUub25EZW5pZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRpc3BsYXlFcnJvcignRVJST1I6IFBlcm1pc3Npb24gZGVuaWVkLiBZb3UgY2FuIHVuZG8gdGhpcyBieSBjbGlja2luZyB0aGUgY2FtZXJhIGljb24gd2l0aCB0aGUgcmVkIGNyb3NzIGluIHRoZSBhZGRyZXNzIGJhci4nKTtcbiAgICB0aGlzLnBubEluZm8ucmVtb3ZlKCk7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiAnICsgZSk7XG4gICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5kaXNwbGF5RXJyb3IgPSBmdW5jdGlvbihtc2cpIHtcbiAgICBpZighdGhpcy5wbmxFcnJvcikge1xuICAgICAgICB0aGlzLnBubEVycm9yID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5wbmxFcnJvci5lbC5jbGFzc0xpc3QuYWRkKCdQYW5lbC0tZXJyb3InKTtcbiAgICB9XG4gICAgdGhpcy5wbmxFcnJvci50aXRsZSA9IG1zZztcbn07XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGlmKHRoaXMubWljcm9waG9uZSkge1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUgPSBudWxsO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWljcm9waG9uZUlucHV0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIE11bHRpVHJhY2soZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcbiAgICBmb3IgKHZhciBpIGluIGZpbGVzKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IHRoaXMuYXVkaW8uYWRkKGZpbGVzW2ldLmRhdGEpO1xuICAgICAgICBzb3VuZC5hZGROb2RlKHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZ2FpbigpKTtcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCBpKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzb3VuZC5fbm9kZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHYWluQ29udHJvbHMoc291bmQuX25vZGVbal0sIGNvbnRyb2wuZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5NdWx0aVRyYWNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5NdWx0aVRyYWNrLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE11bHRpVHJhY2s7XG5cbk11bHRpVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlUcmFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKTtcblxuZnVuY3Rpb24gT3NjaWxsYXRvcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDIwNDgpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgXG4gICAgdGhpcy5wbmwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwsICdzaW5lJyk7XG4gICAgdGhpcy5kcm9wZG93blR5cGUgPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHRoaXMucG5sLmVsLCBNb2RlbC53YXZlLCB0aGlzLnVwZGF0ZVR5cGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucG5sLmVsLCAnRnJlcXVlbmN5JywgMCwgMSwgMC4wMSwgMC4xLCB0aGlzLnVwZGF0ZUZyZXEsIHRoaXMpO1xuICAgIFxuICAgIHZhciBkaXNwbGF5ID0gbmV3IEFuYWx5c2VyRGlzcGxheSgpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICB0aGlzLnBubC5hcHBlbmQod2F2ZS5jYW52YXMpO1xufVxuXG5Pc2NpbGxhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5Pc2NpbGxhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9zY2lsbGF0b3I7XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnVwZGF0ZVR5cGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy50eXBlID0gdmFsdWU7XG4gICAgdGhpcy5wbmwudGl0bGUgPSB2YWx1ZTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnVwZGF0ZUZyZXEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLmF1ZGlvLmhlbHBlcnMuZ2V0RnJlcXVlbmN5KHZhbHVlKTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9zYyA9IHRoaXMuYXVkaW8uY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgdGhpcy5vc2MudHlwZSA9IHRoaXMuZHJvcGRvd25UeXBlLnZhbHVlO1xuICAgIHRoaXMub3NjLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuYXVkaW8uaGVscGVycy5nZXRGcmVxdWVuY3kodGhpcy5zbGlkZXJGcmVxLnZhbHVlKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLnZhbHVlID0gMC4yO1xuICAgIHRoaXMub3NjLmNvbm5lY3QodGhpcy5hdWRpby5fZ2Fpbik7XG4gICAgdGhpcy5vc2Muc3RhcnQoMCk7XG59O1xuXG5Pc2NpbGxhdG9yLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy5zdG9wKDApO1xuICAgIHRoaXMub3NjID0gbnVsbDtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3NjaWxsYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBQYW5UaHJlZUQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5wYW4oKTtcbiAgICB0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnUGFuJyk7XG5cbiAgICAvL3RoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLU1hdGguUEksIE1hdGguUEksIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclggPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneCcsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJZID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3knLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWiA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd6JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbn1cblxuUGFuVGhyZWVELnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5QYW5UaHJlZUQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFuVGhyZWVEO1xuXG5QYW5UaHJlZUQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vdGhpcy5hdWRpby5oZWxwZXJzLnBhblgodGhpcy5ub2RlLCB2YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5hdWRpby5oZWxwZXJzLnBhbih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyWC52YWx1ZSwgdGhpcy5zbGlkZXJZLnZhbHVlLCB0aGlzLnNsaWRlcloudmFsdWUpO1xufTtcblxuUGFuVGhyZWVELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuVGhyZWVEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBSZXZlcmIoZWwsIGF1ZGlvQ29udGV4dCkge1xuXHRBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuXHR0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcblx0dGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5yZXZlcmIoKTtcblx0dGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cblx0dGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdSZXZlcmInKTtcblx0dGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuaW1wdWxzZSwgdGhpcy51cGRhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXG5cdHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCAxLCB0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlLCB0aGlzKTtcblx0dGhpcy5zbGlkZXJEZWNheSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdkZWNheScsIDAsIDIwLCAwLjEsIDUsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xufVxuXG5SZXZlcmIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblJldmVyYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXZlcmI7XG5cblJldmVyYi5wcm90b3R5cGUuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHRoaXMuc2xpZGVyU2Vjb25kcy52YWx1ZSwgdGhpcy5zbGlkZXJEZWNheS52YWx1ZSk7XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLnVwZGF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmKHZhbHVlID09PSAnJykgeyByZXR1cm47IH1cblx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR0aGlzLnNsaWRlckRlY2F5LmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG5cdHN3aXRjaCh2YWx1ZSkge1xuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdHRoaXMuc2xpZGVyU2Vjb25kcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5sb2FkKHZhbHVlICsgTW9kZWwuZXh0ZW5zaW9uLCB0aGlzLmFwcGx5SW1wdWxzZSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5hcHBseUltcHVsc2UgPSBmdW5jdGlvbihidWZmZXIpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbn07XG5cblJldmVyYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0dGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2F1ZGlvLW1hbmFnZXIuanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuL2FwcC91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuL2FwcC9tb2RlbC9hdWRpby1tb2RlbC5qcycpLFxuXHRHVUkgPSByZXF1aXJlKCcuL2FwcC92aWV3L2d1aS5qcycpO1xuXG5yZXF1aXJlKCcuL2FwcC91dGlscy9yYWYtcG9seWZpbGwuanMnKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuXHR0aGlzLmluaXQoKTtcbn1cblxuQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XG5cdHRoaXMuZ3VpID0gbmV3IEdVSShkb2N1bWVudC5ib2R5KTtcblx0dGhpcy5sb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIoKTtcblxuXHR0aGlzLmxvZygpO1xuXHR0aGlzLmxvYWQoKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtc2cgPSAnQXVkaW8gTWFuYWdlci4gU3VwcG9ydGVkOicgKyB0aGlzLmF1ZGlvLmlzU3VwcG9ydGVkKCkgK1xuXHQnIFdlYkF1ZGlvQVBJOicgKyB0aGlzLmF1ZGlvLndlYkF1ZGlvU3VwcG9ydGVkKCkgK1xuXHQnIFRvdWNoTG9ja2VkOicgKyB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdGNvbnNvbGUubG9nKG1zZyk7XG59O1xuXG5BcHAucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5sb2FkZXIudG91Y2hMb2NrZWQgPSB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdHRoaXMubG9hZGVyLndlYkF1ZGlvQ29udGV4dCA9IHRoaXMuYXVkaW8ud2ViQXVkaW9Db250ZXh0O1xuXHR0aGlzLmxvYWRlci5jcm9zc09yaWdpbiA9IHRydWU7XG5cblx0TW9kZWwuZXh0ZW5zaW9uID0gdGhpcy5hdWRpby5nZXRFeHRlbnNpb24oKTtcblx0dmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS51cmwgPSBmaWxlLnVybCArIE1vZGVsLmV4dGVuc2lvbjtcblx0XHR0aGlzLmxvYWRlci5hZGQoZmlsZS51cmwpO1xuXHR9XG5cblx0dGhpcy5sb2FkZXIub25Qcm9ncmVzcy5hZGQodGhpcy5ndWkudXBkYXRlTG9hZFByb2dyZXNzLCB0aGlzLmd1aSk7XG5cdHRoaXMubG9hZGVyLm9uQ29tcGxldGUuYWRkKHRoaXMubG9hZENvbXBsZXRlLCB0aGlzKTtcblx0dGhpcy5sb2FkZXIuc3RhcnQoKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG5cdGZvciAodmFyIGkgaW4gZmlsZXMpIHtcblx0XHR2YXIgZmlsZSA9IGZpbGVzW2ldO1xuXHRcdGZpbGUuZGF0YSA9IHRoaXMubG9hZGVyLmdldChmaWxlLnVybCkuZGF0YTtcblx0fVxuXHR0aGlzLmd1aS5pbml0KHRoaXMuYXVkaW8ud2ViQXVkaW9Db250ZXh0KTtcbn07XG5cbm5ldyBBcHAoKTtcbiIsIi8qanNsaW50IG9uZXZhcjp0cnVlLCB1bmRlZjp0cnVlLCBuZXdjYXA6dHJ1ZSwgcmVnZXhwOnRydWUsIGJpdHdpc2U6dHJ1ZSwgbWF4ZXJyOjUwLCBpbmRlbnQ6NCwgd2hpdGU6ZmFsc2UsIG5vbWVuOmZhbHNlLCBwbHVzcGx1czpmYWxzZSAqL1xuLypnbG9iYWwgZGVmaW5lOmZhbHNlLCByZXF1aXJlOmZhbHNlLCBleHBvcnRzOmZhbHNlLCBtb2R1bGU6ZmFsc2UsIHNpZ25hbHM6ZmFsc2UgKi9cblxuLyoqIEBsaWNlbnNlXG4gKiBKUyBTaWduYWxzIDxodHRwOi8vbWlsbGVybWVkZWlyb3MuZ2l0aHViLmNvbS9qcy1zaWduYWxzLz5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogQXV0aG9yOiBNaWxsZXIgTWVkZWlyb3NcbiAqIFZlcnNpb246IDEuMC4wIC0gQnVpbGQ6IDI2OCAoMjAxMi8xMS8yOSAwNTo0OCBQTSlcbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcblxuICAgIC8vIFNpZ25hbEJpbmRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGJpbmRpbmcgYmV0d2VlbiBhIFNpZ25hbCBhbmQgYSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgKiA8YnIgLz4tIDxzdHJvbmc+VGhpcyBpcyBhbiBpbnRlcm5hbCBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkbid0IGJlIGNhbGxlZCBieSByZWd1bGFyIHVzZXJzLjwvc3Ryb25nPlxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgSm9hIEViZXJ0IEFTMyBTaWduYWxCaW5kaW5nIGFuZCBSb2JlcnQgUGVubmVyJ3MgU2xvdCBjbGFzc2VzLlxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGludGVybmFsXG4gICAgICogQG5hbWUgU2lnbmFsQmluZGluZ1xuICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiAoZGVmYXVsdCA9IDApLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbEJpbmRpbmcoc2lnbmFsLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHR5cGUgRnVuY3Rpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNPbmNlID0gaXNPbmNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAbWVtYmVyT2YgU2lnbmFsQmluZGluZy5wcm90b3R5cGVcbiAgICAgICAgICogQG5hbWUgY29udGV4dFxuICAgICAgICAgKiBAdHlwZSBPYmplY3R8dW5kZWZpbmVkfG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGxpc3RlbmVyQ29udGV4dDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqIEB0eXBlIFNpZ25hbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2lnbmFsID0gc2lnbmFsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW5lciBwcmlvcml0eVxuICAgICAgICAgKiBAdHlwZSBOdW1iZXJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICB9XG5cbiAgICBTaWduYWxCaW5kaW5nLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBpcyBhY3RpdmUgYW5kIHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBsaXN0ZW5lciBkdXJpbmcgYFNpZ25hbC5kaXNwYXRjaGAgYW5kIGBTaWduYWxCaW5kaW5nLmV4ZWN1dGVgLiAoY3VycmllZCBwYXJhbWV0ZXJzKVxuICAgICAgICAgKiBAdHlwZSBBcnJheXxudWxsXG4gICAgICAgICAqL1xuICAgICAgICBwYXJhbXMgOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGxpc3RlbmVyIHBhc3NpbmcgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgICAqIDxwPklmIGJpbmRpbmcgd2FzIGFkZGVkIHVzaW5nIGBTaWduYWwuYWRkT25jZSgpYCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHNpZ25hbCBkaXNwYXRjaCBxdWV1ZSwgdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciB0aGUgc2lnbmFsIGRpc3BhdGNoLjwvcD5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW3BhcmFtc0Fycl0gQXJyYXkgb2YgcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4geyp9IFZhbHVlIHJldHVybmVkIGJ5IHRoZSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAocGFyYW1zQXJyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlclJldHVybiwgcGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICEhdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLnBhcmFtcz8gdGhpcy5wYXJhbXMuY29uY2F0KHBhcmFtc0FycikgOiBwYXJhbXNBcnI7XG4gICAgICAgICAgICAgICAgaGFuZGxlclJldHVybiA9IHRoaXMuX2xpc3RlbmVyLmFwcGx5KHRoaXMuY29udGV4dCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJSZXR1cm47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGFjaCBiaW5kaW5nIGZyb20gc2lnbmFsLlxuICAgICAgICAgKiAtIGFsaWFzIHRvOiBteVNpZ25hbC5yZW1vdmUobXlCaW5kaW5nLmdldExpc3RlbmVyKCkpO1xuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwgb3IgYG51bGxgIGlmIGJpbmRpbmcgd2FzIHByZXZpb3VzbHkgZGV0YWNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2ggOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0JvdW5kKCk/IHRoaXMuX3NpZ25hbC5yZW1vdmUodGhpcy5fbGlzdGVuZXIsIHRoaXMuY29udGV4dCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYmluZGluZyBpcyBzdGlsbCBib3VuZCB0byB0aGUgc2lnbmFsIGFuZCBoYXZlIGEgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpc0JvdW5kIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICghIXRoaXMuX3NpZ25hbCAmJiAhIXRoaXMuX2xpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gSWYgU2lnbmFsQmluZGluZyB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzT25jZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc09uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMaXN0ZW5lciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsfSBTaWduYWwgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaWduYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2Rlc3Ryb3kgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc2lnbmFsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsQmluZGluZyBpc09uY2U6JyArIHRoaXMuX2lzT25jZSArJywgaXNCb3VuZDonKyB0aGlzLmlzQm91bmQoKSArJywgYWN0aXZlOicgKyB0aGlzLmFjdGl2ZSArICddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4vKmdsb2JhbCBTaWduYWxCaW5kaW5nOmZhbHNlKi9cblxuICAgIC8vIFNpZ25hbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgZm5OYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggJ2xpc3RlbmVyIGlzIGEgcmVxdWlyZWQgcGFyYW0gb2Yge2ZufSgpIGFuZCBzaG91bGQgYmUgYSBGdW5jdGlvbi4nLnJlcGxhY2UoJ3tmbn0nLCBmbk5hbWUpICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IFJvYmVydCBQZW5uZXIncyBBUzMgU2lnbmFscy5cbiAgICAgKiBAbmFtZSBTaWduYWxcbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIEFycmF5LjxTaWduYWxCaW5kaW5nPlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG5cbiAgICAgICAgLy8gZW5mb3JjZSBkaXNwYXRjaCB0byBhd2F5cyB3b3JrIG9uIHNhbWUgY29udGV4dCAoIzQ3KVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2lnbmFsLnByb3RvdHlwZS5kaXNwYXRjaC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIFNpZ25hbC5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbHMgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjAuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBzaG91bGQga2VlcCByZWNvcmQgb2YgcHJldmlvdXNseSBkaXNwYXRjaGVkIHBhcmFtZXRlcnMgYW5kXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZSBsaXN0ZW5lciBkdXJpbmcgYGFkZCgpYC9gYWRkT25jZSgpYCBpZiBTaWduYWwgd2FzXG4gICAgICAgICAqIGFscmVhZHkgZGlzcGF0Y2hlZCBiZWZvcmUuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIG1lbW9yaXplIDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9zaG91bGRQcm9wYWdhdGUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgaXMgYWN0aXZlIGFuZCBzaG91bGQgYnJvYWRjYXN0IGV2ZW50cy5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBkdXJpbmcgYSBkaXNwYXRjaCB3aWxsIG9ubHkgYWZmZWN0IHRoZSBuZXh0IGRpc3BhdGNoLCBpZiB5b3Ugd2FudCB0byBzdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBhIHNpZ25hbCB1c2UgYGhhbHQoKWAgaW5zdGVhZC48L3A+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlZ2lzdGVyTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGJpbmRpbmc7XG5cbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuX2JpbmRpbmdzW3ByZXZJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNPbmNlKCkgIT09IGlzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkJysgKGlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlbiBhZGQnKyAoIWlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IG5ldyBTaWduYWxCaW5kaW5nKHRoaXMsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEJpbmRpbmcoYmluZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubWVtb3JpemUgJiYgdGhpcy5fcHJldlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgYmluZGluZy5leGVjdXRlKHRoaXMuX3ByZXZQYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTaWduYWxCaW5kaW5nfSBiaW5kaW5nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYWRkQmluZGluZyA6IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAvL3NpbXBsaWZpZWQgaW5zZXJ0aW9uIHNvcnRcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgZG8geyAtLW47IH0gd2hpbGUgKHRoaXMuX2JpbmRpbmdzW25dICYmIGJpbmRpbmcuX3ByaW9yaXR5IDw9IHRoaXMuX2JpbmRpbmdzW25dLl9wcmlvcml0eSk7XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UobiArIDEsIDAsIGJpbmRpbmcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfaW5kZXhPZkxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjdXI7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5fYmluZGluZ3Nbbl07XG4gICAgICAgICAgICAgICAgaWYgKGN1ci5fbGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIGN1ci5jb250ZXh0ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgbGlzdGVuZXIgd2FzIGF0dGFjaGVkIHRvIFNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XVxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiBTaWduYWwgaGFzIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBoYXMgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpICE9PSAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgZmFsc2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbCB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGZpcnN0IGV4ZWN1dGlvbiAod2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UpLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRPbmNlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkT25jZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIHRydWUsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBzaW5nbGUgbGlzdGVuZXIgZnJvbSB0aGUgZGlzcGF0Y2ggcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBFeGVjdXRpb24gY29udGV4dCAoc2luY2UgeW91IGNhbiBhZGQgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcyBpZiBleGVjdXRpbmcgaW4gYSBkaWZmZXJlbnQgY29udGV4dCkuXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBMaXN0ZW5lciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAncmVtb3ZlJyk7XG5cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW2ldLl9kZXN0cm95KCk7IC8vbm8gcmVhc29uIHRvIGEgU2lnbmFsQmluZGluZyBleGlzdCBpZiBpdCBpc24ndCBhdHRhY2hlZCB0byBhIHNpZ25hbFxuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlQWxsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Nbbl0uX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIGxpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TnVtTGlzdGVuZXJzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQsIGJsb2NraW5nIHRoZSBkaXNwYXRjaCB0byBuZXh0IGxpc3RlbmVycyBvbiB0aGUgcXVldWUuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBzaG91bGQgYmUgY2FsbGVkIG9ubHkgZHVyaW5nIHNpZ25hbCBkaXNwYXRjaCwgY2FsbGluZyBpdCBiZWZvcmUvYWZ0ZXIgZGlzcGF0Y2ggd29uJ3QgYWZmZWN0IHNpZ25hbCBicm9hZGNhc3QuPC9wPlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5wcm90b3R5cGUuZGlzYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaGFsdCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaC9Ccm9hZGNhc3QgU2lnbmFsIHRvIGFsbCBsaXN0ZW5lcnMgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIFBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIGVhY2ggaGFuZGxlci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXNBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYmluZGluZ3M7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1lbW9yaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IHBhcmFtc0FycjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgbikge1xuICAgICAgICAgICAgICAgIC8vc2hvdWxkIGNvbWUgYWZ0ZXIgbWVtb3JpemVcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmRpbmdzID0gdGhpcy5fYmluZGluZ3Muc2xpY2UoKTsgLy9jbG9uZSBhcnJheSBpbiBjYXNlIGFkZC9yZW1vdmUgaXRlbXMgZHVyaW5nIGRpc3BhdGNoXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSB0cnVlOyAvL2luIGNhc2UgYGhhbHRgIHdhcyBjYWxsZWQgYmVmb3JlIGRpc3BhdGNoIG9yIGR1cmluZyB0aGUgcHJldmlvdXMgZGlzcGF0Y2guXG5cbiAgICAgICAgICAgIC8vZXhlY3V0ZSBhbGwgY2FsbGJhY2tzIHVudGlsIGVuZCBvZiB0aGUgbGlzdCBvciB1bnRpbCBhIGNhbGxiYWNrIHJldHVybnMgYGZhbHNlYCBvciBzdG9wcyBwcm9wYWdhdGlvblxuICAgICAgICAgICAgLy9yZXZlcnNlIGxvb3Agc2luY2UgbGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgICAgZG8geyBuLS07IH0gd2hpbGUgKGJpbmRpbmdzW25dICYmIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSAmJiBiaW5kaW5nc1tuXS5leGVjdXRlKHBhcmFtc0FycikgIT09IGZhbHNlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yZ2V0IG1lbW9yaXplZCBhcmd1bWVudHMuXG4gICAgICAgICAqIEBzZWUgU2lnbmFsLm1lbW9yaXplXG4gICAgICAgICAqL1xuICAgICAgICBmb3JnZXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgYmluZGluZ3MgZnJvbSBzaWduYWwgYW5kIGRlc3Ryb3kgYW55IHJlZmVyZW5jZSB0byBleHRlcm5hbCBvYmplY3RzIChkZXN0cm95IFNpZ25hbCBvYmplY3QpLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gY2FsbGluZyBhbnkgbWV0aG9kIG9uIHRoZSBzaWduYWwgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkaXNwb3NlIHdpbGwgdGhyb3cgZXJyb3JzLjwvcD5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JpbmRpbmdzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ByZXZQYXJhbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbCBhY3RpdmU6JysgdGhpcy5hY3RpdmUgKycgbnVtTGlzdGVuZXJzOicrIHRoaXMuZ2V0TnVtTGlzdGVuZXJzKCkgKyddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLy8gTmFtZXNwYWNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaWduYWxzIG5hbWVzcGFjZVxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZSBzaWduYWxzXG4gICAgICovXG4gICAgdmFyIHNpZ25hbHMgPSBTaWduYWw7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiBAc2VlIFNpZ25hbFxuICAgICAqL1xuICAgIC8vIGFsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2VlICNnaC00NClcbiAgICBzaWduYWxzLlNpZ25hbCA9IFNpZ25hbDtcblxuXG5cbiAgICAvL2V4cG9ydHMgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXG4gICAgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXsgLy9BTURcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpZ25hbHM7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpeyAvL25vZGVcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaWduYWxzO1xuICAgIH0gZWxzZSB7IC8vYnJvd3NlclxuICAgICAgICAvL3VzZSBzdHJpbmcgYmVjYXVzZSBvZiBHb29nbGUgY2xvc3VyZSBjb21waWxlciBBRFZBTkNFRF9NT0RFXG4gICAgICAgIC8qanNsaW50IHN1Yjp0cnVlICovXG4gICAgICAgIGdsb2JhbFsnc2lnbmFscyddID0gc2lnbmFscztcbiAgICB9XG5cbn0odGhpcykpO1xuIl19
