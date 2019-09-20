import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ITask } from '../../models/task';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let mockService: TaskService;
  let mockTasks: ITask[] = [];
  
  beforeEach(() => {
    const task: ITask = {
      task: "Task",
      parentTask: "parenttask",
      priority: "1",
      startDate: "2016-02-07",
      endDate: "2019-09-25",
      taskId: 2,
      parentTaskId: 1
    }

    mockTasks.push(task);

    mockTestService = jasmine.createSpyObj("TaskService", ["getTasks"]);
    (mockTestService.getTasks as jasmine.Spy).and.returnValue(of(mockTasks));

    component = new ViewTaskComponent(mockTestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe("ngOnInit", function () {
    it("should call getTasks of taskService", function () {
      // Act
      component.ngOnInit();

      // Assert
      expect(mockService.getTasks).toHaveBeenCalledTimes(1);
    });

    it("should set tasks and filtered tasks values", function () {
      // Act
      component.ngOnInit();

      // Assert
      expect(component.tasks).not.toBeUndefined();
      expect(component.filteredTasks).not.toBeUndefined();
    });
  })
  
  describe("priorityFromSearch setter", function () {
    it("should set filtered priorityToSearch when tasks available", function () {
      // Arrange
       spyOn(component, "filterTask");

      // Act
      component.priorityFromSearch = "2";

      // Assert
      expect(component.filterTask).toHaveBeenCalled();
    });
  
});
