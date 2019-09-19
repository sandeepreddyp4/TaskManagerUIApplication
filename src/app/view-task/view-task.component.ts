import { Component, OnInit } from '@angular/core';
import { ITask } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: "app-view-task",
  templateUrl: "./view-task.component.html"
})
export class ViewTaskComponent implements OnInit {

  taskModel : ITask  = {
    "task": "",
    "parentTask": "",
    "priority": "",
    "startDate": "",
    "endDate": "",
    "taskId": null,
    "parentTaskId": null
  };  
  _taskSearchFilter = "";
  _parentTaskSearchFilter = "";
  _priorityFromSearchFilter = "";
  _priorityToSearchFilter = "";
  _startDateSearchFilter = "";
  _endDateSearchFilter = "";
  
  filteredTasks: ITask[] = [];
  tasks: ITask[] = [];

  get taskSearch(): string {
    return this._taskSearchFilter;
  }
  set taskSearch(value: string) {
    this._taskSearchFilter = value;
    this.filteredTasks = this.taskSearch ? this.filterTask(this.taskSearch, "task") : this.tasks;
  }

  get parentTaskSearch(): string {
    return this._parentTaskSearchFilter;
  }
  set parentTaskSearch(value: string) {
    this._parentTaskSearchFilter = value;
    this.filteredTasks = this.parentTaskSearch ? this.filterTask(this.parentTaskSearch, "parentTask") : this.tasks;
  }

  get priorityToSearch(): string {
    return this._priorityToSearchFilter;
  }
  set priorityToSearch(value: string) {
    this._priorityToSearchFilter = value;
    this.filteredTasks = this.priorityToSearch ? this.filterTask(this.priorityToSearch, "priority") : this.tasks;
  }

  get priorityFromSearch(): string {
    return this._priorityFromSearchFilter;
  }
  set priorityFromSearch(value: string) {
    this._priorityFromSearchFilter = value;
    this.filteredTasks = this.priorityFromSearch ? this.filterTask(this.priorityFromSearch, "priority") : this.tasks;
  }

  get endDateSearch(): string {
    return this._endDateSearchFilter;
  }
  set endDateSearch(value: string) {
    this._endDateSearchFilter = value;
    this.filteredTasks = this.endDateSearch ? this.filterTask(this.endDateSearch, "endDate") : this.tasks;
  }

  get startDateSearch(): string {
    return this._startDateSearchFilter;
  }
  set startDateSearch(value: string) {
    this._startDateSearchFilter = value;
    this.filteredTasks = this.startDateSearch ? this.filterTask(this.startDateSearch, "startDate") : this.tasks;
  }
 
  constructor(private taskService: TaskService) { }

  filterTask(filterBy: string, attributeName: any): ITask[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredTasks.filter((task: any) =>
      task[attributeName].toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
      }
    );
  }
}
