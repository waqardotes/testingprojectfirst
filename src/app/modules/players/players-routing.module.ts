import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';

const children: Routes = [

];

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: children
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
