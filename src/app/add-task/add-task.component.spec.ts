import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddTaskComponent } from './add-task.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj("TaskService", ["addTask"]);
    (mockService.addTask as jasmine.Spy).and.returnValue(undefined);

    mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
    (mockRouter.navigate as jasmine.Spy).and.returnValue(undefined);

    component = new AddTaskComponent(mockRouter, mockService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   describe("addTask", function () {
    it("should call addTask and router's navigate method", function () {
      // Act
      component.addTask();

      // Assert
      expect(mockService.addTask).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  })
  
});
