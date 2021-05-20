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
  isHomePage = false;
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
  ToggleHomePage(): boolean{
    this.isHomePage = !this.isHomePage;
    return this.isHomePage;
    console.log(this.isHomePage);
  }
  onLogin(): void{
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.userService.onLogin(username, password);
    this.loginForm.reset();
    this.isOpenModel = !this.isOpenModel;
  }
}
