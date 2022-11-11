import { Component, OnInit, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SONGS} from '../mock-songs'
import {Song } from '../song'


@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css']
})
export class MusicControlComponent implements OnInit {

  songList: Song[] = SONGS;
  cursor = 0;

  audio: HTMLAudioElement = new Audio(this.songList[this.cursor].url);
  playing: boolean = false;
 // volume: number=0.5;

  constructor() { }
  progress = 0;
  

  ngOnInit(): void {
  }

  @Input() set song(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.volume = 0.5;

  }

  playSound() {

    this.audio.play();
    this.updateProgress();
    this.playing = true;
    

  }

  pauseSound() {

    this.audio.pause();
    this.playing = false;

  }
  stopSound() {

    this.audio.pause();
    this.audio.currentTime = 0;
    this.playing = false;

  }
  previousSound() {
    this.audio.play();
    this.audio.load();

    //this.audio.previous();
    this.audio.currentTime = 0;
  }
  nextSound() {

    //this.audio.next();
    this.audio.currentTime = 0;
  }

  updateProgress() {

    this.progress = (this.audio.currentTime / this.audio.duration * 100 || 0)
    setTimeout(() => {
      this.updateProgress();
    }, 1000)


    //console.log("Progreso:" + this.progress);
    console.log("Progreso:" + this.audio.currentTime);
  }
  secondsToString(seconds: number): string {
    if (isNaN(seconds)) seconds = 0;

    let hour: string | number = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second: string | number = Math.floor(seconds % 60);
    second = (second < 10) ? '0' + second : second;

    return `${hour}:${minute}:${second}`;
  }
}
