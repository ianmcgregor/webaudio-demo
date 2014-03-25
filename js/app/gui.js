/* gui.js */

define(
	[], function() {

		'use strict';

		function GUI(element) {

			var loading = document.createElement('div');
				loading.style.width = 0;
				loading.style.height = '12px';
				loading.style.background = '#000';
				loading.style.color = '#fff';
				loading.style.textAlign = 'right';
				loading.style.lineHeight = '12px';
			element.appendChild(loading);

			function updateLoadProgress(p) {
				loading.style.width = Math.round(p * 100) + '%';
				loading.innerHTML = loading.style.width;
			}

			function init(webAudio, analyser) {
				element.removeChild(loading);
				var playButton = createButton('PLAY', function() {
					if(webAudio.playing) {
						webAudio.pause();
						playButton.innerText = 'PLAY';
					}
					else {
						webAudio.play();
						playButton.innerText = 'PAUSE';
					}
				});
				element.appendChild(playButton);
				
				var volumeSlider = createSlider('volume', 0, 1, 0.01, 0.5, function() {
					webAudio.volume = this.value;
				});
				element.appendChild(volumeSlider);

				for (var i = 0; i < webAudio.sound.length; i++) {

					var control = document.createElement('div');
						control.className = 'track';
						control.setAttribute('id', 'track' + i);
					
					var header = document.createElement('h3');
						header.innerHTML = webAudio.sound[i].name || ('track ' + i);

					control.appendChild(header);

					for (var j = 0; j < webAudio.sound[i]._node.length; j++) {
						//console.log(webAudio.sound[i]._node[j]);
						var n = webAudio.sound[i]._node[j];
						var slider = createNodeSlider(n);
						if(slider) {
							control.appendChild(slider);
						}
					}
					element.appendChild(control);
				}

				//<progress value="70" max="100">70 %</progress>
				/*var progress = document.createElement('progress');
					progress.setAttribute('max', 0);
					element.appendChild(progress);*/

				var canvas = document.createElement('canvas');
					canvas.width = 600;
					canvas.height = 60;
					//canvas.style.width = '100%';
					element.appendChild(canvas);
				var context = canvas.getContext('2d');

				function update() {
					drawAnalyser(canvas, context, analyser);
					window.requestAnimationFrame(update);
				}

				update();
			}

			function createNodeSlider(n) {
				if(n.hasOwnProperty('delayTime')) {
					return createSlider('delay', 0, 1, 0.01, n.delayTime.value, function() {
						n.delayTime.value = this.value;
					});
				}
				else if(n.hasOwnProperty('frequency')) {
					var val = n.type === 'lowpass' ? 10000 : 0;
					return createSlider(n.type, 0, 10000, 1, val, function() {
						n.frequency.value = this.value;
					});
				}
				else if(n.hasOwnProperty('panningModel')) {
					return createSlider('pan', -4, 4, 0.1, 0, function() {
						n.setPosition(this.value, 0, 0);
					});
				}
				else if(n.hasOwnProperty('gain')) {
					return createSlider('gain', 0, 2, 0.1, 1, function() {
						n.gain.value = this.value;
					});
				}
				return null;
			}

			function createSlider(label, min, max, step, value, fn) {
				var lbl = document.createElement('label');
					lbl.innerHTML = label;
				var input = document.createElement('input');
					input.setAttribute('type', 'range');
					input.setAttribute('min', min);
					input.setAttribute('max', max);
					input.setAttribute('step', step);
					input.setAttribute('value', value);
					input.addEventListener('change', fn);
				var output = document.createElement('output');
					output.value = input.value;
				var form = document.createElement('form');
					form.className = 'slider';
					form.addEventListener('input', function() {
						output.value = input.value;
					});
					form.appendChild(lbl);
					form.appendChild(input);
					form.appendChild(output);
				return form;
			}

			function createButton(label, fn) {
				var input = document.createElement('button');
					input.innerHTML = label;
					input.addEventListener('click', fn);
				return input;
			}

			function drawAnalyser(canvas, context, analyserNode) {
				var width = canvas.width,
					height = canvas.height,
					barWidth = 10;
	 
				context.clearRect(0, 0, width, height);
	 
				var freqByteData = new Uint8Array(analyserNode.frequencyBinCount);
				analyserNode.getByteFrequencyData(freqByteData);
	 
				var barCount = Math.round(width / barWidth);
				for (var i = 0; i < barCount; i++) {
					var magnitude = freqByteData[i];
					context.fillRect(barWidth * i, height, barWidth - 2, 0 - magnitude + 180);
					//context.fillRect(barWidth * i, height, barWidth - 2, 0 - magnitude + 60);
				}
			}

			return {
				'init': init,
				'updateLoadProgress': updateLoadProgress
			};
		}

		return GUI;
	}
);
