import { Component, OnInit } from '@angular/core';
import { IPlayer, PlayerService, Itodo } from './services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: IPlayer[] = this.playerService.player;
  goldenNames: string[] = this.playerService.getNames();
  webStudent: string[] = [];
  todo: Itodo[] = []; 
  
  playerName: number = 0;

  constructor(
    private playerService: PlayerService
  ) { }


  ngOnInit(): void {

    this.playerService.getStudents().subscribe( val => this.webStudent = val); 
  
    this.playerService.getTodos()
    .subscribe({
      next: val => this.todo = val,
    });

    this.onFavourite();
   
   
  }

  onFavourite() {
    this.playerName = this.players.filter(player => player.details).length
  }


}
