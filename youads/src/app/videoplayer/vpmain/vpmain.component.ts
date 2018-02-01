import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { BrowserNotificationService } from '../../shared/services/browser-notification.service';
import { ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-vpmain',
  templateUrl: './vpmain.component.html',
  styleUrls: ['./vpmain.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class VpmainComponent implements OnInit {
  //for getting size of component 10
  @ViewChild('firstRow') elementalRow: ElementRef;
  @ViewChild('videoBlock') elementView: ElementRef;
  viewHeight: number;
  viewWidth: number;

  firstRowWidth: number;
  calculatedHeight: number;
  calculatedWidth: number;
  firstCall = 1;
  zIndex = -1;
  transition = 0;

  //current video name
  videoName;

  //video state
  currentState = -1;

  //useless var
  youtubeUrl = "https://www.youtube.com/watch?v=DhGFzaGVdWs";

  constructor(
    private cd : ChangeDetectorRef,
    private youtubePlayer: YoutubePlayerService,
    private youtubeAPI: YoutubeApiService
    ) {
   }

  ngOnInit() {
    this.firstRowWidth = this.elementalRow.nativeElement.offsetWidth;
    this.calculatedWidth = this.firstRowWidth*(10/12);
    this.calculatedHeight = (this.firstRowWidth*(10/12)) / (16/9);
    this.calculatedHeight = Math.round(this.calculatedHeight);
    console.log("test " + this.calculatedHeight);

    //set dimensions of player on load
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    this.viewWidth = this.elementView.nativeElement.offsetWidth;
    console.log(this.viewHeight, this.viewWidth);

    //subscribe to the videoName variable and update it whenever it changes.
    this.youtubeAPI.videoInfoUpdate.subscribe(value => {
      this.videoName = this.youtubeAPI.videoName;
    });

    //subscribe to the videoName variable and update it whenever it changes.
    this.youtubePlayer.videoPlayerState.subscribe(value => {
      this.currentState = this.youtubePlayer.getCurrentState();
      if(this.currentState == 0) {
        this.playAd();
        this.currentState = -1;
      }
    });
  }
  ngAfterViewInit() {
    this.callSetDimensions();
  }
  //custom functions
  playVideoTest() {
    this.youtubePlayer.playVideo("DhGFzaGVdWs");
    this.videoName = this.youtubeAPI.GetVideo("DhGFzaGVdWs");
  }
  callSetDimensions() {
    if(this.firstCall == 1) {
      this.youtubePlayer.setDimensions(this.viewWidth, this.getCalcHeight());
      this.firstCall = 0;
    } 
  }
  changeSize() {
    //set dimensions of player on load
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    this.viewWidth = this.elementView.nativeElement.offsetWidth;
    this.youtubePlayer.resizePlayer(this.viewWidth, this.getCalcHeight());
  }
  getCalcHeight() {
    this.firstRowWidth = this.elementalRow.nativeElement.offsetWidth;
    this.calculatedWidth = this.firstRowWidth*(10/12);
    this.calculatedHeight = (this.firstRowWidth*(10/12)) / (16/9);
    this.calculatedHeight = Math.round(this.calculatedHeight);
    return this.calculatedHeight;
  }
  onResize(event) {
    console.log(event);
    this.changeSize();
  }
  playAd() {
    if(this.zIndex == -1) {
      this.zIndex = 1;
      this.transition = 1;
    }
    else {
      this.transition = 0;
      this.zIndex = -1;
    }
    
  }
}
