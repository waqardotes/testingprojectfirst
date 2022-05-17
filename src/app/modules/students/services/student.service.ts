import { Injectable } from '@angular/core';

export interface IStudent {
  firstName: string;
  lastName: string;

  favourite?: boolean;
  blacklist?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService  {

  students: IStudent[] = [
    {firstName: 'Ashfaq', lastName: 'Ahmed'},
    {firstName: 'Irshad', lastName: 'Nawaz', favourite: false},
    {firstName: 'Waqar', lastName: 'Ali',  blacklist: false},
  ]

  constructor() { }

  getStudentsClone() {
    return this.deepClone(this.students);
  }

  deepClone(data: any) {
    return JSON.parse(JSON.stringify(data));
  }
}
