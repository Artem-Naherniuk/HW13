import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW13';
  text: string;
  textVal: string;
  allTasks: Array<string> = [];
  arr: Array<number> = [];
  j: number;

  count: number = 0;

  showIt(): void {
    this.count = this.allTasks.length + 1;
    this.textVal = this.text;
    this.allTasks.push(this.textVal);
    this.text = '';
    for (this.j = 0; this.j < this.allTasks.length; this.j++) {
      this.arr.push(this.j);
      this.arr[this.j] = 0;
    }
  }
  getCoutn(count: number): void {
    this.count = count;
  }
}
