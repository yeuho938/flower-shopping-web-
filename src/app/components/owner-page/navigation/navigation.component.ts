import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMenuOpen = true;
  constructor( public router: Router, public userService: UserService) { }
  ngOnInit(): void {
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onLogOut(): void{
    localStorage.setItem('isLogin', String(false));
    this.userService.getIsLogin();
    this.router.navigate(['home']);
  }
}
