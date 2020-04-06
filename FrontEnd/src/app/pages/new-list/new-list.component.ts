import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import List from 'src/app/modeles/list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(
    private taskService : TaskServiceService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  addList(value : string){
    this.taskService.createList(value)
      .subscribe((list : List)=> this.router.navigate(['/lists', list._id]))

  }

}
