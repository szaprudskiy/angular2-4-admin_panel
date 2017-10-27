import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../shared/services/admin.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.adminService.logout();
  }
}
