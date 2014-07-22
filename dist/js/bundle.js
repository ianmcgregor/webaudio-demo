require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "Drums": { "url": "audio/DRUMS", "loop": true, "data": null },
    "Bass": { "url": "audio/DOUBLE_BASS", "loop": true, "data": null },
    "Congas": { "url": "audio/CONGAS", "loop": true, "data": null },
    "Piano": { "url": "audio/PIANO_MIC_1", "loop": true, "data": null }
}
},{}],2:[function(require,module,exports){
module.exports={
    "Kick": { "url": "audio/kit/kick", "loop": false, "data": null },
    "Snare": { "url": "audio/kit/snare", "loop": false, "data": null },
    "HiHat": { "url": "audio/kit/hihat", "loop": false, "data": null },
    "Clap": { "url": "audio/kit/clap", "loop": false, "data": null }
}

},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

var audioFiles = require('../config/audio-files.json'),
	impulse = require('../config/impulse-response.json'),
	drumKit = require('../config/drum-kit.json');

var model = {
    extension: '',
	audioFiles: audioFiles,
	getFile: function(key) {
		return model.audioFiles[key];
	},
	impulse: impulse,
	drumKit: drumKit,
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

},{"../config/audio-files.json":1,"../config/drum-kit.json":2,"../config/impulse-response.json":3}],5:[function(require,module,exports){
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
},{"signals":"w8Izcx"}],6:[function(require,module,exports){
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

if (typeof module === 'object' && module.exports) {
    module.exports = AudioManager;
}

},{"./html-audio.js":7,"./page-visibility.js":10,"./web-audio.js":14}],7:[function(require,module,exports){
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

if (typeof module === 'object' && module.exports) {
    module.exports = HTMLAudio;
}

},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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

},{"signals":"w8Izcx"}],10:[function(require,module,exports){
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
},{"signals":"w8Izcx"}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
'use strict';

 function WebAudioHelpers(context) {
    function parseNum(x) {
        return isNaN(x) ? 0 : parseFloat(x, 10);
    }

    return {
        fade: function(gainNode, value, duration) {
            gainNode.gain.linearRampToValueAtTime(value, context.currentTime + duration);
        },
        panX: function(panner, value) {
            // x from -Math.PI/4 to Math.PI/4 (-45 to 45 deg)
            var x = parseFloat(value, 10) * Math.PI / 4;
            var z = x + Math.PI / 2;
            if (z > Math.PI / 2) {
                z = Math.PI - z;
            }
            x = Math.sin(x);
            z = Math.sin(z);
            panner.setPosition(x, 0, z);
        },
        pan: function(panner, x, y, z) {
            x = parseNum(x);
            y = parseNum(y);
            z = parseNum(z);
            panner.setPosition(x, y, z);
        },
        setSourcePosition: function(panner, positionVec) {
            // set the position of the source (where the audio is coming from)
            panner.setPosition(positionVec.x, positionVec.y, positionVec.z);
        },
        setSourceOrientation: function(panner, forwardVec) { // forwardVec = THREE.Vector3
            // set the orientation of the source (where the audio is coming from)
            var fw = forwardVec.clone().normalize();
            // calculate up vec ( up = (forward cross (0, 1, 0)) cross forward )
            var globalUp = { x: 0, y: 1, z: 0 };
            var up = forwardVec.clone().cross(globalUp).cross(forwardVec).normalize();
            // set the audio context's listener position to match the camera position
            panner.setOrientation(fw.x, fw.y, fw.z, up.x, up.y, up.z);
        },
        setListenerPosition: function(positionVec) {
            // set the position of the listener (who is hearing the audio)
            context.listener.setPosition(positionVec.x, positionVec.y, positionVec.z);
        },
        setListenerOrientation: function(forwardVec) { // forwardVec = THREE.Vector3
            // set the orientation of the listener (who is hearing the audio)
            var fw = forwardVec.clone().normalize();
            // calculate up vec ( up = (forward cross (0, 1, 0)) cross forward )
            var globalUp = { x: 0, y: 1, z: 0 };
            var up = forwardVec.clone().cross(globalUp).cross(forwardVec).normalize();
            // set the audio context's listener position to match the camera position
            context.listener.setOrientation(fw.x, fw.y, fw.z, up.x, up.y, up.z);
        },
        doppler: function(panner, x, y, z, deltaX, deltaY, deltaZ, deltaTime) {
            // Tracking the velocity can be done by getting the object's previous position, subtracting
            // it from the current position and dividing the result by the time elapsed since last frame
            panner.setPosition(x, y, z);
            panner.setVelocity(deltaX/deltaTime, deltaY/deltaTime, deltaZ/deltaTime);
        },
        filter: function(filterNode, value, quality, gain) {
            // set filter frequency based on value from 0 to 1
            value = parseFloat(value, 10);
            quality = parseFloat(quality, 10);
            gain = parseFloat(gain, 10);
            // Get back to the frequency value between min and max.
            filterNode.frequency.value = this.getFrequency(value);

            //filterNode.Q.value = quality;
            //filterNode.gain.value = gain;
        },
        getFrequency: function(value) {
            // get frequency by passing number from 0 to 1
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
        },
        createMicrophoneSource: function(stream, connectTo) {
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
        },
        distort: function(value) {
            // create waveShaper distortion curve from 0 to 1
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
    };
}

if (typeof module === 'object' && module.exports) {
    module.exports = WebAudioHelpers;
}

},{}],13:[function(require,module,exports){
'use strict';

function WebAudioNodeFactory(context) {

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
            // Default for stereo is HRTF
            node.panningModel = 'HRTF';
            //node.panningModel = 'equalpower';
            
            /*

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
                node.delayTime.value = time;
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
            //node.oversample = '2x';
            return node;
        },
        scriptProcessor: function(bufferSize, inputChannels, outputChannels, callback, callbackContext) {
            // bufferSize 256 - 16384 (pow 2)
            bufferSize = bufferSize || 1024;
            inputChannels = inputChannels === undefined ? 0 : inputChannels;
            outputChannels = outputChannels === undefined ? 1 : outputChannels;
            var node = context.createScriptProcessor(bufferSize, inputChannels, outputChannels);
            node.onaudioprocess = function (event) {
                // available props:
                /*
                event.inputBuffer
                event.outputBuffer
                event.playbackTime
                */
                // Example: generate noise
                /*
                var output = event.outputBuffer.getChannelData(0);
                var l = output.length;
                for (var i = 0; i < l; i++) {
                    output[i] = Math.random();
                }
                */
                callback.call(callbackContext || this, event);
            };
            return node;
        }
    };
}

if (typeof module === 'object' && module.exports) {
    module.exports = WebAudioNodeFactory;
}

},{}],14:[function(require,module,exports){
'use strict';

var WebAudioNodeFactory = require('./web-audio-nodefactory.js'),
    WebAudioHelpers = require('./web-audio-helpers.js');

function WebAudio(context) {
    this.context = context || WebAudio.createContext();
    this.extension = WebAudio.getExtension();
    this._sound = [];
    this._node = [];
    this._gain = this.context.createGain();
    this._gain.connect(this.context.destination);
    this._startedAt = 0;
    this._pausedAt = 0;
    this._loop = false;
    this._playing = false;
    this._nodeFactory = new WebAudioNodeFactory(this.context);
    this._helpers = new WebAudioHelpers(this.context);
}

WebAudio.prototype = {
    add: function(buffer) {
        if(!buffer) { return; }
        this._sound.push(new WebAudio.Sound(buffer, this.context));
        this._sound[this._sound.length-1].loop = this._loop;
        return this._sound[this._sound.length-1];
    },
    play: function(delay) {
        var maxDuration = -1,
            longestSound;

        for (var i = 0; i < this._sound.length; i++) {
            this._sound[i].stop();
            this._sound[i].connect(this._gain);
            this._sound[i].play(delay || 0, this._pausedAt / 1000);
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
    },
    addNode: function(node) {
        this._node.push(node);
        this.updateConnections();
        return node;
    },
    removeNode: function(node) {
        var l = this._node.length;
        for (var i = 0; i < l; i++) {
            if(node === this._node[i]) {
                this._node.splice(i,1);
            }
        }
        node.disconnect(0);
        this.updateConnections();
    },
    updateConnections: function() {
        var l = this._node.length;
        if(l === 0) {
            this._gain.connect(this.context.destination);
            return;
        }
        for (var i = 0; i < l; i++) {
            this._node[i].disconnect(0);
            if(i === 0) {
                this._gain.disconnect(0);
                this._gain.connect(this._node[i]);
            }
            if(i === l-1) {
                this._node[i].connect(this.context.destination);
            }
            else if(i > 0) {
                this._node[i-1].connect(this._node[i]);
            }
        }
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

Object.defineProperty(WebAudio.prototype, 'elapsed', {
    get: function() {
        return this._startedAt ? Date.now() - this._startedAt : 0;
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
 * Extension (prefers ogg for superior looping)
 */

WebAudio.getExtension = function() {
    var el = document.createElement('audio');
    return (el.canPlayType('audio/ogg; codecs="vorbis"') ? '.ogg' : '.mp3');
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
    this._onEnded = null;
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
    },
    addEndedListener: function(listener) {
        this._onEnded = listener;
    }
};

Object.defineProperty(WebAudio.Sound.prototype, 'source', {
    get: function() {
        if(!this._source) {
            this._source = this._context.createBufferSource();
            this._source.buffer = this._buffer;

            if(typeof this._onEnded === 'function') {
                var self = this;
                this._source.onended = function(e) {
                    self._onEnded(e);
                };
            }

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

if (typeof module === 'object' && module.exports) {
    module.exports = WebAudio;
}

},{"./web-audio-helpers.js":12,"./web-audio-nodefactory.js":13}],15:[function(require,module,exports){
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
    this.audio.addNode(this.node);

    var display = new AnalyserDisplay();

    var panelFreq = new UIComponents.Panel(el, 'Frequencies');
    this.sliderSmoothing = new UIComponents.Slider(panelFreq.el, 'Smoothing', 0, 1, 0.01, this.node.smoothingTimeConstant, this.updateSmoothing, this);
    this.sliderMin = new UIComponents.Slider(panelFreq.el, 'Min decibels', -100, 0, 0.1, this.node.minDecibels, this.updateMinMax, this);
    this.sliderMax = new UIComponents.Slider(panelFreq.el, 'Max decibels', -100, 0, 0.1, this.node.maxDecibels, this.updateMinMax, this);
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

Analyser.prototype.updateMinMax = function() {
    this.node.minDecibels = this.sliderMin.value;
    this.node.maxDecibels = this.sliderMax.value;
};

Analyser.prototype.updateFFTSize = function(value) {
    this.node.fftSize = parseInt(value);
};

Analyser.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Analyser;

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/analyser-display.js":17,"./components/ui-components.js":19}],16:[function(require,module,exports){
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
		this.micSource = this.audio.helpers.createMicrophoneSource(microphone.stream, this.node);
		this.node.connect(this.audio._gain);
	},
	disconnectMicrophone: function() {
		if(this.microphone) {
			this.microphone.disconnect();
			this.microphone = null;
		}
		if(this.micSource) {
			this.micSource.disconnect(0);
		}
	},
	destroy: function() {
		this.pause();
		this.disconnectMicrophone();
	}
};

module.exports = AbstractDemo;

},{"../../utils/asset-loader.js":5,"../../utils/web-audio.js":14,"../components/ui-components.js":19,"./loading-bar.js":18}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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
            fn.call(context || this, this);
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

},{}],20:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Compressor(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    // master gain > compressor > destination
    this.node = this.audio.nodeFactory.compressor();
    //this.audio._gain.connect(this.node);
    //this.node.connect(this.audio.context.destination);
    this.audio.addNode(this.node);

    this.panel = new UIComponents.Panel(el, 'Compressor');
    this.sliderThreshold = new UIComponents.Slider(this.panel.el, 'threshold', -100, 0, 0.1, this.node.threshold.value, this.update, this);
    this.sliderKnee = new UIComponents.Slider(this.panel.el, 'knee', 0, 40, 0.1, this.node.knee.value, this.update, this);
    this.sliderRatio = new UIComponents.Slider(this.panel.el, 'ratio', 1, 20, 0.1, this.node.ratio.value, this.update, this);
    this.sliderAttack = new UIComponents.Slider(this.panel.el, 'attack', 0, 1, 0.0001, this.node.attack.value, this.update, this);
    this.sliderRelease = new UIComponents.Slider(this.panel.el, 'release', 0, 1, 0.0001, this.node.release.value, this.update, this);
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
    this.audio.addNode(this.node);
};

Compressor.prototype.off = function() {
    this.audio.removeNode(this.node);
};

Compressor.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Compressor;

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],21:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
  UIComponents = require('./components/ui-components.js'),
  Model = require('../model/audio-model.js');

function Delay(el, audioContext) {
  AbstractDemo.call(this, el, audioContext);

  this.sound = this.audio.add(Model.getFile('Piano').data);
  this.node = this.audio.nodeFactory.delay(0.5);

  this.gainNode = this.audio.context.createGain();
  this.gainNode.gain.value = 0.5;

  this.audio.addNode(this.gainNode);

  this.node.connect(this.gainNode);
  this.gainNode.connect(this.node);

  this.panel = new UIComponents.Panel(el, 'Delay');
  this.sliderSeconds = new UIComponents.Slider(this.panel.el, 'seconds', 0.1, 10, 0.1, this.node.delayTime.value, this.update, this);
}

Delay.prototype = Object.create(AbstractDemo.prototype);
Delay.prototype.constructor = Delay;

Delay.prototype.update = function(value) {
  this.node.delayTime.value = value;
};

Delay.prototype.connectMicrophone = function(microphone) {
  this.microphone = microphone;
  this.micSource = this.audio.helpers.createMicrophoneSource(microphone.stream, this.node);
  //this.node.connect(this.audio._gain);
};

Delay.prototype.destroy = function() {
  AbstractDemo.prototype.destroy.call(this);
  this.panel.remove();
};

module.exports = Delay;

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],22:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Distortion(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    // master gain > compressor > destination
    this.node = this.audio.nodeFactory.distortion();
    //this.audio._gain.connect(this.node);
    //this.node.connect(this.audio.context.destination);
    this.audio.addNode(this.node);

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
    this.audio.addNode(this.node);
};

Distortion.prototype.off = function() {
    this.audio.removeNode(this.node);
};

Distortion.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Distortion;

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],23:[function(require,module,exports){
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

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],24:[function(require,module,exports){
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

},{"../utils/keyboard.js":8,"../utils/microphone.js":9,"./analyser.js":15,"./components/loading-bar.js":18,"./components/ui-components.js":19,"./compressor.js":20,"./delay.js":21,"./distortion.js":22,"./filter.js":23,"./microphone-input.js":25,"./multi-track.js":26,"./oscillator.js":27,"./pan-three-d.js":28,"./reverb.js":29,"./script-processor.js":30,"./sequencer.js":31,"hasher":"UIrZMT"}],25:[function(require,module,exports){
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

MicrophoneInput.prototype.onSuccess = function() {
    //this.microphone.createWebAudioSource(this.audio.context, this.audio._gain);
    this.node = this.audio.nodeFactory.analyser(1024);
    this.connectMicrophone(this.microphone);
    //this.audio._gain.connect(this.node);
    //this.node.connect(this.audio.context.destination);
    this.audio.addNode(this.node);

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
},{"../utils/microphone.js":9,"./components/abstract-demo.js":16,"./components/analyser-display.js":17,"./components/ui-components.js":19}],26:[function(require,module,exports){
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

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],27:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js'),
    Model = require('../model/audio-model.js');

function Oscillator(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.node = this.audio.nodeFactory.analyser(2048);
    this.audio.addNode(this.node);
    //this.audio._gain.connect(this.node);
    //this.node.connect(this.audio.context.destination);
    
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
},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/analyser-display.js":17,"./components/ui-components.js":19}],28:[function(require,module,exports){
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
    this.audio.helpers.pan(this.node, this.sliderX.value, this.sliderY.value, this.sliderZ.value);
};

PanThreeD.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
    this.panel.remove();
};

module.exports = PanThreeD;

},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],29:[function(require,module,exports){
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
},{"../model/audio-model.js":4,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],30:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js');

function ScriptProcessor(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.node = this.audio.nodeFactory.scriptProcessor(2048, 0, 1, this.onProcess, this);

    this.pnl = new UIComponents.Panel(this.el, 'white noise');
//    this.dropdownType = new UIComponents.Dropdown(this.pnl.el, Model.wave, this.updateType, this);

}

ScriptProcessor.prototype = Object.create(AbstractDemo.prototype);
ScriptProcessor.prototype.constructor = ScriptProcessor;

ScriptProcessor.prototype.onProcess = function(event) {
    var output = event.outputBuffer.getChannelData(0);
    var l = output.length;
    for (var i = 0; i < l; i++) {
        output[i] = Math.random();
    }
};

ScriptProcessor.prototype.updateType = function(value) {
    if(!this.osc) { return; }
    this.osc.type = value;
    this.pnl.title = value;
};

ScriptProcessor.prototype.play = function() {
    this.audio.addNode(this.node);
};

ScriptProcessor.prototype.pause = function() {
    this.audio.removeNode(this.node);
};

ScriptProcessor.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = ScriptProcessor;

},{"./components/abstract-demo.js":16,"./components/ui-components.js":19}],31:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    WebAudio = require('../utils/web-audio.js'),
    UIComponents = require('./components/ui-components.js'),
    Model = require('../model/audio-model.js');

function Sequencer(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    /*var tracks = [];

    var files = Model.drumKit;
    for (var i in files) {
        var sound = new WebAudio(audioContext);
        sound.add(files[i].data);
        //sound.addNode(this.audio.nodeFactory.gain());
        tracks.push(sound);
    }*/
    var hihat = Model.drumKit.HiHat.data;
    var kick = Model.drumKit.Kick.data;
    var snare = Model.drumKit.Snare.data;
    var clap = Model.drumKit.Clap.data;

    function queueSound(buffer, time) {
        var sound = new WebAudio(audioContext);
        sound.add(buffer);
        sound.play(time);
    }
    var startTime = audioContext.currentTime + 0.100;
    var bpm = 180;
    var eighthNoteTime = (60 / bpm) / 2;

    for (var bar = 0; bar < 100; bar++) {
      var time = startTime + bar * 8 * eighthNoteTime;

      for (var i = 0; i < 8; i++) {
        queueSound(hihat, time + i * eighthNoteTime);
      }
      queueSound(hihat, time + 3.5 * eighthNoteTime);

      queueSound(kick, time);
      queueSound(kick, time + 5.05 * eighthNoteTime);

      queueSound(snare, time + 2 * eighthNoteTime);
      queueSound(snare, time + 6 * eighthNoteTime);

      queueSound(clap, time + 6 * eighthNoteTime);
    }
}

Sequencer.prototype = Object.create(AbstractDemo.prototype);
Sequencer.prototype.constructor = Sequencer;

Sequencer.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Sequencer;

},{"../model/audio-model.js":4,"../utils/web-audio.js":14,"./components/abstract-demo.js":16,"./components/ui-components.js":19}],32:[function(require,module,exports){
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
	this.addFiles(Model.audioFiles);
	this.addFiles(Model.drumKit);
	this.loader.onProgress.add(this.gui.updateLoadProgress, this.gui);
	this.loader.onComplete.add(this.loadComplete, this);
	this.loader.start();
};

App.prototype.addFiles = function(files) {
	for (var i in files) {
		var file = files[i];
		file.url = file.url + Model.extension;
		this.loader.add(file.url);
	}
};

App.prototype.loadComplete = function() {
	this.addData(Model.audioFiles);
	this.addData(Model.drumKit);
	this.gui.init(this.audio.webAudioContext);
};

App.prototype.addData = function(files) {
	for (var i in files) {
		var file = files[i];
		file.data = this.loader.get(file.url).data;
	}
};

new App();

},{"./app/model/audio-model.js":4,"./app/utils/asset-loader.js":5,"./app/utils/audio-manager.js":6,"./app/utils/raf-polyfill.js":11,"./app/view/gui.js":24}],"UIrZMT":[function(require,module,exports){
/*!!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */

;(function () {
var factory = function(signals){

/*jshint white:false*/
/*global signals:false, window:false*/

/**
 * Hasher
 * @namespace History Manager for rich-media applications.
 * @name hasher
 */
var hasher = (function(window){

    //--------------------------------------------------------------------------------------
    // Private Vars
    //--------------------------------------------------------------------------------------

    var

        // frequency that it will check hash value on IE 6-7 since it doesn't
        // support the hashchange event
        POOL_INTERVAL = 25,

        // local storage for brevity and better compression --------------------------------

        document = window.document,
        history = window.history,
        Signal = signals.Signal,

        // local vars ----------------------------------------------------------------------

        hasher,
        _hash,
        _checkInterval,
        _isActive,
        _frame, //iframe used for legacy IE (6-7)
        _checkHistory,
        _hashValRegexp = /#(.*)$/,
        _baseUrlRegexp = /(\?.*)|(\#.*)/,
        _hashRegexp = /^\#/,

        // sniffing/feature detection -------------------------------------------------------

        //hack based on this: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
        _isIE = (!+"\v1"),
        // hashchange is supported by FF3.6+, IE8+, Chrome 5+, Safari 5+ but
        // feature detection fails on IE compatibility mode, so we need to
        // check documentMode
        _isHashChangeSupported = ('onhashchange' in window) && document.documentMode !== 7,
        //check if is IE6-7 since hash change is only supported on IE8+ and
        //changing hash value on IE6-7 doesn't generate history record.
        _isLegacyIE = _isIE && !_isHashChangeSupported,
        _isLocal = (location.protocol === 'file:');


    //--------------------------------------------------------------------------------------
    // Private Methods
    //--------------------------------------------------------------------------------------

    function _escapeRegExp(str){
        return String(str || '').replace(/\W/g, "\\$&");
    }

    function _trimHash(hash){
        if (!hash) return '';
        var regexp = new RegExp('^' + _escapeRegExp(hasher.prependHash) + '|' + _escapeRegExp(hasher.appendHash) + '$', 'g');
        return hash.replace(regexp, '');
    }

    function _getWindowHash(){
        //parsed full URL instead of getting window.location.hash because Firefox decode hash value (and all the other browsers don't)
        //also because of IE8 bug with hash query in local file [issue #6]
        var result = _hashValRegexp.exec( hasher.getURL() );
        var path = (result && result[1]) || '';
        try {
          return hasher.raw? path : decodeURIComponent(path);
        } catch (e) {
          // in case user did not set `hasher.raw` and decodeURIComponent
          // throws an error (see #57)
          return path;
        }
    }

    function _getFrameHash(){
        return (_frame)? _frame.contentWindow.frameHash : null;
    }

    function _createFrame(){
        _frame = document.createElement('iframe');
        _frame.src = 'about:blank';
        _frame.style.display = 'none';
        document.body.appendChild(_frame);
    }

    function _updateFrame(){
        if(_frame && _hash !== _getFrameHash()){
            var frameDoc = _frame.contentWindow.document;
            frameDoc.open();
            //update iframe content to force new history record.
            //based on Really Simple History, SWFAddress and YUI.history.
            frameDoc.write('<html><head><title>' + document.title + '</title><script type="text/javascript">var frameHash="' + _hash + '";</script></head><body>&nbsp;</body></html>');
            frameDoc.close();
        }
    }

    function _registerChange(newHash, isReplace){
        if(_hash !== newHash){
            var oldHash = _hash;
            _hash = newHash; //should come before event dispatch to make sure user can get proper value inside event handler
            if(_isLegacyIE){
                if(!isReplace){
                    _updateFrame();
                } else {
                    _frame.contentWindow.frameHash = newHash;
                }
            }
            hasher.changed.dispatch(_trimHash(newHash), _trimHash(oldHash));
        }
    }

    if (_isLegacyIE) {
        /**
         * @private
         */
        _checkHistory = function(){
            var windowHash = _getWindowHash(),
                frameHash = _getFrameHash();
            if(frameHash !== _hash && frameHash !== windowHash){
                //detect changes made pressing browser history buttons.
                //Workaround since history.back() and history.forward() doesn't
                //update hash value on IE6/7 but updates content of the iframe.
                //needs to trim hash since value stored already have
                //prependHash + appendHash for fast check.
                hasher.setHash(_trimHash(frameHash));
            } else if (windowHash !== _hash){
                //detect if hash changed (manually or using setHash)
                _registerChange(windowHash);
            }
        };
    } else {
        /**
         * @private
         */
        _checkHistory = function(){
            var windowHash = _getWindowHash();
            if(windowHash !== _hash){
                _registerChange(windowHash);
            }
        };
    }

    function _addListener(elm, eType, fn){
        if(elm.addEventListener){
            elm.addEventListener(eType, fn, false);
        } else if (elm.attachEvent){
            elm.attachEvent('on' + eType, fn);
        }
    }

    function _removeListener(elm, eType, fn){
        if(elm.removeEventListener){
            elm.removeEventListener(eType, fn, false);
        } else if (elm.detachEvent){
            elm.detachEvent('on' + eType, fn);
        }
    }

    function _makePath(paths){
        paths = Array.prototype.slice.call(arguments);

        var path = paths.join(hasher.separator);
        path = path? hasher.prependHash + path.replace(_hashRegexp, '') + hasher.appendHash : path;
        return path;
    }

    function _encodePath(path){
        //used encodeURI instead of encodeURIComponent to preserve '?', '/',
        //'#'. Fixes Safari bug [issue #8]
        path = encodeURI(path);
        if(_isIE && _isLocal){
            //fix IE8 local file bug [issue #6]
            path = path.replace(/\?/, '%3F');
        }
        return path;
    }

    //--------------------------------------------------------------------------------------
    // Public (API)
    //--------------------------------------------------------------------------------------

    hasher = /** @lends hasher */ {

        /**
         * hasher Version Number
         * @type string
         * @constant
         */
        VERSION : '1.2.0',

        /**
         * Boolean deciding if hasher encodes/decodes the hash or not.
         * <ul>
         * <li>default value: false;</li>
         * </ul>
         * @type boolean
         */
        raw : false,

        /**
         * String that should always be added to the end of Hash value.
         * <ul>
         * <li>default value: '';</li>
         * <li>will be automatically removed from `hasher.getHash()`</li>
         * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
         * </ul>
         * @type string
         */
        appendHash : '',

        /**
         * String that should always be added to the beginning of Hash value.
         * <ul>
         * <li>default value: '/';</li>
         * <li>will be automatically removed from `hasher.getHash()`</li>
         * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
         * </ul>
         * @type string
         */
        prependHash : '/',

        /**
         * String used to split hash paths; used by `hasher.getHashAsArray()` to split paths.
         * <ul>
         * <li>default value: '/';</li>
         * </ul>
         * @type string
         */
        separator : '/',

        /**
         * Signal dispatched when hash value changes.
         * - pass current hash as 1st parameter to listeners and previous hash value as 2nd parameter.
         * @type signals.Signal
         */
        changed : new Signal(),

        /**
         * Signal dispatched when hasher is stopped.
         * -  pass current hash as first parameter to listeners
         * @type signals.Signal
         */
        stopped : new Signal(),

        /**
         * Signal dispatched when hasher is initialized.
         * - pass current hash as first parameter to listeners.
         * @type signals.Signal
         */
        initialized : new Signal(),

        /**
         * Start listening/dispatching changes in the hash/history.
         * <ul>
         *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons before calling this method.</li>
         * </ul>
         */
        init : function(){
            if(_isActive) return;

            _hash = _getWindowHash();

            //thought about branching/overloading hasher.init() to avoid checking multiple times but
            //don't think worth doing it since it probably won't be called multiple times.
            if(_isHashChangeSupported){
                _addListener(window, 'hashchange', _checkHistory);
            }else {
                if(_isLegacyIE){
                    if(! _frame){
                        _createFrame();
                    }
                    _updateFrame();
                }
                _checkInterval = setInterval(_checkHistory, POOL_INTERVAL);
            }

            _isActive = true;
            hasher.initialized.dispatch(_trimHash(_hash));
        },

        /**
         * Stop listening/dispatching changes in the hash/history.
         * <ul>
         *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons after calling this method, unless you call hasher.init() again.</li>
         *   <li>hasher will still dispatch changes made programatically by calling hasher.setHash();</li>
         * </ul>
         */
        stop : function(){
            if(! _isActive) return;

            if(_isHashChangeSupported){
                _removeListener(window, 'hashchange', _checkHistory);
            }else{
                clearInterval(_checkInterval);
                _checkInterval = null;
            }

            _isActive = false;
            hasher.stopped.dispatch(_trimHash(_hash));
        },

        /**
         * @return {boolean}    If hasher is listening to changes on the browser history and/or hash value.
         */
        isActive : function(){
            return _isActive;
        },

        /**
         * @return {string} Full URL.
         */
        getURL : function(){
            return window.location.href;
        },

        /**
         * @return {string} Retrieve URL without query string and hash.
         */
        getBaseURL : function(){
            return hasher.getURL().replace(_baseUrlRegexp, ''); //removes everything after '?' and/or '#'
        },

        /**
         * Set Hash value, generating a new history record.
         * @param {...string} path    Hash value without '#'. Hasher will join
         * path segments using `hasher.separator` and prepend/append hash value
         * with `hasher.appendHash` and `hasher.prependHash`
         * @example hasher.setHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
         */
        setHash : function(path){
            path = _makePath.apply(null, arguments);
            if(path !== _hash){
                // we should store raw value
                _registerChange(path);
                if (path === _hash) {
                    // we check if path is still === _hash to avoid error in
                    // case of multiple consecutive redirects [issue #39]
                    if (! hasher.raw) {
                        path = _encodePath(path);
                    }
                    window.location.hash = '#' + path;
                }
            }
        },

        /**
         * Set Hash value without keeping previous hash on the history record.
         * Similar to calling `window.location.replace("#/hash")` but will also work on IE6-7.
         * @param {...string} path    Hash value without '#'. Hasher will join
         * path segments using `hasher.separator` and prepend/append hash value
         * with `hasher.appendHash` and `hasher.prependHash`
         * @example hasher.replaceHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
         */
        replaceHash : function(path){
            path = _makePath.apply(null, arguments);
            if(path !== _hash){
                // we should store raw value
                _registerChange(path, true);
                if (path === _hash) {
                    // we check if path is still === _hash to avoid error in
                    // case of multiple consecutive redirects [issue #39]
                    if (! hasher.raw) {
                        path = _encodePath(path);
                    }
                    window.location.replace('#' + path);
                }
            }
        },

        /**
         * @return {string} Hash value without '#', `hasher.appendHash` and `hasher.prependHash`.
         */
        getHash : function(){
            //didn't used actual value of the `window.location.hash` to avoid breaking the application in case `window.location.hash` isn't available and also because value should always be synched.
            return _trimHash(_hash);
        },

        /**
         * @return {Array.<string>} Hash value split into an Array.
         */
        getHashAsArray : function(){
            return hasher.getHash().split(hasher.separator);
        },

        /**
         * Removes all event listeners, stops hasher and destroy hasher object.
         * - IMPORTANT: hasher won't work after calling this method, hasher Object will be deleted.
         */
        dispose : function(){
            hasher.stop();
            hasher.initialized.dispose();
            hasher.stopped.dispose();
            hasher.changed.dispose();
            _frame = hasher = window.hasher = null;
        },

        /**
         * @return {string} A string representation of the object.
         */
        toString : function(){
            return '[hasher version="'+ hasher.VERSION +'" hash="'+ hasher.getHash() +'"]';
        }

    };

    hasher.initialized.memorize = true; //see #33

    return hasher;

}(window));


    return hasher;
};

if (typeof define === 'function' && define.amd) {
    define(['signals'], factory);
} else if (typeof exports === 'object') {
    module.exports = factory(require('signals'));
} else {
    /*jshint sub:true */
    window['hasher'] = factory(window['signals']);
}

}());

},{"signals":"w8Izcx"}],"hasher":[function(require,module,exports){
module.exports=require('UIrZMT');
},{}],"w8Izcx":[function(require,module,exports){
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
},{}]},{},[32])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL2NvbmZpZy9hdWRpby1maWxlcy5qc29uIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvZHJ1bS1raXQuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL21pY3JvcGhvbmUuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8taGVscGVycy5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvd2ViLWF1ZGlvLW5vZGVmYWN0b3J5LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvYW5hbHlzZXIuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wcmVzc29yLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2RlbGF5LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2Rpc3RvcnRpb24uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvZmlsdGVyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2d1aS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9taWNyb3Bob25lLWlucHV0LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L211bHRpLXRyYWNrLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L29zY2lsbGF0b3IuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcGFuLXRocmVlLWQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcmV2ZXJiLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3NjcmlwdC1wcm9jZXNzb3IuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvc2VxdWVuY2VyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL21haW4uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvdmVuZG9yL2hhc2hlci9kaXN0L2pzL2hhc2hlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy92ZW5kb3IvanMtc2lnbmFscy9kaXN0L3NpZ25hbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcIkRydW1zXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9EUlVNU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIkJhc3NcIjogeyBcInVybFwiOiBcImF1ZGlvL0RPVUJMRV9CQVNTXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQ29uZ2FzXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9DT05HQVNcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJQaWFub1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vUElBTk9fTUlDXzFcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJLaWNrXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9raXQva2lja1wiLCBcImxvb3BcIjogZmFsc2UsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJTbmFyZVwiOiB7IFwidXJsXCI6IFwiYXVkaW8va2l0L3NuYXJlXCIsIFwibG9vcFwiOiBmYWxzZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIkhpSGF0XCI6IHsgXCJ1cmxcIjogXCJhdWRpby9raXQvaGloYXRcIiwgXCJsb29wXCI6IGZhbHNlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQ2xhcFwiOiB7IFwidXJsXCI6IFwiYXVkaW8va2l0L2NsYXBcIiwgXCJsb29wXCI6IGZhbHNlLCBcImRhdGFcIjogbnVsbCB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJHZW5lcmF0ZSBpbXB1bHNlXCI6IFwiZ2VuZXJhdGVcIixcblxuICAgIFwiYW1iaWVuY2U6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzFfKDQ1MClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzFfKDQ1MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfMl8oNDUxKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfMl8oNDUxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl8zXyg0NTIpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl8zXyg0NTIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzY5NjlfKDQ1NClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzY5NjlfKDQ1NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfY2xvc2VfKDQ1NylcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2Nsb3NlXyg0NTcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2lzX2l0Xyg0NTUpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9pc19pdF8oNDU1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9sZXRfaXRfZ29fKDQ1OClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2xldF9pdF9nb18oNDU4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9vaF8oNDUzKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfb2hfKDQ1MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfdGFpbHNfKDQ1NilcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX3RhaWxzXyg0NTYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iaWVuY2VfKDQ0OSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iaWVuY2VfKDQ0OSlfZGNcIixcbiAgICBcbiAgICBcImhhbGw6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QXV0b19QYXJrXyg1MDQpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfQXV0b19QYXJrXyg1MDQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7SmF6el9IYWxsXyg1MDMpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfSmF6el9IYWxsXyg1MDMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2UtU3RhZ2VfKDQ5NilcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9MYXJnZS1TdGFnZV8oNDk2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX0hhbGxfKDQ5NSlcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9MYXJnZV9IYWxsXyg0OTUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtLVN0YWdlXyg0OTgpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTWVkaXVtLVN0YWdlXyg0OTgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtX0hhbGxfKDQ5NylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW1fSGFsbF8oNDk3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsLVN0YWdlXyg1MDApXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGwtU3RhZ2VfKDUwMClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9DaHVyY2hfKDUwMilcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbF9DaHVyY2hfKDUwMilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9IYWxsXyg0OTkpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGxfSGFsbF8oNDk5KV9kY1wiLFxuICAgIFxuICAgIFwicGxhdGU6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QV9QbGF0ZV8oNDcwKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9BX1BsYXRlXyg0NzApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7RmF0X1BsYXRlXyg0NzQpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX0ZhdF9QbGF0ZV8oNDc0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX1BsYXRlXyg0NzIpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1NtYWxsX1BsYXRlXyg0NzIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U25hcmVfUGxhdGVfKDQ3MSlcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfU25hcmVfUGxhdGVfKDQ3MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtUaGluX1BsYXRlXyg0NzMpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1RoaW5fUGxhdGVfKDQ3MylfZGNcIixcbiAgICBcbiAgICBcInJhbmRvbV9oYWxsOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JpZ19SXyg0NjApXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0JpZ19SXyg0NjApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7Q3JhenlfYXNzXyg0NjMpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0NyYXp5X2Fzc18oNDYzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0Rvd25fWW91X1NheV8oNDY4KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9Eb3duX1lvdV9TYXlfKDQ2OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSX1R3b18oNDYyKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9SX1R3b18oNDYyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1JhbmRvbV93ZWxsXyg0NjQpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1JhbmRvbV93ZWxsXyg0NjQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U2hvcnRfTWVfYWdhaW5fKDQ2NSlcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfU2hvcnRfTWVfYWdhaW5fKDQ2NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtXZWxsX0htbW1fUl8oNDYxKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9XZWxsX0htbW1fUl8oNDYxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1lvdV9TYWlkXyg0NjcpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1lvdV9TYWlkXyg0NjcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7dGVzdHlfdGVzdHlfKDQ2NilcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfdGVzdHlfdGVzdHlfKDQ2NilfZGNcIixcbiAgICBcbiAgICBcInJvb206XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TEdfV29vZF9Sb29tXyg0OTApXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTEdfV29vZF9Sb29tXyg0OTApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2VfQ2hhbWJlcl8oNDkyKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX0xhcmdlX0NoYW1iZXJfKDQ5MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9Sb29tXyg0ODYpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTGFyZ2VfUm9vbV8oNDg2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01lZGl1bV9Sb29tXyg0ODcpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTWVkaXVtX1Jvb21fKDQ4NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNdXNpY19DbHViXyg0ODUpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTXVzaWNfQ2x1Yl8oNDg1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NNX1dvb2RfUm9vbV8oNDkxKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NNX1dvb2RfUm9vbV8oNDkxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsXy1fQnJpZ2h0Xyg0OTQpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfLV9CcmlnaHRfKDQ5NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9DaGFtYl8oNDkzKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NtYWxsX0NoYW1iXyg0OTMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfUm9vbV8oNDg4KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NtYWxsX1Jvb21fKDQ4OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtWZXJ5X1NtYWxsXyg0ODkpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfVmVyeV9TbWFsbF8oNDg5KV9kY1wiLFxuICAgIFxuICAgIFwid2lsZF9zcGFjZXM6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7MTBXLTQwXyg0NzgpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMXzEwVy00MF8oNDc4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwOzIwdy01MF8oNDc5KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF8yMHctNTBfKDQ3OSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCaWdfQm90dG9tXyg0NzcpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0JpZ19Cb3R0b21fKDQ3NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCcmlja19XYWxsXyg0NzUpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0JyaWNrX1dhbGxfKDQ3NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCdWNrcmFtXyg0NzYpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0J1Y2tyYW1fKDQ3NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtJbnNpZGVfT3V0Xyg0ODIpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0luc2lkZV9PdXRfKDQ4MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZXRhbGxpY2FfKDQ4MClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfTWV0YWxsaWNhXyg0ODApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7Umljb2NoZXRfKDQ4MylcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfUmljb2NoZXRfKDQ4MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaWxpY2FfQmVhZHNfKDQ4MSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfU2lsaWNhX0JlYWRzXyg0ODEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7VmFyb29tXyg0ODQpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX1Zhcm9vbV8oNDg0KV9kY1wiXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXVkaW9GaWxlcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9hdWRpby1maWxlcy5qc29uJyksXG5cdGltcHVsc2UgPSByZXF1aXJlKCcuLi9jb25maWcvaW1wdWxzZS1yZXNwb25zZS5qc29uJyksXG5cdGRydW1LaXQgPSByZXF1aXJlKCcuLi9jb25maWcvZHJ1bS1raXQuanNvbicpO1xuXG52YXIgbW9kZWwgPSB7XG4gICAgZXh0ZW5zaW9uOiAnJyxcblx0YXVkaW9GaWxlczogYXVkaW9GaWxlcyxcblx0Z2V0RmlsZTogZnVuY3Rpb24oa2V5KSB7XG5cdFx0cmV0dXJuIG1vZGVsLmF1ZGlvRmlsZXNba2V5XTtcblx0fSxcblx0aW1wdWxzZTogaW1wdWxzZSxcblx0ZHJ1bUtpdDogZHJ1bUtpdCxcblx0ZmlsdGVyIDoge1xuICAgICAgICAnbG93cGFzcyc6IDAsXG4gICAgICAgICdoaWdocGFzcyc6IDEsXG4gICAgICAgICdiYW5kcGFzcyc6IDIsXG4gICAgICAgICdsb3dzaGVsZic6IDMsXG4gICAgICAgICdoaWdoc2hlbGYnOiA0LFxuICAgICAgICAncGVha2luZyc6IDUsXG4gICAgICAgICdub3RjaCc6IDYsXG4gICAgICAgICdhbGxwYXNzJzogN1xuXHR9LFxuICAgIHdhdmU6IHtcbiAgICAgICAgJ3NpbmUnOiAnc2luZScsXG4gICAgICAgICdzcXVhcmUnOiAnc3F1YXJlJyxcbiAgICAgICAgJ3Nhd3Rvb3RoJzogJ3Nhd3Rvb3RoJyxcbiAgICAgICAgJ3RyaWFuZ2xlJzogJ3RyaWFuZ2xlJ1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG5mdW5jdGlvbiBBc3NldExvYWRlcigpIHtcbiAgICB0aGlzLm9uQ2hpbGRDb21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMubG9hZGVycyA9IHt9O1xuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLndlYkF1ZGlvQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hMb2NrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bVRvdGFsID0gMDtcbiAgICB0aGlzLm51bUxvYWRlZCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUigpIHtcbiAgICB2YXIgeGhyLCBpLCBwcm9nSWQsXG4gICAgICAgIHByb2dJZHMgPSBbJ01zeG1sMi5YTUxIVFRQJywgJ01pY3Jvc29mdC5YTUxIVFRQJywgJ01zeG1sMi5YTUxIVFRQLjQuMCddO1xuXG4gICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5BY3RpdmVYT2JqZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9nSWQgPSBwcm9nSWRzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB4aHIgPSBuZXcgd2luZG93LkFjdGl2ZVhPYmplY3QocHJvZ0lkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHhocjtcbn1cblxuQXNzZXRMb2FkZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgICAgIHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCwgdHlwZSk7XG4gICAgICAgIGxvYWRlci53ZWJBdWRpb0NvbnRleHQgPSB0aGlzLndlYkF1ZGlvQ29udGV4dDtcbiAgICAgICAgbG9hZGVyLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgICAgbG9hZGVyLnRvdWNoTG9ja2VkID0gdGhpcy50b3VjaExvY2tlZDtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGxvYWRlcik7XG4gICAgICAgIHRoaXMubnVtVG90YWwrKztcbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5udW1Ub3RhbCA9IHRoaXMucXVldWUubGVuZ3RoO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMubG9hZGVycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvYWRlciA9IHRoaXMucXVldWUucG9wKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbG9hZGVyLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5udW1Mb2FkZWQrKztcbiAgICAgICAgICAgIGlmKHNlbGYub25Qcm9ncmVzcy5nZXROdW1MaXN0ZW5lcnMoKSA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uUHJvZ3Jlc3MuZGlzcGF0Y2goc2VsZi5udW1Mb2FkZWQvc2VsZi5udW1Ub3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmxvYWRlcnNbbG9hZGVyLnVybF0gPSBsb2FkZXI7XG4gICAgICAgICAgICBzZWxmLm9uQ2hpbGRDb21wbGV0ZS5kaXNwYXRjaChsb2FkZXIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkZXIub25FcnJvci5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2gobG9hZGVyKTtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGVyLnN0YXJ0KCk7XG4gICAgfSxcbiAgICBhZGRNdWx0aXBsZTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXJzW3VybF07XG4gICAgfVxufTtcblxuQXNzZXRMb2FkZXIuTG9hZGVyID0gZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCB0aGlzLnVybC5zcGxpdCgnPycpWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy53ZWJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoTG9ja2VkID0gZmFsc2U7XG59O1xuXG5Bc3NldExvYWRlci5Mb2FkZXIucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbXAzJzpcbiAgICAgICAgICAgIGNhc2UgJ29nZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQsIHRoaXMudG91Y2hMb2NrZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdnaWYnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuY3Jvc3NPcmlnaW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnRVJST1I6IFVua25vd24gdHlwZSBmb3IgZmlsZSB3aXRoIFVSTDogJyArIHRoaXMudXJsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkQXVkaW86IGZ1bmN0aW9uKHdlYkF1ZGlvQ29udGV4dCwgdG91Y2hMb2NrZWQpIHtcbiAgICAgICAgaWYod2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXZWJBdWRpbyh3ZWJBdWRpb0NvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkSFRNTDVBdWRpbyh0b3VjaExvY2tlZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRXZWJBdWRpbzogZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xuICAgICAgICAgICAgICAgIHNlbGYub25Qcm9ncmVzcy5kaXNwYXRjaChwZXJjZW50Q29tcGxldGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVbmFibGUgdG8gY29tcHV0ZSBwcm9ncmVzcyBpbmZvcm1hdGlvbiBzaW5jZSB0aGUgdG90YWwgc2l6ZSBpcyB1bmtub3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3ZWJBdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goYnVmZmVyKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaChlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSxcbiAgICBsb2FkSFRNTDVBdWRpbzogZnVuY3Rpb24odG91Y2hMb2NrZWQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVxdWVzdDtcbiAgICAgICAgcmVxdWVzdC5uYW1lID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3QucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNyYyA9IHRoaXMudXJsO1xuICAgICAgICBpZiAoISF0b3VjaExvY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKnJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyBjYW5wbGF5dGhyb3VnaCcpO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICAgICAgfSwgZmFsc2UpOyovXG4gICAgICAgICAgICByZXF1ZXN0LmxvYWQoKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkSW1hZ2U6IGZ1bmN0aW9uKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7XG4gICAgICAgIHJlcXVlc3QubmFtZSA9IHRoaXMudXJsO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKHNlbGYuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZihjcm9zc09yaWdpbikge1xuICAgICAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Quc3JjID0gdGhpcy51cmw7XG4gICAgfSxcbiAgICBsb2FkSlNPTjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHJlcXVlc3QgPSBjcmVhdGVYSFIoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVMb2FkZWQoKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5qc29uID0gc2VsZi5kYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb25sb2FkJyBpbiByZXF1ZXN0ICYmICdvbmVycm9yJyBpbiByZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGhhbmRsZUxvYWRlZDtcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGhhbmRsZUVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuXG4vKmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gQXNzZXRMb2FkZXI7XG59Ki9cblxuLyp2YXIgcm9vdCA9IHRoaXM7XG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuICAgIH1cbiAgICBleHBvcnRzLkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7XG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ1BJWEknLCAoZnVuY3Rpb24oKSB7IHJldHVybiByb290LkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7IH0pKCkgKTtcbn0gZWxzZSB7XG4gICAgcm9vdC5QSVhJID0gUElYSTtcbn0qLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIHdlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoIGlzIGJyZWFraW5nIEZpcmVmb3hcclxuLy9yZXF1aXJlKCcuL3dlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoLmpzJyk7XHJcblxyXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuL3dlYi1hdWRpby5qcycpLFxyXG5cdEhUTUxBdWRpbyA9IHJlcXVpcmUoJy4vaHRtbC1hdWRpby5qcycpLFxyXG5cdFBhZ2VWaXNpYmlsaXR5ID0gcmVxdWlyZSgnLi9wYWdlLXZpc2liaWxpdHkuanMnKTtcclxuXHJcbmZ1bmN0aW9uIEF1ZGlvTWFuYWdlcigpIHtcclxuXHR0aGlzLndlYkF1ZGlvQ29udGV4dCA9IFdlYkF1ZGlvLmNyZWF0ZUNvbnRleHQoKTtcclxuXHR0aGlzLl9zb3VuZHMgPSB7fTtcclxuXHR0aGlzLl9kZWxheVRpbWVvdXRzID0gW107XHJcblx0dGhpcy5fZXh0ID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX2lzU3VwcG9ydGVkID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX3RvdWNoTG9ja2VkID0gZmFsc2U7XHJcblx0dGhpcy5fcXVldWVkID0gW107XHJcblxyXG5cdFBhZ2VWaXNpYmlsaXR5Lm9uUGFnZUhpZGRlbi5hZGQoZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBhdXNlQWxsKCk7XHJcblx0fSwgdGhpcyk7XHJcblx0UGFnZVZpc2liaWxpdHkub25QYWdlU2hvd24uYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5yZXN1bWVBbGwoKTtcclxuXHR9LCB0aGlzKTtcclxufVxyXG5cclxuQXVkaW9NYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHRhZGQ6IGZ1bmN0aW9uKGtleSwgZGF0YSwgbG9vcCkge1xyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy53ZWJBdWRpb0NvbnRleHQgJiYgIShkYXRhICYmIGRhdGEudGFnTmFtZSkgPyBuZXcgV2ViQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQpIDogbmV3IEhUTUxBdWRpbygpO1xyXG5cdFx0c291bmQubG9vcCA9ICEhKGxvb3ApO1xyXG5cdFx0c291bmQuYWRkKGRhdGEpO1xyXG5cdFx0dGhpcy5fc291bmRzW2tleV0gPSBzb3VuZDtcclxuXHRcdHJldHVybiBzb3VuZDtcclxuXHR9LFxyXG5cdGdldEV4dGVuc2lvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZighdGhpcy5fZXh0KSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcblx0XHRcdHRoaXMuX2V4dCA9IChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpID8gJy5vZ2cnIDogJy5tcDMnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9leHQ7XHJcblx0fSxcclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzLl9pc1N1cHBvcnRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdFx0XHR0aGlzLl9pc1N1cHBvcnRlZCA9ICEhKGVsICYmIChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpIHx8IGVsLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpKSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdHRoaXMuX2lzU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcclxuXHR9LFxyXG5cdHdlYkF1ZGlvU3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAhIXRoaXMud2ViQXVkaW9Db250ZXh0O1xyXG5cdH0sXHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcclxuXHR9LFxyXG5cdHBsYXk6IGZ1bmN0aW9uKGtleSwgZGVsYXksIGxvb3ApIHtcclxuXHRcdGlmKHRoaXMuX3RvdWNoTG9ja2VkKSB7XHJcblx0XHRcdHRoaXMucXVldWVVcChrZXksIGRlbGF5LCBsb29wKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy5fc291bmRzW2tleV07XHJcblx0XHRpZighc291bmQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG4gICAgICAgIGlmKGxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzb3VuZC5sb29wID0gbG9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGVsYXkgIT09IHVuZGVmaW5lZCAmJiBkZWxheSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGRlbGF5ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5wdXNoKGRlbGF5ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2ldLnZvbHVtZSA9IDA7XHJcblx0XHR9XHJcblx0fSxcclxuXHR1bk11dGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNbaV0udm9sdW1lID0gMTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHBhdXNlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmKCF0aGlzLl9zb3VuZHNba2V5XSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XS5wYXVzZSgpO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZighdGhpcy5fc291bmRzW2tleV0pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdH0sXHJcblx0cGF1c2VBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGxheWluZykge1xyXG5cdFx0XHRcdHRoaXMuX3NvdW5kc1tpXS5wYXVzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZXN1bWVBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy5fc291bmRzW2ldLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0c3RvcEFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGtleSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9kZWxheVRpbWVvdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5sZW5ndGggPSAwO1xyXG5cdH0sXHJcblx0Z2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RvdWNoTG9ja2VkO1xyXG5cdH0sXHJcblx0c2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl90b3VjaExvY2tlZCA9IHZhbHVlO1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciB1bmxvY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5fdG91Y2hMb2NrZWQgPSBmYWxzZTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl9xdWV1ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRzZWxmLl9xdWV1ZWRbaV0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLl9xdWV1ZWQubGVuZ3RoID0gMDtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5fdG91Y2hMb2NrZWQpIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRxdWV1ZVVwOiBmdW5jdGlvbihrZXksIGRlbGF5LCBsb29wKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgZm4gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5wbGF5KGtleSwgZGVsYXksIGxvb3ApO1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX3F1ZXVlZC5wdXNoKGZuKTtcclxuXHR9XHJcbn07XHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gQXVkaW9NYW5hZ2VyO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIEhUTUxBdWRpbygpIHtcclxuXHR0aGlzLl9zb3VuZCA9IG51bGw7XHJcblx0dGhpcy5fbG9vcCA9IGZhbHNlO1xyXG5cdHRoaXMuX3ZvbHVtZSA9IDE7XHJcblx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5IVE1MQXVkaW8ucHJvdG90eXBlID0ge1xyXG5cdGFkZDogZnVuY3Rpb24oZWwpIHtcclxuXHRcdHRoaXMuX3NvdW5kID0gZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmQ7XHJcblx0fSxcclxuXHRwbGF5OiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMuX3NvdW5kLnZvbHVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kLnZvbHVtZSA9IHRoaXMuX3ZvbHVtZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NvdW5kLnBsYXkoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5fc291bmQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoc2VsZi5fbG9vcCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0XHRcdHRoaXMucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbGYuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH0sXHJcblx0cGF1c2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5fc291bmQucGF1c2UoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XHJcblx0fSxcclxuXHRzdG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ2xvb3AnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb29wO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbG9vcCA9IHZhbHVlO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3ZvbHVtZScsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZvbHVtZTtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl92b2x1bWUgPSB2YWx1ZTtcclxuXHRcdGlmKHRoaXMuX3NvdW5kICYmIHRoaXMuX3NvdW5kLnZvbHVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kLnZvbHVtZSA9IHRoaXMuX3ZvbHVtZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdwbGF5aW5nJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGxheWluZztcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdwYXVzZWQnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXVzZWQ7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAnc291bmQnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZDtcclxuXHR9XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEhUTUxBdWRpbztcclxufVxyXG4iLCJ2YXIgS2V5Ym9hcmQgPSB7XG5cdEE6ICdBJy5jaGFyQ29kZUF0KDApLFxuXHRCOiAnQicuY2hhckNvZGVBdCgwKSxcblx0QzogJ0MnLmNoYXJDb2RlQXQoMCksXG5cdEQ6ICdEJy5jaGFyQ29kZUF0KDApLFxuXHRFOiAnRScuY2hhckNvZGVBdCgwKSxcblx0RjogJ0YnLmNoYXJDb2RlQXQoMCksXG5cdEc6ICdHJy5jaGFyQ29kZUF0KDApLFxuXHRIOiAnSCcuY2hhckNvZGVBdCgwKSxcblx0STogJ0knLmNoYXJDb2RlQXQoMCksXG5cdEo6ICdKJy5jaGFyQ29kZUF0KDApLFxuXHRLOiAnSycuY2hhckNvZGVBdCgwKSxcblx0TDogJ0wnLmNoYXJDb2RlQXQoMCksXG5cdE06ICdNJy5jaGFyQ29kZUF0KDApLFxuXHROOiAnTicuY2hhckNvZGVBdCgwKSxcblx0TzogJ08nLmNoYXJDb2RlQXQoMCksXG5cdFA6ICdQJy5jaGFyQ29kZUF0KDApLFxuXHRROiAnUScuY2hhckNvZGVBdCgwKSxcblx0UjogJ1InLmNoYXJDb2RlQXQoMCksXG5cdFM6ICdTJy5jaGFyQ29kZUF0KDApLFxuXHRUOiAnVCcuY2hhckNvZGVBdCgwKSxcblx0VTogJ1UnLmNoYXJDb2RlQXQoMCksXG5cdFY6ICdWJy5jaGFyQ29kZUF0KDApLFxuXHRXOiAnVycuY2hhckNvZGVBdCgwKSxcblx0WDogJ1gnLmNoYXJDb2RlQXQoMCksXG5cdFk6ICdZJy5jaGFyQ29kZUF0KDApLFxuXHRaOiAnWicuY2hhckNvZGVBdCgwKSxcblx0WkVSTzogJzAnLmNoYXJDb2RlQXQoMCksXG5cdE9ORTogJzEnLmNoYXJDb2RlQXQoMCksXG5cdFRXTzogJzInLmNoYXJDb2RlQXQoMCksXG5cdFRIUkVFOiAnMycuY2hhckNvZGVBdCgwKSxcblx0Rk9VUjogJzQnLmNoYXJDb2RlQXQoMCksXG5cdEZJVkU6ICc1Jy5jaGFyQ29kZUF0KDApLFxuXHRTSVg6ICc2Jy5jaGFyQ29kZUF0KDApLFxuXHRTRVZFTjogJzcnLmNoYXJDb2RlQXQoMCksXG5cdEVJR0hUOiAnOCcuY2hhckNvZGVBdCgwKSxcblx0TklORTogJzknLmNoYXJDb2RlQXQoMCksXG5cdE5VTVBBRF8wOiA5Nixcblx0TlVNUEFEXzE6IDk3LFxuXHROVU1QQURfMjogOTgsXG5cdE5VTVBBRF8zOiA5OSxcblx0TlVNUEFEXzQ6IDEwMCxcblx0TlVNUEFEXzU6IDEwMSxcblx0TlVNUEFEXzY6IDEwMixcblx0TlVNUEFEXzc6IDEwMyxcblx0TlVNUEFEXzg6IDEwNCxcblx0TlVNUEFEXzk6IDEwNSxcblx0TlVNUEFEX01VTFRJUExZOiAxMDYsXG5cdE5VTVBBRF9BREQ6IDEwNyxcblx0TlVNUEFEX0VOVEVSOiAxMDgsXG5cdE5VTVBBRF9TVUJUUkFDVDogMTA5LFxuXHROVU1QQURfREVDSU1BTDogMTEwLFxuXHROVU1QQURfRElWSURFOiAxMTEsXG5cdEYxOiAxMTIsXG5cdEYyOiAxMTMsXG5cdEYzOiAxMTQsXG5cdEY0OiAxMTUsXG5cdEY1OiAxMTYsXG5cdEY2OiAxMTcsXG5cdEY3OiAxMTgsXG5cdEY4OiAxMTksXG5cdEY5OiAxMjAsXG5cdEYxMDogMTIxLFxuXHRGMTE6IDEyMixcblx0RjEyOiAxMjMsXG5cdEYxMzogMTI0LFxuXHRGMTQ6IDEyNSxcblx0RjE1OiAxMjYsXG5cdENPTE9OOiAxODYsXG5cdEVRVUFMUzogMTg3LFxuXHRVTkRFUlNDT1JFOiAxODksXG5cdFFVRVNUSU9OX01BUks6IDE5MSxcblx0VElMREU6IDE5Mixcblx0T1BFTl9CUkFDS0VUOiAyMTksXG5cdEJBQ0tXQVJEX1NMQVNIOiAyMjAsXG5cdENMT1NFRF9CUkFDS0VUOiAyMjEsXG5cdFFVT1RFUzogMjIyLFxuXHRCQUNLU1BBQ0U6IDgsXG5cdFRBQjogOSxcblx0Q0xFQVI6IDEyLFxuXHRFTlRFUjogMTMsXG5cdFNISUZUOiAxNixcblx0Q09OVFJPTDogMTcsXG5cdEFMVDogMTgsXG5cdENBUFNfTE9DSzogMjAsXG5cdEVTQzogMjcsXG5cdFNQQUNFQkFSOiAzMixcblx0UEFHRV9VUDogMzMsXG5cdFBBR0VfRE9XTjogMzQsXG5cdEVORDogMzUsXG5cdEhPTUU6IDM2LFxuXHRMRUZUOiAzNyxcblx0VVA6IDM4LFxuXHRSSUdIVDogMzksXG5cdERPV046IDQwLFxuXHRJTlNFUlQ6IDQ1LFxuXHRERUxFVEU6IDQ2LFxuXHRIRUxQOiA0Nyxcblx0TlVNX0xPQ0s6IDE0NFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlib2FyZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG5mdW5jdGlvbiBNaWNyb3Bob25lKCkge1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfID0gKG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYSk7XG4gICAgdGhpcy5faXNTdXBwb3J0ZWQgPSAhIW5hdmlnYXRvci5nZXRVc2VyTWVkaWFfO1xuICAgIHRoaXMuX3N0cmVhbSA9IG51bGw7XG5cbiAgICB0aGlzLm9uQ29ubmVjdGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkRlbmllZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxuXG5NaWNyb3Bob25lLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMuX2lzU3VwcG9ydGVkKSB7IHJldHVybjsgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXygge2F1ZGlvOnRydWV9LCBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgc2VsZi5fc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLm9uQ29ubmVjdGVkLmRpc3BhdGNoKHN0cmVhbSk7XG4gICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYoZS5uYW1lID09PSAnUGVybWlzc2lvbkRlbmllZEVycm9yJyB8fCBlID09PSAnUEVSTUlTU0lPTl9ERU5JRUQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGVybWlzc2lvbiBkZW5pZWQuIFlvdSBjYW4gdW5kbyB0aGlzIGJ5IGNsaWNraW5nIHRoZSBjYW1lcmEgaWNvbiB3aXRoIHRoZSByZWQgY3Jvc3MgaW4gdGhlIGFkZHJlc3MgYmFyJyk7XG4gICAgICAgICAgICBzZWxmLm9uRGVuaWVkLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5NaWNyb3Bob25lLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5fc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuX3N0cmVhbS5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3N0cmVhbSA9IG51bGw7XG4gICAgfVxufTtcblxuTWljcm9waG9uZS5wcm90b3R5cGUuY3JlYXRlV2ViQXVkaW9Tb3VyY2UgPSBmdW5jdGlvbih3ZWJBdWRpb0NvbnRleHQsIGNvbm5lY3RUbykge1xuICAgIGlmKCF0aGlzLl9zdHJlYW0pIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgbWVkaWFTdHJlYW1Tb3VyY2UgPSB3ZWJBdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UoIHRoaXMuX3N0cmVhbSApO1xuICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICBtZWRpYVN0cmVhbVNvdXJjZS5jb25uZWN0KGNvbm5lY3RUbyk7XG4gICAgfVxuICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgLy8gc2VlIGh0dHBzOi8vc3VwcG9ydC5tb3ppbGxhLm9yZy9lbi1VUy9xdWVzdGlvbnMvOTg0MTc5XG4gICAgaWYobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFTdHJlYW1Tb3VyY2U7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWljcm9waG9uZS5wcm90b3R5cGUsICdzdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmVhbTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pY3JvcGhvbmUucHJvdG90eXBlLCAnaXNTdXBwb3J0ZWQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xuICAgIH1cbn0pO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1pY3JvcGhvbmU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG52YXIgb25QYWdlSGlkZGVuID0gbmV3IHNpZ25hbHMuU2lnbmFsKCksXG4gICAgb25QYWdlU2hvd24gPSBuZXcgc2lnbmFscy5TaWduYWwoKSxcbiAgICBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2U7XG5cbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoZG9jdW1lbnRbaGlkZGVuXSkge1xuICAgICAgICBvblBhZ2VIaWRkZW4uZGlzcGF0Y2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvblBhZ2VTaG93bi5kaXNwYXRjaCgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0IFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICdtc0hpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmlmKHZpc2liaWxpdHlDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uUGFnZVNob3duOiBvblBhZ2VTaG93bixcbiAgICBvblBhZ2VIaWRkZW46IG9uUGFnZUhpZGRlblxufTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfVxufSgpKTsiLCIndXNlIHN0cmljdCc7XG5cbiBmdW5jdGlvbiBXZWJBdWRpb0hlbHBlcnMoY29udGV4dCkge1xuICAgIGZ1bmN0aW9uIHBhcnNlTnVtKHgpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKHgpID8gMCA6IHBhcnNlRmxvYXQoeCwgMTApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZhZGU6IGZ1bmN0aW9uKGdhaW5Ob2RlLCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGdhaW5Ob2RlLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodmFsdWUsIGNvbnRleHQuY3VycmVudFRpbWUgKyBkdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhblg6IGZ1bmN0aW9uKHBhbm5lciwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHggZnJvbSAtTWF0aC5QSS80IHRvIE1hdGguUEkvNCAoLTQ1IHRvIDQ1IGRlZylcbiAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApICogTWF0aC5QSSAvIDQ7XG4gICAgICAgICAgICB2YXIgeiA9IHggKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIGlmICh6ID4gTWF0aC5QSSAvIDIpIHtcbiAgICAgICAgICAgICAgICB6ID0gTWF0aC5QSSAtIHo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ID0gTWF0aC5zaW4oeCk7XG4gICAgICAgICAgICB6ID0gTWF0aC5zaW4oeik7XG4gICAgICAgICAgICBwYW5uZXIuc2V0UG9zaXRpb24oeCwgMCwgeik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhbjogZnVuY3Rpb24ocGFubmVyLCB4LCB5LCB6KSB7XG4gICAgICAgICAgICB4ID0gcGFyc2VOdW0oeCk7XG4gICAgICAgICAgICB5ID0gcGFyc2VOdW0oeSk7XG4gICAgICAgICAgICB6ID0gcGFyc2VOdW0oeik7XG4gICAgICAgICAgICBwYW5uZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNvdXJjZVBvc2l0aW9uOiBmdW5jdGlvbihwYW5uZXIsIHBvc2l0aW9uVmVjKSB7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzb3VyY2UgKHdoZXJlIHRoZSBhdWRpbyBpcyBjb21pbmcgZnJvbSlcbiAgICAgICAgICAgIHBhbm5lci5zZXRQb3NpdGlvbihwb3NpdGlvblZlYy54LCBwb3NpdGlvblZlYy55LCBwb3NpdGlvblZlYy56KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U291cmNlT3JpZW50YXRpb246IGZ1bmN0aW9uKHBhbm5lciwgZm9yd2FyZFZlYykgeyAvLyBmb3J3YXJkVmVjID0gVEhSRUUuVmVjdG9yM1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgc291cmNlICh3aGVyZSB0aGUgYXVkaW8gaXMgY29taW5nIGZyb20pXG4gICAgICAgICAgICB2YXIgZncgPSBmb3J3YXJkVmVjLmNsb25lKCkubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdXAgdmVjICggdXAgPSAoZm9yd2FyZCBjcm9zcyAoMCwgMSwgMCkpIGNyb3NzIGZvcndhcmQgKVxuICAgICAgICAgICAgdmFyIGdsb2JhbFVwID0geyB4OiAwLCB5OiAxLCB6OiAwIH07XG4gICAgICAgICAgICB2YXIgdXAgPSBmb3J3YXJkVmVjLmNsb25lKCkuY3Jvc3MoZ2xvYmFsVXApLmNyb3NzKGZvcndhcmRWZWMpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBhdWRpbyBjb250ZXh0J3MgbGlzdGVuZXIgcG9zaXRpb24gdG8gbWF0Y2ggdGhlIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICAgICAgcGFubmVyLnNldE9yaWVudGF0aW9uKGZ3LngsIGZ3LnksIGZ3LnosIHVwLngsIHVwLnksIHVwLnopO1xuICAgICAgICB9LFxuICAgICAgICBzZXRMaXN0ZW5lclBvc2l0aW9uOiBmdW5jdGlvbihwb3NpdGlvblZlYykge1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIgKHdobyBpcyBoZWFyaW5nIHRoZSBhdWRpbylcbiAgICAgICAgICAgIGNvbnRleHQubGlzdGVuZXIuc2V0UG9zaXRpb24ocG9zaXRpb25WZWMueCwgcG9zaXRpb25WZWMueSwgcG9zaXRpb25WZWMueik7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpc3RlbmVyT3JpZW50YXRpb246IGZ1bmN0aW9uKGZvcndhcmRWZWMpIHsgLy8gZm9yd2FyZFZlYyA9IFRIUkVFLlZlY3RvcjNcbiAgICAgICAgICAgIC8vIHNldCB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyICh3aG8gaXMgaGVhcmluZyB0aGUgYXVkaW8pXG4gICAgICAgICAgICB2YXIgZncgPSBmb3J3YXJkVmVjLmNsb25lKCkubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdXAgdmVjICggdXAgPSAoZm9yd2FyZCBjcm9zcyAoMCwgMSwgMCkpIGNyb3NzIGZvcndhcmQgKVxuICAgICAgICAgICAgdmFyIGdsb2JhbFVwID0geyB4OiAwLCB5OiAxLCB6OiAwIH07XG4gICAgICAgICAgICB2YXIgdXAgPSBmb3J3YXJkVmVjLmNsb25lKCkuY3Jvc3MoZ2xvYmFsVXApLmNyb3NzKGZvcndhcmRWZWMpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBhdWRpbyBjb250ZXh0J3MgbGlzdGVuZXIgcG9zaXRpb24gdG8gbWF0Y2ggdGhlIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICAgICAgY29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbihmdy54LCBmdy55LCBmdy56LCB1cC54LCB1cC55LCB1cC56KTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9wcGxlcjogZnVuY3Rpb24ocGFubmVyLCB4LCB5LCB6LCBkZWx0YVgsIGRlbHRhWSwgZGVsdGFaLCBkZWx0YVRpbWUpIHtcbiAgICAgICAgICAgIC8vIFRyYWNraW5nIHRoZSB2ZWxvY2l0eSBjYW4gYmUgZG9uZSBieSBnZXR0aW5nIHRoZSBvYmplY3QncyBwcmV2aW91cyBwb3NpdGlvbiwgc3VidHJhY3RpbmdcbiAgICAgICAgICAgIC8vIGl0IGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIGRpdmlkaW5nIHRoZSByZXN1bHQgYnkgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IGZyYW1lXG4gICAgICAgICAgICBwYW5uZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICBwYW5uZXIuc2V0VmVsb2NpdHkoZGVsdGFYL2RlbHRhVGltZSwgZGVsdGFZL2RlbHRhVGltZSwgZGVsdGFaL2RlbHRhVGltZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oZmlsdGVyTm9kZSwgdmFsdWUsIHF1YWxpdHksIGdhaW4pIHtcbiAgICAgICAgICAgIC8vIHNldCBmaWx0ZXIgZnJlcXVlbmN5IGJhc2VkIG9uIHZhbHVlIGZyb20gMCB0byAxXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbiAgICAgICAgICAgIHF1YWxpdHkgPSBwYXJzZUZsb2F0KHF1YWxpdHksIDEwKTtcbiAgICAgICAgICAgIGdhaW4gPSBwYXJzZUZsb2F0KGdhaW4sIDEwKTtcbiAgICAgICAgICAgIC8vIEdldCBiYWNrIHRvIHRoZSBmcmVxdWVuY3kgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAgICAgICAgIGZpbHRlck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5nZXRGcmVxdWVuY3kodmFsdWUpO1xuXG4gICAgICAgICAgICAvL2ZpbHRlck5vZGUuUS52YWx1ZSA9IHF1YWxpdHk7XG4gICAgICAgICAgICAvL2ZpbHRlck5vZGUuZ2Fpbi52YWx1ZSA9IGdhaW47XG4gICAgICAgIH0sXG4gICAgICAgIGdldEZyZXF1ZW5jeTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGdldCBmcmVxdWVuY3kgYnkgcGFzc2luZyBudW1iZXIgZnJvbSAwIHRvIDFcbiAgICAgICAgICAgIC8vIENsYW1wIHRoZSBmcmVxdWVuY3kgYmV0d2VlbiB0aGUgbWluaW11bSB2YWx1ZSAoNDAgSHopIGFuZCBoYWxmIG9mIHRoZVxuICAgICAgICAgICAgLy8gc2FtcGxpbmcgcmF0ZS5cbiAgICAgICAgICAgIHZhciBtaW5WYWx1ZSA9IDQwO1xuICAgICAgICAgICAgdmFyIG1heFZhbHVlID0gY29udGV4dC5zYW1wbGVSYXRlIC8gMjtcbiAgICAgICAgICAgIC8vIExvZ2FyaXRobSAoYmFzZSAyKSB0byBjb21wdXRlIGhvdyBtYW55IG9jdGF2ZXMgZmFsbCBpbiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZPY3RhdmVzID0gTWF0aC5sb2cobWF4VmFsdWUgLyBtaW5WYWx1ZSkgLyBNYXRoLkxOMjtcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBtdWx0aXBsaWVyIGZyb20gMCB0byAxIGJhc2VkIG9uIGFuIGV4cG9uZW50aWFsIHNjYWxlLlxuICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygyLCBudW1iZXJPZk9jdGF2ZXMgKiAodmFsdWUgLSAxLjApKTtcbiAgICAgICAgICAgIC8vIEdldCBiYWNrIHRvIHRoZSBmcmVxdWVuY3kgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAgICAgICAgIHJldHVybiBtYXhWYWx1ZSAqIG11bHRpcGxpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2U6IGZ1bmN0aW9uKHN0cmVhbSwgY29ubmVjdFRvKSB7XG4gICAgICAgICAgICB2YXIgbWVkaWFTdHJlYW1Tb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCBzdHJlYW0gKTtcbiAgICAgICAgICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICAgICAgICAgIG1lZGlhU3RyZWFtU291cmNlLmNvbm5lY3QoY29ubmVjdFRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly9zdXBwb3J0Lm1vemlsbGEub3JnL2VuLVVTL3F1ZXN0aW9ucy85ODQxNzlcbiAgICAgICAgICAgIGlmKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhU3RyZWFtU291cmNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXN0b3J0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHdhdmVTaGFwZXIgZGlzdG9ydGlvbiBjdXJ2ZSBmcm9tIDAgdG8gMVxuICAgICAgICAgICAgdmFyIGsgPSB2YWx1ZSAqIDEwMCxcbiAgICAgICAgICAgICAgICBuID0gMjIwNTAsXG4gICAgICAgICAgICAgICAgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KG4pLFxuICAgICAgICAgICAgICAgIGRlZyA9IE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBpICogMiAvIG4gLSAxO1xuICAgICAgICAgICAgICAgIGN1cnZlW2ldID0gKDMgKyBrKSAqIHggKiAyMCAqIGRlZyAvIChNYXRoLlBJICsgayAqIE1hdGguYWJzKHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJ2ZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9IZWxwZXJzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBXZWJBdWRpb05vZGVGYWN0b3J5KGNvbnRleHQpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcih0eXBlLCBmcmVxdWVuY3kpIHtcbiAgICAgICAgdmFyIGZpbHRlck5vZGUgPSBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgICAgICBmaWx0ZXJOb2RlLnR5cGUgPSB0eXBlO1xuICAgICAgICBpZihmcmVxdWVuY3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmlsdGVyTm9kZS5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3k7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlck5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2FpbjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVQYW5uZXIoKTtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgZm9yIHN0ZXJlbyBpcyBIUlRGXG4gICAgICAgICAgICBub2RlLnBhbm5pbmdNb2RlbCA9ICdIUlRGJztcbiAgICAgICAgICAgIC8vbm9kZS5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qXG5cbiAgICAgICAgICAgIC8vIFVzZXMgYSAzRCBjYXJ0ZXNpYW4gY29vcmRpbmF0ZSBzeXN0ZW1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob2JqZWN0LnBvc2l0aW9uLngvMjkwLCBvYmplY3QucG9zaXRpb24ueS8yOTAsIG9iamVjdC5wb3NpdGlvbi56LzI5MCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRPcmllbnRhdGlvbigxLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0VmVsb2NpdHkoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIC8vIERpc3RhbmNlIG1vZGVsIGFuZCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBub2RlLmRpc3RhbmNlTW9kZWwgPSAnaW52ZXJzZSc7IC8vICdsaW5lYXInICdpbnZlcnNlJyAnZXhwb25lbnRpYWwnXG4gICAgICAgICAgICBub2RlLnJlZkRpc3RhbmNlID0gMTtcbiAgICAgICAgICAgIG5vZGUubWF4RGlzdGFuY2UgPSAxMDAwMDtcbiAgICAgICAgICAgIG5vZGUucm9sbG9mZkZhY3RvciA9IDE7XG5cbiAgICAgICAgICAgIC8vIERpcmVjdGlvbmFsIHNvdW5kIGNvbmUgLSBUaGUgY29uZSBhbmdsZXMgYXJlIGluIGRlZ3JlZXMgYW5kIHJ1biBmcm9tIDAgdG8gMzYwXG4gICAgICAgICAgICAvLyBub2RlLmNvbmVJbm5lckFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgLy8gbm9kZS5jb25lT3V0ZXJBbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZU91dGVyR2FpbiA9IDA7XG5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAvLyBub3JtYWxpc2VkIHZlY1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgIGxvd3Bhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2xvd3Bhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdoaWdocGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFuZHBhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2JhbmRwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb3dzaGVsZjogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignbG93c2hlbGYnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hzaGVsZjogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignaGlnaHNoZWxmJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZWFraW5nOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdwZWFraW5nJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RjaDogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignbm90Y2gnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbHBhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2FsbHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxheTogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZURlbGF5KCk7XG4gICAgICAgICAgICBpZih0aW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmRlbGF5VGltZS52YWx1ZSA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udm9sdmVyOiBmdW5jdGlvbihpbXB1bHNlUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vIGltcHVsc2VSZXNwb25zZSBpcyBhbiBhdWRpbyBmaWxlIGJ1ZmZlclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUNvbnZvbHZlcigpO1xuICAgICAgICAgICAgbm9kZS5idWZmZXIgPSBpbXB1bHNlUmVzcG9uc2U7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV2ZXJiOiBmdW5jdGlvbihzZWNvbmRzLCBkZWNheSwgcmV2ZXJzZSkge1xuICAgICAgICAgICByZXR1cm4gdGhpcy5jb252b2x2ZXIodGhpcy5jcmVhdGVJbXB1bHNlUmVzcG9uc2Uoc2Vjb25kcywgZGVjYXksIHJldmVyc2UpKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlSW1wdWxzZVJlc3BvbnNlOiBmdW5jdGlvbihzZWNvbmRzLCBkZWNheSwgcmV2ZXJzZSkge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgYSByZXZlcmIgZWZmZWN0XG4gICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyB8fCAxO1xuICAgICAgICAgICAgZGVjYXkgPSBkZWNheSB8fCA1O1xuICAgICAgICAgICAgcmV2ZXJzZSA9ICEhcmV2ZXJzZTtcblxuICAgICAgICAgICAgdmFyIG51bUNoYW5uZWxzID0gMixcbiAgICAgICAgICAgICAgICByYXRlID0gY29udGV4dC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJhdGUgKiBzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGltcHVsc2VSZXNwb25zZSA9IGNvbnRleHQuY3JlYXRlQnVmZmVyKG51bUNoYW5uZWxzLCBsZW5ndGgsIHJhdGUpLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBpbXB1bHNlUmVzcG9uc2UuZ2V0Q2hhbm5lbERhdGEoMCksXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBpbXB1bHNlUmVzcG9uc2UuZ2V0Q2hhbm5lbERhdGEoMSksXG4gICAgICAgICAgICAgICAgbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG4gPSByZXZlcnNlID8gbGVuZ3RoIC0gMSA6IGk7XG4gICAgICAgICAgICAgICAgbGVmdFtpXSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogTWF0aC5wb3coMSAtIG4gLyBsZW5ndGgsIGRlY2F5KTtcbiAgICAgICAgICAgICAgICByaWdodFtpXSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogTWF0aC5wb3coMSAtIG4gLyBsZW5ndGgsIGRlY2F5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGltcHVsc2VSZXNwb25zZTtcbiAgICAgICAgfSxcbiAgICAgICAgYW5hbHlzZXI6IGZ1bmN0aW9uKGZmdFNpemUpIHtcbiAgICAgICAgICAgIGZmdFNpemUgPSBmZnRTaXplIHx8IDEwMjQ7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIG5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC44NTtcbiAgICAgICAgICAgIC8vIHJlc29sdXRpb24gZmZ0U2l6ZTogMzIgLSAyMDQ4IChwb3cgMilcbiAgICAgICAgICAgIC8vIGZyZXF1ZW5jeUJpbkNvdW50IHdpbGwgYmUgaGFsZiB0aGlzIHZhbHVlXG4gICAgICAgICAgICBub2RlLmZmdFNpemUgPSBmZnRTaXplO1xuICAgICAgICAgICAgLy9ub2RlLm1pbkRlY2liZWxzID0gLTEwMDtcbiAgICAgICAgICAgIC8vbm9kZS5tYXhEZWNpYmVscyA9IC0zMDtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBjb21wcmVzc29yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGxvd2VycyB0aGUgdm9sdW1lIG9mIHRoZSBsb3VkZXN0IHBhcnRzIG9mIHRoZSBzaWduYWwgYW5kIHJhaXNlcyB0aGUgdm9sdW1lIG9mIHRoZSBzb2Z0ZXN0IHBhcnRzXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgICAgICAgICAvLyBtaW4gZGVjaWJlbHMgdG8gc3RhcnQgY29tcHJlc3NpbmcgYXQgZnJvbSAtMTAwIHRvIDBcbiAgICAgICAgICAgIG5vZGUudGhyZXNob2xkLnZhbHVlID0gLTI0O1xuICAgICAgICAgICAgLy8gZGVjaWJlbCB2YWx1ZSB0byBzdGFydCBjdXJ2ZSB0byBjb21wcmVzc2VkIHZhbHVlIGZyb20gMCB0byA0MFxuICAgICAgICAgICAgbm9kZS5rbmVlLnZhbHVlID0gMzA7XG4gICAgICAgICAgICAvLyBhbW91bnQgb2YgY2hhbmdlIHBlciBkZWNpYmVsIGZyb20gMSB0byAyMFxuICAgICAgICAgICAgbm9kZS5yYXRpby52YWx1ZSA9IDEyO1xuICAgICAgICAgICAgLy8gZ2FpbiByZWR1Y3Rpb24gY3VycmVudGx5IGFwcGxpZWQgYnkgY29tcHJlc3NvciBmcm9tIC0yMCB0byAwXG4gICAgICAgICAgICAvLyBub2RlLnJlZHVjdGlvbi52YWx1ZVxuICAgICAgICAgICAgLy8gc2Vjb25kcyB0byByZWR1Y2UgZ2FpbiBieSAxMGRiIGZyb20gMCB0byAxIC0gaG93IHF1aWNrbHkgc2lnbmFsIGFkYXB0ZWQgd2hlbiB2b2x1bWUgaW5jcmVhc2VkXG4gICAgICAgICAgICBub2RlLmF0dGFjay52YWx1ZSA9IDAuMDAwMztcbiAgICAgICAgICAgIC8vIHNlY29uZHMgdG8gaW5jcmVhc2UgZ2FpbiBieSAxMGRiIGZyb20gMCB0byAxIC0gaG93IHF1aWNrbHkgc2lnbmFsIGFkYXB0ZWQgd2hlbiB2b2x1bWUgcmVkY3VjZWRcbiAgICAgICAgICAgIG5vZGUucmVsZWFzZS52YWx1ZSA9IDAuMjU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzdG9ydGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpO1xuICAgICAgICAgICAgLy8gRmxvYXQzMkFycmF5IGRlZmluaW5nIGN1cnZlICh2YWx1ZXMgYXJlIGludGVycG9sYXRlZClcbiAgICAgICAgICAgIC8vbm9kZS5jdXJ2ZVxuICAgICAgICAgICAgLy8gdXAtc2FtcGxlIGJlZm9yZSBhcHBseWluZyBjdXJ2ZSBmb3IgYmV0dGVyIHJlc29sdXRpb24gcmVzdWx0ICdub25lJywgJzJ4JyBvciAnNHgnXG4gICAgICAgICAgICAvL25vZGUub3ZlcnNhbXBsZSA9ICcyeCc7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2NyaXB0UHJvY2Vzc29yOiBmdW5jdGlvbihidWZmZXJTaXplLCBpbnB1dENoYW5uZWxzLCBvdXRwdXRDaGFubmVscywgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgLy8gYnVmZmVyU2l6ZSAyNTYgLSAxNjM4NCAocG93IDIpXG4gICAgICAgICAgICBidWZmZXJTaXplID0gYnVmZmVyU2l6ZSB8fCAxMDI0O1xuICAgICAgICAgICAgaW5wdXRDaGFubmVscyA9IGlucHV0Q2hhbm5lbHMgPT09IHVuZGVmaW5lZCA/IDAgOiBpbnB1dENoYW5uZWxzO1xuICAgICAgICAgICAgb3V0cHV0Q2hhbm5lbHMgPSBvdXRwdXRDaGFubmVscyA9PT0gdW5kZWZpbmVkID8gMSA6IG91dHB1dENoYW5uZWxzO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCBpbnB1dENoYW5uZWxzLCBvdXRwdXRDaGFubmVscyk7XG4gICAgICAgICAgICBub2RlLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHByb3BzOlxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgZXZlbnQuaW5wdXRCdWZmZXJcbiAgICAgICAgICAgICAgICBldmVudC5vdXRwdXRCdWZmZXJcbiAgICAgICAgICAgICAgICBldmVudC5wbGF5YmFja1RpbWVcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IGdlbmVyYXRlIG5vaXNlXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgICAgICAgICAgIHZhciBsID0gb3V0cHV0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaV0gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tDb250ZXh0IHx8IHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9Ob2RlRmFjdG9yeTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFdlYkF1ZGlvTm9kZUZhY3RvcnkgPSByZXF1aXJlKCcuL3dlYi1hdWRpby1ub2RlZmFjdG9yeS5qcycpLFxuICAgIFdlYkF1ZGlvSGVscGVycyA9IHJlcXVpcmUoJy4vd2ViLWF1ZGlvLWhlbHBlcnMuanMnKTtcblxuZnVuY3Rpb24gV2ViQXVkaW8oY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgV2ViQXVkaW8uY3JlYXRlQ29udGV4dCgpO1xuICAgIHRoaXMuZXh0ZW5zaW9uID0gV2ViQXVkaW8uZ2V0RXh0ZW5zaW9uKCk7XG4gICAgdGhpcy5fc291bmQgPSBbXTtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5fZ2Fpbi5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fc3RhcnRlZEF0ID0gMDtcbiAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub2RlRmFjdG9yeSA9IG5ldyBXZWJBdWRpb05vZGVGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5faGVscGVycyA9IG5ldyBXZWJBdWRpb0hlbHBlcnModGhpcy5jb250ZXh0KTtcbn1cblxuV2ViQXVkaW8ucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIGlmKCFidWZmZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuX3NvdW5kLnB1c2gobmV3IFdlYkF1ZGlvLlNvdW5kKGJ1ZmZlciwgdGhpcy5jb250ZXh0KSk7XG4gICAgICAgIHRoaXMuX3NvdW5kW3RoaXMuX3NvdW5kLmxlbmd0aC0xXS5sb29wID0gdGhpcy5fbG9vcDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kW3RoaXMuX3NvdW5kLmxlbmd0aC0xXTtcbiAgICB9LFxuICAgIHBsYXk6IGZ1bmN0aW9uKGRlbGF5KSB7XG4gICAgICAgIHZhciBtYXhEdXJhdGlvbiA9IC0xLFxuICAgICAgICAgICAgbG9uZ2VzdFNvdW5kO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLmNvbm5lY3QodGhpcy5fZ2Fpbik7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5wbGF5KGRlbGF5IHx8IDAsIHRoaXMuX3BhdXNlZEF0IC8gMTAwMCk7XG4gICAgICAgICAgICBpZih0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gPSB0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBsb25nZXN0U291bmQgPSB0aGlzLl9zb3VuZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxvbmdlc3RTb3VuZC5zb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zdGFydGVkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fcGF1c2VkQXQ7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fcGF1c2VkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRlZEF0O1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGFkZE5vZGU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fbm9kZS5wdXNoKG5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG4gICAgcmVtb3ZlTm9kZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgbCA9IHRoaXMuX25vZGUubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5fbm9kZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGUuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5kaXNjb25uZWN0KDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgfSxcbiAgICB1cGRhdGVDb25uZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5fbm9kZS5sZW5ndGg7XG4gICAgICAgIGlmKGwgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2dhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2RlW2ldLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2Fpbi5kaXNjb25uZWN0KDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dhaW4uY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgPT09IGwtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVbaV0uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVbaS0xXS5jb25uZWN0KHRoaXMuX25vZGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2xvb3AnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0ubG9vcCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICd2b2x1bWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2Fpbi5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdwbGF5aW5nJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5aW5nO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAncGF1c2VkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRBdCA+IDA7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdzb3VuZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmQ7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdlbGFwc2VkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydGVkQXQgPyBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRlZEF0IDogMDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ25vZGVGYWN0b3J5Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlRmFjdG9yeTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2hlbHBlcnMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlbHBlcnM7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBDb250ZXh0XG4gKi9cblxuV2ViQXVkaW8uY3JlYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGlmKHdpbmRvdy5BdWRpb0NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufTtcblxuLypcbiAqIEV4dGVuc2lvbiAocHJlZmVycyBvZ2cgZm9yIHN1cGVyaW9yIGxvb3BpbmcpXG4gKi9cblxuV2ViQXVkaW8uZ2V0RXh0ZW5zaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICByZXR1cm4gKGVsLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykgPyAnLm9nZycgOiAnLm1wMycpO1xufTtcblxuLypcbiAqIFNvdW5kXG4gKi9cblxuV2ViQXVkaW8uU291bmQgPSBmdW5jdGlvbihidWZmZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX29uRW5kZWQgPSBudWxsO1xuICAgIHRoaXMubmFtZSA9ICcnO1xufTtcblxuV2ViQXVkaW8uU291bmQucHJvdG90eXBlID0ge1xuICAgIHBsYXk6IGZ1bmN0aW9uKGRlbGF5LCBvZmZzZXQpIHtcbiAgICAgICAgaWYoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IHRoaXMuX2NvbnRleHQuY3VycmVudFRpbWUgKyBkZWxheTtcbiAgICAgICAgfVxuICAgICAgICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdGhpcy5fbG9vcDtcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoZGVsYXksIG9mZnNldCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYodGhpcy5fbm9kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2RlW3RoaXMuX25vZGUubGVuZ3RoIC0gMV0uY29ubmVjdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5vZGU7XG4gICAgfSxcbiAgICBhZGROb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMuX25vZGUucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgIH0sXG4gICAgdXBkYXRlQ29ubmVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9ub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlLmNvbm5lY3QodGhpcy5fbm9kZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlW2ktMV0uY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFkZEVuZGVkTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uRW5kZWQgPSBsaXN0ZW5lcjtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnc291cmNlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UuYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25FbmRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fb25FbmRlZChlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ2xvb3AnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ2R1cmF0aW9uJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXIgPyB0aGlzLl9idWZmZXIuZHVyYXRpb24gOiAwO1xuICAgIH1cbn0pO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFdlYkF1ZGlvO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpO1xuXG5mdW5jdGlvbiBBbmFseXNlcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICAvL3RoaXMuc291bmQgPVxuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnRHJ1bXMnKS5kYXRhKTtcbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdCYXNzJykuZGF0YSk7XG4gICAgLy8gMTAyNCBmZnQgc2l6ZSBpcyA1MTIgcGFydHNcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDEwMjQpO1xuICAgIHRoaXMuYXVkaW8uYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG5cbiAgICB2YXIgcGFuZWxGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0ZyZXF1ZW5jaWVzJyk7XG4gICAgdGhpcy5zbGlkZXJTbW9vdGhpbmcgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcihwYW5lbEZyZXEuZWwsICdTbW9vdGhpbmcnLCAwLCAxLCAwLjAxLCB0aGlzLm5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50LCB0aGlzLnVwZGF0ZVNtb290aGluZywgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJNaW4gPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcihwYW5lbEZyZXEuZWwsICdNaW4gZGVjaWJlbHMnLCAtMTAwLCAwLCAwLjEsIHRoaXMubm9kZS5taW5EZWNpYmVscywgdGhpcy51cGRhdGVNaW5NYXgsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyTWF4ID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIocGFuZWxGcmVxLmVsLCAnTWF4IGRlY2liZWxzJywgLTEwMCwgMCwgMC4xLCB0aGlzLm5vZGUubWF4RGVjaWJlbHMsIHRoaXMudXBkYXRlTWluTWF4LCB0aGlzKTtcbiAgICB0aGlzLmRyb3Bkb3duRkZUID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bihwYW5lbEZyZXEuZWwsIHtcbiAgICAgICAgJzY0JzogNjQsXG4gICAgICAgICcxMjgnOiAxMjgsXG4gICAgICAgICcyNTYnOiAyNTYsXG4gICAgICAgICc1MTInOiA1MTIsXG4gICAgICAgICcxMDI0JzogMTAyNCxcbiAgICAgICAgJzIwNDgnOiAyMDQ4XG4gICAgfSwgdGhpcy51cGRhdGVGRlRTaXplLCB0aGlzLCB0aGlzLm5vZGUuZmZ0U2l6ZSwgJ0ZGVCBTaXplJyk7XG5cbiAgICB2YXIgZnJlcSA9IGRpc3BsYXkuYWRkRnJlcSh0aGlzLm5vZGUpO1xuICAgIGZyZXEuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbEZyZXEuYXBwZW5kKGZyZXEuY2FudmFzKTtcblxuICAgIHZhciBwYW5lbFdhdmUgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnV2F2ZScpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbFdhdmUuYXBwZW5kKHdhdmUuY2FudmFzKTtcblxuICAgIHZhciBwYW5lbExldmVscyA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdMZXZlbHMnKTtcbiAgICB2YXIgbGV2ZWxzID0gZGlzcGxheS5hZGRMZXZlbHModGhpcy5ub2RlKTtcbiAgICBsZXZlbHMuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbExldmVscy5hcHBlbmQobGV2ZWxzLmNhbnZhcyk7XG59XG5cbkFuYWx5c2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5BbmFseXNlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBbmFseXNlcjtcblxuQW5hbHlzZXIucHJvdG90eXBlLnVwZGF0ZVNtb290aGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5ub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbn07XG5cbkFuYWx5c2VyLnByb3RvdHlwZS51cGRhdGVNaW5NYXggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUubWluRGVjaWJlbHMgPSB0aGlzLnNsaWRlck1pbi52YWx1ZTtcbiAgICB0aGlzLm5vZGUubWF4RGVjaWJlbHMgPSB0aGlzLnNsaWRlck1heC52YWx1ZTtcbn07XG5cbkFuYWx5c2VyLnByb3RvdHlwZS51cGRhdGVGRlRTaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLm5vZGUuZmZ0U2l6ZSA9IHBhcnNlSW50KHZhbHVlKTtcbn07XG5cbkFuYWx5c2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuLi8uLi91dGlscy93ZWItYXVkaW8uanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG5cdExvYWRpbmdCYXIgPSByZXF1aXJlKCcuL2xvYWRpbmctYmFyLmpzJyk7XG5cbmZ1bmN0aW9uIEFic3RyYWN0RGVtbyhlbCwgYXVkaW9Db250ZXh0KSB7XG5cdHRoaXMuZWwgPSBlbDtcblx0dGhpcy5hdWRpbyA9IG5ldyBXZWJBdWRpbyhhdWRpb0NvbnRleHQpO1xufVxuXG5BYnN0cmFjdERlbW8ucHJvdG90eXBlID0ge1xuXHRwbGF5OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fSxcblx0cGF1c2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuYXVkaW8ucGF1c2UoKTtcblx0fSxcblx0bG9hZDogZnVuY3Rpb24odXJsLCBmbikge1xuXHRcdExvYWRpbmdCYXIuc2hvdygpO1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCk7XG5cdFx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSB0cnVlO1xuXHRcdFx0bG9hZGVyLm9uUHJvZ3Jlc3MuYWRkKGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0TG9hZGluZ0Jhci51cGRhdGUocCk7XG5cdFx0XHR9KTtcblx0XHRcdGxvYWRlci5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0XHRcdGxvYWRlci5vblByb2dyZXNzLnJlbW92ZUFsbCgpO1xuXHRcdFx0XHRMb2FkaW5nQmFyLmhpZGUoKTtcblx0XHRcdFx0Zm4uY2FsbCh0aGlzLCBidWZmZXIpO1xuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRsb2FkZXIubG9hZFdlYkF1ZGlvKHRoaXMuYXVkaW8uY29udGV4dCk7XG5cdFx0cmV0dXJuIGxvYWRlcjtcblx0fSxcblx0Y3JlYXRlR2FpbkNvbnRyb2xzOiBmdW5jdGlvbihub2RlLCBlbCkge1xuXHRcdHZhciB2b2wgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcihlbCwgJ2dhaW4nLCAwLCAyLCAwLjEsIDEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bm9kZS5nYWluLnZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHR9KTtcblx0ICAgIHZhciBtdXRlID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24oZWwsICdtdXRlJywgJ3VubXV0ZScsXG5cdCAgICAgICAgZnVuY3Rpb24oKXtcblx0ICAgICAgICAgICAgbXV0ZS52b2x1bWUgPSBub2RlLmdhaW4udmFsdWU7XG5cdCAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZvbC52YWx1ZSA9IDA7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gdm9sLnZhbHVlID0gbXV0ZS52b2x1bWUgfHwgMTtcblx0ICAgICAgICB9XG5cdCAgICApO1xuXHR9LFxuXHRjb25uZWN0TWljcm9waG9uZTogZnVuY3Rpb24obWljcm9waG9uZSkge1xuXHRcdHRoaXMubWljcm9waG9uZSA9IG1pY3JvcGhvbmU7XG5cdFx0dGhpcy5taWNTb3VyY2UgPSB0aGlzLmF1ZGlvLmhlbHBlcnMuY3JlYXRlTWljcm9waG9uZVNvdXJjZShtaWNyb3Bob25lLnN0cmVhbSwgdGhpcy5ub2RlKTtcblx0XHR0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLl9nYWluKTtcblx0fSxcblx0ZGlzY29ubmVjdE1pY3JvcGhvbmU6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKHRoaXMubWljcm9waG9uZSkge1xuXHRcdFx0dGhpcy5taWNyb3Bob25lLmRpc2Nvbm5lY3QoKTtcblx0XHRcdHRoaXMubWljcm9waG9uZSA9IG51bGw7XG5cdFx0fVxuXHRcdGlmKHRoaXMubWljU291cmNlKSB7XG5cdFx0XHR0aGlzLm1pY1NvdXJjZS5kaXNjb25uZWN0KDApO1xuXHRcdH1cblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5wYXVzZSgpO1xuXHRcdHRoaXMuZGlzY29ubmVjdE1pY3JvcGhvbmUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdERlbW87XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEFuYWx5c2VyRGlzcGxheSgpIHtcbiAgICB0aGlzLmFuYWx5c2VycyA9IFtdO1xuICAgIHRoaXMuZHJhdygpO1xufVxuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZEZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LkZyZXEsIG5vZGUsIGVsKTtcbiAgICAvKmlmKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NhbnZhcycpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vdGhpcy5hbmFseXNlcnMucHVzaChuZXcgQW5hbHlzZXJEaXNwbGF5LkhUTUxWaWV3KG5vZGUsIGVsKSk7XG4gICAgfSovXG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LldhdmUsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkTGV2ZWxzID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5MZXZlbHMsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkRGlzcGxheSA9IGZ1bmN0aW9uKENsYXNzLCBub2RlLCBlbCkge1xuICAgIGVsID0gZWwgfHwgdGhpcy5nZXRDYW52YXMoKTtcbiAgICB2YXIgZGlzcGxheSA9IG5ldyBDbGFzcyhub2RlLCBlbCk7XG4gICAgdGhpcy5hbmFseXNlcnMucHVzaChkaXNwbGF5KTtcbiAgICByZXR1cm4gZGlzcGxheTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuZ2V0Q2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIHdpZHRoID0gd2lkdGggfHwgNTEyO1xuICAgIGhlaWdodCA9IGhlaWdodCB8fCAyNTY7XG4gICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjLndpZHRoID0gd2lkdGg7XG4gICAgYy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIGM7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgICB2YXIgbCA9IHRoaXMuYW5hbHlzZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmFuYWx5c2Vyc1tpXS5kcmF3KCk7XG4gICAgfVxufTtcblxuLy8gZnJlcXVlbmNpZXNcblxuQW5hbHlzZXJEaXNwbGF5LkZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuRnJlcS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpLFxuICAgICAgICBiYXJTcGFjaW5nID0gMDtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0LCBiYXJXaWR0aCAtIGJhclNwYWNpbmcsIDAgLSBoZWlnaHQgKiBwZXJjZW50KTtcbiAgICB9XG59O1xuXG4vLyB3YXZlZm9ybVxuXG5BbmFseXNlckRpc3BsYXkuV2F2ZSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50aGlja25lc3MgPSAxO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlVGltZURvbWFpbkRhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0IC0gaGVpZ2h0ICogcGVyY2VudCAtIDEsIHRoaXMudGhpY2tuZXNzLCB0aGlzLnRoaWNrbmVzcyk7XG4gICAgfVxufTtcblxuQW5hbHlzZXJEaXNwbGF5LkxldmVscyA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuTGV2ZWxzLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgZnJlcXVlbmN5QmluQ291bnQgPSB0aGlzLm5vZGUuZnJlcXVlbmN5QmluQ291bnQ7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICB2YXIgbGVuZ3RoID0gZnJlcUJ5dGVEYXRhLmxlbmd0aCxcbiAgICAgICAgdG90YWwgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG90YWwgKz0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgIH1cbiAgICB2YXIgYXZlcmFnZSA9IHRvdGFsIC8gbGVuZ3RoO1xuICAgIHZhciBwZXJjZW50ID0gYXZlcmFnZSAvIDEyODtcblxuICAgIHZhciBncmFkaWVudCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnaHNsKDEyOCwgMTAwJSwgNTAlKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnaHNsKDM2MCwgMTAwJSwgNTAlKScpO1xuXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIGhlaWdodCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2VyRGlzcGxheTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTG9hZGluZ0JhcigpIHtcbiAgICB2YXIgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxvYWRlcicpLFxuICAgICAgICBsYWJlbCA9IGxvYWRlci5xdWVyeVNlbGVjdG9yKCcuTG9hZGVyLWxhYmVsJyk7XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZShwKSB7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IE1hdGgucm91bmQocCAqIDEwMCkgKyAnJSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgJ3VwZGF0ZSc6IHVwZGF0ZSxcbiAgICAgICAgJ3Nob3cnOiBzaG93LFxuICAgICAgICAnaGlkZSc6IGhpZGVcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb2FkaW5nQmFyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVJQ29tcG9uZW50cygpIHtcbn1cblxuLy8gaGVscGVyc1xuXG5mdW5jdGlvbiBhZGRLZXlEb3duKGtleSwgZm4sIGNvbnRleHQpIHtcbiAgICBpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb25LZXlEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICAgICAgdmFyIHJlbW92ZUtleSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZW1vdmVLZXk7XG4gICAgfVxufVxuXG4vKlxuICogU2xpZGVyXG4gKi9cblxuVUlDb21wb25lbnRzLlNsaWRlciA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIG1pbiwgbWF4LCBzdGVwLCB2YWx1ZSwgZm4sIGNvbnRleHQpIHtcbiAgICB2YXIgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGJsLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICBsYmwuY2xhc3NOYW1lID0gJ1NsaWRlci1sYWJlbCc7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ1NsaWRlci1pbnB1dCc7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG1pbik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgbWF4KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgc3RlcCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0LmNsYXNzTmFtZSA9ICdTbGlkZXItb3V0cHV0JztcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ1NsaWRlciBTbGlkZXItLWxhcmdlJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxibCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG91dHB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuZWwgPSBmb3JtO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5TbGlkZXIucHJvdG90eXBlLCAndmFsdWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuLypcbiAqIFBhbmVsXG4gKi9cblxuVUlDb21wb25lbnRzLlBhbmVsID0gZnVuY3Rpb24ocGFyZW50LCB0aXRsZSkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdQYW5lbCc7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oZWwpIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5lbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLlBhbmVsLnByb3RvdHlwZSwgJ3RpdGxlJywge1xuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMudGl0bGVFbCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKHRoaXMudGl0bGVFbCwgdGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpdGxlRWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBCdXR0b25cbiAqL1xuXG5VSUNvbXBvbmVudHMuQnV0dG9uID0gZnVuY3Rpb24ocGFyZW50LCBsYWJlbCwgZm4sIGNvbnRleHQsIGtleSkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnQnV0dG9uJywgJ0J1dHRvbi0tZGVmYXVsdCcpO1xuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlS2V5ID0gYWRkS2V5RG93bihrZXksIGZuLCBpbnB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBpbnB1dDtcbn07XG5cbi8qXG4gKiBUb2dnbGUgQnV0dG9uXG4gKi9cblxuVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWxBLCBsYWJlbEIsIGZuQSwgZm5CLCBjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWxBO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGxhYmVsQjtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnQnV0dG9uJywgJ0J1dHRvbi0tZGVmYXVsdCcpO1xuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5pbm5lckhUTUwgPT09IGxhYmVsQSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbEI7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbGFiZWxBO1xuICAgICAgICAgICAgaWYodHlwZW9mIGZuQSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGZuQS5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBsYWJlbEI7XG4gICAgICAgICAgICBpZih0eXBlb2YgZm5CID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZm5CLmNhbGwoY29udGV4dCB8fCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUpO1xuICAgIHRoaXMucmVtb3ZlS2V5ID0gYWRkS2V5RG93bihrZXksIHRvZ2dsZSwgaW5wdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbEI7XG4gICAgfTtcbiAgICB0aGlzLmVsID0gaW5wdXQ7XG59O1xuXG4vKlxuICogRHJvcGRvd25cbiAqL1xuXG5VSUNvbXBvbmVudHMuRHJvcGRvd24gPSBmdW5jdGlvbihwYXJlbnQsIG9wdGlvbnMsIGZuLCBjb250ZXh0LCBzZWxlY3RlZFZhbHVlLCB0aXRsZSkge1xuICAgIHZhciBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRkLmNsYXNzTmFtZSA9ICdEcm9wZG93bic7XG4gICAgZm9yKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YXIgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25zW2tleV0pO1xuICAgICAgICBvLmlubmVySFRNTCA9IGtleTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobyk7XG4gICAgICAgIGlmKG9wdGlvbnNba2V5XSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0LCBkZC5vcHRpb25zW2RkLnNlbGVjdGVkSW5kZXhdLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBpZih0aXRsZSkge1xuICAgICAgICAgICAgdmFyIGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgaC5jbGFzc05hbWUgPSAnRHJvcGRvd24tdGl0bGUnO1xuICAgICAgICAgICAgaC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChoKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGQpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZGQ7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLkRyb3Bkb3duLnByb3RvdHlwZSwgJ3ZhbHVlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm9wdGlvbnNbdGhpcy5lbC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5Ecm9wZG93bi5wcm90b3R5cGUsICd0ZXh0Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm9wdGlvbnNbdGhpcy5lbC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVJQ29tcG9uZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIENvbXByZXNzb3IoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLy8gbWFzdGVyIGdhaW4gPiBjb21wcmVzc29yID4gZGVzdGluYXRpb25cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmNvbXByZXNzb3IoKTtcbiAgICAvL3RoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIC8vdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnQ29tcHJlc3NvcicpO1xuICAgIHRoaXMuc2xpZGVyVGhyZXNob2xkID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3RocmVzaG9sZCcsIC0xMDAsIDAsIDAuMSwgdGhpcy5ub2RlLnRocmVzaG9sZC52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyS25lZSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdrbmVlJywgMCwgNDAsIDAuMSwgdGhpcy5ub2RlLmtuZWUudmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclJhdGlvID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3JhdGlvJywgMSwgMjAsIDAuMSwgdGhpcy5ub2RlLnJhdGlvLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJBdHRhY2sgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnYXR0YWNrJywgMCwgMSwgMC4wMDAxLCB0aGlzLm5vZGUuYXR0YWNrLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJSZWxlYXNlID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3JlbGVhc2UnLCAwLCAxLCAwLjAwMDEsIHRoaXMubm9kZS5yZWxlYXNlLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5wYW5lbC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRoaXMub25CdXR0b24gPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbih0aGlzLnBhbmVsLmVsLCAnVFVSTiBPRkYnLCAnVFVSTiBPTicsIHRoaXMub2ZmLCB0aGlzLm9uLCB0aGlzKTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQ29tcHJlc3Nvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuQ29tcHJlc3Nvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb21wcmVzc29yO1xuXG5Db21wcmVzc29yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUudGhyZXNob2xkLnZhbHVlID0gdGhpcy5zbGlkZXJUaHJlc2hvbGQudmFsdWU7XG4gICAgdGhpcy5ub2RlLmtuZWUudmFsdWUgPSB0aGlzLnNsaWRlcktuZWUudmFsdWU7XG4gICAgdGhpcy5ub2RlLnJhdGlvLnZhbHVlID0gdGhpcy5zbGlkZXJSYXRpby52YWx1ZTtcbiAgICB0aGlzLm5vZGUuYXR0YWNrLnZhbHVlID0gdGhpcy5zbGlkZXJBdHRhY2sudmFsdWU7XG4gICAgdGhpcy5ub2RlLnJlbGVhc2UudmFsdWUgPSB0aGlzLnNsaWRlclJlbGVhc2UudmFsdWU7XG59O1xuXG5Db21wcmVzc29yLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8uYWRkTm9kZSh0aGlzLm5vZGUpO1xufTtcblxuQ29tcHJlc3Nvci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5yZW1vdmVOb2RlKHRoaXMubm9kZSk7XG59O1xuXG5Db21wcmVzc29yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXByZXNzb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIERlbGF5KGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZGVsYXkoMC41KTtcblxuICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMC41O1xuXG4gIHRoaXMuYXVkaW8uYWRkTm9kZSh0aGlzLmdhaW5Ob2RlKTtcblxuICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZSk7XG5cbiAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdEZWxheScpO1xuICB0aGlzLnNsaWRlclNlY29uZHMgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnc2Vjb25kcycsIDAuMSwgMTAsIDAuMSwgdGhpcy5ub2RlLmRlbGF5VGltZS52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5EZWxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuRGVsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGVsYXk7XG5cbkRlbGF5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0aGlzLm5vZGUuZGVsYXlUaW1lLnZhbHVlID0gdmFsdWU7XG59O1xuXG5EZWxheS5wcm90b3R5cGUuY29ubmVjdE1pY3JvcGhvbmUgPSBmdW5jdGlvbihtaWNyb3Bob25lKSB7XG4gIHRoaXMubWljcm9waG9uZSA9IG1pY3JvcGhvbmU7XG4gIHRoaXMubWljU291cmNlID0gdGhpcy5hdWRpby5oZWxwZXJzLmNyZWF0ZU1pY3JvcGhvbmVTb3VyY2UobWljcm9waG9uZS5zdHJlYW0sIHRoaXMubm9kZSk7XG4gIC8vdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5fZ2Fpbik7XG59O1xuXG5EZWxheS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVsYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBEaXN0b3J0aW9uKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIC8vIG1hc3RlciBnYWluID4gY29tcHJlc3NvciA+IGRlc3RpbmF0aW9uXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5kaXN0b3J0aW9uKCk7XG4gICAgLy90aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICAvL3RoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMubm9kZSk7XG5cbiAgICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0Rpc3RvcnRpb24nKTtcbiAgICB0aGlzLnNsaWRlciA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdhbW91bnQnLCAwLCAxLCAwLjAwMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnBhbmVsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgdGhpcy5vbkJ1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMucGFuZWwuZWwsICdUVVJOIE9GRicsICdUVVJOIE9OJywgdGhpcy5vZmYsIHRoaXMub24sIHRoaXMpO1xuXG4gICAgdmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcbiAgICBmb3IgKHZhciBpIGluIGZpbGVzKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IHRoaXMuYXVkaW8uYWRkKGZpbGVzW2ldLmRhdGEpO1xuICAgICAgICBzb3VuZC5hZGROb2RlKHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZ2FpbigpKTtcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCBpKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzb3VuZC5fbm9kZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHYWluQ29udHJvbHMoc291bmQuX25vZGVbal0sIGNvbnRyb2wuZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5EaXN0b3J0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5EaXN0b3J0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERpc3RvcnRpb247XG5cbkRpc3RvcnRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZS5jdXJ2ZSA9IHRoaXMuYXVkaW8uaGVscGVycy5kaXN0b3J0KHRoaXMuc2xpZGVyLnZhbHVlKTtcbn07XG5cbkRpc3RvcnRpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMubm9kZSk7XG59O1xuXG5EaXN0b3J0aW9uLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLnJlbW92ZU5vZGUodGhpcy5ub2RlKTtcbn07XG5cbkRpc3RvcnRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzdG9ydGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIEZpbHRlcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5maWx0ZXIubG93cGFzcygpO1xuICAgIHRoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdGaWx0ZXIgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9CaXF1YWRGaWx0ZXJOb2RlXCI+KzwvYT4nKTtcbiAgICB0aGlzLmRyb3Bkb3duID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bih0aGlzLnBhbmVsLmVsLCBNb2RlbC5maWx0ZXIsIHRoaXMudXBkYXRlRmlsdGVyVHlwZSwgdGhpcyk7XG5cbiAgICB0aGlzLnNsaWRlckZyZXEgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnRnJlcXVlbmN5JywgMCwgMSwgMC4wMSwgMC41LCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJRdWFsID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ1F1YWxpdHknLCAwLCAxMDAwLCAwLjEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlckdhaW4gPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnR2FpbicsIC00MCwgNDAsIDAuMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkZpbHRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWx0ZXI7XG5cbkZpbHRlci5wcm90b3R5cGUudXBkYXRlRmlsdGVyVHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZS50eXBlID0gdGhpcy5kcm9wZG93bi50ZXh0O1xufTtcblxuRmlsdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLmhlbHBlcnMuZmlsdGVyKHRoaXMubm9kZSwgdGhpcy5zbGlkZXJGcmVxLnZhbHVlLCB0aGlzLnNsaWRlclF1YWwudmFsdWUsIHRoaXMuc2xpZGVyR2Fpbi52YWx1ZSk7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGhhc2hlciA9IHJlcXVpcmUoJ2hhc2hlcicpLFxyXG5cdExvYWRpbmdCYXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9hZGluZy1iYXIuanMnKSxcclxuXHRVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxyXG5cdEtleWJvYXJkID0gcmVxdWlyZSgnLi4vdXRpbHMva2V5Ym9hcmQuanMnKSxcclxuXHRNaWNyb3Bob25lID0gcmVxdWlyZSgnLi4vdXRpbHMvbWljcm9waG9uZS5qcycpO1xyXG5cclxudmFyIERlbW8gPSB7XHJcblx0UmV2ZXJiOiByZXF1aXJlKCcuL3JldmVyYi5qcycpLFxyXG5cdEFuYWx5c2VyOiByZXF1aXJlKCcuL2FuYWx5c2VyLmpzJyksXHJcblx0TXVsdGlUcmFjazogcmVxdWlyZSgnLi9tdWx0aS10cmFjay5qcycpLFxyXG5cdFBhblRocmVlRDogcmVxdWlyZSgnLi9wYW4tdGhyZWUtZC5qcycpLFxyXG5cdEZpbHRlcjogcmVxdWlyZSgnLi9maWx0ZXIuanMnKSxcclxuXHRNaWNyb3Bob25lSW5wdXQ6IHJlcXVpcmUoJy4vbWljcm9waG9uZS1pbnB1dC5qcycpLFxyXG5cdE9zY2lsbGF0b3I6IHJlcXVpcmUoJy4vb3NjaWxsYXRvci5qcycpLFxyXG5cdENvbXByZXNzb3I6IHJlcXVpcmUoJy4vY29tcHJlc3Nvci5qcycpLFxyXG5cdERpc3RvcnRpb246IHJlcXVpcmUoJy4vZGlzdG9ydGlvbi5qcycpLFxyXG5cdERlbGF5OiByZXF1aXJlKCcuL2RlbGF5LmpzJyksXHJcblx0U2NyaXB0UHJvY2Vzc29yOiByZXF1aXJlKCcuL3NjcmlwdC1wcm9jZXNzb3IuanMnKSxcclxuXHRTZXF1ZW5jZXI6IHJlcXVpcmUoJy4vc2VxdWVuY2VyLmpzJylcclxufTtcclxuXHJcbmZ1bmN0aW9uIEdVSShlbCkge1xyXG5cdHRoaXMuZWwgPSBlbDtcclxuXHR0aGlzLmFkZExvYWRlcigpO1xyXG59XHJcblxyXG5HVUkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihhdWRpb0NvbnRleHQpIHtcclxuXHR0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcclxuXHRMb2FkaW5nQmFyLmhpZGUoKTtcclxuXHJcblx0dGhpcy5tZW51ID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsKTtcclxuXHRmb3IodmFyIGtleSBpbiBEZW1vKSB7XHJcblx0XHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsIGtleSwgdGhpcy5jaGFuZ2VEZW1vLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuY29udHJvbHMgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwpO1xyXG5cdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMuY29udHJvbHMuZWwsICdQTEFZJywgJ1BBVVNFJywgdGhpcy5wbGF5LCB0aGlzLnBhdXNlLCB0aGlzLCBLZXlib2FyZC5TUEFDRUJBUik7XHJcblx0dGhpcy5taWNyb3Bob25lID0gbmV3IE1pY3JvcGhvbmUoKTtcclxuXHRpZih0aGlzLm1pY3JvcGhvbmUuaXNTdXBwb3J0ZWQpIHtcclxuXHRcdHRoaXMubWljQnV0dG9uID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24odGhpcy5jb250cm9scy5lbCwgJ01JQyBPTicsICdNSUMgT0ZGJywgdGhpcy5jb25uZWN0TWljcm9waG9uZSwgdGhpcy5kaXNjb25uZWN0TWljcm9waG9uZSwgdGhpcywgS2V5Ym9hcmQuTSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmRlbW9Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZGVtb0hvbGRlcik7XHJcblxyXG5cdGhhc2hlci5jaGFuZ2VkLmFkZCh0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XHJcblx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XHJcblx0aGFzaGVyLmluaXQoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUub25IYXNoQ2hhbmdlID0gZnVuY3Rpb24oaGFzaCkge1xyXG5cdHRoaXMuc2V0RGVtbyhoYXNoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuY2hhbmdlRGVtbyA9IGZ1bmN0aW9uKGJ0bikge1xyXG5cdHRoaXMuc2V0RGVtbyhidG4uaW5uZXJIVE1MKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuc2V0RGVtbyA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHR2YXIgaGlkZU1pY3JvcGhvbmUgPSBuYW1lID09PSAnTXVsdGlUcmFjaycgfHwgbmFtZSA9PT0gJ01pY3JvcGhvbmVJbnB1dCcgfHwgbmFtZSA9PT0gJ09zY2lsbGF0b3InIHx8IG5hbWUgPT09ICdTZXF1ZW5jZXInO1xyXG5cdHZhciBoaWRlQ29udHJvbHMgPSBuYW1lID09PSAnTWljcm9waG9uZUlucHV0JztcclxuXHR0aGlzLmNsZWFyRGVtbyhoaWRlTWljcm9waG9uZSwgaGlkZUNvbnRyb2xzKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgRGVtb1tuYW1lXSh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxuXHRoYXNoZXIuY2hhbmdlZC5hY3RpdmUgPSBmYWxzZTtcclxuXHRoYXNoZXIuc2V0SGFzaChuYW1lKTtcclxuXHRoYXNoZXIuY2hhbmdlZC5hY3RpdmUgPSB0cnVlO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jb25uZWN0TWljcm9waG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubWljcm9waG9uZS5vbkNvbm5lY3RlZC5hZGQodGhpcy5taWNyb3Bob25lQ29ubmVjdGVkLCB0aGlzKTtcclxuICAgIHRoaXMubWljcm9waG9uZS5vbkRlbmllZC5hZGQodGhpcy5taWNyb3Bob25lRXJyb3IsIHRoaXMpO1xyXG4gICAgdGhpcy5taWNyb3Bob25lLm9uRXJyb3IuYWRkKHRoaXMubWljcm9waG9uZUVycm9yLCB0aGlzKTtcclxuICAgIHRoaXMubWljcm9waG9uZS5jb25uZWN0KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLm1pY3JvcGhvbmVDb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8uY29ubmVjdE1pY3JvcGhvbmUodGhpcy5taWNyb3Bob25lKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubWljcm9waG9uZUVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5taWNCdXR0b24ucmVzZXQoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZGlzY29ubmVjdE1pY3JvcGhvbmUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8uZGlzY29ubmVjdE1pY3JvcGhvbmUoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuY2xlYXJEZW1vID0gZnVuY3Rpb24oaGlkZU1pY3JvcGhvbmUsIGhpZGVDb250cm9scykge1xyXG5cdGlmKHRoaXMuZGVtbykge1xyXG5cdFx0dGhpcy5kZW1vLmRlc3Ryb3koKTtcclxuXHR9XHJcblx0dGhpcy5kZW1vSG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdHRoaXMucGxheUJ1dHRvbi5yZXNldCgpO1xyXG5cdGlmKHRoaXMubWljQnV0dG9uKSB7XHJcblx0XHR0aGlzLm1pY0J1dHRvbi5yZXNldCgpO1xyXG5cclxuXHRcdGlmKGhpZGVNaWNyb3Bob25lKSB7XHJcblx0XHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYoaGlkZUNvbnRyb2xzKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuY29udHJvbHMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0fVxyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLnBsYXkoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8ucGF1c2UoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYWRkTG9hZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0TG9hZGluZ0Jhci5zaG93KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnVwZGF0ZUxvYWRQcm9ncmVzcyA9IGZ1bmN0aW9uKHApIHtcclxuXHRMb2FkaW5nQmFyLnVwZGF0ZShwKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR1VJO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKSxcbiAgICBNaWNyb3Bob25lID0gcmVxdWlyZSgnLi4vdXRpbHMvbWljcm9waG9uZS5qcycpO1xuXG5mdW5jdGlvbiBNaWNyb3Bob25lSW5wdXQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5wbmxJbmZvID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnQWxsb3cgbWljb3Bob25lIHRvIGJlZ2luJyk7XG5cbiAgICB0aGlzLm1pY3JvcGhvbmUgPSBuZXcgTWljcm9waG9uZSgpO1xuXG4gICAgaWYodGhpcy5taWNyb3Bob25lLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5vbkNvbm5lY3RlZC5hZGQodGhpcy5vblN1Y2Nlc3MsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25EZW5pZWQuYWRkKHRoaXMub25EZW5pZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25FcnJvci5hZGQodGhpcy5vbkVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBnZXRVc2VyTWVkaWEgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG59XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pY3JvcGhvbmVJbnB1dDtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5nZXRNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfKCB7YXVkaW86dHJ1ZX0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzZWxmLm9uU3VjY2VzcyhzdHJlYW0pO1xuICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0pO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAvL3RoaXMubWljcm9waG9uZS5jcmVhdGVXZWJBdWRpb1NvdXJjZSh0aGlzLmF1ZGlvLmNvbnRleHQsIHRoaXMuYXVkaW8uX2dhaW4pO1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuYW5hbHlzZXIoMTAyNCk7XG4gICAgdGhpcy5jb25uZWN0TWljcm9waG9uZSh0aGlzLm1pY3JvcGhvbmUpO1xuICAgIC8vdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgLy90aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYXVkaW8uYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG4gICAgdmFyIHBhbmVsV2F2ZSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCwgJ01pY3JvcGhvbmUnKTtcbiAgICB2YXIgd2F2ZSA9IGRpc3BsYXkuYWRkV2F2ZSh0aGlzLm5vZGUpO1xuICAgIHdhdmUudGhpY2tuZXNzID0gMTtcbiAgICB3YXZlLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxXYXZlLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG5cbiAgICB0aGlzLnBubEluZm8ucmVtb3ZlKCk7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLm9uRGVuaWVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBQZXJtaXNzaW9uIGRlbmllZC4gWW91IGNhbiB1bmRvIHRoaXMgYnkgY2xpY2tpbmcgdGhlIGNhbWVyYSBpY29uIHdpdGggdGhlIHJlZCBjcm9zcyBpbiB0aGUgYWRkcmVzcyBiYXIuJyk7XG4gICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuZGlzcGxheUVycm9yKCdFUlJPUjogJyArIGUpO1xuICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbn07XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUuZGlzcGxheUVycm9yID0gZnVuY3Rpb24obXNnKSB7XG4gICAgaWYoIXRoaXMucG5sRXJyb3IpIHtcbiAgICAgICAgdGhpcy5wbmxFcnJvciA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMucG5sRXJyb3IuZWwuY2xhc3NMaXN0LmFkZCgnUGFuZWwtLWVycm9yJyk7XG4gICAgfVxuICAgIHRoaXMucG5sRXJyb3IudGl0bGUgPSBtc2c7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZih0aGlzLm1pY3JvcGhvbmUpIHtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lID0gbnVsbDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvcGhvbmVJbnB1dDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBNdWx0aVRyYWNrKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTXVsdGlUcmFjay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTXVsdGlUcmFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aVRyYWNrO1xuXG5NdWx0aVRyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpVHJhY2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIE9zY2lsbGF0b3IoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigyMDQ4KTtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcbiAgICAvL3RoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIC8vdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBcbiAgICB0aGlzLnBubCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCwgJ3NpbmUnKTtcbiAgICB0aGlzLmRyb3Bkb3duVHlwZSA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wbmwuZWwsIE1vZGVsLndhdmUsIHRoaXMudXBkYXRlVHlwZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wbmwuZWwsICdGcmVxdWVuY3knLCAwLCAxLCAwLjAxLCAwLjEsIHRoaXMudXBkYXRlRnJlcSwgdGhpcyk7XG4gICAgXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG4gICAgdmFyIHdhdmUgPSBkaXNwbGF5LmFkZFdhdmUodGhpcy5ub2RlKTtcbiAgICB3YXZlLnRoaWNrbmVzcyA9IDE7XG4gICAgd2F2ZS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHRoaXMucG5sLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG59XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbk9zY2lsbGF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3NjaWxsYXRvcjtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUudXBkYXRlVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnR5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnBubC50aXRsZSA9IHZhbHVlO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUudXBkYXRlRnJlcSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuYXVkaW8uaGVscGVycy5nZXRGcmVxdWVuY3kodmFsdWUpO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3NjID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLm9zYy50eXBlID0gdGhpcy5kcm9wZG93blR5cGUudmFsdWU7XG4gICAgdGhpcy5vc2MuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5hdWRpby5oZWxwZXJzLmdldEZyZXF1ZW5jeSh0aGlzLnNsaWRlckZyZXEudmFsdWUpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4udmFsdWUgPSAwLjI7XG4gICAgdGhpcy5vc2MuY29ubmVjdCh0aGlzLmF1ZGlvLl9nYWluKTtcbiAgICB0aGlzLm9zYy5zdGFydCgwKTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnN0b3AoMCk7XG4gICAgdGhpcy5vc2MgPSBudWxsO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPc2NpbGxhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIFBhblRocmVlRChlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LnBhbigpO1xuICAgIHRoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdQYW4nKTtcblxuICAgIC8vdGhpcy5zbGlkZXJYID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3gnLCAtTWF0aC5QSSwgTWF0aC5QSSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclkgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneScsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJaID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3onLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5QYW5UaHJlZUQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblBhblRocmVlRC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYW5UaHJlZUQ7XG5cblBhblRocmVlRC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5oZWxwZXJzLnBhbih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyWC52YWx1ZSwgdGhpcy5zbGlkZXJZLnZhbHVlLCB0aGlzLnNsaWRlcloudmFsdWUpO1xufTtcblxuUGFuVGhyZWVELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuVGhyZWVEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBSZXZlcmIoZWwsIGF1ZGlvQ29udGV4dCkge1xuXHRBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuXHR0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcblx0dGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5yZXZlcmIoKTtcblx0dGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cblx0dGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdSZXZlcmInKTtcblx0dGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuaW1wdWxzZSwgdGhpcy51cGRhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXG5cdHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCAxLCB0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlLCB0aGlzKTtcblx0dGhpcy5zbGlkZXJEZWNheSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdkZWNheScsIDAsIDIwLCAwLjEsIDUsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xufVxuXG5SZXZlcmIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblJldmVyYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXZlcmI7XG5cblJldmVyYi5wcm90b3R5cGUuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHRoaXMuc2xpZGVyU2Vjb25kcy52YWx1ZSwgdGhpcy5zbGlkZXJEZWNheS52YWx1ZSk7XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLnVwZGF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmKHZhbHVlID09PSAnJykgeyByZXR1cm47IH1cblx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR0aGlzLnNsaWRlckRlY2F5LmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG5cdHN3aXRjaCh2YWx1ZSkge1xuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdHRoaXMuc2xpZGVyU2Vjb25kcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5sb2FkKHZhbHVlICsgTW9kZWwuZXh0ZW5zaW9uLCB0aGlzLmFwcGx5SW1wdWxzZSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5hcHBseUltcHVsc2UgPSBmdW5jdGlvbihidWZmZXIpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbn07XG5cblJldmVyYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0dGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKTtcblxuZnVuY3Rpb24gU2NyaXB0UHJvY2Vzc29yKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3Rvcnkuc2NyaXB0UHJvY2Vzc29yKDIwNDgsIDAsIDEsIHRoaXMub25Qcm9jZXNzLCB0aGlzKTtcblxuICAgIHRoaXMucG5sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnd2hpdGUgbm9pc2UnKTtcbi8vICAgIHRoaXMuZHJvcGRvd25UeXBlID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bih0aGlzLnBubC5lbCwgTW9kZWwud2F2ZSwgdGhpcy51cGRhdGVUeXBlLCB0aGlzKTtcblxufVxuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JpcHRQcm9jZXNzb3I7XG5cblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUub25Qcm9jZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgb3V0cHV0ID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgIHZhciBsID0gb3V0cHV0Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBvdXRwdXRbaV0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbn07XG5cblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUudXBkYXRlVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnR5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnBubC50aXRsZSA9IHZhbHVlO1xufTtcblxuU2NyaXB0UHJvY2Vzc29yLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMubm9kZSk7XG59O1xuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5yZW1vdmVOb2RlKHRoaXMubm9kZSk7XG59O1xuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2NyaXB0UHJvY2Vzc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBXZWJBdWRpbyA9IHJlcXVpcmUoJy4uL3V0aWxzL3dlYi1hdWRpby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBTZXF1ZW5jZXIoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLyp2YXIgdHJhY2tzID0gW107XG5cbiAgICB2YXIgZmlsZXMgPSBNb2RlbC5kcnVtS2l0O1xuICAgIGZvciAodmFyIGkgaW4gZmlsZXMpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFdlYkF1ZGlvKGF1ZGlvQ29udGV4dCk7XG4gICAgICAgIHNvdW5kLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgLy9zb3VuZC5hZGROb2RlKHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZ2FpbigpKTtcbiAgICAgICAgdHJhY2tzLnB1c2goc291bmQpO1xuICAgIH0qL1xuICAgIHZhciBoaWhhdCA9IE1vZGVsLmRydW1LaXQuSGlIYXQuZGF0YTtcbiAgICB2YXIga2ljayA9IE1vZGVsLmRydW1LaXQuS2ljay5kYXRhO1xuICAgIHZhciBzbmFyZSA9IE1vZGVsLmRydW1LaXQuU25hcmUuZGF0YTtcbiAgICB2YXIgY2xhcCA9IE1vZGVsLmRydW1LaXQuQ2xhcC5kYXRhO1xuXG4gICAgZnVuY3Rpb24gcXVldWVTb3VuZChidWZmZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gbmV3IFdlYkF1ZGlvKGF1ZGlvQ29udGV4dCk7XG4gICAgICAgIHNvdW5kLmFkZChidWZmZXIpO1xuICAgICAgICBzb3VuZC5wbGF5KHRpbWUpO1xuICAgIH1cbiAgICB2YXIgc3RhcnRUaW1lID0gYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lICsgMC4xMDA7XG4gICAgdmFyIGJwbSA9IDE4MDtcbiAgICB2YXIgZWlnaHRoTm90ZVRpbWUgPSAoNjAgLyBicG0pIC8gMjtcblxuICAgIGZvciAodmFyIGJhciA9IDA7IGJhciA8IDEwMDsgYmFyKyspIHtcbiAgICAgIHZhciB0aW1lID0gc3RhcnRUaW1lICsgYmFyICogOCAqIGVpZ2h0aE5vdGVUaW1lO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICBxdWV1ZVNvdW5kKGhpaGF0LCB0aW1lICsgaSAqIGVpZ2h0aE5vdGVUaW1lKTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlU291bmQoaGloYXQsIHRpbWUgKyAzLjUgKiBlaWdodGhOb3RlVGltZSk7XG5cbiAgICAgIHF1ZXVlU291bmQoa2ljaywgdGltZSk7XG4gICAgICBxdWV1ZVNvdW5kKGtpY2ssIHRpbWUgKyA1LjA1ICogZWlnaHRoTm90ZVRpbWUpO1xuXG4gICAgICBxdWV1ZVNvdW5kKHNuYXJlLCB0aW1lICsgMiAqIGVpZ2h0aE5vdGVUaW1lKTtcbiAgICAgIHF1ZXVlU291bmQoc25hcmUsIHRpbWUgKyA2ICogZWlnaHRoTm90ZVRpbWUpO1xuXG4gICAgICBxdWV1ZVNvdW5kKGNsYXAsIHRpbWUgKyA2ICogZWlnaHRoTm90ZVRpbWUpO1xuICAgIH1cbn1cblxuU2VxdWVuY2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5TZXF1ZW5jZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2VxdWVuY2VyO1xuXG5TZXF1ZW5jZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZSgnLi9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcycpLFxuXHRBc3NldExvYWRlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcycpLFxuXHRNb2RlbCA9IHJlcXVpcmUoJy4vYXBwL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyksXG5cdEdVSSA9IHJlcXVpcmUoJy4vYXBwL3ZpZXcvZ3VpLmpzJyk7XG5cbnJlcXVpcmUoJy4vYXBwL3V0aWxzL3JhZi1wb2x5ZmlsbC5qcycpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cdHRoaXMuaW5pdCgpO1xufVxuXG5BcHAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcblx0dGhpcy5ndWkgPSBuZXcgR1VJKGRvY3VtZW50LmJvZHkpO1xuXHR0aGlzLmxvYWRlciA9IG5ldyBBc3NldExvYWRlcigpO1xuXG5cdHRoaXMubG9nKCk7XG5cdHRoaXMubG9hZCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1zZyA9ICdBdWRpbyBNYW5hZ2VyLiBTdXBwb3J0ZWQ6JyArIHRoaXMuYXVkaW8uaXNTdXBwb3J0ZWQoKSArXG5cdCcgV2ViQXVkaW9BUEk6JyArIHRoaXMuYXVkaW8ud2ViQXVkaW9TdXBwb3J0ZWQoKSArXG5cdCcgVG91Y2hMb2NrZWQ6JyArIHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0Y29uc29sZS5sb2cobXNnKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmxvYWRlci50b3VjaExvY2tlZCA9IHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0dGhpcy5sb2FkZXIud2ViQXVkaW9Db250ZXh0ID0gdGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQ7XG5cdHRoaXMubG9hZGVyLmNyb3NzT3JpZ2luID0gdHJ1ZTtcblxuXHRNb2RlbC5leHRlbnNpb24gPSB0aGlzLmF1ZGlvLmdldEV4dGVuc2lvbigpO1xuXHR0aGlzLmFkZEZpbGVzKE1vZGVsLmF1ZGlvRmlsZXMpO1xuXHR0aGlzLmFkZEZpbGVzKE1vZGVsLmRydW1LaXQpO1xuXHR0aGlzLmxvYWRlci5vblByb2dyZXNzLmFkZCh0aGlzLmd1aS51cGRhdGVMb2FkUHJvZ3Jlc3MsIHRoaXMuZ3VpKTtcblx0dGhpcy5sb2FkZXIub25Db21wbGV0ZS5hZGQodGhpcy5sb2FkQ29tcGxldGUsIHRoaXMpO1xuXHR0aGlzLmxvYWRlci5zdGFydCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5hZGRGaWxlcyA9IGZ1bmN0aW9uKGZpbGVzKSB7XG5cdGZvciAodmFyIGkgaW4gZmlsZXMpIHtcblx0XHR2YXIgZmlsZSA9IGZpbGVzW2ldO1xuXHRcdGZpbGUudXJsID0gZmlsZS51cmwgKyBNb2RlbC5leHRlbnNpb247XG5cdFx0dGhpcy5sb2FkZXIuYWRkKGZpbGUudXJsKTtcblx0fVxufTtcblxuQXBwLnByb3RvdHlwZS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5hZGREYXRhKE1vZGVsLmF1ZGlvRmlsZXMpO1xuXHR0aGlzLmFkZERhdGEoTW9kZWwuZHJ1bUtpdCk7XG5cdHRoaXMuZ3VpLmluaXQodGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQpO1xufTtcblxuQXBwLnByb3RvdHlwZS5hZGREYXRhID0gZnVuY3Rpb24oZmlsZXMpIHtcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS5kYXRhID0gdGhpcy5sb2FkZXIuZ2V0KGZpbGUudXJsKS5kYXRhO1xuXHR9XG59O1xuXG5uZXcgQXBwKCk7XG4iLCIvKiEhXG4gKiBIYXNoZXIgPGh0dHA6Ly9naXRodWIuY29tL21pbGxlcm1lZGVpcm9zL2hhc2hlcj5cbiAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gKiBAdmVyc2lvbiAxLjIuMCAoMjAxMy8xMS8xMSAwMzoxOCBQTSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICovXG5cbjsoZnVuY3Rpb24gKCkge1xudmFyIGZhY3RvcnkgPSBmdW5jdGlvbihzaWduYWxzKXtcblxuLypqc2hpbnQgd2hpdGU6ZmFsc2UqL1xuLypnbG9iYWwgc2lnbmFsczpmYWxzZSwgd2luZG93OmZhbHNlKi9cblxuLyoqXG4gKiBIYXNoZXJcbiAqIEBuYW1lc3BhY2UgSGlzdG9yeSBNYW5hZ2VyIGZvciByaWNoLW1lZGlhIGFwcGxpY2F0aW9ucy5cbiAqIEBuYW1lIGhhc2hlclxuICovXG52YXIgaGFzaGVyID0gKGZ1bmN0aW9uKHdpbmRvdyl7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZSBWYXJzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdmFyXG5cbiAgICAgICAgLy8gZnJlcXVlbmN5IHRoYXQgaXQgd2lsbCBjaGVjayBoYXNoIHZhbHVlIG9uIElFIDYtNyBzaW5jZSBpdCBkb2Vzbid0XG4gICAgICAgIC8vIHN1cHBvcnQgdGhlIGhhc2hjaGFuZ2UgZXZlbnRcbiAgICAgICAgUE9PTF9JTlRFUlZBTCA9IDI1LFxuXG4gICAgICAgIC8vIGxvY2FsIHN0b3JhZ2UgZm9yIGJyZXZpdHkgYW5kIGJldHRlciBjb21wcmVzc2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgICAgICBoaXN0b3J5ID0gd2luZG93Lmhpc3RvcnksXG4gICAgICAgIFNpZ25hbCA9IHNpZ25hbHMuU2lnbmFsLFxuXG4gICAgICAgIC8vIGxvY2FsIHZhcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGhhc2hlcixcbiAgICAgICAgX2hhc2gsXG4gICAgICAgIF9jaGVja0ludGVydmFsLFxuICAgICAgICBfaXNBY3RpdmUsXG4gICAgICAgIF9mcmFtZSwgLy9pZnJhbWUgdXNlZCBmb3IgbGVnYWN5IElFICg2LTcpXG4gICAgICAgIF9jaGVja0hpc3RvcnksXG4gICAgICAgIF9oYXNoVmFsUmVnZXhwID0gLyMoLiopJC8sXG4gICAgICAgIF9iYXNlVXJsUmVnZXhwID0gLyhcXD8uKil8KFxcIy4qKS8sXG4gICAgICAgIF9oYXNoUmVnZXhwID0gL15cXCMvLFxuXG4gICAgICAgIC8vIHNuaWZmaW5nL2ZlYXR1cmUgZGV0ZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAvL2hhY2sgYmFzZWQgb24gdGhpczogaHR0cDovL3dlYnJlZmxlY3Rpb24uYmxvZ3Nwb3QuY29tLzIwMDkvMDEvMzItYnl0ZXMtdG8ta25vdy1pZi15b3VyLWJyb3dzZXItaXMtaWUuaHRtbFxuICAgICAgICBfaXNJRSA9ICghK1wiXFx2MVwiKSxcbiAgICAgICAgLy8gaGFzaGNoYW5nZSBpcyBzdXBwb3J0ZWQgYnkgRkYzLjYrLCBJRTgrLCBDaHJvbWUgNSssIFNhZmFyaSA1KyBidXRcbiAgICAgICAgLy8gZmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgb24gSUUgY29tcGF0aWJpbGl0eSBtb2RlLCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vIGNoZWNrIGRvY3VtZW50TW9kZVxuICAgICAgICBfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkID0gKCdvbmhhc2hjaGFuZ2UnIGluIHdpbmRvdykgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlICE9PSA3LFxuICAgICAgICAvL2NoZWNrIGlmIGlzIElFNi03IHNpbmNlIGhhc2ggY2hhbmdlIGlzIG9ubHkgc3VwcG9ydGVkIG9uIElFOCsgYW5kXG4gICAgICAgIC8vY2hhbmdpbmcgaGFzaCB2YWx1ZSBvbiBJRTYtNyBkb2Vzbid0IGdlbmVyYXRlIGhpc3RvcnkgcmVjb3JkLlxuICAgICAgICBfaXNMZWdhY3lJRSA9IF9pc0lFICYmICFfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkLFxuICAgICAgICBfaXNMb2NhbCA9IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6Jyk7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIE1ldGhvZHNcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBmdW5jdGlvbiBfZXNjYXBlUmVnRXhwKHN0cil7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc3RyIHx8ICcnKS5yZXBsYWNlKC9cXFcvZywgXCJcXFxcJCZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3RyaW1IYXNoKGhhc2gpe1xuICAgICAgICBpZiAoIWhhc2gpIHJldHVybiAnJztcbiAgICAgICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ14nICsgX2VzY2FwZVJlZ0V4cChoYXNoZXIucHJlcGVuZEhhc2gpICsgJ3wnICsgX2VzY2FwZVJlZ0V4cChoYXNoZXIuYXBwZW5kSGFzaCkgKyAnJCcsICdnJyk7XG4gICAgICAgIHJldHVybiBoYXNoLnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFdpbmRvd0hhc2goKXtcbiAgICAgICAgLy9wYXJzZWQgZnVsbCBVUkwgaW5zdGVhZCBvZiBnZXR0aW5nIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGJlY2F1c2UgRmlyZWZveCBkZWNvZGUgaGFzaCB2YWx1ZSAoYW5kIGFsbCB0aGUgb3RoZXIgYnJvd3NlcnMgZG9uJ3QpXG4gICAgICAgIC8vYWxzbyBiZWNhdXNlIG9mIElFOCBidWcgd2l0aCBoYXNoIHF1ZXJ5IGluIGxvY2FsIGZpbGUgW2lzc3VlICM2XVxuICAgICAgICB2YXIgcmVzdWx0ID0gX2hhc2hWYWxSZWdleHAuZXhlYyggaGFzaGVyLmdldFVSTCgpICk7XG4gICAgICAgIHZhciBwYXRoID0gKHJlc3VsdCAmJiByZXN1bHRbMV0pIHx8ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBoYXNoZXIucmF3PyBwYXRoIDogZGVjb2RlVVJJQ29tcG9uZW50KHBhdGgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB1c2VyIGRpZCBub3Qgc2V0IGBoYXNoZXIucmF3YCBhbmQgZGVjb2RlVVJJQ29tcG9uZW50XG4gICAgICAgICAgLy8gdGhyb3dzIGFuIGVycm9yIChzZWUgIzU3KVxuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldEZyYW1lSGFzaCgpe1xuICAgICAgICByZXR1cm4gKF9mcmFtZSk/IF9mcmFtZS5jb250ZW50V2luZG93LmZyYW1lSGFzaCA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZyYW1lKCl7XG4gICAgICAgIF9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBfZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX2ZyYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlRnJhbWUoKXtcbiAgICAgICAgaWYoX2ZyYW1lICYmIF9oYXNoICE9PSBfZ2V0RnJhbWVIYXNoKCkpe1xuICAgICAgICAgICAgdmFyIGZyYW1lRG9jID0gX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICBmcmFtZURvYy5vcGVuKCk7XG4gICAgICAgICAgICAvL3VwZGF0ZSBpZnJhbWUgY29udGVudCB0byBmb3JjZSBuZXcgaGlzdG9yeSByZWNvcmQuXG4gICAgICAgICAgICAvL2Jhc2VkIG9uIFJlYWxseSBTaW1wbGUgSGlzdG9yeSwgU1dGQWRkcmVzcyBhbmQgWVVJLmhpc3RvcnkuXG4gICAgICAgICAgICBmcmFtZURvYy53cml0ZSgnPGh0bWw+PGhlYWQ+PHRpdGxlPicgKyBkb2N1bWVudC50aXRsZSArICc8L3RpdGxlPjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPnZhciBmcmFtZUhhc2g9XCInICsgX2hhc2ggKyAnXCI7PC9zY3JpcHQ+PC9oZWFkPjxib2R5PiZuYnNwOzwvYm9keT48L2h0bWw+Jyk7XG4gICAgICAgICAgICBmcmFtZURvYy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlZ2lzdGVyQ2hhbmdlKG5ld0hhc2gsIGlzUmVwbGFjZSl7XG4gICAgICAgIGlmKF9oYXNoICE9PSBuZXdIYXNoKXtcbiAgICAgICAgICAgIHZhciBvbGRIYXNoID0gX2hhc2g7XG4gICAgICAgICAgICBfaGFzaCA9IG5ld0hhc2g7IC8vc2hvdWxkIGNvbWUgYmVmb3JlIGV2ZW50IGRpc3BhdGNoIHRvIG1ha2Ugc3VyZSB1c2VyIGNhbiBnZXQgcHJvcGVyIHZhbHVlIGluc2lkZSBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICBpZihfaXNMZWdhY3lJRSl7XG4gICAgICAgICAgICAgICAgaWYoIWlzUmVwbGFjZSl7XG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9mcmFtZS5jb250ZW50V2luZG93LmZyYW1lSGFzaCA9IG5ld0hhc2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFzaGVyLmNoYW5nZWQuZGlzcGF0Y2goX3RyaW1IYXNoKG5ld0hhc2gpLCBfdHJpbUhhc2gob2xkSGFzaCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9pc0xlZ2FjeUlFKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2NoZWNrSGlzdG9yeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgd2luZG93SGFzaCA9IF9nZXRXaW5kb3dIYXNoKCksXG4gICAgICAgICAgICAgICAgZnJhbWVIYXNoID0gX2dldEZyYW1lSGFzaCgpO1xuICAgICAgICAgICAgaWYoZnJhbWVIYXNoICE9PSBfaGFzaCAmJiBmcmFtZUhhc2ggIT09IHdpbmRvd0hhc2gpe1xuICAgICAgICAgICAgICAgIC8vZGV0ZWN0IGNoYW5nZXMgbWFkZSBwcmVzc2luZyBicm93c2VyIGhpc3RvcnkgYnV0dG9ucy5cbiAgICAgICAgICAgICAgICAvL1dvcmthcm91bmQgc2luY2UgaGlzdG9yeS5iYWNrKCkgYW5kIGhpc3RvcnkuZm9yd2FyZCgpIGRvZXNuJ3RcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBoYXNoIHZhbHVlIG9uIElFNi83IGJ1dCB1cGRhdGVzIGNvbnRlbnQgb2YgdGhlIGlmcmFtZS5cbiAgICAgICAgICAgICAgICAvL25lZWRzIHRvIHRyaW0gaGFzaCBzaW5jZSB2YWx1ZSBzdG9yZWQgYWxyZWFkeSBoYXZlXG4gICAgICAgICAgICAgICAgLy9wcmVwZW5kSGFzaCArIGFwcGVuZEhhc2ggZm9yIGZhc3QgY2hlY2suXG4gICAgICAgICAgICAgICAgaGFzaGVyLnNldEhhc2goX3RyaW1IYXNoKGZyYW1lSGFzaCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dIYXNoICE9PSBfaGFzaCl7XG4gICAgICAgICAgICAgICAgLy9kZXRlY3QgaWYgaGFzaCBjaGFuZ2VkIChtYW51YWxseSBvciB1c2luZyBzZXRIYXNoKVxuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZSh3aW5kb3dIYXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9jaGVja0hpc3RvcnkgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hhc2ggPSBfZ2V0V2luZG93SGFzaCgpO1xuICAgICAgICAgICAgaWYod2luZG93SGFzaCAhPT0gX2hhc2gpe1xuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZSh3aW5kb3dIYXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkTGlzdGVuZXIoZWxtLCBlVHlwZSwgZm4pe1xuICAgICAgICBpZihlbG0uYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihlVHlwZSwgZm4sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbG0uYXR0YWNoRXZlbnQpe1xuICAgICAgICAgICAgZWxtLmF0dGFjaEV2ZW50KCdvbicgKyBlVHlwZSwgZm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsbSwgZVR5cGUsIGZuKXtcbiAgICAgICAgaWYoZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIpe1xuICAgICAgICAgICAgZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZVR5cGUsIGZuLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxtLmRldGFjaEV2ZW50KXtcbiAgICAgICAgICAgIGVsbS5kZXRhY2hFdmVudCgnb24nICsgZVR5cGUsIGZuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYWtlUGF0aChwYXRocyl7XG4gICAgICAgIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICB2YXIgcGF0aCA9IHBhdGhzLmpvaW4oaGFzaGVyLnNlcGFyYXRvcik7XG4gICAgICAgIHBhdGggPSBwYXRoPyBoYXNoZXIucHJlcGVuZEhhc2ggKyBwYXRoLnJlcGxhY2UoX2hhc2hSZWdleHAsICcnKSArIGhhc2hlci5hcHBlbmRIYXNoIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2VuY29kZVBhdGgocGF0aCl7XG4gICAgICAgIC8vdXNlZCBlbmNvZGVVUkkgaW5zdGVhZCBvZiBlbmNvZGVVUklDb21wb25lbnQgdG8gcHJlc2VydmUgJz8nLCAnLycsXG4gICAgICAgIC8vJyMnLiBGaXhlcyBTYWZhcmkgYnVnIFtpc3N1ZSAjOF1cbiAgICAgICAgcGF0aCA9IGVuY29kZVVSSShwYXRoKTtcbiAgICAgICAgaWYoX2lzSUUgJiYgX2lzTG9jYWwpe1xuICAgICAgICAgICAgLy9maXggSUU4IGxvY2FsIGZpbGUgYnVnIFtpc3N1ZSAjNl1cbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcPy8sICclM0YnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHVibGljIChBUEkpXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaGFzaGVyID0gLyoqIEBsZW5kcyBoYXNoZXIgKi8ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYXNoZXIgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjIuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJvb2xlYW4gZGVjaWRpbmcgaWYgaGFzaGVyIGVuY29kZXMvZGVjb2RlcyB0aGUgaGFzaCBvciBub3QuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogPGxpPmRlZmF1bHQgdmFsdWU6IGZhbHNlOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHJhdyA6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdGhhdCBzaG91bGQgYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgSGFzaCB2YWx1ZS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogJyc7PC9saT5cbiAgICAgICAgICogPGxpPndpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gYGhhc2hlci5nZXRIYXNoKClgPC9saT5cbiAgICAgICAgICogPGxpPmF2b2lkIGNvbmZsaWN0cyB3aXRoIGVsZW1lbnRzIHRoYXQgY29udGFpbiBJRCBlcXVhbCB0byBoYXNoIHZhbHVlOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBwZW5kSGFzaCA6ICcnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdGhhdCBzaG91bGQgYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgSGFzaCB2YWx1ZS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogJy8nOzwvbGk+XG4gICAgICAgICAqIDxsaT53aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGBoYXNoZXIuZ2V0SGFzaCgpYDwvbGk+XG4gICAgICAgICAqIDxsaT5hdm9pZCBjb25mbGljdHMgd2l0aCBlbGVtZW50cyB0aGF0IGNvbnRhaW4gSUQgZXF1YWwgdG8gaGFzaCB2YWx1ZTs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHByZXBlbmRIYXNoIDogJy8nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdXNlZCB0byBzcGxpdCBoYXNoIHBhdGhzOyB1c2VkIGJ5IGBoYXNoZXIuZ2V0SGFzaEFzQXJyYXkoKWAgdG8gc3BsaXQgcGF0aHMuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogPGxpPmRlZmF1bHQgdmFsdWU6ICcvJzs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNlcGFyYXRvciA6ICcvJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFsIGRpc3BhdGNoZWQgd2hlbiBoYXNoIHZhbHVlIGNoYW5nZXMuXG4gICAgICAgICAqIC0gcGFzcyBjdXJyZW50IGhhc2ggYXMgMXN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnMgYW5kIHByZXZpb3VzIGhhc2ggdmFsdWUgYXMgMm5kIHBhcmFtZXRlci5cbiAgICAgICAgICogQHR5cGUgc2lnbmFscy5TaWduYWxcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZWQgOiBuZXcgU2lnbmFsKCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbCBkaXNwYXRjaGVkIHdoZW4gaGFzaGVyIGlzIHN0b3BwZWQuXG4gICAgICAgICAqIC0gIHBhc3MgY3VycmVudCBoYXNoIGFzIGZpcnN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnNcbiAgICAgICAgICogQHR5cGUgc2lnbmFscy5TaWduYWxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BwZWQgOiBuZXcgU2lnbmFsKCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbCBkaXNwYXRjaGVkIHdoZW4gaGFzaGVyIGlzIGluaXRpYWxpemVkLlxuICAgICAgICAgKiAtIHBhc3MgY3VycmVudCBoYXNoIGFzIGZpcnN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnMuXG4gICAgICAgICAqIEB0eXBlIHNpZ25hbHMuU2lnbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpbml0aWFsaXplZCA6IG5ldyBTaWduYWwoKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnQgbGlzdGVuaW5nL2Rpc3BhdGNoaW5nIGNoYW5nZXMgaW4gdGhlIGhhc2gvaGlzdG9yeS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiAgIDxsaT5oYXNoZXIgd29uJ3QgZGlzcGF0Y2ggQ0hBTkdFIGV2ZW50cyBieSBtYW51YWxseSB0eXBpbmcgYSBuZXcgdmFsdWUgb3IgcHJlc3NpbmcgdGhlIGJhY2svZm9yd2FyZCBidXR0b25zIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLjwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqL1xuICAgICAgICBpbml0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKF9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBfaGFzaCA9IF9nZXRXaW5kb3dIYXNoKCk7XG5cbiAgICAgICAgICAgIC8vdGhvdWdodCBhYm91dCBicmFuY2hpbmcvb3ZlcmxvYWRpbmcgaGFzaGVyLmluaXQoKSB0byBhdm9pZCBjaGVja2luZyBtdWx0aXBsZSB0aW1lcyBidXRcbiAgICAgICAgICAgIC8vZG9uJ3QgdGhpbmsgd29ydGggZG9pbmcgaXQgc2luY2UgaXQgcHJvYmFibHkgd29uJ3QgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYoX2lzSGFzaENoYW5nZVN1cHBvcnRlZCl7XG4gICAgICAgICAgICAgICAgX2FkZExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBfY2hlY2tIaXN0b3J5KTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpZihfaXNMZWdhY3lJRSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEgX2ZyYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKF9jaGVja0hpc3RvcnksIFBPT0xfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaGFzaGVyLmluaXRpYWxpemVkLmRpc3BhdGNoKF90cmltSGFzaChfaGFzaCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIGxpc3RlbmluZy9kaXNwYXRjaGluZyBjaGFuZ2VzIGluIHRoZSBoYXNoL2hpc3RvcnkuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogICA8bGk+aGFzaGVyIHdvbid0IGRpc3BhdGNoIENIQU5HRSBldmVudHMgYnkgbWFudWFsbHkgdHlwaW5nIGEgbmV3IHZhbHVlIG9yIHByZXNzaW5nIHRoZSBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kLCB1bmxlc3MgeW91IGNhbGwgaGFzaGVyLmluaXQoKSBhZ2Fpbi48L2xpPlxuICAgICAgICAgKiAgIDxsaT5oYXNoZXIgd2lsbCBzdGlsbCBkaXNwYXRjaCBjaGFuZ2VzIG1hZGUgcHJvZ3JhbWF0aWNhbGx5IGJ5IGNhbGxpbmcgaGFzaGVyLnNldEhhc2goKTs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighIF9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZihfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkKXtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIF9jaGVja0hpc3RvcnkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfY2hlY2tJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgX2NoZWNrSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGhhc2hlci5zdG9wcGVkLmRpc3BhdGNoKF90cmltSGFzaChfaGFzaCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICBJZiBoYXNoZXIgaXMgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gdGhlIGJyb3dzZXIgaGlzdG9yeSBhbmQvb3IgaGFzaCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzQWN0aXZlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBfaXNBY3RpdmU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gRnVsbCBVUkwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRVUkwgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFJldHJpZXZlIFVSTCB3aXRob3V0IHF1ZXJ5IHN0cmluZyBhbmQgaGFzaC5cbiAgICAgICAgICovXG4gICAgICAgIGdldEJhc2VVUkwgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGhhc2hlci5nZXRVUkwoKS5yZXBsYWNlKF9iYXNlVXJsUmVnZXhwLCAnJyk7IC8vcmVtb3ZlcyBldmVyeXRoaW5nIGFmdGVyICc/JyBhbmQvb3IgJyMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBIYXNoIHZhbHVlLCBnZW5lcmF0aW5nIGEgbmV3IGhpc3RvcnkgcmVjb3JkLlxuICAgICAgICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcGF0aCAgICBIYXNoIHZhbHVlIHdpdGhvdXQgJyMnLiBIYXNoZXIgd2lsbCBqb2luXG4gICAgICAgICAqIHBhdGggc2VnbWVudHMgdXNpbmcgYGhhc2hlci5zZXBhcmF0b3JgIGFuZCBwcmVwZW5kL2FwcGVuZCBoYXNoIHZhbHVlXG4gICAgICAgICAqIHdpdGggYGhhc2hlci5hcHBlbmRIYXNoYCBhbmQgYGhhc2hlci5wcmVwZW5kSGFzaGBcbiAgICAgICAgICogQGV4YW1wbGUgaGFzaGVyLnNldEhhc2goJ2xvcmVtJywgJ2lwc3VtJywgJ2RvbG9yJykgLT4gJyMvbG9yZW0vaXBzdW0vZG9sb3InXG4gICAgICAgICAqL1xuICAgICAgICBzZXRIYXNoIDogZnVuY3Rpb24ocGF0aCl7XG4gICAgICAgICAgICBwYXRoID0gX21ha2VQYXRoLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZihwYXRoICE9PSBfaGFzaCl7XG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIHN0b3JlIHJhdyB2YWx1ZVxuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZShwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aCA9PT0gX2hhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgaWYgcGF0aCBpcyBzdGlsbCA9PT0gX2hhc2ggdG8gYXZvaWQgZXJyb3IgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBtdWx0aXBsZSBjb25zZWN1dGl2ZSByZWRpcmVjdHMgW2lzc3VlICMzOV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgaGFzaGVyLnJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IF9lbmNvZGVQYXRoKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgcGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBIYXNoIHZhbHVlIHdpdGhvdXQga2VlcGluZyBwcmV2aW91cyBoYXNoIG9uIHRoZSBoaXN0b3J5IHJlY29yZC5cbiAgICAgICAgICogU2ltaWxhciB0byBjYWxsaW5nIGB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIiMvaGFzaFwiKWAgYnV0IHdpbGwgYWxzbyB3b3JrIG9uIElFNi03LlxuICAgICAgICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcGF0aCAgICBIYXNoIHZhbHVlIHdpdGhvdXQgJyMnLiBIYXNoZXIgd2lsbCBqb2luXG4gICAgICAgICAqIHBhdGggc2VnbWVudHMgdXNpbmcgYGhhc2hlci5zZXBhcmF0b3JgIGFuZCBwcmVwZW5kL2FwcGVuZCBoYXNoIHZhbHVlXG4gICAgICAgICAqIHdpdGggYGhhc2hlci5hcHBlbmRIYXNoYCBhbmQgYGhhc2hlci5wcmVwZW5kSGFzaGBcbiAgICAgICAgICogQGV4YW1wbGUgaGFzaGVyLnJlcGxhY2VIYXNoKCdsb3JlbScsICdpcHN1bScsICdkb2xvcicpIC0+ICcjL2xvcmVtL2lwc3VtL2RvbG9yJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVwbGFjZUhhc2ggOiBmdW5jdGlvbihwYXRoKXtcbiAgICAgICAgICAgIHBhdGggPSBfbWFrZVBhdGguYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmKHBhdGggIT09IF9oYXNoKXtcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgc3RvcmUgcmF3IHZhbHVlXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyQ2hhbmdlKHBhdGgsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChwYXRoID09PSBfaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjaGVjayBpZiBwYXRoIGlzIHN0aWxsID09PSBfaGFzaCB0byBhdm9pZCBlcnJvciBpblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIG11bHRpcGxlIGNvbnNlY3V0aXZlIHJlZGlyZWN0cyBbaXNzdWUgIzM5XVxuICAgICAgICAgICAgICAgICAgICBpZiAoISBoYXNoZXIucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gX2VuY29kZVBhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJyMnICsgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhhc2ggdmFsdWUgd2l0aG91dCAnIycsIGBoYXNoZXIuYXBwZW5kSGFzaGAgYW5kIGBoYXNoZXIucHJlcGVuZEhhc2hgLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SGFzaCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL2RpZG4ndCB1c2VkIGFjdHVhbCB2YWx1ZSBvZiB0aGUgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCB0byBhdm9pZCBicmVha2luZyB0aGUgYXBwbGljYXRpb24gaW4gY2FzZSBgd2luZG93LmxvY2F0aW9uLmhhc2hgIGlzbid0IGF2YWlsYWJsZSBhbmQgYWxzbyBiZWNhdXNlIHZhbHVlIHNob3VsZCBhbHdheXMgYmUgc3luY2hlZC5cbiAgICAgICAgICAgIHJldHVybiBfdHJpbUhhc2goX2hhc2gpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn0gSGFzaCB2YWx1ZSBzcGxpdCBpbnRvIGFuIEFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SGFzaEFzQXJyYXkgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGhhc2hlci5nZXRIYXNoKCkuc3BsaXQoaGFzaGVyLnNlcGFyYXRvcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycywgc3RvcHMgaGFzaGVyIGFuZCBkZXN0cm95IGhhc2hlciBvYmplY3QuXG4gICAgICAgICAqIC0gSU1QT1JUQU5UOiBoYXNoZXIgd29uJ3Qgd29yayBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kLCBoYXNoZXIgT2JqZWN0IHdpbGwgYmUgZGVsZXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaGFzaGVyLnN0b3AoKTtcbiAgICAgICAgICAgIGhhc2hlci5pbml0aWFsaXplZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBoYXNoZXIuc3RvcHBlZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBoYXNoZXIuY2hhbmdlZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBfZnJhbWUgPSBoYXNoZXIgPSB3aW5kb3cuaGFzaGVyID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuICdbaGFzaGVyIHZlcnNpb249XCInKyBoYXNoZXIuVkVSU0lPTiArJ1wiIGhhc2g9XCInKyBoYXNoZXIuZ2V0SGFzaCgpICsnXCJdJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGhhc2hlci5pbml0aWFsaXplZC5tZW1vcml6ZSA9IHRydWU7IC8vc2VlICMzM1xuXG4gICAgcmV0dXJuIGhhc2hlcjtcblxufSh3aW5kb3cpKTtcblxuXG4gICAgcmV0dXJuIGhhc2hlcjtcbn07XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydzaWduYWxzJ10sIGZhY3RvcnkpO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnc2lnbmFscycpKTtcbn0gZWxzZSB7XG4gICAgLypqc2hpbnQgc3ViOnRydWUgKi9cbiAgICB3aW5kb3dbJ2hhc2hlciddID0gZmFjdG9yeSh3aW5kb3dbJ3NpZ25hbHMnXSk7XG59XG5cbn0oKSk7XG4iLCIvKmpzbGludCBvbmV2YXI6dHJ1ZSwgdW5kZWY6dHJ1ZSwgbmV3Y2FwOnRydWUsIHJlZ2V4cDp0cnVlLCBiaXR3aXNlOnRydWUsIG1heGVycjo1MCwgaW5kZW50OjQsIHdoaXRlOmZhbHNlLCBub21lbjpmYWxzZSwgcGx1c3BsdXM6ZmFsc2UgKi9cbi8qZ2xvYmFsIGRlZmluZTpmYWxzZSwgcmVxdWlyZTpmYWxzZSwgZXhwb3J0czpmYWxzZSwgbW9kdWxlOmZhbHNlLCBzaWduYWxzOmZhbHNlICovXG5cbi8qKiBAbGljZW5zZVxuICogSlMgU2lnbmFscyA8aHR0cDovL21pbGxlcm1lZGVpcm9zLmdpdGh1Yi5jb20vanMtc2lnbmFscy8+XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIEF1dGhvcjogTWlsbGVyIE1lZGVpcm9zXG4gKiBWZXJzaW9uOiAxLjAuMCAtIEJ1aWxkOiAyNjggKDIwMTIvMTEvMjkgMDU6NDggUE0pXG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCl7XG5cbiAgICAvLyBTaWduYWxCaW5kaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBiaW5kaW5nIGJldHdlZW4gYSBTaWduYWwgYW5kIGEgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAgICogPGJyIC8+LSA8c3Ryb25nPlRoaXMgaXMgYW4gaW50ZXJuYWwgY29uc3RydWN0b3IgYW5kIHNob3VsZG4ndCBiZSBjYWxsZWQgYnkgcmVndWxhciB1c2Vycy48L3N0cm9uZz5cbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IEpvYSBFYmVydCBBUzMgU2lnbmFsQmluZGluZyBhbmQgUm9iZXJ0IFBlbm5lcidzIFNsb3QgY2xhc3Nlcy5cbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBuYW1lIFNpZ25hbEJpbmRpbmdcbiAgICAgKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZSBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gKGRlZmF1bHQgPSAwKS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWxCaW5kaW5nKHNpZ25hbCwgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEB0eXBlIEZ1bmN0aW9uXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2lzT25jZSA9IGlzT25jZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQG1lbWJlck9mIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlXG4gICAgICAgICAqIEBuYW1lIGNvbnRleHRcbiAgICAgICAgICogQHR5cGUgT2JqZWN0fHVuZGVmaW5lZHxudWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBsaXN0ZW5lckNvbnRleHQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKiBAdHlwZSBTaWduYWxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3NpZ25hbCA9IHNpZ25hbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuZXIgcHJpb3JpdHlcbiAgICAgICAgICogQHR5cGUgTnVtYmVyXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgfVxuXG4gICAgU2lnbmFsQmluZGluZy5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgaXMgYWN0aXZlIGFuZCBzaG91bGQgYmUgZXhlY3V0ZWQuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgcGFyYW1ldGVycyBwYXNzZWQgdG8gbGlzdGVuZXIgZHVyaW5nIGBTaWduYWwuZGlzcGF0Y2hgIGFuZCBgU2lnbmFsQmluZGluZy5leGVjdXRlYC4gKGN1cnJpZWQgcGFyYW1ldGVycylcbiAgICAgICAgICogQHR5cGUgQXJyYXl8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGFyYW1zIDogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBsaXN0ZW5lciBwYXNzaW5nIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiA8cD5JZiBiaW5kaW5nIHdhcyBhZGRlZCB1c2luZyBgU2lnbmFsLmFkZE9uY2UoKWAgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBzaWduYWwgZGlzcGF0Y2ggcXVldWUsIHRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSBmb3IgdGhlIHNpZ25hbCBkaXNwYXRjaC48L3A+XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IFtwYXJhbXNBcnJdIEFycmF5IG9mIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHsqfSBWYWx1ZSByZXR1cm5lZCBieSB0aGUgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBleGVjdXRlIDogZnVuY3Rpb24gKHBhcmFtc0Fycikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJSZXR1cm4sIHBhcmFtcztcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhIXRoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gdGhpcy5wYXJhbXM/IHRoaXMucGFyYW1zLmNvbmNhdChwYXJhbXNBcnIpIDogcGFyYW1zQXJyO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJSZXR1cm4gPSB0aGlzLl9saXN0ZW5lci5hcHBseSh0aGlzLmNvbnRleHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyUmV0dXJuO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRhY2ggYmluZGluZyBmcm9tIHNpZ25hbC5cbiAgICAgICAgICogLSBhbGlhcyB0bzogbXlTaWduYWwucmVtb3ZlKG15QmluZGluZy5nZXRMaXN0ZW5lcigpKTtcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsIG9yIGBudWxsYCBpZiBiaW5kaW5nIHdhcyBwcmV2aW91c2x5IGRldGFjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZGV0YWNoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNCb3VuZCgpPyB0aGlzLl9zaWduYWwucmVtb3ZlKHRoaXMuX2xpc3RlbmVyLCB0aGlzLmNvbnRleHQpIDogbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGJpbmRpbmcgaXMgc3RpbGwgYm91bmQgdG8gdGhlIHNpZ25hbCBhbmQgaGF2ZSBhIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNCb3VuZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoISF0aGlzLl9zaWduYWwgJiYgISF0aGlzLl9saXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIFNpZ25hbEJpbmRpbmcgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uY2UuXG4gICAgICAgICAqL1xuICAgICAgICBpc09uY2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNPbmNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TGlzdGVuZXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbH0gU2lnbmFsIHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2lnbmFsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9kZXN0cm95IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbEJpbmRpbmcgaXNPbmNlOicgKyB0aGlzLl9pc09uY2UgKycsIGlzQm91bmQ6JysgdGhpcy5pc0JvdW5kKCkgKycsIGFjdGl2ZTonICsgdGhpcy5hY3RpdmUgKyAnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuLypnbG9iYWwgU2lnbmFsQmluZGluZzpmYWxzZSovXG5cbiAgICAvLyBTaWduYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsIGZuTmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoICdsaXN0ZW5lciBpcyBhIHJlcXVpcmVkIHBhcmFtIG9mIHtmbn0oKSBhbmQgc2hvdWxkIGJlIGEgRnVuY3Rpb24uJy5yZXBsYWNlKCd7Zm59JywgZm5OYW1lKSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBSb2JlcnQgUGVubmVyJ3MgQVMzIFNpZ25hbHMuXG4gICAgICogQG5hbWUgU2lnbmFsXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWwoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBBcnJheS48U2lnbmFsQmluZGluZz5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuXG4gICAgICAgIC8vIGVuZm9yY2UgZGlzcGF0Y2ggdG8gYXdheXMgd29yayBvbiBzYW1lIGNvbnRleHQgKCM0NylcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFNpZ25hbC5wcm90b3R5cGUuZGlzcGF0Y2guYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBTaWduYWwucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaWduYWxzIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICovXG4gICAgICAgIFZFUlNJT04gOiAnMS4wLjAnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgc2hvdWxkIGtlZXAgcmVjb3JkIG9mIHByZXZpb3VzbHkgZGlzcGF0Y2hlZCBwYXJhbWV0ZXJzIGFuZFxuICAgICAgICAgKiBhdXRvbWF0aWNhbGx5IGV4ZWN1dGUgbGlzdGVuZXIgZHVyaW5nIGBhZGQoKWAvYGFkZE9uY2UoKWAgaWYgU2lnbmFsIHdhc1xuICAgICAgICAgKiBhbHJlYWR5IGRpc3BhdGNoZWQgYmVmb3JlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBtZW1vcml6ZSA6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc2hvdWxkUHJvcGFnYXRlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJyb2FkY2FzdCBldmVudHMuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgZHVyaW5nIGEgZGlzcGF0Y2ggd2lsbCBvbmx5IGFmZmVjdCB0aGUgbmV4dCBkaXNwYXRjaCwgaWYgeW91IHdhbnQgdG8gc3RvcCB0aGUgcHJvcGFnYXRpb24gb2YgYSBzaWduYWwgdXNlIGBoYWx0KClgIGluc3RlYWQuPC9wPlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF1cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZWdpc3Rlckxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgdmFyIHByZXZJbmRleCA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBiaW5kaW5nO1xuXG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLl9iaW5kaW5nc1twcmV2SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzT25jZSgpICE9PSBpc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGFkZCcrIChpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZW4gYWRkJysgKCFpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZSBzYW1lIGxpc3RlbmVyIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIHJlbGF0aW9uc2hpcCBmaXJzdC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSBuZXcgU2lnbmFsQmluZGluZyh0aGlzLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRCaW5kaW5nKGJpbmRpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLm1lbW9yaXplICYmIHRoaXMuX3ByZXZQYXJhbXMpe1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuZXhlY3V0ZSh0aGlzLl9wcmV2UGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsQmluZGluZ30gYmluZGluZ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2FkZEJpbmRpbmcgOiBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgLy9zaW1wbGlmaWVkIGluc2VydGlvbiBzb3J0XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIGRvIHsgLS1uOyB9IHdoaWxlICh0aGlzLl9iaW5kaW5nc1tuXSAmJiBiaW5kaW5nLl9wcmlvcml0eSA8PSB0aGlzLl9iaW5kaW5nc1tuXS5fcHJpb3JpdHkpO1xuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKG4gKyAxLCAwLCBiaW5kaW5nKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2luZGV4T2ZMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY3VyO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMuX2JpbmRpbmdzW25dO1xuICAgICAgICAgICAgICAgIGlmIChjdXIuX2xpc3RlbmVyID09PSBsaXN0ZW5lciAmJiBjdXIuY29udGV4dCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGxpc3RlbmVyIHdhcyBhdHRhY2hlZCB0byBTaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF1cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgU2lnbmFsIGhhcyB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaGFzIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KSAhPT0gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZCA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIGZhbHNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBhZnRlciBmaXJzdCBleGVjdXRpb24gKHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlKS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkT25jZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZE9uY2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCB0cnVlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGEgc2luZ2xlIGxpc3RlbmVyIGZyb20gdGhlIGRpc3BhdGNoIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gRXhlY3V0aW9uIGNvbnRleHQgKHNpbmNlIHlvdSBjYW4gYWRkIHRoZSBzYW1lIGhhbmRsZXIgbXVsdGlwbGUgdGltZXMgaWYgZXhlY3V0aW5nIGluIGEgZGlmZmVyZW50IGNvbnRleHQpLlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gTGlzdGVuZXIgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ3JlbW92ZScpO1xuXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tpXS5fZGVzdHJveSgpOyAvL25vIHJlYXNvbiB0byBhIFNpZ25hbEJpbmRpbmcgZXhpc3QgaWYgaXQgaXNuJ3QgYXR0YWNoZWQgdG8gYSBzaWduYWxcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGZyb20gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUFsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW25dLl9kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5sZW5ndGggPSAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IE51bWJlciBvZiBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldE51bUxpc3RlbmVycyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gb2YgdGhlIGV2ZW50LCBibG9ja2luZyB0aGUgZGlzcGF0Y2ggdG8gbmV4dCBsaXN0ZW5lcnMgb24gdGhlIHF1ZXVlLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGR1cmluZyBzaWduYWwgZGlzcGF0Y2gsIGNhbGxpbmcgaXQgYmVmb3JlL2FmdGVyIGRpc3BhdGNoIHdvbid0IGFmZmVjdCBzaWduYWwgYnJvYWRjYXN0LjwvcD5cbiAgICAgICAgICogQHNlZSBTaWduYWwucHJvdG90eXBlLmRpc2FibGVcbiAgICAgICAgICovXG4gICAgICAgIGhhbHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2gvQnJvYWRjYXN0IFNpZ25hbCB0byBhbGwgbGlzdGVuZXJzIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBQYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byBlYWNoIGhhbmRsZXIuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyYW1zQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJpbmRpbmdzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tZW1vcml6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBwYXJhbXNBcnI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghIG4pIHtcbiAgICAgICAgICAgICAgICAvL3Nob3VsZCBjb21lIGFmdGVyIG1lbW9yaXplXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiaW5kaW5ncyA9IHRoaXMuX2JpbmRpbmdzLnNsaWNlKCk7IC8vY2xvbmUgYXJyYXkgaW4gY2FzZSBhZGQvcmVtb3ZlIGl0ZW1zIGR1cmluZyBkaXNwYXRjaFxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gdHJ1ZTsgLy9pbiBjYXNlIGBoYWx0YCB3YXMgY2FsbGVkIGJlZm9yZSBkaXNwYXRjaCBvciBkdXJpbmcgdGhlIHByZXZpb3VzIGRpc3BhdGNoLlxuXG4gICAgICAgICAgICAvL2V4ZWN1dGUgYWxsIGNhbGxiYWNrcyB1bnRpbCBlbmQgb2YgdGhlIGxpc3Qgb3IgdW50aWwgYSBjYWxsYmFjayByZXR1cm5zIGBmYWxzZWAgb3Igc3RvcHMgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIC8vcmV2ZXJzZSBsb29wIHNpbmNlIGxpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGFkZGVkIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgICAgIGRvIHsgbi0tOyB9IHdoaWxlIChiaW5kaW5nc1tuXSAmJiB0aGlzLl9zaG91bGRQcm9wYWdhdGUgJiYgYmluZGluZ3Nbbl0uZXhlY3V0ZShwYXJhbXNBcnIpICE9PSBmYWxzZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmdldCBtZW1vcml6ZWQgYXJndW1lbnRzLlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5tZW1vcml6ZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9yZ2V0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGJpbmRpbmdzIGZyb20gc2lnbmFsIGFuZCBkZXN0cm95IGFueSByZWZlcmVuY2UgdG8gZXh0ZXJuYWwgb2JqZWN0cyAoZGVzdHJveSBTaWduYWwgb2JqZWN0KS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IGNhbGxpbmcgYW55IG1ldGhvZCBvbiB0aGUgc2lnbmFsIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGlzcG9zZSB3aWxsIHRocm93IGVycm9ycy48L3A+XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwb3NlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9iaW5kaW5ncztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wcmV2UGFyYW1zO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWwgYWN0aXZlOicrIHRoaXMuYWN0aXZlICsnIG51bUxpc3RlbmVyczonKyB0aGlzLmdldE51bUxpc3RlbmVycygpICsnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8vIE5hbWVzcGFjZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogU2lnbmFscyBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG5hbWUgc2lnbmFsc1xuICAgICAqL1xuICAgIHZhciBzaWduYWxzID0gU2lnbmFsO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogQHNlZSBTaWduYWxcbiAgICAgKi9cbiAgICAvLyBhbGlhcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNlZSAjZ2gtNDQpXG4gICAgc2lnbmFscy5TaWduYWwgPSBTaWduYWw7XG5cblxuXG4gICAgLy9leHBvcnRzIHRvIG11bHRpcGxlIGVudmlyb25tZW50c1xuICAgIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7IC8vQU1EXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7IHJldHVybiBzaWduYWxzOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXsgLy9ub2RlXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gc2lnbmFscztcbiAgICB9IGVsc2UgeyAvL2Jyb3dzZXJcbiAgICAgICAgLy91c2Ugc3RyaW5nIGJlY2F1c2Ugb2YgR29vZ2xlIGNsb3N1cmUgY29tcGlsZXIgQURWQU5DRURfTU9ERVxuICAgICAgICAvKmpzbGludCBzdWI6dHJ1ZSAqL1xuICAgICAgICBnbG9iYWxbJ3NpZ25hbHMnXSA9IHNpZ25hbHM7XG4gICAgfVxuXG59KHRoaXMpKTtcbiJdfQ==
