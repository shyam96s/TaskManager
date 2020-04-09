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
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://demo4690221.mockable.io/getPlayersHistory");
    resp.subscribe((data)=>this.players=data);
  }
  getData(row){
    console.log(row);

  }
  

}
