import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() task: string;
  @Input() allTasks: Array<string>;
  @Input() arr: Array<number> = [];
  @Input() j: number;
  @Input() count: number;

  @Output() countSave: EventEmitter<number> = new EventEmitter<number>();

  textDone: string = 'Done';
  textInProgress: string = 'In Progress';

  visibble: boolean;

  editTask: string;

  indexForSave: number;

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number): void {
    this.allTasks.splice(index, 1);
    this.countSave.emit(this.count - 1);
    this.arr[index] = 0;
  }


  edit(index: number): void {
    this.editTask = this.allTasks[index];
    this.visibble = true;
    this.indexForSave = index;
  }

  save(): void {
    this.allTasks[this.indexForSave] = this.editTask;
    this.visibble = false;
  }
}
