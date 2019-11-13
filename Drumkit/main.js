  const clapSound = document.querySelector('#clap');
  const boomSound = document.querySelector('#boom');
  const hihatSound = document.querySelector('#hihat');
  const kickSound = document.querySelector('#kick');
  const openhatSound = document.querySelector('#openhat');
  const rideSound = document.querySelector('#ride');
  const snareSound = document.querySelector('#snare');
  const tinkSound = document.querySelector('#tink');
  const tomSound = document.querySelector('#tom');



  class Drumkit {

      constructor(btnRec, btnStop, btnPlay) {
        
          this.channel = []
          this.record1 = document.querySelector(btnRec);
          this.stopRecord1 = document.querySelector(btnStop);
          this.playRecord1 = document.querySelector(btnPlay);
          this.channelStartTime = null;
          this.channelRecording = false;
          this.btnRec = document
              .querySelector(`${btnRec}`)
          document
              .querySelector(btnPlay)
              .addEventListener('click', this.playRecord);
          this.btnStop = document
              .querySelector(`${btnStop}`)
          document
              .querySelector(btnStop)
              .addEventListener('click', this.stopRecord);

          this.btnRec.addEventListener('click', this.startRecording);

          this.btnStop.addEventListener('click', this.stopRecording);

          document.body.addEventListener('keypress', this.playAudio);
      }

      playAudio = (e) => {
          if (this.channelRecording) {
              this.channel.push({
                  code: e.code,
                  time: Date.now(),
              })
          }
          this.playSound(e.code);
      }

      startRecording = () => {
          this.channelRecording = !this.channelRecording;
          if (this.channelRecording) {
              this.channel.splice(0);
              this.channelStartTime = Date.now();
              this.record1.disabled = true;
              this.stopRecord1.disabled = false;
              this.playRecord1.disabled = false;
          }
      }
      stopRecord = () => {
          this.channelRecording = false;
          this.record1.disabled = false;
          this.stopRecord1.disabled = true;
         this.playRecord1.disabled = false;

      }


      playRecord = () => {
          if (!this.channelRecording) {
              this.channel
                  .forEach(el => {
                      setTimeout(this.playSound, el.time - this.channelStartTime, el.code);
                      this.record1.disabled = false;
                      this.stopRecord1.disabled = false;
                      this.playRecord1.disabled = true;

                  })
          }

      }



      playSound = (code) => {
        console.log (code);
          switch (code) {
              case 'KeyA':
                  clapSound.currentTime = 0;
                  clapSound.play();
                  break
              case 'KeyS':
                  boomSound.currentTime = 0;
                  boomSound.play();
                  break
              case "KeyD":
                  hihatSound.currentTime = 0;
                  hihatSound.play();
                  break
              case 'KeyF':
                  kickSound.currentTime = 0;
                  kickSound.play();
                  break
              case "KeyG":
                  openhatSound.currentTime = 0;
                  openhatSound.play();
                  break
              case 'KeyH':
                  rideSound.currentTime = 0;
                  rideSound.play();
                  break
              case 'KeyJ':
                  snareSound.currentTime = 0;
                  snareSound.play();
                  break
              case "KeyK":
                  tinkSound.currentTime = 0;
                  tinkSound.play();
                  break
              case "KeyL":
                  tomSound.currentTime = 0;
                  tomSound.play();
                  break
          }
      }
  }


  const drum = new Drumkit('#record1', '#stopRecord1', '#playRecord1');
  const drum2 = new Drumkit('#record2', '#stopRecord2', '#playRecord2', );
  const drum3 = new Drumkit('#record3', '#stopRecord3', '#playRecord3');
  const drum4 = new Drumkit('#record4', '#stopRecord4', '#playRecord4');