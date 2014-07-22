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
