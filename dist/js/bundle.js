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
        'createMicrophoneSource': createMicrophoneSource
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

},{"../../utils/asset-loader.js":4,"../../utils/web-audio.js":11,"./loading-bar.js":15}],14:[function(require,module,exports){
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

    this.panel = new UIComponents.Panel(el, 'Dynamics');
    this.onButton = new UIComponents.ToggleButton(this.panel.el, 'TURN OFF', 'TURN ON', this.off, this.on, this);
    this.panel.append(document.createElement('div'));
    this.sliderThreshold = new UIComponents.Slider(this.panel.el, 'threshold', -100, 0, 0.1, this.node.threshold.value, this.update, this);
    this.sliderKnee = new UIComponents.Slider(this.panel.el, 'knee', 0, 40, 0.1, this.node.knee.value, this.update, this);
    this.sliderRatio = new UIComponents.Slider(this.panel.el, 'ratio', 1, 20, 0.1, this.node.ratio.value, this.update, this);
    this.sliderAttack = new UIComponents.Slider(this.panel.el, 'attack', 0, 1, 0.0001, this.node.attack.value, this.update, this);
    this.sliderRelease = new UIComponents.Slider(this.panel.el, 'release', 0, 1, 0.0001, this.node.release.value, this.update, this);
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],19:[function(require,module,exports){
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
	Compressor = require('./compressor.js');

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
	this.clearDemo(true);
	this.demo = new Compressor(this.demoHolder, this.audioContext);
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

},{"../utils/keyboard.js":7,"../utils/microphone.js":8,"./analyser.js":12,"./components/loading-bar.js":15,"./components/ui-components.js":16,"./compressor.js":17,"./filter.js":18,"./microphone-input.js":20,"./multi-track.js":21,"./oscillator.js":22,"./pan-three-d.js":23,"./reverb.js":24}],20:[function(require,module,exports){
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
},{"../utils/microphone.js":8,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],21:[function(require,module,exports){
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

MultiTrack.prototype.createGainControls = function(node, el) {
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
};

MultiTrack.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = MultiTrack;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],22:[function(require,module,exports){
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],23:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],24:[function(require,module,exports){
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],25:[function(require,module,exports){
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

},{"./app/model/audio-model.js":3,"./app/utils/asset-loader.js":4,"./app/utils/audio-manager.js":5,"./app/utils/raf-polyfill.js":10,"./app/view/gui.js":19}],"w8Izcx":[function(require,module,exports){
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
},{}]},{},[25])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvYXVkaW8tZmlsZXMuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL21pY3JvcGhvbmUuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvYW5hbHlzZXIuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wcmVzc29yLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2ZpbHRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9ndWkuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvbWljcm9waG9uZS1pbnB1dC5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9tdWx0aS10cmFjay5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9vc2NpbGxhdG9yLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3Bhbi10aHJlZS1kLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3JldmVyYi5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9tYWluLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL3ZlbmRvci9qcy1zaWduYWxzL2Rpc3Qvc2lnbmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcIkRydW1zXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9EUlVNU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIkJhc3NcIjogeyBcInVybFwiOiBcImF1ZGlvL0RPVUJMRV9CQVNTXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQ29uZ2FzXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9DT05HQVNcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJQaWFub1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vUElBTk9fTUlDXzFcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJHZW5lcmF0ZSBpbXB1bHNlXCI6IFwiZ2VuZXJhdGVcIixcblxuICAgIFwiYW1iaWVuY2U6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzFfKDQ1MClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzFfKDQ1MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfMl8oNDUxKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfMl8oNDUxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl8zXyg0NTIpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl8zXyg0NTIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzY5NjlfKDQ1NClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzY5NjlfKDQ1NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfY2xvc2VfKDQ1NylcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2Nsb3NlXyg0NTcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2lzX2l0Xyg0NTUpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9pc19pdF8oNDU1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9sZXRfaXRfZ29fKDQ1OClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2xldF9pdF9nb18oNDU4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9vaF8oNDUzKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfb2hfKDQ1MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfdGFpbHNfKDQ1NilcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX3RhaWxzXyg0NTYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iaWVuY2VfKDQ0OSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iaWVuY2VfKDQ0OSlfZGNcIixcbiAgICBcbiAgICBcImhhbGw6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QXV0b19QYXJrXyg1MDQpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfQXV0b19QYXJrXyg1MDQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7SmF6el9IYWxsXyg1MDMpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfSmF6el9IYWxsXyg1MDMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2UtU3RhZ2VfKDQ5NilcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9MYXJnZS1TdGFnZV8oNDk2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX0hhbGxfKDQ5NSlcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9MYXJnZV9IYWxsXyg0OTUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtLVN0YWdlXyg0OTgpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTWVkaXVtLVN0YWdlXyg0OTgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtX0hhbGxfKDQ5NylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW1fSGFsbF8oNDk3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsLVN0YWdlXyg1MDApXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGwtU3RhZ2VfKDUwMClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9DaHVyY2hfKDUwMilcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbF9DaHVyY2hfKDUwMilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9IYWxsXyg0OTkpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGxfSGFsbF8oNDk5KV9kY1wiLFxuICAgIFxuICAgIFwicGxhdGU6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QV9QbGF0ZV8oNDcwKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9BX1BsYXRlXyg0NzApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7RmF0X1BsYXRlXyg0NzQpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX0ZhdF9QbGF0ZV8oNDc0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX1BsYXRlXyg0NzIpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1NtYWxsX1BsYXRlXyg0NzIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U25hcmVfUGxhdGVfKDQ3MSlcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfU25hcmVfUGxhdGVfKDQ3MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtUaGluX1BsYXRlXyg0NzMpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1RoaW5fUGxhdGVfKDQ3MylfZGNcIixcbiAgICBcbiAgICBcInJhbmRvbV9oYWxsOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JpZ19SXyg0NjApXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0JpZ19SXyg0NjApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7Q3JhenlfYXNzXyg0NjMpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0NyYXp5X2Fzc18oNDYzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0Rvd25fWW91X1NheV8oNDY4KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9Eb3duX1lvdV9TYXlfKDQ2OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSX1R3b18oNDYyKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9SX1R3b18oNDYyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1JhbmRvbV93ZWxsXyg0NjQpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1JhbmRvbV93ZWxsXyg0NjQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U2hvcnRfTWVfYWdhaW5fKDQ2NSlcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfU2hvcnRfTWVfYWdhaW5fKDQ2NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtXZWxsX0htbW1fUl8oNDYxKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9XZWxsX0htbW1fUl8oNDYxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1lvdV9TYWlkXyg0NjcpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1lvdV9TYWlkXyg0NjcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7dGVzdHlfdGVzdHlfKDQ2NilcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfdGVzdHlfdGVzdHlfKDQ2NilfZGNcIixcbiAgICBcbiAgICBcInJvb206XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TEdfV29vZF9Sb29tXyg0OTApXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTEdfV29vZF9Sb29tXyg0OTApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2VfQ2hhbWJlcl8oNDkyKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX0xhcmdlX0NoYW1iZXJfKDQ5MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9Sb29tXyg0ODYpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTGFyZ2VfUm9vbV8oNDg2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01lZGl1bV9Sb29tXyg0ODcpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTWVkaXVtX1Jvb21fKDQ4NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNdXNpY19DbHViXyg0ODUpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTXVzaWNfQ2x1Yl8oNDg1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NNX1dvb2RfUm9vbV8oNDkxKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NNX1dvb2RfUm9vbV8oNDkxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsXy1fQnJpZ2h0Xyg0OTQpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfLV9CcmlnaHRfKDQ5NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9DaGFtYl8oNDkzKVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NtYWxsX0NoYW1iXyg0OTMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfUm9vbV8oNDg4KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX1NtYWxsX1Jvb21fKDQ4OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtWZXJ5X1NtYWxsXyg0ODkpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfVmVyeV9TbWFsbF8oNDg5KV9kY1wiLFxuICAgIFxuICAgIFwid2lsZF9zcGFjZXM6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7MTBXLTQwXyg0NzgpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMXzEwVy00MF8oNDc4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwOzIwdy01MF8oNDc5KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF8yMHctNTBfKDQ3OSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCaWdfQm90dG9tXyg0NzcpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0JpZ19Cb3R0b21fKDQ3NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCcmlja19XYWxsXyg0NzUpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0JyaWNrX1dhbGxfKDQ3NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCdWNrcmFtXyg0NzYpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0J1Y2tyYW1fKDQ3NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtJbnNpZGVfT3V0Xyg0ODIpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0luc2lkZV9PdXRfKDQ4MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZXRhbGxpY2FfKDQ4MClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfTWV0YWxsaWNhXyg0ODApX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7Umljb2NoZXRfKDQ4MylcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfUmljb2NoZXRfKDQ4MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaWxpY2FfQmVhZHNfKDQ4MSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfU2lsaWNhX0JlYWRzXyg0ODEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7VmFyb29tXyg0ODQpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX1Zhcm9vbV8oNDg0KV9kY1wiXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXVkaW9GaWxlcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9hdWRpby1maWxlcy5qc29uJyksXG5cdGltcHVsc2UgPSByZXF1aXJlKCcuLi9jb25maWcvaW1wdWxzZS1yZXNwb25zZS5qc29uJyk7XG5cbnZhciBtb2RlbCA9IHtcbiAgICBleHRlbnNpb246ICcnLFxuXHRhdWRpb0ZpbGVzOiBhdWRpb0ZpbGVzLFxuXHRnZXRGaWxlOiBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gbW9kZWwuYXVkaW9GaWxlc1trZXldO1xuXHR9LFxuXHRpbXB1bHNlOiBpbXB1bHNlLFxuXHRmaWx0ZXIgOiB7XG4gICAgICAgICdsb3dwYXNzJzogMCxcbiAgICAgICAgJ2hpZ2hwYXNzJzogMSxcbiAgICAgICAgJ2JhbmRwYXNzJzogMixcbiAgICAgICAgJ2xvd3NoZWxmJzogMyxcbiAgICAgICAgJ2hpZ2hzaGVsZic6IDQsXG4gICAgICAgICdwZWFraW5nJzogNSxcbiAgICAgICAgJ25vdGNoJzogNixcbiAgICAgICAgJ2FsbHBhc3MnOiA3XG5cdH0sXG4gICAgd2F2ZToge1xuICAgICAgICAnc2luZSc6ICdzaW5lJyxcbiAgICAgICAgJ3NxdWFyZSc6ICdzcXVhcmUnLFxuICAgICAgICAnc2F3dG9vdGgnOiAnc2F3dG9vdGgnLFxuICAgICAgICAndHJpYW5nbGUnOiAndHJpYW5nbGUnXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNpZ25hbHMgPSByZXF1aXJlKCdzaWduYWxzJyk7XG5cbmZ1bmN0aW9uIEFzc2V0TG9hZGVyKCkge1xuICAgIHRoaXMub25DaGlsZENvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vblByb2dyZXNzID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5sb2FkZXJzID0ge307XG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMud2ViQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaExvY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMubnVtVG90YWwgPSAwO1xuICAgIHRoaXMubnVtTG9hZGVkID0gMDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKCkge1xuICAgIHZhciB4aHIsIGksIHByb2dJZCxcbiAgICAgICAgcHJvZ0lkcyA9IFsnTXN4bWwyLlhNTEhUVFAnLCAnTWljcm9zb2Z0LlhNTEhUVFAnLCAnTXN4bWwyLlhNTEhUVFAuNC4wJ107XG5cbiAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LkFjdGl2ZVhPYmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHByb2dJZCA9IHByb2dJZHNbaV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHhociA9IG5ldyB3aW5kb3cuQWN0aXZlWE9iamVjdChwcm9nSWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geGhyO1xufVxuXG5Bc3NldExvYWRlci5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbih1cmwsIHR5cGUpIHtcbiAgICAgICAgdmFyIGxvYWRlciA9IG5ldyBBc3NldExvYWRlci5Mb2FkZXIodXJsLCB0eXBlKTtcbiAgICAgICAgbG9hZGVyLndlYkF1ZGlvQ29udGV4dCA9IHRoaXMud2ViQXVkaW9Db250ZXh0O1xuICAgICAgICBsb2FkZXIuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgICBsb2FkZXIudG91Y2hMb2NrZWQgPSB0aGlzLnRvdWNoTG9ja2VkO1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2gobG9hZGVyKTtcbiAgICAgICAgdGhpcy5udW1Ub3RhbCsrO1xuICAgICAgICByZXR1cm4gbG9hZGVyO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm51bVRvdGFsID0gdGhpcy5xdWV1ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcy5sb2FkZXJzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9hZGVyID0gdGhpcy5xdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsb2FkZXIub25Db21wbGV0ZS5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm51bUxvYWRlZCsrO1xuICAgICAgICAgICAgaWYoc2VsZi5vblByb2dyZXNzLmdldE51bUxpc3RlbmVycygpID4gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25Qcm9ncmVzcy5kaXNwYXRjaChzZWxmLm51bUxvYWRlZC9zZWxmLm51bVRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubG9hZGVyc1tsb2FkZXIudXJsXSA9IGxvYWRlcjtcbiAgICAgICAgICAgIHNlbGYub25DaGlsZENvbXBsZXRlLmRpc3BhdGNoKGxvYWRlcik7XG4gICAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRlci5vbkVycm9yLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaChsb2FkZXIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkZXIuc3RhcnQoKTtcbiAgICB9LFxuICAgIGFkZE11bHRpcGxlOiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbdXJsXTtcbiAgICB9XG59O1xuXG5Bc3NldExvYWRlci5Mb2FkZXIgPSBmdW5jdGlvbih1cmwsIHR5cGUpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IHRoaXMudXJsLnNwbGl0KCc/JylbMF0udG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgdGhpcy5vblByb2dyZXNzID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICB0aGlzLndlYkF1ZGlvQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hMb2NrZWQgPSBmYWxzZTtcbn07XG5cbkFzc2V0TG9hZGVyLkxvYWRlci5wcm90b3R5cGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtcDMnOlxuICAgICAgICAgICAgY2FzZSAnb2dnJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpbyh0aGlzLndlYkF1ZGlvQ29udGV4dCwgdGhpcy50b3VjaExvY2tlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2dpZic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5jcm9zc09yaWdpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKU09OKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdFUlJPUjogVW5rbm93biB0eXBlIGZvciBmaWxlIHdpdGggVVJMOiAnICsgdGhpcy51cmw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRBdWRpbzogZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0LCB0b3VjaExvY2tlZCkge1xuICAgICAgICBpZih3ZWJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdlYkF1ZGlvKHdlYkF1ZGlvQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRIVE1MNUF1ZGlvKHRvdWNoTG9ja2VkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZFdlYkF1ZGlvOiBmdW5jdGlvbih3ZWJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWw7XG4gICAgICAgICAgICAgICAgc2VsZi5vblByb2dyZXNzLmRpc3BhdGNoKHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VuYWJsZSB0byBjb21wdXRlIHByb2dyZXNzIGluZm9ybWF0aW9uIHNpbmNlIHRoZSB0b3RhbCBzaXplIGlzIHVua25vd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdlYkF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChidWZmZXIpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKGUpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9LFxuICAgIGxvYWRIVE1MNUF1ZGlvOiBmdW5jdGlvbih0b3VjaExvY2tlZCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBBdWRpbygpO1xuICAgICAgICB0aGlzLmRhdGEgPSByZXF1ZXN0O1xuICAgICAgICByZXF1ZXN0Lm5hbWUgPSB0aGlzLnVybDtcbiAgICAgICAgcmVxdWVzdC5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc3JjID0gdGhpcy51cmw7XG4gICAgICAgIGlmICghIXRvdWNoTG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8qcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1ZGlvIGNhbnBsYXl0aHJvdWdoJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKHNlbGYuZGF0YSk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7Ki9cbiAgICAgICAgICAgIHJlcXVlc3QubG9hZCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRJbWFnZTogZnVuY3Rpb24oY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVxdWVzdDtcbiAgICAgICAgcmVxdWVzdC5uYW1lID0gdGhpcy51cmw7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goc2VsZi5kYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdC5zcmMgPSB0aGlzLnVybDtcbiAgICB9LFxuICAgIGxvYWRKU09OOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgcmVxdWVzdCA9IGNyZWF0ZVhIUigpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxvYWRlZCgpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmpzb24gPSBzZWxmLmRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKHNlbGYuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdvbmxvYWQnIGluIHJlcXVlc3QgJiYgJ29uZXJyb3InIGluIHJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gaGFuZGxlTG9hZGVkO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lICE9PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUxvYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXNzZXRMb2FkZXI7XG5cbi8qaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBBc3NldExvYWRlcjtcbn0qL1xuXG4vKnZhciByb290ID0gdGhpcztcbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQXNzZXRMb2FkZXI7XG4gICAgfVxuICAgIGV4cG9ydHMuQXNzZXRMb2FkZXIgPSBBc3NldExvYWRlcjtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgnUElYSScsIChmdW5jdGlvbigpIHsgcmV0dXJuIHJvb3QuQXNzZXRMb2FkZXIgPSBBc3NldExvYWRlcjsgfSkoKSApO1xufSBlbHNlIHtcbiAgICByb290LlBJWEkgPSBQSVhJO1xufSovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gd2Via2l0QXVkaW9Db250ZXh0TW9ua2V5UGF0Y2ggaXMgYnJlYWtpbmcgRmlyZWZveFxyXG4vL3JlcXVpcmUoJy4vd2Via2l0QXVkaW9Db250ZXh0TW9ua2V5UGF0Y2guanMnKTtcclxuXHJcbnZhciBXZWJBdWRpbyA9IHJlcXVpcmUoJy4vd2ViLWF1ZGlvLmpzJyksXHJcblx0SFRNTEF1ZGlvID0gcmVxdWlyZSgnLi9odG1sLWF1ZGlvLmpzJyksXHJcblx0UGFnZVZpc2liaWxpdHkgPSByZXF1aXJlKCcuL3BhZ2UtdmlzaWJpbGl0eS5qcycpO1xyXG5cclxuZnVuY3Rpb24gQXVkaW9NYW5hZ2VyKCkge1xyXG5cdHRoaXMud2ViQXVkaW9Db250ZXh0ID0gV2ViQXVkaW8uY3JlYXRlQ29udGV4dCgpO1xyXG5cdHRoaXMuX3NvdW5kcyA9IHt9O1xyXG5cdHRoaXMuX2RlbGF5VGltZW91dHMgPSBbXTtcclxuXHR0aGlzLl9leHQgPSB1bmRlZmluZWQ7XHJcblx0dGhpcy5faXNTdXBwb3J0ZWQgPSB1bmRlZmluZWQ7XHJcblx0dGhpcy5fdG91Y2hMb2NrZWQgPSBmYWxzZTtcclxuXHR0aGlzLl9xdWV1ZWQgPSBbXTtcclxuXHJcblx0UGFnZVZpc2liaWxpdHkub25QYWdlSGlkZGVuLmFkZChmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGF1c2VBbGwoKTtcclxuXHR9LCB0aGlzKTtcclxuXHRQYWdlVmlzaWJpbGl0eS5vblBhZ2VTaG93bi5hZGQoZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnJlc3VtZUFsbCgpO1xyXG5cdH0sIHRoaXMpO1xyXG59XHJcblxyXG5BdWRpb01hbmFnZXIucHJvdG90eXBlID0ge1xyXG5cdGFkZDogZnVuY3Rpb24oa2V5LCBkYXRhLCBsb29wKSB7XHJcblx0XHR2YXIgc291bmQgPSB0aGlzLndlYkF1ZGlvQ29udGV4dCAmJiAhKGRhdGEgJiYgZGF0YS50YWdOYW1lKSA/IG5ldyBXZWJBdWRpbyh0aGlzLndlYkF1ZGlvQ29udGV4dCkgOiBuZXcgSFRNTEF1ZGlvKCk7XHJcblx0XHRzb3VuZC5sb29wID0gISEobG9vcCk7XHJcblx0XHRzb3VuZC5hZGQoZGF0YSk7XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XSA9IHNvdW5kO1xyXG5cdFx0cmV0dXJuIHNvdW5kO1xyXG5cdH0sXHJcblx0Z2V0RXh0ZW5zaW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLl9leHQpIHtcclxuXHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdFx0dGhpcy5fZXh0ID0gKGVsLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykgPyAnLm9nZycgOiAnLm1wMycpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2V4dDtcclxuXHR9LFxyXG5cdGlzU3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMuX2lzU3VwcG9ydGVkID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5cdFx0XHRcdHRoaXMuX2lzU3VwcG9ydGVkID0gISEoZWwgJiYgKGVsLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykgfHwgZWwuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykpKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0dGhpcy5faXNTdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xyXG5cdH0sXHJcblx0d2ViQXVkaW9TdXBwb3J0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICEhdGhpcy53ZWJBdWRpb0NvbnRleHQ7XHJcblx0fSxcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xyXG5cdH0sXHJcblx0cGxheTogZnVuY3Rpb24oa2V5LCBkZWxheSwgbG9vcCkge1xyXG5cdFx0aWYodGhpcy5fdG91Y2hMb2NrZWQpIHtcclxuXHRcdFx0dGhpcy5xdWV1ZVVwKGtleSwgZGVsYXksIGxvb3ApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgc291bmQgPSB0aGlzLl9zb3VuZHNba2V5XTtcclxuXHRcdGlmKCFzb3VuZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcbiAgICAgICAgaWYobG9vcCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHNvdW5kLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWxheSAhPT0gdW5kZWZpbmVkICYmIGRlbGF5ID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsYXllZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRzLnB1c2goZGVsYXllZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11dGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNbaV0udm9sdW1lID0gMDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVuTXV0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kc1tpXS52b2x1bWUgPSAxO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cGF1c2U6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYoIXRoaXMuX3NvdW5kc1trZXldKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NvdW5kc1trZXldLnBhdXNlKCk7XHJcblx0fSxcclxuXHRzdG9wOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmKCF0aGlzLl9zb3VuZHNba2V5XSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XHJcblx0fSxcclxuXHRwYXVzZUFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdGlmKHRoaXMuX3NvdW5kc1tpXS5wbGF5aW5nKSB7XHJcblx0XHRcdFx0dGhpcy5fc291bmRzW2ldLnBhdXNlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlc3VtZUFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdGlmKHRoaXMuX3NvdW5kc1tpXS5wYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zb3VuZHNbaV0ucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzdG9wQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIga2V5IGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2RlbGF5VGltZW91dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRzLmxlbmd0aCA9IDA7XHJcblx0fSxcclxuXHRnZXRUb3VjaExvY2tlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdG91Y2hMb2NrZWQ7XHJcblx0fSxcclxuXHRzZXRUb3VjaExvY2tlZDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX3RvdWNoTG9ja2VkID0gdmFsdWU7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHVubG9jayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxmLl90b3VjaExvY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2spO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuX3F1ZXVlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHNlbGYuX3F1ZXVlZFtpXSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNlbGYuX3F1ZXVlZC5sZW5ndGggPSAwO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZih0aGlzLl90b3VjaExvY2tlZCkge1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHF1ZXVlVXA6IGZ1bmN0aW9uKGtleSwgZGVsYXksIGxvb3ApIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBmbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxmLnBsYXkoa2V5LCBkZWxheSwgbG9vcCk7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5fcXVldWVkLnB1c2goZm4pO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXVkaW9NYW5hZ2VyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBIVE1MQXVkaW8oKSB7XHJcblx0dGhpcy5fc291bmQgPSBudWxsO1xyXG5cdHRoaXMuX2xvb3AgPSBmYWxzZTtcclxuXHR0aGlzLl92b2x1bWUgPSAxO1xyXG5cdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxufVxyXG5cclxuSFRNTEF1ZGlvLnByb3RvdHlwZSA9IHtcclxuXHRhZGQ6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHR0aGlzLl9zb3VuZCA9IGVsO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kO1xyXG5cdH0sXHJcblx0cGxheTogZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzLl9zb3VuZC52b2x1bWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLl9zb3VuZC52b2x1bWUgPSB0aGlzLl92b2x1bWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZC5wbGF5KCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMuX3NvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKHNlbGYuX2xvb3ApIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuXHRcdFx0XHR0aGlzLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZWxmLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9LFxyXG5cdHBhdXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdsb29wJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9vcDtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX2xvb3AgPSB2YWx1ZTtcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICd2b2x1bWUnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl92b2x1bWU7XHJcblx0fSxcclxuXHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZihpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdm9sdW1lID0gdmFsdWU7XHJcblx0XHRpZih0aGlzLl9zb3VuZCAmJiB0aGlzLl9zb3VuZC52b2x1bWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLl9zb3VuZC52b2x1bWUgPSB0aGlzLl92b2x1bWU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAncGxheWluZycsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BsYXlpbmc7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAncGF1c2VkJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3NvdW5kJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmQ7XHJcblx0fVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSFRNTEF1ZGlvO1xyXG4iLCJ2YXIgS2V5Ym9hcmQgPSB7XG5cdEE6ICdBJy5jaGFyQ29kZUF0KDApLFxuXHRCOiAnQicuY2hhckNvZGVBdCgwKSxcblx0QzogJ0MnLmNoYXJDb2RlQXQoMCksXG5cdEQ6ICdEJy5jaGFyQ29kZUF0KDApLFxuXHRFOiAnRScuY2hhckNvZGVBdCgwKSxcblx0RjogJ0YnLmNoYXJDb2RlQXQoMCksXG5cdEc6ICdHJy5jaGFyQ29kZUF0KDApLFxuXHRIOiAnSCcuY2hhckNvZGVBdCgwKSxcblx0STogJ0knLmNoYXJDb2RlQXQoMCksXG5cdEo6ICdKJy5jaGFyQ29kZUF0KDApLFxuXHRLOiAnSycuY2hhckNvZGVBdCgwKSxcblx0TDogJ0wnLmNoYXJDb2RlQXQoMCksXG5cdE06ICdNJy5jaGFyQ29kZUF0KDApLFxuXHROOiAnTicuY2hhckNvZGVBdCgwKSxcblx0TzogJ08nLmNoYXJDb2RlQXQoMCksXG5cdFA6ICdQJy5jaGFyQ29kZUF0KDApLFxuXHRROiAnUScuY2hhckNvZGVBdCgwKSxcblx0UjogJ1InLmNoYXJDb2RlQXQoMCksXG5cdFM6ICdTJy5jaGFyQ29kZUF0KDApLFxuXHRUOiAnVCcuY2hhckNvZGVBdCgwKSxcblx0VTogJ1UnLmNoYXJDb2RlQXQoMCksXG5cdFY6ICdWJy5jaGFyQ29kZUF0KDApLFxuXHRXOiAnVycuY2hhckNvZGVBdCgwKSxcblx0WDogJ1gnLmNoYXJDb2RlQXQoMCksXG5cdFk6ICdZJy5jaGFyQ29kZUF0KDApLFxuXHRaOiAnWicuY2hhckNvZGVBdCgwKSxcblx0WkVSTzogJzAnLmNoYXJDb2RlQXQoMCksXG5cdE9ORTogJzEnLmNoYXJDb2RlQXQoMCksXG5cdFRXTzogJzInLmNoYXJDb2RlQXQoMCksXG5cdFRIUkVFOiAnMycuY2hhckNvZGVBdCgwKSxcblx0Rk9VUjogJzQnLmNoYXJDb2RlQXQoMCksXG5cdEZJVkU6ICc1Jy5jaGFyQ29kZUF0KDApLFxuXHRTSVg6ICc2Jy5jaGFyQ29kZUF0KDApLFxuXHRTRVZFTjogJzcnLmNoYXJDb2RlQXQoMCksXG5cdEVJR0hUOiAnOCcuY2hhckNvZGVBdCgwKSxcblx0TklORTogJzknLmNoYXJDb2RlQXQoMCksXG5cdE5VTVBBRF8wOiA5Nixcblx0TlVNUEFEXzE6IDk3LFxuXHROVU1QQURfMjogOTgsXG5cdE5VTVBBRF8zOiA5OSxcblx0TlVNUEFEXzQ6IDEwMCxcblx0TlVNUEFEXzU6IDEwMSxcblx0TlVNUEFEXzY6IDEwMixcblx0TlVNUEFEXzc6IDEwMyxcblx0TlVNUEFEXzg6IDEwNCxcblx0TlVNUEFEXzk6IDEwNSxcblx0TlVNUEFEX01VTFRJUExZOiAxMDYsXG5cdE5VTVBBRF9BREQ6IDEwNyxcblx0TlVNUEFEX0VOVEVSOiAxMDgsXG5cdE5VTVBBRF9TVUJUUkFDVDogMTA5LFxuXHROVU1QQURfREVDSU1BTDogMTEwLFxuXHROVU1QQURfRElWSURFOiAxMTEsXG5cdEYxOiAxMTIsXG5cdEYyOiAxMTMsXG5cdEYzOiAxMTQsXG5cdEY0OiAxMTUsXG5cdEY1OiAxMTYsXG5cdEY2OiAxMTcsXG5cdEY3OiAxMTgsXG5cdEY4OiAxMTksXG5cdEY5OiAxMjAsXG5cdEYxMDogMTIxLFxuXHRGMTE6IDEyMixcblx0RjEyOiAxMjMsXG5cdEYxMzogMTI0LFxuXHRGMTQ6IDEyNSxcblx0RjE1OiAxMjYsXG5cdENPTE9OOiAxODYsXG5cdEVRVUFMUzogMTg3LFxuXHRVTkRFUlNDT1JFOiAxODksXG5cdFFVRVNUSU9OX01BUks6IDE5MSxcblx0VElMREU6IDE5Mixcblx0T1BFTl9CUkFDS0VUOiAyMTksXG5cdEJBQ0tXQVJEX1NMQVNIOiAyMjAsXG5cdENMT1NFRF9CUkFDS0VUOiAyMjEsXG5cdFFVT1RFUzogMjIyLFxuXHRCQUNLU1BBQ0U6IDgsXG5cdFRBQjogOSxcblx0Q0xFQVI6IDEyLFxuXHRFTlRFUjogMTMsXG5cdFNISUZUOiAxNixcblx0Q09OVFJPTDogMTcsXG5cdEFMVDogMTgsXG5cdENBUFNfTE9DSzogMjAsXG5cdEVTQzogMjcsXG5cdFNQQUNFQkFSOiAzMixcblx0UEFHRV9VUDogMzMsXG5cdFBBR0VfRE9XTjogMzQsXG5cdEVORDogMzUsXG5cdEhPTUU6IDM2LFxuXHRMRUZUOiAzNyxcblx0VVA6IDM4LFxuXHRSSUdIVDogMzksXG5cdERPV046IDQwLFxuXHRJTlNFUlQ6IDQ1LFxuXHRERUxFVEU6IDQ2LFxuXHRIRUxQOiA0Nyxcblx0TlVNX0xPQ0s6IDE0NFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlib2FyZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG5mdW5jdGlvbiBNaWNyb3Bob25lKCkge1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfID0gKG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYSk7XG4gICAgdGhpcy5faXNTdXBwb3J0ZWQgPSAhIW5hdmlnYXRvci5nZXRVc2VyTWVkaWFfO1xuICAgIHRoaXMuX3N0cmVhbSA9IG51bGw7XG5cbiAgICB0aGlzLm9uQ29ubmVjdGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkRlbmllZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxuXG5NaWNyb3Bob25lLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMuX2lzU3VwcG9ydGVkKSB7IHJldHVybjsgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXygge2F1ZGlvOnRydWV9LCBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgc2VsZi5fc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLm9uQ29ubmVjdGVkLmRpc3BhdGNoKHN0cmVhbSk7XG4gICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYoZS5uYW1lID09PSAnUGVybWlzc2lvbkRlbmllZEVycm9yJyB8fCBlID09PSAnUEVSTUlTU0lPTl9ERU5JRUQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGVybWlzc2lvbiBkZW5pZWQuIFlvdSBjYW4gdW5kbyB0aGlzIGJ5IGNsaWNraW5nIHRoZSBjYW1lcmEgaWNvbiB3aXRoIHRoZSByZWQgY3Jvc3MgaW4gdGhlIGFkZHJlc3MgYmFyJyk7XG4gICAgICAgICAgICBzZWxmLm9uRGVuaWVkLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5NaWNyb3Bob25lLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5fc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuX3N0cmVhbS5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3N0cmVhbSA9IG51bGw7XG4gICAgfVxufTtcblxuTWljcm9waG9uZS5wcm90b3R5cGUuY3JlYXRlV2ViQXVkaW9Tb3VyY2UgPSBmdW5jdGlvbih3ZWJBdWRpb0NvbnRleHQsIGNvbm5lY3RUbykge1xuICAgIGlmKCF0aGlzLl9zdHJlYW0pIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgbWVkaWFTdHJlYW1Tb3VyY2UgPSB3ZWJBdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UoIHRoaXMuX3N0cmVhbSApO1xuICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICBtZWRpYVN0cmVhbVNvdXJjZS5jb25uZWN0KGNvbm5lY3RUbyk7XG4gICAgfVxuICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgLy8gc2VlIGh0dHBzOi8vc3VwcG9ydC5tb3ppbGxhLm9yZy9lbi1VUy9xdWVzdGlvbnMvOTg0MTc5XG4gICAgaWYobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFTdHJlYW1Tb3VyY2U7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWljcm9waG9uZS5wcm90b3R5cGUsICdzdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmVhbTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pY3JvcGhvbmUucHJvdG90eXBlLCAnaXNTdXBwb3J0ZWQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xuICAgIH1cbn0pO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1pY3JvcGhvbmU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG52YXIgb25QYWdlSGlkZGVuID0gbmV3IHNpZ25hbHMuU2lnbmFsKCksXG4gICAgb25QYWdlU2hvd24gPSBuZXcgc2lnbmFscy5TaWduYWwoKSxcbiAgICBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2U7XG5cbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoZG9jdW1lbnRbaGlkZGVuXSkge1xuICAgICAgICBvblBhZ2VIaWRkZW4uZGlzcGF0Y2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvblBhZ2VTaG93bi5kaXNwYXRjaCgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0IFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICdtc0hpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmlmKHZpc2liaWxpdHlDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uUGFnZVNob3duOiBvblBhZ2VTaG93bixcbiAgICBvblBhZ2VIaWRkZW46IG9uUGFnZUhpZGRlblxufTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfVxufSgpKTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFdlYkF1ZGlvKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IFdlYkF1ZGlvLmNyZWF0ZUNvbnRleHQoKTtcbiAgICB0aGlzLl9zb3VuZCA9IFtdO1xuICAgIHRoaXMuX25vZGUgPSBbXTtcbiAgICB0aGlzLl9nYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl9nYWluLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLl9zdGFydGVkQXQgPSAwO1xuICAgIHRoaXMuX3BhdXNlZEF0ID0gMDtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMuX25vZGVGYWN0b3J5ID0gbmV3IFdlYkF1ZGlvLk5vZGVGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5faGVscGVycyA9IG5ldyBXZWJBdWRpby5IZWxwZXJzKHRoaXMuY29udGV4dCk7XG59XG5cbldlYkF1ZGlvLnByb3RvdHlwZSA9IHtcbiAgICBhZGQ6IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICBpZighYnVmZmVyKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9zb3VuZC5wdXNoKG5ldyBXZWJBdWRpby5Tb3VuZChidWZmZXIsIHRoaXMuY29udGV4dCkpO1xuICAgICAgICB0aGlzLl9zb3VuZFt0aGlzLl9zb3VuZC5sZW5ndGgtMV0ubG9vcCA9IHRoaXMuX2xvb3A7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFt0aGlzLl9zb3VuZC5sZW5ndGgtMV07XG4gICAgfSxcbiAgICBwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1heER1cmF0aW9uID0gLTEsXG4gICAgICAgICAgICBsb25nZXN0U291bmQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLmNvbm5lY3QodGhpcy5fZ2Fpbik7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5wbGF5KDAsIHRoaXMuX3BhdXNlZEF0IC8gMTAwMCk7XG4gICAgICAgICAgICBpZih0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gPSB0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBsb25nZXN0U291bmQgPSB0aGlzLl9zb3VuZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxvbmdlc3RTb3VuZC5zb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zdGFydGVkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fcGF1c2VkQXQ7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fcGF1c2VkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRlZEF0O1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAnbG9vcCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9vcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5sb29wID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3ZvbHVtZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2Fpbi5nYWluLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZihpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nYWluLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3BsYXlpbmcnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlpbmc7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdwYXVzZWQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZEF0ID4gMDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3NvdW5kJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ25vZGVGYWN0b3J5Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlRmFjdG9yeTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2hlbHBlcnMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlbHBlcnM7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBDb250ZXh0XG4gKi9cblxuV2ViQXVkaW8uY3JlYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGlmKHdpbmRvdy5BdWRpb0NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufTtcblxuLypcbiAqIFNvdW5kXG4gKi9cblxuV2ViQXVkaW8uU291bmQgPSBmdW5jdGlvbihidWZmZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9ICcnO1xufTtcblxuV2ViQXVkaW8uU291bmQucHJvdG90eXBlID0ge1xuICAgIHBsYXk6IGZ1bmN0aW9uKGRlbGF5LCBvZmZzZXQpIHtcbiAgICAgICAgaWYoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IHRoaXMuX2NvbnRleHQuY3VycmVudFRpbWUgKyBkZWxheTtcbiAgICAgICAgfVxuICAgICAgICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdGhpcy5fbG9vcDtcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoZGVsYXksIG9mZnNldCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYodGhpcy5fbm9kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2RlW3RoaXMuX25vZGUubGVuZ3RoIC0gMV0uY29ubmVjdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5vZGU7XG4gICAgfSxcbiAgICBhZGROb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMuX25vZGUucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgIH0sXG4gICAgdXBkYXRlQ29ubmVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9ub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlLmNvbm5lY3QodGhpcy5fbm9kZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlW2ktMV0uY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnc291cmNlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UuYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUsICdsb29wJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUsICdkdXJhdGlvbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyID8gdGhpcy5fYnVmZmVyLmR1cmF0aW9uIDogMDtcbiAgICB9XG59KTtcblxuLypcbiAqIE5vZGVzXG4gKi9cblxuV2ViQXVkaW8uTm9kZUZhY3RvcnkgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGaWx0ZXIodHlwZSwgZnJlcXVlbmN5KSB7XG4gICAgICAgIHZhciBmaWx0ZXJOb2RlID0gY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgICAgZmlsdGVyTm9kZS50eXBlID0gdHlwZTtcbiAgICAgICAgaWYoZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZpbHRlck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJOb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdhaW46IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlUGFubmVyKCk7XG4gICAgICAgICAgICBub2RlLnBhbm5pbmdNb2RlbCA9ICdIUlRGJztcbiAgICAgICAgICAgIC8vbm9kZS5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeCwgMCk7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeSwgMCk7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeiwgMCk7XG4gICAgICAgICAgICAvL25vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICAvKlxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IGZvciBzdGVyZW8gaXMgSFJURiBcblxuXG4gICAgICAgICAgICAvLyBVc2VzIGEgM0QgY2FydGVzaWFuIGNvb3JkaW5hdGUgc3lzdGVtIFxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihvYmplY3QucG9zaXRpb24ueC8yOTAsIG9iamVjdC5wb3NpdGlvbi55LzI5MCwgb2JqZWN0LnBvc2l0aW9uLnovMjkwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldE9yaWVudGF0aW9uKDEsIDAsIDApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRWZWxvY2l0eSgwLCAwLCAwKTtcblxuICAgICAgICAgICAgLy8gRGlzdGFuY2UgbW9kZWwgYW5kIGF0dHJpYnV0ZXMgXG4gICAgICAgICAgICBub2RlLmRpc3RhbmNlTW9kZWwgPSAnaW52ZXJzZSc7IC8vICdsaW5lYXInICdpbnZlcnNlJyAnZXhwb25lbnRpYWwnIFxuICAgICAgICAgICAgbm9kZS5yZWZEaXN0YW5jZSA9IDE7XG4gICAgICAgICAgICBub2RlLm1heERpc3RhbmNlID0gMTAwMDA7XG4gICAgICAgICAgICBub2RlLnJvbGxvZmZGYWN0b3IgPSAxO1xuXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25hbCBzb3VuZCBjb25lIC0gVGhlIGNvbmUgYW5nbGVzIGFyZSBpbiBkZWdyZWVzIGFuZCBydW4gZnJvbSAwIHRvIDM2MFxuICAgICAgICAgICAgLy8gbm9kZS5jb25lSW5uZXJBbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZU91dGVyQW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAvLyBub2RlLmNvbmVPdXRlckdhaW4gPSAwO1xuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gbm9ybWFsaXNlZCB2ZWNcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0T3JpZW50YXRpb24odmVjLngsIHZlYy55LCB2ZWMueik7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICBsb3dwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdsb3dwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdocGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignaGlnaHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhbmRwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdiYW5kcGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG93c2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2xvd3NoZWxmJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdoc2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2hpZ2hzaGVsZicsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVha2luZzogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcigncGVha2luZycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90Y2g6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ25vdGNoJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdhbGxwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVEZWxheSgpO1xuICAgICAgICAgICAgaWYodGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZWxheVRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZvbHZlcjogZnVuY3Rpb24oaW1wdWxzZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBpbXB1bHNlUmVzcG9uc2UgaXMgYW4gYXVkaW8gZmlsZSBidWZmZXJcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVDb252b2x2ZXIoKTtcbiAgICAgICAgICAgIG5vZGUuYnVmZmVyID0gaW1wdWxzZVJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHJldmVyYjogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udm9sdmVyKHRoaXMuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHNlY29uZHMsIGRlY2F5LCByZXZlcnNlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUltcHVsc2VSZXNwb25zZTogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIGEgcmV2ZXJiIGVmZmVjdFxuICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgfHwgMTtcbiAgICAgICAgICAgIGRlY2F5ID0gZGVjYXkgfHwgNTtcbiAgICAgICAgICAgIHJldmVyc2UgPSAhIXJldmVyc2U7XG5cbiAgICAgICAgICAgIHZhciBudW1DaGFubmVscyA9IDIsXG4gICAgICAgICAgICAgICAgcmF0ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByYXRlICogc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBpbXB1bHNlUmVzcG9uc2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlcihudW1DaGFubmVscywgbGVuZ3RoLCByYXRlKSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDApLFxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDEpLFxuICAgICAgICAgICAgICAgIG47XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuID0gcmV2ZXJzZSA/IGxlbmd0aCAtIDEgOiBpO1xuICAgICAgICAgICAgICAgIGxlZnRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICAgICAgcmlnaHRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbXB1bHNlUmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGFuYWx5c2VyOiBmdW5jdGlvbihmZnRTaXplKSB7XG4gICAgICAgICAgICBmZnRTaXplID0gZmZ0U2l6ZSB8fCAxMDI0O1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICBub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuODU7XG4gICAgICAgICAgICAvLyByZXNvbHV0aW9uIGZmdFNpemU6IDMyIC0gMjA0OCAocG93IDIpXG4gICAgICAgICAgICAvLyBmcmVxdWVuY3lCaW5Db3VudCB3aWxsIGJlIGhhbGYgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgbm9kZS5mZnRTaXplID0gZmZ0U2l6ZTtcbiAgICAgICAgICAgIC8vbm9kZS5taW5EZWNpYmVscyA9IC0xMDA7XG4gICAgICAgICAgICAvL25vZGUubWF4RGVjaWJlbHMgPSAtMzA7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBsb3dlcnMgdGhlIHZvbHVtZSBvZiB0aGUgbG91ZGVzdCBwYXJ0cyBvZiB0aGUgc2lnbmFsIGFuZCByYWlzZXMgdGhlIHZvbHVtZSBvZiB0aGUgc29mdGVzdCBwYXJ0c1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpO1xuICAgICAgICAgICAgLy8gbWluIGRlY2liZWxzIHRvIHN0YXJ0IGNvbXByZXNzaW5nIGF0IGZyb20gLTEwMCB0byAwXG4gICAgICAgICAgICBub2RlLnRocmVzaG9sZC52YWx1ZSA9IC0yNDtcbiAgICAgICAgICAgIC8vIGRlY2liZWwgdmFsdWUgdG8gc3RhcnQgY3VydmUgdG8gY29tcHJlc3NlZCB2YWx1ZSBmcm9tIDAgdG8gNDBcbiAgICAgICAgICAgIG5vZGUua25lZS52YWx1ZSA9IDMwO1xuICAgICAgICAgICAgLy8gYW1vdW50IG9mIGNoYW5nZSBwZXIgZGVjaWJlbCBmcm9tIDEgdG8gMjBcbiAgICAgICAgICAgIG5vZGUucmF0aW8udmFsdWUgPSAxMjtcbiAgICAgICAgICAgIC8vIGdhaW4gcmVkdWN0aW9uIGN1cnJlbnRseSBhcHBsaWVkIGJ5IGNvbXByZXNzb3IgZnJvbSAtMjAgdG8gMFxuICAgICAgICAgICAgLy8gbm9kZS5yZWR1Y3Rpb24udmFsdWVcbiAgICAgICAgICAgIC8vIHNlY29uZHMgdG8gcmVkdWNlIGdhaW4gYnkgMTBkYiBmcm9tIDAgdG8gMSAtIGhvdyBxdWlja2x5IHNpZ25hbCBhZGFwdGVkIHdoZW4gdm9sdW1lIGluY3JlYXNlZFxuICAgICAgICAgICAgbm9kZS5hdHRhY2sudmFsdWUgPSAwLjAwMDM7XG4gICAgICAgICAgICAvLyBzZWNvbmRzIHRvIGluY3JlYXNlIGdhaW4gYnkgMTBkYiBmcm9tIDAgdG8gMSAtIGhvdyBxdWlja2x5IHNpZ25hbCBhZGFwdGVkIHdoZW4gdm9sdW1lIHJlZGN1Y2VkXG4gICAgICAgICAgICBub2RlLnJlbGVhc2UudmFsdWUgPSAwLjI1O1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLypcbiAqIEhlbHBlcnNcbiAqL1xuXG5XZWJBdWRpby5IZWxwZXJzID0gZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gcmFtcChwYXJhbSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHBhcmFtLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBjb250ZXh0LmN1cnJlbnRUaW1lICsgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhblhZWihub2RlLCB4LCB5LCB6KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoeSwgMTApO1xuICAgICAgICB6ID0gcGFyc2VGbG9hdCh6LCAxMCk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFuWChub2RlLCB4KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgLy8geCBmcm9tIC1NYXRoLlBJLzQgdG8gTWF0aC5QSS80ICgtNDUgdG8gNDUgZGVnKVxuICAgICAgICB2YXIgeiA9IHggKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgaWYgKHogPiBNYXRoLlBJIC8gMikge1xuICAgICAgICAgICAgeiA9IE1hdGguUEkgLSB6O1xuICAgICAgICB9XG4gICAgICAgIHggPSBNYXRoLnNpbih4KTtcbiAgICAgICAgeiA9IE1hdGguc2luKHopO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHgsIDAsIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhbWVyYVBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgICAgLy8gc2V0IHRoZSBhdWRpbyBjb250ZXh0J3MgbGlzdGVuZXIgcG9zaXRpb24gdG8gbWF0Y2ggdGhlIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICBjb250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvcHBsZXIocGFubmVyTm9kZSwgeCwgeSwgeiwgZGVsdGFYLCBkZWx0YVksIGRlbHRhWiwgZGVsdGFUaW1lKSB7XG4gICAgICAgIC8vIFRyYWNraW5nIHRoZSB2ZWxvY2l0eSBjYW4gYmUgZG9uZSBieSBnZXR0aW5nIHRoZSBvYmplY3QncyBwcmV2aW91cyBwb3NpdGlvbiwgc3VidHJhY3RpbmcgXG4gICAgICAgIC8vIGl0IGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIGRpdmlkaW5nIHRoZSByZXN1bHQgYnkgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IGZyYW1lXG4gICAgICAgIHBhbm5lck5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIHBhbm5lck5vZGUuc2V0VmVsb2NpdHkoZGVsdGFYL2RlbHRhVGltZSwgZGVsdGFZL2RlbHRhVGltZSwgZGVsdGFaL2RlbHRhVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGZpbHRlck5vZGUsIHZhbHVlLCBxdWFsaXR5LCBnYWluKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xuICAgICAgICBxdWFsaXR5ID0gcGFyc2VGbG9hdChxdWFsaXR5LCAxMCk7XG4gICAgICAgIGdhaW4gPSBwYXJzZUZsb2F0KGdhaW4sIDEwKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICBmaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGdldEZyZXF1ZW5jeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9maWx0ZXJOb2RlLlEudmFsdWUgPSBxdWFsaXR5O1xuICAgICAgICAvL2ZpbHRlck5vZGUuZ2Fpbi52YWx1ZSA9IGdhaW47XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZyZXF1ZW5jeSBieSBwYXNzaW5nIG51bWJlciBmcm9tIDAgdG8gMVxuICAgIGZ1bmN0aW9uIGdldEZyZXF1ZW5jeSh2YWx1ZSkge1xuICAgICAgICAvLyBDbGFtcCB0aGUgZnJlcXVlbmN5IGJldHdlZW4gdGhlIG1pbmltdW0gdmFsdWUgKDQwIEh6KSBhbmQgaGFsZiBvZiB0aGVcbiAgICAgICAgLy8gc2FtcGxpbmcgcmF0ZS5cbiAgICAgICAgdmFyIG1pblZhbHVlID0gNDA7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSAvIDI7XG4gICAgICAgIC8vIExvZ2FyaXRobSAoYmFzZSAyKSB0byBjb21wdXRlIGhvdyBtYW55IG9jdGF2ZXMgZmFsbCBpbiB0aGUgcmFuZ2UuXG4gICAgICAgIHZhciBudW1iZXJPZk9jdGF2ZXMgPSBNYXRoLmxvZyhtYXhWYWx1ZSAvIG1pblZhbHVlKSAvIE1hdGguTE4yO1xuICAgICAgICAvLyBDb21wdXRlIGEgbXVsdGlwbGllciBmcm9tIDAgdG8gMSBiYXNlZCBvbiBhbiBleHBvbmVudGlhbCBzY2FsZS5cbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygyLCBudW1iZXJPZk9jdGF2ZXMgKiAodmFsdWUgLSAxLjApKTtcbiAgICAgICAgLy8gR2V0IGJhY2sgdG8gdGhlIGZyZXF1ZW5jeSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICAgICAgICByZXR1cm4gbWF4VmFsdWUgKiBtdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2Uoc3RyZWFtLCBjb25uZWN0VG8pIHtcbiAgICAgICAgdmFyIG1lZGlhU3RyZWFtU291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSggc3RyZWFtICk7XG4gICAgICAgIGlmKGNvbm5lY3RUbykge1xuICAgICAgICAgICAgbWVkaWFTdHJlYW1Tb3VyY2UuY29ubmVjdChjb25uZWN0VG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgICAgIC8vIHNlZSBodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvZW4tVVMvcXVlc3Rpb25zLzk4NDE3OVxuICAgICAgICBpZihuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICB3aW5kb3cuaG9ycmlibGVfaGFja19mb3JfbW96aWxsYSA9IG1lZGlhU3RyZWFtU291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYVN0cmVhbVNvdXJjZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmYWRlOiBmdW5jdGlvbihnYWluTm9kZSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICByYW1wKGdhaW5Ob2RlLmdhaW4sIHZhbHVlLCBkdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhblg6IGZ1bmN0aW9uKHBhbm5lck5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBwYW5YKHBhbm5lck5vZGUsIHZhbHVlICogTWF0aC5QSSAvIDQpO1xuICAgICAgICB9LFxuICAgICAgICAnc2V0Q2FtZXJhUG9zaXRpb24nOiBzZXRDYW1lcmFQb3NpdGlvbixcbiAgICAgICAgJ3Bhbic6IHBhblhZWixcbiAgICAgICAgJ2RvcHBsZXInOiBkb3BwbGVyLFxuICAgICAgICAnZmlsdGVyJzogZmlsdGVyLFxuICAgICAgICAnZ2V0RnJlcXVlbmN5JzogZ2V0RnJlcXVlbmN5LFxuICAgICAgICAnY3JlYXRlTWljcm9waG9uZVNvdXJjZSc6IGNyZWF0ZU1pY3JvcGhvbmVTb3VyY2VcbiAgICB9O1xufTtcblxuLypcblxuVGhyZWVKUyBwb3NpdGlvbmFsXG5cbnNldFBvc2l0aW9uQW5kVmVsb2NpdHkgOiBmdW5jdGlvbihvYmplY3QsIGF1ZGlvTm9kZSwgeCwgeSwgeiwgZHQpIHtcbiAgICB2YXIgcCA9IG9iamVjdC5tYXRyaXhXb3JsZC5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBweCA9IHAueCwgcHkgPSBwLnksIHB6ID0gcC56O1xuICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoeCx5LHopO1xuICAgIG9iamVjdC51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgIHZhciBxID0gb2JqZWN0Lm1hdHJpeFdvcmxkLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIGR4ID0gcS54LXB4LCBkeSA9IHEueS1weSwgZHogPSBxLnotcHo7XG4gICAgaWYgKHRoaXMucG9zaXRpb25FbmFibGVkKSB7XG4gICAgICBhdWRpb05vZGUuc2V0UG9zaXRpb24ocS54LCBxLnksIHEueik7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbG9jaXR5RW5hYmxlZCkge1xuICAgICAgYXVkaW9Ob2RlLnNldFZlbG9jaXR5KGR4L2R0LCBkeS9kdCwgZHovZHQpO1xuICAgIH1cbiAgfSxcblxuICBzZXRQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCBvYmplY3Quc291bmQucGFubmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDEpO1xuICAgICAgdmFyIG0gPSBvYmplY3QubWF0cml4V29ybGQ7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuICAgICAgb2JqZWN0LnNvdW5kLnBhbm5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgIG0ubjE0ID0gbXg7XG4gICAgICBtLm4yNCA9IG15OyBcbiAgICAgIG0ubjM0ID0gbXo7XG4gICAgfVxuICB9LFxuXG4gIHNldExpc3RlbmVyUG9zaXRpb24gOiBmdW5jdGlvbihvYmplY3QsIHgsIHksIHosIGR0KSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkFuZFZlbG9jaXR5KG9iamVjdCwgdGhpcy5hdWRpby5jb250ZXh0Lmxpc3RlbmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgbSA9IG9iamVjdC5tYXRyaXg7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG5cbiAgICAgIHZhciB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMSk7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuXG4gICAgICB2YXIgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygwLC0xLDApO1xuICAgICAgbS5tdWx0aXBseVZlY3RvcjModXApO1xuICAgICAgdXAubm9ybWFsaXplKCk7XG5cbiAgICAgIHRoaXMuYXVkaW8uY29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56LCB1cC54LCB1cC55LCB1cC56KTtcblxuICAgICAgbS5uMTQgPSBteDtcbiAgICAgIG0ubjI0ID0gbXk7IFxuICAgICAgbS5uMzQgPSBtejtcbiAgICB9XG4gIH0sXG5cblxuICAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYkF1ZGlvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpO1xuXG5mdW5jdGlvbiBBbmFseXNlcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICAvL3RoaXMuc291bmQgPSBcbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdQaWFubycpLmRhdGEpO1xuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnQmFzcycpLmRhdGEpO1xuICAgIC8vIDEwMjQgZmZ0IHNpemUgaXMgNTEyIHBhcnRzXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigxMDI0KTtcbiAgICAvL3RoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIHZhciBkaXNwbGF5ID0gbmV3IEFuYWx5c2VyRGlzcGxheSgpO1xuXG4gICAgdmFyIHBhbmVsRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdGcmVxdWVuY2llcycpO1xuICAgIHRoaXMuc2xpZGVyU21vb3RoaW5nID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIocGFuZWxGcmVxLmVsLCAnU21vb3RoaW5nJywgMCwgMSwgMC4wMSwgdGhpcy5ub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCwgdGhpcy51cGRhdGVTbW9vdGhpbmcsIHRoaXMpO1xuICAgIHRoaXMuZHJvcGRvd25GRlQgPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHBhbmVsRnJlcS5lbCwge1xuICAgICAgICAnNjQnOiA2NCxcbiAgICAgICAgJzEyOCc6IDEyOCxcbiAgICAgICAgJzI1Nic6IDI1NixcbiAgICAgICAgJzUxMic6IDUxMixcbiAgICAgICAgJzEwMjQnOiAxMDI0LFxuICAgICAgICAnMjA0OCc6IDIwNDhcbiAgICB9LCB0aGlzLnVwZGF0ZUZGVFNpemUsIHRoaXMsIHRoaXMubm9kZS5mZnRTaXplLCAnRkZUIFNpemUnKTtcblxuICAgIHZhciBmcmVxID0gZGlzcGxheS5hZGRGcmVxKHRoaXMubm9kZSk7XG4gICAgZnJlcS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsRnJlcS5hcHBlbmQoZnJlcS5jYW52YXMpO1xuXG4gICAgdmFyIHBhbmVsV2F2ZSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdXYXZlJyk7XG4gICAgdmFyIHdhdmUgPSBkaXNwbGF5LmFkZFdhdmUodGhpcy5ub2RlKTtcbiAgICB3YXZlLnRoaWNrbmVzcyA9IDE7XG4gICAgd2F2ZS5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsV2F2ZS5hcHBlbmQod2F2ZS5jYW52YXMpO1xuXG4gICAgdmFyIHBhbmVsTGV2ZWxzID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0xldmVscycpO1xuICAgIHZhciBsZXZlbHMgPSBkaXNwbGF5LmFkZExldmVscyh0aGlzLm5vZGUpO1xuICAgIGxldmVscy5iYWNrZ3JvdW5kID0gJ3JnYigwLDAsMCknO1xuICAgIHBhbmVsTGV2ZWxzLmFwcGVuZChsZXZlbHMuY2FudmFzKTtcbn1cblxuQW5hbHlzZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkFuYWx5c2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFuYWx5c2VyO1xuXG5BbmFseXNlci5wcm90b3R5cGUudXBkYXRlU21vb3RoaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLm5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xufTtcblxuQW5hbHlzZXIucHJvdG90eXBlLnVwZGF0ZUZGVFNpemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5mZnRTaXplID0gcGFyc2VJbnQodmFsdWUpO1xufTtcblxuQW5hbHlzZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQW5hbHlzZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuLi8uLi91dGlscy93ZWItYXVkaW8uanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0TG9hZGluZ0JhciA9IHJlcXVpcmUoJy4vbG9hZGluZy1iYXIuanMnKTtcblxuZnVuY3Rpb24gQWJzdHJhY3REZW1vKGVsLCBhdWRpb0NvbnRleHQpIHtcblx0dGhpcy5lbCA9IGVsO1xuXHR0aGlzLmF1ZGlvID0gbmV3IFdlYkF1ZGlvKGF1ZGlvQ29udGV4dCk7XG59XG5cbkFic3RyYWN0RGVtby5wcm90b3R5cGUgPSB7XG5cdHBsYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuYXVkaW8ucGxheSgpO1xuXHR9LFxuXHRwYXVzZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5hdWRpby5wYXVzZSgpO1xuXHR9LFxuXHRsb2FkOiBmdW5jdGlvbih1cmwsIGZuKSB7XG5cdFx0TG9hZGluZ0Jhci5zaG93KCk7XG5cdFx0dmFyIGxvYWRlciA9IG5ldyBBc3NldExvYWRlci5Mb2FkZXIodXJsKTtcblx0XHRcdGxvYWRlci5jcm9zc09yaWdpbiA9IHRydWU7XG5cdFx0XHRsb2FkZXIub25Qcm9ncmVzcy5hZGQoZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRMb2FkaW5nQmFyLnVwZGF0ZShwKTtcblx0XHRcdH0pO1xuXHRcdFx0bG9hZGVyLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbihidWZmZXIpIHtcblx0XHRcdFx0bG9hZGVyLm9uUHJvZ3Jlc3MucmVtb3ZlQWxsKCk7XG5cdFx0XHRcdExvYWRpbmdCYXIuaGlkZSgpO1xuXHRcdFx0XHRmbi5jYWxsKHRoaXMsIGJ1ZmZlcik7XG5cdFx0XHR9LCB0aGlzKTtcblx0XHRcdGxvYWRlci5sb2FkV2ViQXVkaW8odGhpcy5hdWRpby5jb250ZXh0KTtcblx0XHRyZXR1cm4gbG9hZGVyO1xuXHR9LFxuXHRjb25uZWN0TWljcm9waG9uZTogZnVuY3Rpb24obWljcm9waG9uZSkge1xuXHRcdHRoaXMubWljcm9waG9uZSA9IG1pY3JvcGhvbmU7XG5cdFx0dGhpcy5hdWRpby5oZWxwZXJzLmNyZWF0ZU1pY3JvcGhvbmVTb3VyY2UobWljcm9waG9uZS5zdHJlYW0sIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5fZ2Fpbik7XG5cdH0sXG5cdGRpc2Nvbm5lY3RNaWNyb3Bob25lOiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLm1pY3JvcGhvbmUpIHtcblx0XHRcdHRoaXMubWljcm9waG9uZS5kaXNjb25uZWN0KCk7XG5cdFx0XHR0aGlzLm1pY3JvcGhvbmUgPSBudWxsO1xuXHRcdH1cblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5wYXVzZSgpO1xuXHRcdHRoaXMuZGlzY29ubmVjdE1pY3JvcGhvbmUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdERlbW87XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEFuYWx5c2VyRGlzcGxheSgpIHtcbiAgICB0aGlzLmFuYWx5c2VycyA9IFtdO1xuICAgIHRoaXMuZHJhdygpO1xufVxuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZEZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LkZyZXEsIG5vZGUsIGVsKTtcbiAgICAvKmlmKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NhbnZhcycpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vdGhpcy5hbmFseXNlcnMucHVzaChuZXcgQW5hbHlzZXJEaXNwbGF5LkhUTUxWaWV3KG5vZGUsIGVsKSk7XG4gICAgfSovXG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LldhdmUsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkTGV2ZWxzID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5MZXZlbHMsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkRGlzcGxheSA9IGZ1bmN0aW9uKENsYXNzLCBub2RlLCBlbCkge1xuICAgIGVsID0gZWwgfHwgdGhpcy5nZXRDYW52YXMoKTtcbiAgICB2YXIgZGlzcGxheSA9IG5ldyBDbGFzcyhub2RlLCBlbCk7XG4gICAgdGhpcy5hbmFseXNlcnMucHVzaChkaXNwbGF5KTtcbiAgICByZXR1cm4gZGlzcGxheTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuZ2V0Q2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIHdpZHRoID0gd2lkdGggfHwgNTEyO1xuICAgIGhlaWdodCA9IGhlaWdodCB8fCAyNTY7XG4gICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjLndpZHRoID0gd2lkdGg7XG4gICAgYy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIGM7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgICB2YXIgbCA9IHRoaXMuYW5hbHlzZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmFuYWx5c2Vyc1tpXS5kcmF3KCk7XG4gICAgfVxufTtcblxuLy8gZnJlcXVlbmNpZXNcblxuQW5hbHlzZXJEaXNwbGF5LkZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuRnJlcS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpLFxuICAgICAgICBiYXJTcGFjaW5nID0gMDtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0LCBiYXJXaWR0aCAtIGJhclNwYWNpbmcsIDAgLSBoZWlnaHQgKiBwZXJjZW50KTtcbiAgICB9XG59O1xuXG4vLyB3YXZlZm9ybVxuXG5BbmFseXNlckRpc3BsYXkuV2F2ZSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50aGlja25lc3MgPSAxO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlVGltZURvbWFpbkRhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0IC0gaGVpZ2h0ICogcGVyY2VudCAtIDEsIHRoaXMudGhpY2tuZXNzLCB0aGlzLnRoaWNrbmVzcyk7XG4gICAgfVxufTtcblxuQW5hbHlzZXJEaXNwbGF5LkxldmVscyA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuTGV2ZWxzLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgZnJlcXVlbmN5QmluQ291bnQgPSB0aGlzLm5vZGUuZnJlcXVlbmN5QmluQ291bnQ7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICB2YXIgbGVuZ3RoID0gZnJlcUJ5dGVEYXRhLmxlbmd0aCxcbiAgICAgICAgdG90YWwgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG90YWwgKz0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgIH1cbiAgICB2YXIgYXZlcmFnZSA9IHRvdGFsIC8gbGVuZ3RoO1xuICAgIHZhciBwZXJjZW50ID0gYXZlcmFnZSAvIDEyODtcblxuICAgIHZhciBncmFkaWVudCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnaHNsKDEyOCwgMTAwJSwgNTAlKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnaHNsKDM2MCwgMTAwJSwgNTAlKScpO1xuXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIGhlaWdodCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2VyRGlzcGxheTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTG9hZGluZ0JhcigpIHtcbiAgICB2YXIgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxvYWRlcicpLFxuICAgICAgICBsYWJlbCA9IGxvYWRlci5xdWVyeVNlbGVjdG9yKCcuTG9hZGVyLWxhYmVsJyk7XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZShwKSB7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IE1hdGgucm91bmQocCAqIDEwMCkgKyAnJSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgJ3VwZGF0ZSc6IHVwZGF0ZSxcbiAgICAgICAgJ3Nob3cnOiBzaG93LFxuICAgICAgICAnaGlkZSc6IGhpZGVcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb2FkaW5nQmFyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVJQ29tcG9uZW50cygpIHtcbn1cblxuLy8gaGVscGVyc1xuXG5mdW5jdGlvbiBhZGRLZXlEb3duKGtleSwgZm4sIGNvbnRleHQpIHtcbiAgICBpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb25LZXlEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICAgICAgdmFyIHJlbW92ZUtleSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZW1vdmVLZXk7XG4gICAgfVxufVxuXG4vKlxuICogU2xpZGVyXG4gKi9cblxuVUlDb21wb25lbnRzLlNsaWRlciA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIG1pbiwgbWF4LCBzdGVwLCB2YWx1ZSwgZm4sIGNvbnRleHQpIHtcbiAgICB2YXIgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGJsLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICBsYmwuY2xhc3NOYW1lID0gJ1NsaWRlci1sYWJlbCc7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ1NsaWRlci1pbnB1dCc7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG1pbik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgbWF4KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgc3RlcCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0LmNsYXNzTmFtZSA9ICdTbGlkZXItb3V0cHV0JztcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ1NsaWRlciBTbGlkZXItLWxhcmdlJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxibCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG91dHB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuZWwgPSBmb3JtO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5TbGlkZXIucHJvdG90eXBlLCAndmFsdWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuLypcbiAqIFBhbmVsXG4gKi9cblxuVUlDb21wb25lbnRzLlBhbmVsID0gZnVuY3Rpb24ocGFyZW50LCB0aXRsZSkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdQYW5lbCc7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oZWwpIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5lbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLlBhbmVsLnByb3RvdHlwZSwgJ3RpdGxlJywge1xuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMudGl0bGVFbCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKHRoaXMudGl0bGVFbCwgdGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpdGxlRWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBCdXR0b25cbiAqL1xuXG5VSUNvbXBvbmVudHMuQnV0dG9uID0gZnVuY3Rpb24ocGFyZW50LCBsYWJlbCwgZm4sIGNvbnRleHQsIGtleSkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnQnV0dG9uJywgJ0J1dHRvbi0tZGVmYXVsdCcpO1xuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCB8fCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlS2V5ID0gYWRkS2V5RG93bihrZXksIGZuLCBpbnB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBpbnB1dDtcbn07XG5cbi8qXG4gKiBUb2dnbGUgQnV0dG9uXG4gKi9cblxuVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWxBLCBsYWJlbEIsIGZuQSwgZm5CLCBjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWxBO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGxhYmVsQjtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnQnV0dG9uJywgJ0J1dHRvbi0tZGVmYXVsdCcpO1xuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5pbm5lckhUTUwgPT09IGxhYmVsQSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbEI7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbGFiZWxBO1xuICAgICAgICAgICAgaWYodHlwZW9mIGZuQSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGZuQS5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBsYWJlbEI7XG4gICAgICAgICAgICBpZih0eXBlb2YgZm5CID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZm5CLmNhbGwoY29udGV4dCB8fCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUpO1xuICAgIHRoaXMucmVtb3ZlS2V5ID0gYWRkS2V5RG93bihrZXksIHRvZ2dsZSwgaW5wdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbEI7XG4gICAgfTtcbiAgICB0aGlzLmVsID0gaW5wdXQ7XG59O1xuXG4vKlxuICogRHJvcGRvd25cbiAqL1xuXG5VSUNvbXBvbmVudHMuRHJvcGRvd24gPSBmdW5jdGlvbihwYXJlbnQsIG9wdGlvbnMsIGZuLCBjb250ZXh0LCBzZWxlY3RlZFZhbHVlLCB0aXRsZSkge1xuICAgIHZhciBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRkLmNsYXNzTmFtZSA9ICdEcm9wZG93bic7XG4gICAgZm9yKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YXIgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25zW2tleV0pO1xuICAgICAgICBvLmlubmVySFRNTCA9IGtleTtcbiAgICAgICAgZGQuYXBwZW5kQ2hpbGQobyk7XG4gICAgICAgIGlmKG9wdGlvbnNba2V5XSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0LCBkZC5vcHRpb25zW2RkLnNlbGVjdGVkSW5kZXhdLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBpZih0aXRsZSkge1xuICAgICAgICAgICAgdmFyIGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgaC5jbGFzc05hbWUgPSAnRHJvcGRvd24tdGl0bGUnO1xuICAgICAgICAgICAgaC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChoKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGQpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZGQ7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLkRyb3Bkb3duLnByb3RvdHlwZSwgJ3ZhbHVlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm9wdGlvbnNbdGhpcy5lbC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5Ecm9wZG93bi5wcm90b3R5cGUsICd0ZXh0Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm9wdGlvbnNbdGhpcy5lbC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVJQ29tcG9uZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIENvbXByZXNzb3IoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcbiAgICBmb3IgKHZhciBpIGluIGZpbGVzKSB7XG4gICAgICAgIHRoaXMuYXVkaW8uYWRkKGZpbGVzW2ldLmRhdGEpO1xuICAgIH1cbiAgICAvL3RoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG5cbiAgICAvLyBtYXN0ZXIgZ2FpbiA+IGNvbXByZXNzb3IgPiBkZXN0aW5hdGlvblxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY29tcHJlc3NvcigpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0R5bmFtaWNzJyk7XG4gICAgdGhpcy5vbkJ1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMucGFuZWwuZWwsICdUVVJOIE9GRicsICdUVVJOIE9OJywgdGhpcy5vZmYsIHRoaXMub24sIHRoaXMpO1xuICAgIHRoaXMucGFuZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0aGlzLnNsaWRlclRocmVzaG9sZCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd0aHJlc2hvbGQnLCAtMTAwLCAwLCAwLjEsIHRoaXMubm9kZS50aHJlc2hvbGQudmFsdWUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlcktuZWUgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAna25lZScsIDAsIDQwLCAwLjEsIHRoaXMubm9kZS5rbmVlLnZhbHVlLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJSYXRpbyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdyYXRpbycsIDEsIDIwLCAwLjEsIHRoaXMubm9kZS5yYXRpby52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyQXR0YWNrID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ2F0dGFjaycsIDAsIDEsIDAuMDAwMSwgdGhpcy5ub2RlLmF0dGFjay52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyUmVsZWFzZSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdyZWxlYXNlJywgMCwgMSwgMC4wMDAxLCB0aGlzLm5vZGUucmVsZWFzZS52YWx1ZSwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5Db21wcmVzc29yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5Db21wcmVzc29yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbXByZXNzb3I7XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZS50aHJlc2hvbGQudmFsdWUgPSB0aGlzLnNsaWRlclRocmVzaG9sZC52YWx1ZTtcbiAgICB0aGlzLm5vZGUua25lZS52YWx1ZSA9IHRoaXMuc2xpZGVyS25lZS52YWx1ZTtcbiAgICB0aGlzLm5vZGUucmF0aW8udmFsdWUgPSB0aGlzLnNsaWRlclJhdGlvLnZhbHVlO1xuICAgIHRoaXMubm9kZS5hdHRhY2sudmFsdWUgPSB0aGlzLnNsaWRlckF0dGFjay52YWx1ZTtcbiAgICB0aGlzLm5vZGUucmVsZWFzZS52YWx1ZSA9IHRoaXMuc2xpZGVyUmVsZWFzZS52YWx1ZTtcbn07XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5fZ2Fpbi5jb25uZWN0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTsgICAgXG59O1xuXG5Db21wcmVzc29yLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmRpc2Nvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5hdWRpby5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbn07XG5cbkNvbXByZXNzb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcHJlc3NvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIEZpbHRlcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0RydW1zJykuZGF0YSk7XG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5maWx0ZXIubG93cGFzcygpO1xuICAgIHRoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdGaWx0ZXIgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9CaXF1YWRGaWx0ZXJOb2RlXCI+KzwvYT4nKTtcbiAgICB0aGlzLmRyb3Bkb3duID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bih0aGlzLnBhbmVsLmVsLCBNb2RlbC5maWx0ZXIsIHRoaXMudXBkYXRlRmlsdGVyVHlwZSwgdGhpcyk7XG5cbiAgICB0aGlzLnNsaWRlckZyZXEgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnRnJlcXVlbmN5JywgMCwgMSwgMC4wMSwgMC41LCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJRdWFsID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ1F1YWxpdHknLCAwLCAxMDAwLCAwLjEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlckdhaW4gPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnR2FpbicsIC00MCwgNDAsIDAuMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbkZpbHRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWx0ZXI7XG5cbkZpbHRlci5wcm90b3R5cGUudXBkYXRlRmlsdGVyVHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9kZS50eXBlID0gdGhpcy5kcm9wZG93bi50ZXh0O1xufTtcblxuRmlsdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF1ZGlvLmhlbHBlcnMuZmlsdGVyKHRoaXMubm9kZSwgdGhpcy5zbGlkZXJGcmVxLnZhbHVlLCB0aGlzLnNsaWRlclF1YWwudmFsdWUsIHRoaXMuc2xpZGVyR2Fpbi52YWx1ZSk7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExvYWRpbmdCYXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9hZGluZy1iYXIuanMnKSxcclxuXHRVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxyXG5cdEtleWJvYXJkID0gcmVxdWlyZSgnLi4vdXRpbHMva2V5Ym9hcmQuanMnKSxcclxuXHRSZXZlcmIgPSByZXF1aXJlKCcuL3JldmVyYi5qcycpLFxyXG5cdEFuYWx5c2VyID0gcmVxdWlyZSgnLi9hbmFseXNlci5qcycpLFxyXG5cdE11bHRpVHJhY2sgPSByZXF1aXJlKCcuL211bHRpLXRyYWNrLmpzJyksXHJcblx0UGFuVGhyZWVEID0gcmVxdWlyZSgnLi9wYW4tdGhyZWUtZC5qcycpLFxyXG5cdEZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVyLmpzJyksXHJcblx0TWljcm9waG9uZUlucHV0ID0gcmVxdWlyZSgnLi9taWNyb3Bob25lLWlucHV0LmpzJyksXHJcblx0T3NjaWxsYXRvciA9IHJlcXVpcmUoJy4vb3NjaWxsYXRvci5qcycpLFxyXG5cdE1pY3JvcGhvbmUgPSByZXF1aXJlKCcuLi91dGlscy9taWNyb3Bob25lLmpzJyksXHJcblx0Q29tcHJlc3NvciA9IHJlcXVpcmUoJy4vY29tcHJlc3Nvci5qcycpO1xyXG5cclxuZnVuY3Rpb24gR1VJKGVsKSB7XHJcblx0dGhpcy5lbCA9IGVsO1xyXG5cdHRoaXMuYWRkTG9hZGVyKCk7XHJcbn1cclxuXHJcbkdVSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGF1ZGlvQ29udGV4dCkge1xyXG5cdHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xyXG5cdExvYWRpbmdCYXIuaGlkZSgpO1xyXG5cclxuXHR0aGlzLm1lbnUgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ1JldmVyYicsIHRoaXMucmV2ZXJiLCB0aGlzLCBLZXlib2FyZC5PTkUpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0FuYWx5c2VyJywgdGhpcy5hbmFseXNlciwgdGhpcywgS2V5Ym9hcmQuVFdPKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdNdWx0aVRyYWNrJywgdGhpcy5tdWx0aVRyYWNrLCB0aGlzLCBLZXlib2FyZC5USFJFRSk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnUGFuJywgdGhpcy5wYW4sIHRoaXMsIEtleWJvYXJkLkZPVVIpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0ZpbHRlcicsIHRoaXMuZmlsdGVyLCB0aGlzLCBLZXlib2FyZC5GSVZFKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdNaWNyb3Bob25lJywgdGhpcy5taWNyb3Bob25lSW5wdXQsIHRoaXMsIEtleWJvYXJkLlNJWCk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnT3NjaWxsYXRvcicsIHRoaXMub3NjaWxsYXRvciwgdGhpcywgS2V5Ym9hcmQuU0VWRU4pO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0NvbXByZXNzb3InLCB0aGlzLmNvbXByZXNzb3IsIHRoaXMsIEtleWJvYXJkLkVJR0hUKTtcclxuXHJcblx0dGhpcy5jb250cm9scyA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XHJcblx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24odGhpcy5jb250cm9scy5lbCwgJ1BMQVknLCAnUEFVU0UnLCB0aGlzLnBsYXksIHRoaXMucGF1c2UsIHRoaXMsIEtleWJvYXJkLlNQQUNFQkFSKTtcclxuXHR0aGlzLm1pY3JvcGhvbmUgPSBuZXcgTWljcm9waG9uZSgpO1xyXG5cdGlmKHRoaXMubWljcm9waG9uZS5pc1N1cHBvcnRlZCkge1xyXG5cdFx0dGhpcy5taWNCdXR0b24gPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbih0aGlzLmNvbnRyb2xzLmVsLCAnTUlDIE9OJywgJ01JQyBPRkYnLCB0aGlzLmNvbm5lY3RNaWNyb3Bob25lLCB0aGlzLmRpc2Nvbm5lY3RNaWNyb3Bob25lLCB0aGlzLCBLZXlib2FyZC5NKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuZGVtb0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZW1vSG9sZGVyKTtcclxuXHJcblx0dGhpcy5vc2NpbGxhdG9yKCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnJldmVyYiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFJldmVyYih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYW5hbHlzZXIgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBBbmFseXNlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubXVsdGlUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKHRydWUpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBNdWx0aVRyYWNrKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wYW4gPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBQYW5UaHJlZUQodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IEZpbHRlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubWljcm9waG9uZUlucHV0ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSwgdHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE1pY3JvcGhvbmVJbnB1dCh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUub3NjaWxsYXRvciA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKHRydWUpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBPc2NpbGxhdG9yKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jb21wcmVzc29yID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IENvbXByZXNzb3IodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmNvbm5lY3RNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5taWNyb3Bob25lLm9uQ29ubmVjdGVkLmFkZCh0aGlzLm1pY3JvcGhvbmVDb25uZWN0ZWQsIHRoaXMpO1xyXG4gICAgdGhpcy5taWNyb3Bob25lLm9uRGVuaWVkLmFkZCh0aGlzLm1pY3JvcGhvbmVFcnJvciwgdGhpcyk7XHJcbiAgICB0aGlzLm1pY3JvcGhvbmUub25FcnJvci5hZGQodGhpcy5taWNyb3Bob25lRXJyb3IsIHRoaXMpO1xyXG4gICAgdGhpcy5taWNyb3Bob25lLmNvbm5lY3QoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubWljcm9waG9uZUNvbm5lY3RlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZGVtby5jb25uZWN0TWljcm9waG9uZSh0aGlzLm1pY3JvcGhvbmUpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5taWNyb3Bob25lRXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm1pY0J1dHRvbi5yZXNldCgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5kaXNjb25uZWN0TWljcm9waG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZGVtby5kaXNjb25uZWN0TWljcm9waG9uZSgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jbGVhckRlbW8gPSBmdW5jdGlvbihoaWRlTWljcm9waG9uZSwgaGlkZUNvbnRyb2xzKSB7XHJcblx0aWYodGhpcy5kZW1vKSB7XHJcblx0XHR0aGlzLmRlbW8uZGVzdHJveSgpO1xyXG5cdH1cclxuXHR0aGlzLmRlbW9Ib2xkZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0dGhpcy5wbGF5QnV0dG9uLnJlc2V0KCk7XHJcblx0dGhpcy5taWNCdXR0b24ucmVzZXQoKTtcclxuXHJcblx0aWYoaGlkZU1pY3JvcGhvbmUpIHtcclxuXHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMubWljQnV0dG9uLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHJcblx0aWYoaGlkZUNvbnRyb2xzKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuY29udHJvbHMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0fVxyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLnBsYXkoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8ucGF1c2UoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYWRkTG9hZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0TG9hZGluZ0Jhci5zaG93KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnVwZGF0ZUxvYWRQcm9ncmVzcyA9IGZ1bmN0aW9uKHApIHtcclxuXHRMb2FkaW5nQmFyLnVwZGF0ZShwKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR1VJO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKSxcbiAgICBNaWNyb3Bob25lID0gcmVxdWlyZSgnLi4vdXRpbHMvbWljcm9waG9uZS5qcycpO1xuXG5mdW5jdGlvbiBNaWNyb3Bob25lSW5wdXQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5wbmxJbmZvID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnQWxsb3cgbWljb3Bob25lIHRvIGJlZ2luJyk7XG5cbiAgICB0aGlzLm1pY3JvcGhvbmUgPSBuZXcgTWljcm9waG9uZSgpO1xuXG4gICAgaWYodGhpcy5taWNyb3Bob25lLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5vbkNvbm5lY3RlZC5hZGQodGhpcy5vblN1Y2Nlc3MsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25EZW5pZWQuYWRkKHRoaXMub25EZW5pZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm1pY3JvcGhvbmUub25FcnJvci5hZGQodGhpcy5vbkVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBnZXRVc2VyTWVkaWEgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG59XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pY3JvcGhvbmVJbnB1dDtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5nZXRNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfKCB7YXVkaW86dHJ1ZX0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzZWxmLm9uU3VjY2VzcyhzdHJlYW0pO1xuICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0pO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAvL3RoaXMubWljcm9waG9uZS5jcmVhdGVXZWJBdWRpb1NvdXJjZSh0aGlzLmF1ZGlvLmNvbnRleHQsIHRoaXMuYXVkaW8uX2dhaW4pO1xuICAgIHRoaXMuY29ubmVjdFRvTWljcm9waG9uZShzdHJlYW0pO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5hbmFseXNlcigxMDI0KTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG4gICAgdmFyIHBhbmVsV2F2ZSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCwgJ01pY3JvcGhvbmUnKTtcbiAgICB2YXIgd2F2ZSA9IGRpc3BsYXkuYWRkV2F2ZSh0aGlzLm5vZGUpO1xuICAgIHdhdmUudGhpY2tuZXNzID0gMTtcbiAgICB3YXZlLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxXYXZlLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG5cbiAgICB0aGlzLnBubEluZm8ucmVtb3ZlKCk7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLm9uRGVuaWVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBQZXJtaXNzaW9uIGRlbmllZC4gWW91IGNhbiB1bmRvIHRoaXMgYnkgY2xpY2tpbmcgdGhlIGNhbWVyYSBpY29uIHdpdGggdGhlIHJlZCBjcm9zcyBpbiB0aGUgYWRkcmVzcyBiYXIuJyk7XG4gICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xufTtcblxuTWljcm9waG9uZUlucHV0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuZGlzcGxheUVycm9yKCdFUlJPUjogJyArIGUpO1xuICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbn07XG5cbk1pY3JvcGhvbmVJbnB1dC5wcm90b3R5cGUuZGlzcGxheUVycm9yID0gZnVuY3Rpb24obXNnKSB7XG4gICAgaWYoIXRoaXMucG5sRXJyb3IpIHtcbiAgICAgICAgdGhpcy5wbmxFcnJvciA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMucG5sRXJyb3IuZWwuY2xhc3NMaXN0LmFkZCgnUGFuZWwtLWVycm9yJyk7XG4gICAgfVxuICAgIHRoaXMucG5sRXJyb3IudGl0bGUgPSBtc2c7XG59O1xuXG5NaWNyb3Bob25lSW5wdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZih0aGlzLm1pY3JvcGhvbmUpIHtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5taWNyb3Bob25lID0gbnVsbDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY3JvcGhvbmVJbnB1dDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBNdWx0aVRyYWNrKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTXVsdGlUcmFjay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTXVsdGlUcmFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aVRyYWNrO1xuXG5NdWx0aVRyYWNrLnByb3RvdHlwZS5jcmVhdGVHYWluQ29udHJvbHMgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuXHR2YXIgdm9sID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIoZWwsICdnYWluJywgMCwgMiwgMC4xLCAxLCBmdW5jdGlvbigpIHtcblx0XHRub2RlLmdhaW4udmFsdWUgPSB0aGlzLnZhbHVlO1xuXHR9KTtcbiAgICB2YXIgbXV0ZSA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKGVsLCAnbXV0ZScsICd1bm11dGUnLFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXV0ZS52b2x1bWUgPSBub2RlLmdhaW4udmFsdWU7XG4gICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2b2wudmFsdWUgPSAwO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZvbC52YWx1ZSA9IG11dGUudm9sdW1lIHx8IDE7IFxuICAgICAgICB9XG4gICAgKTtcbn07XG5cbk11bHRpVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlUcmFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKTtcblxuZnVuY3Rpb24gT3NjaWxsYXRvcihlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDIwNDgpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgXG4gICAgdGhpcy5wbmwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwsICdzaW5lJyk7XG4gICAgdGhpcy5kcm9wZG93blR5cGUgPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHRoaXMucG5sLmVsLCBNb2RlbC53YXZlLCB0aGlzLnVwZGF0ZVR5cGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucG5sLmVsLCAnRnJlcXVlbmN5JywgMCwgMSwgMC4wMSwgMC4xLCB0aGlzLnVwZGF0ZUZyZXEsIHRoaXMpO1xuICAgIFxuICAgIHZhciBkaXNwbGF5ID0gbmV3IEFuYWx5c2VyRGlzcGxheSgpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICB0aGlzLnBubC5hcHBlbmQod2F2ZS5jYW52YXMpO1xufVxuXG5Pc2NpbGxhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5Pc2NpbGxhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9zY2lsbGF0b3I7XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnVwZGF0ZVR5cGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy50eXBlID0gdmFsdWU7XG4gICAgdGhpcy5wbmwudGl0bGUgPSB2YWx1ZTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnVwZGF0ZUZyZXEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLmF1ZGlvLmhlbHBlcnMuZ2V0RnJlcXVlbmN5KHZhbHVlKTtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9zYyA9IHRoaXMuYXVkaW8uY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgdGhpcy5vc2MudHlwZSA9IHRoaXMuZHJvcGRvd25UeXBlLnZhbHVlO1xuICAgIHRoaXMub3NjLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuYXVkaW8uaGVscGVycy5nZXRGcmVxdWVuY3kodGhpcy5zbGlkZXJGcmVxLnZhbHVlKTtcbiAgICB0aGlzLmF1ZGlvLl9nYWluLnZhbHVlID0gMC4yO1xuICAgIHRoaXMub3NjLmNvbm5lY3QodGhpcy5hdWRpby5fZ2Fpbik7XG4gICAgdGhpcy5vc2Muc3RhcnQoMCk7XG59O1xuXG5Pc2NpbGxhdG9yLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLm9zYykgeyByZXR1cm47IH1cbiAgICB0aGlzLm9zYy5zdG9wKDApO1xuICAgIHRoaXMub3NjID0gbnVsbDtcbn07XG5cbk9zY2lsbGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3NjaWxsYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBQYW5UaHJlZUQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5wYW4oKTtcbiAgICB0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnUGFuJyk7XG5cbiAgICAvL3RoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLU1hdGguUEksIE1hdGguUEksIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclggPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneCcsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJZID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3knLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWiA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd6JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbn1cblxuUGFuVGhyZWVELnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5QYW5UaHJlZUQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFuVGhyZWVEO1xuXG5QYW5UaHJlZUQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vdGhpcy5hdWRpby5oZWxwZXJzLnBhblgodGhpcy5ub2RlLCB2YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5hdWRpby5oZWxwZXJzLnBhbih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyWC52YWx1ZSwgdGhpcy5zbGlkZXJZLnZhbHVlLCB0aGlzLnNsaWRlcloudmFsdWUpO1xufTtcblxuUGFuVGhyZWVELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuVGhyZWVEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBSZXZlcmIoZWwsIGF1ZGlvQ29udGV4dCkge1xuXHRBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuXHR0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcblx0dGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5yZXZlcmIoKTtcblx0dGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cblx0dGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdSZXZlcmInKTtcblx0dGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuaW1wdWxzZSwgdGhpcy51cGRhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXG5cdHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCAxLCB0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlLCB0aGlzKTtcblx0dGhpcy5zbGlkZXJEZWNheSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdkZWNheScsIDAsIDIwLCAwLjEsIDUsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xufVxuXG5SZXZlcmIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblJldmVyYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXZlcmI7XG5cblJldmVyYi5wcm90b3R5cGUuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHRoaXMuc2xpZGVyU2Vjb25kcy52YWx1ZSwgdGhpcy5zbGlkZXJEZWNheS52YWx1ZSk7XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLnVwZGF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmKHZhbHVlID09PSAnJykgeyByZXR1cm47IH1cblx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR0aGlzLnNsaWRlckRlY2F5LmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG5cdHN3aXRjaCh2YWx1ZSkge1xuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdHRoaXMuc2xpZGVyU2Vjb25kcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5sb2FkKHZhbHVlICsgTW9kZWwuZXh0ZW5zaW9uLCB0aGlzLmFwcGx5SW1wdWxzZSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5hcHBseUltcHVsc2UgPSBmdW5jdGlvbihidWZmZXIpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbn07XG5cblJldmVyYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0dGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2F1ZGlvLW1hbmFnZXIuanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuL2FwcC91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuL2FwcC9tb2RlbC9hdWRpby1tb2RlbC5qcycpLFxuXHRHVUkgPSByZXF1aXJlKCcuL2FwcC92aWV3L2d1aS5qcycpO1xuXG5yZXF1aXJlKCcuL2FwcC91dGlscy9yYWYtcG9seWZpbGwuanMnKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuXHR0aGlzLmluaXQoKTtcbn1cblxuQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XG5cdHRoaXMuZ3VpID0gbmV3IEdVSShkb2N1bWVudC5ib2R5KTtcblx0dGhpcy5sb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIoKTtcblxuXHR0aGlzLmxvZygpO1xuXHR0aGlzLmxvYWQoKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtc2cgPSAnQXVkaW8gTWFuYWdlci4gU3VwcG9ydGVkOicgKyB0aGlzLmF1ZGlvLmlzU3VwcG9ydGVkKCkgK1xuXHQnIFdlYkF1ZGlvQVBJOicgKyB0aGlzLmF1ZGlvLndlYkF1ZGlvU3VwcG9ydGVkKCkgK1xuXHQnIFRvdWNoTG9ja2VkOicgKyB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdGNvbnNvbGUubG9nKG1zZyk7XG59O1xuXG5BcHAucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5sb2FkZXIudG91Y2hMb2NrZWQgPSB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdHRoaXMubG9hZGVyLndlYkF1ZGlvQ29udGV4dCA9IHRoaXMuYXVkaW8ud2ViQXVkaW9Db250ZXh0O1xuXHR0aGlzLmxvYWRlci5jcm9zc09yaWdpbiA9IHRydWU7XG5cblx0TW9kZWwuZXh0ZW5zaW9uID0gdGhpcy5hdWRpby5nZXRFeHRlbnNpb24oKTtcblx0dmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS51cmwgPSBmaWxlLnVybCArIE1vZGVsLmV4dGVuc2lvbjtcblx0XHR0aGlzLmxvYWRlci5hZGQoZmlsZS51cmwpO1xuXHR9XG5cblx0dGhpcy5sb2FkZXIub25Qcm9ncmVzcy5hZGQodGhpcy5ndWkudXBkYXRlTG9hZFByb2dyZXNzLCB0aGlzLmd1aSk7XG5cdHRoaXMubG9hZGVyLm9uQ29tcGxldGUuYWRkKHRoaXMubG9hZENvbXBsZXRlLCB0aGlzKTtcblx0dGhpcy5sb2FkZXIuc3RhcnQoKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG5cdGZvciAodmFyIGkgaW4gZmlsZXMpIHtcblx0XHR2YXIgZmlsZSA9IGZpbGVzW2ldO1xuXHRcdGZpbGUuZGF0YSA9IHRoaXMubG9hZGVyLmdldChmaWxlLnVybCkuZGF0YTtcblx0fVxuXHR0aGlzLmd1aS5pbml0KHRoaXMuYXVkaW8ud2ViQXVkaW9Db250ZXh0KTtcbn07XG5cbm5ldyBBcHAoKTtcbiIsIi8qanNsaW50IG9uZXZhcjp0cnVlLCB1bmRlZjp0cnVlLCBuZXdjYXA6dHJ1ZSwgcmVnZXhwOnRydWUsIGJpdHdpc2U6dHJ1ZSwgbWF4ZXJyOjUwLCBpbmRlbnQ6NCwgd2hpdGU6ZmFsc2UsIG5vbWVuOmZhbHNlLCBwbHVzcGx1czpmYWxzZSAqL1xuLypnbG9iYWwgZGVmaW5lOmZhbHNlLCByZXF1aXJlOmZhbHNlLCBleHBvcnRzOmZhbHNlLCBtb2R1bGU6ZmFsc2UsIHNpZ25hbHM6ZmFsc2UgKi9cblxuLyoqIEBsaWNlbnNlXG4gKiBKUyBTaWduYWxzIDxodHRwOi8vbWlsbGVybWVkZWlyb3MuZ2l0aHViLmNvbS9qcy1zaWduYWxzLz5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogQXV0aG9yOiBNaWxsZXIgTWVkZWlyb3NcbiAqIFZlcnNpb246IDEuMC4wIC0gQnVpbGQ6IDI2OCAoMjAxMi8xMS8yOSAwNTo0OCBQTSlcbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcblxuICAgIC8vIFNpZ25hbEJpbmRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGJpbmRpbmcgYmV0d2VlbiBhIFNpZ25hbCBhbmQgYSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgKiA8YnIgLz4tIDxzdHJvbmc+VGhpcyBpcyBhbiBpbnRlcm5hbCBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkbid0IGJlIGNhbGxlZCBieSByZWd1bGFyIHVzZXJzLjwvc3Ryb25nPlxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgSm9hIEViZXJ0IEFTMyBTaWduYWxCaW5kaW5nIGFuZCBSb2JlcnQgUGVubmVyJ3MgU2xvdCBjbGFzc2VzLlxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGludGVybmFsXG4gICAgICogQG5hbWUgU2lnbmFsQmluZGluZ1xuICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiAoZGVmYXVsdCA9IDApLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbEJpbmRpbmcoc2lnbmFsLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHR5cGUgRnVuY3Rpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNPbmNlID0gaXNPbmNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAbWVtYmVyT2YgU2lnbmFsQmluZGluZy5wcm90b3R5cGVcbiAgICAgICAgICogQG5hbWUgY29udGV4dFxuICAgICAgICAgKiBAdHlwZSBPYmplY3R8dW5kZWZpbmVkfG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGxpc3RlbmVyQ29udGV4dDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqIEB0eXBlIFNpZ25hbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2lnbmFsID0gc2lnbmFsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW5lciBwcmlvcml0eVxuICAgICAgICAgKiBAdHlwZSBOdW1iZXJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICB9XG5cbiAgICBTaWduYWxCaW5kaW5nLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBpcyBhY3RpdmUgYW5kIHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBsaXN0ZW5lciBkdXJpbmcgYFNpZ25hbC5kaXNwYXRjaGAgYW5kIGBTaWduYWxCaW5kaW5nLmV4ZWN1dGVgLiAoY3VycmllZCBwYXJhbWV0ZXJzKVxuICAgICAgICAgKiBAdHlwZSBBcnJheXxudWxsXG4gICAgICAgICAqL1xuICAgICAgICBwYXJhbXMgOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGxpc3RlbmVyIHBhc3NpbmcgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgICAqIDxwPklmIGJpbmRpbmcgd2FzIGFkZGVkIHVzaW5nIGBTaWduYWwuYWRkT25jZSgpYCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHNpZ25hbCBkaXNwYXRjaCBxdWV1ZSwgdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciB0aGUgc2lnbmFsIGRpc3BhdGNoLjwvcD5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW3BhcmFtc0Fycl0gQXJyYXkgb2YgcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4geyp9IFZhbHVlIHJldHVybmVkIGJ5IHRoZSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAocGFyYW1zQXJyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlclJldHVybiwgcGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICEhdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLnBhcmFtcz8gdGhpcy5wYXJhbXMuY29uY2F0KHBhcmFtc0FycikgOiBwYXJhbXNBcnI7XG4gICAgICAgICAgICAgICAgaGFuZGxlclJldHVybiA9IHRoaXMuX2xpc3RlbmVyLmFwcGx5KHRoaXMuY29udGV4dCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJSZXR1cm47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGFjaCBiaW5kaW5nIGZyb20gc2lnbmFsLlxuICAgICAgICAgKiAtIGFsaWFzIHRvOiBteVNpZ25hbC5yZW1vdmUobXlCaW5kaW5nLmdldExpc3RlbmVyKCkpO1xuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwgb3IgYG51bGxgIGlmIGJpbmRpbmcgd2FzIHByZXZpb3VzbHkgZGV0YWNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2ggOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0JvdW5kKCk/IHRoaXMuX3NpZ25hbC5yZW1vdmUodGhpcy5fbGlzdGVuZXIsIHRoaXMuY29udGV4dCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYmluZGluZyBpcyBzdGlsbCBib3VuZCB0byB0aGUgc2lnbmFsIGFuZCBoYXZlIGEgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpc0JvdW5kIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICghIXRoaXMuX3NpZ25hbCAmJiAhIXRoaXMuX2xpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gSWYgU2lnbmFsQmluZGluZyB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzT25jZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc09uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMaXN0ZW5lciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsfSBTaWduYWwgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaWduYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2Rlc3Ryb3kgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc2lnbmFsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsQmluZGluZyBpc09uY2U6JyArIHRoaXMuX2lzT25jZSArJywgaXNCb3VuZDonKyB0aGlzLmlzQm91bmQoKSArJywgYWN0aXZlOicgKyB0aGlzLmFjdGl2ZSArICddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4vKmdsb2JhbCBTaWduYWxCaW5kaW5nOmZhbHNlKi9cblxuICAgIC8vIFNpZ25hbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgZm5OYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggJ2xpc3RlbmVyIGlzIGEgcmVxdWlyZWQgcGFyYW0gb2Yge2ZufSgpIGFuZCBzaG91bGQgYmUgYSBGdW5jdGlvbi4nLnJlcGxhY2UoJ3tmbn0nLCBmbk5hbWUpICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IFJvYmVydCBQZW5uZXIncyBBUzMgU2lnbmFscy5cbiAgICAgKiBAbmFtZSBTaWduYWxcbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIEFycmF5LjxTaWduYWxCaW5kaW5nPlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG5cbiAgICAgICAgLy8gZW5mb3JjZSBkaXNwYXRjaCB0byBhd2F5cyB3b3JrIG9uIHNhbWUgY29udGV4dCAoIzQ3KVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2lnbmFsLnByb3RvdHlwZS5kaXNwYXRjaC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIFNpZ25hbC5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbHMgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjAuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBzaG91bGQga2VlcCByZWNvcmQgb2YgcHJldmlvdXNseSBkaXNwYXRjaGVkIHBhcmFtZXRlcnMgYW5kXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZSBsaXN0ZW5lciBkdXJpbmcgYGFkZCgpYC9gYWRkT25jZSgpYCBpZiBTaWduYWwgd2FzXG4gICAgICAgICAqIGFscmVhZHkgZGlzcGF0Y2hlZCBiZWZvcmUuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIG1lbW9yaXplIDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9zaG91bGRQcm9wYWdhdGUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgaXMgYWN0aXZlIGFuZCBzaG91bGQgYnJvYWRjYXN0IGV2ZW50cy5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBkdXJpbmcgYSBkaXNwYXRjaCB3aWxsIG9ubHkgYWZmZWN0IHRoZSBuZXh0IGRpc3BhdGNoLCBpZiB5b3Ugd2FudCB0byBzdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBhIHNpZ25hbCB1c2UgYGhhbHQoKWAgaW5zdGVhZC48L3A+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlZ2lzdGVyTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGJpbmRpbmc7XG5cbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuX2JpbmRpbmdzW3ByZXZJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNPbmNlKCkgIT09IGlzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkJysgKGlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlbiBhZGQnKyAoIWlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IG5ldyBTaWduYWxCaW5kaW5nKHRoaXMsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEJpbmRpbmcoYmluZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubWVtb3JpemUgJiYgdGhpcy5fcHJldlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgYmluZGluZy5leGVjdXRlKHRoaXMuX3ByZXZQYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTaWduYWxCaW5kaW5nfSBiaW5kaW5nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYWRkQmluZGluZyA6IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAvL3NpbXBsaWZpZWQgaW5zZXJ0aW9uIHNvcnRcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgZG8geyAtLW47IH0gd2hpbGUgKHRoaXMuX2JpbmRpbmdzW25dICYmIGJpbmRpbmcuX3ByaW9yaXR5IDw9IHRoaXMuX2JpbmRpbmdzW25dLl9wcmlvcml0eSk7XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UobiArIDEsIDAsIGJpbmRpbmcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfaW5kZXhPZkxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjdXI7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5fYmluZGluZ3Nbbl07XG4gICAgICAgICAgICAgICAgaWYgKGN1ci5fbGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIGN1ci5jb250ZXh0ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgbGlzdGVuZXIgd2FzIGF0dGFjaGVkIHRvIFNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XVxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiBTaWduYWwgaGFzIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBoYXMgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpICE9PSAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgZmFsc2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbCB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGZpcnN0IGV4ZWN1dGlvbiAod2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UpLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRPbmNlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkT25jZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIHRydWUsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBzaW5nbGUgbGlzdGVuZXIgZnJvbSB0aGUgZGlzcGF0Y2ggcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBFeGVjdXRpb24gY29udGV4dCAoc2luY2UgeW91IGNhbiBhZGQgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcyBpZiBleGVjdXRpbmcgaW4gYSBkaWZmZXJlbnQgY29udGV4dCkuXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBMaXN0ZW5lciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAncmVtb3ZlJyk7XG5cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW2ldLl9kZXN0cm95KCk7IC8vbm8gcmVhc29uIHRvIGEgU2lnbmFsQmluZGluZyBleGlzdCBpZiBpdCBpc24ndCBhdHRhY2hlZCB0byBhIHNpZ25hbFxuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlQWxsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Nbbl0uX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIGxpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TnVtTGlzdGVuZXJzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQsIGJsb2NraW5nIHRoZSBkaXNwYXRjaCB0byBuZXh0IGxpc3RlbmVycyBvbiB0aGUgcXVldWUuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBzaG91bGQgYmUgY2FsbGVkIG9ubHkgZHVyaW5nIHNpZ25hbCBkaXNwYXRjaCwgY2FsbGluZyBpdCBiZWZvcmUvYWZ0ZXIgZGlzcGF0Y2ggd29uJ3QgYWZmZWN0IHNpZ25hbCBicm9hZGNhc3QuPC9wPlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5wcm90b3R5cGUuZGlzYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaGFsdCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaC9Ccm9hZGNhc3QgU2lnbmFsIHRvIGFsbCBsaXN0ZW5lcnMgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIFBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIGVhY2ggaGFuZGxlci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXNBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYmluZGluZ3M7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1lbW9yaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IHBhcmFtc0FycjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgbikge1xuICAgICAgICAgICAgICAgIC8vc2hvdWxkIGNvbWUgYWZ0ZXIgbWVtb3JpemVcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmRpbmdzID0gdGhpcy5fYmluZGluZ3Muc2xpY2UoKTsgLy9jbG9uZSBhcnJheSBpbiBjYXNlIGFkZC9yZW1vdmUgaXRlbXMgZHVyaW5nIGRpc3BhdGNoXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSB0cnVlOyAvL2luIGNhc2UgYGhhbHRgIHdhcyBjYWxsZWQgYmVmb3JlIGRpc3BhdGNoIG9yIGR1cmluZyB0aGUgcHJldmlvdXMgZGlzcGF0Y2guXG5cbiAgICAgICAgICAgIC8vZXhlY3V0ZSBhbGwgY2FsbGJhY2tzIHVudGlsIGVuZCBvZiB0aGUgbGlzdCBvciB1bnRpbCBhIGNhbGxiYWNrIHJldHVybnMgYGZhbHNlYCBvciBzdG9wcyBwcm9wYWdhdGlvblxuICAgICAgICAgICAgLy9yZXZlcnNlIGxvb3Agc2luY2UgbGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgICAgZG8geyBuLS07IH0gd2hpbGUgKGJpbmRpbmdzW25dICYmIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSAmJiBiaW5kaW5nc1tuXS5leGVjdXRlKHBhcmFtc0FycikgIT09IGZhbHNlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yZ2V0IG1lbW9yaXplZCBhcmd1bWVudHMuXG4gICAgICAgICAqIEBzZWUgU2lnbmFsLm1lbW9yaXplXG4gICAgICAgICAqL1xuICAgICAgICBmb3JnZXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgYmluZGluZ3MgZnJvbSBzaWduYWwgYW5kIGRlc3Ryb3kgYW55IHJlZmVyZW5jZSB0byBleHRlcm5hbCBvYmplY3RzIChkZXN0cm95IFNpZ25hbCBvYmplY3QpLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gY2FsbGluZyBhbnkgbWV0aG9kIG9uIHRoZSBzaWduYWwgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkaXNwb3NlIHdpbGwgdGhyb3cgZXJyb3JzLjwvcD5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JpbmRpbmdzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ByZXZQYXJhbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbCBhY3RpdmU6JysgdGhpcy5hY3RpdmUgKycgbnVtTGlzdGVuZXJzOicrIHRoaXMuZ2V0TnVtTGlzdGVuZXJzKCkgKyddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLy8gTmFtZXNwYWNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaWduYWxzIG5hbWVzcGFjZVxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZSBzaWduYWxzXG4gICAgICovXG4gICAgdmFyIHNpZ25hbHMgPSBTaWduYWw7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiBAc2VlIFNpZ25hbFxuICAgICAqL1xuICAgIC8vIGFsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2VlICNnaC00NClcbiAgICBzaWduYWxzLlNpZ25hbCA9IFNpZ25hbDtcblxuXG5cbiAgICAvL2V4cG9ydHMgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXG4gICAgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXsgLy9BTURcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpZ25hbHM7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpeyAvL25vZGVcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaWduYWxzO1xuICAgIH0gZWxzZSB7IC8vYnJvd3NlclxuICAgICAgICAvL3VzZSBzdHJpbmcgYmVjYXVzZSBvZiBHb29nbGUgY2xvc3VyZSBjb21waWxlciBBRFZBTkNFRF9NT0RFXG4gICAgICAgIC8qanNsaW50IHN1Yjp0cnVlICovXG4gICAgICAgIGdsb2JhbFsnc2lnbmFscyddID0gc2lnbmFscztcbiAgICB9XG5cbn0odGhpcykpO1xuIl19
