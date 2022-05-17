import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlayerService,
  ]

})
export class PlayersModule { }
