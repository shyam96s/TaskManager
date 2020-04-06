import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities : any;
  message : string=" the total expense";
  amount : number= 6000;
  
  displayedColumns: string[] = ['id', 'title', 'dueDate', 'status'];
  dataSource : any;

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response= this.http.get("https://demo4690221.mockable.io/getActivities");
    response.subscribe((data)=>this.dataSource=data);
  }
  fireEvent(){
    this.childEvent.emit('This is from child Component');
  }
  getData(row){
    console.log(row);

  }
}
