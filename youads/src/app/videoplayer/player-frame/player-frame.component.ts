import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../../shared/services/playlist-store.service';
import { NotificationService } from '../../shared/services/notification.service'

@Component({
  selector: 'app-player-frame',
  templateUrl: './player-frame.component.html',
  styleUrls: ['./player-frame.component.css']
})
export class PlayerFrameComponent implements OnInit {


  constructor(
    private youtubeService: YoutubeApiService,
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

}
