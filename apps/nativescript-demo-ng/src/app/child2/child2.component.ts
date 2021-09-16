import { Component } from '@angular/core';
import { VideoRecorder, Options as VideoRecorderOptions } from '@triniwiz/nativescript-videorecorder';

@Component({
  selector: 'nativescript-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component {
  videorecorder: VideoRecorder;

  constructor() {
    const options: VideoRecorderOptions = {
      hd: true,
      saveToGallery: true,
    };
    this.videorecorder = new VideoRecorder(options);
  }

  onRecord() {
    this.videorecorder
      .record()
      .then((data) => {
        console.log(data.file);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
