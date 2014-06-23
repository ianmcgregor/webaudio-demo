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
    },
    addNode: function(node) {
        this._node.push(node);
        this.updateConnections();
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
console.log(context);
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
                // event.inputBuffer
                // event.outputBuffer
                // event.playbackTime
                callback.call(callbackContext || this, event);
            };
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],18:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
  UIComponents = require('./components/ui-components.js'),
  Model = require('../model/audio-model.js');

function Delay(el, audioContext) {
  AbstractDemo.call(this, el, audioContext);

  this.sound = this.audio.add(Model.getFile('Piano').data);
  this.node = this.audio.nodeFactory.delay(0.5);

  this.gainNode = this.audio.context.createGainNode();
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],19:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],20:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],21:[function(require,module,exports){
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
	}

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

},{"../utils/keyboard.js":7,"../utils/microphone.js":8,"./analyser.js":12,"./components/loading-bar.js":15,"./components/ui-components.js":16,"./compressor.js":17,"./delay.js":18,"./distortion.js":19,"./filter.js":20,"./microphone-input.js":22,"./multi-track.js":23,"./oscillator.js":24,"./pan-three-d.js":25,"./reverb.js":26,"./script-processor.js":27}],22:[function(require,module,exports){
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
},{"../utils/microphone.js":8,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],23:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],24:[function(require,module,exports){
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],25:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],26:[function(require,module,exports){
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],27:[function(require,module,exports){
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

},{"./components/abstract-demo.js":13,"./components/ui-components.js":16}],28:[function(require,module,exports){
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

},{"./app/model/audio-model.js":3,"./app/utils/asset-loader.js":4,"./app/utils/audio-manager.js":5,"./app/utils/raf-polyfill.js":10,"./app/view/gui.js":21}],"w8Izcx":[function(require,module,exports){
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
},{}]},{},[28])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvYXVkaW8tZmlsZXMuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL21pY3JvcGhvbmUuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvYW5hbHlzZXIuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wcmVzc29yLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2RlbGF5LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2Rpc3RvcnRpb24uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvZmlsdGVyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2d1aS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9taWNyb3Bob25lLWlucHV0LmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L211bHRpLXRyYWNrLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L29zY2lsbGF0b3IuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcGFuLXRocmVlLWQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvcmV2ZXJiLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3NjcmlwdC1wcm9jZXNzb3IuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvbWFpbi5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy92ZW5kb3IvanMtc2lnbmFscy9kaXN0L3NpZ25hbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJEcnVtc1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vRFJVTVNcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJCYXNzXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9ET1VCTEVfQkFTU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIkNvbmdhc1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vQ09OR0FTXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiUGlhbm9cIjogeyBcInVybFwiOiBcImF1ZGlvL1BJQU5PX01JQ18xXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiR2VuZXJhdGUgaW1wdWxzZVwiOiBcImdlbmVyYXRlXCIsXG5cbiAgICBcImFtYmllbmNlOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl8xXyg0NTApXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl8xXyg0NTApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzJfKDQ1MSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzJfKDQ1MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfM18oNDUyKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfM18oNDUyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl82OTY5Xyg0NTQpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl82OTY5Xyg0NTQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2Nsb3NlXyg0NTcpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9jbG9zZV8oNDU3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9pc19pdF8oNDU1KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfaXNfaXRfKDQ1NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfbGV0X2l0X2dvXyg0NTgpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9sZXRfaXRfZ29fKDQ1OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfb2hfKDQ1MylcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX29oXyg0NTMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX3RhaWxzXyg0NTYpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl90YWlsc18oNDU2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYmllbmNlXyg0NDkpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYmllbmNlXyg0NDkpX2RjXCIsXG4gICAgXG4gICAgXCJoYWxsOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0F1dG9fUGFya18oNTA0KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0F1dG9fUGFya18oNTA0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0phenpfSGFsbF8oNTAzKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0phenpfSGFsbF8oNTAzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlLVN0YWdlXyg0OTYpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTGFyZ2UtU3RhZ2VfKDQ5NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9IYWxsXyg0OTUpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTGFyZ2VfSGFsbF8oNDk1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01lZGl1bS1TdGFnZV8oNDk4KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX01lZGl1bS1TdGFnZV8oNDk4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01lZGl1bV9IYWxsXyg0OTcpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTWVkaXVtX0hhbGxfKDQ5NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbC1TdGFnZV8oNTAwKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsLVN0YWdlXyg1MDApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfQ2h1cmNoXyg1MDIpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGxfQ2h1cmNoXyg1MDIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfSGFsbF8oNDk5KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsX0hhbGxfKDQ5OSlfZGNcIixcbiAgICBcbiAgICBcInBsYXRlOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FfUGxhdGVfKDQ3MClcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfQV9QbGF0ZV8oNDcwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0ZhdF9QbGF0ZV8oNDc0KVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9GYXRfUGxhdGVfKDQ3NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9QbGF0ZV8oNDcyKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9TbWFsbF9QbGF0ZV8oNDcyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NuYXJlX1BsYXRlXyg0NzEpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1NuYXJlX1BsYXRlXyg0NzEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7VGhpbl9QbGF0ZV8oNDczKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9UaGluX1BsYXRlXyg0NzMpX2RjXCIsXG4gICAgXG4gICAgXCJyYW5kb21faGFsbDpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCaWdfUl8oNDYwKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9CaWdfUl8oNDYwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0NyYXp5X2Fzc18oNDYzKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9DcmF6eV9hc3NfKDQ2MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtEb3duX1lvdV9TYXlfKDQ2OClcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfRG93bl9Zb3VfU2F5Xyg0NjgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7Ul9Ud29fKDQ2MilcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfUl9Ud29fKDQ2MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSYW5kb21fd2VsbF8oNDY0KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9SYW5kb21fd2VsbF8oNDY0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1Nob3J0X01lX2FnYWluXyg0NjUpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1Nob3J0X01lX2FnYWluXyg0NjUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7V2VsbF9IbW1tX1JfKDQ2MSlcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfV2VsbF9IbW1tX1JfKDQ2MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtZb3VfU2FpZF8oNDY3KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9Zb3VfU2FpZF8oNDY3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO3Rlc3R5X3Rlc3R5Xyg0NjYpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX3Rlc3R5X3Rlc3R5Xyg0NjYpX2RjXCIsXG4gICAgXG4gICAgXCJyb29tOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xHX1dvb2RfUm9vbV8oNDkwKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX0xHX1dvb2RfUm9vbV8oNDkwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX0NoYW1iZXJfKDQ5MilcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MYXJnZV9DaGFtYmVyXyg0OTIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2VfUm9vbV8oNDg2KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX0xhcmdlX1Jvb21fKDQ4NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW1fUm9vbV8oNDg3KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX01lZGl1bV9Sb29tXyg0ODcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TXVzaWNfQ2x1Yl8oNDg1KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX011c2ljX0NsdWJfKDQ4NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTTV9Xb29kX1Jvb21fKDQ5MSlcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TTV9Xb29kX1Jvb21fKDQ5MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF8tX0JyaWdodF8oNDk0KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NtYWxsXy1fQnJpZ2h0Xyg0OTQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfQ2hhbWJfKDQ5MylcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TbWFsbF9DaGFtYl8oNDkzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX1Jvb21fKDQ4OClcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TbWFsbF9Sb29tXyg0ODgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7VmVyeV9TbWFsbF8oNDg5KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1ZlcnlfU21hbGxfKDQ4OSlfZGNcIixcbiAgICBcbiAgICBcIndpbGRfc3BhY2VzOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwOzEwVy00MF8oNDc4KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF8xMFctNDBfKDQ3OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDsyMHctNTBfKDQ3OSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfMjB3LTUwXyg0NzkpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QmlnX0JvdHRvbV8oNDc3KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9CaWdfQm90dG9tXyg0NzcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QnJpY2tfV2FsbF8oNDc1KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9Ccmlja19XYWxsXyg0NzUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QnVja3JhbV8oNDc2KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9CdWNrcmFtXyg0NzYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7SW5zaWRlX091dF8oNDgyKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9JbnNpZGVfT3V0Xyg0ODIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWV0YWxsaWNhXyg0ODApXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX01ldGFsbGljYV8oNDgwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1JpY29jaGV0Xyg0ODMpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX1JpY29jaGV0Xyg0ODMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U2lsaWNhX0JlYWRzXyg0ODEpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX1NpbGljYV9CZWFkc18oNDgxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1Zhcm9vbV8oNDg0KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9WYXJvb21fKDQ4NClfZGNcIlxufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGF1ZGlvRmlsZXMgPSByZXF1aXJlKCcuLi9jb25maWcvYXVkaW8tZmlsZXMuanNvbicpLFxuXHRpbXB1bHNlID0gcmVxdWlyZSgnLi4vY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbicpO1xuXG52YXIgbW9kZWwgPSB7XG4gICAgZXh0ZW5zaW9uOiAnJyxcblx0YXVkaW9GaWxlczogYXVkaW9GaWxlcyxcblx0Z2V0RmlsZTogZnVuY3Rpb24oa2V5KSB7XG5cdFx0cmV0dXJuIG1vZGVsLmF1ZGlvRmlsZXNba2V5XTtcblx0fSxcblx0aW1wdWxzZTogaW1wdWxzZSxcblx0ZmlsdGVyIDoge1xuICAgICAgICAnbG93cGFzcyc6IDAsXG4gICAgICAgICdoaWdocGFzcyc6IDEsXG4gICAgICAgICdiYW5kcGFzcyc6IDIsXG4gICAgICAgICdsb3dzaGVsZic6IDMsXG4gICAgICAgICdoaWdoc2hlbGYnOiA0LFxuICAgICAgICAncGVha2luZyc6IDUsXG4gICAgICAgICdub3RjaCc6IDYsXG4gICAgICAgICdhbGxwYXNzJzogN1xuXHR9LFxuICAgIHdhdmU6IHtcbiAgICAgICAgJ3NpbmUnOiAnc2luZScsXG4gICAgICAgICdzcXVhcmUnOiAnc3F1YXJlJyxcbiAgICAgICAgJ3Nhd3Rvb3RoJzogJ3Nhd3Rvb3RoJyxcbiAgICAgICAgJ3RyaWFuZ2xlJzogJ3RyaWFuZ2xlJ1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG5mdW5jdGlvbiBBc3NldExvYWRlcigpIHtcbiAgICB0aGlzLm9uQ2hpbGRDb21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMubG9hZGVycyA9IHt9O1xuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLndlYkF1ZGlvQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hMb2NrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bVRvdGFsID0gMDtcbiAgICB0aGlzLm51bUxvYWRlZCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUigpIHtcbiAgICB2YXIgeGhyLCBpLCBwcm9nSWQsXG4gICAgICAgIHByb2dJZHMgPSBbJ01zeG1sMi5YTUxIVFRQJywgJ01pY3Jvc29mdC5YTUxIVFRQJywgJ01zeG1sMi5YTUxIVFRQLjQuMCddO1xuXG4gICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5BY3RpdmVYT2JqZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9nSWQgPSBwcm9nSWRzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB4aHIgPSBuZXcgd2luZG93LkFjdGl2ZVhPYmplY3QocHJvZ0lkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHhocjtcbn1cblxuQXNzZXRMb2FkZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgICAgIHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCwgdHlwZSk7XG4gICAgICAgIGxvYWRlci53ZWJBdWRpb0NvbnRleHQgPSB0aGlzLndlYkF1ZGlvQ29udGV4dDtcbiAgICAgICAgbG9hZGVyLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgICAgbG9hZGVyLnRvdWNoTG9ja2VkID0gdGhpcy50b3VjaExvY2tlZDtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGxvYWRlcik7XG4gICAgICAgIHRoaXMubnVtVG90YWwrKztcbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5udW1Ub3RhbCA9IHRoaXMucXVldWUubGVuZ3RoO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMubG9hZGVycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvYWRlciA9IHRoaXMucXVldWUucG9wKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbG9hZGVyLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5udW1Mb2FkZWQrKztcbiAgICAgICAgICAgIGlmKHNlbGYub25Qcm9ncmVzcy5nZXROdW1MaXN0ZW5lcnMoKSA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uUHJvZ3Jlc3MuZGlzcGF0Y2goc2VsZi5udW1Mb2FkZWQvc2VsZi5udW1Ub3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmxvYWRlcnNbbG9hZGVyLnVybF0gPSBsb2FkZXI7XG4gICAgICAgICAgICBzZWxmLm9uQ2hpbGRDb21wbGV0ZS5kaXNwYXRjaChsb2FkZXIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkZXIub25FcnJvci5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2gobG9hZGVyKTtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGVyLnN0YXJ0KCk7XG4gICAgfSxcbiAgICBhZGRNdWx0aXBsZTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXJzW3VybF07XG4gICAgfVxufTtcblxuQXNzZXRMb2FkZXIuTG9hZGVyID0gZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCB0aGlzLnVybC5zcGxpdCgnPycpWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy53ZWJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoTG9ja2VkID0gZmFsc2U7XG59O1xuXG5Bc3NldExvYWRlci5Mb2FkZXIucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbXAzJzpcbiAgICAgICAgICAgIGNhc2UgJ29nZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQsIHRoaXMudG91Y2hMb2NrZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdnaWYnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuY3Jvc3NPcmlnaW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnRVJST1I6IFVua25vd24gdHlwZSBmb3IgZmlsZSB3aXRoIFVSTDogJyArIHRoaXMudXJsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkQXVkaW86IGZ1bmN0aW9uKHdlYkF1ZGlvQ29udGV4dCwgdG91Y2hMb2NrZWQpIHtcbiAgICAgICAgaWYod2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXZWJBdWRpbyh3ZWJBdWRpb0NvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkSFRNTDVBdWRpbyh0b3VjaExvY2tlZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRXZWJBdWRpbzogZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xuICAgICAgICAgICAgICAgIHNlbGYub25Qcm9ncmVzcy5kaXNwYXRjaChwZXJjZW50Q29tcGxldGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVbmFibGUgdG8gY29tcHV0ZSBwcm9ncmVzcyBpbmZvcm1hdGlvbiBzaW5jZSB0aGUgdG90YWwgc2l6ZSBpcyB1bmtub3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3ZWJBdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goYnVmZmVyKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaChlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSxcbiAgICBsb2FkSFRNTDVBdWRpbzogZnVuY3Rpb24odG91Y2hMb2NrZWQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVxdWVzdDtcbiAgICAgICAgcmVxdWVzdC5uYW1lID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3QucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNyYyA9IHRoaXMudXJsO1xuICAgICAgICBpZiAoISF0b3VjaExvY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKnJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyBjYW5wbGF5dGhyb3VnaCcpO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICAgICAgfSwgZmFsc2UpOyovXG4gICAgICAgICAgICByZXF1ZXN0LmxvYWQoKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkSW1hZ2U6IGZ1bmN0aW9uKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7XG4gICAgICAgIHJlcXVlc3QubmFtZSA9IHRoaXMudXJsO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKHNlbGYuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZihjcm9zc09yaWdpbikge1xuICAgICAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Quc3JjID0gdGhpcy51cmw7XG4gICAgfSxcbiAgICBsb2FkSlNPTjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHJlcXVlc3QgPSBjcmVhdGVYSFIoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVMb2FkZWQoKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5qc29uID0gc2VsZi5kYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb25sb2FkJyBpbiByZXF1ZXN0ICYmICdvbmVycm9yJyBpbiByZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGhhbmRsZUxvYWRlZDtcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGhhbmRsZUVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuXG4vKmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gQXNzZXRMb2FkZXI7XG59Ki9cblxuLyp2YXIgcm9vdCA9IHRoaXM7XG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuICAgIH1cbiAgICBleHBvcnRzLkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7XG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ1BJWEknLCAoZnVuY3Rpb24oKSB7IHJldHVybiByb290LkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7IH0pKCkgKTtcbn0gZWxzZSB7XG4gICAgcm9vdC5QSVhJID0gUElYSTtcbn0qLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIHdlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoIGlzIGJyZWFraW5nIEZpcmVmb3hcclxuLy9yZXF1aXJlKCcuL3dlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoLmpzJyk7XHJcblxyXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuL3dlYi1hdWRpby5qcycpLFxyXG5cdEhUTUxBdWRpbyA9IHJlcXVpcmUoJy4vaHRtbC1hdWRpby5qcycpLFxyXG5cdFBhZ2VWaXNpYmlsaXR5ID0gcmVxdWlyZSgnLi9wYWdlLXZpc2liaWxpdHkuanMnKTtcclxuXHJcbmZ1bmN0aW9uIEF1ZGlvTWFuYWdlcigpIHtcclxuXHR0aGlzLndlYkF1ZGlvQ29udGV4dCA9IFdlYkF1ZGlvLmNyZWF0ZUNvbnRleHQoKTtcclxuXHR0aGlzLl9zb3VuZHMgPSB7fTtcclxuXHR0aGlzLl9kZWxheVRpbWVvdXRzID0gW107XHJcblx0dGhpcy5fZXh0ID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX2lzU3VwcG9ydGVkID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX3RvdWNoTG9ja2VkID0gZmFsc2U7XHJcblx0dGhpcy5fcXVldWVkID0gW107XHJcblxyXG5cdFBhZ2VWaXNpYmlsaXR5Lm9uUGFnZUhpZGRlbi5hZGQoZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBhdXNlQWxsKCk7XHJcblx0fSwgdGhpcyk7XHJcblx0UGFnZVZpc2liaWxpdHkub25QYWdlU2hvd24uYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5yZXN1bWVBbGwoKTtcclxuXHR9LCB0aGlzKTtcclxufVxyXG5cclxuQXVkaW9NYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHRhZGQ6IGZ1bmN0aW9uKGtleSwgZGF0YSwgbG9vcCkge1xyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy53ZWJBdWRpb0NvbnRleHQgJiYgIShkYXRhICYmIGRhdGEudGFnTmFtZSkgPyBuZXcgV2ViQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQpIDogbmV3IEhUTUxBdWRpbygpO1xyXG5cdFx0c291bmQubG9vcCA9ICEhKGxvb3ApO1xyXG5cdFx0c291bmQuYWRkKGRhdGEpO1xyXG5cdFx0dGhpcy5fc291bmRzW2tleV0gPSBzb3VuZDtcclxuXHRcdHJldHVybiBzb3VuZDtcclxuXHR9LFxyXG5cdGdldEV4dGVuc2lvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZighdGhpcy5fZXh0KSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcblx0XHRcdHRoaXMuX2V4dCA9IChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpID8gJy5vZ2cnIDogJy5tcDMnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9leHQ7XHJcblx0fSxcclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzLl9pc1N1cHBvcnRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdFx0XHR0aGlzLl9pc1N1cHBvcnRlZCA9ICEhKGVsICYmIChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpIHx8IGVsLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpKSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdHRoaXMuX2lzU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcclxuXHR9LFxyXG5cdHdlYkF1ZGlvU3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAhIXRoaXMud2ViQXVkaW9Db250ZXh0O1xyXG5cdH0sXHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcclxuXHR9LFxyXG5cdHBsYXk6IGZ1bmN0aW9uKGtleSwgZGVsYXksIGxvb3ApIHtcclxuXHRcdGlmKHRoaXMuX3RvdWNoTG9ja2VkKSB7XHJcblx0XHRcdHRoaXMucXVldWVVcChrZXksIGRlbGF5LCBsb29wKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy5fc291bmRzW2tleV07XHJcblx0XHRpZighc291bmQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG4gICAgICAgIGlmKGxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzb3VuZC5sb29wID0gbG9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGVsYXkgIT09IHVuZGVmaW5lZCAmJiBkZWxheSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGRlbGF5ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5wdXNoKGRlbGF5ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2ldLnZvbHVtZSA9IDA7XHJcblx0XHR9XHJcblx0fSxcclxuXHR1bk11dGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNbaV0udm9sdW1lID0gMTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHBhdXNlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmKCF0aGlzLl9zb3VuZHNba2V5XSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XS5wYXVzZSgpO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZighdGhpcy5fc291bmRzW2tleV0pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdH0sXHJcblx0cGF1c2VBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGxheWluZykge1xyXG5cdFx0XHRcdHRoaXMuX3NvdW5kc1tpXS5wYXVzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZXN1bWVBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy5fc291bmRzW2ldLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0c3RvcEFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGtleSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9kZWxheVRpbWVvdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5sZW5ndGggPSAwO1xyXG5cdH0sXHJcblx0Z2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RvdWNoTG9ja2VkO1xyXG5cdH0sXHJcblx0c2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl90b3VjaExvY2tlZCA9IHZhbHVlO1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciB1bmxvY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5fdG91Y2hMb2NrZWQgPSBmYWxzZTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl9xdWV1ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRzZWxmLl9xdWV1ZWRbaV0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLl9xdWV1ZWQubGVuZ3RoID0gMDtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5fdG91Y2hMb2NrZWQpIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRxdWV1ZVVwOiBmdW5jdGlvbihrZXksIGRlbGF5LCBsb29wKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgZm4gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5wbGF5KGtleSwgZGVsYXksIGxvb3ApO1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX3F1ZXVlZC5wdXNoKGZuKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvTWFuYWdlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gSFRNTEF1ZGlvKCkge1xyXG5cdHRoaXMuX3NvdW5kID0gbnVsbDtcclxuXHR0aGlzLl9sb29wID0gZmFsc2U7XHJcblx0dGhpcy5fdm9sdW1lID0gMTtcclxuXHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbkhUTUxBdWRpby5wcm90b3R5cGUgPSB7XHJcblx0YWRkOiBmdW5jdGlvbihlbCkge1xyXG5cdFx0dGhpcy5fc291bmQgPSBlbDtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZDtcclxuXHR9LFxyXG5cdHBsYXk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcy5fc291bmQudm9sdW1lICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5fc291bmQudm9sdW1lID0gdGhpcy5fdm9sdW1lO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmQucGxheSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IHRydWU7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLl9zb3VuZC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihzZWxmLl9sb29wKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XHJcblx0XHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSxcclxuXHRwYXVzZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5fc291bmQucGF1c2UoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAnbG9vcCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvb3A7XHJcblx0fSxcclxuXHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl9sb29wID0gdmFsdWU7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAndm9sdW1lJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdm9sdW1lO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYoaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3ZvbHVtZSA9IHZhbHVlO1xyXG5cdFx0aWYodGhpcy5fc291bmQgJiYgdGhpcy5fc291bmQudm9sdW1lICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5fc291bmQudm9sdW1lID0gdGhpcy5fdm9sdW1lO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3BsYXlpbmcnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wbGF5aW5nO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3BhdXNlZCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdzb3VuZCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kO1xyXG5cdH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhUTUxBdWRpbztcclxuIiwidmFyIEtleWJvYXJkID0ge1xuXHRBOiAnQScuY2hhckNvZGVBdCgwKSxcblx0QjogJ0InLmNoYXJDb2RlQXQoMCksXG5cdEM6ICdDJy5jaGFyQ29kZUF0KDApLFxuXHREOiAnRCcuY2hhckNvZGVBdCgwKSxcblx0RTogJ0UnLmNoYXJDb2RlQXQoMCksXG5cdEY6ICdGJy5jaGFyQ29kZUF0KDApLFxuXHRHOiAnRycuY2hhckNvZGVBdCgwKSxcblx0SDogJ0gnLmNoYXJDb2RlQXQoMCksXG5cdEk6ICdJJy5jaGFyQ29kZUF0KDApLFxuXHRKOiAnSicuY2hhckNvZGVBdCgwKSxcblx0SzogJ0snLmNoYXJDb2RlQXQoMCksXG5cdEw6ICdMJy5jaGFyQ29kZUF0KDApLFxuXHRNOiAnTScuY2hhckNvZGVBdCgwKSxcblx0TjogJ04nLmNoYXJDb2RlQXQoMCksXG5cdE86ICdPJy5jaGFyQ29kZUF0KDApLFxuXHRQOiAnUCcuY2hhckNvZGVBdCgwKSxcblx0UTogJ1EnLmNoYXJDb2RlQXQoMCksXG5cdFI6ICdSJy5jaGFyQ29kZUF0KDApLFxuXHRTOiAnUycuY2hhckNvZGVBdCgwKSxcblx0VDogJ1QnLmNoYXJDb2RlQXQoMCksXG5cdFU6ICdVJy5jaGFyQ29kZUF0KDApLFxuXHRWOiAnVicuY2hhckNvZGVBdCgwKSxcblx0VzogJ1cnLmNoYXJDb2RlQXQoMCksXG5cdFg6ICdYJy5jaGFyQ29kZUF0KDApLFxuXHRZOiAnWScuY2hhckNvZGVBdCgwKSxcblx0WjogJ1onLmNoYXJDb2RlQXQoMCksXG5cdFpFUk86ICcwJy5jaGFyQ29kZUF0KDApLFxuXHRPTkU6ICcxJy5jaGFyQ29kZUF0KDApLFxuXHRUV086ICcyJy5jaGFyQ29kZUF0KDApLFxuXHRUSFJFRTogJzMnLmNoYXJDb2RlQXQoMCksXG5cdEZPVVI6ICc0Jy5jaGFyQ29kZUF0KDApLFxuXHRGSVZFOiAnNScuY2hhckNvZGVBdCgwKSxcblx0U0lYOiAnNicuY2hhckNvZGVBdCgwKSxcblx0U0VWRU46ICc3Jy5jaGFyQ29kZUF0KDApLFxuXHRFSUdIVDogJzgnLmNoYXJDb2RlQXQoMCksXG5cdE5JTkU6ICc5Jy5jaGFyQ29kZUF0KDApLFxuXHROVU1QQURfMDogOTYsXG5cdE5VTVBBRF8xOiA5Nyxcblx0TlVNUEFEXzI6IDk4LFxuXHROVU1QQURfMzogOTksXG5cdE5VTVBBRF80OiAxMDAsXG5cdE5VTVBBRF81OiAxMDEsXG5cdE5VTVBBRF82OiAxMDIsXG5cdE5VTVBBRF83OiAxMDMsXG5cdE5VTVBBRF84OiAxMDQsXG5cdE5VTVBBRF85OiAxMDUsXG5cdE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuXHROVU1QQURfQUREOiAxMDcsXG5cdE5VTVBBRF9FTlRFUjogMTA4LFxuXHROVU1QQURfU1VCVFJBQ1Q6IDEwOSxcblx0TlVNUEFEX0RFQ0lNQUw6IDExMCxcblx0TlVNUEFEX0RJVklERTogMTExLFxuXHRGMTogMTEyLFxuXHRGMjogMTEzLFxuXHRGMzogMTE0LFxuXHRGNDogMTE1LFxuXHRGNTogMTE2LFxuXHRGNjogMTE3LFxuXHRGNzogMTE4LFxuXHRGODogMTE5LFxuXHRGOTogMTIwLFxuXHRGMTA6IDEyMSxcblx0RjExOiAxMjIsXG5cdEYxMjogMTIzLFxuXHRGMTM6IDEyNCxcblx0RjE0OiAxMjUsXG5cdEYxNTogMTI2LFxuXHRDT0xPTjogMTg2LFxuXHRFUVVBTFM6IDE4Nyxcblx0VU5ERVJTQ09SRTogMTg5LFxuXHRRVUVTVElPTl9NQVJLOiAxOTEsXG5cdFRJTERFOiAxOTIsXG5cdE9QRU5fQlJBQ0tFVDogMjE5LFxuXHRCQUNLV0FSRF9TTEFTSDogMjIwLFxuXHRDTE9TRURfQlJBQ0tFVDogMjIxLFxuXHRRVU9URVM6IDIyMixcblx0QkFDS1NQQUNFOiA4LFxuXHRUQUI6IDksXG5cdENMRUFSOiAxMixcblx0RU5URVI6IDEzLFxuXHRTSElGVDogMTYsXG5cdENPTlRST0w6IDE3LFxuXHRBTFQ6IDE4LFxuXHRDQVBTX0xPQ0s6IDIwLFxuXHRFU0M6IDI3LFxuXHRTUEFDRUJBUjogMzIsXG5cdFBBR0VfVVA6IDMzLFxuXHRQQUdFX0RPV046IDM0LFxuXHRFTkQ6IDM1LFxuXHRIT01FOiAzNixcblx0TEVGVDogMzcsXG5cdFVQOiAzOCxcblx0UklHSFQ6IDM5LFxuXHRET1dOOiA0MCxcblx0SU5TRVJUOiA0NSxcblx0REVMRVRFOiA0Nixcblx0SEVMUDogNDcsXG5cdE5VTV9MT0NLOiAxNDRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5Ym9hcmQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2lnbmFscyA9IHJlcXVpcmUoJ3NpZ25hbHMnKTtcblxuZnVuY3Rpb24gTWljcm9waG9uZSgpIHtcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXyA9IChuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWEpO1xuICAgIHRoaXMuX2lzU3VwcG9ydGVkID0gISFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXztcbiAgICB0aGlzLl9zdHJlYW0gPSBudWxsO1xuXG4gICAgdGhpcy5vbkNvbm5lY3RlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25EZW5pZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbn1cblxuTWljcm9waG9uZS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLl9pc1N1cHBvcnRlZCkgeyByZXR1cm47IH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYV8oIHthdWRpbzp0cnVlfSwgZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHNlbGYuX3N0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgc2VsZi5vbkNvbm5lY3RlZC5kaXNwYXRjaChzdHJlYW0pO1xuICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGlmKGUubmFtZSA9PT0gJ1Blcm1pc3Npb25EZW5pZWRFcnJvcicgfHwgZSA9PT0gJ1BFUk1JU1NJT05fREVOSUVEJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Blcm1pc3Npb24gZGVuaWVkLiBZb3UgY2FuIHVuZG8gdGhpcyBieSBjbGlja2luZyB0aGUgY2FtZXJhIGljb24gd2l0aCB0aGUgcmVkIGNyb3NzIGluIHRoZSBhZGRyZXNzIGJhcicpO1xuICAgICAgICAgICAgc2VsZi5vbkRlbmllZC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKGUubWVzc2FnZSB8fCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuTWljcm9waG9uZS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0cmVhbSkge1xuICAgICAgICB0aGlzLl9zdHJlYW0uc3RvcCgpO1xuICAgICAgICB0aGlzLl9zdHJlYW0gPSBudWxsO1xuICAgIH1cbn07XG5cbk1pY3JvcGhvbmUucHJvdG90eXBlLmNyZWF0ZVdlYkF1ZGlvU291cmNlID0gZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0LCBjb25uZWN0VG8pIHtcbiAgICBpZighdGhpcy5fc3RyZWFtKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIG1lZGlhU3RyZWFtU291cmNlID0gd2ViQXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCB0aGlzLl9zdHJlYW0gKTtcbiAgICBpZihjb25uZWN0VG8pIHtcbiAgICAgICAgbWVkaWFTdHJlYW1Tb3VyY2UuY29ubmVjdChjb25uZWN0VG8pO1xuICAgIH1cbiAgICAvLyBIQUNLOiBzdG9wcyBtb3ogZ2FyYmFnZSBjb2xsZWN0aW9uIGtpbGxpbmcgdGhlIHN0cmVhbVxuICAgIC8vIHNlZSBodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvZW4tVVMvcXVlc3Rpb25zLzk4NDE3OVxuICAgIGlmKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgd2luZG93LmhvcnJpYmxlX2hhY2tfZm9yX21vemlsbGEgPSBtZWRpYVN0cmVhbVNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhU3RyZWFtU291cmNlO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pY3JvcGhvbmUucHJvdG90eXBlLCAnc3RyZWFtJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJlYW07XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaWNyb3Bob25lLnByb3RvdHlwZSwgJ2lzU3VwcG9ydGVkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcbiAgICB9XG59KTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBNaWNyb3Bob25lO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2lnbmFscyA9IHJlcXVpcmUoJ3NpZ25hbHMnKTtcblxudmFyIG9uUGFnZUhpZGRlbiA9IG5ldyBzaWduYWxzLlNpZ25hbCgpLFxuICAgIG9uUGFnZVNob3duID0gbmV3IHNpZ25hbHMuU2lnbmFsKCksXG4gICAgaGlkZGVuLCB2aXNpYmlsaXR5Q2hhbmdlO1xuXG5mdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKGRvY3VtZW50W2hpZGRlbl0pIHtcbiAgICAgICAgb25QYWdlSGlkZGVuLmRpc3BhdGNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb25QYWdlU2hvd24uZGlzcGF0Y2goKTtcbiAgICB9XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQuaGlkZGVuICE9PSAndW5kZWZpbmVkJykgeyAvLyBPcGVyYSAxMi4xMCBhbmQgRmlyZWZveCAxOCBhbmQgbGF0ZXIgc3VwcG9ydCBcbiAgICBoaWRkZW4gPSAnaGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnbXNIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xufVxuXG5pZih2aXNpYmlsaXR5Q2hhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvblBhZ2VTaG93bjogb25QYWdlU2hvd24sXG4gICAgb25QYWdlSGlkZGVuOiBvblBhZ2VIaWRkZW5cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICAgIH1cbn0oKSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBXZWJBdWRpbyhjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCBXZWJBdWRpby5jcmVhdGVDb250ZXh0KCk7XG4gICAgdGhpcy5fc291bmQgPSBbXTtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5fZ2Fpbi5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fc3RhcnRlZEF0ID0gMDtcbiAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub2RlRmFjdG9yeSA9IG5ldyBXZWJBdWRpby5Ob2RlRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMuX2hlbHBlcnMgPSBuZXcgV2ViQXVkaW8uSGVscGVycyh0aGlzLmNvbnRleHQpO1xufVxuXG5XZWJBdWRpby5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgaWYoIWJ1ZmZlcikgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5fc291bmQucHVzaChuZXcgV2ViQXVkaW8uU291bmQoYnVmZmVyLCB0aGlzLmNvbnRleHQpKTtcbiAgICAgICAgdGhpcy5fc291bmRbdGhpcy5fc291bmQubGVuZ3RoLTFdLmxvb3AgPSB0aGlzLl9sb29wO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRbdGhpcy5fc291bmQubGVuZ3RoLTFdO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtYXhEdXJhdGlvbiA9IC0xLFxuICAgICAgICAgICAgbG9uZ2VzdFNvdW5kO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5jb25uZWN0KHRoaXMuX2dhaW4pO1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0ucGxheSgwLCB0aGlzLl9wYXVzZWRBdCAvIDEwMDApO1xuICAgICAgICAgICAgaWYodGhpcy5fc291bmRbaV0uZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIG1heER1cmF0aW9uID0gdGhpcy5fc291bmRbaV0uZHVyYXRpb247XG4gICAgICAgICAgICAgICAgbG9uZ2VzdFNvdW5kID0gdGhpcy5fc291bmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsb25nZXN0U291bmQuc291cmNlLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc3RhcnRlZEF0ID0gRGF0ZS5ub3coKSAtIHRoaXMuX3BhdXNlZEF0O1xuICAgICAgICB0aGlzLl9wbGF5aW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3BhdXNlZEF0ID0gRGF0ZS5ub3coKSAtIHRoaXMuX3N0YXJ0ZWRBdDtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGF1c2VkQXQgPSAwO1xuICAgICAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBhZGROb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMuX25vZGUucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgIH0sXG4gICAgcmVtb3ZlTm9kZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgbCA9IHRoaXMuX25vZGUubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYobm9kZSA9PT0gdGhpcy5fbm9kZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGUuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5kaXNjb25uZWN0KDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgfSxcbiAgICB1cGRhdGVDb25uZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5fbm9kZS5sZW5ndGg7XG4gICAgICAgIGlmKGwgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2dhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2RlW2ldLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2Fpbi5kaXNjb25uZWN0KDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dhaW4uY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgPT09IGwtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVbaV0uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVbaS0xXS5jb25uZWN0KHRoaXMuX25vZGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2xvb3AnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0ubG9vcCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICd2b2x1bWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2Fpbi5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdwbGF5aW5nJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5aW5nO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAncGF1c2VkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRBdCA+IDA7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdzb3VuZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmQ7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdub2RlRmFjdG9yeScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZUZhY3Rvcnk7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdoZWxwZXJzJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWxwZXJzO1xuICAgIH1cbn0pO1xuXG4vKlxuICogQ29udGV4dFxuICovXG5cbldlYkF1ZGlvLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBpZih3aW5kb3cuQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn07XG5cbi8qXG4gKiBTb3VuZFxuICovXG5cbldlYkF1ZGlvLlNvdW5kID0gZnVuY3Rpb24oYnVmZmVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5fbm9kZSA9IFtdO1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSAnJztcbn07XG5cbldlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSA9IHtcbiAgICBwbGF5OiBmdW5jdGlvbihkZWxheSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgZGVsYXkgPSB0aGlzLl9jb250ZXh0LmN1cnJlbnRUaW1lICsgZGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UubG9vcCA9IHRoaXMuX2xvb3A7XG4gICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KGRlbGF5LCBvZmZzZXQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fc291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb25uZWN0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIGlmKHRoaXMuX25vZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbm9kZVt0aGlzLl9ub2RlLmxlbmd0aCAtIDFdLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBub2RlO1xuICAgIH0sXG4gICAgYWRkTm9kZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB0aGlzLl9ub2RlLnB1c2gobm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29ubmVjdGlvbnMoKTtcbiAgICB9LFxuICAgIHVwZGF0ZUNvbm5lY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5jb25uZWN0KHRoaXMuX25vZGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZVtpLTFdLmNvbm5lY3QodGhpcy5fbm9kZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KHRoaXMuZGVzdGluYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ3NvdXJjZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgdGhpcy5fc291cmNlLmJ1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnbG9vcCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9vcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnZHVyYXRpb24nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlciA/IHRoaXMuX2J1ZmZlci5kdXJhdGlvbiA6IDA7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBOb2Rlc1xuICovXG5cbldlYkF1ZGlvLk5vZGVGYWN0b3J5ID0gZnVuY3Rpb24oY29udGV4dCkge1xuY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyKHR5cGUsIGZyZXF1ZW5jeSkge1xuICAgICAgICB2YXIgZmlsdGVyTm9kZSA9IGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG4gICAgICAgIGZpbHRlck5vZGUudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmKGZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXF1ZW5jeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyTm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYWluOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBwYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgICAgICAgbm9kZS5wYW5uaW5nTW9kZWwgPSAnSFJURic7XG4gICAgICAgICAgICAvL25vZGUucGFubmluZ01vZGVsID0gJ2VxdWFscG93ZXInO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHgsIDApO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHksIDApO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHosIDApO1xuICAgICAgICAgICAgLy9ub2RlLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgLypcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBmb3Igc3RlcmVvIGlzIEhSVEZcblxuXG4gICAgICAgICAgICAvLyBVc2VzIGEgM0QgY2FydGVzaWFuIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKG9iamVjdC5wb3NpdGlvbi54LzI5MCwgb2JqZWN0LnBvc2l0aW9uLnkvMjkwLCBvYmplY3QucG9zaXRpb24uei8yOTApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0T3JpZW50YXRpb24oMSwgMCwgMCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldFZlbG9jaXR5KDAsIDAsIDApO1xuXG4gICAgICAgICAgICAvLyBEaXN0YW5jZSBtb2RlbCBhbmQgYXR0cmlidXRlc1xuICAgICAgICAgICAgbm9kZS5kaXN0YW5jZU1vZGVsID0gJ2ludmVyc2UnOyAvLyAnbGluZWFyJyAnaW52ZXJzZScgJ2V4cG9uZW50aWFsJ1xuICAgICAgICAgICAgbm9kZS5yZWZEaXN0YW5jZSA9IDE7XG4gICAgICAgICAgICBub2RlLm1heERpc3RhbmNlID0gMTAwMDA7XG4gICAgICAgICAgICBub2RlLnJvbGxvZmZGYWN0b3IgPSAxO1xuXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25hbCBzb3VuZCBjb25lIC0gVGhlIGNvbmUgYW5nbGVzIGFyZSBpbiBkZWdyZWVzIGFuZCBydW4gZnJvbSAwIHRvIDM2MFxuICAgICAgICAgICAgLy8gbm9kZS5jb25lSW5uZXJBbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZU91dGVyQW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAvLyBub2RlLmNvbmVPdXRlckdhaW4gPSAwO1xuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gbm9ybWFsaXNlZCB2ZWNcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0T3JpZW50YXRpb24odmVjLngsIHZlYy55LCB2ZWMueik7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICBsb3dwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdsb3dwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdocGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignaGlnaHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhbmRwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdiYW5kcGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG93c2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2xvd3NoZWxmJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdoc2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2hpZ2hzaGVsZicsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVha2luZzogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcigncGVha2luZycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90Y2g6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ25vdGNoJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdhbGxwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVEZWxheSgpO1xuICAgICAgICAgICAgaWYodGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZWxheVRpbWUudmFsdWUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZvbHZlcjogZnVuY3Rpb24oaW1wdWxzZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBpbXB1bHNlUmVzcG9uc2UgaXMgYW4gYXVkaW8gZmlsZSBidWZmZXJcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVDb252b2x2ZXIoKTtcbiAgICAgICAgICAgIG5vZGUuYnVmZmVyID0gaW1wdWxzZVJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHJldmVyYjogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udm9sdmVyKHRoaXMuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHNlY29uZHMsIGRlY2F5LCByZXZlcnNlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUltcHVsc2VSZXNwb25zZTogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIGEgcmV2ZXJiIGVmZmVjdFxuICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgfHwgMTtcbiAgICAgICAgICAgIGRlY2F5ID0gZGVjYXkgfHwgNTtcbiAgICAgICAgICAgIHJldmVyc2UgPSAhIXJldmVyc2U7XG5cbiAgICAgICAgICAgIHZhciBudW1DaGFubmVscyA9IDIsXG4gICAgICAgICAgICAgICAgcmF0ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByYXRlICogc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBpbXB1bHNlUmVzcG9uc2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlcihudW1DaGFubmVscywgbGVuZ3RoLCByYXRlKSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDApLFxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDEpLFxuICAgICAgICAgICAgICAgIG47XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuID0gcmV2ZXJzZSA/IGxlbmd0aCAtIDEgOiBpO1xuICAgICAgICAgICAgICAgIGxlZnRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICAgICAgcmlnaHRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbXB1bHNlUmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGFuYWx5c2VyOiBmdW5jdGlvbihmZnRTaXplKSB7XG4gICAgICAgICAgICBmZnRTaXplID0gZmZ0U2l6ZSB8fCAxMDI0O1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICBub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuODU7XG4gICAgICAgICAgICAvLyByZXNvbHV0aW9uIGZmdFNpemU6IDMyIC0gMjA0OCAocG93IDIpXG4gICAgICAgICAgICAvLyBmcmVxdWVuY3lCaW5Db3VudCB3aWxsIGJlIGhhbGYgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgbm9kZS5mZnRTaXplID0gZmZ0U2l6ZTtcbiAgICAgICAgICAgIC8vbm9kZS5taW5EZWNpYmVscyA9IC0xMDA7XG4gICAgICAgICAgICAvL25vZGUubWF4RGVjaWJlbHMgPSAtMzA7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBsb3dlcnMgdGhlIHZvbHVtZSBvZiB0aGUgbG91ZGVzdCBwYXJ0cyBvZiB0aGUgc2lnbmFsIGFuZCByYWlzZXMgdGhlIHZvbHVtZSBvZiB0aGUgc29mdGVzdCBwYXJ0c1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpO1xuICAgICAgICAgICAgLy8gbWluIGRlY2liZWxzIHRvIHN0YXJ0IGNvbXByZXNzaW5nIGF0IGZyb20gLTEwMCB0byAwXG4gICAgICAgICAgICBub2RlLnRocmVzaG9sZC52YWx1ZSA9IC0yNDtcbiAgICAgICAgICAgIC8vIGRlY2liZWwgdmFsdWUgdG8gc3RhcnQgY3VydmUgdG8gY29tcHJlc3NlZCB2YWx1ZSBmcm9tIDAgdG8gNDBcbiAgICAgICAgICAgIG5vZGUua25lZS52YWx1ZSA9IDMwO1xuICAgICAgICAgICAgLy8gYW1vdW50IG9mIGNoYW5nZSBwZXIgZGVjaWJlbCBmcm9tIDEgdG8gMjBcbiAgICAgICAgICAgIG5vZGUucmF0aW8udmFsdWUgPSAxMjtcbiAgICAgICAgICAgIC8vIGdhaW4gcmVkdWN0aW9uIGN1cnJlbnRseSBhcHBsaWVkIGJ5IGNvbXByZXNzb3IgZnJvbSAtMjAgdG8gMFxuICAgICAgICAgICAgLy8gbm9kZS5yZWR1Y3Rpb24udmFsdWVcbiAgICAgICAgICAgIC8vIHNlY29uZHMgdG8gcmVkdWNlIGdhaW4gYnkgMTBkYiBmcm9tIDAgdG8gMSAtIGhvdyBxdWlja2x5IHNpZ25hbCBhZGFwdGVkIHdoZW4gdm9sdW1lIGluY3JlYXNlZFxuICAgICAgICAgICAgbm9kZS5hdHRhY2sudmFsdWUgPSAwLjAwMDM7XG4gICAgICAgICAgICAvLyBzZWNvbmRzIHRvIGluY3JlYXNlIGdhaW4gYnkgMTBkYiBmcm9tIDAgdG8gMSAtIGhvdyBxdWlja2x5IHNpZ25hbCBhZGFwdGVkIHdoZW4gdm9sdW1lIHJlZGN1Y2VkXG4gICAgICAgICAgICBub2RlLnJlbGVhc2UudmFsdWUgPSAwLjI1O1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3RvcnRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZVdhdmVTaGFwZXIoKTtcbiAgICAgICAgICAgIC8vIEZsb2F0MzJBcnJheSBkZWZpbmluZyBjdXJ2ZSAodmFsdWVzIGFyZSBpbnRlcnBvbGF0ZWQpXG4gICAgICAgICAgICAvL25vZGUuY3VydmVcbiAgICAgICAgICAgIC8vIHVwLXNhbXBsZSBiZWZvcmUgYXBwbHlpbmcgY3VydmUgZm9yIGJldHRlciByZXNvbHV0aW9uIHJlc3VsdCAnbm9uZScsICcyeCcgb3IgJzR4J1xuICAgICAgICAgICAgLy9ub2RlLm92ZXJzYW1wbGUgPSAnMngnO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNjcmlwdFByb2Nlc3NvcjogZnVuY3Rpb24oYnVmZmVyU2l6ZSwgaW5wdXRDaGFubmVscywgb3V0cHV0Q2hhbm5lbHMsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIGJ1ZmZlclNpemUgMjU2IC0gMTYzODQgKHBvdyAyKVxuICAgICAgICAgICAgYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemUgfHwgMTAyNDtcbiAgICAgICAgICAgIGlucHV0Q2hhbm5lbHMgPSBpbnB1dENoYW5uZWxzID09PSB1bmRlZmluZWQgPyAwIDogaW5wdXRDaGFubmVscztcbiAgICAgICAgICAgIG91dHB1dENoYW5uZWxzID0gb3V0cHV0Q2hhbm5lbHMgPT09IHVuZGVmaW5lZCA/IDEgOiBvdXRwdXRDaGFubmVscztcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgaW5wdXRDaGFubmVscywgb3V0cHV0Q2hhbm5lbHMpO1xuICAgICAgICAgICAgbm9kZS5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGV2ZW50LmlucHV0QnVmZmVyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQub3V0cHV0QnVmZmVyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQucGxheWJhY2tUaW1lXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjYWxsYmFja0NvbnRleHQgfHwgdGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qXG4gKiBIZWxwZXJzXG4gKi9cblxuV2ViQXVkaW8uSGVscGVycyA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblxuICAgIGZ1bmN0aW9uIHJhbXAocGFyYW0sIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBwYXJhbS5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgY29udGV4dC5jdXJyZW50VGltZSArIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYW5YWVoobm9kZSwgeCwgeSwgeikge1xuICAgICAgICB4ID0gcGFyc2VGbG9hdCh4LCAxMCk7XG4gICAgICAgIHkgPSBwYXJzZUZsb2F0KHksIDEwKTtcbiAgICAgICAgeiA9IHBhcnNlRmxvYXQoeiwgMTApO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhblgobm9kZSwgeCkge1xuICAgICAgICB4ID0gcGFyc2VGbG9hdCh4LCAxMCk7XG4gICAgICAgIC8vIHggZnJvbSAtTWF0aC5QSS80IHRvIE1hdGguUEkvNCAoLTQ1IHRvIDQ1IGRlZylcbiAgICAgICAgdmFyIHogPSB4ICsgTWF0aC5QSSAvIDI7XG4gICAgICAgIGlmICh6ID4gTWF0aC5QSSAvIDIpIHtcbiAgICAgICAgICAgIHogPSBNYXRoLlBJIC0gejtcbiAgICAgICAgfVxuICAgICAgICB4ID0gTWF0aC5zaW4oeCk7XG4gICAgICAgIHogPSBNYXRoLnNpbih6KTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih4LCAwLCB6KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDYW1lcmFQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICAgIC8vIHNldCB0aGUgYXVkaW8gY29udGV4dCdzIGxpc3RlbmVyIHBvc2l0aW9uIHRvIG1hdGNoIHRoZSBjYW1lcmEgcG9zaXRpb25cbiAgICAgICAgY29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbih4LCB5LCB6KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb3BwbGVyKHBhbm5lck5vZGUsIHgsIHksIHosIGRlbHRhWCwgZGVsdGFZLCBkZWx0YVosIGRlbHRhVGltZSkge1xuICAgICAgICAvLyBUcmFja2luZyB0aGUgdmVsb2NpdHkgY2FuIGJlIGRvbmUgYnkgZ2V0dGluZyB0aGUgb2JqZWN0J3MgcHJldmlvdXMgcG9zaXRpb24sIHN1YnRyYWN0aW5nXG4gICAgICAgIC8vIGl0IGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIGRpdmlkaW5nIHRoZSByZXN1bHQgYnkgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IGZyYW1lXG4gICAgICAgIHBhbm5lck5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIHBhbm5lck5vZGUuc2V0VmVsb2NpdHkoZGVsdGFYL2RlbHRhVGltZSwgZGVsdGFZL2RlbHRhVGltZSwgZGVsdGFaL2RlbHRhVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGZpbHRlck5vZGUsIHZhbHVlLCBxdWFsaXR5LCBnYWluKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xuICAgICAgICBxdWFsaXR5ID0gcGFyc2VGbG9hdChxdWFsaXR5LCAxMCk7XG4gICAgICAgIGdhaW4gPSBwYXJzZUZsb2F0KGdhaW4sIDEwKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICBmaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGdldEZyZXF1ZW5jeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9maWx0ZXJOb2RlLlEudmFsdWUgPSBxdWFsaXR5O1xuICAgICAgICAvL2ZpbHRlck5vZGUuZ2Fpbi52YWx1ZSA9IGdhaW47XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZyZXF1ZW5jeSBieSBwYXNzaW5nIG51bWJlciBmcm9tIDAgdG8gMVxuICAgIGZ1bmN0aW9uIGdldEZyZXF1ZW5jeSh2YWx1ZSkge1xuICAgICAgICAvLyBDbGFtcCB0aGUgZnJlcXVlbmN5IGJldHdlZW4gdGhlIG1pbmltdW0gdmFsdWUgKDQwIEh6KSBhbmQgaGFsZiBvZiB0aGVcbiAgICAgICAgLy8gc2FtcGxpbmcgcmF0ZS5cbiAgICAgICAgdmFyIG1pblZhbHVlID0gNDA7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSAvIDI7XG4gICAgICAgIC8vIExvZ2FyaXRobSAoYmFzZSAyKSB0byBjb21wdXRlIGhvdyBtYW55IG9jdGF2ZXMgZmFsbCBpbiB0aGUgcmFuZ2UuXG4gICAgICAgIHZhciBudW1iZXJPZk9jdGF2ZXMgPSBNYXRoLmxvZyhtYXhWYWx1ZSAvIG1pblZhbHVlKSAvIE1hdGguTE4yO1xuICAgICAgICAvLyBDb21wdXRlIGEgbXVsdGlwbGllciBmcm9tIDAgdG8gMSBiYXNlZCBvbiBhbiBleHBvbmVudGlhbCBzY2FsZS5cbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygyLCBudW1iZXJPZk9jdGF2ZXMgKiAodmFsdWUgLSAxLjApKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICByZXR1cm4gbWF4VmFsdWUgKiBtdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2Uoc3RyZWFtLCBjb25uZWN0VG8pIHtcbiAgICAgICAgdmFyIG1lZGlhU3RyZWFtU291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSggc3RyZWFtICk7XG4gICAgICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICAgICAgbWVkaWFTdHJlYW1Tb3VyY2UuY29ubmVjdChjb25uZWN0VG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgICAgIC8vIHNlZSBodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvZW4tVVMvcXVlc3Rpb25zLzk4NDE3OVxuICAgICAgICBpZihuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYVN0cmVhbVNvdXJjZTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgd2F2ZVNoYXBlciBkaXN0b3J0aW9uIGN1cnZlIGZyb20gMCB0byAxXG4gICAgZnVuY3Rpb24gZGlzdG9ydCh2YWx1ZSkge1xuICAgICAgICB2YXIgayA9IHZhbHVlICogMTAwLFxuICAgICAgICAgICAgbiA9IDIyMDUwLFxuICAgICAgICAgICAgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KG4pLFxuICAgICAgICAgICAgZGVnID0gTWF0aC5QSSAvIDE4MDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBpICogMiAvIG4gLSAxO1xuICAgICAgICAgICAgY3VydmVbaV0gPSAoMyArIGspICogeCAqIDIwICogZGVnIC8gKE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJ2ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmYWRlOiBmdW5jdGlvbihnYWluTm9kZSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICByYW1wKGdhaW5Ob2RlLmdhaW4sIHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhblg6IGZ1bmN0aW9uKHBhbm5lck5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBwYW5YKHBhbm5lck5vZGUsIHZhbHVlICogTWF0aC5QSSAvIDQpO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0Q2FtZXJhUG9zaXRpb24nOiBzZXRDYW1lcmFQb3NpdGlvbixcbiAgICAgICAgJ3Bhbic6IHBhblhZWixcbiAgICAgICAgJ2RvcHBsZXInOiBkb3BwbGVyLFxuICAgICAgICAnZmlsdGVyJzogZmlsdGVyLFxuICAgICAgICAnZ2V0RnJlcXVlbmN5JzogZ2V0RnJlcXVlbmN5LFxuICAgICAgICAnY3JlYXRlTWljcm9waG9uZVNvdXJjZSc6IGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2UsXG4gICAgICAgICdkaXN0b3J0JyA6IGRpc3RvcnRcbiAgICB9O1xufTtcblxuLypcblxuVGhyZWVKUyBwb3NpdGlvbmFsXG5cbnNldFBvc2l0aW9uQW5kVmVsb2NpdHkgOiBmdW5jdGlvbihvYmplY3QsIGF1ZGlvTm9kZSwgeCwgeSwgeiwgZHQpIHtcbiAgICB2YXIgcCA9IG9iamVjdC5tYXRyaXhXb3JsZC5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBweCA9IHAueCwgcHkgPSBwLnksIHB6ID0gcC56O1xuICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoeCx5LHopO1xuICAgIG9iamVjdC51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgIHZhciBxID0gb2JqZWN0Lm1hdHJpeFdvcmxkLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIGR4ID0gcS54LXB4LCBkeSA9IHEueS1weSwgZHogPSBxLnotcHo7XG4gICAgaWYgKHRoaXMucG9zaXRpb25FbmFibGVkKSB7XG4gICAgICBhdWRpb05vZGUuc2V0UG9zaXRpb24ocS54LCBxLnksIHEueik7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbG9jaXR5RW5hYmxlZCkge1xuICAgICAgYXVkaW9Ob2RlLnNldFZlbG9jaXR5KGR4L2R0LCBkeS9kdCwgZHovZHQpO1xuICAgIH1cbiAgfSxcblxuICBzZXRQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCBvYmplY3Quc291bmQucGFubmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDEpO1xuICAgICAgdmFyIG0gPSBvYmplY3QubWF0cml4V29ybGQ7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuICAgICAgb2JqZWN0LnNvdW5kLnBhbm5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgIG0ubjE0ID0gbXg7XG4gICAgICBtLm4yNCA9IG15O1xuICAgICAgbS5uMzQgPSBtejtcbiAgICB9XG4gIH0sXG5cbiAgc2V0TGlzdGVuZXJQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCB0aGlzLmF1ZGlvLmNvbnRleHQubGlzdGVuZXIsIHgsIHksIHosIGR0KTtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbkVuYWJsZWQpIHtcbiAgICAgIHZhciBtID0gb2JqZWN0Lm1hdHJpeDtcbiAgICAgIHZhciBteCA9IG0ubjE0LCBteSA9IG0ubjI0LCBteiA9IG0ubjM0O1xuICAgICAgbS5uMTQgPSBtLm4yNCA9IG0ubjM0ID0gMDtcblxuICAgICAgdmFyIHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwxKTtcbiAgICAgIG0ubXVsdGlwbHlWZWN0b3IzKHZlYyk7XG4gICAgICB2ZWMubm9ybWFsaXplKCk7XG5cbiAgICAgIHZhciB1cCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsLTEsMCk7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh1cCk7XG4gICAgICB1cC5ub3JtYWxpemUoKTtcblxuICAgICAgdGhpcy5hdWRpby5jb250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHZlYy54LCB2ZWMueSwgdmVjLnosIHVwLngsIHVwLnksIHVwLnopO1xuXG4gICAgICBtLm4xNCA9IG14O1xuICAgICAgbS5uMjQgPSBteTtcbiAgICAgIG0ubjM0ID0gbXo7XG4gICAgfVxuICB9LFxuXG5cbiAgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBXZWJBdWRpbztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKTtcblxuZnVuY3Rpb24gQW5hbHlzZXIoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLy90aGlzLnNvdW5kID1cbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdQaWFubycpLmRhdGEpO1xuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnQmFzcycpLmRhdGEpO1xuICAgIC8vIDEwMjQgZmZ0IHNpemUgaXMgNTEyIHBhcnRzXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigxMDI0KTtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHZhciBkaXNwbGF5ID0gbmV3IEFuYWx5c2VyRGlzcGxheSgpO1xuXG4gICAgdmFyIHBhbmVsRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdGcmVxdWVuY2llcycpO1xuICAgIHRoaXMuc2xpZGVyU21vb3RoaW5nID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIocGFuZWxGcmVxLmVsLCAnU21vb3RoaW5nJywgMCwgMSwgMC4wMSwgdGhpcy5ub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCwgdGhpcy51cGRhdGVTbW9vdGhpbmcsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyTWluID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIocGFuZWxGcmVxLmVsLCAnTWluIGRlY2liZWxzJywgLTEwMCwgMCwgMC4xLCB0aGlzLm5vZGUubWluRGVjaWJlbHMsIHRoaXMudXBkYXRlTWluTWF4LCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlck1heCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHBhbmVsRnJlcS5lbCwgJ01heCBkZWNpYmVscycsIC0xMDAsIDAsIDAuMSwgdGhpcy5ub2RlLm1heERlY2liZWxzLCB0aGlzLnVwZGF0ZU1pbk1heCwgdGhpcyk7XG4gICAgdGhpcy5kcm9wZG93bkZGVCA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24ocGFuZWxGcmVxLmVsLCB7XG4gICAgICAgICc2NCc6IDY0LFxuICAgICAgICAnMTI4JzogMTI4LFxuICAgICAgICAnMjU2JzogMjU2LFxuICAgICAgICAnNTEyJzogNTEyLFxuICAgICAgICAnMTAyNCc6IDEwMjQsXG4gICAgICAgICcyMDQ4JzogMjA0OFxuICAgIH0sIHRoaXMudXBkYXRlRkZUU2l6ZSwgdGhpcywgdGhpcy5ub2RlLmZmdFNpemUsICdGRlQgU2l6ZScpO1xuXG4gICAgdmFyIGZyZXEgPSBkaXNwbGF5LmFkZEZyZXEodGhpcy5ub2RlKTtcbiAgICBmcmVxLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxGcmVxLmFwcGVuZChmcmVxLmNhbnZhcyk7XG5cbiAgICB2YXIgcGFuZWxXYXZlID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ1dhdmUnKTtcbiAgICB2YXIgd2F2ZSA9IGRpc3BsYXkuYWRkV2F2ZSh0aGlzLm5vZGUpO1xuICAgIHdhdmUudGhpY2tuZXNzID0gMTtcbiAgICB3YXZlLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxXYXZlLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG5cbiAgICB2YXIgcGFuZWxMZXZlbHMgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnTGV2ZWxzJyk7XG4gICAgdmFyIGxldmVscyA9IGRpc3BsYXkuYWRkTGV2ZWxzKHRoaXMubm9kZSk7XG4gICAgbGV2ZWxzLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxMZXZlbHMuYXBwZW5kKGxldmVscy5jYW52YXMpO1xufVxuXG5BbmFseXNlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuQW5hbHlzZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQW5hbHlzZXI7XG5cbkFuYWx5c2VyLnByb3RvdHlwZS51cGRhdGVTbW9vdGhpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59O1xuXG5BbmFseXNlci5wcm90b3R5cGUudXBkYXRlTWluTWF4ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLm1pbkRlY2liZWxzID0gdGhpcy5zbGlkZXJNaW4udmFsdWU7XG4gICAgdGhpcy5ub2RlLm1heERlY2liZWxzID0gdGhpcy5zbGlkZXJNYXgudmFsdWU7XG59O1xuXG5BbmFseXNlci5wcm90b3R5cGUudXBkYXRlRkZUU2l6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5ub2RlLmZmdFNpemUgPSBwYXJzZUludCh2YWx1ZSk7XG59O1xuXG5BbmFseXNlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmFseXNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFdlYkF1ZGlvID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvd2ViLWF1ZGlvLmpzJyksXG5cdEFzc2V0TG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXNzZXQtbG9hZGVyLmpzJyksXG5cdFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuXHRMb2FkaW5nQmFyID0gcmVxdWlyZSgnLi9sb2FkaW5nLWJhci5qcycpO1xuXG5mdW5jdGlvbiBBYnN0cmFjdERlbW8oZWwsIGF1ZGlvQ29udGV4dCkge1xuXHR0aGlzLmVsID0gZWw7XG5cdHRoaXMuYXVkaW8gPSBuZXcgV2ViQXVkaW8oYXVkaW9Db250ZXh0KTtcbn1cblxuQWJzdHJhY3REZW1vLnByb3RvdHlwZSA9IHtcblx0cGxheTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5hdWRpby5wbGF5KCk7XG5cdH0sXG5cdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmF1ZGlvLnBhdXNlKCk7XG5cdH0sXG5cdGxvYWQ6IGZ1bmN0aW9uKHVybCwgZm4pIHtcblx0XHRMb2FkaW5nQmFyLnNob3coKTtcblx0XHR2YXIgbG9hZGVyID0gbmV3IEFzc2V0TG9hZGVyLkxvYWRlcih1cmwpO1xuXHRcdFx0bG9hZGVyLmNyb3NzT3JpZ2luID0gdHJ1ZTtcblx0XHRcdGxvYWRlci5vblByb2dyZXNzLmFkZChmdW5jdGlvbihwKSB7XG5cdFx0XHRcdExvYWRpbmdCYXIudXBkYXRlKHApO1xuXHRcdFx0fSk7XG5cdFx0XHRsb2FkZXIub25Db21wbGV0ZS5hZGRPbmNlKGZ1bmN0aW9uKGJ1ZmZlcikge1xuXHRcdFx0XHRsb2FkZXIub25Qcm9ncmVzcy5yZW1vdmVBbGwoKTtcblx0XHRcdFx0TG9hZGluZ0Jhci5oaWRlKCk7XG5cdFx0XHRcdGZuLmNhbGwodGhpcywgYnVmZmVyKTtcblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0bG9hZGVyLmxvYWRXZWJBdWRpbyh0aGlzLmF1ZGlvLmNvbnRleHQpO1xuXHRcdHJldHVybiBsb2FkZXI7XG5cdH0sXG5cdGNyZWF0ZUdhaW5Db250cm9sczogZnVuY3Rpb24obm9kZSwgZWwpIHtcblx0XHR2YXIgdm9sID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIoZWwsICdnYWluJywgMCwgMiwgMC4xLCAxLCBmdW5jdGlvbigpIHtcblx0XHRcdG5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0fSk7XG5cdCAgICB2YXIgbXV0ZSA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKGVsLCAnbXV0ZScsICd1bm11dGUnLFxuXHQgICAgICAgIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgIG11dGUudm9sdW1lID0gbm9kZS5nYWluLnZhbHVlO1xuXHQgICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2b2wudmFsdWUgPSAwO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZvbC52YWx1ZSA9IG11dGUudm9sdW1lIHx8IDE7XG5cdCAgICAgICAgfVxuXHQgICAgKTtcblx0fSxcblx0Y29ubmVjdE1pY3JvcGhvbmU6IGZ1bmN0aW9uKG1pY3JvcGhvbmUpIHtcblx0XHR0aGlzLm1pY3JvcGhvbmUgPSBtaWNyb3Bob25lO1xuXHRcdHRoaXMubWljU291cmNlID0gdGhpcy5hdWRpby5oZWxwZXJzLmNyZWF0ZU1pY3JvcGhvbmVTb3VyY2UobWljcm9waG9uZS5zdHJlYW0sIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5fZ2Fpbik7XG5cdH0sXG5cdGRpc2Nvbm5lY3RNaWNyb3Bob25lOiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLm1pY3JvcGhvbmUpIHtcblx0XHRcdHRoaXMubWljcm9waG9uZS5kaXNjb25uZWN0KCk7XG5cdFx0XHR0aGlzLm1pY3JvcGhvbmUgPSBudWxsO1xuXHRcdH1cblx0XHRpZih0aGlzLm1pY1NvdXJjZSkge1xuXHRcdFx0dGhpcy5taWNTb3VyY2UuZGlzY29ubmVjdCgwKTtcblx0XHR9XG5cdH0sXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGF1c2UoKTtcblx0XHR0aGlzLmRpc2Nvbm5lY3RNaWNyb3Bob25lKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3REZW1vO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBBbmFseXNlckRpc3BsYXkoKSB7XG4gICAgdGhpcy5hbmFseXNlcnMgPSBbXTtcbiAgICB0aGlzLmRyYXcoKTtcbn1cblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGRGcmVxID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5GcmVxLCBub2RlLCBlbCk7XG4gICAgLyppZihlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjYW52YXMnKSB7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL3RoaXMuYW5hbHlzZXJzLnB1c2gobmV3IEFuYWx5c2VyRGlzcGxheS5IVE1MVmlldyhub2RlLCBlbCkpO1xuICAgIH0qL1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5XYXZlLCBub2RlLCBlbCk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZExldmVscyA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkRGlzcGxheShBbmFseXNlckRpc3BsYXkuTGV2ZWxzLCBub2RlLCBlbCk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZERpc3BsYXkgPSBmdW5jdGlvbihDbGFzcywgbm9kZSwgZWwpIHtcbiAgICBlbCA9IGVsIHx8IHRoaXMuZ2V0Q2FudmFzKCk7XG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQ2xhc3Mobm9kZSwgZWwpO1xuICAgIHRoaXMuYW5hbHlzZXJzLnB1c2goZGlzcGxheSk7XG4gICAgcmV0dXJuIGRpc3BsYXk7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmdldENhbnZhcyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3aWR0aCA9IHdpZHRoIHx8IDUxMjtcbiAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMjU2O1xuICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgYy53aWR0aCA9IHdpZHRoO1xuICAgIGMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiBjO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgdmFyIGwgPSB0aGlzLmFuYWx5c2Vycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5hbmFseXNlcnNbaV0uZHJhdygpO1xuICAgIH1cbn07XG5cbi8vIGZyZXF1ZW5jaWVzXG5cbkFuYWx5c2VyRGlzcGxheS5GcmVxID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGVsO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LkZyZXEucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBmcmVxdWVuY3lCaW5Db3VudCA9IHRoaXMubm9kZS5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoL2ZyZXF1ZW5jeUJpbkNvdW50KSxcbiAgICAgICAgYmFyU3BhY2luZyA9IDA7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyZXF1ZW5jeUJpbkNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBtYWduaXR1ZGUgLyAyNTY7XG4gICAgICAgIHZhciBodWUgPSBpL2ZyZXF1ZW5jeUJpbkNvdW50ICogMzYwO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2hzbCgnICsgaHVlICsgJywgMTAwJSwgNTAlKSc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChiYXJXaWR0aCAqIGksIGhlaWdodCwgYmFyV2lkdGggLSBiYXJTcGFjaW5nLCAwIC0gaGVpZ2h0ICogcGVyY2VudCk7XG4gICAgfVxufTtcblxuLy8gd2F2ZWZvcm1cblxuQW5hbHlzZXJEaXNwbGF5LldhdmUgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGhpY2tuZXNzID0gMTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBmcmVxdWVuY3lCaW5Db3VudCA9IHRoaXMubm9kZS5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoL2ZyZXF1ZW5jeUJpbkNvdW50KTtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyZXF1ZW5jeUJpbkNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBtYWduaXR1ZGUgLyAyNTY7XG4gICAgICAgIHZhciBodWUgPSBpL2ZyZXF1ZW5jeUJpbkNvdW50ICogMzYwO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ2hzbCgnICsgaHVlICsgJywgMTAwJSwgNTAlKSc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChiYXJXaWR0aCAqIGksIGhlaWdodCAtIGhlaWdodCAqIHBlcmNlbnQgLSAxLCB0aGlzLnRoaWNrbmVzcywgdGhpcy50aGlja25lc3MpO1xuICAgIH1cbn07XG5cbkFuYWx5c2VyRGlzcGxheS5MZXZlbHMgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LkxldmVscy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50O1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxQnl0ZURhdGEpO1xuXG4gICAgdmFyIGxlbmd0aCA9IGZyZXFCeXRlRGF0YS5sZW5ndGgsXG4gICAgICAgIHRvdGFsID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IGZyZXFCeXRlRGF0YVtpXTtcbiAgICB9XG4gICAgdmFyIGF2ZXJhZ2UgPSB0b3RhbCAvIGxlbmd0aDtcbiAgICB2YXIgcGVyY2VudCA9IGF2ZXJhZ2UgLyAxMjg7XG5cbiAgICB2YXIgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgd2lkdGggKiBwZXJjZW50LCAwKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ2hzbCgxMjgsIDEwMCUsIDUwJSknKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ2hzbCgzNjAsIDEwMCUsIDUwJSknKTtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGggKiBwZXJjZW50LCBoZWlnaHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmFseXNlckRpc3BsYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIExvYWRpbmdCYXIoKSB7XG4gICAgdmFyIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Mb2FkZXInKSxcbiAgICAgICAgbGFiZWwgPSBsb2FkZXIucXVlcnlTZWxlY3RvcignLkxvYWRlci1sYWJlbCcpO1xuICAgICAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGUocCkge1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHAgKiAxMDApICsgJyUnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdMb2FkZXItLWhpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdMb2FkZXItLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgICd1cGRhdGUnOiB1cGRhdGUsXG4gICAgICAgICdzaG93Jzogc2hvdyxcbiAgICAgICAgJ2hpZGUnOiBoaWRlXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9hZGluZ0JhcigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBVSUNvbXBvbmVudHMoKSB7XG59XG5cbi8vIGhlbHBlcnNcblxuZnVuY3Rpb24gYWRkS2V5RG93bihrZXksIGZuLCBjb250ZXh0KSB7XG4gICAgaWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9uS2V5RG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgICAgIHZhciByZW1vdmVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVtb3ZlS2V5O1xuICAgIH1cbn1cblxuLypcbiAqIFNsaWRlclxuICovXG5cblVJQ29tcG9uZW50cy5TbGlkZXIgPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsLCBtaW4sIG1heCwgc3RlcCwgdmFsdWUsIGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxibC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgbGJsLmNsYXNzTmFtZSA9ICdTbGlkZXItbGFiZWwnO1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdTbGlkZXItaW5wdXQnO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBtaW4pO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsIG1heCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHN0ZXApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCB8fCB0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dC5jbGFzc05hbWUgPSAnU2xpZGVyLW91dHB1dCc7XG4gICAgICAgIG91dHB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdTbGlkZXIgU2xpZGVyLS1sYXJnZSc7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYmwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvdXRwdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLmVsID0gZm9ybTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuU2xpZGVyLnByb3RvdHlwZSwgJ3ZhbHVlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBQYW5lbFxuICovXG5cblVJQ29tcG9uZW50cy5QYW5lbCA9IGZ1bmN0aW9uKHBhcmVudCwgdGl0bGUpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnUGFuZWwnO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICAgIGlmKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59O1xuXG5VSUNvbXBvbmVudHMuUGFuZWwucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG59O1xuXG5VSUNvbXBvbmVudHMuUGFuZWwucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUsICd0aXRsZScsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmKCF0aGlzLnRpdGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmluc2VydEJlZm9yZSh0aGlzLnRpdGxlRWwsIHRoaXMuZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXRsZUVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG4vKlxuICogQnV0dG9uXG4gKi9cblxuVUlDb21wb25lbnRzLkJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIGZuLCBjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCBmbiwgaW5wdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gaW5wdXQ7XG59O1xuXG4vKlxuICogVG9nZ2xlIEJ1dHRvblxuICovXG5cblVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24gPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsQSwgbGFiZWxCLCBmbkEsIGZuQiwgY29udGV4dCwga2V5KSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbEI7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuaW5uZXJIVE1MID09PSBsYWJlbEEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gbGFiZWxCO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGxhYmVsQTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBmbkEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBmbkEuY2FsbChjb250ZXh0IHx8IHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbGFiZWxCO1xuICAgICAgICAgICAgaWYodHlwZW9mIGZuQiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGZuQi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCB0b2dnbGUsIGlucHV0KTtcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbGFiZWxCO1xuICAgIH07XG4gICAgdGhpcy5lbCA9IGlucHV0O1xufTtcblxuLypcbiAqIERyb3Bkb3duXG4gKi9cblxuVUlDb21wb25lbnRzLkRyb3Bkb3duID0gZnVuY3Rpb24ocGFyZW50LCBvcHRpb25zLCBmbiwgY29udGV4dCwgc2VsZWN0ZWRWYWx1ZSwgdGl0bGUpIHtcbiAgICB2YXIgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkZC5jbGFzc05hbWUgPSAnRHJvcGRvd24nO1xuICAgIGZvcih2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uc1trZXldKTtcbiAgICAgICAgby5pbm5lckhUTUwgPSBrZXk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG8pO1xuICAgICAgICBpZihvcHRpb25zW2tleV0gPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCwgZGQub3B0aW9uc1tkZC5zZWxlY3RlZEluZGV4XS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgaWYodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGguY2xhc3NOYW1lID0gJ0Ryb3Bkb3duLXRpdGxlJztcbiAgICAgICAgICAgIGguaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRkKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGRkO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5Ecm9wZG93bi5wcm90b3R5cGUsICd2YWx1ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuRHJvcGRvd24ucHJvdG90eXBlLCAndGV4dCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVSUNvbXBvbmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBDb21wcmVzc29yKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIC8vIG1hc3RlciBnYWluID4gY29tcHJlc3NvciA+IGRlc3RpbmF0aW9uXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5jb21wcmVzc29yKCk7XG4gICAgLy90aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICAvL3RoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMubm9kZSk7XG5cbiAgICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0NvbXByZXNzb3InKTtcbiAgICB0aGlzLnNsaWRlclRocmVzaG9sZCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd0aHJlc2hvbGQnLCAtMTAwLCAwLCAwLjEsIHRoaXMubm9kZS50aHJlc2hvbGQudmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlcktuZWUgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAna25lZScsIDAsIDQwLCAwLjEsIHRoaXMubm9kZS5rbmVlLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJSYXRpbyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdyYXRpbycsIDEsIDIwLCAwLjEsIHRoaXMubm9kZS5yYXRpby52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyQXR0YWNrID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ2F0dGFjaycsIDAsIDEsIDAuMDAwMSwgdGhpcy5ub2RlLmF0dGFjay52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyUmVsZWFzZSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdyZWxlYXNlJywgMCwgMSwgMC4wMDAxLCB0aGlzLm5vZGUucmVsZWFzZS52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMucGFuZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0aGlzLm9uQnV0dG9uID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24odGhpcy5wYW5lbC5lbCwgJ1RVUk4gT0ZGJywgJ1RVUk4gT04nLCB0aGlzLm9mZiwgdGhpcy5vbiwgdGhpcyk7XG5cbiAgICB2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuICAgIGZvciAodmFyIGkgaW4gZmlsZXMpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gdGhpcy5hdWRpby5hZGQoZmlsZXNbaV0uZGF0YSk7XG4gICAgICAgIHNvdW5kLmFkZE5vZGUodGhpcy5hdWRpby5ub2RlRmFjdG9yeS5nYWluKCkpO1xuICAgICAgICB2YXIgY29udHJvbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsIGkpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNvdW5kLl9ub2RlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdhaW5Db250cm9scyhzb3VuZC5fbm9kZVtqXSwgY29udHJvbC5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkNvbXByZXNzb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkNvbXByZXNzb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29tcHJlc3NvcjtcblxuQ29tcHJlc3Nvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLnRocmVzaG9sZC52YWx1ZSA9IHRoaXMuc2xpZGVyVGhyZXNob2xkLnZhbHVlO1xuICAgIHRoaXMubm9kZS5rbmVlLnZhbHVlID0gdGhpcy5zbGlkZXJLbmVlLnZhbHVlO1xuICAgIHRoaXMubm9kZS5yYXRpby52YWx1ZSA9IHRoaXMuc2xpZGVyUmF0aW8udmFsdWU7XG4gICAgdGhpcy5ub2RlLmF0dGFjay52YWx1ZSA9IHRoaXMuc2xpZGVyQXR0YWNrLnZhbHVlO1xuICAgIHRoaXMubm9kZS5yZWxlYXNlLnZhbHVlID0gdGhpcy5zbGlkZXJSZWxlYXNlLnZhbHVlO1xufTtcblxuQ29tcHJlc3Nvci5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcbn07XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8ucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xufTtcblxuQ29tcHJlc3Nvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wcmVzc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBEZWxheShlbCwgYXVkaW9Db250ZXh0KSB7XG4gIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gIHRoaXMuc291bmQgPSB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdQaWFubycpLmRhdGEpO1xuICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmRlbGF5KDAuNSk7XG5cbiAgdGhpcy5nYWluTm9kZSA9IHRoaXMuYXVkaW8uY29udGV4dC5jcmVhdGVHYWluTm9kZSgpO1xuICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjU7XG5cbiAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMuZ2Fpbk5vZGUpO1xuXG4gIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2RlKTtcblxuICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0RlbGF5Jyk7XG4gIHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCB0aGlzLm5vZGUuZGVsYXlUaW1lLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG59XG5cbkRlbGF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5EZWxheS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEZWxheTtcblxuRGVsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMubm9kZS5kZWxheVRpbWUudmFsdWUgPSB2YWx1ZTtcbn07XG5cbkRlbGF5LnByb3RvdHlwZS5jb25uZWN0TWljcm9waG9uZSA9IGZ1bmN0aW9uKG1pY3JvcGhvbmUpIHtcbiAgdGhpcy5taWNyb3Bob25lID0gbWljcm9waG9uZTtcbiAgdGhpcy5taWNTb3VyY2UgPSB0aGlzLmF1ZGlvLmhlbHBlcnMuY3JlYXRlTWljcm9waG9uZVNvdXJjZShtaWNyb3Bob25lLnN0cmVhbSwgdGhpcy5ub2RlKTtcbiAgLy90aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLl9nYWluKTtcbn07XG5cbkRlbGF5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB0aGlzLnBhbmVsLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWxheTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIERpc3RvcnRpb24oZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLy8gbWFzdGVyIGdhaW4gPiBjb21wcmVzc29yID4gZGVzdGluYXRpb25cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmRpc3RvcnRpb24oKTtcbiAgICAvL3RoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIC8vdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnRGlzdG9ydGlvbicpO1xuICAgIHRoaXMuc2xpZGVyID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ2Ftb3VudCcsIDAsIDEsIDAuMDAwMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMucGFuZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0aGlzLm9uQnV0dG9uID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24odGhpcy5wYW5lbC5lbCwgJ1RVUk4gT0ZGJywgJ1RVUk4gT04nLCB0aGlzLm9mZiwgdGhpcy5vbiwgdGhpcyk7XG5cbiAgICB2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuICAgIGZvciAodmFyIGkgaW4gZmlsZXMpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gdGhpcy5hdWRpby5hZGQoZmlsZXNbaV0uZGF0YSk7XG4gICAgICAgIHNvdW5kLmFkZE5vZGUodGhpcy5hdWRpby5ub2RlRmFjdG9yeS5nYWluKCkpO1xuICAgICAgICB2YXIgY29udHJvbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsIGkpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNvdW5kLl9ub2RlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdhaW5Db250cm9scyhzb3VuZC5fbm9kZVtqXSwgY29udHJvbC5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRpc3RvcnRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkRpc3RvcnRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGlzdG9ydGlvbjtcblxuRGlzdG9ydGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLmN1cnZlID0gdGhpcy5hdWRpby5oZWxwZXJzLmRpc3RvcnQodGhpcy5zbGlkZXIudmFsdWUpO1xufTtcblxuRGlzdG9ydGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcbn07XG5cbkRpc3RvcnRpb24ucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8ucmVtb3ZlTm9kZSh0aGlzLm5vZGUpO1xufTtcblxuRGlzdG9ydGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXN0b3J0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKTtcblxuZnVuY3Rpb24gRmlsdGVyKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnRHJ1bXMnKS5kYXRhKTtcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmZpbHRlci5sb3dwYXNzKCk7XG4gICAgdGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cbiAgICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0ZpbHRlciA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0JpcXVhZEZpbHRlck5vZGVcIj4rPC9hPicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHRoaXMucGFuZWwuZWwsIE1vZGVsLmZpbHRlciwgdGhpcy51cGRhdGVGaWx0ZXJUeXBlLCB0aGlzKTtcblxuICAgIHRoaXMuc2xpZGVyRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdGcmVxdWVuY3knLCAwLCAxLCAwLjAxLCAwLjUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclF1YWwgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnUXVhbGl0eScsIDAsIDEwMDAsIDAuMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyR2FpbiA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdHYWluJywgLTQwLCA0MCwgMC4xLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG59XG5cbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuRmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZpbHRlcjtcblxuRmlsdGVyLnByb3RvdHlwZS51cGRhdGVGaWx0ZXJUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLnR5cGUgPSB0aGlzLmRyb3Bkb3duLnRleHQ7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8uaGVscGVycy5maWx0ZXIodGhpcy5ub2RlLCB0aGlzLnNsaWRlckZyZXEudmFsdWUsIHRoaXMuc2xpZGVyUXVhbC52YWx1ZSwgdGhpcy5zbGlkZXJHYWluLnZhbHVlKTtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTG9hZGluZ0JhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9sb2FkaW5nLWJhci5qcycpLFxyXG5cdFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXHJcblx0S2V5Ym9hcmQgPSByZXF1aXJlKCcuLi91dGlscy9rZXlib2FyZC5qcycpLFxyXG5cdFJldmVyYiA9IHJlcXVpcmUoJy4vcmV2ZXJiLmpzJyksXHJcblx0QW5hbHlzZXIgPSByZXF1aXJlKCcuL2FuYWx5c2VyLmpzJyksXHJcblx0TXVsdGlUcmFjayA9IHJlcXVpcmUoJy4vbXVsdGktdHJhY2suanMnKSxcclxuXHRQYW5UaHJlZUQgPSByZXF1aXJlKCcuL3Bhbi10aHJlZS1kLmpzJyksXHJcblx0RmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXIuanMnKSxcclxuXHRNaWNyb3Bob25lSW5wdXQgPSByZXF1aXJlKCcuL21pY3JvcGhvbmUtaW5wdXQuanMnKSxcclxuXHRPc2NpbGxhdG9yID0gcmVxdWlyZSgnLi9vc2NpbGxhdG9yLmpzJyksXHJcblx0TWljcm9waG9uZSA9IHJlcXVpcmUoJy4uL3V0aWxzL21pY3JvcGhvbmUuanMnKSxcclxuXHRDb21wcmVzc29yID0gcmVxdWlyZSgnLi9jb21wcmVzc29yLmpzJyksXHJcblx0RGlzdG9ydGlvbiA9IHJlcXVpcmUoJy4vZGlzdG9ydGlvbi5qcycpLFxyXG5cdERlbGF5ID0gcmVxdWlyZSgnLi9kZWxheS5qcycpLFxyXG5cdFNjcmlwdFByb2Nlc3NvciA9IHJlcXVpcmUoJy4vc2NyaXB0LXByb2Nlc3Nvci5qcycpO1xyXG5cclxuZnVuY3Rpb24gR1VJKGVsKSB7XHJcblx0dGhpcy5lbCA9IGVsO1xyXG5cdHRoaXMuYWRkTG9hZGVyKCk7XHJcbn1cclxuXHJcbkdVSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGF1ZGlvQ29udGV4dCkge1xyXG5cdHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xyXG5cdExvYWRpbmdCYXIuaGlkZSgpO1xyXG5cclxuXHR0aGlzLm1lbnUgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ1JldmVyYicsIHRoaXMucmV2ZXJiLCB0aGlzLCBLZXlib2FyZC5PTkUpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0FuYWx5c2VyJywgdGhpcy5hbmFseXNlciwgdGhpcywgS2V5Ym9hcmQuVFdPKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdNdWx0aVRyYWNrJywgdGhpcy5tdWx0aVRyYWNrLCB0aGlzLCBLZXlib2FyZC5USFJFRSk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnUGFuJywgdGhpcy5wYW4sIHRoaXMsIEtleWJvYXJkLkZPVVIpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0ZpbHRlcicsIHRoaXMuZmlsdGVyLCB0aGlzLCBLZXlib2FyZC5GSVZFKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdNaWNyb3Bob25lJywgdGhpcy5taWNyb3Bob25lSW5wdXQsIHRoaXMsIEtleWJvYXJkLlNJWCk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnT3NjaWxsYXRvcicsIHRoaXMub3NjaWxsYXRvciwgdGhpcywgS2V5Ym9hcmQuU0VWRU4pO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0NvbXByZXNzb3InLCB0aGlzLmNvbXByZXNzb3IsIHRoaXMsIEtleWJvYXJkLkVJR0hUKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdEaXN0b3J0aW9uJywgdGhpcy5kaXN0b3J0aW9uLCB0aGlzLCBLZXlib2FyZC5OSU5FKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdEZWxheScsIHRoaXMuZGVsYXksIHRoaXMsIEtleWJvYXJkLlpFUk8pO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ1NjcmlwdCcsIHRoaXMuc2NpcHRQcm9jZXNzb3IsIHRoaXMpO1xyXG5cclxuXHR0aGlzLmNvbnRyb2xzID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsKTtcclxuXHR0aGlzLnBsYXlCdXR0b24gPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbih0aGlzLmNvbnRyb2xzLmVsLCAnUExBWScsICdQQVVTRScsIHRoaXMucGxheSwgdGhpcy5wYXVzZSwgdGhpcywgS2V5Ym9hcmQuU1BBQ0VCQVIpO1xyXG5cdHRoaXMubWljcm9waG9uZSA9IG5ldyBNaWNyb3Bob25lKCk7XHJcblx0aWYodGhpcy5taWNyb3Bob25lLmlzU3VwcG9ydGVkKSB7XHJcblx0XHR0aGlzLm1pY0J1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMuY29udHJvbHMuZWwsICdNSUMgT04nLCAnTUlDIE9GRicsIHRoaXMuY29ubmVjdE1pY3JvcGhvbmUsIHRoaXMuZGlzY29ubmVjdE1pY3JvcGhvbmUsIHRoaXMsIEtleWJvYXJkLk0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kZW1vSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlbW9Ib2xkZXIpO1xyXG5cclxuXHR0aGlzLmRlbGF5KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnJldmVyYiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFJldmVyYih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYW5hbHlzZXIgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBBbmFseXNlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubXVsdGlUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKHRydWUpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBNdWx0aVRyYWNrKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wYW4gPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBQYW5UaHJlZUQodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IEZpbHRlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubWljcm9waG9uZUlucHV0ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSwgdHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE1pY3JvcGhvbmVJbnB1dCh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUub3NjaWxsYXRvciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKHRydWUpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBPc2NpbGxhdG9yKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jb21wcmVzc29yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgQ29tcHJlc3Nvcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZGlzdG9ydGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IERpc3RvcnRpb24odGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnNjaXB0UHJvY2Vzc29yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgU2NyaXB0UHJvY2Vzc29yKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IERlbGF5KHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jb25uZWN0TWljcm9waG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMubWljcm9waG9uZS5vbkNvbm5lY3RlZC5hZGQodGhpcy5taWNyb3Bob25lQ29ubmVjdGVkLCB0aGlzKTtcclxuICAgIHRoaXMubWljcm9waG9uZS5vbkRlbmllZC5hZGQodGhpcy5taWNyb3Bob25lRXJyb3IsIHRoaXMpO1xyXG4gICAgdGhpcy5taWNyb3Bob25lLm9uRXJyb3IuYWRkKHRoaXMubWljcm9waG9uZUVycm9yLCB0aGlzKTtcclxuICAgIHRoaXMubWljcm9waG9uZS5jb25uZWN0KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLm1pY3JvcGhvbmVDb25uZWN0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8uY29ubmVjdE1pY3JvcGhvbmUodGhpcy5taWNyb3Bob25lKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubWljcm9waG9uZUVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5taWNCdXR0b24ucmVzZXQoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZGlzY29ubmVjdE1pY3JvcGhvbmUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8uZGlzY29ubmVjdE1pY3JvcGhvbmUoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuY2xlYXJEZW1vID0gZnVuY3Rpb24oaGlkZU1pY3JvcGhvbmUsIGhpZGVDb250cm9scykge1xyXG5cdGlmKHRoaXMuZGVtbykge1xyXG5cdFx0dGhpcy5kZW1vLmRlc3Ryb3koKTtcclxuXHR9XHJcblx0dGhpcy5kZW1vSG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdHRoaXMucGxheUJ1dHRvbi5yZXNldCgpO1xyXG5cdGlmKHRoaXMubWljQnV0dG9uKSB7XHJcblx0XHR0aGlzLm1pY0J1dHRvbi5yZXNldCgpO1xyXG5cdH1cclxuXHJcblx0aWYoaGlkZU1pY3JvcGhvbmUpIHtcclxuXHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHJcblx0aWYoaGlkZUNvbnRyb2xzKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuY29udHJvbHMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0fVxyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLnBsYXkoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8ucGF1c2UoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYWRkTG9hZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0TG9hZGluZ0Jhci5zaG93KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnVwZGF0ZUxvYWRQcm9ncmVzcyA9IGZ1bmN0aW9uKHApIHtcclxuXHRMb2FkaW5nQmFyLnVwZGF0ZShwKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR1VJO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKSxcbiAgICBNaWNyb3Bob25lID0gcmVxdWlyZSgnLi4vdXRpbHMvbWljcm9waG9uZS5qcycpO1xuXG5mdW5jdGlvbiBNaWNyb3Bob25lSW5wdXQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5wbmxJbmZvID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnQWxsb3cgbWljb3Bob25lIHRvIGJlZ2luJyk7XG5cbiAgICB0aGlzLm1pY3JvcGhvbmUgPSBuZXcgTWljcm9waG9uZSgpO1xuXG4gICAgaWYodGhpcy5taWNyb3Bob25lLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5vbkNvbm5lY3RlZC5hZGQodGhpcy5vblN1Y2Nlc3MsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25EZW5pZWQuYWRkKHRoaXMub25EZW5pZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25FcnJvci5hZGQodGhpcy5vbkVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBnZXRVc2VyTWVkaWEgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG59XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pY3JvcGhvbmVJbnB1dDtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5nZXRNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfKCB7YXVkaW86dHJ1ZX0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzZWxmLm9uU3VjY2VzcyhzdHJlYW0pO1xuICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0pO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAvL3RoaXMubWljcm9waG9uZS5jcmVhdGVXZWJBdWRpb1NvdXJjZSh0aGlzLmF1ZGlvLmNvbnRleHQsIHRoaXMuYXVkaW8uX2dhaW4pO1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuYW5hbHlzZXIoMTAyNCk7XG4gICAgdGhpcy5jb25uZWN0TWljcm9waG9uZSh0aGlzLm1pY3JvcGhvbmUpO1xuICAgIC8vdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgLy90aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYXVkaW8uYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG4gICAgdmFyIHBhbmVsV2F2ZSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCwgJ01pY3JvcGhvbmUnKTtcbiAgICB2YXIgd2F2ZSA9IGRpc3BsYXkuYWRkV2F2ZSh0aGlzLm5vZGUpO1xuICAgIHdhdmUudGhpY2tuZXNzID0gMTtcbiAgICB3YXZlLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxXYXZlLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG5cbiAgICB0aGlzLnBubEluZm8ucmVtb3ZlKCk7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLm9uRGVuaWVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBQZXJtaXNzaW9uIGRlbmllZC4gWW91IGNhbiB1bmRvIHRoaXMgYnkgY2xpY2tpbmcgdGhlIGNhbWVyYSBpY29uIHdpdGggdGhlIHJlZCBjcm9zcyBpbiB0aGUgYWRkcmVzcyBiYXIuJyk7XG4gICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuZGlzcGxheUVycm9yKCdFUlJPUjogJyArIGUpO1xuICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbn07XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUuZGlzcGxheUVycm9yID0gZnVuY3Rpb24obXNnKSB7XG4gICAgaWYoIXRoaXMucG5sRXJyb3IpIHtcbiAgICAgICAgdGhpcy5wbmxFcnJvciA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMucG5sRXJyb3IuZWwuY2xhc3NMaXN0LmFkZCgnUGFuZWwtLWVycm9yJyk7XG4gICAgfVxuICAgIHRoaXMucG5sRXJyb3IudGl0bGUgPSBtc2c7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZih0aGlzLm1pY3JvcGhvbmUpIHtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lID0gbnVsbDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvcGhvbmVJbnB1dDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBNdWx0aVRyYWNrKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTXVsdGlUcmFjay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTXVsdGlUcmFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aVRyYWNrO1xuXG5NdWx0aVRyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpVHJhY2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIE9zY2lsbGF0b3IoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigyMDQ4KTtcbiAgICB0aGlzLmF1ZGlvLmFkZE5vZGUodGhpcy5ub2RlKTtcbiAgICAvL3RoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIC8vdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBcbiAgICB0aGlzLnBubCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCwgJ3NpbmUnKTtcbiAgICB0aGlzLmRyb3Bkb3duVHlwZSA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wbmwuZWwsIE1vZGVsLndhdmUsIHRoaXMudXBkYXRlVHlwZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wbmwuZWwsICdGcmVxdWVuY3knLCAwLCAxLCAwLjAxLCAwLjEsIHRoaXMudXBkYXRlRnJlcSwgdGhpcyk7XG4gICAgXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG4gICAgdmFyIHdhdmUgPSBkaXNwbGF5LmFkZFdhdmUodGhpcy5ub2RlKTtcbiAgICB3YXZlLnRoaWNrbmVzcyA9IDE7XG4gICAgd2F2ZS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHRoaXMucG5sLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG59XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbk9zY2lsbGF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3NjaWxsYXRvcjtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUudXBkYXRlVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnR5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnBubC50aXRsZSA9IHZhbHVlO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUudXBkYXRlRnJlcSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuYXVkaW8uaGVscGVycy5nZXRGcmVxdWVuY3kodmFsdWUpO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3NjID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLm9zYy50eXBlID0gdGhpcy5kcm9wZG93blR5cGUudmFsdWU7XG4gICAgdGhpcy5vc2MuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5hdWRpby5oZWxwZXJzLmdldEZyZXF1ZW5jeSh0aGlzLnNsaWRlckZyZXEudmFsdWUpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4udmFsdWUgPSAwLjI7XG4gICAgdGhpcy5vc2MuY29ubmVjdCh0aGlzLmF1ZGlvLl9nYWluKTtcbiAgICB0aGlzLm9zYy5zdGFydCgwKTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnN0b3AoMCk7XG4gICAgdGhpcy5vc2MgPSBudWxsO1xufTtcblxuT3NjaWxsYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPc2NpbGxhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIFBhblRocmVlRChlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LnBhbigpO1xuICAgIHRoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdQYW4nKTtcblxuICAgIC8vdGhpcy5zbGlkZXJYID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3gnLCAtTWF0aC5QSSwgTWF0aC5QSSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclkgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneScsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJaID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3onLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5QYW5UaHJlZUQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblBhblRocmVlRC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYW5UaHJlZUQ7XG5cblBhblRocmVlRC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5oZWxwZXJzLnBhbih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyWC52YWx1ZSwgdGhpcy5zbGlkZXJZLnZhbHVlLCB0aGlzLnNsaWRlcloudmFsdWUpO1xufTtcblxuUGFuVGhyZWVELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuVGhyZWVEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBSZXZlcmIoZWwsIGF1ZGlvQ29udGV4dCkge1xuXHRBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuXHR0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcblx0dGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5yZXZlcmIoKTtcblx0dGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cblx0dGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdSZXZlcmInKTtcblx0dGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuaW1wdWxzZSwgdGhpcy51cGRhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXG5cdHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCAxLCB0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlLCB0aGlzKTtcblx0dGhpcy5zbGlkZXJEZWNheSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdkZWNheScsIDAsIDIwLCAwLjEsIDUsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xufVxuXG5SZXZlcmIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblJldmVyYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXZlcmI7XG5cblJldmVyYi5wcm90b3R5cGUuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHRoaXMuc2xpZGVyU2Vjb25kcy52YWx1ZSwgdGhpcy5zbGlkZXJEZWNheS52YWx1ZSk7XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLnVwZGF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmKHZhbHVlID09PSAnJykgeyByZXR1cm47IH1cblx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR0aGlzLnNsaWRlckRlY2F5LmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG5cdHN3aXRjaCh2YWx1ZSkge1xuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdHRoaXMuc2xpZGVyU2Vjb25kcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5sb2FkKHZhbHVlICsgTW9kZWwuZXh0ZW5zaW9uLCB0aGlzLmFwcGx5SW1wdWxzZSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5hcHBseUltcHVsc2UgPSBmdW5jdGlvbihidWZmZXIpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbn07XG5cblJldmVyYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0dGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKTtcblxuZnVuY3Rpb24gU2NyaXB0UHJvY2Vzc29yKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3Rvcnkuc2NyaXB0UHJvY2Vzc29yKDIwNDgsIDAsIDEsIHRoaXMub25Qcm9jZXNzLCB0aGlzKTtcblxuICAgIHRoaXMucG5sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnd2hpdGUgbm9pc2UnKTtcbi8vICAgIHRoaXMuZHJvcGRvd25UeXBlID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bih0aGlzLnBubC5lbCwgTW9kZWwud2F2ZSwgdGhpcy51cGRhdGVUeXBlLCB0aGlzKTtcblxufVxuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JpcHRQcm9jZXNzb3I7XG5cblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUub25Qcm9jZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgb3V0cHV0ID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgIHZhciBsID0gb3V0cHV0Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBvdXRwdXRbaV0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbn07XG5cblNjcmlwdFByb2Nlc3Nvci5wcm90b3R5cGUudXBkYXRlVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIXRoaXMub3NjKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3NjLnR5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnBubC50aXRsZSA9IHZhbHVlO1xufTtcblxuU2NyaXB0UHJvY2Vzc29yLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5hZGROb2RlKHRoaXMubm9kZSk7XG59O1xuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5yZW1vdmVOb2RlKHRoaXMubm9kZSk7XG59O1xuXG5TY3JpcHRQcm9jZXNzb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2NyaXB0UHJvY2Vzc29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZSgnLi9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcycpLFxuXHRBc3NldExvYWRlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcycpLFxuXHRNb2RlbCA9IHJlcXVpcmUoJy4vYXBwL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyksXG5cdEdVSSA9IHJlcXVpcmUoJy4vYXBwL3ZpZXcvZ3VpLmpzJyk7XG5cbnJlcXVpcmUoJy4vYXBwL3V0aWxzL3JhZi1wb2x5ZmlsbC5qcycpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cdHRoaXMuaW5pdCgpO1xufVxuXG5BcHAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcblx0dGhpcy5ndWkgPSBuZXcgR1VJKGRvY3VtZW50LmJvZHkpO1xuXHR0aGlzLmxvYWRlciA9IG5ldyBBc3NldExvYWRlcigpO1xuXG5cdHRoaXMubG9nKCk7XG5cdHRoaXMubG9hZCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1zZyA9ICdBdWRpbyBNYW5hZ2VyLiBTdXBwb3J0ZWQ6JyArIHRoaXMuYXVkaW8uaXNTdXBwb3J0ZWQoKSArXG5cdCcgV2ViQXVkaW9BUEk6JyArIHRoaXMuYXVkaW8ud2ViQXVkaW9TdXBwb3J0ZWQoKSArXG5cdCcgVG91Y2hMb2NrZWQ6JyArIHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0Y29uc29sZS5sb2cobXNnKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmxvYWRlci50b3VjaExvY2tlZCA9IHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0dGhpcy5sb2FkZXIud2ViQXVkaW9Db250ZXh0ID0gdGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQ7XG5cdHRoaXMubG9hZGVyLmNyb3NzT3JpZ2luID0gdHJ1ZTtcblxuXHRNb2RlbC5leHRlbnNpb24gPSB0aGlzLmF1ZGlvLmdldEV4dGVuc2lvbigpO1xuXHR2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuXHRmb3IgKHZhciBpIGluIGZpbGVzKSB7XG5cdFx0dmFyIGZpbGUgPSBmaWxlc1tpXTtcblx0XHRmaWxlLnVybCA9IGZpbGUudXJsICsgTW9kZWwuZXh0ZW5zaW9uO1xuXHRcdHRoaXMubG9hZGVyLmFkZChmaWxlLnVybCk7XG5cdH1cblxuXHR0aGlzLmxvYWRlci5vblByb2dyZXNzLmFkZCh0aGlzLmd1aS51cGRhdGVMb2FkUHJvZ3Jlc3MsIHRoaXMuZ3VpKTtcblx0dGhpcy5sb2FkZXIub25Db21wbGV0ZS5hZGQodGhpcy5sb2FkQ29tcGxldGUsIHRoaXMpO1xuXHR0aGlzLmxvYWRlci5zdGFydCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS5kYXRhID0gdGhpcy5sb2FkZXIuZ2V0KGZpbGUudXJsKS5kYXRhO1xuXHR9XG5cdHRoaXMuZ3VpLmluaXQodGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQpO1xufTtcblxubmV3IEFwcCgpO1xuIiwiLypqc2xpbnQgb25ldmFyOnRydWUsIHVuZGVmOnRydWUsIG5ld2NhcDp0cnVlLCByZWdleHA6dHJ1ZSwgYml0d2lzZTp0cnVlLCBtYXhlcnI6NTAsIGluZGVudDo0LCB3aGl0ZTpmYWxzZSwgbm9tZW46ZmFsc2UsIHBsdXNwbHVzOmZhbHNlICovXG4vKmdsb2JhbCBkZWZpbmU6ZmFsc2UsIHJlcXVpcmU6ZmFsc2UsIGV4cG9ydHM6ZmFsc2UsIG1vZHVsZTpmYWxzZSwgc2lnbmFsczpmYWxzZSAqL1xuXG4vKiogQGxpY2Vuc2VcbiAqIEpTIFNpZ25hbHMgPGh0dHA6Ly9taWxsZXJtZWRlaXJvcy5naXRodWIuY29tL2pzLXNpZ25hbHMvPlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBBdXRob3I6IE1pbGxlciBNZWRlaXJvc1xuICogVmVyc2lvbjogMS4wLjAgLSBCdWlsZDogMjY4ICgyMDEyLzExLzI5IDA1OjQ4IFBNKVxuICovXG5cbihmdW5jdGlvbihnbG9iYWwpe1xuXG4gICAgLy8gU2lnbmFsQmluZGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QgdGhhdCByZXByZXNlbnRzIGEgYmluZGluZyBiZXR3ZWVuIGEgU2lnbmFsIGFuZCBhIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgICAqIDxiciAvPi0gPHN0cm9uZz5UaGlzIGlzIGFuIGludGVybmFsIGNvbnN0cnVjdG9yIGFuZCBzaG91bGRuJ3QgYmUgY2FsbGVkIGJ5IHJlZ3VsYXIgdXNlcnMuPC9zdHJvbmc+XG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBKb2EgRWJlcnQgQVMzIFNpZ25hbEJpbmRpbmcgYW5kIFJvYmVydCBQZW5uZXIncyBTbG90IGNsYXNzZXMuXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAbmFtZSBTaWduYWxCaW5kaW5nXG4gICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2UgSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIChkZWZhdWx0ID0gMCkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsQmluZGluZyhzaWduYWwsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAdHlwZSBGdW5jdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pc09uY2UgPSBpc09uY2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBtZW1iZXJPZiBTaWduYWxCaW5kaW5nLnByb3RvdHlwZVxuICAgICAgICAgKiBAbmFtZSBjb250ZXh0XG4gICAgICAgICAqIEB0eXBlIE9iamVjdHx1bmRlZmluZWR8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbGlzdGVuZXJDb250ZXh0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICogQHR5cGUgU2lnbmFsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zaWduYWwgPSBzaWduYWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbmVyIHByaW9yaXR5XG4gICAgICAgICAqIEB0eXBlIE51bWJlclxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgIH1cblxuICAgIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJlIGV4ZWN1dGVkLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IHBhcmFtZXRlcnMgcGFzc2VkIHRvIGxpc3RlbmVyIGR1cmluZyBgU2lnbmFsLmRpc3BhdGNoYCBhbmQgYFNpZ25hbEJpbmRpbmcuZXhlY3V0ZWAuIChjdXJyaWVkIHBhcmFtZXRlcnMpXG4gICAgICAgICAqIEB0eXBlIEFycmF5fG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBhcmFtcyA6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgbGlzdGVuZXIgcGFzc2luZyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgICAgICogPHA+SWYgYmluZGluZyB3YXMgYWRkZWQgdXNpbmcgYFNpZ25hbC5hZGRPbmNlKClgIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gc2lnbmFsIGRpc3BhdGNoIHF1ZXVlLCB0aGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgZm9yIHRoZSBzaWduYWwgZGlzcGF0Y2guPC9wPlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcGFyYW1zQXJyXSBBcnJheSBvZiBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7Kn0gVmFsdWUgcmV0dXJuZWQgYnkgdGhlIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uIChwYXJhbXNBcnIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuLCBwYXJhbXM7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgISF0aGlzLl9saXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHRoaXMucGFyYW1zPyB0aGlzLnBhcmFtcy5jb25jYXQocGFyYW1zQXJyKSA6IHBhcmFtc0FycjtcbiAgICAgICAgICAgICAgICBoYW5kbGVyUmV0dXJuID0gdGhpcy5fbGlzdGVuZXIuYXBwbHkodGhpcy5jb250ZXh0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclJldHVybjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0YWNoIGJpbmRpbmcgZnJvbSBzaWduYWwuXG4gICAgICAgICAqIC0gYWxpYXMgdG86IG15U2lnbmFsLnJlbW92ZShteUJpbmRpbmcuZ2V0TGlzdGVuZXIoKSk7XG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbCBvciBgbnVsbGAgaWYgYmluZGluZyB3YXMgcHJldmlvdXNseSBkZXRhY2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIGRldGFjaCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQm91bmQoKT8gdGhpcy5fc2lnbmFsLnJlbW92ZSh0aGlzLl9saXN0ZW5lciwgdGhpcy5jb250ZXh0KSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBiaW5kaW5nIGlzIHN0aWxsIGJvdW5kIHRvIHRoZSBzaWduYWwgYW5kIGhhdmUgYSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGlzQm91bmQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCEhdGhpcy5fc2lnbmFsICYmICEhdGhpcy5fbGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBJZiBTaWduYWxCaW5kaW5nIHdpbGwgb25seSBiZSBleGVjdXRlZCBvbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNPbmNlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzT25jZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldExpc3RlbmVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWx9IFNpZ25hbCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICovXG4gICAgICAgIGdldFNpZ25hbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZGVzdHJveSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zaWduYWw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWxCaW5kaW5nIGlzT25jZTonICsgdGhpcy5faXNPbmNlICsnLCBpc0JvdW5kOicrIHRoaXMuaXNCb3VuZCgpICsnLCBhY3RpdmU6JyArIHRoaXMuYWN0aXZlICsgJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbi8qZ2xvYmFsIFNpZ25hbEJpbmRpbmc6ZmFsc2UqL1xuXG4gICAgLy8gU2lnbmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCBmbk5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCAnbGlzdGVuZXIgaXMgYSByZXF1aXJlZCBwYXJhbSBvZiB7Zm59KCkgYW5kIHNob3VsZCBiZSBhIEZ1bmN0aW9uLicucmVwbGFjZSgne2ZufScsIGZuTmFtZSkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgUm9iZXJ0IFBlbm5lcidzIEFTMyBTaWduYWxzLlxuICAgICAqIEBuYW1lIFNpZ25hbFxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgQXJyYXkuPFNpZ25hbEJpbmRpbmc+XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcblxuICAgICAgICAvLyBlbmZvcmNlIGRpc3BhdGNoIHRvIGF3YXlzIHdvcmsgb24gc2FtZSBjb250ZXh0ICgjNDcpXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBTaWduYWwucHJvdG90eXBlLmRpc3BhdGNoLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgU2lnbmFsLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFscyBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqL1xuICAgICAgICBWRVJTSU9OIDogJzEuMC4wJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIHNob3VsZCBrZWVwIHJlY29yZCBvZiBwcmV2aW91c2x5IGRpc3BhdGNoZWQgcGFyYW1ldGVycyBhbmRcbiAgICAgICAgICogYXV0b21hdGljYWxseSBleGVjdXRlIGxpc3RlbmVyIGR1cmluZyBgYWRkKClgL2BhZGRPbmNlKClgIGlmIFNpZ25hbCB3YXNcbiAgICAgICAgICogYWxyZWFkeSBkaXNwYXRjaGVkIGJlZm9yZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgbWVtb3JpemUgOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3Nob3VsZFByb3BhZ2F0ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBpcyBhY3RpdmUgYW5kIHNob3VsZCBicm9hZGNhc3QgZXZlbnRzLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gU2V0dGluZyB0aGlzIHByb3BlcnR5IGR1cmluZyBhIGRpc3BhdGNoIHdpbGwgb25seSBhZmZlY3QgdGhlIG5leHQgZGlzcGF0Y2gsIGlmIHlvdSB3YW50IHRvIHN0b3AgdGhlIHByb3BhZ2F0aW9uIG9mIGEgc2lnbmFsIHVzZSBgaGFsdCgpYCBpbnN0ZWFkLjwvcD5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2VcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVnaXN0ZXJMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCksXG4gICAgICAgICAgICAgICAgYmluZGluZztcblxuICAgICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5fYmluZGluZ3NbcHJldkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZy5pc09uY2UoKSAhPT0gaXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQnKyAoaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGVuIGFkZCcrICghaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGUgc2FtZSBsaXN0ZW5lciB3aXRob3V0IHJlbW92aW5nIHRoZSByZWxhdGlvbnNoaXAgZmlyc3QuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gbmV3IFNpZ25hbEJpbmRpbmcodGhpcywgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQmluZGluZyhiaW5kaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5tZW1vcml6ZSAmJiB0aGlzLl9wcmV2UGFyYW1zKXtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmV4ZWN1dGUodGhpcy5fcHJldlBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1NpZ25hbEJpbmRpbmd9IGJpbmRpbmdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9hZGRCaW5kaW5nIDogZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIC8vc2ltcGxpZmllZCBpbnNlcnRpb24gc29ydFxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICBkbyB7IC0tbjsgfSB3aGlsZSAodGhpcy5fYmluZGluZ3Nbbl0gJiYgYmluZGluZy5fcHJpb3JpdHkgPD0gdGhpcy5fYmluZGluZ3Nbbl0uX3ByaW9yaXR5KTtcbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShuICsgMSwgMCwgYmluZGluZyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9pbmRleE9mTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGN1cjtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLl9iaW5kaW5nc1tuXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyLl9saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiYgY3VyLmNvbnRleHQgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBsaXN0ZW5lciB3YXMgYXR0YWNoZWQgdG8gU2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIFNpZ25hbCBoYXMgdGhlIHNwZWNpZmllZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGhhcyA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCkgIT09IC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBsaXN0ZW5lciB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGQgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCBmYWxzZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBsaXN0ZW5lciB0byB0aGUgc2lnbmFsIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgYWZ0ZXIgZmlyc3QgZXhlY3V0aW9uICh3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSkuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZE9uY2UgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGRPbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgdHJ1ZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhIHNpbmdsZSBsaXN0ZW5lciBmcm9tIHRoZSBkaXNwYXRjaCBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIEV4ZWN1dGlvbiBjb250ZXh0IChzaW5jZSB5b3UgY2FuIGFkZCB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzIGlmIGV4ZWN1dGluZyBpbiBhIGRpZmZlcmVudCBjb250ZXh0KS5cbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IExpc3RlbmVyIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmUgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdyZW1vdmUnKTtcblxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3NbaV0uX2Rlc3Ryb3koKTsgLy9ubyByZWFzb24gdG8gYSBTaWduYWxCaW5kaW5nIGV4aXN0IGlmIGl0IGlzbid0IGF0dGFjaGVkIHRvIGEgc2lnbmFsXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVBbGwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tuXS5fZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3MubGVuZ3RoID0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBOdW1iZXIgb2YgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXROdW1MaXN0ZW5lcnMgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIG9mIHRoZSBldmVudCwgYmxvY2tpbmcgdGhlIGRpc3BhdGNoIHRvIG5leHQgbGlzdGVuZXJzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IHNob3VsZCBiZSBjYWxsZWQgb25seSBkdXJpbmcgc2lnbmFsIGRpc3BhdGNoLCBjYWxsaW5nIGl0IGJlZm9yZS9hZnRlciBkaXNwYXRjaCB3b24ndCBhZmZlY3Qgc2lnbmFsIGJyb2FkY2FzdC48L3A+XG4gICAgICAgICAqIEBzZWUgU2lnbmFsLnByb3RvdHlwZS5kaXNhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBoYWx0IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BhdGNoL0Jyb2FkY2FzdCBTaWduYWwgdG8gYWxsIGxpc3RlbmVycyBhZGRlZCB0byB0aGUgcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gUGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoISB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmFtc0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBiaW5kaW5ncztcblxuICAgICAgICAgICAgaWYgKHRoaXMubWVtb3JpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gcGFyYW1zQXJyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISBuKSB7XG4gICAgICAgICAgICAgICAgLy9zaG91bGQgY29tZSBhZnRlciBtZW1vcml6ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmluZGluZ3MgPSB0aGlzLl9iaW5kaW5ncy5zbGljZSgpOyAvL2Nsb25lIGFycmF5IGluIGNhc2UgYWRkL3JlbW92ZSBpdGVtcyBkdXJpbmcgZGlzcGF0Y2hcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IHRydWU7IC8vaW4gY2FzZSBgaGFsdGAgd2FzIGNhbGxlZCBiZWZvcmUgZGlzcGF0Y2ggb3IgZHVyaW5nIHRoZSBwcmV2aW91cyBkaXNwYXRjaC5cblxuICAgICAgICAgICAgLy9leGVjdXRlIGFsbCBjYWxsYmFja3MgdW50aWwgZW5kIG9mIHRoZSBsaXN0IG9yIHVudGlsIGEgY2FsbGJhY2sgcmV0dXJucyBgZmFsc2VgIG9yIHN0b3BzIHByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvL3JldmVyc2UgbG9vcCBzaW5jZSBsaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBhZGRlZCBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgICBkbyB7IG4tLTsgfSB3aGlsZSAoYmluZGluZ3Nbbl0gJiYgdGhpcy5fc2hvdWxkUHJvcGFnYXRlICYmIGJpbmRpbmdzW25dLmV4ZWN1dGUocGFyYW1zQXJyKSAhPT0gZmFsc2UpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JnZXQgbWVtb3JpemVkIGFyZ3VtZW50cy5cbiAgICAgICAgICogQHNlZSBTaWduYWwubWVtb3JpemVcbiAgICAgICAgICovXG4gICAgICAgIGZvcmdldCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBiaW5kaW5ncyBmcm9tIHNpZ25hbCBhbmQgZGVzdHJveSBhbnkgcmVmZXJlbmNlIHRvIGV4dGVybmFsIG9iamVjdHMgKGRlc3Ryb3kgU2lnbmFsIG9iamVjdCkuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBjYWxsaW5nIGFueSBtZXRob2Qgb24gdGhlIHNpZ25hbCBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRpc3Bvc2Ugd2lsbCB0aHJvdyBlcnJvcnMuPC9wPlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcG9zZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYmluZGluZ3M7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJldlBhcmFtcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsIGFjdGl2ZTonKyB0aGlzLmFjdGl2ZSArJyBudW1MaXN0ZW5lcnM6JysgdGhpcy5nZXROdW1MaXN0ZW5lcnMoKSArJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvLyBOYW1lc3BhY2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpZ25hbHMgbmFtZXNwYWNlXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBuYW1lIHNpZ25hbHNcbiAgICAgKi9cbiAgICB2YXIgc2lnbmFscyA9IFNpZ25hbDtcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIEBzZWUgU2lnbmFsXG4gICAgICovXG4gICAgLy8gYWxpYXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzZWUgI2doLTQ0KVxuICAgIHNpZ25hbHMuU2lnbmFsID0gU2lnbmFsO1xuXG5cblxuICAgIC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcbiAgICBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpeyAvL0FNRFxuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2lnbmFsczsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7IC8vbm9kZVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHNpZ25hbHM7XG4gICAgfSBlbHNlIHsgLy9icm93c2VyXG4gICAgICAgIC8vdXNlIHN0cmluZyBiZWNhdXNlIG9mIEdvb2dsZSBjbG9zdXJlIGNvbXBpbGVyIEFEVkFOQ0VEX01PREVcbiAgICAgICAgLypqc2xpbnQgc3ViOnRydWUgKi9cbiAgICAgICAgZ2xvYmFsWydzaWduYWxzJ10gPSBzaWduYWxzO1xuICAgIH1cblxufSh0aGlzKSk7XG4iXX0=
