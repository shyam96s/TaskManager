import { Component, OnInit } from '@angular/core';
import  {UserRegService} from '../../../Services/user-reg.service';
@Component({
  selector: 'app-signup-user-reg',
  templateUrl: './signup-user-reg.component.html',
  styleUrls: ['./signup-user-reg.component.scss'],
  providers : [UserRegService]
})
export class SignupUserRegComponent implements OnInit {
  emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  constructor(public UserReg : UserRegService) { }

  ngOnInit(): void {
  }

}
