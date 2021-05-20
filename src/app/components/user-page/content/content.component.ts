import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public listImages: string[];
  @ViewChild('listFlower') listFlower: ElementRef<HTMLDivElement>;

  constructor( public userService: UserService) {
  }

  ngOnInit(): void {
    this.getListImages();
  }

  getListImages(): void {
    this.listImages = this.userService.getListImages();
  }
}
