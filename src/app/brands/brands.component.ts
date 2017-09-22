import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  providers: [UsersService]
})
export class BrandsComponent {
    users = []

    constructor(private usersService: UsersService) {
      this.users = this.usersService.users
    }

}
