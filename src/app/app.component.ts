import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo Tasks List';
  taskList= [];
  task = '';

  addTask() {
    if(this.task !== '')
    {
      this.taskList.push(this.task);
      this.task = '';
    }
  }

  // splice function removes element from the array of the given index
  removeTask(index){
    this.taskList.splice(index , 1);
  }


}
