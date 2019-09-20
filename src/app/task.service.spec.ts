import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { ITask } from './task';
import { of } from 'rxjs';

describe('TaskService', () => {
 let service: TaskService;
  let mockHttpClient: HttpClient;
  let task:ITask;
  let tasks: ITask[] = [];
  beforeEach(() => {
    task = {
      task: "Task42",
      parentTask: "parenttask11",
      priority: "1",
      startDate: "2019-09-20",
      endDate: "2019-09-22",
      taskId: 42,
      parentTaskId: 11
    }

    tasks.push(task);

    httpClient = jasmine.createSpyObj("HttpClient", ["get", "post", "put"]);    
    (httpClient.get as jasmine.Spy).and.returnValue(of(tasks));
    (httpClient.post as jasmine.Spy).and.returnValue(undefined);
    (httpClient.put as jasmine.Spy).and.returnValue(undefined);

    service = new TaskService(httpClient);
  });
  
  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
  
  describe("getTask", function () {
    it("should call get method", function () {
      // Act
      service.getTasks();

      // Assert
      expect(httpClient.get).toHaveBeenCalled();
    });
  })
  
  describe("addTask", function () {
    it("should call post method", function () {
      // Act
      service.addTask(task);

      // Assert
      expect(httpClient.post).toHaveBeenCalled();
    });
  })
  
  describe("updateTask", function () {
    it("should call put method", function () {
      // Act
      service.updateTask(task);

      // Assert
      expect(httpClient.put).toHaveBeenCalled();
    });
  })
  
});
