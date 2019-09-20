import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskComponent } from './update-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let mockRoute: any;
  let mockRouter: Router;
  let mockService: TaskService;
  let mockTasks: ITask[] = [];

  beforeEach(() => {
    const task: ITask = {
      task: "Task42",
      parentTask: "parenttask11",
      priority: "1",
      startDate: "2019-09-12",
      endDate: "2019-09-12",
      taskId: 42,
      parentTaskId: 11
    }
    
    mockTasks.push(task);

    mockTestService = jasmine.createSpyObj("TaskService", ["updateTask","getTask"]);   
    (mockTestService.getTask as jasmine.Spy).and.returnValue(of(task));

    mockRoute = {
      "snapshot": {
        "paramMap": convertToParamMap({ id: "42" })
      }
    };

    mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
    (mockRouter.navigate as jasmine.Spy).and.returnValue(undefined);

    component = new UpdateTaskComponent(mockRoute, mockService, mockRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe("ngOnInit", function () {
    it("should call getTask method when task Id is supplied", function () {
      // Arrange
      spyOn(component,"getTask");

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getTask).toHaveBeenCalledWith(42);
    });
    
  describe("updateTask method", function () {
    it("should call updateTask method of taskService and navigate", function () {
      // Act
      component.updateTask();

      // Assert
      expect(mockTestService.updateTask).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  })
  
});
