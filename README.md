# WebAudio API Demo

## Demos

### Reverb (Convolver Node)

Either generate a reverb impulse by specifying length and decay, or select from pre-defined impulse audio files from [this set](http://rhythminmind.net/STN/?page_id=443)

### Analyser Node

Basic `<canvas>` visualisations of the frequency range, waveform and overall levels.

### Multi-Track

Play four synced audio tracks, with controls to mute or change gain of each track.

### Panner Node

Pan the audio across 3D space (X, Y and Z).

### Filters (BiquadFilter Node)

Apply filters to the sound (lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass) to cut or boost certain frequencies.

### Microphone (MediaStreamSource)

Create an audio source from the users microphone via `getUserMedia` and visualises the waveform of the audio input.

### Oscillator

Create an audio source from an oscillator supporting sine, square, sawtooth and triangle waveforms.

### Compressor (DynamicsCompressor Node)

Apply compression to an audio source reducing its dynamic range (effectively boosting quieter sounds).

### Distortion (WaveShaper Node)

Apply a distortion effect to an audio source.

### Delay

Delay / Echo the audio input.

### ScriptProcessor Node

Generate or process audio with JavaScript.

## Setup

To install dependencies:

```
$ npm install
$ bower install
```


### TODO:
* Add file upload to control bar
* ScriptProcessorNode
* Add methods to destroy/dispose main mix

### IE polyfill:
https://github.com/g200kg/WAAPISim
