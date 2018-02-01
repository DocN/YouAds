import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../../shared/services/playlist-store.service';

@Component({
  selector: 'videos-list',
  templateUrl: 'videos-list.component.html',
  styleUrls: ['videos-list.component.css']
})

export class VideosListComponent {
  @Input() videoList;
  @Input() loadingInProgress;
  @Output() videoPlaylist = new EventEmitter();

  constructor(
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService
  ) { }

  play(video: any): void {
    console.log(video.id);
    this.youtubePlayer.playVideo("DhGFzaGVdWs", video.snippet.title);
    this.addToPlaylist(video);
  }

  addToPlaylist(video: any): void {
    this.videoPlaylist.emit(video);
  }
}
