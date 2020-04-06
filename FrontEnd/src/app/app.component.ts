import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task3';
  public name ="From parent comp";
  public message = "";
  filterNav=['products','activity','Custpipe','Forms'];

 
}
