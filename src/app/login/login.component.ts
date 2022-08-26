import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val = {
    email: 'hello@gmail.com',
    password: 'test'
  };


  constructor() {


  }

  ngOnInit() {

  }

  login(loginForm: NgForm, submit) {
    console.log('loginForm');
    console.log(loginForm.value, loginForm.valid);
    console.log('val', this.val);

  }

}
