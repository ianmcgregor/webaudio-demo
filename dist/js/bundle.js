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
        "&nbsp;&nbsp;Amb_1_(450)": "audio/impulse/ambience/480L_Amb_1_(450)_dc.ogg",
        "&nbsp;&nbsp;Amb_2_(451)": "audio/impulse/ambience/480L_Amb_2_(451)_dc.ogg",
        "&nbsp;&nbsp;Amb_3_(452)": "audio/impulse/ambience/480L_Amb_3_(452)_dc.ogg",
        "&nbsp;&nbsp;Amb_6969_(454)": "audio/impulse/ambience/480L_Amb_6969_(454)_dc.ogg",
        "&nbsp;&nbsp;Amb_close_(457)": "audio/impulse/ambience/480L_Amb_close_(457)_dc.ogg",
        "&nbsp;&nbsp;Amb_is_it_(455)": "audio/impulse/ambience/480L_Amb_is_it_(455)_dc.ogg",
        "&nbsp;&nbsp;Amb_let_it_go_(458)": "audio/impulse/ambience/480L_Amb_let_it_go_(458)_dc.ogg",
        "&nbsp;&nbsp;Amb_oh_(453)": "audio/impulse/ambience/480L_Amb_oh_(453)_dc.ogg",
        "&nbsp;&nbsp;Amb_tails_(456)": "audio/impulse/ambience/480L_Amb_tails_(456)_dc.ogg",
        "&nbsp;&nbsp;Ambience_(449)": "audio/impulse/ambience/480L_Ambience_(449)_dc.ogg",
    
    "hall:": "",
        "&nbsp;&nbsp;Auto_Park_(504)": "audio/impulse/hall/480L_Auto_Park_(504)_dc.ogg",
        "&nbsp;&nbsp;Jazz_Hall_(503)": "audio/impulse/hall/480L_Jazz_Hall_(503)_dc.ogg",
        "&nbsp;&nbsp;Large-Stage_(496)": "audio/impulse/hall/480L_Large-Stage_(496)_dc.ogg",
        "&nbsp;&nbsp;Large_Hall_(495)": "audio/impulse/hall/480L_Large_Hall_(495)_dc.ogg",
        "&nbsp;&nbsp;Medium-Stage_(498)": "audio/impulse/hall/480L_Medium-Stage_(498)_dc.ogg",
        "&nbsp;&nbsp;Medium_Hall_(497)": "audio/impulse/hall/480L_Medium_Hall_(497)_dc.ogg",
        "&nbsp;&nbsp;Small-Stage_(500)": "audio/impulse/hall/480L_Small-Stage_(500)_dc.ogg",
        "&nbsp;&nbsp;Small_Church_(502)": "audio/impulse/hall/480L_Small_Church_(502)_dc.ogg",
        "&nbsp;&nbsp;Small_Hall_(499)": "audio/impulse/hall/480L_Small_Hall_(499)_dc.ogg",
    
    "plate:": "",
        "&nbsp;&nbsp;A_Plate_(470)": "audio/impulse/plate/480L_A_Plate_(470)_dc.ogg",
        "&nbsp;&nbsp;Fat_Plate_(474)": "audio/impulse/plate/480L_Fat_Plate_(474)_dc.ogg",
        "&nbsp;&nbsp;Small_Plate_(472)": "audio/impulse/plate/480L_Small_Plate_(472)_dc.ogg",
        "&nbsp;&nbsp;Snare_Plate_(471)": "audio/impulse/plate/480L_Snare_Plate_(471)_dc.ogg",
        "&nbsp;&nbsp;Thin_Plate_(473)": "audio/impulse/plate/480L_Thin_Plate_(473)_dc.ogg",
    
    "random_hall:": "",
        "&nbsp;&nbsp;Big_R_(460)": "audio/impulse/random_hall/480L_Big_R_(460)_dc.ogg",
        "&nbsp;&nbsp;Crazy_ass_(463)": "audio/impulse/random_hall/480L_Crazy_ass_(463)_dc.ogg",
        "&nbsp;&nbsp;Down_You_Say_(468)": "audio/impulse/random_hall/480L_Down_You_Say_(468)_dc.ogg",
        "&nbsp;&nbsp;R_Two_(462)": "audio/impulse/random_hall/480L_R_Two_(462)_dc.ogg",
        "&nbsp;&nbsp;Random_well_(464)": "audio/impulse/random_hall/480L_Random_well_(464)_dc.ogg",
        "&nbsp;&nbsp;Short_Me_again_(465)": "audio/impulse/random_hall/480L_Short_Me_again_(465)_dc.ogg",
        "&nbsp;&nbsp;Well_Hmmm_R_(461)": "audio/impulse/random_hall/480L_Well_Hmmm_R_(461)_dc.ogg",
        "&nbsp;&nbsp;You_Said_(467)": "audio/impulse/random_hall/480L_You_Said_(467)_dc.ogg",
        "&nbsp;&nbsp;testy_testy_(466)": "audio/impulse/random_hall/480L_testy_testy_(466)_dc.ogg",
    
    "room:": "",
        "&nbsp;&nbsp;LG_Wood_Room_(490)": "audio/impulse/room/480L_LG_Wood_Room_(490)_dc.ogg",
        "&nbsp;&nbsp;Large_Chamber_(492)": "audio/impulse/room/480L_Large_Chamber_(492)_dc.ogg",
        "&nbsp;&nbsp;Large_Room_(486)": "audio/impulse/room/480L_Large_Room_(486)_dc.ogg",
        "&nbsp;&nbsp;Medium_Room_(487)": "audio/impulse/room/480L_Medium_Room_(487)_dc.ogg",
        "&nbsp;&nbsp;Music_Club_(485)": "audio/impulse/room/480L_Music_Club_(485)_dc.ogg",
        "&nbsp;&nbsp;SM_Wood_Room_(491)": "audio/impulse/room/480L_SM_Wood_Room_(491)_dc.ogg",
        "&nbsp;&nbsp;Small_-_Bright_(494)": "audio/impulse/room/480L_Small_-_Bright_(494)_dc.ogg",
        "&nbsp;&nbsp;Small_Chamb_(493)": "audio/impulse/room/480L_Small_Chamb_(493)_dc.ogg",
        "&nbsp;&nbsp;Small_Room_(488)": "audio/impulse/room/480L_Small_Room_(488)_dc.ogg",
        "&nbsp;&nbsp;Very_Small_(489)": "audio/impulse/room/480L_Very_Small_(489)_dc.ogg",
    
    "wild_spaces:": "",
        "&nbsp;&nbsp;10W-40_(478)": "audio/impulse/wild_spaces/480L_10W-40_(478)_dc.ogg",
        "&nbsp;&nbsp;20w-50_(479)": "audio/impulse/wild_spaces/480L_20w-50_(479)_dc.ogg",
        "&nbsp;&nbsp;Big_Bottom_(477)": "audio/impulse/wild_spaces/480L_Big_Bottom_(477)_dc.ogg",
        "&nbsp;&nbsp;Brick_Wall_(475)": "audio/impulse/wild_spaces/480L_Brick_Wall_(475)_dc.ogg",
        "&nbsp;&nbsp;Buckram_(476)": "audio/impulse/wild_spaces/480L_Buckram_(476)_dc.ogg",
        "&nbsp;&nbsp;Inside_Out_(482)": "audio/impulse/wild_spaces/480L_Inside_Out_(482)_dc.ogg",
        "&nbsp;&nbsp;Metallica_(480)": "audio/impulse/wild_spaces/480L_Metallica_(480)_dc.ogg",
        "&nbsp;&nbsp;Ricochet_(483)": "audio/impulse/wild_spaces/480L_Ricochet_(483)_dc.ogg",
        "&nbsp;&nbsp;Silica_Beads_(481)": "audio/impulse/wild_spaces/480L_Silica_Beads_(481)_dc.ogg",
        "&nbsp;&nbsp;Varoom_(484)": "audio/impulse/wild_spaces/480L_Varoom_(484)_dc.ogg"
}
},{}],3:[function(require,module,exports){
'use strict';

var audioFiles = require('../config/audio-files.json'),
	impulse = require('../config/impulse-response.json');

var model = {
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
        var h = document.createElement('h3');
        h.innerHTML = title;
        this.el.appendChild(h);
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
	Filter = require('./filter.js');

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

	this.controls = new UIComponents.Panel(this.el);
	this.playButton = new UIComponents.ToggleButton(this.controls.el, 'PLAY', 'PAUSE', this.play, this.pause, this, Keyboard.SPACEBAR);

	this.demoHolder = document.createElement('div');
	this.el.appendChild(this.demoHolder);

	this.analyser();
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

GUI.prototype.clearDemo = function() {
	if(this.demo) {
		this.demo.destroy();
	}
	this.demoHolder.innerHTML = '';
	this.playButton.reset();
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

},{"../utils/keyboard.js":7,"./analyser.js":12,"./components/loading-bar.js":15,"./components/ui-components.js":16,"./filter.js":17,"./multi-track.js":19,"./pan-three-d.js":20,"./reverb.js":21}],19:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],20:[function(require,module,exports){
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

},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],21:[function(require,module,exports){
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
			this.load(value, this.applyImpulse);
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
},{"../model/audio-model.js":3,"./components/abstract-demo.js":13,"./components/ui-components.js":16}],22:[function(require,module,exports){
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

	var files = Model.audioFiles;
	for (var i in files) {
		var file = files[i];
		file.url = file.url + this.audio.getExtension();
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
},{}]},{},[22])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC9jb25maWcvYXVkaW8tZmlsZXMuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvY29uZmlnL2ltcHVsc2UtcmVzcG9uc2UuanNvbiIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvbW9kZWwvYXVkaW8tbW9kZWwuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL2Fzc2V0LWxvYWRlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvYXVkaW8tbWFuYWdlci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvaHRtbC1hdWRpby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMva2V5Ym9hcmQuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3BhZ2UtdmlzaWJpbGl0eS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdXRpbHMvcmFmLXBvbHlmaWxsLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC91dGlscy93ZWItYXVkaW8uanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3V0aWxzL3dlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2FuYWx5c2VyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL2FuYWx5c2VyLWRpc3BsYXkuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvY29tcG9uZW50cy9sb2FkaW5nLWJhci5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvYXBwL3ZpZXcvZmlsdGVyLmpzIiwiL1VzZXJzL2lhbm1jZ3JlZ29yL0Ryb3Bib3gvd29ya3NwYWNlL3dlYmF1ZGlvLWRlbW8vc3JjL2pzL2FwcC92aWV3L2d1aS5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9tdWx0aS10cmFjay5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9wYW4tdGhyZWUtZC5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy9qcy9hcHAvdmlldy9yZXZlcmIuanMiLCIvVXNlcnMvaWFubWNncmVnb3IvRHJvcGJveC93b3Jrc3BhY2Uvd2ViYXVkaW8tZGVtby9zcmMvanMvbWFpbi5qcyIsIi9Vc2Vycy9pYW5tY2dyZWdvci9Ecm9wYm94L3dvcmtzcGFjZS93ZWJhdWRpby1kZW1vL3NyYy92ZW5kb3IvanMtc2lnbmFscy9kaXN0L3NpZ25hbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcIkRydW1zXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9EUlVNU1wiLCBcImxvb3BcIjogdHJ1ZSwgXCJkYXRhXCI6IG51bGwgfSxcbiAgICBcIkJhc3NcIjogeyBcInVybFwiOiBcImF1ZGlvL0RPVUJMRV9CQVNTXCIsIFwibG9vcFwiOiB0cnVlLCBcImRhdGFcIjogbnVsbCB9LFxuICAgIFwiQ29uZ2FzXCI6IHsgXCJ1cmxcIjogXCJhdWRpby9DT05HQVNcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH0sXG4gICAgXCJQaWFub1wiOiB7IFwidXJsXCI6IFwiYXVkaW8vUElBTk9fTUlDXzFcIiwgXCJsb29wXCI6IHRydWUsIFwiZGF0YVwiOiBudWxsIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJHZW5lcmF0ZSBpbXB1bHNlXCI6IFwiZ2VuZXJhdGVcIixcblxuICAgIFwiYW1iaWVuY2U6XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzFfKDQ1MClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzFfKDQ1MClfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzJfKDQ1MSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzJfKDQ1MSlfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzNfKDQ1MilcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzNfKDQ1MilfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iXzY5NjlfKDQ1NClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iXzY5NjlfKDQ1NClfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iX2Nsb3NlXyg0NTcpXCI6IFwiYXVkaW8vaW1wdWxzZS9hbWJpZW5jZS80ODBMX0FtYl9jbG9zZV8oNDU3KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfaXNfaXRfKDQ1NSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2lzX2l0Xyg0NTUpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl9sZXRfaXRfZ29fKDQ1OClcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX2xldF9pdF9nb18oNDU4KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtBbWJfb2hfKDQ1MylcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iX29oXyg0NTMpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FtYl90YWlsc18oNDU2KVwiOiBcImF1ZGlvL2ltcHVsc2UvYW1iaWVuY2UvNDgwTF9BbWJfdGFpbHNfKDQ1NilfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QW1iaWVuY2VfKDQ0OSlcIjogXCJhdWRpby9pbXB1bHNlL2FtYmllbmNlLzQ4MExfQW1iaWVuY2VfKDQ0OSlfZGMub2dnXCIsXG4gICAgXG4gICAgXCJoYWxsOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0F1dG9fUGFya18oNTA0KVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX0F1dG9fUGFya18oNTA0KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtKYXp6X0hhbGxfKDUwMylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9KYXp6X0hhbGxfKDUwMylfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TGFyZ2UtU3RhZ2VfKDQ5NilcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9MYXJnZS1TdGFnZV8oNDk2KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtMYXJnZV9IYWxsXyg0OTUpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfTGFyZ2VfSGFsbF8oNDk1KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtNZWRpdW0tU3RhZ2VfKDQ5OClcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW0tU3RhZ2VfKDQ5OClfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWVkaXVtX0hhbGxfKDQ5NylcIjogXCJhdWRpby9pbXB1bHNlL2hhbGwvNDgwTF9NZWRpdW1fSGFsbF8oNDk3KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbC1TdGFnZV8oNTAwKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsLVN0YWdlXyg1MDApX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX0NodXJjaF8oNTAyKVwiOiBcImF1ZGlvL2ltcHVsc2UvaGFsbC80ODBMX1NtYWxsX0NodXJjaF8oNTAyKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9IYWxsXyg0OTkpXCI6IFwiYXVkaW8vaW1wdWxzZS9oYWxsLzQ4MExfU21hbGxfSGFsbF8oNDk5KV9kYy5vZ2dcIixcbiAgICBcbiAgICBcInBsYXRlOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0FfUGxhdGVfKDQ3MClcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfQV9QbGF0ZV8oNDcwKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtGYXRfUGxhdGVfKDQ3NClcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfRmF0X1BsYXRlXyg0NzQpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsX1BsYXRlXyg0NzIpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1NtYWxsX1BsYXRlXyg0NzIpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NuYXJlX1BsYXRlXyg0NzEpXCI6IFwiYXVkaW8vaW1wdWxzZS9wbGF0ZS80ODBMX1NuYXJlX1BsYXRlXyg0NzEpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1RoaW5fUGxhdGVfKDQ3MylcIjogXCJhdWRpby9pbXB1bHNlL3BsYXRlLzQ4MExfVGhpbl9QbGF0ZV8oNDczKV9kYy5vZ2dcIixcbiAgICBcbiAgICBcInJhbmRvbV9oYWxsOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0JpZ19SXyg0NjApXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0JpZ19SXyg0NjApX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0NyYXp5X2Fzc18oNDYzKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9DcmF6eV9hc3NfKDQ2MylfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7RG93bl9Zb3VfU2F5Xyg0NjgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yYW5kb21faGFsbC80ODBMX0Rvd25fWW91X1NheV8oNDY4KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSX1R3b18oNDYyKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9SX1R3b18oNDYyKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSYW5kb21fd2VsbF8oNDY0KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9SYW5kb21fd2VsbF8oNDY0KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaG9ydF9NZV9hZ2Fpbl8oNDY1KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9TaG9ydF9NZV9hZ2Fpbl8oNDY1KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtXZWxsX0htbW1fUl8oNDYxKVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9XZWxsX0htbW1fUl8oNDYxKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtZb3VfU2FpZF8oNDY3KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF9Zb3VfU2FpZF8oNDY3KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDt0ZXN0eV90ZXN0eV8oNDY2KVwiOiBcImF1ZGlvL2ltcHVsc2UvcmFuZG9tX2hhbGwvNDgwTF90ZXN0eV90ZXN0eV8oNDY2KV9kYy5vZ2dcIixcbiAgICBcbiAgICBcInJvb206XCI6IFwiXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TEdfV29vZF9Sb29tXyg0OTApXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTEdfV29vZF9Sb29tXyg0OTApX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX0NoYW1iZXJfKDQ5MilcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MYXJnZV9DaGFtYmVyXyg0OTIpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0xhcmdlX1Jvb21fKDQ4NilcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9MYXJnZV9Sb29tXyg0ODYpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO01lZGl1bV9Sb29tXyg0ODcpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfTWVkaXVtX1Jvb21fKDQ4NylfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TXVzaWNfQ2x1Yl8oNDg1KVwiOiBcImF1ZGlvL2ltcHVsc2Uvcm9vbS80ODBMX011c2ljX0NsdWJfKDQ4NSlfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U01fV29vZF9Sb29tXyg0OTEpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU01fV29vZF9Sb29tXyg0OTEpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1NtYWxsXy1fQnJpZ2h0Xyg0OTQpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfLV9CcmlnaHRfKDQ5NClfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7U21hbGxfQ2hhbWJfKDQ5MylcIjogXCJhdWRpby9pbXB1bHNlL3Jvb20vNDgwTF9TbWFsbF9DaGFtYl8oNDkzKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTbWFsbF9Sb29tXyg0ODgpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfU21hbGxfUm9vbV8oNDg4KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtWZXJ5X1NtYWxsXyg0ODkpXCI6IFwiYXVkaW8vaW1wdWxzZS9yb29tLzQ4MExfVmVyeV9TbWFsbF8oNDg5KV9kYy5vZ2dcIixcbiAgICBcbiAgICBcIndpbGRfc3BhY2VzOlwiOiBcIlwiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwOzEwVy00MF8oNDc4KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF8xMFctNDBfKDQ3OClfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7MjB3LTUwXyg0NzkpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMXzIwdy01MF8oNDc5KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtCaWdfQm90dG9tXyg0NzcpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0JpZ19Cb3R0b21fKDQ3NylfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7QnJpY2tfV2FsbF8oNDc1KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9Ccmlja19XYWxsXyg0NzUpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO0J1Y2tyYW1fKDQ3NilcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfQnVja3JhbV8oNDc2KV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtJbnNpZGVfT3V0Xyg0ODIpXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX0luc2lkZV9PdXRfKDQ4MilfZGMub2dnXCIsXG4gICAgICAgIFwiJm5ic3A7Jm5ic3A7TWV0YWxsaWNhXyg0ODApXCI6IFwiYXVkaW8vaW1wdWxzZS93aWxkX3NwYWNlcy80ODBMX01ldGFsbGljYV8oNDgwKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtSaWNvY2hldF8oNDgzKVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9SaWNvY2hldF8oNDgzKV9kYy5vZ2dcIixcbiAgICAgICAgXCImbmJzcDsmbmJzcDtTaWxpY2FfQmVhZHNfKDQ4MSlcIjogXCJhdWRpby9pbXB1bHNlL3dpbGRfc3BhY2VzLzQ4MExfU2lsaWNhX0JlYWRzXyg0ODEpX2RjLm9nZ1wiLFxuICAgICAgICBcIiZuYnNwOyZuYnNwO1Zhcm9vbV8oNDg0KVwiOiBcImF1ZGlvL2ltcHVsc2Uvd2lsZF9zcGFjZXMvNDgwTF9WYXJvb21fKDQ4NClfZGMub2dnXCJcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdWRpb0ZpbGVzID0gcmVxdWlyZSgnLi4vY29uZmlnL2F1ZGlvLWZpbGVzLmpzb24nKSxcblx0aW1wdWxzZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9pbXB1bHNlLXJlc3BvbnNlLmpzb24nKTtcblxudmFyIG1vZGVsID0ge1xuXHRhdWRpb0ZpbGVzOiBhdWRpb0ZpbGVzLFxuXHRnZXRGaWxlOiBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gbW9kZWwuYXVkaW9GaWxlc1trZXldO1xuXHR9LFxuXHRpbXB1bHNlOiBpbXB1bHNlLFxuXHRmaWx0ZXIgOiB7XG4gICAgICAgICdsb3dwYXNzJzogMCxcbiAgICAgICAgJ2hpZ2hwYXNzJzogMSxcbiAgICAgICAgJ2JhbmRwYXNzJzogMixcbiAgICAgICAgJ2xvd3NoZWxmJzogMyxcbiAgICAgICAgJ2hpZ2hzaGVsZic6IDQsXG4gICAgICAgICdwZWFraW5nJzogNSxcbiAgICAgICAgJ25vdGNoJzogNixcbiAgICAgICAgJ2FsbHBhc3MnOiA3XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzaWduYWxzID0gcmVxdWlyZSgnc2lnbmFscycpO1xuXG5mdW5jdGlvbiBBc3NldExvYWRlcigpIHtcbiAgICB0aGlzLm9uQ2hpbGRDb21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMubG9hZGVycyA9IHt9O1xuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLndlYkF1ZGlvQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5jcm9zc09yaWdpbiA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hMb2NrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bVRvdGFsID0gMDtcbiAgICB0aGlzLm51bUxvYWRlZCA9IDA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUigpIHtcbiAgICB2YXIgeGhyLCBpLCBwcm9nSWQsXG4gICAgICAgIHByb2dJZHMgPSBbJ01zeG1sMi5YTUxIVFRQJywgJ01pY3Jvc29mdC5YTUxIVFRQJywgJ01zeG1sMi5YTUxIVFRQLjQuMCddO1xuXG4gICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5BY3RpdmVYT2JqZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9nSWQgPSBwcm9nSWRzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB4aHIgPSBuZXcgd2luZG93LkFjdGl2ZVhPYmplY3QocHJvZ0lkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHhocjtcbn1cblxuQXNzZXRMb2FkZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgICAgIHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIuTG9hZGVyKHVybCwgdHlwZSk7XG4gICAgICAgIGxvYWRlci53ZWJBdWRpb0NvbnRleHQgPSB0aGlzLndlYkF1ZGlvQ29udGV4dDtcbiAgICAgICAgbG9hZGVyLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgICAgbG9hZGVyLnRvdWNoTG9ja2VkID0gdGhpcy50b3VjaExvY2tlZDtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGxvYWRlcik7XG4gICAgICAgIHRoaXMubnVtVG90YWwrKztcbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5udW1Ub3RhbCA9IHRoaXMucXVldWUubGVuZ3RoO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmRpc3BhdGNoKHRoaXMubG9hZGVycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvYWRlciA9IHRoaXMucXVldWUucG9wKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbG9hZGVyLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5udW1Mb2FkZWQrKztcbiAgICAgICAgICAgIGlmKHNlbGYub25Qcm9ncmVzcy5nZXROdW1MaXN0ZW5lcnMoKSA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uUHJvZ3Jlc3MuZGlzcGF0Y2goc2VsZi5udW1Mb2FkZWQvc2VsZi5udW1Ub3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmxvYWRlcnNbbG9hZGVyLnVybF0gPSBsb2FkZXI7XG4gICAgICAgICAgICBzZWxmLm9uQ2hpbGRDb21wbGV0ZS5kaXNwYXRjaChsb2FkZXIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkZXIub25FcnJvci5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2gobG9hZGVyKTtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGVyLnN0YXJ0KCk7XG4gICAgfSxcbiAgICBhZGRNdWx0aXBsZTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXJzW3VybF07XG4gICAgfVxufTtcblxuQXNzZXRMb2FkZXIuTG9hZGVyID0gZnVuY3Rpb24odXJsLCB0eXBlKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCB0aGlzLnVybC5zcGxpdCgnPycpWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy4nKS5wb3AoKTtcblxuICAgIHRoaXMub25Qcm9ncmVzcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMub25FcnJvciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgdGhpcy53ZWJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoTG9ja2VkID0gZmFsc2U7XG59O1xuXG5Bc3NldExvYWRlci5Mb2FkZXIucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbXAzJzpcbiAgICAgICAgICAgIGNhc2UgJ29nZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQsIHRoaXMudG91Y2hMb2NrZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdnaWYnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuY3Jvc3NPcmlnaW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnRVJST1I6IFVua25vd24gdHlwZSBmb3IgZmlsZSB3aXRoIFVSTDogJyArIHRoaXMudXJsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkQXVkaW86IGZ1bmN0aW9uKHdlYkF1ZGlvQ29udGV4dCwgdG91Y2hMb2NrZWQpIHtcbiAgICAgICAgaWYod2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRXZWJBdWRpbyh3ZWJBdWRpb0NvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkSFRNTDVBdWRpbyh0b3VjaExvY2tlZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRXZWJBdWRpbzogZnVuY3Rpb24od2ViQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRDb21wbGV0ZSA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xuICAgICAgICAgICAgICAgIHNlbGYub25Qcm9ncmVzcy5kaXNwYXRjaChwZXJjZW50Q29tcGxldGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVbmFibGUgdG8gY29tcHV0ZSBwcm9ncmVzcyBpbmZvcm1hdGlvbiBzaW5jZSB0aGUgdG90YWwgc2l6ZSBpcyB1bmtub3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3ZWJBdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goYnVmZmVyKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH0sXG4gICAgbG9hZEhUTUw1QXVkaW86IGZ1bmN0aW9uKHRvdWNoTG9ja2VkKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7XG4gICAgICAgIHJlcXVlc3QubmFtZSA9IHRoaXMudXJsO1xuICAgICAgICByZXF1ZXN0LnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgaWYgKCEhdG91Y2hMb2NrZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLypyZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXVkaW8gY2FucGxheXRocm91Z2gnKTtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goc2VsZi5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTsqL1xuICAgICAgICAgICAgcmVxdWVzdC5sb2FkKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9hZEltYWdlOiBmdW5jdGlvbihjcm9zc09yaWdpbikge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmRhdGEgPSByZXF1ZXN0O1xuICAgICAgICByZXF1ZXN0Lm5hbWUgPSB0aGlzLnVybDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25Db21wbGV0ZS5kaXNwYXRjaChzZWxmLmRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IuZGlzcGF0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIHJlcXVlc3QuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0LnNyYyA9IHRoaXMudXJsO1xuICAgIH0sXG4gICAgbG9hZEpTT046IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciByZXF1ZXN0ID0gY3JlYXRlWEhSKCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTG9hZGVkKCkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvci5kaXNwYXRjaCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuanNvbiA9IHNlbGYuZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICBzZWxmLm9uQ29tcGxldGUuZGlzcGF0Y2goc2VsZi5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ29ubG9hZCcgaW4gcmVxdWVzdCAmJiAnb25lcnJvcicgaW4gcmVxdWVzdCkge1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBoYW5kbGVMb2FkZWQ7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgIT09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NldExvYWRlcjtcblxuLyppZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFzc2V0TG9hZGVyO1xufSovXG5cbi8qdmFyIHJvb3QgPSB0aGlzO1xuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBBc3NldExvYWRlcjtcbiAgICB9XG4gICAgZXhwb3J0cy5Bc3NldExvYWRlciA9IEFzc2V0TG9hZGVyO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCdQSVhJJywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gcm9vdC5Bc3NldExvYWRlciA9IEFzc2V0TG9hZGVyOyB9KSgpICk7XG59IGVsc2Uge1xuICAgIHJvb3QuUElYSSA9IFBJWEk7XG59Ki8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5yZXF1aXJlKCcuL3dlYmtpdEF1ZGlvQ29udGV4dE1vbmtleVBhdGNoLmpzJyk7XHJcblxyXG52YXIgV2ViQXVkaW8gPSByZXF1aXJlKCcuL3dlYi1hdWRpby5qcycpLFxyXG5cdEhUTUxBdWRpbyA9IHJlcXVpcmUoJy4vaHRtbC1hdWRpby5qcycpLFxyXG5cdFBhZ2VWaXNpYmlsaXR5ID0gcmVxdWlyZSgnLi9wYWdlLXZpc2liaWxpdHkuanMnKTtcclxuXHJcbmZ1bmN0aW9uIEF1ZGlvTWFuYWdlcigpIHtcclxuXHR0aGlzLndlYkF1ZGlvQ29udGV4dCA9IFdlYkF1ZGlvLmNyZWF0ZUNvbnRleHQoKTtcclxuXHR0aGlzLl9zb3VuZHMgPSB7fTtcclxuXHR0aGlzLl9kZWxheVRpbWVvdXRzID0gW107XHJcblx0dGhpcy5fZXh0ID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX2lzU3VwcG9ydGVkID0gdW5kZWZpbmVkO1xyXG5cdHRoaXMuX3RvdWNoTG9ja2VkID0gZmFsc2U7XHJcblx0dGhpcy5fcXVldWVkID0gW107XHJcblxyXG5cdFBhZ2VWaXNpYmlsaXR5Lm9uUGFnZUhpZGRlbi5hZGQoZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBhdXNlQWxsKCk7XHJcblx0fSwgdGhpcyk7XHJcblx0UGFnZVZpc2liaWxpdHkub25QYWdlU2hvd24uYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5yZXN1bWVBbGwoKTtcclxuXHR9LCB0aGlzKTtcclxufVxyXG5cclxuQXVkaW9NYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuXHRhZGQ6IGZ1bmN0aW9uKGtleSwgZGF0YSwgbG9vcCkge1xyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy53ZWJBdWRpb0NvbnRleHQgJiYgIShkYXRhICYmIGRhdGEudGFnTmFtZSkgPyBuZXcgV2ViQXVkaW8odGhpcy53ZWJBdWRpb0NvbnRleHQpIDogbmV3IEhUTUxBdWRpbygpO1xyXG5cdFx0c291bmQubG9vcCA9ICEhKGxvb3ApO1xyXG5cdFx0c291bmQuYWRkKGRhdGEpO1xyXG5cdFx0dGhpcy5fc291bmRzW2tleV0gPSBzb3VuZDtcclxuXHRcdHJldHVybiBzb3VuZDtcclxuXHR9LFxyXG5cdGdldEV4dGVuc2lvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZighdGhpcy5fZXh0KSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcblx0XHRcdHRoaXMuX2V4dCA9IChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpID8gJy5vZ2cnIDogJy5tcDMnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9leHQ7XHJcblx0fSxcclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRpZih0aGlzLl9pc1N1cHBvcnRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdFx0XHR0aGlzLl9pc1N1cHBvcnRlZCA9ICEhKGVsICYmIChlbC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpIHx8IGVsLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpKSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdHRoaXMuX2lzU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcclxuXHR9LFxyXG5cdHdlYkF1ZGlvU3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAhIXRoaXMud2ViQXVkaW9Db250ZXh0O1xyXG5cdH0sXHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcclxuXHR9LFxyXG5cdHBsYXk6IGZ1bmN0aW9uKGtleSwgZGVsYXksIGxvb3ApIHtcclxuXHRcdGlmKHRoaXMuX3RvdWNoTG9ja2VkKSB7XHJcblx0XHRcdHRoaXMucXVldWVVcChrZXksIGRlbGF5LCBsb29wKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHNvdW5kID0gdGhpcy5fc291bmRzW2tleV07XHJcblx0XHRpZighc291bmQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG4gICAgICAgIGlmKGxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzb3VuZC5sb29wID0gbG9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGVsYXkgIT09IHVuZGVmaW5lZCAmJiBkZWxheSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGRlbGF5ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5wdXNoKGRlbGF5ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2ldLnZvbHVtZSA9IDA7XHJcblx0XHR9XHJcblx0fSxcclxuXHR1bk11dGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHR0aGlzLl9zb3VuZHNbaV0udm9sdW1lID0gMTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHBhdXNlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmKCF0aGlzLl9zb3VuZHNba2V5XSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zb3VuZHNba2V5XS5wYXVzZSgpO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZighdGhpcy5fc291bmRzW2tleV0pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdH0sXHJcblx0cGF1c2VBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGxheWluZykge1xyXG5cdFx0XHRcdHRoaXMuX3NvdW5kc1tpXS5wYXVzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZXN1bWVBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX3NvdW5kcykge1xyXG5cdFx0XHRpZih0aGlzLl9zb3VuZHNbaV0ucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy5fc291bmRzW2ldLnBsYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0c3RvcEFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IodmFyIGtleSBpbiB0aGlzLl9zb3VuZHMpIHtcclxuXHRcdFx0dGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9kZWxheVRpbWVvdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0cy5sZW5ndGggPSAwO1xyXG5cdH0sXHJcblx0Z2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RvdWNoTG9ja2VkO1xyXG5cdH0sXHJcblx0c2V0VG91Y2hMb2NrZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl90b3VjaExvY2tlZCA9IHZhbHVlO1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciB1bmxvY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5fdG91Y2hMb2NrZWQgPSBmYWxzZTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl9xdWV1ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRzZWxmLl9xdWV1ZWRbaV0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLl9xdWV1ZWQubGVuZ3RoID0gMDtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5fdG91Y2hMb2NrZWQpIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRxdWV1ZVVwOiBmdW5jdGlvbihrZXksIGRlbGF5LCBsb29wKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgZm4gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5wbGF5KGtleSwgZGVsYXksIGxvb3ApO1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX3F1ZXVlZC5wdXNoKGZuKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvTWFuYWdlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gSFRNTEF1ZGlvKCkge1xyXG5cdHRoaXMuX3NvdW5kID0gbnVsbDtcclxuXHR0aGlzLl9sb29wID0gZmFsc2U7XHJcblx0dGhpcy5fdm9sdW1lID0gMTtcclxuXHR0aGlzLl9wbGF5aW5nID0gZmFsc2U7XHJcblx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbkhUTUxBdWRpby5wcm90b3R5cGUgPSB7XHJcblx0YWRkOiBmdW5jdGlvbihlbCkge1xyXG5cdFx0dGhpcy5fc291bmQgPSBlbDtcclxuXHRcdHJldHVybiB0aGlzLl9zb3VuZDtcclxuXHR9LFxyXG5cdHBsYXk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcy5fc291bmQudm9sdW1lICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5fc291bmQudm9sdW1lID0gdGhpcy5fdm9sdW1lO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc291bmQucGxheSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IHRydWU7XHJcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLl9zb3VuZC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihzZWxmLl9sb29wKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XHJcblx0XHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSxcclxuXHRwYXVzZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5fc291bmQucGF1c2UoKTtcclxuXHRcdHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAnbG9vcCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvb3A7XHJcblx0fSxcclxuXHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl9sb29wID0gdmFsdWU7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQXVkaW8ucHJvdG90eXBlLCAndm9sdW1lJywge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdm9sdW1lO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYoaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3ZvbHVtZSA9IHZhbHVlO1xyXG5cdFx0aWYodGhpcy5fc291bmQgJiYgdGhpcy5fc291bmQudm9sdW1lICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5fc291bmQudm9sdW1lID0gdGhpcy5fdm9sdW1lO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3BsYXlpbmcnLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wbGF5aW5nO1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEF1ZGlvLnByb3RvdHlwZSwgJ3BhdXNlZCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxBdWRpby5wcm90b3R5cGUsICdzb3VuZCcsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kO1xyXG5cdH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhUTUxBdWRpbztcclxuIiwidmFyIEtleWJvYXJkID0ge1xuXHRBOiAnQScuY2hhckNvZGVBdCgwKSxcblx0QjogJ0InLmNoYXJDb2RlQXQoMCksXG5cdEM6ICdDJy5jaGFyQ29kZUF0KDApLFxuXHREOiAnRCcuY2hhckNvZGVBdCgwKSxcblx0RTogJ0UnLmNoYXJDb2RlQXQoMCksXG5cdEY6ICdGJy5jaGFyQ29kZUF0KDApLFxuXHRHOiAnRycuY2hhckNvZGVBdCgwKSxcblx0SDogJ0gnLmNoYXJDb2RlQXQoMCksXG5cdEk6ICdJJy5jaGFyQ29kZUF0KDApLFxuXHRKOiAnSicuY2hhckNvZGVBdCgwKSxcblx0SzogJ0snLmNoYXJDb2RlQXQoMCksXG5cdEw6ICdMJy5jaGFyQ29kZUF0KDApLFxuXHRNOiAnTScuY2hhckNvZGVBdCgwKSxcblx0TjogJ04nLmNoYXJDb2RlQXQoMCksXG5cdE86ICdPJy5jaGFyQ29kZUF0KDApLFxuXHRQOiAnUCcuY2hhckNvZGVBdCgwKSxcblx0UTogJ1EnLmNoYXJDb2RlQXQoMCksXG5cdFI6ICdSJy5jaGFyQ29kZUF0KDApLFxuXHRTOiAnUycuY2hhckNvZGVBdCgwKSxcblx0VDogJ1QnLmNoYXJDb2RlQXQoMCksXG5cdFU6ICdVJy5jaGFyQ29kZUF0KDApLFxuXHRWOiAnVicuY2hhckNvZGVBdCgwKSxcblx0VzogJ1cnLmNoYXJDb2RlQXQoMCksXG5cdFg6ICdYJy5jaGFyQ29kZUF0KDApLFxuXHRZOiAnWScuY2hhckNvZGVBdCgwKSxcblx0WjogJ1onLmNoYXJDb2RlQXQoMCksXG5cdFpFUk86ICcwJy5jaGFyQ29kZUF0KDApLFxuXHRPTkU6ICcxJy5jaGFyQ29kZUF0KDApLFxuXHRUV086ICcyJy5jaGFyQ29kZUF0KDApLFxuXHRUSFJFRTogJzMnLmNoYXJDb2RlQXQoMCksXG5cdEZPVVI6ICc0Jy5jaGFyQ29kZUF0KDApLFxuXHRGSVZFOiAnNScuY2hhckNvZGVBdCgwKSxcblx0U0lYOiAnNicuY2hhckNvZGVBdCgwKSxcblx0U0VWRU46ICc3Jy5jaGFyQ29kZUF0KDApLFxuXHRFSUdIVDogJzgnLmNoYXJDb2RlQXQoMCksXG5cdE5JTkU6ICc5Jy5jaGFyQ29kZUF0KDApLFxuXHROVU1QQURfMDogOTYsXG5cdE5VTVBBRF8xOiA5Nyxcblx0TlVNUEFEXzI6IDk4LFxuXHROVU1QQURfMzogOTksXG5cdE5VTVBBRF80OiAxMDAsXG5cdE5VTVBBRF81OiAxMDEsXG5cdE5VTVBBRF82OiAxMDIsXG5cdE5VTVBBRF83OiAxMDMsXG5cdE5VTVBBRF84OiAxMDQsXG5cdE5VTVBBRF85OiAxMDUsXG5cdE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuXHROVU1QQURfQUREOiAxMDcsXG5cdE5VTVBBRF9FTlRFUjogMTA4LFxuXHROVU1QQURfU1VCVFJBQ1Q6IDEwOSxcblx0TlVNUEFEX0RFQ0lNQUw6IDExMCxcblx0TlVNUEFEX0RJVklERTogMTExLFxuXHRGMTogMTEyLFxuXHRGMjogMTEzLFxuXHRGMzogMTE0LFxuXHRGNDogMTE1LFxuXHRGNTogMTE2LFxuXHRGNjogMTE3LFxuXHRGNzogMTE4LFxuXHRGODogMTE5LFxuXHRGOTogMTIwLFxuXHRGMTA6IDEyMSxcblx0RjExOiAxMjIsXG5cdEYxMjogMTIzLFxuXHRGMTM6IDEyNCxcblx0RjE0OiAxMjUsXG5cdEYxNTogMTI2LFxuXHRDT0xPTjogMTg2LFxuXHRFUVVBTFM6IDE4Nyxcblx0VU5ERVJTQ09SRTogMTg5LFxuXHRRVUVTVElPTl9NQVJLOiAxOTEsXG5cdFRJTERFOiAxOTIsXG5cdE9QRU5fQlJBQ0tFVDogMjE5LFxuXHRCQUNLV0FSRF9TTEFTSDogMjIwLFxuXHRDTE9TRURfQlJBQ0tFVDogMjIxLFxuXHRRVU9URVM6IDIyMixcblx0QkFDS1NQQUNFOiA4LFxuXHRUQUI6IDksXG5cdENMRUFSOiAxMixcblx0RU5URVI6IDEzLFxuXHRTSElGVDogMTYsXG5cdENPTlRST0w6IDE3LFxuXHRBTFQ6IDE4LFxuXHRDQVBTX0xPQ0s6IDIwLFxuXHRFU0M6IDI3LFxuXHRTUEFDRUJBUjogMzIsXG5cdFBBR0VfVVA6IDMzLFxuXHRQQUdFX0RPV046IDM0LFxuXHRFTkQ6IDM1LFxuXHRIT01FOiAzNixcblx0TEVGVDogMzcsXG5cdFVQOiAzOCxcblx0UklHSFQ6IDM5LFxuXHRET1dOOiA0MCxcblx0SU5TRVJUOiA0NSxcblx0REVMRVRFOiA0Nixcblx0SEVMUDogNDcsXG5cdE5VTV9MT0NLOiAxNDRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5Ym9hcmQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2lnbmFscyA9IHJlcXVpcmUoJ3NpZ25hbHMnKTtcblxudmFyIG9uUGFnZUhpZGRlbiA9IG5ldyBzaWduYWxzLlNpZ25hbCgpLFxuICAgIG9uUGFnZVNob3duID0gbmV3IHNpZ25hbHMuU2lnbmFsKCksXG4gICAgaGlkZGVuLCB2aXNpYmlsaXR5Q2hhbmdlO1xuXG5mdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKGRvY3VtZW50W2hpZGRlbl0pIHtcbiAgICAgICAgb25QYWdlSGlkZGVuLmRpc3BhdGNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb25QYWdlU2hvd24uZGlzcGF0Y2goKTtcbiAgICB9XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQuaGlkZGVuICE9PSAndW5kZWZpbmVkJykgeyAvLyBPcGVyYSAxMi4xMCBhbmQgRmlyZWZveCAxOCBhbmQgbGF0ZXIgc3VwcG9ydCBcbiAgICBoaWRkZW4gPSAnaGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnbXNIaWRkZW4nO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xufVxuXG5pZih2aXNpYmlsaXR5Q2hhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvblBhZ2VTaG93bjogb25QYWdlU2hvd24sXG4gICAgb25QYWdlSGlkZGVuOiBvblBhZ2VIaWRkZW5cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICAgIH1cbn0oKSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBXZWJBdWRpbyhjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCBXZWJBdWRpby5jcmVhdGVDb250ZXh0KCk7XG4gICAgdGhpcy5fc291bmQgPSBbXTtcbiAgICB0aGlzLl9ub2RlID0gW107XG4gICAgdGhpcy5fZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5fZ2Fpbi5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fc3RhcnRlZEF0ID0gMDtcbiAgICB0aGlzLl9wYXVzZWRBdCA9IDA7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub2RlRmFjdG9yeSA9IG5ldyBXZWJBdWRpby5Ob2RlRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBuZXcgV2ViQXVkaW8uRWZmZWN0cyh0aGlzLmNvbnRleHQpO1xufVxuXG5XZWJBdWRpby5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgaWYoIWJ1ZmZlcikgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5fc291bmQucHVzaChuZXcgV2ViQXVkaW8uU291bmQoYnVmZmVyLCB0aGlzLmNvbnRleHQpKTtcbiAgICAgICAgdGhpcy5fc291bmRbdGhpcy5fc291bmQubGVuZ3RoLTFdLmxvb3AgPSB0aGlzLl9sb29wO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRbdGhpcy5fc291bmQubGVuZ3RoLTFdO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtYXhEdXJhdGlvbiA9IC0xLFxuICAgICAgICAgICAgbG9uZ2VzdFNvdW5kO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5jb25uZWN0KHRoaXMuX2dhaW4pO1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0ucGxheSgwLCB0aGlzLl9wYXVzZWRBdCAvIDEwMDApO1xuICAgICAgICAgICAgaWYodGhpcy5fc291bmRbaV0uZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIG1heER1cmF0aW9uID0gdGhpcy5fc291bmRbaV0uZHVyYXRpb247XG4gICAgICAgICAgICAgICAgbG9uZ2VzdFNvdW5kID0gdGhpcy5fc291bmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsb25nZXN0U291bmQuc291cmNlLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc3RhcnRlZEF0ID0gRGF0ZS5ub3coKSAtIHRoaXMuX3BhdXNlZEF0O1xuICAgICAgICB0aGlzLl9wbGF5aW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3BhdXNlZEF0ID0gRGF0ZS5ub3coKSAtIHRoaXMuX3N0YXJ0ZWRBdDtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFtpXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGF1c2VkQXQgPSAwO1xuICAgICAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLnByb3RvdHlwZSwgJ2xvb3AnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291bmRbaV0ubG9vcCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICd2b2x1bWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2Fpbi5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdwbGF5aW5nJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5aW5nO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8ucHJvdG90eXBlLCAncGF1c2VkJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRBdCA+IDA7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdzb3VuZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmQ7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdub2RlRmFjdG9yeScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZUZhY3Rvcnk7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJBdWRpby5wcm90b3R5cGUsICdlZmZlY3RzJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RzO1xuICAgIH1cbn0pO1xuXG4vKlxuICogQ29udGV4dFxuICovXG5cbldlYkF1ZGlvLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBpZih3aW5kb3cuQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn07XG5cbi8qXG4gKiBTb3VuZFxuICovXG5cbldlYkF1ZGlvLlNvdW5kID0gZnVuY3Rpb24oYnVmZmVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5fbm9kZSA9IFtdO1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSAnJztcbn07XG5cbldlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSA9IHtcbiAgICBwbGF5OiBmdW5jdGlvbihkZWxheSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgZGVsYXkgPSB0aGlzLl9jb250ZXh0LmN1cnJlbnRUaW1lICsgZGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2UubG9vcCA9IHRoaXMuX2xvb3A7XG4gICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KGRlbGF5LCBvZmZzZXQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fc291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb25uZWN0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIGlmKHRoaXMuX25vZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbm9kZVt0aGlzLl9ub2RlLmxlbmd0aCAtIDFdLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBub2RlO1xuICAgIH0sXG4gICAgYWRkTm9kZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB0aGlzLl9ub2RlLnB1c2gobm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29ubmVjdGlvbnMoKTtcbiAgICB9LFxuICAgIHVwZGF0ZUNvbm5lY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5jb25uZWN0KHRoaXMuX25vZGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZVtpLTFdLmNvbm5lY3QodGhpcy5fbm9kZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KHRoaXMuZGVzdGluYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkF1ZGlvLlNvdW5kLnByb3RvdHlwZSwgJ3NvdXJjZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2UgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgdGhpcy5fc291cmNlLmJ1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnbG9vcCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9vcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViQXVkaW8uU291bmQucHJvdG90eXBlLCAnZHVyYXRpb24nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlciA/IHRoaXMuX2J1ZmZlci5kdXJhdGlvbiA6IDA7XG4gICAgfVxufSk7XG5cbi8qXG4gKiBOb2Rlc1xuICovXG5cbldlYkF1ZGlvLk5vZGVGYWN0b3J5ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyKHR5cGUsIGZyZXF1ZW5jeSkge1xuICAgICAgICB2YXIgZmlsdGVyTm9kZSA9IGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG4gICAgICAgIGZpbHRlck5vZGUudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmKGZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXF1ZW5jeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyTm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYWluOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBwYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb250ZXh0LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgICAgICAgbm9kZS5wYW5uaW5nTW9kZWwgPSAnSFJURic7XG4gICAgICAgICAgICAvL25vZGUucGFubmluZ01vZGVsID0gJ2VxdWFscG93ZXInO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHgsIDApO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHksIDApO1xuICAgICAgICAgICAgLy9zZXRPcHRpb25hbFBhcmFtKHosIDApO1xuICAgICAgICAgICAgLy9ub2RlLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgLypcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBmb3Igc3RlcmVvIGlzIEhSVEYgXG5cblxuICAgICAgICAgICAgLy8gVXNlcyBhIDNEIGNhcnRlc2lhbiBjb29yZGluYXRlIHN5c3RlbSBcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob2JqZWN0LnBvc2l0aW9uLngvMjkwLCBvYmplY3QucG9zaXRpb24ueS8yOTAsIG9iamVjdC5wb3NpdGlvbi56LzI5MCk7XG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICAgICAgLy8gbm9kZS5zZXRPcmllbnRhdGlvbigxLCAwLCAwKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0VmVsb2NpdHkoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIC8vIERpc3RhbmNlIG1vZGVsIGFuZCBhdHRyaWJ1dGVzIFxuICAgICAgICAgICAgbm9kZS5kaXN0YW5jZU1vZGVsID0gJ2ludmVyc2UnOyAvLyAnbGluZWFyJyAnaW52ZXJzZScgJ2V4cG9uZW50aWFsJyBcbiAgICAgICAgICAgIG5vZGUucmVmRGlzdGFuY2UgPSAxO1xuICAgICAgICAgICAgbm9kZS5tYXhEaXN0YW5jZSA9IDEwMDAwO1xuICAgICAgICAgICAgbm9kZS5yb2xsb2ZmRmFjdG9yID0gMTtcblxuICAgICAgICAgICAgLy8gRGlyZWN0aW9uYWwgc291bmQgY29uZSAtIFRoZSBjb25lIGFuZ2xlcyBhcmUgaW4gZGVncmVlcyBhbmQgcnVuIGZyb20gMCB0byAzNjBcbiAgICAgICAgICAgIC8vIG5vZGUuY29uZUlubmVyQW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAvLyBub2RlLmNvbmVPdXRlckFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgLy8gbm9kZS5jb25lT3V0ZXJHYWluID0gMDtcblxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIG5vcm1hbGlzZWQgdmVjXG4gICAgICAgICAgICAvLyBub2RlLnNldE9yaWVudGF0aW9uKHZlYy54LCB2ZWMueSwgdmVjLnopO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgbG93cGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignbG93cGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlnaHBhc3M6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ2hpZ2hwYXNzJywgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYW5kcGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignYmFuZHBhc3MnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvd3NoZWxmOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdsb3dzaGVsZicsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlnaHNoZWxmOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdoaWdoc2hlbGYnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlYWtpbmc6IGZ1bmN0aW9uKGZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVGaWx0ZXIoJ3BlYWtpbmcnLCBmcmVxdWVuY3kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGNoOiBmdW5jdGlvbihmcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRmlsdGVyKCdub3RjaCcsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxscGFzczogZnVuY3Rpb24oZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZpbHRlcignYWxscGFzcycsIGZyZXF1ZW5jeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlRGVsYXkoKTtcbiAgICAgICAgICAgIGlmKHRpbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZGVsYXlUaW1lID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBjb252b2x2ZXI6IGZ1bmN0aW9uKGltcHVsc2VSZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gaW1wdWxzZVJlc3BvbnNlIGlzIGFuIGF1ZGlvIGZpbGUgYnVmZmVyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNvbnRleHQuY3JlYXRlQ29udm9sdmVyKCk7XG4gICAgICAgICAgICBub2RlLmJ1ZmZlciA9IGltcHVsc2VSZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuICAgICAgICByZXZlcmI6IGZ1bmN0aW9uKHNlY29uZHMsIGRlY2F5LCByZXZlcnNlKSB7XG4gICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZvbHZlcih0aGlzLmNyZWF0ZUltcHVsc2VSZXNwb25zZShzZWNvbmRzLCBkZWNheSwgcmV2ZXJzZSkpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVJbXB1bHNlUmVzcG9uc2U6IGZ1bmN0aW9uKHNlY29uZHMsIGRlY2F5LCByZXZlcnNlKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBhIHJldmVyYiBlZmZlY3RcbiAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzIHx8IDE7XG4gICAgICAgICAgICBkZWNheSA9IGRlY2F5IHx8IDA7XG4gICAgICAgICAgICByZXZlcnNlID0gISFyZXZlcnNlO1xuXG4gICAgICAgICAgICB2YXIgbnVtQ2hhbm5lbHMgPSAyLFxuICAgICAgICAgICAgICAgIHJhdGUgPSBjb250ZXh0LnNhbXBsZVJhdGUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmF0ZSAqIHNlY29uZHMsXG4gICAgICAgICAgICAgICAgaW1wdWxzZVJlc3BvbnNlID0gY29udGV4dC5jcmVhdGVCdWZmZXIobnVtQ2hhbm5lbHMsIGxlbmd0aCwgcmF0ZSksXG4gICAgICAgICAgICAgICAgbGVmdCA9IGltcHVsc2VSZXNwb25zZS5nZXRDaGFubmVsRGF0YSgwKSxcbiAgICAgICAgICAgICAgICByaWdodCA9IGltcHVsc2VSZXNwb25zZS5nZXRDaGFubmVsRGF0YSgxKSxcbiAgICAgICAgICAgICAgICBuO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbiA9IHJldmVyc2UgPyBsZW5ndGggLSAxIDogaTtcbiAgICAgICAgICAgICAgICBsZWZ0W2ldID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBNYXRoLnBvdygxIC0gbiAvIGxlbmd0aCwgZGVjYXkpO1xuICAgICAgICAgICAgICAgIHJpZ2h0W2ldID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiBNYXRoLnBvdygxIC0gbiAvIGxlbmd0aCwgZGVjYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW1wdWxzZVJlc3BvbnNlO1xuICAgICAgICB9LFxuICAgICAgICBhbmFseXNlcjogZnVuY3Rpb24oZmZ0U2l6ZSkge1xuICAgICAgICAgICAgZmZ0U2l6ZSA9IGZmdFNpemUgfHwgMTAyNDtcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICAgICAgbm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjg1O1xuICAgICAgICAgICAgLy8gZmZ0U2l6ZTogMzIgLSAyMDQ4IChwb3cgMilcbiAgICAgICAgICAgIG5vZGUuZmZ0U2l6ZSA9IGZmdFNpemU7XG4gICAgICAgICAgICAvL25vZGUuZnJlcXVlbmN5QmluQ291bnQgPSBub2RlLmZmdFNpemUgLyAyO1xuICAgICAgICAgICAgLy9ub2RlLm1pbkRlY2liZWxzID0gLTEwMDtcbiAgICAgICAgICAgIC8vbm9kZS5tYXhEZWNpYmVscyA9IC0zMDtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qXG4gKiBFZmZlY3RzXG4gKi9cblxuV2ViQXVkaW8uRWZmZWN0cyA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblxuICAgIGZ1bmN0aW9uIHJhbXAocGFyYW0sIHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICBwYXJhbS5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh2YWx1ZSwgY29udGV4dC5jdXJyZW50VGltZSArIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYW5YWVoobm9kZSwgeCwgeSwgeikge1xuICAgICAgICB4ID0gcGFyc2VGbG9hdCh4LCAxMCk7XG4gICAgICAgIHkgPSBwYXJzZUZsb2F0KHksIDEwKTtcbiAgICAgICAgeiA9IHBhcnNlRmxvYXQoeiwgMTApO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhblgobm9kZSwgeCkge1xuICAgICAgICB4ID0gcGFyc2VGbG9hdCh4LCAxMCk7XG4gICAgICAgIC8vIHggZnJvbSAtTWF0aC5QSS80IHRvIE1hdGguUEkvNCAoLTQ1IHRvIDQ1IGRlZylcbiAgICAgICAgdmFyIHogPSB4ICsgTWF0aC5QSSAvIDI7XG4gICAgICAgIGlmICh6ID4gTWF0aC5QSSAvIDIpIHtcbiAgICAgICAgICAgIHogPSBNYXRoLlBJIC0gejtcbiAgICAgICAgfVxuICAgICAgICB4ID0gTWF0aC5zaW4oeCk7XG4gICAgICAgIHogPSBNYXRoLnNpbih6KTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih4LCAwLCB6KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDYW1lcmFQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICAgIC8vIHNldCB0aGUgYXVkaW8gY29udGV4dCdzIGxpc3RlbmVyIHBvc2l0aW9uIHRvIG1hdGNoIHRoZSBjYW1lcmEgcG9zaXRpb25cbiAgICAgICAgY29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbih4LCB5LCB6KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb3BwbGVyKHBhbm5lck5vZGUsIHgsIHksIHosIGRlbHRhWCwgZGVsdGFZLCBkZWx0YVosIGRlbHRhVGltZSkge1xuICAgICAgICAvLyBUcmFja2luZyB0aGUgdmVsb2NpdHkgY2FuIGJlIGRvbmUgYnkgZ2V0dGluZyB0aGUgb2JqZWN0J3MgcHJldmlvdXMgcG9zaXRpb24sIHN1YnRyYWN0aW5nIFxuICAgICAgICAvLyBpdCBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uIGFuZCBkaXZpZGluZyB0aGUgcmVzdWx0IGJ5IHRoZSB0aW1lIGVsYXBzZWQgc2luY2UgbGFzdCBmcmFtZVxuICAgICAgICBwYW5uZXJOb2RlLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICBwYW5uZXJOb2RlLnNldFZlbG9jaXR5KGRlbHRhWC9kZWx0YVRpbWUsIGRlbHRhWS9kZWx0YVRpbWUsIGRlbHRhWi9kZWx0YVRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlcihmaWx0ZXJOb2RlLCB2YWx1ZSwgcXVhbGl0eSwgZ2Fpbikge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbiAgICAgICAgcXVhbGl0eSA9IHBhcnNlRmxvYXQocXVhbGl0eSwgMTApO1xuICAgICAgICBnYWluID0gcGFyc2VGbG9hdChnYWluLCAxMCk7XG4gICAgICAgIC8vIENsYW1wIHRoZSBmcmVxdWVuY3kgYmV0d2VlbiB0aGUgbWluaW11bSB2YWx1ZSAoNDAgSHopIGFuZCBoYWxmIG9mIHRoZVxuICAgICAgICAvLyBzYW1wbGluZyByYXRlLlxuICAgICAgICB2YXIgbWluVmFsdWUgPSA0MDtcbiAgICAgICAgdmFyIG1heFZhbHVlID0gY29udGV4dC5zYW1wbGVSYXRlIC8gMjtcbiAgICAgICAgLy8gTG9nYXJpdGhtIChiYXNlIDIpIHRvIGNvbXB1dGUgaG93IG1hbnkgb2N0YXZlcyBmYWxsIGluIHRoZSByYW5nZS5cbiAgICAgICAgdmFyIG51bWJlck9mT2N0YXZlcyA9IE1hdGgubG9nKG1heFZhbHVlIC8gbWluVmFsdWUpIC8gTWF0aC5MTjI7XG4gICAgICAgIC8vIENvbXB1dGUgYSBtdWx0aXBsaWVyIGZyb20gMCB0byAxIGJhc2VkIG9uIGFuIGV4cG9uZW50aWFsIHNjYWxlLlxuICAgICAgICB2YXIgbXVsdGlwbGllciA9IE1hdGgucG93KDIsIG51bWJlck9mT2N0YXZlcyAqICh2YWx1ZSAtIDEuMCkpO1xuICAgICAgICAvLyBHZXQgYmFjayB0byB0aGUgZnJlcXVlbmN5IHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXguXG4gICAgICAgIGZpbHRlck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gbWF4VmFsdWUgKiBtdWx0aXBsaWVyO1xuXG4gICAgICAgIC8vZmlsdGVyTm9kZS5RLnZhbHVlID0gcXVhbGl0eTtcbiAgICAgICAgLy9maWx0ZXJOb2RlLmdhaW4udmFsdWUgPSBnYWluO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZhZGU6IGZ1bmN0aW9uKGdhaW5Ob2RlLCB2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJhbXAoZ2Fpbk5vZGUuZ2FpbiwgdmFsdWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFuWDogZnVuY3Rpb24ocGFubmVyTm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHBhblgocGFubmVyTm9kZSwgdmFsdWUgKiBNYXRoLlBJIC8gNCk7XG4gICAgICAgIH0sXG4gICAgICAgICdzZXRDYW1lcmFQb3NpdGlvbic6IHNldENhbWVyYVBvc2l0aW9uLFxuICAgICAgICAncGFuJzogcGFuWFlaLFxuICAgICAgICAnZG9wcGxlcic6IGRvcHBsZXIsXG4gICAgICAgICdmaWx0ZXInOiBmaWx0ZXJcbiAgICB9O1xufTtcblxuLypcblxuVGhyZWVKUyBwb3NpdGlvbmFsXG5cbnNldFBvc2l0aW9uQW5kVmVsb2NpdHkgOiBmdW5jdGlvbihvYmplY3QsIGF1ZGlvTm9kZSwgeCwgeSwgeiwgZHQpIHtcbiAgICB2YXIgcCA9IG9iamVjdC5tYXRyaXhXb3JsZC5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBweCA9IHAueCwgcHkgPSBwLnksIHB6ID0gcC56O1xuICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoeCx5LHopO1xuICAgIG9iamVjdC51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgIHZhciBxID0gb2JqZWN0Lm1hdHJpeFdvcmxkLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIGR4ID0gcS54LXB4LCBkeSA9IHEueS1weSwgZHogPSBxLnotcHo7XG4gICAgaWYgKHRoaXMucG9zaXRpb25FbmFibGVkKSB7XG4gICAgICBhdWRpb05vZGUuc2V0UG9zaXRpb24ocS54LCBxLnksIHEueik7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbG9jaXR5RW5hYmxlZCkge1xuICAgICAgYXVkaW9Ob2RlLnNldFZlbG9jaXR5KGR4L2R0LCBkeS9kdCwgZHovZHQpO1xuICAgIH1cbiAgfSxcblxuICBzZXRQb3NpdGlvbiA6IGZ1bmN0aW9uKG9iamVjdCwgeCwgeSwgeiwgZHQpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQW5kVmVsb2NpdHkob2JqZWN0LCBvYmplY3Quc291bmQucGFubmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDEpO1xuICAgICAgdmFyIG0gPSBvYmplY3QubWF0cml4V29ybGQ7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuICAgICAgb2JqZWN0LnNvdW5kLnBhbm5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56KTtcbiAgICAgIG0ubjE0ID0gbXg7XG4gICAgICBtLm4yNCA9IG15OyBcbiAgICAgIG0ubjM0ID0gbXo7XG4gICAgfVxuICB9LFxuXG4gIHNldExpc3RlbmVyUG9zaXRpb24gOiBmdW5jdGlvbihvYmplY3QsIHgsIHksIHosIGR0KSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkFuZFZlbG9jaXR5KG9iamVjdCwgdGhpcy5hdWRpby5jb250ZXh0Lmxpc3RlbmVyLCB4LCB5LCB6LCBkdCk7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25FbmFibGVkKSB7XG4gICAgICB2YXIgbSA9IG9iamVjdC5tYXRyaXg7XG4gICAgICB2YXIgbXggPSBtLm4xNCwgbXkgPSBtLm4yNCwgbXogPSBtLm4zNDtcbiAgICAgIG0ubjE0ID0gbS5uMjQgPSBtLm4zNCA9IDA7XG5cbiAgICAgIHZhciB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMSk7XG4gICAgICBtLm11bHRpcGx5VmVjdG9yMyh2ZWMpO1xuICAgICAgdmVjLm5vcm1hbGl6ZSgpO1xuXG4gICAgICB2YXIgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygwLC0xLDApO1xuICAgICAgbS5tdWx0aXBseVZlY3RvcjModXApO1xuICAgICAgdXAubm9ybWFsaXplKCk7XG5cbiAgICAgIHRoaXMuYXVkaW8uY29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih2ZWMueCwgdmVjLnksIHZlYy56LCB1cC54LCB1cC55LCB1cC56KTtcblxuICAgICAgbS5uMTQgPSBteDtcbiAgICAgIG0ubjI0ID0gbXk7IFxuICAgICAgbS5uMzQgPSBtejtcbiAgICB9XG4gIH0sXG5cblxuICAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYkF1ZGlvO1xuIiwiLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuLyogQ29weXJpZ2h0IDIwMTMgQ2hyaXMgV2lsc29uXG5cbiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyogXG5cblRoaXMgbW9ua2V5cGF0Y2ggbGlicmFyeSBpcyBpbnRlbmRlZCB0byBiZSBpbmNsdWRlZCBpbiBwcm9qZWN0cyB0aGF0IHVzZSBcbndlYmtpdEF1ZGlvQ29udGV4dCAoaW5zdGVhZCBvZiBBdWRpb0NvbnRleHQpLCBhbmQgdGhhdCBtYXkgdXNlIHRoZSBub3ctXG5kZXByZWNhdGVkIGJpdHMgb2YgdGhlIFdlYiBBdWRpbyBBUEkgKGUuZy4gdXNpbmcgQnVmZmVyU291cmNlTm9kZS5ub3RlT24oKVxuaW5zdGVhZCBvZiBCdWZmZXJTb3VyY2VOb2RlLnN0YXJ0KCkuXG5cblRoaXMgbGlicmFyeSBzaG91bGQgYmUgaGFybWxlc3MgdG8gaW5jbHVkZSBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBoYXZlXG50aGUgdW5wcmVmaXhlZCBcIkF1ZGlvQ29udGV4dFwiIGltcGxlbWVudGVkLiAgSWYgdW5wcmVmaXhlZCBBdWRpb0NvbnRleHQgaXNcbnN1cHBvcnRlZCwgYnV0IHRoZSBkZXByZWNhdGVkIG1ldGhvZCBuYW1lcyBhcmUgYWxyZWFkeSBpbXBsZW1lbnRlZCwgdGhpc1xubGlicmFyeSB3aWxsIGhhdmUgY3JlYXRlZCBhIGZldyBzaGltIGZ1bmN0aW9ucyBvbiBjcmVhdGUqIG1ldGhvZHMsIGJ1dCBcbndpbGwgbm90IGRhbWFnZSBvciBvdmVycmlkZSBhbnl0aGluZyBlbHNlLlxuXG5JZGVhbGx5LCB0aGUgdXNlIG9mIHRoaXMgbGlicmFyeSB3aWxsIGdvIHRvIHplcm8gLSBpdCBpcyBvbmx5IGludGVuZGVkIGFzXG5hIHdheSB0byBxdWlja2x5IGdldCBzY3JpcHQgd3JpdHRlbiB0byB0aGUgb2xkIFdlYiBBdWRpbyBtZXRob2RzIHRvIHdvcmtcbmluIGJyb3dzZXJzIHRoYXQgb25seSBzdXBwb3J0IHRoZSBuZXcsIGFwcHJvdmVkIG1ldGhvZHMuXG5cblRoZSBwYXRjaGVzIHRoaXMgbGlicmFyeSBoYW5kbGVzOlxuXG5BdWRpb0J1ZmZlclNvdXJjZU5vZGUubm90ZU9uKCkgaXMgYWxpYXNlZCB0byBzdGFydCgpXG5BdWRpb0J1ZmZlclNvdXJjZU5vZGUubm90ZUdyYWluT24oKSBpcyBhbGlhc2VkIHRvIHN0YXJ0KClcbkF1ZGlvQnVmZmVyU291cmNlTm9kZS5ub3RlT2ZmKCkgaXMgYWxpYXNlZCB0byBzdG9wKClcbkF1ZGlvQ29udGV4dC5jcmVhdGVHYWluTm9kZSgpIGlzIGFsaWFzZWQgdG8gY3JlYXRlR2FpbigpXG5BdWRpb0NvbnRleHQuY3JlYXRlRGVsYXlOb2RlKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVEZWxheSgpXG5BdWRpb0NvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGUoKSBpcyBhbGlhc2VkIHRvIGNyZWF0ZVNjcmlwdFByb2Nlc3NvcigpXG5Pc2NpbGxhdG9yTm9kZS5ub3RlT24oKSBpcyBhbGlhc2VkIHRvIHN0YXJ0KClcbk9zY2lsbGF0b3JOb2RlLm5vdGVPZmYoKSBpcyBhbGlhc2VkIHRvIHN0b3AoKVxuQXVkaW9QYXJhbS5zZXRUYXJnZXRWYWx1ZUF0VGltZSgpIGlzIGFsaWFzZWQgdG8gc2V0VGFyZ2V0QXRUaW1lKClcbk9zY2lsbGF0b3JOb2RlJ3Mgb2xkIGVudW0gdmFsdWVzIGFyZSBhbGlhc2VkIHRvIHRoZSBXZWIgSURMIGVudW0gdmFsdWVzLlxuQmlxdWFkRmlsdGVyTm9kZSdzIG9sZCBlbnVtIHZhbHVlcyBhcmUgYWxpYXNlZCB0byB0aGUgV2ViIElETCBlbnVtIHZhbHVlcy5cblBhbm5lck5vZGUncyBvbGQgZW51bSB2YWx1ZXMgYXJlIGFsaWFzZWQgdG8gdGhlIFdlYiBJREwgZW51bSB2YWx1ZXMuXG5BdWRpb0NvbnRleHQuY3JlYXRlV2F2ZVRhYmxlKCkgaXMgYWxpYXNlZCB0byBjcmVhdGVQZXJpb2RpY1dhdmUoKS5cbk9zY2lsbGF0b3JOb2RlLnNldFdhdmVUYWJsZSgpIGlzIGFsaWFzZWQgdG8gc2V0UGVyaW9kaWNXYXZlKCkuXG5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZXhwb3J0cywgcGVyZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gZml4U2V0VGFyZ2V0KHBhcmFtKSB7XG4gICAgaWYgKCFwYXJhbSkgICAgLy8gaWYgTllJLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuO1xuICAgIGlmICghcGFyYW0uc2V0VGFyZ2V0VmFsdWVBdFRpbWUpXG4gICAgICBwYXJhbS5zZXRUYXJnZXRWYWx1ZUF0VGltZSA9IHBhcmFtLnNldFRhcmdldEF0VGltZTsgXG4gIH1cblxuICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdBdWRpb0NvbnRleHQnKSAmJiAhd2luZG93Lmhhc093blByb3BlcnR5KCd3ZWJraXRBdWRpb0NvbnRleHQnKSkge1xuICAgIHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQ7XG5cbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZUdhaW4gPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUdhaW47XG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVHYWluID0gZnVuY3Rpb24oKSB7IFxuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZUdhaW4oKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmdhaW4pO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaW50ZXJuYWxfY3JlYXRlRGVsYXkgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZURlbGF5O1xuICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRGVsYXkgPSBmdW5jdGlvbigpIHsgXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuaW50ZXJuYWxfY3JlYXRlRGVsYXkoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmRlbGF5VGltZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVCdWZmZXJTb3VyY2UgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJ1ZmZlclNvdXJjZTtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJ1ZmZlclNvdXJjZSA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIGlmICghbm9kZS5ub3RlT24pXG4gICAgICAgIG5vZGUubm90ZU9uID0gbm9kZS5zdGFydDsgXG4gICAgICBpZiAoIW5vZGUubm90ZU9uR3JhaW4pXG4gICAgICAgIG5vZGUubm90ZU9uR3JhaW4gPSBub2RlLnN0YXJ0O1xuICAgICAgaWYgKCFub2RlLm5vdGVPZmYpXG4gICAgICAgIG5vZGUubm90ZU9mZiA9IG5vZGUuc3RvcDtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnBsYXliYWNrUmF0ZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnRocmVzaG9sZCk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5rbmVlKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnJhdGlvKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLnJlZHVjdGlvbik7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5hdHRhY2spO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUucmVsZWFzZSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVCaXF1YWRGaWx0ZXIgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJpcXVhZEZpbHRlcjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZUJpcXVhZEZpbHRlciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgIGZpeFNldFRhcmdldChub2RlLmZyZXF1ZW5jeSk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5kZXR1bmUpO1xuICAgICAgZml4U2V0VGFyZ2V0KG5vZGUuUSk7XG4gICAgICBmaXhTZXRUYXJnZXQobm9kZS5nYWluKTtcbiAgICAgIHZhciBlbnVtVmFsdWVzID0gWydMT1dQQVNTJywgJ0hJR0hQQVNTJywgJ0JBTkRQQVNTJywgJ0xPV1NIRUxGJywgJ0hJR0hTSEVMRicsICdQRUFLSU5HJywgJ05PVENIJywgJ0FMTFBBU1MnXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW51bVZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZW51bVZhbHVlID0gZW51bVZhbHVlc1tpXTtcbiAgICAgICAgdmFyIG5ld0VudW1WYWx1ZSA9IGVudW1WYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIW5vZGUucHJvdG90eXBlLmhhc093blByb3BlcnR5KGVudW1WYWx1ZSkpIHtcbiAgICAgICAgICBub2RlLnByb3RvdHlwZVtlbnVtVmFsdWVdID0gbmV3RW51bVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgaWYgKEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoICdjcmVhdGVPc2NpbGxhdG9yJyApKSB7XG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmludGVybmFsX2NyZWF0ZU9zY2lsbGF0b3IgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZU9zY2lsbGF0b3I7XG4gICAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZU9zY2lsbGF0b3IgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pbnRlcm5hbF9jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICAgIGlmICghbm9kZS5ub3RlT24pXG4gICAgICAgICAgbm9kZS5ub3RlT24gPSBub2RlLnN0YXJ0OyBcbiAgICAgICAgaWYgKCFub2RlLm5vdGVPZmYpXG4gICAgICAgICAgbm9kZS5ub3RlT2ZmID0gbm9kZS5zdG9wO1xuICAgICAgICBmaXhTZXRUYXJnZXQobm9kZS5mcmVxdWVuY3kpO1xuICAgICAgICBmaXhTZXRUYXJnZXQobm9kZS5kZXR1bmUpO1xuICAgICAgICB2YXIgZW51bVZhbHVlcyA9IFsnU0lORScsICdTUVVBUkUnLCAnU0FXVE9PVEgnLCAnVFJJQU5HTEUnLCAnQ1VTVE9NJ107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW51bVZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHZhciBlbnVtVmFsdWUgPSBlbnVtVmFsdWVzW2ldO1xuICAgICAgICAgIHZhciBuZXdFbnVtVmFsdWUgPSBlbnVtVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoIW5vZGUucHJvdG90eXBlLmhhc093blByb3BlcnR5KGVudW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIG5vZGUucHJvdG90eXBlW2VudW1WYWx1ZV0gPSBuZXdFbnVtVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbm9kZS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ3NldFdhdmVUYWJsZScpKSB7XG4gICAgICAgICAgbm9kZS5wcm90b3R5cGUuc2V0V2F2ZVRhYmxlID0gbm9kZS5wcm90b3R5cGUuc2V0UGVyaW9kaWNUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5pbnRlcm5hbF9jcmVhdGVQYW5uZXIgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVBhbm5lcjtcbiAgICBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVBhbm5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLmludGVybmFsX2NyZWF0ZVBhbm5lcigpO1xuICAgICAgdmFyIGVudW1WYWx1ZXMgPSB7XG4gICAgICAgICdFUVVBTFBPV0VSJzogJ2VxdWFscG93ZXInLFxuICAgICAgICAnSFJURic6ICdIUlRGJyxcbiAgICAgICAgJ0xJTkVBUl9ESVNUQU5DRSc6ICdsaW5lYXInLFxuICAgICAgICAnSU5WRVJTRV9ESVNUQU5DRSc6ICdpbnZlcnNlJyxcbiAgICAgICAgJ0VYUE9ORU5USUFMX0RJU1RBTkNFJzogJ2V4cG9uZW50aWFsJyxcbiAgICAgIH07XG4gICAgICBmb3IgKHZhciBlbnVtVmFsdWUgaW4gZW51bVZhbHVlcykge1xuICAgICAgICB2YXIgbmV3RW51bVZhbHVlID0gZW51bVZhbHVlc1tlbnVtVmFsdWVdO1xuICAgICAgICBpZiAoIW5vZGUucHJvdG90eXBlLmhhc093blByb3BlcnR5KGVudW1WYWx1ZSkpIHtcbiAgICAgICAgICBub2RlLnByb3RvdHlwZVtlbnVtVmFsdWVdID0gbmV3RW51bVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgaWYgKCFBdWRpb0NvbnRleHQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdjcmVhdGVHYWluTm9kZScpKVxuICAgICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVHYWluTm9kZSA9IEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlR2FpbjtcbiAgICBpZiAoIUF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2NyZWF0ZURlbGF5Tm9kZScpKVxuICAgICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVEZWxheU5vZGUgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZURlbGF5O1xuICAgIGlmICghQXVkaW9Db250ZXh0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlSmF2YVNjcmlwdE5vZGUnKSlcbiAgICAgIEF1ZGlvQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlSmF2YVNjcmlwdE5vZGUgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVNjcmlwdFByb2Nlc3NvcjtcbiAgICBpZiAoIUF1ZGlvQ29udGV4dC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2NyZWF0ZVdhdmVUYWJsZScpKVxuICAgICAgQXVkaW9Db250ZXh0LnByb3RvdHlwZS5jcmVhdGVXYXZlVGFibGUgPSBBdWRpb0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVBlcmlvZGljV2F2ZTtcbiAgfVxufSh3aW5kb3cpKTtcblxuLyoganNoaW50IGlnbm9yZTplbmQgKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpLFxuICAgIEFuYWx5c2VyRGlzcGxheSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hbmFseXNlci1kaXNwbGF5LmpzJyk7XG5cbmZ1bmN0aW9uIEFuYWx5c2VyKGVsLCBhdWRpb0NvbnRleHQpIHtcbiAgICBBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuICAgIC8vdGhpcy5zb3VuZCA9IFxuICAgIHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gICAgdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnRHJ1bXMnKS5kYXRhKTtcbiAgICB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdCYXNzJykuZGF0YSk7XG4gICAgLy8gMTAyNCBmZnQgc2l6ZSBpcyA1MTIgcGFydHNcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvLm5vZGVGYWN0b3J5LmFuYWx5c2VyKDEwMjQpO1xuICAgIC8vdGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cbiAgICB0aGlzLmF1ZGlvLl9nYWluLmNvbm5lY3QodGhpcy5ub2RlKTtcbiAgICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgdmFyIGRpc3BsYXkgPSBuZXcgQW5hbHlzZXJEaXNwbGF5KCk7XG5cbiAgICB2YXIgcGFuZWxGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ0ZyZXF1ZW5jaWVzJyk7XG4gICAgdGhpcy5zbGlkZXJTbW9vdGhpbmcgPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcihwYW5lbEZyZXEuZWwsICdTbW9vdGhpbmcnLCAwLCAxLCAwLjAxLCB0aGlzLm5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50LCB0aGlzLnVwZGF0ZVNtb290aGluZywgdGhpcyk7XG4gICAgdGhpcy5kcm9wZG93bkZGVCA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24ocGFuZWxGcmVxLmVsLCB7XG4gICAgICAgICc2NCc6IDY0LFxuICAgICAgICAnMTI4JzogMTI4LFxuICAgICAgICAnMjU2JzogMjU2LFxuICAgICAgICAnNTEyJzogNTEyLFxuICAgICAgICAnMTAyNCc6IDEwMjQsXG4gICAgICAgICcyMDQ4JzogMjA0OFxuICAgIH0sIHRoaXMudXBkYXRlRkZUU2l6ZSwgdGhpcywgdGhpcy5ub2RlLmZmdFNpemUsICdGRlQgU2l6ZScpO1xuXG4gICAgdmFyIGZyZXEgPSBkaXNwbGF5LmFkZEZyZXEodGhpcy5ub2RlKTtcbiAgICBmcmVxLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxGcmVxLmFwcGVuZChmcmVxLmNhbnZhcyk7XG5cbiAgICB2YXIgcGFuZWxXYXZlID0gbmV3IFVJQ29tcG9uZW50cy5QYW5lbChlbCwgJ1dhdmUnKTtcbiAgICB2YXIgd2F2ZSA9IGRpc3BsYXkuYWRkV2F2ZSh0aGlzLm5vZGUpO1xuICAgIHdhdmUudGhpY2tuZXNzID0gMTtcbiAgICB3YXZlLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxXYXZlLmFwcGVuZCh3YXZlLmNhbnZhcyk7XG5cbiAgICB2YXIgcGFuZWxMZXZlbHMgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnTGV2ZWxzJyk7XG4gICAgdmFyIGxldmVscyA9IGRpc3BsYXkuYWRkTGV2ZWxzKHRoaXMubm9kZSk7XG4gICAgbGV2ZWxzLmJhY2tncm91bmQgPSAncmdiKDAsMCwwKSc7XG4gICAgcGFuZWxMZXZlbHMuYXBwZW5kKGxldmVscy5jYW52YXMpO1xufVxuXG5BbmFseXNlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFic3RyYWN0RGVtby5wcm90b3R5cGUpO1xuQW5hbHlzZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQW5hbHlzZXI7XG5cbkFuYWx5c2VyLnByb3RvdHlwZS51cGRhdGVTbW9vdGhpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59O1xuXG5BbmFseXNlci5wcm90b3R5cGUudXBkYXRlRkZUU2l6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5ub2RlLmZmdFNpemUgPSBwYXJzZUludCh2YWx1ZSk7XG59O1xuXG5BbmFseXNlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIEFic3RyYWN0RGVtby5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmFseXNlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBXZWJBdWRpbyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3dlYi1hdWRpby5qcycpLFxuXHRBc3NldExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Fzc2V0LWxvYWRlci5qcycpLFxuXHRMb2FkaW5nQmFyID0gcmVxdWlyZSgnLi9sb2FkaW5nLWJhci5qcycpO1xuXG5mdW5jdGlvbiBBYnN0cmFjdERlbW8oZWwsIGF1ZGlvQ29udGV4dCkge1xuXHR0aGlzLmVsID0gZWw7XG5cdHRoaXMuYXVkaW8gPSBuZXcgV2ViQXVkaW8oYXVkaW9Db250ZXh0KTtcbn1cblxuQWJzdHJhY3REZW1vLnByb3RvdHlwZSA9IHtcblx0cGxheTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5hdWRpby5wbGF5KCk7XG5cdH0sXG5cdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmF1ZGlvLnBhdXNlKCk7XG5cdH0sXG5cdGxvYWQ6IGZ1bmN0aW9uKHVybCwgZm4pIHtcblx0XHRMb2FkaW5nQmFyLnNob3coKTtcblx0XHR2YXIgbG9hZGVyID0gbmV3IEFzc2V0TG9hZGVyLkxvYWRlcih1cmwpO1xuXHRcdFx0bG9hZGVyLmNyb3NzT3JpZ2luID0gdHJ1ZTtcblx0XHRcdGxvYWRlci5vblByb2dyZXNzLmFkZChmdW5jdGlvbihwKSB7XG5cdFx0XHRcdExvYWRpbmdCYXIudXBkYXRlKHApO1xuXHRcdFx0fSk7XG5cdFx0XHRsb2FkZXIub25Db21wbGV0ZS5hZGRPbmNlKGZ1bmN0aW9uKGJ1ZmZlcikge1xuXHRcdFx0XHRsb2FkZXIub25Qcm9ncmVzcy5yZW1vdmVBbGwoKTtcblx0XHRcdFx0TG9hZGluZ0Jhci5oaWRlKCk7XG5cdFx0XHRcdGZuLmNhbGwodGhpcywgYnVmZmVyKTtcblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0bG9hZGVyLmxvYWRXZWJBdWRpbyh0aGlzLmF1ZGlvLmNvbnRleHQpO1xuXHRcdHJldHVybiBsb2FkZXI7XG5cdH0sXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGF1c2UoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdERlbW87XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEFuYWx5c2VyRGlzcGxheSgpIHtcbiAgICB0aGlzLmFuYWx5c2VycyA9IFtdO1xuICAgIHRoaXMuZHJhdygpO1xufVxuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZEZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LkZyZXEsIG5vZGUsIGVsKTtcbiAgICAvKmlmKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NhbnZhcycpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vdGhpcy5hbmFseXNlcnMucHVzaChuZXcgQW5hbHlzZXJEaXNwbGF5LkhUTUxWaWV3KG5vZGUsIGVsKSk7XG4gICAgfSovXG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHJldHVybiB0aGlzLmFkZERpc3BsYXkoQW5hbHlzZXJEaXNwbGF5LldhdmUsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkTGV2ZWxzID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGREaXNwbGF5KEFuYWx5c2VyRGlzcGxheS5MZXZlbHMsIG5vZGUsIGVsKTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuYWRkRGlzcGxheSA9IGZ1bmN0aW9uKENsYXNzLCBub2RlLCBlbCkge1xuICAgIGVsID0gZWwgfHwgdGhpcy5nZXRDYW52YXMoKTtcbiAgICB2YXIgZGlzcGxheSA9IG5ldyBDbGFzcyhub2RlLCBlbCk7XG4gICAgdGhpcy5hbmFseXNlcnMucHVzaChkaXNwbGF5KTtcbiAgICByZXR1cm4gZGlzcGxheTtcbn07XG5cbkFuYWx5c2VyRGlzcGxheS5wcm90b3R5cGUuZ2V0Q2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgIHdpZHRoID0gd2lkdGggfHwgNTEyO1xuICAgIGhlaWdodCA9IGhlaWdodCB8fCAyNTY7XG4gICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjLndpZHRoID0gd2lkdGg7XG4gICAgYy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIGM7XG59O1xuXG5BbmFseXNlckRpc3BsYXkucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgICB2YXIgbCA9IHRoaXMuYW5hbHlzZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmFuYWx5c2Vyc1tpXS5kcmF3KCk7XG4gICAgfVxufTtcblxuLy8gZnJlcXVlbmNpZXNcblxuQW5hbHlzZXJEaXNwbGF5LkZyZXEgPSBmdW5jdGlvbihub2RlLCBlbCkge1xuICAgIHRoaXMuY2FudmFzID0gZWw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuRnJlcS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpLFxuICAgICAgICBiYXJTcGFjaW5nID0gMDtcblxuICAgIGlmKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICB0aGlzLm5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0LCBiYXJXaWR0aCAtIGJhclNwYWNpbmcsIDAgLSBoZWlnaHQgKiBwZXJjZW50KTtcbiAgICB9XG59O1xuXG4vLyB3YXZlZm9ybVxuXG5BbmFseXNlckRpc3BsYXkuV2F2ZSA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50aGlja25lc3MgPSAxO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGZyZXF1ZW5jeUJpbkNvdW50ID0gdGhpcy5ub2RlLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICBiYXJXaWR0aCA9IE1hdGgucm91bmQod2lkdGgvZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgaWYodGhpcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMubm9kZS5nZXRCeXRlVGltZURvbWFpbkRhdGEoZnJlcUJ5dGVEYXRhKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJlcXVlbmN5QmluQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgICAgICB2YXIgcGVyY2VudCA9IG1hZ25pdHVkZSAvIDI1NjtcbiAgICAgICAgdmFyIGh1ZSA9IGkvZnJlcXVlbmN5QmluQ291bnQgKiAzNjA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAxMDAlLCA1MCUpJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KGJhcldpZHRoICogaSwgaGVpZ2h0IC0gaGVpZ2h0ICogcGVyY2VudCAtIDEsIHRoaXMudGhpY2tuZXNzLCB0aGlzLnRoaWNrbmVzcyk7XG4gICAgfVxufTtcblxuQW5hbHlzZXJEaXNwbGF5LkxldmVscyA9IGZ1bmN0aW9uKG5vZGUsIGVsKSB7XG4gICAgdGhpcy5jYW52YXMgPSBlbDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG59O1xuXG5BbmFseXNlckRpc3BsYXkuTGV2ZWxzLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgICAgZnJlcXVlbmN5QmluQ291bnQgPSB0aGlzLm5vZGUuZnJlcXVlbmN5QmluQ291bnQ7XG5cbiAgICBpZih0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBmcmVxQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShmcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgdGhpcy5ub2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXFCeXRlRGF0YSk7XG5cbiAgICB2YXIgbGVuZ3RoID0gZnJlcUJ5dGVEYXRhLmxlbmd0aCxcbiAgICAgICAgdG90YWwgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG90YWwgKz0gZnJlcUJ5dGVEYXRhW2ldO1xuICAgIH1cbiAgICB2YXIgYXZlcmFnZSA9IHRvdGFsIC8gbGVuZ3RoO1xuICAgIHZhciBwZXJjZW50ID0gYXZlcmFnZSAvIDEyODtcblxuICAgIHZhciBncmFkaWVudCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnaHNsKDEyOCwgMTAwJSwgNTAlKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnaHNsKDM2MCwgMTAwJSwgNTAlKScpO1xuXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCAqIHBlcmNlbnQsIGhlaWdodCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2VyRGlzcGxheTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTG9hZGluZ0JhcigpIHtcbiAgICB2YXIgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxvYWRlcicpLFxuICAgICAgICBsYWJlbCA9IGxvYWRlci5xdWVyeVNlbGVjdG9yKCcuTG9hZGVyLWxhYmVsJyk7XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZShwKSB7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IE1hdGgucm91bmQocCAqIDEwMCkgKyAnJSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ0xvYWRlci0taGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgJ3VwZGF0ZSc6IHVwZGF0ZSxcbiAgICAgICAgJ3Nob3cnOiBzaG93LFxuICAgICAgICAnaGlkZSc6IGhpZGVcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb2FkaW5nQmFyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVJQ29tcG9uZW50cygpIHtcbn1cblxuLy8gaGVscGVyc1xuXG5mdW5jdGlvbiBhZGRLZXlEb3duKGtleSwgZm4sIGNvbnRleHQpIHtcbiAgICBpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb25LZXlEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICAgICAgdmFyIHJlbW92ZUtleSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZW1vdmVLZXk7XG4gICAgfVxufVxuXG4vKlxuICogU2xpZGVyXG4gKi9cblxuVUlDb21wb25lbnRzLlNsaWRlciA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIG1pbiwgbWF4LCBzdGVwLCB2YWx1ZSwgZm4sIGNvbnRleHQpIHtcbiAgICB2YXIgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGJsLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICBsYmwuY2xhc3NOYW1lID0gJ1NsaWRlci1sYWJlbCc7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ1NsaWRlci1pbnB1dCc7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG1pbik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgbWF4KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgc3RlcCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uY2FsbChjb250ZXh0IHx8IHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0LmNsYXNzTmFtZSA9ICdTbGlkZXItb3V0cHV0JztcbiAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ1NsaWRlciBTbGlkZXItLWxhcmdlJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxibCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG91dHB1dCk7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuZWwgPSBmb3JtO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5TbGlkZXIucHJvdG90eXBlLCAndmFsdWUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59KTtcblxuLypcbiAqIFBhbmVsXG4gKi9cblxuVUlDb21wb25lbnRzLlBhbmVsID0gZnVuY3Rpb24ocGFyZW50LCB0aXRsZSkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdQYW5lbCc7XG4gICAgaWYocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gICAgaWYodGl0bGUpIHtcbiAgICAgICAgdmFyIGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGgpO1xuICAgIH1cbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oZWwpIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cblVJQ29tcG9uZW50cy5QYW5lbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5lbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG59O1xuXG4vKlxuICogQnV0dG9uXG4gKi9cblxuVUlDb21wb25lbnRzLkJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudCwgbGFiZWwsIGZuLCBjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCBmbiwgaW5wdXQpO1xuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gaW5wdXQ7XG59O1xuXG4vKlxuICogVG9nZ2xlIEJ1dHRvblxuICovXG5cblVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24gPSBmdW5jdGlvbihwYXJlbnQsIGxhYmVsQSwgbGFiZWxCLCBmbkEsIGZuQiwgY29udGV4dCwga2V5KSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlucHV0LmlubmVySFRNTCA9IGxhYmVsQTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbEI7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ0J1dHRvbicsICdCdXR0b24tLWRlZmF1bHQnKTtcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuaW5uZXJIVE1MID09PSBsYWJlbEEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gbGFiZWxCO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGxhYmVsQTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBmbkEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBmbkEuY2FsbChjb250ZXh0IHx8IHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbGFiZWxCO1xuICAgICAgICAgICAgaWYodHlwZW9mIGZuQiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGZuQi5jYWxsKGNvbnRleHQgfHwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcbiAgICB0aGlzLnJlbW92ZUtleSA9IGFkZEtleURvd24oa2V5LCB0b2dnbGUsIGlucHV0KTtcbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBsYWJlbEE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbGFiZWxCO1xuICAgIH07XG4gICAgdGhpcy5lbCA9IGlucHV0O1xufTtcblxuLypcbiAqIERyb3Bkb3duXG4gKi9cblxuVUlDb21wb25lbnRzLkRyb3Bkb3duID0gZnVuY3Rpb24ocGFyZW50LCBvcHRpb25zLCBmbiwgY29udGV4dCwgc2VsZWN0ZWRWYWx1ZSwgdGl0bGUpIHtcbiAgICB2YXIgZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkZC5jbGFzc05hbWUgPSAnRHJvcGRvd24nO1xuICAgIGZvcih2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uc1trZXldKTtcbiAgICAgICAgby5pbm5lckhUTUwgPSBrZXk7XG4gICAgICAgIGRkLmFwcGVuZENoaWxkKG8pO1xuICAgICAgICBpZihvcHRpb25zW2tleV0gPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY29udGV4dCwgZGQub3B0aW9uc1tkZC5zZWxlY3RlZEluZGV4XS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgaWYodGl0bGUpIHtcbiAgICAgICAgICAgIHZhciBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGguY2xhc3NOYW1lID0gJ0Ryb3Bkb3duLXRpdGxlJztcbiAgICAgICAgICAgIGguaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRkKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGRkO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJQ29tcG9uZW50cy5Ecm9wZG93bi5wcm90b3R5cGUsICd2YWx1ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVSUNvbXBvbmVudHMuRHJvcGRvd24ucHJvdG90eXBlLCAndGV4dCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5vcHRpb25zW3RoaXMuZWwuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVSUNvbXBvbmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBGaWx0ZXIoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuICAgIHRoaXMuc291bmQgPSB0aGlzLmF1ZGlvLmFkZChNb2RlbC5nZXRGaWxlKCdEcnVtcycpLmRhdGEpO1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuZmlsdGVyLmxvd3Bhc3MoKTtcbiAgICB0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnRmlsdGVyIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQmlxdWFkRmlsdGVyTm9kZVwiPis8L2E+Jyk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuZmlsdGVyLCB0aGlzLnVwZGF0ZUZpbHRlclR5cGUsIHRoaXMpO1xuXG4gICAgdGhpcy5zbGlkZXJGcmVxID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ0ZyZXF1ZW5jeScsIDAsIDEsIDAuMDEsIDAuNSwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyUXVhbCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdRdWFsaXR5JywgMCwgMTAwMCwgMC4xLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJHYWluID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ0dhaW4nLCAtNDAsIDQwLCAwLjEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbn1cblxuRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5GaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsdGVyO1xuXG5GaWx0ZXIucHJvdG90eXBlLnVwZGF0ZUZpbHRlclR5cGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vZGUudHlwZSA9IHRoaXMuZHJvcGRvd24udGV4dDtcbn07XG5cbkZpbHRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hdWRpby5lZmZlY3RzLmZpbHRlcih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyRnJlcS52YWx1ZSwgdGhpcy5zbGlkZXJRdWFsLnZhbHVlLCB0aGlzLnNsaWRlckdhaW4udmFsdWUpO1xufTtcblxuRmlsdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMb2FkaW5nQmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xvYWRpbmctYmFyLmpzJyksXHJcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcclxuXHRLZXlib2FyZCA9IHJlcXVpcmUoJy4uL3V0aWxzL2tleWJvYXJkLmpzJyksXHJcblx0UmV2ZXJiID0gcmVxdWlyZSgnLi9yZXZlcmIuanMnKSxcclxuXHRBbmFseXNlciA9IHJlcXVpcmUoJy4vYW5hbHlzZXIuanMnKSxcclxuXHRNdWx0aVRyYWNrID0gcmVxdWlyZSgnLi9tdWx0aS10cmFjay5qcycpLFxyXG5cdFBhblRocmVlRCA9IHJlcXVpcmUoJy4vcGFuLXRocmVlLWQuanMnKSxcclxuXHRGaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlci5qcycpO1xyXG5cclxuZnVuY3Rpb24gR1VJKGVsKSB7XHJcblx0dGhpcy5lbCA9IGVsO1xyXG5cdHRoaXMuYWRkTG9hZGVyKCk7XHJcbn1cclxuXHJcbkdVSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGF1ZGlvQ29udGV4dCkge1xyXG5cdHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xyXG5cdExvYWRpbmdCYXIuaGlkZSgpO1xyXG5cclxuXHR0aGlzLm1lbnUgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKHRoaXMuZWwpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ1JldmVyYicsIHRoaXMucmV2ZXJiLCB0aGlzLCBLZXlib2FyZC5PTkUpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0FuYWx5c2VyJywgdGhpcy5hbmFseXNlciwgdGhpcywgS2V5Ym9hcmQuVFdPKTtcclxuXHRuZXcgVUlDb21wb25lbnRzLkJ1dHRvbih0aGlzLm1lbnUuZWwsICdNdWx0aVRyYWNrJywgdGhpcy5tdWx0aVRyYWNrLCB0aGlzLCBLZXlib2FyZC5USFJFRSk7XHJcblx0bmV3IFVJQ29tcG9uZW50cy5CdXR0b24odGhpcy5tZW51LmVsLCAnUGFuJywgdGhpcy5wYW4sIHRoaXMsIEtleWJvYXJkLkZPVVIpO1xyXG5cdG5ldyBVSUNvbXBvbmVudHMuQnV0dG9uKHRoaXMubWVudS5lbCwgJ0ZpbHRlcicsIHRoaXMuZmlsdGVyLCB0aGlzLCBLZXlib2FyZC5GSVZFKTtcclxuXHJcblx0dGhpcy5jb250cm9scyA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwodGhpcy5lbCk7XHJcblx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFVJQ29tcG9uZW50cy5Ub2dnbGVCdXR0b24odGhpcy5jb250cm9scy5lbCwgJ1BMQVknLCAnUEFVU0UnLCB0aGlzLnBsYXksIHRoaXMucGF1c2UsIHRoaXMsIEtleWJvYXJkLlNQQUNFQkFSKTtcclxuXHJcblx0dGhpcy5kZW1vSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlbW9Ib2xkZXIpO1xyXG5cclxuXHR0aGlzLmFuYWx5c2VyKCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnJldmVyYiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFJldmVyYih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuYW5hbHlzZXIgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNsZWFyRGVtbygpO1xyXG5cdHRoaXMuZGVtbyA9IG5ldyBBbmFseXNlcih0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUubXVsdGlUcmFjayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IE11bHRpVHJhY2sodGhpcy5kZW1vSG9sZGVyLCB0aGlzLmF1ZGlvQ29udGV4dCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBhbiA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY2xlYXJEZW1vKCk7XHJcblx0dGhpcy5kZW1vID0gbmV3IFBhblRocmVlRCh0aGlzLmRlbW9Ib2xkZXIsIHRoaXMuYXVkaW9Db250ZXh0KTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5jbGVhckRlbW8oKTtcclxuXHR0aGlzLmRlbW8gPSBuZXcgRmlsdGVyKHRoaXMuZGVtb0hvbGRlciwgdGhpcy5hdWRpb0NvbnRleHQpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS5jbGVhckRlbW8gPSBmdW5jdGlvbigpIHtcclxuXHRpZih0aGlzLmRlbW8pIHtcclxuXHRcdHRoaXMuZGVtby5kZXN0cm95KCk7XHJcblx0fVxyXG5cdHRoaXMuZGVtb0hvbGRlci5pbm5lckhUTUwgPSAnJztcclxuXHR0aGlzLnBsYXlCdXR0b24ucmVzZXQoKTtcclxufTtcclxuXHJcbkdVSS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZGVtby5wbGF5KCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5kZW1vLnBhdXNlKCk7XHJcbn07XHJcblxyXG5HVUkucHJvdG90eXBlLmFkZExvYWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdExvYWRpbmdCYXIuc2hvdygpO1xyXG59O1xyXG5cclxuR1VJLnByb3RvdHlwZS51cGRhdGVMb2FkUHJvZ3Jlc3MgPSBmdW5jdGlvbihwKSB7XHJcblx0TG9hZGluZ0Jhci51cGRhdGUocCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdVSTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcbiAgICBVSUNvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy5qcycpLFxuICAgIE1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWwvYXVkaW8tbW9kZWwuanMnKTtcblxuZnVuY3Rpb24gTXVsdGlUcmFjayhlbCwgYXVkaW9Db250ZXh0KSB7XG4gICAgQWJzdHJhY3REZW1vLmNhbGwodGhpcywgZWwsIGF1ZGlvQ29udGV4dCk7XG5cbiAgICB2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuICAgIGZvciAodmFyIGkgaW4gZmlsZXMpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gdGhpcy5hdWRpby5hZGQoZmlsZXNbaV0uZGF0YSk7XG4gICAgICAgIHNvdW5kLmFkZE5vZGUodGhpcy5hdWRpby5ub2RlRmFjdG9yeS5nYWluKCkpO1xuICAgICAgICB2YXIgY29udHJvbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsIGkpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNvdW5kLl9ub2RlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdhaW5Db250cm9scyhzb3VuZC5fbm9kZVtqXSwgY29udHJvbC5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk11bHRpVHJhY2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcbk11bHRpVHJhY2sucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTXVsdGlUcmFjaztcblxuTXVsdGlUcmFjay5wcm90b3R5cGUuY3JlYXRlR2FpbkNvbnRyb2xzID0gZnVuY3Rpb24obm9kZSwgZWwpIHtcblx0dmFyIHZvbCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKGVsLCAnZ2FpbicsIDAsIDIsIDAuMSwgMSwgZnVuY3Rpb24oKSB7XG5cdFx0bm9kZS5nYWluLnZhbHVlID0gdGhpcy52YWx1ZTtcblx0fSk7XG4gICAgdmFyIG11dGUgPSBuZXcgVUlDb21wb25lbnRzLlRvZ2dsZUJ1dHRvbihlbCwgJ211dGUnLCAndW5tdXRlJyxcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG11dGUudm9sdW1lID0gbm9kZS5nYWluLnZhbHVlO1xuICAgICAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gdm9sLnZhbHVlID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLmdhaW4udmFsdWUgPSB2b2wudmFsdWUgPSBtdXRlLnZvbHVtZSB8fCAxOyBcbiAgICAgICAgfVxuICAgICk7XG59O1xuXG5NdWx0aVRyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpVHJhY2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERlbW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJzdHJhY3QtZGVtby5qcycpLFxuICAgIFVJQ29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1jb21wb25lbnRzLmpzJyksXG4gICAgTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBQYW5UaHJlZUQoZWwsIGF1ZGlvQ29udGV4dCkge1xuICAgIEFic3RyYWN0RGVtby5jYWxsKHRoaXMsIGVsLCBhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uYWRkKE1vZGVsLmdldEZpbGUoJ1BpYW5vJykuZGF0YSk7XG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5wYW4oKTtcbiAgICB0aGlzLnNvdW5kLmFkZE5vZGUodGhpcy5ub2RlKTtcblxuICAgIHRoaXMucGFuZWwgPSBuZXcgVUlDb21wb25lbnRzLlBhbmVsKGVsLCAnUGFuJyk7XG5cbiAgICAvL3RoaXMuc2xpZGVyWCA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd4JywgLU1hdGguUEksIE1hdGguUEksIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlclggPSBuZXcgVUlDb21wb25lbnRzLlNsaWRlcih0aGlzLnBhbmVsLmVsLCAneCcsIC0xLCAxLCAwLjAxLCAwLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXJZID0gbmV3IFVJQ29tcG9uZW50cy5TbGlkZXIodGhpcy5wYW5lbC5lbCwgJ3knLCAtMSwgMSwgMC4wMSwgMCwgdGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVyWiA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICd6JywgLTEsIDEsIDAuMDEsIDAsIHRoaXMudXBkYXRlLCB0aGlzKTtcbn1cblxuUGFuVGhyZWVELnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3REZW1vLnByb3RvdHlwZSk7XG5QYW5UaHJlZUQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFuVGhyZWVEO1xuXG5QYW5UaHJlZUQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vdGhpcy5hdWRpby5lZmZlY3RzLnBhblgodGhpcy5ub2RlLCB2YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5hdWRpby5lZmZlY3RzLnBhbih0aGlzLm5vZGUsIHRoaXMuc2xpZGVyWC52YWx1ZSwgdGhpcy5zbGlkZXJZLnZhbHVlLCB0aGlzLnNsaWRlcloudmFsdWUpO1xufTtcblxuUGFuVGhyZWVELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgQWJzdHJhY3REZW1vLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuVGhyZWVEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REZW1vID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fic3RyYWN0LWRlbW8uanMnKSxcblx0VUlDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3VpLWNvbXBvbmVudHMuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbC9hdWRpby1tb2RlbC5qcycpO1xuXG5mdW5jdGlvbiBSZXZlcmIoZWwsIGF1ZGlvQ29udGV4dCkge1xuXHRBYnN0cmFjdERlbW8uY2FsbCh0aGlzLCBlbCwgYXVkaW9Db250ZXh0KTtcblxuXHR0aGlzLnNvdW5kID0gdGhpcy5hdWRpby5hZGQoTW9kZWwuZ2V0RmlsZSgnUGlhbm8nKS5kYXRhKTtcblx0dGhpcy5ub2RlID0gdGhpcy5hdWRpby5ub2RlRmFjdG9yeS5yZXZlcmIoKTtcblx0dGhpcy5zb3VuZC5hZGROb2RlKHRoaXMubm9kZSk7XG5cblx0dGhpcy5wYW5lbCA9IG5ldyBVSUNvbXBvbmVudHMuUGFuZWwoZWwsICdSZXZlcmInKTtcblx0dGhpcy5kcm9wZG93biA9IG5ldyBVSUNvbXBvbmVudHMuRHJvcGRvd24odGhpcy5wYW5lbC5lbCwgTW9kZWwuaW1wdWxzZSwgdGhpcy51cGRhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xuXG5cdHRoaXMuc2xpZGVyU2Vjb25kcyA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdzZWNvbmRzJywgMC4xLCAxMCwgMC4xLCAxLCB0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlLCB0aGlzKTtcblx0dGhpcy5zbGlkZXJEZWNheSA9IG5ldyBVSUNvbXBvbmVudHMuU2xpZGVyKHRoaXMucGFuZWwuZWwsICdkZWNheScsIDAsIDIwLCAwLjEsIDAsIHRoaXMuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UsIHRoaXMpO1xufVxuXG5SZXZlcmIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdERlbW8ucHJvdG90eXBlKTtcblJldmVyYi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXZlcmI7XG5cblJldmVyYi5wcm90b3R5cGUuZ2VuZXJhdGVJbXB1bHNlUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IHRoaXMuYXVkaW8ubm9kZUZhY3RvcnkuY3JlYXRlSW1wdWxzZVJlc3BvbnNlKHRoaXMuc2xpZGVyU2Vjb25kcy52YWx1ZSwgdGhpcy5zbGlkZXJEZWNheS52YWx1ZSk7XG59O1xuXG5SZXZlcmIucHJvdG90eXBlLnVwZGF0ZUltcHVsc2VSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmKHZhbHVlID09PSAnJykgeyByZXR1cm47IH1cblx0dGhpcy5zbGlkZXJTZWNvbmRzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHR0aGlzLnNsaWRlckRlY2F5LmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG5cdHN3aXRjaCh2YWx1ZSkge1xuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdHRoaXMuc2xpZGVyU2Vjb25kcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuc2xpZGVyRGVjYXkuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmdlbmVyYXRlSW1wdWxzZVJlc3BvbnNlKCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5sb2FkKHZhbHVlLCB0aGlzLmFwcGx5SW1wdWxzZSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuUmV2ZXJiLnByb3RvdHlwZS5hcHBseUltcHVsc2UgPSBmdW5jdGlvbihidWZmZXIpIHtcblx0dGhpcy5ub2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbn07XG5cblJldmVyYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRBYnN0cmFjdERlbW8ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0dGhpcy5wYW5lbC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJiOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoJy4vYXBwL3V0aWxzL2F1ZGlvLW1hbmFnZXIuanMnKSxcblx0QXNzZXRMb2FkZXIgPSByZXF1aXJlKCcuL2FwcC91dGlscy9hc3NldC1sb2FkZXIuanMnKSxcblx0TW9kZWwgPSByZXF1aXJlKCcuL2FwcC9tb2RlbC9hdWRpby1tb2RlbC5qcycpLFxuXHRHVUkgPSByZXF1aXJlKCcuL2FwcC92aWV3L2d1aS5qcycpO1xuXG5yZXF1aXJlKCcuL2FwcC91dGlscy9yYWYtcG9seWZpbGwuanMnKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuXHR0aGlzLmluaXQoKTtcbn1cblxuQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XG5cdHRoaXMuZ3VpID0gbmV3IEdVSShkb2N1bWVudC5ib2R5KTtcblx0dGhpcy5sb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIoKTtcblxuXHR0aGlzLmxvZygpO1xuXHR0aGlzLmxvYWQoKTtcbn07XG5cbkFwcC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtc2cgPSAnQXVkaW8gTWFuYWdlci4gU3VwcG9ydGVkOicgKyB0aGlzLmF1ZGlvLmlzU3VwcG9ydGVkKCkgK1xuXHQnIFdlYkF1ZGlvQVBJOicgKyB0aGlzLmF1ZGlvLndlYkF1ZGlvU3VwcG9ydGVkKCkgK1xuXHQnIFRvdWNoTG9ja2VkOicgKyB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdGNvbnNvbGUubG9nKG1zZyk7XG59O1xuXG5BcHAucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5sb2FkZXIudG91Y2hMb2NrZWQgPSB0aGlzLmF1ZGlvLmdldFRvdWNoTG9ja2VkKCk7XG5cdHRoaXMubG9hZGVyLndlYkF1ZGlvQ29udGV4dCA9IHRoaXMuYXVkaW8ud2ViQXVkaW9Db250ZXh0O1xuXHR0aGlzLmxvYWRlci5jcm9zc09yaWdpbiA9IHRydWU7XG5cblx0dmFyIGZpbGVzID0gTW9kZWwuYXVkaW9GaWxlcztcblx0Zm9yICh2YXIgaSBpbiBmaWxlcykge1xuXHRcdHZhciBmaWxlID0gZmlsZXNbaV07XG5cdFx0ZmlsZS51cmwgPSBmaWxlLnVybCArIHRoaXMuYXVkaW8uZ2V0RXh0ZW5zaW9uKCk7XG5cdFx0dGhpcy5sb2FkZXIuYWRkKGZpbGUudXJsKTtcblx0fVxuXG5cdHRoaXMubG9hZGVyLm9uUHJvZ3Jlc3MuYWRkKHRoaXMuZ3VpLnVwZGF0ZUxvYWRQcm9ncmVzcywgdGhpcy5ndWkpO1xuXHR0aGlzLmxvYWRlci5vbkNvbXBsZXRlLmFkZCh0aGlzLmxvYWRDb21wbGV0ZSwgdGhpcyk7XG5cdHRoaXMubG9hZGVyLnN0YXJ0KCk7XG59O1xuXG5BcHAucHJvdG90eXBlLmxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZmlsZXMgPSBNb2RlbC5hdWRpb0ZpbGVzO1xuXHRmb3IgKHZhciBpIGluIGZpbGVzKSB7XG5cdFx0dmFyIGZpbGUgPSBmaWxlc1tpXTtcblx0XHRmaWxlLmRhdGEgPSB0aGlzLmxvYWRlci5nZXQoZmlsZS51cmwpLmRhdGE7XG5cdH1cblx0dGhpcy5ndWkuaW5pdCh0aGlzLmF1ZGlvLndlYkF1ZGlvQ29udGV4dCk7XG59O1xuXG5uZXcgQXBwKCk7XG4iLCIvKmpzbGludCBvbmV2YXI6dHJ1ZSwgdW5kZWY6dHJ1ZSwgbmV3Y2FwOnRydWUsIHJlZ2V4cDp0cnVlLCBiaXR3aXNlOnRydWUsIG1heGVycjo1MCwgaW5kZW50OjQsIHdoaXRlOmZhbHNlLCBub21lbjpmYWxzZSwgcGx1c3BsdXM6ZmFsc2UgKi9cbi8qZ2xvYmFsIGRlZmluZTpmYWxzZSwgcmVxdWlyZTpmYWxzZSwgZXhwb3J0czpmYWxzZSwgbW9kdWxlOmZhbHNlLCBzaWduYWxzOmZhbHNlICovXG5cbi8qKiBAbGljZW5zZVxuICogSlMgU2lnbmFscyA8aHR0cDovL21pbGxlcm1lZGVpcm9zLmdpdGh1Yi5jb20vanMtc2lnbmFscy8+XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIEF1dGhvcjogTWlsbGVyIE1lZGVpcm9zXG4gKiBWZXJzaW9uOiAxLjAuMCAtIEJ1aWxkOiAyNjggKDIwMTIvMTEvMjkgMDU6NDggUE0pXG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCl7XG5cbiAgICAvLyBTaWduYWxCaW5kaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBiaW5kaW5nIGJldHdlZW4gYSBTaWduYWwgYW5kIGEgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAgICogPGJyIC8+LSA8c3Ryb25nPlRoaXMgaXMgYW4gaW50ZXJuYWwgY29uc3RydWN0b3IgYW5kIHNob3VsZG4ndCBiZSBjYWxsZWQgYnkgcmVndWxhciB1c2Vycy48L3N0cm9uZz5cbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IEpvYSBFYmVydCBBUzMgU2lnbmFsQmluZGluZyBhbmQgUm9iZXJ0IFBlbm5lcidzIFNsb3QgY2xhc3Nlcy5cbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBuYW1lIFNpZ25hbEJpbmRpbmdcbiAgICAgKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZSBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gKGRlZmF1bHQgPSAwKS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWxCaW5kaW5nKHNpZ25hbCwgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEB0eXBlIEZ1bmN0aW9uXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2lzT25jZSA9IGlzT25jZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQG1lbWJlck9mIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlXG4gICAgICAgICAqIEBuYW1lIGNvbnRleHRcbiAgICAgICAgICogQHR5cGUgT2JqZWN0fHVuZGVmaW5lZHxudWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBsaXN0ZW5lckNvbnRleHQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKiBAdHlwZSBTaWduYWxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3NpZ25hbCA9IHNpZ25hbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuZXIgcHJpb3JpdHlcbiAgICAgICAgICogQHR5cGUgTnVtYmVyXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgfVxuXG4gICAgU2lnbmFsQmluZGluZy5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgaXMgYWN0aXZlIGFuZCBzaG91bGQgYmUgZXhlY3V0ZWQuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgcGFyYW1ldGVycyBwYXNzZWQgdG8gbGlzdGVuZXIgZHVyaW5nIGBTaWduYWwuZGlzcGF0Y2hgIGFuZCBgU2lnbmFsQmluZGluZy5leGVjdXRlYC4gKGN1cnJpZWQgcGFyYW1ldGVycylcbiAgICAgICAgICogQHR5cGUgQXJyYXl8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGFyYW1zIDogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBsaXN0ZW5lciBwYXNzaW5nIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiA8cD5JZiBiaW5kaW5nIHdhcyBhZGRlZCB1c2luZyBgU2lnbmFsLmFkZE9uY2UoKWAgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBzaWduYWwgZGlzcGF0Y2ggcXVldWUsIHRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSBmb3IgdGhlIHNpZ25hbCBkaXNwYXRjaC48L3A+XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IFtwYXJhbXNBcnJdIEFycmF5IG9mIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHsqfSBWYWx1ZSByZXR1cm5lZCBieSB0aGUgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBleGVjdXRlIDogZnVuY3Rpb24gKHBhcmFtc0Fycikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJSZXR1cm4sIHBhcmFtcztcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhIXRoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gdGhpcy5wYXJhbXM/IHRoaXMucGFyYW1zLmNvbmNhdChwYXJhbXNBcnIpIDogcGFyYW1zQXJyO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJSZXR1cm4gPSB0aGlzLl9saXN0ZW5lci5hcHBseSh0aGlzLmNvbnRleHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyUmV0dXJuO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRhY2ggYmluZGluZyBmcm9tIHNpZ25hbC5cbiAgICAgICAgICogLSBhbGlhcyB0bzogbXlTaWduYWwucmVtb3ZlKG15QmluZGluZy5nZXRMaXN0ZW5lcigpKTtcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsIG9yIGBudWxsYCBpZiBiaW5kaW5nIHdhcyBwcmV2aW91c2x5IGRldGFjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZGV0YWNoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNCb3VuZCgpPyB0aGlzLl9zaWduYWwucmVtb3ZlKHRoaXMuX2xpc3RlbmVyLCB0aGlzLmNvbnRleHQpIDogbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGJpbmRpbmcgaXMgc3RpbGwgYm91bmQgdG8gdGhlIHNpZ25hbCBhbmQgaGF2ZSBhIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNCb3VuZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoISF0aGlzLl9zaWduYWwgJiYgISF0aGlzLl9saXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIFNpZ25hbEJpbmRpbmcgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uY2UuXG4gICAgICAgICAqL1xuICAgICAgICBpc09uY2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNPbmNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TGlzdGVuZXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbH0gU2lnbmFsIHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2lnbmFsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9kZXN0cm95IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbEJpbmRpbmcgaXNPbmNlOicgKyB0aGlzLl9pc09uY2UgKycsIGlzQm91bmQ6JysgdGhpcy5pc0JvdW5kKCkgKycsIGFjdGl2ZTonICsgdGhpcy5hY3RpdmUgKyAnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuLypnbG9iYWwgU2lnbmFsQmluZGluZzpmYWxzZSovXG5cbiAgICAvLyBTaWduYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsIGZuTmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoICdsaXN0ZW5lciBpcyBhIHJlcXVpcmVkIHBhcmFtIG9mIHtmbn0oKSBhbmQgc2hvdWxkIGJlIGEgRnVuY3Rpb24uJy5yZXBsYWNlKCd7Zm59JywgZm5OYW1lKSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBSb2JlcnQgUGVubmVyJ3MgQVMzIFNpZ25hbHMuXG4gICAgICogQG5hbWUgU2lnbmFsXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWwoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBBcnJheS48U2lnbmFsQmluZGluZz5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuXG4gICAgICAgIC8vIGVuZm9yY2UgZGlzcGF0Y2ggdG8gYXdheXMgd29yayBvbiBzYW1lIGNvbnRleHQgKCM0NylcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFNpZ25hbC5wcm90b3R5cGUuZGlzcGF0Y2guYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBTaWduYWwucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaWduYWxzIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICovXG4gICAgICAgIFZFUlNJT04gOiAnMS4wLjAnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgc2hvdWxkIGtlZXAgcmVjb3JkIG9mIHByZXZpb3VzbHkgZGlzcGF0Y2hlZCBwYXJhbWV0ZXJzIGFuZFxuICAgICAgICAgKiBhdXRvbWF0aWNhbGx5IGV4ZWN1dGUgbGlzdGVuZXIgZHVyaW5nIGBhZGQoKWAvYGFkZE9uY2UoKWAgaWYgU2lnbmFsIHdhc1xuICAgICAgICAgKiBhbHJlYWR5IGRpc3BhdGNoZWQgYmVmb3JlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBtZW1vcml6ZSA6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc2hvdWxkUHJvcGFnYXRlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJyb2FkY2FzdCBldmVudHMuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgZHVyaW5nIGEgZGlzcGF0Y2ggd2lsbCBvbmx5IGFmZmVjdCB0aGUgbmV4dCBkaXNwYXRjaCwgaWYgeW91IHdhbnQgdG8gc3RvcCB0aGUgcHJvcGFnYXRpb24gb2YgYSBzaWduYWwgdXNlIGBoYWx0KClgIGluc3RlYWQuPC9wPlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF1cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZWdpc3Rlckxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgdmFyIHByZXZJbmRleCA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBiaW5kaW5nO1xuXG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLl9iaW5kaW5nc1twcmV2SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzT25jZSgpICE9PSBpc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGFkZCcrIChpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZW4gYWRkJysgKCFpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZSBzYW1lIGxpc3RlbmVyIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIHJlbGF0aW9uc2hpcCBmaXJzdC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSBuZXcgU2lnbmFsQmluZGluZyh0aGlzLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRCaW5kaW5nKGJpbmRpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLm1lbW9yaXplICYmIHRoaXMuX3ByZXZQYXJhbXMpe1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuZXhlY3V0ZSh0aGlzLl9wcmV2UGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsQmluZGluZ30gYmluZGluZ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2FkZEJpbmRpbmcgOiBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgLy9zaW1wbGlmaWVkIGluc2VydGlvbiBzb3J0XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIGRvIHsgLS1uOyB9IHdoaWxlICh0aGlzLl9iaW5kaW5nc1tuXSAmJiBiaW5kaW5nLl9wcmlvcml0eSA8PSB0aGlzLl9iaW5kaW5nc1tuXS5fcHJpb3JpdHkpO1xuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKG4gKyAxLCAwLCBiaW5kaW5nKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2luZGV4T2ZMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY3VyO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMuX2JpbmRpbmdzW25dO1xuICAgICAgICAgICAgICAgIGlmIChjdXIuX2xpc3RlbmVyID09PSBsaXN0ZW5lciAmJiBjdXIuY29udGV4dCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGxpc3RlbmVyIHdhcyBhdHRhY2hlZCB0byBTaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF1cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgU2lnbmFsIGhhcyB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaGFzIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KSAhPT0gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZCA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIGZhbHNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBhZnRlciBmaXJzdCBleGVjdXRpb24gKHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlKS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkT25jZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZE9uY2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCB0cnVlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGEgc2luZ2xlIGxpc3RlbmVyIGZyb20gdGhlIGRpc3BhdGNoIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gRXhlY3V0aW9uIGNvbnRleHQgKHNpbmNlIHlvdSBjYW4gYWRkIHRoZSBzYW1lIGhhbmRsZXIgbXVsdGlwbGUgdGltZXMgaWYgZXhlY3V0aW5nIGluIGEgZGlmZmVyZW50IGNvbnRleHQpLlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gTGlzdGVuZXIgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ3JlbW92ZScpO1xuXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tpXS5fZGVzdHJveSgpOyAvL25vIHJlYXNvbiB0byBhIFNpZ25hbEJpbmRpbmcgZXhpc3QgaWYgaXQgaXNuJ3QgYXR0YWNoZWQgdG8gYSBzaWduYWxcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGZyb20gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUFsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW25dLl9kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5sZW5ndGggPSAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IE51bWJlciBvZiBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldE51bUxpc3RlbmVycyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gb2YgdGhlIGV2ZW50LCBibG9ja2luZyB0aGUgZGlzcGF0Y2ggdG8gbmV4dCBsaXN0ZW5lcnMgb24gdGhlIHF1ZXVlLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGR1cmluZyBzaWduYWwgZGlzcGF0Y2gsIGNhbGxpbmcgaXQgYmVmb3JlL2FmdGVyIGRpc3BhdGNoIHdvbid0IGFmZmVjdCBzaWduYWwgYnJvYWRjYXN0LjwvcD5cbiAgICAgICAgICogQHNlZSBTaWduYWwucHJvdG90eXBlLmRpc2FibGVcbiAgICAgICAgICovXG4gICAgICAgIGhhbHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2gvQnJvYWRjYXN0IFNpZ25hbCB0byBhbGwgbGlzdGVuZXJzIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBQYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byBlYWNoIGhhbmRsZXIuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyYW1zQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJpbmRpbmdzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tZW1vcml6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBwYXJhbXNBcnI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghIG4pIHtcbiAgICAgICAgICAgICAgICAvL3Nob3VsZCBjb21lIGFmdGVyIG1lbW9yaXplXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiaW5kaW5ncyA9IHRoaXMuX2JpbmRpbmdzLnNsaWNlKCk7IC8vY2xvbmUgYXJyYXkgaW4gY2FzZSBhZGQvcmVtb3ZlIGl0ZW1zIGR1cmluZyBkaXNwYXRjaFxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gdHJ1ZTsgLy9pbiBjYXNlIGBoYWx0YCB3YXMgY2FsbGVkIGJlZm9yZSBkaXNwYXRjaCBvciBkdXJpbmcgdGhlIHByZXZpb3VzIGRpc3BhdGNoLlxuXG4gICAgICAgICAgICAvL2V4ZWN1dGUgYWxsIGNhbGxiYWNrcyB1bnRpbCBlbmQgb2YgdGhlIGxpc3Qgb3IgdW50aWwgYSBjYWxsYmFjayByZXR1cm5zIGBmYWxzZWAgb3Igc3RvcHMgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIC8vcmV2ZXJzZSBsb29wIHNpbmNlIGxpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGFkZGVkIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgICAgIGRvIHsgbi0tOyB9IHdoaWxlIChiaW5kaW5nc1tuXSAmJiB0aGlzLl9zaG91bGRQcm9wYWdhdGUgJiYgYmluZGluZ3Nbbl0uZXhlY3V0ZShwYXJhbXNBcnIpICE9PSBmYWxzZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmdldCBtZW1vcml6ZWQgYXJndW1lbnRzLlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5tZW1vcml6ZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9yZ2V0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGJpbmRpbmdzIGZyb20gc2lnbmFsIGFuZCBkZXN0cm95IGFueSByZWZlcmVuY2UgdG8gZXh0ZXJuYWwgb2JqZWN0cyAoZGVzdHJveSBTaWduYWwgb2JqZWN0KS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IGNhbGxpbmcgYW55IG1ldGhvZCBvbiB0aGUgc2lnbmFsIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGlzcG9zZSB3aWxsIHRocm93IGVycm9ycy48L3A+XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwb3NlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9iaW5kaW5ncztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wcmV2UGFyYW1zO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWwgYWN0aXZlOicrIHRoaXMuYWN0aXZlICsnIG51bUxpc3RlbmVyczonKyB0aGlzLmdldE51bUxpc3RlbmVycygpICsnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8vIE5hbWVzcGFjZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogU2lnbmFscyBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG5hbWUgc2lnbmFsc1xuICAgICAqL1xuICAgIHZhciBzaWduYWxzID0gU2lnbmFsO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogQHNlZSBTaWduYWxcbiAgICAgKi9cbiAgICAvLyBhbGlhcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNlZSAjZ2gtNDQpXG4gICAgc2lnbmFscy5TaWduYWwgPSBTaWduYWw7XG5cblxuXG4gICAgLy9leHBvcnRzIHRvIG11bHRpcGxlIGVudmlyb25tZW50c1xuICAgIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7IC8vQU1EXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7IHJldHVybiBzaWduYWxzOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXsgLy9ub2RlXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gc2lnbmFscztcbiAgICB9IGVsc2UgeyAvL2Jyb3dzZXJcbiAgICAgICAgLy91c2Ugc3RyaW5nIGJlY2F1c2Ugb2YgR29vZ2xlIGNsb3N1cmUgY29tcGlsZXIgQURWQU5DRURfTU9ERVxuICAgICAgICAvKmpzbGludCBzdWI6dHJ1ZSAqL1xuICAgICAgICBnbG9iYWxbJ3NpZ25hbHMnXSA9IHNpZ25hbHM7XG4gICAgfVxuXG59KHRoaXMpKTtcbiJdfQ==
