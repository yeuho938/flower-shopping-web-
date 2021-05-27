import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenModel = false;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  constructor( public formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit(): void {
  }
  ToggleModal(): void{
    this.isOpenModel = !this.isOpenModel;
  }
  onLogin(): void{
    this.isOpenModel = !this.isOpenModel;
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.userService.onLogin(username, password);
    this.userService.getIsLogin();
    this.loginForm.reset();
  }
}
