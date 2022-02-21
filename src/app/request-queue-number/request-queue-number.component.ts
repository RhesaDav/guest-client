import { Component, Inject, inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  userId: string[]=[]
  id: any
  data: User = {
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    queueNumber: ''
  }
  

  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getUserDetail(this.route.snapshot.paramMap.get('id'))
  }

  getUserDetail(id): void {
    this.userService.getDetailUser(id).subscribe(data => {
      this.data = data.data
      console.log(this.data)
    })
  }

  onPrint(divName) {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
}
