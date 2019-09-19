import { Component, OnInit } from '@angular/core';
import { ITask } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html'
})

export class UpdateTaskComponent implements OnInit {
  task : ITask  = {
    "task": "",
    "parentTask": "",
    "priority": "",
    "startDate": "",
    "endDate": "",
    "taskId": null,
    "parentTaskId": null
  };  
  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getTask(id);
    }
  }

  getTask(id: number) {
    this.taskService.getTask(id).subscribe(
      task => this.task = task);
  }

  updateTask() {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/view-task']);

  }

}
