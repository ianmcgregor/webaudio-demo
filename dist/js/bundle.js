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

require('./webkitAudioContextMonkeyPatch.js');

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

},{"./html-audio.js":6,"./page-visibility.js":8,"./web-audio.js":10,"./webkitAudioContextMonkeyPatch.js":11}],6:[function(require,module,exports){
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
},{"signals":"w8Izcx"}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
    this._effects = new WebAudio.Effects(this.context);
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

Object.defineProperty(WebAudio.prototype, 'effects', {
    get: function() {
        return this._effects;
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
            decay = decay || 0;
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
            // fftSize: 32 - 2048 (pow 2)
            node.fftSize = fftSize;
            //node.frequencyBinCount = node.fftSize / 2;
            //node.minDecibels = -100;
            //node.maxDecibels = -30;
            return node;
        }
    };
};

/*
 * Effects
 */

WebAudio.Effects = function(context) {

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
        // Clamp the frequency between the minimum value (40 Hz) and half of the
        // sampling rate.
        var minValue = 40;
        var maxValue = context.sampleRate / 2;
        // Logarithm (base 2) to compute how many octaves fall in the range.
        var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
        // Compute a multiplier from 0 to 1 based on an exponential scale.
        var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
        // Get back to the frequency value between min and max.
        filterNode.frequency.value = maxValue * multiplier;

        //filterNode.Q.value = quality;
        //filterNode.gain.value = gain;
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
        'filter': filter
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

},{}],11:[function(require,module,exports){
/* jshint ignore:start */
/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/* 

This monkeypatch library is intended to be included in projects that use 
webkitAudioContext (instead of AudioContext), and that may use the now-
deprecated bits of the Web Audio API (e.g. using BufferSourceNode.noteOn()
instead of BufferSourceNode.start().

This library should be harmless to include if the browser does not have
the unprefixed "AudioContext" implemented.  If unprefixed AudioContext is
supported, but the deprecated method names are already implemented, this
library will have created a few shim functions on create* methods, but 
will not damage or override anything else.

Ideally, the use of this library will go to zero - it is only intended as
a way to quickly get script written to the old Web Audio methods to work
in browsers that only support the new, approved methods.

The patches this library handles:

AudioBufferSourceNode.noteOn() is aliased to start()
AudioBufferSourceNode.noteGrainOn() is aliased to start()
AudioBufferSourceNode.noteOff() is aliased to stop()
AudioContext.createGainNode() is aliased to createGain()
AudioContext.createDelayNode() is aliased to createDelay()
AudioContext.createJavaScriptNode() is aliased to createScriptProcessor()
OscillatorNode.noteOn() is aliased to start()
OscillatorNode.noteOff() is aliased to stop()
AudioParam.setTargetValueAtTime() is aliased to setTargetAtTime()
OscillatorNode's old enum values are aliased to the Web IDL enum values.
BiquadFilterNode's old enum values are aliased to the Web IDL enum values.
PannerNode's old enum values are aliased to the Web IDL enum values.
AudioContext.createWaveTable() is aliased to createPeriodicWave().
OscillatorNode.setWaveTable() is aliased to setPeriodicWave().

*/
(function (global, exports, perf) {
  'use strict';

  function fixSetTarget(param) {
    if (!param)    // if NYI, just return
      return;
    if (!param.setTargetValueAtTime)
      param.setTargetValueAtTime = param.setTargetAtTime; 
  }

  if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext')) {
    window.webkitAudioContext = AudioContext;

    AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
    AudioContext.prototype.createGain = function() { 
      var node = this.internal_createGain();
      fixSetTarget(node.gain);
      return node;
    };

    AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
    AudioContext.prototype.createDelay = function() { 
      var node = this.internal_createDelay();
      fixSetTarget(node.delayTime);
      return node;
    };

    AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
    AudioContext.prototype.createBufferSource = function() { 
      var node = this.internal_createBufferSource();
      if (!node.noteOn)
        node.noteOn = node.start; 
      if (!node.noteOnGrain)
        node.noteOnGrain = node.start;
      if (!node.noteOff)
        node.noteOff = node.stop;
      fixSetTarget(node.playbackRate);
      return node;
    };

    AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
    AudioContext.prototype.createDynamicsCompressor = function() { 
      var node = this.internal_createDynamicsCompressor();
      fixSetTarget(node.threshold);
      fixSetTarget(node.knee);
      fixSetTarget(node.ratio);
      fixSetTarget(node.reduction);
      fixSetTarget(node.attack);
      fixSetTarget(node.release);
      return node;
    };

    AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter = function() { 
      var node = this.internal_createBiquadFilter();
      fixSetTarget(node.frequency);
      fixSetTarget(node.detune);
      fixSetTarget(node.Q);
      fixSetTarget(node.gain);
      var enumValues = ['LOWPASS', 'HIGHPASS', 'BANDPASS', 'LOWSHELF', 'HIGHSHELF', 'PEAKING', 'NOTCH', 'ALLPASS'];
      for (var i = 0; i < enumValues.length; ++i) {
        var enumValue = enumValues[i];
        var newEnumValue = enumValue.toLowerCase();
        if (!node.prototype.hasOwnProperty(enumValue)) {
          node.prototype[enumValue] = newEnumValue;
        }
      }
      return node;
    };

    if (AudioContext.prototype.hasOwnProperty( 'createOscillator' )) {
      AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
      AudioContext.prototype.createOscillator = function() { 
        var node = this.internal_createOscillator();
        if (!node.noteOn)
          node.noteOn = node.start; 
        if (!node.noteOff)
          node.noteOff = node.stop;
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        var enumValues = ['SINE', 'SQUARE', 'SAWTOOTH', 'TRIANGLE', 'CUSTOM'];
        for (var i = 0; i < enumValues.length; ++i) {
          var enumValue = enumValues[i];
          var newEnumValue = enumValue.toLowerCase();
          if (!node.prototype.hasOwnProperty(enumValue)) {
            node.prototype[enumValue] = newEnumValue;
          }
        }
        if (!node.prototype.hasOwnProperty('setWaveTable')) {
          node.prototype.setWaveTable = node.prototype.setPeriodicTable;
        }
        return node;
      };
    }

    AudioContext.prototype.internal_createPanner = AudioContext.prototype.createPanner;
    AudioContext.prototype.createPanner = function() {
      var node = this.internal_createPanner();
      var enumValues = {
        'EQUALPOWER': 'equalpower',
        'HRTF': 'HRTF',
        'LINEAR_DISTANCE': 'linear',
        'INVERSE_DISTANCE': 'inverse',
        'EXPONENTIAL_DISTANCE': 'exponential',
      };
      for (var enumValue in enumValues) {
        var newEnumValue = enumValues[enumValue];
        if (!node.prototype.hasOwnProperty(enumValue)) {
          node.prototype[enumValue] = newEnumValue;
        }
      }
      return node;
    };

    if (!AudioContext.prototype.hasOwnProperty('createGainNode'))
      AudioContext.prototype.createGainNode = AudioContext.prototype.createGain;
    if (!AudioContext.prototype.hasOwnProperty('createDelayNode'))
      AudioContext.prototype.createDelayNode = AudioContext.prototype.createDelay;
    if (!AudioContext.prototype.hasOwnProperty('createJavaScriptNode'))
      AudioContext.prototype.createJavaScriptNode = AudioContext.prototype.createScriptProcessor;
    if (!AudioContext.prototype.hasOwnProperty('createWaveTable'))
      AudioContext.prototype.createWaveTable = AudioContext.prototype.createPeriodicWave;
  }
}(window));

/* jshint ignore:end */
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
	destroy: function() {
		this.pause();
	}
};

module.exports = AbstractDemo;

},{"../../utils/asset-loader.js":4,"../../utils/web-audio.js":10,"./loading-bar.js":15}],14:[function(require,module,exports){
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
    this.audio.effects.filter(this.node, this.sliderFreq.value, this.sliderQual.value, this.sliderGain.value);
};

Filter.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Filter;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],18:[function(require,module,exports){
'use strict';

var LoadingBar = require('./components/loading-bar.js'),
	UIComponents = require('./components/ui-components.js'),
	Keyboard = require('../utils/keyboard.js'),
	Reverb = require('./reverb.js'),
	Analyser = require('./analyser.js'),
	MultiTrack = require('./multi-track.js'),
	PanThreeD = require('./pan-three-d.js'),
	Filter = require('./filter.js'),
	Microphone = require('./microphone.js');

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
	new UIComponents.Button(this.menu.el, 'Microphone', this.microphone, this, Keyboard.SIX);

	this.controls = new UIComponents.Panel(this.el);
	this.playButton = new UIComponents.ToggleButton(this.controls.el, 'PLAY', 'PAUSE', this.play, this.pause, this, Keyboard.SPACEBAR);

	this.demoHolder = document.createElement('div');
	this.el.appendChild(this.demoHolder);

	this.microphone();
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
	this.clearDemo();
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

GUI.prototype.microphone = function() {
	this.clearDemo(true);
	this.demo = new Microphone(this.demoHolder, this.audioContext);
};

GUI.prototype.clearDemo = function(hideControls) {
	if(this.demo) {
		this.demo.destroy();
	}
	this.demoHolder.innerHTML = '';
	this.playButton.reset();

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

},{"../utils/keyboard.js":7,"./analyser.js":12,"./components/loading-bar.js":15,"./components/ui-components.js":16,"./filter.js":17,"./microphone.js":19,"./multi-track.js":20,"./pan-three-d.js":21,"./reverb.js":22}],19:[function(require,module,exports){
'use strict';

var AbstractDemo = require('./components/abstract-demo.js'),
    UIComponents = require('./components/ui-components.js'),
    AnalyserDisplay = require('./components/analyser-display.js');

function Micophone(el, audioContext) {
    AbstractDemo.call(this, el, audioContext);

    this.pnlInfo = new UIComponents.Panel(this.el, 'Allow micophone to begin');

    navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    if(!!navigator.getUserMedia_) {
        this.getMicrophone();
    }
    else {
        this.pnlInfo.remove();
        this.displayError('ERROR: getUserMedia not available in this browser');
    }
}

Micophone.prototype = Object.create(AbstractDemo.prototype);
Micophone.prototype.constructor = Micophone;

Micophone.prototype.getMicrophone = function() {
    var self = this;
    navigator.getUserMedia_( {audio:true}, function(stream) {
        self.onSuccess(stream);
    }, function(e) {
        self.onError(e);
    });
};

Micophone.prototype.onSuccess = function(stream) {
    var mediaStreamSource = this.audio.context.createMediaStreamSource( stream );
        mediaStreamSource.connect( this.audio._gain );

    this.node = this.audio.nodeFactory.analyser(1024);
    this.audio._gain.connect(this.node);
    this.node.connect(this.audio.context.destination);

    var display = new AnalyserDisplay();
    var panelWave = new UIComponents.Panel(this.el, 'Wave');
    var wave = display.addWave(this.node);
    wave.thickness = 1;
    wave.background = 'rgb(0,0,0)';
    panelWave.append(wave.canvas);

    this.pnlInfo.remove();
};

Micophone.prototype.onError = function(e) {
    console.log(e);
    if(e.name === 'PermissionDeniedError') {
        this.displayError('ERROR: Permission denied. Go to "chrome://settings/content > media > manage exceptions" to undo in chrome.');
    }
    else {
        this.displayError('ERROR: ' + e.message);
    }

    this.pnlInfo.remove();
};

Micophone.prototype.displayError = function(msg) {
    if(!this.pnlError) {
        this.pnlError = new UIComponents.Panel(this.el);
        this.pnlError.el.classList.add('Panel--error');
    }
    this.pnlError.title = msg;
};

Micophone.prototype.play = function() {
    this.getMicrophone();
};

Micophone.prototype.updateSmoothing = function(value) {
    this.node.smoothingTimeConstant = parseFloat(value, 10);
};

Micophone.prototype.updateFFTSize = function(value) {
    this.node.fftSize = parseInt(value);
};

Micophone.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
};

module.exports = Micophone;
},{"./components/abstract-demo.js":13,"./components/analyser-display.js":14,"./components/ui-components.js":16}],20:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],21:[function(require,module,exports){
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
    //this.audio.effects.panX(this.node, value);
    //console.log(value);
    this.audio.effects.pan(this.node, this.sliderX.value, this.sliderY.value, this.sliderZ.value);
};

PanThreeD.prototype.destroy = function() {
    AbstractDemo.prototype.destroy.call(this);
    this.panel.remove();
};

module.exports = PanThreeD;

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],22:[function(require,module,exports){
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
	this.sliderDecay = new UIComponents.Slider(this.panel.el, 'decay', 0, 20, 0.1, 0, this.generateImpulseResponse, this);
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],23:[function(require,module,exports){
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

},{"./app/model/audio-model.js":3,"./app/utils/asset-loader.js":4,"./app/utils/audio-manager.js":5,"./app/utils/raf-polyfill.js":9,"./app/view/gui.js":18}],"w8Izcx":[function(require,module,exports){
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
},{}]},{},[23])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvYXVkaW8tZmlsZXMuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3dlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2FuYWx5c2VyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9sb2FkaW5nLWJhci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvZmlsdGVyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2d1aS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9taWNyb3Bob25lLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L211bHRpLXRyYWNrLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3Bhbi10aHJlZS1kLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L3JldmVyYi5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9tYWluLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL3ZlbmRvci9qcy1zaWduYWxzL2Rpc3Qvc2lnbmFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiRHJ1bXNcIjogeyBcInVybFwiOiBcImF1ZGlvL0RSVU1TXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQmFzc1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vRE9VQkxFX0JBU1NcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJDb25nYXNcIjogeyBcInVybFwiOiBcImF1ZGlvL0NPTkdBU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIlBpYW5vXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9QSUFOT19NSUNfMVwiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcIkdlbmVyYXRlIGltcHVsc2VcIjogXCJnZW5lcmF0ZVwiLFxuXG4gICAgXCJhbWJpZW5jZTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfMV8oNDUwKVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfMV8oNDUwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl8yXyg0NTEpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl8yXyg0NTEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzNfKDQ1MilcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzNfKDQ1MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfNjk2OV8oNDU0KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfNjk2OV8oNDU0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9jbG9zZV8oNDU3KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfY2xvc2VfKDQ1NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfaXNfaXRfKDQ1NSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2lzX2l0Xyg0NTUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2xldF9pdF9nb18oNDU4KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfbGV0X2l0X2dvXyg0NTgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX29oXyg0NTMpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9vaF8oNDUzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl90YWlsc18oNDU2KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfdGFpbHNfKDQ1NilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJpZW5jZV8oNDQ5KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJpZW5jZV8oNDQ5KV9kY1wiLFxuICAgIFxuICAgIFwiaGFsbDpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBdXRvX1BhcmtfKDUwNClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9BdXRvX1BhcmtfKDUwNClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtKYXp6X0hhbGxfKDUwMylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9KYXp6X0hhbGxfKDUwMylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZS1TdGFnZV8oNDk2KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0xhcmdlLVN0YWdlXyg0OTYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2VfSGFsbF8oNDk1KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0xhcmdlX0hhbGxfKDQ5NSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW0tU3RhZ2VfKDQ5OClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW0tU3RhZ2VfKDQ5OClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW1fSGFsbF8oNDk3KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX01lZGl1bV9IYWxsXyg0OTcpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGwtU3RhZ2VfKDUwMClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbC1TdGFnZV8oNTAwKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0NodXJjaF8oNTAyKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsX0NodXJjaF8oNTAyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0hhbGxfKDQ5OSlcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9TbWFsbF9IYWxsXyg0OTkpX2RjXCIsXG4gICAgXG4gICAgXCJwbGF0ZTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBX1BsYXRlXyg0NzApXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX0FfUGxhdGVfKDQ3MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtGYXRfUGxhdGVfKDQ3NClcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfRmF0X1BsYXRlXyg0NzQpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfUGxhdGVfKDQ3MilcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfU21hbGxfUGxhdGVfKDQ3MilfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbmFyZV9QbGF0ZV8oNDcxKVwiOiBcImF1ZGlvL2ltcHVsc2UvcGxhdGUvNDgwTF9TbmFyZV9QbGF0ZV8oNDcxKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1RoaW5fUGxhdGVfKDQ3MylcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfVGhpbl9QbGF0ZV8oNDczKV9kY1wiLFxuICAgIFxuICAgIFwicmFuZG9tX2hhbGw6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QmlnX1JfKDQ2MClcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfQmlnX1JfKDQ2MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtDcmF6eV9hc3NfKDQ2MylcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfQ3JhenlfYXNzXyg0NjMpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7RG93bl9Zb3VfU2F5Xyg0NjgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0Rvd25fWW91X1NheV8oNDY4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1JfVHdvXyg0NjIpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1JfVHdvXyg0NjIpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7UmFuZG9tX3dlbGxfKDQ2NClcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfUmFuZG9tX3dlbGxfKDQ2NClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaG9ydF9NZV9hZ2Fpbl8oNDY1KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9TaG9ydF9NZV9hZ2Fpbl8oNDY1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1dlbGxfSG1tbV9SXyg0NjEpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX1dlbGxfSG1tbV9SXyg0NjEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7WW91X1NhaWRfKDQ2NylcIjogXCJhdWRpby9pbXB1bHNlL3JhbmRvbV9oYWxsLzQ4MExfWW91X1NhaWRfKDQ2NylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDt0ZXN0eV90ZXN0eV8oNDY2KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF90ZXN0eV90ZXN0eV8oNDY2KV9kY1wiLFxuICAgIFxuICAgIFwicm9vbTpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMR19Xb29kX1Jvb21fKDQ5MClcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MR19Xb29kX1Jvb21fKDQ5MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9DaGFtYmVyXyg0OTIpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTGFyZ2VfQ2hhbWJlcl8oNDkyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX1Jvb21fKDQ4NilcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MYXJnZV9Sb29tXyg0ODYpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtX1Jvb21fKDQ4NylcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9NZWRpdW1fUm9vbV8oNDg3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO011c2ljX0NsdWJfKDQ4NSlcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9NdXNpY19DbHViXyg0ODUpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U01fV29vZF9Sb29tXyg0OTEpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU01fV29vZF9Sb29tXyg0OTEpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfLV9CcmlnaHRfKDQ5NClcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TbWFsbF8tX0JyaWdodF8oNDk0KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0NoYW1iXyg0OTMpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfQ2hhbWJfKDQ5MylfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9Sb29tXyg0ODgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfUm9vbV8oNDg4KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1ZlcnlfU21hbGxfKDQ4OSlcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9WZXJ5X1NtYWxsXyg0ODkpX2RjXCIsXG4gICAgXG4gICAgXCJ3aWxkX3NwYWNlczpcIjogXCJcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDsxMFctNDBfKDQ3OClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfMTBXLTQwXyg0NzgpX2RjXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7MjB3LTUwXyg0NzkpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMXzIwdy01MF8oNDc5KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JpZ19Cb3R0b21fKDQ3NylcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQmlnX0JvdHRvbV8oNDc3KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JyaWNrX1dhbGxfKDQ3NSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQnJpY2tfV2FsbF8oNDc1KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0J1Y2tyYW1fKDQ3NilcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQnVja3JhbV8oNDc2KV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0luc2lkZV9PdXRfKDQ4MilcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfSW5zaWRlX091dF8oNDgyKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01ldGFsbGljYV8oNDgwKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9NZXRhbGxpY2FfKDQ4MClfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSaWNvY2hldF8oNDgzKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9SaWNvY2hldF8oNDgzKV9kY1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NpbGljYV9CZWFkc18oNDgxKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9TaWxpY2FfQmVhZHNfKDQ4MSlfZGNcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtWYXJvb21fKDQ4NClcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfVmFyb29tXyg0ODQpX2RjXCJcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdWRpb0ZpbGVzID0gcmVxdWlyZSgnLi4vY29uZmlnL2F1ZGlvLWZpbGVzLmpzb24nKSxcblx0aW1wdWxzZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9pbXB1bHNlLXJlc3BvbnNlLmpzb24nKTtcblxudmFyIG1vZGVsID0ge1xuICAgIGV4dGVuc2lvbjogJycsXG5cdGF1ZGlvRmlsZXM6IGF1ZGlvRmlsZXMsXG5cdGdldEZpbGU6IGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBtb2RlbC5hdWRpb0ZpbGVzW2tleV07XG5cdH0sXG5cdGltcHVsc2U6IGltcHVsc2UsXG5cdGZpbHRlciA6IHtcbiAgICAgICAgJ2xvd3Bhc3MnOiAwLFxuICAgICAgICAnaGlnaHBhc3MnOiAxLFxuICAgICAgICAnYmFuZHBhc3MnOiAyLFxuICAgICAgICAnbG93c2hlbGYnOiAzLFxuICAgICAgICAnaGlnaHNoZWxmJzogNCxcbiAgICAgICAgJ3BlYWtpbmcnOiA1LFxuICAgICAgICAnbm90Y2gnOiA2LFxuICAgICAgICAnYWxscGFzcyc6IDdcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNpZ25hbHMgPSByZXF1aXJlKCdzaWduYWxzJyk7XG5cbmZ1bmN0aW9uIEFzc2V0TG9hZGVyKCkge1xuICAgIHRoaXMub25DaGlsZENvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vblByb2dyZXNzID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5sb2FkZXJzID0ge307XG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMud2ViQXVkaW9Db250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmNyb3NzT3JpZ2luID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaExvY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMubnVtVG90YWwgPSAwO1xuICAgIHRoaXMubnVtTG9hZGVkID0gMDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKCkge1xuICAgIHZhciB4aHIsIGksIHByb2dJZCxcbiAgICAgICAgcHJvZ0lkcyA9IFsnTXN4bWwyLlhNTEhUVFAnLCAnTWljcm9zb2Z0LlhNTEhUVFAnLCAnTXN4bWwyLlhNTEhUVFAuNC4wJ107XG5cbiAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LkFjdGl2ZVhPYmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHByb2dJZCA9IHByb2dJZHNbaV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHhociA9IG5ldyB3aW5kb3cuQWN0aXZlWE9iamVjdChwcm9nSWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geGhyO1xufVxuXG5Bc3NldExvYWRlci5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbih1cmwsIHR5cGUpIHtcbiAgICAgICAgdmFyIGxvYWRlciA9IG5ldyBBc3NldExvYWRlci5Mb2FkZXIodXJsLCB0eXBlKTtcbiAgICAgICAgbG9hZGVyLndlYkF1ZGlvQ29udGV4dCA9IHRoaXMud2ViQXVkaW9Db250ZXh0O1xuICAgICAgICBsb2FkZXIuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgICBsb2FkZXIudG91Y2hMb2NrZWQgPSB0aGlzLnRvdWNoTG9ja2VkO1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2gobG9hZGVyKTtcbiAgICAgICAgdGhpcy5udW1Ub3RhbCsrO1xuICAgICAgICByZXR1cm4gbG9hZGVyO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm51bVRvdGFsID0gdGhpcy5xdWV1ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcy5sb2FkZXJzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9hZGVyID0gdGhpcy5xdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsb2FkZXIub25Db21wbGV0ZS5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm51bUxvYWRlZCsrO1xuICAgICAgICAgICAgaWYoc2VsZi5vblByb2dyZXNzLmdldE51bUxpc3RlbmVycygpID4gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25Qcm9ncmVzcy5kaXNwYXRjaChzZWxmLm51bUxvYWRlZC9zZWxmLm51bVRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubG9hZGVyc1tsb2FkZXIudXJsXSA9IGxvYWRlcjtcbiAgICAgICAgICAgIHNlbGYub25DaGlsZENvbXBsZXRlLmRpc3BhdGNoKGxvYWRlcik7XG4gICAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRlci5vbkVycm9yLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaChsb2FkZXIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkZXIuc3RhcnQoKTtcbiAgICB9LFxuICAgIGFkZE11bHRpcGxlOiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbdXJsXTtcbiAgICB9XG59O1xuXG5Bc3NldExvYWRlci5Mb2FkZXIgPSBmdW5jdGlvbih1cmwsIHR5cGUpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IHRoaXMudXJsLnNwbGl0KCc/JylbMF0udG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgdGhpcy5vblByb2dyZXNzID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5vbkVycm9yID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICB0aGlzLndlYkF1ZGlvQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hMb2NrZWQgPSBmYWxzZTtcbn07XG5cbkFzc2V0TG9hZGVyLkxvYWRlci5wcm90b3R5cGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtcDMnOlxuICAgICAgICAgICAgY2FzZSAnb2dnJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpbyh0aGlzLndlYkF1ZGlvQ29udGV4dCwgdGhpcy50b3VjaExvY2tlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2dpZic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5jcm9zc09yaWdpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKU09OKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdFUlJPUjogVW5rbm93biB0eXBlIGZvciBmaWxlIHdpdGggVVJMOiAnICsgdGhpcy51cmw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRBdWRpbzogZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0LCB0b3VjaExvY2tlZCkge1xuICAgICAgICBpZih3ZWJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFdlYkF1ZGlvKHdlYkF1ZGlvQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRIVE1MNUF1ZGlvKHRvdWNoTG9ja2VkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZFdlYkF1ZGlvOiBmdW5jdGlvbih3ZWJBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWw7XG4gICAgICAgICAgICAgICAgc2VsZi5vblByb2dyZXNzLmRpc3BhdGNoKHBlcmNlbnRDb21wbGV0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VuYWJsZSB0byBjb21wdXRlIHByb2dyZXNzIGluZm9ybWF0aW9uIHNpbmNlIHRoZSB0b3RhbCBzaXplIGlzIHVua25vd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdlYkF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChidWZmZXIpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSxcbiAgICBsb2FkSFRNTDVBdWRpbzogZnVuY3Rpb24odG91Y2hMb2NrZWQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVxdWVzdDtcbiAgICAgICAgcmVxdWVzdC5uYW1lID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3QucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNyYyA9IHRoaXMudXJsO1xuICAgICAgICBpZiAoISF0b3VjaExvY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKnJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyBjYW5wbGF5dGhyb3VnaCcpO1xuICAgICAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICAgICAgfSwgZmFsc2UpOyovXG4gICAgICAgICAgICByZXF1ZXN0LmxvYWQoKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkSW1hZ2U6IGZ1bmN0aW9uKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7XG4gICAgICAgIHJlcXVlc3QubmFtZSA9IHRoaXMudXJsO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkNvbXBsZXRlLmRpc3BhdGNoKHNlbGYuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZihjcm9zc09yaWdpbikge1xuICAgICAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Quc3JjID0gdGhpcy51cmw7XG4gICAgfSxcbiAgICBsb2FkSlNPTjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHJlcXVlc3QgPSBjcmVhdGVYSFIoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVMb2FkZWQoKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5qc29uID0gc2VsZi5kYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnb25sb2FkJyBpbiByZXF1ZXN0ICYmICdvbmVycm9yJyBpbiByZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGhhbmRsZUxvYWRlZDtcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGhhbmRsZUVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuXG4vKmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gQXNzZXRMb2FkZXI7XG59Ki9cblxuLyp2YXIgcm9vdCA9IHRoaXM7XG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xuICAgIH1cbiAgICBleHBvcnRzLkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7XG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ1BJWEknLCAoZnVuY3Rpb24oKSB7IHJldHVybiByb290LkFzc2V0TG9hZGVyID0gQXNzZXRMb2FkZXI7IH0pKCkgKTtcbn0gZWxzZSB7XG4gICAgcm9vdC5QSVhJID0gUElYSTtcbn0qLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnJlcXVpcmUoJy4vd2Via2l0QXVkaW9Db250ZXh0TW9ua2V5UGF0Y2guanMnKTtcclxuXHJcbnZhciBXZWJBdWRpbyA9IHJlcXVpcmUoJy4vd2ViLWF1ZGlvLmpzJyksXHJcblx0SFRNTEF1ZGlvID0gcmVxdWlyZSgnLi9odG1sLWF1ZGlvLmpzJyksXHJcblx0UGFnZVZpc2liaWxpdHkgPSByZXF1aXJlKCcuL3BhZ2UtdmlzaWJpbGl0eS5qcycpO1xyXG5cclxuZnVuY3Rpb24gQXVkaW9NYW5hZ2VyKCkge1xyXG5cdHRoaXMud2ViQXVkaW9Db250ZXh0ID0gV2ViQXVkaW8uY3JlYXRlQ29udGV4dCgpO1xyXG5cdHRoaXMuX3NvdW5kcyA9IHt9O1xyXG5cdHRoaXMuX2RlbGF5VGltZW91dHMgPSBbXTtcclxuXHR0aGlzLl9leHQgPSB1bmRlZmluZWQ7XHJcblx0dGhpcy5faXNTdXBwb3J0ZWQgPSB1bmRlZmluZWQ7XHJcblx0dGhpcy5fdG91Y2hMb2NrZWQgPSBmYWxzZTtcclxuXHR0aGlzLl9xdWV1ZWQgPSBbXTtcclxuXHJcblx0UGFnZVZpc2liaWxpdHkub25QYWdlSGlkZGVuLmFkZChmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGF1c2VBbGwoKTtcclxuXHR9LCB0aGlzKTtcclxuXHRQYWdlVmlzaWJpbGl0eS5vblBhZ2VTaG93bi5hZGQoZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnJlc3VtZUFsbCgpO1xyXG5cdH0sIHRoaXMpO1xyXG59XHJcblxyXG5BdWRpb01hbmFnZXIucHJvdG90eXBlID0ge1xyXG5cdGFkZDogZnVuY3Rpb24oa2V5LCBkYXRhLCBsb29wKSB7XHJcblx0XHR2YXIgc291bmQgPSB0aGlzLndlYkF1ZGlvQ29udGV4dCAmJiAhKGRhdGEgJiYgZGF0YS50YWdOYW1lKSA/IG5ldyBXZWJBdWRpbyh0aGlzLndlYkF1ZGlvQ29udGV4dCkgOiBuZXcgSFRNTEF1ZGlvKCk7XHJcblx0XHRzb3VuZC5sb29wID0gISEobG9vcCk7XHJcblx0XHRzb3VuZC5hZGQoZGF0YSk7XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XSA9IHNvdW5kO1xyXG5cdFx0cmV0dXJuIHNvdW5kO1xyXG5cdH0sXHJcblx0Z2V0RXh0ZW5zaW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLl9leHQpIHtcclxuXHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdFx0dGhpcy5fZXh0ID0gKGVsLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykgPyAnLm9nZycgOiAnLm1wMycpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2V4dDtcclxuXHR9LFxyXG5cdGlzU3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMuX2lzU3VwcG9ydGVkID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5cdFx0XHRcdHRoaXMuX2lzU3VwcG9ydGVkID0gISEoZWwgJiYgKGVsLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykgfHwgZWwuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykpKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0dGhpcy5faXNTdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xyXG5cdH0sXHJcblx0d2ViQXVkaW9TdXBwb3J0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICEhdGhpcy53ZWJBdWRpb0NvbnRleHQ7XHJcblx0fSxcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xyXG5cdH0sXHJcblx0cGxheTogZnVuY3Rpb24oa2V5LCBkZWxheSwgbG9vcCkge1xyXG5cdFx0aWYodGhpcy5fdG91Y2hMb2NrZWQpIHtcclxuXHRcdFx0dGhpcy5xdWV1ZVVwKGtleSwgZGVsYXksIGxvb3ApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgc291bmQgPSB0aGlzLl9zb3VuZHNba2V5XTtcclxuXHRcdGlmKCFzb3VuZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcbiAgICAgICAgaWYobG9vcCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHNvdW5kLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWxheSAhPT0gdW5kZWZpbmVkICYmIGRlbGF5ID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsYXllZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRzLnB1c2goZGVsYXllZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11dGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNbaV0udm9sdW1lID0gMDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVuTXV0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdHRoaXMuX3NvdW5kc1tpXS52b2x1bWUgPSAxO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cGF1c2U6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYoIXRoaXMuX3NvdW5kc1trZXldKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NvdW5kc1trZXldLnBhdXNlKCk7XHJcblx0fSxcclxuXHRzdG9wOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmKCF0aGlzLl9zb3VuZHNba2V5XSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XHJcblx0fSxcclxuXHRwYXVzZUFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdGlmKHRoaXMuX3NvdW5kc1tpXS5wbGF5aW5nKSB7XHJcblx0XHRcdFx0dGhpcy5fc291bmRzW2ldLnBhdXNlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlc3VtZUFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5fc291bmRzKSB7XHJcblx0XHRcdGlmKHRoaXMuX3NvdW5kc1tpXS5wYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zb3VuZHNbaV0ucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzdG9wQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIga2V5IGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2RlbGF5VGltZW91dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRzLmxlbmd0aCA9IDA7XHJcblx0fSxcclxuXHRnZXRUb3VjaExvY2tlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdG91Y2hMb2NrZWQ7XHJcblx0fSxcclxuXHRzZXRUb3VjaExvY2tlZDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX3RvdWNoTG9ja2VkID0gdmFsdWU7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHVubG9jayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxmLl90b3VjaExvY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2spO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuX3F1ZXVlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHNlbGYuX3F1ZXVlZFtpXSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNlbGYuX3F1ZXVlZC5sZW5ndGggPSAwO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZih0aGlzLl90b3VjaExvY2tlZCkge1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHF1ZXVlVXA6IGZ1bmN0aW9uKGtleSwgZGVsYXksIGxvb3ApIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBmbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxmLnBsYXkoa2V5LCBkZWxheSwgbG9vcCk7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5fcXVldWVkLnB1c2goZm4pO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXVkaW9NYW5hZ2VyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBIVE1MQXVkaW8oKSB7XHJcblx0dGhpcy5fc291bmQgPSBudWxsO1xyXG5cdHRoaXMuX2xvb3AgPSBmYWxzZTtcclxuXHR0aGlzLl92b2x1bWUgPSAxO1xyXG5cdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxufVxyXG5cclxuSFRNTEF1ZGlvLnByb3RvdHlwZSA9IHtcclxuXHRhZGQ6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHR0aGlzLl9zb3VuZCA9IGVsO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kO1xyXG5cdH0sXHJcblx0cGxheTogZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzLl9zb3VuZC52b2x1bWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLl9zb3VuZC52b2x1bWUgPSB0aGlzLl92b2x1bWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZC5wbGF5KCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMuX3NvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKHNlbGYuX2xvb3ApIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuXHRcdFx0XHR0aGlzLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZWxmLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9LFxyXG5cdHBhdXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdsb29wJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9vcDtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX2xvb3AgPSB2YWx1ZTtcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICd2b2x1bWUnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl92b2x1bWU7XHJcblx0fSxcclxuXHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZihpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdm9sdW1lID0gdmFsdWU7XHJcblx0XHRpZih0aGlzLl9zb3VuZCAmJiB0aGlzLl9zb3VuZC52b2x1bWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLl9zb3VuZC52b2x1bWUgPSB0aGlzLl92b2x1bWU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAncGxheWluZycsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BsYXlpbmc7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAncGF1c2VkJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3NvdW5kJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc291bmQ7XHJcblx0fVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSFRNTEF1ZGlvO1xyXG4iLCJ2YXIgS2V5Ym9hcmQgPSB7XG5cdEE6ICdBJy5jaGFyQ29kZUF0KDApLFxuXHRCOiAnQicuY2hhckNvZGVBdCgwKSxcblx0QzogJ0MnLmNoYXJDb2RlQXQoMCksXG5cdEQ6ICdEJy5jaGFyQ29kZUF0KDApLFxuXHRFOiAnRScuY2hhckNvZGVBdCgwKSxcblx0RjogJ0YnLmNoYXJDb2RlQXQoMCksXG5cdEc6ICdHJy5jaGFyQ29kZUF0KDApLFxuXHRIOiAnSCcuY2hhckNvZGVBdCgwKSxcblx0STogJ0knLmNoYXJDb2RlQXQoMCksXG5cdEo6ICdKJy5jaGFyQ29kZUF0KDApLFxuXHRLOiAnSycuY2hhckNvZGVBdCgwKSxcblx0TDogJ0wnLmNoYXJDb2RlQXQoMCksXG5cdE06ICdNJy5jaGFyQ29kZUF0KDApLFxuXHROOiAnTicuY2hhckNvZGVBdCgwKSxcblx0TzogJ08nLmNoYXJDb2RlQXQoMCksXG5cdFA6ICdQJy5jaGFyQ29kZUF0KDApLFxuXHRROiAnUScuY2hhckNvZGVBdCgwKSxcblx0UjogJ1InLmNoYXJDb2RlQXQoMCksXG5cdFM6ICdTJy5jaGFyQ29kZUF0KDApLFxuXHRUOiAnVCcuY2hhckNvZGVBdCgwKSxcblx0VTogJ1UnLmNoYXJDb2RlQXQoMCksXG5cdFY6ICdWJy5jaGFyQ29kZUF0KDApLFxuXHRXOiAnVycuY2hhckNvZGVBdCgwKSxcblx0WDogJ1gnLmNoYXJDb2RlQXQoMCksXG5cdFk6ICdZJy5jaGFyQ29kZUF0KDApLFxuXHRaOiAnWicuY2hhckNvZGVBdCgwKSxcblx0WkVSTzogJzAnLmNoYXJDb2RlQXQoMCksXG5cdE9ORTogJzEnLmNoYXJDb2RlQXQoMCksXG5cdFRXTzogJzInLmNoYXJDb2RlQXQoMCksXG5cdFRIUkVFOiAnMycuY2hhckNvZGVBdCgwKSxcblx0Rk9VUjogJzQnLmNoYXJDb2RlQXQoMCksXG5cdEZJVkU6ICc1Jy5jaGFyQ29kZUF0KDApLFxuXHRTSVg6ICc2Jy5jaGFyQ29kZUF0KDApLFxuXHRTRVZFTjogJzcnLmNoYXJDb2RlQXQoMCksXG5cdEVJR0hUOiAnOCcuY2hhckNvZGVBdCgwKSxcblx0TklORTogJzknLmNoYXJDb2RlQXQoMCksXG5cdE5VTVBBRF8wOiA5Nixcblx0TlVNUEFEXzE6IDk3LFxuXHROVU1QQURfMjogOTgsXG5cdE5VTVBBRF8zOiA5OSxcblx0TlVNUEFEXzQ6IDEwMCxcblx0TlVNUEFEXzU6IDEwMSxcblx0TlVNUEFEXzY6IDEwMixcblx0TlVNUEFEXzc6IDEwMyxcblx0TlVNUEFEXzg6IDEwNCxcblx0TlVNUEFEXzk6IDEwNSxcblx0TlVNUEFEX01VTFRJUExZOiAxMDYsXG5cdE5VTVBBRF9BREQ6IDEwNyxcblx0TlVNUEFEX0VOVEVSOiAxMDgsXG5cdE5VTVBBRF9TVUJUUkFDVDogMTA5LFxuXHROVU1QQURfREVDSU1BTDogMTEwLFxuXHROVU1QQURfRElWSURFOiAxMTEsXG5cdEYxOiAxMTIsXG5cdEYyOiAxMTMsXG5cdEYzOiAxMTQsXG5cdEY0OiAxMTUsXG5cdEY1OiAxMTYsXG5cdEY2OiAxMTcsXG5cdEY3OiAxMTgsXG5cdEY4OiAxMTksXG5cdEY5OiAxMjAsXG5cdEYxMDogMTIxLFxuXHRGMTE6IDEyMixcblx0RjEyOiAxMjMsXG5cdEYxMzogMTI0LFxuXHRGMTQ6IDEyNSxcblx0RjE1OiAxMjYsXG5cdENPTE9OOiAxODYsXG5cdEVRVUFMUzogMTg3LFxuXHRVTkRFUlNDT1JFOiAxODksXG5cdFFVRVNUSU9OX01BUks6IDE5MSxcblx0VElMREU6IDE5Mixcblx0T1BFTl9CUkFDS0VUOiAyMTksXG5cdEJBQ0tXQVJEX1NMQVNIOiAyMjAsXG5cdENMT1NFRF9CUkFDS0VUOiAyMjEsXG5cdFFVT1RFUzogMjIyLFxuXHRCQUNLU1BBQ0U6IDgsXG5cdFRBQjogOSxcblx0Q0xFQVI6IDEyLFxuXHRFTlRFUjogMTMsXG5cdFNISUZUOiAxNixcblx0Q09OVFJPTDogMTcsXG5cdEFMVDogMTgsXG5cdENBUFNfTE9DSzogMjAsXG5cdEVTQzogMjcsXG5cdFNQQUNFQkFSOiAzMixcblx0UEFHRV9VUDogMzMsXG5cdFBBR0VfRE9XTjogMzQsXG5cdEVORDogMzUsXG5cdEhPTUU6IDM2LFxuXHRMRUZUOiAzNyxcblx0VVA6IDM4LFxuXHRSSUdIVDogMzksXG5cdERPV046IDQwLFxuXHRJTlNFUlQ6IDQ1LFxuXHRERUxFVEU6IDQ2LFxuXHRIRUxQOiA0Nyxcblx0TlVNX0xPQ0s6IDE0NFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlib2FyZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG52YXIgb25QYWdlSGlkZGVuID0gbmV3IHNpZ25hbHMuU2lnbmFsKCksXG4gICAgb25QYWdlU2hvd24gPSBuZXcgc2lnbmFscy5TaWduYWwoKSxcbiAgICBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2U7XG5cbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoZG9jdW1lbnRbaGlkZGVuXSkge1xuICAgICAgICBvblBhZ2VIaWRkZW4uZGlzcGF0Y2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvblBhZ2VTaG93bi5kaXNwYXRjaCgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0IFxuICAgIGhpZGRlbiA9ICdoaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICdtc0hpZGRlbic7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmlmKHZpc2liaWxpdHlDaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uUGFnZVNob3duOiBvblBhZ2VTaG93bixcbiAgICBvblBhZ2VIaWRkZW46IG9uUGFnZUhpZGRlblxufTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfVxufSgpKTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFdlYkF1ZGlvKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IFdlYkF1ZGlvLmNyZWF0ZUNvbnRleHQoKTtcbiAgICB0aGlzLl9zb3VuZCA9IFtdO1xuICAgIHRoaXMuX25vZGUgPSBbXTtcbiAgICB0aGlzLl9nYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLl9nYWluLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLl9zdGFydGVkQXQgPSAwO1xuICAgIHRoaXMuX3BhdXNlZEF0ID0gMDtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMuX25vZGVGYWN0b3J5ID0gbmV3IFdlYkF1ZGlvLk5vZGVGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5fZWZmZWN0cyA9IG5ldyBXZWJBdWRpby5FZmZlY3RzKHRoaXMuY29udGV4dCk7XG59XG5cbldlYkF1ZGlvLnByb3RvdHlwZSA9IHtcbiAgICBhZGQ6IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICBpZighYnVmZmVyKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9zb3VuZC5wdXNoKG5ldyBXZWJBdWRpby5Tb3VuZChidWZmZXIsIHRoaXMuY29udGV4dCkpO1xuICAgICAgICB0aGlzLl9zb3VuZFt0aGlzLl9zb3VuZC5sZW5ndGgtMV0ubG9vcCA9IHRoaXMuX2xvb3A7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFt0aGlzLl9zb3VuZC5sZW5ndGgtMV07XG4gICAgfSxcbiAgICBwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1heER1cmF0aW9uID0gLTEsXG4gICAgICAgICAgICBsb25nZXN0U291bmQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLmNvbm5lY3QodGhpcy5fZ2Fpbik7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5wbGF5KDAsIHRoaXMuX3BhdXNlZEF0IC8gMTAwMCk7XG4gICAgICAgICAgICBpZih0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gPSB0aGlzLl9zb3VuZFtpXS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBsb25nZXN0U291bmQgPSB0aGlzLl9zb3VuZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxvbmdlc3RTb3VuZC5zb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zdGFydGVkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fcGF1c2VkQXQ7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fcGF1c2VkQXQgPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRlZEF0O1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291bmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kW2ldLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAnbG9vcCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9vcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5sb29wID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3ZvbHVtZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2Fpbi5nYWluLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZihpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nYWluLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3BsYXlpbmcnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlpbmc7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdwYXVzZWQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZEF0ID4gMDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ3NvdW5kJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ25vZGVGYWN0b3J5Jywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlRmFjdG9yeTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2VmZmVjdHMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VmZmVjdHM7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBDb250ZXh0XG4gKi9cblxuV2ViQXVkaW8uY3JlYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGlmKHdpbmRvdy5BdWRpb0NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufTtcblxuLypcbiAqIFNvdW5kXG4gKi9cblxuV2ViQXVkaW8uU291bmQgPSBmdW5jdGlvbihidWZmZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9ICcnO1xufTtcblxuV2ViQXVkaW8uU291bmQucHJvdG90eXBlID0ge1xuICAgIHBsYXk6IGZ1bmN0aW9uKGRlbGF5LCBvZmZzZXQpIHtcbiAgICAgICAgaWYoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IHRoaXMuX2NvbnRleHQuY3VycmVudFRpbWUgKyBkZWxheTtcbiAgICAgICAgfVxuICAgICAgICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdXJjZS5sb29wID0gdGhpcy5fbG9vcDtcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoZGVsYXksIG9mZnNldCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYodGhpcy5fbm9kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2RlW3RoaXMuX25vZGUubGVuZ3RoIC0gMV0uY29ubmVjdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5vZGU7XG4gICAgfSxcbiAgICBhZGROb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMuX25vZGUucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgIH0sXG4gICAgdXBkYXRlQ29ubmVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9ub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlLmNvbm5lY3QodGhpcy5fbm9kZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlW2ktMV0uY29ubmVjdCh0aGlzLl9ub2RlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnc291cmNlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UuYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUsICdsb29wJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5Tb3VuZC5wcm90b3R5cGUsICdkdXJhdGlvbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyID8gdGhpcy5fYnVmZmVyLmR1cmF0aW9uIDogMDtcbiAgICB9XG59KTtcblxuLypcbiAqIE5vZGVzXG4gKi9cblxuV2ViQXVkaW8uTm9kZUZhY3RvcnkgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGaWx0ZXIodHlwZSwgZnJlcXVlbmN5KSB7XG4gICAgICAgIHZhciBmaWx0ZXJOb2RlID0gY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgICAgZmlsdGVyTm9kZS50eXBlID0gdHlwZTtcbiAgICAgICAgaWYoZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZpbHRlck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJOb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdhaW46IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlUGFubmVyKCk7XG4gICAgICAgICAgICBub2RlLnBhbm5pbmdNb2RlbCA9ICdIUlRGJztcbiAgICAgICAgICAgIC8vbm9kZS5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeCwgMCk7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeSwgMCk7XG4gICAgICAgICAgICAvL3NldE9wdGlvbmFsUGFyYW0oeiwgMCk7XG4gICAgICAgICAgICAvL25vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICAvKlxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IGZvciBzdGVyZW8gaXMgSFJURiBcblxuXG4gICAgICAgICAgICAvLyBVc2VzIGEgM0QgY2FydGVzaWFuIGNvb3JkaW5hdGUgc3lzdGVtIFxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihvYmplY3QucG9zaXRpb24ueC8yOTAsIG9iamVjdC5wb3NpdGlvbi55LzI5MCwgb2JqZWN0LnBvc2l0aW9uLnovMjkwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldE9yaWVudGF0aW9uKDEsIDAsIDApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRWZWxvY2l0eSgwLCAwLCAwKTtcblxuICAgICAgICAgICAgLy8gRGlzdGFuY2UgbW9kZWwgYW5kIGF0dHJpYnV0ZXMgXG4gICAgICAgICAgICBub2RlLmRpc3RhbmNlTW9kZWwgPSAnaW52ZXJzZSc7IC8vICdsaW5lYXInICdpbnZlcnNlJyAnZXhwb25lbnRpYWwnIFxuICAgICAgICAgICAgbm9kZS5yZWZEaXN0YW5jZSA9IDE7XG4gICAgICAgICAgICBub2RlLm1heERpc3RhbmNlID0gMTAwMDA7XG4gICAgICAgICAgICBub2RlLnJvbGxvZmZGYWN0b3IgPSAxO1xuXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25hbCBzb3VuZCBjb25lIC0gVGhlIGNvbmUgYW5nbGVzIGFyZSBpbiBkZWdyZWVzIGFuZCBydW4gZnJvbSAwIHRvIDM2MFxuICAgICAgICAgICAgLy8gbm9kZS5jb25lSW5uZXJBbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZU91dGVyQW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAvLyBub2RlLmNvbmVPdXRlckdhaW4gPSAwO1xuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gbm9ybWFsaXNlZCB2ZWNcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0T3JpZW50YXRpb24odmVjLngsIHZlYy55LCB2ZWMueik7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICBsb3dwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdsb3dwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdocGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignaGlnaHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhbmRwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdiYW5kcGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG93c2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2xvd3NoZWxmJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWdoc2hlbGY6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2hpZ2hzaGVsZicsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVha2luZzogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcigncGVha2luZycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90Y2g6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ25vdGNoJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxwYXNzOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdhbGxwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVEZWxheSgpO1xuICAgICAgICAgICAgaWYodGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZWxheVRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZvbHZlcjogZnVuY3Rpb24oaW1wdWxzZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBpbXB1bHNlUmVzcG9uc2UgaXMgYW4gYXVkaW8gZmlsZSBidWZmZXJcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVDb252b2x2ZXIoKTtcbiAgICAgICAgICAgIG5vZGUuYnVmZmVyID0gaW1wdWxzZVJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHJldmVyYjogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udm9sdmVyKHRoaXMuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHNlY29uZHMsIGRlY2F5LCByZXZlcnNlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUltcHVsc2VSZXNwb25zZTogZnVuY3Rpb24oc2Vjb25kcywgZGVjYXksIHJldmVyc2UpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIGEgcmV2ZXJiIGVmZmVjdFxuICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgfHwgMTtcbiAgICAgICAgICAgIGRlY2F5ID0gZGVjYXkgfHwgMDtcbiAgICAgICAgICAgIHJldmVyc2UgPSAhIXJldmVyc2U7XG5cbiAgICAgICAgICAgIHZhciBudW1DaGFubmVscyA9IDIsXG4gICAgICAgICAgICAgICAgcmF0ZSA9IGNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByYXRlICogc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBpbXB1bHNlUmVzcG9uc2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlcihudW1DaGFubmVscywgbGVuZ3RoLCByYXRlKSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDApLFxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gaW1wdWxzZVJlc3BvbnNlLmdldENoYW5uZWxEYXRhKDEpLFxuICAgICAgICAgICAgICAgIG47XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuID0gcmV2ZXJzZSA/IGxlbmd0aCAtIDEgOiBpO1xuICAgICAgICAgICAgICAgIGxlZnRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICAgICAgcmlnaHRbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIE1hdGgucG93KDEgLSBuIC8gbGVuZ3RoLCBkZWNheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbXB1bHNlUmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGFuYWx5c2VyOiBmdW5jdGlvbihmZnRTaXplKSB7XG4gICAgICAgICAgICBmZnRTaXplID0gZmZ0U2l6ZSB8fCAxMDI0O1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICBub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuODU7XG4gICAgICAgICAgICAvLyBmZnRTaXplOiAzMiAtIDIwNDggKHBvdyAyKVxuICAgICAgICAgICAgbm9kZS5mZnRTaXplID0gZmZ0U2l6ZTtcbiAgICAgICAgICAgIC8vbm9kZS5mcmVxdWVuY3lCaW5Db3VudCA9IG5vZGUuZmZ0U2l6ZSAvIDI7XG4gICAgICAgICAgICAvL25vZGUubWluRGVjaWJlbHMgPSAtMTAwO1xuICAgICAgICAgICAgLy9ub2RlLm1heERlY2liZWxzID0gLTMwO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLypcbiAqIEVmZmVjdHNcbiAqL1xuXG5XZWJBdWRpby5FZmZlY3RzID0gZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gcmFtcChwYXJhbSwgdmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHBhcmFtLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHZhbHVlLCBjb250ZXh0LmN1cnJlbnRUaW1lICsgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhblhZWihub2RlLCB4LCB5LCB6KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoeSwgMTApO1xuICAgICAgICB6ID0gcGFyc2VGbG9hdCh6LCAxMCk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFuWChub2RlLCB4KSB7XG4gICAgICAgIHggPSBwYXJzZUZsb2F0KHgsIDEwKTtcbiAgICAgICAgLy8geCBmcm9tIC1NYXRoLlBJLzQgdG8gTWF0aC5QSS80ICgtNDUgdG8gNDUgZGVnKVxuICAgICAgICB2YXIgeiA9IHggKyBNYXRoLlBJIC8gMjtcbiAgICAgICAgaWYgKHogPiBNYXRoLlBJIC8gMikge1xuICAgICAgICAgICAgeiA9IE1hdGguUEkgLSB6O1xuICAgICAgICB9XG4gICAgICAgIHggPSBNYXRoLnNpbih4KTtcbiAgICAgICAgeiA9IE1hdGguc2luKHopO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHgsIDAsIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhbWVyYVBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgICAgLy8gc2V0IHRoZSBhdWRpbyBjb250ZXh0J3MgbGlzdGVuZXIgcG9zaXRpb24gdG8gbWF0Y2ggdGhlIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICBjb250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvcHBsZXIocGFubmVyTm9kZSwgeCwgeSwgeiwgZGVsdGFYLCBkZWx0YVksIGRlbHRhWiwgZGVsdGFUaW1lKSB7XG4gICAgICAgIC8vIFRyYWNraW5nIHRoZSB2ZWxvY2l0eSBjYW4gYmUgZG9uZSBieSBnZXR0aW5nIHRoZSBvYmplY3QncyBwcmV2aW91cyBwb3NpdGlvbiwgc3VidHJhY3RpbmcgXG4gICAgICAgIC8vIGl0IGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIGRpdmlkaW5nIHRoZSByZXN1bHQgYnkgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IGZyYW1lXG4gICAgICAgIHBhbm5lck5vZGUuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIHBhbm5lck5vZGUuc2V0VmVsb2NpdHkoZGVsdGFYL2RlbHRhVGltZSwgZGVsdGFZL2RlbHRhVGltZSwgZGVsdGFaL2RlbHRhVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGZpbHRlck5vZGUsIHZhbHVlLCBxdWFsaXR5LCBnYWluKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xuICAgICAgICBxdWFsaXR5ID0gcGFyc2VGbG9hdChxdWFsaXR5LCAxMCk7XG4gICAgICAgIGdhaW4gPSBwYXJzZUZsb2F0KGdhaW4sIDEwKTtcbiAgICAgICAgLy8gQ2xhbXAgdGhlIGZyZXF1ZW5jeSBiZXR3ZWVuIHRoZSBtaW5pbXVtIHZhbHVlICg0MCBIeikgYW5kIGhhbGYgb2YgdGhlXG4gICAgICAgIC8vIHNhbXBsaW5nIHJhdGUuXG4gICAgICAgIHZhciBtaW5WYWx1ZSA9IDQwO1xuICAgICAgICB2YXIgbWF4VmFsdWUgPSBjb250ZXh0LnNhbXBsZVJhdGUgLyAyO1xuICAgICAgICAvLyBMb2dhcml0aG0gKGJhc2UgMikgdG8gY29tcHV0ZSBob3cgbWFueSBvY3RhdmVzIGZhbGwgaW4gdGhlIHJhbmdlLlxuICAgICAgICB2YXIgbnVtYmVyT2ZPY3RhdmVzID0gTWF0aC5sb2cobWF4VmFsdWUgLyBtaW5WYWx1ZSkgLyBNYXRoLkxOMjtcbiAgICAgICAgLy8gQ29tcHV0ZSBhIG11bHRpcGxpZXIgZnJvbSAwIHRvIDEgYmFzZWQgb24gYW4gZXhwb25lbnRpYWwgc2NhbGUuXG4gICAgICAgIHZhciBtdWx0aXBsaWVyID0gTWF0aC5wb3coMiwgbnVtYmVyT2ZPY3RhdmVzICogKHZhbHVlIC0gMS4wKSk7XG4gICAgICAgIC8vIEdldCBiYWNrIHRvIHRoZSBmcmVxdWVuY3kgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAgICAgICAgZmlsdGVyTm9kZS5mcmVxdWVuY3kudmFsdWUgPSBtYXhWYWx1ZSAqIG11bHRpcGxpZXI7XG5cbiAgICAgICAgLy9maWx0ZXJOb2RlLlEudmFsdWUgPSBxdWFsaXR5O1xuICAgICAgICAvL2ZpbHRlck5vZGUuZ2Fpbi52YWx1ZSA9IGdhaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmFkZTogZnVuY3Rpb24oZ2Fpbk5vZGUsIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICAgICAgcmFtcChnYWluTm9kZS5nYWluLCB2YWx1ZSwgZHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBwYW5YOiBmdW5jdGlvbihwYW5uZXJOb2RlLCB2YWx1ZSkge1xuICAgICAgICAgICAgcGFuWChwYW5uZXJOb2RlLCB2YWx1ZSAqIE1hdGguUEkgLyA0KTtcbiAgICAgICAgfSxcbiAgICAgICAgJ3NldENhbWVyYVBvc2l0aW9uJzogc2V0Q2FtZXJhUG9zaXRpb24sXG4gICAgICAgICdwYW4nOiBwYW5YWVosXG4gICAgICAgICdkb3BwbGVyJzogZG9wcGxlcixcbiAgICAgICAgJ2ZpbHRlcic6IGZpbHRlclxuICAgIH07XG59O1xuXG4vKlxuXG5UaHJlZUpTIHBvc2l0aW9uYWxcblxuc2V0UG9zaXRpb25BbmRWZWxvY2l0eSA6IGZ1bmN0aW9uKG9iamVjdCwgYXVkaW9Ob2RlLCB4LCB5LCB6LCBkdCkge1xuICAgIHZhciBwID0gb2JqZWN0Lm1hdHJpeFdvcmxkLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHB4ID0gcC54LCBweSA9IHAueSwgcHogPSBwLno7XG4gICAgb2JqZWN0LnBvc2l0aW9uLnNldCh4LHkseik7XG4gICAgb2JqZWN0LnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gICAgdmFyIHEgPSBvYmplY3QubWF0cml4V29ybGQuZ2V0UG9zaXRpb24oKTtcbiAgICB2YXIgZHggPSBxLngtcHgsIGR5ID0gcS55LXB5LCBkeiA9IHEuei1wejtcbiAgICBpZiAodGhpcy5wb3NpdGlvbkVuYWJsZWQpIHtcbiAgICAgIGF1ZGlvTm9kZS5zZXRQb3NpdGlvbihxLngsIHEueSwgcS56KTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmVsb2NpdHlFbmFibGVkKSB7XG4gICAgICBhdWRpb05vZGUuc2V0VmVsb2NpdHkoZHgvZHQsIGR5L2R0LCBkei9kdCk7XG4gICAgfVxuICB9LFxuXG4gIHNldFBvc2l0aW9uIDogZnVuY3Rpb24ob2JqZWN0LCB4LCB5LCB6LCBkdCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb25BbmRWZWxvY2l0eShvYmplY3QsIG9iamVjdC5zb3VuZC5wYW5uZXIsIHgsIHksIHosIGR0KTtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbkVuYWJsZWQpIHtcbiAgICAgIHZhciB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMSk7XG4gICAgICB2YXIgbSA9IG9iamVjdC5tYXRyaXhXb3JsZDtcbiAgICAgIHZhciBteCA9IG0ubjE0LCBteSA9IG0ubjI0LCBteiA9IG0ubjM0O1xuICAgICAgbS5uMTQgPSBtLm4yNCA9IG0ubjM0ID0gMDtcbiAgICAgIG0ubXVsdGlwbHlWZWN0b3IzKHZlYyk7XG4gICAgICB2ZWMubm9ybWFsaXplKCk7XG4gICAgICBvYmplY3Quc291bmQucGFubmVyLnNldE9yaWVudGF0aW9uKHZlYy54LCB2ZWMueSwgdmVjLnopO1xuICAgICAgbS5uMTQgPSBteDtcbiAgICAgIG0ubjI0ID0gbXk7IFxuICAgICAgbS5uMzQgPSBtejtcbiAgICB9XG4gIH0sXG5cbiAgc2V0TGlzdGVuZXJQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCB0aGlzLmF1ZGlvLmNvbnRleHQubGlzdGVuZXIsIHgsIHksIHosIGR0KTtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbkVuYWJsZWQpIHtcbiAgICAgIHZhciBtID0gb2JqZWN0Lm1hdHJpeDtcbiAgICAgIHZhciBteCA9IG0ubjE0LCBteSA9IG0ubjI0LCBteiA9IG0ubjM0O1xuICAgICAgbS5uMTQgPSBtLm4yNCA9IG0ubjM0ID0gMDtcblxuICAgICAgdmFyIHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwxKTtcbiAgICAgIG0ubXVsdGlwbHlWZWN0b3IzKHZlYyk7XG4gICAgICB2ZWMubm9ybWFsaXplKCk7XG5cbiAgICAgIHZhciB1cCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsLTEsMCk7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh1cCk7XG4gICAgICB1cC5ub3JtYWxpemUoKTtcblxuICAgICAgdGhpcy5hdWRpby5jb250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHZlYy54LCB2ZWMueSwgdmVjLnosIHVwLngsIHVwLnksIHVwLnopO1xuXG4gICAgICBtLm4xNCA9IG14O1xuICAgICAgbS5uMjQgPSBteTsgXG4gICAgICBtLm4zNCA9IG16O1xuICAgIH1cbiAgfSxcblxuXG4gICovXG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW87XG4iLCIvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4vKiBDb3B5cmlnaHQgMjAxMyBDaHJpcyBXaWxzb25cblxuICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKiBcblxuVGhpcyBtb25rZXlwYXRjaCBsaWJyYXJ5IGlzIGludGVuZGVkIHRvIGJlIGluY2x1ZGVkIGluIHByb2plY3RzIHRoYXQgdXNlIFxud2Via2l0QXVkaW9Db250ZXh0IChpbnN0ZWFkIG9mIEF1ZGlvQ29udGV4dCksIGFuZCB0aGF0IG1heSB1c2UgdGhlIG5vdy1cbmRlcHJlY2F0ZWQgYml0cyBvZiB0aGUgV2ViIEF1ZGlvIEFQSSAoZS5nLiB1c2luZyBCdWZmZXJTb3VyY2VOb2RlLm5vdGVPbigpXG5pbnN0ZWFkIG9mIEJ1ZmZlclNvdXJjZU5vZGUuc3RhcnQoKS5cblxuVGhpcyBsaWJyYXJ5IHNob3VsZCBiZSBoYXJtbGVzcyB0byBpbmNsdWRlIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IGhhdmVcbnRoZSB1bnByZWZpeGVkIFwiQXVkaW9Db250ZXh0XCIgaW1wbGVtZW50ZWQuICBJZiB1bnByZWZpeGVkIEF1ZGlvQ29udGV4dCBpc1xuc3VwcG9ydGVkLCBidXQgdGhlIGRlcHJlY2F0ZWQgbWV0aG9kIG5hbWVzIGFyZSBhbHJlYWR5IGltcGxlbWVudGVkLCB0aGlzXG5saWJyYXJ5IHdpbGwgaGF2ZSBjcmVhdGVkIGEgZmV3IHNoaW0gZnVuY3Rpb25zIG9uIGNyZWF0ZSogbWV0aG9kcywgYnV0IFxud2lsbCBub3QgZGFtYWdlIG9yIG92ZXJyaWRlIGFueXRoaW5nIGVsc2UuXG5cbklkZWFsbHksIHRoZSB1c2Ugb2YgdGhpcyBsaWJyYXJ5IHdpbGwgZ28gdG8gemVybyAtIGl0IGlzIG9ubHkgaW50ZW5kZWQgYXNcbmEgd2F5IHRvIHF1aWNrbHkgZ2V0IHNjcmlwdCB3cml0dGVuIHRvIHRoZSBvbGQgV2ViIEF1ZGlvIG1ldGhvZHMgdG8gd29ya1xuaW4gYnJvd3NlcnMgdGhhdCBvbmx5IHN1cHBvcnQgdGhlIG5ldywgYXBwcm92ZWQgbWV0aG9kcy5cblxuVGhlIHBhdGNoZXMgdGhpcyBsaWJyYXJ5IGhhbmRsZXM6XG5cbkF1ZGlvQnVmZmVyU291cmNlTm9kZS5ub3RlT24oKSBpcyBhbGlhc2VkIHRvIHN0YXJ0KClcbkF1ZGlvQnVmZmVyU291cmNlTm9kZS5ub3RlR3JhaW5PbigpIGlzIGFsaWFzZWQgdG8gc3RhcnQoKVxuQXVkaW9CdWZmZXJTb3VyY2VOb2RlLm5vdGVPZmYoKSBpcyBhbGlhc2VkIHRvIHN0b3AoKVxuQXVkaW9Db250ZXh0LmNyZWF0ZUdhaW5Ob2RlKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVHYWluKClcbkF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheU5vZGUoKSBpcyBhbGlhc2VkIHRvIGNyZWF0ZURlbGF5KClcbkF1ZGlvQ29udGV4dC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSgpIGlzIGFsaWFzZWQgdG8gY3JlYXRlU2NyaXB0UHJvY2Vzc29yKClcbk9zY2lsbGF0b3JOb2RlLm5vdGVPbigpIGlzIGFsaWFzZWQgdG8gc3RhcnQoKVxuT3NjaWxsYXRvck5vZGUubm90ZU9mZigpIGlzIGFsaWFzZWQgdG8gc3RvcCgpXG5BdWRpb1BhcmFtLnNldFRhcmdldFZhbHVlQXRUaW1lKCkgaXMgYWxpYXNlZCB0byBzZXRUYXJnZXRBdFRpbWUoKVxuT3NjaWxsYXRvck5vZGUncyBvbGQgZW51bSB2YWx1ZXMgYXJlIGFsaWFzZWQgdG8gdGhlIFdlYiBJREwgZW51bSB2YWx1ZXMuXG5CaXF1YWRGaWx0ZXJOb2RlJ3Mgb2xkIGVudW0gdmFsdWVzIGFyZSBhbGlhc2VkIHRvIHRoZSBXZWIgSURMIGVudW0gdmFsdWVzLlxuUGFubmVyTm9kZSdzIG9sZCBlbnVtIHZhbHVlcyBhcmUgYWxpYXNlZCB0byB0aGUgV2ViIElETCBlbnVtIHZhbHVlcy5cbkF1ZGlvQ29udGV4dC5jcmVhdGVXYXZlVGFibGUoKSBpcyBhbGlhc2VkIHRvIGNyZWF0ZVBlcmlvZGljV2F2ZSgpLlxuT3NjaWxsYXRvck5vZGUuc2V0V2F2ZVRhYmxlKCkgaXMgYWxpYXNlZCB0byBzZXRQZXJpb2RpY1dhdmUoKS5cblxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBleHBvcnRzLCBwZXJmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBmaXhTZXRUYXJnZXQocGFyYW0pIHtcbiAgICBpZiAoIXBhcmFtKSAgICAvLyBpZiBOWUksIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm47XG4gICAgaWYgKCFwYXJhbS5zZXRUYXJnZXRWYWx1ZUF0VGltZSlcbiAgICAgIHBhcmFtLnNldFRhcmdldFZhbHVlQXRUaW1lID0gcGFyYW0uc2V0VGFyZ2V0QXRUaW1lOyBcbiAgfVxuXG4gIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ0F1ZGlvQ29udGV4dCcpICYmICF3aW5kb3cuaGFzT3duUHJvcGVydHkoJ3dlYmtpdEF1ZGlvQ29udGV4dCcpKSB7XG4gICAgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dDtcblxuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaW50ZXJuYWxfY3JlYXRlR2FpbiA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlR2FpbjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW4gPSBmdW5jdGlvbigpIHsgXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuaW50ZXJuYWxfY3JlYXRlR2FpbigpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUuZ2Fpbik7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVEZWxheSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRGVsYXk7XG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVEZWxheSA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVEZWxheSgpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUuZGVsYXlUaW1lKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZUJ1ZmZlclNvdXJjZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlQnVmZmVyU291cmNlO1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlQnVmZmVyU291cmNlID0gZnVuY3Rpb24oKSB7IFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgaWYgKCFub2RlLm5vdGVPbilcbiAgICAgICAgbm9kZS5ub3RlT24gPSBub2RlLnN0YXJ0OyBcbiAgICAgIGlmICghbm9kZS5ub3RlT25HcmFpbilcbiAgICAgICAgbm9kZS5ub3RlT25HcmFpbiA9IG5vZGUuc3RhcnQ7XG4gICAgICBpZiAoIW5vZGUubm90ZU9mZilcbiAgICAgICAgbm9kZS5ub3RlT2ZmID0gbm9kZS5zdG9wO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUucGxheWJhY2tSYXRlKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvciA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yO1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yID0gZnVuY3Rpb24oKSB7IFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUudGhyZXNob2xkKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmtuZWUpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUucmF0aW8pO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUucmVkdWN0aW9uKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmF0dGFjayk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5yZWxlYXNlKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZUJpcXVhZEZpbHRlciA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlQmlxdWFkRmlsdGVyO1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlQmlxdWFkRmlsdGVyID0gZnVuY3Rpb24oKSB7IFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUuZnJlcXVlbmN5KTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmRldHVuZSk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5RKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmdhaW4pO1xuICAgICAgdmFyIGVudW1WYWx1ZXMgPSBbJ0xPV1BBU1MnLCAnSElHSFBBU1MnLCAnQkFORFBBU1MnLCAnTE9XU0hFTEYnLCAnSElHSFNIRUxGJywgJ1BFQUtJTkcnLCAnTk9UQ0gnLCAnQUxMUEFTUyddO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnVtVmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBlbnVtVmFsdWUgPSBlbnVtVmFsdWVzW2ldO1xuICAgICAgICB2YXIgbmV3RW51bVZhbHVlID0gZW51bVZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghbm9kZS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoZW51bVZhbHVlKSkge1xuICAgICAgICAgIG5vZGUucHJvdG90eXBlW2VudW1WYWx1ZV0gPSBuZXdFbnVtVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBpZiAoQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSggJ2NyZWF0ZU9zY2lsbGF0b3InICkpIHtcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaW50ZXJuYWxfY3JlYXRlT3NjaWxsYXRvciA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlT3NjaWxsYXRvcjtcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlT3NjaWxsYXRvciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgaWYgKCFub2RlLm5vdGVPbilcbiAgICAgICAgICBub2RlLm5vdGVPbiA9IG5vZGUuc3RhcnQ7IFxuICAgICAgICBpZiAoIW5vZGUubm90ZU9mZilcbiAgICAgICAgICBub2RlLm5vdGVPZmYgPSBub2RlLnN0b3A7XG4gICAgICAgIGZpeFNldFRhcmdldChub2RlLmZyZXF1ZW5jeSk7XG4gICAgICAgIGZpeFNldFRhcmdldChub2RlLmRldHVuZSk7XG4gICAgICAgIHZhciBlbnVtVmFsdWVzID0gWydTSU5FJywgJ1NRVUFSRScsICdTQVdUT09USCcsICdUUklBTkdMRScsICdDVVNUT00nXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnVtVmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgdmFyIGVudW1WYWx1ZSA9IGVudW1WYWx1ZXNbaV07XG4gICAgICAgICAgdmFyIG5ld0VudW1WYWx1ZSA9IGVudW1WYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmICghbm9kZS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoZW51bVZhbHVlKSkge1xuICAgICAgICAgICAgbm9kZS5wcm90b3R5cGVbZW51bVZhbHVlXSA9IG5ld0VudW1WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFub2RlLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnc2V0V2F2ZVRhYmxlJykpIHtcbiAgICAgICAgICBub2RlLnByb3RvdHlwZS5zZXRXYXZlVGFibGUgPSBub2RlLnByb3RvdHlwZS5zZXRQZXJpb2RpY1RhYmxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZVBhbm5lciA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlUGFubmVyO1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlUGFubmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuaW50ZXJuYWxfY3JlYXRlUGFubmVyKCk7XG4gICAgICB2YXIgZW51bVZhbHVlcyA9IHtcbiAgICAgICAgJ0VRVUFMUE9XRVInOiAnZXF1YWxwb3dlcicsXG4gICAgICAgICdIUlRGJzogJ0hSVEYnLFxuICAgICAgICAnTElORUFSX0RJU1RBTkNFJzogJ2xpbmVhcicsXG4gICAgICAgICdJTlZFUlNFX0RJU1RBTkNFJzogJ2ludmVyc2UnLFxuICAgICAgICAnRVhQT05FTlRJQUxfRElTVEFOQ0UnOiAnZXhwb25lbnRpYWwnLFxuICAgICAgfTtcbiAgICAgIGZvciAodmFyIGVudW1WYWx1ZSBpbiBlbnVtVmFsdWVzKSB7XG4gICAgICAgIHZhciBuZXdFbnVtVmFsdWUgPSBlbnVtVmFsdWVzW2VudW1WYWx1ZV07XG4gICAgICAgIGlmICghbm9kZS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoZW51bVZhbHVlKSkge1xuICAgICAgICAgIG5vZGUucHJvdG90eXBlW2VudW1WYWx1ZV0gPSBuZXdFbnVtVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBpZiAoIUF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2NyZWF0ZUdhaW5Ob2RlJykpXG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW5Ob2RlID0gQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVHYWluO1xuICAgIGlmICghQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlRGVsYXlOb2RlJykpXG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZURlbGF5Tm9kZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRGVsYXk7XG4gICAgaWYgKCFBdWRpb0NvbnRleHQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdjcmVhdGVKYXZhU2NyaXB0Tm9kZScpKVxuICAgICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0Tm9kZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlU2NyaXB0UHJvY2Vzc29yO1xuICAgIGlmICghQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlV2F2ZVRhYmxlJykpXG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVdhdmVUYWJsZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlUGVyaW9kaWNXYXZlO1xuICB9XG59KHdpbmRvdykpO1xuXG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyksXG4gICAgQW5hbHlzZXJEaXNwbGF5ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMnKTtcblxuZnVuY3Rpb24gQW5hbHlzZXIoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgLy90aGlzLnNvdW5kID0gXG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdEcnVtcycpLmRhdGEpO1xuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ0Jhc3MnKS5kYXRhKTtcbiAgICAvLyAxMDI0IGZmdCBzaXplIGlzIDUxMiBwYXJ0c1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuYW5hbHlzZXIoMTAyNCk7XG4gICAgLy90aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICB2YXIgZGlzcGxheSA9IG5ldyBBbmFseXNlckRpc3BsYXkoKTtcblxuICAgIHZhciBwYW5lbEZyZXEgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnRnJlcXVlbmNpZXMnKTtcbiAgICB0aGlzLnNsaWRlclNtb290aGluZyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHBhbmVsRnJlcS5lbCwgJ1Ntb290aGluZycsIDAsIDEsIDAuMDEsIHRoaXMubm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQsIHRoaXMudXBkYXRlU21vb3RoaW5nLCB0aGlzKTtcbiAgICB0aGlzLmRyb3Bkb3duRkZUID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bihwYW5lbEZyZXEuZWwsIHtcbiAgICAgICAgJzY0JzogNjQsXG4gICAgICAgICcxMjgnOiAxMjgsXG4gICAgICAgICcyNTYnOiAyNTYsXG4gICAgICAgICc1MTInOiA1MTIsXG4gICAgICAgICcxMDI0JzogMTAyNCxcbiAgICAgICAgJzIwNDgnOiAyMDQ4XG4gICAgfSwgdGhpcy51cGRhdGVGRlRTaXplLCB0aGlzLCB0aGlzLm5vZGUuZmZ0U2l6ZSwgJ0ZGVCBTaXplJyk7XG5cbiAgICB2YXIgZnJlcSA9IGRpc3BsYXkuYWRkRnJlcSh0aGlzLm5vZGUpO1xuICAgIGZyZXEuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbEZyZXEuYXBwZW5kKGZyZXEuY2FudmFzKTtcblxuICAgIHZhciBwYW5lbFdhdmUgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnV2F2ZScpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbFdhdmUuYXBwZW5kKHdhdmUuY2FudmFzKTtcblxuICAgIHZhciBwYW5lbExldmVscyA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdMZXZlbHMnKTtcbiAgICB2YXIgbGV2ZWxzID0gZGlzcGxheS5hZGRMZXZlbHModGhpcy5ub2RlKTtcbiAgICBsZXZlbHMuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbExldmVscy5hcHBlbmQobGV2ZWxzLmNhbnZhcyk7XG59XG5cbkFuYWx5c2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5BbmFseXNlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBbmFseXNlcjtcblxuQW5hbHlzZXIucHJvdG90eXBlLnVwZGF0ZVNtb290aGluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5ub2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbn07XG5cbkFuYWx5c2VyLnByb3RvdHlwZS51cGRhdGVGRlRTaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLm5vZGUuZmZ0U2l6ZSA9IHBhcnNlSW50KHZhbHVlKTtcbn07XG5cbkFuYWx5c2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2VyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFdlYkF1ZGlvID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvd2ViLWF1ZGlvLmpzJyksXG5cdEFzc2V0TG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXNzZXQtbG9hZGVyLmpzJyksXG5cdExvYWRpbmdCYXIgPSByZXF1aXJlKCcuL2xvYWRpbmctYmFyLmpzJyk7XG5cbmZ1bmN0aW9uIEFic3RyYWN0RGVtbyhlbCwgYXVkaW9Db250ZXh0KSB7XG5cdHRoaXMuZWwgPSBlbDtcblx0dGhpcy5hdWRpbyA9IG5ldyBXZWJBdWRpbyhhdWRpb0NvbnRleHQpO1xufVxuXG5BYnN0cmFjdERlbW8ucHJvdG90eXBlID0ge1xuXHRwbGF5OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fSxcblx0cGF1c2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuYXVkaW8ucGF1c2UoKTtcblx0fSxcblx0bG9hZDogZnVuY3Rpb24odXJsLCBmbikge1xuXHRcdExvYWRpbmdCYXIuc2hvdygpO1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCk7XG5cdFx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSB0cnVlO1xuXHRcdFx0bG9hZGVyLm9uUHJvZ3Jlc3MuYWRkKGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0TG9hZGluZ0Jhci51cGRhdGUocCk7XG5cdFx0XHR9KTtcblx0XHRcdGxvYWRlci5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0XHRcdGxvYWRlci5vblByb2dyZXNzLnJlbW92ZUFsbCgpO1xuXHRcdFx0XHRMb2FkaW5nQmFyLmhpZGUoKTtcblx0XHRcdFx0Zm4uY2FsbCh0aGlzLCBidWZmZXIpO1xuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRsb2FkZXIubG9hZFdlYkF1ZGlvKHRoaXMuYXVkaW8uY29udGV4dCk7XG5cdFx0cmV0dXJuIGxvYWRlcjtcblx0fSxcblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5wYXVzZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0RGVtbztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQW5hbHlzZXJEaXNwbGF5KCkge1xuICAgIHRoaXMuYW5hbHlzZXJzID0gW107XG4gICAgdGhpcy5kcmF3KCk7XG59XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkRnJlcSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkRGlzcGxheShBbmFseXNlckRpc3BsYXkuRnJlcSwgbm9kZSwgZWwpO1xuICAgIC8qaWYoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2FudmFzJykge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy90aGlzLmFuYWx5c2Vycy5wdXNoKG5ldyBBbmFseXNlckRpc3BsYXkuSFRNTFZpZXcobm9kZSwgZWwpKTtcbiAgICB9Ki9cbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkRGlzcGxheShBbmFseXNlckRpc3BsYXkuV2F2ZSwgbm9kZSwgZWwpO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGRMZXZlbHMgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LkxldmVscywgbm9kZSwgZWwpO1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5hZGREaXNwbGF5ID0gZnVuY3Rpb24oQ2xhc3MsIG5vZGUsIGVsKSB7XG4gICAgZWwgPSBlbCB8fCB0aGlzLmdldENhbnZhcygpO1xuICAgIHZhciBkaXNwbGF5ID0gbmV3IENsYXNzKG5vZGUsIGVsKTtcbiAgICB0aGlzLmFuYWx5c2Vycy5wdXNoKGRpc3BsYXkpO1xuICAgIHJldHVybiBkaXNwbGF5O1xufTtcblxuQW5hbHlzZXJEaXNwbGF5LnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgd2lkdGggPSB3aWR0aCB8fCA1MTI7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDI1NjtcbiAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGMud2lkdGggPSB3aWR0aDtcbiAgICBjLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gYztcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICAgIHZhciBsID0gdGhpcy5hbmFseXNlcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZXJzW2ldLmRyYXcoKTtcbiAgICB9XG59O1xuXG4vLyBmcmVxdWVuY2llc1xuXG5BbmFseXNlckRpc3BsYXkuRnJlcSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5GcmVxLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgZnJlcXVlbmN5QmluQ291bnQgPSB0aGlzLm5vZGUuZnJlcXVlbmN5QmluQ291bnQsXG4gICAgICAgIGJhcldpZHRoID0gTWF0aC5yb3VuZCh3aWR0aC9mcmVxdWVuY3lCaW5Db3VudCksXG4gICAgICAgIGJhclNwYWNpbmcgPSAwO1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxQnl0ZURhdGEpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmVxdWVuY3lCaW5Db3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSBmcmVxQnl0ZURhdGFbaV07XG4gICAgICAgIHZhciBwZXJjZW50ID0gbWFnbml0dWRlIC8gMjU2O1xuICAgICAgICB2YXIgaHVlID0gaS9mcmVxdWVuY3lCaW5Db3VudCAqIDM2MDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdoc2woJyArIGh1ZSArICcsIDEwMCUsIDUwJSknO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoYmFyV2lkdGggKiBpLCBoZWlnaHQsIGJhcldpZHRoIC0gYmFyU3BhY2luZywgMCAtIGhlaWdodCAqIHBlcmNlbnQpO1xuICAgIH1cbn07XG5cbi8vIHdhdmVmb3JtXG5cbkFuYWx5c2VyRGlzcGxheS5XYXZlID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGVsO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRoaWNrbmVzcyA9IDE7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgZnJlcXVlbmN5QmluQ291bnQgPSB0aGlzLm5vZGUuZnJlcXVlbmN5QmluQ291bnQsXG4gICAgICAgIGJhcldpZHRoID0gTWF0aC5yb3VuZCh3aWR0aC9mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVUaW1lRG9tYWluRGF0YShmcmVxQnl0ZURhdGEpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmVxdWVuY3lCaW5Db3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSBmcmVxQnl0ZURhdGFbaV07XG4gICAgICAgIHZhciBwZXJjZW50ID0gbWFnbml0dWRlIC8gMjU2O1xuICAgICAgICB2YXIgaHVlID0gaS9mcmVxdWVuY3lCaW5Db3VudCAqIDM2MDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdoc2woJyArIGh1ZSArICcsIDEwMCUsIDUwJSknO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoYmFyV2lkdGggKiBpLCBoZWlnaHQgLSBoZWlnaHQgKiBwZXJjZW50IC0gMSwgdGhpcy50aGlja25lc3MsIHRoaXMudGhpY2tuZXNzKTtcbiAgICB9XG59O1xuXG5BbmFseXNlckRpc3BsYXkuTGV2ZWxzID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGVsO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5MZXZlbHMucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBmcmVxdWVuY3lCaW5Db3VudCA9IHRoaXMubm9kZS5mcmVxdWVuY3lCaW5Db3VudDtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIHZhciBsZW5ndGggPSBmcmVxQnl0ZURhdGEubGVuZ3RoLFxuICAgICAgICB0b3RhbCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0b3RhbCArPSBmcmVxQnl0ZURhdGFbaV07XG4gICAgfVxuICAgIHZhciBhdmVyYWdlID0gdG90YWwgLyBsZW5ndGg7XG4gICAgdmFyIHBlcmNlbnQgPSBhdmVyYWdlIC8gMTI4O1xuXG4gICAgdmFyIGdyYWRpZW50ID0gdGhpcy5jb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoICogcGVyY2VudCwgMCk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdoc2woMTI4LCAxMDAlLCA1MCUpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdoc2woMzYwLCAxMDAlLCA1MCUpJyk7XG5cbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoICogcGVyY2VudCwgaGVpZ2h0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQW5hbHlzZXJEaXNwbGF5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBMb2FkaW5nQmFyKCkge1xuICAgIHZhciBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTG9hZGVyJyksXG4gICAgICAgIGxhYmVsID0gbG9hZGVyLnF1ZXJ5U2VsZWN0b3IoJy5Mb2FkZXItbGFiZWwnKTtcbiAgICAgICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlKHApIHtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChwICogMTAwKSArICclJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnTG9hZGVyLS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnTG9hZGVyLS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAndXBkYXRlJzogdXBkYXRlLFxuICAgICAgICAnc2hvdyc6IHNob3csXG4gICAgICAgICdoaWRlJzogaGlkZVxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IExvYWRpbmdCYXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVUlDb21wb25lbnRzKCkge1xufVxuXG4vLyBoZWxwZXJzXG5cbmZ1bmN0aW9uIGFkZEtleURvd24oa2V5LCBmbiwgY29udGV4dCkge1xuICAgIGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBvbktleURvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgICAgICB2YXIgcmVtb3ZlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUtleTtcbiAgICB9XG59XG5cbi8qXG4gKiBTbGlkZXJcbiAqL1xuXG5VSUNvbXBvbmVudHMuU2xpZGVyID0gZnVuY3Rpb24ocGFyZW50LCBsYWJlbCwgbWluLCBtYXgsIHN0ZXAsIHZhbHVlLCBmbiwgY29udGV4dCkge1xuICAgIHZhciBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYmwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIGxibC5jbGFzc05hbWUgPSAnU2xpZGVyLWxhYmVsJztcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnU2xpZGVyLWlucHV0JztcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgbWluKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCBtYXgpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCBzdGVwKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQgfHwgdGhpcywgdGhpcy52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xuICAgICAgICBvdXRwdXQuY2xhc3NOYW1lID0gJ1NsaWRlci1vdXRwdXQnO1xuICAgICAgICBvdXRwdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnU2xpZGVyIFNsaWRlci0tbGFyZ2UnO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGJsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3V0cHV0KTtcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5lbCA9IGZvcm07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLlNsaWRlci5wcm90b3R5cGUsICd2YWx1ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG4vKlxuICogUGFuZWxcbiAqL1xuXG5VSUNvbXBvbmVudHMuUGFuZWwgPSBmdW5jdGlvbihwYXJlbnQsIHRpdGxlKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ1BhbmVsJztcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgICBpZih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxufTtcblxuVUlDb21wb25lbnRzLlBhbmVsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihlbCkge1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xufTtcblxuVUlDb21wb25lbnRzLlBhbmVsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLmVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuUGFuZWwucHJvdG90eXBlLCAndGl0bGUnLCB7XG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZighdGhpcy50aXRsZUVsKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUodGhpcy50aXRsZUVsLCB0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGl0bGVFbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuLypcbiAqIEJ1dHRvblxuICovXG5cblVJQ29tcG9uZW50cy5CdXR0b24gPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsLCBmbiwgY29udGV4dCwga2V5KSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdCdXR0b24nLCAnQnV0dG9uLS1kZWZhdWx0Jyk7XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0IHx8IHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVLZXkgPSBhZGRLZXlEb3duKGtleSwgZm4sIGlucHV0KTtcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGlucHV0O1xufTtcblxuLypcbiAqIFRvZ2dsZSBCdXR0b25cbiAqL1xuXG5VSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uID0gZnVuY3Rpb24ocGFyZW50LCBsYWJlbEEsIGxhYmVsQiwgZm5BLCBmbkIsIGNvbnRleHQsIGtleSkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbGFiZWxCO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdCdXR0b24nLCAnQnV0dG9uLS1kZWZhdWx0Jyk7XG4gICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmlubmVySFRNTCA9PT0gbGFiZWxBKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGxhYmVsQjtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBsYWJlbEE7XG4gICAgICAgICAgICBpZih0eXBlb2YgZm5BID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZm5BLmNhbGwoY29udGV4dCB8fCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gbGFiZWxBO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGxhYmVsQjtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBmbkIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBmbkIuY2FsbChjb250ZXh0IHx8IHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG4gICAgdGhpcy5yZW1vdmVLZXkgPSBhZGRLZXlEb3duKGtleSwgdG9nZ2xlLCBpbnB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWxBO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGxhYmVsQjtcbiAgICB9O1xuICAgIHRoaXMuZWwgPSBpbnB1dDtcbn07XG5cbi8qXG4gKiBEcm9wZG93blxuICovXG5cblVJQ29tcG9uZW50cy5Ecm9wZG93biA9IGZ1bmN0aW9uKHBhcmVudCwgb3B0aW9ucywgZm4sIGNvbnRleHQsIHNlbGVjdGVkVmFsdWUsIHRpdGxlKSB7XG4gICAgdmFyIGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZGQuY2xhc3NOYW1lID0gJ0Ryb3Bkb3duJztcbiAgICBmb3IodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnNba2V5XSk7XG4gICAgICAgIG8uaW5uZXJIVE1MID0ga2V5O1xuICAgICAgICBkZC5hcHBlbmRDaGlsZChvKTtcbiAgICAgICAgaWYob3B0aW9uc1trZXldID09PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICBvLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQsIGRkLm9wdGlvbnNbZGQuc2VsZWN0ZWRJbmRleF0udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIGlmKHRpdGxlKSB7XG4gICAgICAgICAgICB2YXIgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBoLmNsYXNzTmFtZSA9ICdEcm9wZG93bi10aXRsZSc7XG4gICAgICAgICAgICBoLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGgpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkZCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBkZDtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuRHJvcGRvd24ucHJvdG90eXBlLCAndmFsdWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwub3B0aW9uc1t0aGlzLmVsLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVUlDb21wb25lbnRzLkRyb3Bkb3duLnByb3RvdHlwZSwgJ3RleHQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwub3B0aW9uc1t0aGlzLmVsLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVUlDb21wb25lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKTtcblxuZnVuY3Rpb24gRmlsdGVyKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnRHJ1bXMnKS5kYXRhKTtcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmZpbHRlci5sb3dwYXNzKCk7XG4gICAgdGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cbiAgICB0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0ZpbHRlciA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0JpcXVhZEZpbHRlck5vZGVcIj4rPC9hPicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgVUlDb21wb25lbnRzLkRyb3Bkb3duKHRoaXMucGFuZWwuZWwsIE1vZGVsLmZpbHRlciwgdGhpcy51cGRhdGVGaWx0ZXJUeXBlLCB0aGlzKTtcblxuICAgIHRoaXMuc2xpZGVyRnJlcSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdGcmVxdWVuY3knLCAwLCAxLCAwLjAxLCAwLjUsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclF1YWwgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAnUXVhbGl0eScsIDAsIDEwMDAsIDAuMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyR2FpbiA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdHYWluJywgLTQwLCA0MCwgMC4xLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG59XG5cbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuRmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZpbHRlcjtcblxuRmlsdGVyLnByb3RvdHlwZS51cGRhdGVGaWx0ZXJUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub2RlLnR5cGUgPSB0aGlzLmRyb3Bkb3duLnRleHQ7XG59O1xuXG5GaWx0ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXVkaW8uZWZmZWN0cy5maWx0ZXIodGhpcy5ub2RlLCB0aGlzLnNsaWRlckZyZXEudmFsdWUsIHRoaXMuc2xpZGVyUXVhbC52YWx1ZSwgdGhpcy5zbGlkZXJHYWluLnZhbHVlKTtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTG9hZGluZ0JhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9sb2FkaW5nLWJhci5qcycpLFxyXG5cdFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXHJcblx0S2V5Ym9hcmQgPSByZXF1aXJlKCcuLi91dGlscy9rZXlib2FyZC5qcycpLFxyXG5cdFJldmVyYiA9IHJlcXVpcmUoJy4vcmV2ZXJiLmpzJyksXHJcblx0QW5hbHlzZXIgPSByZXF1aXJlKCcuL2FuYWx5c2VyLmpzJyksXHJcblx0TXVsdGlUcmFjayA9IHJlcXVpcmUoJy4vbXVsdGktdHJhY2suanMnKSxcclxuXHRQYW5UaHJlZUQgPSByZXF1aXJlKCcuL3Bhbi10aHJlZS1kLmpzJyksXHJcblx0RmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXIuanMnKSxcclxuXHRNaWNyb3Bob25lID0gcmVxdWlyZSgnLi9taWNyb3Bob25lLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBHVUkoZWwpIHtcclxuXHR0aGlzLmVsID0gZWw7XHJcblx0dGhpcy5hZGRMb2FkZXIoKTtcclxufVxyXG5cclxuR1VJLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oYXVkaW9Db250ZXh0KSB7XHJcblx0dGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XHJcblx0TG9hZGluZ0Jhci5oaWRlKCk7XHJcblxyXG5cdHRoaXMubWVudSA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnUmV2ZXJiJywgdGhpcy5yZXZlcmIsIHRoaXMsIEtleWJvYXJkLk9ORSk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnQW5hbHlzZXInLCB0aGlzLmFuYWx5c2VyLCB0aGlzLCBLZXlib2FyZC5UV08pO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ011bHRpVHJhY2snLCB0aGlzLm11bHRpVHJhY2ssIHRoaXMsIEtleWJvYXJkLlRIUkVFKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdQYW4nLCB0aGlzLnBhbiwgdGhpcywgS2V5Ym9hcmQuRk9VUik7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnRmlsdGVyJywgdGhpcy5maWx0ZXIsIHRoaXMsIEtleWJvYXJkLkZJVkUpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ01pY3JvcGhvbmUnLCB0aGlzLm1pY3JvcGhvbmUsIHRoaXMsIEtleWJvYXJkLlNJWCk7XHJcblxyXG5cdHRoaXMuY29udHJvbHMgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwpO1xyXG5cdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKHRoaXMuY29udHJvbHMuZWwsICdQTEFZJywgJ1BBVVNFJywgdGhpcy5wbGF5LCB0aGlzLnBhdXNlLCB0aGlzLCBLZXlib2FyZC5TUEFDRUJBUik7XHJcblxyXG5cdHRoaXMuZGVtb0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZW1vSG9sZGVyKTtcclxuXHJcblx0dGhpcy5taWNyb3Bob25lKCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnJldmVyYiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFJldmVyYih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYW5hbHlzZXIgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBBbmFseXNlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubXVsdGlUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE11bHRpVHJhY2sodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBhbiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFBhblRocmVlRCh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgRmlsdGVyKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5taWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8odHJ1ZSk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE1pY3JvcGhvbmUodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmNsZWFyRGVtbyA9IGZ1bmN0aW9uKGhpZGVDb250cm9scykge1xyXG5cdGlmKHRoaXMuZGVtbykge1xyXG5cdFx0dGhpcy5kZW1vLmRlc3Ryb3koKTtcclxuXHR9XHJcblx0dGhpcy5kZW1vSG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdHRoaXMucGxheUJ1dHRvbi5yZXNldCgpO1xyXG5cclxuXHRpZihoaWRlQ29udHJvbHMpIHtcclxuXHRcdHRoaXMuY29udHJvbHMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5jb250cm9scy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHR9XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmRlbW8ucGxheSgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZGVtby5wYXVzZSgpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5hZGRMb2FkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRMb2FkaW5nQmFyLnNob3coKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUudXBkYXRlTG9hZFByb2dyZXNzID0gZnVuY3Rpb24ocCkge1xyXG5cdExvYWRpbmdCYXIudXBkYXRlKHApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHVUk7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBBbmFseXNlckRpc3BsYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYW5hbHlzZXItZGlzcGxheS5qcycpO1xuXG5mdW5jdGlvbiBNaWNvcGhvbmUoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5wbmxJbmZvID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnQWxsb3cgbWljb3Bob25lIHRvIGJlZ2luJyk7XG5cbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXyA9IChuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWEpO1xuXG4gICAgaWYoISFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhXykge1xuICAgICAgICB0aGlzLmdldE1pY3JvcGhvbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoJ0VSUk9SOiBnZXRVc2VyTWVkaWEgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG59XG5cbk1pY29waG9uZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTWljb3Bob25lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pY29waG9uZTtcblxuTWljb3Bob25lLnByb3RvdHlwZS5nZXRNaWNyb3Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWFfKCB7YXVkaW86dHJ1ZX0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzZWxmLm9uU3VjY2VzcyhzdHJlYW0pO1xuICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0pO1xufTtcblxuTWljb3Bob25lLnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgbWVkaWFTdHJlYW1Tb3VyY2UgPSB0aGlzLmF1ZGlvLmNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UoIHN0cmVhbSApO1xuICAgICAgICBtZWRpYVN0cmVhbVNvdXJjZS5jb25uZWN0KCB0aGlzLmF1ZGlvLl9nYWluICk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDEwMjQpO1xuICAgIHRoaXMuYXVkaW8uX2dhaW4uY29ubmVjdCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW8uY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICB2YXIgZGlzcGxheSA9IG5ldyBBbmFseXNlckRpc3BsYXkoKTtcbiAgICB2YXIgcGFuZWxXYXZlID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsLCAnV2F2ZScpO1xuICAgIHZhciB3YXZlID0gZGlzcGxheS5hZGRXYXZlKHRoaXMubm9kZSk7XG4gICAgd2F2ZS50aGlja25lc3MgPSAxO1xuICAgIHdhdmUuYmFja2dyb3VuZCA9ICdyZ2IoMCwwLDApJztcbiAgICBwYW5lbFdhdmUuYXBwZW5kKHdhdmUuY2FudmFzKTtcblxuICAgIHRoaXMucG5sSW5mby5yZW1vdmUoKTtcbn07XG5cbk1pY29waG9uZS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZihlLm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkRXJyb3InKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUVycm9yKCdFUlJPUjogUGVybWlzc2lvbiBkZW5pZWQuIEdvIHRvIFwiY2hyb21lOi8vc2V0dGluZ3MvY29udGVudCA+IG1lZGlhID4gbWFuYWdlIGV4Y2VwdGlvbnNcIiB0byB1bmRvIGluIGNocm9tZS4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUVycm9yKCdFUlJPUjogJyArIGUubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wbmxJbmZvLnJlbW92ZSgpO1xufTtcblxuTWljb3Bob25lLnByb3RvdHlwZS5kaXNwbGF5RXJyb3IgPSBmdW5jdGlvbihtc2cpIHtcbiAgICBpZighdGhpcy5wbmxFcnJvcikge1xuICAgICAgICB0aGlzLnBubEVycm9yID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5wbmxFcnJvci5lbC5jbGFzc0xpc3QuYWRkKCdQYW5lbC0tZXJyb3InKTtcbiAgICB9XG4gICAgdGhpcy5wbmxFcnJvci50aXRsZSA9IG1zZztcbn07XG5cbk1pY29waG9uZS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0TWljcm9waG9uZSgpO1xufTtcblxuTWljb3Bob25lLnByb3RvdHlwZS51cGRhdGVTbW9vdGhpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59O1xuXG5NaWNvcGhvbmUucHJvdG90eXBlLnVwZGF0ZUZGVFNpemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5mZnRTaXplID0gcGFyc2VJbnQodmFsdWUpO1xufTtcblxuTWljb3Bob25lLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pY29waG9uZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBNdWx0aVRyYWNrKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIHZhciBmaWxlcyA9IE1vZGVsLmF1ZGlvRmlsZXM7XG4gICAgZm9yICh2YXIgaSBpbiBmaWxlcykge1xuICAgICAgICB2YXIgc291bmQgPSB0aGlzLmF1ZGlvLmFkZChmaWxlc1tpXS5kYXRhKTtcbiAgICAgICAgc291bmQuYWRkTm9kZSh0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmdhaW4oKSk7XG4gICAgICAgIHZhciBjb250cm9sID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgaSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc291bmQuX25vZGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FpbkNvbnRyb2xzKHNvdW5kLl9ub2RlW2pdLCBjb250cm9sLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTXVsdGlUcmFjay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuTXVsdGlUcmFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aVRyYWNrO1xuXG5NdWx0aVRyYWNrLnByb3RvdHlwZS5jcmVhdGVHYWluQ29udHJvbHMgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuXHR2YXIgdm9sID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIoZWwsICdnYWluJywgMCwgMiwgMC4xLCAxLCBmdW5jdGlvbigpIHtcblx0XHRub2RlLmdhaW4udmFsdWUgPSB0aGlzLnZhbHVlO1xuXHR9KTtcbiAgICB2YXIgbXV0ZSA9IG5ldyBVSUNvbXBvbmVudHMuVG9nZ2xlQnV0dG9uKGVsLCAnbXV0ZScsICd1bm11dGUnLFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXV0ZS52b2x1bWUgPSBub2RlLmdhaW4udmFsdWU7XG4gICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2b2wudmFsdWUgPSAwO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IHZvbC52YWx1ZSA9IG11dGUudm9sdW1lIHx8IDE7IFxuICAgICAgICB9XG4gICAgKTtcbn07XG5cbk11bHRpVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlUcmFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGVtbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYnN0cmFjdC1kZW1vLmpzJyksXG4gICAgVUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcbiAgICBNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIFBhblRocmVlRChlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LnBhbigpO1xuICAgIHRoaXMuc291bmQuYWRkTm9kZSh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdQYW4nKTtcblxuICAgIC8vdGhpcy5zbGlkZXJYID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3gnLCAtTWF0aC5QSSwgTWF0aC5QSSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclkgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneScsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJaID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3onLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xufVxuXG5QYW5UaHJlZUQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblBhblRocmVlRC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYW5UaHJlZUQ7XG5cblBhblRocmVlRC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy90aGlzLmF1ZGlvLmVmZmVjdHMucGFuWCh0aGlzLm5vZGUsIHZhbHVlKTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB0aGlzLmF1ZGlvLmVmZmVjdHMucGFuKHRoaXMubm9kZSwgdGhpcy5zbGlkZXJYLnZhbHVlLCB0aGlzLnNsaWRlclkudmFsdWUsIHRoaXMuc2xpZGVyWi52YWx1ZSk7XG59O1xuXG5QYW5UaHJlZUQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnBhbmVsLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYW5UaHJlZUQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuXHRVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuXHRNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyk7XG5cbmZ1bmN0aW9uIFJldmVyYihlbCwgYXVkaW9Db250ZXh0KSB7XG5cdEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG5cdHRoaXMuc291bmQgPSB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdQaWFubycpLmRhdGEpO1xuXHR0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LnJldmVyYigpO1xuXHR0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuXHR0aGlzLnBhbmVsID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ1JldmVyYicpO1xuXHR0aGlzLmRyb3Bkb3duID0gbmV3IFVJQ29tcG9uZW50cy5Ecm9wZG93bih0aGlzLnBhbmVsLmVsLCBNb2RlbC5pbXB1bHNlLCB0aGlzLnVwZGF0ZUltcHVsc2VSZXNwb25zZSwgdGhpcyk7XG5cblx0dGhpcy5zbGlkZXJTZWNvbmRzID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3NlY29uZHMnLCAwLjEsIDEwLCAwLjEsIDEsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXHR0aGlzLnNsaWRlckRlY2F5ID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ2RlY2F5JywgMCwgMjAsIDAuMSwgMCwgdGhpcy5nZW5lcmF0ZUltcHVsc2VSZXNwb25zZSwgdGhpcyk7XG59XG5cblJldmVyYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuUmV2ZXJiLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJldmVyYjtcblxuUmV2ZXJiLnByb3RvdHlwZS5nZW5lcmF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm5vZGUuYnVmZmVyID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5jcmVhdGVJbXB1bHNlUmVzcG9uc2UodGhpcy5zbGlkZXJTZWNvbmRzLnZhbHVlLCB0aGlzLnNsaWRlckRlY2F5LnZhbHVlKTtcbn07XG5cblJldmVyYi5wcm90b3R5cGUudXBkYXRlSW1wdWxzZVJlc3BvbnNlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYodmFsdWUgPT09ICcnKSB7IHJldHVybjsgfVxuXHR0aGlzLnNsaWRlclNlY29uZHMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cblx0c3dpdGNoKHZhbHVlKSB7XG5cdFx0Y2FzZSAnZ2VuZXJhdGUnOlxuXHRcdFx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5zbGlkZXJEZWNheS5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aGlzLmxvYWQodmFsdWUgKyBNb2RlbC5leHRlbnNpb24sIHRoaXMuYXBwbHlJbXB1bHNlKTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLmFwcGx5SW1wdWxzZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXHR0aGlzLm5vZGUuYnVmZmVyID0gYnVmZmVyO1xufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHR0aGlzLnBhbmVsLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXZlcmI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZSgnLi9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcycpLFxuXHRBc3NldExvYWRlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcycpLFxuXHRNb2RlbCA9IHJlcXVpcmUoJy4vYXBwL21vZGVsL2F1ZGlvLW1vZGVsLmpzJyksXG5cdEdVSSA9IHJlcXVpcmUoJy4vYXBwL3ZpZXcvZ3VpLmpzJyk7XG5cbnJlcXVpcmUoJy4vYXBwL3V0aWxzL3JhZi1wb2x5ZmlsbC5qcycpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cdHRoaXMuaW5pdCgpO1xufVxuXG5BcHAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcblx0dGhpcy5ndWkgPSBuZXcgR1VJKGRvY3VtZW50LmJvZHkpO1xuXHR0aGlzLmxvYWRlciA9IG5ldyBBc3NldExvYWRlcigpO1xuXG5cdHRoaXMubG9nKCk7XG5cdHRoaXMubG9hZCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1zZyA9ICdBdWRpbyBNYW5hZ2VyLiBTdXBwb3J0ZWQ6JyArIHRoaXMuYXVkaW8uaXNTdXBwb3J0ZWQoKSArXG5cdCcgV2ViQXVkaW9BUEk6JyArIHRoaXMuYXVkaW8ud2ViQXVkaW9TdXBwb3J0ZWQoKSArXG5cdCcgVG91Y2hMb2NrZWQ6JyArIHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0Y29uc29sZS5sb2cobXNnKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmxvYWRlci50b3VjaExvY2tlZCA9IHRoaXMuYXVkaW8uZ2V0VG91Y2hMb2NrZWQoKTtcblx0dGhpcy5sb2FkZXIud2ViQXVkaW9Db250ZXh0ID0gdGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQ7XG5cdHRoaXMubG9hZGVyLmNyb3NzT3JpZ2luID0gdHJ1ZTtcblxuXHRNb2RlbC5leHRlbnNpb24gPSB0aGlzLmF1ZGlvLmdldEV4dGVuc2lvbigpO1xuXHR2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuXHRmb3IgKHZhciBpIGluIGZpbGVzKSB7XG5cdFx0dmFyIGZpbGUgPSBmaWxlc1tpXTtcblx0XHRmaWxlLnVybCA9IGZpbGUudXJsICsgTW9kZWwuZXh0ZW5zaW9uO1xuXHRcdHRoaXMubG9hZGVyLmFkZChmaWxlLnVybCk7XG5cdH1cblxuXHR0aGlzLmxvYWRlci5vblByb2dyZXNzLmFkZCh0aGlzLmd1aS51cGRhdGVMb2FkUHJvZ3Jlc3MsIHRoaXMuZ3VpKTtcblx0dGhpcy5sb2FkZXIub25Db21wbGV0ZS5hZGQodGhpcy5sb2FkQ29tcGxldGUsIHRoaXMpO1xuXHR0aGlzLmxvYWRlci5zdGFydCgpO1xufTtcblxuQXBwLnByb3RvdHlwZS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS5kYXRhID0gdGhpcy5sb2FkZXIuZ2V0KGZpbGUudXJsKS5kYXRhO1xuXHR9XG5cdHRoaXMuZ3VpLmluaXQodGhpcy5hdWRpby53ZWJBdWRpb0NvbnRleHQpO1xufTtcblxubmV3IEFwcCgpO1xuIiwiLypqc2xpbnQgb25ldmFyOnRydWUsIHVuZGVmOnRydWUsIG5ld2NhcDp0cnVlLCByZWdleHA6dHJ1ZSwgYml0d2lzZTp0cnVlLCBtYXhlcnI6NTAsIGluZGVudDo0LCB3aGl0ZTpmYWxzZSwgbm9tZW46ZmFsc2UsIHBsdXNwbHVzOmZhbHNlICovXG4vKmdsb2JhbCBkZWZpbmU6ZmFsc2UsIHJlcXVpcmU6ZmFsc2UsIGV4cG9ydHM6ZmFsc2UsIG1vZHVsZTpmYWxzZSwgc2lnbmFsczpmYWxzZSAqL1xuXG4vKiogQGxpY2Vuc2VcbiAqIEpTIFNpZ25hbHMgPGh0dHA6Ly9taWxsZXJtZWRlaXJvcy5naXRodWIuY29tL2pzLXNpZ25hbHMvPlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBBdXRob3I6IE1pbGxlciBNZWRlaXJvc1xuICogVmVyc2lvbjogMS4wLjAgLSBCdWlsZDogMjY4ICgyMDEyLzExLzI5IDA1OjQ4IFBNKVxuICovXG5cbihmdW5jdGlvbihnbG9iYWwpe1xuXG4gICAgLy8gU2lnbmFsQmluZGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QgdGhhdCByZXByZXNlbnRzIGEgYmluZGluZyBiZXR3ZWVuIGEgU2lnbmFsIGFuZCBhIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgICAqIDxiciAvPi0gPHN0cm9uZz5UaGlzIGlzIGFuIGludGVybmFsIGNvbnN0cnVjdG9yIGFuZCBzaG91bGRuJ3QgYmUgY2FsbGVkIGJ5IHJlZ3VsYXIgdXNlcnMuPC9zdHJvbmc+XG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBKb2EgRWJlcnQgQVMzIFNpZ25hbEJpbmRpbmcgYW5kIFJvYmVydCBQZW5uZXIncyBTbG90IGNsYXNzZXMuXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAbmFtZSBTaWduYWxCaW5kaW5nXG4gICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2UgSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIChkZWZhdWx0ID0gMCkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsQmluZGluZyhzaWduYWwsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAdHlwZSBGdW5jdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pc09uY2UgPSBpc09uY2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBtZW1iZXJPZiBTaWduYWxCaW5kaW5nLnByb3RvdHlwZVxuICAgICAgICAgKiBAbmFtZSBjb250ZXh0XG4gICAgICAgICAqIEB0eXBlIE9iamVjdHx1bmRlZmluZWR8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbGlzdGVuZXJDb250ZXh0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICogQHR5cGUgU2lnbmFsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zaWduYWwgPSBzaWduYWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbmVyIHByaW9yaXR5XG4gICAgICAgICAqIEB0eXBlIE51bWJlclxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgIH1cblxuICAgIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJlIGV4ZWN1dGVkLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IHBhcmFtZXRlcnMgcGFzc2VkIHRvIGxpc3RlbmVyIGR1cmluZyBgU2lnbmFsLmRpc3BhdGNoYCBhbmQgYFNpZ25hbEJpbmRpbmcuZXhlY3V0ZWAuIChjdXJyaWVkIHBhcmFtZXRlcnMpXG4gICAgICAgICAqIEB0eXBlIEFycmF5fG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBhcmFtcyA6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgbGlzdGVuZXIgcGFzc2luZyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgICAgICogPHA+SWYgYmluZGluZyB3YXMgYWRkZWQgdXNpbmcgYFNpZ25hbC5hZGRPbmNlKClgIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gc2lnbmFsIGRpc3BhdGNoIHF1ZXVlLCB0aGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgZm9yIHRoZSBzaWduYWwgZGlzcGF0Y2guPC9wPlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcGFyYW1zQXJyXSBBcnJheSBvZiBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7Kn0gVmFsdWUgcmV0dXJuZWQgYnkgdGhlIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uIChwYXJhbXNBcnIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuLCBwYXJhbXM7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgISF0aGlzLl9saXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHRoaXMucGFyYW1zPyB0aGlzLnBhcmFtcy5jb25jYXQocGFyYW1zQXJyKSA6IHBhcmFtc0FycjtcbiAgICAgICAgICAgICAgICBoYW5kbGVyUmV0dXJuID0gdGhpcy5fbGlzdGVuZXIuYXBwbHkodGhpcy5jb250ZXh0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclJldHVybjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0YWNoIGJpbmRpbmcgZnJvbSBzaWduYWwuXG4gICAgICAgICAqIC0gYWxpYXMgdG86IG15U2lnbmFsLnJlbW92ZShteUJpbmRpbmcuZ2V0TGlzdGVuZXIoKSk7XG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbCBvciBgbnVsbGAgaWYgYmluZGluZyB3YXMgcHJldmlvdXNseSBkZXRhY2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIGRldGFjaCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQm91bmQoKT8gdGhpcy5fc2lnbmFsLnJlbW92ZSh0aGlzLl9saXN0ZW5lciwgdGhpcy5jb250ZXh0KSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBiaW5kaW5nIGlzIHN0aWxsIGJvdW5kIHRvIHRoZSBzaWduYWwgYW5kIGhhdmUgYSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGlzQm91bmQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCEhdGhpcy5fc2lnbmFsICYmICEhdGhpcy5fbGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBJZiBTaWduYWxCaW5kaW5nIHdpbGwgb25seSBiZSBleGVjdXRlZCBvbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNPbmNlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzT25jZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldExpc3RlbmVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWx9IFNpZ25hbCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICovXG4gICAgICAgIGdldFNpZ25hbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZGVzdHJveSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zaWduYWw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWxCaW5kaW5nIGlzT25jZTonICsgdGhpcy5faXNPbmNlICsnLCBpc0JvdW5kOicrIHRoaXMuaXNCb3VuZCgpICsnLCBhY3RpdmU6JyArIHRoaXMuYWN0aXZlICsgJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbi8qZ2xvYmFsIFNpZ25hbEJpbmRpbmc6ZmFsc2UqL1xuXG4gICAgLy8gU2lnbmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCBmbk5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCAnbGlzdGVuZXIgaXMgYSByZXF1aXJlZCBwYXJhbSBvZiB7Zm59KCkgYW5kIHNob3VsZCBiZSBhIEZ1bmN0aW9uLicucmVwbGFjZSgne2ZufScsIGZuTmFtZSkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgUm9iZXJ0IFBlbm5lcidzIEFTMyBTaWduYWxzLlxuICAgICAqIEBuYW1lIFNpZ25hbFxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgQXJyYXkuPFNpZ25hbEJpbmRpbmc+XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcblxuICAgICAgICAvLyBlbmZvcmNlIGRpc3BhdGNoIHRvIGF3YXlzIHdvcmsgb24gc2FtZSBjb250ZXh0ICgjNDcpXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBTaWduYWwucHJvdG90eXBlLmRpc3BhdGNoLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgU2lnbmFsLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFscyBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqL1xuICAgICAgICBWRVJTSU9OIDogJzEuMC4wJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIHNob3VsZCBrZWVwIHJlY29yZCBvZiBwcmV2aW91c2x5IGRpc3BhdGNoZWQgcGFyYW1ldGVycyBhbmRcbiAgICAgICAgICogYXV0b21hdGljYWxseSBleGVjdXRlIGxpc3RlbmVyIGR1cmluZyBgYWRkKClgL2BhZGRPbmNlKClgIGlmIFNpZ25hbCB3YXNcbiAgICAgICAgICogYWxyZWFkeSBkaXNwYXRjaGVkIGJlZm9yZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgbWVtb3JpemUgOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3Nob3VsZFByb3BhZ2F0ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBpcyBhY3RpdmUgYW5kIHNob3VsZCBicm9hZGNhc3QgZXZlbnRzLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gU2V0dGluZyB0aGlzIHByb3BlcnR5IGR1cmluZyBhIGRpc3BhdGNoIHdpbGwgb25seSBhZmZlY3QgdGhlIG5leHQgZGlzcGF0Y2gsIGlmIHlvdSB3YW50IHRvIHN0b3AgdGhlIHByb3BhZ2F0aW9uIG9mIGEgc2lnbmFsIHVzZSBgaGFsdCgpYCBpbnN0ZWFkLjwvcD5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2VcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVnaXN0ZXJMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCksXG4gICAgICAgICAgICAgICAgYmluZGluZztcblxuICAgICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5fYmluZGluZ3NbcHJldkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZy5pc09uY2UoKSAhPT0gaXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQnKyAoaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGVuIGFkZCcrICghaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGUgc2FtZSBsaXN0ZW5lciB3aXRob3V0IHJlbW92aW5nIHRoZSByZWxhdGlvbnNoaXAgZmlyc3QuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gbmV3IFNpZ25hbEJpbmRpbmcodGhpcywgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQmluZGluZyhiaW5kaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5tZW1vcml6ZSAmJiB0aGlzLl9wcmV2UGFyYW1zKXtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmV4ZWN1dGUodGhpcy5fcHJldlBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1NpZ25hbEJpbmRpbmd9IGJpbmRpbmdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9hZGRCaW5kaW5nIDogZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIC8vc2ltcGxpZmllZCBpbnNlcnRpb24gc29ydFxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICBkbyB7IC0tbjsgfSB3aGlsZSAodGhpcy5fYmluZGluZ3Nbbl0gJiYgYmluZGluZy5fcHJpb3JpdHkgPD0gdGhpcy5fYmluZGluZ3Nbbl0uX3ByaW9yaXR5KTtcbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShuICsgMSwgMCwgYmluZGluZyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9pbmRleE9mTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGN1cjtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLl9iaW5kaW5nc1tuXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyLl9saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiYgY3VyLmNvbnRleHQgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBsaXN0ZW5lciB3YXMgYXR0YWNoZWQgdG8gU2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIFNpZ25hbCBoYXMgdGhlIHNwZWNpZmllZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGhhcyA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCkgIT09IC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBsaXN0ZW5lciB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGQgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCBmYWxzZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBsaXN0ZW5lciB0byB0aGUgc2lnbmFsIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgYWZ0ZXIgZmlyc3QgZXhlY3V0aW9uICh3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSkuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZE9uY2UgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGRPbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgdHJ1ZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhIHNpbmdsZSBsaXN0ZW5lciBmcm9tIHRoZSBkaXNwYXRjaCBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIEV4ZWN1dGlvbiBjb250ZXh0IChzaW5jZSB5b3UgY2FuIGFkZCB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzIGlmIGV4ZWN1dGluZyBpbiBhIGRpZmZlcmVudCBjb250ZXh0KS5cbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IExpc3RlbmVyIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmUgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdyZW1vdmUnKTtcblxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3NbaV0uX2Rlc3Ryb3koKTsgLy9ubyByZWFzb24gdG8gYSBTaWduYWxCaW5kaW5nIGV4aXN0IGlmIGl0IGlzbid0IGF0dGFjaGVkIHRvIGEgc2lnbmFsXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVBbGwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tuXS5fZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3MubGVuZ3RoID0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBOdW1iZXIgb2YgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXROdW1MaXN0ZW5lcnMgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIG9mIHRoZSBldmVudCwgYmxvY2tpbmcgdGhlIGRpc3BhdGNoIHRvIG5leHQgbGlzdGVuZXJzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IHNob3VsZCBiZSBjYWxsZWQgb25seSBkdXJpbmcgc2lnbmFsIGRpc3BhdGNoLCBjYWxsaW5nIGl0IGJlZm9yZS9hZnRlciBkaXNwYXRjaCB3b24ndCBhZmZlY3Qgc2lnbmFsIGJyb2FkY2FzdC48L3A+XG4gICAgICAgICAqIEBzZWUgU2lnbmFsLnByb3RvdHlwZS5kaXNhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBoYWx0IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BhdGNoL0Jyb2FkY2FzdCBTaWduYWwgdG8gYWxsIGxpc3RlbmVycyBhZGRlZCB0byB0aGUgcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gUGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoISB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmFtc0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBiaW5kaW5ncztcblxuICAgICAgICAgICAgaWYgKHRoaXMubWVtb3JpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gcGFyYW1zQXJyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISBuKSB7XG4gICAgICAgICAgICAgICAgLy9zaG91bGQgY29tZSBhZnRlciBtZW1vcml6ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmluZGluZ3MgPSB0aGlzLl9iaW5kaW5ncy5zbGljZSgpOyAvL2Nsb25lIGFycmF5IGluIGNhc2UgYWRkL3JlbW92ZSBpdGVtcyBkdXJpbmcgZGlzcGF0Y2hcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IHRydWU7IC8vaW4gY2FzZSBgaGFsdGAgd2FzIGNhbGxlZCBiZWZvcmUgZGlzcGF0Y2ggb3IgZHVyaW5nIHRoZSBwcmV2aW91cyBkaXNwYXRjaC5cblxuICAgICAgICAgICAgLy9leGVjdXRlIGFsbCBjYWxsYmFja3MgdW50aWwgZW5kIG9mIHRoZSBsaXN0IG9yIHVudGlsIGEgY2FsbGJhY2sgcmV0dXJucyBgZmFsc2VgIG9yIHN0b3BzIHByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvL3JldmVyc2UgbG9vcCBzaW5jZSBsaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBhZGRlZCBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgICBkbyB7IG4tLTsgfSB3aGlsZSAoYmluZGluZ3Nbbl0gJiYgdGhpcy5fc2hvdWxkUHJvcGFnYXRlICYmIGJpbmRpbmdzW25dLmV4ZWN1dGUocGFyYW1zQXJyKSAhPT0gZmFsc2UpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JnZXQgbWVtb3JpemVkIGFyZ3VtZW50cy5cbiAgICAgICAgICogQHNlZSBTaWduYWwubWVtb3JpemVcbiAgICAgICAgICovXG4gICAgICAgIGZvcmdldCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBiaW5kaW5ncyBmcm9tIHNpZ25hbCBhbmQgZGVzdHJveSBhbnkgcmVmZXJlbmNlIHRvIGV4dGVybmFsIG9iamVjdHMgKGRlc3Ryb3kgU2lnbmFsIG9iamVjdCkuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBjYWxsaW5nIGFueSBtZXRob2Qgb24gdGhlIHNpZ25hbCBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRpc3Bvc2Ugd2lsbCB0aHJvdyBlcnJvcnMuPC9wPlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcG9zZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYmluZGluZ3M7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJldlBhcmFtcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsIGFjdGl2ZTonKyB0aGlzLmFjdGl2ZSArJyBudW1MaXN0ZW5lcnM6JysgdGhpcy5nZXROdW1MaXN0ZW5lcnMoKSArJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvLyBOYW1lc3BhY2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpZ25hbHMgbmFtZXNwYWNlXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBuYW1lIHNpZ25hbHNcbiAgICAgKi9cbiAgICB2YXIgc2lnbmFscyA9IFNpZ25hbDtcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIEBzZWUgU2lnbmFsXG4gICAgICovXG4gICAgLy8gYWxpYXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzZWUgI2doLTQ0KVxuICAgIHNpZ25hbHMuU2lnbmFsID0gU2lnbmFsO1xuXG5cblxuICAgIC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcbiAgICBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpeyAvL0FNRFxuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2lnbmFsczsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7IC8vbm9kZVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHNpZ25hbHM7XG4gICAgfSBlbHNlIHsgLy9icm93c2VyXG4gICAgICAgIC8vdXNlIHN0cmluZyBiZWNhdXNlIG9mIEdvb2dsZSBjbG9zdXJlIGNvbXBpbGVyIEFEVkFOQ0VEX01PREVcbiAgICAgICAgLypqc2xpbnQgc3ViOnRydWUgKi9cbiAgICAgICAgZ2xvYmFsWydzaWduYWxzJ10gPSBzaWduYWxzO1xuICAgIH1cblxufSh0aGlzKSk7XG4iXX0=
