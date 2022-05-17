import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlayer } from '../../services/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input() player!: IPlayer;
  @Input() controls: boolean = false;

  @Output() onFavourite = new EventEmitter;

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(player: IPlayer) {
    this.show = !this.show
    player.details = !player.details
    this.onFavourite.emit();
  }

}
