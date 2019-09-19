import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITask } from './task';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private productUrl = 'api/tasks.json';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.productUrl).pipe();
  }

  addTask(task: ITask): Observable<Object> {
    return this.http.put(this.productUrl, task);
  }

  updateTask(task: ITask): Observable<Object> {
    return this.http.put(this.productUrl, task);
  }

  getTask(id: number): Observable<ITask | undefined> {
    return this.getTasks().pipe(
      map((tasks: ITask[]) => tasks.find(p => p.taskId === id))
    );
  }
}
