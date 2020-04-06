import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../modeles/user'


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
  


export class FormsComponent implements OnInit {
  myForm : FormGroup;
  userModel = new User ('rob','dan','2/12/2020','rob@test.com','asfasfasfasfa','Pizza','male');
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];  

  constructor(private fb:FormBuilder) {}
    
  ngOnInit() {
    this.myForm= this.fb.group({
      fname :'',
      lname : '',
      dob : '',
      email : '',
      message :'',
      type: '',
      gender : ''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
 
}
