import { Component, OnInit } from '@angular/core';
import List from '../../modeles/list';
import Task from '../../modeles/task';
import { TaskServiceService } from '../../Services/task-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { relative } from 'path';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})

export class TaskViewComponent implements OnInit {
  
  lists  : List[] = [];
  tasks : Task[]=[];
  listId : string;
  constructor(
    private taskService : TaskServiceService,
    private route :ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    this.taskService.getLists()
    .subscribe((lists: List[])  => this.lists =lists)
  

  this.route.params.subscribe((params: Params) =>{
    this.listId = params.listId
    if (!this.listId) return;
    this.taskService.getTasks(this.listId)
    .subscribe((tasks : Task[])=> this.tasks =tasks);
  });
  }
   onTaskClick(task : Task){
     this.taskService.setCompleted(this.listId ,task)
     .subscribe(() => task.completed = !task.completed);
   }

   OnDeleteTask(task: Task){
     this.taskService.deleteTask(this.listId,task._id )
     .subscribe((task: Task)=> this.tasks= this.tasks.filter(t=> t._id != task._id));
   }

   OnDeleteList(list: List){
     this.taskService.deleteList(list._id)
     .subscribe(()=> this.lists= this.lists.filter(l => l._id != list._id));
   }

   OnTaskClick(){
     if(!this.listId){
       alert("Please select a list to add task");
       return;
     }
     
        this.router.navigate(['./new-task'], {relativeTo : this.route})
     
   }
  }