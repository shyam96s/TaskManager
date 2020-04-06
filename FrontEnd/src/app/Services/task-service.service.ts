import { Injectable } from '@angular/core';
import {WebService} from './web.service';
import Task from '../modeles/task';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private Webservice : WebService ) {}
    getLists(){
      return this.Webservice.get('lists');
    }
    createList(title : string){
    return this.Webservice.post('lists', {title});
  }
  getTasks(listId : string){
    return this.Webservice.get(`lists/${listId}/tasks`);
  }
  createTask(listId: string, title : string){
  return this.Webservice.post(`lists/${listId}/tasks`, {title});
  }

  deleteList(listId : string){
    return this.Webservice.delete(`lists/${listId}`);
  }

  deleteTask(listId: string , taskId : string){
    return this.Webservice.delete(`lists/${listId}/tasks/${taskId}`);
  }

  setCompleted(listId : string, task : Task){
    return this.Webservice.put(`lists/${listId}/tasks/${task._id}`, {completed : !task.completed}) ;
  }

}

