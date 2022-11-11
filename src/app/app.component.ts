import { Component } from '@angular/core';
import { Song } from './song';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'MusicLab';
  song: string = "";
  

  receiveSong($event: Song) {
    this.song = $event.url  
  }

}
