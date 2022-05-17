import { Component, OnInit } from '@angular/core';
import { StudentService, IStudent } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  // statis students list from services
  // students: IStudent[] = this.studentService.students;
  students: IStudent[] = this.studentService.getStudentsClone(); // provides a copy/clone of data
  students2: IStudent[] = this.studentService.getStudentsClone();
  students3: IStudent[] = this.studentService.getStudentsClone();
  
  favourites: IStudent[] = [];
  favouritesLength: number = 0;

  blacklisteds: IStudent[] = [];
  blacklistslength: number = 0;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.onFavouriteUpdate();
  }

  onFavourite(student: IStudent) {
    console.log('parent: onFavourite:', student);
    this.favourites.push(student);
  }

  onFavouriteUpdate() {
    console.log('parent: onFavouriteUpdate:');
    // this.students.filter(student => student.favourite === true)
    this.favouritesLength = this.students.filter(student => student.favourite).length;
  }

  onBlacklist(student: IStudent) {
    console.log('parent: onBlacklist:', student);
    this.blacklisteds.push(student);
  }

  onBlacklistUpdate() {
    this.blacklistslength = this.students.filter(student => student.blacklist).length;
  }

}
