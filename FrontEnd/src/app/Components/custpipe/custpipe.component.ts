import { Component, OnInit, Input,Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataSource} from '@angular/cdk/table';


@Component({
  selector: 'app-custpipe',
  templateUrl: './custpipe.component.html',
  styleUrls: ['./custpipe.component.scss']
})
export class CustpipeComponent implements OnInit {
  players : any;
  public searchName : string = "";
  displayedColumns: string[] = ['name', 'team', 'dob', 'age','noof4','noof6','others'];
  dataSource : any;
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://demo4690221.mockable.io/getPlayersHistory");
    resp.subscribe((data)=>this.dataSource=data);
  }
  getData(row){
    console.log(row);

  }
  

}
