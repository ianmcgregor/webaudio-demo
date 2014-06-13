# WebAudio API Demo

## Demos

### Reverb (Convolver Node)

Either generate an impulse by specifying length and decay, or select from pre-defined impulse audio files from [this set](http://rhythminmind.net/STN/?page_id=443)

### Analyser Node

Basic `<canvas>` visualisations of the frequency range, waveform and overall levels.

### Multi-Track

Playing four synced audio tracks, with controls to mute or change gain of each track.

### Panner Node

Pan the audio across 3D space (X, Y and Z).

### Filters (BiquadFilter Node)

Apply filters to the sound (lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass) to cut or boost certain frequencies.

### Microphone (MediaStreamSource)

Creates an audio source from the users microphone via `getUserMedia` and visualises the waveform of the audio input.

### Oscillator

Creates an audio source from an oscillator supporting sine, square, sawtooth and triangle waveforms.

## Setup

To install dependencies:

```
$ npm install
$ bower install
```


### TODO:
* Add file upload to control bar
* ScriptProcessorNode
* Add methods to manage nodes on main mix

### IE polyfill:
https://github.com/g200kg/WAAPISim
