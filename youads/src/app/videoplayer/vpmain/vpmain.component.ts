import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { NotificationService } from '../../shared/services/notification.service';
import { BrowserNotificationService } from '../../shared/services/browser-notification.service';

@Component({
  selector: 'app-vpmain',
  templateUrl: './vpmain.component.html',
  styleUrls: ['./vpmain.component.css'],

})



export class VpmainComponent implements OnInit {
  testvar;
  youtubeUrl = "https://www.youtube.com/watch?v=DhGFzaGVdWs";
  constructor(
    private cd : ChangeDetectorRef,
    private youtubePlayer: YoutubePlayerService,
  ) {
   }

  ngOnInit() {
    
  }

  testButton(): void {
    this.youtubePlayer.playVideo("DhGFzaGVdWs");
  }


}
