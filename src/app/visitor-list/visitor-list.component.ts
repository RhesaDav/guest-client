import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User
  id: any

  ngOnInit(): void {
    this.userService.getUserData().subscribe(result => {
      this.user = result
    })
  }


}

