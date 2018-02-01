import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadwrapComponent } from './front/headwrap/headwrap.component';
import { StepsComponent } from './front/steps/steps.component';
import { MainComponent } from './front/main/main.component';
import { CreatorsComponent } from './front/creators/creators.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SessionsService } from './sessions.service';
import { DashmainComponent } from './dashboard/dashmain/dashmain.component';
import { PortalComponent } from './login/portal/portal.component';
import { LogoutPortalComponent } from './login/logout-portal/logout-portal.component';
import { VpmainComponent } from './videoplayer/vpmain/vpmain.component';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { PlayerFrameComponent } from './videoplayer/player-frame/player-frame.component';
//youtube libraries
//components
import { VideosListComponent } from './videoAPI/videos-list/videos-list.component';
import { VideosPlaylistComponent } from './videoAPI/videos-playlist/videos-playlist.component';
import { VideosSearchComponent } from './videoAPI/videos-search/videos-search.component';
import { VideoPlayerComponent } from './videoAPI/video-player/video-player.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import { NotificationService } from './shared/services/notification.service';
import { BrowserNotificationService } from './shared/services/browser-notification.service';
// Pipes
import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './shared/pipes/video-name.pipe';
import { LazyScrollDirective } from './shared/directives/lazy-scroll/lazy-scroll.directive';

const appRoutes:Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: PortalComponent
  },
  {
    path: 'logout',
    component: LogoutPortalComponent
  },
  {
    path: 'dashboard',
    component: DashmainComponent
  },
  {
    path: 'video',
    component: VpmainComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadwrapComponent,
    StepsComponent,
    PortalComponent,
    MainComponent,
    CreatorsComponent,
    BottombarComponent,
    DashmainComponent,
    LogoutPortalComponent,
    VpmainComponent,
    PlayerFrameComponent,

    VideosListComponent,
    VideoPlayerComponent,
    VideosPlaylistComponent,

    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoNamePipe,

    LazyScrollDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpModule,
    EmbedVideo.forRoot(),
  ],
  providers: [
    SessionsService,
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    NotificationService,
    BrowserNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
