import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../../services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input() student!: IStudent;
  @Input() controls: boolean = false;

  @Output() onFavourite = new EventEmitter<IStudent>();
  @Output() onFavouriteUpdate = new EventEmitter();

  @Output() onBlacklist = new EventEmitter<IStudent>();
  @Output() onBlacklistUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // favourite(student: IStudent) {
  //   console.log('child: favourite:', student);
  //   this.onFavourite.emit(student);
  // }

  toggleFavourite(student: IStudent) {
    student.favourite = !student.favourite;
    // this.onFavourite.emit(student);
    this.onFavouriteUpdate.emit();
  }

  toggleBlacklist(student: IStudent) {
    // console.log('child: black:', student);
    student.blacklist = !student.blacklist;
    this.onBlacklistUpdate.emit();
  }

}
