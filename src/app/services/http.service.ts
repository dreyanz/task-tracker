import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private httpClient : HttpClient) { }

  getTask() : Observable<Task[]> {
    
    return this.httpClient.get<Task[]>(this.apiUrl);
    
  }

  addTask(task : Task) : Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  } 

}
