import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flowerApp';
  isLoginSuccess: boolean;
  constructor(public userService: UserService) {
  }
  ngOnInit(): void {
    this.isLoginSuccess = this.userService.getIsLogin();
    console.log(this.isLoginSuccess);
  }
}
