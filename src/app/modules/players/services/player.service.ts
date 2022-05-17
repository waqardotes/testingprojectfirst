import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

export interface IPlayer {
  fullName: string;
  born: string;
  age: number;
  battingStyle: string;
  bowlingStyle?: string;
  fildingPostion?: string;
  playingRole: string;
  details?: boolean;
};

export interface Itodo {
  id: number;
  title: string;
}


// @Injectable({
//   // providedIn: 'root'
// })
@Injectable()
export class PlayerService  {
  
  player: IPlayer[] = [
    {fullName: 'Mohammad Babar Azam', born: 'October 15, 1994, Lahore, Punjab', age: 27, battingStyle: 'Right hand Bat', bowlingStyle: 'Right arm Offbreak', playingRole: 'Batter'},
    {fullName: 'Mohammad Rizwan', born: 'June 01, 1992, Peshawar, Khyber Pakhtunkhwa', age: 29, battingStyle: 'Right hand Bat', fildingPostion: 'Wicketkeeper', playingRole: 'Wicketkeeper Batter'},
    {fullName: 'Hasan Ali', born: 'July 02, 1994, Mandi Bahauddin, Punjab', age: 27, battingStyle: 'Right hand Bat', bowlingStyle: 'Right arm Medium fast', playingRole: 'Bowler'},
    {fullName: 'Shaheen Shah Afridi', born: 'April 06, 2000, Khyber Agency', age: 22, battingStyle: 'Left hand Bat', bowlingStyle: 'Left arm Fast', playingRole: 'Bowler'},
    {fullName: 'Sohaib Maqsood', born: 'April 15, 1987, Multan, Punjab', age: 35, battingStyle: 'Right hand Bat', bowlingStyle: 'Right arm Offbreak', playingRole: 'Middle order Batter', details: false},
  ];

  constructor( private httpService: HttpClient ) { }

  getNames(): string[] {
    return [
      'Muhammad bux',
      'Rasool bux',
      'Haadi bux',
      'Elahi bux',
    ]
  };

  getStudents(): Observable<string[]> {
    return of([
      'israr', 'ashfaq', 'amir', 'alee', 'waqar'
    ])
  };

  getTodos(): Observable<Itodo[]> {
    return this.httpService.get<Itodo[]>(`https://jsonplaceholder.typicode.com/posts`)
    .pipe(map(todos => todos.slice(0, 15)))
  }

}
